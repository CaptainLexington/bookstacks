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
var args27767 = [];
var len__23653__auto___27773 = arguments.length;
var i__23654__auto___27774 = (0);
while(true){
if((i__23654__auto___27774 < len__23653__auto___27773)){
args27767.push((arguments[i__23654__auto___27774]));

var G__27775 = (i__23654__auto___27774 + (1));
i__23654__auto___27774 = G__27775;
continue;
} else {
}
break;
}

var G__27769 = args27767.length;
switch (G__27769) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27767.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27770 = (function (f,blockable,meta27771){
this.f = f;
this.blockable = blockable;
this.meta27771 = meta27771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27772,meta27771__$1){
var self__ = this;
var _27772__$1 = this;
return (new cljs.core.async.t_cljs$core$async27770(self__.f,self__.blockable,meta27771__$1));
});

cljs.core.async.t_cljs$core$async27770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27772){
var self__ = this;
var _27772__$1 = this;
return self__.meta27771;
});

cljs.core.async.t_cljs$core$async27770.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27770.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27770.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27770.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27771","meta27771",-1923581863,null)], null);
});

cljs.core.async.t_cljs$core$async27770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27770";

cljs.core.async.t_cljs$core$async27770.cljs$lang$ctorPrWriter = (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async27770");
});

cljs.core.async.__GT_t_cljs$core$async27770 = (function cljs$core$async$__GT_t_cljs$core$async27770(f__$1,blockable__$1,meta27771){
return (new cljs.core.async.t_cljs$core$async27770(f__$1,blockable__$1,meta27771));
});

}

return (new cljs.core.async.t_cljs$core$async27770(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args27779 = [];
var len__23653__auto___27782 = arguments.length;
var i__23654__auto___27783 = (0);
while(true){
if((i__23654__auto___27783 < len__23653__auto___27782)){
args27779.push((arguments[i__23654__auto___27783]));

var G__27784 = (i__23654__auto___27783 + (1));
i__23654__auto___27783 = G__27784;
continue;
} else {
}
break;
}

var G__27781 = args27779.length;
switch (G__27781) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27779.length)].join('')));

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
var args27786 = [];
var len__23653__auto___27789 = arguments.length;
var i__23654__auto___27790 = (0);
while(true){
if((i__23654__auto___27790 < len__23653__auto___27789)){
args27786.push((arguments[i__23654__auto___27790]));

var G__27791 = (i__23654__auto___27790 + (1));
i__23654__auto___27790 = G__27791;
continue;
} else {
}
break;
}

var G__27788 = args27786.length;
switch (G__27788) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27786.length)].join('')));

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
var args27793 = [];
var len__23653__auto___27796 = arguments.length;
var i__23654__auto___27797 = (0);
while(true){
if((i__23654__auto___27797 < len__23653__auto___27796)){
args27793.push((arguments[i__23654__auto___27797]));

var G__27798 = (i__23654__auto___27797 + (1));
i__23654__auto___27797 = G__27798;
continue;
} else {
}
break;
}

var G__27795 = args27793.length;
switch (G__27795) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27793.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27800 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27800);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27800,ret){
return (function (){
return fn1.call(null,val_27800);
});})(val_27800,ret))
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
var args27801 = [];
var len__23653__auto___27804 = arguments.length;
var i__23654__auto___27805 = (0);
while(true){
if((i__23654__auto___27805 < len__23653__auto___27804)){
args27801.push((arguments[i__23654__auto___27805]));

var G__27806 = (i__23654__auto___27805 + (1));
i__23654__auto___27805 = G__27806;
continue;
} else {
}
break;
}

var G__27803 = args27801.length;
switch (G__27803) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27801.length)].join('')));

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
var n__23493__auto___27808 = n;
var x_27809 = (0);
while(true){
if((x_27809 < n__23493__auto___27808)){
(a[x_27809] = (0));

var G__27810 = (x_27809 + (1));
x_27809 = G__27810;
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

var G__27811 = (i + (1));
i = G__27811;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27815 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27815 = (function (alt_flag,flag,meta27816){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27816 = meta27816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27817,meta27816__$1){
var self__ = this;
var _27817__$1 = this;
return (new cljs.core.async.t_cljs$core$async27815(self__.alt_flag,self__.flag,meta27816__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27817){
var self__ = this;
var _27817__$1 = this;
return self__.meta27816;
});})(flag))
;

cljs.core.async.t_cljs$core$async27815.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27815.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27815.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27816","meta27816",920966652,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27815";

cljs.core.async.t_cljs$core$async27815.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async27815");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27815 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27815(alt_flag__$1,flag__$1,meta27816){
return (new cljs.core.async.t_cljs$core$async27815(alt_flag__$1,flag__$1,meta27816));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27815(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27821 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27821 = (function (alt_handler,flag,cb,meta27822){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27822 = meta27822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27823,meta27822__$1){
var self__ = this;
var _27823__$1 = this;
return (new cljs.core.async.t_cljs$core$async27821(self__.alt_handler,self__.flag,self__.cb,meta27822__$1));
});

cljs.core.async.t_cljs$core$async27821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27823){
var self__ = this;
var _27823__$1 = this;
return self__.meta27822;
});

cljs.core.async.t_cljs$core$async27821.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27821.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27821.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27821.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27822","meta27822",1230899773,null)], null);
});

cljs.core.async.t_cljs$core$async27821.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27821";

cljs.core.async.t_cljs$core$async27821.cljs$lang$ctorPrWriter = (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async27821");
});

cljs.core.async.__GT_t_cljs$core$async27821 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27821(alt_handler__$1,flag__$1,cb__$1,meta27822){
return (new cljs.core.async.t_cljs$core$async27821(alt_handler__$1,flag__$1,cb__$1,meta27822));
});

}

