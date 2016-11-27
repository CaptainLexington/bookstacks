// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args32437 = [];
var len__27082__auto___32443 = arguments.length;
var i__27083__auto___32444 = (0);
while(true){
if((i__27083__auto___32444 < len__27082__auto___32443)){
args32437.push((arguments[i__27083__auto___32444]));

var G__32445 = (i__27083__auto___32444 + (1));
i__27083__auto___32444 = G__32445;
continue;
} else {
}
break;
}

var G__32439 = args32437.length;
switch (G__32439) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32437.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32440 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32440 = (function (f,blockable,meta32441){
this.f = f;
this.blockable = blockable;
this.meta32441 = meta32441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32442,meta32441__$1){
var self__ = this;
var _32442__$1 = this;
return (new cljs.core.async.t_cljs$core$async32440(self__.f,self__.blockable,meta32441__$1));
});

cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32442){
var self__ = this;
var _32442__$1 = this;
return self__.meta32441;
});

cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32441","meta32441",831004470,null)], null);
});

cljs.core.async.t_cljs$core$async32440.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32440";

cljs.core.async.t_cljs$core$async32440.cljs$lang$ctorPrWriter = (function (this__26580__auto__,writer__26581__auto__,opt__26582__auto__){
return cljs.core._write.call(null,writer__26581__auto__,"cljs.core.async/t_cljs$core$async32440");
});

cljs.core.async.__GT_t_cljs$core$async32440 = (function cljs$core$async$__GT_t_cljs$core$async32440(f__$1,blockable__$1,meta32441){
return (new cljs.core.async.t_cljs$core$async32440(f__$1,blockable__$1,meta32441));
});

}

return (new cljs.core.async.t_cljs$core$async32440(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var args32449 = [];
var len__27082__auto___32452 = arguments.length;
var i__27083__auto___32453 = (0);
while(true){
if((i__27083__auto___32453 < len__27082__auto___32452)){
args32449.push((arguments[i__27083__auto___32453]));

var G__32454 = (i__27083__auto___32453 + (1));
i__27083__auto___32453 = G__32454;
continue;
} else {
}
break;
}

var G__32451 = args32449.length;
switch (G__32451) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32449.length)].join('')));

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
var args32456 = [];
var len__27082__auto___32459 = arguments.length;
var i__27083__auto___32460 = (0);
while(true){
if((i__27083__auto___32460 < len__27082__auto___32459)){
args32456.push((arguments[i__27083__auto___32460]));

var G__32461 = (i__27083__auto___32460 + (1));
i__27083__auto___32460 = G__32461;
continue;
} else {
}
break;
}

var G__32458 = args32456.length;
switch (G__32458) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32456.length)].join('')));

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
var args32463 = [];
var len__27082__auto___32466 = arguments.length;
var i__27083__auto___32467 = (0);
while(true){
if((i__27083__auto___32467 < len__27082__auto___32466)){
args32463.push((arguments[i__27083__auto___32467]));

var G__32468 = (i__27083__auto___32467 + (1));
i__27083__auto___32467 = G__32468;
continue;
} else {
}
break;
}

var G__32465 = args32463.length;
switch (G__32465) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32463.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32470 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32470);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32470,ret){
return (function (){
return fn1.call(null,val_32470);
});})(val_32470,ret))
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
var args32471 = [];
var len__27082__auto___32474 = arguments.length;
var i__27083__auto___32475 = (0);
while(true){
if((i__27083__auto___32475 < len__27082__auto___32474)){
args32471.push((arguments[i__27083__auto___32475]));

var G__32476 = (i__27083__auto___32475 + (1));
i__27083__auto___32475 = G__32476;
continue;
} else {
}
break;
}

var G__32473 = args32471.length;
switch (G__32473) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32471.length)].join('')));

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
var n__26892__auto___32478 = n;
var x_32479 = (0);
while(true){
if((x_32479 < n__26892__auto___32478)){
(a[x_32479] = (0));

var G__32480 = (x_32479 + (1));
x_32479 = G__32480;
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

var G__32481 = (i + (1));
i = G__32481;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32485 = (function (flag,meta32486){
this.flag = flag;
this.meta32486 = meta32486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32487,meta32486__$1){
var self__ = this;
var _32487__$1 = this;
return (new cljs.core.async.t_cljs$core$async32485(self__.flag,meta32486__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32485.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32487){
var self__ = this;
var _32487__$1 = this;
return self__.meta32486;
});})(flag))
;

cljs.core.async.t_cljs$core$async32485.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32485.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32485.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32485.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32485.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32486","meta32486",-880121618,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32485";

cljs.core.async.t_cljs$core$async32485.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26580__auto__,writer__26581__auto__,opt__26582__auto__){
return cljs.core._write.call(null,writer__26581__auto__,"cljs.core.async/t_cljs$core$async32485");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32485 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32485(flag__$1,meta32486){
return (new cljs.core.async.t_cljs$core$async32485(flag__$1,meta32486));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32485(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32491 = (function (flag,cb,meta32492){
this.flag = flag;
this.cb = cb;
this.meta32492 = meta32492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32493,meta32492__$1){
var self__ = this;
var _32493__$1 = this;
return (new cljs.core.async.t_cljs$core$async32491(self__.flag,self__.cb,meta32492__$1));
});

cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32493){
var self__ = this;
var _32493__$1 = this;
return self__.meta32492;
});

cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32492","meta32492",-268644252,null)], null);
});

cljs.core.async.t_cljs$core$async32491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32491";

cljs.core.async.t_cljs$core$async32491.cljs$lang$ctorPrWriter = (function (this__26580__auto__,writer__26581__auto__,opt__26582__auto__){
return cljs.core._write.call(null,writer__26581__auto__,"cljs.core.async/t_cljs$core$async32491");
});

cljs.core.async.__GT_t_cljs$core$async32491 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32491(flag__$1,cb__$1,meta32492){
return (new cljs.core.async.t_cljs$core$async32491(flag__$1,cb__$1,meta32492));
});

}

