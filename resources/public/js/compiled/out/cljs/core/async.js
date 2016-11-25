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
var args32296 = [];
var len__26651__auto___32302 = arguments.length;
var i__26652__auto___32303 = (0);
while(true){
if((i__26652__auto___32303 < len__26651__auto___32302)){
args32296.push((arguments[i__26652__auto___32303]));

var G__32304 = (i__26652__auto___32303 + (1));
i__26652__auto___32303 = G__32304;
continue;
} else {
}
break;
}

var G__32298 = args32296.length;
switch (G__32298) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32296.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32299 = (function (f,blockable,meta32300){
this.f = f;
this.blockable = blockable;
this.meta32300 = meta32300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32301,meta32300__$1){
var self__ = this;
var _32301__$1 = this;
return (new cljs.core.async.t_cljs$core$async32299(self__.f,self__.blockable,meta32300__$1));
});

cljs.core.async.t_cljs$core$async32299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32301){
var self__ = this;
var _32301__$1 = this;
return self__.meta32300;
});

cljs.core.async.t_cljs$core$async32299.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32299.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32300","meta32300",1496193381,null)], null);
});

cljs.core.async.t_cljs$core$async32299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32299";

cljs.core.async.t_cljs$core$async32299.cljs$lang$ctorPrWriter = (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cljs.core.async/t_cljs$core$async32299");
});

cljs.core.async.__GT_t_cljs$core$async32299 = (function cljs$core$async$__GT_t_cljs$core$async32299(f__$1,blockable__$1,meta32300){
return (new cljs.core.async.t_cljs$core$async32299(f__$1,blockable__$1,meta32300));
});

}

return (new cljs.core.async.t_cljs$core$async32299(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args32308 = [];
var len__26651__auto___32311 = arguments.length;
var i__26652__auto___32312 = (0);
while(true){
if((i__26652__auto___32312 < len__26651__auto___32311)){
args32308.push((arguments[i__26652__auto___32312]));

var G__32313 = (i__26652__auto___32312 + (1));
i__26652__auto___32312 = G__32313;
continue;
} else {
}
break;
}

var G__32310 = args32308.length;
switch (G__32310) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32308.length)].join('')));

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
var args32315 = [];
var len__26651__auto___32318 = arguments.length;
var i__26652__auto___32319 = (0);
while(true){
if((i__26652__auto___32319 < len__26651__auto___32318)){
args32315.push((arguments[i__26652__auto___32319]));

var G__32320 = (i__26652__auto___32319 + (1));
i__26652__auto___32319 = G__32320;
continue;
} else {
}
break;
}

var G__32317 = args32315.length;
switch (G__32317) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32315.length)].join('')));

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
var args32322 = [];
var len__26651__auto___32325 = arguments.length;
var i__26652__auto___32326 = (0);
while(true){
if((i__26652__auto___32326 < len__26651__auto___32325)){
args32322.push((arguments[i__26652__auto___32326]));

var G__32327 = (i__26652__auto___32326 + (1));
i__26652__auto___32326 = G__32327;
continue;
} else {
}
break;
}

var G__32324 = args32322.length;
switch (G__32324) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32322.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32329 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32329);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32329,ret){
return (function (){
return fn1.call(null,val_32329);
});})(val_32329,ret))
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
var args32330 = [];
var len__26651__auto___32333 = arguments.length;
var i__26652__auto___32334 = (0);
while(true){
if((i__26652__auto___32334 < len__26651__auto___32333)){
args32330.push((arguments[i__26652__auto___32334]));

var G__32335 = (i__26652__auto___32334 + (1));
i__26652__auto___32334 = G__32335;
continue;
} else {
}
break;
}

var G__32332 = args32330.length;
switch (G__32332) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32330.length)].join('')));

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
var n__26491__auto___32337 = n;
var x_32338 = (0);
while(true){
if((x_32338 < n__26491__auto___32337)){
(a[x_32338] = (0));

var G__32339 = (x_32338 + (1));
x_32338 = G__32339;
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

var G__32340 = (i + (1));
i = G__32340;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32344 = (function (alt_flag,flag,meta32345){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta32345 = meta32345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32346,meta32345__$1){
var self__ = this;
var _32346__$1 = this;
return (new cljs.core.async.t_cljs$core$async32344(self__.alt_flag,self__.flag,meta32345__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32346){
var self__ = this;
var _32346__$1 = this;
return self__.meta32345;
});})(flag))
;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32344.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32345","meta32345",300726568,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32344";

cljs.core.async.t_cljs$core$async32344.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cljs.core.async/t_cljs$core$async32344");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32344 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32344(alt_flag__$1,flag__$1,meta32345){
return (new cljs.core.async.t_cljs$core$async32344(alt_flag__$1,flag__$1,meta32345));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32344(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32350 = (function (alt_handler,flag,cb,meta32351){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta32351 = meta32351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32352,meta32351__$1){
var self__ = this;
var _32352__$1 = this;
return (new cljs.core.async.t_cljs$core$async32350(self__.alt_handler,self__.flag,self__.cb,meta32351__$1));
});

cljs.core.async.t_cljs$core$async32350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32352){
var self__ = this;
var _32352__$1 = this;
return self__.meta32351;
});

cljs.core.async.t_cljs$core$async32350.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32350.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32351","meta32351",-1776046549,null)], null);
});

cljs.core.async.t_cljs$core$async32350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32350";

cljs.core.async.t_cljs$core$async32350.cljs$lang$ctorPrWriter = (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cljs.core.async/t_cljs$core$async32350");
});

cljs.core.async.__GT_t_cljs$core$async32350 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32350(alt_handler__$1,flag__$1,cb__$1,meta32351){
return (new cljs.core.async.t_cljs$core$async32350(alt_handler__$1,flag__$1,cb__$1,meta32351));
});

}