return (new cljs.core.async.t_cljs$core$async27821(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27824_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27824_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27825_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27825_SHARP_,port], null));
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
var G__27826 = (i + (1));
i = G__27826;
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
var len__23653__auto___27832 = arguments.length;
var i__23654__auto___27833 = (0);
while(true){
if((i__23654__auto___27833 < len__23653__auto___27832)){
args__23660__auto__.push((arguments[i__23654__auto___27833]));

var G__27834 = (i__23654__auto___27833 + (1));
i__23654__auto___27833 = G__27834;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27829){
var map__27830 = p__27829;
var map__27830__$1 = ((((!((map__27830 == null)))?((((map__27830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27830):map__27830);
var opts = map__27830__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27827){
var G__27828 = cljs.core.first.call(null,seq27827);
var seq27827__$1 = cljs.core.next.call(null,seq27827);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27828,seq27827__$1);
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
var args27835 = [];
var len__23653__auto___27885 = arguments.length;
var i__23654__auto___27886 = (0);
while(true){
if((i__23654__auto___27886 < len__23653__auto___27885)){
args27835.push((arguments[i__23654__auto___27886]));

var G__27887 = (i__23654__auto___27886 + (1));
i__23654__auto___27886 = G__27887;
continue;
} else {
}
break;
}

var G__27837 = args27835.length;
switch (G__27837) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27835.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27722__auto___27889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto___27889){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto___27889){
return (function (state_27861){
var state_val_27862 = (state_27861[(1)]);
if((state_val_27862 === (7))){
var inst_27857 = (state_27861[(2)]);
var state_27861__$1 = state_27861;
var statearr_27863_27890 = state_27861__$1;
(statearr_27863_27890[(2)] = inst_27857);

(statearr_27863_27890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (1))){
var state_27861__$1 = state_27861;
var statearr_27864_27891 = state_27861__$1;
(statearr_27864_27891[(2)] = null);

(statearr_27864_27891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (4))){
var inst_27840 = (state_27861[(7)]);
var inst_27840__$1 = (state_27861[(2)]);
var inst_27841 = (inst_27840__$1 == null);
var state_27861__$1 = (function (){var statearr_27865 = state_27861;
(statearr_27865[(7)] = inst_27840__$1);

return statearr_27865;
})();
if(cljs.core.truth_(inst_27841)){
var statearr_27866_27892 = state_27861__$1;
(statearr_27866_27892[(1)] = (5));

} else {
var statearr_27867_27893 = state_27861__$1;
(statearr_27867_27893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (13))){
var state_27861__$1 = state_27861;
var statearr_27868_27894 = state_27861__$1;
(statearr_27868_27894[(2)] = null);

(statearr_27868_27894[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (6))){
var inst_27840 = (state_27861[(7)]);
var state_27861__$1 = state_27861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27861__$1,(11),to,inst_27840);
} else {
if((state_val_27862 === (3))){
var inst_27859 = (state_27861[(2)]);
var state_27861__$1 = state_27861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27861__$1,inst_27859);
} else {
if((state_val_27862 === (12))){
var state_27861__$1 = state_27861;
var statearr_27869_27895 = state_27861__$1;
(statearr_27869_27895[(2)] = null);

(statearr_27869_27895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (2))){
var state_27861__$1 = state_27861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27861__$1,(4),from);
} else {
if((state_val_27862 === (11))){
var inst_27850 = (state_27861[(2)]);
var state_27861__$1 = state_27861;
if(cljs.core.truth_(inst_27850)){
var statearr_27870_27896 = state_27861__$1;
(statearr_27870_27896[(1)] = (12));

} else {
var statearr_27871_27897 = state_27861__$1;
(statearr_27871_27897[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (9))){
var state_27861__$1 = state_27861;
var statearr_27872_27898 = state_27861__$1;
(statearr_27872_27898[(2)] = null);

(statearr_27872_27898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (5))){
var state_27861__$1 = state_27861;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27873_27899 = state_27861__$1;
(statearr_27873_27899[(1)] = (8));

} else {
var statearr_27874_27900 = state_27861__$1;
(statearr_27874_27900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (14))){
var inst_27855 = (state_27861[(2)]);
var state_27861__$1 = state_27861;
var statearr_27875_27901 = state_27861__$1;
(statearr_27875_27901[(2)] = inst_27855);

(statearr_27875_27901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (10))){
var inst_27847 = (state_27861[(2)]);
var state_27861__$1 = state_27861;
var statearr_27876_27902 = state_27861__$1;
(statearr_27876_27902[(2)] = inst_27847);

(statearr_27876_27902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (8))){
var inst_27844 = cljs.core.async.close_BANG_.call(null,to);
var state_27861__$1 = state_27861;
var statearr_27877_27903 = state_27861__$1;
(statearr_27877_27903[(2)] = inst_27844);

(statearr_27877_27903[(1)] = (10));


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
});})(c__27722__auto___27889))
;
return ((function (switch__27610__auto__,c__27722__auto___27889){
return (function() {
var cljs$core$async$state_machine__27611__auto__ = null;
var cljs$core$async$state_machine__27611__auto____0 = (function (){
var statearr_27881 = [null,null,null,null,null,null,null,null];
(statearr_27881[(0)] = cljs$core$async$state_machine__27611__auto__);

(statearr_27881[(1)] = (1));

return statearr_27881;
});
var cljs$core$async$state_machine__27611__auto____1 = (function (state_27861){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_27861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e27882){if((e27882 instanceof Object)){
var ex__27614__auto__ = e27882;
var statearr_27883_27904 = state_27861;
(statearr_27883_27904[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27905 = state_27861;
state_27861 = G__27905;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$state_machine__27611__auto__ = function(state_27861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27611__auto____1.call(this,state_27861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27611__auto____0;
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27611__auto____1;
return cljs$core$async$state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto___27889))
})();
var state__27724__auto__ = (function (){var statearr_27884 = f__27723__auto__.call(null);
(statearr_27884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___27889);

return statearr_27884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto___27889))
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
return (function (p__28093){
var vec__28094 = p__28093;
var v = cljs.core.nth.call(null,vec__28094,(0),null);
var p = cljs.core.nth.call(null,vec__28094,(1),null);
var job = vec__28094;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27722__auto___28280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto___28280,res,vec__28094,v,p,job,jobs,results){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto___28280,res,vec__28094,v,p,job,jobs,results){
return (function (state_28101){
var state_val_28102 = (state_28101[(1)]);
if((state_val_28102 === (1))){
var state_28101__$1 = state_28101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28101__$1,(2),res,v);
} else {
if((state_val_28102 === (2))){
var inst_28098 = (state_28101[(2)]);
var inst_28099 = cljs.core.async.close_BANG_.call(null,res);
var state_28101__$1 = (function (){var statearr_28103 = state_28101;
(statearr_28103[(7)] = inst_28098);

return statearr_28103;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28101__$1,inst_28099);
} else {
return null;
}
}
});})(c__27722__auto___28280,res,vec__28094,v,p,job,jobs,results))
;
return ((function (switch__27610__auto__,c__27722__auto___28280,res,vec__28094,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____0 = (function (){
var statearr_28107 = [null,null,null,null,null,null,null,null];
(statearr_28107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__);

(statearr_28107[(1)] = (1));

return statearr_28107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____1 = (function (state_28101){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_28101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e28108){if((e28108 instanceof Object)){
var ex__27614__auto__ = e28108;
var statearr_28109_28281 = state_28101;
(statearr_28109_28281[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28282 = state_28101;
state_28101 = G__28282;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__ = function(state_28101){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____1.call(this,state_28101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto___28280,res,vec__28094,v,p,job,jobs,results))
})();
var state__27724__auto__ = (function (){var statearr_28110 = f__27723__auto__.call(null);
(statearr_28110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___28280);

return statearr_28110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto___28280,res,vec__28094,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28111){
var vec__28112 = p__28111;
var v = cljs.core.nth.call(null,vec__28112,(0),null);
var p = cljs.core.nth.call(null,vec__28112,(1),null);
var job = vec__28112;
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
var n__23493__auto___28283 = n;
var __28284 = (0);
while(true){
if((__28284 < n__23493__auto___28283)){
var G__28115_28285 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28115_28285) {
case "compute":
var c__27722__auto___28287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28284,c__27722__auto___28287,G__28115_28285,n__23493__auto___28283,jobs,results,process,async){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (__28284,c__27722__auto___28287,G__28115_28285,n__23493__auto___28283,jobs,results,process,async){
return (function (state_28128){
var state_val_28129 = (state_28128[(1)]);
if((state_val_28129 === (1))){
var state_28128__$1 = state_28128;
var statearr_28130_28288 = state_28128__$1;
(statearr_28130_28288[(2)] = null);

(statearr_28130_28288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28129 === (2))){
var state_28128__$1 = state_28128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28128__$1,(4),jobs);
} else {
if((state_val_28129 === (3))){
var inst_28126 = (state_28128[(2)]);
var state_28128__$1 = state_28128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28128__$1,inst_28126);
} else {
if((state_val_28129 === (4))){
var inst_28118 = (state_28128[(2)]);
var inst_28119 = process.call(null,inst_28118);
var state_28128__$1 = state_28128;
if(cljs.core.truth_(inst_28119)){
var statearr_28131_28289 = state_28128__$1;
(statearr_28131_28289[(1)] = (5));

} else {
var statearr_28132_28290 = state_28128__$1;
(statearr_28132_28290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28129 === (5))){
var state_28128__$1 = state_28128;
var statearr_28133_28291 = state_28128__$1;
(statearr_28133_28291[(2)] = null);

(statearr_28133_28291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28129 === (6))){
var state_28128__$1 = state_28128;
var statearr_28134_28292 = state_28128__$1;
(statearr_28134_28292[(2)] = null);

(statearr_28134_28292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28129 === (7))){
var inst_28124 = (state_28128[(2)]);
var state_28128__$1 = state_28128;
var statearr_28135_28293 = state_28128__$1;
(statearr_28135_28293[(2)] = inst_28124);

(statearr_28135_28293[(1)] = (3));


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
});})(__28284,c__27722__auto___28287,G__28115_28285,n__23493__auto___28283,jobs,results,process,async))
;
return ((function (__28284,switch__27610__auto__,c__27722__auto___28287,G__28115_28285,n__23493__auto___28283,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____0 = (function (){
var statearr_28139 = [null,null,null,null,null,null,null];
(statearr_28139[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__);

(statearr_28139[(1)] = (1));

return statearr_28139;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____1 = (function (state_28128){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_28128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e28140){if((e28140 instanceof Object)){
var ex__27614__auto__ = e28140;
var statearr_28141_28294 = state_28128;
(statearr_28141_28294[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28295 = state_28128;
state_28128 = G__28295;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__ = function(state_28128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____1.call(this,state_28128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__;
})()
;})(__28284,switch__27610__auto__,c__27722__auto___28287,G__28115_28285,n__23493__auto___28283,jobs,results,process,async))
})();
var state__27724__auto__ = (function (){var statearr_28142 = f__27723__auto__.call(null);
(statearr_28142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___28287);

return statearr_28142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(__28284,c__27722__auto___28287,G__28115_28285,n__23493__auto___28283,jobs,results,process,async))
);


break;
case "async":
var c__27722__auto___28296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28284,c__27722__auto___28296,G__28115_28285,n__23493__auto___28283,jobs,results,process,async){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (__28284,c__27722__auto___28296,G__28115_28285,n__23493__auto___28283,jobs,results,process,async){
return (function (state_28155){
var state_val_28156 = (state_28155[(1)]);
if((state_val_28156 === (1))){
var state_28155__$1 = state_28155;
var statearr_28157_28297 = state_28155__$1;
(statearr_28157_28297[(2)] = null);

(statearr_28157_28297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (2))){
var state_28155__$1 = state_28155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28155__$1,(4),jobs);
} else {
if((state_val_28156 === (3))){
var inst_28153 = (state_28155[(2)]);
var state_28155__$1 = state_28155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28155__$1,inst_28153);
} else {
if((state_val_28156 === (4))){
var inst_28145 = (state_28155[(2)]);
var inst_28146 = async.call(null,inst_28145);
var state_28155__$1 = state_28155;
if(cljs.core.truth_(inst_28146)){
var statearr_28158_28298 = state_28155__$1;
(statearr_28158_28298[(1)] = (5));

} else {
var statearr_28159_28299 = state_28155__$1;
(statearr_28159_28299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (5))){
var state_28155__$1 = state_28155;
var statearr_28160_28300 = state_28155__$1;
(statearr_28160_28300[(2)] = null);

(statearr_28160_28300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (6))){
var state_28155__$1 = state_28155;
var statearr_28161_28301 = state_28155__$1;
(statearr_28161_28301[(2)] = null);

(statearr_28161_28301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (7))){
var inst_28151 = (state_28155[(2)]);
var state_28155__$1 = state_28155;
var statearr_28162_28302 = state_28155__$1;
(statearr_28162_28302[(2)] = inst_28151);

(statearr_28162_28302[(1)] = (3));


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
});})(__28284,c__27722__auto___28296,G__28115_28285,n__23493__auto___28283,jobs,results,process,async))
;
return ((function (__28284,switch__27610__auto__,c__27722__auto___28296,G__28115_28285,n__23493__auto___28283,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____0 = (function (){
var statearr_28166 = [null,null,null,null,null,null,null];
(statearr_28166[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__);

(statearr_28166[(1)] = (1));

return statearr_28166;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____1 = (function (state_28155){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_28155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e28167){if((e28167 instanceof Object)){
var ex__27614__auto__ = e28167;
var statearr_28168_28303 = state_28155;
(statearr_28168_28303[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28304 = state_28155;
state_28155 = G__28304;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__ = function(state_28155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____1.call(this,state_28155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__;
})()
;})(__28284,switch__27610__auto__,c__27722__auto___28296,G__28115_28285,n__23493__auto___28283,jobs,results,process,async))
})();
var state__27724__auto__ = (function (){var statearr_28169 = f__27723__auto__.call(null);
(statearr_28169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___28296);

return statearr_28169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(__28284,c__27722__auto___28296,G__28115_28285,n__23493__auto___28283,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28305 = (__28284 + (1));
__28284 = G__28305;
continue;
} else {
}
break;
}

var c__27722__auto___28306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto___28306,jobs,results,process,async){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto___28306,jobs,results,process,async){
return (function (state_28191){
var state_val_28192 = (state_28191[(1)]);
if((state_val_28192 === (1))){
var state_28191__$1 = state_28191;
var statearr_28193_28307 = state_28191__$1;
(statearr_28193_28307[(2)] = null);

(statearr_28193_28307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (2))){
var state_28191__$1 = state_28191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28191__$1,(4),from);
} else {
if((state_val_28192 === (3))){
var inst_28189 = (state_28191[(2)]);
var state_28191__$1 = state_28191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28191__$1,inst_28189);
} else {
if((state_val_28192 === (4))){
var inst_28172 = (state_28191[(7)]);
var inst_28172__$1 = (state_28191[(2)]);
var inst_28173 = (inst_28172__$1 == null);
var state_28191__$1 = (function (){var statearr_28194 = state_28191;
(statearr_28194[(7)] = inst_28172__$1);

return statearr_28194;
})();
if(cljs.core.truth_(inst_28173)){
var statearr_28195_28308 = state_28191__$1;
(statearr_28195_28308[(1)] = (5));

} else {
var statearr_28196_28309 = state_28191__$1;
(statearr_28196_28309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (5))){
var inst_28175 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28191__$1 = state_28191;
var statearr_28197_28310 = state_28191__$1;
(statearr_28197_28310[(2)] = inst_28175);

(statearr_28197_28310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (6))){
var inst_28172 = (state_28191[(7)]);
var inst_28177 = (state_28191[(8)]);
var inst_28177__$1 = cljs.core.async.chan.call(null,(1));
var inst_28178 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28179 = [inst_28172,inst_28177__$1];
var inst_28180 = (new cljs.core.PersistentVector(null,2,(5),inst_28178,inst_28179,null));
var state_28191__$1 = (function (){var statearr_28198 = state_28191;
(statearr_28198[(8)] = inst_28177__$1);

return statearr_28198;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28191__$1,(8),jobs,inst_28180);
} else {
if((state_val_28192 === (7))){
var inst_28187 = (state_28191[(2)]);
var state_28191__$1 = state_28191;
var statearr_28199_28311 = state_28191__$1;
(statearr_28199_28311[(2)] = inst_28187);

(statearr_28199_28311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (8))){
var inst_28177 = (state_28191[(8)]);
var inst_28182 = (state_28191[(2)]);
var state_28191__$1 = (function (){var statearr_28200 = state_28191;
(statearr_28200[(9)] = inst_28182);

return statearr_28200;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28191__$1,(9),results,inst_28177);
} else {
if((state_val_28192 === (9))){
var inst_28184 = (state_28191[(2)]);
var state_28191__$1 = (function (){var statearr_28201 = state_28191;
(statearr_28201[(10)] = inst_28184);

return statearr_28201;
})();
var statearr_28202_28312 = state_28191__$1;
(statearr_28202_28312[(2)] = null);

(statearr_28202_28312[(1)] = (2));


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
});})(c__27722__auto___28306,jobs,results,process,async))
;
return ((function (switch__27610__auto__,c__27722__auto___28306,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____0 = (function (){
var statearr_28206 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28206[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__);

(statearr_28206[(1)] = (1));

return statearr_28206;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____1 = (function (state_28191){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_28191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e28207){if((e28207 instanceof Object)){
var ex__27614__auto__ = e28207;
var statearr_28208_28313 = state_28191;
(statearr_28208_28313[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28314 = state_28191;
state_28191 = G__28314;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__ = function(state_28191){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____1.call(this,state_28191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto___28306,jobs,results,process,async))
})();
var state__27724__auto__ = (function (){var statearr_28209 = f__27723__auto__.call(null);
(statearr_28209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___28306);

return statearr_28209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto___28306,jobs,results,process,async))
);


var c__27722__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto__,jobs,results,process,async){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto__,jobs,results,process,async){
return (function (state_28247){
var state_val_28248 = (state_28247[(1)]);
if((state_val_28248 === (7))){
var inst_28243 = (state_28247[(2)]);
var state_28247__$1 = state_28247;
var statearr_28249_28315 = state_28247__$1;
(statearr_28249_28315[(2)] = inst_28243);

(statearr_28249_28315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (20))){
var state_28247__$1 = state_28247;
var statearr_28250_28316 = state_28247__$1;
(statearr_28250_28316[(2)] = null);

(statearr_28250_28316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (1))){
var state_28247__$1 = state_28247;
var statearr_28251_28317 = state_28247__$1;
(statearr_28251_28317[(2)] = null);

(statearr_28251_28317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (4))){
var inst_28212 = (state_28247[(7)]);
var inst_28212__$1 = (state_28247[(2)]);
var inst_28213 = (inst_28212__$1 == null);
var state_28247__$1 = (function (){var statearr_28252 = state_28247;
(statearr_28252[(7)] = inst_28212__$1);

return statearr_28252;
})();
if(cljs.core.truth_(inst_28213)){
var statearr_28253_28318 = state_28247__$1;
(statearr_28253_28318[(1)] = (5));

} else {
var statearr_28254_28319 = state_28247__$1;
(statearr_28254_28319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (15))){
var inst_28225 = (state_28247[(8)]);
var state_28247__$1 = state_28247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28247__$1,(18),to,inst_28225);
} else {
if((state_val_28248 === (21))){
var inst_28238 = (state_28247[(2)]);
var state_28247__$1 = state_28247;
var statearr_28255_28320 = state_28247__$1;
(statearr_28255_28320[(2)] = inst_28238);

(statearr_28255_28320[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (13))){
var inst_28240 = (state_28247[(2)]);
var state_28247__$1 = (function (){var statearr_28256 = state_28247;
(statearr_28256[(9)] = inst_28240);

return statearr_28256;
})();
var statearr_28257_28321 = state_28247__$1;
(statearr_28257_28321[(2)] = null);

(statearr_28257_28321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (6))){
var inst_28212 = (state_28247[(7)]);
var state_28247__$1 = state_28247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28247__$1,(11),inst_28212);
} else {
if((state_val_28248 === (17))){
var inst_28233 = (state_28247[(2)]);
var state_28247__$1 = state_28247;
if(cljs.core.truth_(inst_28233)){
var statearr_28258_28322 = state_28247__$1;
(statearr_28258_28322[(1)] = (19));

} else {
var statearr_28259_28323 = state_28247__$1;
(statearr_28259_28323[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (3))){
var inst_28245 = (state_28247[(2)]);
var state_28247__$1 = state_28247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28247__$1,inst_28245);
} else {
if((state_val_28248 === (12))){
var inst_28222 = (state_28247[(10)]);
var state_28247__$1 = state_28247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28247__$1,(14),inst_28222);
} else {
if((state_val_28248 === (2))){
var state_28247__$1 = state_28247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28247__$1,(4),results);
} else {
if((state_val_28248 === (19))){
var state_28247__$1 = state_28247;
var statearr_28260_28324 = state_28247__$1;
(statearr_28260_28324[(2)] = null);

(statearr_28260_28324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (11))){
var inst_28222 = (state_28247[(2)]);
var state_28247__$1 = (function (){var statearr_28261 = state_28247;
(statearr_28261[(10)] = inst_28222);

return statearr_28261;
})();
var statearr_28262_28325 = state_28247__$1;
(statearr_28262_28325[(2)] = null);

(statearr_28262_28325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (9))){
var state_28247__$1 = state_28247;
var statearr_28263_28326 = state_28247__$1;
(statearr_28263_28326[(2)] = null);

(statearr_28263_28326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (5))){
var state_28247__$1 = state_28247;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28264_28327 = state_28247__$1;
(statearr_28264_28327[(1)] = (8));

} else {
var statearr_28265_28328 = state_28247__$1;
(statearr_28265_28328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (14))){
var inst_28225 = (state_28247[(8)]);
var inst_28227 = (state_28247[(11)]);
var inst_28225__$1 = (state_28247[(2)]);
var inst_28226 = (inst_28225__$1 == null);
var inst_28227__$1 = cljs.core.not.call(null,inst_28226);
var state_28247__$1 = (function (){var statearr_28266 = state_28247;
(statearr_28266[(8)] = inst_28225__$1);

(statearr_28266[(11)] = inst_28227__$1);

return statearr_28266;
})();
if(inst_28227__$1){
var statearr_28267_28329 = state_28247__$1;
(statearr_28267_28329[(1)] = (15));

} else {
var statearr_28268_28330 = state_28247__$1;
(statearr_28268_28330[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (16))){
var inst_28227 = (state_28247[(11)]);
var state_28247__$1 = state_28247;
var statearr_28269_28331 = state_28247__$1;
(statearr_28269_28331[(2)] = inst_28227);

(statearr_28269_28331[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (10))){
var inst_28219 = (state_28247[(2)]);
var state_28247__$1 = state_28247;
var statearr_28270_28332 = state_28247__$1;
(statearr_28270_28332[(2)] = inst_28219);

(statearr_28270_28332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (18))){
var inst_28230 = (state_28247[(2)]);
var state_28247__$1 = state_28247;
var statearr_28271_28333 = state_28247__$1;
(statearr_28271_28333[(2)] = inst_28230);

(statearr_28271_28333[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (8))){
var inst_28216 = cljs.core.async.close_BANG_.call(null,to);
var state_28247__$1 = state_28247;
var statearr_28272_28334 = state_28247__$1;
(statearr_28272_28334[(2)] = inst_28216);

(statearr_28272_28334[(1)] = (10));


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
});})(c__27722__auto__,jobs,results,process,async))
;
return ((function (switch__27610__auto__,c__27722__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____0 = (function (){
var statearr_28276 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28276[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__);

(statearr_28276[(1)] = (1));

return statearr_28276;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____1 = (function (state_28247){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_28247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e28277){if((e28277 instanceof Object)){
var ex__27614__auto__ = e28277;
var statearr_28278_28335 = state_28247;
(statearr_28278_28335[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28336 = state_28247;
state_28247 = G__28336;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__ = function(state_28247){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____1.call(this,state_28247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27611__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto__,jobs,results,process,async))
})();
var state__27724__auto__ = (function (){var statearr_28279 = f__27723__auto__.call(null);
(statearr_28279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto__);

return statearr_28279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto__,jobs,results,process,async))
);

return c__27722__auto__;
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
var args28337 = [];
var len__23653__auto___28340 = arguments.length;
var i__23654__auto___28341 = (0);
while(true){
if((i__23654__auto___28341 < len__23653__auto___28340)){
args28337.push((arguments[i__23654__auto___28341]));

var G__28342 = (i__23654__auto___28341 + (1));
i__23654__auto___28341 = G__28342;
continue;
} else {
}
break;
}

var G__28339 = args28337.length;
switch (G__28339) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28337.length)].join('')));

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
var args28344 = [];
var len__23653__auto___28347 = arguments.length;
var i__23654__auto___28348 = (0);
while(true){
if((i__23654__auto___28348 < len__23653__auto___28347)){
args28344.push((arguments[i__23654__auto___28348]));

var G__28349 = (i__23654__auto___28348 + (1));
i__23654__auto___28348 = G__28349;
continue;
} else {
}
break;
}

var G__28346 = args28344.length;
switch (G__28346) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28344.length)].join('')));

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
var args28351 = [];
var len__23653__auto___28404 = arguments.length;
var i__23654__auto___28405 = (0);
while(true){
if((i__23654__auto___28405 < len__23653__auto___28404)){
args28351.push((arguments[i__23654__auto___28405]));

var G__28406 = (i__23654__auto___28405 + (1));
i__23654__auto___28405 = G__28406;
continue;
} else {
}
break;
}

var G__28353 = args28351.length;
switch (G__28353) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28351.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27722__auto___28408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto___28408,tc,fc){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto___28408,tc,fc){
return (function (state_28379){
var state_val_28380 = (state_28379[(1)]);
if((state_val_28380 === (7))){
var inst_28375 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
var statearr_28381_28409 = state_28379__$1;
(statearr_28381_28409[(2)] = inst_28375);

(statearr_28381_28409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (1))){
var state_28379__$1 = state_28379;
var statearr_28382_28410 = state_28379__$1;
(statearr_28382_28410[(2)] = null);

(statearr_28382_28410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (4))){
var inst_28356 = (state_28379[(7)]);
var inst_28356__$1 = (state_28379[(2)]);
var inst_28357 = (inst_28356__$1 == null);
var state_28379__$1 = (function (){var statearr_28383 = state_28379;
(statearr_28383[(7)] = inst_28356__$1);

return statearr_28383;
})();
if(cljs.core.truth_(inst_28357)){
var statearr_28384_28411 = state_28379__$1;
(statearr_28384_28411[(1)] = (5));

} else {
var statearr_28385_28412 = state_28379__$1;
(statearr_28385_28412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (13))){
var state_28379__$1 = state_28379;
var statearr_28386_28413 = state_28379__$1;
(statearr_28386_28413[(2)] = null);

(statearr_28386_28413[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (6))){
var inst_28356 = (state_28379[(7)]);
var inst_28362 = p.call(null,inst_28356);
var state_28379__$1 = state_28379;
if(cljs.core.truth_(inst_28362)){
var statearr_28387_28414 = state_28379__$1;
(statearr_28387_28414[(1)] = (9));

} else {
var statearr_28388_28415 = state_28379__$1;
(statearr_28388_28415[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (3))){
var inst_28377 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28379__$1,inst_28377);
} else {
if((state_val_28380 === (12))){
var state_28379__$1 = state_28379;
var statearr_28389_28416 = state_28379__$1;
(statearr_28389_28416[(2)] = null);

(statearr_28389_28416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (2))){
var state_28379__$1 = state_28379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28379__$1,(4),ch);
} else {
if((state_val_28380 === (11))){
var inst_28356 = (state_28379[(7)]);
var inst_28366 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28379__$1,(8),inst_28366,inst_28356);
} else {
if((state_val_28380 === (9))){
var state_28379__$1 = state_28379;
var statearr_28390_28417 = state_28379__$1;
(statearr_28390_28417[(2)] = tc);

(statearr_28390_28417[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (5))){
var inst_28359 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28360 = cljs.core.async.close_BANG_.call(null,fc);
var state_28379__$1 = (function (){var statearr_28391 = state_28379;
(statearr_28391[(8)] = inst_28359);

return statearr_28391;
})();
var statearr_28392_28418 = state_28379__$1;
(statearr_28392_28418[(2)] = inst_28360);

(statearr_28392_28418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (14))){
var inst_28373 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
var statearr_28393_28419 = state_28379__$1;
(statearr_28393_28419[(2)] = inst_28373);

(statearr_28393_28419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (10))){
var state_28379__$1 = state_28379;
var statearr_28394_28420 = state_28379__$1;
(statearr_28394_28420[(2)] = fc);

(statearr_28394_28420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (8))){
var inst_28368 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
if(cljs.core.truth_(inst_28368)){
var statearr_28395_28421 = state_28379__$1;
(statearr_28395_28421[(1)] = (12));

} else {
var statearr_28396_28422 = state_28379__$1;
(statearr_28396_28422[(1)] = (13));

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
});})(c__27722__auto___28408,tc,fc))
;
return ((function (switch__27610__auto__,c__27722__auto___28408,tc,fc){
return (function() {
var cljs$core$async$state_machine__27611__auto__ = null;
var cljs$core$async$state_machine__27611__auto____0 = (function (){
var statearr_28400 = [null,null,null,null,null,null,null,null,null];
(statearr_28400[(0)] = cljs$core$async$state_machine__27611__auto__);

(statearr_28400[(1)] = (1));

return statearr_28400;
});
var cljs$core$async$state_machine__27611__auto____1 = (function (state_28379){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_28379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e28401){if((e28401 instanceof Object)){
var ex__27614__auto__ = e28401;
var statearr_28402_28423 = state_28379;
(statearr_28402_28423[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28424 = state_28379;
state_28379 = G__28424;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$state_machine__27611__auto__ = function(state_28379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27611__auto____1.call(this,state_28379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27611__auto____0;
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27611__auto____1;
return cljs$core$async$state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto___28408,tc,fc))
})();
var state__27724__auto__ = (function (){var statearr_28403 = f__27723__auto__.call(null);
(statearr_28403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___28408);

return statearr_28403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto___28408,tc,fc))
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
var c__27722__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto__){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto__){
return (function (state_28488){
var state_val_28489 = (state_28488[(1)]);
if((state_val_28489 === (7))){
var inst_28484 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
var statearr_28490_28511 = state_28488__$1;
(statearr_28490_28511[(2)] = inst_28484);

(statearr_28490_28511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (1))){
var inst_28468 = init;
var state_28488__$1 = (function (){var statearr_28491 = state_28488;
(statearr_28491[(7)] = inst_28468);

return statearr_28491;
})();
var statearr_28492_28512 = state_28488__$1;
(statearr_28492_28512[(2)] = null);

(statearr_28492_28512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (4))){
var inst_28471 = (state_28488[(8)]);
var inst_28471__$1 = (state_28488[(2)]);
var inst_28472 = (inst_28471__$1 == null);
var state_28488__$1 = (function (){var statearr_28493 = state_28488;
(statearr_28493[(8)] = inst_28471__$1);

return statearr_28493;
})();
if(cljs.core.truth_(inst_28472)){
var statearr_28494_28513 = state_28488__$1;
(statearr_28494_28513[(1)] = (5));

} else {
var statearr_28495_28514 = state_28488__$1;
(statearr_28495_28514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (6))){
var inst_28471 = (state_28488[(8)]);
var inst_28475 = (state_28488[(9)]);
var inst_28468 = (state_28488[(7)]);
var inst_28475__$1 = f.call(null,inst_28468,inst_28471);
var inst_28476 = cljs.core.reduced_QMARK_.call(null,inst_28475__$1);
var state_28488__$1 = (function (){var statearr_28496 = state_28488;
(statearr_28496[(9)] = inst_28475__$1);

return statearr_28496;
})();
if(inst_28476){
var statearr_28497_28515 = state_28488__$1;
(statearr_28497_28515[(1)] = (8));

} else {
var statearr_28498_28516 = state_28488__$1;
(statearr_28498_28516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (3))){
var inst_28486 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28488__$1,inst_28486);
} else {
if((state_val_28489 === (2))){
var state_28488__$1 = state_28488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28488__$1,(4),ch);
} else {
if((state_val_28489 === (9))){
var inst_28475 = (state_28488[(9)]);
var inst_28468 = inst_28475;
var state_28488__$1 = (function (){var statearr_28499 = state_28488;
(statearr_28499[(7)] = inst_28468);

return statearr_28499;
})();
var statearr_28500_28517 = state_28488__$1;
(statearr_28500_28517[(2)] = null);

(statearr_28500_28517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (5))){
var inst_28468 = (state_28488[(7)]);
var state_28488__$1 = state_28488;
var statearr_28501_28518 = state_28488__$1;
(statearr_28501_28518[(2)] = inst_28468);

(statearr_28501_28518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (10))){
var inst_28482 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
var statearr_28502_28519 = state_28488__$1;
(statearr_28502_28519[(2)] = inst_28482);

(statearr_28502_28519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (8))){
var inst_28475 = (state_28488[(9)]);
var inst_28478 = cljs.core.deref.call(null,inst_28475);
var state_28488__$1 = state_28488;
var statearr_28503_28520 = state_28488__$1;
(statearr_28503_28520[(2)] = inst_28478);

(statearr_28503_28520[(1)] = (10));


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
});})(c__27722__auto__))
;
return ((function (switch__27610__auto__,c__27722__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27611__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27611__auto____0 = (function (){
var statearr_28507 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28507[(0)] = cljs$core$async$reduce_$_state_machine__27611__auto__);

(statearr_28507[(1)] = (1));

return statearr_28507;
});
var cljs$core$async$reduce_$_state_machine__27611__auto____1 = (function (state_28488){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_28488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e28508){if((e28508 instanceof Object)){
var ex__27614__auto__ = e28508;
var statearr_28509_28521 = state_28488;
(statearr_28509_28521[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28522 = state_28488;
state_28488 = G__28522;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27611__auto__ = function(state_28488){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27611__auto____1.call(this,state_28488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27611__auto____0;
cljs$core$async$reduce_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27611__auto____1;
return cljs$core$async$reduce_$_state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto__))
})();
var state__27724__auto__ = (function (){var statearr_28510 = f__27723__auto__.call(null);
(statearr_28510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto__);

return statearr_28510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto__))
);

return c__27722__auto__;
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
var args28523 = [];
var len__23653__auto___28575 = arguments.length;
var i__23654__auto___28576 = (0);
while(true){
if((i__23654__auto___28576 < len__23653__auto___28575)){
args28523.push((arguments[i__23654__auto___28576]));

var G__28577 = (i__23654__auto___28576 + (1));
i__23654__auto___28576 = G__28577;
continue;
} else {
}
break;
}

var G__28525 = args28523.length;
switch (G__28525) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28523.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27722__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto__){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto__){
return (function (state_28550){
var state_val_28551 = (state_28550[(1)]);
if((state_val_28551 === (7))){
var inst_28532 = (state_28550[(2)]);
var state_28550__$1 = state_28550;
var statearr_28552_28579 = state_28550__$1;
(statearr_28552_28579[(2)] = inst_28532);

(statearr_28552_28579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (1))){
var inst_28526 = cljs.core.seq.call(null,coll);
var inst_28527 = inst_28526;
var state_28550__$1 = (function (){var statearr_28553 = state_28550;
(statearr_28553[(7)] = inst_28527);

return statearr_28553;
})();
var statearr_28554_28580 = state_28550__$1;
(statearr_28554_28580[(2)] = null);

(statearr_28554_28580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (4))){
var inst_28527 = (state_28550[(7)]);
var inst_28530 = cljs.core.first.call(null,inst_28527);
var state_28550__$1 = state_28550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28550__$1,(7),ch,inst_28530);
} else {
if((state_val_28551 === (13))){
var inst_28544 = (state_28550[(2)]);
var state_28550__$1 = state_28550;
var statearr_28555_28581 = state_28550__$1;
(statearr_28555_28581[(2)] = inst_28544);

(statearr_28555_28581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (6))){
var inst_28535 = (state_28550[(2)]);
var state_28550__$1 = state_28550;
if(cljs.core.truth_(inst_28535)){
var statearr_28556_28582 = state_28550__$1;
(statearr_28556_28582[(1)] = (8));

} else {
var statearr_28557_28583 = state_28550__$1;
(statearr_28557_28583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (3))){
var inst_28548 = (state_28550[(2)]);
var state_28550__$1 = state_28550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28550__$1,inst_28548);
} else {
if((state_val_28551 === (12))){
var state_28550__$1 = state_28550;
var statearr_28558_28584 = state_28550__$1;
(statearr_28558_28584[(2)] = null);

(statearr_28558_28584[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (2))){
var inst_28527 = (state_28550[(7)]);
var state_28550__$1 = state_28550;
if(cljs.core.truth_(inst_28527)){
var statearr_28559_28585 = state_28550__$1;
(statearr_28559_28585[(1)] = (4));

} else {
var statearr_28560_28586 = state_28550__$1;
(statearr_28560_28586[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (11))){
var inst_28541 = cljs.core.async.close_BANG_.call(null,ch);
var state_28550__$1 = state_28550;
var statearr_28561_28587 = state_28550__$1;
(statearr_28561_28587[(2)] = inst_28541);

(statearr_28561_28587[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (9))){
var state_28550__$1 = state_28550;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28562_28588 = state_28550__$1;
(statearr_28562_28588[(1)] = (11));

} else {
var statearr_28563_28589 = state_28550__$1;
(statearr_28563_28589[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (5))){
var inst_28527 = (state_28550[(7)]);
var state_28550__$1 = state_28550;
var statearr_28564_28590 = state_28550__$1;
(statearr_28564_28590[(2)] = inst_28527);

(statearr_28564_28590[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (10))){
var inst_28546 = (state_28550[(2)]);
var state_28550__$1 = state_28550;
var statearr_28565_28591 = state_28550__$1;
(statearr_28565_28591[(2)] = inst_28546);

(statearr_28565_28591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (8))){
var inst_28527 = (state_28550[(7)]);
var inst_28537 = cljs.core.next.call(null,inst_28527);
var inst_28527__$1 = inst_28537;
var state_28550__$1 = (function (){var statearr_28566 = state_28550;
(statearr_28566[(7)] = inst_28527__$1);

return statearr_28566;
})();
var statearr_28567_28592 = state_28550__$1;
(statearr_28567_28592[(2)] = null);

(statearr_28567_28592[(1)] = (2));


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
});})(c__27722__auto__))
;
return ((function (switch__27610__auto__,c__27722__auto__){
return (function() {
var cljs$core$async$state_machine__27611__auto__ = null;
var cljs$core$async$state_machine__27611__auto____0 = (function (){
var statearr_28571 = [null,null,null,null,null,null,null,null];
(statearr_28571[(0)] = cljs$core$async$state_machine__27611__auto__);

(statearr_28571[(1)] = (1));

return statearr_28571;
});
var cljs$core$async$state_machine__27611__auto____1 = (function (state_28550){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_28550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e28572){if((e28572 instanceof Object)){
var ex__27614__auto__ = e28572;
var statearr_28573_28593 = state_28550;
(statearr_28573_28593[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28594 = state_28550;
state_28550 = G__28594;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$state_machine__27611__auto__ = function(state_28550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27611__auto____1.call(this,state_28550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27611__auto____0;
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27611__auto____1;
return cljs$core$async$state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto__))
})();
var state__27724__auto__ = (function (){var statearr_28574 = f__27723__auto__.call(null);
(statearr_28574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto__);

return statearr_28574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto__))
);

return c__27722__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async28820 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28820 = (function (mult,ch,cs,meta28821){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28821 = meta28821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28822,meta28821__$1){
var self__ = this;
var _28822__$1 = this;
return (new cljs.core.async.t_cljs$core$async28820(self__.mult,self__.ch,self__.cs,meta28821__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28820.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28822){
var self__ = this;
var _28822__$1 = this;
return self__.meta28821;
});})(cs))
;

cljs.core.async.t_cljs$core$async28820.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28820.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28820.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28820.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28820.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28820.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28820.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28821","meta28821",-1127537842,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28820.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28820";

cljs.core.async.t_cljs$core$async28820.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async28820");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28820 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28820(mult__$1,ch__$1,cs__$1,meta28821){
return (new cljs.core.async.t_cljs$core$async28820(mult__$1,ch__$1,cs__$1,meta28821));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28820(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27722__auto___29045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto___29045,cs,m,dchan,dctr,done){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto___29045,cs,m,dchan,dctr,done){
return (function (state_28957){
var state_val_28958 = (state_28957[(1)]);
if((state_val_28958 === (7))){
var inst_28953 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_28959_29046 = state_28957__$1;
(statearr_28959_29046[(2)] = inst_28953);

(statearr_28959_29046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (20))){
var inst_28856 = (state_28957[(7)]);
var inst_28868 = cljs.core.first.call(null,inst_28856);
var inst_28869 = cljs.core.nth.call(null,inst_28868,(0),null);
var inst_28870 = cljs.core.nth.call(null,inst_28868,(1),null);
var state_28957__$1 = (function (){var statearr_28960 = state_28957;
(statearr_28960[(8)] = inst_28869);

return statearr_28960;
})();
if(cljs.core.truth_(inst_28870)){
var statearr_28961_29047 = state_28957__$1;
(statearr_28961_29047[(1)] = (22));

} else {
var statearr_28962_29048 = state_28957__$1;
(statearr_28962_29048[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (27))){
var inst_28900 = (state_28957[(9)]);
var inst_28905 = (state_28957[(10)]);
var inst_28898 = (state_28957[(11)]);
var inst_28825 = (state_28957[(12)]);
var inst_28905__$1 = cljs.core._nth.call(null,inst_28898,inst_28900);
var inst_28906 = cljs.core.async.put_BANG_.call(null,inst_28905__$1,inst_28825,done);
var state_28957__$1 = (function (){var statearr_28963 = state_28957;
(statearr_28963[(10)] = inst_28905__$1);

return statearr_28963;
})();
if(cljs.core.truth_(inst_28906)){
var statearr_28964_29049 = state_28957__$1;
(statearr_28964_29049[(1)] = (30));

} else {
var statearr_28965_29050 = state_28957__$1;
(statearr_28965_29050[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (1))){
var state_28957__$1 = state_28957;
var statearr_28966_29051 = state_28957__$1;
(statearr_28966_29051[(2)] = null);

(statearr_28966_29051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (24))){
var inst_28856 = (state_28957[(7)]);
var inst_28875 = (state_28957[(2)]);
var inst_28876 = cljs.core.next.call(null,inst_28856);
var inst_28834 = inst_28876;
var inst_28835 = null;
var inst_28836 = (0);
var inst_28837 = (0);
var state_28957__$1 = (function (){var statearr_28967 = state_28957;
(statearr_28967[(13)] = inst_28837);

(statearr_28967[(14)] = inst_28835);

(statearr_28967[(15)] = inst_28836);

(statearr_28967[(16)] = inst_28834);

(statearr_28967[(17)] = inst_28875);

return statearr_28967;
})();
var statearr_28968_29052 = state_28957__$1;
(statearr_28968_29052[(2)] = null);

(statearr_28968_29052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (39))){
var state_28957__$1 = state_28957;
var statearr_28972_29053 = state_28957__$1;
(statearr_28972_29053[(2)] = null);

(statearr_28972_29053[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (4))){
var inst_28825 = (state_28957[(12)]);
var inst_28825__$1 = (state_28957[(2)]);
var inst_28826 = (inst_28825__$1 == null);
var state_28957__$1 = (function (){var statearr_28973 = state_28957;
(statearr_28973[(12)] = inst_28825__$1);

return statearr_28973;
})();
if(cljs.core.truth_(inst_28826)){
var statearr_28974_29054 = state_28957__$1;
(statearr_28974_29054[(1)] = (5));

} else {
var statearr_28975_29055 = state_28957__$1;
(statearr_28975_29055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (15))){
var inst_28837 = (state_28957[(13)]);
var inst_28835 = (state_28957[(14)]);
var inst_28836 = (state_28957[(15)]);
var inst_28834 = (state_28957[(16)]);
var inst_28852 = (state_28957[(2)]);
var inst_28853 = (inst_28837 + (1));
var tmp28969 = inst_28835;
var tmp28970 = inst_28836;
var tmp28971 = inst_28834;
var inst_28834__$1 = tmp28971;
var inst_28835__$1 = tmp28969;
var inst_28836__$1 = tmp28970;
var inst_28837__$1 = inst_28853;
var state_28957__$1 = (function (){var statearr_28976 = state_28957;
(statearr_28976[(18)] = inst_28852);

(statearr_28976[(13)] = inst_28837__$1);

(statearr_28976[(14)] = inst_28835__$1);

(statearr_28976[(15)] = inst_28836__$1);

(statearr_28976[(16)] = inst_28834__$1);

return statearr_28976;
})();
var statearr_28977_29056 = state_28957__$1;
(statearr_28977_29056[(2)] = null);

(statearr_28977_29056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (21))){
var inst_28879 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_28981_29057 = state_28957__$1;
(statearr_28981_29057[(2)] = inst_28879);

(statearr_28981_29057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (31))){
var inst_28905 = (state_28957[(10)]);
var inst_28909 = done.call(null,null);
var inst_28910 = cljs.core.async.untap_STAR_.call(null,m,inst_28905);
var state_28957__$1 = (function (){var statearr_28982 = state_28957;
(statearr_28982[(19)] = inst_28909);

return statearr_28982;
})();
var statearr_28983_29058 = state_28957__$1;
(statearr_28983_29058[(2)] = inst_28910);

(statearr_28983_29058[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (32))){
var inst_28897 = (state_28957[(20)]);
var inst_28900 = (state_28957[(9)]);
var inst_28898 = (state_28957[(11)]);
var inst_28899 = (state_28957[(21)]);
var inst_28912 = (state_28957[(2)]);
var inst_28913 = (inst_28900 + (1));
var tmp28978 = inst_28897;
var tmp28979 = inst_28898;
var tmp28980 = inst_28899;
var inst_28897__$1 = tmp28978;
var inst_28898__$1 = tmp28979;
var inst_28899__$1 = tmp28980;
var inst_28900__$1 = inst_28913;
var state_28957__$1 = (function (){var statearr_28984 = state_28957;
(statearr_28984[(20)] = inst_28897__$1);

(statearr_28984[(9)] = inst_28900__$1);

(statearr_28984[(11)] = inst_28898__$1);

(statearr_28984[(22)] = inst_28912);

(statearr_28984[(21)] = inst_28899__$1);

return statearr_28984;
})();
var statearr_28985_29059 = state_28957__$1;
(statearr_28985_29059[(2)] = null);

(statearr_28985_29059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (40))){
var inst_28925 = (state_28957[(23)]);
var inst_28929 = done.call(null,null);
var inst_28930 = cljs.core.async.untap_STAR_.call(null,m,inst_28925);
var state_28957__$1 = (function (){var statearr_28986 = state_28957;
(statearr_28986[(24)] = inst_28929);

return statearr_28986;
})();
var statearr_28987_29060 = state_28957__$1;
(statearr_28987_29060[(2)] = inst_28930);

(statearr_28987_29060[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (33))){
var inst_28916 = (state_28957[(25)]);
var inst_28918 = cljs.core.chunked_seq_QMARK_.call(null,inst_28916);
var state_28957__$1 = state_28957;
if(inst_28918){
var statearr_28988_29061 = state_28957__$1;
(statearr_28988_29061[(1)] = (36));

} else {
var statearr_28989_29062 = state_28957__$1;
(statearr_28989_29062[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (13))){
var inst_28846 = (state_28957[(26)]);
var inst_28849 = cljs.core.async.close_BANG_.call(null,inst_28846);
var state_28957__$1 = state_28957;
var statearr_28990_29063 = state_28957__$1;
(statearr_28990_29063[(2)] = inst_28849);

(statearr_28990_29063[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (22))){
var inst_28869 = (state_28957[(8)]);
var inst_28872 = cljs.core.async.close_BANG_.call(null,inst_28869);
var state_28957__$1 = state_28957;
var statearr_28991_29064 = state_28957__$1;
(statearr_28991_29064[(2)] = inst_28872);

(statearr_28991_29064[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (36))){
var inst_28916 = (state_28957[(25)]);
var inst_28920 = cljs.core.chunk_first.call(null,inst_28916);
var inst_28921 = cljs.core.chunk_rest.call(null,inst_28916);
var inst_28922 = cljs.core.count.call(null,inst_28920);
var inst_28897 = inst_28921;
var inst_28898 = inst_28920;
var inst_28899 = inst_28922;
var inst_28900 = (0);
var state_28957__$1 = (function (){var statearr_28992 = state_28957;
(statearr_28992[(20)] = inst_28897);

(statearr_28992[(9)] = inst_28900);

(statearr_28992[(11)] = inst_28898);

(statearr_28992[(21)] = inst_28899);

return statearr_28992;
})();
var statearr_28993_29065 = state_28957__$1;
(statearr_28993_29065[(2)] = null);

(statearr_28993_29065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (41))){
var inst_28916 = (state_28957[(25)]);
var inst_28932 = (state_28957[(2)]);
var inst_28933 = cljs.core.next.call(null,inst_28916);
var inst_28897 = inst_28933;
var inst_28898 = null;
var inst_28899 = (0);
var inst_28900 = (0);
var state_28957__$1 = (function (){var statearr_28994 = state_28957;
(statearr_28994[(20)] = inst_28897);

(statearr_28994[(9)] = inst_28900);

(statearr_28994[(11)] = inst_28898);

(statearr_28994[(27)] = inst_28932);

(statearr_28994[(21)] = inst_28899);

return statearr_28994;
})();
var statearr_28995_29066 = state_28957__$1;
(statearr_28995_29066[(2)] = null);

(statearr_28995_29066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (43))){
var state_28957__$1 = state_28957;
var statearr_28996_29067 = state_28957__$1;
(statearr_28996_29067[(2)] = null);

(statearr_28996_29067[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (29))){
var inst_28941 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_28997_29068 = state_28957__$1;
(statearr_28997_29068[(2)] = inst_28941);

(statearr_28997_29068[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (44))){
var inst_28950 = (state_28957[(2)]);
var state_28957__$1 = (function (){var statearr_28998 = state_28957;
(statearr_28998[(28)] = inst_28950);

return statearr_28998;
})();
var statearr_28999_29069 = state_28957__$1;
(statearr_28999_29069[(2)] = null);

(statearr_28999_29069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (6))){
var inst_28889 = (state_28957[(29)]);
var inst_28888 = cljs.core.deref.call(null,cs);
var inst_28889__$1 = cljs.core.keys.call(null,inst_28888);
var inst_28890 = cljs.core.count.call(null,inst_28889__$1);
var inst_28891 = cljs.core.reset_BANG_.call(null,dctr,inst_28890);
var inst_28896 = cljs.core.seq.call(null,inst_28889__$1);
var inst_28897 = inst_28896;
var inst_28898 = null;
var inst_28899 = (0);
var inst_28900 = (0);
var state_28957__$1 = (function (){var statearr_29000 = state_28957;
(statearr_29000[(20)] = inst_28897);

(statearr_29000[(9)] = inst_28900);

(statearr_29000[(29)] = inst_28889__$1);

(statearr_29000[(11)] = inst_28898);

(statearr_29000[(30)] = inst_28891);

(statearr_29000[(21)] = inst_28899);

return statearr_29000;
})();
var statearr_29001_29070 = state_28957__$1;
(statearr_29001_29070[(2)] = null);

(statearr_29001_29070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (28))){
var inst_28897 = (state_28957[(20)]);
var inst_28916 = (state_28957[(25)]);
var inst_28916__$1 = cljs.core.seq.call(null,inst_28897);
var state_28957__$1 = (function (){var statearr_29002 = state_28957;
(statearr_29002[(25)] = inst_28916__$1);

return statearr_29002;
})();
if(inst_28916__$1){
var statearr_29003_29071 = state_28957__$1;
(statearr_29003_29071[(1)] = (33));

} else {
var statearr_29004_29072 = state_28957__$1;
(statearr_29004_29072[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (25))){
var inst_28900 = (state_28957[(9)]);
var inst_28899 = (state_28957[(21)]);
var inst_28902 = (inst_28900 < inst_28899);
var inst_28903 = inst_28902;
var state_28957__$1 = state_28957;
if(cljs.core.truth_(inst_28903)){
var statearr_29005_29073 = state_28957__$1;
(statearr_29005_29073[(1)] = (27));

} else {
var statearr_29006_29074 = state_28957__$1;
(statearr_29006_29074[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (34))){
var state_28957__$1 = state_28957;
var statearr_29007_29075 = state_28957__$1;
(statearr_29007_29075[(2)] = null);

(statearr_29007_29075[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (17))){
var state_28957__$1 = state_28957;
var statearr_29008_29076 = state_28957__$1;
(statearr_29008_29076[(2)] = null);

(statearr_29008_29076[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (3))){
var inst_28955 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28957__$1,inst_28955);
} else {
if((state_val_28958 === (12))){
var inst_28884 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_29009_29077 = state_28957__$1;
(statearr_29009_29077[(2)] = inst_28884);

(statearr_29009_29077[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (2))){
var state_28957__$1 = state_28957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28957__$1,(4),ch);
} else {
if((state_val_28958 === (23))){
var state_28957__$1 = state_28957;
var statearr_29010_29078 = state_28957__$1;
(statearr_29010_29078[(2)] = null);

(statearr_29010_29078[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (35))){
var inst_28939 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_29011_29079 = state_28957__$1;
(statearr_29011_29079[(2)] = inst_28939);

(statearr_29011_29079[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (19))){
var inst_28856 = (state_28957[(7)]);
var inst_28860 = cljs.core.chunk_first.call(null,inst_28856);
var inst_28861 = cljs.core.chunk_rest.call(null,inst_28856);
var inst_28862 = cljs.core.count.call(null,inst_28860);
var inst_28834 = inst_28861;
var inst_28835 = inst_28860;
var inst_28836 = inst_28862;
var inst_28837 = (0);
var state_28957__$1 = (function (){var statearr_29012 = state_28957;
(statearr_29012[(13)] = inst_28837);

(statearr_29012[(14)] = inst_28835);

(statearr_29012[(15)] = inst_28836);

(statearr_29012[(16)] = inst_28834);

return statearr_29012;
})();
var statearr_29013_29080 = state_28957__$1;
(statearr_29013_29080[(2)] = null);

(statearr_29013_29080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (11))){
var inst_28834 = (state_28957[(16)]);
var inst_28856 = (state_28957[(7)]);
var inst_28856__$1 = cljs.core.seq.call(null,inst_28834);
var state_28957__$1 = (function (){var statearr_29014 = state_28957;
(statearr_29014[(7)] = inst_28856__$1);

return statearr_29014;
})();
if(inst_28856__$1){
var statearr_29015_29081 = state_28957__$1;
(statearr_29015_29081[(1)] = (16));

} else {
var statearr_29016_29082 = state_28957__$1;
(statearr_29016_29082[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (9))){
var inst_28886 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_29017_29083 = state_28957__$1;
(statearr_29017_29083[(2)] = inst_28886);

(statearr_29017_29083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (5))){
var inst_28832 = cljs.core.deref.call(null,cs);
var inst_28833 = cljs.core.seq.call(null,inst_28832);
var inst_28834 = inst_28833;
var inst_28835 = null;
var inst_28836 = (0);
var inst_28837 = (0);
var state_28957__$1 = (function (){var statearr_29018 = state_28957;
(statearr_29018[(13)] = inst_28837);

(statearr_29018[(14)] = inst_28835);

(statearr_29018[(15)] = inst_28836);

(statearr_29018[(16)] = inst_28834);

return statearr_29018;
})();
var statearr_29019_29084 = state_28957__$1;
(statearr_29019_29084[(2)] = null);

(statearr_29019_29084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (14))){
var state_28957__$1 = state_28957;
var statearr_29020_29085 = state_28957__$1;
(statearr_29020_29085[(2)] = null);

(statearr_29020_29085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (45))){
var inst_28947 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_29021_29086 = state_28957__$1;
(statearr_29021_29086[(2)] = inst_28947);

(statearr_29021_29086[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (26))){
var inst_28889 = (state_28957[(29)]);
var inst_28943 = (state_28957[(2)]);
var inst_28944 = cljs.core.seq.call(null,inst_28889);
var state_28957__$1 = (function (){var statearr_29022 = state_28957;
(statearr_29022[(31)] = inst_28943);

return statearr_29022;
})();
if(inst_28944){
var statearr_29023_29087 = state_28957__$1;
(statearr_29023_29087[(1)] = (42));

} else {
var statearr_29024_29088 = state_28957__$1;
(statearr_29024_29088[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (16))){
var inst_28856 = (state_28957[(7)]);
var inst_28858 = cljs.core.chunked_seq_QMARK_.call(null,inst_28856);
var state_28957__$1 = state_28957;
if(inst_28858){
var statearr_29025_29089 = state_28957__$1;
(statearr_29025_29089[(1)] = (19));

} else {
var statearr_29026_29090 = state_28957__$1;
(statearr_29026_29090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (38))){
var inst_28936 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_29027_29091 = state_28957__$1;
(statearr_29027_29091[(2)] = inst_28936);

(statearr_29027_29091[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (30))){
var state_28957__$1 = state_28957;
var statearr_29028_29092 = state_28957__$1;
(statearr_29028_29092[(2)] = null);

(statearr_29028_29092[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (10))){
var inst_28837 = (state_28957[(13)]);
var inst_28835 = (state_28957[(14)]);
var inst_28845 = cljs.core._nth.call(null,inst_28835,inst_28837);
var inst_28846 = cljs.core.nth.call(null,inst_28845,(0),null);
var inst_28847 = cljs.core.nth.call(null,inst_28845,(1),null);
var state_28957__$1 = (function (){var statearr_29029 = state_28957;
(statearr_29029[(26)] = inst_28846);

return statearr_29029;
})();
if(cljs.core.truth_(inst_28847)){
var statearr_29030_29093 = state_28957__$1;
(statearr_29030_29093[(1)] = (13));

} else {
var statearr_29031_29094 = state_28957__$1;
(statearr_29031_29094[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (18))){
var inst_28882 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_29032_29095 = state_28957__$1;
(statearr_29032_29095[(2)] = inst_28882);

(statearr_29032_29095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (42))){
var state_28957__$1 = state_28957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28957__$1,(45),dchan);
} else {
if((state_val_28958 === (37))){
var inst_28825 = (state_28957[(12)]);
var inst_28925 = (state_28957[(23)]);
var inst_28916 = (state_28957[(25)]);
var inst_28925__$1 = cljs.core.first.call(null,inst_28916);
var inst_28926 = cljs.core.async.put_BANG_.call(null,inst_28925__$1,inst_28825,done);
var state_28957__$1 = (function (){var statearr_29033 = state_28957;
(statearr_29033[(23)] = inst_28925__$1);

return statearr_29033;
})();
if(cljs.core.truth_(inst_28926)){
var statearr_29034_29096 = state_28957__$1;
(statearr_29034_29096[(1)] = (39));

} else {
var statearr_29035_29097 = state_28957__$1;
(statearr_29035_29097[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (8))){
var inst_28837 = (state_28957[(13)]);
var inst_28836 = (state_28957[(15)]);
var inst_28839 = (inst_28837 < inst_28836);
var inst_28840 = inst_28839;
var state_28957__$1 = state_28957;
if(cljs.core.truth_(inst_28840)){
var statearr_29036_29098 = state_28957__$1;
(statearr_29036_29098[(1)] = (10));

} else {
var statearr_29037_29099 = state_28957__$1;
(statearr_29037_29099[(1)] = (11));

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
});})(c__27722__auto___29045,cs,m,dchan,dctr,done))
;
return ((function (switch__27610__auto__,c__27722__auto___29045,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27611__auto__ = null;
var cljs$core$async$mult_$_state_machine__27611__auto____0 = (function (){
var statearr_29041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29041[(0)] = cljs$core$async$mult_$_state_machine__27611__auto__);

(statearr_29041[(1)] = (1));

return statearr_29041;
});
var cljs$core$async$mult_$_state_machine__27611__auto____1 = (function (state_28957){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_28957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e29042){if((e29042 instanceof Object)){
var ex__27614__auto__ = e29042;
var statearr_29043_29100 = state_28957;
(statearr_29043_29100[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29101 = state_28957;
state_28957 = G__29101;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27611__auto__ = function(state_28957){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27611__auto____1.call(this,state_28957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27611__auto____0;
cljs$core$async$mult_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27611__auto____1;
return cljs$core$async$mult_$_state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto___29045,cs,m,dchan,dctr,done))
})();
var state__27724__auto__ = (function (){var statearr_29044 = f__27723__auto__.call(null);
(statearr_29044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___29045);

return statearr_29044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto___29045,cs,m,dchan,dctr,done))
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
var args29102 = [];
var len__23653__auto___29105 = arguments.length;
var i__23654__auto___29106 = (0);
while(true){
if((i__23654__auto___29106 < len__23653__auto___29105)){
args29102.push((arguments[i__23654__auto___29106]));

var G__29107 = (i__23654__auto___29106 + (1));
i__23654__auto___29106 = G__29107;
continue;
} else {
}
break;
}

var G__29104 = args29102.length;
switch (G__29104) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29102.length)].join('')));

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
var len__23653__auto___29119 = arguments.length;
var i__23654__auto___29120 = (0);
while(true){
if((i__23654__auto___29120 < len__23653__auto___29119)){
args__23660__auto__.push((arguments[i__23654__auto___29120]));

var G__29121 = (i__23654__auto___29120 + (1));
i__23654__auto___29120 = G__29121;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((3) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23661__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29113){
var map__29114 = p__29113;
var map__29114__$1 = ((((!((map__29114 == null)))?((((map__29114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29114):map__29114);
var opts = map__29114__$1;
var statearr_29116_29122 = state;
(statearr_29116_29122[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29114,map__29114__$1,opts){
return (function (val){
var statearr_29117_29123 = state;
(statearr_29117_29123[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29114,map__29114__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29118_29124 = state;
(statearr_29118_29124[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29109){
var G__29110 = cljs.core.first.call(null,seq29109);
var seq29109__$1 = cljs.core.next.call(null,seq29109);
var G__29111 = cljs.core.first.call(null,seq29109__$1);
var seq29109__$2 = cljs.core.next.call(null,seq29109__$1);
var G__29112 = cljs.core.first.call(null,seq29109__$2);
var seq29109__$3 = cljs.core.next.call(null,seq29109__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29110,G__29111,G__29112,seq29109__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29290 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29290 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29291){
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
this.meta29291 = meta29291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29292,meta29291__$1){
var self__ = this;
var _29292__$1 = this;
return (new cljs.core.async.t_cljs$core$async29290(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29291__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29292){
var self__ = this;
var _29292__$1 = this;
return self__.meta29291;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29290.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29291","meta29291",-1409481786,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29290.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29290";

cljs.core.async.t_cljs$core$async29290.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async29290");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29290 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29290(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29291){
return (new cljs.core.async.t_cljs$core$async29290(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29291));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29290(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27722__auto___29455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto___29455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto___29455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29392){
var state_val_29393 = (state_29392[(1)]);
if((state_val_29393 === (7))){
var inst_29308 = (state_29392[(2)]);
var state_29392__$1 = state_29392;
var statearr_29394_29456 = state_29392__$1;
(statearr_29394_29456[(2)] = inst_29308);

(statearr_29394_29456[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (20))){
var inst_29320 = (state_29392[(7)]);
var state_29392__$1 = state_29392;
var statearr_29395_29457 = state_29392__$1;
(statearr_29395_29457[(2)] = inst_29320);

(statearr_29395_29457[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (27))){
var state_29392__$1 = state_29392;
var statearr_29396_29458 = state_29392__$1;
(statearr_29396_29458[(2)] = null);

(statearr_29396_29458[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (1))){
var inst_29296 = (state_29392[(8)]);
var inst_29296__$1 = calc_state.call(null);
var inst_29298 = (inst_29296__$1 == null);
var inst_29299 = cljs.core.not.call(null,inst_29298);
var state_29392__$1 = (function (){var statearr_29397 = state_29392;
(statearr_29397[(8)] = inst_29296__$1);

return statearr_29397;
})();
if(inst_29299){
var statearr_29398_29459 = state_29392__$1;
(statearr_29398_29459[(1)] = (2));

} else {
var statearr_29399_29460 = state_29392__$1;
(statearr_29399_29460[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (24))){
var inst_29366 = (state_29392[(9)]);
var inst_29352 = (state_29392[(10)]);
var inst_29343 = (state_29392[(11)]);
var inst_29366__$1 = inst_29343.call(null,inst_29352);
var state_29392__$1 = (function (){var statearr_29400 = state_29392;
(statearr_29400[(9)] = inst_29366__$1);

return statearr_29400;
})();
if(cljs.core.truth_(inst_29366__$1)){
var statearr_29401_29461 = state_29392__$1;
(statearr_29401_29461[(1)] = (29));

} else {
var statearr_29402_29462 = state_29392__$1;
(statearr_29402_29462[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (4))){
var inst_29311 = (state_29392[(2)]);
var state_29392__$1 = state_29392;
if(cljs.core.truth_(inst_29311)){
var statearr_29403_29463 = state_29392__$1;
(statearr_29403_29463[(1)] = (8));

} else {
var statearr_29404_29464 = state_29392__$1;
(statearr_29404_29464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (15))){
var inst_29337 = (state_29392[(2)]);
var state_29392__$1 = state_29392;
if(cljs.core.truth_(inst_29337)){
var statearr_29405_29465 = state_29392__$1;
(statearr_29405_29465[(1)] = (19));

} else {
var statearr_29406_29466 = state_29392__$1;
(statearr_29406_29466[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (21))){
var inst_29342 = (state_29392[(12)]);
var inst_29342__$1 = (state_29392[(2)]);
var inst_29343 = cljs.core.get.call(null,inst_29342__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29344 = cljs.core.get.call(null,inst_29342__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29345 = cljs.core.get.call(null,inst_29342__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29392__$1 = (function (){var statearr_29407 = state_29392;
(statearr_29407[(13)] = inst_29344);

(statearr_29407[(11)] = inst_29343);

(statearr_29407[(12)] = inst_29342__$1);

return statearr_29407;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29392__$1,(22),inst_29345);
} else {
if((state_val_29393 === (31))){
var inst_29374 = (state_29392[(2)]);
var state_29392__$1 = state_29392;
if(cljs.core.truth_(inst_29374)){
var statearr_29408_29467 = state_29392__$1;
(statearr_29408_29467[(1)] = (32));

} else {
var statearr_29409_29468 = state_29392__$1;
(statearr_29409_29468[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (32))){
var inst_29351 = (state_29392[(14)]);
var state_29392__$1 = state_29392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29392__$1,(35),out,inst_29351);
} else {
if((state_val_29393 === (33))){
var inst_29342 = (state_29392[(12)]);
var inst_29320 = inst_29342;
var state_29392__$1 = (function (){var statearr_29410 = state_29392;
(statearr_29410[(7)] = inst_29320);

return statearr_29410;
})();
var statearr_29411_29469 = state_29392__$1;
(statearr_29411_29469[(2)] = null);

(statearr_29411_29469[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (13))){
var inst_29320 = (state_29392[(7)]);
var inst_29327 = inst_29320.cljs$lang$protocol_mask$partition0$;
var inst_29328 = (inst_29327 & (64));
var inst_29329 = inst_29320.cljs$core$ISeq$;
var inst_29330 = (inst_29328) || (inst_29329);
var state_29392__$1 = state_29392;
if(cljs.core.truth_(inst_29330)){
var statearr_29412_29470 = state_29392__$1;
(statearr_29412_29470[(1)] = (16));

} else {
var statearr_29413_29471 = state_29392__$1;
(statearr_29413_29471[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (22))){
var inst_29351 = (state_29392[(14)]);
var inst_29352 = (state_29392[(10)]);
var inst_29350 = (state_29392[(2)]);
var inst_29351__$1 = cljs.core.nth.call(null,inst_29350,(0),null);
var inst_29352__$1 = cljs.core.nth.call(null,inst_29350,(1),null);
var inst_29353 = (inst_29351__$1 == null);
var inst_29354 = cljs.core._EQ_.call(null,inst_29352__$1,change);
var inst_29355 = (inst_29353) || (inst_29354);
var state_29392__$1 = (function (){var statearr_29414 = state_29392;
(statearr_29414[(14)] = inst_29351__$1);

(statearr_29414[(10)] = inst_29352__$1);

return statearr_29414;
})();
if(cljs.core.truth_(inst_29355)){
var statearr_29415_29472 = state_29392__$1;
(statearr_29415_29472[(1)] = (23));

} else {
var statearr_29416_29473 = state_29392__$1;
(statearr_29416_29473[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (36))){
var inst_29342 = (state_29392[(12)]);
var inst_29320 = inst_29342;
var state_29392__$1 = (function (){var statearr_29417 = state_29392;
(statearr_29417[(7)] = inst_29320);

return statearr_29417;
})();
var statearr_29418_29474 = state_29392__$1;
(statearr_29418_29474[(2)] = null);

(statearr_29418_29474[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (29))){
var inst_29366 = (state_29392[(9)]);
var state_29392__$1 = state_29392;
var statearr_29419_29475 = state_29392__$1;
(statearr_29419_29475[(2)] = inst_29366);

(statearr_29419_29475[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (6))){
var state_29392__$1 = state_29392;
var statearr_29420_29476 = state_29392__$1;
(statearr_29420_29476[(2)] = false);

(statearr_29420_29476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (28))){
var inst_29362 = (state_29392[(2)]);
var inst_29363 = calc_state.call(null);
var inst_29320 = inst_29363;
var state_29392__$1 = (function (){var statearr_29421 = state_29392;
(statearr_29421[(7)] = inst_29320);

(statearr_29421[(15)] = inst_29362);

return statearr_29421;
})();
var statearr_29422_29477 = state_29392__$1;
(statearr_29422_29477[(2)] = null);

(statearr_29422_29477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (25))){
var inst_29388 = (state_29392[(2)]);
var state_29392__$1 = state_29392;
var statearr_29423_29478 = state_29392__$1;
(statearr_29423_29478[(2)] = inst_29388);

(statearr_29423_29478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (34))){
var inst_29386 = (state_29392[(2)]);
var state_29392__$1 = state_29392;
var statearr_29424_29479 = state_29392__$1;
(statearr_29424_29479[(2)] = inst_29386);

(statearr_29424_29479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (17))){
var state_29392__$1 = state_29392;
var statearr_29425_29480 = state_29392__$1;
(statearr_29425_29480[(2)] = false);

(statearr_29425_29480[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (3))){
var state_29392__$1 = state_29392;
var statearr_29426_29481 = state_29392__$1;
(statearr_29426_29481[(2)] = false);

(statearr_29426_29481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (12))){
var inst_29390 = (state_29392[(2)]);
var state_29392__$1 = state_29392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29392__$1,inst_29390);
} else {
if((state_val_29393 === (2))){
var inst_29296 = (state_29392[(8)]);
var inst_29301 = inst_29296.cljs$lang$protocol_mask$partition0$;
var inst_29302 = (inst_29301 & (64));
var inst_29303 = inst_29296.cljs$core$ISeq$;
var inst_29304 = (inst_29302) || (inst_29303);
var state_29392__$1 = state_29392;
if(cljs.core.truth_(inst_29304)){
var statearr_29427_29482 = state_29392__$1;
(statearr_29427_29482[(1)] = (5));

} else {
var statearr_29428_29483 = state_29392__$1;
(statearr_29428_29483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (23))){
var inst_29351 = (state_29392[(14)]);
var inst_29357 = (inst_29351 == null);
var state_29392__$1 = state_29392;
if(cljs.core.truth_(inst_29357)){
var statearr_29429_29484 = state_29392__$1;
(statearr_29429_29484[(1)] = (26));

} else {
var statearr_29430_29485 = state_29392__$1;
(statearr_29430_29485[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (35))){
var inst_29377 = (state_29392[(2)]);
var state_29392__$1 = state_29392;
if(cljs.core.truth_(inst_29377)){
var statearr_29431_29486 = state_29392__$1;
(statearr_29431_29486[(1)] = (36));

} else {
var statearr_29432_29487 = state_29392__$1;
(statearr_29432_29487[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (19))){
var inst_29320 = (state_29392[(7)]);
var inst_29339 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29320);
var state_29392__$1 = state_29392;
var statearr_29433_29488 = state_29392__$1;
(statearr_29433_29488[(2)] = inst_29339);

(statearr_29433_29488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (11))){
var inst_29320 = (state_29392[(7)]);
var inst_29324 = (inst_29320 == null);
var inst_29325 = cljs.core.not.call(null,inst_29324);
var state_29392__$1 = state_29392;
if(inst_29325){
var statearr_29434_29489 = state_29392__$1;
(statearr_29434_29489[(1)] = (13));

} else {
var statearr_29435_29490 = state_29392__$1;
(statearr_29435_29490[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (9))){
var inst_29296 = (state_29392[(8)]);
var state_29392__$1 = state_29392;
var statearr_29436_29491 = state_29392__$1;
(statearr_29436_29491[(2)] = inst_29296);

(statearr_29436_29491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (5))){
var state_29392__$1 = state_29392;
var statearr_29437_29492 = state_29392__$1;
(statearr_29437_29492[(2)] = true);

(statearr_29437_29492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (14))){
var state_29392__$1 = state_29392;
var statearr_29438_29493 = state_29392__$1;
(statearr_29438_29493[(2)] = false);

(statearr_29438_29493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (26))){
var inst_29352 = (state_29392[(10)]);
var inst_29359 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29352);
var state_29392__$1 = state_29392;
var statearr_29439_29494 = state_29392__$1;
(statearr_29439_29494[(2)] = inst_29359);

(statearr_29439_29494[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (16))){
var state_29392__$1 = state_29392;
var statearr_29440_29495 = state_29392__$1;
(statearr_29440_29495[(2)] = true);

(statearr_29440_29495[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (38))){
var inst_29382 = (state_29392[(2)]);
var state_29392__$1 = state_29392;
var statearr_29441_29496 = state_29392__$1;
(statearr_29441_29496[(2)] = inst_29382);

(statearr_29441_29496[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (30))){
var inst_29344 = (state_29392[(13)]);
var inst_29352 = (state_29392[(10)]);
var inst_29343 = (state_29392[(11)]);
var inst_29369 = cljs.core.empty_QMARK_.call(null,inst_29343);
var inst_29370 = inst_29344.call(null,inst_29352);
var inst_29371 = cljs.core.not.call(null,inst_29370);
var inst_29372 = (inst_29369) && (inst_29371);
var state_29392__$1 = state_29392;
var statearr_29442_29497 = state_29392__$1;
(statearr_29442_29497[(2)] = inst_29372);

(statearr_29442_29497[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (10))){
var inst_29296 = (state_29392[(8)]);
var inst_29316 = (state_29392[(2)]);
var inst_29317 = cljs.core.get.call(null,inst_29316,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29318 = cljs.core.get.call(null,inst_29316,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29319 = cljs.core.get.call(null,inst_29316,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29320 = inst_29296;
var state_29392__$1 = (function (){var statearr_29443 = state_29392;
(statearr_29443[(7)] = inst_29320);

(statearr_29443[(16)] = inst_29318);

(statearr_29443[(17)] = inst_29319);

(statearr_29443[(18)] = inst_29317);

return statearr_29443;
})();
var statearr_29444_29498 = state_29392__$1;
(statearr_29444_29498[(2)] = null);

(statearr_29444_29498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (18))){
var inst_29334 = (state_29392[(2)]);
var state_29392__$1 = state_29392;
var statearr_29445_29499 = state_29392__$1;
(statearr_29445_29499[(2)] = inst_29334);

(statearr_29445_29499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (37))){
var state_29392__$1 = state_29392;
var statearr_29446_29500 = state_29392__$1;
(statearr_29446_29500[(2)] = null);

(statearr_29446_29500[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29393 === (8))){
var inst_29296 = (state_29392[(8)]);
var inst_29313 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29296);
var state_29392__$1 = state_29392;
var statearr_29447_29501 = state_29392__$1;
(statearr_29447_29501[(2)] = inst_29313);

(statearr_29447_29501[(1)] = (10));


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
});})(c__27722__auto___29455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27610__auto__,c__27722__auto___29455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27611__auto__ = null;
var cljs$core$async$mix_$_state_machine__27611__auto____0 = (function (){
var statearr_29451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29451[(0)] = cljs$core$async$mix_$_state_machine__27611__auto__);

(statearr_29451[(1)] = (1));

return statearr_29451;
});
var cljs$core$async$mix_$_state_machine__27611__auto____1 = (function (state_29392){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_29392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e29452){if((e29452 instanceof Object)){
var ex__27614__auto__ = e29452;
var statearr_29453_29502 = state_29392;
(statearr_29453_29502[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29503 = state_29392;
state_29392 = G__29503;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27611__auto__ = function(state_29392){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27611__auto____1.call(this,state_29392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27611__auto____0;
cljs$core$async$mix_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27611__auto____1;
return cljs$core$async$mix_$_state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto___29455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27724__auto__ = (function (){var statearr_29454 = f__27723__auto__.call(null);
(statearr_29454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___29455);

return statearr_29454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto___29455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args29504 = [];
var len__23653__auto___29507 = arguments.length;
var i__23654__auto___29508 = (0);
while(true){
if((i__23654__auto___29508 < len__23653__auto___29507)){
args29504.push((arguments[i__23654__auto___29508]));

var G__29509 = (i__23654__auto___29508 + (1));
i__23654__auto___29508 = G__29509;
continue;
} else {
}
break;
}

var G__29506 = args29504.length;
switch (G__29506) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29504.length)].join('')));

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
var args29512 = [];
var len__23653__auto___29637 = arguments.length;
var i__23654__auto___29638 = (0);
while(true){
if((i__23654__auto___29638 < len__23653__auto___29637)){
args29512.push((arguments[i__23654__auto___29638]));

var G__29639 = (i__23654__auto___29638 + (1));
i__23654__auto___29638 = G__29639;
continue;
} else {
}
break;
}

var G__29514 = args29512.length;
switch (G__29514) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29512.length)].join('')));

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
return (function (p1__29511_SHARP_){
if(cljs.core.truth_(p1__29511_SHARP_.call(null,topic))){
return p1__29511_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29511_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__22578__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29515 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29516){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29516 = meta29516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29517,meta29516__$1){
var self__ = this;
var _29517__$1 = this;
return (new cljs.core.async.t_cljs$core$async29515(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29516__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29517){
var self__ = this;
var _29517__$1 = this;
return self__.meta29516;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29515.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29515.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29515.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29515.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29515.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29515.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29515.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29515.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29516","meta29516",-84229480,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29515.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29515";

cljs.core.async.t_cljs$core$async29515.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async29515");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29515 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29515(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29516){
return (new cljs.core.async.t_cljs$core$async29515(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29516));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29515(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27722__auto___29641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto___29641,mults,ensure_mult,p){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto___29641,mults,ensure_mult,p){
return (function (state_29589){
var state_val_29590 = (state_29589[(1)]);
if((state_val_29590 === (7))){
var inst_29585 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
var statearr_29591_29642 = state_29589__$1;
(statearr_29591_29642[(2)] = inst_29585);

(statearr_29591_29642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (20))){
var state_29589__$1 = state_29589;
var statearr_29592_29643 = state_29589__$1;
(statearr_29592_29643[(2)] = null);

(statearr_29592_29643[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (1))){
var state_29589__$1 = state_29589;
var statearr_29593_29644 = state_29589__$1;
(statearr_29593_29644[(2)] = null);

(statearr_29593_29644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (24))){
var inst_29568 = (state_29589[(7)]);
var inst_29577 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29568);
var state_29589__$1 = state_29589;
var statearr_29594_29645 = state_29589__$1;
(statearr_29594_29645[(2)] = inst_29577);

(statearr_29594_29645[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (4))){
var inst_29520 = (state_29589[(8)]);
var inst_29520__$1 = (state_29589[(2)]);
var inst_29521 = (inst_29520__$1 == null);
var state_29589__$1 = (function (){var statearr_29595 = state_29589;
(statearr_29595[(8)] = inst_29520__$1);

return statearr_29595;
})();
if(cljs.core.truth_(inst_29521)){
var statearr_29596_29646 = state_29589__$1;
(statearr_29596_29646[(1)] = (5));

} else {
var statearr_29597_29647 = state_29589__$1;
(statearr_29597_29647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (15))){
var inst_29562 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
var statearr_29598_29648 = state_29589__$1;
(statearr_29598_29648[(2)] = inst_29562);

(statearr_29598_29648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (21))){
var inst_29582 = (state_29589[(2)]);
var state_29589__$1 = (function (){var statearr_29599 = state_29589;
(statearr_29599[(9)] = inst_29582);

return statearr_29599;
})();
var statearr_29600_29649 = state_29589__$1;
(statearr_29600_29649[(2)] = null);

(statearr_29600_29649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (13))){
var inst_29544 = (state_29589[(10)]);
var inst_29546 = cljs.core.chunked_seq_QMARK_.call(null,inst_29544);
var state_29589__$1 = state_29589;
if(inst_29546){
var statearr_29601_29650 = state_29589__$1;
(statearr_29601_29650[(1)] = (16));

} else {
var statearr_29602_29651 = state_29589__$1;
(statearr_29602_29651[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (22))){
var inst_29574 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
if(cljs.core.truth_(inst_29574)){
var statearr_29603_29652 = state_29589__$1;
(statearr_29603_29652[(1)] = (23));

} else {
var statearr_29604_29653 = state_29589__$1;
(statearr_29604_29653[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (6))){
var inst_29570 = (state_29589[(11)]);
var inst_29568 = (state_29589[(7)]);
var inst_29520 = (state_29589[(8)]);
var inst_29568__$1 = topic_fn.call(null,inst_29520);
var inst_29569 = cljs.core.deref.call(null,mults);
var inst_29570__$1 = cljs.core.get.call(null,inst_29569,inst_29568__$1);
var state_29589__$1 = (function (){var statearr_29605 = state_29589;
(statearr_29605[(11)] = inst_29570__$1);

(statearr_29605[(7)] = inst_29568__$1);

return statearr_29605;
})();
if(cljs.core.truth_(inst_29570__$1)){
var statearr_29606_29654 = state_29589__$1;
(statearr_29606_29654[(1)] = (19));

} else {
var statearr_29607_29655 = state_29589__$1;
(statearr_29607_29655[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (25))){
var inst_29579 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
var statearr_29608_29656 = state_29589__$1;
(statearr_29608_29656[(2)] = inst_29579);

(statearr_29608_29656[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (17))){
var inst_29544 = (state_29589[(10)]);
var inst_29553 = cljs.core.first.call(null,inst_29544);
var inst_29554 = cljs.core.async.muxch_STAR_.call(null,inst_29553);
var inst_29555 = cljs.core.async.close_BANG_.call(null,inst_29554);
var inst_29556 = cljs.core.next.call(null,inst_29544);
var inst_29530 = inst_29556;
var inst_29531 = null;
var inst_29532 = (0);
var inst_29533 = (0);
var state_29589__$1 = (function (){var statearr_29609 = state_29589;
(statearr_29609[(12)] = inst_29530);

(statearr_29609[(13)] = inst_29532);

(statearr_29609[(14)] = inst_29533);

(statearr_29609[(15)] = inst_29531);

(statearr_29609[(16)] = inst_29555);

return statearr_29609;
})();
var statearr_29610_29657 = state_29589__$1;
(statearr_29610_29657[(2)] = null);

(statearr_29610_29657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (3))){
var inst_29587 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29589__$1,inst_29587);
} else {
if((state_val_29590 === (12))){
var inst_29564 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
var statearr_29611_29658 = state_29589__$1;
(statearr_29611_29658[(2)] = inst_29564);

(statearr_29611_29658[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (2))){
var state_29589__$1 = state_29589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29589__$1,(4),ch);
} else {
if((state_val_29590 === (23))){
var state_29589__$1 = state_29589;
var statearr_29612_29659 = state_29589__$1;
(statearr_29612_29659[(2)] = null);

(statearr_29612_29659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (19))){
var inst_29570 = (state_29589[(11)]);
var inst_29520 = (state_29589[(8)]);
var inst_29572 = cljs.core.async.muxch_STAR_.call(null,inst_29570);
var state_29589__$1 = state_29589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29589__$1,(22),inst_29572,inst_29520);
} else {
if((state_val_29590 === (11))){
var inst_29530 = (state_29589[(12)]);
var inst_29544 = (state_29589[(10)]);
var inst_29544__$1 = cljs.core.seq.call(null,inst_29530);
var state_29589__$1 = (function (){var statearr_29613 = state_29589;
(statearr_29613[(10)] = inst_29544__$1);

return statearr_29613;
})();
if(inst_29544__$1){
var statearr_29614_29660 = state_29589__$1;
(statearr_29614_29660[(1)] = (13));

} else {
var statearr_29615_29661 = state_29589__$1;
(statearr_29615_29661[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (9))){
var inst_29566 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
var statearr_29616_29662 = state_29589__$1;
(statearr_29616_29662[(2)] = inst_29566);

(statearr_29616_29662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (5))){
var inst_29527 = cljs.core.deref.call(null,mults);
var inst_29528 = cljs.core.vals.call(null,inst_29527);
var inst_29529 = cljs.core.seq.call(null,inst_29528);
var inst_29530 = inst_29529;
var inst_29531 = null;
var inst_29532 = (0);
var inst_29533 = (0);
var state_29589__$1 = (function (){var statearr_29617 = state_29589;
(statearr_29617[(12)] = inst_29530);

(statearr_29617[(13)] = inst_29532);

(statearr_29617[(14)] = inst_29533);

(statearr_29617[(15)] = inst_29531);

return statearr_29617;
})();
var statearr_29618_29663 = state_29589__$1;
(statearr_29618_29663[(2)] = null);

(statearr_29618_29663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (14))){
var state_29589__$1 = state_29589;
var statearr_29622_29664 = state_29589__$1;
(statearr_29622_29664[(2)] = null);

(statearr_29622_29664[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (16))){
var inst_29544 = (state_29589[(10)]);
var inst_29548 = cljs.core.chunk_first.call(null,inst_29544);
var inst_29549 = cljs.core.chunk_rest.call(null,inst_29544);
var inst_29550 = cljs.core.count.call(null,inst_29548);
var inst_29530 = inst_29549;
var inst_29531 = inst_29548;
var inst_29532 = inst_29550;
var inst_29533 = (0);
var state_29589__$1 = (function (){var statearr_29623 = state_29589;
(statearr_29623[(12)] = inst_29530);

(statearr_29623[(13)] = inst_29532);

(statearr_29623[(14)] = inst_29533);

(statearr_29623[(15)] = inst_29531);

return statearr_29623;
})();
var statearr_29624_29665 = state_29589__$1;
(statearr_29624_29665[(2)] = null);

(statearr_29624_29665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (10))){
var inst_29530 = (state_29589[(12)]);
var inst_29532 = (state_29589[(13)]);
var inst_29533 = (state_29589[(14)]);
var inst_29531 = (state_29589[(15)]);
var inst_29538 = cljs.core._nth.call(null,inst_29531,inst_29533);
var inst_29539 = cljs.core.async.muxch_STAR_.call(null,inst_29538);
var inst_29540 = cljs.core.async.close_BANG_.call(null,inst_29539);
var inst_29541 = (inst_29533 + (1));
var tmp29619 = inst_29530;
var tmp29620 = inst_29532;
var tmp29621 = inst_29531;
var inst_29530__$1 = tmp29619;
var inst_29531__$1 = tmp29621;
var inst_29532__$1 = tmp29620;
var inst_29533__$1 = inst_29541;
var state_29589__$1 = (function (){var statearr_29625 = state_29589;
(statearr_29625[(12)] = inst_29530__$1);

(statearr_29625[(13)] = inst_29532__$1);

(statearr_29625[(14)] = inst_29533__$1);

(statearr_29625[(15)] = inst_29531__$1);

(statearr_29625[(17)] = inst_29540);

return statearr_29625;
})();
var statearr_29626_29666 = state_29589__$1;
(statearr_29626_29666[(2)] = null);

(statearr_29626_29666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (18))){
var inst_29559 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
var statearr_29627_29667 = state_29589__$1;
(statearr_29627_29667[(2)] = inst_29559);

(statearr_29627_29667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (8))){
var inst_29532 = (state_29589[(13)]);
var inst_29533 = (state_29589[(14)]);
var inst_29535 = (inst_29533 < inst_29532);
var inst_29536 = inst_29535;
var state_29589__$1 = state_29589;
if(cljs.core.truth_(inst_29536)){
var statearr_29628_29668 = state_29589__$1;
(statearr_29628_29668[(1)] = (10));

} else {
var statearr_29629_29669 = state_29589__$1;
(statearr_29629_29669[(1)] = (11));

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
});})(c__27722__auto___29641,mults,ensure_mult,p))
;
return ((function (switch__27610__auto__,c__27722__auto___29641,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27611__auto__ = null;
var cljs$core$async$state_machine__27611__auto____0 = (function (){
var statearr_29633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29633[(0)] = cljs$core$async$state_machine__27611__auto__);

(statearr_29633[(1)] = (1));

return statearr_29633;
});
var cljs$core$async$state_machine__27611__auto____1 = (function (state_29589){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_29589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e29634){if((e29634 instanceof Object)){
var ex__27614__auto__ = e29634;
var statearr_29635_29670 = state_29589;
(statearr_29635_29670[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29671 = state_29589;
state_29589 = G__29671;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$state_machine__27611__auto__ = function(state_29589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27611__auto____1.call(this,state_29589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27611__auto____0;
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27611__auto____1;
return cljs$core$async$state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto___29641,mults,ensure_mult,p))
})();
var state__27724__auto__ = (function (){var statearr_29636 = f__27723__auto__.call(null);
(statearr_29636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___29641);

return statearr_29636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto___29641,mults,ensure_mult,p))
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
var args29672 = [];
var len__23653__auto___29675 = arguments.length;
var i__23654__auto___29676 = (0);
while(true){
if((i__23654__auto___29676 < len__23653__auto___29675)){
args29672.push((arguments[i__23654__auto___29676]));

var G__29677 = (i__23654__auto___29676 + (1));
i__23654__auto___29676 = G__29677;
continue;
} else {
}
break;
}

var G__29674 = args29672.length;
switch (G__29674) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29672.length)].join('')));

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
var args29679 = [];
var len__23653__auto___29682 = arguments.length;
var i__23654__auto___29683 = (0);
while(true){
if((i__23654__auto___29683 < len__23653__auto___29682)){
args29679.push((arguments[i__23654__auto___29683]));

var G__29684 = (i__23654__auto___29683 + (1));
i__23654__auto___29683 = G__29684;
continue;
} else {
}
break;
}

var G__29681 = args29679.length;
switch (G__29681) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29679.length)].join('')));

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
var args29686 = [];
var len__23653__auto___29757 = arguments.length;
var i__23654__auto___29758 = (0);
while(true){
if((i__23654__auto___29758 < len__23653__auto___29757)){
args29686.push((arguments[i__23654__auto___29758]));

var G__29759 = (i__23654__auto___29758 + (1));
i__23654__auto___29758 = G__29759;
continue;
} else {
}
break;
}

var G__29688 = args29686.length;
switch (G__29688) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29686.length)].join('')));

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
var c__27722__auto___29761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto___29761,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto___29761,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29727){
var state_val_29728 = (state_29727[(1)]);
if((state_val_29728 === (7))){
var state_29727__$1 = state_29727;
var statearr_29729_29762 = state_29727__$1;
(statearr_29729_29762[(2)] = null);

(statearr_29729_29762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (1))){
var state_29727__$1 = state_29727;
var statearr_29730_29763 = state_29727__$1;
(statearr_29730_29763[(2)] = null);

(statearr_29730_29763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (4))){
var inst_29691 = (state_29727[(7)]);
var inst_29693 = (inst_29691 < cnt);
var state_29727__$1 = state_29727;
if(cljs.core.truth_(inst_29693)){
var statearr_29731_29764 = state_29727__$1;
(statearr_29731_29764[(1)] = (6));

} else {
var statearr_29732_29765 = state_29727__$1;
(statearr_29732_29765[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (15))){
var inst_29723 = (state_29727[(2)]);
var state_29727__$1 = state_29727;
var statearr_29733_29766 = state_29727__$1;
(statearr_29733_29766[(2)] = inst_29723);

(statearr_29733_29766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (13))){
var inst_29716 = cljs.core.async.close_BANG_.call(null,out);
var state_29727__$1 = state_29727;
var statearr_29734_29767 = state_29727__$1;
(statearr_29734_29767[(2)] = inst_29716);

(statearr_29734_29767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (6))){
var state_29727__$1 = state_29727;
var statearr_29735_29768 = state_29727__$1;
(statearr_29735_29768[(2)] = null);

(statearr_29735_29768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (3))){
var inst_29725 = (state_29727[(2)]);
var state_29727__$1 = state_29727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29727__$1,inst_29725);
} else {
if((state_val_29728 === (12))){
var inst_29713 = (state_29727[(8)]);
var inst_29713__$1 = (state_29727[(2)]);
var inst_29714 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29713__$1);
var state_29727__$1 = (function (){var statearr_29736 = state_29727;
(statearr_29736[(8)] = inst_29713__$1);

return statearr_29736;
})();
if(cljs.core.truth_(inst_29714)){
var statearr_29737_29769 = state_29727__$1;
(statearr_29737_29769[(1)] = (13));

} else {
var statearr_29738_29770 = state_29727__$1;
(statearr_29738_29770[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (2))){
var inst_29690 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29691 = (0);
var state_29727__$1 = (function (){var statearr_29739 = state_29727;
(statearr_29739[(9)] = inst_29690);

(statearr_29739[(7)] = inst_29691);

return statearr_29739;
})();
var statearr_29740_29771 = state_29727__$1;
(statearr_29740_29771[(2)] = null);

(statearr_29740_29771[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (11))){
var inst_29691 = (state_29727[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29727,(10),Object,null,(9));
var inst_29700 = chs__$1.call(null,inst_29691);
var inst_29701 = done.call(null,inst_29691);
var inst_29702 = cljs.core.async.take_BANG_.call(null,inst_29700,inst_29701);
var state_29727__$1 = state_29727;
var statearr_29741_29772 = state_29727__$1;
(statearr_29741_29772[(2)] = inst_29702);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29727__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (9))){
var inst_29691 = (state_29727[(7)]);
var inst_29704 = (state_29727[(2)]);
var inst_29705 = (inst_29691 + (1));
var inst_29691__$1 = inst_29705;
var state_29727__$1 = (function (){var statearr_29742 = state_29727;
(statearr_29742[(10)] = inst_29704);

(statearr_29742[(7)] = inst_29691__$1);

return statearr_29742;
})();
var statearr_29743_29773 = state_29727__$1;
(statearr_29743_29773[(2)] = null);

(statearr_29743_29773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (5))){
var inst_29711 = (state_29727[(2)]);
var state_29727__$1 = (function (){var statearr_29744 = state_29727;
(statearr_29744[(11)] = inst_29711);

return statearr_29744;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29727__$1,(12),dchan);
} else {
if((state_val_29728 === (14))){
var inst_29713 = (state_29727[(8)]);
var inst_29718 = cljs.core.apply.call(null,f,inst_29713);
var state_29727__$1 = state_29727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29727__$1,(16),out,inst_29718);
} else {
if((state_val_29728 === (16))){
var inst_29720 = (state_29727[(2)]);
var state_29727__$1 = (function (){var statearr_29745 = state_29727;
(statearr_29745[(12)] = inst_29720);

return statearr_29745;
})();
var statearr_29746_29774 = state_29727__$1;
(statearr_29746_29774[(2)] = null);

(statearr_29746_29774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (10))){
var inst_29695 = (state_29727[(2)]);
var inst_29696 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29727__$1 = (function (){var statearr_29747 = state_29727;
(statearr_29747[(13)] = inst_29695);

return statearr_29747;
})();
var statearr_29748_29775 = state_29727__$1;
(statearr_29748_29775[(2)] = inst_29696);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29727__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (8))){
var inst_29709 = (state_29727[(2)]);
var state_29727__$1 = state_29727;
var statearr_29749_29776 = state_29727__$1;
(statearr_29749_29776[(2)] = inst_29709);

(statearr_29749_29776[(1)] = (5));


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
});})(c__27722__auto___29761,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27610__auto__,c__27722__auto___29761,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27611__auto__ = null;
var cljs$core$async$state_machine__27611__auto____0 = (function (){
var statearr_29753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29753[(0)] = cljs$core$async$state_machine__27611__auto__);

(statearr_29753[(1)] = (1));

return statearr_29753;
});
var cljs$core$async$state_machine__27611__auto____1 = (function (state_29727){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_29727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e29754){if((e29754 instanceof Object)){
var ex__27614__auto__ = e29754;
var statearr_29755_29777 = state_29727;
(statearr_29755_29777[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29778 = state_29727;
state_29727 = G__29778;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$state_machine__27611__auto__ = function(state_29727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27611__auto____1.call(this,state_29727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27611__auto____0;
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27611__auto____1;
return cljs$core$async$state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto___29761,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27724__auto__ = (function (){var statearr_29756 = f__27723__auto__.call(null);
(statearr_29756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___29761);

return statearr_29756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto___29761,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29780 = [];
var len__23653__auto___29838 = arguments.length;
var i__23654__auto___29839 = (0);
while(true){
if((i__23654__auto___29839 < len__23653__auto___29838)){
args29780.push((arguments[i__23654__auto___29839]));

var G__29840 = (i__23654__auto___29839 + (1));
i__23654__auto___29839 = G__29840;
continue;
} else {
}
break;
}

var G__29782 = args29780.length;
switch (G__29782) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29780.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27722__auto___29842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto___29842,out){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto___29842,out){
return (function (state_29814){
var state_val_29815 = (state_29814[(1)]);
if((state_val_29815 === (7))){
var inst_29794 = (state_29814[(7)]);
var inst_29793 = (state_29814[(8)]);
var inst_29793__$1 = (state_29814[(2)]);
var inst_29794__$1 = cljs.core.nth.call(null,inst_29793__$1,(0),null);
var inst_29795 = cljs.core.nth.call(null,inst_29793__$1,(1),null);
var inst_29796 = (inst_29794__$1 == null);
var state_29814__$1 = (function (){var statearr_29816 = state_29814;
(statearr_29816[(9)] = inst_29795);

(statearr_29816[(7)] = inst_29794__$1);

(statearr_29816[(8)] = inst_29793__$1);

return statearr_29816;
})();
if(cljs.core.truth_(inst_29796)){
var statearr_29817_29843 = state_29814__$1;
(statearr_29817_29843[(1)] = (8));

} else {
var statearr_29818_29844 = state_29814__$1;
(statearr_29818_29844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (1))){
var inst_29783 = cljs.core.vec.call(null,chs);
var inst_29784 = inst_29783;
var state_29814__$1 = (function (){var statearr_29819 = state_29814;
(statearr_29819[(10)] = inst_29784);

return statearr_29819;
})();
var statearr_29820_29845 = state_29814__$1;
(statearr_29820_29845[(2)] = null);

(statearr_29820_29845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (4))){
var inst_29784 = (state_29814[(10)]);
var state_29814__$1 = state_29814;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29814__$1,(7),inst_29784);
} else {
if((state_val_29815 === (6))){
var inst_29810 = (state_29814[(2)]);
var state_29814__$1 = state_29814;
var statearr_29821_29846 = state_29814__$1;
(statearr_29821_29846[(2)] = inst_29810);

(statearr_29821_29846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (3))){
var inst_29812 = (state_29814[(2)]);
var state_29814__$1 = state_29814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29814__$1,inst_29812);
} else {
if((state_val_29815 === (2))){
var inst_29784 = (state_29814[(10)]);
var inst_29786 = cljs.core.count.call(null,inst_29784);
var inst_29787 = (inst_29786 > (0));
var state_29814__$1 = state_29814;
if(cljs.core.truth_(inst_29787)){
var statearr_29823_29847 = state_29814__$1;
(statearr_29823_29847[(1)] = (4));

} else {
var statearr_29824_29848 = state_29814__$1;
(statearr_29824_29848[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (11))){
var inst_29784 = (state_29814[(10)]);
var inst_29803 = (state_29814[(2)]);
var tmp29822 = inst_29784;
var inst_29784__$1 = tmp29822;
var state_29814__$1 = (function (){var statearr_29825 = state_29814;
(statearr_29825[(11)] = inst_29803);

(statearr_29825[(10)] = inst_29784__$1);

return statearr_29825;
})();
var statearr_29826_29849 = state_29814__$1;
(statearr_29826_29849[(2)] = null);

(statearr_29826_29849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (9))){
var inst_29794 = (state_29814[(7)]);
var state_29814__$1 = state_29814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29814__$1,(11),out,inst_29794);
} else {
if((state_val_29815 === (5))){
var inst_29808 = cljs.core.async.close_BANG_.call(null,out);
var state_29814__$1 = state_29814;
var statearr_29827_29850 = state_29814__$1;
(statearr_29827_29850[(2)] = inst_29808);

(statearr_29827_29850[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (10))){
var inst_29806 = (state_29814[(2)]);
var state_29814__$1 = state_29814;
var statearr_29828_29851 = state_29814__$1;
(statearr_29828_29851[(2)] = inst_29806);

(statearr_29828_29851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (8))){
var inst_29795 = (state_29814[(9)]);
var inst_29794 = (state_29814[(7)]);
var inst_29784 = (state_29814[(10)]);
var inst_29793 = (state_29814[(8)]);
var inst_29798 = (function (){var cs = inst_29784;
var vec__29789 = inst_29793;
var v = inst_29794;
var c = inst_29795;
return ((function (cs,vec__29789,v,c,inst_29795,inst_29794,inst_29784,inst_29793,state_val_29815,c__27722__auto___29842,out){
return (function (p1__29779_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29779_SHARP_);
});
;})(cs,vec__29789,v,c,inst_29795,inst_29794,inst_29784,inst_29793,state_val_29815,c__27722__auto___29842,out))
})();
var inst_29799 = cljs.core.filterv.call(null,inst_29798,inst_29784);
var inst_29784__$1 = inst_29799;
var state_29814__$1 = (function (){var statearr_29829 = state_29814;
(statearr_29829[(10)] = inst_29784__$1);

return statearr_29829;
})();
var statearr_29830_29852 = state_29814__$1;
(statearr_29830_29852[(2)] = null);

(statearr_29830_29852[(1)] = (2));


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
});})(c__27722__auto___29842,out))
;
return ((function (switch__27610__auto__,c__27722__auto___29842,out){
return (function() {
var cljs$core$async$state_machine__27611__auto__ = null;
var cljs$core$async$state_machine__27611__auto____0 = (function (){
var statearr_29834 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29834[(0)] = cljs$core$async$state_machine__27611__auto__);

(statearr_29834[(1)] = (1));

return statearr_29834;
});
var cljs$core$async$state_machine__27611__auto____1 = (function (state_29814){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_29814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e29835){if((e29835 instanceof Object)){
var ex__27614__auto__ = e29835;
var statearr_29836_29853 = state_29814;
(statearr_29836_29853[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29854 = state_29814;
state_29814 = G__29854;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$state_machine__27611__auto__ = function(state_29814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27611__auto____1.call(this,state_29814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27611__auto____0;
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27611__auto____1;
return cljs$core$async$state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto___29842,out))
})();
var state__27724__auto__ = (function (){var statearr_29837 = f__27723__auto__.call(null);
(statearr_29837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___29842);

return statearr_29837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto___29842,out))
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
var args29855 = [];
var len__23653__auto___29904 = arguments.length;
var i__23654__auto___29905 = (0);
while(true){
if((i__23654__auto___29905 < len__23653__auto___29904)){
args29855.push((arguments[i__23654__auto___29905]));

var G__29906 = (i__23654__auto___29905 + (1));
i__23654__auto___29905 = G__29906;
continue;
} else {
}
break;
}

var G__29857 = args29855.length;
switch (G__29857) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29855.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27722__auto___29908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto___29908,out){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto___29908,out){
return (function (state_29881){
var state_val_29882 = (state_29881[(1)]);
if((state_val_29882 === (7))){
var inst_29863 = (state_29881[(7)]);
var inst_29863__$1 = (state_29881[(2)]);
var inst_29864 = (inst_29863__$1 == null);
var inst_29865 = cljs.core.not.call(null,inst_29864);
var state_29881__$1 = (function (){var statearr_29883 = state_29881;
(statearr_29883[(7)] = inst_29863__$1);

return statearr_29883;
})();
if(inst_29865){
var statearr_29884_29909 = state_29881__$1;
(statearr_29884_29909[(1)] = (8));

} else {
var statearr_29885_29910 = state_29881__$1;
(statearr_29885_29910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29882 === (1))){
var inst_29858 = (0);
var state_29881__$1 = (function (){var statearr_29886 = state_29881;
(statearr_29886[(8)] = inst_29858);

return statearr_29886;
})();
var statearr_29887_29911 = state_29881__$1;
(statearr_29887_29911[(2)] = null);

(statearr_29887_29911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29882 === (4))){
var state_29881__$1 = state_29881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29881__$1,(7),ch);
} else {
if((state_val_29882 === (6))){
var inst_29876 = (state_29881[(2)]);
var state_29881__$1 = state_29881;
var statearr_29888_29912 = state_29881__$1;
(statearr_29888_29912[(2)] = inst_29876);

(statearr_29888_29912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29882 === (3))){
var inst_29878 = (state_29881[(2)]);
var inst_29879 = cljs.core.async.close_BANG_.call(null,out);
var state_29881__$1 = (function (){var statearr_29889 = state_29881;
(statearr_29889[(9)] = inst_29878);

return statearr_29889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29881__$1,inst_29879);
} else {
if((state_val_29882 === (2))){
var inst_29858 = (state_29881[(8)]);
var inst_29860 = (inst_29858 < n);
var state_29881__$1 = state_29881;
if(cljs.core.truth_(inst_29860)){
var statearr_29890_29913 = state_29881__$1;
(statearr_29890_29913[(1)] = (4));

} else {
var statearr_29891_29914 = state_29881__$1;
(statearr_29891_29914[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29882 === (11))){
var inst_29858 = (state_29881[(8)]);
var inst_29868 = (state_29881[(2)]);
var inst_29869 = (inst_29858 + (1));
var inst_29858__$1 = inst_29869;
var state_29881__$1 = (function (){var statearr_29892 = state_29881;
(statearr_29892[(8)] = inst_29858__$1);

(statearr_29892[(10)] = inst_29868);

return statearr_29892;
})();
var statearr_29893_29915 = state_29881__$1;
(statearr_29893_29915[(2)] = null);

(statearr_29893_29915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29882 === (9))){
var state_29881__$1 = state_29881;
var statearr_29894_29916 = state_29881__$1;
(statearr_29894_29916[(2)] = null);

(statearr_29894_29916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29882 === (5))){
var state_29881__$1 = state_29881;
var statearr_29895_29917 = state_29881__$1;
(statearr_29895_29917[(2)] = null);

(statearr_29895_29917[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29882 === (10))){
var inst_29873 = (state_29881[(2)]);
var state_29881__$1 = state_29881;
var statearr_29896_29918 = state_29881__$1;
(statearr_29896_29918[(2)] = inst_29873);

(statearr_29896_29918[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29882 === (8))){
var inst_29863 = (state_29881[(7)]);
var state_29881__$1 = state_29881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29881__$1,(11),out,inst_29863);
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
});})(c__27722__auto___29908,out))
;
return ((function (switch__27610__auto__,c__27722__auto___29908,out){
return (function() {
var cljs$core$async$state_machine__27611__auto__ = null;
var cljs$core$async$state_machine__27611__auto____0 = (function (){
var statearr_29900 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29900[(0)] = cljs$core$async$state_machine__27611__auto__);

(statearr_29900[(1)] = (1));

return statearr_29900;
});
var cljs$core$async$state_machine__27611__auto____1 = (function (state_29881){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_29881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e29901){if((e29901 instanceof Object)){
var ex__27614__auto__ = e29901;
var statearr_29902_29919 = state_29881;
(statearr_29902_29919[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29920 = state_29881;
state_29881 = G__29920;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$state_machine__27611__auto__ = function(state_29881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27611__auto____1.call(this,state_29881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27611__auto____0;
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27611__auto____1;
return cljs$core$async$state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto___29908,out))
})();
var state__27724__auto__ = (function (){var statearr_29903 = f__27723__auto__.call(null);
(statearr_29903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___29908);

return statearr_29903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto___29908,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29928 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29928 = (function (map_LT_,f,ch,meta29929){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29929 = meta29929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29930,meta29929__$1){
var self__ = this;
var _29930__$1 = this;
return (new cljs.core.async.t_cljs$core$async29928(self__.map_LT_,self__.f,self__.ch,meta29929__$1));
});

cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29930){
var self__ = this;
var _29930__$1 = this;
return self__.meta29929;
});

cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29931 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29931 = (function (map_LT_,f,ch,meta29929,_,fn1,meta29932){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29929 = meta29929;
this._ = _;
this.fn1 = fn1;
this.meta29932 = meta29932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29933,meta29932__$1){
var self__ = this;
var _29933__$1 = this;
return (new cljs.core.async.t_cljs$core$async29931(self__.map_LT_,self__.f,self__.ch,self__.meta29929,self__._,self__.fn1,meta29932__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29933){
var self__ = this;
var _29933__$1 = this;
return self__.meta29932;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29921_SHARP_){
return f1.call(null,(((p1__29921_SHARP_ == null))?null:self__.f.call(null,p1__29921_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29931.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29929","meta29929",-494833453,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29928","cljs.core.async/t_cljs$core$async29928",-1694804636,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29932","meta29932",1706670474,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29931.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29931";

cljs.core.async.t_cljs$core$async29931.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async29931");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29931 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29931(map_LT___$1,f__$1,ch__$1,meta29929__$1,___$2,fn1__$1,meta29932){
return (new cljs.core.async.t_cljs$core$async29931(map_LT___$1,f__$1,ch__$1,meta29929__$1,___$2,fn1__$1,meta29932));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29931(self__.map_LT_,self__.f,self__.ch,self__.meta29929,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29928.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29929","meta29929",-494833453,null)], null);
});

cljs.core.async.t_cljs$core$async29928.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29928";

cljs.core.async.t_cljs$core$async29928.cljs$lang$ctorPrWriter = (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async29928");
});

cljs.core.async.__GT_t_cljs$core$async29928 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29928(map_LT___$1,f__$1,ch__$1,meta29929){
return (new cljs.core.async.t_cljs$core$async29928(map_LT___$1,f__$1,ch__$1,meta29929));
});

}

return (new cljs.core.async.t_cljs$core$async29928(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29937 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29937 = (function (map_GT_,f,ch,meta29938){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29938 = meta29938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29939,meta29938__$1){
var self__ = this;
var _29939__$1 = this;
return (new cljs.core.async.t_cljs$core$async29937(self__.map_GT_,self__.f,self__.ch,meta29938__$1));
});

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29939){
var self__ = this;
var _29939__$1 = this;
return self__.meta29938;
});

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29938","meta29938",825395172,null)], null);
});

cljs.core.async.t_cljs$core$async29937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29937";

cljs.core.async.t_cljs$core$async29937.cljs$lang$ctorPrWriter = (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async29937");
});

cljs.core.async.__GT_t_cljs$core$async29937 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29937(map_GT___$1,f__$1,ch__$1,meta29938){
return (new cljs.core.async.t_cljs$core$async29937(map_GT___$1,f__$1,ch__$1,meta29938));
});

}

return (new cljs.core.async.t_cljs$core$async29937(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29943 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29943 = (function (filter_GT_,p,ch,meta29944){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29944 = meta29944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29945,meta29944__$1){
var self__ = this;
var _29945__$1 = this;
return (new cljs.core.async.t_cljs$core$async29943(self__.filter_GT_,self__.p,self__.ch,meta29944__$1));
});

cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29945){
var self__ = this;
var _29945__$1 = this;
return self__.meta29944;
});

cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29944","meta29944",14530469,null)], null);
});

cljs.core.async.t_cljs$core$async29943.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29943";

cljs.core.async.t_cljs$core$async29943.cljs$lang$ctorPrWriter = (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.core.async/t_cljs$core$async29943");
});

cljs.core.async.__GT_t_cljs$core$async29943 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29943(filter_GT___$1,p__$1,ch__$1,meta29944){
return (new cljs.core.async.t_cljs$core$async29943(filter_GT___$1,p__$1,ch__$1,meta29944));
});

}

return (new cljs.core.async.t_cljs$core$async29943(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29946 = [];
var len__23653__auto___29990 = arguments.length;
var i__23654__auto___29991 = (0);
while(true){
if((i__23654__auto___29991 < len__23653__auto___29990)){
args29946.push((arguments[i__23654__auto___29991]));

var G__29992 = (i__23654__auto___29991 + (1));
i__23654__auto___29991 = G__29992;
continue;
} else {
}
break;
}

var G__29948 = args29946.length;
switch (G__29948) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29946.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27722__auto___29994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto___29994,out){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto___29994,out){
return (function (state_29969){
var state_val_29970 = (state_29969[(1)]);
if((state_val_29970 === (7))){
var inst_29965 = (state_29969[(2)]);
var state_29969__$1 = state_29969;
var statearr_29971_29995 = state_29969__$1;
(statearr_29971_29995[(2)] = inst_29965);

(statearr_29971_29995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29970 === (1))){
var state_29969__$1 = state_29969;
var statearr_29972_29996 = state_29969__$1;
(statearr_29972_29996[(2)] = null);

(statearr_29972_29996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29970 === (4))){
var inst_29951 = (state_29969[(7)]);
var inst_29951__$1 = (state_29969[(2)]);
var inst_29952 = (inst_29951__$1 == null);
var state_29969__$1 = (function (){var statearr_29973 = state_29969;
(statearr_29973[(7)] = inst_29951__$1);

return statearr_29973;
})();
if(cljs.core.truth_(inst_29952)){
var statearr_29974_29997 = state_29969__$1;
(statearr_29974_29997[(1)] = (5));

} else {
var statearr_29975_29998 = state_29969__$1;
(statearr_29975_29998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29970 === (6))){
var inst_29951 = (state_29969[(7)]);
var inst_29956 = p.call(null,inst_29951);
var state_29969__$1 = state_29969;
if(cljs.core.truth_(inst_29956)){
var statearr_29976_29999 = state_29969__$1;
(statearr_29976_29999[(1)] = (8));

} else {
var statearr_29977_30000 = state_29969__$1;
(statearr_29977_30000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29970 === (3))){
var inst_29967 = (state_29969[(2)]);
var state_29969__$1 = state_29969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29969__$1,inst_29967);
} else {
if((state_val_29970 === (2))){
var state_29969__$1 = state_29969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29969__$1,(4),ch);
} else {
if((state_val_29970 === (11))){
var inst_29959 = (state_29969[(2)]);
var state_29969__$1 = state_29969;
var statearr_29978_30001 = state_29969__$1;
(statearr_29978_30001[(2)] = inst_29959);

(statearr_29978_30001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29970 === (9))){
var state_29969__$1 = state_29969;
var statearr_29979_30002 = state_29969__$1;
(statearr_29979_30002[(2)] = null);

(statearr_29979_30002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29970 === (5))){
var inst_29954 = cljs.core.async.close_BANG_.call(null,out);
var state_29969__$1 = state_29969;
var statearr_29980_30003 = state_29969__$1;
(statearr_29980_30003[(2)] = inst_29954);

(statearr_29980_30003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29970 === (10))){
var inst_29962 = (state_29969[(2)]);
var state_29969__$1 = (function (){var statearr_29981 = state_29969;
(statearr_29981[(8)] = inst_29962);

return statearr_29981;
})();
var statearr_29982_30004 = state_29969__$1;
(statearr_29982_30004[(2)] = null);

(statearr_29982_30004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29970 === (8))){
var inst_29951 = (state_29969[(7)]);
var state_29969__$1 = state_29969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29969__$1,(11),out,inst_29951);
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
});})(c__27722__auto___29994,out))
;
return ((function (switch__27610__auto__,c__27722__auto___29994,out){
return (function() {
var cljs$core$async$state_machine__27611__auto__ = null;
var cljs$core$async$state_machine__27611__auto____0 = (function (){
var statearr_29986 = [null,null,null,null,null,null,null,null,null];
(statearr_29986[(0)] = cljs$core$async$state_machine__27611__auto__);

(statearr_29986[(1)] = (1));

return statearr_29986;
});
var cljs$core$async$state_machine__27611__auto____1 = (function (state_29969){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_29969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e29987){if((e29987 instanceof Object)){
var ex__27614__auto__ = e29987;
var statearr_29988_30005 = state_29969;
(statearr_29988_30005[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30006 = state_29969;
state_29969 = G__30006;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$state_machine__27611__auto__ = function(state_29969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27611__auto____1.call(this,state_29969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27611__auto____0;
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27611__auto____1;
return cljs$core$async$state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto___29994,out))
})();
var state__27724__auto__ = (function (){var statearr_29989 = f__27723__auto__.call(null);
(statearr_29989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___29994);

return statearr_29989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto___29994,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30007 = [];
var len__23653__auto___30010 = arguments.length;
var i__23654__auto___30011 = (0);
while(true){
if((i__23654__auto___30011 < len__23653__auto___30010)){
args30007.push((arguments[i__23654__auto___30011]));

var G__30012 = (i__23654__auto___30011 + (1));
i__23654__auto___30011 = G__30012;
continue;
} else {
}
break;
}

var G__30009 = args30007.length;
switch (G__30009) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30007.length)].join('')));

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
var c__27722__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto__){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto__){
return (function (state_30179){
var state_val_30180 = (state_30179[(1)]);
if((state_val_30180 === (7))){
var inst_30175 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
var statearr_30181_30222 = state_30179__$1;
(statearr_30181_30222[(2)] = inst_30175);

(statearr_30181_30222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (20))){
var inst_30145 = (state_30179[(7)]);
var inst_30156 = (state_30179[(2)]);
var inst_30157 = cljs.core.next.call(null,inst_30145);
var inst_30131 = inst_30157;
var inst_30132 = null;
var inst_30133 = (0);
var inst_30134 = (0);
var state_30179__$1 = (function (){var statearr_30182 = state_30179;
(statearr_30182[(8)] = inst_30156);

(statearr_30182[(9)] = inst_30131);

(statearr_30182[(10)] = inst_30134);

(statearr_30182[(11)] = inst_30133);

(statearr_30182[(12)] = inst_30132);

return statearr_30182;
})();
var statearr_30183_30223 = state_30179__$1;
(statearr_30183_30223[(2)] = null);

(statearr_30183_30223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (1))){
var state_30179__$1 = state_30179;
var statearr_30184_30224 = state_30179__$1;
(statearr_30184_30224[(2)] = null);

(statearr_30184_30224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (4))){
var inst_30120 = (state_30179[(13)]);
var inst_30120__$1 = (state_30179[(2)]);
var inst_30121 = (inst_30120__$1 == null);
var state_30179__$1 = (function (){var statearr_30185 = state_30179;
(statearr_30185[(13)] = inst_30120__$1);

return statearr_30185;
})();
if(cljs.core.truth_(inst_30121)){
var statearr_30186_30225 = state_30179__$1;
(statearr_30186_30225[(1)] = (5));

} else {
var statearr_30187_30226 = state_30179__$1;
(statearr_30187_30226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (15))){
var state_30179__$1 = state_30179;
var statearr_30191_30227 = state_30179__$1;
(statearr_30191_30227[(2)] = null);

(statearr_30191_30227[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (21))){
var state_30179__$1 = state_30179;
var statearr_30192_30228 = state_30179__$1;
(statearr_30192_30228[(2)] = null);

(statearr_30192_30228[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (13))){
var inst_30131 = (state_30179[(9)]);
var inst_30134 = (state_30179[(10)]);
var inst_30133 = (state_30179[(11)]);
var inst_30132 = (state_30179[(12)]);
var inst_30141 = (state_30179[(2)]);
var inst_30142 = (inst_30134 + (1));
var tmp30188 = inst_30131;
var tmp30189 = inst_30133;
var tmp30190 = inst_30132;
var inst_30131__$1 = tmp30188;
var inst_30132__$1 = tmp30190;
var inst_30133__$1 = tmp30189;
var inst_30134__$1 = inst_30142;
var state_30179__$1 = (function (){var statearr_30193 = state_30179;
(statearr_30193[(9)] = inst_30131__$1);

(statearr_30193[(10)] = inst_30134__$1);

(statearr_30193[(14)] = inst_30141);

(statearr_30193[(11)] = inst_30133__$1);

(statearr_30193[(12)] = inst_30132__$1);

return statearr_30193;
})();
var statearr_30194_30229 = state_30179__$1;
(statearr_30194_30229[(2)] = null);

(statearr_30194_30229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (22))){
var state_30179__$1 = state_30179;
var statearr_30195_30230 = state_30179__$1;
(statearr_30195_30230[(2)] = null);

(statearr_30195_30230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (6))){
var inst_30120 = (state_30179[(13)]);
var inst_30129 = f.call(null,inst_30120);
var inst_30130 = cljs.core.seq.call(null,inst_30129);
var inst_30131 = inst_30130;
var inst_30132 = null;
var inst_30133 = (0);
var inst_30134 = (0);
var state_30179__$1 = (function (){var statearr_30196 = state_30179;
(statearr_30196[(9)] = inst_30131);

(statearr_30196[(10)] = inst_30134);

(statearr_30196[(11)] = inst_30133);

(statearr_30196[(12)] = inst_30132);

return statearr_30196;
})();
var statearr_30197_30231 = state_30179__$1;
(statearr_30197_30231[(2)] = null);

(statearr_30197_30231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (17))){
var inst_30145 = (state_30179[(7)]);
var inst_30149 = cljs.core.chunk_first.call(null,inst_30145);
var inst_30150 = cljs.core.chunk_rest.call(null,inst_30145);
var inst_30151 = cljs.core.count.call(null,inst_30149);
var inst_30131 = inst_30150;
var inst_30132 = inst_30149;
var inst_30133 = inst_30151;
var inst_30134 = (0);
var state_30179__$1 = (function (){var statearr_30198 = state_30179;
(statearr_30198[(9)] = inst_30131);

(statearr_30198[(10)] = inst_30134);

(statearr_30198[(11)] = inst_30133);

(statearr_30198[(12)] = inst_30132);

return statearr_30198;
})();
var statearr_30199_30232 = state_30179__$1;
(statearr_30199_30232[(2)] = null);

(statearr_30199_30232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (3))){
var inst_30177 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30179__$1,inst_30177);
} else {
if((state_val_30180 === (12))){
var inst_30165 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
var statearr_30200_30233 = state_30179__$1;
(statearr_30200_30233[(2)] = inst_30165);

(statearr_30200_30233[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (2))){
var state_30179__$1 = state_30179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30179__$1,(4),in$);
} else {
if((state_val_30180 === (23))){
var inst_30173 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
var statearr_30201_30234 = state_30179__$1;
(statearr_30201_30234[(2)] = inst_30173);

(statearr_30201_30234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (19))){
var inst_30160 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
var statearr_30202_30235 = state_30179__$1;
(statearr_30202_30235[(2)] = inst_30160);

(statearr_30202_30235[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (11))){
var inst_30145 = (state_30179[(7)]);
var inst_30131 = (state_30179[(9)]);
var inst_30145__$1 = cljs.core.seq.call(null,inst_30131);
var state_30179__$1 = (function (){var statearr_30203 = state_30179;
(statearr_30203[(7)] = inst_30145__$1);

return statearr_30203;
})();
if(inst_30145__$1){
var statearr_30204_30236 = state_30179__$1;
(statearr_30204_30236[(1)] = (14));

} else {
var statearr_30205_30237 = state_30179__$1;
(statearr_30205_30237[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (9))){
var inst_30167 = (state_30179[(2)]);
var inst_30168 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30179__$1 = (function (){var statearr_30206 = state_30179;
(statearr_30206[(15)] = inst_30167);

return statearr_30206;
})();
if(cljs.core.truth_(inst_30168)){
var statearr_30207_30238 = state_30179__$1;
(statearr_30207_30238[(1)] = (21));

} else {
var statearr_30208_30239 = state_30179__$1;
(statearr_30208_30239[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (5))){
var inst_30123 = cljs.core.async.close_BANG_.call(null,out);
var state_30179__$1 = state_30179;
var statearr_30209_30240 = state_30179__$1;
(statearr_30209_30240[(2)] = inst_30123);

(statearr_30209_30240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (14))){
var inst_30145 = (state_30179[(7)]);
var inst_30147 = cljs.core.chunked_seq_QMARK_.call(null,inst_30145);
var state_30179__$1 = state_30179;
if(inst_30147){
var statearr_30210_30241 = state_30179__$1;
(statearr_30210_30241[(1)] = (17));

} else {
var statearr_30211_30242 = state_30179__$1;
(statearr_30211_30242[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (16))){
var inst_30163 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
var statearr_30212_30243 = state_30179__$1;
(statearr_30212_30243[(2)] = inst_30163);

(statearr_30212_30243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (10))){
var inst_30134 = (state_30179[(10)]);
var inst_30132 = (state_30179[(12)]);
var inst_30139 = cljs.core._nth.call(null,inst_30132,inst_30134);
var state_30179__$1 = state_30179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30179__$1,(13),out,inst_30139);
} else {
if((state_val_30180 === (18))){
var inst_30145 = (state_30179[(7)]);
var inst_30154 = cljs.core.first.call(null,inst_30145);
var state_30179__$1 = state_30179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30179__$1,(20),out,inst_30154);
} else {
if((state_val_30180 === (8))){
var inst_30134 = (state_30179[(10)]);
var inst_30133 = (state_30179[(11)]);
var inst_30136 = (inst_30134 < inst_30133);
var inst_30137 = inst_30136;
var state_30179__$1 = state_30179;
if(cljs.core.truth_(inst_30137)){
var statearr_30213_30244 = state_30179__$1;
(statearr_30213_30244[(1)] = (10));

} else {
var statearr_30214_30245 = state_30179__$1;
(statearr_30214_30245[(1)] = (11));

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
});})(c__27722__auto__))
;
return ((function (switch__27610__auto__,c__27722__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27611__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27611__auto____0 = (function (){
var statearr_30218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30218[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27611__auto__);

(statearr_30218[(1)] = (1));

return statearr_30218;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27611__auto____1 = (function (state_30179){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_30179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e30219){if((e30219 instanceof Object)){
var ex__27614__auto__ = e30219;
var statearr_30220_30246 = state_30179;
(statearr_30220_30246[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30247 = state_30179;
state_30179 = G__30247;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27611__auto__ = function(state_30179){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27611__auto____1.call(this,state_30179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27611__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27611__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto__))
})();
var state__27724__auto__ = (function (){var statearr_30221 = f__27723__auto__.call(null);
(statearr_30221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto__);

return statearr_30221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto__))
);

return c__27722__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30248 = [];
var len__23653__auto___30251 = arguments.length;
var i__23654__auto___30252 = (0);
while(true){
if((i__23654__auto___30252 < len__23653__auto___30251)){
args30248.push((arguments[i__23654__auto___30252]));

var G__30253 = (i__23654__auto___30252 + (1));
i__23654__auto___30252 = G__30253;
continue;
} else {
}
break;
}

var G__30250 = args30248.length;
switch (G__30250) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30248.length)].join('')));

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
var args30255 = [];
var len__23653__auto___30258 = arguments.length;
var i__23654__auto___30259 = (0);
while(true){
if((i__23654__auto___30259 < len__23653__auto___30258)){
args30255.push((arguments[i__23654__auto___30259]));

var G__30260 = (i__23654__auto___30259 + (1));
i__23654__auto___30259 = G__30260;
continue;
} else {
}
break;
}

var G__30257 = args30255.length;
switch (G__30257) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30255.length)].join('')));

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
var args30262 = [];
var len__23653__auto___30313 = arguments.length;
var i__23654__auto___30314 = (0);
while(true){
if((i__23654__auto___30314 < len__23653__auto___30313)){
args30262.push((arguments[i__23654__auto___30314]));

var G__30315 = (i__23654__auto___30314 + (1));
i__23654__auto___30314 = G__30315;
continue;
} else {
}
break;
}

var G__30264 = args30262.length;
switch (G__30264) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30262.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27722__auto___30317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto___30317,out){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto___30317,out){
return (function (state_30288){
var state_val_30289 = (state_30288[(1)]);
if((state_val_30289 === (7))){
var inst_30283 = (state_30288[(2)]);
var state_30288__$1 = state_30288;
var statearr_30290_30318 = state_30288__$1;
(statearr_30290_30318[(2)] = inst_30283);

(statearr_30290_30318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (1))){
var inst_30265 = null;
var state_30288__$1 = (function (){var statearr_30291 = state_30288;
(statearr_30291[(7)] = inst_30265);

return statearr_30291;
})();
var statearr_30292_30319 = state_30288__$1;
(statearr_30292_30319[(2)] = null);

(statearr_30292_30319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (4))){
var inst_30268 = (state_30288[(8)]);
var inst_30268__$1 = (state_30288[(2)]);
var inst_30269 = (inst_30268__$1 == null);
var inst_30270 = cljs.core.not.call(null,inst_30269);
var state_30288__$1 = (function (){var statearr_30293 = state_30288;
(statearr_30293[(8)] = inst_30268__$1);

return statearr_30293;
})();
if(inst_30270){
var statearr_30294_30320 = state_30288__$1;
(statearr_30294_30320[(1)] = (5));

} else {
var statearr_30295_30321 = state_30288__$1;
(statearr_30295_30321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (6))){
var state_30288__$1 = state_30288;
var statearr_30296_30322 = state_30288__$1;
(statearr_30296_30322[(2)] = null);

(statearr_30296_30322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (3))){
var inst_30285 = (state_30288[(2)]);
var inst_30286 = cljs.core.async.close_BANG_.call(null,out);
var state_30288__$1 = (function (){var statearr_30297 = state_30288;
(statearr_30297[(9)] = inst_30285);

return statearr_30297;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30288__$1,inst_30286);
} else {
if((state_val_30289 === (2))){
var state_30288__$1 = state_30288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30288__$1,(4),ch);
} else {
if((state_val_30289 === (11))){
var inst_30268 = (state_30288[(8)]);
var inst_30277 = (state_30288[(2)]);
var inst_30265 = inst_30268;
var state_30288__$1 = (function (){var statearr_30298 = state_30288;
(statearr_30298[(10)] = inst_30277);

(statearr_30298[(7)] = inst_30265);

return statearr_30298;
})();
var statearr_30299_30323 = state_30288__$1;
(statearr_30299_30323[(2)] = null);

(statearr_30299_30323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (9))){
var inst_30268 = (state_30288[(8)]);
var state_30288__$1 = state_30288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30288__$1,(11),out,inst_30268);
} else {
if((state_val_30289 === (5))){
var inst_30268 = (state_30288[(8)]);
var inst_30265 = (state_30288[(7)]);
var inst_30272 = cljs.core._EQ_.call(null,inst_30268,inst_30265);
var state_30288__$1 = state_30288;
if(inst_30272){
var statearr_30301_30324 = state_30288__$1;
(statearr_30301_30324[(1)] = (8));

} else {
var statearr_30302_30325 = state_30288__$1;
(statearr_30302_30325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (10))){
var inst_30280 = (state_30288[(2)]);
var state_30288__$1 = state_30288;
var statearr_30303_30326 = state_30288__$1;
(statearr_30303_30326[(2)] = inst_30280);

(statearr_30303_30326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (8))){
var inst_30265 = (state_30288[(7)]);
var tmp30300 = inst_30265;
var inst_30265__$1 = tmp30300;
var state_30288__$1 = (function (){var statearr_30304 = state_30288;
(statearr_30304[(7)] = inst_30265__$1);

return statearr_30304;
})();
var statearr_30305_30327 = state_30288__$1;
(statearr_30305_30327[(2)] = null);

(statearr_30305_30327[(1)] = (2));


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
});})(c__27722__auto___30317,out))
;
return ((function (switch__27610__auto__,c__27722__auto___30317,out){
return (function() {
var cljs$core$async$state_machine__27611__auto__ = null;
var cljs$core$async$state_machine__27611__auto____0 = (function (){
var statearr_30309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30309[(0)] = cljs$core$async$state_machine__27611__auto__);

(statearr_30309[(1)] = (1));

return statearr_30309;
});
var cljs$core$async$state_machine__27611__auto____1 = (function (state_30288){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_30288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e30310){if((e30310 instanceof Object)){
var ex__27614__auto__ = e30310;
var statearr_30311_30328 = state_30288;
(statearr_30311_30328[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30329 = state_30288;
state_30288 = G__30329;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$state_machine__27611__auto__ = function(state_30288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27611__auto____1.call(this,state_30288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27611__auto____0;
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27611__auto____1;
return cljs$core$async$state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto___30317,out))
})();
var state__27724__auto__ = (function (){var statearr_30312 = f__27723__auto__.call(null);
(statearr_30312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___30317);

return statearr_30312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto___30317,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30330 = [];
var len__23653__auto___30400 = arguments.length;
var i__23654__auto___30401 = (0);
while(true){
if((i__23654__auto___30401 < len__23653__auto___30400)){
args30330.push((arguments[i__23654__auto___30401]));

var G__30402 = (i__23654__auto___30401 + (1));
i__23654__auto___30401 = G__30402;
continue;
} else {
}
break;
}

var G__30332 = args30330.length;
switch (G__30332) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30330.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27722__auto___30404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto___30404,out){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto___30404,out){
return (function (state_30370){
var state_val_30371 = (state_30370[(1)]);
if((state_val_30371 === (7))){
var inst_30366 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30372_30405 = state_30370__$1;
(statearr_30372_30405[(2)] = inst_30366);

(statearr_30372_30405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (1))){
var inst_30333 = (new Array(n));
var inst_30334 = inst_30333;
var inst_30335 = (0);
var state_30370__$1 = (function (){var statearr_30373 = state_30370;
(statearr_30373[(7)] = inst_30335);

(statearr_30373[(8)] = inst_30334);

return statearr_30373;
})();
var statearr_30374_30406 = state_30370__$1;
(statearr_30374_30406[(2)] = null);

(statearr_30374_30406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (4))){
var inst_30338 = (state_30370[(9)]);
var inst_30338__$1 = (state_30370[(2)]);
var inst_30339 = (inst_30338__$1 == null);
var inst_30340 = cljs.core.not.call(null,inst_30339);
var state_30370__$1 = (function (){var statearr_30375 = state_30370;
(statearr_30375[(9)] = inst_30338__$1);

return statearr_30375;
})();
if(inst_30340){
var statearr_30376_30407 = state_30370__$1;
(statearr_30376_30407[(1)] = (5));

} else {
var statearr_30377_30408 = state_30370__$1;
(statearr_30377_30408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (15))){
var inst_30360 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30378_30409 = state_30370__$1;
(statearr_30378_30409[(2)] = inst_30360);

(statearr_30378_30409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (13))){
var state_30370__$1 = state_30370;
var statearr_30379_30410 = state_30370__$1;
(statearr_30379_30410[(2)] = null);

(statearr_30379_30410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (6))){
var inst_30335 = (state_30370[(7)]);
var inst_30356 = (inst_30335 > (0));
var state_30370__$1 = state_30370;
if(cljs.core.truth_(inst_30356)){
var statearr_30380_30411 = state_30370__$1;
(statearr_30380_30411[(1)] = (12));

} else {
var statearr_30381_30412 = state_30370__$1;
(statearr_30381_30412[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (3))){
var inst_30368 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30370__$1,inst_30368);
} else {
if((state_val_30371 === (12))){
var inst_30334 = (state_30370[(8)]);
var inst_30358 = cljs.core.vec.call(null,inst_30334);
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30370__$1,(15),out,inst_30358);
} else {
if((state_val_30371 === (2))){
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30370__$1,(4),ch);
} else {
if((state_val_30371 === (11))){
var inst_30350 = (state_30370[(2)]);
var inst_30351 = (new Array(n));
var inst_30334 = inst_30351;
var inst_30335 = (0);
var state_30370__$1 = (function (){var statearr_30382 = state_30370;
(statearr_30382[(7)] = inst_30335);

(statearr_30382[(10)] = inst_30350);

(statearr_30382[(8)] = inst_30334);

return statearr_30382;
})();
var statearr_30383_30413 = state_30370__$1;
(statearr_30383_30413[(2)] = null);

(statearr_30383_30413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (9))){
var inst_30334 = (state_30370[(8)]);
var inst_30348 = cljs.core.vec.call(null,inst_30334);
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30370__$1,(11),out,inst_30348);
} else {
if((state_val_30371 === (5))){
var inst_30335 = (state_30370[(7)]);
var inst_30343 = (state_30370[(11)]);
var inst_30338 = (state_30370[(9)]);
var inst_30334 = (state_30370[(8)]);
var inst_30342 = (inst_30334[inst_30335] = inst_30338);
var inst_30343__$1 = (inst_30335 + (1));
var inst_30344 = (inst_30343__$1 < n);
var state_30370__$1 = (function (){var statearr_30384 = state_30370;
(statearr_30384[(11)] = inst_30343__$1);

(statearr_30384[(12)] = inst_30342);

return statearr_30384;
})();
if(cljs.core.truth_(inst_30344)){
var statearr_30385_30414 = state_30370__$1;
(statearr_30385_30414[(1)] = (8));

} else {
var statearr_30386_30415 = state_30370__$1;
(statearr_30386_30415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (14))){
var inst_30363 = (state_30370[(2)]);
var inst_30364 = cljs.core.async.close_BANG_.call(null,out);
var state_30370__$1 = (function (){var statearr_30388 = state_30370;
(statearr_30388[(13)] = inst_30363);

return statearr_30388;
})();
var statearr_30389_30416 = state_30370__$1;
(statearr_30389_30416[(2)] = inst_30364);

(statearr_30389_30416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (10))){
var inst_30354 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30390_30417 = state_30370__$1;
(statearr_30390_30417[(2)] = inst_30354);

(statearr_30390_30417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (8))){
var inst_30343 = (state_30370[(11)]);
var inst_30334 = (state_30370[(8)]);
var tmp30387 = inst_30334;
var inst_30334__$1 = tmp30387;
var inst_30335 = inst_30343;
var state_30370__$1 = (function (){var statearr_30391 = state_30370;
(statearr_30391[(7)] = inst_30335);

(statearr_30391[(8)] = inst_30334__$1);

return statearr_30391;
})();
var statearr_30392_30418 = state_30370__$1;
(statearr_30392_30418[(2)] = null);

(statearr_30392_30418[(1)] = (2));


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
});})(c__27722__auto___30404,out))
;
return ((function (switch__27610__auto__,c__27722__auto___30404,out){
return (function() {
var cljs$core$async$state_machine__27611__auto__ = null;
var cljs$core$async$state_machine__27611__auto____0 = (function (){
var statearr_30396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30396[(0)] = cljs$core$async$state_machine__27611__auto__);

(statearr_30396[(1)] = (1));

return statearr_30396;
});
var cljs$core$async$state_machine__27611__auto____1 = (function (state_30370){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_30370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e30397){if((e30397 instanceof Object)){
var ex__27614__auto__ = e30397;
var statearr_30398_30419 = state_30370;
(statearr_30398_30419[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30420 = state_30370;
state_30370 = G__30420;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$state_machine__27611__auto__ = function(state_30370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27611__auto____1.call(this,state_30370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27611__auto____0;
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27611__auto____1;
return cljs$core$async$state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto___30404,out))
})();
var state__27724__auto__ = (function (){var statearr_30399 = f__27723__auto__.call(null);
(statearr_30399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___30404);

return statearr_30399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto___30404,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30421 = [];
var len__23653__auto___30495 = arguments.length;
var i__23654__auto___30496 = (0);
while(true){
if((i__23654__auto___30496 < len__23653__auto___30495)){
args30421.push((arguments[i__23654__auto___30496]));

var G__30497 = (i__23654__auto___30496 + (1));
i__23654__auto___30496 = G__30497;
continue;
} else {
}
break;
}

var G__30423 = args30421.length;
switch (G__30423) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30421.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27722__auto___30499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto___30499,out){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto___30499,out){
return (function (state_30465){
var state_val_30466 = (state_30465[(1)]);
if((state_val_30466 === (7))){
var inst_30461 = (state_30465[(2)]);
var state_30465__$1 = state_30465;
var statearr_30467_30500 = state_30465__$1;
(statearr_30467_30500[(2)] = inst_30461);

(statearr_30467_30500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (1))){
var inst_30424 = [];
var inst_30425 = inst_30424;
var inst_30426 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30465__$1 = (function (){var statearr_30468 = state_30465;
(statearr_30468[(7)] = inst_30426);

(statearr_30468[(8)] = inst_30425);

return statearr_30468;
})();
var statearr_30469_30501 = state_30465__$1;
(statearr_30469_30501[(2)] = null);

(statearr_30469_30501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (4))){
var inst_30429 = (state_30465[(9)]);
var inst_30429__$1 = (state_30465[(2)]);
var inst_30430 = (inst_30429__$1 == null);
var inst_30431 = cljs.core.not.call(null,inst_30430);
var state_30465__$1 = (function (){var statearr_30470 = state_30465;
(statearr_30470[(9)] = inst_30429__$1);

return statearr_30470;
})();
if(inst_30431){
var statearr_30471_30502 = state_30465__$1;
(statearr_30471_30502[(1)] = (5));

} else {
var statearr_30472_30503 = state_30465__$1;
(statearr_30472_30503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (15))){
var inst_30455 = (state_30465[(2)]);
var state_30465__$1 = state_30465;
var statearr_30473_30504 = state_30465__$1;
(statearr_30473_30504[(2)] = inst_30455);

(statearr_30473_30504[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (13))){
var state_30465__$1 = state_30465;
var statearr_30474_30505 = state_30465__$1;
(statearr_30474_30505[(2)] = null);

(statearr_30474_30505[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (6))){
var inst_30425 = (state_30465[(8)]);
var inst_30450 = inst_30425.length;
var inst_30451 = (inst_30450 > (0));
var state_30465__$1 = state_30465;
if(cljs.core.truth_(inst_30451)){
var statearr_30475_30506 = state_30465__$1;
(statearr_30475_30506[(1)] = (12));

} else {
var statearr_30476_30507 = state_30465__$1;
(statearr_30476_30507[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (3))){
var inst_30463 = (state_30465[(2)]);
var state_30465__$1 = state_30465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30465__$1,inst_30463);
} else {
if((state_val_30466 === (12))){
var inst_30425 = (state_30465[(8)]);
var inst_30453 = cljs.core.vec.call(null,inst_30425);
var state_30465__$1 = state_30465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30465__$1,(15),out,inst_30453);
} else {
if((state_val_30466 === (2))){
var state_30465__$1 = state_30465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30465__$1,(4),ch);
} else {
if((state_val_30466 === (11))){
var inst_30429 = (state_30465[(9)]);
var inst_30433 = (state_30465[(10)]);
var inst_30443 = (state_30465[(2)]);
var inst_30444 = [];
var inst_30445 = inst_30444.push(inst_30429);
var inst_30425 = inst_30444;
var inst_30426 = inst_30433;
var state_30465__$1 = (function (){var statearr_30477 = state_30465;
(statearr_30477[(7)] = inst_30426);

(statearr_30477[(11)] = inst_30445);

(statearr_30477[(12)] = inst_30443);

(statearr_30477[(8)] = inst_30425);

return statearr_30477;
})();
var statearr_30478_30508 = state_30465__$1;
(statearr_30478_30508[(2)] = null);

(statearr_30478_30508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (9))){
var inst_30425 = (state_30465[(8)]);
var inst_30441 = cljs.core.vec.call(null,inst_30425);
var state_30465__$1 = state_30465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30465__$1,(11),out,inst_30441);
} else {
if((state_val_30466 === (5))){
var inst_30426 = (state_30465[(7)]);
var inst_30429 = (state_30465[(9)]);
var inst_30433 = (state_30465[(10)]);
var inst_30433__$1 = f.call(null,inst_30429);
var inst_30434 = cljs.core._EQ_.call(null,inst_30433__$1,inst_30426);
var inst_30435 = cljs.core.keyword_identical_QMARK_.call(null,inst_30426,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30436 = (inst_30434) || (inst_30435);
var state_30465__$1 = (function (){var statearr_30479 = state_30465;
(statearr_30479[(10)] = inst_30433__$1);

return statearr_30479;
})();
if(cljs.core.truth_(inst_30436)){
var statearr_30480_30509 = state_30465__$1;
(statearr_30480_30509[(1)] = (8));

} else {
var statearr_30481_30510 = state_30465__$1;
(statearr_30481_30510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (14))){
var inst_30458 = (state_30465[(2)]);
var inst_30459 = cljs.core.async.close_BANG_.call(null,out);
var state_30465__$1 = (function (){var statearr_30483 = state_30465;
(statearr_30483[(13)] = inst_30458);

return statearr_30483;
})();
var statearr_30484_30511 = state_30465__$1;
(statearr_30484_30511[(2)] = inst_30459);

(statearr_30484_30511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (10))){
var inst_30448 = (state_30465[(2)]);
var state_30465__$1 = state_30465;
var statearr_30485_30512 = state_30465__$1;
(statearr_30485_30512[(2)] = inst_30448);

(statearr_30485_30512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (8))){
var inst_30429 = (state_30465[(9)]);
var inst_30425 = (state_30465[(8)]);
var inst_30433 = (state_30465[(10)]);
var inst_30438 = inst_30425.push(inst_30429);
var tmp30482 = inst_30425;
var inst_30425__$1 = tmp30482;
var inst_30426 = inst_30433;
var state_30465__$1 = (function (){var statearr_30486 = state_30465;
(statearr_30486[(7)] = inst_30426);

(statearr_30486[(14)] = inst_30438);

(statearr_30486[(8)] = inst_30425__$1);

return statearr_30486;
})();
var statearr_30487_30513 = state_30465__$1;
(statearr_30487_30513[(2)] = null);

(statearr_30487_30513[(1)] = (2));


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
});})(c__27722__auto___30499,out))
;
return ((function (switch__27610__auto__,c__27722__auto___30499,out){
return (function() {
var cljs$core$async$state_machine__27611__auto__ = null;
var cljs$core$async$state_machine__27611__auto____0 = (function (){
var statearr_30491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30491[(0)] = cljs$core$async$state_machine__27611__auto__);

(statearr_30491[(1)] = (1));

return statearr_30491;
});
var cljs$core$async$state_machine__27611__auto____1 = (function (state_30465){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_30465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e30492){if((e30492 instanceof Object)){
var ex__27614__auto__ = e30492;
var statearr_30493_30514 = state_30465;
(statearr_30493_30514[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30515 = state_30465;
state_30465 = G__30515;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
cljs$core$async$state_machine__27611__auto__ = function(state_30465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27611__auto____1.call(this,state_30465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27611__auto____0;
cljs$core$async$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27611__auto____1;
return cljs$core$async$state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto___30499,out))
})();
var state__27724__auto__ = (function (){var statearr_30494 = f__27723__auto__.call(null);
(statearr_30494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___30499);

return statearr_30494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto___30499,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1473455234079