return (new cljs.core.async.t_cljs$core$async32491(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32494_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32494_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32495_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32495_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25974__auto__ = wport;
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32496 = (i + (1));
i = G__32496;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25974__auto__ = ret;
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25962__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25962__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25962__auto__;
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
var args__27089__auto__ = [];
var len__27082__auto___32502 = arguments.length;
var i__27083__auto___32503 = (0);
while(true){
if((i__27083__auto___32503 < len__27082__auto___32502)){
args__27089__auto__.push((arguments[i__27083__auto___32503]));

var G__32504 = (i__27083__auto___32503 + (1));
i__27083__auto___32503 = G__32504;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((1) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27090__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32499){
var map__32500 = p__32499;
var map__32500__$1 = ((((!((map__32500 == null)))?((((map__32500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32500):map__32500);
var opts = map__32500__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32497){
var G__32498 = cljs.core.first.call(null,seq32497);
var seq32497__$1 = cljs.core.next.call(null,seq32497);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32498,seq32497__$1);
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
var args32505 = [];
var len__27082__auto___32555 = arguments.length;
var i__27083__auto___32556 = (0);
while(true){
if((i__27083__auto___32556 < len__27082__auto___32555)){
args32505.push((arguments[i__27083__auto___32556]));

var G__32557 = (i__27083__auto___32556 + (1));
i__27083__auto___32556 = G__32557;
continue;
} else {
}
break;
}

var G__32507 = args32505.length;
switch (G__32507) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32505.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28434__auto___32559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto___32559){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto___32559){
return (function (state_32531){
var state_val_32532 = (state_32531[(1)]);
if((state_val_32532 === (7))){
var inst_32527 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32533_32560 = state_32531__$1;
(statearr_32533_32560[(2)] = inst_32527);

(statearr_32533_32560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (1))){
var state_32531__$1 = state_32531;
var statearr_32534_32561 = state_32531__$1;
(statearr_32534_32561[(2)] = null);

(statearr_32534_32561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (4))){
var inst_32510 = (state_32531[(7)]);
var inst_32510__$1 = (state_32531[(2)]);
var inst_32511 = (inst_32510__$1 == null);
var state_32531__$1 = (function (){var statearr_32535 = state_32531;
(statearr_32535[(7)] = inst_32510__$1);

return statearr_32535;
})();
if(cljs.core.truth_(inst_32511)){
var statearr_32536_32562 = state_32531__$1;
(statearr_32536_32562[(1)] = (5));

} else {
var statearr_32537_32563 = state_32531__$1;
(statearr_32537_32563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (13))){
var state_32531__$1 = state_32531;
var statearr_32538_32564 = state_32531__$1;
(statearr_32538_32564[(2)] = null);

(statearr_32538_32564[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (6))){
var inst_32510 = (state_32531[(7)]);
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32531__$1,(11),to,inst_32510);
} else {
if((state_val_32532 === (3))){
var inst_32529 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32531__$1,inst_32529);
} else {
if((state_val_32532 === (12))){
var state_32531__$1 = state_32531;
var statearr_32539_32565 = state_32531__$1;
(statearr_32539_32565[(2)] = null);

(statearr_32539_32565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (2))){
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32531__$1,(4),from);
} else {
if((state_val_32532 === (11))){
var inst_32520 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
if(cljs.core.truth_(inst_32520)){
var statearr_32540_32566 = state_32531__$1;
(statearr_32540_32566[(1)] = (12));

} else {
var statearr_32541_32567 = state_32531__$1;
(statearr_32541_32567[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (9))){
var state_32531__$1 = state_32531;
var statearr_32542_32568 = state_32531__$1;
(statearr_32542_32568[(2)] = null);

(statearr_32542_32568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (5))){
var state_32531__$1 = state_32531;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32543_32569 = state_32531__$1;
(statearr_32543_32569[(1)] = (8));

} else {
var statearr_32544_32570 = state_32531__$1;
(statearr_32544_32570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (14))){
var inst_32525 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32545_32571 = state_32531__$1;
(statearr_32545_32571[(2)] = inst_32525);

(statearr_32545_32571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (10))){
var inst_32517 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32546_32572 = state_32531__$1;
(statearr_32546_32572[(2)] = inst_32517);

(statearr_32546_32572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (8))){
var inst_32514 = cljs.core.async.close_BANG_.call(null,to);
var state_32531__$1 = state_32531;
var statearr_32547_32573 = state_32531__$1;
(statearr_32547_32573[(2)] = inst_32514);

(statearr_32547_32573[(1)] = (10));


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
});})(c__28434__auto___32559))
;
return ((function (switch__28412__auto__,c__28434__auto___32559){
return (function() {
var cljs$core$async$state_machine__28413__auto__ = null;
var cljs$core$async$state_machine__28413__auto____0 = (function (){
var statearr_32551 = [null,null,null,null,null,null,null,null];
(statearr_32551[(0)] = cljs$core$async$state_machine__28413__auto__);

(statearr_32551[(1)] = (1));

return statearr_32551;
});
var cljs$core$async$state_machine__28413__auto____1 = (function (state_32531){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_32531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e32552){if((e32552 instanceof Object)){
var ex__28416__auto__ = e32552;
var statearr_32553_32574 = state_32531;
(statearr_32553_32574[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32575 = state_32531;
state_32531 = G__32575;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$state_machine__28413__auto__ = function(state_32531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28413__auto____1.call(this,state_32531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28413__auto____0;
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28413__auto____1;
return cljs$core$async$state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto___32559))
})();
var state__28436__auto__ = (function (){var statearr_32554 = f__28435__auto__.call(null);
(statearr_32554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___32559);

return statearr_32554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto___32559))
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
return (function (p__32763){
var vec__32764 = p__32763;
var v = cljs.core.nth.call(null,vec__32764,(0),null);
var p = cljs.core.nth.call(null,vec__32764,(1),null);
var job = vec__32764;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28434__auto___32950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto___32950,res,vec__32764,v,p,job,jobs,results){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto___32950,res,vec__32764,v,p,job,jobs,results){
return (function (state_32771){
var state_val_32772 = (state_32771[(1)]);
if((state_val_32772 === (1))){
var state_32771__$1 = state_32771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32771__$1,(2),res,v);
} else {
if((state_val_32772 === (2))){
var inst_32768 = (state_32771[(2)]);
var inst_32769 = cljs.core.async.close_BANG_.call(null,res);
var state_32771__$1 = (function (){var statearr_32773 = state_32771;
(statearr_32773[(7)] = inst_32768);

return statearr_32773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32771__$1,inst_32769);
} else {
return null;
}
}
});})(c__28434__auto___32950,res,vec__32764,v,p,job,jobs,results))
;
return ((function (switch__28412__auto__,c__28434__auto___32950,res,vec__32764,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____0 = (function (){
var statearr_32777 = [null,null,null,null,null,null,null,null];
(statearr_32777[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__);

(statearr_32777[(1)] = (1));

return statearr_32777;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____1 = (function (state_32771){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_32771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e32778){if((e32778 instanceof Object)){
var ex__28416__auto__ = e32778;
var statearr_32779_32951 = state_32771;
(statearr_32779_32951[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32952 = state_32771;
state_32771 = G__32952;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__ = function(state_32771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____1.call(this,state_32771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto___32950,res,vec__32764,v,p,job,jobs,results))
})();
var state__28436__auto__ = (function (){var statearr_32780 = f__28435__auto__.call(null);
(statearr_32780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___32950);

return statearr_32780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto___32950,res,vec__32764,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32781){
var vec__32782 = p__32781;
var v = cljs.core.nth.call(null,vec__32782,(0),null);
var p = cljs.core.nth.call(null,vec__32782,(1),null);
var job = vec__32782;
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
var n__26892__auto___32953 = n;
var __32954 = (0);
while(true){
if((__32954 < n__26892__auto___32953)){
var G__32785_32955 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32785_32955) {
case "compute":
var c__28434__auto___32957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32954,c__28434__auto___32957,G__32785_32955,n__26892__auto___32953,jobs,results,process,async){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (__32954,c__28434__auto___32957,G__32785_32955,n__26892__auto___32953,jobs,results,process,async){
return (function (state_32798){
var state_val_32799 = (state_32798[(1)]);
if((state_val_32799 === (1))){
var state_32798__$1 = state_32798;
var statearr_32800_32958 = state_32798__$1;
(statearr_32800_32958[(2)] = null);

(statearr_32800_32958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32799 === (2))){
var state_32798__$1 = state_32798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32798__$1,(4),jobs);
} else {
if((state_val_32799 === (3))){
var inst_32796 = (state_32798[(2)]);
var state_32798__$1 = state_32798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32798__$1,inst_32796);
} else {
if((state_val_32799 === (4))){
var inst_32788 = (state_32798[(2)]);
var inst_32789 = process.call(null,inst_32788);
var state_32798__$1 = state_32798;
if(cljs.core.truth_(inst_32789)){
var statearr_32801_32959 = state_32798__$1;
(statearr_32801_32959[(1)] = (5));

} else {
var statearr_32802_32960 = state_32798__$1;
(statearr_32802_32960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32799 === (5))){
var state_32798__$1 = state_32798;
var statearr_32803_32961 = state_32798__$1;
(statearr_32803_32961[(2)] = null);

(statearr_32803_32961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32799 === (6))){
var state_32798__$1 = state_32798;
var statearr_32804_32962 = state_32798__$1;
(statearr_32804_32962[(2)] = null);

(statearr_32804_32962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32799 === (7))){
var inst_32794 = (state_32798[(2)]);
var state_32798__$1 = state_32798;
var statearr_32805_32963 = state_32798__$1;
(statearr_32805_32963[(2)] = inst_32794);

(statearr_32805_32963[(1)] = (3));


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
});})(__32954,c__28434__auto___32957,G__32785_32955,n__26892__auto___32953,jobs,results,process,async))
;
return ((function (__32954,switch__28412__auto__,c__28434__auto___32957,G__32785_32955,n__26892__auto___32953,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____0 = (function (){
var statearr_32809 = [null,null,null,null,null,null,null];
(statearr_32809[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__);

(statearr_32809[(1)] = (1));

return statearr_32809;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____1 = (function (state_32798){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_32798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e32810){if((e32810 instanceof Object)){
var ex__28416__auto__ = e32810;
var statearr_32811_32964 = state_32798;
(statearr_32811_32964[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32965 = state_32798;
state_32798 = G__32965;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__ = function(state_32798){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____1.call(this,state_32798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__;
})()
;})(__32954,switch__28412__auto__,c__28434__auto___32957,G__32785_32955,n__26892__auto___32953,jobs,results,process,async))
})();
var state__28436__auto__ = (function (){var statearr_32812 = f__28435__auto__.call(null);
(statearr_32812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___32957);

return statearr_32812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(__32954,c__28434__auto___32957,G__32785_32955,n__26892__auto___32953,jobs,results,process,async))
);


break;
case "async":
var c__28434__auto___32966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32954,c__28434__auto___32966,G__32785_32955,n__26892__auto___32953,jobs,results,process,async){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (__32954,c__28434__auto___32966,G__32785_32955,n__26892__auto___32953,jobs,results,process,async){
return (function (state_32825){
var state_val_32826 = (state_32825[(1)]);
if((state_val_32826 === (1))){
var state_32825__$1 = state_32825;
var statearr_32827_32967 = state_32825__$1;
(statearr_32827_32967[(2)] = null);

(statearr_32827_32967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (2))){
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32825__$1,(4),jobs);
} else {
if((state_val_32826 === (3))){
var inst_32823 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32825__$1,inst_32823);
} else {
if((state_val_32826 === (4))){
var inst_32815 = (state_32825[(2)]);
var inst_32816 = async.call(null,inst_32815);
var state_32825__$1 = state_32825;
if(cljs.core.truth_(inst_32816)){
var statearr_32828_32968 = state_32825__$1;
(statearr_32828_32968[(1)] = (5));

} else {
var statearr_32829_32969 = state_32825__$1;
(statearr_32829_32969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (5))){
var state_32825__$1 = state_32825;
var statearr_32830_32970 = state_32825__$1;
(statearr_32830_32970[(2)] = null);

(statearr_32830_32970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (6))){
var state_32825__$1 = state_32825;
var statearr_32831_32971 = state_32825__$1;
(statearr_32831_32971[(2)] = null);

(statearr_32831_32971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (7))){
var inst_32821 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
var statearr_32832_32972 = state_32825__$1;
(statearr_32832_32972[(2)] = inst_32821);

(statearr_32832_32972[(1)] = (3));


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
});})(__32954,c__28434__auto___32966,G__32785_32955,n__26892__auto___32953,jobs,results,process,async))
;
return ((function (__32954,switch__28412__auto__,c__28434__auto___32966,G__32785_32955,n__26892__auto___32953,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____0 = (function (){
var statearr_32836 = [null,null,null,null,null,null,null];
(statearr_32836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__);

(statearr_32836[(1)] = (1));

return statearr_32836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____1 = (function (state_32825){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_32825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e32837){if((e32837 instanceof Object)){
var ex__28416__auto__ = e32837;
var statearr_32838_32973 = state_32825;
(statearr_32838_32973[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32974 = state_32825;
state_32825 = G__32974;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__ = function(state_32825){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____1.call(this,state_32825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__;
})()
;})(__32954,switch__28412__auto__,c__28434__auto___32966,G__32785_32955,n__26892__auto___32953,jobs,results,process,async))
})();
var state__28436__auto__ = (function (){var statearr_32839 = f__28435__auto__.call(null);
(statearr_32839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___32966);

return statearr_32839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(__32954,c__28434__auto___32966,G__32785_32955,n__26892__auto___32953,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32975 = (__32954 + (1));
__32954 = G__32975;
continue;
} else {
}
break;
}

var c__28434__auto___32976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto___32976,jobs,results,process,async){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto___32976,jobs,results,process,async){
return (function (state_32861){
var state_val_32862 = (state_32861[(1)]);
if((state_val_32862 === (1))){
var state_32861__$1 = state_32861;
var statearr_32863_32977 = state_32861__$1;
(statearr_32863_32977[(2)] = null);

(statearr_32863_32977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (2))){
var state_32861__$1 = state_32861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32861__$1,(4),from);
} else {
if((state_val_32862 === (3))){
var inst_32859 = (state_32861[(2)]);
var state_32861__$1 = state_32861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32861__$1,inst_32859);
} else {
if((state_val_32862 === (4))){
var inst_32842 = (state_32861[(7)]);
var inst_32842__$1 = (state_32861[(2)]);
var inst_32843 = (inst_32842__$1 == null);
var state_32861__$1 = (function (){var statearr_32864 = state_32861;
(statearr_32864[(7)] = inst_32842__$1);

return statearr_32864;
})();
if(cljs.core.truth_(inst_32843)){
var statearr_32865_32978 = state_32861__$1;
(statearr_32865_32978[(1)] = (5));

} else {
var statearr_32866_32979 = state_32861__$1;
(statearr_32866_32979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (5))){
var inst_32845 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32861__$1 = state_32861;
var statearr_32867_32980 = state_32861__$1;
(statearr_32867_32980[(2)] = inst_32845);

(statearr_32867_32980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (6))){
var inst_32842 = (state_32861[(7)]);
var inst_32847 = (state_32861[(8)]);
var inst_32847__$1 = cljs.core.async.chan.call(null,(1));
var inst_32848 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32849 = [inst_32842,inst_32847__$1];
var inst_32850 = (new cljs.core.PersistentVector(null,2,(5),inst_32848,inst_32849,null));
var state_32861__$1 = (function (){var statearr_32868 = state_32861;
(statearr_32868[(8)] = inst_32847__$1);

return statearr_32868;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32861__$1,(8),jobs,inst_32850);
} else {
if((state_val_32862 === (7))){
var inst_32857 = (state_32861[(2)]);
var state_32861__$1 = state_32861;
var statearr_32869_32981 = state_32861__$1;
(statearr_32869_32981[(2)] = inst_32857);

(statearr_32869_32981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (8))){
var inst_32847 = (state_32861[(8)]);
var inst_32852 = (state_32861[(2)]);
var state_32861__$1 = (function (){var statearr_32870 = state_32861;
(statearr_32870[(9)] = inst_32852);

return statearr_32870;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32861__$1,(9),results,inst_32847);
} else {
if((state_val_32862 === (9))){
var inst_32854 = (state_32861[(2)]);
var state_32861__$1 = (function (){var statearr_32871 = state_32861;
(statearr_32871[(10)] = inst_32854);

return statearr_32871;
})();
var statearr_32872_32982 = state_32861__$1;
(statearr_32872_32982[(2)] = null);

(statearr_32872_32982[(1)] = (2));


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
});})(c__28434__auto___32976,jobs,results,process,async))
;
return ((function (switch__28412__auto__,c__28434__auto___32976,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____0 = (function (){
var statearr_32876 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__);

(statearr_32876[(1)] = (1));

return statearr_32876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____1 = (function (state_32861){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_32861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e32877){if((e32877 instanceof Object)){
var ex__28416__auto__ = e32877;
var statearr_32878_32983 = state_32861;
(statearr_32878_32983[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32984 = state_32861;
state_32861 = G__32984;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__ = function(state_32861){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____1.call(this,state_32861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto___32976,jobs,results,process,async))
})();
var state__28436__auto__ = (function (){var statearr_32879 = f__28435__auto__.call(null);
(statearr_32879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___32976);

return statearr_32879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto___32976,jobs,results,process,async))
);


var c__28434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto__,jobs,results,process,async){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto__,jobs,results,process,async){
return (function (state_32917){
var state_val_32918 = (state_32917[(1)]);
if((state_val_32918 === (7))){
var inst_32913 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32919_32985 = state_32917__$1;
(statearr_32919_32985[(2)] = inst_32913);

(statearr_32919_32985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (20))){
var state_32917__$1 = state_32917;
var statearr_32920_32986 = state_32917__$1;
(statearr_32920_32986[(2)] = null);

(statearr_32920_32986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (1))){
var state_32917__$1 = state_32917;
var statearr_32921_32987 = state_32917__$1;
(statearr_32921_32987[(2)] = null);

(statearr_32921_32987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (4))){
var inst_32882 = (state_32917[(7)]);
var inst_32882__$1 = (state_32917[(2)]);
var inst_32883 = (inst_32882__$1 == null);
var state_32917__$1 = (function (){var statearr_32922 = state_32917;
(statearr_32922[(7)] = inst_32882__$1);

return statearr_32922;
})();
if(cljs.core.truth_(inst_32883)){
var statearr_32923_32988 = state_32917__$1;
(statearr_32923_32988[(1)] = (5));

} else {
var statearr_32924_32989 = state_32917__$1;
(statearr_32924_32989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (15))){
var inst_32895 = (state_32917[(8)]);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32917__$1,(18),to,inst_32895);
} else {
if((state_val_32918 === (21))){
var inst_32908 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32925_32990 = state_32917__$1;
(statearr_32925_32990[(2)] = inst_32908);

(statearr_32925_32990[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (13))){
var inst_32910 = (state_32917[(2)]);
var state_32917__$1 = (function (){var statearr_32926 = state_32917;
(statearr_32926[(9)] = inst_32910);

return statearr_32926;
})();
var statearr_32927_32991 = state_32917__$1;
(statearr_32927_32991[(2)] = null);

(statearr_32927_32991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (6))){
var inst_32882 = (state_32917[(7)]);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32917__$1,(11),inst_32882);
} else {
if((state_val_32918 === (17))){
var inst_32903 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
if(cljs.core.truth_(inst_32903)){
var statearr_32928_32992 = state_32917__$1;
(statearr_32928_32992[(1)] = (19));

} else {
var statearr_32929_32993 = state_32917__$1;
(statearr_32929_32993[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (3))){
var inst_32915 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32917__$1,inst_32915);
} else {
if((state_val_32918 === (12))){
var inst_32892 = (state_32917[(10)]);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32917__$1,(14),inst_32892);
} else {
if((state_val_32918 === (2))){
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32917__$1,(4),results);
} else {
if((state_val_32918 === (19))){
var state_32917__$1 = state_32917;
var statearr_32930_32994 = state_32917__$1;
(statearr_32930_32994[(2)] = null);

(statearr_32930_32994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (11))){
var inst_32892 = (state_32917[(2)]);
var state_32917__$1 = (function (){var statearr_32931 = state_32917;
(statearr_32931[(10)] = inst_32892);

return statearr_32931;
})();
var statearr_32932_32995 = state_32917__$1;
(statearr_32932_32995[(2)] = null);

(statearr_32932_32995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (9))){
var state_32917__$1 = state_32917;
var statearr_32933_32996 = state_32917__$1;
(statearr_32933_32996[(2)] = null);

(statearr_32933_32996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (5))){
var state_32917__$1 = state_32917;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32934_32997 = state_32917__$1;
(statearr_32934_32997[(1)] = (8));

} else {
var statearr_32935_32998 = state_32917__$1;
(statearr_32935_32998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (14))){
var inst_32897 = (state_32917[(11)]);
var inst_32895 = (state_32917[(8)]);
var inst_32895__$1 = (state_32917[(2)]);
var inst_32896 = (inst_32895__$1 == null);
var inst_32897__$1 = cljs.core.not.call(null,inst_32896);
var state_32917__$1 = (function (){var statearr_32936 = state_32917;
(statearr_32936[(11)] = inst_32897__$1);

(statearr_32936[(8)] = inst_32895__$1);

return statearr_32936;
})();
if(inst_32897__$1){
var statearr_32937_32999 = state_32917__$1;
(statearr_32937_32999[(1)] = (15));

} else {
var statearr_32938_33000 = state_32917__$1;
(statearr_32938_33000[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (16))){
var inst_32897 = (state_32917[(11)]);
var state_32917__$1 = state_32917;
var statearr_32939_33001 = state_32917__$1;
(statearr_32939_33001[(2)] = inst_32897);

(statearr_32939_33001[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (10))){
var inst_32889 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32940_33002 = state_32917__$1;
(statearr_32940_33002[(2)] = inst_32889);

(statearr_32940_33002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (18))){
var inst_32900 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32941_33003 = state_32917__$1;
(statearr_32941_33003[(2)] = inst_32900);

(statearr_32941_33003[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (8))){
var inst_32886 = cljs.core.async.close_BANG_.call(null,to);
var state_32917__$1 = state_32917;
var statearr_32942_33004 = state_32917__$1;
(statearr_32942_33004[(2)] = inst_32886);

(statearr_32942_33004[(1)] = (10));


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
});})(c__28434__auto__,jobs,results,process,async))
;
return ((function (switch__28412__auto__,c__28434__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____0 = (function (){
var statearr_32946 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32946[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__);

(statearr_32946[(1)] = (1));

return statearr_32946;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____1 = (function (state_32917){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_32917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e32947){if((e32947 instanceof Object)){
var ex__28416__auto__ = e32947;
var statearr_32948_33005 = state_32917;
(statearr_32948_33005[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33006 = state_32917;
state_32917 = G__33006;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__ = function(state_32917){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____1.call(this,state_32917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28413__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto__,jobs,results,process,async))
})();
var state__28436__auto__ = (function (){var statearr_32949 = f__28435__auto__.call(null);
(statearr_32949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto__);

return statearr_32949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto__,jobs,results,process,async))
);

return c__28434__auto__;
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
var args33007 = [];
var len__27082__auto___33010 = arguments.length;
var i__27083__auto___33011 = (0);
while(true){
if((i__27083__auto___33011 < len__27082__auto___33010)){
args33007.push((arguments[i__27083__auto___33011]));

var G__33012 = (i__27083__auto___33011 + (1));
i__27083__auto___33011 = G__33012;
continue;
} else {
}
break;
}

var G__33009 = args33007.length;
switch (G__33009) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33007.length)].join('')));

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
var args33014 = [];
var len__27082__auto___33017 = arguments.length;
var i__27083__auto___33018 = (0);
while(true){
if((i__27083__auto___33018 < len__27082__auto___33017)){
args33014.push((arguments[i__27083__auto___33018]));

var G__33019 = (i__27083__auto___33018 + (1));
i__27083__auto___33018 = G__33019;
continue;
} else {
}
break;
}

var G__33016 = args33014.length;
switch (G__33016) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33014.length)].join('')));

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
var args33021 = [];
var len__27082__auto___33074 = arguments.length;
var i__27083__auto___33075 = (0);
while(true){
if((i__27083__auto___33075 < len__27082__auto___33074)){
args33021.push((arguments[i__27083__auto___33075]));

var G__33076 = (i__27083__auto___33075 + (1));
i__27083__auto___33075 = G__33076;
continue;
} else {
}
break;
}

var G__33023 = args33021.length;
switch (G__33023) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33021.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28434__auto___33078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto___33078,tc,fc){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto___33078,tc,fc){
return (function (state_33049){
var state_val_33050 = (state_33049[(1)]);
if((state_val_33050 === (7))){
var inst_33045 = (state_33049[(2)]);
var state_33049__$1 = state_33049;
var statearr_33051_33079 = state_33049__$1;
(statearr_33051_33079[(2)] = inst_33045);

(statearr_33051_33079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (1))){
var state_33049__$1 = state_33049;
var statearr_33052_33080 = state_33049__$1;
(statearr_33052_33080[(2)] = null);

(statearr_33052_33080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (4))){
var inst_33026 = (state_33049[(7)]);
var inst_33026__$1 = (state_33049[(2)]);
var inst_33027 = (inst_33026__$1 == null);
var state_33049__$1 = (function (){var statearr_33053 = state_33049;
(statearr_33053[(7)] = inst_33026__$1);

return statearr_33053;
})();
if(cljs.core.truth_(inst_33027)){
var statearr_33054_33081 = state_33049__$1;
(statearr_33054_33081[(1)] = (5));

} else {
var statearr_33055_33082 = state_33049__$1;
(statearr_33055_33082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (13))){
var state_33049__$1 = state_33049;
var statearr_33056_33083 = state_33049__$1;
(statearr_33056_33083[(2)] = null);

(statearr_33056_33083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (6))){
var inst_33026 = (state_33049[(7)]);
var inst_33032 = p.call(null,inst_33026);
var state_33049__$1 = state_33049;
if(cljs.core.truth_(inst_33032)){
var statearr_33057_33084 = state_33049__$1;
(statearr_33057_33084[(1)] = (9));

} else {
var statearr_33058_33085 = state_33049__$1;
(statearr_33058_33085[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (3))){
var inst_33047 = (state_33049[(2)]);
var state_33049__$1 = state_33049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33049__$1,inst_33047);
} else {
if((state_val_33050 === (12))){
var state_33049__$1 = state_33049;
var statearr_33059_33086 = state_33049__$1;
(statearr_33059_33086[(2)] = null);

(statearr_33059_33086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (2))){
var state_33049__$1 = state_33049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33049__$1,(4),ch);
} else {
if((state_val_33050 === (11))){
var inst_33026 = (state_33049[(7)]);
var inst_33036 = (state_33049[(2)]);
var state_33049__$1 = state_33049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33049__$1,(8),inst_33036,inst_33026);
} else {
if((state_val_33050 === (9))){
var state_33049__$1 = state_33049;
var statearr_33060_33087 = state_33049__$1;
(statearr_33060_33087[(2)] = tc);

(statearr_33060_33087[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (5))){
var inst_33029 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33030 = cljs.core.async.close_BANG_.call(null,fc);
var state_33049__$1 = (function (){var statearr_33061 = state_33049;
(statearr_33061[(8)] = inst_33029);

return statearr_33061;
})();
var statearr_33062_33088 = state_33049__$1;
(statearr_33062_33088[(2)] = inst_33030);

(statearr_33062_33088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (14))){
var inst_33043 = (state_33049[(2)]);
var state_33049__$1 = state_33049;
var statearr_33063_33089 = state_33049__$1;
(statearr_33063_33089[(2)] = inst_33043);

(statearr_33063_33089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (10))){
var state_33049__$1 = state_33049;
var statearr_33064_33090 = state_33049__$1;
(statearr_33064_33090[(2)] = fc);

(statearr_33064_33090[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (8))){
var inst_33038 = (state_33049[(2)]);
var state_33049__$1 = state_33049;
if(cljs.core.truth_(inst_33038)){
var statearr_33065_33091 = state_33049__$1;
(statearr_33065_33091[(1)] = (12));

} else {
var statearr_33066_33092 = state_33049__$1;
(statearr_33066_33092[(1)] = (13));

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
});})(c__28434__auto___33078,tc,fc))
;
return ((function (switch__28412__auto__,c__28434__auto___33078,tc,fc){
return (function() {
var cljs$core$async$state_machine__28413__auto__ = null;
var cljs$core$async$state_machine__28413__auto____0 = (function (){
var statearr_33070 = [null,null,null,null,null,null,null,null,null];
(statearr_33070[(0)] = cljs$core$async$state_machine__28413__auto__);

(statearr_33070[(1)] = (1));

return statearr_33070;
});
var cljs$core$async$state_machine__28413__auto____1 = (function (state_33049){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_33049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e33071){if((e33071 instanceof Object)){
var ex__28416__auto__ = e33071;
var statearr_33072_33093 = state_33049;
(statearr_33072_33093[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33094 = state_33049;
state_33049 = G__33094;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$state_machine__28413__auto__ = function(state_33049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28413__auto____1.call(this,state_33049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28413__auto____0;
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28413__auto____1;
return cljs$core$async$state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto___33078,tc,fc))
})();
var state__28436__auto__ = (function (){var statearr_33073 = f__28435__auto__.call(null);
(statearr_33073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___33078);

return statearr_33073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto___33078,tc,fc))
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
var c__28434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto__){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto__){
return (function (state_33158){
var state_val_33159 = (state_33158[(1)]);
if((state_val_33159 === (7))){
var inst_33154 = (state_33158[(2)]);
var state_33158__$1 = state_33158;
var statearr_33160_33181 = state_33158__$1;
(statearr_33160_33181[(2)] = inst_33154);

(statearr_33160_33181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33159 === (1))){
var inst_33138 = init;
var state_33158__$1 = (function (){var statearr_33161 = state_33158;
(statearr_33161[(7)] = inst_33138);

return statearr_33161;
})();
var statearr_33162_33182 = state_33158__$1;
(statearr_33162_33182[(2)] = null);

(statearr_33162_33182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33159 === (4))){
var inst_33141 = (state_33158[(8)]);
var inst_33141__$1 = (state_33158[(2)]);
var inst_33142 = (inst_33141__$1 == null);
var state_33158__$1 = (function (){var statearr_33163 = state_33158;
(statearr_33163[(8)] = inst_33141__$1);

return statearr_33163;
})();
if(cljs.core.truth_(inst_33142)){
var statearr_33164_33183 = state_33158__$1;
(statearr_33164_33183[(1)] = (5));

} else {
var statearr_33165_33184 = state_33158__$1;
(statearr_33165_33184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33159 === (6))){
var inst_33141 = (state_33158[(8)]);
var inst_33145 = (state_33158[(9)]);
var inst_33138 = (state_33158[(7)]);
var inst_33145__$1 = f.call(null,inst_33138,inst_33141);
var inst_33146 = cljs.core.reduced_QMARK_.call(null,inst_33145__$1);
var state_33158__$1 = (function (){var statearr_33166 = state_33158;
(statearr_33166[(9)] = inst_33145__$1);

return statearr_33166;
})();
if(inst_33146){
var statearr_33167_33185 = state_33158__$1;
(statearr_33167_33185[(1)] = (8));

} else {
var statearr_33168_33186 = state_33158__$1;
(statearr_33168_33186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33159 === (3))){
var inst_33156 = (state_33158[(2)]);
var state_33158__$1 = state_33158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33158__$1,inst_33156);
} else {
if((state_val_33159 === (2))){
var state_33158__$1 = state_33158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33158__$1,(4),ch);
} else {
if((state_val_33159 === (9))){
var inst_33145 = (state_33158[(9)]);
var inst_33138 = inst_33145;
var state_33158__$1 = (function (){var statearr_33169 = state_33158;
(statearr_33169[(7)] = inst_33138);

return statearr_33169;
})();
var statearr_33170_33187 = state_33158__$1;
(statearr_33170_33187[(2)] = null);

(statearr_33170_33187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33159 === (5))){
var inst_33138 = (state_33158[(7)]);
var state_33158__$1 = state_33158;
var statearr_33171_33188 = state_33158__$1;
(statearr_33171_33188[(2)] = inst_33138);

(statearr_33171_33188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33159 === (10))){
var inst_33152 = (state_33158[(2)]);
var state_33158__$1 = state_33158;
var statearr_33172_33189 = state_33158__$1;
(statearr_33172_33189[(2)] = inst_33152);

(statearr_33172_33189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33159 === (8))){
var inst_33145 = (state_33158[(9)]);
var inst_33148 = cljs.core.deref.call(null,inst_33145);
var state_33158__$1 = state_33158;
var statearr_33173_33190 = state_33158__$1;
(statearr_33173_33190[(2)] = inst_33148);

(statearr_33173_33190[(1)] = (10));


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
});})(c__28434__auto__))
;
return ((function (switch__28412__auto__,c__28434__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28413__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28413__auto____0 = (function (){
var statearr_33177 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33177[(0)] = cljs$core$async$reduce_$_state_machine__28413__auto__);

(statearr_33177[(1)] = (1));

return statearr_33177;
});
var cljs$core$async$reduce_$_state_machine__28413__auto____1 = (function (state_33158){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_33158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e33178){if((e33178 instanceof Object)){
var ex__28416__auto__ = e33178;
var statearr_33179_33191 = state_33158;
(statearr_33179_33191[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33192 = state_33158;
state_33158 = G__33192;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28413__auto__ = function(state_33158){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28413__auto____1.call(this,state_33158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28413__auto____0;
cljs$core$async$reduce_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28413__auto____1;
return cljs$core$async$reduce_$_state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto__))
})();
var state__28436__auto__ = (function (){var statearr_33180 = f__28435__auto__.call(null);
(statearr_33180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto__);

return statearr_33180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto__))
);

return c__28434__auto__;
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
var args33193 = [];
var len__27082__auto___33245 = arguments.length;
var i__27083__auto___33246 = (0);
while(true){
if((i__27083__auto___33246 < len__27082__auto___33245)){
args33193.push((arguments[i__27083__auto___33246]));

var G__33247 = (i__27083__auto___33246 + (1));
i__27083__auto___33246 = G__33247;
continue;
} else {
}
break;
}

var G__33195 = args33193.length;
switch (G__33195) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33193.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto__){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto__){
return (function (state_33220){
var state_val_33221 = (state_33220[(1)]);
if((state_val_33221 === (7))){
var inst_33202 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33222_33249 = state_33220__$1;
(statearr_33222_33249[(2)] = inst_33202);

(statearr_33222_33249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (1))){
var inst_33196 = cljs.core.seq.call(null,coll);
var inst_33197 = inst_33196;
var state_33220__$1 = (function (){var statearr_33223 = state_33220;
(statearr_33223[(7)] = inst_33197);

return statearr_33223;
})();
var statearr_33224_33250 = state_33220__$1;
(statearr_33224_33250[(2)] = null);

(statearr_33224_33250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (4))){
var inst_33197 = (state_33220[(7)]);
var inst_33200 = cljs.core.first.call(null,inst_33197);
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33220__$1,(7),ch,inst_33200);
} else {
if((state_val_33221 === (13))){
var inst_33214 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33225_33251 = state_33220__$1;
(statearr_33225_33251[(2)] = inst_33214);

(statearr_33225_33251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (6))){
var inst_33205 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
if(cljs.core.truth_(inst_33205)){
var statearr_33226_33252 = state_33220__$1;
(statearr_33226_33252[(1)] = (8));

} else {
var statearr_33227_33253 = state_33220__$1;
(statearr_33227_33253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (3))){
var inst_33218 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33220__$1,inst_33218);
} else {
if((state_val_33221 === (12))){
var state_33220__$1 = state_33220;
var statearr_33228_33254 = state_33220__$1;
(statearr_33228_33254[(2)] = null);

(statearr_33228_33254[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (2))){
var inst_33197 = (state_33220[(7)]);
var state_33220__$1 = state_33220;
if(cljs.core.truth_(inst_33197)){
var statearr_33229_33255 = state_33220__$1;
(statearr_33229_33255[(1)] = (4));

} else {
var statearr_33230_33256 = state_33220__$1;
(statearr_33230_33256[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (11))){
var inst_33211 = cljs.core.async.close_BANG_.call(null,ch);
var state_33220__$1 = state_33220;
var statearr_33231_33257 = state_33220__$1;
(statearr_33231_33257[(2)] = inst_33211);

(statearr_33231_33257[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (9))){
var state_33220__$1 = state_33220;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33232_33258 = state_33220__$1;
(statearr_33232_33258[(1)] = (11));

} else {
var statearr_33233_33259 = state_33220__$1;
(statearr_33233_33259[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (5))){
var inst_33197 = (state_33220[(7)]);
var state_33220__$1 = state_33220;
var statearr_33234_33260 = state_33220__$1;
(statearr_33234_33260[(2)] = inst_33197);

(statearr_33234_33260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (10))){
var inst_33216 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33235_33261 = state_33220__$1;
(statearr_33235_33261[(2)] = inst_33216);

(statearr_33235_33261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (8))){
var inst_33197 = (state_33220[(7)]);
var inst_33207 = cljs.core.next.call(null,inst_33197);
var inst_33197__$1 = inst_33207;
var state_33220__$1 = (function (){var statearr_33236 = state_33220;
(statearr_33236[(7)] = inst_33197__$1);

return statearr_33236;
})();
var statearr_33237_33262 = state_33220__$1;
(statearr_33237_33262[(2)] = null);

(statearr_33237_33262[(1)] = (2));


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
});})(c__28434__auto__))
;
return ((function (switch__28412__auto__,c__28434__auto__){
return (function() {
var cljs$core$async$state_machine__28413__auto__ = null;
var cljs$core$async$state_machine__28413__auto____0 = (function (){
var statearr_33241 = [null,null,null,null,null,null,null,null];
(statearr_33241[(0)] = cljs$core$async$state_machine__28413__auto__);

(statearr_33241[(1)] = (1));

return statearr_33241;
});
var cljs$core$async$state_machine__28413__auto____1 = (function (state_33220){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_33220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e33242){if((e33242 instanceof Object)){
var ex__28416__auto__ = e33242;
var statearr_33243_33263 = state_33220;
(statearr_33243_33263[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33264 = state_33220;
state_33220 = G__33264;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$state_machine__28413__auto__ = function(state_33220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28413__auto____1.call(this,state_33220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28413__auto____0;
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28413__auto____1;
return cljs$core$async$state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto__))
})();
var state__28436__auto__ = (function (){var statearr_33244 = f__28435__auto__.call(null);
(statearr_33244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto__);

return statearr_33244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto__))
);

return c__28434__auto__;
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
var x__26637__auto__ = (((_ == null))?null:_);
var m__26638__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,_);
} else {
var m__26638__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,_);
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
var x__26637__auto__ = (((m == null))?null:m);
var m__26638__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26638__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__26637__auto__ = (((m == null))?null:m);
var m__26638__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,m,ch);
} else {
var m__26638__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,m,ch);
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
var x__26637__auto__ = (((m == null))?null:m);
var m__26638__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,m);
} else {
var m__26638__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async33490 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33490 = (function (ch,cs,meta33491){
this.ch = ch;
this.cs = cs;
this.meta33491 = meta33491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33492,meta33491__$1){
var self__ = this;
var _33492__$1 = this;
return (new cljs.core.async.t_cljs$core$async33490(self__.ch,self__.cs,meta33491__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33492){
var self__ = this;
var _33492__$1 = this;
return self__.meta33491;
});})(cs))
;

cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33490.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33491","meta33491",83284319,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33490";

cljs.core.async.t_cljs$core$async33490.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26580__auto__,writer__26581__auto__,opt__26582__auto__){
return cljs.core._write.call(null,writer__26581__auto__,"cljs.core.async/t_cljs$core$async33490");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33490 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33490(ch__$1,cs__$1,meta33491){
return (new cljs.core.async.t_cljs$core$async33490(ch__$1,cs__$1,meta33491));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33490(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28434__auto___33715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto___33715,cs,m,dchan,dctr,done){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto___33715,cs,m,dchan,dctr,done){
return (function (state_33627){
var state_val_33628 = (state_33627[(1)]);
if((state_val_33628 === (7))){
var inst_33623 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
var statearr_33629_33716 = state_33627__$1;
(statearr_33629_33716[(2)] = inst_33623);

(statearr_33629_33716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (20))){
var inst_33526 = (state_33627[(7)]);
var inst_33538 = cljs.core.first.call(null,inst_33526);
var inst_33539 = cljs.core.nth.call(null,inst_33538,(0),null);
var inst_33540 = cljs.core.nth.call(null,inst_33538,(1),null);
var state_33627__$1 = (function (){var statearr_33630 = state_33627;
(statearr_33630[(8)] = inst_33539);

return statearr_33630;
})();
if(cljs.core.truth_(inst_33540)){
var statearr_33631_33717 = state_33627__$1;
(statearr_33631_33717[(1)] = (22));

} else {
var statearr_33632_33718 = state_33627__$1;
(statearr_33632_33718[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (27))){
var inst_33570 = (state_33627[(9)]);
var inst_33495 = (state_33627[(10)]);
var inst_33575 = (state_33627[(11)]);
var inst_33568 = (state_33627[(12)]);
var inst_33575__$1 = cljs.core._nth.call(null,inst_33568,inst_33570);
var inst_33576 = cljs.core.async.put_BANG_.call(null,inst_33575__$1,inst_33495,done);
var state_33627__$1 = (function (){var statearr_33633 = state_33627;
(statearr_33633[(11)] = inst_33575__$1);

return statearr_33633;
})();
if(cljs.core.truth_(inst_33576)){
var statearr_33634_33719 = state_33627__$1;
(statearr_33634_33719[(1)] = (30));

} else {
var statearr_33635_33720 = state_33627__$1;
(statearr_33635_33720[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (1))){
var state_33627__$1 = state_33627;
var statearr_33636_33721 = state_33627__$1;
(statearr_33636_33721[(2)] = null);

(statearr_33636_33721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (24))){
var inst_33526 = (state_33627[(7)]);
var inst_33545 = (state_33627[(2)]);
var inst_33546 = cljs.core.next.call(null,inst_33526);
var inst_33504 = inst_33546;
var inst_33505 = null;
var inst_33506 = (0);
var inst_33507 = (0);
var state_33627__$1 = (function (){var statearr_33637 = state_33627;
(statearr_33637[(13)] = inst_33507);

(statearr_33637[(14)] = inst_33545);

(statearr_33637[(15)] = inst_33506);

(statearr_33637[(16)] = inst_33505);

(statearr_33637[(17)] = inst_33504);

return statearr_33637;
})();
var statearr_33638_33722 = state_33627__$1;
(statearr_33638_33722[(2)] = null);

(statearr_33638_33722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (39))){
var state_33627__$1 = state_33627;
var statearr_33642_33723 = state_33627__$1;
(statearr_33642_33723[(2)] = null);

(statearr_33642_33723[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (4))){
var inst_33495 = (state_33627[(10)]);
var inst_33495__$1 = (state_33627[(2)]);
var inst_33496 = (inst_33495__$1 == null);
var state_33627__$1 = (function (){var statearr_33643 = state_33627;
(statearr_33643[(10)] = inst_33495__$1);

return statearr_33643;
})();
if(cljs.core.truth_(inst_33496)){
var statearr_33644_33724 = state_33627__$1;
(statearr_33644_33724[(1)] = (5));

} else {
var statearr_33645_33725 = state_33627__$1;
(statearr_33645_33725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (15))){
var inst_33507 = (state_33627[(13)]);
var inst_33506 = (state_33627[(15)]);
var inst_33505 = (state_33627[(16)]);
var inst_33504 = (state_33627[(17)]);
var inst_33522 = (state_33627[(2)]);
var inst_33523 = (inst_33507 + (1));
var tmp33639 = inst_33506;
var tmp33640 = inst_33505;
var tmp33641 = inst_33504;
var inst_33504__$1 = tmp33641;
var inst_33505__$1 = tmp33640;
var inst_33506__$1 = tmp33639;
var inst_33507__$1 = inst_33523;
var state_33627__$1 = (function (){var statearr_33646 = state_33627;
(statearr_33646[(13)] = inst_33507__$1);

(statearr_33646[(15)] = inst_33506__$1);

(statearr_33646[(16)] = inst_33505__$1);

(statearr_33646[(17)] = inst_33504__$1);

(statearr_33646[(18)] = inst_33522);

return statearr_33646;
})();
var statearr_33647_33726 = state_33627__$1;
(statearr_33647_33726[(2)] = null);

(statearr_33647_33726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (21))){
var inst_33549 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
var statearr_33651_33727 = state_33627__$1;
(statearr_33651_33727[(2)] = inst_33549);

(statearr_33651_33727[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (31))){
var inst_33575 = (state_33627[(11)]);
var inst_33579 = done.call(null,null);
var inst_33580 = cljs.core.async.untap_STAR_.call(null,m,inst_33575);
var state_33627__$1 = (function (){var statearr_33652 = state_33627;
(statearr_33652[(19)] = inst_33579);

return statearr_33652;
})();
var statearr_33653_33728 = state_33627__$1;
(statearr_33653_33728[(2)] = inst_33580);

(statearr_33653_33728[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (32))){
var inst_33570 = (state_33627[(9)]);
var inst_33569 = (state_33627[(20)]);
var inst_33567 = (state_33627[(21)]);
var inst_33568 = (state_33627[(12)]);
var inst_33582 = (state_33627[(2)]);
var inst_33583 = (inst_33570 + (1));
var tmp33648 = inst_33569;
var tmp33649 = inst_33567;
var tmp33650 = inst_33568;
var inst_33567__$1 = tmp33649;
var inst_33568__$1 = tmp33650;
var inst_33569__$1 = tmp33648;
var inst_33570__$1 = inst_33583;
var state_33627__$1 = (function (){var statearr_33654 = state_33627;
(statearr_33654[(9)] = inst_33570__$1);

(statearr_33654[(22)] = inst_33582);

(statearr_33654[(20)] = inst_33569__$1);

(statearr_33654[(21)] = inst_33567__$1);

(statearr_33654[(12)] = inst_33568__$1);

return statearr_33654;
})();
var statearr_33655_33729 = state_33627__$1;
(statearr_33655_33729[(2)] = null);

(statearr_33655_33729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (40))){
var inst_33595 = (state_33627[(23)]);
var inst_33599 = done.call(null,null);
var inst_33600 = cljs.core.async.untap_STAR_.call(null,m,inst_33595);
var state_33627__$1 = (function (){var statearr_33656 = state_33627;
(statearr_33656[(24)] = inst_33599);

return statearr_33656;
})();
var statearr_33657_33730 = state_33627__$1;
(statearr_33657_33730[(2)] = inst_33600);

(statearr_33657_33730[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (33))){
var inst_33586 = (state_33627[(25)]);
var inst_33588 = cljs.core.chunked_seq_QMARK_.call(null,inst_33586);
var state_33627__$1 = state_33627;
if(inst_33588){
var statearr_33658_33731 = state_33627__$1;
(statearr_33658_33731[(1)] = (36));

} else {
var statearr_33659_33732 = state_33627__$1;
(statearr_33659_33732[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (13))){
var inst_33516 = (state_33627[(26)]);
var inst_33519 = cljs.core.async.close_BANG_.call(null,inst_33516);
var state_33627__$1 = state_33627;
var statearr_33660_33733 = state_33627__$1;
(statearr_33660_33733[(2)] = inst_33519);

(statearr_33660_33733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (22))){
var inst_33539 = (state_33627[(8)]);
var inst_33542 = cljs.core.async.close_BANG_.call(null,inst_33539);
var state_33627__$1 = state_33627;
var statearr_33661_33734 = state_33627__$1;
(statearr_33661_33734[(2)] = inst_33542);

(statearr_33661_33734[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (36))){
var inst_33586 = (state_33627[(25)]);
var inst_33590 = cljs.core.chunk_first.call(null,inst_33586);
var inst_33591 = cljs.core.chunk_rest.call(null,inst_33586);
var inst_33592 = cljs.core.count.call(null,inst_33590);
var inst_33567 = inst_33591;
var inst_33568 = inst_33590;
var inst_33569 = inst_33592;
var inst_33570 = (0);
var state_33627__$1 = (function (){var statearr_33662 = state_33627;
(statearr_33662[(9)] = inst_33570);

(statearr_33662[(20)] = inst_33569);

(statearr_33662[(21)] = inst_33567);

(statearr_33662[(12)] = inst_33568);

return statearr_33662;
})();
var statearr_33663_33735 = state_33627__$1;
(statearr_33663_33735[(2)] = null);

(statearr_33663_33735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (41))){
var inst_33586 = (state_33627[(25)]);
var inst_33602 = (state_33627[(2)]);
var inst_33603 = cljs.core.next.call(null,inst_33586);
var inst_33567 = inst_33603;
var inst_33568 = null;
var inst_33569 = (0);
var inst_33570 = (0);
var state_33627__$1 = (function (){var statearr_33664 = state_33627;
(statearr_33664[(9)] = inst_33570);

(statearr_33664[(20)] = inst_33569);

(statearr_33664[(21)] = inst_33567);

(statearr_33664[(27)] = inst_33602);

(statearr_33664[(12)] = inst_33568);

return statearr_33664;
})();
var statearr_33665_33736 = state_33627__$1;
(statearr_33665_33736[(2)] = null);

(statearr_33665_33736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (43))){
var state_33627__$1 = state_33627;
var statearr_33666_33737 = state_33627__$1;
(statearr_33666_33737[(2)] = null);

(statearr_33666_33737[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (29))){
var inst_33611 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
var statearr_33667_33738 = state_33627__$1;
(statearr_33667_33738[(2)] = inst_33611);

(statearr_33667_33738[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (44))){
var inst_33620 = (state_33627[(2)]);
var state_33627__$1 = (function (){var statearr_33668 = state_33627;
(statearr_33668[(28)] = inst_33620);

return statearr_33668;
})();
var statearr_33669_33739 = state_33627__$1;
(statearr_33669_33739[(2)] = null);

(statearr_33669_33739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (6))){
var inst_33559 = (state_33627[(29)]);
var inst_33558 = cljs.core.deref.call(null,cs);
var inst_33559__$1 = cljs.core.keys.call(null,inst_33558);
var inst_33560 = cljs.core.count.call(null,inst_33559__$1);
var inst_33561 = cljs.core.reset_BANG_.call(null,dctr,inst_33560);
var inst_33566 = cljs.core.seq.call(null,inst_33559__$1);
var inst_33567 = inst_33566;
var inst_33568 = null;
var inst_33569 = (0);
var inst_33570 = (0);
var state_33627__$1 = (function (){var statearr_33670 = state_33627;
(statearr_33670[(9)] = inst_33570);

(statearr_33670[(30)] = inst_33561);

(statearr_33670[(20)] = inst_33569);

(statearr_33670[(29)] = inst_33559__$1);

(statearr_33670[(21)] = inst_33567);

(statearr_33670[(12)] = inst_33568);

return statearr_33670;
})();
var statearr_33671_33740 = state_33627__$1;
(statearr_33671_33740[(2)] = null);

(statearr_33671_33740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (28))){
var inst_33567 = (state_33627[(21)]);
var inst_33586 = (state_33627[(25)]);
var inst_33586__$1 = cljs.core.seq.call(null,inst_33567);
var state_33627__$1 = (function (){var statearr_33672 = state_33627;
(statearr_33672[(25)] = inst_33586__$1);

return statearr_33672;
})();
if(inst_33586__$1){
var statearr_33673_33741 = state_33627__$1;
(statearr_33673_33741[(1)] = (33));

} else {
var statearr_33674_33742 = state_33627__$1;
(statearr_33674_33742[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (25))){
var inst_33570 = (state_33627[(9)]);
var inst_33569 = (state_33627[(20)]);
var inst_33572 = (inst_33570 < inst_33569);
var inst_33573 = inst_33572;
var state_33627__$1 = state_33627;
if(cljs.core.truth_(inst_33573)){
var statearr_33675_33743 = state_33627__$1;
(statearr_33675_33743[(1)] = (27));

} else {
var statearr_33676_33744 = state_33627__$1;
(statearr_33676_33744[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (34))){
var state_33627__$1 = state_33627;
var statearr_33677_33745 = state_33627__$1;
(statearr_33677_33745[(2)] = null);

(statearr_33677_33745[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (17))){
var state_33627__$1 = state_33627;
var statearr_33678_33746 = state_33627__$1;
(statearr_33678_33746[(2)] = null);

(statearr_33678_33746[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (3))){
var inst_33625 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33627__$1,inst_33625);
} else {
if((state_val_33628 === (12))){
var inst_33554 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
var statearr_33679_33747 = state_33627__$1;
(statearr_33679_33747[(2)] = inst_33554);

(statearr_33679_33747[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (2))){
var state_33627__$1 = state_33627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33627__$1,(4),ch);
} else {
if((state_val_33628 === (23))){
var state_33627__$1 = state_33627;
var statearr_33680_33748 = state_33627__$1;
(statearr_33680_33748[(2)] = null);

(statearr_33680_33748[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (35))){
var inst_33609 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
var statearr_33681_33749 = state_33627__$1;
(statearr_33681_33749[(2)] = inst_33609);

(statearr_33681_33749[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (19))){
var inst_33526 = (state_33627[(7)]);
var inst_33530 = cljs.core.chunk_first.call(null,inst_33526);
var inst_33531 = cljs.core.chunk_rest.call(null,inst_33526);
var inst_33532 = cljs.core.count.call(null,inst_33530);
var inst_33504 = inst_33531;
var inst_33505 = inst_33530;
var inst_33506 = inst_33532;
var inst_33507 = (0);
var state_33627__$1 = (function (){var statearr_33682 = state_33627;
(statearr_33682[(13)] = inst_33507);

(statearr_33682[(15)] = inst_33506);

(statearr_33682[(16)] = inst_33505);

(statearr_33682[(17)] = inst_33504);

return statearr_33682;
})();
var statearr_33683_33750 = state_33627__$1;
(statearr_33683_33750[(2)] = null);

(statearr_33683_33750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (11))){
var inst_33526 = (state_33627[(7)]);
var inst_33504 = (state_33627[(17)]);
var inst_33526__$1 = cljs.core.seq.call(null,inst_33504);
var state_33627__$1 = (function (){var statearr_33684 = state_33627;
(statearr_33684[(7)] = inst_33526__$1);

return statearr_33684;
})();
if(inst_33526__$1){
var statearr_33685_33751 = state_33627__$1;
(statearr_33685_33751[(1)] = (16));

} else {
var statearr_33686_33752 = state_33627__$1;
(statearr_33686_33752[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (9))){
var inst_33556 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
var statearr_33687_33753 = state_33627__$1;
(statearr_33687_33753[(2)] = inst_33556);

(statearr_33687_33753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (5))){
var inst_33502 = cljs.core.deref.call(null,cs);
var inst_33503 = cljs.core.seq.call(null,inst_33502);
var inst_33504 = inst_33503;
var inst_33505 = null;
var inst_33506 = (0);
var inst_33507 = (0);
var state_33627__$1 = (function (){var statearr_33688 = state_33627;
(statearr_33688[(13)] = inst_33507);

(statearr_33688[(15)] = inst_33506);

(statearr_33688[(16)] = inst_33505);

(statearr_33688[(17)] = inst_33504);

return statearr_33688;
})();
var statearr_33689_33754 = state_33627__$1;
(statearr_33689_33754[(2)] = null);

(statearr_33689_33754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (14))){
var state_33627__$1 = state_33627;
var statearr_33690_33755 = state_33627__$1;
(statearr_33690_33755[(2)] = null);

(statearr_33690_33755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (45))){
var inst_33617 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
var statearr_33691_33756 = state_33627__$1;
(statearr_33691_33756[(2)] = inst_33617);

(statearr_33691_33756[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (26))){
var inst_33559 = (state_33627[(29)]);
var inst_33613 = (state_33627[(2)]);
var inst_33614 = cljs.core.seq.call(null,inst_33559);
var state_33627__$1 = (function (){var statearr_33692 = state_33627;
(statearr_33692[(31)] = inst_33613);

return statearr_33692;
})();
if(inst_33614){
var statearr_33693_33757 = state_33627__$1;
(statearr_33693_33757[(1)] = (42));

} else {
var statearr_33694_33758 = state_33627__$1;
(statearr_33694_33758[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (16))){
var inst_33526 = (state_33627[(7)]);
var inst_33528 = cljs.core.chunked_seq_QMARK_.call(null,inst_33526);
var state_33627__$1 = state_33627;
if(inst_33528){
var statearr_33695_33759 = state_33627__$1;
(statearr_33695_33759[(1)] = (19));

} else {
var statearr_33696_33760 = state_33627__$1;
(statearr_33696_33760[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (38))){
var inst_33606 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
var statearr_33697_33761 = state_33627__$1;
(statearr_33697_33761[(2)] = inst_33606);

(statearr_33697_33761[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (30))){
var state_33627__$1 = state_33627;
var statearr_33698_33762 = state_33627__$1;
(statearr_33698_33762[(2)] = null);

(statearr_33698_33762[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (10))){
var inst_33507 = (state_33627[(13)]);
var inst_33505 = (state_33627[(16)]);
var inst_33515 = cljs.core._nth.call(null,inst_33505,inst_33507);
var inst_33516 = cljs.core.nth.call(null,inst_33515,(0),null);
var inst_33517 = cljs.core.nth.call(null,inst_33515,(1),null);
var state_33627__$1 = (function (){var statearr_33699 = state_33627;
(statearr_33699[(26)] = inst_33516);

return statearr_33699;
})();
if(cljs.core.truth_(inst_33517)){
var statearr_33700_33763 = state_33627__$1;
(statearr_33700_33763[(1)] = (13));

} else {
var statearr_33701_33764 = state_33627__$1;
(statearr_33701_33764[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (18))){
var inst_33552 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
var statearr_33702_33765 = state_33627__$1;
(statearr_33702_33765[(2)] = inst_33552);

(statearr_33702_33765[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (42))){
var state_33627__$1 = state_33627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33627__$1,(45),dchan);
} else {
if((state_val_33628 === (37))){
var inst_33595 = (state_33627[(23)]);
var inst_33495 = (state_33627[(10)]);
var inst_33586 = (state_33627[(25)]);
var inst_33595__$1 = cljs.core.first.call(null,inst_33586);
var inst_33596 = cljs.core.async.put_BANG_.call(null,inst_33595__$1,inst_33495,done);
var state_33627__$1 = (function (){var statearr_33703 = state_33627;
(statearr_33703[(23)] = inst_33595__$1);

return statearr_33703;
})();
if(cljs.core.truth_(inst_33596)){
var statearr_33704_33766 = state_33627__$1;
(statearr_33704_33766[(1)] = (39));

} else {
var statearr_33705_33767 = state_33627__$1;
(statearr_33705_33767[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (8))){
var inst_33507 = (state_33627[(13)]);
var inst_33506 = (state_33627[(15)]);
var inst_33509 = (inst_33507 < inst_33506);
var inst_33510 = inst_33509;
var state_33627__$1 = state_33627;
if(cljs.core.truth_(inst_33510)){
var statearr_33706_33768 = state_33627__$1;
(statearr_33706_33768[(1)] = (10));

} else {
var statearr_33707_33769 = state_33627__$1;
(statearr_33707_33769[(1)] = (11));

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
});})(c__28434__auto___33715,cs,m,dchan,dctr,done))
;
return ((function (switch__28412__auto__,c__28434__auto___33715,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28413__auto__ = null;
var cljs$core$async$mult_$_state_machine__28413__auto____0 = (function (){
var statearr_33711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33711[(0)] = cljs$core$async$mult_$_state_machine__28413__auto__);

(statearr_33711[(1)] = (1));

return statearr_33711;
});
var cljs$core$async$mult_$_state_machine__28413__auto____1 = (function (state_33627){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_33627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e33712){if((e33712 instanceof Object)){
var ex__28416__auto__ = e33712;
var statearr_33713_33770 = state_33627;
(statearr_33713_33770[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33771 = state_33627;
state_33627 = G__33771;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28413__auto__ = function(state_33627){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28413__auto____1.call(this,state_33627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28413__auto____0;
cljs$core$async$mult_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28413__auto____1;
return cljs$core$async$mult_$_state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto___33715,cs,m,dchan,dctr,done))
})();
var state__28436__auto__ = (function (){var statearr_33714 = f__28435__auto__.call(null);
(statearr_33714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___33715);

return statearr_33714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto___33715,cs,m,dchan,dctr,done))
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
var args33772 = [];
var len__27082__auto___33775 = arguments.length;
var i__27083__auto___33776 = (0);
while(true){
if((i__27083__auto___33776 < len__27082__auto___33775)){
args33772.push((arguments[i__27083__auto___33776]));

var G__33777 = (i__27083__auto___33776 + (1));
i__27083__auto___33776 = G__33777;
continue;
} else {
}
break;
}

var G__33774 = args33772.length;
switch (G__33774) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33772.length)].join('')));

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
var x__26637__auto__ = (((m == null))?null:m);
var m__26638__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,m,ch);
} else {
var m__26638__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,m,ch);
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
var x__26637__auto__ = (((m == null))?null:m);
var m__26638__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,m,ch);
} else {
var m__26638__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,m,ch);
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
var x__26637__auto__ = (((m == null))?null:m);
var m__26638__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,m);
} else {
var m__26638__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,m);
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
var x__26637__auto__ = (((m == null))?null:m);
var m__26638__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,m,state_map);
} else {
var m__26638__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,m,state_map);
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
var x__26637__auto__ = (((m == null))?null:m);
var m__26638__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,m,mode);
} else {
var m__26638__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27089__auto__ = [];
var len__27082__auto___33789 = arguments.length;
var i__27083__auto___33790 = (0);
while(true){
if((i__27083__auto___33790 < len__27082__auto___33789)){
args__27089__auto__.push((arguments[i__27083__auto___33790]));

var G__33791 = (i__27083__auto___33790 + (1));
i__27083__auto___33790 = G__33791;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((3) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27090__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33783){
var map__33784 = p__33783;
var map__33784__$1 = ((((!((map__33784 == null)))?((((map__33784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33784):map__33784);
var opts = map__33784__$1;
var statearr_33786_33792 = state;
(statearr_33786_33792[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33784,map__33784__$1,opts){
return (function (val){
var statearr_33787_33793 = state;
(statearr_33787_33793[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33784,map__33784__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33788_33794 = state;
(statearr_33788_33794[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33779){
var G__33780 = cljs.core.first.call(null,seq33779);
var seq33779__$1 = cljs.core.next.call(null,seq33779);
var G__33781 = cljs.core.first.call(null,seq33779__$1);
var seq33779__$2 = cljs.core.next.call(null,seq33779__$1);
var G__33782 = cljs.core.first.call(null,seq33779__$2);
var seq33779__$3 = cljs.core.next.call(null,seq33779__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33780,G__33781,G__33782,seq33779__$3);
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
if(typeof cljs.core.async.t_cljs$core$async33962 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33962 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33963){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33963 = meta33963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33964,meta33963__$1){
var self__ = this;
var _33964__$1 = this;
return (new cljs.core.async.t_cljs$core$async33962(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33963__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33964){
var self__ = this;
var _33964__$1 = this;
return self__.meta33963;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33962.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta33963","meta33963",-1847386582,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33962.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33962";

cljs.core.async.t_cljs$core$async33962.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26580__auto__,writer__26581__auto__,opt__26582__auto__){
return cljs.core._write.call(null,writer__26581__auto__,"cljs.core.async/t_cljs$core$async33962");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33962 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33962(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33963){
return (new cljs.core.async.t_cljs$core$async33962(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33963));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33962(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28434__auto___34129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto___34129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto___34129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34066){
var state_val_34067 = (state_34066[(1)]);
if((state_val_34067 === (7))){
var inst_33981 = (state_34066[(2)]);
var state_34066__$1 = state_34066;
var statearr_34068_34130 = state_34066__$1;
(statearr_34068_34130[(2)] = inst_33981);

(statearr_34068_34130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (20))){
var inst_33993 = (state_34066[(7)]);
var state_34066__$1 = state_34066;
var statearr_34069_34131 = state_34066__$1;
(statearr_34069_34131[(2)] = inst_33993);

(statearr_34069_34131[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (27))){
var state_34066__$1 = state_34066;
var statearr_34070_34132 = state_34066__$1;
(statearr_34070_34132[(2)] = null);

(statearr_34070_34132[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (1))){
var inst_33968 = (state_34066[(8)]);
var inst_33968__$1 = calc_state.call(null);
var inst_33970 = (inst_33968__$1 == null);
var inst_33971 = cljs.core.not.call(null,inst_33970);
var state_34066__$1 = (function (){var statearr_34071 = state_34066;
(statearr_34071[(8)] = inst_33968__$1);

return statearr_34071;
})();
if(inst_33971){
var statearr_34072_34133 = state_34066__$1;
(statearr_34072_34133[(1)] = (2));

} else {
var statearr_34073_34134 = state_34066__$1;
(statearr_34073_34134[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (24))){
var inst_34017 = (state_34066[(9)]);
var inst_34026 = (state_34066[(10)]);
var inst_34040 = (state_34066[(11)]);
var inst_34040__$1 = inst_34017.call(null,inst_34026);
var state_34066__$1 = (function (){var statearr_34074 = state_34066;
(statearr_34074[(11)] = inst_34040__$1);

return statearr_34074;
})();
if(cljs.core.truth_(inst_34040__$1)){
var statearr_34075_34135 = state_34066__$1;
(statearr_34075_34135[(1)] = (29));

} else {
var statearr_34076_34136 = state_34066__$1;
(statearr_34076_34136[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (4))){
var inst_33984 = (state_34066[(2)]);
var state_34066__$1 = state_34066;
if(cljs.core.truth_(inst_33984)){
var statearr_34077_34137 = state_34066__$1;
(statearr_34077_34137[(1)] = (8));

} else {
var statearr_34078_34138 = state_34066__$1;
(statearr_34078_34138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (15))){
var inst_34011 = (state_34066[(2)]);
var state_34066__$1 = state_34066;
if(cljs.core.truth_(inst_34011)){
var statearr_34079_34139 = state_34066__$1;
(statearr_34079_34139[(1)] = (19));

} else {
var statearr_34080_34140 = state_34066__$1;
(statearr_34080_34140[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (21))){
var inst_34016 = (state_34066[(12)]);
var inst_34016__$1 = (state_34066[(2)]);
var inst_34017 = cljs.core.get.call(null,inst_34016__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34018 = cljs.core.get.call(null,inst_34016__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34019 = cljs.core.get.call(null,inst_34016__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34066__$1 = (function (){var statearr_34081 = state_34066;
(statearr_34081[(12)] = inst_34016__$1);

(statearr_34081[(9)] = inst_34017);

(statearr_34081[(13)] = inst_34018);

return statearr_34081;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34066__$1,(22),inst_34019);
} else {
if((state_val_34067 === (31))){
var inst_34048 = (state_34066[(2)]);
var state_34066__$1 = state_34066;
if(cljs.core.truth_(inst_34048)){
var statearr_34082_34141 = state_34066__$1;
(statearr_34082_34141[(1)] = (32));

} else {
var statearr_34083_34142 = state_34066__$1;
(statearr_34083_34142[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (32))){
var inst_34025 = (state_34066[(14)]);
var state_34066__$1 = state_34066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34066__$1,(35),out,inst_34025);
} else {
if((state_val_34067 === (33))){
var inst_34016 = (state_34066[(12)]);
var inst_33993 = inst_34016;
var state_34066__$1 = (function (){var statearr_34084 = state_34066;
(statearr_34084[(7)] = inst_33993);

return statearr_34084;
})();
var statearr_34085_34143 = state_34066__$1;
(statearr_34085_34143[(2)] = null);

(statearr_34085_34143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (13))){
var inst_33993 = (state_34066[(7)]);
var inst_34000 = inst_33993.cljs$lang$protocol_mask$partition0$;
var inst_34001 = (inst_34000 & (64));
var inst_34002 = inst_33993.cljs$core$ISeq$;
var inst_34003 = (cljs.core.PROTOCOL_SENTINEL === inst_34002);
var inst_34004 = (inst_34001) || (inst_34003);
var state_34066__$1 = state_34066;
if(cljs.core.truth_(inst_34004)){
var statearr_34086_34144 = state_34066__$1;
(statearr_34086_34144[(1)] = (16));

} else {
var statearr_34087_34145 = state_34066__$1;
(statearr_34087_34145[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (22))){
var inst_34025 = (state_34066[(14)]);
var inst_34026 = (state_34066[(10)]);
var inst_34024 = (state_34066[(2)]);
var inst_34025__$1 = cljs.core.nth.call(null,inst_34024,(0),null);
var inst_34026__$1 = cljs.core.nth.call(null,inst_34024,(1),null);
var inst_34027 = (inst_34025__$1 == null);
var inst_34028 = cljs.core._EQ_.call(null,inst_34026__$1,change);
var inst_34029 = (inst_34027) || (inst_34028);
var state_34066__$1 = (function (){var statearr_34088 = state_34066;
(statearr_34088[(14)] = inst_34025__$1);

(statearr_34088[(10)] = inst_34026__$1);

return statearr_34088;
})();
if(cljs.core.truth_(inst_34029)){
var statearr_34089_34146 = state_34066__$1;
(statearr_34089_34146[(1)] = (23));

} else {
var statearr_34090_34147 = state_34066__$1;
(statearr_34090_34147[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (36))){
var inst_34016 = (state_34066[(12)]);
var inst_33993 = inst_34016;
var state_34066__$1 = (function (){var statearr_34091 = state_34066;
(statearr_34091[(7)] = inst_33993);

return statearr_34091;
})();
var statearr_34092_34148 = state_34066__$1;
(statearr_34092_34148[(2)] = null);

(statearr_34092_34148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (29))){
var inst_34040 = (state_34066[(11)]);
var state_34066__$1 = state_34066;
var statearr_34093_34149 = state_34066__$1;
(statearr_34093_34149[(2)] = inst_34040);

(statearr_34093_34149[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (6))){
var state_34066__$1 = state_34066;
var statearr_34094_34150 = state_34066__$1;
(statearr_34094_34150[(2)] = false);

(statearr_34094_34150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (28))){
var inst_34036 = (state_34066[(2)]);
var inst_34037 = calc_state.call(null);
var inst_33993 = inst_34037;
var state_34066__$1 = (function (){var statearr_34095 = state_34066;
(statearr_34095[(15)] = inst_34036);

(statearr_34095[(7)] = inst_33993);

return statearr_34095;
})();
var statearr_34096_34151 = state_34066__$1;
(statearr_34096_34151[(2)] = null);

(statearr_34096_34151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (25))){
var inst_34062 = (state_34066[(2)]);
var state_34066__$1 = state_34066;
var statearr_34097_34152 = state_34066__$1;
(statearr_34097_34152[(2)] = inst_34062);

(statearr_34097_34152[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (34))){
var inst_34060 = (state_34066[(2)]);
var state_34066__$1 = state_34066;
var statearr_34098_34153 = state_34066__$1;
(statearr_34098_34153[(2)] = inst_34060);

(statearr_34098_34153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (17))){
var state_34066__$1 = state_34066;
var statearr_34099_34154 = state_34066__$1;
(statearr_34099_34154[(2)] = false);

(statearr_34099_34154[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (3))){
var state_34066__$1 = state_34066;
var statearr_34100_34155 = state_34066__$1;
(statearr_34100_34155[(2)] = false);

(statearr_34100_34155[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (12))){
var inst_34064 = (state_34066[(2)]);
var state_34066__$1 = state_34066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34066__$1,inst_34064);
} else {
if((state_val_34067 === (2))){
var inst_33968 = (state_34066[(8)]);
var inst_33973 = inst_33968.cljs$lang$protocol_mask$partition0$;
var inst_33974 = (inst_33973 & (64));
var inst_33975 = inst_33968.cljs$core$ISeq$;
var inst_33976 = (cljs.core.PROTOCOL_SENTINEL === inst_33975);
var inst_33977 = (inst_33974) || (inst_33976);
var state_34066__$1 = state_34066;
if(cljs.core.truth_(inst_33977)){
var statearr_34101_34156 = state_34066__$1;
(statearr_34101_34156[(1)] = (5));

} else {
var statearr_34102_34157 = state_34066__$1;
(statearr_34102_34157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (23))){
var inst_34025 = (state_34066[(14)]);
var inst_34031 = (inst_34025 == null);
var state_34066__$1 = state_34066;
if(cljs.core.truth_(inst_34031)){
var statearr_34103_34158 = state_34066__$1;
(statearr_34103_34158[(1)] = (26));

} else {
var statearr_34104_34159 = state_34066__$1;
(statearr_34104_34159[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (35))){
var inst_34051 = (state_34066[(2)]);
var state_34066__$1 = state_34066;
if(cljs.core.truth_(inst_34051)){
var statearr_34105_34160 = state_34066__$1;
(statearr_34105_34160[(1)] = (36));

} else {
var statearr_34106_34161 = state_34066__$1;
(statearr_34106_34161[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (19))){
var inst_33993 = (state_34066[(7)]);
var inst_34013 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33993);
var state_34066__$1 = state_34066;
var statearr_34107_34162 = state_34066__$1;
(statearr_34107_34162[(2)] = inst_34013);

(statearr_34107_34162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (11))){
var inst_33993 = (state_34066[(7)]);
var inst_33997 = (inst_33993 == null);
var inst_33998 = cljs.core.not.call(null,inst_33997);
var state_34066__$1 = state_34066;
if(inst_33998){
var statearr_34108_34163 = state_34066__$1;
(statearr_34108_34163[(1)] = (13));

} else {
var statearr_34109_34164 = state_34066__$1;
(statearr_34109_34164[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (9))){
var inst_33968 = (state_34066[(8)]);
var state_34066__$1 = state_34066;
var statearr_34110_34165 = state_34066__$1;
(statearr_34110_34165[(2)] = inst_33968);

(statearr_34110_34165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (5))){
var state_34066__$1 = state_34066;
var statearr_34111_34166 = state_34066__$1;
(statearr_34111_34166[(2)] = true);

(statearr_34111_34166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (14))){
var state_34066__$1 = state_34066;
var statearr_34112_34167 = state_34066__$1;
(statearr_34112_34167[(2)] = false);

(statearr_34112_34167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (26))){
var inst_34026 = (state_34066[(10)]);
var inst_34033 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34026);
var state_34066__$1 = state_34066;
var statearr_34113_34168 = state_34066__$1;
(statearr_34113_34168[(2)] = inst_34033);

(statearr_34113_34168[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (16))){
var state_34066__$1 = state_34066;
var statearr_34114_34169 = state_34066__$1;
(statearr_34114_34169[(2)] = true);

(statearr_34114_34169[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (38))){
var inst_34056 = (state_34066[(2)]);
var state_34066__$1 = state_34066;
var statearr_34115_34170 = state_34066__$1;
(statearr_34115_34170[(2)] = inst_34056);

(statearr_34115_34170[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (30))){
var inst_34017 = (state_34066[(9)]);
var inst_34026 = (state_34066[(10)]);
var inst_34018 = (state_34066[(13)]);
var inst_34043 = cljs.core.empty_QMARK_.call(null,inst_34017);
var inst_34044 = inst_34018.call(null,inst_34026);
var inst_34045 = cljs.core.not.call(null,inst_34044);
var inst_34046 = (inst_34043) && (inst_34045);
var state_34066__$1 = state_34066;
var statearr_34116_34171 = state_34066__$1;
(statearr_34116_34171[(2)] = inst_34046);

(statearr_34116_34171[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (10))){
var inst_33968 = (state_34066[(8)]);
var inst_33989 = (state_34066[(2)]);
var inst_33990 = cljs.core.get.call(null,inst_33989,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33991 = cljs.core.get.call(null,inst_33989,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33992 = cljs.core.get.call(null,inst_33989,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33993 = inst_33968;
var state_34066__$1 = (function (){var statearr_34117 = state_34066;
(statearr_34117[(16)] = inst_33990);

(statearr_34117[(17)] = inst_33991);

(statearr_34117[(7)] = inst_33993);

(statearr_34117[(18)] = inst_33992);

return statearr_34117;
})();
var statearr_34118_34172 = state_34066__$1;
(statearr_34118_34172[(2)] = null);

(statearr_34118_34172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (18))){
var inst_34008 = (state_34066[(2)]);
var state_34066__$1 = state_34066;
var statearr_34119_34173 = state_34066__$1;
(statearr_34119_34173[(2)] = inst_34008);

(statearr_34119_34173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (37))){
var state_34066__$1 = state_34066;
var statearr_34120_34174 = state_34066__$1;
(statearr_34120_34174[(2)] = null);

(statearr_34120_34174[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (8))){
var inst_33968 = (state_34066[(8)]);
var inst_33986 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33968);
var state_34066__$1 = state_34066;
var statearr_34121_34175 = state_34066__$1;
(statearr_34121_34175[(2)] = inst_33986);

(statearr_34121_34175[(1)] = (10));


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
});})(c__28434__auto___34129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28412__auto__,c__28434__auto___34129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28413__auto__ = null;
var cljs$core$async$mix_$_state_machine__28413__auto____0 = (function (){
var statearr_34125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34125[(0)] = cljs$core$async$mix_$_state_machine__28413__auto__);

(statearr_34125[(1)] = (1));

return statearr_34125;
});
var cljs$core$async$mix_$_state_machine__28413__auto____1 = (function (state_34066){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_34066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e34126){if((e34126 instanceof Object)){
var ex__28416__auto__ = e34126;
var statearr_34127_34176 = state_34066;
(statearr_34127_34176[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34177 = state_34066;
state_34066 = G__34177;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28413__auto__ = function(state_34066){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28413__auto____1.call(this,state_34066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28413__auto____0;
cljs$core$async$mix_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28413__auto____1;
return cljs$core$async$mix_$_state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto___34129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28436__auto__ = (function (){var statearr_34128 = f__28435__auto__.call(null);
(statearr_34128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___34129);

return statearr_34128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto___34129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__26637__auto__ = (((p == null))?null:p);
var m__26638__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26638__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__26637__auto__ = (((p == null))?null:p);
var m__26638__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,p,v,ch);
} else {
var m__26638__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args34178 = [];
var len__27082__auto___34181 = arguments.length;
var i__27083__auto___34182 = (0);
while(true){
if((i__27083__auto___34182 < len__27082__auto___34181)){
args34178.push((arguments[i__27083__auto___34182]));

var G__34183 = (i__27083__auto___34182 + (1));
i__27083__auto___34182 = G__34183;
continue;
} else {
}
break;
}

var G__34180 = args34178.length;
switch (G__34180) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34178.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26637__auto__ = (((p == null))?null:p);
var m__26638__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,p);
} else {
var m__26638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,p);
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
var x__26637__auto__ = (((p == null))?null:p);
var m__26638__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,p,v);
} else {
var m__26638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,p,v);
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
var args34186 = [];
var len__27082__auto___34311 = arguments.length;
var i__27083__auto___34312 = (0);
while(true){
if((i__27083__auto___34312 < len__27082__auto___34311)){
args34186.push((arguments[i__27083__auto___34312]));

var G__34313 = (i__27083__auto___34312 + (1));
i__27083__auto___34312 = G__34313;
continue;
} else {
}
break;
}

var G__34188 = args34186.length;
switch (G__34188) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34186.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25974__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25974__auto__,mults){
return (function (p1__34185_SHARP_){
if(cljs.core.truth_(p1__34185_SHARP_.call(null,topic))){
return p1__34185_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34185_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25974__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34189 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34189 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34190){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34190 = meta34190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34191,meta34190__$1){
var self__ = this;
var _34191__$1 = this;
return (new cljs.core.async.t_cljs$core$async34189(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34190__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34191){
var self__ = this;
var _34191__$1 = this;
return self__.meta34190;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34189.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34189.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34189.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34189.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34189.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34189.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34189.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34189.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34190","meta34190",-649768901,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34189.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34189";

cljs.core.async.t_cljs$core$async34189.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26580__auto__,writer__26581__auto__,opt__26582__auto__){
return cljs.core._write.call(null,writer__26581__auto__,"cljs.core.async/t_cljs$core$async34189");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34189 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34189(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34190){
return (new cljs.core.async.t_cljs$core$async34189(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34190));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34189(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28434__auto___34315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto___34315,mults,ensure_mult,p){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto___34315,mults,ensure_mult,p){
return (function (state_34263){
var state_val_34264 = (state_34263[(1)]);
if((state_val_34264 === (7))){
var inst_34259 = (state_34263[(2)]);
var state_34263__$1 = state_34263;
var statearr_34265_34316 = state_34263__$1;
(statearr_34265_34316[(2)] = inst_34259);

(statearr_34265_34316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (20))){
var state_34263__$1 = state_34263;
var statearr_34266_34317 = state_34263__$1;
(statearr_34266_34317[(2)] = null);

(statearr_34266_34317[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (1))){
var state_34263__$1 = state_34263;
var statearr_34267_34318 = state_34263__$1;
(statearr_34267_34318[(2)] = null);

(statearr_34267_34318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (24))){
var inst_34242 = (state_34263[(7)]);
var inst_34251 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34242);
var state_34263__$1 = state_34263;
var statearr_34268_34319 = state_34263__$1;
(statearr_34268_34319[(2)] = inst_34251);

(statearr_34268_34319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (4))){
var inst_34194 = (state_34263[(8)]);
var inst_34194__$1 = (state_34263[(2)]);
var inst_34195 = (inst_34194__$1 == null);
var state_34263__$1 = (function (){var statearr_34269 = state_34263;
(statearr_34269[(8)] = inst_34194__$1);

return statearr_34269;
})();
if(cljs.core.truth_(inst_34195)){
var statearr_34270_34320 = state_34263__$1;
(statearr_34270_34320[(1)] = (5));

} else {
var statearr_34271_34321 = state_34263__$1;
(statearr_34271_34321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (15))){
var inst_34236 = (state_34263[(2)]);
var state_34263__$1 = state_34263;
var statearr_34272_34322 = state_34263__$1;
(statearr_34272_34322[(2)] = inst_34236);

(statearr_34272_34322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (21))){
var inst_34256 = (state_34263[(2)]);
var state_34263__$1 = (function (){var statearr_34273 = state_34263;
(statearr_34273[(9)] = inst_34256);

return statearr_34273;
})();
var statearr_34274_34323 = state_34263__$1;
(statearr_34274_34323[(2)] = null);

(statearr_34274_34323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (13))){
var inst_34218 = (state_34263[(10)]);
var inst_34220 = cljs.core.chunked_seq_QMARK_.call(null,inst_34218);
var state_34263__$1 = state_34263;
if(inst_34220){
var statearr_34275_34324 = state_34263__$1;
(statearr_34275_34324[(1)] = (16));

} else {
var statearr_34276_34325 = state_34263__$1;
(statearr_34276_34325[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (22))){
var inst_34248 = (state_34263[(2)]);
var state_34263__$1 = state_34263;
if(cljs.core.truth_(inst_34248)){
var statearr_34277_34326 = state_34263__$1;
(statearr_34277_34326[(1)] = (23));

} else {
var statearr_34278_34327 = state_34263__$1;
(statearr_34278_34327[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (6))){
var inst_34242 = (state_34263[(7)]);
var inst_34194 = (state_34263[(8)]);
var inst_34244 = (state_34263[(11)]);
var inst_34242__$1 = topic_fn.call(null,inst_34194);
var inst_34243 = cljs.core.deref.call(null,mults);
var inst_34244__$1 = cljs.core.get.call(null,inst_34243,inst_34242__$1);
var state_34263__$1 = (function (){var statearr_34279 = state_34263;
(statearr_34279[(7)] = inst_34242__$1);

(statearr_34279[(11)] = inst_34244__$1);

return statearr_34279;
})();
if(cljs.core.truth_(inst_34244__$1)){
var statearr_34280_34328 = state_34263__$1;
(statearr_34280_34328[(1)] = (19));

} else {
var statearr_34281_34329 = state_34263__$1;
(statearr_34281_34329[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (25))){
var inst_34253 = (state_34263[(2)]);
var state_34263__$1 = state_34263;
var statearr_34282_34330 = state_34263__$1;
(statearr_34282_34330[(2)] = inst_34253);

(statearr_34282_34330[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (17))){
var inst_34218 = (state_34263[(10)]);
var inst_34227 = cljs.core.first.call(null,inst_34218);
var inst_34228 = cljs.core.async.muxch_STAR_.call(null,inst_34227);
var inst_34229 = cljs.core.async.close_BANG_.call(null,inst_34228);
var inst_34230 = cljs.core.next.call(null,inst_34218);
var inst_34204 = inst_34230;
var inst_34205 = null;
var inst_34206 = (0);
var inst_34207 = (0);
var state_34263__$1 = (function (){var statearr_34283 = state_34263;
(statearr_34283[(12)] = inst_34229);

(statearr_34283[(13)] = inst_34205);

(statearr_34283[(14)] = inst_34207);

(statearr_34283[(15)] = inst_34206);

(statearr_34283[(16)] = inst_34204);

return statearr_34283;
})();
var statearr_34284_34331 = state_34263__$1;
(statearr_34284_34331[(2)] = null);

(statearr_34284_34331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (3))){
var inst_34261 = (state_34263[(2)]);
var state_34263__$1 = state_34263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34263__$1,inst_34261);
} else {
if((state_val_34264 === (12))){
var inst_34238 = (state_34263[(2)]);
var state_34263__$1 = state_34263;
var statearr_34285_34332 = state_34263__$1;
(statearr_34285_34332[(2)] = inst_34238);

(statearr_34285_34332[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (2))){
var state_34263__$1 = state_34263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34263__$1,(4),ch);
} else {
if((state_val_34264 === (23))){
var state_34263__$1 = state_34263;
var statearr_34286_34333 = state_34263__$1;
(statearr_34286_34333[(2)] = null);

(statearr_34286_34333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (19))){
var inst_34194 = (state_34263[(8)]);
var inst_34244 = (state_34263[(11)]);
var inst_34246 = cljs.core.async.muxch_STAR_.call(null,inst_34244);
var state_34263__$1 = state_34263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34263__$1,(22),inst_34246,inst_34194);
} else {
if((state_val_34264 === (11))){
var inst_34218 = (state_34263[(10)]);
var inst_34204 = (state_34263[(16)]);
var inst_34218__$1 = cljs.core.seq.call(null,inst_34204);
var state_34263__$1 = (function (){var statearr_34287 = state_34263;
(statearr_34287[(10)] = inst_34218__$1);

return statearr_34287;
})();
if(inst_34218__$1){
var statearr_34288_34334 = state_34263__$1;
(statearr_34288_34334[(1)] = (13));

} else {
var statearr_34289_34335 = state_34263__$1;
(statearr_34289_34335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (9))){
var inst_34240 = (state_34263[(2)]);
var state_34263__$1 = state_34263;
var statearr_34290_34336 = state_34263__$1;
(statearr_34290_34336[(2)] = inst_34240);

(statearr_34290_34336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (5))){
var inst_34201 = cljs.core.deref.call(null,mults);
var inst_34202 = cljs.core.vals.call(null,inst_34201);
var inst_34203 = cljs.core.seq.call(null,inst_34202);
var inst_34204 = inst_34203;
var inst_34205 = null;
var inst_34206 = (0);
var inst_34207 = (0);
var state_34263__$1 = (function (){var statearr_34291 = state_34263;
(statearr_34291[(13)] = inst_34205);

(statearr_34291[(14)] = inst_34207);

(statearr_34291[(15)] = inst_34206);

(statearr_34291[(16)] = inst_34204);

return statearr_34291;
})();
var statearr_34292_34337 = state_34263__$1;
(statearr_34292_34337[(2)] = null);

(statearr_34292_34337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (14))){
var state_34263__$1 = state_34263;
var statearr_34296_34338 = state_34263__$1;
(statearr_34296_34338[(2)] = null);

(statearr_34296_34338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (16))){
var inst_34218 = (state_34263[(10)]);
var inst_34222 = cljs.core.chunk_first.call(null,inst_34218);
var inst_34223 = cljs.core.chunk_rest.call(null,inst_34218);
var inst_34224 = cljs.core.count.call(null,inst_34222);
var inst_34204 = inst_34223;
var inst_34205 = inst_34222;
var inst_34206 = inst_34224;
var inst_34207 = (0);
var state_34263__$1 = (function (){var statearr_34297 = state_34263;
(statearr_34297[(13)] = inst_34205);

(statearr_34297[(14)] = inst_34207);

(statearr_34297[(15)] = inst_34206);

(statearr_34297[(16)] = inst_34204);

return statearr_34297;
})();
var statearr_34298_34339 = state_34263__$1;
(statearr_34298_34339[(2)] = null);

(statearr_34298_34339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (10))){
var inst_34205 = (state_34263[(13)]);
var inst_34207 = (state_34263[(14)]);
var inst_34206 = (state_34263[(15)]);
var inst_34204 = (state_34263[(16)]);
var inst_34212 = cljs.core._nth.call(null,inst_34205,inst_34207);
var inst_34213 = cljs.core.async.muxch_STAR_.call(null,inst_34212);
var inst_34214 = cljs.core.async.close_BANG_.call(null,inst_34213);
var inst_34215 = (inst_34207 + (1));
var tmp34293 = inst_34205;
var tmp34294 = inst_34206;
var tmp34295 = inst_34204;
var inst_34204__$1 = tmp34295;
var inst_34205__$1 = tmp34293;
var inst_34206__$1 = tmp34294;
var inst_34207__$1 = inst_34215;
var state_34263__$1 = (function (){var statearr_34299 = state_34263;
(statearr_34299[(13)] = inst_34205__$1);

(statearr_34299[(14)] = inst_34207__$1);

(statearr_34299[(15)] = inst_34206__$1);

(statearr_34299[(16)] = inst_34204__$1);

(statearr_34299[(17)] = inst_34214);

return statearr_34299;
})();
var statearr_34300_34340 = state_34263__$1;
(statearr_34300_34340[(2)] = null);

(statearr_34300_34340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (18))){
var inst_34233 = (state_34263[(2)]);
var state_34263__$1 = state_34263;
var statearr_34301_34341 = state_34263__$1;
(statearr_34301_34341[(2)] = inst_34233);

(statearr_34301_34341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34264 === (8))){
var inst_34207 = (state_34263[(14)]);
var inst_34206 = (state_34263[(15)]);
var inst_34209 = (inst_34207 < inst_34206);
var inst_34210 = inst_34209;
var state_34263__$1 = state_34263;
if(cljs.core.truth_(inst_34210)){
var statearr_34302_34342 = state_34263__$1;
(statearr_34302_34342[(1)] = (10));

} else {
var statearr_34303_34343 = state_34263__$1;
(statearr_34303_34343[(1)] = (11));

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
});})(c__28434__auto___34315,mults,ensure_mult,p))
;
return ((function (switch__28412__auto__,c__28434__auto___34315,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28413__auto__ = null;
var cljs$core$async$state_machine__28413__auto____0 = (function (){
var statearr_34307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34307[(0)] = cljs$core$async$state_machine__28413__auto__);

(statearr_34307[(1)] = (1));

return statearr_34307;
});
var cljs$core$async$state_machine__28413__auto____1 = (function (state_34263){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_34263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e34308){if((e34308 instanceof Object)){
var ex__28416__auto__ = e34308;
var statearr_34309_34344 = state_34263;
(statearr_34309_34344[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34345 = state_34263;
state_34263 = G__34345;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$state_machine__28413__auto__ = function(state_34263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28413__auto____1.call(this,state_34263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28413__auto____0;
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28413__auto____1;
return cljs$core$async$state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto___34315,mults,ensure_mult,p))
})();
var state__28436__auto__ = (function (){var statearr_34310 = f__28435__auto__.call(null);
(statearr_34310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___34315);

return statearr_34310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto___34315,mults,ensure_mult,p))
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
var args34346 = [];
var len__27082__auto___34349 = arguments.length;
var i__27083__auto___34350 = (0);
while(true){
if((i__27083__auto___34350 < len__27082__auto___34349)){
args34346.push((arguments[i__27083__auto___34350]));

var G__34351 = (i__27083__auto___34350 + (1));
i__27083__auto___34350 = G__34351;
continue;
} else {
}
break;
}

var G__34348 = args34346.length;
switch (G__34348) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34346.length)].join('')));

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
var args34353 = [];
var len__27082__auto___34356 = arguments.length;
var i__27083__auto___34357 = (0);
while(true){
if((i__27083__auto___34357 < len__27082__auto___34356)){
args34353.push((arguments[i__27083__auto___34357]));

var G__34358 = (i__27083__auto___34357 + (1));
i__27083__auto___34357 = G__34358;
continue;
} else {
}
break;
}

var G__34355 = args34353.length;
switch (G__34355) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34353.length)].join('')));

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
var args34360 = [];
var len__27082__auto___34431 = arguments.length;
var i__27083__auto___34432 = (0);
while(true){
if((i__27083__auto___34432 < len__27082__auto___34431)){
args34360.push((arguments[i__27083__auto___34432]));

var G__34433 = (i__27083__auto___34432 + (1));
i__27083__auto___34432 = G__34433;
continue;
} else {
}
break;
}

var G__34362 = args34360.length;
switch (G__34362) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34360.length)].join('')));

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
var c__28434__auto___34435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto___34435,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto___34435,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34401){
var state_val_34402 = (state_34401[(1)]);
if((state_val_34402 === (7))){
var state_34401__$1 = state_34401;
var statearr_34403_34436 = state_34401__$1;
(statearr_34403_34436[(2)] = null);

(statearr_34403_34436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (1))){
var state_34401__$1 = state_34401;
var statearr_34404_34437 = state_34401__$1;
(statearr_34404_34437[(2)] = null);

(statearr_34404_34437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (4))){
var inst_34365 = (state_34401[(7)]);
var inst_34367 = (inst_34365 < cnt);
var state_34401__$1 = state_34401;
if(cljs.core.truth_(inst_34367)){
var statearr_34405_34438 = state_34401__$1;
(statearr_34405_34438[(1)] = (6));

} else {
var statearr_34406_34439 = state_34401__$1;
(statearr_34406_34439[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (15))){
var inst_34397 = (state_34401[(2)]);
var state_34401__$1 = state_34401;
var statearr_34407_34440 = state_34401__$1;
(statearr_34407_34440[(2)] = inst_34397);

(statearr_34407_34440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (13))){
var inst_34390 = cljs.core.async.close_BANG_.call(null,out);
var state_34401__$1 = state_34401;
var statearr_34408_34441 = state_34401__$1;
(statearr_34408_34441[(2)] = inst_34390);

(statearr_34408_34441[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (6))){
var state_34401__$1 = state_34401;
var statearr_34409_34442 = state_34401__$1;
(statearr_34409_34442[(2)] = null);

(statearr_34409_34442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (3))){
var inst_34399 = (state_34401[(2)]);
var state_34401__$1 = state_34401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34401__$1,inst_34399);
} else {
if((state_val_34402 === (12))){
var inst_34387 = (state_34401[(8)]);
var inst_34387__$1 = (state_34401[(2)]);
var inst_34388 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34387__$1);
var state_34401__$1 = (function (){var statearr_34410 = state_34401;
(statearr_34410[(8)] = inst_34387__$1);

return statearr_34410;
})();
if(cljs.core.truth_(inst_34388)){
var statearr_34411_34443 = state_34401__$1;
(statearr_34411_34443[(1)] = (13));

} else {
var statearr_34412_34444 = state_34401__$1;
(statearr_34412_34444[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (2))){
var inst_34364 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34365 = (0);
var state_34401__$1 = (function (){var statearr_34413 = state_34401;
(statearr_34413[(9)] = inst_34364);

(statearr_34413[(7)] = inst_34365);

return statearr_34413;
})();
var statearr_34414_34445 = state_34401__$1;
(statearr_34414_34445[(2)] = null);

(statearr_34414_34445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (11))){
var inst_34365 = (state_34401[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34401,(10),Object,null,(9));
var inst_34374 = chs__$1.call(null,inst_34365);
var inst_34375 = done.call(null,inst_34365);
var inst_34376 = cljs.core.async.take_BANG_.call(null,inst_34374,inst_34375);
var state_34401__$1 = state_34401;
var statearr_34415_34446 = state_34401__$1;
(statearr_34415_34446[(2)] = inst_34376);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34401__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (9))){
var inst_34365 = (state_34401[(7)]);
var inst_34378 = (state_34401[(2)]);
var inst_34379 = (inst_34365 + (1));
var inst_34365__$1 = inst_34379;
var state_34401__$1 = (function (){var statearr_34416 = state_34401;
(statearr_34416[(7)] = inst_34365__$1);

(statearr_34416[(10)] = inst_34378);

return statearr_34416;
})();
var statearr_34417_34447 = state_34401__$1;
(statearr_34417_34447[(2)] = null);

(statearr_34417_34447[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (5))){
var inst_34385 = (state_34401[(2)]);
var state_34401__$1 = (function (){var statearr_34418 = state_34401;
(statearr_34418[(11)] = inst_34385);

return statearr_34418;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34401__$1,(12),dchan);
} else {
if((state_val_34402 === (14))){
var inst_34387 = (state_34401[(8)]);
var inst_34392 = cljs.core.apply.call(null,f,inst_34387);
var state_34401__$1 = state_34401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34401__$1,(16),out,inst_34392);
} else {
if((state_val_34402 === (16))){
var inst_34394 = (state_34401[(2)]);
var state_34401__$1 = (function (){var statearr_34419 = state_34401;
(statearr_34419[(12)] = inst_34394);

return statearr_34419;
})();
var statearr_34420_34448 = state_34401__$1;
(statearr_34420_34448[(2)] = null);

(statearr_34420_34448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (10))){
var inst_34369 = (state_34401[(2)]);
var inst_34370 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34401__$1 = (function (){var statearr_34421 = state_34401;
(statearr_34421[(13)] = inst_34369);

return statearr_34421;
})();
var statearr_34422_34449 = state_34401__$1;
(statearr_34422_34449[(2)] = inst_34370);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34401__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (8))){
var inst_34383 = (state_34401[(2)]);
var state_34401__$1 = state_34401;
var statearr_34423_34450 = state_34401__$1;
(statearr_34423_34450[(2)] = inst_34383);

(statearr_34423_34450[(1)] = (5));


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
});})(c__28434__auto___34435,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28412__auto__,c__28434__auto___34435,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28413__auto__ = null;
var cljs$core$async$state_machine__28413__auto____0 = (function (){
var statearr_34427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34427[(0)] = cljs$core$async$state_machine__28413__auto__);

(statearr_34427[(1)] = (1));

return statearr_34427;
});
var cljs$core$async$state_machine__28413__auto____1 = (function (state_34401){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_34401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e34428){if((e34428 instanceof Object)){
var ex__28416__auto__ = e34428;
var statearr_34429_34451 = state_34401;
(statearr_34429_34451[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34452 = state_34401;
state_34401 = G__34452;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$state_machine__28413__auto__ = function(state_34401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28413__auto____1.call(this,state_34401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28413__auto____0;
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28413__auto____1;
return cljs$core$async$state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto___34435,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28436__auto__ = (function (){var statearr_34430 = f__28435__auto__.call(null);
(statearr_34430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___34435);

return statearr_34430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto___34435,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args34454 = [];
var len__27082__auto___34512 = arguments.length;
var i__27083__auto___34513 = (0);
while(true){
if((i__27083__auto___34513 < len__27082__auto___34512)){
args34454.push((arguments[i__27083__auto___34513]));

var G__34514 = (i__27083__auto___34513 + (1));
i__27083__auto___34513 = G__34514;
continue;
} else {
}
break;
}

var G__34456 = args34454.length;
switch (G__34456) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34454.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28434__auto___34516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto___34516,out){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto___34516,out){
return (function (state_34488){
var state_val_34489 = (state_34488[(1)]);
if((state_val_34489 === (7))){
var inst_34467 = (state_34488[(7)]);
var inst_34468 = (state_34488[(8)]);
var inst_34467__$1 = (state_34488[(2)]);
var inst_34468__$1 = cljs.core.nth.call(null,inst_34467__$1,(0),null);
var inst_34469 = cljs.core.nth.call(null,inst_34467__$1,(1),null);
var inst_34470 = (inst_34468__$1 == null);
var state_34488__$1 = (function (){var statearr_34490 = state_34488;
(statearr_34490[(7)] = inst_34467__$1);

(statearr_34490[(8)] = inst_34468__$1);

(statearr_34490[(9)] = inst_34469);

return statearr_34490;
})();
if(cljs.core.truth_(inst_34470)){
var statearr_34491_34517 = state_34488__$1;
(statearr_34491_34517[(1)] = (8));

} else {
var statearr_34492_34518 = state_34488__$1;
(statearr_34492_34518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34489 === (1))){
var inst_34457 = cljs.core.vec.call(null,chs);
var inst_34458 = inst_34457;
var state_34488__$1 = (function (){var statearr_34493 = state_34488;
(statearr_34493[(10)] = inst_34458);

return statearr_34493;
})();
var statearr_34494_34519 = state_34488__$1;
(statearr_34494_34519[(2)] = null);

(statearr_34494_34519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34489 === (4))){
var inst_34458 = (state_34488[(10)]);
var state_34488__$1 = state_34488;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34488__$1,(7),inst_34458);
} else {
if((state_val_34489 === (6))){
var inst_34484 = (state_34488[(2)]);
var state_34488__$1 = state_34488;
var statearr_34495_34520 = state_34488__$1;
(statearr_34495_34520[(2)] = inst_34484);

(statearr_34495_34520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34489 === (3))){
var inst_34486 = (state_34488[(2)]);
var state_34488__$1 = state_34488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34488__$1,inst_34486);
} else {
if((state_val_34489 === (2))){
var inst_34458 = (state_34488[(10)]);
var inst_34460 = cljs.core.count.call(null,inst_34458);
var inst_34461 = (inst_34460 > (0));
var state_34488__$1 = state_34488;
if(cljs.core.truth_(inst_34461)){
var statearr_34497_34521 = state_34488__$1;
(statearr_34497_34521[(1)] = (4));

} else {
var statearr_34498_34522 = state_34488__$1;
(statearr_34498_34522[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34489 === (11))){
var inst_34458 = (state_34488[(10)]);
var inst_34477 = (state_34488[(2)]);
var tmp34496 = inst_34458;
var inst_34458__$1 = tmp34496;
var state_34488__$1 = (function (){var statearr_34499 = state_34488;
(statearr_34499[(11)] = inst_34477);

(statearr_34499[(10)] = inst_34458__$1);

return statearr_34499;
})();
var statearr_34500_34523 = state_34488__$1;
(statearr_34500_34523[(2)] = null);

(statearr_34500_34523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34489 === (9))){
var inst_34468 = (state_34488[(8)]);
var state_34488__$1 = state_34488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34488__$1,(11),out,inst_34468);
} else {
if((state_val_34489 === (5))){
var inst_34482 = cljs.core.async.close_BANG_.call(null,out);
var state_34488__$1 = state_34488;
var statearr_34501_34524 = state_34488__$1;
(statearr_34501_34524[(2)] = inst_34482);

(statearr_34501_34524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34489 === (10))){
var inst_34480 = (state_34488[(2)]);
var state_34488__$1 = state_34488;
var statearr_34502_34525 = state_34488__$1;
(statearr_34502_34525[(2)] = inst_34480);

(statearr_34502_34525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34489 === (8))){
var inst_34467 = (state_34488[(7)]);
var inst_34468 = (state_34488[(8)]);
var inst_34458 = (state_34488[(10)]);
var inst_34469 = (state_34488[(9)]);
var inst_34472 = (function (){var cs = inst_34458;
var vec__34463 = inst_34467;
var v = inst_34468;
var c = inst_34469;
return ((function (cs,vec__34463,v,c,inst_34467,inst_34468,inst_34458,inst_34469,state_val_34489,c__28434__auto___34516,out){
return (function (p1__34453_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34453_SHARP_);
});
;})(cs,vec__34463,v,c,inst_34467,inst_34468,inst_34458,inst_34469,state_val_34489,c__28434__auto___34516,out))
})();
var inst_34473 = cljs.core.filterv.call(null,inst_34472,inst_34458);
var inst_34458__$1 = inst_34473;
var state_34488__$1 = (function (){var statearr_34503 = state_34488;
(statearr_34503[(10)] = inst_34458__$1);

return statearr_34503;
})();
var statearr_34504_34526 = state_34488__$1;
(statearr_34504_34526[(2)] = null);

(statearr_34504_34526[(1)] = (2));


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
});})(c__28434__auto___34516,out))
;
return ((function (switch__28412__auto__,c__28434__auto___34516,out){
return (function() {
var cljs$core$async$state_machine__28413__auto__ = null;
var cljs$core$async$state_machine__28413__auto____0 = (function (){
var statearr_34508 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34508[(0)] = cljs$core$async$state_machine__28413__auto__);

(statearr_34508[(1)] = (1));

return statearr_34508;
});
var cljs$core$async$state_machine__28413__auto____1 = (function (state_34488){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_34488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e34509){if((e34509 instanceof Object)){
var ex__28416__auto__ = e34509;
var statearr_34510_34527 = state_34488;
(statearr_34510_34527[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34528 = state_34488;
state_34488 = G__34528;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$state_machine__28413__auto__ = function(state_34488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28413__auto____1.call(this,state_34488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28413__auto____0;
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28413__auto____1;
return cljs$core$async$state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto___34516,out))
})();
var state__28436__auto__ = (function (){var statearr_34511 = f__28435__auto__.call(null);
(statearr_34511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___34516);

return statearr_34511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto___34516,out))
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
var args34529 = [];
var len__27082__auto___34578 = arguments.length;
var i__27083__auto___34579 = (0);
while(true){
if((i__27083__auto___34579 < len__27082__auto___34578)){
args34529.push((arguments[i__27083__auto___34579]));

var G__34580 = (i__27083__auto___34579 + (1));
i__27083__auto___34579 = G__34580;
continue;
} else {
}
break;
}

var G__34531 = args34529.length;
switch (G__34531) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34529.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28434__auto___34582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto___34582,out){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto___34582,out){
return (function (state_34555){
var state_val_34556 = (state_34555[(1)]);
if((state_val_34556 === (7))){
var inst_34537 = (state_34555[(7)]);
var inst_34537__$1 = (state_34555[(2)]);
var inst_34538 = (inst_34537__$1 == null);
var inst_34539 = cljs.core.not.call(null,inst_34538);
var state_34555__$1 = (function (){var statearr_34557 = state_34555;
(statearr_34557[(7)] = inst_34537__$1);

return statearr_34557;
})();
if(inst_34539){
var statearr_34558_34583 = state_34555__$1;
(statearr_34558_34583[(1)] = (8));

} else {
var statearr_34559_34584 = state_34555__$1;
(statearr_34559_34584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (1))){
var inst_34532 = (0);
var state_34555__$1 = (function (){var statearr_34560 = state_34555;
(statearr_34560[(8)] = inst_34532);

return statearr_34560;
})();
var statearr_34561_34585 = state_34555__$1;
(statearr_34561_34585[(2)] = null);

(statearr_34561_34585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (4))){
var state_34555__$1 = state_34555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34555__$1,(7),ch);
} else {
if((state_val_34556 === (6))){
var inst_34550 = (state_34555[(2)]);
var state_34555__$1 = state_34555;
var statearr_34562_34586 = state_34555__$1;
(statearr_34562_34586[(2)] = inst_34550);

(statearr_34562_34586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (3))){
var inst_34552 = (state_34555[(2)]);
var inst_34553 = cljs.core.async.close_BANG_.call(null,out);
var state_34555__$1 = (function (){var statearr_34563 = state_34555;
(statearr_34563[(9)] = inst_34552);

return statearr_34563;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34555__$1,inst_34553);
} else {
if((state_val_34556 === (2))){
var inst_34532 = (state_34555[(8)]);
var inst_34534 = (inst_34532 < n);
var state_34555__$1 = state_34555;
if(cljs.core.truth_(inst_34534)){
var statearr_34564_34587 = state_34555__$1;
(statearr_34564_34587[(1)] = (4));

} else {
var statearr_34565_34588 = state_34555__$1;
(statearr_34565_34588[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (11))){
var inst_34532 = (state_34555[(8)]);
var inst_34542 = (state_34555[(2)]);
var inst_34543 = (inst_34532 + (1));
var inst_34532__$1 = inst_34543;
var state_34555__$1 = (function (){var statearr_34566 = state_34555;
(statearr_34566[(10)] = inst_34542);

(statearr_34566[(8)] = inst_34532__$1);

return statearr_34566;
})();
var statearr_34567_34589 = state_34555__$1;
(statearr_34567_34589[(2)] = null);

(statearr_34567_34589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (9))){
var state_34555__$1 = state_34555;
var statearr_34568_34590 = state_34555__$1;
(statearr_34568_34590[(2)] = null);

(statearr_34568_34590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (5))){
var state_34555__$1 = state_34555;
var statearr_34569_34591 = state_34555__$1;
(statearr_34569_34591[(2)] = null);

(statearr_34569_34591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (10))){
var inst_34547 = (state_34555[(2)]);
var state_34555__$1 = state_34555;
var statearr_34570_34592 = state_34555__$1;
(statearr_34570_34592[(2)] = inst_34547);

(statearr_34570_34592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (8))){
var inst_34537 = (state_34555[(7)]);
var state_34555__$1 = state_34555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34555__$1,(11),out,inst_34537);
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
});})(c__28434__auto___34582,out))
;
return ((function (switch__28412__auto__,c__28434__auto___34582,out){
return (function() {
var cljs$core$async$state_machine__28413__auto__ = null;
var cljs$core$async$state_machine__28413__auto____0 = (function (){
var statearr_34574 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34574[(0)] = cljs$core$async$state_machine__28413__auto__);

(statearr_34574[(1)] = (1));

return statearr_34574;
});
var cljs$core$async$state_machine__28413__auto____1 = (function (state_34555){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_34555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e34575){if((e34575 instanceof Object)){
var ex__28416__auto__ = e34575;
var statearr_34576_34593 = state_34555;
(statearr_34576_34593[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34594 = state_34555;
state_34555 = G__34594;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$state_machine__28413__auto__ = function(state_34555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28413__auto____1.call(this,state_34555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28413__auto____0;
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28413__auto____1;
return cljs$core$async$state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto___34582,out))
})();
var state__28436__auto__ = (function (){var statearr_34577 = f__28435__auto__.call(null);
(statearr_34577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___34582);

return statearr_34577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto___34582,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34602 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34602 = (function (f,ch,meta34603){
this.f = f;
this.ch = ch;
this.meta34603 = meta34603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34604,meta34603__$1){
var self__ = this;
var _34604__$1 = this;
return (new cljs.core.async.t_cljs$core$async34602(self__.f,self__.ch,meta34603__$1));
});

cljs.core.async.t_cljs$core$async34602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34604){
var self__ = this;
var _34604__$1 = this;
return self__.meta34603;
});

cljs.core.async.t_cljs$core$async34602.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34602.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34602.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34602.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34602.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34605 = (function (f,ch,meta34603,_,fn1,meta34606){
this.f = f;
this.ch = ch;
this.meta34603 = meta34603;
this._ = _;
this.fn1 = fn1;
this.meta34606 = meta34606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34607,meta34606__$1){
var self__ = this;
var _34607__$1 = this;
return (new cljs.core.async.t_cljs$core$async34605(self__.f,self__.ch,self__.meta34603,self__._,self__.fn1,meta34606__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34607){
var self__ = this;
var _34607__$1 = this;
return self__.meta34606;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34605.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34605.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34595_SHARP_){
return f1.call(null,(((p1__34595_SHARP_ == null))?null:self__.f.call(null,p1__34595_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34605.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34603","meta34603",-839666329,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34602","cljs.core.async/t_cljs$core$async34602",-1139104540,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34606","meta34606",-2025580824,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34605";

cljs.core.async.t_cljs$core$async34605.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26580__auto__,writer__26581__auto__,opt__26582__auto__){
return cljs.core._write.call(null,writer__26581__auto__,"cljs.core.async/t_cljs$core$async34605");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34605 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34605(f__$1,ch__$1,meta34603__$1,___$2,fn1__$1,meta34606){
return (new cljs.core.async.t_cljs$core$async34605(f__$1,ch__$1,meta34603__$1,___$2,fn1__$1,meta34606));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34605(self__.f,self__.ch,self__.meta34603,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25962__auto__ = ret;
if(cljs.core.truth_(and__25962__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25962__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34602.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34602.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34603","meta34603",-839666329,null)], null);
});

cljs.core.async.t_cljs$core$async34602.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34602";

cljs.core.async.t_cljs$core$async34602.cljs$lang$ctorPrWriter = (function (this__26580__auto__,writer__26581__auto__,opt__26582__auto__){
return cljs.core._write.call(null,writer__26581__auto__,"cljs.core.async/t_cljs$core$async34602");
});

cljs.core.async.__GT_t_cljs$core$async34602 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34602(f__$1,ch__$1,meta34603){
return (new cljs.core.async.t_cljs$core$async34602(f__$1,ch__$1,meta34603));
});

}

return (new cljs.core.async.t_cljs$core$async34602(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34611 = (function (f,ch,meta34612){
this.f = f;
this.ch = ch;
this.meta34612 = meta34612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34613,meta34612__$1){
var self__ = this;
var _34613__$1 = this;
return (new cljs.core.async.t_cljs$core$async34611(self__.f,self__.ch,meta34612__$1));
});

cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34613){
var self__ = this;
var _34613__$1 = this;
return self__.meta34612;
});

cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34612","meta34612",344652967,null)], null);
});

cljs.core.async.t_cljs$core$async34611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34611";

cljs.core.async.t_cljs$core$async34611.cljs$lang$ctorPrWriter = (function (this__26580__auto__,writer__26581__auto__,opt__26582__auto__){
return cljs.core._write.call(null,writer__26581__auto__,"cljs.core.async/t_cljs$core$async34611");
});

cljs.core.async.__GT_t_cljs$core$async34611 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34611(f__$1,ch__$1,meta34612){
return (new cljs.core.async.t_cljs$core$async34611(f__$1,ch__$1,meta34612));
});

}

return (new cljs.core.async.t_cljs$core$async34611(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34617 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34617 = (function (p,ch,meta34618){
this.p = p;
this.ch = ch;
this.meta34618 = meta34618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34619,meta34618__$1){
var self__ = this;
var _34619__$1 = this;
return (new cljs.core.async.t_cljs$core$async34617(self__.p,self__.ch,meta34618__$1));
});

cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34619){
var self__ = this;
var _34619__$1 = this;
return self__.meta34618;
});

cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34618","meta34618",-499291493,null)], null);
});

cljs.core.async.t_cljs$core$async34617.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34617";

cljs.core.async.t_cljs$core$async34617.cljs$lang$ctorPrWriter = (function (this__26580__auto__,writer__26581__auto__,opt__26582__auto__){
return cljs.core._write.call(null,writer__26581__auto__,"cljs.core.async/t_cljs$core$async34617");
});

cljs.core.async.__GT_t_cljs$core$async34617 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34617(p__$1,ch__$1,meta34618){
return (new cljs.core.async.t_cljs$core$async34617(p__$1,ch__$1,meta34618));
});

}

return (new cljs.core.async.t_cljs$core$async34617(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args34620 = [];
var len__27082__auto___34664 = arguments.length;
var i__27083__auto___34665 = (0);
while(true){
if((i__27083__auto___34665 < len__27082__auto___34664)){
args34620.push((arguments[i__27083__auto___34665]));

var G__34666 = (i__27083__auto___34665 + (1));
i__27083__auto___34665 = G__34666;
continue;
} else {
}
break;
}

var G__34622 = args34620.length;
switch (G__34622) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34620.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28434__auto___34668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto___34668,out){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto___34668,out){
return (function (state_34643){
var state_val_34644 = (state_34643[(1)]);
if((state_val_34644 === (7))){
var inst_34639 = (state_34643[(2)]);
var state_34643__$1 = state_34643;
var statearr_34645_34669 = state_34643__$1;
(statearr_34645_34669[(2)] = inst_34639);

(statearr_34645_34669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34644 === (1))){
var state_34643__$1 = state_34643;
var statearr_34646_34670 = state_34643__$1;
(statearr_34646_34670[(2)] = null);

(statearr_34646_34670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34644 === (4))){
var inst_34625 = (state_34643[(7)]);
var inst_34625__$1 = (state_34643[(2)]);
var inst_34626 = (inst_34625__$1 == null);
var state_34643__$1 = (function (){var statearr_34647 = state_34643;
(statearr_34647[(7)] = inst_34625__$1);

return statearr_34647;
})();
if(cljs.core.truth_(inst_34626)){
var statearr_34648_34671 = state_34643__$1;
(statearr_34648_34671[(1)] = (5));

} else {
var statearr_34649_34672 = state_34643__$1;
(statearr_34649_34672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34644 === (6))){
var inst_34625 = (state_34643[(7)]);
var inst_34630 = p.call(null,inst_34625);
var state_34643__$1 = state_34643;
if(cljs.core.truth_(inst_34630)){
var statearr_34650_34673 = state_34643__$1;
(statearr_34650_34673[(1)] = (8));

} else {
var statearr_34651_34674 = state_34643__$1;
(statearr_34651_34674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34644 === (3))){
var inst_34641 = (state_34643[(2)]);
var state_34643__$1 = state_34643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34643__$1,inst_34641);
} else {
if((state_val_34644 === (2))){
var state_34643__$1 = state_34643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34643__$1,(4),ch);
} else {
if((state_val_34644 === (11))){
var inst_34633 = (state_34643[(2)]);
var state_34643__$1 = state_34643;
var statearr_34652_34675 = state_34643__$1;
(statearr_34652_34675[(2)] = inst_34633);

(statearr_34652_34675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34644 === (9))){
var state_34643__$1 = state_34643;
var statearr_34653_34676 = state_34643__$1;
(statearr_34653_34676[(2)] = null);

(statearr_34653_34676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34644 === (5))){
var inst_34628 = cljs.core.async.close_BANG_.call(null,out);
var state_34643__$1 = state_34643;
var statearr_34654_34677 = state_34643__$1;
(statearr_34654_34677[(2)] = inst_34628);

(statearr_34654_34677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34644 === (10))){
var inst_34636 = (state_34643[(2)]);
var state_34643__$1 = (function (){var statearr_34655 = state_34643;
(statearr_34655[(8)] = inst_34636);

return statearr_34655;
})();
var statearr_34656_34678 = state_34643__$1;
(statearr_34656_34678[(2)] = null);

(statearr_34656_34678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34644 === (8))){
var inst_34625 = (state_34643[(7)]);
var state_34643__$1 = state_34643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34643__$1,(11),out,inst_34625);
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
});})(c__28434__auto___34668,out))
;
return ((function (switch__28412__auto__,c__28434__auto___34668,out){
return (function() {
var cljs$core$async$state_machine__28413__auto__ = null;
var cljs$core$async$state_machine__28413__auto____0 = (function (){
var statearr_34660 = [null,null,null,null,null,null,null,null,null];
(statearr_34660[(0)] = cljs$core$async$state_machine__28413__auto__);

(statearr_34660[(1)] = (1));

return statearr_34660;
});
var cljs$core$async$state_machine__28413__auto____1 = (function (state_34643){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_34643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e34661){if((e34661 instanceof Object)){
var ex__28416__auto__ = e34661;
var statearr_34662_34679 = state_34643;
(statearr_34662_34679[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34680 = state_34643;
state_34643 = G__34680;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$state_machine__28413__auto__ = function(state_34643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28413__auto____1.call(this,state_34643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28413__auto____0;
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28413__auto____1;
return cljs$core$async$state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto___34668,out))
})();
var state__28436__auto__ = (function (){var statearr_34663 = f__28435__auto__.call(null);
(statearr_34663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___34668);

return statearr_34663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto___34668,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34681 = [];
var len__27082__auto___34684 = arguments.length;
var i__27083__auto___34685 = (0);
while(true){
if((i__27083__auto___34685 < len__27082__auto___34684)){
args34681.push((arguments[i__27083__auto___34685]));

var G__34686 = (i__27083__auto___34685 + (1));
i__27083__auto___34685 = G__34686;
continue;
} else {
}
break;
}

var G__34683 = args34681.length;
switch (G__34683) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34681.length)].join('')));

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
var c__28434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto__){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto__){
return (function (state_34853){
var state_val_34854 = (state_34853[(1)]);
if((state_val_34854 === (7))){
var inst_34849 = (state_34853[(2)]);
var state_34853__$1 = state_34853;
var statearr_34855_34896 = state_34853__$1;
(statearr_34855_34896[(2)] = inst_34849);

(statearr_34855_34896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (20))){
var inst_34819 = (state_34853[(7)]);
var inst_34830 = (state_34853[(2)]);
var inst_34831 = cljs.core.next.call(null,inst_34819);
var inst_34805 = inst_34831;
var inst_34806 = null;
var inst_34807 = (0);
var inst_34808 = (0);
var state_34853__$1 = (function (){var statearr_34856 = state_34853;
(statearr_34856[(8)] = inst_34808);

(statearr_34856[(9)] = inst_34830);

(statearr_34856[(10)] = inst_34807);

(statearr_34856[(11)] = inst_34805);

(statearr_34856[(12)] = inst_34806);

return statearr_34856;
})();
var statearr_34857_34897 = state_34853__$1;
(statearr_34857_34897[(2)] = null);

(statearr_34857_34897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (1))){
var state_34853__$1 = state_34853;
var statearr_34858_34898 = state_34853__$1;
(statearr_34858_34898[(2)] = null);

(statearr_34858_34898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (4))){
var inst_34794 = (state_34853[(13)]);
var inst_34794__$1 = (state_34853[(2)]);
var inst_34795 = (inst_34794__$1 == null);
var state_34853__$1 = (function (){var statearr_34859 = state_34853;
(statearr_34859[(13)] = inst_34794__$1);

return statearr_34859;
})();
if(cljs.core.truth_(inst_34795)){
var statearr_34860_34899 = state_34853__$1;
(statearr_34860_34899[(1)] = (5));

} else {
var statearr_34861_34900 = state_34853__$1;
(statearr_34861_34900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (15))){
var state_34853__$1 = state_34853;
var statearr_34865_34901 = state_34853__$1;
(statearr_34865_34901[(2)] = null);

(statearr_34865_34901[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (21))){
var state_34853__$1 = state_34853;
var statearr_34866_34902 = state_34853__$1;
(statearr_34866_34902[(2)] = null);

(statearr_34866_34902[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (13))){
var inst_34808 = (state_34853[(8)]);
var inst_34807 = (state_34853[(10)]);
var inst_34805 = (state_34853[(11)]);
var inst_34806 = (state_34853[(12)]);
var inst_34815 = (state_34853[(2)]);
var inst_34816 = (inst_34808 + (1));
var tmp34862 = inst_34807;
var tmp34863 = inst_34805;
var tmp34864 = inst_34806;
var inst_34805__$1 = tmp34863;
var inst_34806__$1 = tmp34864;
var inst_34807__$1 = tmp34862;
var inst_34808__$1 = inst_34816;
var state_34853__$1 = (function (){var statearr_34867 = state_34853;
(statearr_34867[(8)] = inst_34808__$1);

(statearr_34867[(10)] = inst_34807__$1);

(statearr_34867[(11)] = inst_34805__$1);

(statearr_34867[(12)] = inst_34806__$1);

(statearr_34867[(14)] = inst_34815);

return statearr_34867;
})();
var statearr_34868_34903 = state_34853__$1;
(statearr_34868_34903[(2)] = null);

(statearr_34868_34903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (22))){
var state_34853__$1 = state_34853;
var statearr_34869_34904 = state_34853__$1;
(statearr_34869_34904[(2)] = null);

(statearr_34869_34904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (6))){
var inst_34794 = (state_34853[(13)]);
var inst_34803 = f.call(null,inst_34794);
var inst_34804 = cljs.core.seq.call(null,inst_34803);
var inst_34805 = inst_34804;
var inst_34806 = null;
var inst_34807 = (0);
var inst_34808 = (0);
var state_34853__$1 = (function (){var statearr_34870 = state_34853;
(statearr_34870[(8)] = inst_34808);

(statearr_34870[(10)] = inst_34807);

(statearr_34870[(11)] = inst_34805);

(statearr_34870[(12)] = inst_34806);

return statearr_34870;
})();
var statearr_34871_34905 = state_34853__$1;
(statearr_34871_34905[(2)] = null);

(statearr_34871_34905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (17))){
var inst_34819 = (state_34853[(7)]);
var inst_34823 = cljs.core.chunk_first.call(null,inst_34819);
var inst_34824 = cljs.core.chunk_rest.call(null,inst_34819);
var inst_34825 = cljs.core.count.call(null,inst_34823);
var inst_34805 = inst_34824;
var inst_34806 = inst_34823;
var inst_34807 = inst_34825;
var inst_34808 = (0);
var state_34853__$1 = (function (){var statearr_34872 = state_34853;
(statearr_34872[(8)] = inst_34808);

(statearr_34872[(10)] = inst_34807);

(statearr_34872[(11)] = inst_34805);

(statearr_34872[(12)] = inst_34806);

return statearr_34872;
})();
var statearr_34873_34906 = state_34853__$1;
(statearr_34873_34906[(2)] = null);

(statearr_34873_34906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (3))){
var inst_34851 = (state_34853[(2)]);
var state_34853__$1 = state_34853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34853__$1,inst_34851);
} else {
if((state_val_34854 === (12))){
var inst_34839 = (state_34853[(2)]);
var state_34853__$1 = state_34853;
var statearr_34874_34907 = state_34853__$1;
(statearr_34874_34907[(2)] = inst_34839);

(statearr_34874_34907[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (2))){
var state_34853__$1 = state_34853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34853__$1,(4),in$);
} else {
if((state_val_34854 === (23))){
var inst_34847 = (state_34853[(2)]);
var state_34853__$1 = state_34853;
var statearr_34875_34908 = state_34853__$1;
(statearr_34875_34908[(2)] = inst_34847);

(statearr_34875_34908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (19))){
var inst_34834 = (state_34853[(2)]);
var state_34853__$1 = state_34853;
var statearr_34876_34909 = state_34853__$1;
(statearr_34876_34909[(2)] = inst_34834);

(statearr_34876_34909[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (11))){
var inst_34819 = (state_34853[(7)]);
var inst_34805 = (state_34853[(11)]);
var inst_34819__$1 = cljs.core.seq.call(null,inst_34805);
var state_34853__$1 = (function (){var statearr_34877 = state_34853;
(statearr_34877[(7)] = inst_34819__$1);

return statearr_34877;
})();
if(inst_34819__$1){
var statearr_34878_34910 = state_34853__$1;
(statearr_34878_34910[(1)] = (14));

} else {
var statearr_34879_34911 = state_34853__$1;
(statearr_34879_34911[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (9))){
var inst_34841 = (state_34853[(2)]);
var inst_34842 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34853__$1 = (function (){var statearr_34880 = state_34853;
(statearr_34880[(15)] = inst_34841);

return statearr_34880;
})();
if(cljs.core.truth_(inst_34842)){
var statearr_34881_34912 = state_34853__$1;
(statearr_34881_34912[(1)] = (21));

} else {
var statearr_34882_34913 = state_34853__$1;
(statearr_34882_34913[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (5))){
var inst_34797 = cljs.core.async.close_BANG_.call(null,out);
var state_34853__$1 = state_34853;
var statearr_34883_34914 = state_34853__$1;
(statearr_34883_34914[(2)] = inst_34797);

(statearr_34883_34914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (14))){
var inst_34819 = (state_34853[(7)]);
var inst_34821 = cljs.core.chunked_seq_QMARK_.call(null,inst_34819);
var state_34853__$1 = state_34853;
if(inst_34821){
var statearr_34884_34915 = state_34853__$1;
(statearr_34884_34915[(1)] = (17));

} else {
var statearr_34885_34916 = state_34853__$1;
(statearr_34885_34916[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (16))){
var inst_34837 = (state_34853[(2)]);
var state_34853__$1 = state_34853;
var statearr_34886_34917 = state_34853__$1;
(statearr_34886_34917[(2)] = inst_34837);

(statearr_34886_34917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (10))){
var inst_34808 = (state_34853[(8)]);
var inst_34806 = (state_34853[(12)]);
var inst_34813 = cljs.core._nth.call(null,inst_34806,inst_34808);
var state_34853__$1 = state_34853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34853__$1,(13),out,inst_34813);
} else {
if((state_val_34854 === (18))){
var inst_34819 = (state_34853[(7)]);
var inst_34828 = cljs.core.first.call(null,inst_34819);
var state_34853__$1 = state_34853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34853__$1,(20),out,inst_34828);
} else {
if((state_val_34854 === (8))){
var inst_34808 = (state_34853[(8)]);
var inst_34807 = (state_34853[(10)]);
var inst_34810 = (inst_34808 < inst_34807);
var inst_34811 = inst_34810;
var state_34853__$1 = state_34853;
if(cljs.core.truth_(inst_34811)){
var statearr_34887_34918 = state_34853__$1;
(statearr_34887_34918[(1)] = (10));

} else {
var statearr_34888_34919 = state_34853__$1;
(statearr_34888_34919[(1)] = (11));

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
});})(c__28434__auto__))
;
return ((function (switch__28412__auto__,c__28434__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28413__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28413__auto____0 = (function (){
var statearr_34892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34892[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28413__auto__);

(statearr_34892[(1)] = (1));

return statearr_34892;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28413__auto____1 = (function (state_34853){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_34853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e34893){if((e34893 instanceof Object)){
var ex__28416__auto__ = e34893;
var statearr_34894_34920 = state_34853;
(statearr_34894_34920[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34921 = state_34853;
state_34853 = G__34921;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28413__auto__ = function(state_34853){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28413__auto____1.call(this,state_34853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28413__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28413__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto__))
})();
var state__28436__auto__ = (function (){var statearr_34895 = f__28435__auto__.call(null);
(statearr_34895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto__);

return statearr_34895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto__))
);

return c__28434__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34922 = [];
var len__27082__auto___34925 = arguments.length;
var i__27083__auto___34926 = (0);
while(true){
if((i__27083__auto___34926 < len__27082__auto___34925)){
args34922.push((arguments[i__27083__auto___34926]));

var G__34927 = (i__27083__auto___34926 + (1));
i__27083__auto___34926 = G__34927;
continue;
} else {
}
break;
}

var G__34924 = args34922.length;
switch (G__34924) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34922.length)].join('')));

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
var args34929 = [];
var len__27082__auto___34932 = arguments.length;
var i__27083__auto___34933 = (0);
while(true){
if((i__27083__auto___34933 < len__27082__auto___34932)){
args34929.push((arguments[i__27083__auto___34933]));

var G__34934 = (i__27083__auto___34933 + (1));
i__27083__auto___34933 = G__34934;
continue;
} else {
}
break;
}

var G__34931 = args34929.length;
switch (G__34931) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34929.length)].join('')));

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
var args34936 = [];
var len__27082__auto___34987 = arguments.length;
var i__27083__auto___34988 = (0);
while(true){
if((i__27083__auto___34988 < len__27082__auto___34987)){
args34936.push((arguments[i__27083__auto___34988]));

var G__34989 = (i__27083__auto___34988 + (1));
i__27083__auto___34988 = G__34989;
continue;
} else {
}
break;
}

var G__34938 = args34936.length;
switch (G__34938) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34936.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28434__auto___34991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto___34991,out){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto___34991,out){
return (function (state_34962){
var state_val_34963 = (state_34962[(1)]);
if((state_val_34963 === (7))){
var inst_34957 = (state_34962[(2)]);
var state_34962__$1 = state_34962;
var statearr_34964_34992 = state_34962__$1;
(statearr_34964_34992[(2)] = inst_34957);

(statearr_34964_34992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34963 === (1))){
var inst_34939 = null;
var state_34962__$1 = (function (){var statearr_34965 = state_34962;
(statearr_34965[(7)] = inst_34939);

return statearr_34965;
})();
var statearr_34966_34993 = state_34962__$1;
(statearr_34966_34993[(2)] = null);

(statearr_34966_34993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34963 === (4))){
var inst_34942 = (state_34962[(8)]);
var inst_34942__$1 = (state_34962[(2)]);
var inst_34943 = (inst_34942__$1 == null);
var inst_34944 = cljs.core.not.call(null,inst_34943);
var state_34962__$1 = (function (){var statearr_34967 = state_34962;
(statearr_34967[(8)] = inst_34942__$1);

return statearr_34967;
})();
if(inst_34944){
var statearr_34968_34994 = state_34962__$1;
(statearr_34968_34994[(1)] = (5));

} else {
var statearr_34969_34995 = state_34962__$1;
(statearr_34969_34995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34963 === (6))){
var state_34962__$1 = state_34962;
var statearr_34970_34996 = state_34962__$1;
(statearr_34970_34996[(2)] = null);

(statearr_34970_34996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34963 === (3))){
var inst_34959 = (state_34962[(2)]);
var inst_34960 = cljs.core.async.close_BANG_.call(null,out);
var state_34962__$1 = (function (){var statearr_34971 = state_34962;
(statearr_34971[(9)] = inst_34959);

return statearr_34971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34962__$1,inst_34960);
} else {
if((state_val_34963 === (2))){
var state_34962__$1 = state_34962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34962__$1,(4),ch);
} else {
if((state_val_34963 === (11))){
var inst_34942 = (state_34962[(8)]);
var inst_34951 = (state_34962[(2)]);
var inst_34939 = inst_34942;
var state_34962__$1 = (function (){var statearr_34972 = state_34962;
(statearr_34972[(10)] = inst_34951);

(statearr_34972[(7)] = inst_34939);

return statearr_34972;
})();
var statearr_34973_34997 = state_34962__$1;
(statearr_34973_34997[(2)] = null);

(statearr_34973_34997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34963 === (9))){
var inst_34942 = (state_34962[(8)]);
var state_34962__$1 = state_34962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34962__$1,(11),out,inst_34942);
} else {
if((state_val_34963 === (5))){
var inst_34942 = (state_34962[(8)]);
var inst_34939 = (state_34962[(7)]);
var inst_34946 = cljs.core._EQ_.call(null,inst_34942,inst_34939);
var state_34962__$1 = state_34962;
if(inst_34946){
var statearr_34975_34998 = state_34962__$1;
(statearr_34975_34998[(1)] = (8));

} else {
var statearr_34976_34999 = state_34962__$1;
(statearr_34976_34999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34963 === (10))){
var inst_34954 = (state_34962[(2)]);
var state_34962__$1 = state_34962;
var statearr_34977_35000 = state_34962__$1;
(statearr_34977_35000[(2)] = inst_34954);

(statearr_34977_35000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34963 === (8))){
var inst_34939 = (state_34962[(7)]);
var tmp34974 = inst_34939;
var inst_34939__$1 = tmp34974;
var state_34962__$1 = (function (){var statearr_34978 = state_34962;
(statearr_34978[(7)] = inst_34939__$1);

return statearr_34978;
})();
var statearr_34979_35001 = state_34962__$1;
(statearr_34979_35001[(2)] = null);

(statearr_34979_35001[(1)] = (2));


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
});})(c__28434__auto___34991,out))
;
return ((function (switch__28412__auto__,c__28434__auto___34991,out){
return (function() {
var cljs$core$async$state_machine__28413__auto__ = null;
var cljs$core$async$state_machine__28413__auto____0 = (function (){
var statearr_34983 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34983[(0)] = cljs$core$async$state_machine__28413__auto__);

(statearr_34983[(1)] = (1));

return statearr_34983;
});
var cljs$core$async$state_machine__28413__auto____1 = (function (state_34962){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_34962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e34984){if((e34984 instanceof Object)){
var ex__28416__auto__ = e34984;
var statearr_34985_35002 = state_34962;
(statearr_34985_35002[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35003 = state_34962;
state_34962 = G__35003;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$state_machine__28413__auto__ = function(state_34962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28413__auto____1.call(this,state_34962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28413__auto____0;
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28413__auto____1;
return cljs$core$async$state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto___34991,out))
})();
var state__28436__auto__ = (function (){var statearr_34986 = f__28435__auto__.call(null);
(statearr_34986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___34991);

return statearr_34986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto___34991,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args35004 = [];
var len__27082__auto___35074 = arguments.length;
var i__27083__auto___35075 = (0);
while(true){
if((i__27083__auto___35075 < len__27082__auto___35074)){
args35004.push((arguments[i__27083__auto___35075]));

var G__35076 = (i__27083__auto___35075 + (1));
i__27083__auto___35075 = G__35076;
continue;
} else {
}
break;
}

var G__35006 = args35004.length;
switch (G__35006) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35004.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28434__auto___35078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto___35078,out){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto___35078,out){
return (function (state_35044){
var state_val_35045 = (state_35044[(1)]);
if((state_val_35045 === (7))){
var inst_35040 = (state_35044[(2)]);
var state_35044__$1 = state_35044;
var statearr_35046_35079 = state_35044__$1;
(statearr_35046_35079[(2)] = inst_35040);

(statearr_35046_35079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (1))){
var inst_35007 = (new Array(n));
var inst_35008 = inst_35007;
var inst_35009 = (0);
var state_35044__$1 = (function (){var statearr_35047 = state_35044;
(statearr_35047[(7)] = inst_35008);

(statearr_35047[(8)] = inst_35009);

return statearr_35047;
})();
var statearr_35048_35080 = state_35044__$1;
(statearr_35048_35080[(2)] = null);

(statearr_35048_35080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (4))){
var inst_35012 = (state_35044[(9)]);
var inst_35012__$1 = (state_35044[(2)]);
var inst_35013 = (inst_35012__$1 == null);
var inst_35014 = cljs.core.not.call(null,inst_35013);
var state_35044__$1 = (function (){var statearr_35049 = state_35044;
(statearr_35049[(9)] = inst_35012__$1);

return statearr_35049;
})();
if(inst_35014){
var statearr_35050_35081 = state_35044__$1;
(statearr_35050_35081[(1)] = (5));

} else {
var statearr_35051_35082 = state_35044__$1;
(statearr_35051_35082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (15))){
var inst_35034 = (state_35044[(2)]);
var state_35044__$1 = state_35044;
var statearr_35052_35083 = state_35044__$1;
(statearr_35052_35083[(2)] = inst_35034);

(statearr_35052_35083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (13))){
var state_35044__$1 = state_35044;
var statearr_35053_35084 = state_35044__$1;
(statearr_35053_35084[(2)] = null);

(statearr_35053_35084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (6))){
var inst_35009 = (state_35044[(8)]);
var inst_35030 = (inst_35009 > (0));
var state_35044__$1 = state_35044;
if(cljs.core.truth_(inst_35030)){
var statearr_35054_35085 = state_35044__$1;
(statearr_35054_35085[(1)] = (12));

} else {
var statearr_35055_35086 = state_35044__$1;
(statearr_35055_35086[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (3))){
var inst_35042 = (state_35044[(2)]);
var state_35044__$1 = state_35044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35044__$1,inst_35042);
} else {
if((state_val_35045 === (12))){
var inst_35008 = (state_35044[(7)]);
var inst_35032 = cljs.core.vec.call(null,inst_35008);
var state_35044__$1 = state_35044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35044__$1,(15),out,inst_35032);
} else {
if((state_val_35045 === (2))){
var state_35044__$1 = state_35044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35044__$1,(4),ch);
} else {
if((state_val_35045 === (11))){
var inst_35024 = (state_35044[(2)]);
var inst_35025 = (new Array(n));
var inst_35008 = inst_35025;
var inst_35009 = (0);
var state_35044__$1 = (function (){var statearr_35056 = state_35044;
(statearr_35056[(7)] = inst_35008);

(statearr_35056[(10)] = inst_35024);

(statearr_35056[(8)] = inst_35009);

return statearr_35056;
})();
var statearr_35057_35087 = state_35044__$1;
(statearr_35057_35087[(2)] = null);

(statearr_35057_35087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (9))){
var inst_35008 = (state_35044[(7)]);
var inst_35022 = cljs.core.vec.call(null,inst_35008);
var state_35044__$1 = state_35044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35044__$1,(11),out,inst_35022);
} else {
if((state_val_35045 === (5))){
var inst_35008 = (state_35044[(7)]);
var inst_35017 = (state_35044[(11)]);
var inst_35009 = (state_35044[(8)]);
var inst_35012 = (state_35044[(9)]);
var inst_35016 = (inst_35008[inst_35009] = inst_35012);
var inst_35017__$1 = (inst_35009 + (1));
var inst_35018 = (inst_35017__$1 < n);
var state_35044__$1 = (function (){var statearr_35058 = state_35044;
(statearr_35058[(11)] = inst_35017__$1);

(statearr_35058[(12)] = inst_35016);

return statearr_35058;
})();
if(cljs.core.truth_(inst_35018)){
var statearr_35059_35088 = state_35044__$1;
(statearr_35059_35088[(1)] = (8));

} else {
var statearr_35060_35089 = state_35044__$1;
(statearr_35060_35089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (14))){
var inst_35037 = (state_35044[(2)]);
var inst_35038 = cljs.core.async.close_BANG_.call(null,out);
var state_35044__$1 = (function (){var statearr_35062 = state_35044;
(statearr_35062[(13)] = inst_35037);

return statearr_35062;
})();
var statearr_35063_35090 = state_35044__$1;
(statearr_35063_35090[(2)] = inst_35038);

(statearr_35063_35090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (10))){
var inst_35028 = (state_35044[(2)]);
var state_35044__$1 = state_35044;
var statearr_35064_35091 = state_35044__$1;
(statearr_35064_35091[(2)] = inst_35028);

(statearr_35064_35091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (8))){
var inst_35008 = (state_35044[(7)]);
var inst_35017 = (state_35044[(11)]);
var tmp35061 = inst_35008;
var inst_35008__$1 = tmp35061;
var inst_35009 = inst_35017;
var state_35044__$1 = (function (){var statearr_35065 = state_35044;
(statearr_35065[(7)] = inst_35008__$1);

(statearr_35065[(8)] = inst_35009);

return statearr_35065;
})();
var statearr_35066_35092 = state_35044__$1;
(statearr_35066_35092[(2)] = null);

(statearr_35066_35092[(1)] = (2));


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
});})(c__28434__auto___35078,out))
;
return ((function (switch__28412__auto__,c__28434__auto___35078,out){
return (function() {
var cljs$core$async$state_machine__28413__auto__ = null;
var cljs$core$async$state_machine__28413__auto____0 = (function (){
var statearr_35070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35070[(0)] = cljs$core$async$state_machine__28413__auto__);

(statearr_35070[(1)] = (1));

return statearr_35070;
});
var cljs$core$async$state_machine__28413__auto____1 = (function (state_35044){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_35044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e35071){if((e35071 instanceof Object)){
var ex__28416__auto__ = e35071;
var statearr_35072_35093 = state_35044;
(statearr_35072_35093[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35094 = state_35044;
state_35044 = G__35094;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$state_machine__28413__auto__ = function(state_35044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28413__auto____1.call(this,state_35044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28413__auto____0;
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28413__auto____1;
return cljs$core$async$state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto___35078,out))
})();
var state__28436__auto__ = (function (){var statearr_35073 = f__28435__auto__.call(null);
(statearr_35073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___35078);

return statearr_35073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto___35078,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args35095 = [];
var len__27082__auto___35169 = arguments.length;
var i__27083__auto___35170 = (0);
while(true){
if((i__27083__auto___35170 < len__27082__auto___35169)){
args35095.push((arguments[i__27083__auto___35170]));

var G__35171 = (i__27083__auto___35170 + (1));
i__27083__auto___35170 = G__35171;
continue;
} else {
}
break;
}

var G__35097 = args35095.length;
switch (G__35097) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35095.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28434__auto___35173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto___35173,out){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto___35173,out){
return (function (state_35139){
var state_val_35140 = (state_35139[(1)]);
if((state_val_35140 === (7))){
var inst_35135 = (state_35139[(2)]);
var state_35139__$1 = state_35139;
var statearr_35141_35174 = state_35139__$1;
(statearr_35141_35174[(2)] = inst_35135);

(statearr_35141_35174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35140 === (1))){
var inst_35098 = [];
var inst_35099 = inst_35098;
var inst_35100 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35139__$1 = (function (){var statearr_35142 = state_35139;
(statearr_35142[(7)] = inst_35099);

(statearr_35142[(8)] = inst_35100);

return statearr_35142;
})();
var statearr_35143_35175 = state_35139__$1;
(statearr_35143_35175[(2)] = null);

(statearr_35143_35175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35140 === (4))){
var inst_35103 = (state_35139[(9)]);
var inst_35103__$1 = (state_35139[(2)]);
var inst_35104 = (inst_35103__$1 == null);
var inst_35105 = cljs.core.not.call(null,inst_35104);
var state_35139__$1 = (function (){var statearr_35144 = state_35139;
(statearr_35144[(9)] = inst_35103__$1);

return statearr_35144;
})();
if(inst_35105){
var statearr_35145_35176 = state_35139__$1;
(statearr_35145_35176[(1)] = (5));

} else {
var statearr_35146_35177 = state_35139__$1;
(statearr_35146_35177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35140 === (15))){
var inst_35129 = (state_35139[(2)]);
var state_35139__$1 = state_35139;
var statearr_35147_35178 = state_35139__$1;
(statearr_35147_35178[(2)] = inst_35129);

(statearr_35147_35178[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35140 === (13))){
var state_35139__$1 = state_35139;
var statearr_35148_35179 = state_35139__$1;
(statearr_35148_35179[(2)] = null);

(statearr_35148_35179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35140 === (6))){
var inst_35099 = (state_35139[(7)]);
var inst_35124 = inst_35099.length;
var inst_35125 = (inst_35124 > (0));
var state_35139__$1 = state_35139;
if(cljs.core.truth_(inst_35125)){
var statearr_35149_35180 = state_35139__$1;
(statearr_35149_35180[(1)] = (12));

} else {
var statearr_35150_35181 = state_35139__$1;
(statearr_35150_35181[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35140 === (3))){
var inst_35137 = (state_35139[(2)]);
var state_35139__$1 = state_35139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35139__$1,inst_35137);
} else {
if((state_val_35140 === (12))){
var inst_35099 = (state_35139[(7)]);
var inst_35127 = cljs.core.vec.call(null,inst_35099);
var state_35139__$1 = state_35139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35139__$1,(15),out,inst_35127);
} else {
if((state_val_35140 === (2))){
var state_35139__$1 = state_35139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35139__$1,(4),ch);
} else {
if((state_val_35140 === (11))){
var inst_35103 = (state_35139[(9)]);
var inst_35107 = (state_35139[(10)]);
var inst_35117 = (state_35139[(2)]);
var inst_35118 = [];
var inst_35119 = inst_35118.push(inst_35103);
var inst_35099 = inst_35118;
var inst_35100 = inst_35107;
var state_35139__$1 = (function (){var statearr_35151 = state_35139;
(statearr_35151[(11)] = inst_35119);

(statearr_35151[(12)] = inst_35117);

(statearr_35151[(7)] = inst_35099);

(statearr_35151[(8)] = inst_35100);

return statearr_35151;
})();
var statearr_35152_35182 = state_35139__$1;
(statearr_35152_35182[(2)] = null);

(statearr_35152_35182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35140 === (9))){
var inst_35099 = (state_35139[(7)]);
var inst_35115 = cljs.core.vec.call(null,inst_35099);
var state_35139__$1 = state_35139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35139__$1,(11),out,inst_35115);
} else {
if((state_val_35140 === (5))){
var inst_35103 = (state_35139[(9)]);
var inst_35107 = (state_35139[(10)]);
var inst_35100 = (state_35139[(8)]);
var inst_35107__$1 = f.call(null,inst_35103);
var inst_35108 = cljs.core._EQ_.call(null,inst_35107__$1,inst_35100);
var inst_35109 = cljs.core.keyword_identical_QMARK_.call(null,inst_35100,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35110 = (inst_35108) || (inst_35109);
var state_35139__$1 = (function (){var statearr_35153 = state_35139;
(statearr_35153[(10)] = inst_35107__$1);

return statearr_35153;
})();
if(cljs.core.truth_(inst_35110)){
var statearr_35154_35183 = state_35139__$1;
(statearr_35154_35183[(1)] = (8));

} else {
var statearr_35155_35184 = state_35139__$1;
(statearr_35155_35184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35140 === (14))){
var inst_35132 = (state_35139[(2)]);
var inst_35133 = cljs.core.async.close_BANG_.call(null,out);
var state_35139__$1 = (function (){var statearr_35157 = state_35139;
(statearr_35157[(13)] = inst_35132);

return statearr_35157;
})();
var statearr_35158_35185 = state_35139__$1;
(statearr_35158_35185[(2)] = inst_35133);

(statearr_35158_35185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35140 === (10))){
var inst_35122 = (state_35139[(2)]);
var state_35139__$1 = state_35139;
var statearr_35159_35186 = state_35139__$1;
(statearr_35159_35186[(2)] = inst_35122);

(statearr_35159_35186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35140 === (8))){
var inst_35103 = (state_35139[(9)]);
var inst_35107 = (state_35139[(10)]);
var inst_35099 = (state_35139[(7)]);
var inst_35112 = inst_35099.push(inst_35103);
var tmp35156 = inst_35099;
var inst_35099__$1 = tmp35156;
var inst_35100 = inst_35107;
var state_35139__$1 = (function (){var statearr_35160 = state_35139;
(statearr_35160[(14)] = inst_35112);

(statearr_35160[(7)] = inst_35099__$1);

(statearr_35160[(8)] = inst_35100);

return statearr_35160;
})();
var statearr_35161_35187 = state_35139__$1;
(statearr_35161_35187[(2)] = null);

(statearr_35161_35187[(1)] = (2));


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
});})(c__28434__auto___35173,out))
;
return ((function (switch__28412__auto__,c__28434__auto___35173,out){
return (function() {
var cljs$core$async$state_machine__28413__auto__ = null;
var cljs$core$async$state_machine__28413__auto____0 = (function (){
var statearr_35165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35165[(0)] = cljs$core$async$state_machine__28413__auto__);

(statearr_35165[(1)] = (1));

return statearr_35165;
});
var cljs$core$async$state_machine__28413__auto____1 = (function (state_35139){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_35139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e35166){if((e35166 instanceof Object)){
var ex__28416__auto__ = e35166;
var statearr_35167_35188 = state_35139;
(statearr_35167_35188[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35189 = state_35139;
state_35139 = G__35189;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
cljs$core$async$state_machine__28413__auto__ = function(state_35139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28413__auto____1.call(this,state_35139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28413__auto____0;
cljs$core$async$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28413__auto____1;
return cljs$core$async$state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto___35173,out))
})();
var state__28436__auto__ = (function (){var statearr_35168 = f__28435__auto__.call(null);
(statearr_35168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___35173);

return statearr_35168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto___35173,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1480126465726