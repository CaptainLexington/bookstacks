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
var args27796 = [];
var len__23653__auto___27802 = arguments.length;
var i__23654__auto___27803 = (0);
while(true){
if((i__23654__auto___27803 < len__23653__auto___27802)){
args27796.push((arguments[i__23654__auto___27803]));

var G__27804 = (i__23654__auto___27803 + (1));
i__23654__auto___27803 = G__27804;
continue;
} else {
}
break;
}

var G__27798 = args27796.length;
switch (G__27798) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27796.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27799 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27799 = (function (f,blockable,meta27800){
this.f = f;
this.blockable = blockable;
this.meta27800 = meta27800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27801,meta27800__$1){
var self__ = this;
var _27801__$1 = this;
return (new cljs.core.async.t_cljs$core$async27799(self__.f,self__.blockable,meta27800__$1));
});

cljs.core.async.t_cljs$core$async27799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27801){
var self__ = this;
var _27801__$1 = this;
return self__.meta27800;
});

cljs.core.async.t_cljs$core$async27799.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27799.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27800","meta27800",-879328782,null)], null);
});

cljs.core.async.t_cljs$core$async27799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27799";

cljs.core.async.t_cljs$core$async27799.cljs$lang$ctorPrWriter = (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async27799");
});

cljs.core.async.__GT_t_cljs$core$async27799 = (function cljs$core$async$__GT_t_cljs$core$async27799(f__$1,blockable__$1,meta27800){
return (new cljs.core.async.t_cljs$core$async27799(f__$1,blockable__$1,meta27800));
});

}

return (new cljs.core.async.t_cljs$core$async27799(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args27808 = [];
var len__23653__auto___27811 = arguments.length;
var i__23654__auto___27812 = (0);
while(true){
if((i__23654__auto___27812 < len__23653__auto___27811)){
args27808.push((arguments[i__23654__auto___27812]));

var G__27813 = (i__23654__auto___27812 + (1));
i__23654__auto___27812 = G__27813;
continue;
} else {
}
break;
}

var G__27810 = args27808.length;
switch (G__27810) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27808.length)].join('')));

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
var args27815 = [];
var len__23653__auto___27818 = arguments.length;
var i__23654__auto___27819 = (0);
while(true){
if((i__23654__auto___27819 < len__23653__auto___27818)){
args27815.push((arguments[i__23654__auto___27819]));

var G__27820 = (i__23654__auto___27819 + (1));
i__23654__auto___27819 = G__27820;
continue;
} else {
}
break;
}

var G__27817 = args27815.length;
switch (G__27817) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27815.length)].join('')));

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
var args27822 = [];
var len__23653__auto___27825 = arguments.length;
var i__23654__auto___27826 = (0);
while(true){
if((i__23654__auto___27826 < len__23653__auto___27825)){
args27822.push((arguments[i__23654__auto___27826]));

var G__27827 = (i__23654__auto___27826 + (1));
i__23654__auto___27826 = G__27827;
continue;
} else {
}
break;
}

var G__27824 = args27822.length;
switch (G__27824) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27822.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27829 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27829);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27829,ret){
return (function (){
return fn1.call(null,val_27829);
});})(val_27829,ret))
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
var args27830 = [];
var len__23653__auto___27833 = arguments.length;
var i__23654__auto___27834 = (0);
while(true){
if((i__23654__auto___27834 < len__23653__auto___27833)){
args27830.push((arguments[i__23654__auto___27834]));

var G__27835 = (i__23654__auto___27834 + (1));
i__23654__auto___27834 = G__27835;
continue;
} else {
}
break;
}

var G__27832 = args27830.length;
switch (G__27832) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27830.length)].join('')));

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
var n__23493__auto___27837 = n;
var x_27838 = (0);
while(true){
if((x_27838 < n__23493__auto___27837)){
(a[x_27838] = (0));

var G__27839 = (x_27838 + (1));
x_27838 = G__27839;
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

var G__27840 = (i + (1));
i = G__27840;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27844 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27844 = (function (alt_flag,flag,meta27845){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27845 = meta27845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27846,meta27845__$1){
var self__ = this;
var _27846__$1 = this;
return (new cljs.core.async.t_cljs$core$async27844(self__.alt_flag,self__.flag,meta27845__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27844.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27846){
var self__ = this;
var _27846__$1 = this;
return self__.meta27845;
});})(flag))
;

cljs.core.async.t_cljs$core$async27844.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27844.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27844.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27845","meta27845",1826458023,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27844.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27844";

cljs.core.async.t_cljs$core$async27844.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async27844");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27844 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27844(alt_flag__$1,flag__$1,meta27845){
return (new cljs.core.async.t_cljs$core$async27844(alt_flag__$1,flag__$1,meta27845));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27844(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27850 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27850 = (function (alt_handler,flag,cb,meta27851){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27851 = meta27851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27852,meta27851__$1){
var self__ = this;
var _27852__$1 = this;
return (new cljs.core.async.t_cljs$core$async27850(self__.alt_handler,self__.flag,self__.cb,meta27851__$1));
});

cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27852){
var self__ = this;
var _27852__$1 = this;
return self__.meta27851;
});

cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27851","meta27851",-2048180358,null)], null);
});

cljs.core.async.t_cljs$core$async27850.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27850";

cljs.core.async.t_cljs$core$async27850.cljs$lang$ctorPrWriter = (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async27850");
});

cljs.core.async.__GT_t_cljs$core$async27850 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27850(alt_handler__$1,flag__$1,cb__$1,meta27851){
return (new cljs.core.async.t_cljs$core$async27850(alt_handler__$1,flag__$1,cb__$1,meta27851));
});

}