return (new cljs.core.async.t_cljs$core$async32350(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32353_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32353_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32354_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32354_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25576__auto__ = wport;
if(cljs.core.truth_(or__25576__auto__)){
return or__25576__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32355 = (i + (1));
i = G__32355;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25576__auto__ = ret;
if(cljs.core.truth_(or__25576__auto__)){
return or__25576__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25564__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25564__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25564__auto__;
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
var args__26658__auto__ = [];
var len__26651__auto___32361 = arguments.length;
var i__26652__auto___32362 = (0);
while(true){
if((i__26652__auto___32362 < len__26651__auto___32361)){
args__26658__auto__.push((arguments[i__26652__auto___32362]));

var G__32363 = (i__26652__auto___32362 + (1));
i__26652__auto___32362 = G__32363;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((1) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26659__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32358){
var map__32359 = p__32358;
var map__32359__$1 = ((((!((map__32359 == null)))?((((map__32359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32359):map__32359);
var opts = map__32359__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32356){
var G__32357 = cljs.core.first.call(null,seq32356);
var seq32356__$1 = cljs.core.next.call(null,seq32356);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32357,seq32356__$1);
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
var args32364 = [];
var len__26651__auto___32414 = arguments.length;
var i__26652__auto___32415 = (0);
while(true){
if((i__26652__auto___32415 < len__26651__auto___32414)){
args32364.push((arguments[i__26652__auto___32415]));

var G__32416 = (i__26652__auto___32415 + (1));
i__26652__auto___32415 = G__32416;
continue;
} else {
}
break;
}

var G__32366 = args32364.length;
switch (G__32366) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32364.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28307__auto___32418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto___32418){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto___32418){
return (function (state_32390){
var state_val_32391 = (state_32390[(1)]);
if((state_val_32391 === (7))){
var inst_32386 = (state_32390[(2)]);
var state_32390__$1 = state_32390;
var statearr_32392_32419 = state_32390__$1;
(statearr_32392_32419[(2)] = inst_32386);

(statearr_32392_32419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (1))){
var state_32390__$1 = state_32390;
var statearr_32393_32420 = state_32390__$1;
(statearr_32393_32420[(2)] = null);

(statearr_32393_32420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (4))){
var inst_32369 = (state_32390[(7)]);
var inst_32369__$1 = (state_32390[(2)]);
var inst_32370 = (inst_32369__$1 == null);
var state_32390__$1 = (function (){var statearr_32394 = state_32390;
(statearr_32394[(7)] = inst_32369__$1);

return statearr_32394;
})();
if(cljs.core.truth_(inst_32370)){
var statearr_32395_32421 = state_32390__$1;
(statearr_32395_32421[(1)] = (5));

} else {
var statearr_32396_32422 = state_32390__$1;
(statearr_32396_32422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (13))){
var state_32390__$1 = state_32390;
var statearr_32397_32423 = state_32390__$1;
(statearr_32397_32423[(2)] = null);

(statearr_32397_32423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (6))){
var inst_32369 = (state_32390[(7)]);
var state_32390__$1 = state_32390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32390__$1,(11),to,inst_32369);
} else {
if((state_val_32391 === (3))){
var inst_32388 = (state_32390[(2)]);
var state_32390__$1 = state_32390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32390__$1,inst_32388);
} else {
if((state_val_32391 === (12))){
var state_32390__$1 = state_32390;
var statearr_32398_32424 = state_32390__$1;
(statearr_32398_32424[(2)] = null);

(statearr_32398_32424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (2))){
var state_32390__$1 = state_32390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32390__$1,(4),from);
} else {
if((state_val_32391 === (11))){
var inst_32379 = (state_32390[(2)]);
var state_32390__$1 = state_32390;
if(cljs.core.truth_(inst_32379)){
var statearr_32399_32425 = state_32390__$1;
(statearr_32399_32425[(1)] = (12));

} else {
var statearr_32400_32426 = state_32390__$1;
(statearr_32400_32426[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (9))){
var state_32390__$1 = state_32390;
var statearr_32401_32427 = state_32390__$1;
(statearr_32401_32427[(2)] = null);

(statearr_32401_32427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (5))){
var state_32390__$1 = state_32390;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32402_32428 = state_32390__$1;
(statearr_32402_32428[(1)] = (8));

} else {
var statearr_32403_32429 = state_32390__$1;
(statearr_32403_32429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (14))){
var inst_32384 = (state_32390[(2)]);
var state_32390__$1 = state_32390;
var statearr_32404_32430 = state_32390__$1;
(statearr_32404_32430[(2)] = inst_32384);

(statearr_32404_32430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (10))){
var inst_32376 = (state_32390[(2)]);
var state_32390__$1 = state_32390;
var statearr_32405_32431 = state_32390__$1;
(statearr_32405_32431[(2)] = inst_32376);

(statearr_32405_32431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (8))){
var inst_32373 = cljs.core.async.close_BANG_.call(null,to);
var state_32390__$1 = state_32390;
var statearr_32406_32432 = state_32390__$1;
(statearr_32406_32432[(2)] = inst_32373);

(statearr_32406_32432[(1)] = (10));


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
});})(c__28307__auto___32418))
;
return ((function (switch__28286__auto__,c__28307__auto___32418){
return (function() {
var cljs$core$async$state_machine__28287__auto__ = null;
var cljs$core$async$state_machine__28287__auto____0 = (function (){
var statearr_32410 = [null,null,null,null,null,null,null,null];
(statearr_32410[(0)] = cljs$core$async$state_machine__28287__auto__);

(statearr_32410[(1)] = (1));

return statearr_32410;
});
var cljs$core$async$state_machine__28287__auto____1 = (function (state_32390){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_32390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e32411){if((e32411 instanceof Object)){
var ex__28290__auto__ = e32411;
var statearr_32412_32433 = state_32390;
(statearr_32412_32433[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32434 = state_32390;
state_32390 = G__32434;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$state_machine__28287__auto__ = function(state_32390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28287__auto____1.call(this,state_32390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28287__auto____0;
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28287__auto____1;
return cljs$core$async$state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto___32418))
})();
var state__28309__auto__ = (function (){var statearr_32413 = f__28308__auto__.call(null);
(statearr_32413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___32418);

return statearr_32413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto___32418))
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
return (function (p__32622){
var vec__32623 = p__32622;
var v = cljs.core.nth.call(null,vec__32623,(0),null);
var p = cljs.core.nth.call(null,vec__32623,(1),null);
var job = vec__32623;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28307__auto___32809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto___32809,res,vec__32623,v,p,job,jobs,results){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto___32809,res,vec__32623,v,p,job,jobs,results){
return (function (state_32630){
var state_val_32631 = (state_32630[(1)]);
if((state_val_32631 === (1))){
var state_32630__$1 = state_32630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32630__$1,(2),res,v);
} else {
if((state_val_32631 === (2))){
var inst_32627 = (state_32630[(2)]);
var inst_32628 = cljs.core.async.close_BANG_.call(null,res);
var state_32630__$1 = (function (){var statearr_32632 = state_32630;
(statearr_32632[(7)] = inst_32627);

return statearr_32632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32630__$1,inst_32628);
} else {
return null;
}
}
});})(c__28307__auto___32809,res,vec__32623,v,p,job,jobs,results))
;
return ((function (switch__28286__auto__,c__28307__auto___32809,res,vec__32623,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____0 = (function (){
var statearr_32636 = [null,null,null,null,null,null,null,null];
(statearr_32636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__);

(statearr_32636[(1)] = (1));

return statearr_32636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____1 = (function (state_32630){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_32630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e32637){if((e32637 instanceof Object)){
var ex__28290__auto__ = e32637;
var statearr_32638_32810 = state_32630;
(statearr_32638_32810[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32811 = state_32630;
state_32630 = G__32811;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__ = function(state_32630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____1.call(this,state_32630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto___32809,res,vec__32623,v,p,job,jobs,results))
})();
var state__28309__auto__ = (function (){var statearr_32639 = f__28308__auto__.call(null);
(statearr_32639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___32809);

return statearr_32639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto___32809,res,vec__32623,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32640){
var vec__32641 = p__32640;
var v = cljs.core.nth.call(null,vec__32641,(0),null);
var p = cljs.core.nth.call(null,vec__32641,(1),null);
var job = vec__32641;
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
var n__26491__auto___32812 = n;
var __32813 = (0);
while(true){
if((__32813 < n__26491__auto___32812)){
var G__32644_32814 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32644_32814) {
case "compute":
var c__28307__auto___32816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32813,c__28307__auto___32816,G__32644_32814,n__26491__auto___32812,jobs,results,process,async){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (__32813,c__28307__auto___32816,G__32644_32814,n__26491__auto___32812,jobs,results,process,async){
return (function (state_32657){
var state_val_32658 = (state_32657[(1)]);
if((state_val_32658 === (1))){
var state_32657__$1 = state_32657;
var statearr_32659_32817 = state_32657__$1;
(statearr_32659_32817[(2)] = null);

(statearr_32659_32817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (2))){
var state_32657__$1 = state_32657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32657__$1,(4),jobs);
} else {
if((state_val_32658 === (3))){
var inst_32655 = (state_32657[(2)]);
var state_32657__$1 = state_32657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32657__$1,inst_32655);
} else {
if((state_val_32658 === (4))){
var inst_32647 = (state_32657[(2)]);
var inst_32648 = process.call(null,inst_32647);
var state_32657__$1 = state_32657;
if(cljs.core.truth_(inst_32648)){
var statearr_32660_32818 = state_32657__$1;
(statearr_32660_32818[(1)] = (5));

} else {
var statearr_32661_32819 = state_32657__$1;
(statearr_32661_32819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (5))){
var state_32657__$1 = state_32657;
var statearr_32662_32820 = state_32657__$1;
(statearr_32662_32820[(2)] = null);

(statearr_32662_32820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (6))){
var state_32657__$1 = state_32657;
var statearr_32663_32821 = state_32657__$1;
(statearr_32663_32821[(2)] = null);

(statearr_32663_32821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (7))){
var inst_32653 = (state_32657[(2)]);
var state_32657__$1 = state_32657;
var statearr_32664_32822 = state_32657__$1;
(statearr_32664_32822[(2)] = inst_32653);

(statearr_32664_32822[(1)] = (3));


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
});})(__32813,c__28307__auto___32816,G__32644_32814,n__26491__auto___32812,jobs,results,process,async))
;
return ((function (__32813,switch__28286__auto__,c__28307__auto___32816,G__32644_32814,n__26491__auto___32812,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____0 = (function (){
var statearr_32668 = [null,null,null,null,null,null,null];
(statearr_32668[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__);

(statearr_32668[(1)] = (1));

return statearr_32668;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____1 = (function (state_32657){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_32657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e32669){if((e32669 instanceof Object)){
var ex__28290__auto__ = e32669;
var statearr_32670_32823 = state_32657;
(statearr_32670_32823[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32824 = state_32657;
state_32657 = G__32824;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__ = function(state_32657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____1.call(this,state_32657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__;
})()
;})(__32813,switch__28286__auto__,c__28307__auto___32816,G__32644_32814,n__26491__auto___32812,jobs,results,process,async))
})();
var state__28309__auto__ = (function (){var statearr_32671 = f__28308__auto__.call(null);
(statearr_32671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___32816);

return statearr_32671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(__32813,c__28307__auto___32816,G__32644_32814,n__26491__auto___32812,jobs,results,process,async))
);


break;
case "async":
var c__28307__auto___32825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32813,c__28307__auto___32825,G__32644_32814,n__26491__auto___32812,jobs,results,process,async){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (__32813,c__28307__auto___32825,G__32644_32814,n__26491__auto___32812,jobs,results,process,async){
return (function (state_32684){
var state_val_32685 = (state_32684[(1)]);
if((state_val_32685 === (1))){
var state_32684__$1 = state_32684;
var statearr_32686_32826 = state_32684__$1;
(statearr_32686_32826[(2)] = null);

(statearr_32686_32826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (2))){
var state_32684__$1 = state_32684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32684__$1,(4),jobs);
} else {
if((state_val_32685 === (3))){
var inst_32682 = (state_32684[(2)]);
var state_32684__$1 = state_32684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32684__$1,inst_32682);
} else {
if((state_val_32685 === (4))){
var inst_32674 = (state_32684[(2)]);
var inst_32675 = async.call(null,inst_32674);
var state_32684__$1 = state_32684;
if(cljs.core.truth_(inst_32675)){
var statearr_32687_32827 = state_32684__$1;
(statearr_32687_32827[(1)] = (5));

} else {
var statearr_32688_32828 = state_32684__$1;
(statearr_32688_32828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (5))){
var state_32684__$1 = state_32684;
var statearr_32689_32829 = state_32684__$1;
(statearr_32689_32829[(2)] = null);

(statearr_32689_32829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (6))){
var state_32684__$1 = state_32684;
var statearr_32690_32830 = state_32684__$1;
(statearr_32690_32830[(2)] = null);

(statearr_32690_32830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (7))){
var inst_32680 = (state_32684[(2)]);
var state_32684__$1 = state_32684;
var statearr_32691_32831 = state_32684__$1;
(statearr_32691_32831[(2)] = inst_32680);

(statearr_32691_32831[(1)] = (3));


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
});})(__32813,c__28307__auto___32825,G__32644_32814,n__26491__auto___32812,jobs,results,process,async))
;
return ((function (__32813,switch__28286__auto__,c__28307__auto___32825,G__32644_32814,n__26491__auto___32812,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____0 = (function (){
var statearr_32695 = [null,null,null,null,null,null,null];
(statearr_32695[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__);

(statearr_32695[(1)] = (1));

return statearr_32695;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____1 = (function (state_32684){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_32684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e32696){if((e32696 instanceof Object)){
var ex__28290__auto__ = e32696;
var statearr_32697_32832 = state_32684;
(statearr_32697_32832[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32833 = state_32684;
state_32684 = G__32833;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__ = function(state_32684){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____1.call(this,state_32684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__;
})()
;})(__32813,switch__28286__auto__,c__28307__auto___32825,G__32644_32814,n__26491__auto___32812,jobs,results,process,async))
})();
var state__28309__auto__ = (function (){var statearr_32698 = f__28308__auto__.call(null);
(statearr_32698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___32825);

return statearr_32698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(__32813,c__28307__auto___32825,G__32644_32814,n__26491__auto___32812,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32834 = (__32813 + (1));
__32813 = G__32834;
continue;
} else {
}
break;
}

var c__28307__auto___32835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto___32835,jobs,results,process,async){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto___32835,jobs,results,process,async){
return (function (state_32720){
var state_val_32721 = (state_32720[(1)]);
if((state_val_32721 === (1))){
var state_32720__$1 = state_32720;
var statearr_32722_32836 = state_32720__$1;
(statearr_32722_32836[(2)] = null);

(statearr_32722_32836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32721 === (2))){
var state_32720__$1 = state_32720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32720__$1,(4),from);
} else {
if((state_val_32721 === (3))){
var inst_32718 = (state_32720[(2)]);
var state_32720__$1 = state_32720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32720__$1,inst_32718);
} else {
if((state_val_32721 === (4))){
var inst_32701 = (state_32720[(7)]);
var inst_32701__$1 = (state_32720[(2)]);
var inst_32702 = (inst_32701__$1 == null);
var state_32720__$1 = (function (){var statearr_32723 = state_32720;
(statearr_32723[(7)] = inst_32701__$1);

return statearr_32723;
})();
if(cljs.core.truth_(inst_32702)){
var statearr_32724_32837 = state_32720__$1;
(statearr_32724_32837[(1)] = (5));

} else {
var statearr_32725_32838 = state_32720__$1;
(statearr_32725_32838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32721 === (5))){
var inst_32704 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32720__$1 = state_32720;
var statearr_32726_32839 = state_32720__$1;
(statearr_32726_32839[(2)] = inst_32704);

(statearr_32726_32839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32721 === (6))){
var inst_32701 = (state_32720[(7)]);
var inst_32706 = (state_32720[(8)]);
var inst_32706__$1 = cljs.core.async.chan.call(null,(1));
var inst_32707 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32708 = [inst_32701,inst_32706__$1];
var inst_32709 = (new cljs.core.PersistentVector(null,2,(5),inst_32707,inst_32708,null));
var state_32720__$1 = (function (){var statearr_32727 = state_32720;
(statearr_32727[(8)] = inst_32706__$1);

return statearr_32727;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32720__$1,(8),jobs,inst_32709);
} else {
if((state_val_32721 === (7))){
var inst_32716 = (state_32720[(2)]);
var state_32720__$1 = state_32720;
var statearr_32728_32840 = state_32720__$1;
(statearr_32728_32840[(2)] = inst_32716);

(statearr_32728_32840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32721 === (8))){
var inst_32706 = (state_32720[(8)]);
var inst_32711 = (state_32720[(2)]);
var state_32720__$1 = (function (){var statearr_32729 = state_32720;
(statearr_32729[(9)] = inst_32711);

return statearr_32729;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32720__$1,(9),results,inst_32706);
} else {
if((state_val_32721 === (9))){
var inst_32713 = (state_32720[(2)]);
var state_32720__$1 = (function (){var statearr_32730 = state_32720;
(statearr_32730[(10)] = inst_32713);

return statearr_32730;
})();
var statearr_32731_32841 = state_32720__$1;
(statearr_32731_32841[(2)] = null);

(statearr_32731_32841[(1)] = (2));


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
});})(c__28307__auto___32835,jobs,results,process,async))
;
return ((function (switch__28286__auto__,c__28307__auto___32835,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____0 = (function (){
var statearr_32735 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32735[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__);

(statearr_32735[(1)] = (1));

return statearr_32735;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____1 = (function (state_32720){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_32720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e32736){if((e32736 instanceof Object)){
var ex__28290__auto__ = e32736;
var statearr_32737_32842 = state_32720;
(statearr_32737_32842[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32843 = state_32720;
state_32720 = G__32843;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__ = function(state_32720){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____1.call(this,state_32720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto___32835,jobs,results,process,async))
})();
var state__28309__auto__ = (function (){var statearr_32738 = f__28308__auto__.call(null);
(statearr_32738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___32835);

return statearr_32738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto___32835,jobs,results,process,async))
);


var c__28307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto__,jobs,results,process,async){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto__,jobs,results,process,async){
return (function (state_32776){
var state_val_32777 = (state_32776[(1)]);
if((state_val_32777 === (7))){
var inst_32772 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32778_32844 = state_32776__$1;
(statearr_32778_32844[(2)] = inst_32772);

(statearr_32778_32844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (20))){
var state_32776__$1 = state_32776;
var statearr_32779_32845 = state_32776__$1;
(statearr_32779_32845[(2)] = null);

(statearr_32779_32845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (1))){
var state_32776__$1 = state_32776;
var statearr_32780_32846 = state_32776__$1;
(statearr_32780_32846[(2)] = null);

(statearr_32780_32846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (4))){
var inst_32741 = (state_32776[(7)]);
var inst_32741__$1 = (state_32776[(2)]);
var inst_32742 = (inst_32741__$1 == null);
var state_32776__$1 = (function (){var statearr_32781 = state_32776;
(statearr_32781[(7)] = inst_32741__$1);

return statearr_32781;
})();
if(cljs.core.truth_(inst_32742)){
var statearr_32782_32847 = state_32776__$1;
(statearr_32782_32847[(1)] = (5));

} else {
var statearr_32783_32848 = state_32776__$1;
(statearr_32783_32848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (15))){
var inst_32754 = (state_32776[(8)]);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32776__$1,(18),to,inst_32754);
} else {
if((state_val_32777 === (21))){
var inst_32767 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32784_32849 = state_32776__$1;
(statearr_32784_32849[(2)] = inst_32767);

(statearr_32784_32849[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (13))){
var inst_32769 = (state_32776[(2)]);
var state_32776__$1 = (function (){var statearr_32785 = state_32776;
(statearr_32785[(9)] = inst_32769);

return statearr_32785;
})();
var statearr_32786_32850 = state_32776__$1;
(statearr_32786_32850[(2)] = null);

(statearr_32786_32850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (6))){
var inst_32741 = (state_32776[(7)]);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32776__$1,(11),inst_32741);
} else {
if((state_val_32777 === (17))){
var inst_32762 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
if(cljs.core.truth_(inst_32762)){
var statearr_32787_32851 = state_32776__$1;
(statearr_32787_32851[(1)] = (19));

} else {
var statearr_32788_32852 = state_32776__$1;
(statearr_32788_32852[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (3))){
var inst_32774 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32776__$1,inst_32774);
} else {
if((state_val_32777 === (12))){
var inst_32751 = (state_32776[(10)]);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32776__$1,(14),inst_32751);
} else {
if((state_val_32777 === (2))){
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32776__$1,(4),results);
} else {
if((state_val_32777 === (19))){
var state_32776__$1 = state_32776;
var statearr_32789_32853 = state_32776__$1;
(statearr_32789_32853[(2)] = null);

(statearr_32789_32853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (11))){
var inst_32751 = (state_32776[(2)]);
var state_32776__$1 = (function (){var statearr_32790 = state_32776;
(statearr_32790[(10)] = inst_32751);

return statearr_32790;
})();
var statearr_32791_32854 = state_32776__$1;
(statearr_32791_32854[(2)] = null);

(statearr_32791_32854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (9))){
var state_32776__$1 = state_32776;
var statearr_32792_32855 = state_32776__$1;
(statearr_32792_32855[(2)] = null);

(statearr_32792_32855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (5))){
var state_32776__$1 = state_32776;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32793_32856 = state_32776__$1;
(statearr_32793_32856[(1)] = (8));

} else {
var statearr_32794_32857 = state_32776__$1;
(statearr_32794_32857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (14))){
var inst_32754 = (state_32776[(8)]);
var inst_32756 = (state_32776[(11)]);
var inst_32754__$1 = (state_32776[(2)]);
var inst_32755 = (inst_32754__$1 == null);
var inst_32756__$1 = cljs.core.not.call(null,inst_32755);
var state_32776__$1 = (function (){var statearr_32795 = state_32776;
(statearr_32795[(8)] = inst_32754__$1);

(statearr_32795[(11)] = inst_32756__$1);

return statearr_32795;
})();
if(inst_32756__$1){
var statearr_32796_32858 = state_32776__$1;
(statearr_32796_32858[(1)] = (15));

} else {
var statearr_32797_32859 = state_32776__$1;
(statearr_32797_32859[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (16))){
var inst_32756 = (state_32776[(11)]);
var state_32776__$1 = state_32776;
var statearr_32798_32860 = state_32776__$1;
(statearr_32798_32860[(2)] = inst_32756);

(statearr_32798_32860[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (10))){
var inst_32748 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32799_32861 = state_32776__$1;
(statearr_32799_32861[(2)] = inst_32748);

(statearr_32799_32861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (18))){
var inst_32759 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32800_32862 = state_32776__$1;
(statearr_32800_32862[(2)] = inst_32759);

(statearr_32800_32862[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (8))){
var inst_32745 = cljs.core.async.close_BANG_.call(null,to);
var state_32776__$1 = state_32776;
var statearr_32801_32863 = state_32776__$1;
(statearr_32801_32863[(2)] = inst_32745);

(statearr_32801_32863[(1)] = (10));


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
});})(c__28307__auto__,jobs,results,process,async))
;
return ((function (switch__28286__auto__,c__28307__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____0 = (function (){
var statearr_32805 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32805[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__);

(statearr_32805[(1)] = (1));

return statearr_32805;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____1 = (function (state_32776){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_32776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e32806){if((e32806 instanceof Object)){
var ex__28290__auto__ = e32806;
var statearr_32807_32864 = state_32776;
(statearr_32807_32864[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32865 = state_32776;
state_32776 = G__32865;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__ = function(state_32776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____1.call(this,state_32776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28287__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto__,jobs,results,process,async))
})();
var state__28309__auto__ = (function (){var statearr_32808 = f__28308__auto__.call(null);
(statearr_32808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto__);

return statearr_32808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto__,jobs,results,process,async))
);

return c__28307__auto__;
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
var args32866 = [];
var len__26651__auto___32869 = arguments.length;
var i__26652__auto___32870 = (0);
while(true){
if((i__26652__auto___32870 < len__26651__auto___32869)){
args32866.push((arguments[i__26652__auto___32870]));

var G__32871 = (i__26652__auto___32870 + (1));
i__26652__auto___32870 = G__32871;
continue;
} else {
}
break;
}

var G__32868 = args32866.length;
switch (G__32868) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32866.length)].join('')));

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
var args32873 = [];
var len__26651__auto___32876 = arguments.length;
var i__26652__auto___32877 = (0);
while(true){
if((i__26652__auto___32877 < len__26651__auto___32876)){
args32873.push((arguments[i__26652__auto___32877]));

var G__32878 = (i__26652__auto___32877 + (1));
i__26652__auto___32877 = G__32878;
continue;
} else {
}
break;
}

var G__32875 = args32873.length;
switch (G__32875) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32873.length)].join('')));

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
var args32880 = [];
var len__26651__auto___32933 = arguments.length;
var i__26652__auto___32934 = (0);
while(true){
if((i__26652__auto___32934 < len__26651__auto___32933)){
args32880.push((arguments[i__26652__auto___32934]));

var G__32935 = (i__26652__auto___32934 + (1));
i__26652__auto___32934 = G__32935;
continue;
} else {
}
break;
}

var G__32882 = args32880.length;
switch (G__32882) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32880.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28307__auto___32937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto___32937,tc,fc){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto___32937,tc,fc){
return (function (state_32908){
var state_val_32909 = (state_32908[(1)]);
if((state_val_32909 === (7))){
var inst_32904 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32910_32938 = state_32908__$1;
(statearr_32910_32938[(2)] = inst_32904);

(statearr_32910_32938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (1))){
var state_32908__$1 = state_32908;
var statearr_32911_32939 = state_32908__$1;
(statearr_32911_32939[(2)] = null);

(statearr_32911_32939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (4))){
var inst_32885 = (state_32908[(7)]);
var inst_32885__$1 = (state_32908[(2)]);
var inst_32886 = (inst_32885__$1 == null);
var state_32908__$1 = (function (){var statearr_32912 = state_32908;
(statearr_32912[(7)] = inst_32885__$1);

return statearr_32912;
})();
if(cljs.core.truth_(inst_32886)){
var statearr_32913_32940 = state_32908__$1;
(statearr_32913_32940[(1)] = (5));

} else {
var statearr_32914_32941 = state_32908__$1;
(statearr_32914_32941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (13))){
var state_32908__$1 = state_32908;
var statearr_32915_32942 = state_32908__$1;
(statearr_32915_32942[(2)] = null);

(statearr_32915_32942[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (6))){
var inst_32885 = (state_32908[(7)]);
var inst_32891 = p.call(null,inst_32885);
var state_32908__$1 = state_32908;
if(cljs.core.truth_(inst_32891)){
var statearr_32916_32943 = state_32908__$1;
(statearr_32916_32943[(1)] = (9));

} else {
var statearr_32917_32944 = state_32908__$1;
(statearr_32917_32944[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (3))){
var inst_32906 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32908__$1,inst_32906);
} else {
if((state_val_32909 === (12))){
var state_32908__$1 = state_32908;
var statearr_32918_32945 = state_32908__$1;
(statearr_32918_32945[(2)] = null);

(statearr_32918_32945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (2))){
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32908__$1,(4),ch);
} else {
if((state_val_32909 === (11))){
var inst_32885 = (state_32908[(7)]);
var inst_32895 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32908__$1,(8),inst_32895,inst_32885);
} else {
if((state_val_32909 === (9))){
var state_32908__$1 = state_32908;
var statearr_32919_32946 = state_32908__$1;
(statearr_32919_32946[(2)] = tc);

(statearr_32919_32946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (5))){
var inst_32888 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32889 = cljs.core.async.close_BANG_.call(null,fc);
var state_32908__$1 = (function (){var statearr_32920 = state_32908;
(statearr_32920[(8)] = inst_32888);

return statearr_32920;
})();
var statearr_32921_32947 = state_32908__$1;
(statearr_32921_32947[(2)] = inst_32889);

(statearr_32921_32947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (14))){
var inst_32902 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32922_32948 = state_32908__$1;
(statearr_32922_32948[(2)] = inst_32902);

(statearr_32922_32948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (10))){
var state_32908__$1 = state_32908;
var statearr_32923_32949 = state_32908__$1;
(statearr_32923_32949[(2)] = fc);

(statearr_32923_32949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (8))){
var inst_32897 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
if(cljs.core.truth_(inst_32897)){
var statearr_32924_32950 = state_32908__$1;
(statearr_32924_32950[(1)] = (12));

} else {
var statearr_32925_32951 = state_32908__$1;
(statearr_32925_32951[(1)] = (13));

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
});})(c__28307__auto___32937,tc,fc))
;
return ((function (switch__28286__auto__,c__28307__auto___32937,tc,fc){
return (function() {
var cljs$core$async$state_machine__28287__auto__ = null;
var cljs$core$async$state_machine__28287__auto____0 = (function (){
var statearr_32929 = [null,null,null,null,null,null,null,null,null];
(statearr_32929[(0)] = cljs$core$async$state_machine__28287__auto__);

(statearr_32929[(1)] = (1));

return statearr_32929;
});
var cljs$core$async$state_machine__28287__auto____1 = (function (state_32908){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_32908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e32930){if((e32930 instanceof Object)){
var ex__28290__auto__ = e32930;
var statearr_32931_32952 = state_32908;
(statearr_32931_32952[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32953 = state_32908;
state_32908 = G__32953;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$state_machine__28287__auto__ = function(state_32908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28287__auto____1.call(this,state_32908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28287__auto____0;
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28287__auto____1;
return cljs$core$async$state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto___32937,tc,fc))
})();
var state__28309__auto__ = (function (){var statearr_32932 = f__28308__auto__.call(null);
(statearr_32932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___32937);

return statearr_32932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto___32937,tc,fc))
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
var c__28307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto__){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto__){
return (function (state_33017){
var state_val_33018 = (state_33017[(1)]);
if((state_val_33018 === (7))){
var inst_33013 = (state_33017[(2)]);
var state_33017__$1 = state_33017;
var statearr_33019_33040 = state_33017__$1;
(statearr_33019_33040[(2)] = inst_33013);

(statearr_33019_33040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33018 === (1))){
var inst_32997 = init;
var state_33017__$1 = (function (){var statearr_33020 = state_33017;
(statearr_33020[(7)] = inst_32997);

return statearr_33020;
})();
var statearr_33021_33041 = state_33017__$1;
(statearr_33021_33041[(2)] = null);

(statearr_33021_33041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33018 === (4))){
var inst_33000 = (state_33017[(8)]);
var inst_33000__$1 = (state_33017[(2)]);
var inst_33001 = (inst_33000__$1 == null);
var state_33017__$1 = (function (){var statearr_33022 = state_33017;
(statearr_33022[(8)] = inst_33000__$1);

return statearr_33022;
})();
if(cljs.core.truth_(inst_33001)){
var statearr_33023_33042 = state_33017__$1;
(statearr_33023_33042[(1)] = (5));

} else {
var statearr_33024_33043 = state_33017__$1;
(statearr_33024_33043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33018 === (6))){
var inst_33004 = (state_33017[(9)]);
var inst_33000 = (state_33017[(8)]);
var inst_32997 = (state_33017[(7)]);
var inst_33004__$1 = f.call(null,inst_32997,inst_33000);
var inst_33005 = cljs.core.reduced_QMARK_.call(null,inst_33004__$1);
var state_33017__$1 = (function (){var statearr_33025 = state_33017;
(statearr_33025[(9)] = inst_33004__$1);

return statearr_33025;
})();
if(inst_33005){
var statearr_33026_33044 = state_33017__$1;
(statearr_33026_33044[(1)] = (8));

} else {
var statearr_33027_33045 = state_33017__$1;
(statearr_33027_33045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33018 === (3))){
var inst_33015 = (state_33017[(2)]);
var state_33017__$1 = state_33017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33017__$1,inst_33015);
} else {
if((state_val_33018 === (2))){
var state_33017__$1 = state_33017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33017__$1,(4),ch);
} else {
if((state_val_33018 === (9))){
var inst_33004 = (state_33017[(9)]);
var inst_32997 = inst_33004;
var state_33017__$1 = (function (){var statearr_33028 = state_33017;
(statearr_33028[(7)] = inst_32997);

return statearr_33028;
})();
var statearr_33029_33046 = state_33017__$1;
(statearr_33029_33046[(2)] = null);

(statearr_33029_33046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33018 === (5))){
var inst_32997 = (state_33017[(7)]);
var state_33017__$1 = state_33017;
var statearr_33030_33047 = state_33017__$1;
(statearr_33030_33047[(2)] = inst_32997);

(statearr_33030_33047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33018 === (10))){
var inst_33011 = (state_33017[(2)]);
var state_33017__$1 = state_33017;
var statearr_33031_33048 = state_33017__$1;
(statearr_33031_33048[(2)] = inst_33011);

(statearr_33031_33048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33018 === (8))){
var inst_33004 = (state_33017[(9)]);
var inst_33007 = cljs.core.deref.call(null,inst_33004);
var state_33017__$1 = state_33017;
var statearr_33032_33049 = state_33017__$1;
(statearr_33032_33049[(2)] = inst_33007);

(statearr_33032_33049[(1)] = (10));


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
});})(c__28307__auto__))
;
return ((function (switch__28286__auto__,c__28307__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28287__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28287__auto____0 = (function (){
var statearr_33036 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33036[(0)] = cljs$core$async$reduce_$_state_machine__28287__auto__);

(statearr_33036[(1)] = (1));

return statearr_33036;
});
var cljs$core$async$reduce_$_state_machine__28287__auto____1 = (function (state_33017){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_33017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e33037){if((e33037 instanceof Object)){
var ex__28290__auto__ = e33037;
var statearr_33038_33050 = state_33017;
(statearr_33038_33050[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33051 = state_33017;
state_33017 = G__33051;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28287__auto__ = function(state_33017){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28287__auto____1.call(this,state_33017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28287__auto____0;
cljs$core$async$reduce_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28287__auto____1;
return cljs$core$async$reduce_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto__))
})();
var state__28309__auto__ = (function (){var statearr_33039 = f__28308__auto__.call(null);
(statearr_33039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto__);

return statearr_33039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto__))
);

return c__28307__auto__;
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
var args33052 = [];
var len__26651__auto___33104 = arguments.length;
var i__26652__auto___33105 = (0);
while(true){
if((i__26652__auto___33105 < len__26651__auto___33104)){
args33052.push((arguments[i__26652__auto___33105]));

var G__33106 = (i__26652__auto___33105 + (1));
i__26652__auto___33105 = G__33106;
continue;
} else {
}
break;
}

var G__33054 = args33052.length;
switch (G__33054) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33052.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto__){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto__){
return (function (state_33079){
var state_val_33080 = (state_33079[(1)]);
if((state_val_33080 === (7))){
var inst_33061 = (state_33079[(2)]);
var state_33079__$1 = state_33079;
var statearr_33081_33108 = state_33079__$1;
(statearr_33081_33108[(2)] = inst_33061);

(statearr_33081_33108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (1))){
var inst_33055 = cljs.core.seq.call(null,coll);
var inst_33056 = inst_33055;
var state_33079__$1 = (function (){var statearr_33082 = state_33079;
(statearr_33082[(7)] = inst_33056);

return statearr_33082;
})();
var statearr_33083_33109 = state_33079__$1;
(statearr_33083_33109[(2)] = null);

(statearr_33083_33109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (4))){
var inst_33056 = (state_33079[(7)]);
var inst_33059 = cljs.core.first.call(null,inst_33056);
var state_33079__$1 = state_33079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33079__$1,(7),ch,inst_33059);
} else {
if((state_val_33080 === (13))){
var inst_33073 = (state_33079[(2)]);
var state_33079__$1 = state_33079;
var statearr_33084_33110 = state_33079__$1;
(statearr_33084_33110[(2)] = inst_33073);

(statearr_33084_33110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (6))){
var inst_33064 = (state_33079[(2)]);
var state_33079__$1 = state_33079;
if(cljs.core.truth_(inst_33064)){
var statearr_33085_33111 = state_33079__$1;
(statearr_33085_33111[(1)] = (8));

} else {
var statearr_33086_33112 = state_33079__$1;
(statearr_33086_33112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (3))){
var inst_33077 = (state_33079[(2)]);
var state_33079__$1 = state_33079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33079__$1,inst_33077);
} else {
if((state_val_33080 === (12))){
var state_33079__$1 = state_33079;
var statearr_33087_33113 = state_33079__$1;
(statearr_33087_33113[(2)] = null);

(statearr_33087_33113[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (2))){
var inst_33056 = (state_33079[(7)]);
var state_33079__$1 = state_33079;
if(cljs.core.truth_(inst_33056)){
var statearr_33088_33114 = state_33079__$1;
(statearr_33088_33114[(1)] = (4));

} else {
var statearr_33089_33115 = state_33079__$1;
(statearr_33089_33115[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (11))){
var inst_33070 = cljs.core.async.close_BANG_.call(null,ch);
var state_33079__$1 = state_33079;
var statearr_33090_33116 = state_33079__$1;
(statearr_33090_33116[(2)] = inst_33070);

(statearr_33090_33116[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (9))){
var state_33079__$1 = state_33079;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33091_33117 = state_33079__$1;
(statearr_33091_33117[(1)] = (11));

} else {
var statearr_33092_33118 = state_33079__$1;
(statearr_33092_33118[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (5))){
var inst_33056 = (state_33079[(7)]);
var state_33079__$1 = state_33079;
var statearr_33093_33119 = state_33079__$1;
(statearr_33093_33119[(2)] = inst_33056);

(statearr_33093_33119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (10))){
var inst_33075 = (state_33079[(2)]);
var state_33079__$1 = state_33079;
var statearr_33094_33120 = state_33079__$1;
(statearr_33094_33120[(2)] = inst_33075);

(statearr_33094_33120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (8))){
var inst_33056 = (state_33079[(7)]);
var inst_33066 = cljs.core.next.call(null,inst_33056);
var inst_33056__$1 = inst_33066;
var state_33079__$1 = (function (){var statearr_33095 = state_33079;
(statearr_33095[(7)] = inst_33056__$1);

return statearr_33095;
})();
var statearr_33096_33121 = state_33079__$1;
(statearr_33096_33121[(2)] = null);

(statearr_33096_33121[(1)] = (2));


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
});})(c__28307__auto__))
;
return ((function (switch__28286__auto__,c__28307__auto__){
return (function() {
var cljs$core$async$state_machine__28287__auto__ = null;
var cljs$core$async$state_machine__28287__auto____0 = (function (){
var statearr_33100 = [null,null,null,null,null,null,null,null];
(statearr_33100[(0)] = cljs$core$async$state_machine__28287__auto__);

(statearr_33100[(1)] = (1));

return statearr_33100;
});
var cljs$core$async$state_machine__28287__auto____1 = (function (state_33079){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_33079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e33101){if((e33101 instanceof Object)){
var ex__28290__auto__ = e33101;
var statearr_33102_33122 = state_33079;
(statearr_33102_33122[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33123 = state_33079;
state_33079 = G__33123;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$state_machine__28287__auto__ = function(state_33079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28287__auto____1.call(this,state_33079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28287__auto____0;
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28287__auto____1;
return cljs$core$async$state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto__))
})();
var state__28309__auto__ = (function (){var statearr_33103 = f__28308__auto__.call(null);
(statearr_33103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto__);

return statearr_33103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto__))
);

return c__28307__auto__;
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
var x__26239__auto__ = (((_ == null))?null:_);
var m__26240__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26239__auto__)]);
if(!((m__26240__auto__ == null))){
return m__26240__auto__.call(null,_);
} else {
var m__26240__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26240__auto____$1 == null))){
return m__26240__auto____$1.call(null,_);
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
var x__26239__auto__ = (((m == null))?null:m);
var m__26240__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26239__auto__)]);
if(!((m__26240__auto__ == null))){
return m__26240__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26240__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26240__auto____$1 == null))){
return m__26240__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__26239__auto__ = (((m == null))?null:m);
var m__26240__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26239__auto__)]);
if(!((m__26240__auto__ == null))){
return m__26240__auto__.call(null,m,ch);
} else {
var m__26240__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26240__auto____$1 == null))){
return m__26240__auto____$1.call(null,m,ch);
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
var x__26239__auto__ = (((m == null))?null:m);
var m__26240__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26239__auto__)]);
if(!((m__26240__auto__ == null))){
return m__26240__auto__.call(null,m);
} else {
var m__26240__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26240__auto____$1 == null))){
return m__26240__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async33349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33349 = (function (mult,ch,cs,meta33350){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta33350 = meta33350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33351,meta33350__$1){
var self__ = this;
var _33351__$1 = this;
return (new cljs.core.async.t_cljs$core$async33349(self__.mult,self__.ch,self__.cs,meta33350__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33351){
var self__ = this;
var _33351__$1 = this;
return self__.meta33350;
});})(cs))
;

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33349.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33350","meta33350",2055807511,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33349";

cljs.core.async.t_cljs$core$async33349.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cljs.core.async/t_cljs$core$async33349");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33349 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33349(mult__$1,ch__$1,cs__$1,meta33350){
return (new cljs.core.async.t_cljs$core$async33349(mult__$1,ch__$1,cs__$1,meta33350));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33349(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28307__auto___33574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto___33574,cs,m,dchan,dctr,done){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto___33574,cs,m,dchan,dctr,done){
return (function (state_33486){
var state_val_33487 = (state_33486[(1)]);
if((state_val_33487 === (7))){
var inst_33482 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
var statearr_33488_33575 = state_33486__$1;
(statearr_33488_33575[(2)] = inst_33482);

(statearr_33488_33575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (20))){
var inst_33385 = (state_33486[(7)]);
var inst_33397 = cljs.core.first.call(null,inst_33385);
var inst_33398 = cljs.core.nth.call(null,inst_33397,(0),null);
var inst_33399 = cljs.core.nth.call(null,inst_33397,(1),null);
var state_33486__$1 = (function (){var statearr_33489 = state_33486;
(statearr_33489[(8)] = inst_33398);

return statearr_33489;
})();
if(cljs.core.truth_(inst_33399)){
var statearr_33490_33576 = state_33486__$1;
(statearr_33490_33576[(1)] = (22));

} else {
var statearr_33491_33577 = state_33486__$1;
(statearr_33491_33577[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (27))){
var inst_33427 = (state_33486[(9)]);
var inst_33354 = (state_33486[(10)]);
var inst_33429 = (state_33486[(11)]);
var inst_33434 = (state_33486[(12)]);
var inst_33434__$1 = cljs.core._nth.call(null,inst_33427,inst_33429);
var inst_33435 = cljs.core.async.put_BANG_.call(null,inst_33434__$1,inst_33354,done);
var state_33486__$1 = (function (){var statearr_33492 = state_33486;
(statearr_33492[(12)] = inst_33434__$1);

return statearr_33492;
})();
if(cljs.core.truth_(inst_33435)){
var statearr_33493_33578 = state_33486__$1;
(statearr_33493_33578[(1)] = (30));

} else {
var statearr_33494_33579 = state_33486__$1;
(statearr_33494_33579[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (1))){
var state_33486__$1 = state_33486;
var statearr_33495_33580 = state_33486__$1;
(statearr_33495_33580[(2)] = null);

(statearr_33495_33580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (24))){
var inst_33385 = (state_33486[(7)]);
var inst_33404 = (state_33486[(2)]);
var inst_33405 = cljs.core.next.call(null,inst_33385);
var inst_33363 = inst_33405;
var inst_33364 = null;
var inst_33365 = (0);
var inst_33366 = (0);
var state_33486__$1 = (function (){var statearr_33496 = state_33486;
(statearr_33496[(13)] = inst_33404);

(statearr_33496[(14)] = inst_33366);

(statearr_33496[(15)] = inst_33364);

(statearr_33496[(16)] = inst_33365);

(statearr_33496[(17)] = inst_33363);

return statearr_33496;
})();
var statearr_33497_33581 = state_33486__$1;
(statearr_33497_33581[(2)] = null);

(statearr_33497_33581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (39))){
var state_33486__$1 = state_33486;
var statearr_33501_33582 = state_33486__$1;
(statearr_33501_33582[(2)] = null);

(statearr_33501_33582[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (4))){
var inst_33354 = (state_33486[(10)]);
var inst_33354__$1 = (state_33486[(2)]);
var inst_33355 = (inst_33354__$1 == null);
var state_33486__$1 = (function (){var statearr_33502 = state_33486;
(statearr_33502[(10)] = inst_33354__$1);

return statearr_33502;
})();
if(cljs.core.truth_(inst_33355)){
var statearr_33503_33583 = state_33486__$1;
(statearr_33503_33583[(1)] = (5));

} else {
var statearr_33504_33584 = state_33486__$1;
(statearr_33504_33584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (15))){
var inst_33366 = (state_33486[(14)]);
var inst_33364 = (state_33486[(15)]);
var inst_33365 = (state_33486[(16)]);
var inst_33363 = (state_33486[(17)]);
var inst_33381 = (state_33486[(2)]);
var inst_33382 = (inst_33366 + (1));
var tmp33498 = inst_33364;
var tmp33499 = inst_33365;
var tmp33500 = inst_33363;
var inst_33363__$1 = tmp33500;
var inst_33364__$1 = tmp33498;
var inst_33365__$1 = tmp33499;
var inst_33366__$1 = inst_33382;
var state_33486__$1 = (function (){var statearr_33505 = state_33486;
(statearr_33505[(14)] = inst_33366__$1);

(statearr_33505[(15)] = inst_33364__$1);

(statearr_33505[(16)] = inst_33365__$1);

(statearr_33505[(17)] = inst_33363__$1);

(statearr_33505[(18)] = inst_33381);

return statearr_33505;
})();
var statearr_33506_33585 = state_33486__$1;
(statearr_33506_33585[(2)] = null);

(statearr_33506_33585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (21))){
var inst_33408 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
var statearr_33510_33586 = state_33486__$1;
(statearr_33510_33586[(2)] = inst_33408);

(statearr_33510_33586[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (31))){
var inst_33434 = (state_33486[(12)]);
var inst_33438 = done.call(null,null);
var inst_33439 = cljs.core.async.untap_STAR_.call(null,m,inst_33434);
var state_33486__$1 = (function (){var statearr_33511 = state_33486;
(statearr_33511[(19)] = inst_33438);

return statearr_33511;
})();
var statearr_33512_33587 = state_33486__$1;
(statearr_33512_33587[(2)] = inst_33439);

(statearr_33512_33587[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (32))){
var inst_33426 = (state_33486[(20)]);
var inst_33427 = (state_33486[(9)]);
var inst_33429 = (state_33486[(11)]);
var inst_33428 = (state_33486[(21)]);
var inst_33441 = (state_33486[(2)]);
var inst_33442 = (inst_33429 + (1));
var tmp33507 = inst_33426;
var tmp33508 = inst_33427;
var tmp33509 = inst_33428;
var inst_33426__$1 = tmp33507;
var inst_33427__$1 = tmp33508;
var inst_33428__$1 = tmp33509;
var inst_33429__$1 = inst_33442;
var state_33486__$1 = (function (){var statearr_33513 = state_33486;
(statearr_33513[(20)] = inst_33426__$1);

(statearr_33513[(9)] = inst_33427__$1);

(statearr_33513[(11)] = inst_33429__$1);

(statearr_33513[(21)] = inst_33428__$1);

(statearr_33513[(22)] = inst_33441);

return statearr_33513;
})();
var statearr_33514_33588 = state_33486__$1;
(statearr_33514_33588[(2)] = null);

(statearr_33514_33588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (40))){
var inst_33454 = (state_33486[(23)]);
var inst_33458 = done.call(null,null);
var inst_33459 = cljs.core.async.untap_STAR_.call(null,m,inst_33454);
var state_33486__$1 = (function (){var statearr_33515 = state_33486;
(statearr_33515[(24)] = inst_33458);

return statearr_33515;
})();
var statearr_33516_33589 = state_33486__$1;
(statearr_33516_33589[(2)] = inst_33459);

(statearr_33516_33589[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (33))){
var inst_33445 = (state_33486[(25)]);
var inst_33447 = cljs.core.chunked_seq_QMARK_.call(null,inst_33445);
var state_33486__$1 = state_33486;
if(inst_33447){
var statearr_33517_33590 = state_33486__$1;
(statearr_33517_33590[(1)] = (36));

} else {
var statearr_33518_33591 = state_33486__$1;
(statearr_33518_33591[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (13))){
var inst_33375 = (state_33486[(26)]);
var inst_33378 = cljs.core.async.close_BANG_.call(null,inst_33375);
var state_33486__$1 = state_33486;
var statearr_33519_33592 = state_33486__$1;
(statearr_33519_33592[(2)] = inst_33378);

(statearr_33519_33592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (22))){
var inst_33398 = (state_33486[(8)]);
var inst_33401 = cljs.core.async.close_BANG_.call(null,inst_33398);
var state_33486__$1 = state_33486;
var statearr_33520_33593 = state_33486__$1;
(statearr_33520_33593[(2)] = inst_33401);

(statearr_33520_33593[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (36))){
var inst_33445 = (state_33486[(25)]);
var inst_33449 = cljs.core.chunk_first.call(null,inst_33445);
var inst_33450 = cljs.core.chunk_rest.call(null,inst_33445);
var inst_33451 = cljs.core.count.call(null,inst_33449);
var inst_33426 = inst_33450;
var inst_33427 = inst_33449;
var inst_33428 = inst_33451;
var inst_33429 = (0);
var state_33486__$1 = (function (){var statearr_33521 = state_33486;
(statearr_33521[(20)] = inst_33426);

(statearr_33521[(9)] = inst_33427);

(statearr_33521[(11)] = inst_33429);

(statearr_33521[(21)] = inst_33428);

return statearr_33521;
})();
var statearr_33522_33594 = state_33486__$1;
(statearr_33522_33594[(2)] = null);

(statearr_33522_33594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (41))){
var inst_33445 = (state_33486[(25)]);
var inst_33461 = (state_33486[(2)]);
var inst_33462 = cljs.core.next.call(null,inst_33445);
var inst_33426 = inst_33462;
var inst_33427 = null;
var inst_33428 = (0);
var inst_33429 = (0);
var state_33486__$1 = (function (){var statearr_33523 = state_33486;
(statearr_33523[(20)] = inst_33426);

(statearr_33523[(9)] = inst_33427);

(statearr_33523[(27)] = inst_33461);

(statearr_33523[(11)] = inst_33429);

(statearr_33523[(21)] = inst_33428);

return statearr_33523;
})();
var statearr_33524_33595 = state_33486__$1;
(statearr_33524_33595[(2)] = null);

(statearr_33524_33595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (43))){
var state_33486__$1 = state_33486;
var statearr_33525_33596 = state_33486__$1;
(statearr_33525_33596[(2)] = null);

(statearr_33525_33596[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (29))){
var inst_33470 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
var statearr_33526_33597 = state_33486__$1;
(statearr_33526_33597[(2)] = inst_33470);

(statearr_33526_33597[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (44))){
var inst_33479 = (state_33486[(2)]);
var state_33486__$1 = (function (){var statearr_33527 = state_33486;
(statearr_33527[(28)] = inst_33479);

return statearr_33527;
})();
var statearr_33528_33598 = state_33486__$1;
(statearr_33528_33598[(2)] = null);

(statearr_33528_33598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (6))){
var inst_33418 = (state_33486[(29)]);
var inst_33417 = cljs.core.deref.call(null,cs);
var inst_33418__$1 = cljs.core.keys.call(null,inst_33417);
var inst_33419 = cljs.core.count.call(null,inst_33418__$1);
var inst_33420 = cljs.core.reset_BANG_.call(null,dctr,inst_33419);
var inst_33425 = cljs.core.seq.call(null,inst_33418__$1);
var inst_33426 = inst_33425;
var inst_33427 = null;
var inst_33428 = (0);
var inst_33429 = (0);
var state_33486__$1 = (function (){var statearr_33529 = state_33486;
(statearr_33529[(20)] = inst_33426);

(statearr_33529[(9)] = inst_33427);

(statearr_33529[(30)] = inst_33420);

(statearr_33529[(11)] = inst_33429);

(statearr_33529[(29)] = inst_33418__$1);

(statearr_33529[(21)] = inst_33428);

return statearr_33529;
})();
var statearr_33530_33599 = state_33486__$1;
(statearr_33530_33599[(2)] = null);

(statearr_33530_33599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (28))){
var inst_33426 = (state_33486[(20)]);
var inst_33445 = (state_33486[(25)]);
var inst_33445__$1 = cljs.core.seq.call(null,inst_33426);
var state_33486__$1 = (function (){var statearr_33531 = state_33486;
(statearr_33531[(25)] = inst_33445__$1);

return statearr_33531;
})();
if(inst_33445__$1){
var statearr_33532_33600 = state_33486__$1;
(statearr_33532_33600[(1)] = (33));

} else {
var statearr_33533_33601 = state_33486__$1;
(statearr_33533_33601[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (25))){
var inst_33429 = (state_33486[(11)]);
var inst_33428 = (state_33486[(21)]);
var inst_33431 = (inst_33429 < inst_33428);
var inst_33432 = inst_33431;
var state_33486__$1 = state_33486;
if(cljs.core.truth_(inst_33432)){
var statearr_33534_33602 = state_33486__$1;
(statearr_33534_33602[(1)] = (27));

} else {
var statearr_33535_33603 = state_33486__$1;
(statearr_33535_33603[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (34))){
var state_33486__$1 = state_33486;
var statearr_33536_33604 = state_33486__$1;
(statearr_33536_33604[(2)] = null);

(statearr_33536_33604[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (17))){
var state_33486__$1 = state_33486;
var statearr_33537_33605 = state_33486__$1;
(statearr_33537_33605[(2)] = null);

(statearr_33537_33605[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (3))){
var inst_33484 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33486__$1,inst_33484);
} else {
if((state_val_33487 === (12))){
var inst_33413 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
var statearr_33538_33606 = state_33486__$1;
(statearr_33538_33606[(2)] = inst_33413);

(statearr_33538_33606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (2))){
var state_33486__$1 = state_33486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33486__$1,(4),ch);
} else {
if((state_val_33487 === (23))){
var state_33486__$1 = state_33486;
var statearr_33539_33607 = state_33486__$1;
(statearr_33539_33607[(2)] = null);

(statearr_33539_33607[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (35))){
var inst_33468 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
var statearr_33540_33608 = state_33486__$1;
(statearr_33540_33608[(2)] = inst_33468);

(statearr_33540_33608[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (19))){
var inst_33385 = (state_33486[(7)]);
var inst_33389 = cljs.core.chunk_first.call(null,inst_33385);
var inst_33390 = cljs.core.chunk_rest.call(null,inst_33385);
var inst_33391 = cljs.core.count.call(null,inst_33389);
var inst_33363 = inst_33390;
var inst_33364 = inst_33389;
var inst_33365 = inst_33391;
var inst_33366 = (0);
var state_33486__$1 = (function (){var statearr_33541 = state_33486;
(statearr_33541[(14)] = inst_33366);

(statearr_33541[(15)] = inst_33364);

(statearr_33541[(16)] = inst_33365);

(statearr_33541[(17)] = inst_33363);

return statearr_33541;
})();
var statearr_33542_33609 = state_33486__$1;
(statearr_33542_33609[(2)] = null);

(statearr_33542_33609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (11))){
var inst_33385 = (state_33486[(7)]);
var inst_33363 = (state_33486[(17)]);
var inst_33385__$1 = cljs.core.seq.call(null,inst_33363);
var state_33486__$1 = (function (){var statearr_33543 = state_33486;
(statearr_33543[(7)] = inst_33385__$1);

return statearr_33543;
})();
if(inst_33385__$1){
var statearr_33544_33610 = state_33486__$1;
(statearr_33544_33610[(1)] = (16));

} else {
var statearr_33545_33611 = state_33486__$1;
(statearr_33545_33611[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (9))){
var inst_33415 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
var statearr_33546_33612 = state_33486__$1;
(statearr_33546_33612[(2)] = inst_33415);

(statearr_33546_33612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (5))){
var inst_33361 = cljs.core.deref.call(null,cs);
var inst_33362 = cljs.core.seq.call(null,inst_33361);
var inst_33363 = inst_33362;
var inst_33364 = null;
var inst_33365 = (0);
var inst_33366 = (0);
var state_33486__$1 = (function (){var statearr_33547 = state_33486;
(statearr_33547[(14)] = inst_33366);

(statearr_33547[(15)] = inst_33364);

(statearr_33547[(16)] = inst_33365);

(statearr_33547[(17)] = inst_33363);

return statearr_33547;
})();
var statearr_33548_33613 = state_33486__$1;
(statearr_33548_33613[(2)] = null);

(statearr_33548_33613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (14))){
var state_33486__$1 = state_33486;
var statearr_33549_33614 = state_33486__$1;
(statearr_33549_33614[(2)] = null);

(statearr_33549_33614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (45))){
var inst_33476 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
var statearr_33550_33615 = state_33486__$1;
(statearr_33550_33615[(2)] = inst_33476);

(statearr_33550_33615[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (26))){
var inst_33418 = (state_33486[(29)]);
var inst_33472 = (state_33486[(2)]);
var inst_33473 = cljs.core.seq.call(null,inst_33418);
var state_33486__$1 = (function (){var statearr_33551 = state_33486;
(statearr_33551[(31)] = inst_33472);

return statearr_33551;
})();
if(inst_33473){
var statearr_33552_33616 = state_33486__$1;
(statearr_33552_33616[(1)] = (42));

} else {
var statearr_33553_33617 = state_33486__$1;
(statearr_33553_33617[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (16))){
var inst_33385 = (state_33486[(7)]);
var inst_33387 = cljs.core.chunked_seq_QMARK_.call(null,inst_33385);
var state_33486__$1 = state_33486;
if(inst_33387){
var statearr_33554_33618 = state_33486__$1;
(statearr_33554_33618[(1)] = (19));

} else {
var statearr_33555_33619 = state_33486__$1;
(statearr_33555_33619[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (38))){
var inst_33465 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
var statearr_33556_33620 = state_33486__$1;
(statearr_33556_33620[(2)] = inst_33465);

(statearr_33556_33620[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (30))){
var state_33486__$1 = state_33486;
var statearr_33557_33621 = state_33486__$1;
(statearr_33557_33621[(2)] = null);

(statearr_33557_33621[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (10))){
var inst_33366 = (state_33486[(14)]);
var inst_33364 = (state_33486[(15)]);
var inst_33374 = cljs.core._nth.call(null,inst_33364,inst_33366);
var inst_33375 = cljs.core.nth.call(null,inst_33374,(0),null);
var inst_33376 = cljs.core.nth.call(null,inst_33374,(1),null);
var state_33486__$1 = (function (){var statearr_33558 = state_33486;
(statearr_33558[(26)] = inst_33375);

return statearr_33558;
})();
if(cljs.core.truth_(inst_33376)){
var statearr_33559_33622 = state_33486__$1;
(statearr_33559_33622[(1)] = (13));

} else {
var statearr_33560_33623 = state_33486__$1;
(statearr_33560_33623[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (18))){
var inst_33411 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
var statearr_33561_33624 = state_33486__$1;
(statearr_33561_33624[(2)] = inst_33411);

(statearr_33561_33624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (42))){
var state_33486__$1 = state_33486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33486__$1,(45),dchan);
} else {
if((state_val_33487 === (37))){
var inst_33454 = (state_33486[(23)]);
var inst_33445 = (state_33486[(25)]);
var inst_33354 = (state_33486[(10)]);
var inst_33454__$1 = cljs.core.first.call(null,inst_33445);
var inst_33455 = cljs.core.async.put_BANG_.call(null,inst_33454__$1,inst_33354,done);
var state_33486__$1 = (function (){var statearr_33562 = state_33486;
(statearr_33562[(23)] = inst_33454__$1);

return statearr_33562;
})();
if(cljs.core.truth_(inst_33455)){
var statearr_33563_33625 = state_33486__$1;
(statearr_33563_33625[(1)] = (39));

} else {
var statearr_33564_33626 = state_33486__$1;
(statearr_33564_33626[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (8))){
var inst_33366 = (state_33486[(14)]);
var inst_33365 = (state_33486[(16)]);
var inst_33368 = (inst_33366 < inst_33365);
var inst_33369 = inst_33368;
var state_33486__$1 = state_33486;
if(cljs.core.truth_(inst_33369)){
var statearr_33565_33627 = state_33486__$1;
(statearr_33565_33627[(1)] = (10));

} else {
var statearr_33566_33628 = state_33486__$1;
(statearr_33566_33628[(1)] = (11));

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
});})(c__28307__auto___33574,cs,m,dchan,dctr,done))
;
return ((function (switch__28286__auto__,c__28307__auto___33574,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28287__auto__ = null;
var cljs$core$async$mult_$_state_machine__28287__auto____0 = (function (){
var statearr_33570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33570[(0)] = cljs$core$async$mult_$_state_machine__28287__auto__);

(statearr_33570[(1)] = (1));

return statearr_33570;
});
var cljs$core$async$mult_$_state_machine__28287__auto____1 = (function (state_33486){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_33486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e33571){if((e33571 instanceof Object)){
var ex__28290__auto__ = e33571;
var statearr_33572_33629 = state_33486;
(statearr_33572_33629[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33630 = state_33486;
state_33486 = G__33630;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28287__auto__ = function(state_33486){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28287__auto____1.call(this,state_33486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28287__auto____0;
cljs$core$async$mult_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28287__auto____1;
return cljs$core$async$mult_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto___33574,cs,m,dchan,dctr,done))
})();
var state__28309__auto__ = (function (){var statearr_33573 = f__28308__auto__.call(null);
(statearr_33573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___33574);

return statearr_33573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto___33574,cs,m,dchan,dctr,done))
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
var args33631 = [];
var len__26651__auto___33634 = arguments.length;
var i__26652__auto___33635 = (0);
while(true){
if((i__26652__auto___33635 < len__26651__auto___33634)){
args33631.push((arguments[i__26652__auto___33635]));

var G__33636 = (i__26652__auto___33635 + (1));
i__26652__auto___33635 = G__33636;
continue;
} else {
}
break;
}

var G__33633 = args33631.length;
switch (G__33633) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33631.length)].join('')));

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
var x__26239__auto__ = (((m == null))?null:m);
var m__26240__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26239__auto__)]);
if(!((m__26240__auto__ == null))){
return m__26240__auto__.call(null,m,ch);
} else {
var m__26240__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26240__auto____$1 == null))){
return m__26240__auto____$1.call(null,m,ch);
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
var x__26239__auto__ = (((m == null))?null:m);
var m__26240__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26239__auto__)]);
if(!((m__26240__auto__ == null))){
return m__26240__auto__.call(null,m,ch);
} else {
var m__26240__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26240__auto____$1 == null))){
return m__26240__auto____$1.call(null,m,ch);
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
var x__26239__auto__ = (((m == null))?null:m);
var m__26240__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26239__auto__)]);
if(!((m__26240__auto__ == null))){
return m__26240__auto__.call(null,m);
} else {
var m__26240__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26240__auto____$1 == null))){
return m__26240__auto____$1.call(null,m);
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
var x__26239__auto__ = (((m == null))?null:m);
var m__26240__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26239__auto__)]);
if(!((m__26240__auto__ == null))){
return m__26240__auto__.call(null,m,state_map);
} else {
var m__26240__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26240__auto____$1 == null))){
return m__26240__auto____$1.call(null,m,state_map);
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
var x__26239__auto__ = (((m == null))?null:m);
var m__26240__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26239__auto__)]);
if(!((m__26240__auto__ == null))){
return m__26240__auto__.call(null,m,mode);
} else {
var m__26240__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26240__auto____$1 == null))){
return m__26240__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26658__auto__ = [];
var len__26651__auto___33648 = arguments.length;
var i__26652__auto___33649 = (0);
while(true){
if((i__26652__auto___33649 < len__26651__auto___33648)){
args__26658__auto__.push((arguments[i__26652__auto___33649]));

var G__33650 = (i__26652__auto___33649 + (1));
i__26652__auto___33649 = G__33650;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((3) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26659__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33642){
var map__33643 = p__33642;
var map__33643__$1 = ((((!((map__33643 == null)))?((((map__33643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33643):map__33643);
var opts = map__33643__$1;
var statearr_33645_33651 = state;
(statearr_33645_33651[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33643,map__33643__$1,opts){
return (function (val){
var statearr_33646_33652 = state;
(statearr_33646_33652[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33643,map__33643__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33647_33653 = state;
(statearr_33647_33653[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33638){
var G__33639 = cljs.core.first.call(null,seq33638);
var seq33638__$1 = cljs.core.next.call(null,seq33638);
var G__33640 = cljs.core.first.call(null,seq33638__$1);
var seq33638__$2 = cljs.core.next.call(null,seq33638__$1);
var G__33641 = cljs.core.first.call(null,seq33638__$2);
var seq33638__$3 = cljs.core.next.call(null,seq33638__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33639,G__33640,G__33641,seq33638__$3);
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
if(typeof cljs.core.async.t_cljs$core$async33819 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33819 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33820){
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
this.meta33820 = meta33820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33821,meta33820__$1){
var self__ = this;
var _33821__$1 = this;
return (new cljs.core.async.t_cljs$core$async33819(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33820__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33819.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33821){
var self__ = this;
var _33821__$1 = this;
return self__.meta33820;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33819.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33819.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33819.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async33819.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33819.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33819.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33819.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33819.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33819.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33820","meta33820",1917963837,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33819.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33819";

cljs.core.async.t_cljs$core$async33819.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cljs.core.async/t_cljs$core$async33819");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33819 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33819(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33820){
return (new cljs.core.async.t_cljs$core$async33819(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33820));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33819(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28307__auto___33984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto___33984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto___33984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33921){
var state_val_33922 = (state_33921[(1)]);
if((state_val_33922 === (7))){
var inst_33837 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
var statearr_33923_33985 = state_33921__$1;
(statearr_33923_33985[(2)] = inst_33837);

(statearr_33923_33985[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (20))){
var inst_33849 = (state_33921[(7)]);
var state_33921__$1 = state_33921;
var statearr_33924_33986 = state_33921__$1;
(statearr_33924_33986[(2)] = inst_33849);

(statearr_33924_33986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (27))){
var state_33921__$1 = state_33921;
var statearr_33925_33987 = state_33921__$1;
(statearr_33925_33987[(2)] = null);

(statearr_33925_33987[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (1))){
var inst_33825 = (state_33921[(8)]);
var inst_33825__$1 = calc_state.call(null);
var inst_33827 = (inst_33825__$1 == null);
var inst_33828 = cljs.core.not.call(null,inst_33827);
var state_33921__$1 = (function (){var statearr_33926 = state_33921;
(statearr_33926[(8)] = inst_33825__$1);

return statearr_33926;
})();
if(inst_33828){
var statearr_33927_33988 = state_33921__$1;
(statearr_33927_33988[(1)] = (2));

} else {
var statearr_33928_33989 = state_33921__$1;
(statearr_33928_33989[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (24))){
var inst_33881 = (state_33921[(9)]);
var inst_33872 = (state_33921[(10)]);
var inst_33895 = (state_33921[(11)]);
var inst_33895__$1 = inst_33872.call(null,inst_33881);
var state_33921__$1 = (function (){var statearr_33929 = state_33921;
(statearr_33929[(11)] = inst_33895__$1);

return statearr_33929;
})();
if(cljs.core.truth_(inst_33895__$1)){
var statearr_33930_33990 = state_33921__$1;
(statearr_33930_33990[(1)] = (29));

} else {
var statearr_33931_33991 = state_33921__$1;
(statearr_33931_33991[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (4))){
var inst_33840 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
if(cljs.core.truth_(inst_33840)){
var statearr_33932_33992 = state_33921__$1;
(statearr_33932_33992[(1)] = (8));

} else {
var statearr_33933_33993 = state_33921__$1;
(statearr_33933_33993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (15))){
var inst_33866 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
if(cljs.core.truth_(inst_33866)){
var statearr_33934_33994 = state_33921__$1;
(statearr_33934_33994[(1)] = (19));

} else {
var statearr_33935_33995 = state_33921__$1;
(statearr_33935_33995[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (21))){
var inst_33871 = (state_33921[(12)]);
var inst_33871__$1 = (state_33921[(2)]);
var inst_33872 = cljs.core.get.call(null,inst_33871__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33873 = cljs.core.get.call(null,inst_33871__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33874 = cljs.core.get.call(null,inst_33871__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33921__$1 = (function (){var statearr_33936 = state_33921;
(statearr_33936[(10)] = inst_33872);

(statearr_33936[(12)] = inst_33871__$1);

(statearr_33936[(13)] = inst_33873);

return statearr_33936;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33921__$1,(22),inst_33874);
} else {
if((state_val_33922 === (31))){
var inst_33903 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
if(cljs.core.truth_(inst_33903)){
var statearr_33937_33996 = state_33921__$1;
(statearr_33937_33996[(1)] = (32));

} else {
var statearr_33938_33997 = state_33921__$1;
(statearr_33938_33997[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (32))){
var inst_33880 = (state_33921[(14)]);
var state_33921__$1 = state_33921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33921__$1,(35),out,inst_33880);
} else {
if((state_val_33922 === (33))){
var inst_33871 = (state_33921[(12)]);
var inst_33849 = inst_33871;
var state_33921__$1 = (function (){var statearr_33939 = state_33921;
(statearr_33939[(7)] = inst_33849);

return statearr_33939;
})();
var statearr_33940_33998 = state_33921__$1;
(statearr_33940_33998[(2)] = null);

(statearr_33940_33998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (13))){
var inst_33849 = (state_33921[(7)]);
var inst_33856 = inst_33849.cljs$lang$protocol_mask$partition0$;
var inst_33857 = (inst_33856 & (64));
var inst_33858 = inst_33849.cljs$core$ISeq$;
var inst_33859 = (inst_33857) || (inst_33858);
var state_33921__$1 = state_33921;
if(cljs.core.truth_(inst_33859)){
var statearr_33941_33999 = state_33921__$1;
(statearr_33941_33999[(1)] = (16));

} else {
var statearr_33942_34000 = state_33921__$1;
(statearr_33942_34000[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (22))){
var inst_33881 = (state_33921[(9)]);
var inst_33880 = (state_33921[(14)]);
var inst_33879 = (state_33921[(2)]);
var inst_33880__$1 = cljs.core.nth.call(null,inst_33879,(0),null);
var inst_33881__$1 = cljs.core.nth.call(null,inst_33879,(1),null);
var inst_33882 = (inst_33880__$1 == null);
var inst_33883 = cljs.core._EQ_.call(null,inst_33881__$1,change);
var inst_33884 = (inst_33882) || (inst_33883);
var state_33921__$1 = (function (){var statearr_33943 = state_33921;
(statearr_33943[(9)] = inst_33881__$1);

(statearr_33943[(14)] = inst_33880__$1);

return statearr_33943;
})();
if(cljs.core.truth_(inst_33884)){
var statearr_33944_34001 = state_33921__$1;
(statearr_33944_34001[(1)] = (23));

} else {
var statearr_33945_34002 = state_33921__$1;
(statearr_33945_34002[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (36))){
var inst_33871 = (state_33921[(12)]);
var inst_33849 = inst_33871;
var state_33921__$1 = (function (){var statearr_33946 = state_33921;
(statearr_33946[(7)] = inst_33849);

return statearr_33946;
})();
var statearr_33947_34003 = state_33921__$1;
(statearr_33947_34003[(2)] = null);

(statearr_33947_34003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (29))){
var inst_33895 = (state_33921[(11)]);
var state_33921__$1 = state_33921;
var statearr_33948_34004 = state_33921__$1;
(statearr_33948_34004[(2)] = inst_33895);

(statearr_33948_34004[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (6))){
var state_33921__$1 = state_33921;
var statearr_33949_34005 = state_33921__$1;
(statearr_33949_34005[(2)] = false);

(statearr_33949_34005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (28))){
var inst_33891 = (state_33921[(2)]);
var inst_33892 = calc_state.call(null);
var inst_33849 = inst_33892;
var state_33921__$1 = (function (){var statearr_33950 = state_33921;
(statearr_33950[(7)] = inst_33849);

(statearr_33950[(15)] = inst_33891);

return statearr_33950;
})();
var statearr_33951_34006 = state_33921__$1;
(statearr_33951_34006[(2)] = null);

(statearr_33951_34006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (25))){
var inst_33917 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
var statearr_33952_34007 = state_33921__$1;
(statearr_33952_34007[(2)] = inst_33917);

(statearr_33952_34007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (34))){
var inst_33915 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
var statearr_33953_34008 = state_33921__$1;
(statearr_33953_34008[(2)] = inst_33915);

(statearr_33953_34008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (17))){
var state_33921__$1 = state_33921;
var statearr_33954_34009 = state_33921__$1;
(statearr_33954_34009[(2)] = false);

(statearr_33954_34009[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (3))){
var state_33921__$1 = state_33921;
var statearr_33955_34010 = state_33921__$1;
(statearr_33955_34010[(2)] = false);

(statearr_33955_34010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (12))){
var inst_33919 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33921__$1,inst_33919);
} else {
if((state_val_33922 === (2))){
var inst_33825 = (state_33921[(8)]);
var inst_33830 = inst_33825.cljs$lang$protocol_mask$partition0$;
var inst_33831 = (inst_33830 & (64));
var inst_33832 = inst_33825.cljs$core$ISeq$;
var inst_33833 = (inst_33831) || (inst_33832);
var state_33921__$1 = state_33921;
if(cljs.core.truth_(inst_33833)){
var statearr_33956_34011 = state_33921__$1;
(statearr_33956_34011[(1)] = (5));

} else {
var statearr_33957_34012 = state_33921__$1;
(statearr_33957_34012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (23))){
var inst_33880 = (state_33921[(14)]);
var inst_33886 = (inst_33880 == null);
var state_33921__$1 = state_33921;
if(cljs.core.truth_(inst_33886)){
var statearr_33958_34013 = state_33921__$1;
(statearr_33958_34013[(1)] = (26));

} else {
var statearr_33959_34014 = state_33921__$1;
(statearr_33959_34014[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (35))){
var inst_33906 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
if(cljs.core.truth_(inst_33906)){
var statearr_33960_34015 = state_33921__$1;
(statearr_33960_34015[(1)] = (36));

} else {
var statearr_33961_34016 = state_33921__$1;
(statearr_33961_34016[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (19))){
var inst_33849 = (state_33921[(7)]);
var inst_33868 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33849);
var state_33921__$1 = state_33921;
var statearr_33962_34017 = state_33921__$1;
(statearr_33962_34017[(2)] = inst_33868);

(statearr_33962_34017[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (11))){
var inst_33849 = (state_33921[(7)]);
var inst_33853 = (inst_33849 == null);
var inst_33854 = cljs.core.not.call(null,inst_33853);
var state_33921__$1 = state_33921;
if(inst_33854){
var statearr_33963_34018 = state_33921__$1;
(statearr_33963_34018[(1)] = (13));

} else {
var statearr_33964_34019 = state_33921__$1;
(statearr_33964_34019[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (9))){
var inst_33825 = (state_33921[(8)]);
var state_33921__$1 = state_33921;
var statearr_33965_34020 = state_33921__$1;
(statearr_33965_34020[(2)] = inst_33825);

(statearr_33965_34020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (5))){
var state_33921__$1 = state_33921;
var statearr_33966_34021 = state_33921__$1;
(statearr_33966_34021[(2)] = true);

(statearr_33966_34021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (14))){
var state_33921__$1 = state_33921;
var statearr_33967_34022 = state_33921__$1;
(statearr_33967_34022[(2)] = false);

(statearr_33967_34022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (26))){
var inst_33881 = (state_33921[(9)]);
var inst_33888 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33881);
var state_33921__$1 = state_33921;
var statearr_33968_34023 = state_33921__$1;
(statearr_33968_34023[(2)] = inst_33888);

(statearr_33968_34023[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (16))){
var state_33921__$1 = state_33921;
var statearr_33969_34024 = state_33921__$1;
(statearr_33969_34024[(2)] = true);

(statearr_33969_34024[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (38))){
var inst_33911 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
var statearr_33970_34025 = state_33921__$1;
(statearr_33970_34025[(2)] = inst_33911);

(statearr_33970_34025[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (30))){
var inst_33881 = (state_33921[(9)]);
var inst_33872 = (state_33921[(10)]);
var inst_33873 = (state_33921[(13)]);
var inst_33898 = cljs.core.empty_QMARK_.call(null,inst_33872);
var inst_33899 = inst_33873.call(null,inst_33881);
var inst_33900 = cljs.core.not.call(null,inst_33899);
var inst_33901 = (inst_33898) && (inst_33900);
var state_33921__$1 = state_33921;
var statearr_33971_34026 = state_33921__$1;
(statearr_33971_34026[(2)] = inst_33901);

(statearr_33971_34026[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (10))){
var inst_33825 = (state_33921[(8)]);
var inst_33845 = (state_33921[(2)]);
var inst_33846 = cljs.core.get.call(null,inst_33845,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33847 = cljs.core.get.call(null,inst_33845,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33848 = cljs.core.get.call(null,inst_33845,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33849 = inst_33825;
var state_33921__$1 = (function (){var statearr_33972 = state_33921;
(statearr_33972[(16)] = inst_33846);

(statearr_33972[(7)] = inst_33849);

(statearr_33972[(17)] = inst_33848);

(statearr_33972[(18)] = inst_33847);

return statearr_33972;
})();
var statearr_33973_34027 = state_33921__$1;
(statearr_33973_34027[(2)] = null);

(statearr_33973_34027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (18))){
var inst_33863 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
var statearr_33974_34028 = state_33921__$1;
(statearr_33974_34028[(2)] = inst_33863);

(statearr_33974_34028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (37))){
var state_33921__$1 = state_33921;
var statearr_33975_34029 = state_33921__$1;
(statearr_33975_34029[(2)] = null);

(statearr_33975_34029[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (8))){
var inst_33825 = (state_33921[(8)]);
var inst_33842 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33825);
var state_33921__$1 = state_33921;
var statearr_33976_34030 = state_33921__$1;
(statearr_33976_34030[(2)] = inst_33842);

(statearr_33976_34030[(1)] = (10));


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
});})(c__28307__auto___33984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28286__auto__,c__28307__auto___33984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28287__auto__ = null;
var cljs$core$async$mix_$_state_machine__28287__auto____0 = (function (){
var statearr_33980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33980[(0)] = cljs$core$async$mix_$_state_machine__28287__auto__);

(statearr_33980[(1)] = (1));

return statearr_33980;
});
var cljs$core$async$mix_$_state_machine__28287__auto____1 = (function (state_33921){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_33921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e33981){if((e33981 instanceof Object)){
var ex__28290__auto__ = e33981;
var statearr_33982_34031 = state_33921;
(statearr_33982_34031[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34032 = state_33921;
state_33921 = G__34032;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28287__auto__ = function(state_33921){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28287__auto____1.call(this,state_33921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28287__auto____0;
cljs$core$async$mix_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28287__auto____1;
return cljs$core$async$mix_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto___33984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28309__auto__ = (function (){var statearr_33983 = f__28308__auto__.call(null);
(statearr_33983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___33984);

return statearr_33983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto___33984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__26239__auto__ = (((p == null))?null:p);
var m__26240__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26239__auto__)]);
if(!((m__26240__auto__ == null))){
return m__26240__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26240__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26240__auto____$1 == null))){
return m__26240__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__26239__auto__ = (((p == null))?null:p);
var m__26240__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26239__auto__)]);
if(!((m__26240__auto__ == null))){
return m__26240__auto__.call(null,p,v,ch);
} else {
var m__26240__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26240__auto____$1 == null))){
return m__26240__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args34033 = [];
var len__26651__auto___34036 = arguments.length;
var i__26652__auto___34037 = (0);
while(true){
if((i__26652__auto___34037 < len__26651__auto___34036)){
args34033.push((arguments[i__26652__auto___34037]));

var G__34038 = (i__26652__auto___34037 + (1));
i__26652__auto___34037 = G__34038;
continue;
} else {
}
break;
}

var G__34035 = args34033.length;
switch (G__34035) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34033.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26239__auto__ = (((p == null))?null:p);
var m__26240__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26239__auto__)]);
if(!((m__26240__auto__ == null))){
return m__26240__auto__.call(null,p);
} else {
var m__26240__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26240__auto____$1 == null))){
return m__26240__auto____$1.call(null,p);
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
var x__26239__auto__ = (((p == null))?null:p);
var m__26240__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26239__auto__)]);
if(!((m__26240__auto__ == null))){
return m__26240__auto__.call(null,p,v);
} else {
var m__26240__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26240__auto____$1 == null))){
return m__26240__auto____$1.call(null,p,v);
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
var args34041 = [];
var len__26651__auto___34166 = arguments.length;
var i__26652__auto___34167 = (0);
while(true){
if((i__26652__auto___34167 < len__26651__auto___34166)){
args34041.push((arguments[i__26652__auto___34167]));

var G__34168 = (i__26652__auto___34167 + (1));
i__26652__auto___34167 = G__34168;
continue;
} else {
}
break;
}

var G__34043 = args34041.length;
switch (G__34043) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34041.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25576__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25576__auto__)){
return or__25576__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25576__auto__,mults){
return (function (p1__34040_SHARP_){
if(cljs.core.truth_(p1__34040_SHARP_.call(null,topic))){
return p1__34040_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34040_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25576__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34044 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34045){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34045 = meta34045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34046,meta34045__$1){
var self__ = this;
var _34046__$1 = this;
return (new cljs.core.async.t_cljs$core$async34044(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34045__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34046){
var self__ = this;
var _34046__$1 = this;
return self__.meta34045;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34044.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34045","meta34045",-44691008,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34044.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34044";

cljs.core.async.t_cljs$core$async34044.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cljs.core.async/t_cljs$core$async34044");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34044 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34044(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34045){
return (new cljs.core.async.t_cljs$core$async34044(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34045));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34044(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28307__auto___34170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto___34170,mults,ensure_mult,p){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto___34170,mults,ensure_mult,p){
return (function (state_34118){
var state_val_34119 = (state_34118[(1)]);
if((state_val_34119 === (7))){
var inst_34114 = (state_34118[(2)]);
var state_34118__$1 = state_34118;
var statearr_34120_34171 = state_34118__$1;
(statearr_34120_34171[(2)] = inst_34114);

(statearr_34120_34171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (20))){
var state_34118__$1 = state_34118;
var statearr_34121_34172 = state_34118__$1;
(statearr_34121_34172[(2)] = null);

(statearr_34121_34172[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (1))){
var state_34118__$1 = state_34118;
var statearr_34122_34173 = state_34118__$1;
(statearr_34122_34173[(2)] = null);

(statearr_34122_34173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (24))){
var inst_34097 = (state_34118[(7)]);
var inst_34106 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34097);
var state_34118__$1 = state_34118;
var statearr_34123_34174 = state_34118__$1;
(statearr_34123_34174[(2)] = inst_34106);

(statearr_34123_34174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (4))){
var inst_34049 = (state_34118[(8)]);
var inst_34049__$1 = (state_34118[(2)]);
var inst_34050 = (inst_34049__$1 == null);
var state_34118__$1 = (function (){var statearr_34124 = state_34118;
(statearr_34124[(8)] = inst_34049__$1);

return statearr_34124;
})();
if(cljs.core.truth_(inst_34050)){
var statearr_34125_34175 = state_34118__$1;
(statearr_34125_34175[(1)] = (5));

} else {
var statearr_34126_34176 = state_34118__$1;
(statearr_34126_34176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (15))){
var inst_34091 = (state_34118[(2)]);
var state_34118__$1 = state_34118;
var statearr_34127_34177 = state_34118__$1;
(statearr_34127_34177[(2)] = inst_34091);

(statearr_34127_34177[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (21))){
var inst_34111 = (state_34118[(2)]);
var state_34118__$1 = (function (){var statearr_34128 = state_34118;
(statearr_34128[(9)] = inst_34111);

return statearr_34128;
})();
var statearr_34129_34178 = state_34118__$1;
(statearr_34129_34178[(2)] = null);

(statearr_34129_34178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (13))){
var inst_34073 = (state_34118[(10)]);
var inst_34075 = cljs.core.chunked_seq_QMARK_.call(null,inst_34073);
var state_34118__$1 = state_34118;
if(inst_34075){
var statearr_34130_34179 = state_34118__$1;
(statearr_34130_34179[(1)] = (16));

} else {
var statearr_34131_34180 = state_34118__$1;
(statearr_34131_34180[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (22))){
var inst_34103 = (state_34118[(2)]);
var state_34118__$1 = state_34118;
if(cljs.core.truth_(inst_34103)){
var statearr_34132_34181 = state_34118__$1;
(statearr_34132_34181[(1)] = (23));

} else {
var statearr_34133_34182 = state_34118__$1;
(statearr_34133_34182[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (6))){
var inst_34097 = (state_34118[(7)]);
var inst_34049 = (state_34118[(8)]);
var inst_34099 = (state_34118[(11)]);
var inst_34097__$1 = topic_fn.call(null,inst_34049);
var inst_34098 = cljs.core.deref.call(null,mults);
var inst_34099__$1 = cljs.core.get.call(null,inst_34098,inst_34097__$1);
var state_34118__$1 = (function (){var statearr_34134 = state_34118;
(statearr_34134[(7)] = inst_34097__$1);

(statearr_34134[(11)] = inst_34099__$1);

return statearr_34134;
})();
if(cljs.core.truth_(inst_34099__$1)){
var statearr_34135_34183 = state_34118__$1;
(statearr_34135_34183[(1)] = (19));

} else {
var statearr_34136_34184 = state_34118__$1;
(statearr_34136_34184[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (25))){
var inst_34108 = (state_34118[(2)]);
var state_34118__$1 = state_34118;
var statearr_34137_34185 = state_34118__$1;
(statearr_34137_34185[(2)] = inst_34108);

(statearr_34137_34185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (17))){
var inst_34073 = (state_34118[(10)]);
var inst_34082 = cljs.core.first.call(null,inst_34073);
var inst_34083 = cljs.core.async.muxch_STAR_.call(null,inst_34082);
var inst_34084 = cljs.core.async.close_BANG_.call(null,inst_34083);
var inst_34085 = cljs.core.next.call(null,inst_34073);
var inst_34059 = inst_34085;
var inst_34060 = null;
var inst_34061 = (0);
var inst_34062 = (0);
var state_34118__$1 = (function (){var statearr_34138 = state_34118;
(statearr_34138[(12)] = inst_34084);

(statearr_34138[(13)] = inst_34059);

(statearr_34138[(14)] = inst_34060);

(statearr_34138[(15)] = inst_34061);

(statearr_34138[(16)] = inst_34062);

return statearr_34138;
})();
var statearr_34139_34186 = state_34118__$1;
(statearr_34139_34186[(2)] = null);

(statearr_34139_34186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (3))){
var inst_34116 = (state_34118[(2)]);
var state_34118__$1 = state_34118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34118__$1,inst_34116);
} else {
if((state_val_34119 === (12))){
var inst_34093 = (state_34118[(2)]);
var state_34118__$1 = state_34118;
var statearr_34140_34187 = state_34118__$1;
(statearr_34140_34187[(2)] = inst_34093);

(statearr_34140_34187[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (2))){
var state_34118__$1 = state_34118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34118__$1,(4),ch);
} else {
if((state_val_34119 === (23))){
var state_34118__$1 = state_34118;
var statearr_34141_34188 = state_34118__$1;
(statearr_34141_34188[(2)] = null);

(statearr_34141_34188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (19))){
var inst_34049 = (state_34118[(8)]);
var inst_34099 = (state_34118[(11)]);
var inst_34101 = cljs.core.async.muxch_STAR_.call(null,inst_34099);
var state_34118__$1 = state_34118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34118__$1,(22),inst_34101,inst_34049);
} else {
if((state_val_34119 === (11))){
var inst_34059 = (state_34118[(13)]);
var inst_34073 = (state_34118[(10)]);
var inst_34073__$1 = cljs.core.seq.call(null,inst_34059);
var state_34118__$1 = (function (){var statearr_34142 = state_34118;
(statearr_34142[(10)] = inst_34073__$1);

return statearr_34142;
})();
if(inst_34073__$1){
var statearr_34143_34189 = state_34118__$1;
(statearr_34143_34189[(1)] = (13));

} else {
var statearr_34144_34190 = state_34118__$1;
(statearr_34144_34190[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (9))){
var inst_34095 = (state_34118[(2)]);
var state_34118__$1 = state_34118;
var statearr_34145_34191 = state_34118__$1;
(statearr_34145_34191[(2)] = inst_34095);

(statearr_34145_34191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (5))){
var inst_34056 = cljs.core.deref.call(null,mults);
var inst_34057 = cljs.core.vals.call(null,inst_34056);
var inst_34058 = cljs.core.seq.call(null,inst_34057);
var inst_34059 = inst_34058;
var inst_34060 = null;
var inst_34061 = (0);
var inst_34062 = (0);
var state_34118__$1 = (function (){var statearr_34146 = state_34118;
(statearr_34146[(13)] = inst_34059);

(statearr_34146[(14)] = inst_34060);

(statearr_34146[(15)] = inst_34061);

(statearr_34146[(16)] = inst_34062);

return statearr_34146;
})();
var statearr_34147_34192 = state_34118__$1;
(statearr_34147_34192[(2)] = null);

(statearr_34147_34192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (14))){
var state_34118__$1 = state_34118;
var statearr_34151_34193 = state_34118__$1;
(statearr_34151_34193[(2)] = null);

(statearr_34151_34193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (16))){
var inst_34073 = (state_34118[(10)]);
var inst_34077 = cljs.core.chunk_first.call(null,inst_34073);
var inst_34078 = cljs.core.chunk_rest.call(null,inst_34073);
var inst_34079 = cljs.core.count.call(null,inst_34077);
var inst_34059 = inst_34078;
var inst_34060 = inst_34077;
var inst_34061 = inst_34079;
var inst_34062 = (0);
var state_34118__$1 = (function (){var statearr_34152 = state_34118;
(statearr_34152[(13)] = inst_34059);

(statearr_34152[(14)] = inst_34060);

(statearr_34152[(15)] = inst_34061);

(statearr_34152[(16)] = inst_34062);

return statearr_34152;
})();
var statearr_34153_34194 = state_34118__$1;
(statearr_34153_34194[(2)] = null);

(statearr_34153_34194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (10))){
var inst_34059 = (state_34118[(13)]);
var inst_34060 = (state_34118[(14)]);
var inst_34061 = (state_34118[(15)]);
var inst_34062 = (state_34118[(16)]);
var inst_34067 = cljs.core._nth.call(null,inst_34060,inst_34062);
var inst_34068 = cljs.core.async.muxch_STAR_.call(null,inst_34067);
var inst_34069 = cljs.core.async.close_BANG_.call(null,inst_34068);
var inst_34070 = (inst_34062 + (1));
var tmp34148 = inst_34059;
var tmp34149 = inst_34060;
var tmp34150 = inst_34061;
var inst_34059__$1 = tmp34148;
var inst_34060__$1 = tmp34149;
var inst_34061__$1 = tmp34150;
var inst_34062__$1 = inst_34070;
var state_34118__$1 = (function (){var statearr_34154 = state_34118;
(statearr_34154[(13)] = inst_34059__$1);

(statearr_34154[(14)] = inst_34060__$1);

(statearr_34154[(15)] = inst_34061__$1);

(statearr_34154[(17)] = inst_34069);

(statearr_34154[(16)] = inst_34062__$1);

return statearr_34154;
})();
var statearr_34155_34195 = state_34118__$1;
(statearr_34155_34195[(2)] = null);

(statearr_34155_34195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (18))){
var inst_34088 = (state_34118[(2)]);
var state_34118__$1 = state_34118;
var statearr_34156_34196 = state_34118__$1;
(statearr_34156_34196[(2)] = inst_34088);

(statearr_34156_34196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34119 === (8))){
var inst_34061 = (state_34118[(15)]);
var inst_34062 = (state_34118[(16)]);
var inst_34064 = (inst_34062 < inst_34061);
var inst_34065 = inst_34064;
var state_34118__$1 = state_34118;
if(cljs.core.truth_(inst_34065)){
var statearr_34157_34197 = state_34118__$1;
(statearr_34157_34197[(1)] = (10));

} else {
var statearr_34158_34198 = state_34118__$1;
(statearr_34158_34198[(1)] = (11));

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
});})(c__28307__auto___34170,mults,ensure_mult,p))
;
return ((function (switch__28286__auto__,c__28307__auto___34170,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28287__auto__ = null;
var cljs$core$async$state_machine__28287__auto____0 = (function (){
var statearr_34162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34162[(0)] = cljs$core$async$state_machine__28287__auto__);

(statearr_34162[(1)] = (1));

return statearr_34162;
});
var cljs$core$async$state_machine__28287__auto____1 = (function (state_34118){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_34118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e34163){if((e34163 instanceof Object)){
var ex__28290__auto__ = e34163;
var statearr_34164_34199 = state_34118;
(statearr_34164_34199[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34200 = state_34118;
state_34118 = G__34200;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$state_machine__28287__auto__ = function(state_34118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28287__auto____1.call(this,state_34118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28287__auto____0;
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28287__auto____1;
return cljs$core$async$state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto___34170,mults,ensure_mult,p))
})();
var state__28309__auto__ = (function (){var statearr_34165 = f__28308__auto__.call(null);
(statearr_34165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___34170);

return statearr_34165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto___34170,mults,ensure_mult,p))
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
var args34201 = [];
var len__26651__auto___34204 = arguments.length;
var i__26652__auto___34205 = (0);
while(true){
if((i__26652__auto___34205 < len__26651__auto___34204)){
args34201.push((arguments[i__26652__auto___34205]));

var G__34206 = (i__26652__auto___34205 + (1));
i__26652__auto___34205 = G__34206;
continue;
} else {
}
break;
}

var G__34203 = args34201.length;
switch (G__34203) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34201.length)].join('')));

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
var args34208 = [];
var len__26651__auto___34211 = arguments.length;
var i__26652__auto___34212 = (0);
while(true){
if((i__26652__auto___34212 < len__26651__auto___34211)){
args34208.push((arguments[i__26652__auto___34212]));

var G__34213 = (i__26652__auto___34212 + (1));
i__26652__auto___34212 = G__34213;
continue;
} else {
}
break;
}

var G__34210 = args34208.length;
switch (G__34210) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34208.length)].join('')));

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
var args34215 = [];
var len__26651__auto___34286 = arguments.length;
var i__26652__auto___34287 = (0);
while(true){
if((i__26652__auto___34287 < len__26651__auto___34286)){
args34215.push((arguments[i__26652__auto___34287]));

var G__34288 = (i__26652__auto___34287 + (1));
i__26652__auto___34287 = G__34288;
continue;
} else {
}
break;
}

var G__34217 = args34215.length;
switch (G__34217) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34215.length)].join('')));

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
var c__28307__auto___34290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto___34290,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto___34290,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34256){
var state_val_34257 = (state_34256[(1)]);
if((state_val_34257 === (7))){
var state_34256__$1 = state_34256;
var statearr_34258_34291 = state_34256__$1;
(statearr_34258_34291[(2)] = null);

(statearr_34258_34291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34257 === (1))){
var state_34256__$1 = state_34256;
var statearr_34259_34292 = state_34256__$1;
(statearr_34259_34292[(2)] = null);

(statearr_34259_34292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34257 === (4))){
var inst_34220 = (state_34256[(7)]);
var inst_34222 = (inst_34220 < cnt);
var state_34256__$1 = state_34256;
if(cljs.core.truth_(inst_34222)){
var statearr_34260_34293 = state_34256__$1;
(statearr_34260_34293[(1)] = (6));

} else {
var statearr_34261_34294 = state_34256__$1;
(statearr_34261_34294[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34257 === (15))){
var inst_34252 = (state_34256[(2)]);
var state_34256__$1 = state_34256;
var statearr_34262_34295 = state_34256__$1;
(statearr_34262_34295[(2)] = inst_34252);

(statearr_34262_34295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34257 === (13))){
var inst_34245 = cljs.core.async.close_BANG_.call(null,out);
var state_34256__$1 = state_34256;
var statearr_34263_34296 = state_34256__$1;
(statearr_34263_34296[(2)] = inst_34245);

(statearr_34263_34296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34257 === (6))){
var state_34256__$1 = state_34256;
var statearr_34264_34297 = state_34256__$1;
(statearr_34264_34297[(2)] = null);

(statearr_34264_34297[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34257 === (3))){
var inst_34254 = (state_34256[(2)]);
var state_34256__$1 = state_34256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34256__$1,inst_34254);
} else {
if((state_val_34257 === (12))){
var inst_34242 = (state_34256[(8)]);
var inst_34242__$1 = (state_34256[(2)]);
var inst_34243 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34242__$1);
var state_34256__$1 = (function (){var statearr_34265 = state_34256;
(statearr_34265[(8)] = inst_34242__$1);

return statearr_34265;
})();
if(cljs.core.truth_(inst_34243)){
var statearr_34266_34298 = state_34256__$1;
(statearr_34266_34298[(1)] = (13));

} else {
var statearr_34267_34299 = state_34256__$1;
(statearr_34267_34299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34257 === (2))){
var inst_34219 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34220 = (0);
var state_34256__$1 = (function (){var statearr_34268 = state_34256;
(statearr_34268[(7)] = inst_34220);

(statearr_34268[(9)] = inst_34219);

return statearr_34268;
})();
var statearr_34269_34300 = state_34256__$1;
(statearr_34269_34300[(2)] = null);

(statearr_34269_34300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34257 === (11))){
var inst_34220 = (state_34256[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34256,(10),Object,null,(9));
var inst_34229 = chs__$1.call(null,inst_34220);
var inst_34230 = done.call(null,inst_34220);
var inst_34231 = cljs.core.async.take_BANG_.call(null,inst_34229,inst_34230);
var state_34256__$1 = state_34256;
var statearr_34270_34301 = state_34256__$1;
(statearr_34270_34301[(2)] = inst_34231);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34256__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34257 === (9))){
var inst_34220 = (state_34256[(7)]);
var inst_34233 = (state_34256[(2)]);
var inst_34234 = (inst_34220 + (1));
var inst_34220__$1 = inst_34234;
var state_34256__$1 = (function (){var statearr_34271 = state_34256;
(statearr_34271[(7)] = inst_34220__$1);

(statearr_34271[(10)] = inst_34233);

return statearr_34271;
})();
var statearr_34272_34302 = state_34256__$1;
(statearr_34272_34302[(2)] = null);

(statearr_34272_34302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34257 === (5))){
var inst_34240 = (state_34256[(2)]);
var state_34256__$1 = (function (){var statearr_34273 = state_34256;
(statearr_34273[(11)] = inst_34240);

return statearr_34273;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34256__$1,(12),dchan);
} else {
if((state_val_34257 === (14))){
var inst_34242 = (state_34256[(8)]);
var inst_34247 = cljs.core.apply.call(null,f,inst_34242);
var state_34256__$1 = state_34256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34256__$1,(16),out,inst_34247);
} else {
if((state_val_34257 === (16))){
var inst_34249 = (state_34256[(2)]);
var state_34256__$1 = (function (){var statearr_34274 = state_34256;
(statearr_34274[(12)] = inst_34249);

return statearr_34274;
})();
var statearr_34275_34303 = state_34256__$1;
(statearr_34275_34303[(2)] = null);

(statearr_34275_34303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34257 === (10))){
var inst_34224 = (state_34256[(2)]);
var inst_34225 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34256__$1 = (function (){var statearr_34276 = state_34256;
(statearr_34276[(13)] = inst_34224);

return statearr_34276;
})();
var statearr_34277_34304 = state_34256__$1;
(statearr_34277_34304[(2)] = inst_34225);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34256__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34257 === (8))){
var inst_34238 = (state_34256[(2)]);
var state_34256__$1 = state_34256;
var statearr_34278_34305 = state_34256__$1;
(statearr_34278_34305[(2)] = inst_34238);

(statearr_34278_34305[(1)] = (5));


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
});})(c__28307__auto___34290,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28286__auto__,c__28307__auto___34290,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28287__auto__ = null;
var cljs$core$async$state_machine__28287__auto____0 = (function (){
var statearr_34282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34282[(0)] = cljs$core$async$state_machine__28287__auto__);

(statearr_34282[(1)] = (1));

return statearr_34282;
});
var cljs$core$async$state_machine__28287__auto____1 = (function (state_34256){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_34256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e34283){if((e34283 instanceof Object)){
var ex__28290__auto__ = e34283;
var statearr_34284_34306 = state_34256;
(statearr_34284_34306[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34307 = state_34256;
state_34256 = G__34307;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$state_machine__28287__auto__ = function(state_34256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28287__auto____1.call(this,state_34256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28287__auto____0;
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28287__auto____1;
return cljs$core$async$state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto___34290,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28309__auto__ = (function (){var statearr_34285 = f__28308__auto__.call(null);
(statearr_34285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___34290);

return statearr_34285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto___34290,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args34309 = [];
var len__26651__auto___34367 = arguments.length;
var i__26652__auto___34368 = (0);
while(true){
if((i__26652__auto___34368 < len__26651__auto___34367)){
args34309.push((arguments[i__26652__auto___34368]));

var G__34369 = (i__26652__auto___34368 + (1));
i__26652__auto___34368 = G__34369;
continue;
} else {
}
break;
}

var G__34311 = args34309.length;
switch (G__34311) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34309.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28307__auto___34371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto___34371,out){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto___34371,out){
return (function (state_34343){
var state_val_34344 = (state_34343[(1)]);
if((state_val_34344 === (7))){
var inst_34323 = (state_34343[(7)]);
var inst_34322 = (state_34343[(8)]);
var inst_34322__$1 = (state_34343[(2)]);
var inst_34323__$1 = cljs.core.nth.call(null,inst_34322__$1,(0),null);
var inst_34324 = cljs.core.nth.call(null,inst_34322__$1,(1),null);
var inst_34325 = (inst_34323__$1 == null);
var state_34343__$1 = (function (){var statearr_34345 = state_34343;
(statearr_34345[(9)] = inst_34324);

(statearr_34345[(7)] = inst_34323__$1);

(statearr_34345[(8)] = inst_34322__$1);

return statearr_34345;
})();
if(cljs.core.truth_(inst_34325)){
var statearr_34346_34372 = state_34343__$1;
(statearr_34346_34372[(1)] = (8));

} else {
var statearr_34347_34373 = state_34343__$1;
(statearr_34347_34373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (1))){
var inst_34312 = cljs.core.vec.call(null,chs);
var inst_34313 = inst_34312;
var state_34343__$1 = (function (){var statearr_34348 = state_34343;
(statearr_34348[(10)] = inst_34313);

return statearr_34348;
})();
var statearr_34349_34374 = state_34343__$1;
(statearr_34349_34374[(2)] = null);

(statearr_34349_34374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (4))){
var inst_34313 = (state_34343[(10)]);
var state_34343__$1 = state_34343;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34343__$1,(7),inst_34313);
} else {
if((state_val_34344 === (6))){
var inst_34339 = (state_34343[(2)]);
var state_34343__$1 = state_34343;
var statearr_34350_34375 = state_34343__$1;
(statearr_34350_34375[(2)] = inst_34339);

(statearr_34350_34375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (3))){
var inst_34341 = (state_34343[(2)]);
var state_34343__$1 = state_34343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34343__$1,inst_34341);
} else {
if((state_val_34344 === (2))){
var inst_34313 = (state_34343[(10)]);
var inst_34315 = cljs.core.count.call(null,inst_34313);
var inst_34316 = (inst_34315 > (0));
var state_34343__$1 = state_34343;
if(cljs.core.truth_(inst_34316)){
var statearr_34352_34376 = state_34343__$1;
(statearr_34352_34376[(1)] = (4));

} else {
var statearr_34353_34377 = state_34343__$1;
(statearr_34353_34377[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (11))){
var inst_34313 = (state_34343[(10)]);
var inst_34332 = (state_34343[(2)]);
var tmp34351 = inst_34313;
var inst_34313__$1 = tmp34351;
var state_34343__$1 = (function (){var statearr_34354 = state_34343;
(statearr_34354[(11)] = inst_34332);

(statearr_34354[(10)] = inst_34313__$1);

return statearr_34354;
})();
var statearr_34355_34378 = state_34343__$1;
(statearr_34355_34378[(2)] = null);

(statearr_34355_34378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (9))){
var inst_34323 = (state_34343[(7)]);
var state_34343__$1 = state_34343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34343__$1,(11),out,inst_34323);
} else {
if((state_val_34344 === (5))){
var inst_34337 = cljs.core.async.close_BANG_.call(null,out);
var state_34343__$1 = state_34343;
var statearr_34356_34379 = state_34343__$1;
(statearr_34356_34379[(2)] = inst_34337);

(statearr_34356_34379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (10))){
var inst_34335 = (state_34343[(2)]);
var state_34343__$1 = state_34343;
var statearr_34357_34380 = state_34343__$1;
(statearr_34357_34380[(2)] = inst_34335);

(statearr_34357_34380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (8))){
var inst_34324 = (state_34343[(9)]);
var inst_34313 = (state_34343[(10)]);
var inst_34323 = (state_34343[(7)]);
var inst_34322 = (state_34343[(8)]);
var inst_34327 = (function (){var cs = inst_34313;
var vec__34318 = inst_34322;
var v = inst_34323;
var c = inst_34324;
return ((function (cs,vec__34318,v,c,inst_34324,inst_34313,inst_34323,inst_34322,state_val_34344,c__28307__auto___34371,out){
return (function (p1__34308_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34308_SHARP_);
});
;})(cs,vec__34318,v,c,inst_34324,inst_34313,inst_34323,inst_34322,state_val_34344,c__28307__auto___34371,out))
})();
var inst_34328 = cljs.core.filterv.call(null,inst_34327,inst_34313);
var inst_34313__$1 = inst_34328;
var state_34343__$1 = (function (){var statearr_34358 = state_34343;
(statearr_34358[(10)] = inst_34313__$1);

return statearr_34358;
})();
var statearr_34359_34381 = state_34343__$1;
(statearr_34359_34381[(2)] = null);

(statearr_34359_34381[(1)] = (2));


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
});})(c__28307__auto___34371,out))
;
return ((function (switch__28286__auto__,c__28307__auto___34371,out){
return (function() {
var cljs$core$async$state_machine__28287__auto__ = null;
var cljs$core$async$state_machine__28287__auto____0 = (function (){
var statearr_34363 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34363[(0)] = cljs$core$async$state_machine__28287__auto__);

(statearr_34363[(1)] = (1));

return statearr_34363;
});
var cljs$core$async$state_machine__28287__auto____1 = (function (state_34343){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_34343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e34364){if((e34364 instanceof Object)){
var ex__28290__auto__ = e34364;
var statearr_34365_34382 = state_34343;
(statearr_34365_34382[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34383 = state_34343;
state_34343 = G__34383;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$state_machine__28287__auto__ = function(state_34343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28287__auto____1.call(this,state_34343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28287__auto____0;
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28287__auto____1;
return cljs$core$async$state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto___34371,out))
})();
var state__28309__auto__ = (function (){var statearr_34366 = f__28308__auto__.call(null);
(statearr_34366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___34371);

return statearr_34366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto___34371,out))
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
var args34384 = [];
var len__26651__auto___34433 = arguments.length;
var i__26652__auto___34434 = (0);
while(true){
if((i__26652__auto___34434 < len__26651__auto___34433)){
args34384.push((arguments[i__26652__auto___34434]));

var G__34435 = (i__26652__auto___34434 + (1));
i__26652__auto___34434 = G__34435;
continue;
} else {
}
break;
}

var G__34386 = args34384.length;
switch (G__34386) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34384.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28307__auto___34437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto___34437,out){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto___34437,out){
return (function (state_34410){
var state_val_34411 = (state_34410[(1)]);
if((state_val_34411 === (7))){
var inst_34392 = (state_34410[(7)]);
var inst_34392__$1 = (state_34410[(2)]);
var inst_34393 = (inst_34392__$1 == null);
var inst_34394 = cljs.core.not.call(null,inst_34393);
var state_34410__$1 = (function (){var statearr_34412 = state_34410;
(statearr_34412[(7)] = inst_34392__$1);

return statearr_34412;
})();
if(inst_34394){
var statearr_34413_34438 = state_34410__$1;
(statearr_34413_34438[(1)] = (8));

} else {
var statearr_34414_34439 = state_34410__$1;
(statearr_34414_34439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (1))){
var inst_34387 = (0);
var state_34410__$1 = (function (){var statearr_34415 = state_34410;
(statearr_34415[(8)] = inst_34387);

return statearr_34415;
})();
var statearr_34416_34440 = state_34410__$1;
(statearr_34416_34440[(2)] = null);

(statearr_34416_34440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (4))){
var state_34410__$1 = state_34410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34410__$1,(7),ch);
} else {
if((state_val_34411 === (6))){
var inst_34405 = (state_34410[(2)]);
var state_34410__$1 = state_34410;
var statearr_34417_34441 = state_34410__$1;
(statearr_34417_34441[(2)] = inst_34405);

(statearr_34417_34441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (3))){
var inst_34407 = (state_34410[(2)]);
var inst_34408 = cljs.core.async.close_BANG_.call(null,out);
var state_34410__$1 = (function (){var statearr_34418 = state_34410;
(statearr_34418[(9)] = inst_34407);

return statearr_34418;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34410__$1,inst_34408);
} else {
if((state_val_34411 === (2))){
var inst_34387 = (state_34410[(8)]);
var inst_34389 = (inst_34387 < n);
var state_34410__$1 = state_34410;
if(cljs.core.truth_(inst_34389)){
var statearr_34419_34442 = state_34410__$1;
(statearr_34419_34442[(1)] = (4));

} else {
var statearr_34420_34443 = state_34410__$1;
(statearr_34420_34443[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (11))){
var inst_34387 = (state_34410[(8)]);
var inst_34397 = (state_34410[(2)]);
var inst_34398 = (inst_34387 + (1));
var inst_34387__$1 = inst_34398;
var state_34410__$1 = (function (){var statearr_34421 = state_34410;
(statearr_34421[(8)] = inst_34387__$1);

(statearr_34421[(10)] = inst_34397);

return statearr_34421;
})();
var statearr_34422_34444 = state_34410__$1;
(statearr_34422_34444[(2)] = null);

(statearr_34422_34444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (9))){
var state_34410__$1 = state_34410;
var statearr_34423_34445 = state_34410__$1;
(statearr_34423_34445[(2)] = null);

(statearr_34423_34445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (5))){
var state_34410__$1 = state_34410;
var statearr_34424_34446 = state_34410__$1;
(statearr_34424_34446[(2)] = null);

(statearr_34424_34446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (10))){
var inst_34402 = (state_34410[(2)]);
var state_34410__$1 = state_34410;
var statearr_34425_34447 = state_34410__$1;
(statearr_34425_34447[(2)] = inst_34402);

(statearr_34425_34447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (8))){
var inst_34392 = (state_34410[(7)]);
var state_34410__$1 = state_34410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34410__$1,(11),out,inst_34392);
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
});})(c__28307__auto___34437,out))
;
return ((function (switch__28286__auto__,c__28307__auto___34437,out){
return (function() {
var cljs$core$async$state_machine__28287__auto__ = null;
var cljs$core$async$state_machine__28287__auto____0 = (function (){
var statearr_34429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34429[(0)] = cljs$core$async$state_machine__28287__auto__);

(statearr_34429[(1)] = (1));

return statearr_34429;
});
var cljs$core$async$state_machine__28287__auto____1 = (function (state_34410){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_34410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e34430){if((e34430 instanceof Object)){
var ex__28290__auto__ = e34430;
var statearr_34431_34448 = state_34410;
(statearr_34431_34448[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34449 = state_34410;
state_34410 = G__34449;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$state_machine__28287__auto__ = function(state_34410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28287__auto____1.call(this,state_34410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28287__auto____0;
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28287__auto____1;
return cljs$core$async$state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto___34437,out))
})();
var state__28309__auto__ = (function (){var statearr_34432 = f__28308__auto__.call(null);
(statearr_34432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___34437);

return statearr_34432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto___34437,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34457 = (function (map_LT_,f,ch,meta34458){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34458 = meta34458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34459,meta34458__$1){
var self__ = this;
var _34459__$1 = this;
return (new cljs.core.async.t_cljs$core$async34457(self__.map_LT_,self__.f,self__.ch,meta34458__$1));
});

cljs.core.async.t_cljs$core$async34457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34459){
var self__ = this;
var _34459__$1 = this;
return self__.meta34458;
});

cljs.core.async.t_cljs$core$async34457.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34457.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34457.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34457.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34457.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34460 = (function (map_LT_,f,ch,meta34458,_,fn1,meta34461){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34458 = meta34458;
this._ = _;
this.fn1 = fn1;
this.meta34461 = meta34461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34462,meta34461__$1){
var self__ = this;
var _34462__$1 = this;
return (new cljs.core.async.t_cljs$core$async34460(self__.map_LT_,self__.f,self__.ch,self__.meta34458,self__._,self__.fn1,meta34461__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34462){
var self__ = this;
var _34462__$1 = this;
return self__.meta34461;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34460.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34460.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34450_SHARP_){
return f1.call(null,(((p1__34450_SHARP_ == null))?null:self__.f.call(null,p1__34450_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34460.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34458","meta34458",-900467616,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34457","cljs.core.async/t_cljs$core$async34457",1308843480,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34461","meta34461",1918332022,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34460";

cljs.core.async.t_cljs$core$async34460.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cljs.core.async/t_cljs$core$async34460");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34460 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34460(map_LT___$1,f__$1,ch__$1,meta34458__$1,___$2,fn1__$1,meta34461){
return (new cljs.core.async.t_cljs$core$async34460(map_LT___$1,f__$1,ch__$1,meta34458__$1,___$2,fn1__$1,meta34461));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34460(self__.map_LT_,self__.f,self__.ch,self__.meta34458,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25564__auto__ = ret;
if(cljs.core.truth_(and__25564__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25564__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34457.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34457.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34458","meta34458",-900467616,null)], null);
});

cljs.core.async.t_cljs$core$async34457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34457";

cljs.core.async.t_cljs$core$async34457.cljs$lang$ctorPrWriter = (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cljs.core.async/t_cljs$core$async34457");
});

cljs.core.async.__GT_t_cljs$core$async34457 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34457(map_LT___$1,f__$1,ch__$1,meta34458){
return (new cljs.core.async.t_cljs$core$async34457(map_LT___$1,f__$1,ch__$1,meta34458));
});

}

return (new cljs.core.async.t_cljs$core$async34457(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34466 = (function (map_GT_,f,ch,meta34467){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta34467 = meta34467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34468,meta34467__$1){
var self__ = this;
var _34468__$1 = this;
return (new cljs.core.async.t_cljs$core$async34466(self__.map_GT_,self__.f,self__.ch,meta34467__$1));
});

cljs.core.async.t_cljs$core$async34466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34468){
var self__ = this;
var _34468__$1 = this;
return self__.meta34467;
});

cljs.core.async.t_cljs$core$async34466.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34466.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34466.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34467","meta34467",591632901,null)], null);
});

cljs.core.async.t_cljs$core$async34466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34466";

cljs.core.async.t_cljs$core$async34466.cljs$lang$ctorPrWriter = (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cljs.core.async/t_cljs$core$async34466");
});

cljs.core.async.__GT_t_cljs$core$async34466 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34466(map_GT___$1,f__$1,ch__$1,meta34467){
return (new cljs.core.async.t_cljs$core$async34466(map_GT___$1,f__$1,ch__$1,meta34467));
});

}

return (new cljs.core.async.t_cljs$core$async34466(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34472 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34472 = (function (filter_GT_,p,ch,meta34473){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta34473 = meta34473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34474,meta34473__$1){
var self__ = this;
var _34474__$1 = this;
return (new cljs.core.async.t_cljs$core$async34472(self__.filter_GT_,self__.p,self__.ch,meta34473__$1));
});

cljs.core.async.t_cljs$core$async34472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34474){
var self__ = this;
var _34474__$1 = this;
return self__.meta34473;
});

cljs.core.async.t_cljs$core$async34472.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34472.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34472.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34472.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34472.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34472.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34472.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34473","meta34473",1705016380,null)], null);
});

cljs.core.async.t_cljs$core$async34472.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34472";

cljs.core.async.t_cljs$core$async34472.cljs$lang$ctorPrWriter = (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cljs.core.async/t_cljs$core$async34472");
});

cljs.core.async.__GT_t_cljs$core$async34472 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34472(filter_GT___$1,p__$1,ch__$1,meta34473){
return (new cljs.core.async.t_cljs$core$async34472(filter_GT___$1,p__$1,ch__$1,meta34473));
});

}

return (new cljs.core.async.t_cljs$core$async34472(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args34475 = [];
var len__26651__auto___34519 = arguments.length;
var i__26652__auto___34520 = (0);
while(true){
if((i__26652__auto___34520 < len__26651__auto___34519)){
args34475.push((arguments[i__26652__auto___34520]));

var G__34521 = (i__26652__auto___34520 + (1));
i__26652__auto___34520 = G__34521;
continue;
} else {
}
break;
}

var G__34477 = args34475.length;
switch (G__34477) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34475.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28307__auto___34523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto___34523,out){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto___34523,out){
return (function (state_34498){
var state_val_34499 = (state_34498[(1)]);
if((state_val_34499 === (7))){
var inst_34494 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
var statearr_34500_34524 = state_34498__$1;
(statearr_34500_34524[(2)] = inst_34494);

(statearr_34500_34524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (1))){
var state_34498__$1 = state_34498;
var statearr_34501_34525 = state_34498__$1;
(statearr_34501_34525[(2)] = null);

(statearr_34501_34525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (4))){
var inst_34480 = (state_34498[(7)]);
var inst_34480__$1 = (state_34498[(2)]);
var inst_34481 = (inst_34480__$1 == null);
var state_34498__$1 = (function (){var statearr_34502 = state_34498;
(statearr_34502[(7)] = inst_34480__$1);

return statearr_34502;
})();
if(cljs.core.truth_(inst_34481)){
var statearr_34503_34526 = state_34498__$1;
(statearr_34503_34526[(1)] = (5));

} else {
var statearr_34504_34527 = state_34498__$1;
(statearr_34504_34527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (6))){
var inst_34480 = (state_34498[(7)]);
var inst_34485 = p.call(null,inst_34480);
var state_34498__$1 = state_34498;
if(cljs.core.truth_(inst_34485)){
var statearr_34505_34528 = state_34498__$1;
(statearr_34505_34528[(1)] = (8));

} else {
var statearr_34506_34529 = state_34498__$1;
(statearr_34506_34529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (3))){
var inst_34496 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34498__$1,inst_34496);
} else {
if((state_val_34499 === (2))){
var state_34498__$1 = state_34498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34498__$1,(4),ch);
} else {
if((state_val_34499 === (11))){
var inst_34488 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
var statearr_34507_34530 = state_34498__$1;
(statearr_34507_34530[(2)] = inst_34488);

(statearr_34507_34530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (9))){
var state_34498__$1 = state_34498;
var statearr_34508_34531 = state_34498__$1;
(statearr_34508_34531[(2)] = null);

(statearr_34508_34531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (5))){
var inst_34483 = cljs.core.async.close_BANG_.call(null,out);
var state_34498__$1 = state_34498;
var statearr_34509_34532 = state_34498__$1;
(statearr_34509_34532[(2)] = inst_34483);

(statearr_34509_34532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (10))){
var inst_34491 = (state_34498[(2)]);
var state_34498__$1 = (function (){var statearr_34510 = state_34498;
(statearr_34510[(8)] = inst_34491);

return statearr_34510;
})();
var statearr_34511_34533 = state_34498__$1;
(statearr_34511_34533[(2)] = null);

(statearr_34511_34533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (8))){
var inst_34480 = (state_34498[(7)]);
var state_34498__$1 = state_34498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34498__$1,(11),out,inst_34480);
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
});})(c__28307__auto___34523,out))
;
return ((function (switch__28286__auto__,c__28307__auto___34523,out){
return (function() {
var cljs$core$async$state_machine__28287__auto__ = null;
var cljs$core$async$state_machine__28287__auto____0 = (function (){
var statearr_34515 = [null,null,null,null,null,null,null,null,null];
(statearr_34515[(0)] = cljs$core$async$state_machine__28287__auto__);

(statearr_34515[(1)] = (1));

return statearr_34515;
});
var cljs$core$async$state_machine__28287__auto____1 = (function (state_34498){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_34498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e34516){if((e34516 instanceof Object)){
var ex__28290__auto__ = e34516;
var statearr_34517_34534 = state_34498;
(statearr_34517_34534[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34535 = state_34498;
state_34498 = G__34535;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$state_machine__28287__auto__ = function(state_34498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28287__auto____1.call(this,state_34498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28287__auto____0;
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28287__auto____1;
return cljs$core$async$state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto___34523,out))
})();
var state__28309__auto__ = (function (){var statearr_34518 = f__28308__auto__.call(null);
(statearr_34518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___34523);

return statearr_34518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto___34523,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34536 = [];
var len__26651__auto___34539 = arguments.length;
var i__26652__auto___34540 = (0);
while(true){
if((i__26652__auto___34540 < len__26651__auto___34539)){
args34536.push((arguments[i__26652__auto___34540]));

var G__34541 = (i__26652__auto___34540 + (1));
i__26652__auto___34540 = G__34541;
continue;
} else {
}
break;
}

var G__34538 = args34536.length;
switch (G__34538) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34536.length)].join('')));

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
var c__28307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto__){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto__){
return (function (state_34708){
var state_val_34709 = (state_34708[(1)]);
if((state_val_34709 === (7))){
var inst_34704 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
var statearr_34710_34751 = state_34708__$1;
(statearr_34710_34751[(2)] = inst_34704);

(statearr_34710_34751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (20))){
var inst_34674 = (state_34708[(7)]);
var inst_34685 = (state_34708[(2)]);
var inst_34686 = cljs.core.next.call(null,inst_34674);
var inst_34660 = inst_34686;
var inst_34661 = null;
var inst_34662 = (0);
var inst_34663 = (0);
var state_34708__$1 = (function (){var statearr_34711 = state_34708;
(statearr_34711[(8)] = inst_34663);

(statearr_34711[(9)] = inst_34685);

(statearr_34711[(10)] = inst_34660);

(statearr_34711[(11)] = inst_34661);

(statearr_34711[(12)] = inst_34662);

return statearr_34711;
})();
var statearr_34712_34752 = state_34708__$1;
(statearr_34712_34752[(2)] = null);

(statearr_34712_34752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (1))){
var state_34708__$1 = state_34708;
var statearr_34713_34753 = state_34708__$1;
(statearr_34713_34753[(2)] = null);

(statearr_34713_34753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (4))){
var inst_34649 = (state_34708[(13)]);
var inst_34649__$1 = (state_34708[(2)]);
var inst_34650 = (inst_34649__$1 == null);
var state_34708__$1 = (function (){var statearr_34714 = state_34708;
(statearr_34714[(13)] = inst_34649__$1);

return statearr_34714;
})();
if(cljs.core.truth_(inst_34650)){
var statearr_34715_34754 = state_34708__$1;
(statearr_34715_34754[(1)] = (5));

} else {
var statearr_34716_34755 = state_34708__$1;
(statearr_34716_34755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (15))){
var state_34708__$1 = state_34708;
var statearr_34720_34756 = state_34708__$1;
(statearr_34720_34756[(2)] = null);

(statearr_34720_34756[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (21))){
var state_34708__$1 = state_34708;
var statearr_34721_34757 = state_34708__$1;
(statearr_34721_34757[(2)] = null);

(statearr_34721_34757[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (13))){
var inst_34663 = (state_34708[(8)]);
var inst_34660 = (state_34708[(10)]);
var inst_34661 = (state_34708[(11)]);
var inst_34662 = (state_34708[(12)]);
var inst_34670 = (state_34708[(2)]);
var inst_34671 = (inst_34663 + (1));
var tmp34717 = inst_34660;
var tmp34718 = inst_34661;
var tmp34719 = inst_34662;
var inst_34660__$1 = tmp34717;
var inst_34661__$1 = tmp34718;
var inst_34662__$1 = tmp34719;
var inst_34663__$1 = inst_34671;
var state_34708__$1 = (function (){var statearr_34722 = state_34708;
(statearr_34722[(8)] = inst_34663__$1);

(statearr_34722[(10)] = inst_34660__$1);

(statearr_34722[(11)] = inst_34661__$1);

(statearr_34722[(12)] = inst_34662__$1);

(statearr_34722[(14)] = inst_34670);

return statearr_34722;
})();
var statearr_34723_34758 = state_34708__$1;
(statearr_34723_34758[(2)] = null);

(statearr_34723_34758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (22))){
var state_34708__$1 = state_34708;
var statearr_34724_34759 = state_34708__$1;
(statearr_34724_34759[(2)] = null);

(statearr_34724_34759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (6))){
var inst_34649 = (state_34708[(13)]);
var inst_34658 = f.call(null,inst_34649);
var inst_34659 = cljs.core.seq.call(null,inst_34658);
var inst_34660 = inst_34659;
var inst_34661 = null;
var inst_34662 = (0);
var inst_34663 = (0);
var state_34708__$1 = (function (){var statearr_34725 = state_34708;
(statearr_34725[(8)] = inst_34663);

(statearr_34725[(10)] = inst_34660);

(statearr_34725[(11)] = inst_34661);

(statearr_34725[(12)] = inst_34662);

return statearr_34725;
})();
var statearr_34726_34760 = state_34708__$1;
(statearr_34726_34760[(2)] = null);

(statearr_34726_34760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (17))){
var inst_34674 = (state_34708[(7)]);
var inst_34678 = cljs.core.chunk_first.call(null,inst_34674);
var inst_34679 = cljs.core.chunk_rest.call(null,inst_34674);
var inst_34680 = cljs.core.count.call(null,inst_34678);
var inst_34660 = inst_34679;
var inst_34661 = inst_34678;
var inst_34662 = inst_34680;
var inst_34663 = (0);
var state_34708__$1 = (function (){var statearr_34727 = state_34708;
(statearr_34727[(8)] = inst_34663);

(statearr_34727[(10)] = inst_34660);

(statearr_34727[(11)] = inst_34661);

(statearr_34727[(12)] = inst_34662);

return statearr_34727;
})();
var statearr_34728_34761 = state_34708__$1;
(statearr_34728_34761[(2)] = null);

(statearr_34728_34761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (3))){
var inst_34706 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34708__$1,inst_34706);
} else {
if((state_val_34709 === (12))){
var inst_34694 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
var statearr_34729_34762 = state_34708__$1;
(statearr_34729_34762[(2)] = inst_34694);

(statearr_34729_34762[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (2))){
var state_34708__$1 = state_34708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34708__$1,(4),in$);
} else {
if((state_val_34709 === (23))){
var inst_34702 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
var statearr_34730_34763 = state_34708__$1;
(statearr_34730_34763[(2)] = inst_34702);

(statearr_34730_34763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (19))){
var inst_34689 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
var statearr_34731_34764 = state_34708__$1;
(statearr_34731_34764[(2)] = inst_34689);

(statearr_34731_34764[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (11))){
var inst_34674 = (state_34708[(7)]);
var inst_34660 = (state_34708[(10)]);
var inst_34674__$1 = cljs.core.seq.call(null,inst_34660);
var state_34708__$1 = (function (){var statearr_34732 = state_34708;
(statearr_34732[(7)] = inst_34674__$1);

return statearr_34732;
})();
if(inst_34674__$1){
var statearr_34733_34765 = state_34708__$1;
(statearr_34733_34765[(1)] = (14));

} else {
var statearr_34734_34766 = state_34708__$1;
(statearr_34734_34766[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (9))){
var inst_34696 = (state_34708[(2)]);
var inst_34697 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34708__$1 = (function (){var statearr_34735 = state_34708;
(statearr_34735[(15)] = inst_34696);

return statearr_34735;
})();
if(cljs.core.truth_(inst_34697)){
var statearr_34736_34767 = state_34708__$1;
(statearr_34736_34767[(1)] = (21));

} else {
var statearr_34737_34768 = state_34708__$1;
(statearr_34737_34768[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (5))){
var inst_34652 = cljs.core.async.close_BANG_.call(null,out);
var state_34708__$1 = state_34708;
var statearr_34738_34769 = state_34708__$1;
(statearr_34738_34769[(2)] = inst_34652);

(statearr_34738_34769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (14))){
var inst_34674 = (state_34708[(7)]);
var inst_34676 = cljs.core.chunked_seq_QMARK_.call(null,inst_34674);
var state_34708__$1 = state_34708;
if(inst_34676){
var statearr_34739_34770 = state_34708__$1;
(statearr_34739_34770[(1)] = (17));

} else {
var statearr_34740_34771 = state_34708__$1;
(statearr_34740_34771[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (16))){
var inst_34692 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
var statearr_34741_34772 = state_34708__$1;
(statearr_34741_34772[(2)] = inst_34692);

(statearr_34741_34772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (10))){
var inst_34663 = (state_34708[(8)]);
var inst_34661 = (state_34708[(11)]);
var inst_34668 = cljs.core._nth.call(null,inst_34661,inst_34663);
var state_34708__$1 = state_34708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34708__$1,(13),out,inst_34668);
} else {
if((state_val_34709 === (18))){
var inst_34674 = (state_34708[(7)]);
var inst_34683 = cljs.core.first.call(null,inst_34674);
var state_34708__$1 = state_34708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34708__$1,(20),out,inst_34683);
} else {
if((state_val_34709 === (8))){
var inst_34663 = (state_34708[(8)]);
var inst_34662 = (state_34708[(12)]);
var inst_34665 = (inst_34663 < inst_34662);
var inst_34666 = inst_34665;
var state_34708__$1 = state_34708;
if(cljs.core.truth_(inst_34666)){
var statearr_34742_34773 = state_34708__$1;
(statearr_34742_34773[(1)] = (10));

} else {
var statearr_34743_34774 = state_34708__$1;
(statearr_34743_34774[(1)] = (11));

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
});})(c__28307__auto__))
;
return ((function (switch__28286__auto__,c__28307__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28287__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28287__auto____0 = (function (){
var statearr_34747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34747[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28287__auto__);

(statearr_34747[(1)] = (1));

return statearr_34747;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28287__auto____1 = (function (state_34708){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_34708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e34748){if((e34748 instanceof Object)){
var ex__28290__auto__ = e34748;
var statearr_34749_34775 = state_34708;
(statearr_34749_34775[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34776 = state_34708;
state_34708 = G__34776;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28287__auto__ = function(state_34708){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28287__auto____1.call(this,state_34708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28287__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28287__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto__))
})();
var state__28309__auto__ = (function (){var statearr_34750 = f__28308__auto__.call(null);
(statearr_34750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto__);

return statearr_34750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto__))
);

return c__28307__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34777 = [];
var len__26651__auto___34780 = arguments.length;
var i__26652__auto___34781 = (0);
while(true){
if((i__26652__auto___34781 < len__26651__auto___34780)){
args34777.push((arguments[i__26652__auto___34781]));

var G__34782 = (i__26652__auto___34781 + (1));
i__26652__auto___34781 = G__34782;
continue;
} else {
}
break;
}

var G__34779 = args34777.length;
switch (G__34779) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34777.length)].join('')));

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
var args34784 = [];
var len__26651__auto___34787 = arguments.length;
var i__26652__auto___34788 = (0);
while(true){
if((i__26652__auto___34788 < len__26651__auto___34787)){
args34784.push((arguments[i__26652__auto___34788]));

var G__34789 = (i__26652__auto___34788 + (1));
i__26652__auto___34788 = G__34789;
continue;
} else {
}
break;
}

var G__34786 = args34784.length;
switch (G__34786) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34784.length)].join('')));

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
var args34791 = [];
var len__26651__auto___34842 = arguments.length;
var i__26652__auto___34843 = (0);
while(true){
if((i__26652__auto___34843 < len__26651__auto___34842)){
args34791.push((arguments[i__26652__auto___34843]));

var G__34844 = (i__26652__auto___34843 + (1));
i__26652__auto___34843 = G__34844;
continue;
} else {
}
break;
}

var G__34793 = args34791.length;
switch (G__34793) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34791.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28307__auto___34846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto___34846,out){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto___34846,out){
return (function (state_34817){
var state_val_34818 = (state_34817[(1)]);
if((state_val_34818 === (7))){
var inst_34812 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34819_34847 = state_34817__$1;
(statearr_34819_34847[(2)] = inst_34812);

(statearr_34819_34847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (1))){
var inst_34794 = null;
var state_34817__$1 = (function (){var statearr_34820 = state_34817;
(statearr_34820[(7)] = inst_34794);

return statearr_34820;
})();
var statearr_34821_34848 = state_34817__$1;
(statearr_34821_34848[(2)] = null);

(statearr_34821_34848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (4))){
var inst_34797 = (state_34817[(8)]);
var inst_34797__$1 = (state_34817[(2)]);
var inst_34798 = (inst_34797__$1 == null);
var inst_34799 = cljs.core.not.call(null,inst_34798);
var state_34817__$1 = (function (){var statearr_34822 = state_34817;
(statearr_34822[(8)] = inst_34797__$1);

return statearr_34822;
})();
if(inst_34799){
var statearr_34823_34849 = state_34817__$1;
(statearr_34823_34849[(1)] = (5));

} else {
var statearr_34824_34850 = state_34817__$1;
(statearr_34824_34850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (6))){
var state_34817__$1 = state_34817;
var statearr_34825_34851 = state_34817__$1;
(statearr_34825_34851[(2)] = null);

(statearr_34825_34851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (3))){
var inst_34814 = (state_34817[(2)]);
var inst_34815 = cljs.core.async.close_BANG_.call(null,out);
var state_34817__$1 = (function (){var statearr_34826 = state_34817;
(statearr_34826[(9)] = inst_34814);

return statearr_34826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34817__$1,inst_34815);
} else {
if((state_val_34818 === (2))){
var state_34817__$1 = state_34817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34817__$1,(4),ch);
} else {
if((state_val_34818 === (11))){
var inst_34797 = (state_34817[(8)]);
var inst_34806 = (state_34817[(2)]);
var inst_34794 = inst_34797;
var state_34817__$1 = (function (){var statearr_34827 = state_34817;
(statearr_34827[(7)] = inst_34794);

(statearr_34827[(10)] = inst_34806);

return statearr_34827;
})();
var statearr_34828_34852 = state_34817__$1;
(statearr_34828_34852[(2)] = null);

(statearr_34828_34852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (9))){
var inst_34797 = (state_34817[(8)]);
var state_34817__$1 = state_34817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34817__$1,(11),out,inst_34797);
} else {
if((state_val_34818 === (5))){
var inst_34797 = (state_34817[(8)]);
var inst_34794 = (state_34817[(7)]);
var inst_34801 = cljs.core._EQ_.call(null,inst_34797,inst_34794);
var state_34817__$1 = state_34817;
if(inst_34801){
var statearr_34830_34853 = state_34817__$1;
(statearr_34830_34853[(1)] = (8));

} else {
var statearr_34831_34854 = state_34817__$1;
(statearr_34831_34854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (10))){
var inst_34809 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34832_34855 = state_34817__$1;
(statearr_34832_34855[(2)] = inst_34809);

(statearr_34832_34855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (8))){
var inst_34794 = (state_34817[(7)]);
var tmp34829 = inst_34794;
var inst_34794__$1 = tmp34829;
var state_34817__$1 = (function (){var statearr_34833 = state_34817;
(statearr_34833[(7)] = inst_34794__$1);

return statearr_34833;
})();
var statearr_34834_34856 = state_34817__$1;
(statearr_34834_34856[(2)] = null);

(statearr_34834_34856[(1)] = (2));


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
});})(c__28307__auto___34846,out))
;
return ((function (switch__28286__auto__,c__28307__auto___34846,out){
return (function() {
var cljs$core$async$state_machine__28287__auto__ = null;
var cljs$core$async$state_machine__28287__auto____0 = (function (){
var statearr_34838 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34838[(0)] = cljs$core$async$state_machine__28287__auto__);

(statearr_34838[(1)] = (1));

return statearr_34838;
});
var cljs$core$async$state_machine__28287__auto____1 = (function (state_34817){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_34817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e34839){if((e34839 instanceof Object)){
var ex__28290__auto__ = e34839;
var statearr_34840_34857 = state_34817;
(statearr_34840_34857[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34858 = state_34817;
state_34817 = G__34858;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$state_machine__28287__auto__ = function(state_34817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28287__auto____1.call(this,state_34817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28287__auto____0;
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28287__auto____1;
return cljs$core$async$state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto___34846,out))
})();
var state__28309__auto__ = (function (){var statearr_34841 = f__28308__auto__.call(null);
(statearr_34841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___34846);

return statearr_34841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto___34846,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34859 = [];
var len__26651__auto___34929 = arguments.length;
var i__26652__auto___34930 = (0);
while(true){
if((i__26652__auto___34930 < len__26651__auto___34929)){
args34859.push((arguments[i__26652__auto___34930]));

var G__34931 = (i__26652__auto___34930 + (1));
i__26652__auto___34930 = G__34931;
continue;
} else {
}
break;
}

var G__34861 = args34859.length;
switch (G__34861) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34859.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28307__auto___34933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto___34933,out){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto___34933,out){
return (function (state_34899){
var state_val_34900 = (state_34899[(1)]);
if((state_val_34900 === (7))){
var inst_34895 = (state_34899[(2)]);
var state_34899__$1 = state_34899;
var statearr_34901_34934 = state_34899__$1;
(statearr_34901_34934[(2)] = inst_34895);

(statearr_34901_34934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (1))){
var inst_34862 = (new Array(n));
var inst_34863 = inst_34862;
var inst_34864 = (0);
var state_34899__$1 = (function (){var statearr_34902 = state_34899;
(statearr_34902[(7)] = inst_34863);

(statearr_34902[(8)] = inst_34864);

return statearr_34902;
})();
var statearr_34903_34935 = state_34899__$1;
(statearr_34903_34935[(2)] = null);

(statearr_34903_34935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (4))){
var inst_34867 = (state_34899[(9)]);
var inst_34867__$1 = (state_34899[(2)]);
var inst_34868 = (inst_34867__$1 == null);
var inst_34869 = cljs.core.not.call(null,inst_34868);
var state_34899__$1 = (function (){var statearr_34904 = state_34899;
(statearr_34904[(9)] = inst_34867__$1);

return statearr_34904;
})();
if(inst_34869){
var statearr_34905_34936 = state_34899__$1;
(statearr_34905_34936[(1)] = (5));

} else {
var statearr_34906_34937 = state_34899__$1;
(statearr_34906_34937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (15))){
var inst_34889 = (state_34899[(2)]);
var state_34899__$1 = state_34899;
var statearr_34907_34938 = state_34899__$1;
(statearr_34907_34938[(2)] = inst_34889);

(statearr_34907_34938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (13))){
var state_34899__$1 = state_34899;
var statearr_34908_34939 = state_34899__$1;
(statearr_34908_34939[(2)] = null);

(statearr_34908_34939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (6))){
var inst_34864 = (state_34899[(8)]);
var inst_34885 = (inst_34864 > (0));
var state_34899__$1 = state_34899;
if(cljs.core.truth_(inst_34885)){
var statearr_34909_34940 = state_34899__$1;
(statearr_34909_34940[(1)] = (12));

} else {
var statearr_34910_34941 = state_34899__$1;
(statearr_34910_34941[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (3))){
var inst_34897 = (state_34899[(2)]);
var state_34899__$1 = state_34899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34899__$1,inst_34897);
} else {
if((state_val_34900 === (12))){
var inst_34863 = (state_34899[(7)]);
var inst_34887 = cljs.core.vec.call(null,inst_34863);
var state_34899__$1 = state_34899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34899__$1,(15),out,inst_34887);
} else {
if((state_val_34900 === (2))){
var state_34899__$1 = state_34899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34899__$1,(4),ch);
} else {
if((state_val_34900 === (11))){
var inst_34879 = (state_34899[(2)]);
var inst_34880 = (new Array(n));
var inst_34863 = inst_34880;
var inst_34864 = (0);
var state_34899__$1 = (function (){var statearr_34911 = state_34899;
(statearr_34911[(7)] = inst_34863);

(statearr_34911[(10)] = inst_34879);

(statearr_34911[(8)] = inst_34864);

return statearr_34911;
})();
var statearr_34912_34942 = state_34899__$1;
(statearr_34912_34942[(2)] = null);

(statearr_34912_34942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (9))){
var inst_34863 = (state_34899[(7)]);
var inst_34877 = cljs.core.vec.call(null,inst_34863);
var state_34899__$1 = state_34899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34899__$1,(11),out,inst_34877);
} else {
if((state_val_34900 === (5))){
var inst_34863 = (state_34899[(7)]);
var inst_34872 = (state_34899[(11)]);
var inst_34864 = (state_34899[(8)]);
var inst_34867 = (state_34899[(9)]);
var inst_34871 = (inst_34863[inst_34864] = inst_34867);
var inst_34872__$1 = (inst_34864 + (1));
var inst_34873 = (inst_34872__$1 < n);
var state_34899__$1 = (function (){var statearr_34913 = state_34899;
(statearr_34913[(12)] = inst_34871);

(statearr_34913[(11)] = inst_34872__$1);

return statearr_34913;
})();
if(cljs.core.truth_(inst_34873)){
var statearr_34914_34943 = state_34899__$1;
(statearr_34914_34943[(1)] = (8));

} else {
var statearr_34915_34944 = state_34899__$1;
(statearr_34915_34944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (14))){
var inst_34892 = (state_34899[(2)]);
var inst_34893 = cljs.core.async.close_BANG_.call(null,out);
var state_34899__$1 = (function (){var statearr_34917 = state_34899;
(statearr_34917[(13)] = inst_34892);

return statearr_34917;
})();
var statearr_34918_34945 = state_34899__$1;
(statearr_34918_34945[(2)] = inst_34893);

(statearr_34918_34945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (10))){
var inst_34883 = (state_34899[(2)]);
var state_34899__$1 = state_34899;
var statearr_34919_34946 = state_34899__$1;
(statearr_34919_34946[(2)] = inst_34883);

(statearr_34919_34946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (8))){
var inst_34863 = (state_34899[(7)]);
var inst_34872 = (state_34899[(11)]);
var tmp34916 = inst_34863;
var inst_34863__$1 = tmp34916;
var inst_34864 = inst_34872;
var state_34899__$1 = (function (){var statearr_34920 = state_34899;
(statearr_34920[(7)] = inst_34863__$1);

(statearr_34920[(8)] = inst_34864);

return statearr_34920;
})();
var statearr_34921_34947 = state_34899__$1;
(statearr_34921_34947[(2)] = null);

(statearr_34921_34947[(1)] = (2));


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
});})(c__28307__auto___34933,out))
;
return ((function (switch__28286__auto__,c__28307__auto___34933,out){
return (function() {
var cljs$core$async$state_machine__28287__auto__ = null;
var cljs$core$async$state_machine__28287__auto____0 = (function (){
var statearr_34925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34925[(0)] = cljs$core$async$state_machine__28287__auto__);

(statearr_34925[(1)] = (1));

return statearr_34925;
});
var cljs$core$async$state_machine__28287__auto____1 = (function (state_34899){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_34899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e34926){if((e34926 instanceof Object)){
var ex__28290__auto__ = e34926;
var statearr_34927_34948 = state_34899;
(statearr_34927_34948[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34949 = state_34899;
state_34899 = G__34949;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$state_machine__28287__auto__ = function(state_34899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28287__auto____1.call(this,state_34899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28287__auto____0;
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28287__auto____1;
return cljs$core$async$state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto___34933,out))
})();
var state__28309__auto__ = (function (){var statearr_34928 = f__28308__auto__.call(null);
(statearr_34928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___34933);

return statearr_34928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto___34933,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34950 = [];
var len__26651__auto___35024 = arguments.length;
var i__26652__auto___35025 = (0);
while(true){
if((i__26652__auto___35025 < len__26651__auto___35024)){
args34950.push((arguments[i__26652__auto___35025]));

var G__35026 = (i__26652__auto___35025 + (1));
i__26652__auto___35025 = G__35026;
continue;
} else {
}
break;
}

var G__34952 = args34950.length;
switch (G__34952) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34950.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28307__auto___35028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto___35028,out){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto___35028,out){
return (function (state_34994){
var state_val_34995 = (state_34994[(1)]);
if((state_val_34995 === (7))){
var inst_34990 = (state_34994[(2)]);
var state_34994__$1 = state_34994;
var statearr_34996_35029 = state_34994__$1;
(statearr_34996_35029[(2)] = inst_34990);

(statearr_34996_35029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (1))){
var inst_34953 = [];
var inst_34954 = inst_34953;
var inst_34955 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34994__$1 = (function (){var statearr_34997 = state_34994;
(statearr_34997[(7)] = inst_34955);

(statearr_34997[(8)] = inst_34954);

return statearr_34997;
})();
var statearr_34998_35030 = state_34994__$1;
(statearr_34998_35030[(2)] = null);

(statearr_34998_35030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (4))){
var inst_34958 = (state_34994[(9)]);
var inst_34958__$1 = (state_34994[(2)]);
var inst_34959 = (inst_34958__$1 == null);
var inst_34960 = cljs.core.not.call(null,inst_34959);
var state_34994__$1 = (function (){var statearr_34999 = state_34994;
(statearr_34999[(9)] = inst_34958__$1);

return statearr_34999;
})();
if(inst_34960){
var statearr_35000_35031 = state_34994__$1;
(statearr_35000_35031[(1)] = (5));

} else {
var statearr_35001_35032 = state_34994__$1;
(statearr_35001_35032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (15))){
var inst_34984 = (state_34994[(2)]);
var state_34994__$1 = state_34994;
var statearr_35002_35033 = state_34994__$1;
(statearr_35002_35033[(2)] = inst_34984);

(statearr_35002_35033[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (13))){
var state_34994__$1 = state_34994;
var statearr_35003_35034 = state_34994__$1;
(statearr_35003_35034[(2)] = null);

(statearr_35003_35034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (6))){
var inst_34954 = (state_34994[(8)]);
var inst_34979 = inst_34954.length;
var inst_34980 = (inst_34979 > (0));
var state_34994__$1 = state_34994;
if(cljs.core.truth_(inst_34980)){
var statearr_35004_35035 = state_34994__$1;
(statearr_35004_35035[(1)] = (12));

} else {
var statearr_35005_35036 = state_34994__$1;
(statearr_35005_35036[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (3))){
var inst_34992 = (state_34994[(2)]);
var state_34994__$1 = state_34994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34994__$1,inst_34992);
} else {
if((state_val_34995 === (12))){
var inst_34954 = (state_34994[(8)]);
var inst_34982 = cljs.core.vec.call(null,inst_34954);
var state_34994__$1 = state_34994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34994__$1,(15),out,inst_34982);
} else {
if((state_val_34995 === (2))){
var state_34994__$1 = state_34994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34994__$1,(4),ch);
} else {
if((state_val_34995 === (11))){
var inst_34962 = (state_34994[(10)]);
var inst_34958 = (state_34994[(9)]);
var inst_34972 = (state_34994[(2)]);
var inst_34973 = [];
var inst_34974 = inst_34973.push(inst_34958);
var inst_34954 = inst_34973;
var inst_34955 = inst_34962;
var state_34994__$1 = (function (){var statearr_35006 = state_34994;
(statearr_35006[(11)] = inst_34972);

(statearr_35006[(7)] = inst_34955);

(statearr_35006[(8)] = inst_34954);

(statearr_35006[(12)] = inst_34974);

return statearr_35006;
})();
var statearr_35007_35037 = state_34994__$1;
(statearr_35007_35037[(2)] = null);

(statearr_35007_35037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (9))){
var inst_34954 = (state_34994[(8)]);
var inst_34970 = cljs.core.vec.call(null,inst_34954);
var state_34994__$1 = state_34994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34994__$1,(11),out,inst_34970);
} else {
if((state_val_34995 === (5))){
var inst_34962 = (state_34994[(10)]);
var inst_34958 = (state_34994[(9)]);
var inst_34955 = (state_34994[(7)]);
var inst_34962__$1 = f.call(null,inst_34958);
var inst_34963 = cljs.core._EQ_.call(null,inst_34962__$1,inst_34955);
var inst_34964 = cljs.core.keyword_identical_QMARK_.call(null,inst_34955,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34965 = (inst_34963) || (inst_34964);
var state_34994__$1 = (function (){var statearr_35008 = state_34994;
(statearr_35008[(10)] = inst_34962__$1);

return statearr_35008;
})();
if(cljs.core.truth_(inst_34965)){
var statearr_35009_35038 = state_34994__$1;
(statearr_35009_35038[(1)] = (8));

} else {
var statearr_35010_35039 = state_34994__$1;
(statearr_35010_35039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (14))){
var inst_34987 = (state_34994[(2)]);
var inst_34988 = cljs.core.async.close_BANG_.call(null,out);
var state_34994__$1 = (function (){var statearr_35012 = state_34994;
(statearr_35012[(13)] = inst_34987);

return statearr_35012;
})();
var statearr_35013_35040 = state_34994__$1;
(statearr_35013_35040[(2)] = inst_34988);

(statearr_35013_35040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (10))){
var inst_34977 = (state_34994[(2)]);
var state_34994__$1 = state_34994;
var statearr_35014_35041 = state_34994__$1;
(statearr_35014_35041[(2)] = inst_34977);

(statearr_35014_35041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (8))){
var inst_34962 = (state_34994[(10)]);
var inst_34958 = (state_34994[(9)]);
var inst_34954 = (state_34994[(8)]);
var inst_34967 = inst_34954.push(inst_34958);
var tmp35011 = inst_34954;
var inst_34954__$1 = tmp35011;
var inst_34955 = inst_34962;
var state_34994__$1 = (function (){var statearr_35015 = state_34994;
(statearr_35015[(7)] = inst_34955);

(statearr_35015[(8)] = inst_34954__$1);

(statearr_35015[(14)] = inst_34967);

return statearr_35015;
})();
var statearr_35016_35042 = state_34994__$1;
(statearr_35016_35042[(2)] = null);

(statearr_35016_35042[(1)] = (2));


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
});})(c__28307__auto___35028,out))
;
return ((function (switch__28286__auto__,c__28307__auto___35028,out){
return (function() {
var cljs$core$async$state_machine__28287__auto__ = null;
var cljs$core$async$state_machine__28287__auto____0 = (function (){
var statearr_35020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35020[(0)] = cljs$core$async$state_machine__28287__auto__);

(statearr_35020[(1)] = (1));

return statearr_35020;
});
var cljs$core$async$state_machine__28287__auto____1 = (function (state_34994){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_34994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e35021){if((e35021 instanceof Object)){
var ex__28290__auto__ = e35021;
var statearr_35022_35043 = state_34994;
(statearr_35022_35043[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35044 = state_34994;
state_34994 = G__35044;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
cljs$core$async$state_machine__28287__auto__ = function(state_34994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28287__auto____1.call(this,state_34994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28287__auto____0;
cljs$core$async$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28287__auto____1;
return cljs$core$async$state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto___35028,out))
})();
var state__28309__auto__ = (function (){var statearr_35023 = f__28308__auto__.call(null);
(statearr_35023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___35028);

return statearr_35023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto___35028,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1480029283902