return (new cljs.core.async.t_cljs$core$async27850(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27853_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27853_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27854_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27854_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__22578__auto__ = wport;
if(cljs.core.truth_(or__22578__auto__)){
return or__22578__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27855 = (i + (1));
i = G__27855;
continue;
}
} else {
return null;
}
break;
}
})();
var or__22578__auto__ = ret;
if(cljs.core.truth_(or__22578__auto__)){
return or__22578__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__22566__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__22566__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__22566__auto__;
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
var args__23660__auto__ = [];
var len__23653__auto___27861 = arguments.length;
var i__23654__auto___27862 = (0);
while(true){
if((i__23654__auto___27862 < len__23653__auto___27861)){
args__23660__auto__.push((arguments[i__23654__auto___27862]));

var G__27863 = (i__23654__auto___27862 + (1));
i__23654__auto___27862 = G__27863;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27858){
var map__27859 = p__27858;
var map__27859__$1 = ((((!((map__27859 == null)))?((((map__27859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27859):map__27859);
var opts = map__27859__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27856){
var G__27857 = cljs.core.first.call(null,seq27856);
var seq27856__$1 = cljs.core.next.call(null,seq27856);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27857,seq27856__$1);
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
var args27864 = [];
var len__23653__auto___27914 = arguments.length;
var i__23654__auto___27915 = (0);
while(true){
if((i__23654__auto___27915 < len__23653__auto___27914)){
args27864.push((arguments[i__23654__auto___27915]));

var G__27916 = (i__23654__auto___27915 + (1));
i__23654__auto___27915 = G__27916;
continue;
} else {
}
break;
}

var G__27866 = args27864.length;
switch (G__27866) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27864.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27751__auto___27918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto___27918){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto___27918){
return (function (state_27890){
var state_val_27891 = (state_27890[(1)]);
if((state_val_27891 === (7))){
var inst_27886 = (state_27890[(2)]);
var state_27890__$1 = state_27890;
var statearr_27892_27919 = state_27890__$1;
(statearr_27892_27919[(2)] = inst_27886);

(statearr_27892_27919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (1))){
var state_27890__$1 = state_27890;
var statearr_27893_27920 = state_27890__$1;
(statearr_27893_27920[(2)] = null);

(statearr_27893_27920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (4))){
var inst_27869 = (state_27890[(7)]);
var inst_27869__$1 = (state_27890[(2)]);
var inst_27870 = (inst_27869__$1 == null);
var state_27890__$1 = (function (){var statearr_27894 = state_27890;
(statearr_27894[(7)] = inst_27869__$1);

return statearr_27894;
})();
if(cljs.core.truth_(inst_27870)){
var statearr_27895_27921 = state_27890__$1;
(statearr_27895_27921[(1)] = (5));

} else {
var statearr_27896_27922 = state_27890__$1;
(statearr_27896_27922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (13))){
var state_27890__$1 = state_27890;
var statearr_27897_27923 = state_27890__$1;
(statearr_27897_27923[(2)] = null);

(statearr_27897_27923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (6))){
var inst_27869 = (state_27890[(7)]);
var state_27890__$1 = state_27890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27890__$1,(11),to,inst_27869);
} else {
if((state_val_27891 === (3))){
var inst_27888 = (state_27890[(2)]);
var state_27890__$1 = state_27890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27890__$1,inst_27888);
} else {
if((state_val_27891 === (12))){
var state_27890__$1 = state_27890;
var statearr_27898_27924 = state_27890__$1;
(statearr_27898_27924[(2)] = null);

(statearr_27898_27924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (2))){
var state_27890__$1 = state_27890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27890__$1,(4),from);
} else {
if((state_val_27891 === (11))){
var inst_27879 = (state_27890[(2)]);
var state_27890__$1 = state_27890;
if(cljs.core.truth_(inst_27879)){
var statearr_27899_27925 = state_27890__$1;
(statearr_27899_27925[(1)] = (12));

} else {
var statearr_27900_27926 = state_27890__$1;
(statearr_27900_27926[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (9))){
var state_27890__$1 = state_27890;
var statearr_27901_27927 = state_27890__$1;
(statearr_27901_27927[(2)] = null);

(statearr_27901_27927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (5))){
var state_27890__$1 = state_27890;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27902_27928 = state_27890__$1;
(statearr_27902_27928[(1)] = (8));

} else {
var statearr_27903_27929 = state_27890__$1;
(statearr_27903_27929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (14))){
var inst_27884 = (state_27890[(2)]);
var state_27890__$1 = state_27890;
var statearr_27904_27930 = state_27890__$1;
(statearr_27904_27930[(2)] = inst_27884);

(statearr_27904_27930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (10))){
var inst_27876 = (state_27890[(2)]);
var state_27890__$1 = state_27890;
var statearr_27905_27931 = state_27890__$1;
(statearr_27905_27931[(2)] = inst_27876);

(statearr_27905_27931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (8))){
var inst_27873 = cljs.core.async.close_BANG_.call(null,to);
var state_27890__$1 = state_27890;
var statearr_27906_27932 = state_27890__$1;
(statearr_27906_27932[(2)] = inst_27873);

(statearr_27906_27932[(1)] = (10));


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
});})(c__27751__auto___27918))
;
return ((function (switch__27639__auto__,c__27751__auto___27918){
return (function() {
var cljs$core$async$state_machine__27640__auto__ = null;
var cljs$core$async$state_machine__27640__auto____0 = (function (){
var statearr_27910 = [null,null,null,null,null,null,null,null];
(statearr_27910[(0)] = cljs$core$async$state_machine__27640__auto__);

(statearr_27910[(1)] = (1));

return statearr_27910;
});
var cljs$core$async$state_machine__27640__auto____1 = (function (state_27890){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_27890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e27911){if((e27911 instanceof Object)){
var ex__27643__auto__ = e27911;
var statearr_27912_27933 = state_27890;
(statearr_27912_27933[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27934 = state_27890;
state_27890 = G__27934;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$state_machine__27640__auto__ = function(state_27890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27640__auto____1.call(this,state_27890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27640__auto____0;
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27640__auto____1;
return cljs$core$async$state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto___27918))
})();
var state__27753__auto__ = (function (){var statearr_27913 = f__27752__auto__.call(null);
(statearr_27913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___27918);

return statearr_27913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto___27918))
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
return (function (p__28122){
var vec__28123 = p__28122;
var v = cljs.core.nth.call(null,vec__28123,(0),null);
var p = cljs.core.nth.call(null,vec__28123,(1),null);
var job = vec__28123;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27751__auto___28309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto___28309,res,vec__28123,v,p,job,jobs,results){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto___28309,res,vec__28123,v,p,job,jobs,results){
return (function (state_28130){
var state_val_28131 = (state_28130[(1)]);
if((state_val_28131 === (1))){
var state_28130__$1 = state_28130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28130__$1,(2),res,v);
} else {
if((state_val_28131 === (2))){
var inst_28127 = (state_28130[(2)]);
var inst_28128 = cljs.core.async.close_BANG_.call(null,res);
var state_28130__$1 = (function (){var statearr_28132 = state_28130;
(statearr_28132[(7)] = inst_28127);

return statearr_28132;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28130__$1,inst_28128);
} else {
return null;
}
}
});})(c__27751__auto___28309,res,vec__28123,v,p,job,jobs,results))
;
return ((function (switch__27639__auto__,c__27751__auto___28309,res,vec__28123,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____0 = (function (){
var statearr_28136 = [null,null,null,null,null,null,null,null];
(statearr_28136[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__);

(statearr_28136[(1)] = (1));

return statearr_28136;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____1 = (function (state_28130){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_28130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e28137){if((e28137 instanceof Object)){
var ex__27643__auto__ = e28137;
var statearr_28138_28310 = state_28130;
(statearr_28138_28310[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28311 = state_28130;
state_28130 = G__28311;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__ = function(state_28130){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____1.call(this,state_28130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto___28309,res,vec__28123,v,p,job,jobs,results))
})();
var state__27753__auto__ = (function (){var statearr_28139 = f__27752__auto__.call(null);
(statearr_28139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___28309);

return statearr_28139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto___28309,res,vec__28123,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28140){
var vec__28141 = p__28140;
var v = cljs.core.nth.call(null,vec__28141,(0),null);
var p = cljs.core.nth.call(null,vec__28141,(1),null);
var job = vec__28141;
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
var n__23493__auto___28312 = n;
var __28313 = (0);
while(true){
if((__28313 < n__23493__auto___28312)){
var G__28144_28314 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28144_28314) {
case "compute":
var c__27751__auto___28316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28313,c__27751__auto___28316,G__28144_28314,n__23493__auto___28312,jobs,results,process,async){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (__28313,c__27751__auto___28316,G__28144_28314,n__23493__auto___28312,jobs,results,process,async){
return (function (state_28157){
var state_val_28158 = (state_28157[(1)]);
if((state_val_28158 === (1))){
var state_28157__$1 = state_28157;
var statearr_28159_28317 = state_28157__$1;
(statearr_28159_28317[(2)] = null);

(statearr_28159_28317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (2))){
var state_28157__$1 = state_28157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28157__$1,(4),jobs);
} else {
if((state_val_28158 === (3))){
var inst_28155 = (state_28157[(2)]);
var state_28157__$1 = state_28157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28157__$1,inst_28155);
} else {
if((state_val_28158 === (4))){
var inst_28147 = (state_28157[(2)]);
var inst_28148 = process.call(null,inst_28147);
var state_28157__$1 = state_28157;
if(cljs.core.truth_(inst_28148)){
var statearr_28160_28318 = state_28157__$1;
(statearr_28160_28318[(1)] = (5));

} else {
var statearr_28161_28319 = state_28157__$1;
(statearr_28161_28319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (5))){
var state_28157__$1 = state_28157;
var statearr_28162_28320 = state_28157__$1;
(statearr_28162_28320[(2)] = null);

(statearr_28162_28320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (6))){
var state_28157__$1 = state_28157;
var statearr_28163_28321 = state_28157__$1;
(statearr_28163_28321[(2)] = null);

(statearr_28163_28321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (7))){
var inst_28153 = (state_28157[(2)]);
var state_28157__$1 = state_28157;
var statearr_28164_28322 = state_28157__$1;
(statearr_28164_28322[(2)] = inst_28153);

(statearr_28164_28322[(1)] = (3));


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
});})(__28313,c__27751__auto___28316,G__28144_28314,n__23493__auto___28312,jobs,results,process,async))
;
return ((function (__28313,switch__27639__auto__,c__27751__auto___28316,G__28144_28314,n__23493__auto___28312,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____0 = (function (){
var statearr_28168 = [null,null,null,null,null,null,null];
(statearr_28168[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__);

(statearr_28168[(1)] = (1));

return statearr_28168;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____1 = (function (state_28157){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_28157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e28169){if((e28169 instanceof Object)){
var ex__27643__auto__ = e28169;
var statearr_28170_28323 = state_28157;
(statearr_28170_28323[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28324 = state_28157;
state_28157 = G__28324;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__ = function(state_28157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____1.call(this,state_28157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__;
})()
;})(__28313,switch__27639__auto__,c__27751__auto___28316,G__28144_28314,n__23493__auto___28312,jobs,results,process,async))
})();
var state__27753__auto__ = (function (){var statearr_28171 = f__27752__auto__.call(null);
(statearr_28171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___28316);

return statearr_28171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(__28313,c__27751__auto___28316,G__28144_28314,n__23493__auto___28312,jobs,results,process,async))
);


break;
case "async":
var c__27751__auto___28325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28313,c__27751__auto___28325,G__28144_28314,n__23493__auto___28312,jobs,results,process,async){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (__28313,c__27751__auto___28325,G__28144_28314,n__23493__auto___28312,jobs,results,process,async){
return (function (state_28184){
var state_val_28185 = (state_28184[(1)]);
if((state_val_28185 === (1))){
var state_28184__$1 = state_28184;
var statearr_28186_28326 = state_28184__$1;
(statearr_28186_28326[(2)] = null);

(statearr_28186_28326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (2))){
var state_28184__$1 = state_28184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28184__$1,(4),jobs);
} else {
if((state_val_28185 === (3))){
var inst_28182 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28184__$1,inst_28182);
} else {
if((state_val_28185 === (4))){
var inst_28174 = (state_28184[(2)]);
var inst_28175 = async.call(null,inst_28174);
var state_28184__$1 = state_28184;
if(cljs.core.truth_(inst_28175)){
var statearr_28187_28327 = state_28184__$1;
(statearr_28187_28327[(1)] = (5));

} else {
var statearr_28188_28328 = state_28184__$1;
(statearr_28188_28328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (5))){
var state_28184__$1 = state_28184;
var statearr_28189_28329 = state_28184__$1;
(statearr_28189_28329[(2)] = null);

(statearr_28189_28329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (6))){
var state_28184__$1 = state_28184;
var statearr_28190_28330 = state_28184__$1;
(statearr_28190_28330[(2)] = null);

(statearr_28190_28330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (7))){
var inst_28180 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
var statearr_28191_28331 = state_28184__$1;
(statearr_28191_28331[(2)] = inst_28180);

(statearr_28191_28331[(1)] = (3));


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
});})(__28313,c__27751__auto___28325,G__28144_28314,n__23493__auto___28312,jobs,results,process,async))
;
return ((function (__28313,switch__27639__auto__,c__27751__auto___28325,G__28144_28314,n__23493__auto___28312,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____0 = (function (){
var statearr_28195 = [null,null,null,null,null,null,null];
(statearr_28195[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__);

(statearr_28195[(1)] = (1));

return statearr_28195;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____1 = (function (state_28184){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_28184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e28196){if((e28196 instanceof Object)){
var ex__27643__auto__ = e28196;
var statearr_28197_28332 = state_28184;
(statearr_28197_28332[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28333 = state_28184;
state_28184 = G__28333;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__ = function(state_28184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____1.call(this,state_28184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__;
})()
;})(__28313,switch__27639__auto__,c__27751__auto___28325,G__28144_28314,n__23493__auto___28312,jobs,results,process,async))
})();
var state__27753__auto__ = (function (){var statearr_28198 = f__27752__auto__.call(null);
(statearr_28198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___28325);

return statearr_28198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(__28313,c__27751__auto___28325,G__28144_28314,n__23493__auto___28312,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28334 = (__28313 + (1));
__28313 = G__28334;
continue;
} else {
}
break;
}

var c__27751__auto___28335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto___28335,jobs,results,process,async){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto___28335,jobs,results,process,async){
return (function (state_28220){
var state_val_28221 = (state_28220[(1)]);
if((state_val_28221 === (1))){
var state_28220__$1 = state_28220;
var statearr_28222_28336 = state_28220__$1;
(statearr_28222_28336[(2)] = null);

(statearr_28222_28336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28221 === (2))){
var state_28220__$1 = state_28220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28220__$1,(4),from);
} else {
if((state_val_28221 === (3))){
var inst_28218 = (state_28220[(2)]);
var state_28220__$1 = state_28220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28220__$1,inst_28218);
} else {
if((state_val_28221 === (4))){
var inst_28201 = (state_28220[(7)]);
var inst_28201__$1 = (state_28220[(2)]);
var inst_28202 = (inst_28201__$1 == null);
var state_28220__$1 = (function (){var statearr_28223 = state_28220;
(statearr_28223[(7)] = inst_28201__$1);

return statearr_28223;
})();
if(cljs.core.truth_(inst_28202)){
var statearr_28224_28337 = state_28220__$1;
(statearr_28224_28337[(1)] = (5));

} else {
var statearr_28225_28338 = state_28220__$1;
(statearr_28225_28338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28221 === (5))){
var inst_28204 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28220__$1 = state_28220;
var statearr_28226_28339 = state_28220__$1;
(statearr_28226_28339[(2)] = inst_28204);

(statearr_28226_28339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28221 === (6))){
var inst_28206 = (state_28220[(8)]);
var inst_28201 = (state_28220[(7)]);
var inst_28206__$1 = cljs.core.async.chan.call(null,(1));
var inst_28207 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28208 = [inst_28201,inst_28206__$1];
var inst_28209 = (new cljs.core.PersistentVector(null,2,(5),inst_28207,inst_28208,null));
var state_28220__$1 = (function (){var statearr_28227 = state_28220;
(statearr_28227[(8)] = inst_28206__$1);

return statearr_28227;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28220__$1,(8),jobs,inst_28209);
} else {
if((state_val_28221 === (7))){
var inst_28216 = (state_28220[(2)]);
var state_28220__$1 = state_28220;
var statearr_28228_28340 = state_28220__$1;
(statearr_28228_28340[(2)] = inst_28216);

(statearr_28228_28340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28221 === (8))){
var inst_28206 = (state_28220[(8)]);
var inst_28211 = (state_28220[(2)]);
var state_28220__$1 = (function (){var statearr_28229 = state_28220;
(statearr_28229[(9)] = inst_28211);

return statearr_28229;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28220__$1,(9),results,inst_28206);
} else {
if((state_val_28221 === (9))){
var inst_28213 = (state_28220[(2)]);
var state_28220__$1 = (function (){var statearr_28230 = state_28220;
(statearr_28230[(10)] = inst_28213);

return statearr_28230;
})();
var statearr_28231_28341 = state_28220__$1;
(statearr_28231_28341[(2)] = null);

(statearr_28231_28341[(1)] = (2));


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
});})(c__27751__auto___28335,jobs,results,process,async))
;
return ((function (switch__27639__auto__,c__27751__auto___28335,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____0 = (function (){
var statearr_28235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28235[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__);

(statearr_28235[(1)] = (1));

return statearr_28235;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____1 = (function (state_28220){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_28220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e28236){if((e28236 instanceof Object)){
var ex__27643__auto__ = e28236;
var statearr_28237_28342 = state_28220;
(statearr_28237_28342[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28343 = state_28220;
state_28220 = G__28343;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__ = function(state_28220){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____1.call(this,state_28220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto___28335,jobs,results,process,async))
})();
var state__27753__auto__ = (function (){var statearr_28238 = f__27752__auto__.call(null);
(statearr_28238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___28335);

return statearr_28238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto___28335,jobs,results,process,async))
);


var c__27751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto__,jobs,results,process,async){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto__,jobs,results,process,async){
return (function (state_28276){
var state_val_28277 = (state_28276[(1)]);
if((state_val_28277 === (7))){
var inst_28272 = (state_28276[(2)]);
var state_28276__$1 = state_28276;
var statearr_28278_28344 = state_28276__$1;
(statearr_28278_28344[(2)] = inst_28272);

(statearr_28278_28344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (20))){
var state_28276__$1 = state_28276;
var statearr_28279_28345 = state_28276__$1;
(statearr_28279_28345[(2)] = null);

(statearr_28279_28345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (1))){
var state_28276__$1 = state_28276;
var statearr_28280_28346 = state_28276__$1;
(statearr_28280_28346[(2)] = null);

(statearr_28280_28346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (4))){
var inst_28241 = (state_28276[(7)]);
var inst_28241__$1 = (state_28276[(2)]);
var inst_28242 = (inst_28241__$1 == null);
var state_28276__$1 = (function (){var statearr_28281 = state_28276;
(statearr_28281[(7)] = inst_28241__$1);

return statearr_28281;
})();
if(cljs.core.truth_(inst_28242)){
var statearr_28282_28347 = state_28276__$1;
(statearr_28282_28347[(1)] = (5));

} else {
var statearr_28283_28348 = state_28276__$1;
(statearr_28283_28348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (15))){
var inst_28254 = (state_28276[(8)]);
var state_28276__$1 = state_28276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28276__$1,(18),to,inst_28254);
} else {
if((state_val_28277 === (21))){
var inst_28267 = (state_28276[(2)]);
var state_28276__$1 = state_28276;
var statearr_28284_28349 = state_28276__$1;
(statearr_28284_28349[(2)] = inst_28267);

(statearr_28284_28349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (13))){
var inst_28269 = (state_28276[(2)]);
var state_28276__$1 = (function (){var statearr_28285 = state_28276;
(statearr_28285[(9)] = inst_28269);

return statearr_28285;
})();
var statearr_28286_28350 = state_28276__$1;
(statearr_28286_28350[(2)] = null);

(statearr_28286_28350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (6))){
var inst_28241 = (state_28276[(7)]);
var state_28276__$1 = state_28276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28276__$1,(11),inst_28241);
} else {
if((state_val_28277 === (17))){
var inst_28262 = (state_28276[(2)]);
var state_28276__$1 = state_28276;
if(cljs.core.truth_(inst_28262)){
var statearr_28287_28351 = state_28276__$1;
(statearr_28287_28351[(1)] = (19));

} else {
var statearr_28288_28352 = state_28276__$1;
(statearr_28288_28352[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (3))){
var inst_28274 = (state_28276[(2)]);
var state_28276__$1 = state_28276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28276__$1,inst_28274);
} else {
if((state_val_28277 === (12))){
var inst_28251 = (state_28276[(10)]);
var state_28276__$1 = state_28276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28276__$1,(14),inst_28251);
} else {
if((state_val_28277 === (2))){
var state_28276__$1 = state_28276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28276__$1,(4),results);
} else {
if((state_val_28277 === (19))){
var state_28276__$1 = state_28276;
var statearr_28289_28353 = state_28276__$1;
(statearr_28289_28353[(2)] = null);

(statearr_28289_28353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (11))){
var inst_28251 = (state_28276[(2)]);
var state_28276__$1 = (function (){var statearr_28290 = state_28276;
(statearr_28290[(10)] = inst_28251);

return statearr_28290;
})();
var statearr_28291_28354 = state_28276__$1;
(statearr_28291_28354[(2)] = null);

(statearr_28291_28354[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (9))){
var state_28276__$1 = state_28276;
var statearr_28292_28355 = state_28276__$1;
(statearr_28292_28355[(2)] = null);

(statearr_28292_28355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (5))){
var state_28276__$1 = state_28276;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28293_28356 = state_28276__$1;
(statearr_28293_28356[(1)] = (8));

} else {
var statearr_28294_28357 = state_28276__$1;
(statearr_28294_28357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (14))){
var inst_28256 = (state_28276[(11)]);
var inst_28254 = (state_28276[(8)]);
var inst_28254__$1 = (state_28276[(2)]);
var inst_28255 = (inst_28254__$1 == null);
var inst_28256__$1 = cljs.core.not.call(null,inst_28255);
var state_28276__$1 = (function (){var statearr_28295 = state_28276;
(statearr_28295[(11)] = inst_28256__$1);

(statearr_28295[(8)] = inst_28254__$1);

return statearr_28295;
})();
if(inst_28256__$1){
var statearr_28296_28358 = state_28276__$1;
(statearr_28296_28358[(1)] = (15));

} else {
var statearr_28297_28359 = state_28276__$1;
(statearr_28297_28359[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (16))){
var inst_28256 = (state_28276[(11)]);
var state_28276__$1 = state_28276;
var statearr_28298_28360 = state_28276__$1;
(statearr_28298_28360[(2)] = inst_28256);

(statearr_28298_28360[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (10))){
var inst_28248 = (state_28276[(2)]);
var state_28276__$1 = state_28276;
var statearr_28299_28361 = state_28276__$1;
(statearr_28299_28361[(2)] = inst_28248);

(statearr_28299_28361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (18))){
var inst_28259 = (state_28276[(2)]);
var state_28276__$1 = state_28276;
var statearr_28300_28362 = state_28276__$1;
(statearr_28300_28362[(2)] = inst_28259);

(statearr_28300_28362[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (8))){
var inst_28245 = cljs.core.async.close_BANG_.call(null,to);
var state_28276__$1 = state_28276;
var statearr_28301_28363 = state_28276__$1;
(statearr_28301_28363[(2)] = inst_28245);

(statearr_28301_28363[(1)] = (10));


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
});})(c__27751__auto__,jobs,results,process,async))
;
return ((function (switch__27639__auto__,c__27751__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____0 = (function (){
var statearr_28305 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28305[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__);

(statearr_28305[(1)] = (1));

return statearr_28305;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____1 = (function (state_28276){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_28276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e28306){if((e28306 instanceof Object)){
var ex__27643__auto__ = e28306;
var statearr_28307_28364 = state_28276;
(statearr_28307_28364[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28365 = state_28276;
state_28276 = G__28365;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__ = function(state_28276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____1.call(this,state_28276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto__,jobs,results,process,async))
})();
var state__27753__auto__ = (function (){var statearr_28308 = f__27752__auto__.call(null);
(statearr_28308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto__);

return statearr_28308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto__,jobs,results,process,async))
);

return c__27751__auto__;
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
var args28366 = [];
var len__23653__auto___28369 = arguments.length;
var i__23654__auto___28370 = (0);
while(true){
if((i__23654__auto___28370 < len__23653__auto___28369)){
args28366.push((arguments[i__23654__auto___28370]));

var G__28371 = (i__23654__auto___28370 + (1));
i__23654__auto___28370 = G__28371;
continue;
} else {
}
break;
}

var G__28368 = args28366.length;
switch (G__28368) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28366.length)].join('')));

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
var args28373 = [];
var len__23653__auto___28376 = arguments.length;
var i__23654__auto___28377 = (0);
while(true){
if((i__23654__auto___28377 < len__23653__auto___28376)){
args28373.push((arguments[i__23654__auto___28377]));

var G__28378 = (i__23654__auto___28377 + (1));
i__23654__auto___28377 = G__28378;
continue;
} else {
}
break;
}

var G__28375 = args28373.length;
switch (G__28375) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28373.length)].join('')));

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
var args28380 = [];
var len__23653__auto___28433 = arguments.length;
var i__23654__auto___28434 = (0);
while(true){
if((i__23654__auto___28434 < len__23653__auto___28433)){
args28380.push((arguments[i__23654__auto___28434]));

var G__28435 = (i__23654__auto___28434 + (1));
i__23654__auto___28434 = G__28435;
continue;
} else {
}
break;
}

var G__28382 = args28380.length;
switch (G__28382) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28380.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27751__auto___28437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto___28437,tc,fc){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto___28437,tc,fc){
return (function (state_28408){
var state_val_28409 = (state_28408[(1)]);
if((state_val_28409 === (7))){
var inst_28404 = (state_28408[(2)]);
var state_28408__$1 = state_28408;
var statearr_28410_28438 = state_28408__$1;
(statearr_28410_28438[(2)] = inst_28404);

(statearr_28410_28438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28409 === (1))){
var state_28408__$1 = state_28408;
var statearr_28411_28439 = state_28408__$1;
(statearr_28411_28439[(2)] = null);

(statearr_28411_28439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28409 === (4))){
var inst_28385 = (state_28408[(7)]);
var inst_28385__$1 = (state_28408[(2)]);
var inst_28386 = (inst_28385__$1 == null);
var state_28408__$1 = (function (){var statearr_28412 = state_28408;
(statearr_28412[(7)] = inst_28385__$1);

return statearr_28412;
})();
if(cljs.core.truth_(inst_28386)){
var statearr_28413_28440 = state_28408__$1;
(statearr_28413_28440[(1)] = (5));

} else {
var statearr_28414_28441 = state_28408__$1;
(statearr_28414_28441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28409 === (13))){
var state_28408__$1 = state_28408;
var statearr_28415_28442 = state_28408__$1;
(statearr_28415_28442[(2)] = null);

(statearr_28415_28442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28409 === (6))){
var inst_28385 = (state_28408[(7)]);
var inst_28391 = p.call(null,inst_28385);
var state_28408__$1 = state_28408;
if(cljs.core.truth_(inst_28391)){
var statearr_28416_28443 = state_28408__$1;
(statearr_28416_28443[(1)] = (9));

} else {
var statearr_28417_28444 = state_28408__$1;
(statearr_28417_28444[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28409 === (3))){
var inst_28406 = (state_28408[(2)]);
var state_28408__$1 = state_28408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28408__$1,inst_28406);
} else {
if((state_val_28409 === (12))){
var state_28408__$1 = state_28408;
var statearr_28418_28445 = state_28408__$1;
(statearr_28418_28445[(2)] = null);

(statearr_28418_28445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28409 === (2))){
var state_28408__$1 = state_28408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28408__$1,(4),ch);
} else {
if((state_val_28409 === (11))){
var inst_28385 = (state_28408[(7)]);
var inst_28395 = (state_28408[(2)]);
var state_28408__$1 = state_28408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28408__$1,(8),inst_28395,inst_28385);
} else {
if((state_val_28409 === (9))){
var state_28408__$1 = state_28408;
var statearr_28419_28446 = state_28408__$1;
(statearr_28419_28446[(2)] = tc);

(statearr_28419_28446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28409 === (5))){
var inst_28388 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28389 = cljs.core.async.close_BANG_.call(null,fc);
var state_28408__$1 = (function (){var statearr_28420 = state_28408;
(statearr_28420[(8)] = inst_28388);

return statearr_28420;
})();
var statearr_28421_28447 = state_28408__$1;
(statearr_28421_28447[(2)] = inst_28389);

(statearr_28421_28447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28409 === (14))){
var inst_28402 = (state_28408[(2)]);
var state_28408__$1 = state_28408;
var statearr_28422_28448 = state_28408__$1;
(statearr_28422_28448[(2)] = inst_28402);

(statearr_28422_28448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28409 === (10))){
var state_28408__$1 = state_28408;
var statearr_28423_28449 = state_28408__$1;
(statearr_28423_28449[(2)] = fc);

(statearr_28423_28449[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28409 === (8))){
var inst_28397 = (state_28408[(2)]);
var state_28408__$1 = state_28408;
if(cljs.core.truth_(inst_28397)){
var statearr_28424_28450 = state_28408__$1;
(statearr_28424_28450[(1)] = (12));

} else {
var statearr_28425_28451 = state_28408__$1;
(statearr_28425_28451[(1)] = (13));

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
});})(c__27751__auto___28437,tc,fc))
;
return ((function (switch__27639__auto__,c__27751__auto___28437,tc,fc){
return (function() {
var cljs$core$async$state_machine__27640__auto__ = null;
var cljs$core$async$state_machine__27640__auto____0 = (function (){
var statearr_28429 = [null,null,null,null,null,null,null,null,null];
(statearr_28429[(0)] = cljs$core$async$state_machine__27640__auto__);

(statearr_28429[(1)] = (1));

return statearr_28429;
});
var cljs$core$async$state_machine__27640__auto____1 = (function (state_28408){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_28408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e28430){if((e28430 instanceof Object)){
var ex__27643__auto__ = e28430;
var statearr_28431_28452 = state_28408;
(statearr_28431_28452[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28453 = state_28408;
state_28408 = G__28453;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$state_machine__27640__auto__ = function(state_28408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27640__auto____1.call(this,state_28408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27640__auto____0;
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27640__auto____1;
return cljs$core$async$state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto___28437,tc,fc))
})();
var state__27753__auto__ = (function (){var statearr_28432 = f__27752__auto__.call(null);
(statearr_28432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___28437);

return statearr_28432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto___28437,tc,fc))
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
var c__27751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto__){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto__){
return (function (state_28517){
var state_val_28518 = (state_28517[(1)]);
if((state_val_28518 === (7))){
var inst_28513 = (state_28517[(2)]);
var state_28517__$1 = state_28517;
var statearr_28519_28540 = state_28517__$1;
(statearr_28519_28540[(2)] = inst_28513);

(statearr_28519_28540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (1))){
var inst_28497 = init;
var state_28517__$1 = (function (){var statearr_28520 = state_28517;
(statearr_28520[(7)] = inst_28497);

return statearr_28520;
})();
var statearr_28521_28541 = state_28517__$1;
(statearr_28521_28541[(2)] = null);

(statearr_28521_28541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (4))){
var inst_28500 = (state_28517[(8)]);
var inst_28500__$1 = (state_28517[(2)]);
var inst_28501 = (inst_28500__$1 == null);
var state_28517__$1 = (function (){var statearr_28522 = state_28517;
(statearr_28522[(8)] = inst_28500__$1);

return statearr_28522;
})();
if(cljs.core.truth_(inst_28501)){
var statearr_28523_28542 = state_28517__$1;
(statearr_28523_28542[(1)] = (5));

} else {
var statearr_28524_28543 = state_28517__$1;
(statearr_28524_28543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (6))){
var inst_28504 = (state_28517[(9)]);
var inst_28500 = (state_28517[(8)]);
var inst_28497 = (state_28517[(7)]);
var inst_28504__$1 = f.call(null,inst_28497,inst_28500);
var inst_28505 = cljs.core.reduced_QMARK_.call(null,inst_28504__$1);
var state_28517__$1 = (function (){var statearr_28525 = state_28517;
(statearr_28525[(9)] = inst_28504__$1);

return statearr_28525;
})();
if(inst_28505){
var statearr_28526_28544 = state_28517__$1;
(statearr_28526_28544[(1)] = (8));

} else {
var statearr_28527_28545 = state_28517__$1;
(statearr_28527_28545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (3))){
var inst_28515 = (state_28517[(2)]);
var state_28517__$1 = state_28517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28517__$1,inst_28515);
} else {
if((state_val_28518 === (2))){
var state_28517__$1 = state_28517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28517__$1,(4),ch);
} else {
if((state_val_28518 === (9))){
var inst_28504 = (state_28517[(9)]);
var inst_28497 = inst_28504;
var state_28517__$1 = (function (){var statearr_28528 = state_28517;
(statearr_28528[(7)] = inst_28497);

return statearr_28528;
})();
var statearr_28529_28546 = state_28517__$1;
(statearr_28529_28546[(2)] = null);

(statearr_28529_28546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (5))){
var inst_28497 = (state_28517[(7)]);
var state_28517__$1 = state_28517;
var statearr_28530_28547 = state_28517__$1;
(statearr_28530_28547[(2)] = inst_28497);

(statearr_28530_28547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (10))){
var inst_28511 = (state_28517[(2)]);
var state_28517__$1 = state_28517;
var statearr_28531_28548 = state_28517__$1;
(statearr_28531_28548[(2)] = inst_28511);

(statearr_28531_28548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28518 === (8))){
var inst_28504 = (state_28517[(9)]);
var inst_28507 = cljs.core.deref.call(null,inst_28504);
var state_28517__$1 = state_28517;
var statearr_28532_28549 = state_28517__$1;
(statearr_28532_28549[(2)] = inst_28507);

(statearr_28532_28549[(1)] = (10));


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
});})(c__27751__auto__))
;
return ((function (switch__27639__auto__,c__27751__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27640__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27640__auto____0 = (function (){
var statearr_28536 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28536[(0)] = cljs$core$async$reduce_$_state_machine__27640__auto__);

(statearr_28536[(1)] = (1));

return statearr_28536;
});
var cljs$core$async$reduce_$_state_machine__27640__auto____1 = (function (state_28517){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_28517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e28537){if((e28537 instanceof Object)){
var ex__27643__auto__ = e28537;
var statearr_28538_28550 = state_28517;
(statearr_28538_28550[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28551 = state_28517;
state_28517 = G__28551;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27640__auto__ = function(state_28517){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27640__auto____1.call(this,state_28517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27640__auto____0;
cljs$core$async$reduce_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27640__auto____1;
return cljs$core$async$reduce_$_state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto__))
})();
var state__27753__auto__ = (function (){var statearr_28539 = f__27752__auto__.call(null);
(statearr_28539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto__);

return statearr_28539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto__))
);

return c__27751__auto__;
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
var args28552 = [];
var len__23653__auto___28604 = arguments.length;
var i__23654__auto___28605 = (0);
while(true){
if((i__23654__auto___28605 < len__23653__auto___28604)){
args28552.push((arguments[i__23654__auto___28605]));

var G__28606 = (i__23654__auto___28605 + (1));
i__23654__auto___28605 = G__28606;
continue;
} else {
}
break;
}

var G__28554 = args28552.length;
switch (G__28554) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28552.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto__){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto__){
return (function (state_28579){
var state_val_28580 = (state_28579[(1)]);
if((state_val_28580 === (7))){
var inst_28561 = (state_28579[(2)]);
var state_28579__$1 = state_28579;
var statearr_28581_28608 = state_28579__$1;
(statearr_28581_28608[(2)] = inst_28561);

(statearr_28581_28608[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (1))){
var inst_28555 = cljs.core.seq.call(null,coll);
var inst_28556 = inst_28555;
var state_28579__$1 = (function (){var statearr_28582 = state_28579;
(statearr_28582[(7)] = inst_28556);

return statearr_28582;
})();
var statearr_28583_28609 = state_28579__$1;
(statearr_28583_28609[(2)] = null);

(statearr_28583_28609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (4))){
var inst_28556 = (state_28579[(7)]);
var inst_28559 = cljs.core.first.call(null,inst_28556);
var state_28579__$1 = state_28579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28579__$1,(7),ch,inst_28559);
} else {
if((state_val_28580 === (13))){
var inst_28573 = (state_28579[(2)]);
var state_28579__$1 = state_28579;
var statearr_28584_28610 = state_28579__$1;
(statearr_28584_28610[(2)] = inst_28573);

(statearr_28584_28610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (6))){
var inst_28564 = (state_28579[(2)]);
var state_28579__$1 = state_28579;
if(cljs.core.truth_(inst_28564)){
var statearr_28585_28611 = state_28579__$1;
(statearr_28585_28611[(1)] = (8));

} else {
var statearr_28586_28612 = state_28579__$1;
(statearr_28586_28612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (3))){
var inst_28577 = (state_28579[(2)]);
var state_28579__$1 = state_28579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28579__$1,inst_28577);
} else {
if((state_val_28580 === (12))){
var state_28579__$1 = state_28579;
var statearr_28587_28613 = state_28579__$1;
(statearr_28587_28613[(2)] = null);

(statearr_28587_28613[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (2))){
var inst_28556 = (state_28579[(7)]);
var state_28579__$1 = state_28579;
if(cljs.core.truth_(inst_28556)){
var statearr_28588_28614 = state_28579__$1;
(statearr_28588_28614[(1)] = (4));

} else {
var statearr_28589_28615 = state_28579__$1;
(statearr_28589_28615[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (11))){
var inst_28570 = cljs.core.async.close_BANG_.call(null,ch);
var state_28579__$1 = state_28579;
var statearr_28590_28616 = state_28579__$1;
(statearr_28590_28616[(2)] = inst_28570);

(statearr_28590_28616[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (9))){
var state_28579__$1 = state_28579;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28591_28617 = state_28579__$1;
(statearr_28591_28617[(1)] = (11));

} else {
var statearr_28592_28618 = state_28579__$1;
(statearr_28592_28618[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (5))){
var inst_28556 = (state_28579[(7)]);
var state_28579__$1 = state_28579;
var statearr_28593_28619 = state_28579__$1;
(statearr_28593_28619[(2)] = inst_28556);

(statearr_28593_28619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (10))){
var inst_28575 = (state_28579[(2)]);
var state_28579__$1 = state_28579;
var statearr_28594_28620 = state_28579__$1;
(statearr_28594_28620[(2)] = inst_28575);

(statearr_28594_28620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (8))){
var inst_28556 = (state_28579[(7)]);
var inst_28566 = cljs.core.next.call(null,inst_28556);
var inst_28556__$1 = inst_28566;
var state_28579__$1 = (function (){var statearr_28595 = state_28579;
(statearr_28595[(7)] = inst_28556__$1);

return statearr_28595;
})();
var statearr_28596_28621 = state_28579__$1;
(statearr_28596_28621[(2)] = null);

(statearr_28596_28621[(1)] = (2));


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
});})(c__27751__auto__))
;
return ((function (switch__27639__auto__,c__27751__auto__){
return (function() {
var cljs$core$async$state_machine__27640__auto__ = null;
var cljs$core$async$state_machine__27640__auto____0 = (function (){
var statearr_28600 = [null,null,null,null,null,null,null,null];
(statearr_28600[(0)] = cljs$core$async$state_machine__27640__auto__);

(statearr_28600[(1)] = (1));

return statearr_28600;
});
var cljs$core$async$state_machine__27640__auto____1 = (function (state_28579){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_28579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e28601){if((e28601 instanceof Object)){
var ex__27643__auto__ = e28601;
var statearr_28602_28622 = state_28579;
(statearr_28602_28622[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28623 = state_28579;
state_28579 = G__28623;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$state_machine__27640__auto__ = function(state_28579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27640__auto____1.call(this,state_28579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27640__auto____0;
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27640__auto____1;
return cljs$core$async$state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto__))
})();
var state__27753__auto__ = (function (){var statearr_28603 = f__27752__auto__.call(null);
(statearr_28603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto__);

return statearr_28603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto__))
);

return c__27751__auto__;
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
var x__23241__auto__ = (((_ == null))?null:_);
var m__23242__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__23241__auto__)]);
if(!((m__23242__auto__ == null))){
return m__23242__auto__.call(null,_);
} else {
var m__23242__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__23242__auto____$1 == null))){
return m__23242__auto____$1.call(null,_);
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
var x__23241__auto__ = (((m == null))?null:m);
var m__23242__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__23241__auto__)]);
if(!((m__23242__auto__ == null))){
return m__23242__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__23242__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__23242__auto____$1 == null))){
return m__23242__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__23241__auto__ = (((m == null))?null:m);
var m__23242__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__23241__auto__)]);
if(!((m__23242__auto__ == null))){
return m__23242__auto__.call(null,m,ch);
} else {
var m__23242__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__23242__auto____$1 == null))){
return m__23242__auto____$1.call(null,m,ch);
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
var x__23241__auto__ = (((m == null))?null:m);
var m__23242__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__23241__auto__)]);
if(!((m__23242__auto__ == null))){
return m__23242__auto__.call(null,m);
} else {
var m__23242__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__23242__auto____$1 == null))){
return m__23242__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async28849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28849 = (function (mult,ch,cs,meta28850){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28850 = meta28850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28851,meta28850__$1){
var self__ = this;
var _28851__$1 = this;
return (new cljs.core.async.t_cljs$core$async28849(self__.mult,self__.ch,self__.cs,meta28850__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28851){
var self__ = this;
var _28851__$1 = this;
return self__.meta28850;
});})(cs))
;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28849.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28850","meta28850",1053644918,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28849";

cljs.core.async.t_cljs$core$async28849.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async28849");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28849 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28849(mult__$1,ch__$1,cs__$1,meta28850){
return (new cljs.core.async.t_cljs$core$async28849(mult__$1,ch__$1,cs__$1,meta28850));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28849(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27751__auto___29074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto___29074,cs,m,dchan,dctr,done){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto___29074,cs,m,dchan,dctr,done){
return (function (state_28986){
var state_val_28987 = (state_28986[(1)]);
if((state_val_28987 === (7))){
var inst_28982 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_28988_29075 = state_28986__$1;
(statearr_28988_29075[(2)] = inst_28982);

(statearr_28988_29075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (20))){
var inst_28885 = (state_28986[(7)]);
var inst_28897 = cljs.core.first.call(null,inst_28885);
var inst_28898 = cljs.core.nth.call(null,inst_28897,(0),null);
var inst_28899 = cljs.core.nth.call(null,inst_28897,(1),null);
var state_28986__$1 = (function (){var statearr_28989 = state_28986;
(statearr_28989[(8)] = inst_28898);

return statearr_28989;
})();
if(cljs.core.truth_(inst_28899)){
var statearr_28990_29076 = state_28986__$1;
(statearr_28990_29076[(1)] = (22));

} else {
var statearr_28991_29077 = state_28986__$1;
(statearr_28991_29077[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (27))){
var inst_28854 = (state_28986[(9)]);
var inst_28934 = (state_28986[(10)]);
var inst_28929 = (state_28986[(11)]);
var inst_28927 = (state_28986[(12)]);
var inst_28934__$1 = cljs.core._nth.call(null,inst_28927,inst_28929);
var inst_28935 = cljs.core.async.put_BANG_.call(null,inst_28934__$1,inst_28854,done);
var state_28986__$1 = (function (){var statearr_28992 = state_28986;
(statearr_28992[(10)] = inst_28934__$1);

return statearr_28992;
})();
if(cljs.core.truth_(inst_28935)){
var statearr_28993_29078 = state_28986__$1;
(statearr_28993_29078[(1)] = (30));

} else {
var statearr_28994_29079 = state_28986__$1;
(statearr_28994_29079[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (1))){
var state_28986__$1 = state_28986;
var statearr_28995_29080 = state_28986__$1;
(statearr_28995_29080[(2)] = null);

(statearr_28995_29080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (24))){
var inst_28885 = (state_28986[(7)]);
var inst_28904 = (state_28986[(2)]);
var inst_28905 = cljs.core.next.call(null,inst_28885);
var inst_28863 = inst_28905;
var inst_28864 = null;
var inst_28865 = (0);
var inst_28866 = (0);
var state_28986__$1 = (function (){var statearr_28996 = state_28986;
(statearr_28996[(13)] = inst_28864);

(statearr_28996[(14)] = inst_28863);

(statearr_28996[(15)] = inst_28904);

(statearr_28996[(16)] = inst_28866);

(statearr_28996[(17)] = inst_28865);

return statearr_28996;
})();
var statearr_28997_29081 = state_28986__$1;
(statearr_28997_29081[(2)] = null);

(statearr_28997_29081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (39))){
var state_28986__$1 = state_28986;
var statearr_29001_29082 = state_28986__$1;
(statearr_29001_29082[(2)] = null);

(statearr_29001_29082[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (4))){
var inst_28854 = (state_28986[(9)]);
var inst_28854__$1 = (state_28986[(2)]);
var inst_28855 = (inst_28854__$1 == null);
var state_28986__$1 = (function (){var statearr_29002 = state_28986;
(statearr_29002[(9)] = inst_28854__$1);

return statearr_29002;
})();
if(cljs.core.truth_(inst_28855)){
var statearr_29003_29083 = state_28986__$1;
(statearr_29003_29083[(1)] = (5));

} else {
var statearr_29004_29084 = state_28986__$1;
(statearr_29004_29084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (15))){
var inst_28864 = (state_28986[(13)]);
var inst_28863 = (state_28986[(14)]);
var inst_28866 = (state_28986[(16)]);
var inst_28865 = (state_28986[(17)]);
var inst_28881 = (state_28986[(2)]);
var inst_28882 = (inst_28866 + (1));
var tmp28998 = inst_28864;
var tmp28999 = inst_28863;
var tmp29000 = inst_28865;
var inst_28863__$1 = tmp28999;
var inst_28864__$1 = tmp28998;
var inst_28865__$1 = tmp29000;
var inst_28866__$1 = inst_28882;
var state_28986__$1 = (function (){var statearr_29005 = state_28986;
(statearr_29005[(13)] = inst_28864__$1);

(statearr_29005[(14)] = inst_28863__$1);

(statearr_29005[(16)] = inst_28866__$1);

(statearr_29005[(18)] = inst_28881);

(statearr_29005[(17)] = inst_28865__$1);

return statearr_29005;
})();
var statearr_29006_29085 = state_28986__$1;
(statearr_29006_29085[(2)] = null);

(statearr_29006_29085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (21))){
var inst_28908 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_29010_29086 = state_28986__$1;
(statearr_29010_29086[(2)] = inst_28908);

(statearr_29010_29086[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (31))){
var inst_28934 = (state_28986[(10)]);
var inst_28938 = done.call(null,null);
var inst_28939 = cljs.core.async.untap_STAR_.call(null,m,inst_28934);
var state_28986__$1 = (function (){var statearr_29011 = state_28986;
(statearr_29011[(19)] = inst_28938);

return statearr_29011;
})();
var statearr_29012_29087 = state_28986__$1;
(statearr_29012_29087[(2)] = inst_28939);

(statearr_29012_29087[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (32))){
var inst_28929 = (state_28986[(11)]);
var inst_28926 = (state_28986[(20)]);
var inst_28928 = (state_28986[(21)]);
var inst_28927 = (state_28986[(12)]);
var inst_28941 = (state_28986[(2)]);
var inst_28942 = (inst_28929 + (1));
var tmp29007 = inst_28926;
var tmp29008 = inst_28928;
var tmp29009 = inst_28927;
var inst_28926__$1 = tmp29007;
var inst_28927__$1 = tmp29009;
var inst_28928__$1 = tmp29008;
var inst_28929__$1 = inst_28942;
var state_28986__$1 = (function (){var statearr_29013 = state_28986;
(statearr_29013[(22)] = inst_28941);

(statearr_29013[(11)] = inst_28929__$1);

(statearr_29013[(20)] = inst_28926__$1);

(statearr_29013[(21)] = inst_28928__$1);

(statearr_29013[(12)] = inst_28927__$1);

return statearr_29013;
})();
var statearr_29014_29088 = state_28986__$1;
(statearr_29014_29088[(2)] = null);

(statearr_29014_29088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (40))){
var inst_28954 = (state_28986[(23)]);
var inst_28958 = done.call(null,null);
var inst_28959 = cljs.core.async.untap_STAR_.call(null,m,inst_28954);
var state_28986__$1 = (function (){var statearr_29015 = state_28986;
(statearr_29015[(24)] = inst_28958);

return statearr_29015;
})();
var statearr_29016_29089 = state_28986__$1;
(statearr_29016_29089[(2)] = inst_28959);

(statearr_29016_29089[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (33))){
var inst_28945 = (state_28986[(25)]);
var inst_28947 = cljs.core.chunked_seq_QMARK_.call(null,inst_28945);
var state_28986__$1 = state_28986;
if(inst_28947){
var statearr_29017_29090 = state_28986__$1;
(statearr_29017_29090[(1)] = (36));

} else {
var statearr_29018_29091 = state_28986__$1;
(statearr_29018_29091[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (13))){
var inst_28875 = (state_28986[(26)]);
var inst_28878 = cljs.core.async.close_BANG_.call(null,inst_28875);
var state_28986__$1 = state_28986;
var statearr_29019_29092 = state_28986__$1;
(statearr_29019_29092[(2)] = inst_28878);

(statearr_29019_29092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (22))){
var inst_28898 = (state_28986[(8)]);
var inst_28901 = cljs.core.async.close_BANG_.call(null,inst_28898);
var state_28986__$1 = state_28986;
var statearr_29020_29093 = state_28986__$1;
(statearr_29020_29093[(2)] = inst_28901);

(statearr_29020_29093[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (36))){
var inst_28945 = (state_28986[(25)]);
var inst_28949 = cljs.core.chunk_first.call(null,inst_28945);
var inst_28950 = cljs.core.chunk_rest.call(null,inst_28945);
var inst_28951 = cljs.core.count.call(null,inst_28949);
var inst_28926 = inst_28950;
var inst_28927 = inst_28949;
var inst_28928 = inst_28951;
var inst_28929 = (0);
var state_28986__$1 = (function (){var statearr_29021 = state_28986;
(statearr_29021[(11)] = inst_28929);

(statearr_29021[(20)] = inst_28926);

(statearr_29021[(21)] = inst_28928);

(statearr_29021[(12)] = inst_28927);

return statearr_29021;
})();
var statearr_29022_29094 = state_28986__$1;
(statearr_29022_29094[(2)] = null);

(statearr_29022_29094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (41))){
var inst_28945 = (state_28986[(25)]);
var inst_28961 = (state_28986[(2)]);
var inst_28962 = cljs.core.next.call(null,inst_28945);
var inst_28926 = inst_28962;
var inst_28927 = null;
var inst_28928 = (0);
var inst_28929 = (0);
var state_28986__$1 = (function (){var statearr_29023 = state_28986;
(statearr_29023[(11)] = inst_28929);

(statearr_29023[(20)] = inst_28926);

(statearr_29023[(21)] = inst_28928);

(statearr_29023[(12)] = inst_28927);

(statearr_29023[(27)] = inst_28961);

return statearr_29023;
})();
var statearr_29024_29095 = state_28986__$1;
(statearr_29024_29095[(2)] = null);

(statearr_29024_29095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (43))){
var state_28986__$1 = state_28986;
var statearr_29025_29096 = state_28986__$1;
(statearr_29025_29096[(2)] = null);

(statearr_29025_29096[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (29))){
var inst_28970 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_29026_29097 = state_28986__$1;
(statearr_29026_29097[(2)] = inst_28970);

(statearr_29026_29097[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (44))){
var inst_28979 = (state_28986[(2)]);
var state_28986__$1 = (function (){var statearr_29027 = state_28986;
(statearr_29027[(28)] = inst_28979);

return statearr_29027;
})();
var statearr_29028_29098 = state_28986__$1;
(statearr_29028_29098[(2)] = null);

(statearr_29028_29098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (6))){
var inst_28918 = (state_28986[(29)]);
var inst_28917 = cljs.core.deref.call(null,cs);
var inst_28918__$1 = cljs.core.keys.call(null,inst_28917);
var inst_28919 = cljs.core.count.call(null,inst_28918__$1);
var inst_28920 = cljs.core.reset_BANG_.call(null,dctr,inst_28919);
var inst_28925 = cljs.core.seq.call(null,inst_28918__$1);
var inst_28926 = inst_28925;
var inst_28927 = null;
var inst_28928 = (0);
var inst_28929 = (0);
var state_28986__$1 = (function (){var statearr_29029 = state_28986;
(statearr_29029[(30)] = inst_28920);

(statearr_29029[(11)] = inst_28929);

(statearr_29029[(20)] = inst_28926);

(statearr_29029[(29)] = inst_28918__$1);

(statearr_29029[(21)] = inst_28928);

(statearr_29029[(12)] = inst_28927);

return statearr_29029;
})();
var statearr_29030_29099 = state_28986__$1;
(statearr_29030_29099[(2)] = null);

(statearr_29030_29099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (28))){
var inst_28945 = (state_28986[(25)]);
var inst_28926 = (state_28986[(20)]);
var inst_28945__$1 = cljs.core.seq.call(null,inst_28926);
var state_28986__$1 = (function (){var statearr_29031 = state_28986;
(statearr_29031[(25)] = inst_28945__$1);

return statearr_29031;
})();
if(inst_28945__$1){
var statearr_29032_29100 = state_28986__$1;
(statearr_29032_29100[(1)] = (33));

} else {
var statearr_29033_29101 = state_28986__$1;
(statearr_29033_29101[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (25))){
var inst_28929 = (state_28986[(11)]);
var inst_28928 = (state_28986[(21)]);
var inst_28931 = (inst_28929 < inst_28928);
var inst_28932 = inst_28931;
var state_28986__$1 = state_28986;
if(cljs.core.truth_(inst_28932)){
var statearr_29034_29102 = state_28986__$1;
(statearr_29034_29102[(1)] = (27));

} else {
var statearr_29035_29103 = state_28986__$1;
(statearr_29035_29103[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (34))){
var state_28986__$1 = state_28986;
var statearr_29036_29104 = state_28986__$1;
(statearr_29036_29104[(2)] = null);

(statearr_29036_29104[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (17))){
var state_28986__$1 = state_28986;
var statearr_29037_29105 = state_28986__$1;
(statearr_29037_29105[(2)] = null);

(statearr_29037_29105[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (3))){
var inst_28984 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28986__$1,inst_28984);
} else {
if((state_val_28987 === (12))){
var inst_28913 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_29038_29106 = state_28986__$1;
(statearr_29038_29106[(2)] = inst_28913);

(statearr_29038_29106[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (2))){
var state_28986__$1 = state_28986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28986__$1,(4),ch);
} else {
if((state_val_28987 === (23))){
var state_28986__$1 = state_28986;
var statearr_29039_29107 = state_28986__$1;
(statearr_29039_29107[(2)] = null);

(statearr_29039_29107[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (35))){
var inst_28968 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_29040_29108 = state_28986__$1;
(statearr_29040_29108[(2)] = inst_28968);

(statearr_29040_29108[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (19))){
var inst_28885 = (state_28986[(7)]);
var inst_28889 = cljs.core.chunk_first.call(null,inst_28885);
var inst_28890 = cljs.core.chunk_rest.call(null,inst_28885);
var inst_28891 = cljs.core.count.call(null,inst_28889);
var inst_28863 = inst_28890;
var inst_28864 = inst_28889;
var inst_28865 = inst_28891;
var inst_28866 = (0);
var state_28986__$1 = (function (){var statearr_29041 = state_28986;
(statearr_29041[(13)] = inst_28864);

(statearr_29041[(14)] = inst_28863);

(statearr_29041[(16)] = inst_28866);

(statearr_29041[(17)] = inst_28865);

return statearr_29041;
})();
var statearr_29042_29109 = state_28986__$1;
(statearr_29042_29109[(2)] = null);

(statearr_29042_29109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (11))){
var inst_28863 = (state_28986[(14)]);
var inst_28885 = (state_28986[(7)]);
var inst_28885__$1 = cljs.core.seq.call(null,inst_28863);
var state_28986__$1 = (function (){var statearr_29043 = state_28986;
(statearr_29043[(7)] = inst_28885__$1);

return statearr_29043;
})();
if(inst_28885__$1){
var statearr_29044_29110 = state_28986__$1;
(statearr_29044_29110[(1)] = (16));

} else {
var statearr_29045_29111 = state_28986__$1;
(statearr_29045_29111[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (9))){
var inst_28915 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_29046_29112 = state_28986__$1;
(statearr_29046_29112[(2)] = inst_28915);

(statearr_29046_29112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (5))){
var inst_28861 = cljs.core.deref.call(null,cs);
var inst_28862 = cljs.core.seq.call(null,inst_28861);
var inst_28863 = inst_28862;
var inst_28864 = null;
var inst_28865 = (0);
var inst_28866 = (0);
var state_28986__$1 = (function (){var statearr_29047 = state_28986;
(statearr_29047[(13)] = inst_28864);

(statearr_29047[(14)] = inst_28863);

(statearr_29047[(16)] = inst_28866);

(statearr_29047[(17)] = inst_28865);

return statearr_29047;
})();
var statearr_29048_29113 = state_28986__$1;
(statearr_29048_29113[(2)] = null);

(statearr_29048_29113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (14))){
var state_28986__$1 = state_28986;
var statearr_29049_29114 = state_28986__$1;
(statearr_29049_29114[(2)] = null);

(statearr_29049_29114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (45))){
var inst_28976 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_29050_29115 = state_28986__$1;
(statearr_29050_29115[(2)] = inst_28976);

(statearr_29050_29115[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (26))){
var inst_28918 = (state_28986[(29)]);
var inst_28972 = (state_28986[(2)]);
var inst_28973 = cljs.core.seq.call(null,inst_28918);
var state_28986__$1 = (function (){var statearr_29051 = state_28986;
(statearr_29051[(31)] = inst_28972);

return statearr_29051;
})();
if(inst_28973){
var statearr_29052_29116 = state_28986__$1;
(statearr_29052_29116[(1)] = (42));

} else {
var statearr_29053_29117 = state_28986__$1;
(statearr_29053_29117[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (16))){
var inst_28885 = (state_28986[(7)]);
var inst_28887 = cljs.core.chunked_seq_QMARK_.call(null,inst_28885);
var state_28986__$1 = state_28986;
if(inst_28887){
var statearr_29054_29118 = state_28986__$1;
(statearr_29054_29118[(1)] = (19));

} else {
var statearr_29055_29119 = state_28986__$1;
(statearr_29055_29119[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (38))){
var inst_28965 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_29056_29120 = state_28986__$1;
(statearr_29056_29120[(2)] = inst_28965);

(statearr_29056_29120[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (30))){
var state_28986__$1 = state_28986;
var statearr_29057_29121 = state_28986__$1;
(statearr_29057_29121[(2)] = null);

(statearr_29057_29121[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (10))){
var inst_28864 = (state_28986[(13)]);
var inst_28866 = (state_28986[(16)]);
var inst_28874 = cljs.core._nth.call(null,inst_28864,inst_28866);
var inst_28875 = cljs.core.nth.call(null,inst_28874,(0),null);
var inst_28876 = cljs.core.nth.call(null,inst_28874,(1),null);
var state_28986__$1 = (function (){var statearr_29058 = state_28986;
(statearr_29058[(26)] = inst_28875);

return statearr_29058;
})();
if(cljs.core.truth_(inst_28876)){
var statearr_29059_29122 = state_28986__$1;
(statearr_29059_29122[(1)] = (13));

} else {
var statearr_29060_29123 = state_28986__$1;
(statearr_29060_29123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (18))){
var inst_28911 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_29061_29124 = state_28986__$1;
(statearr_29061_29124[(2)] = inst_28911);

(statearr_29061_29124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (42))){
var state_28986__$1 = state_28986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28986__$1,(45),dchan);
} else {
if((state_val_28987 === (37))){
var inst_28854 = (state_28986[(9)]);
var inst_28945 = (state_28986[(25)]);
var inst_28954 = (state_28986[(23)]);
var inst_28954__$1 = cljs.core.first.call(null,inst_28945);
var inst_28955 = cljs.core.async.put_BANG_.call(null,inst_28954__$1,inst_28854,done);
var state_28986__$1 = (function (){var statearr_29062 = state_28986;
(statearr_29062[(23)] = inst_28954__$1);

return statearr_29062;
})();
if(cljs.core.truth_(inst_28955)){
var statearr_29063_29125 = state_28986__$1;
(statearr_29063_29125[(1)] = (39));

} else {
var statearr_29064_29126 = state_28986__$1;
(statearr_29064_29126[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (8))){
var inst_28866 = (state_28986[(16)]);
var inst_28865 = (state_28986[(17)]);
var inst_28868 = (inst_28866 < inst_28865);
var inst_28869 = inst_28868;
var state_28986__$1 = state_28986;
if(cljs.core.truth_(inst_28869)){
var statearr_29065_29127 = state_28986__$1;
(statearr_29065_29127[(1)] = (10));

} else {
var statearr_29066_29128 = state_28986__$1;
(statearr_29066_29128[(1)] = (11));

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
});})(c__27751__auto___29074,cs,m,dchan,dctr,done))
;
return ((function (switch__27639__auto__,c__27751__auto___29074,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27640__auto__ = null;
var cljs$core$async$mult_$_state_machine__27640__auto____0 = (function (){
var statearr_29070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29070[(0)] = cljs$core$async$mult_$_state_machine__27640__auto__);

(statearr_29070[(1)] = (1));

return statearr_29070;
});
var cljs$core$async$mult_$_state_machine__27640__auto____1 = (function (state_28986){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_28986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e29071){if((e29071 instanceof Object)){
var ex__27643__auto__ = e29071;
var statearr_29072_29129 = state_28986;
(statearr_29072_29129[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29130 = state_28986;
state_28986 = G__29130;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27640__auto__ = function(state_28986){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27640__auto____1.call(this,state_28986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27640__auto____0;
cljs$core$async$mult_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27640__auto____1;
return cljs$core$async$mult_$_state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto___29074,cs,m,dchan,dctr,done))
})();
var state__27753__auto__ = (function (){var statearr_29073 = f__27752__auto__.call(null);
(statearr_29073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___29074);

return statearr_29073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto___29074,cs,m,dchan,dctr,done))
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
var args29131 = [];
var len__23653__auto___29134 = arguments.length;
var i__23654__auto___29135 = (0);
while(true){
if((i__23654__auto___29135 < len__23653__auto___29134)){
args29131.push((arguments[i__23654__auto___29135]));

var G__29136 = (i__23654__auto___29135 + (1));
i__23654__auto___29135 = G__29136;
continue;
} else {
}
break;
}

var G__29133 = args29131.length;
switch (G__29133) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29131.length)].join('')));

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
var x__23241__auto__ = (((m == null))?null:m);
var m__23242__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__23241__auto__)]);
if(!((m__23242__auto__ == null))){
return m__23242__auto__.call(null,m,ch);
} else {
var m__23242__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__23242__auto____$1 == null))){
return m__23242__auto____$1.call(null,m,ch);
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
var x__23241__auto__ = (((m == null))?null:m);
var m__23242__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__23241__auto__)]);
if(!((m__23242__auto__ == null))){
return m__23242__auto__.call(null,m,ch);
} else {
var m__23242__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__23242__auto____$1 == null))){
return m__23242__auto____$1.call(null,m,ch);
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
var x__23241__auto__ = (((m == null))?null:m);
var m__23242__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__23241__auto__)]);
if(!((m__23242__auto__ == null))){
return m__23242__auto__.call(null,m);
} else {
var m__23242__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__23242__auto____$1 == null))){
return m__23242__auto____$1.call(null,m);
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
var x__23241__auto__ = (((m == null))?null:m);
var m__23242__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__23241__auto__)]);
if(!((m__23242__auto__ == null))){
return m__23242__auto__.call(null,m,state_map);
} else {
var m__23242__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__23242__auto____$1 == null))){
return m__23242__auto____$1.call(null,m,state_map);
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
var x__23241__auto__ = (((m == null))?null:m);
var m__23242__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__23241__auto__)]);
if(!((m__23242__auto__ == null))){
return m__23242__auto__.call(null,m,mode);
} else {
var m__23242__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__23242__auto____$1 == null))){
return m__23242__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__23660__auto__ = [];
var len__23653__auto___29148 = arguments.length;
var i__23654__auto___29149 = (0);
while(true){
if((i__23654__auto___29149 < len__23653__auto___29148)){
args__23660__auto__.push((arguments[i__23654__auto___29149]));

var G__29150 = (i__23654__auto___29149 + (1));
i__23654__auto___29149 = G__29150;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((3) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23661__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29142){
var map__29143 = p__29142;
var map__29143__$1 = ((((!((map__29143 == null)))?((((map__29143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29143):map__29143);
var opts = map__29143__$1;
var statearr_29145_29151 = state;
(statearr_29145_29151[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29143,map__29143__$1,opts){
return (function (val){
var statearr_29146_29152 = state;
(statearr_29146_29152[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29143,map__29143__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29147_29153 = state;
(statearr_29147_29153[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29138){
var G__29139 = cljs.core.first.call(null,seq29138);
var seq29138__$1 = cljs.core.next.call(null,seq29138);
var G__29140 = cljs.core.first.call(null,seq29138__$1);
var seq29138__$2 = cljs.core.next.call(null,seq29138__$1);
var G__29141 = cljs.core.first.call(null,seq29138__$2);
var seq29138__$3 = cljs.core.next.call(null,seq29138__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29139,G__29140,G__29141,seq29138__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29319 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29319 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29320){
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
this.meta29320 = meta29320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29321,meta29320__$1){
var self__ = this;
var _29321__$1 = this;
return (new cljs.core.async.t_cljs$core$async29319(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29320__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29319.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29321){
var self__ = this;
var _29321__$1 = this;
return self__.meta29320;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29319.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29319.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29319.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29319.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29319.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29319.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29319.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29319.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29319.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29320","meta29320",-105175796,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29319.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29319";

cljs.core.async.t_cljs$core$async29319.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async29319");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29319 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29319(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29320){
return (new cljs.core.async.t_cljs$core$async29319(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29320));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29319(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27751__auto___29484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto___29484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto___29484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29421){
var state_val_29422 = (state_29421[(1)]);
if((state_val_29422 === (7))){
var inst_29337 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
var statearr_29423_29485 = state_29421__$1;
(statearr_29423_29485[(2)] = inst_29337);

(statearr_29423_29485[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (20))){
var inst_29349 = (state_29421[(7)]);
var state_29421__$1 = state_29421;
var statearr_29424_29486 = state_29421__$1;
(statearr_29424_29486[(2)] = inst_29349);

(statearr_29424_29486[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (27))){
var state_29421__$1 = state_29421;
var statearr_29425_29487 = state_29421__$1;
(statearr_29425_29487[(2)] = null);

(statearr_29425_29487[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (1))){
var inst_29325 = (state_29421[(8)]);
var inst_29325__$1 = calc_state.call(null);
var inst_29327 = (inst_29325__$1 == null);
var inst_29328 = cljs.core.not.call(null,inst_29327);
var state_29421__$1 = (function (){var statearr_29426 = state_29421;
(statearr_29426[(8)] = inst_29325__$1);

return statearr_29426;
})();
if(inst_29328){
var statearr_29427_29488 = state_29421__$1;
(statearr_29427_29488[(1)] = (2));

} else {
var statearr_29428_29489 = state_29421__$1;
(statearr_29428_29489[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (24))){
var inst_29372 = (state_29421[(9)]);
var inst_29395 = (state_29421[(10)]);
var inst_29381 = (state_29421[(11)]);
var inst_29395__$1 = inst_29372.call(null,inst_29381);
var state_29421__$1 = (function (){var statearr_29429 = state_29421;
(statearr_29429[(10)] = inst_29395__$1);

return statearr_29429;
})();
if(cljs.core.truth_(inst_29395__$1)){
var statearr_29430_29490 = state_29421__$1;
(statearr_29430_29490[(1)] = (29));

} else {
var statearr_29431_29491 = state_29421__$1;
(statearr_29431_29491[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (4))){
var inst_29340 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
if(cljs.core.truth_(inst_29340)){
var statearr_29432_29492 = state_29421__$1;
(statearr_29432_29492[(1)] = (8));

} else {
var statearr_29433_29493 = state_29421__$1;
(statearr_29433_29493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (15))){
var inst_29366 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
if(cljs.core.truth_(inst_29366)){
var statearr_29434_29494 = state_29421__$1;
(statearr_29434_29494[(1)] = (19));

} else {
var statearr_29435_29495 = state_29421__$1;
(statearr_29435_29495[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (21))){
var inst_29371 = (state_29421[(12)]);
var inst_29371__$1 = (state_29421[(2)]);
var inst_29372 = cljs.core.get.call(null,inst_29371__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29373 = cljs.core.get.call(null,inst_29371__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29374 = cljs.core.get.call(null,inst_29371__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29421__$1 = (function (){var statearr_29436 = state_29421;
(statearr_29436[(9)] = inst_29372);

(statearr_29436[(12)] = inst_29371__$1);

(statearr_29436[(13)] = inst_29373);

return statearr_29436;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29421__$1,(22),inst_29374);
} else {
if((state_val_29422 === (31))){
var inst_29403 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
if(cljs.core.truth_(inst_29403)){
var statearr_29437_29496 = state_29421__$1;
(statearr_29437_29496[(1)] = (32));

} else {
var statearr_29438_29497 = state_29421__$1;
(statearr_29438_29497[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (32))){
var inst_29380 = (state_29421[(14)]);
var state_29421__$1 = state_29421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29421__$1,(35),out,inst_29380);
} else {
if((state_val_29422 === (33))){
var inst_29371 = (state_29421[(12)]);
var inst_29349 = inst_29371;
var state_29421__$1 = (function (){var statearr_29439 = state_29421;
(statearr_29439[(7)] = inst_29349);

return statearr_29439;
})();
var statearr_29440_29498 = state_29421__$1;
(statearr_29440_29498[(2)] = null);

(statearr_29440_29498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (13))){
var inst_29349 = (state_29421[(7)]);
var inst_29356 = inst_29349.cljs$lang$protocol_mask$partition0$;
var inst_29357 = (inst_29356 & (64));
var inst_29358 = inst_29349.cljs$core$ISeq$;
var inst_29359 = (inst_29357) || (inst_29358);
var state_29421__$1 = state_29421;
if(cljs.core.truth_(inst_29359)){
var statearr_29441_29499 = state_29421__$1;
(statearr_29441_29499[(1)] = (16));

} else {
var statearr_29442_29500 = state_29421__$1;
(statearr_29442_29500[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (22))){
var inst_29381 = (state_29421[(11)]);
var inst_29380 = (state_29421[(14)]);
var inst_29379 = (state_29421[(2)]);
var inst_29380__$1 = cljs.core.nth.call(null,inst_29379,(0),null);
var inst_29381__$1 = cljs.core.nth.call(null,inst_29379,(1),null);
var inst_29382 = (inst_29380__$1 == null);
var inst_29383 = cljs.core._EQ_.call(null,inst_29381__$1,change);
var inst_29384 = (inst_29382) || (inst_29383);
var state_29421__$1 = (function (){var statearr_29443 = state_29421;
(statearr_29443[(11)] = inst_29381__$1);

(statearr_29443[(14)] = inst_29380__$1);

return statearr_29443;
})();
if(cljs.core.truth_(inst_29384)){
var statearr_29444_29501 = state_29421__$1;
(statearr_29444_29501[(1)] = (23));

} else {
var statearr_29445_29502 = state_29421__$1;
(statearr_29445_29502[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (36))){
var inst_29371 = (state_29421[(12)]);
var inst_29349 = inst_29371;
var state_29421__$1 = (function (){var statearr_29446 = state_29421;
(statearr_29446[(7)] = inst_29349);

return statearr_29446;
})();
var statearr_29447_29503 = state_29421__$1;
(statearr_29447_29503[(2)] = null);

(statearr_29447_29503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (29))){
var inst_29395 = (state_29421[(10)]);
var state_29421__$1 = state_29421;
var statearr_29448_29504 = state_29421__$1;
(statearr_29448_29504[(2)] = inst_29395);

(statearr_29448_29504[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (6))){
var state_29421__$1 = state_29421;
var statearr_29449_29505 = state_29421__$1;
(statearr_29449_29505[(2)] = false);

(statearr_29449_29505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (28))){
var inst_29391 = (state_29421[(2)]);
var inst_29392 = calc_state.call(null);
var inst_29349 = inst_29392;
var state_29421__$1 = (function (){var statearr_29450 = state_29421;
(statearr_29450[(15)] = inst_29391);

(statearr_29450[(7)] = inst_29349);

return statearr_29450;
})();
var statearr_29451_29506 = state_29421__$1;
(statearr_29451_29506[(2)] = null);

(statearr_29451_29506[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (25))){
var inst_29417 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
var statearr_29452_29507 = state_29421__$1;
(statearr_29452_29507[(2)] = inst_29417);

(statearr_29452_29507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (34))){
var inst_29415 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
var statearr_29453_29508 = state_29421__$1;
(statearr_29453_29508[(2)] = inst_29415);

(statearr_29453_29508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (17))){
var state_29421__$1 = state_29421;
var statearr_29454_29509 = state_29421__$1;
(statearr_29454_29509[(2)] = false);

(statearr_29454_29509[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (3))){
var state_29421__$1 = state_29421;
var statearr_29455_29510 = state_29421__$1;
(statearr_29455_29510[(2)] = false);

(statearr_29455_29510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (12))){
var inst_29419 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29421__$1,inst_29419);
} else {
if((state_val_29422 === (2))){
var inst_29325 = (state_29421[(8)]);
var inst_29330 = inst_29325.cljs$lang$protocol_mask$partition0$;
var inst_29331 = (inst_29330 & (64));
var inst_29332 = inst_29325.cljs$core$ISeq$;
var inst_29333 = (inst_29331) || (inst_29332);
var state_29421__$1 = state_29421;
if(cljs.core.truth_(inst_29333)){
var statearr_29456_29511 = state_29421__$1;
(statearr_29456_29511[(1)] = (5));

} else {
var statearr_29457_29512 = state_29421__$1;
(statearr_29457_29512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (23))){
var inst_29380 = (state_29421[(14)]);
var inst_29386 = (inst_29380 == null);
var state_29421__$1 = state_29421;
if(cljs.core.truth_(inst_29386)){
var statearr_29458_29513 = state_29421__$1;
(statearr_29458_29513[(1)] = (26));

} else {
var statearr_29459_29514 = state_29421__$1;
(statearr_29459_29514[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (35))){
var inst_29406 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
if(cljs.core.truth_(inst_29406)){
var statearr_29460_29515 = state_29421__$1;
(statearr_29460_29515[(1)] = (36));

} else {
var statearr_29461_29516 = state_29421__$1;
(statearr_29461_29516[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (19))){
var inst_29349 = (state_29421[(7)]);
var inst_29368 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29349);
var state_29421__$1 = state_29421;
var statearr_29462_29517 = state_29421__$1;
(statearr_29462_29517[(2)] = inst_29368);

(statearr_29462_29517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (11))){
var inst_29349 = (state_29421[(7)]);
var inst_29353 = (inst_29349 == null);
var inst_29354 = cljs.core.not.call(null,inst_29353);
var state_29421__$1 = state_29421;
if(inst_29354){
var statearr_29463_29518 = state_29421__$1;
(statearr_29463_29518[(1)] = (13));

} else {
var statearr_29464_29519 = state_29421__$1;
(statearr_29464_29519[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (9))){
var inst_29325 = (state_29421[(8)]);
var state_29421__$1 = state_29421;
var statearr_29465_29520 = state_29421__$1;
(statearr_29465_29520[(2)] = inst_29325);

(statearr_29465_29520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (5))){
var state_29421__$1 = state_29421;
var statearr_29466_29521 = state_29421__$1;
(statearr_29466_29521[(2)] = true);

(statearr_29466_29521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (14))){
var state_29421__$1 = state_29421;
var statearr_29467_29522 = state_29421__$1;
(statearr_29467_29522[(2)] = false);

(statearr_29467_29522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (26))){
var inst_29381 = (state_29421[(11)]);
var inst_29388 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29381);
var state_29421__$1 = state_29421;
var statearr_29468_29523 = state_29421__$1;
(statearr_29468_29523[(2)] = inst_29388);

(statearr_29468_29523[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (16))){
var state_29421__$1 = state_29421;
var statearr_29469_29524 = state_29421__$1;
(statearr_29469_29524[(2)] = true);

(statearr_29469_29524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (38))){
var inst_29411 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
var statearr_29470_29525 = state_29421__$1;
(statearr_29470_29525[(2)] = inst_29411);

(statearr_29470_29525[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (30))){
var inst_29372 = (state_29421[(9)]);
var inst_29381 = (state_29421[(11)]);
var inst_29373 = (state_29421[(13)]);
var inst_29398 = cljs.core.empty_QMARK_.call(null,inst_29372);
var inst_29399 = inst_29373.call(null,inst_29381);
var inst_29400 = cljs.core.not.call(null,inst_29399);
var inst_29401 = (inst_29398) && (inst_29400);
var state_29421__$1 = state_29421;
var statearr_29471_29526 = state_29421__$1;
(statearr_29471_29526[(2)] = inst_29401);

(statearr_29471_29526[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (10))){
var inst_29325 = (state_29421[(8)]);
var inst_29345 = (state_29421[(2)]);
var inst_29346 = cljs.core.get.call(null,inst_29345,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29347 = cljs.core.get.call(null,inst_29345,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29348 = cljs.core.get.call(null,inst_29345,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29349 = inst_29325;
var state_29421__$1 = (function (){var statearr_29472 = state_29421;
(statearr_29472[(16)] = inst_29348);

(statearr_29472[(17)] = inst_29346);

(statearr_29472[(18)] = inst_29347);

(statearr_29472[(7)] = inst_29349);

return statearr_29472;
})();
var statearr_29473_29527 = state_29421__$1;
(statearr_29473_29527[(2)] = null);

(statearr_29473_29527[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (18))){
var inst_29363 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
var statearr_29474_29528 = state_29421__$1;
(statearr_29474_29528[(2)] = inst_29363);

(statearr_29474_29528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (37))){
var state_29421__$1 = state_29421;
var statearr_29475_29529 = state_29421__$1;
(statearr_29475_29529[(2)] = null);

(statearr_29475_29529[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (8))){
var inst_29325 = (state_29421[(8)]);
var inst_29342 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29325);
var state_29421__$1 = state_29421;
var statearr_29476_29530 = state_29421__$1;
(statearr_29476_29530[(2)] = inst_29342);

(statearr_29476_29530[(1)] = (10));


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
});})(c__27751__auto___29484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27639__auto__,c__27751__auto___29484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27640__auto__ = null;
var cljs$core$async$mix_$_state_machine__27640__auto____0 = (function (){
var statearr_29480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29480[(0)] = cljs$core$async$mix_$_state_machine__27640__auto__);

(statearr_29480[(1)] = (1));

return statearr_29480;
});
var cljs$core$async$mix_$_state_machine__27640__auto____1 = (function (state_29421){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_29421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e29481){if((e29481 instanceof Object)){
var ex__27643__auto__ = e29481;
var statearr_29482_29531 = state_29421;
(statearr_29482_29531[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29532 = state_29421;
state_29421 = G__29532;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27640__auto__ = function(state_29421){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27640__auto____1.call(this,state_29421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27640__auto____0;
cljs$core$async$mix_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27640__auto____1;
return cljs$core$async$mix_$_state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto___29484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27753__auto__ = (function (){var statearr_29483 = f__27752__auto__.call(null);
(statearr_29483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___29484);

return statearr_29483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto___29484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__23241__auto__ = (((p == null))?null:p);
var m__23242__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__23241__auto__)]);
if(!((m__23242__auto__ == null))){
return m__23242__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__23242__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__23242__auto____$1 == null))){
return m__23242__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__23241__auto__ = (((p == null))?null:p);
var m__23242__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__23241__auto__)]);
if(!((m__23242__auto__ == null))){
return m__23242__auto__.call(null,p,v,ch);
} else {
var m__23242__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__23242__auto____$1 == null))){
return m__23242__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29533 = [];
var len__23653__auto___29536 = arguments.length;
var i__23654__auto___29537 = (0);
while(true){
if((i__23654__auto___29537 < len__23653__auto___29536)){
args29533.push((arguments[i__23654__auto___29537]));

var G__29538 = (i__23654__auto___29537 + (1));
i__23654__auto___29537 = G__29538;
continue;
} else {
}
break;
}

var G__29535 = args29533.length;
switch (G__29535) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29533.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__23241__auto__ = (((p == null))?null:p);
var m__23242__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23241__auto__)]);
if(!((m__23242__auto__ == null))){
return m__23242__auto__.call(null,p);
} else {
var m__23242__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23242__auto____$1 == null))){
return m__23242__auto____$1.call(null,p);
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
var x__23241__auto__ = (((p == null))?null:p);
var m__23242__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23241__auto__)]);
if(!((m__23242__auto__ == null))){
return m__23242__auto__.call(null,p,v);
} else {
var m__23242__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23242__auto____$1 == null))){
return m__23242__auto____$1.call(null,p,v);
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
var args29541 = [];
var len__23653__auto___29666 = arguments.length;
var i__23654__auto___29667 = (0);
while(true){
if((i__23654__auto___29667 < len__23653__auto___29666)){
args29541.push((arguments[i__23654__auto___29667]));

var G__29668 = (i__23654__auto___29667 + (1));
i__23654__auto___29667 = G__29668;
continue;
} else {
}
break;
}

var G__29543 = args29541.length;
switch (G__29543) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29541.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__22578__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__22578__auto__)){
return or__22578__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__22578__auto__,mults){
return (function (p1__29540_SHARP_){
if(cljs.core.truth_(p1__29540_SHARP_.call(null,topic))){
return p1__29540_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29540_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__22578__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29544 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29545){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29545 = meta29545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29546,meta29545__$1){
var self__ = this;
var _29546__$1 = this;
return (new cljs.core.async.t_cljs$core$async29544(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29545__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29546){
var self__ = this;
var _29546__$1 = this;
return self__.meta29545;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29544.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29544.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29544.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29544.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29544.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29544.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29544.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29544.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29545","meta29545",2144876896,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29544";

cljs.core.async.t_cljs$core$async29544.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async29544");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29544 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29544(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29545){
return (new cljs.core.async.t_cljs$core$async29544(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29545));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29544(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27751__auto___29670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto___29670,mults,ensure_mult,p){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto___29670,mults,ensure_mult,p){
return (function (state_29618){
var state_val_29619 = (state_29618[(1)]);
if((state_val_29619 === (7))){
var inst_29614 = (state_29618[(2)]);
var state_29618__$1 = state_29618;
var statearr_29620_29671 = state_29618__$1;
(statearr_29620_29671[(2)] = inst_29614);

(statearr_29620_29671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (20))){
var state_29618__$1 = state_29618;
var statearr_29621_29672 = state_29618__$1;
(statearr_29621_29672[(2)] = null);

(statearr_29621_29672[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (1))){
var state_29618__$1 = state_29618;
var statearr_29622_29673 = state_29618__$1;
(statearr_29622_29673[(2)] = null);

(statearr_29622_29673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (24))){
var inst_29597 = (state_29618[(7)]);
var inst_29606 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29597);
var state_29618__$1 = state_29618;
var statearr_29623_29674 = state_29618__$1;
(statearr_29623_29674[(2)] = inst_29606);

(statearr_29623_29674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (4))){
var inst_29549 = (state_29618[(8)]);
var inst_29549__$1 = (state_29618[(2)]);
var inst_29550 = (inst_29549__$1 == null);
var state_29618__$1 = (function (){var statearr_29624 = state_29618;
(statearr_29624[(8)] = inst_29549__$1);

return statearr_29624;
})();
if(cljs.core.truth_(inst_29550)){
var statearr_29625_29675 = state_29618__$1;
(statearr_29625_29675[(1)] = (5));

} else {
var statearr_29626_29676 = state_29618__$1;
(statearr_29626_29676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (15))){
var inst_29591 = (state_29618[(2)]);
var state_29618__$1 = state_29618;
var statearr_29627_29677 = state_29618__$1;
(statearr_29627_29677[(2)] = inst_29591);

(statearr_29627_29677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (21))){
var inst_29611 = (state_29618[(2)]);
var state_29618__$1 = (function (){var statearr_29628 = state_29618;
(statearr_29628[(9)] = inst_29611);

return statearr_29628;
})();
var statearr_29629_29678 = state_29618__$1;
(statearr_29629_29678[(2)] = null);

(statearr_29629_29678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (13))){
var inst_29573 = (state_29618[(10)]);
var inst_29575 = cljs.core.chunked_seq_QMARK_.call(null,inst_29573);
var state_29618__$1 = state_29618;
if(inst_29575){
var statearr_29630_29679 = state_29618__$1;
(statearr_29630_29679[(1)] = (16));

} else {
var statearr_29631_29680 = state_29618__$1;
(statearr_29631_29680[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (22))){
var inst_29603 = (state_29618[(2)]);
var state_29618__$1 = state_29618;
if(cljs.core.truth_(inst_29603)){
var statearr_29632_29681 = state_29618__$1;
(statearr_29632_29681[(1)] = (23));

} else {
var statearr_29633_29682 = state_29618__$1;
(statearr_29633_29682[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (6))){
var inst_29549 = (state_29618[(8)]);
var inst_29599 = (state_29618[(11)]);
var inst_29597 = (state_29618[(7)]);
var inst_29597__$1 = topic_fn.call(null,inst_29549);
var inst_29598 = cljs.core.deref.call(null,mults);
var inst_29599__$1 = cljs.core.get.call(null,inst_29598,inst_29597__$1);
var state_29618__$1 = (function (){var statearr_29634 = state_29618;
(statearr_29634[(11)] = inst_29599__$1);

(statearr_29634[(7)] = inst_29597__$1);

return statearr_29634;
})();
if(cljs.core.truth_(inst_29599__$1)){
var statearr_29635_29683 = state_29618__$1;
(statearr_29635_29683[(1)] = (19));

} else {
var statearr_29636_29684 = state_29618__$1;
(statearr_29636_29684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (25))){
var inst_29608 = (state_29618[(2)]);
var state_29618__$1 = state_29618;
var statearr_29637_29685 = state_29618__$1;
(statearr_29637_29685[(2)] = inst_29608);

(statearr_29637_29685[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (17))){
var inst_29573 = (state_29618[(10)]);
var inst_29582 = cljs.core.first.call(null,inst_29573);
var inst_29583 = cljs.core.async.muxch_STAR_.call(null,inst_29582);
var inst_29584 = cljs.core.async.close_BANG_.call(null,inst_29583);
var inst_29585 = cljs.core.next.call(null,inst_29573);
var inst_29559 = inst_29585;
var inst_29560 = null;
var inst_29561 = (0);
var inst_29562 = (0);
var state_29618__$1 = (function (){var statearr_29638 = state_29618;
(statearr_29638[(12)] = inst_29560);

(statearr_29638[(13)] = inst_29562);

(statearr_29638[(14)] = inst_29561);

(statearr_29638[(15)] = inst_29584);

(statearr_29638[(16)] = inst_29559);

return statearr_29638;
})();
var statearr_29639_29686 = state_29618__$1;
(statearr_29639_29686[(2)] = null);

(statearr_29639_29686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (3))){
var inst_29616 = (state_29618[(2)]);
var state_29618__$1 = state_29618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29618__$1,inst_29616);
} else {
if((state_val_29619 === (12))){
var inst_29593 = (state_29618[(2)]);
var state_29618__$1 = state_29618;
var statearr_29640_29687 = state_29618__$1;
(statearr_29640_29687[(2)] = inst_29593);

(statearr_29640_29687[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (2))){
var state_29618__$1 = state_29618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29618__$1,(4),ch);
} else {
if((state_val_29619 === (23))){
var state_29618__$1 = state_29618;
var statearr_29641_29688 = state_29618__$1;
(statearr_29641_29688[(2)] = null);

(statearr_29641_29688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (19))){
var inst_29549 = (state_29618[(8)]);
var inst_29599 = (state_29618[(11)]);
var inst_29601 = cljs.core.async.muxch_STAR_.call(null,inst_29599);
var state_29618__$1 = state_29618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29618__$1,(22),inst_29601,inst_29549);
} else {
if((state_val_29619 === (11))){
var inst_29573 = (state_29618[(10)]);
var inst_29559 = (state_29618[(16)]);
var inst_29573__$1 = cljs.core.seq.call(null,inst_29559);
var state_29618__$1 = (function (){var statearr_29642 = state_29618;
(statearr_29642[(10)] = inst_29573__$1);

return statearr_29642;
})();
if(inst_29573__$1){
var statearr_29643_29689 = state_29618__$1;
(statearr_29643_29689[(1)] = (13));

} else {
var statearr_29644_29690 = state_29618__$1;
(statearr_29644_29690[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (9))){
var inst_29595 = (state_29618[(2)]);
var state_29618__$1 = state_29618;
var statearr_29645_29691 = state_29618__$1;
(statearr_29645_29691[(2)] = inst_29595);

(statearr_29645_29691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (5))){
var inst_29556 = cljs.core.deref.call(null,mults);
var inst_29557 = cljs.core.vals.call(null,inst_29556);
var inst_29558 = cljs.core.seq.call(null,inst_29557);
var inst_29559 = inst_29558;
var inst_29560 = null;
var inst_29561 = (0);
var inst_29562 = (0);
var state_29618__$1 = (function (){var statearr_29646 = state_29618;
(statearr_29646[(12)] = inst_29560);

(statearr_29646[(13)] = inst_29562);

(statearr_29646[(14)] = inst_29561);

(statearr_29646[(16)] = inst_29559);

return statearr_29646;
})();
var statearr_29647_29692 = state_29618__$1;
(statearr_29647_29692[(2)] = null);

(statearr_29647_29692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (14))){
var state_29618__$1 = state_29618;
var statearr_29651_29693 = state_29618__$1;
(statearr_29651_29693[(2)] = null);

(statearr_29651_29693[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (16))){
var inst_29573 = (state_29618[(10)]);
var inst_29577 = cljs.core.chunk_first.call(null,inst_29573);
var inst_29578 = cljs.core.chunk_rest.call(null,inst_29573);
var inst_29579 = cljs.core.count.call(null,inst_29577);
var inst_29559 = inst_29578;
var inst_29560 = inst_29577;
var inst_29561 = inst_29579;
var inst_29562 = (0);
var state_29618__$1 = (function (){var statearr_29652 = state_29618;
(statearr_29652[(12)] = inst_29560);

(statearr_29652[(13)] = inst_29562);

(statearr_29652[(14)] = inst_29561);

(statearr_29652[(16)] = inst_29559);

return statearr_29652;
})();
var statearr_29653_29694 = state_29618__$1;
(statearr_29653_29694[(2)] = null);

(statearr_29653_29694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (10))){
var inst_29560 = (state_29618[(12)]);
var inst_29562 = (state_29618[(13)]);
var inst_29561 = (state_29618[(14)]);
var inst_29559 = (state_29618[(16)]);
var inst_29567 = cljs.core._nth.call(null,inst_29560,inst_29562);
var inst_29568 = cljs.core.async.muxch_STAR_.call(null,inst_29567);
var inst_29569 = cljs.core.async.close_BANG_.call(null,inst_29568);
var inst_29570 = (inst_29562 + (1));
var tmp29648 = inst_29560;
var tmp29649 = inst_29561;
var tmp29650 = inst_29559;
var inst_29559__$1 = tmp29650;
var inst_29560__$1 = tmp29648;
var inst_29561__$1 = tmp29649;
var inst_29562__$1 = inst_29570;
var state_29618__$1 = (function (){var statearr_29654 = state_29618;
(statearr_29654[(12)] = inst_29560__$1);

(statearr_29654[(13)] = inst_29562__$1);

(statearr_29654[(14)] = inst_29561__$1);

(statearr_29654[(17)] = inst_29569);

(statearr_29654[(16)] = inst_29559__$1);

return statearr_29654;
})();
var statearr_29655_29695 = state_29618__$1;
(statearr_29655_29695[(2)] = null);

(statearr_29655_29695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (18))){
var inst_29588 = (state_29618[(2)]);
var state_29618__$1 = state_29618;
var statearr_29656_29696 = state_29618__$1;
(statearr_29656_29696[(2)] = inst_29588);

(statearr_29656_29696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (8))){
var inst_29562 = (state_29618[(13)]);
var inst_29561 = (state_29618[(14)]);
var inst_29564 = (inst_29562 < inst_29561);
var inst_29565 = inst_29564;
var state_29618__$1 = state_29618;
if(cljs.core.truth_(inst_29565)){
var statearr_29657_29697 = state_29618__$1;
(statearr_29657_29697[(1)] = (10));

} else {
var statearr_29658_29698 = state_29618__$1;
(statearr_29658_29698[(1)] = (11));

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
});})(c__27751__auto___29670,mults,ensure_mult,p))
;
return ((function (switch__27639__auto__,c__27751__auto___29670,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27640__auto__ = null;
var cljs$core$async$state_machine__27640__auto____0 = (function (){
var statearr_29662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29662[(0)] = cljs$core$async$state_machine__27640__auto__);

(statearr_29662[(1)] = (1));

return statearr_29662;
});
var cljs$core$async$state_machine__27640__auto____1 = (function (state_29618){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_29618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e29663){if((e29663 instanceof Object)){
var ex__27643__auto__ = e29663;
var statearr_29664_29699 = state_29618;
(statearr_29664_29699[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29700 = state_29618;
state_29618 = G__29700;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$state_machine__27640__auto__ = function(state_29618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27640__auto____1.call(this,state_29618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27640__auto____0;
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27640__auto____1;
return cljs$core$async$state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto___29670,mults,ensure_mult,p))
})();
var state__27753__auto__ = (function (){var statearr_29665 = f__27752__auto__.call(null);
(statearr_29665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___29670);

return statearr_29665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto___29670,mults,ensure_mult,p))
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
var args29701 = [];
var len__23653__auto___29704 = arguments.length;
var i__23654__auto___29705 = (0);
while(true){
if((i__23654__auto___29705 < len__23653__auto___29704)){
args29701.push((arguments[i__23654__auto___29705]));

var G__29706 = (i__23654__auto___29705 + (1));
i__23654__auto___29705 = G__29706;
continue;
} else {
}
break;
}

var G__29703 = args29701.length;
switch (G__29703) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29701.length)].join('')));

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
var args29708 = [];
var len__23653__auto___29711 = arguments.length;
var i__23654__auto___29712 = (0);
while(true){
if((i__23654__auto___29712 < len__23653__auto___29711)){
args29708.push((arguments[i__23654__auto___29712]));

var G__29713 = (i__23654__auto___29712 + (1));
i__23654__auto___29712 = G__29713;
continue;
} else {
}
break;
}

var G__29710 = args29708.length;
switch (G__29710) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29708.length)].join('')));

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
var args29715 = [];
var len__23653__auto___29786 = arguments.length;
var i__23654__auto___29787 = (0);
while(true){
if((i__23654__auto___29787 < len__23653__auto___29786)){
args29715.push((arguments[i__23654__auto___29787]));

var G__29788 = (i__23654__auto___29787 + (1));
i__23654__auto___29787 = G__29788;
continue;
} else {
}
break;
}

var G__29717 = args29715.length;
switch (G__29717) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29715.length)].join('')));

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
var c__27751__auto___29790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto___29790,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto___29790,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29756){
var state_val_29757 = (state_29756[(1)]);
if((state_val_29757 === (7))){
var state_29756__$1 = state_29756;
var statearr_29758_29791 = state_29756__$1;
(statearr_29758_29791[(2)] = null);

(statearr_29758_29791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (1))){
var state_29756__$1 = state_29756;
var statearr_29759_29792 = state_29756__$1;
(statearr_29759_29792[(2)] = null);

(statearr_29759_29792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (4))){
var inst_29720 = (state_29756[(7)]);
var inst_29722 = (inst_29720 < cnt);
var state_29756__$1 = state_29756;
if(cljs.core.truth_(inst_29722)){
var statearr_29760_29793 = state_29756__$1;
(statearr_29760_29793[(1)] = (6));

} else {
var statearr_29761_29794 = state_29756__$1;
(statearr_29761_29794[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (15))){
var inst_29752 = (state_29756[(2)]);
var state_29756__$1 = state_29756;
var statearr_29762_29795 = state_29756__$1;
(statearr_29762_29795[(2)] = inst_29752);

(statearr_29762_29795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (13))){
var inst_29745 = cljs.core.async.close_BANG_.call(null,out);
var state_29756__$1 = state_29756;
var statearr_29763_29796 = state_29756__$1;
(statearr_29763_29796[(2)] = inst_29745);

(statearr_29763_29796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (6))){
var state_29756__$1 = state_29756;
var statearr_29764_29797 = state_29756__$1;
(statearr_29764_29797[(2)] = null);

(statearr_29764_29797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (3))){
var inst_29754 = (state_29756[(2)]);
var state_29756__$1 = state_29756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29756__$1,inst_29754);
} else {
if((state_val_29757 === (12))){
var inst_29742 = (state_29756[(8)]);
var inst_29742__$1 = (state_29756[(2)]);
var inst_29743 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29742__$1);
var state_29756__$1 = (function (){var statearr_29765 = state_29756;
(statearr_29765[(8)] = inst_29742__$1);

return statearr_29765;
})();
if(cljs.core.truth_(inst_29743)){
var statearr_29766_29798 = state_29756__$1;
(statearr_29766_29798[(1)] = (13));

} else {
var statearr_29767_29799 = state_29756__$1;
(statearr_29767_29799[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (2))){
var inst_29719 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29720 = (0);
var state_29756__$1 = (function (){var statearr_29768 = state_29756;
(statearr_29768[(9)] = inst_29719);

(statearr_29768[(7)] = inst_29720);

return statearr_29768;
})();
var statearr_29769_29800 = state_29756__$1;
(statearr_29769_29800[(2)] = null);

(statearr_29769_29800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (11))){
var inst_29720 = (state_29756[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29756,(10),Object,null,(9));
var inst_29729 = chs__$1.call(null,inst_29720);
var inst_29730 = done.call(null,inst_29720);
var inst_29731 = cljs.core.async.take_BANG_.call(null,inst_29729,inst_29730);
var state_29756__$1 = state_29756;
var statearr_29770_29801 = state_29756__$1;
(statearr_29770_29801[(2)] = inst_29731);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29756__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (9))){
var inst_29720 = (state_29756[(7)]);
var inst_29733 = (state_29756[(2)]);
var inst_29734 = (inst_29720 + (1));
var inst_29720__$1 = inst_29734;
var state_29756__$1 = (function (){var statearr_29771 = state_29756;
(statearr_29771[(7)] = inst_29720__$1);

(statearr_29771[(10)] = inst_29733);

return statearr_29771;
})();
var statearr_29772_29802 = state_29756__$1;
(statearr_29772_29802[(2)] = null);

(statearr_29772_29802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (5))){
var inst_29740 = (state_29756[(2)]);
var state_29756__$1 = (function (){var statearr_29773 = state_29756;
(statearr_29773[(11)] = inst_29740);

return statearr_29773;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29756__$1,(12),dchan);
} else {
if((state_val_29757 === (14))){
var inst_29742 = (state_29756[(8)]);
var inst_29747 = cljs.core.apply.call(null,f,inst_29742);
var state_29756__$1 = state_29756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29756__$1,(16),out,inst_29747);
} else {
if((state_val_29757 === (16))){
var inst_29749 = (state_29756[(2)]);
var state_29756__$1 = (function (){var statearr_29774 = state_29756;
(statearr_29774[(12)] = inst_29749);

return statearr_29774;
})();
var statearr_29775_29803 = state_29756__$1;
(statearr_29775_29803[(2)] = null);

(statearr_29775_29803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (10))){
var inst_29724 = (state_29756[(2)]);
var inst_29725 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29756__$1 = (function (){var statearr_29776 = state_29756;
(statearr_29776[(13)] = inst_29724);

return statearr_29776;
})();
var statearr_29777_29804 = state_29756__$1;
(statearr_29777_29804[(2)] = inst_29725);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29756__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (8))){
var inst_29738 = (state_29756[(2)]);
var state_29756__$1 = state_29756;
var statearr_29778_29805 = state_29756__$1;
(statearr_29778_29805[(2)] = inst_29738);

(statearr_29778_29805[(1)] = (5));


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
});})(c__27751__auto___29790,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27639__auto__,c__27751__auto___29790,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27640__auto__ = null;
var cljs$core$async$state_machine__27640__auto____0 = (function (){
var statearr_29782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29782[(0)] = cljs$core$async$state_machine__27640__auto__);

(statearr_29782[(1)] = (1));

return statearr_29782;
});
var cljs$core$async$state_machine__27640__auto____1 = (function (state_29756){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_29756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e29783){if((e29783 instanceof Object)){
var ex__27643__auto__ = e29783;
var statearr_29784_29806 = state_29756;
(statearr_29784_29806[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29807 = state_29756;
state_29756 = G__29807;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$state_machine__27640__auto__ = function(state_29756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27640__auto____1.call(this,state_29756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27640__auto____0;
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27640__auto____1;
return cljs$core$async$state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto___29790,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27753__auto__ = (function (){var statearr_29785 = f__27752__auto__.call(null);
(statearr_29785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___29790);

return statearr_29785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto___29790,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29809 = [];
var len__23653__auto___29867 = arguments.length;
var i__23654__auto___29868 = (0);
while(true){
if((i__23654__auto___29868 < len__23653__auto___29867)){
args29809.push((arguments[i__23654__auto___29868]));

var G__29869 = (i__23654__auto___29868 + (1));
i__23654__auto___29868 = G__29869;
continue;
} else {
}
break;
}

var G__29811 = args29809.length;
switch (G__29811) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29809.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27751__auto___29871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto___29871,out){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto___29871,out){
return (function (state_29843){
var state_val_29844 = (state_29843[(1)]);
if((state_val_29844 === (7))){
var inst_29822 = (state_29843[(7)]);
var inst_29823 = (state_29843[(8)]);
var inst_29822__$1 = (state_29843[(2)]);
var inst_29823__$1 = cljs.core.nth.call(null,inst_29822__$1,(0),null);
var inst_29824 = cljs.core.nth.call(null,inst_29822__$1,(1),null);
var inst_29825 = (inst_29823__$1 == null);
var state_29843__$1 = (function (){var statearr_29845 = state_29843;
(statearr_29845[(7)] = inst_29822__$1);

(statearr_29845[(8)] = inst_29823__$1);

(statearr_29845[(9)] = inst_29824);

return statearr_29845;
})();
if(cljs.core.truth_(inst_29825)){
var statearr_29846_29872 = state_29843__$1;
(statearr_29846_29872[(1)] = (8));

} else {
var statearr_29847_29873 = state_29843__$1;
(statearr_29847_29873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (1))){
var inst_29812 = cljs.core.vec.call(null,chs);
var inst_29813 = inst_29812;
var state_29843__$1 = (function (){var statearr_29848 = state_29843;
(statearr_29848[(10)] = inst_29813);

return statearr_29848;
})();
var statearr_29849_29874 = state_29843__$1;
(statearr_29849_29874[(2)] = null);

(statearr_29849_29874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (4))){
var inst_29813 = (state_29843[(10)]);
var state_29843__$1 = state_29843;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29843__$1,(7),inst_29813);
} else {
if((state_val_29844 === (6))){
var inst_29839 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29850_29875 = state_29843__$1;
(statearr_29850_29875[(2)] = inst_29839);

(statearr_29850_29875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (3))){
var inst_29841 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29843__$1,inst_29841);
} else {
if((state_val_29844 === (2))){
var inst_29813 = (state_29843[(10)]);
var inst_29815 = cljs.core.count.call(null,inst_29813);
var inst_29816 = (inst_29815 > (0));
var state_29843__$1 = state_29843;
if(cljs.core.truth_(inst_29816)){
var statearr_29852_29876 = state_29843__$1;
(statearr_29852_29876[(1)] = (4));

} else {
var statearr_29853_29877 = state_29843__$1;
(statearr_29853_29877[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (11))){
var inst_29813 = (state_29843[(10)]);
var inst_29832 = (state_29843[(2)]);
var tmp29851 = inst_29813;
var inst_29813__$1 = tmp29851;
var state_29843__$1 = (function (){var statearr_29854 = state_29843;
(statearr_29854[(11)] = inst_29832);

(statearr_29854[(10)] = inst_29813__$1);

return statearr_29854;
})();
var statearr_29855_29878 = state_29843__$1;
(statearr_29855_29878[(2)] = null);

(statearr_29855_29878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (9))){
var inst_29823 = (state_29843[(8)]);
var state_29843__$1 = state_29843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29843__$1,(11),out,inst_29823);
} else {
if((state_val_29844 === (5))){
var inst_29837 = cljs.core.async.close_BANG_.call(null,out);
var state_29843__$1 = state_29843;
var statearr_29856_29879 = state_29843__$1;
(statearr_29856_29879[(2)] = inst_29837);

(statearr_29856_29879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (10))){
var inst_29835 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29857_29880 = state_29843__$1;
(statearr_29857_29880[(2)] = inst_29835);

(statearr_29857_29880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (8))){
var inst_29822 = (state_29843[(7)]);
var inst_29823 = (state_29843[(8)]);
var inst_29813 = (state_29843[(10)]);
var inst_29824 = (state_29843[(9)]);
var inst_29827 = (function (){var cs = inst_29813;
var vec__29818 = inst_29822;
var v = inst_29823;
var c = inst_29824;
return ((function (cs,vec__29818,v,c,inst_29822,inst_29823,inst_29813,inst_29824,state_val_29844,c__27751__auto___29871,out){
return (function (p1__29808_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29808_SHARP_);
});
;})(cs,vec__29818,v,c,inst_29822,inst_29823,inst_29813,inst_29824,state_val_29844,c__27751__auto___29871,out))
})();
var inst_29828 = cljs.core.filterv.call(null,inst_29827,inst_29813);
var inst_29813__$1 = inst_29828;
var state_29843__$1 = (function (){var statearr_29858 = state_29843;
(statearr_29858[(10)] = inst_29813__$1);

return statearr_29858;
})();
var statearr_29859_29881 = state_29843__$1;
(statearr_29859_29881[(2)] = null);

(statearr_29859_29881[(1)] = (2));


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
});})(c__27751__auto___29871,out))
;
return ((function (switch__27639__auto__,c__27751__auto___29871,out){
return (function() {
var cljs$core$async$state_machine__27640__auto__ = null;
var cljs$core$async$state_machine__27640__auto____0 = (function (){
var statearr_29863 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29863[(0)] = cljs$core$async$state_machine__27640__auto__);

(statearr_29863[(1)] = (1));

return statearr_29863;
});
var cljs$core$async$state_machine__27640__auto____1 = (function (state_29843){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_29843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e29864){if((e29864 instanceof Object)){
var ex__27643__auto__ = e29864;
var statearr_29865_29882 = state_29843;
(statearr_29865_29882[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29883 = state_29843;
state_29843 = G__29883;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$state_machine__27640__auto__ = function(state_29843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27640__auto____1.call(this,state_29843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27640__auto____0;
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27640__auto____1;
return cljs$core$async$state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto___29871,out))
})();
var state__27753__auto__ = (function (){var statearr_29866 = f__27752__auto__.call(null);
(statearr_29866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___29871);

return statearr_29866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto___29871,out))
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
var args29884 = [];
var len__23653__auto___29933 = arguments.length;
var i__23654__auto___29934 = (0);
while(true){
if((i__23654__auto___29934 < len__23653__auto___29933)){
args29884.push((arguments[i__23654__auto___29934]));

var G__29935 = (i__23654__auto___29934 + (1));
i__23654__auto___29934 = G__29935;
continue;
} else {
}
break;
}

var G__29886 = args29884.length;
switch (G__29886) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29884.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27751__auto___29937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto___29937,out){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto___29937,out){
return (function (state_29910){
var state_val_29911 = (state_29910[(1)]);
if((state_val_29911 === (7))){
var inst_29892 = (state_29910[(7)]);
var inst_29892__$1 = (state_29910[(2)]);
var inst_29893 = (inst_29892__$1 == null);
var inst_29894 = cljs.core.not.call(null,inst_29893);
var state_29910__$1 = (function (){var statearr_29912 = state_29910;
(statearr_29912[(7)] = inst_29892__$1);

return statearr_29912;
})();
if(inst_29894){
var statearr_29913_29938 = state_29910__$1;
(statearr_29913_29938[(1)] = (8));

} else {
var statearr_29914_29939 = state_29910__$1;
(statearr_29914_29939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (1))){
var inst_29887 = (0);
var state_29910__$1 = (function (){var statearr_29915 = state_29910;
(statearr_29915[(8)] = inst_29887);

return statearr_29915;
})();
var statearr_29916_29940 = state_29910__$1;
(statearr_29916_29940[(2)] = null);

(statearr_29916_29940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (4))){
var state_29910__$1 = state_29910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29910__$1,(7),ch);
} else {
if((state_val_29911 === (6))){
var inst_29905 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29917_29941 = state_29910__$1;
(statearr_29917_29941[(2)] = inst_29905);

(statearr_29917_29941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (3))){
var inst_29907 = (state_29910[(2)]);
var inst_29908 = cljs.core.async.close_BANG_.call(null,out);
var state_29910__$1 = (function (){var statearr_29918 = state_29910;
(statearr_29918[(9)] = inst_29907);

return statearr_29918;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29910__$1,inst_29908);
} else {
if((state_val_29911 === (2))){
var inst_29887 = (state_29910[(8)]);
var inst_29889 = (inst_29887 < n);
var state_29910__$1 = state_29910;
if(cljs.core.truth_(inst_29889)){
var statearr_29919_29942 = state_29910__$1;
(statearr_29919_29942[(1)] = (4));

} else {
var statearr_29920_29943 = state_29910__$1;
(statearr_29920_29943[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (11))){
var inst_29887 = (state_29910[(8)]);
var inst_29897 = (state_29910[(2)]);
var inst_29898 = (inst_29887 + (1));
var inst_29887__$1 = inst_29898;
var state_29910__$1 = (function (){var statearr_29921 = state_29910;
(statearr_29921[(8)] = inst_29887__$1);

(statearr_29921[(10)] = inst_29897);

return statearr_29921;
})();
var statearr_29922_29944 = state_29910__$1;
(statearr_29922_29944[(2)] = null);

(statearr_29922_29944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (9))){
var state_29910__$1 = state_29910;
var statearr_29923_29945 = state_29910__$1;
(statearr_29923_29945[(2)] = null);

(statearr_29923_29945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (5))){
var state_29910__$1 = state_29910;
var statearr_29924_29946 = state_29910__$1;
(statearr_29924_29946[(2)] = null);

(statearr_29924_29946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (10))){
var inst_29902 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29925_29947 = state_29910__$1;
(statearr_29925_29947[(2)] = inst_29902);

(statearr_29925_29947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (8))){
var inst_29892 = (state_29910[(7)]);
var state_29910__$1 = state_29910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29910__$1,(11),out,inst_29892);
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
});})(c__27751__auto___29937,out))
;
return ((function (switch__27639__auto__,c__27751__auto___29937,out){
return (function() {
var cljs$core$async$state_machine__27640__auto__ = null;
var cljs$core$async$state_machine__27640__auto____0 = (function (){
var statearr_29929 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29929[(0)] = cljs$core$async$state_machine__27640__auto__);

(statearr_29929[(1)] = (1));

return statearr_29929;
});
var cljs$core$async$state_machine__27640__auto____1 = (function (state_29910){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_29910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e29930){if((e29930 instanceof Object)){
var ex__27643__auto__ = e29930;
var statearr_29931_29948 = state_29910;
(statearr_29931_29948[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29949 = state_29910;
state_29910 = G__29949;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$state_machine__27640__auto__ = function(state_29910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27640__auto____1.call(this,state_29910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27640__auto____0;
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27640__auto____1;
return cljs$core$async$state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto___29937,out))
})();
var state__27753__auto__ = (function (){var statearr_29932 = f__27752__auto__.call(null);
(statearr_29932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___29937);

return statearr_29932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto___29937,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29957 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29957 = (function (map_LT_,f,ch,meta29958){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29958 = meta29958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29959,meta29958__$1){
var self__ = this;
var _29959__$1 = this;
return (new cljs.core.async.t_cljs$core$async29957(self__.map_LT_,self__.f,self__.ch,meta29958__$1));
});

cljs.core.async.t_cljs$core$async29957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29959){
var self__ = this;
var _29959__$1 = this;
return self__.meta29958;
});

cljs.core.async.t_cljs$core$async29957.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29957.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29957.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29957.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29957.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29960 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29960 = (function (map_LT_,f,ch,meta29958,_,fn1,meta29961){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29958 = meta29958;
this._ = _;
this.fn1 = fn1;
this.meta29961 = meta29961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29962,meta29961__$1){
var self__ = this;
var _29962__$1 = this;
return (new cljs.core.async.t_cljs$core$async29960(self__.map_LT_,self__.f,self__.ch,self__.meta29958,self__._,self__.fn1,meta29961__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29962){
var self__ = this;
var _29962__$1 = this;
return self__.meta29961;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29950_SHARP_){
return f1.call(null,(((p1__29950_SHARP_ == null))?null:self__.f.call(null,p1__29950_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29960.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29958","meta29958",-2074932819,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29957","cljs.core.async/t_cljs$core$async29957",1375570553,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29961","meta29961",-1616183060,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29960.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29960";

cljs.core.async.t_cljs$core$async29960.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async29960");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29960 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29960(map_LT___$1,f__$1,ch__$1,meta29958__$1,___$2,fn1__$1,meta29961){
return (new cljs.core.async.t_cljs$core$async29960(map_LT___$1,f__$1,ch__$1,meta29958__$1,___$2,fn1__$1,meta29961));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29960(self__.map_LT_,self__.f,self__.ch,self__.meta29958,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__22566__auto__ = ret;
if(cljs.core.truth_(and__22566__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__22566__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29957.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29957.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29958","meta29958",-2074932819,null)], null);
});

cljs.core.async.t_cljs$core$async29957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29957";

cljs.core.async.t_cljs$core$async29957.cljs$lang$ctorPrWriter = (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async29957");
});

cljs.core.async.__GT_t_cljs$core$async29957 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29957(map_LT___$1,f__$1,ch__$1,meta29958){
return (new cljs.core.async.t_cljs$core$async29957(map_LT___$1,f__$1,ch__$1,meta29958));
});

}

return (new cljs.core.async.t_cljs$core$async29957(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29966 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29966 = (function (map_GT_,f,ch,meta29967){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29967 = meta29967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29968,meta29967__$1){
var self__ = this;
var _29968__$1 = this;
return (new cljs.core.async.t_cljs$core$async29966(self__.map_GT_,self__.f,self__.ch,meta29967__$1));
});

cljs.core.async.t_cljs$core$async29966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29968){
var self__ = this;
var _29968__$1 = this;
return self__.meta29967;
});

cljs.core.async.t_cljs$core$async29966.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29966.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29966.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29966.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29966.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29966.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29967","meta29967",-1752258090,null)], null);
});

cljs.core.async.t_cljs$core$async29966.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29966";

cljs.core.async.t_cljs$core$async29966.cljs$lang$ctorPrWriter = (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async29966");
});

cljs.core.async.__GT_t_cljs$core$async29966 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29966(map_GT___$1,f__$1,ch__$1,meta29967){
return (new cljs.core.async.t_cljs$core$async29966(map_GT___$1,f__$1,ch__$1,meta29967));
});

}

return (new cljs.core.async.t_cljs$core$async29966(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29972 = (function (filter_GT_,p,ch,meta29973){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29973 = meta29973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29974,meta29973__$1){
var self__ = this;
var _29974__$1 = this;
return (new cljs.core.async.t_cljs$core$async29972(self__.filter_GT_,self__.p,self__.ch,meta29973__$1));
});

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29974){
var self__ = this;
var _29974__$1 = this;
return self__.meta29973;
});

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29973","meta29973",-900676906,null)], null);
});

cljs.core.async.t_cljs$core$async29972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29972";

cljs.core.async.t_cljs$core$async29972.cljs$lang$ctorPrWriter = (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async29972");
});

cljs.core.async.__GT_t_cljs$core$async29972 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29972(filter_GT___$1,p__$1,ch__$1,meta29973){
return (new cljs.core.async.t_cljs$core$async29972(filter_GT___$1,p__$1,ch__$1,meta29973));
});

}

return (new cljs.core.async.t_cljs$core$async29972(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29975 = [];
var len__23653__auto___30019 = arguments.length;
var i__23654__auto___30020 = (0);
while(true){
if((i__23654__auto___30020 < len__23653__auto___30019)){
args29975.push((arguments[i__23654__auto___30020]));

var G__30021 = (i__23654__auto___30020 + (1));
i__23654__auto___30020 = G__30021;
continue;
} else {
}
break;
}

var G__29977 = args29975.length;
switch (G__29977) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29975.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27751__auto___30023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto___30023,out){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto___30023,out){
return (function (state_29998){
var state_val_29999 = (state_29998[(1)]);
if((state_val_29999 === (7))){
var inst_29994 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
var statearr_30000_30024 = state_29998__$1;
(statearr_30000_30024[(2)] = inst_29994);

(statearr_30000_30024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (1))){
var state_29998__$1 = state_29998;
var statearr_30001_30025 = state_29998__$1;
(statearr_30001_30025[(2)] = null);

(statearr_30001_30025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (4))){
var inst_29980 = (state_29998[(7)]);
var inst_29980__$1 = (state_29998[(2)]);
var inst_29981 = (inst_29980__$1 == null);
var state_29998__$1 = (function (){var statearr_30002 = state_29998;
(statearr_30002[(7)] = inst_29980__$1);

return statearr_30002;
})();
if(cljs.core.truth_(inst_29981)){
var statearr_30003_30026 = state_29998__$1;
(statearr_30003_30026[(1)] = (5));

} else {
var statearr_30004_30027 = state_29998__$1;
(statearr_30004_30027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (6))){
var inst_29980 = (state_29998[(7)]);
var inst_29985 = p.call(null,inst_29980);
var state_29998__$1 = state_29998;
if(cljs.core.truth_(inst_29985)){
var statearr_30005_30028 = state_29998__$1;
(statearr_30005_30028[(1)] = (8));

} else {
var statearr_30006_30029 = state_29998__$1;
(statearr_30006_30029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (3))){
var inst_29996 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29998__$1,inst_29996);
} else {
if((state_val_29999 === (2))){
var state_29998__$1 = state_29998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29998__$1,(4),ch);
} else {
if((state_val_29999 === (11))){
var inst_29988 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
var statearr_30007_30030 = state_29998__$1;
(statearr_30007_30030[(2)] = inst_29988);

(statearr_30007_30030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (9))){
var state_29998__$1 = state_29998;
var statearr_30008_30031 = state_29998__$1;
(statearr_30008_30031[(2)] = null);

(statearr_30008_30031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (5))){
var inst_29983 = cljs.core.async.close_BANG_.call(null,out);
var state_29998__$1 = state_29998;
var statearr_30009_30032 = state_29998__$1;
(statearr_30009_30032[(2)] = inst_29983);

(statearr_30009_30032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (10))){
var inst_29991 = (state_29998[(2)]);
var state_29998__$1 = (function (){var statearr_30010 = state_29998;
(statearr_30010[(8)] = inst_29991);

return statearr_30010;
})();
var statearr_30011_30033 = state_29998__$1;
(statearr_30011_30033[(2)] = null);

(statearr_30011_30033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (8))){
var inst_29980 = (state_29998[(7)]);
var state_29998__$1 = state_29998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29998__$1,(11),out,inst_29980);
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
});})(c__27751__auto___30023,out))
;
return ((function (switch__27639__auto__,c__27751__auto___30023,out){
return (function() {
var cljs$core$async$state_machine__27640__auto__ = null;
var cljs$core$async$state_machine__27640__auto____0 = (function (){
var statearr_30015 = [null,null,null,null,null,null,null,null,null];
(statearr_30015[(0)] = cljs$core$async$state_machine__27640__auto__);

(statearr_30015[(1)] = (1));

return statearr_30015;
});
var cljs$core$async$state_machine__27640__auto____1 = (function (state_29998){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_29998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e30016){if((e30016 instanceof Object)){
var ex__27643__auto__ = e30016;
var statearr_30017_30034 = state_29998;
(statearr_30017_30034[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30035 = state_29998;
state_29998 = G__30035;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$state_machine__27640__auto__ = function(state_29998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27640__auto____1.call(this,state_29998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27640__auto____0;
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27640__auto____1;
return cljs$core$async$state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto___30023,out))
})();
var state__27753__auto__ = (function (){var statearr_30018 = f__27752__auto__.call(null);
(statearr_30018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___30023);

return statearr_30018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto___30023,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30036 = [];
var len__23653__auto___30039 = arguments.length;
var i__23654__auto___30040 = (0);
while(true){
if((i__23654__auto___30040 < len__23653__auto___30039)){
args30036.push((arguments[i__23654__auto___30040]));

var G__30041 = (i__23654__auto___30040 + (1));
i__23654__auto___30040 = G__30041;
continue;
} else {
}
break;
}

var G__30038 = args30036.length;
switch (G__30038) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30036.length)].join('')));

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
var c__27751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto__){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto__){
return (function (state_30208){
var state_val_30209 = (state_30208[(1)]);
if((state_val_30209 === (7))){
var inst_30204 = (state_30208[(2)]);
var state_30208__$1 = state_30208;
var statearr_30210_30251 = state_30208__$1;
(statearr_30210_30251[(2)] = inst_30204);

(statearr_30210_30251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (20))){
var inst_30174 = (state_30208[(7)]);
var inst_30185 = (state_30208[(2)]);
var inst_30186 = cljs.core.next.call(null,inst_30174);
var inst_30160 = inst_30186;
var inst_30161 = null;
var inst_30162 = (0);
var inst_30163 = (0);
var state_30208__$1 = (function (){var statearr_30211 = state_30208;
(statearr_30211[(8)] = inst_30163);

(statearr_30211[(9)] = inst_30161);

(statearr_30211[(10)] = inst_30160);

(statearr_30211[(11)] = inst_30185);

(statearr_30211[(12)] = inst_30162);

return statearr_30211;
})();
var statearr_30212_30252 = state_30208__$1;
(statearr_30212_30252[(2)] = null);

(statearr_30212_30252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (1))){
var state_30208__$1 = state_30208;
var statearr_30213_30253 = state_30208__$1;
(statearr_30213_30253[(2)] = null);

(statearr_30213_30253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (4))){
var inst_30149 = (state_30208[(13)]);
var inst_30149__$1 = (state_30208[(2)]);
var inst_30150 = (inst_30149__$1 == null);
var state_30208__$1 = (function (){var statearr_30214 = state_30208;
(statearr_30214[(13)] = inst_30149__$1);

return statearr_30214;
})();
if(cljs.core.truth_(inst_30150)){
var statearr_30215_30254 = state_30208__$1;
(statearr_30215_30254[(1)] = (5));

} else {
var statearr_30216_30255 = state_30208__$1;
(statearr_30216_30255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (15))){
var state_30208__$1 = state_30208;
var statearr_30220_30256 = state_30208__$1;
(statearr_30220_30256[(2)] = null);

(statearr_30220_30256[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (21))){
var state_30208__$1 = state_30208;
var statearr_30221_30257 = state_30208__$1;
(statearr_30221_30257[(2)] = null);

(statearr_30221_30257[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (13))){
var inst_30163 = (state_30208[(8)]);
var inst_30161 = (state_30208[(9)]);
var inst_30160 = (state_30208[(10)]);
var inst_30162 = (state_30208[(12)]);
var inst_30170 = (state_30208[(2)]);
var inst_30171 = (inst_30163 + (1));
var tmp30217 = inst_30161;
var tmp30218 = inst_30160;
var tmp30219 = inst_30162;
var inst_30160__$1 = tmp30218;
var inst_30161__$1 = tmp30217;
var inst_30162__$1 = tmp30219;
var inst_30163__$1 = inst_30171;
var state_30208__$1 = (function (){var statearr_30222 = state_30208;
(statearr_30222[(14)] = inst_30170);

(statearr_30222[(8)] = inst_30163__$1);

(statearr_30222[(9)] = inst_30161__$1);

(statearr_30222[(10)] = inst_30160__$1);

(statearr_30222[(12)] = inst_30162__$1);

return statearr_30222;
})();
var statearr_30223_30258 = state_30208__$1;
(statearr_30223_30258[(2)] = null);

(statearr_30223_30258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (22))){
var state_30208__$1 = state_30208;
var statearr_30224_30259 = state_30208__$1;
(statearr_30224_30259[(2)] = null);

(statearr_30224_30259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (6))){
var inst_30149 = (state_30208[(13)]);
var inst_30158 = f.call(null,inst_30149);
var inst_30159 = cljs.core.seq.call(null,inst_30158);
var inst_30160 = inst_30159;
var inst_30161 = null;
var inst_30162 = (0);
var inst_30163 = (0);
var state_30208__$1 = (function (){var statearr_30225 = state_30208;
(statearr_30225[(8)] = inst_30163);

(statearr_30225[(9)] = inst_30161);

(statearr_30225[(10)] = inst_30160);

(statearr_30225[(12)] = inst_30162);

return statearr_30225;
})();
var statearr_30226_30260 = state_30208__$1;
(statearr_30226_30260[(2)] = null);

(statearr_30226_30260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (17))){
var inst_30174 = (state_30208[(7)]);
var inst_30178 = cljs.core.chunk_first.call(null,inst_30174);
var inst_30179 = cljs.core.chunk_rest.call(null,inst_30174);
var inst_30180 = cljs.core.count.call(null,inst_30178);
var inst_30160 = inst_30179;
var inst_30161 = inst_30178;
var inst_30162 = inst_30180;
var inst_30163 = (0);
var state_30208__$1 = (function (){var statearr_30227 = state_30208;
(statearr_30227[(8)] = inst_30163);

(statearr_30227[(9)] = inst_30161);

(statearr_30227[(10)] = inst_30160);

(statearr_30227[(12)] = inst_30162);

return statearr_30227;
})();
var statearr_30228_30261 = state_30208__$1;
(statearr_30228_30261[(2)] = null);

(statearr_30228_30261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (3))){
var inst_30206 = (state_30208[(2)]);
var state_30208__$1 = state_30208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30208__$1,inst_30206);
} else {
if((state_val_30209 === (12))){
var inst_30194 = (state_30208[(2)]);
var state_30208__$1 = state_30208;
var statearr_30229_30262 = state_30208__$1;
(statearr_30229_30262[(2)] = inst_30194);

(statearr_30229_30262[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (2))){
var state_30208__$1 = state_30208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30208__$1,(4),in$);
} else {
if((state_val_30209 === (23))){
var inst_30202 = (state_30208[(2)]);
var state_30208__$1 = state_30208;
var statearr_30230_30263 = state_30208__$1;
(statearr_30230_30263[(2)] = inst_30202);

(statearr_30230_30263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (19))){
var inst_30189 = (state_30208[(2)]);
var state_30208__$1 = state_30208;
var statearr_30231_30264 = state_30208__$1;
(statearr_30231_30264[(2)] = inst_30189);

(statearr_30231_30264[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (11))){
var inst_30174 = (state_30208[(7)]);
var inst_30160 = (state_30208[(10)]);
var inst_30174__$1 = cljs.core.seq.call(null,inst_30160);
var state_30208__$1 = (function (){var statearr_30232 = state_30208;
(statearr_30232[(7)] = inst_30174__$1);

return statearr_30232;
})();
if(inst_30174__$1){
var statearr_30233_30265 = state_30208__$1;
(statearr_30233_30265[(1)] = (14));

} else {
var statearr_30234_30266 = state_30208__$1;
(statearr_30234_30266[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (9))){
var inst_30196 = (state_30208[(2)]);
var inst_30197 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30208__$1 = (function (){var statearr_30235 = state_30208;
(statearr_30235[(15)] = inst_30196);

return statearr_30235;
})();
if(cljs.core.truth_(inst_30197)){
var statearr_30236_30267 = state_30208__$1;
(statearr_30236_30267[(1)] = (21));

} else {
var statearr_30237_30268 = state_30208__$1;
(statearr_30237_30268[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (5))){
var inst_30152 = cljs.core.async.close_BANG_.call(null,out);
var state_30208__$1 = state_30208;
var statearr_30238_30269 = state_30208__$1;
(statearr_30238_30269[(2)] = inst_30152);

(statearr_30238_30269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (14))){
var inst_30174 = (state_30208[(7)]);
var inst_30176 = cljs.core.chunked_seq_QMARK_.call(null,inst_30174);
var state_30208__$1 = state_30208;
if(inst_30176){
var statearr_30239_30270 = state_30208__$1;
(statearr_30239_30270[(1)] = (17));

} else {
var statearr_30240_30271 = state_30208__$1;
(statearr_30240_30271[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (16))){
var inst_30192 = (state_30208[(2)]);
var state_30208__$1 = state_30208;
var statearr_30241_30272 = state_30208__$1;
(statearr_30241_30272[(2)] = inst_30192);

(statearr_30241_30272[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (10))){
var inst_30163 = (state_30208[(8)]);
var inst_30161 = (state_30208[(9)]);
var inst_30168 = cljs.core._nth.call(null,inst_30161,inst_30163);
var state_30208__$1 = state_30208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30208__$1,(13),out,inst_30168);
} else {
if((state_val_30209 === (18))){
var inst_30174 = (state_30208[(7)]);
var inst_30183 = cljs.core.first.call(null,inst_30174);
var state_30208__$1 = state_30208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30208__$1,(20),out,inst_30183);
} else {
if((state_val_30209 === (8))){
var inst_30163 = (state_30208[(8)]);
var inst_30162 = (state_30208[(12)]);
var inst_30165 = (inst_30163 < inst_30162);
var inst_30166 = inst_30165;
var state_30208__$1 = state_30208;
if(cljs.core.truth_(inst_30166)){
var statearr_30242_30273 = state_30208__$1;
(statearr_30242_30273[(1)] = (10));

} else {
var statearr_30243_30274 = state_30208__$1;
(statearr_30243_30274[(1)] = (11));

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
});})(c__27751__auto__))
;
return ((function (switch__27639__auto__,c__27751__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27640__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27640__auto____0 = (function (){
var statearr_30247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30247[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27640__auto__);

(statearr_30247[(1)] = (1));

return statearr_30247;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27640__auto____1 = (function (state_30208){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_30208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e30248){if((e30248 instanceof Object)){
var ex__27643__auto__ = e30248;
var statearr_30249_30275 = state_30208;
(statearr_30249_30275[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30276 = state_30208;
state_30208 = G__30276;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27640__auto__ = function(state_30208){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27640__auto____1.call(this,state_30208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27640__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27640__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto__))
})();
var state__27753__auto__ = (function (){var statearr_30250 = f__27752__auto__.call(null);
(statearr_30250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto__);

return statearr_30250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto__))
);

return c__27751__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30277 = [];
var len__23653__auto___30280 = arguments.length;
var i__23654__auto___30281 = (0);
while(true){
if((i__23654__auto___30281 < len__23653__auto___30280)){
args30277.push((arguments[i__23654__auto___30281]));

var G__30282 = (i__23654__auto___30281 + (1));
i__23654__auto___30281 = G__30282;
continue;
} else {
}
break;
}

var G__30279 = args30277.length;
switch (G__30279) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30277.length)].join('')));

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
var args30284 = [];
var len__23653__auto___30287 = arguments.length;
var i__23654__auto___30288 = (0);
while(true){
if((i__23654__auto___30288 < len__23653__auto___30287)){
args30284.push((arguments[i__23654__auto___30288]));

var G__30289 = (i__23654__auto___30288 + (1));
i__23654__auto___30288 = G__30289;
continue;
} else {
}
break;
}

var G__30286 = args30284.length;
switch (G__30286) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30284.length)].join('')));

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
var args30291 = [];
var len__23653__auto___30342 = arguments.length;
var i__23654__auto___30343 = (0);
while(true){
if((i__23654__auto___30343 < len__23653__auto___30342)){
args30291.push((arguments[i__23654__auto___30343]));

var G__30344 = (i__23654__auto___30343 + (1));
i__23654__auto___30343 = G__30344;
continue;
} else {
}
break;
}

var G__30293 = args30291.length;
switch (G__30293) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30291.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27751__auto___30346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto___30346,out){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto___30346,out){
return (function (state_30317){
var state_val_30318 = (state_30317[(1)]);
if((state_val_30318 === (7))){
var inst_30312 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
var statearr_30319_30347 = state_30317__$1;
(statearr_30319_30347[(2)] = inst_30312);

(statearr_30319_30347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (1))){
var inst_30294 = null;
var state_30317__$1 = (function (){var statearr_30320 = state_30317;
(statearr_30320[(7)] = inst_30294);

return statearr_30320;
})();
var statearr_30321_30348 = state_30317__$1;
(statearr_30321_30348[(2)] = null);

(statearr_30321_30348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (4))){
var inst_30297 = (state_30317[(8)]);
var inst_30297__$1 = (state_30317[(2)]);
var inst_30298 = (inst_30297__$1 == null);
var inst_30299 = cljs.core.not.call(null,inst_30298);
var state_30317__$1 = (function (){var statearr_30322 = state_30317;
(statearr_30322[(8)] = inst_30297__$1);

return statearr_30322;
})();
if(inst_30299){
var statearr_30323_30349 = state_30317__$1;
(statearr_30323_30349[(1)] = (5));

} else {
var statearr_30324_30350 = state_30317__$1;
(statearr_30324_30350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (6))){
var state_30317__$1 = state_30317;
var statearr_30325_30351 = state_30317__$1;
(statearr_30325_30351[(2)] = null);

(statearr_30325_30351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (3))){
var inst_30314 = (state_30317[(2)]);
var inst_30315 = cljs.core.async.close_BANG_.call(null,out);
var state_30317__$1 = (function (){var statearr_30326 = state_30317;
(statearr_30326[(9)] = inst_30314);

return statearr_30326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30317__$1,inst_30315);
} else {
if((state_val_30318 === (2))){
var state_30317__$1 = state_30317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30317__$1,(4),ch);
} else {
if((state_val_30318 === (11))){
var inst_30297 = (state_30317[(8)]);
var inst_30306 = (state_30317[(2)]);
var inst_30294 = inst_30297;
var state_30317__$1 = (function (){var statearr_30327 = state_30317;
(statearr_30327[(10)] = inst_30306);

(statearr_30327[(7)] = inst_30294);

return statearr_30327;
})();
var statearr_30328_30352 = state_30317__$1;
(statearr_30328_30352[(2)] = null);

(statearr_30328_30352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (9))){
var inst_30297 = (state_30317[(8)]);
var state_30317__$1 = state_30317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30317__$1,(11),out,inst_30297);
} else {
if((state_val_30318 === (5))){
var inst_30297 = (state_30317[(8)]);
var inst_30294 = (state_30317[(7)]);
var inst_30301 = cljs.core._EQ_.call(null,inst_30297,inst_30294);
var state_30317__$1 = state_30317;
if(inst_30301){
var statearr_30330_30353 = state_30317__$1;
(statearr_30330_30353[(1)] = (8));

} else {
var statearr_30331_30354 = state_30317__$1;
(statearr_30331_30354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (10))){
var inst_30309 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
var statearr_30332_30355 = state_30317__$1;
(statearr_30332_30355[(2)] = inst_30309);

(statearr_30332_30355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (8))){
var inst_30294 = (state_30317[(7)]);
var tmp30329 = inst_30294;
var inst_30294__$1 = tmp30329;
var state_30317__$1 = (function (){var statearr_30333 = state_30317;
(statearr_30333[(7)] = inst_30294__$1);

return statearr_30333;
})();
var statearr_30334_30356 = state_30317__$1;
(statearr_30334_30356[(2)] = null);

(statearr_30334_30356[(1)] = (2));


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
});})(c__27751__auto___30346,out))
;
return ((function (switch__27639__auto__,c__27751__auto___30346,out){
return (function() {
var cljs$core$async$state_machine__27640__auto__ = null;
var cljs$core$async$state_machine__27640__auto____0 = (function (){
var statearr_30338 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30338[(0)] = cljs$core$async$state_machine__27640__auto__);

(statearr_30338[(1)] = (1));

return statearr_30338;
});
var cljs$core$async$state_machine__27640__auto____1 = (function (state_30317){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_30317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e30339){if((e30339 instanceof Object)){
var ex__27643__auto__ = e30339;
var statearr_30340_30357 = state_30317;
(statearr_30340_30357[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30358 = state_30317;
state_30317 = G__30358;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$state_machine__27640__auto__ = function(state_30317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27640__auto____1.call(this,state_30317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27640__auto____0;
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27640__auto____1;
return cljs$core$async$state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto___30346,out))
})();
var state__27753__auto__ = (function (){var statearr_30341 = f__27752__auto__.call(null);
(statearr_30341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___30346);

return statearr_30341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto___30346,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30359 = [];
var len__23653__auto___30429 = arguments.length;
var i__23654__auto___30430 = (0);
while(true){
if((i__23654__auto___30430 < len__23653__auto___30429)){
args30359.push((arguments[i__23654__auto___30430]));

var G__30431 = (i__23654__auto___30430 + (1));
i__23654__auto___30430 = G__30431;
continue;
} else {
}
break;
}

var G__30361 = args30359.length;
switch (G__30361) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30359.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27751__auto___30433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto___30433,out){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto___30433,out){
return (function (state_30399){
var state_val_30400 = (state_30399[(1)]);
if((state_val_30400 === (7))){
var inst_30395 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
var statearr_30401_30434 = state_30399__$1;
(statearr_30401_30434[(2)] = inst_30395);

(statearr_30401_30434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (1))){
var inst_30362 = (new Array(n));
var inst_30363 = inst_30362;
var inst_30364 = (0);
var state_30399__$1 = (function (){var statearr_30402 = state_30399;
(statearr_30402[(7)] = inst_30363);

(statearr_30402[(8)] = inst_30364);

return statearr_30402;
})();
var statearr_30403_30435 = state_30399__$1;
(statearr_30403_30435[(2)] = null);

(statearr_30403_30435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (4))){
var inst_30367 = (state_30399[(9)]);
var inst_30367__$1 = (state_30399[(2)]);
var inst_30368 = (inst_30367__$1 == null);
var inst_30369 = cljs.core.not.call(null,inst_30368);
var state_30399__$1 = (function (){var statearr_30404 = state_30399;
(statearr_30404[(9)] = inst_30367__$1);

return statearr_30404;
})();
if(inst_30369){
var statearr_30405_30436 = state_30399__$1;
(statearr_30405_30436[(1)] = (5));

} else {
var statearr_30406_30437 = state_30399__$1;
(statearr_30406_30437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (15))){
var inst_30389 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
var statearr_30407_30438 = state_30399__$1;
(statearr_30407_30438[(2)] = inst_30389);

(statearr_30407_30438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (13))){
var state_30399__$1 = state_30399;
var statearr_30408_30439 = state_30399__$1;
(statearr_30408_30439[(2)] = null);

(statearr_30408_30439[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (6))){
var inst_30364 = (state_30399[(8)]);
var inst_30385 = (inst_30364 > (0));
var state_30399__$1 = state_30399;
if(cljs.core.truth_(inst_30385)){
var statearr_30409_30440 = state_30399__$1;
(statearr_30409_30440[(1)] = (12));

} else {
var statearr_30410_30441 = state_30399__$1;
(statearr_30410_30441[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (3))){
var inst_30397 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30399__$1,inst_30397);
} else {
if((state_val_30400 === (12))){
var inst_30363 = (state_30399[(7)]);
var inst_30387 = cljs.core.vec.call(null,inst_30363);
var state_30399__$1 = state_30399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30399__$1,(15),out,inst_30387);
} else {
if((state_val_30400 === (2))){
var state_30399__$1 = state_30399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30399__$1,(4),ch);
} else {
if((state_val_30400 === (11))){
var inst_30379 = (state_30399[(2)]);
var inst_30380 = (new Array(n));
var inst_30363 = inst_30380;
var inst_30364 = (0);
var state_30399__$1 = (function (){var statearr_30411 = state_30399;
(statearr_30411[(10)] = inst_30379);

(statearr_30411[(7)] = inst_30363);

(statearr_30411[(8)] = inst_30364);

return statearr_30411;
})();
var statearr_30412_30442 = state_30399__$1;
(statearr_30412_30442[(2)] = null);

(statearr_30412_30442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (9))){
var inst_30363 = (state_30399[(7)]);
var inst_30377 = cljs.core.vec.call(null,inst_30363);
var state_30399__$1 = state_30399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30399__$1,(11),out,inst_30377);
} else {
if((state_val_30400 === (5))){
var inst_30372 = (state_30399[(11)]);
var inst_30367 = (state_30399[(9)]);
var inst_30363 = (state_30399[(7)]);
var inst_30364 = (state_30399[(8)]);
var inst_30371 = (inst_30363[inst_30364] = inst_30367);
var inst_30372__$1 = (inst_30364 + (1));
var inst_30373 = (inst_30372__$1 < n);
var state_30399__$1 = (function (){var statearr_30413 = state_30399;
(statearr_30413[(11)] = inst_30372__$1);

(statearr_30413[(12)] = inst_30371);

return statearr_30413;
})();
if(cljs.core.truth_(inst_30373)){
var statearr_30414_30443 = state_30399__$1;
(statearr_30414_30443[(1)] = (8));

} else {
var statearr_30415_30444 = state_30399__$1;
(statearr_30415_30444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (14))){
var inst_30392 = (state_30399[(2)]);
var inst_30393 = cljs.core.async.close_BANG_.call(null,out);
var state_30399__$1 = (function (){var statearr_30417 = state_30399;
(statearr_30417[(13)] = inst_30392);

return statearr_30417;
})();
var statearr_30418_30445 = state_30399__$1;
(statearr_30418_30445[(2)] = inst_30393);

(statearr_30418_30445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (10))){
var inst_30383 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
var statearr_30419_30446 = state_30399__$1;
(statearr_30419_30446[(2)] = inst_30383);

(statearr_30419_30446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (8))){
var inst_30372 = (state_30399[(11)]);
var inst_30363 = (state_30399[(7)]);
var tmp30416 = inst_30363;
var inst_30363__$1 = tmp30416;
var inst_30364 = inst_30372;
var state_30399__$1 = (function (){var statearr_30420 = state_30399;
(statearr_30420[(7)] = inst_30363__$1);

(statearr_30420[(8)] = inst_30364);

return statearr_30420;
})();
var statearr_30421_30447 = state_30399__$1;
(statearr_30421_30447[(2)] = null);

(statearr_30421_30447[(1)] = (2));


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
});})(c__27751__auto___30433,out))
;
return ((function (switch__27639__auto__,c__27751__auto___30433,out){
return (function() {
var cljs$core$async$state_machine__27640__auto__ = null;
var cljs$core$async$state_machine__27640__auto____0 = (function (){
var statearr_30425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30425[(0)] = cljs$core$async$state_machine__27640__auto__);

(statearr_30425[(1)] = (1));

return statearr_30425;
});
var cljs$core$async$state_machine__27640__auto____1 = (function (state_30399){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_30399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e30426){if((e30426 instanceof Object)){
var ex__27643__auto__ = e30426;
var statearr_30427_30448 = state_30399;
(statearr_30427_30448[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30449 = state_30399;
state_30399 = G__30449;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$state_machine__27640__auto__ = function(state_30399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27640__auto____1.call(this,state_30399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27640__auto____0;
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27640__auto____1;
return cljs$core$async$state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto___30433,out))
})();
var state__27753__auto__ = (function (){var statearr_30428 = f__27752__auto__.call(null);
(statearr_30428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___30433);

return statearr_30428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto___30433,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30450 = [];
var len__23653__auto___30524 = arguments.length;
var i__23654__auto___30525 = (0);
while(true){
if((i__23654__auto___30525 < len__23653__auto___30524)){
args30450.push((arguments[i__23654__auto___30525]));

var G__30526 = (i__23654__auto___30525 + (1));
i__23654__auto___30525 = G__30526;
continue;
} else {
}
break;
}

var G__30452 = args30450.length;
switch (G__30452) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30450.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27751__auto___30528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto___30528,out){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto___30528,out){
return (function (state_30494){
var state_val_30495 = (state_30494[(1)]);
if((state_val_30495 === (7))){
var inst_30490 = (state_30494[(2)]);
var state_30494__$1 = state_30494;
var statearr_30496_30529 = state_30494__$1;
(statearr_30496_30529[(2)] = inst_30490);

(statearr_30496_30529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30495 === (1))){
var inst_30453 = [];
var inst_30454 = inst_30453;
var inst_30455 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30494__$1 = (function (){var statearr_30497 = state_30494;
(statearr_30497[(7)] = inst_30455);

(statearr_30497[(8)] = inst_30454);

return statearr_30497;
})();
var statearr_30498_30530 = state_30494__$1;
(statearr_30498_30530[(2)] = null);

(statearr_30498_30530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30495 === (4))){
var inst_30458 = (state_30494[(9)]);
var inst_30458__$1 = (state_30494[(2)]);
var inst_30459 = (inst_30458__$1 == null);
var inst_30460 = cljs.core.not.call(null,inst_30459);
var state_30494__$1 = (function (){var statearr_30499 = state_30494;
(statearr_30499[(9)] = inst_30458__$1);

return statearr_30499;
})();
if(inst_30460){
var statearr_30500_30531 = state_30494__$1;
(statearr_30500_30531[(1)] = (5));

} else {
var statearr_30501_30532 = state_30494__$1;
(statearr_30501_30532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30495 === (15))){
var inst_30484 = (state_30494[(2)]);
var state_30494__$1 = state_30494;
var statearr_30502_30533 = state_30494__$1;
(statearr_30502_30533[(2)] = inst_30484);

(statearr_30502_30533[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30495 === (13))){
var state_30494__$1 = state_30494;
var statearr_30503_30534 = state_30494__$1;
(statearr_30503_30534[(2)] = null);

(statearr_30503_30534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30495 === (6))){
var inst_30454 = (state_30494[(8)]);
var inst_30479 = inst_30454.length;
var inst_30480 = (inst_30479 > (0));
var state_30494__$1 = state_30494;
if(cljs.core.truth_(inst_30480)){
var statearr_30504_30535 = state_30494__$1;
(statearr_30504_30535[(1)] = (12));

} else {
var statearr_30505_30536 = state_30494__$1;
(statearr_30505_30536[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30495 === (3))){
var inst_30492 = (state_30494[(2)]);
var state_30494__$1 = state_30494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30494__$1,inst_30492);
} else {
if((state_val_30495 === (12))){
var inst_30454 = (state_30494[(8)]);
var inst_30482 = cljs.core.vec.call(null,inst_30454);
var state_30494__$1 = state_30494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30494__$1,(15),out,inst_30482);
} else {
if((state_val_30495 === (2))){
var state_30494__$1 = state_30494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30494__$1,(4),ch);
} else {
if((state_val_30495 === (11))){
var inst_30458 = (state_30494[(9)]);
var inst_30462 = (state_30494[(10)]);
var inst_30472 = (state_30494[(2)]);
var inst_30473 = [];
var inst_30474 = inst_30473.push(inst_30458);
var inst_30454 = inst_30473;
var inst_30455 = inst_30462;
var state_30494__$1 = (function (){var statearr_30506 = state_30494;
(statearr_30506[(11)] = inst_30474);

(statearr_30506[(12)] = inst_30472);

(statearr_30506[(7)] = inst_30455);

(statearr_30506[(8)] = inst_30454);

return statearr_30506;
})();
var statearr_30507_30537 = state_30494__$1;
(statearr_30507_30537[(2)] = null);

(statearr_30507_30537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30495 === (9))){
var inst_30454 = (state_30494[(8)]);
var inst_30470 = cljs.core.vec.call(null,inst_30454);
var state_30494__$1 = state_30494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30494__$1,(11),out,inst_30470);
} else {
if((state_val_30495 === (5))){
var inst_30458 = (state_30494[(9)]);
var inst_30462 = (state_30494[(10)]);
var inst_30455 = (state_30494[(7)]);
var inst_30462__$1 = f.call(null,inst_30458);
var inst_30463 = cljs.core._EQ_.call(null,inst_30462__$1,inst_30455);
var inst_30464 = cljs.core.keyword_identical_QMARK_.call(null,inst_30455,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30465 = (inst_30463) || (inst_30464);
var state_30494__$1 = (function (){var statearr_30508 = state_30494;
(statearr_30508[(10)] = inst_30462__$1);

return statearr_30508;
})();
if(cljs.core.truth_(inst_30465)){
var statearr_30509_30538 = state_30494__$1;
(statearr_30509_30538[(1)] = (8));

} else {
var statearr_30510_30539 = state_30494__$1;
(statearr_30510_30539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30495 === (14))){
var inst_30487 = (state_30494[(2)]);
var inst_30488 = cljs.core.async.close_BANG_.call(null,out);
var state_30494__$1 = (function (){var statearr_30512 = state_30494;
(statearr_30512[(13)] = inst_30487);

return statearr_30512;
})();
var statearr_30513_30540 = state_30494__$1;
(statearr_30513_30540[(2)] = inst_30488);

(statearr_30513_30540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30495 === (10))){
var inst_30477 = (state_30494[(2)]);
var state_30494__$1 = state_30494;
var statearr_30514_30541 = state_30494__$1;
(statearr_30514_30541[(2)] = inst_30477);

(statearr_30514_30541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30495 === (8))){
var inst_30458 = (state_30494[(9)]);
var inst_30462 = (state_30494[(10)]);
var inst_30454 = (state_30494[(8)]);
var inst_30467 = inst_30454.push(inst_30458);
var tmp30511 = inst_30454;
var inst_30454__$1 = tmp30511;
var inst_30455 = inst_30462;
var state_30494__$1 = (function (){var statearr_30515 = state_30494;
(statearr_30515[(14)] = inst_30467);

(statearr_30515[(7)] = inst_30455);

(statearr_30515[(8)] = inst_30454__$1);

return statearr_30515;
})();
var statearr_30516_30542 = state_30494__$1;
(statearr_30516_30542[(2)] = null);

(statearr_30516_30542[(1)] = (2));


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
});})(c__27751__auto___30528,out))
;
return ((function (switch__27639__auto__,c__27751__auto___30528,out){
return (function() {
var cljs$core$async$state_machine__27640__auto__ = null;
var cljs$core$async$state_machine__27640__auto____0 = (function (){
var statearr_30520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30520[(0)] = cljs$core$async$state_machine__27640__auto__);

(statearr_30520[(1)] = (1));

return statearr_30520;
});
var cljs$core$async$state_machine__27640__auto____1 = (function (state_30494){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_30494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e30521){if((e30521 instanceof Object)){
var ex__27643__auto__ = e30521;
var statearr_30522_30543 = state_30494;
(statearr_30522_30543[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30544 = state_30494;
state_30494 = G__30544;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs$core$async$state_machine__27640__auto__ = function(state_30494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27640__auto____1.call(this,state_30494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27640__auto____0;
cljs$core$async$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27640__auto____1;
return cljs$core$async$state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto___30528,out))
})();
var state__27753__auto__ = (function (){var statearr_30523 = f__27752__auto__.call(null);
(statearr_30523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___30528);

return statearr_30523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto___30528,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1474484609013