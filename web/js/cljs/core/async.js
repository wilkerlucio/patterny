// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25708 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25708 = (function (f,fn_handler,meta25709){
this.f = f;
this.fn_handler = fn_handler;
this.meta25709 = meta25709;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25708.cljs$lang$type = true;
cljs.core.async.t25708.cljs$lang$ctorStr = "cljs.core.async/t25708";
cljs.core.async.t25708.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t25708");
});
cljs.core.async.t25708.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25708.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25708.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25710){var self__ = this;
var _25710__$1 = this;return self__.meta25709;
});
cljs.core.async.t25708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25710,meta25709__$1){var self__ = this;
var _25710__$1 = this;return (new cljs.core.async.t25708(self__.f,self__.fn_handler,meta25709__$1));
});
cljs.core.async.__GT_t25708 = (function __GT_t25708(f__$1,fn_handler__$1,meta25709){return (new cljs.core.async.t25708(f__$1,fn_handler__$1,meta25709));
});
}
return (new cljs.core.async.t25708(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25712 = buff;if(G__25712)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return G__25712.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25712.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__25712);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__25712);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_25729 = (function (){var G__25726 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25726) : cljs.core.deref.call(null,G__25726));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__25727_25730 = val_25729;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__25727_25730) : fn1.call(null,G__25727_25730));
} else
{cljs.core.async.impl.dispatch.run(((function (val_25729,ret){
return (function (){var G__25728 = val_25729;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__25728) : fn1.call(null,G__25728));
});})(val_25729,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4220__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4220__auto__))
{var ret = temp__4220__auto__;var G__25739 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25739) : cljs.core.deref.call(null,G__25739));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4220__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4220__auto__))
{var retb = temp__4220__auto__;var ret = (function (){var G__25740 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25740) : cljs.core.deref.call(null,G__25740));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__25741_25743 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__25741_25743) : fn1.call(null,G__25741_25743));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4220__auto__){
return (function (){var G__25742 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__25742) : fn1.call(null,G__25742));
});})(ret,retb,temp__4220__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___25744 = n;var x_25745 = (0);while(true){
if((x_25745 < n__4508__auto___25744))
{(a[x_25745] = (0));
{
var G__25746 = (x_25745 + (1));
x_25745 = G__25746;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__25747 = (i + (1));
i = G__25747;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__25755 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25755) : cljs.core.atom.call(null,G__25755));
})();if(typeof cljs.core.async.t25756 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25756 = (function (flag,alt_flag,meta25757){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25757 = meta25757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25756.cljs$lang$type = true;
cljs.core.async.t25756.cljs$lang$ctorStr = "cljs.core.async/t25756";
cljs.core.async.t25756.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t25756");
});})(flag))
;
cljs.core.async.t25756.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25756.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__25759 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25759) : cljs.core.deref.call(null,G__25759));
});})(flag))
;
cljs.core.async.t25756.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__25760_25762 = self__.flag;var G__25761_25763 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25760_25762,G__25761_25763) : cljs.core.reset_BANG_.call(null,G__25760_25762,G__25761_25763));
return true;
});})(flag))
;
cljs.core.async.t25756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25758){var self__ = this;
var _25758__$1 = this;return self__.meta25757;
});})(flag))
;
cljs.core.async.t25756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25758,meta25757__$1){var self__ = this;
var _25758__$1 = this;return (new cljs.core.async.t25756(self__.flag,self__.alt_flag,meta25757__$1));
});})(flag))
;
cljs.core.async.__GT_t25756 = ((function (flag){
return (function __GT_t25756(flag__$1,alt_flag__$1,meta25757){return (new cljs.core.async.t25756(flag__$1,alt_flag__$1,meta25757));
});})(flag))
;
}
return (new cljs.core.async.t25756(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25767 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25767 = (function (cb,flag,alt_handler,meta25768){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25768 = meta25768;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25767.cljs$lang$type = true;
cljs.core.async.t25767.cljs$lang$ctorStr = "cljs.core.async/t25767";
cljs.core.async.t25767.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t25767");
});
cljs.core.async.t25767.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25767.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t25767.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t25767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25769){var self__ = this;
var _25769__$1 = this;return self__.meta25768;
});
cljs.core.async.t25767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25769,meta25768__$1){var self__ = this;
var _25769__$1 = this;return (new cljs.core.async.t25767(self__.cb,self__.flag,self__.alt_handler,meta25768__$1));
});
cljs.core.async.__GT_t25767 = (function __GT_t25767(cb__$1,flag__$1,alt_handler__$1,meta25768){return (new cljs.core.async.t25767(cb__$1,flag__$1,alt_handler__$1,meta25768));
});
}
return (new cljs.core.async.t25767(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__25777 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__25777) : port.call(null,G__25777));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__25778 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__25778) : port.call(null,G__25778));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25770_SHARP_){var G__25779 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25770_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25779) : fret.call(null,G__25779));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25771_SHARP_){var G__25780 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25771_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25780) : fret.call(null,G__25780));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25781 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25781) : cljs.core.deref.call(null,G__25781));
})(),(function (){var or__3638__auto__ = wport;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__25782 = (i + (1));
i = G__25782;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3638__auto__ = ret;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4222__auto__ = (function (){var and__3626__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3626__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3626__auto__;
}
})();if(cljs.core.truth_(temp__4222__auto__))
{var got = temp__4222__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__25783){var map__25785 = p__25783;var map__25785__$1 = ((cljs.core.seq_QMARK_(map__25785))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25785):map__25785);var opts = map__25785__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__25783 = null;if (arguments.length > 1) {
  p__25783 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25783);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25786){
var ports = cljs.core.first(arglist__25786);
var p__25783 = cljs.core.rest(arglist__25786);
return alts_BANG___delegate(ports,p__25783);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5861__auto___25884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___25884){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___25884){
return (function (state_25860){var state_val_25861 = (state_25860[(1)]);if((state_val_25861 === (7)))
{var inst_25856 = (state_25860[(2)]);var state_25860__$1 = state_25860;var statearr_25862_25885 = state_25860__$1;(statearr_25862_25885[(2)] = inst_25856);
(statearr_25862_25885[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25861 === (1)))
{var state_25860__$1 = state_25860;var statearr_25863_25886 = state_25860__$1;(statearr_25863_25886[(2)] = null);
(statearr_25863_25886[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25861 === (4)))
{var inst_25839 = (state_25860[(7)]);var inst_25839__$1 = (state_25860[(2)]);var inst_25840 = (inst_25839__$1 == null);var state_25860__$1 = (function (){var statearr_25864 = state_25860;(statearr_25864[(7)] = inst_25839__$1);
return statearr_25864;
})();if(cljs.core.truth_(inst_25840))
{var statearr_25865_25887 = state_25860__$1;(statearr_25865_25887[(1)] = (5));
} else
{var statearr_25866_25888 = state_25860__$1;(statearr_25866_25888[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25861 === (13)))
{var state_25860__$1 = state_25860;var statearr_25867_25889 = state_25860__$1;(statearr_25867_25889[(2)] = null);
(statearr_25867_25889[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25861 === (6)))
{var inst_25839 = (state_25860[(7)]);var state_25860__$1 = state_25860;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25860__$1,(11),to,inst_25839);
} else
{if((state_val_25861 === (3)))
{var inst_25858 = (state_25860[(2)]);var state_25860__$1 = state_25860;return cljs.core.async.impl.ioc_helpers.return_chan(state_25860__$1,inst_25858);
} else
{if((state_val_25861 === (12)))
{var state_25860__$1 = state_25860;var statearr_25868_25890 = state_25860__$1;(statearr_25868_25890[(2)] = null);
(statearr_25868_25890[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25861 === (2)))
{var state_25860__$1 = state_25860;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25860__$1,(4),from);
} else
{if((state_val_25861 === (11)))
{var inst_25849 = (state_25860[(2)]);var state_25860__$1 = state_25860;if(cljs.core.truth_(inst_25849))
{var statearr_25869_25891 = state_25860__$1;(statearr_25869_25891[(1)] = (12));
} else
{var statearr_25870_25892 = state_25860__$1;(statearr_25870_25892[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25861 === (9)))
{var state_25860__$1 = state_25860;var statearr_25871_25893 = state_25860__$1;(statearr_25871_25893[(2)] = null);
(statearr_25871_25893[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25861 === (5)))
{var state_25860__$1 = state_25860;if(cljs.core.truth_(close_QMARK_))
{var statearr_25872_25894 = state_25860__$1;(statearr_25872_25894[(1)] = (8));
} else
{var statearr_25873_25895 = state_25860__$1;(statearr_25873_25895[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25861 === (14)))
{var inst_25854 = (state_25860[(2)]);var state_25860__$1 = state_25860;var statearr_25874_25896 = state_25860__$1;(statearr_25874_25896[(2)] = inst_25854);
(statearr_25874_25896[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25861 === (10)))
{var inst_25846 = (state_25860[(2)]);var state_25860__$1 = state_25860;var statearr_25875_25897 = state_25860__$1;(statearr_25875_25897[(2)] = inst_25846);
(statearr_25875_25897[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25861 === (8)))
{var inst_25843 = cljs.core.async.close_BANG_(to);var state_25860__$1 = state_25860;var statearr_25876_25898 = state_25860__$1;(statearr_25876_25898[(2)] = inst_25843);
(statearr_25876_25898[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5861__auto___25884))
;return ((function (switch__5846__auto__,c__5861__auto___25884){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_25880 = [null,null,null,null,null,null,null,null];(statearr_25880[(0)] = state_machine__5847__auto__);
(statearr_25880[(1)] = (1));
return statearr_25880;
});
var state_machine__5847__auto____1 = (function (state_25860){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_25860);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e25881){if((e25881 instanceof Object))
{var ex__5850__auto__ = e25881;var statearr_25882_25899 = state_25860;(statearr_25882_25899[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25860);
return cljs.core.constant$keyword$16;
} else
{throw e25881;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__25900 = state_25860;
state_25860 = G__25900;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_25860){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_25860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___25884))
})();var state__5863__auto__ = (function (){var statearr_25883 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_25883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___25884);
return statearr_25883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___25884))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0))))));
}
var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);var process = ((function (jobs,results){
return (function (p__26086){var vec__26087 = p__26086;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26087,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26087,(1),null);var job = vec__26087;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__5861__auto___26271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___26271,res,vec__26087,v,p,job,jobs,results){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___26271,res,vec__26087,v,p,job,jobs,results){
return (function (state_26092){var state_val_26093 = (state_26092[(1)]);if((state_val_26093 === (2)))
{var inst_26089 = (state_26092[(2)]);var inst_26090 = cljs.core.async.close_BANG_(res);var state_26092__$1 = (function (){var statearr_26094 = state_26092;(statearr_26094[(7)] = inst_26089);
return statearr_26094;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26092__$1,inst_26090);
} else
{if((state_val_26093 === (1)))
{var state_26092__$1 = state_26092;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26092__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5861__auto___26271,res,vec__26087,v,p,job,jobs,results))
;return ((function (switch__5846__auto__,c__5861__auto___26271,res,vec__26087,v,p,job,jobs,results){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_26098 = [null,null,null,null,null,null,null,null];(statearr_26098[(0)] = state_machine__5847__auto__);
(statearr_26098[(1)] = (1));
return statearr_26098;
});
var state_machine__5847__auto____1 = (function (state_26092){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_26092);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e26099){if((e26099 instanceof Object))
{var ex__5850__auto__ = e26099;var statearr_26100_26272 = state_26092;(statearr_26100_26272[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26092);
return cljs.core.constant$keyword$16;
} else
{throw e26099;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__26273 = state_26092;
state_26092 = G__26273;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_26092){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_26092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___26271,res,vec__26087,v,p,job,jobs,results))
})();var state__5863__auto__ = (function (){var statearr_26101 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_26101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___26271);
return statearr_26101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___26271,res,vec__26087,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__26102){var vec__26103 = p__26102;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26103,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26103,(1),null);var job = vec__26103;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__26104_26274 = v;var G__26105_26275 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__26104_26274,G__26105_26275) : xf.call(null,G__26104_26274,G__26105_26275));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___26276 = n;var __26277 = (0);while(true){
if((__26277 < n__4508__auto___26276))
{var G__26106_26278 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__26106_26278) {
case "async":
var c__5861__auto___26280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__26277,c__5861__auto___26280,G__26106_26278,n__4508__auto___26276,jobs,results,process,async){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (__26277,c__5861__auto___26280,G__26106_26278,n__4508__auto___26276,jobs,results,process,async){
return (function (state_26119){var state_val_26120 = (state_26119[(1)]);if((state_val_26120 === (7)))
{var inst_26115 = (state_26119[(2)]);var state_26119__$1 = state_26119;var statearr_26121_26281 = state_26119__$1;(statearr_26121_26281[(2)] = inst_26115);
(statearr_26121_26281[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26120 === (6)))
{var state_26119__$1 = state_26119;var statearr_26122_26282 = state_26119__$1;(statearr_26122_26282[(2)] = null);
(statearr_26122_26282[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26120 === (5)))
{var state_26119__$1 = state_26119;var statearr_26123_26283 = state_26119__$1;(statearr_26123_26283[(2)] = null);
(statearr_26123_26283[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26120 === (4)))
{var inst_26109 = (state_26119[(2)]);var inst_26110 = async(inst_26109);var state_26119__$1 = state_26119;if(cljs.core.truth_(inst_26110))
{var statearr_26124_26284 = state_26119__$1;(statearr_26124_26284[(1)] = (5));
} else
{var statearr_26125_26285 = state_26119__$1;(statearr_26125_26285[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26120 === (3)))
{var inst_26117 = (state_26119[(2)]);var state_26119__$1 = state_26119;return cljs.core.async.impl.ioc_helpers.return_chan(state_26119__$1,inst_26117);
} else
{if((state_val_26120 === (2)))
{var state_26119__$1 = state_26119;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26119__$1,(4),jobs);
} else
{if((state_val_26120 === (1)))
{var state_26119__$1 = state_26119;var statearr_26126_26286 = state_26119__$1;(statearr_26126_26286[(2)] = null);
(statearr_26126_26286[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
});})(__26277,c__5861__auto___26280,G__26106_26278,n__4508__auto___26276,jobs,results,process,async))
;return ((function (__26277,switch__5846__auto__,c__5861__auto___26280,G__26106_26278,n__4508__auto___26276,jobs,results,process,async){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_26130 = [null,null,null,null,null,null,null];(statearr_26130[(0)] = state_machine__5847__auto__);
(statearr_26130[(1)] = (1));
return statearr_26130;
});
var state_machine__5847__auto____1 = (function (state_26119){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_26119);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e26131){if((e26131 instanceof Object))
{var ex__5850__auto__ = e26131;var statearr_26132_26287 = state_26119;(statearr_26132_26287[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26119);
return cljs.core.constant$keyword$16;
} else
{throw e26131;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__26288 = state_26119;
state_26119 = G__26288;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_26119){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_26119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(__26277,switch__5846__auto__,c__5861__auto___26280,G__26106_26278,n__4508__auto___26276,jobs,results,process,async))
})();var state__5863__auto__ = (function (){var statearr_26133 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_26133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___26280);
return statearr_26133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(__26277,c__5861__auto___26280,G__26106_26278,n__4508__auto___26276,jobs,results,process,async))
);

break;
case "compute":
var c__5861__auto___26289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__26277,c__5861__auto___26289,G__26106_26278,n__4508__auto___26276,jobs,results,process,async){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (__26277,c__5861__auto___26289,G__26106_26278,n__4508__auto___26276,jobs,results,process,async){
return (function (state_26146){var state_val_26147 = (state_26146[(1)]);if((state_val_26147 === (7)))
{var inst_26142 = (state_26146[(2)]);var state_26146__$1 = state_26146;var statearr_26148_26290 = state_26146__$1;(statearr_26148_26290[(2)] = inst_26142);
(statearr_26148_26290[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26147 === (6)))
{var state_26146__$1 = state_26146;var statearr_26149_26291 = state_26146__$1;(statearr_26149_26291[(2)] = null);
(statearr_26149_26291[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26147 === (5)))
{var state_26146__$1 = state_26146;var statearr_26150_26292 = state_26146__$1;(statearr_26150_26292[(2)] = null);
(statearr_26150_26292[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26147 === (4)))
{var inst_26136 = (state_26146[(2)]);var inst_26137 = process(inst_26136);var state_26146__$1 = state_26146;if(cljs.core.truth_(inst_26137))
{var statearr_26151_26293 = state_26146__$1;(statearr_26151_26293[(1)] = (5));
} else
{var statearr_26152_26294 = state_26146__$1;(statearr_26152_26294[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26147 === (3)))
{var inst_26144 = (state_26146[(2)]);var state_26146__$1 = state_26146;return cljs.core.async.impl.ioc_helpers.return_chan(state_26146__$1,inst_26144);
} else
{if((state_val_26147 === (2)))
{var state_26146__$1 = state_26146;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26146__$1,(4),jobs);
} else
{if((state_val_26147 === (1)))
{var state_26146__$1 = state_26146;var statearr_26153_26295 = state_26146__$1;(statearr_26153_26295[(2)] = null);
(statearr_26153_26295[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
});})(__26277,c__5861__auto___26289,G__26106_26278,n__4508__auto___26276,jobs,results,process,async))
;return ((function (__26277,switch__5846__auto__,c__5861__auto___26289,G__26106_26278,n__4508__auto___26276,jobs,results,process,async){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_26157 = [null,null,null,null,null,null,null];(statearr_26157[(0)] = state_machine__5847__auto__);
(statearr_26157[(1)] = (1));
return statearr_26157;
});
var state_machine__5847__auto____1 = (function (state_26146){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_26146);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e26158){if((e26158 instanceof Object))
{var ex__5850__auto__ = e26158;var statearr_26159_26296 = state_26146;(statearr_26159_26296[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26146);
return cljs.core.constant$keyword$16;
} else
{throw e26158;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__26297 = state_26146;
state_26146 = G__26297;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_26146){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_26146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(__26277,switch__5846__auto__,c__5861__auto___26289,G__26106_26278,n__4508__auto___26276,jobs,results,process,async))
})();var state__5863__auto__ = (function (){var statearr_26160 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_26160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___26289);
return statearr_26160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(__26277,c__5861__auto___26289,G__26106_26278,n__4508__auto___26276,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__26298 = (__26277 + (1));
__26277 = G__26298;
continue;
}
} else
{}
break;
}
var c__5861__auto___26299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___26299,jobs,results,process,async){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___26299,jobs,results,process,async){
return (function (state_26182){var state_val_26183 = (state_26182[(1)]);if((state_val_26183 === (9)))
{var inst_26175 = (state_26182[(2)]);var state_26182__$1 = (function (){var statearr_26184 = state_26182;(statearr_26184[(7)] = inst_26175);
return statearr_26184;
})();var statearr_26185_26300 = state_26182__$1;(statearr_26185_26300[(2)] = null);
(statearr_26185_26300[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26183 === (8)))
{var inst_26168 = (state_26182[(8)]);var inst_26173 = (state_26182[(2)]);var state_26182__$1 = (function (){var statearr_26186 = state_26182;(statearr_26186[(9)] = inst_26173);
return statearr_26186;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26182__$1,(9),results,inst_26168);
} else
{if((state_val_26183 === (7)))
{var inst_26178 = (state_26182[(2)]);var state_26182__$1 = state_26182;var statearr_26187_26301 = state_26182__$1;(statearr_26187_26301[(2)] = inst_26178);
(statearr_26187_26301[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26183 === (6)))
{var inst_26168 = (state_26182[(8)]);var inst_26163 = (state_26182[(10)]);var inst_26168__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_26169 = cljs.core.PersistentVector.EMPTY_NODE;var inst_26170 = [inst_26163,inst_26168__$1];var inst_26171 = (new cljs.core.PersistentVector(null,2,(5),inst_26169,inst_26170,null));var state_26182__$1 = (function (){var statearr_26188 = state_26182;(statearr_26188[(8)] = inst_26168__$1);
return statearr_26188;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26182__$1,(8),jobs,inst_26171);
} else
{if((state_val_26183 === (5)))
{var inst_26166 = cljs.core.async.close_BANG_(jobs);var state_26182__$1 = state_26182;var statearr_26189_26302 = state_26182__$1;(statearr_26189_26302[(2)] = inst_26166);
(statearr_26189_26302[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26183 === (4)))
{var inst_26163 = (state_26182[(10)]);var inst_26163__$1 = (state_26182[(2)]);var inst_26164 = (inst_26163__$1 == null);var state_26182__$1 = (function (){var statearr_26190 = state_26182;(statearr_26190[(10)] = inst_26163__$1);
return statearr_26190;
})();if(cljs.core.truth_(inst_26164))
{var statearr_26191_26303 = state_26182__$1;(statearr_26191_26303[(1)] = (5));
} else
{var statearr_26192_26304 = state_26182__$1;(statearr_26192_26304[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26183 === (3)))
{var inst_26180 = (state_26182[(2)]);var state_26182__$1 = state_26182;return cljs.core.async.impl.ioc_helpers.return_chan(state_26182__$1,inst_26180);
} else
{if((state_val_26183 === (2)))
{var state_26182__$1 = state_26182;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26182__$1,(4),from);
} else
{if((state_val_26183 === (1)))
{var state_26182__$1 = state_26182;var statearr_26193_26305 = state_26182__$1;(statearr_26193_26305[(2)] = null);
(statearr_26193_26305[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__5861__auto___26299,jobs,results,process,async))
;return ((function (switch__5846__auto__,c__5861__auto___26299,jobs,results,process,async){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_26197 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26197[(0)] = state_machine__5847__auto__);
(statearr_26197[(1)] = (1));
return statearr_26197;
});
var state_machine__5847__auto____1 = (function (state_26182){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_26182);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e26198){if((e26198 instanceof Object))
{var ex__5850__auto__ = e26198;var statearr_26199_26306 = state_26182;(statearr_26199_26306[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26182);
return cljs.core.constant$keyword$16;
} else
{throw e26198;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__26307 = state_26182;
state_26182 = G__26307;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_26182){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_26182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___26299,jobs,results,process,async))
})();var state__5863__auto__ = (function (){var statearr_26200 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_26200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___26299);
return statearr_26200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___26299,jobs,results,process,async))
);
var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__,jobs,results,process,async){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__,jobs,results,process,async){
return (function (state_26238){var state_val_26239 = (state_26238[(1)]);if((state_val_26239 === (7)))
{var inst_26234 = (state_26238[(2)]);var state_26238__$1 = state_26238;var statearr_26240_26308 = state_26238__$1;(statearr_26240_26308[(2)] = inst_26234);
(statearr_26240_26308[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26239 === (20)))
{var state_26238__$1 = state_26238;var statearr_26241_26309 = state_26238__$1;(statearr_26241_26309[(2)] = null);
(statearr_26241_26309[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26239 === (1)))
{var state_26238__$1 = state_26238;var statearr_26242_26310 = state_26238__$1;(statearr_26242_26310[(2)] = null);
(statearr_26242_26310[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26239 === (4)))
{var inst_26203 = (state_26238[(7)]);var inst_26203__$1 = (state_26238[(2)]);var inst_26204 = (inst_26203__$1 == null);var state_26238__$1 = (function (){var statearr_26243 = state_26238;(statearr_26243[(7)] = inst_26203__$1);
return statearr_26243;
})();if(cljs.core.truth_(inst_26204))
{var statearr_26244_26311 = state_26238__$1;(statearr_26244_26311[(1)] = (5));
} else
{var statearr_26245_26312 = state_26238__$1;(statearr_26245_26312[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26239 === (15)))
{var inst_26216 = (state_26238[(8)]);var state_26238__$1 = state_26238;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26238__$1,(18),to,inst_26216);
} else
{if((state_val_26239 === (21)))
{var inst_26229 = (state_26238[(2)]);var state_26238__$1 = state_26238;var statearr_26246_26313 = state_26238__$1;(statearr_26246_26313[(2)] = inst_26229);
(statearr_26246_26313[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26239 === (13)))
{var inst_26231 = (state_26238[(2)]);var state_26238__$1 = (function (){var statearr_26247 = state_26238;(statearr_26247[(9)] = inst_26231);
return statearr_26247;
})();var statearr_26248_26314 = state_26238__$1;(statearr_26248_26314[(2)] = null);
(statearr_26248_26314[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26239 === (6)))
{var inst_26203 = (state_26238[(7)]);var state_26238__$1 = state_26238;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26238__$1,(11),inst_26203);
} else
{if((state_val_26239 === (17)))
{var inst_26224 = (state_26238[(2)]);var state_26238__$1 = state_26238;if(cljs.core.truth_(inst_26224))
{var statearr_26249_26315 = state_26238__$1;(statearr_26249_26315[(1)] = (19));
} else
{var statearr_26250_26316 = state_26238__$1;(statearr_26250_26316[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26239 === (3)))
{var inst_26236 = (state_26238[(2)]);var state_26238__$1 = state_26238;return cljs.core.async.impl.ioc_helpers.return_chan(state_26238__$1,inst_26236);
} else
{if((state_val_26239 === (12)))
{var inst_26213 = (state_26238[(10)]);var state_26238__$1 = state_26238;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26238__$1,(14),inst_26213);
} else
{if((state_val_26239 === (2)))
{var state_26238__$1 = state_26238;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26238__$1,(4),results);
} else
{if((state_val_26239 === (19)))
{var state_26238__$1 = state_26238;var statearr_26251_26317 = state_26238__$1;(statearr_26251_26317[(2)] = null);
(statearr_26251_26317[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26239 === (11)))
{var inst_26213 = (state_26238[(2)]);var state_26238__$1 = (function (){var statearr_26252 = state_26238;(statearr_26252[(10)] = inst_26213);
return statearr_26252;
})();var statearr_26253_26318 = state_26238__$1;(statearr_26253_26318[(2)] = null);
(statearr_26253_26318[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26239 === (9)))
{var state_26238__$1 = state_26238;var statearr_26254_26319 = state_26238__$1;(statearr_26254_26319[(2)] = null);
(statearr_26254_26319[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26239 === (5)))
{var state_26238__$1 = state_26238;if(cljs.core.truth_(close_QMARK_))
{var statearr_26255_26320 = state_26238__$1;(statearr_26255_26320[(1)] = (8));
} else
{var statearr_26256_26321 = state_26238__$1;(statearr_26256_26321[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26239 === (14)))
{var inst_26218 = (state_26238[(11)]);var inst_26216 = (state_26238[(8)]);var inst_26216__$1 = (state_26238[(2)]);var inst_26217 = (inst_26216__$1 == null);var inst_26218__$1 = cljs.core.not(inst_26217);var state_26238__$1 = (function (){var statearr_26257 = state_26238;(statearr_26257[(11)] = inst_26218__$1);
(statearr_26257[(8)] = inst_26216__$1);
return statearr_26257;
})();if(inst_26218__$1)
{var statearr_26258_26322 = state_26238__$1;(statearr_26258_26322[(1)] = (15));
} else
{var statearr_26259_26323 = state_26238__$1;(statearr_26259_26323[(1)] = (16));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26239 === (16)))
{var inst_26218 = (state_26238[(11)]);var state_26238__$1 = state_26238;var statearr_26260_26324 = state_26238__$1;(statearr_26260_26324[(2)] = inst_26218);
(statearr_26260_26324[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26239 === (10)))
{var inst_26210 = (state_26238[(2)]);var state_26238__$1 = state_26238;var statearr_26261_26325 = state_26238__$1;(statearr_26261_26325[(2)] = inst_26210);
(statearr_26261_26325[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26239 === (18)))
{var inst_26221 = (state_26238[(2)]);var state_26238__$1 = state_26238;var statearr_26262_26326 = state_26238__$1;(statearr_26262_26326[(2)] = inst_26221);
(statearr_26262_26326[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26239 === (8)))
{var inst_26207 = cljs.core.async.close_BANG_(to);var state_26238__$1 = state_26238;var statearr_26263_26327 = state_26238__$1;(statearr_26263_26327[(2)] = inst_26207);
(statearr_26263_26327[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5861__auto__,jobs,results,process,async))
;return ((function (switch__5846__auto__,c__5861__auto__,jobs,results,process,async){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_26267 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26267[(0)] = state_machine__5847__auto__);
(statearr_26267[(1)] = (1));
return statearr_26267;
});
var state_machine__5847__auto____1 = (function (state_26238){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_26238);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e26268){if((e26268 instanceof Object))
{var ex__5850__auto__ = e26268;var statearr_26269_26328 = state_26238;(statearr_26269_26328[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26238);
return cljs.core.constant$keyword$16;
} else
{throw e26268;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__26329 = state_26238;
state_26238 = G__26329;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_26238){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_26238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__,jobs,results,process,async))
})();var state__5863__auto__ = (function (){var statearr_26270 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_26270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_26270;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__,jobs,results,process,async))
);
return c__5861__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$23);
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$24);
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5861__auto___26452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___26452,tc,fc){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___26452,tc,fc){
return (function (state_26426){var state_val_26427 = (state_26426[(1)]);if((state_val_26427 === (7)))
{var inst_26422 = (state_26426[(2)]);var state_26426__$1 = state_26426;var statearr_26428_26453 = state_26426__$1;(statearr_26428_26453[(2)] = inst_26422);
(statearr_26428_26453[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26427 === (1)))
{var state_26426__$1 = state_26426;var statearr_26429_26454 = state_26426__$1;(statearr_26429_26454[(2)] = null);
(statearr_26429_26454[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26427 === (4)))
{var inst_26403 = (state_26426[(7)]);var inst_26403__$1 = (state_26426[(2)]);var inst_26404 = (inst_26403__$1 == null);var state_26426__$1 = (function (){var statearr_26430 = state_26426;(statearr_26430[(7)] = inst_26403__$1);
return statearr_26430;
})();if(cljs.core.truth_(inst_26404))
{var statearr_26431_26455 = state_26426__$1;(statearr_26431_26455[(1)] = (5));
} else
{var statearr_26432_26456 = state_26426__$1;(statearr_26432_26456[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26427 === (13)))
{var state_26426__$1 = state_26426;var statearr_26433_26457 = state_26426__$1;(statearr_26433_26457[(2)] = null);
(statearr_26433_26457[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26427 === (6)))
{var inst_26403 = (state_26426[(7)]);var inst_26409 = (function (){var G__26434 = inst_26403;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26434) : p.call(null,G__26434));
})();var state_26426__$1 = state_26426;if(cljs.core.truth_(inst_26409))
{var statearr_26435_26458 = state_26426__$1;(statearr_26435_26458[(1)] = (9));
} else
{var statearr_26436_26459 = state_26426__$1;(statearr_26436_26459[(1)] = (10));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26427 === (3)))
{var inst_26424 = (state_26426[(2)]);var state_26426__$1 = state_26426;return cljs.core.async.impl.ioc_helpers.return_chan(state_26426__$1,inst_26424);
} else
{if((state_val_26427 === (12)))
{var state_26426__$1 = state_26426;var statearr_26437_26460 = state_26426__$1;(statearr_26437_26460[(2)] = null);
(statearr_26437_26460[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26427 === (2)))
{var state_26426__$1 = state_26426;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26426__$1,(4),ch);
} else
{if((state_val_26427 === (11)))
{var inst_26403 = (state_26426[(7)]);var inst_26413 = (state_26426[(2)]);var state_26426__$1 = state_26426;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26426__$1,(8),inst_26413,inst_26403);
} else
{if((state_val_26427 === (9)))
{var state_26426__$1 = state_26426;var statearr_26438_26461 = state_26426__$1;(statearr_26438_26461[(2)] = tc);
(statearr_26438_26461[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26427 === (5)))
{var inst_26406 = cljs.core.async.close_BANG_(tc);var inst_26407 = cljs.core.async.close_BANG_(fc);var state_26426__$1 = (function (){var statearr_26439 = state_26426;(statearr_26439[(8)] = inst_26406);
return statearr_26439;
})();var statearr_26440_26462 = state_26426__$1;(statearr_26440_26462[(2)] = inst_26407);
(statearr_26440_26462[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26427 === (14)))
{var inst_26420 = (state_26426[(2)]);var state_26426__$1 = state_26426;var statearr_26441_26463 = state_26426__$1;(statearr_26441_26463[(2)] = inst_26420);
(statearr_26441_26463[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26427 === (10)))
{var state_26426__$1 = state_26426;var statearr_26442_26464 = state_26426__$1;(statearr_26442_26464[(2)] = fc);
(statearr_26442_26464[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26427 === (8)))
{var inst_26415 = (state_26426[(2)]);var state_26426__$1 = state_26426;if(cljs.core.truth_(inst_26415))
{var statearr_26443_26465 = state_26426__$1;(statearr_26443_26465[(1)] = (12));
} else
{var statearr_26444_26466 = state_26426__$1;(statearr_26444_26466[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5861__auto___26452,tc,fc))
;return ((function (switch__5846__auto__,c__5861__auto___26452,tc,fc){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_26448 = [null,null,null,null,null,null,null,null,null];(statearr_26448[(0)] = state_machine__5847__auto__);
(statearr_26448[(1)] = (1));
return statearr_26448;
});
var state_machine__5847__auto____1 = (function (state_26426){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_26426);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e26449){if((e26449 instanceof Object))
{var ex__5850__auto__ = e26449;var statearr_26450_26467 = state_26426;(statearr_26450_26467[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26426);
return cljs.core.constant$keyword$16;
} else
{throw e26449;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__26468 = state_26426;
state_26426 = G__26468;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_26426){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_26426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___26452,tc,fc))
})();var state__5863__auto__ = (function (){var statearr_26451 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_26451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___26452);
return statearr_26451;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___26452,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__){
return (function (state_26517){var state_val_26518 = (state_26517[(1)]);if((state_val_26518 === (7)))
{var inst_26513 = (state_26517[(2)]);var state_26517__$1 = state_26517;var statearr_26519_26537 = state_26517__$1;(statearr_26519_26537[(2)] = inst_26513);
(statearr_26519_26537[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26518 === (6)))
{var inst_26503 = (state_26517[(7)]);var inst_26506 = (state_26517[(8)]);var inst_26510 = (function (){var G__26520 = inst_26503;var G__26521 = inst_26506;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26520,G__26521) : f.call(null,G__26520,G__26521));
})();var inst_26503__$1 = inst_26510;var state_26517__$1 = (function (){var statearr_26522 = state_26517;(statearr_26522[(7)] = inst_26503__$1);
return statearr_26522;
})();var statearr_26523_26538 = state_26517__$1;(statearr_26523_26538[(2)] = null);
(statearr_26523_26538[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26518 === (5)))
{var inst_26503 = (state_26517[(7)]);var state_26517__$1 = state_26517;var statearr_26524_26539 = state_26517__$1;(statearr_26524_26539[(2)] = inst_26503);
(statearr_26524_26539[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26518 === (4)))
{var inst_26506 = (state_26517[(8)]);var inst_26506__$1 = (state_26517[(2)]);var inst_26507 = (inst_26506__$1 == null);var state_26517__$1 = (function (){var statearr_26525 = state_26517;(statearr_26525[(8)] = inst_26506__$1);
return statearr_26525;
})();if(cljs.core.truth_(inst_26507))
{var statearr_26526_26540 = state_26517__$1;(statearr_26526_26540[(1)] = (5));
} else
{var statearr_26527_26541 = state_26517__$1;(statearr_26527_26541[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26518 === (3)))
{var inst_26515 = (state_26517[(2)]);var state_26517__$1 = state_26517;return cljs.core.async.impl.ioc_helpers.return_chan(state_26517__$1,inst_26515);
} else
{if((state_val_26518 === (2)))
{var state_26517__$1 = state_26517;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26517__$1,(4),ch);
} else
{if((state_val_26518 === (1)))
{var inst_26503 = init;var state_26517__$1 = (function (){var statearr_26528 = state_26517;(statearr_26528[(7)] = inst_26503);
return statearr_26528;
})();var statearr_26529_26542 = state_26517__$1;(statearr_26529_26542[(2)] = null);
(statearr_26529_26542[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
});})(c__5861__auto__))
;return ((function (switch__5846__auto__,c__5861__auto__){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_26533 = [null,null,null,null,null,null,null,null,null];(statearr_26533[(0)] = state_machine__5847__auto__);
(statearr_26533[(1)] = (1));
return statearr_26533;
});
var state_machine__5847__auto____1 = (function (state_26517){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_26517);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e26534){if((e26534 instanceof Object))
{var ex__5850__auto__ = e26534;var statearr_26535_26543 = state_26517;(statearr_26535_26543[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26517);
return cljs.core.constant$keyword$16;
} else
{throw e26534;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__26544 = state_26517;
state_26517 = G__26544;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_26517){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_26517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__))
})();var state__5863__auto__ = (function (){var statearr_26536 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_26536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_26536;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__))
);
return c__5861__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__){
return (function (state_26621){var state_val_26622 = (state_26621[(1)]);if((state_val_26622 === (7)))
{var inst_26603 = (state_26621[(2)]);var state_26621__$1 = state_26621;var statearr_26623_26646 = state_26621__$1;(statearr_26623_26646[(2)] = inst_26603);
(statearr_26623_26646[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26622 === (1)))
{var inst_26597 = cljs.core.seq(coll);var inst_26598 = inst_26597;var state_26621__$1 = (function (){var statearr_26624 = state_26621;(statearr_26624[(7)] = inst_26598);
return statearr_26624;
})();var statearr_26625_26647 = state_26621__$1;(statearr_26625_26647[(2)] = null);
(statearr_26625_26647[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26622 === (4)))
{var inst_26598 = (state_26621[(7)]);var inst_26601 = cljs.core.first(inst_26598);var state_26621__$1 = state_26621;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26621__$1,(7),ch,inst_26601);
} else
{if((state_val_26622 === (13)))
{var inst_26615 = (state_26621[(2)]);var state_26621__$1 = state_26621;var statearr_26626_26648 = state_26621__$1;(statearr_26626_26648[(2)] = inst_26615);
(statearr_26626_26648[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26622 === (6)))
{var inst_26606 = (state_26621[(2)]);var state_26621__$1 = state_26621;if(cljs.core.truth_(inst_26606))
{var statearr_26627_26649 = state_26621__$1;(statearr_26627_26649[(1)] = (8));
} else
{var statearr_26628_26650 = state_26621__$1;(statearr_26628_26650[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26622 === (3)))
{var inst_26619 = (state_26621[(2)]);var state_26621__$1 = state_26621;return cljs.core.async.impl.ioc_helpers.return_chan(state_26621__$1,inst_26619);
} else
{if((state_val_26622 === (12)))
{var state_26621__$1 = state_26621;var statearr_26629_26651 = state_26621__$1;(statearr_26629_26651[(2)] = null);
(statearr_26629_26651[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26622 === (2)))
{var inst_26598 = (state_26621[(7)]);var state_26621__$1 = state_26621;if(cljs.core.truth_(inst_26598))
{var statearr_26630_26652 = state_26621__$1;(statearr_26630_26652[(1)] = (4));
} else
{var statearr_26631_26653 = state_26621__$1;(statearr_26631_26653[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26622 === (11)))
{var inst_26612 = cljs.core.async.close_BANG_(ch);var state_26621__$1 = state_26621;var statearr_26632_26654 = state_26621__$1;(statearr_26632_26654[(2)] = inst_26612);
(statearr_26632_26654[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26622 === (9)))
{var state_26621__$1 = state_26621;if(cljs.core.truth_(close_QMARK_))
{var statearr_26633_26655 = state_26621__$1;(statearr_26633_26655[(1)] = (11));
} else
{var statearr_26634_26656 = state_26621__$1;(statearr_26634_26656[(1)] = (12));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26622 === (5)))
{var inst_26598 = (state_26621[(7)]);var state_26621__$1 = state_26621;var statearr_26635_26657 = state_26621__$1;(statearr_26635_26657[(2)] = inst_26598);
(statearr_26635_26657[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26622 === (10)))
{var inst_26617 = (state_26621[(2)]);var state_26621__$1 = state_26621;var statearr_26636_26658 = state_26621__$1;(statearr_26636_26658[(2)] = inst_26617);
(statearr_26636_26658[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26622 === (8)))
{var inst_26598 = (state_26621[(7)]);var inst_26608 = cljs.core.next(inst_26598);var inst_26598__$1 = inst_26608;var state_26621__$1 = (function (){var statearr_26637 = state_26621;(statearr_26637[(7)] = inst_26598__$1);
return statearr_26637;
})();var statearr_26638_26659 = state_26621__$1;(statearr_26638_26659[(2)] = null);
(statearr_26638_26659[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5861__auto__))
;return ((function (switch__5846__auto__,c__5861__auto__){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_26642 = [null,null,null,null,null,null,null,null];(statearr_26642[(0)] = state_machine__5847__auto__);
(statearr_26642[(1)] = (1));
return statearr_26642;
});
var state_machine__5847__auto____1 = (function (state_26621){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_26621);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e26643){if((e26643 instanceof Object))
{var ex__5850__auto__ = e26643;var statearr_26644_26660 = state_26621;(statearr_26644_26660[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26621);
return cljs.core.constant$keyword$16;
} else
{throw e26643;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__26661 = state_26621;
state_26621 = G__26661;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_26621){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_26621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__))
})();var state__5863__auto__ = (function (){var statearr_26645 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_26645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_26645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__))
);
return c__5861__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj26663 = {};return obj26663;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3626__auto__ = _;if(and__3626__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3626__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4275__auto__ = (((_ == null))?null:_);return (function (){var or__3638__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__26667 = x__4275__auto__;return goog.typeOf(G__26667);
})()]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj26669 = {};return obj26669;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3626__auto__ = m;if(and__3626__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3626__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3638__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__26673 = x__4275__auto__;return goog.typeOf(G__26673);
})()]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3626__auto__ = m;if(and__3626__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3626__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3638__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__26677 = x__4275__auto__;return goog.typeOf(G__26677);
})()]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3626__auto__ = m;if(and__3626__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3626__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3638__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__26681 = x__4275__auto__;return goog.typeOf(G__26681);
})()]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__26911 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26911) : cljs.core.atom.call(null,G__26911));
})();var m = (function (){if(typeof cljs.core.async.t26912 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26912 = (function (cs,ch,mult,meta26913){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26913 = meta26913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26912.cljs$lang$type = true;
cljs.core.async.t26912.cljs$lang$ctorStr = "cljs.core.async/t26912";
cljs.core.async.t26912.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t26912");
});})(cs))
;
cljs.core.async.t26912.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26912.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26912.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26912.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__26915_27140 = self__.cs;var G__26916_27141 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26915_27140,G__26916_27141) : cljs.core.reset_BANG_.call(null,G__26915_27140,G__26916_27141));
return null;
});})(cs))
;
cljs.core.async.t26912.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26912.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26914){var self__ = this;
var _26914__$1 = this;return self__.meta26913;
});})(cs))
;
cljs.core.async.t26912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26914,meta26913__$1){var self__ = this;
var _26914__$1 = this;return (new cljs.core.async.t26912(self__.cs,self__.ch,self__.mult,meta26913__$1));
});})(cs))
;
cljs.core.async.__GT_t26912 = ((function (cs){
return (function __GT_t26912(cs__$1,ch__$1,mult__$1,meta26913){return (new cljs.core.async.t26912(cs__$1,ch__$1,mult__$1,meta26913));
});})(cs))
;
}
return (new cljs.core.async.t26912(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__26917 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26917) : cljs.core.atom.call(null,G__26917));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5861__auto___27142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___27142,cs,m,dchan,dctr,done){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___27142,cs,m,dchan,dctr,done){
return (function (state_27048){var state_val_27049 = (state_27048[(1)]);if((state_val_27049 === (7)))
{var inst_27044 = (state_27048[(2)]);var state_27048__$1 = state_27048;var statearr_27050_27143 = state_27048__$1;(statearr_27050_27143[(2)] = inst_27044);
(statearr_27050_27143[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (20)))
{var inst_26949 = (state_27048[(7)]);var inst_26959 = cljs.core.first(inst_26949);var inst_26960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26959,(0),null);var inst_26961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26959,(1),null);var state_27048__$1 = (function (){var statearr_27051 = state_27048;(statearr_27051[(8)] = inst_26960);
return statearr_27051;
})();if(cljs.core.truth_(inst_26961))
{var statearr_27052_27144 = state_27048__$1;(statearr_27052_27144[(1)] = (22));
} else
{var statearr_27053_27145 = state_27048__$1;(statearr_27053_27145[(1)] = (23));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (27)))
{var inst_26920 = (state_27048[(9)]);var inst_26991 = (state_27048[(10)]);var inst_26996 = (state_27048[(11)]);var inst_26989 = (state_27048[(12)]);var inst_26996__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26989,inst_26991);var inst_26997 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_26996__$1,inst_26920,done);var state_27048__$1 = (function (){var statearr_27054 = state_27048;(statearr_27054[(11)] = inst_26996__$1);
return statearr_27054;
})();if(cljs.core.truth_(inst_26997))
{var statearr_27055_27146 = state_27048__$1;(statearr_27055_27146[(1)] = (30));
} else
{var statearr_27056_27147 = state_27048__$1;(statearr_27056_27147[(1)] = (31));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (1)))
{var state_27048__$1 = state_27048;var statearr_27057_27148 = state_27048__$1;(statearr_27057_27148[(2)] = null);
(statearr_27057_27148[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (24)))
{var inst_26949 = (state_27048[(7)]);var inst_26966 = (state_27048[(2)]);var inst_26967 = cljs.core.next(inst_26949);var inst_26929 = inst_26967;var inst_26930 = null;var inst_26931 = (0);var inst_26932 = (0);var state_27048__$1 = (function (){var statearr_27058 = state_27048;(statearr_27058[(13)] = inst_26931);
(statearr_27058[(14)] = inst_26966);
(statearr_27058[(15)] = inst_26929);
(statearr_27058[(16)] = inst_26930);
(statearr_27058[(17)] = inst_26932);
return statearr_27058;
})();var statearr_27059_27149 = state_27048__$1;(statearr_27059_27149[(2)] = null);
(statearr_27059_27149[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (39)))
{var state_27048__$1 = state_27048;var statearr_27063_27150 = state_27048__$1;(statearr_27063_27150[(2)] = null);
(statearr_27063_27150[(1)] = (41));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (4)))
{var inst_26920 = (state_27048[(9)]);var inst_26920__$1 = (state_27048[(2)]);var inst_26921 = (inst_26920__$1 == null);var state_27048__$1 = (function (){var statearr_27064 = state_27048;(statearr_27064[(9)] = inst_26920__$1);
return statearr_27064;
})();if(cljs.core.truth_(inst_26921))
{var statearr_27065_27151 = state_27048__$1;(statearr_27065_27151[(1)] = (5));
} else
{var statearr_27066_27152 = state_27048__$1;(statearr_27066_27152[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (15)))
{var inst_26931 = (state_27048[(13)]);var inst_26929 = (state_27048[(15)]);var inst_26930 = (state_27048[(16)]);var inst_26932 = (state_27048[(17)]);var inst_26945 = (state_27048[(2)]);var inst_26946 = (inst_26932 + (1));var tmp27060 = inst_26931;var tmp27061 = inst_26929;var tmp27062 = inst_26930;var inst_26929__$1 = tmp27061;var inst_26930__$1 = tmp27062;var inst_26931__$1 = tmp27060;var inst_26932__$1 = inst_26946;var state_27048__$1 = (function (){var statearr_27067 = state_27048;(statearr_27067[(13)] = inst_26931__$1);
(statearr_27067[(18)] = inst_26945);
(statearr_27067[(15)] = inst_26929__$1);
(statearr_27067[(16)] = inst_26930__$1);
(statearr_27067[(17)] = inst_26932__$1);
return statearr_27067;
})();var statearr_27068_27153 = state_27048__$1;(statearr_27068_27153[(2)] = null);
(statearr_27068_27153[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (21)))
{var inst_26970 = (state_27048[(2)]);var state_27048__$1 = state_27048;var statearr_27072_27154 = state_27048__$1;(statearr_27072_27154[(2)] = inst_26970);
(statearr_27072_27154[(1)] = (18));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (31)))
{var inst_26996 = (state_27048[(11)]);var inst_27000 = done(null);var inst_27001 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_26996);var state_27048__$1 = (function (){var statearr_27073 = state_27048;(statearr_27073[(19)] = inst_27000);
return statearr_27073;
})();var statearr_27074_27155 = state_27048__$1;(statearr_27074_27155[(2)] = inst_27001);
(statearr_27074_27155[(1)] = (32));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (32)))
{var inst_26991 = (state_27048[(10)]);var inst_26990 = (state_27048[(20)]);var inst_26989 = (state_27048[(12)]);var inst_26988 = (state_27048[(21)]);var inst_27003 = (state_27048[(2)]);var inst_27004 = (inst_26991 + (1));var tmp27069 = inst_26990;var tmp27070 = inst_26989;var tmp27071 = inst_26988;var inst_26988__$1 = tmp27071;var inst_26989__$1 = tmp27070;var inst_26990__$1 = tmp27069;var inst_26991__$1 = inst_27004;var state_27048__$1 = (function (){var statearr_27075 = state_27048;(statearr_27075[(10)] = inst_26991__$1);
(statearr_27075[(20)] = inst_26990__$1);
(statearr_27075[(12)] = inst_26989__$1);
(statearr_27075[(22)] = inst_27003);
(statearr_27075[(21)] = inst_26988__$1);
return statearr_27075;
})();var statearr_27076_27156 = state_27048__$1;(statearr_27076_27156[(2)] = null);
(statearr_27076_27156[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (40)))
{var inst_27016 = (state_27048[(23)]);var inst_27020 = done(null);var inst_27021 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27016);var state_27048__$1 = (function (){var statearr_27077 = state_27048;(statearr_27077[(24)] = inst_27020);
return statearr_27077;
})();var statearr_27078_27157 = state_27048__$1;(statearr_27078_27157[(2)] = inst_27021);
(statearr_27078_27157[(1)] = (41));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (33)))
{var inst_27007 = (state_27048[(25)]);var inst_27009 = cljs.core.chunked_seq_QMARK_(inst_27007);var state_27048__$1 = state_27048;if(inst_27009)
{var statearr_27079_27158 = state_27048__$1;(statearr_27079_27158[(1)] = (36));
} else
{var statearr_27080_27159 = state_27048__$1;(statearr_27080_27159[(1)] = (37));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (13)))
{var inst_26939 = (state_27048[(26)]);var inst_26942 = cljs.core.async.close_BANG_(inst_26939);var state_27048__$1 = state_27048;var statearr_27081_27160 = state_27048__$1;(statearr_27081_27160[(2)] = inst_26942);
(statearr_27081_27160[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (22)))
{var inst_26960 = (state_27048[(8)]);var inst_26963 = cljs.core.async.close_BANG_(inst_26960);var state_27048__$1 = state_27048;var statearr_27082_27161 = state_27048__$1;(statearr_27082_27161[(2)] = inst_26963);
(statearr_27082_27161[(1)] = (24));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (36)))
{var inst_27007 = (state_27048[(25)]);var inst_27011 = cljs.core.chunk_first(inst_27007);var inst_27012 = cljs.core.chunk_rest(inst_27007);var inst_27013 = cljs.core.count(inst_27011);var inst_26988 = inst_27012;var inst_26989 = inst_27011;var inst_26990 = inst_27013;var inst_26991 = (0);var state_27048__$1 = (function (){var statearr_27083 = state_27048;(statearr_27083[(10)] = inst_26991);
(statearr_27083[(20)] = inst_26990);
(statearr_27083[(12)] = inst_26989);
(statearr_27083[(21)] = inst_26988);
return statearr_27083;
})();var statearr_27084_27162 = state_27048__$1;(statearr_27084_27162[(2)] = null);
(statearr_27084_27162[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (41)))
{var inst_27007 = (state_27048[(25)]);var inst_27023 = (state_27048[(2)]);var inst_27024 = cljs.core.next(inst_27007);var inst_26988 = inst_27024;var inst_26989 = null;var inst_26990 = (0);var inst_26991 = (0);var state_27048__$1 = (function (){var statearr_27085 = state_27048;(statearr_27085[(27)] = inst_27023);
(statearr_27085[(10)] = inst_26991);
(statearr_27085[(20)] = inst_26990);
(statearr_27085[(12)] = inst_26989);
(statearr_27085[(21)] = inst_26988);
return statearr_27085;
})();var statearr_27086_27163 = state_27048__$1;(statearr_27086_27163[(2)] = null);
(statearr_27086_27163[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (43)))
{var state_27048__$1 = state_27048;var statearr_27087_27164 = state_27048__$1;(statearr_27087_27164[(2)] = null);
(statearr_27087_27164[(1)] = (44));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (29)))
{var inst_27032 = (state_27048[(2)]);var state_27048__$1 = state_27048;var statearr_27088_27165 = state_27048__$1;(statearr_27088_27165[(2)] = inst_27032);
(statearr_27088_27165[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (44)))
{var inst_27041 = (state_27048[(2)]);var state_27048__$1 = (function (){var statearr_27089 = state_27048;(statearr_27089[(28)] = inst_27041);
return statearr_27089;
})();var statearr_27090_27166 = state_27048__$1;(statearr_27090_27166[(2)] = null);
(statearr_27090_27166[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (6)))
{var inst_26980 = (state_27048[(29)]);var inst_26979 = (function (){var G__27091 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27091) : cljs.core.deref.call(null,G__27091));
})();var inst_26980__$1 = cljs.core.keys(inst_26979);var inst_26981 = cljs.core.count(inst_26980__$1);var inst_26982 = (function (){var G__27092 = dctr;var G__27093 = inst_26981;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27092,G__27093) : cljs.core.reset_BANG_.call(null,G__27092,G__27093));
})();var inst_26987 = cljs.core.seq(inst_26980__$1);var inst_26988 = inst_26987;var inst_26989 = null;var inst_26990 = (0);var inst_26991 = (0);var state_27048__$1 = (function (){var statearr_27094 = state_27048;(statearr_27094[(10)] = inst_26991);
(statearr_27094[(30)] = inst_26982);
(statearr_27094[(20)] = inst_26990);
(statearr_27094[(12)] = inst_26989);
(statearr_27094[(21)] = inst_26988);
(statearr_27094[(29)] = inst_26980__$1);
return statearr_27094;
})();var statearr_27095_27167 = state_27048__$1;(statearr_27095_27167[(2)] = null);
(statearr_27095_27167[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (28)))
{var inst_27007 = (state_27048[(25)]);var inst_26988 = (state_27048[(21)]);var inst_27007__$1 = cljs.core.seq(inst_26988);var state_27048__$1 = (function (){var statearr_27096 = state_27048;(statearr_27096[(25)] = inst_27007__$1);
return statearr_27096;
})();if(inst_27007__$1)
{var statearr_27097_27168 = state_27048__$1;(statearr_27097_27168[(1)] = (33));
} else
{var statearr_27098_27169 = state_27048__$1;(statearr_27098_27169[(1)] = (34));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (25)))
{var inst_26991 = (state_27048[(10)]);var inst_26990 = (state_27048[(20)]);var inst_26993 = (inst_26991 < inst_26990);var inst_26994 = inst_26993;var state_27048__$1 = state_27048;if(cljs.core.truth_(inst_26994))
{var statearr_27099_27170 = state_27048__$1;(statearr_27099_27170[(1)] = (27));
} else
{var statearr_27100_27171 = state_27048__$1;(statearr_27100_27171[(1)] = (28));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (34)))
{var state_27048__$1 = state_27048;var statearr_27101_27172 = state_27048__$1;(statearr_27101_27172[(2)] = null);
(statearr_27101_27172[(1)] = (35));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (17)))
{var state_27048__$1 = state_27048;var statearr_27102_27173 = state_27048__$1;(statearr_27102_27173[(2)] = null);
(statearr_27102_27173[(1)] = (18));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (3)))
{var inst_27046 = (state_27048[(2)]);var state_27048__$1 = state_27048;return cljs.core.async.impl.ioc_helpers.return_chan(state_27048__$1,inst_27046);
} else
{if((state_val_27049 === (12)))
{var inst_26975 = (state_27048[(2)]);var state_27048__$1 = state_27048;var statearr_27103_27174 = state_27048__$1;(statearr_27103_27174[(2)] = inst_26975);
(statearr_27103_27174[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (2)))
{var state_27048__$1 = state_27048;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27048__$1,(4),ch);
} else
{if((state_val_27049 === (23)))
{var state_27048__$1 = state_27048;var statearr_27104_27175 = state_27048__$1;(statearr_27104_27175[(2)] = null);
(statearr_27104_27175[(1)] = (24));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (35)))
{var inst_27030 = (state_27048[(2)]);var state_27048__$1 = state_27048;var statearr_27105_27176 = state_27048__$1;(statearr_27105_27176[(2)] = inst_27030);
(statearr_27105_27176[(1)] = (29));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (19)))
{var inst_26949 = (state_27048[(7)]);var inst_26953 = cljs.core.chunk_first(inst_26949);var inst_26954 = cljs.core.chunk_rest(inst_26949);var inst_26955 = cljs.core.count(inst_26953);var inst_26929 = inst_26954;var inst_26930 = inst_26953;var inst_26931 = inst_26955;var inst_26932 = (0);var state_27048__$1 = (function (){var statearr_27106 = state_27048;(statearr_27106[(13)] = inst_26931);
(statearr_27106[(15)] = inst_26929);
(statearr_27106[(16)] = inst_26930);
(statearr_27106[(17)] = inst_26932);
return statearr_27106;
})();var statearr_27107_27177 = state_27048__$1;(statearr_27107_27177[(2)] = null);
(statearr_27107_27177[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (11)))
{var inst_26949 = (state_27048[(7)]);var inst_26929 = (state_27048[(15)]);var inst_26949__$1 = cljs.core.seq(inst_26929);var state_27048__$1 = (function (){var statearr_27108 = state_27048;(statearr_27108[(7)] = inst_26949__$1);
return statearr_27108;
})();if(inst_26949__$1)
{var statearr_27109_27178 = state_27048__$1;(statearr_27109_27178[(1)] = (16));
} else
{var statearr_27110_27179 = state_27048__$1;(statearr_27110_27179[(1)] = (17));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (9)))
{var inst_26977 = (state_27048[(2)]);var state_27048__$1 = state_27048;var statearr_27111_27180 = state_27048__$1;(statearr_27111_27180[(2)] = inst_26977);
(statearr_27111_27180[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (5)))
{var inst_26927 = (function (){var G__27112 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27112) : cljs.core.deref.call(null,G__27112));
})();var inst_26928 = cljs.core.seq(inst_26927);var inst_26929 = inst_26928;var inst_26930 = null;var inst_26931 = (0);var inst_26932 = (0);var state_27048__$1 = (function (){var statearr_27113 = state_27048;(statearr_27113[(13)] = inst_26931);
(statearr_27113[(15)] = inst_26929);
(statearr_27113[(16)] = inst_26930);
(statearr_27113[(17)] = inst_26932);
return statearr_27113;
})();var statearr_27114_27181 = state_27048__$1;(statearr_27114_27181[(2)] = null);
(statearr_27114_27181[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (14)))
{var state_27048__$1 = state_27048;var statearr_27115_27182 = state_27048__$1;(statearr_27115_27182[(2)] = null);
(statearr_27115_27182[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (45)))
{var inst_27038 = (state_27048[(2)]);var state_27048__$1 = state_27048;var statearr_27116_27183 = state_27048__$1;(statearr_27116_27183[(2)] = inst_27038);
(statearr_27116_27183[(1)] = (44));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (26)))
{var inst_26980 = (state_27048[(29)]);var inst_27034 = (state_27048[(2)]);var inst_27035 = cljs.core.seq(inst_26980);var state_27048__$1 = (function (){var statearr_27117 = state_27048;(statearr_27117[(31)] = inst_27034);
return statearr_27117;
})();if(inst_27035)
{var statearr_27118_27184 = state_27048__$1;(statearr_27118_27184[(1)] = (42));
} else
{var statearr_27119_27185 = state_27048__$1;(statearr_27119_27185[(1)] = (43));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (16)))
{var inst_26949 = (state_27048[(7)]);var inst_26951 = cljs.core.chunked_seq_QMARK_(inst_26949);var state_27048__$1 = state_27048;if(inst_26951)
{var statearr_27120_27186 = state_27048__$1;(statearr_27120_27186[(1)] = (19));
} else
{var statearr_27121_27187 = state_27048__$1;(statearr_27121_27187[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (38)))
{var inst_27027 = (state_27048[(2)]);var state_27048__$1 = state_27048;var statearr_27122_27188 = state_27048__$1;(statearr_27122_27188[(2)] = inst_27027);
(statearr_27122_27188[(1)] = (35));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (30)))
{var state_27048__$1 = state_27048;var statearr_27123_27189 = state_27048__$1;(statearr_27123_27189[(2)] = null);
(statearr_27123_27189[(1)] = (32));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (10)))
{var inst_26930 = (state_27048[(16)]);var inst_26932 = (state_27048[(17)]);var inst_26938 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26930,inst_26932);var inst_26939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26938,(0),null);var inst_26940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26938,(1),null);var state_27048__$1 = (function (){var statearr_27124 = state_27048;(statearr_27124[(26)] = inst_26939);
return statearr_27124;
})();if(cljs.core.truth_(inst_26940))
{var statearr_27125_27190 = state_27048__$1;(statearr_27125_27190[(1)] = (13));
} else
{var statearr_27126_27191 = state_27048__$1;(statearr_27126_27191[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (18)))
{var inst_26973 = (state_27048[(2)]);var state_27048__$1 = state_27048;var statearr_27127_27192 = state_27048__$1;(statearr_27127_27192[(2)] = inst_26973);
(statearr_27127_27192[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (42)))
{var state_27048__$1 = state_27048;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27048__$1,(45),dchan);
} else
{if((state_val_27049 === (37)))
{var inst_26920 = (state_27048[(9)]);var inst_27016 = (state_27048[(23)]);var inst_27007 = (state_27048[(25)]);var inst_27016__$1 = cljs.core.first(inst_27007);var inst_27017 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27016__$1,inst_26920,done);var state_27048__$1 = (function (){var statearr_27128 = state_27048;(statearr_27128[(23)] = inst_27016__$1);
return statearr_27128;
})();if(cljs.core.truth_(inst_27017))
{var statearr_27129_27193 = state_27048__$1;(statearr_27129_27193[(1)] = (39));
} else
{var statearr_27130_27194 = state_27048__$1;(statearr_27130_27194[(1)] = (40));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27049 === (8)))
{var inst_26931 = (state_27048[(13)]);var inst_26932 = (state_27048[(17)]);var inst_26934 = (inst_26932 < inst_26931);var inst_26935 = inst_26934;var state_27048__$1 = state_27048;if(cljs.core.truth_(inst_26935))
{var statearr_27131_27195 = state_27048__$1;(statearr_27131_27195[(1)] = (10));
} else
{var statearr_27132_27196 = state_27048__$1;(statearr_27132_27196[(1)] = (11));
}
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5861__auto___27142,cs,m,dchan,dctr,done))
;return ((function (switch__5846__auto__,c__5861__auto___27142,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_27136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27136[(0)] = state_machine__5847__auto__);
(statearr_27136[(1)] = (1));
return statearr_27136;
});
var state_machine__5847__auto____1 = (function (state_27048){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_27048);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e27137){if((e27137 instanceof Object))
{var ex__5850__auto__ = e27137;var statearr_27138_27197 = state_27048;(statearr_27138_27197[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27048);
return cljs.core.constant$keyword$16;
} else
{throw e27137;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__27198 = state_27048;
state_27048 = G__27198;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_27048){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_27048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___27142,cs,m,dchan,dctr,done))
})();var state__5863__auto__ = (function (){var statearr_27139 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_27139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___27142);
return statearr_27139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___27142,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj27203 = {};return obj27203;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3626__auto__ = m;if(and__3626__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3626__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3638__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__27207 = x__4275__auto__;return goog.typeOf(G__27207);
})()]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3626__auto__ = m;if(and__3626__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3626__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3638__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__27211 = x__4275__auto__;return goog.typeOf(G__27211);
})()]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3626__auto__ = m;if(and__3626__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3626__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3638__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__27215 = x__4275__auto__;return goog.typeOf(G__27215);
})()]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3626__auto__ = m;if(and__3626__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3626__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3638__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__27219 = x__4275__auto__;return goog.typeOf(G__27219);
})()]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3626__auto__ = m;if(and__3626__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3626__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3638__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__27223 = x__4275__auto__;return goog.typeOf(G__27223);
})()]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__27224){var map__27230 = p__27224;var map__27230__$1 = ((cljs.core.seq_QMARK_(map__27230))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27230):map__27230);var opts = map__27230__$1;var statearr_27231_27235 = state;(statearr_27231_27235[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4222__auto__ = cljs.core.async.do_alts(((function (map__27230,map__27230__$1,opts){
return (function (val){var statearr_27232_27236 = state;(statearr_27232_27236[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__27230,map__27230__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4222__auto__))
{var cb = temp__4222__auto__;var statearr_27233_27237 = state;(statearr_27233_27237[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__27234 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27234) : cljs.core.deref.call(null,G__27234));
})());
return cljs.core.constant$keyword$16;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__27224 = null;if (arguments.length > 3) {
  p__27224 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__27224);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__27238){
var state = cljs.core.first(arglist__27238);
arglist__27238 = cljs.core.next(arglist__27238);
var cont_block = cljs.core.first(arglist__27238);
arglist__27238 = cljs.core.next(arglist__27238);
var ports = cljs.core.first(arglist__27238);
var p__27224 = cljs.core.rest(arglist__27238);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__27224);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__27372 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27372) : cljs.core.atom.call(null,G__27372));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$26,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$27);var solo_mode = (function (){var G__27373 = cljs.core.constant$keyword$26;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27373) : cljs.core.atom.call(null,G__27373));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__27374 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__27374) : attr.call(null,G__27374));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__27375 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27375) : cljs.core.deref.call(null,G__27375));
})();var mode = (function (){var G__27376 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27376) : cljs.core.deref.call(null,G__27376));
})();var solos = pick(cljs.core.constant$keyword$27,chs);var pauses = pick(cljs.core.constant$keyword$25,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$28,solos,cljs.core.constant$keyword$29,pick(cljs.core.constant$keyword$26,chs),cljs.core.constant$keyword$30,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$25)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t27377 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27377 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27378){
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
this.meta27378 = meta27378;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27377.cljs$lang$type = true;
cljs.core.async.t27377.cljs$lang$ctorStr = "cljs.core.async/t27377";
cljs.core.async.t27377.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t27377");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27377.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t27377.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27377.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27377.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__27380_27505 = self__.cs;var G__27381_27506 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27380_27505,G__27381_27506) : cljs.core.reset_BANG_.call(null,G__27380_27505,G__27381_27506));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27377.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27377.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__27382 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__27382) : self__.solo_modes.call(null,G__27382));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__27383_27507 = self__.solo_mode;var G__27384_27508 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27383_27507,G__27384_27508) : cljs.core.reset_BANG_.call(null,G__27383_27507,G__27384_27508));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27377.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27377.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27379){var self__ = this;
var _27379__$1 = this;return self__.meta27378;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27379,meta27378__$1){var self__ = this;
var _27379__$1 = this;return (new cljs.core.async.t27377(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27378__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t27377 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27377(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27378){return (new cljs.core.async.t27377(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27378));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t27377(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5861__auto___27509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___27509,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___27509,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27456){var state_val_27457 = (state_27456[(1)]);if((state_val_27457 === (7)))
{var inst_27398 = (state_27456[(7)]);var inst_27403 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27398);var state_27456__$1 = state_27456;var statearr_27458_27510 = state_27456__$1;(statearr_27458_27510[(2)] = inst_27403);
(statearr_27458_27510[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (20)))
{var inst_27413 = (state_27456[(8)]);var state_27456__$1 = state_27456;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27456__$1,(23),out,inst_27413);
} else
{if((state_val_27457 === (1)))
{var inst_27388 = (state_27456[(9)]);var inst_27388__$1 = calc_state();var inst_27389 = cljs.core.seq_QMARK_(inst_27388__$1);var state_27456__$1 = (function (){var statearr_27459 = state_27456;(statearr_27459[(9)] = inst_27388__$1);
return statearr_27459;
})();if(inst_27389)
{var statearr_27460_27511 = state_27456__$1;(statearr_27460_27511[(1)] = (2));
} else
{var statearr_27461_27512 = state_27456__$1;(statearr_27461_27512[(1)] = (3));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (24)))
{var inst_27406 = (state_27456[(10)]);var inst_27398 = inst_27406;var state_27456__$1 = (function (){var statearr_27462 = state_27456;(statearr_27462[(7)] = inst_27398);
return statearr_27462;
})();var statearr_27463_27513 = state_27456__$1;(statearr_27463_27513[(2)] = null);
(statearr_27463_27513[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (4)))
{var inst_27388 = (state_27456[(9)]);var inst_27394 = (state_27456[(2)]);var inst_27395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27394,cljs.core.constant$keyword$30);var inst_27396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27394,cljs.core.constant$keyword$29);var inst_27397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27394,cljs.core.constant$keyword$28);var inst_27398 = inst_27388;var state_27456__$1 = (function (){var statearr_27464 = state_27456;(statearr_27464[(11)] = inst_27397);
(statearr_27464[(7)] = inst_27398);
(statearr_27464[(12)] = inst_27395);
(statearr_27464[(13)] = inst_27396);
return statearr_27464;
})();var statearr_27465_27514 = state_27456__$1;(statearr_27465_27514[(2)] = null);
(statearr_27465_27514[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (15)))
{var state_27456__$1 = state_27456;var statearr_27466_27515 = state_27456__$1;(statearr_27466_27515[(2)] = null);
(statearr_27466_27515[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (21)))
{var inst_27406 = (state_27456[(10)]);var inst_27398 = inst_27406;var state_27456__$1 = (function (){var statearr_27467 = state_27456;(statearr_27467[(7)] = inst_27398);
return statearr_27467;
})();var statearr_27468_27516 = state_27456__$1;(statearr_27468_27516[(2)] = null);
(statearr_27468_27516[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (13)))
{var inst_27452 = (state_27456[(2)]);var state_27456__$1 = state_27456;var statearr_27469_27517 = state_27456__$1;(statearr_27469_27517[(2)] = inst_27452);
(statearr_27469_27517[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (22)))
{var inst_27450 = (state_27456[(2)]);var state_27456__$1 = state_27456;var statearr_27470_27518 = state_27456__$1;(statearr_27470_27518[(2)] = inst_27450);
(statearr_27470_27518[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (6)))
{var inst_27454 = (state_27456[(2)]);var state_27456__$1 = state_27456;return cljs.core.async.impl.ioc_helpers.return_chan(state_27456__$1,inst_27454);
} else
{if((state_val_27457 === (25)))
{var state_27456__$1 = state_27456;var statearr_27471_27519 = state_27456__$1;(statearr_27471_27519[(2)] = null);
(statearr_27471_27519[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (17)))
{var inst_27429 = (state_27456[(14)]);var state_27456__$1 = state_27456;var statearr_27472_27520 = state_27456__$1;(statearr_27472_27520[(2)] = inst_27429);
(statearr_27472_27520[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (3)))
{var inst_27388 = (state_27456[(9)]);var state_27456__$1 = state_27456;var statearr_27473_27521 = state_27456__$1;(statearr_27473_27521[(2)] = inst_27388);
(statearr_27473_27521[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (12)))
{var inst_27414 = (state_27456[(15)]);var inst_27429 = (state_27456[(14)]);var inst_27409 = (state_27456[(16)]);var inst_27429__$1 = (function (){var G__27474 = inst_27414;return (inst_27409.cljs$core$IFn$_invoke$arity$1 ? inst_27409.cljs$core$IFn$_invoke$arity$1(G__27474) : inst_27409.call(null,G__27474));
})();var state_27456__$1 = (function (){var statearr_27475 = state_27456;(statearr_27475[(14)] = inst_27429__$1);
return statearr_27475;
})();if(cljs.core.truth_(inst_27429__$1))
{var statearr_27476_27522 = state_27456__$1;(statearr_27476_27522[(1)] = (17));
} else
{var statearr_27477_27523 = state_27456__$1;(statearr_27477_27523[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (2)))
{var inst_27388 = (state_27456[(9)]);var inst_27391 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27388);var state_27456__$1 = state_27456;var statearr_27478_27524 = state_27456__$1;(statearr_27478_27524[(2)] = inst_27391);
(statearr_27478_27524[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (23)))
{var inst_27441 = (state_27456[(2)]);var state_27456__$1 = state_27456;if(cljs.core.truth_(inst_27441))
{var statearr_27479_27525 = state_27456__$1;(statearr_27479_27525[(1)] = (24));
} else
{var statearr_27480_27526 = state_27456__$1;(statearr_27480_27526[(1)] = (25));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (19)))
{var inst_27438 = (state_27456[(2)]);var state_27456__$1 = state_27456;if(cljs.core.truth_(inst_27438))
{var statearr_27481_27527 = state_27456__$1;(statearr_27481_27527[(1)] = (20));
} else
{var statearr_27482_27528 = state_27456__$1;(statearr_27482_27528[(1)] = (21));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (11)))
{var inst_27413 = (state_27456[(8)]);var inst_27419 = (inst_27413 == null);var state_27456__$1 = state_27456;if(cljs.core.truth_(inst_27419))
{var statearr_27483_27529 = state_27456__$1;(statearr_27483_27529[(1)] = (14));
} else
{var statearr_27484_27530 = state_27456__$1;(statearr_27484_27530[(1)] = (15));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (9)))
{var inst_27406 = (state_27456[(10)]);var inst_27406__$1 = (state_27456[(2)]);var inst_27407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27406__$1,cljs.core.constant$keyword$30);var inst_27408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27406__$1,cljs.core.constant$keyword$29);var inst_27409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27406__$1,cljs.core.constant$keyword$28);var state_27456__$1 = (function (){var statearr_27485 = state_27456;(statearr_27485[(17)] = inst_27408);
(statearr_27485[(16)] = inst_27409);
(statearr_27485[(10)] = inst_27406__$1);
return statearr_27485;
})();return cljs.core.async.ioc_alts_BANG_(state_27456__$1,(10),inst_27407);
} else
{if((state_val_27457 === (5)))
{var inst_27398 = (state_27456[(7)]);var inst_27401 = cljs.core.seq_QMARK_(inst_27398);var state_27456__$1 = state_27456;if(inst_27401)
{var statearr_27486_27531 = state_27456__$1;(statearr_27486_27531[(1)] = (7));
} else
{var statearr_27487_27532 = state_27456__$1;(statearr_27487_27532[(1)] = (8));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (14)))
{var inst_27414 = (state_27456[(15)]);var inst_27421 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_27414);var state_27456__$1 = state_27456;var statearr_27488_27533 = state_27456__$1;(statearr_27488_27533[(2)] = inst_27421);
(statearr_27488_27533[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (26)))
{var inst_27446 = (state_27456[(2)]);var state_27456__$1 = state_27456;var statearr_27489_27534 = state_27456__$1;(statearr_27489_27534[(2)] = inst_27446);
(statearr_27489_27534[(1)] = (22));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (16)))
{var inst_27424 = (state_27456[(2)]);var inst_27425 = calc_state();var inst_27398 = inst_27425;var state_27456__$1 = (function (){var statearr_27490 = state_27456;(statearr_27490[(7)] = inst_27398);
(statearr_27490[(18)] = inst_27424);
return statearr_27490;
})();var statearr_27491_27535 = state_27456__$1;(statearr_27491_27535[(2)] = null);
(statearr_27491_27535[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (10)))
{var inst_27414 = (state_27456[(15)]);var inst_27413 = (state_27456[(8)]);var inst_27412 = (state_27456[(2)]);var inst_27413__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27412,(0),null);var inst_27414__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27412,(1),null);var inst_27415 = (inst_27413__$1 == null);var inst_27416 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27414__$1,change);var inst_27417 = (inst_27415) || (inst_27416);var state_27456__$1 = (function (){var statearr_27492 = state_27456;(statearr_27492[(15)] = inst_27414__$1);
(statearr_27492[(8)] = inst_27413__$1);
return statearr_27492;
})();if(cljs.core.truth_(inst_27417))
{var statearr_27493_27536 = state_27456__$1;(statearr_27493_27536[(1)] = (11));
} else
{var statearr_27494_27537 = state_27456__$1;(statearr_27494_27537[(1)] = (12));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (18)))
{var inst_27414 = (state_27456[(15)]);var inst_27408 = (state_27456[(17)]);var inst_27409 = (state_27456[(16)]);var inst_27433 = cljs.core.empty_QMARK_(inst_27409);var inst_27434 = (function (){var G__27495 = inst_27414;return (inst_27408.cljs$core$IFn$_invoke$arity$1 ? inst_27408.cljs$core$IFn$_invoke$arity$1(G__27495) : inst_27408.call(null,G__27495));
})();var inst_27435 = cljs.core.not(inst_27434);var inst_27436 = (inst_27433) && (inst_27435);var state_27456__$1 = state_27456;var statearr_27496_27538 = state_27456__$1;(statearr_27496_27538[(2)] = inst_27436);
(statearr_27496_27538[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27457 === (8)))
{var inst_27398 = (state_27456[(7)]);var state_27456__$1 = state_27456;var statearr_27497_27539 = state_27456__$1;(statearr_27497_27539[(2)] = inst_27398);
(statearr_27497_27539[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5861__auto___27509,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5846__auto__,c__5861__auto___27509,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_27501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27501[(0)] = state_machine__5847__auto__);
(statearr_27501[(1)] = (1));
return statearr_27501;
});
var state_machine__5847__auto____1 = (function (state_27456){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_27456);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e27502){if((e27502 instanceof Object))
{var ex__5850__auto__ = e27502;var statearr_27503_27540 = state_27456;(statearr_27503_27540[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27456);
return cljs.core.constant$keyword$16;
} else
{throw e27502;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__27541 = state_27456;
state_27456 = G__27541;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_27456){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_27456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___27509,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5863__auto__ = (function (){var statearr_27504 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_27504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___27509);
return statearr_27504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___27509,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj27543 = {};return obj27543;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3626__auto__ = p;if(and__3626__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3626__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3638__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__27547 = x__4275__auto__;return goog.typeOf(G__27547);
})()]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3626__auto__ = p;if(and__3626__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3626__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3638__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__27551 = x__4275__auto__;return goog.typeOf(G__27551);
})()]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3626__auto__ = p;if(and__3626__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3626__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3638__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__27557 = x__4275__auto__;return goog.typeOf(G__27557);
})()]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3626__auto__ = p;if(and__3626__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3626__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3638__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__27559 = x__4275__auto__;return goog.typeOf(G__27559);
})()]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__27698 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27698) : cljs.core.atom.call(null,G__27698));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3638__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__27700 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27700) : cljs.core.deref.call(null,G__27700));
})(),topic);if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3638__auto__,mults){
return (function (p1__27560_SHARP_){if(cljs.core.truth_((function (){var G__27701 = topic;return (p1__27560_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27560_SHARP_.cljs$core$IFn$_invoke$arity$1(G__27701) : p1__27560_SHARP_.call(null,G__27701));
})()))
{return p1__27560_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27560_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__27702 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__27702) : buf_fn.call(null,G__27702));
})())));
}
});})(or__3638__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27703 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27703 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27704){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27704 = meta27704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27703.cljs$lang$type = true;
cljs.core.async.t27703.cljs$lang$ctorStr = "cljs.core.async/t27703";
cljs.core.async.t27703.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t27703");
});})(mults,ensure_mult))
;
cljs.core.async.t27703.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27703.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__27706 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__27706) : self__.ensure_mult.call(null,G__27706));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27703.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4222__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__27707 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27707) : cljs.core.deref.call(null,G__27707));
})(),topic);if(cljs.core.truth_(temp__4222__auto__))
{var m = temp__4222__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__27708 = self__.mults;var G__27709 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27708,G__27709) : cljs.core.reset_BANG_.call(null,G__27708,G__27709));
});})(mults,ensure_mult))
;
cljs.core.async.t27703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27703.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27705){var self__ = this;
var _27705__$1 = this;return self__.meta27704;
});})(mults,ensure_mult))
;
cljs.core.async.t27703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27705,meta27704__$1){var self__ = this;
var _27705__$1 = this;return (new cljs.core.async.t27703(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27704__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27703 = ((function (mults,ensure_mult){
return (function __GT_t27703(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27704){return (new cljs.core.async.t27703(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27704));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27703(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5861__auto___27832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___27832,mults,ensure_mult,p){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___27832,mults,ensure_mult,p){
return (function (state_27781){var state_val_27782 = (state_27781[(1)]);if((state_val_27782 === (7)))
{var inst_27777 = (state_27781[(2)]);var state_27781__$1 = state_27781;var statearr_27783_27833 = state_27781__$1;(statearr_27783_27833[(2)] = inst_27777);
(statearr_27783_27833[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (20)))
{var state_27781__$1 = state_27781;var statearr_27784_27834 = state_27781__$1;(statearr_27784_27834[(2)] = null);
(statearr_27784_27834[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (1)))
{var state_27781__$1 = state_27781;var statearr_27785_27835 = state_27781__$1;(statearr_27785_27835[(2)] = null);
(statearr_27785_27835[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (24)))
{var inst_27760 = (state_27781[(7)]);var inst_27769 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_27760);var state_27781__$1 = state_27781;var statearr_27786_27836 = state_27781__$1;(statearr_27786_27836[(2)] = inst_27769);
(statearr_27786_27836[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (4)))
{var inst_27712 = (state_27781[(8)]);var inst_27712__$1 = (state_27781[(2)]);var inst_27713 = (inst_27712__$1 == null);var state_27781__$1 = (function (){var statearr_27787 = state_27781;(statearr_27787[(8)] = inst_27712__$1);
return statearr_27787;
})();if(cljs.core.truth_(inst_27713))
{var statearr_27788_27837 = state_27781__$1;(statearr_27788_27837[(1)] = (5));
} else
{var statearr_27789_27838 = state_27781__$1;(statearr_27789_27838[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (15)))
{var inst_27754 = (state_27781[(2)]);var state_27781__$1 = state_27781;var statearr_27790_27839 = state_27781__$1;(statearr_27790_27839[(2)] = inst_27754);
(statearr_27790_27839[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (21)))
{var inst_27774 = (state_27781[(2)]);var state_27781__$1 = (function (){var statearr_27791 = state_27781;(statearr_27791[(9)] = inst_27774);
return statearr_27791;
})();var statearr_27792_27840 = state_27781__$1;(statearr_27792_27840[(2)] = null);
(statearr_27792_27840[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (13)))
{var inst_27736 = (state_27781[(10)]);var inst_27738 = cljs.core.chunked_seq_QMARK_(inst_27736);var state_27781__$1 = state_27781;if(inst_27738)
{var statearr_27793_27841 = state_27781__$1;(statearr_27793_27841[(1)] = (16));
} else
{var statearr_27794_27842 = state_27781__$1;(statearr_27794_27842[(1)] = (17));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (22)))
{var inst_27766 = (state_27781[(2)]);var state_27781__$1 = state_27781;if(cljs.core.truth_(inst_27766))
{var statearr_27795_27843 = state_27781__$1;(statearr_27795_27843[(1)] = (23));
} else
{var statearr_27796_27844 = state_27781__$1;(statearr_27796_27844[(1)] = (24));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (6)))
{var inst_27760 = (state_27781[(7)]);var inst_27762 = (state_27781[(11)]);var inst_27712 = (state_27781[(8)]);var inst_27760__$1 = (function (){var G__27797 = inst_27712;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__27797) : topic_fn.call(null,G__27797));
})();var inst_27761 = (function (){var G__27798 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27798) : cljs.core.deref.call(null,G__27798));
})();var inst_27762__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27761,inst_27760__$1);var state_27781__$1 = (function (){var statearr_27799 = state_27781;(statearr_27799[(7)] = inst_27760__$1);
(statearr_27799[(11)] = inst_27762__$1);
return statearr_27799;
})();if(cljs.core.truth_(inst_27762__$1))
{var statearr_27800_27845 = state_27781__$1;(statearr_27800_27845[(1)] = (19));
} else
{var statearr_27801_27846 = state_27781__$1;(statearr_27801_27846[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (25)))
{var inst_27771 = (state_27781[(2)]);var state_27781__$1 = state_27781;var statearr_27802_27847 = state_27781__$1;(statearr_27802_27847[(2)] = inst_27771);
(statearr_27802_27847[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (17)))
{var inst_27736 = (state_27781[(10)]);var inst_27745 = cljs.core.first(inst_27736);var inst_27746 = cljs.core.async.muxch_STAR_(inst_27745);var inst_27747 = cljs.core.async.close_BANG_(inst_27746);var inst_27748 = cljs.core.next(inst_27736);var inst_27722 = inst_27748;var inst_27723 = null;var inst_27724 = (0);var inst_27725 = (0);var state_27781__$1 = (function (){var statearr_27803 = state_27781;(statearr_27803[(12)] = inst_27723);
(statearr_27803[(13)] = inst_27724);
(statearr_27803[(14)] = inst_27725);
(statearr_27803[(15)] = inst_27747);
(statearr_27803[(16)] = inst_27722);
return statearr_27803;
})();var statearr_27804_27848 = state_27781__$1;(statearr_27804_27848[(2)] = null);
(statearr_27804_27848[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (3)))
{var inst_27779 = (state_27781[(2)]);var state_27781__$1 = state_27781;return cljs.core.async.impl.ioc_helpers.return_chan(state_27781__$1,inst_27779);
} else
{if((state_val_27782 === (12)))
{var inst_27756 = (state_27781[(2)]);var state_27781__$1 = state_27781;var statearr_27805_27849 = state_27781__$1;(statearr_27805_27849[(2)] = inst_27756);
(statearr_27805_27849[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (2)))
{var state_27781__$1 = state_27781;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27781__$1,(4),ch);
} else
{if((state_val_27782 === (23)))
{var state_27781__$1 = state_27781;var statearr_27806_27850 = state_27781__$1;(statearr_27806_27850[(2)] = null);
(statearr_27806_27850[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (19)))
{var inst_27762 = (state_27781[(11)]);var inst_27712 = (state_27781[(8)]);var inst_27764 = cljs.core.async.muxch_STAR_(inst_27762);var state_27781__$1 = state_27781;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27781__$1,(22),inst_27764,inst_27712);
} else
{if((state_val_27782 === (11)))
{var inst_27736 = (state_27781[(10)]);var inst_27722 = (state_27781[(16)]);var inst_27736__$1 = cljs.core.seq(inst_27722);var state_27781__$1 = (function (){var statearr_27807 = state_27781;(statearr_27807[(10)] = inst_27736__$1);
return statearr_27807;
})();if(inst_27736__$1)
{var statearr_27808_27851 = state_27781__$1;(statearr_27808_27851[(1)] = (13));
} else
{var statearr_27809_27852 = state_27781__$1;(statearr_27809_27852[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (9)))
{var inst_27758 = (state_27781[(2)]);var state_27781__$1 = state_27781;var statearr_27810_27853 = state_27781__$1;(statearr_27810_27853[(2)] = inst_27758);
(statearr_27810_27853[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (5)))
{var inst_27719 = (function (){var G__27811 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27811) : cljs.core.deref.call(null,G__27811));
})();var inst_27720 = cljs.core.vals(inst_27719);var inst_27721 = cljs.core.seq(inst_27720);var inst_27722 = inst_27721;var inst_27723 = null;var inst_27724 = (0);var inst_27725 = (0);var state_27781__$1 = (function (){var statearr_27812 = state_27781;(statearr_27812[(12)] = inst_27723);
(statearr_27812[(13)] = inst_27724);
(statearr_27812[(14)] = inst_27725);
(statearr_27812[(16)] = inst_27722);
return statearr_27812;
})();var statearr_27813_27854 = state_27781__$1;(statearr_27813_27854[(2)] = null);
(statearr_27813_27854[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (14)))
{var state_27781__$1 = state_27781;var statearr_27817_27855 = state_27781__$1;(statearr_27817_27855[(2)] = null);
(statearr_27817_27855[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (16)))
{var inst_27736 = (state_27781[(10)]);var inst_27740 = cljs.core.chunk_first(inst_27736);var inst_27741 = cljs.core.chunk_rest(inst_27736);var inst_27742 = cljs.core.count(inst_27740);var inst_27722 = inst_27741;var inst_27723 = inst_27740;var inst_27724 = inst_27742;var inst_27725 = (0);var state_27781__$1 = (function (){var statearr_27818 = state_27781;(statearr_27818[(12)] = inst_27723);
(statearr_27818[(13)] = inst_27724);
(statearr_27818[(14)] = inst_27725);
(statearr_27818[(16)] = inst_27722);
return statearr_27818;
})();var statearr_27819_27856 = state_27781__$1;(statearr_27819_27856[(2)] = null);
(statearr_27819_27856[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (10)))
{var inst_27723 = (state_27781[(12)]);var inst_27724 = (state_27781[(13)]);var inst_27725 = (state_27781[(14)]);var inst_27722 = (state_27781[(16)]);var inst_27730 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27723,inst_27725);var inst_27731 = cljs.core.async.muxch_STAR_(inst_27730);var inst_27732 = cljs.core.async.close_BANG_(inst_27731);var inst_27733 = (inst_27725 + (1));var tmp27814 = inst_27723;var tmp27815 = inst_27724;var tmp27816 = inst_27722;var inst_27722__$1 = tmp27816;var inst_27723__$1 = tmp27814;var inst_27724__$1 = tmp27815;var inst_27725__$1 = inst_27733;var state_27781__$1 = (function (){var statearr_27820 = state_27781;(statearr_27820[(12)] = inst_27723__$1);
(statearr_27820[(13)] = inst_27724__$1);
(statearr_27820[(14)] = inst_27725__$1);
(statearr_27820[(16)] = inst_27722__$1);
(statearr_27820[(17)] = inst_27732);
return statearr_27820;
})();var statearr_27821_27857 = state_27781__$1;(statearr_27821_27857[(2)] = null);
(statearr_27821_27857[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (18)))
{var inst_27751 = (state_27781[(2)]);var state_27781__$1 = state_27781;var statearr_27822_27858 = state_27781__$1;(statearr_27822_27858[(2)] = inst_27751);
(statearr_27822_27858[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27782 === (8)))
{var inst_27724 = (state_27781[(13)]);var inst_27725 = (state_27781[(14)]);var inst_27727 = (inst_27725 < inst_27724);var inst_27728 = inst_27727;var state_27781__$1 = state_27781;if(cljs.core.truth_(inst_27728))
{var statearr_27823_27859 = state_27781__$1;(statearr_27823_27859[(1)] = (10));
} else
{var statearr_27824_27860 = state_27781__$1;(statearr_27824_27860[(1)] = (11));
}
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5861__auto___27832,mults,ensure_mult,p))
;return ((function (switch__5846__auto__,c__5861__auto___27832,mults,ensure_mult,p){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_27828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27828[(0)] = state_machine__5847__auto__);
(statearr_27828[(1)] = (1));
return statearr_27828;
});
var state_machine__5847__auto____1 = (function (state_27781){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_27781);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e27829){if((e27829 instanceof Object))
{var ex__5850__auto__ = e27829;var statearr_27830_27861 = state_27781;(statearr_27830_27861[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27781);
return cljs.core.constant$keyword$16;
} else
{throw e27829;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__27862 = state_27781;
state_27781 = G__27862;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_27781){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_27781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___27832,mults,ensure_mult,p))
})();var state__5863__auto__ = (function (){var statearr_27831 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_27831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___27832);
return statearr_27831;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___27832,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__27943 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27943) : cljs.core.atom.call(null,G__27943));
})();var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5861__auto___28016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___28016,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___28016,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27982){var state_val_27983 = (state_27982[(1)]);if((state_val_27983 === (7)))
{var state_27982__$1 = state_27982;var statearr_27984_28017 = state_27982__$1;(statearr_27984_28017[(2)] = null);
(statearr_27984_28017[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27983 === (1)))
{var state_27982__$1 = state_27982;var statearr_27985_28018 = state_27982__$1;(statearr_27985_28018[(2)] = null);
(statearr_27985_28018[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27983 === (4)))
{var inst_27946 = (state_27982[(7)]);var inst_27948 = (inst_27946 < cnt);var state_27982__$1 = state_27982;if(cljs.core.truth_(inst_27948))
{var statearr_27986_28019 = state_27982__$1;(statearr_27986_28019[(1)] = (6));
} else
{var statearr_27987_28020 = state_27982__$1;(statearr_27987_28020[(1)] = (7));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27983 === (15)))
{var inst_27978 = (state_27982[(2)]);var state_27982__$1 = state_27982;var statearr_27988_28021 = state_27982__$1;(statearr_27988_28021[(2)] = inst_27978);
(statearr_27988_28021[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27983 === (13)))
{var inst_27971 = cljs.core.async.close_BANG_(out);var state_27982__$1 = state_27982;var statearr_27989_28022 = state_27982__$1;(statearr_27989_28022[(2)] = inst_27971);
(statearr_27989_28022[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27983 === (6)))
{var state_27982__$1 = state_27982;var statearr_27990_28023 = state_27982__$1;(statearr_27990_28023[(2)] = null);
(statearr_27990_28023[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27983 === (3)))
{var inst_27980 = (state_27982[(2)]);var state_27982__$1 = state_27982;return cljs.core.async.impl.ioc_helpers.return_chan(state_27982__$1,inst_27980);
} else
{if((state_val_27983 === (12)))
{var inst_27968 = (state_27982[(8)]);var inst_27968__$1 = (state_27982[(2)]);var inst_27969 = cljs.core.some(cljs.core.nil_QMARK_,inst_27968__$1);var state_27982__$1 = (function (){var statearr_27991 = state_27982;(statearr_27991[(8)] = inst_27968__$1);
return statearr_27991;
})();if(cljs.core.truth_(inst_27969))
{var statearr_27992_28024 = state_27982__$1;(statearr_27992_28024[(1)] = (13));
} else
{var statearr_27993_28025 = state_27982__$1;(statearr_27993_28025[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27983 === (2)))
{var inst_27945 = (function (){var G__27994 = dctr;var G__27995 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27994,G__27995) : cljs.core.reset_BANG_.call(null,G__27994,G__27995));
})();var inst_27946 = (0);var state_27982__$1 = (function (){var statearr_27996 = state_27982;(statearr_27996[(7)] = inst_27946);
(statearr_27996[(9)] = inst_27945);
return statearr_27996;
})();var statearr_27997_28026 = state_27982__$1;(statearr_27997_28026[(2)] = null);
(statearr_27997_28026[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27983 === (11)))
{var inst_27946 = (state_27982[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_27982,(10),Object,null,(9));var inst_27955 = (function (){var G__27998 = inst_27946;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__27998) : chs__$1.call(null,G__27998));
})();var inst_27956 = (function (){var G__27999 = inst_27946;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__27999) : done.call(null,G__27999));
})();var inst_27957 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_27955,inst_27956);var state_27982__$1 = state_27982;var statearr_28000_28027 = state_27982__$1;(statearr_28000_28027[(2)] = inst_27957);
cljs.core.async.impl.ioc_helpers.process_exception(state_27982__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_27983 === (9)))
{var inst_27946 = (state_27982[(7)]);var inst_27959 = (state_27982[(2)]);var inst_27960 = (inst_27946 + (1));var inst_27946__$1 = inst_27960;var state_27982__$1 = (function (){var statearr_28001 = state_27982;(statearr_28001[(10)] = inst_27959);
(statearr_28001[(7)] = inst_27946__$1);
return statearr_28001;
})();var statearr_28002_28028 = state_27982__$1;(statearr_28002_28028[(2)] = null);
(statearr_28002_28028[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27983 === (5)))
{var inst_27966 = (state_27982[(2)]);var state_27982__$1 = (function (){var statearr_28003 = state_27982;(statearr_28003[(11)] = inst_27966);
return statearr_28003;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27982__$1,(12),dchan);
} else
{if((state_val_27983 === (14)))
{var inst_27968 = (state_27982[(8)]);var inst_27973 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_27968);var state_27982__$1 = state_27982;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27982__$1,(16),out,inst_27973);
} else
{if((state_val_27983 === (16)))
{var inst_27975 = (state_27982[(2)]);var state_27982__$1 = (function (){var statearr_28004 = state_27982;(statearr_28004[(12)] = inst_27975);
return statearr_28004;
})();var statearr_28005_28029 = state_27982__$1;(statearr_28005_28029[(2)] = null);
(statearr_28005_28029[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27983 === (10)))
{var inst_27950 = (state_27982[(2)]);var inst_27951 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_27982__$1 = (function (){var statearr_28006 = state_27982;(statearr_28006[(13)] = inst_27950);
return statearr_28006;
})();var statearr_28007_28030 = state_27982__$1;(statearr_28007_28030[(2)] = inst_27951);
cljs.core.async.impl.ioc_helpers.process_exception(state_27982__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_27983 === (8)))
{var inst_27964 = (state_27982[(2)]);var state_27982__$1 = state_27982;var statearr_28008_28031 = state_27982__$1;(statearr_28008_28031[(2)] = inst_27964);
(statearr_28008_28031[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5861__auto___28016,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5846__auto__,c__5861__auto___28016,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_28012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28012[(0)] = state_machine__5847__auto__);
(statearr_28012[(1)] = (1));
return statearr_28012;
});
var state_machine__5847__auto____1 = (function (state_27982){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_27982);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e28013){if((e28013 instanceof Object))
{var ex__5850__auto__ = e28013;var statearr_28014_28032 = state_27982;(statearr_28014_28032[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27982);
return cljs.core.constant$keyword$16;
} else
{throw e28013;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__28033 = state_27982;
state_27982 = G__28033;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_27982){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_27982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___28016,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5863__auto__ = (function (){var statearr_28015 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_28015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___28016);
return statearr_28015;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___28016,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___28143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___28143,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___28143,out){
return (function (state_28119){var state_val_28120 = (state_28119[(1)]);if((state_val_28120 === (7)))
{var inst_28099 = (state_28119[(7)]);var inst_28098 = (state_28119[(8)]);var inst_28098__$1 = (state_28119[(2)]);var inst_28099__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28098__$1,(0),null);var inst_28100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28098__$1,(1),null);var inst_28101 = (inst_28099__$1 == null);var state_28119__$1 = (function (){var statearr_28121 = state_28119;(statearr_28121[(7)] = inst_28099__$1);
(statearr_28121[(8)] = inst_28098__$1);
(statearr_28121[(9)] = inst_28100);
return statearr_28121;
})();if(cljs.core.truth_(inst_28101))
{var statearr_28122_28144 = state_28119__$1;(statearr_28122_28144[(1)] = (8));
} else
{var statearr_28123_28145 = state_28119__$1;(statearr_28123_28145[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28120 === (1)))
{var inst_28090 = cljs.core.vec(chs);var inst_28091 = inst_28090;var state_28119__$1 = (function (){var statearr_28124 = state_28119;(statearr_28124[(10)] = inst_28091);
return statearr_28124;
})();var statearr_28125_28146 = state_28119__$1;(statearr_28125_28146[(2)] = null);
(statearr_28125_28146[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28120 === (4)))
{var inst_28091 = (state_28119[(10)]);var state_28119__$1 = state_28119;return cljs.core.async.ioc_alts_BANG_(state_28119__$1,(7),inst_28091);
} else
{if((state_val_28120 === (6)))
{var inst_28115 = (state_28119[(2)]);var state_28119__$1 = state_28119;var statearr_28126_28147 = state_28119__$1;(statearr_28126_28147[(2)] = inst_28115);
(statearr_28126_28147[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28120 === (3)))
{var inst_28117 = (state_28119[(2)]);var state_28119__$1 = state_28119;return cljs.core.async.impl.ioc_helpers.return_chan(state_28119__$1,inst_28117);
} else
{if((state_val_28120 === (2)))
{var inst_28091 = (state_28119[(10)]);var inst_28093 = cljs.core.count(inst_28091);var inst_28094 = (inst_28093 > (0));var state_28119__$1 = state_28119;if(cljs.core.truth_(inst_28094))
{var statearr_28128_28148 = state_28119__$1;(statearr_28128_28148[(1)] = (4));
} else
{var statearr_28129_28149 = state_28119__$1;(statearr_28129_28149[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28120 === (11)))
{var inst_28091 = (state_28119[(10)]);var inst_28108 = (state_28119[(2)]);var tmp28127 = inst_28091;var inst_28091__$1 = tmp28127;var state_28119__$1 = (function (){var statearr_28130 = state_28119;(statearr_28130[(11)] = inst_28108);
(statearr_28130[(10)] = inst_28091__$1);
return statearr_28130;
})();var statearr_28131_28150 = state_28119__$1;(statearr_28131_28150[(2)] = null);
(statearr_28131_28150[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28120 === (9)))
{var inst_28099 = (state_28119[(7)]);var state_28119__$1 = state_28119;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28119__$1,(11),out,inst_28099);
} else
{if((state_val_28120 === (5)))
{var inst_28113 = cljs.core.async.close_BANG_(out);var state_28119__$1 = state_28119;var statearr_28132_28151 = state_28119__$1;(statearr_28132_28151[(2)] = inst_28113);
(statearr_28132_28151[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28120 === (10)))
{var inst_28111 = (state_28119[(2)]);var state_28119__$1 = state_28119;var statearr_28133_28152 = state_28119__$1;(statearr_28133_28152[(2)] = inst_28111);
(statearr_28133_28152[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28120 === (8)))
{var inst_28099 = (state_28119[(7)]);var inst_28091 = (state_28119[(10)]);var inst_28098 = (state_28119[(8)]);var inst_28100 = (state_28119[(9)]);var inst_28103 = (function (){var c = inst_28100;var v = inst_28099;var vec__28096 = inst_28098;var cs = inst_28091;return ((function (c,v,vec__28096,cs,inst_28099,inst_28091,inst_28098,inst_28100,state_val_28120,c__5861__auto___28143,out){
return (function (p1__28034_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__28034_SHARP_);
});
;})(c,v,vec__28096,cs,inst_28099,inst_28091,inst_28098,inst_28100,state_val_28120,c__5861__auto___28143,out))
})();var inst_28104 = cljs.core.filterv(inst_28103,inst_28091);var inst_28091__$1 = inst_28104;var state_28119__$1 = (function (){var statearr_28134 = state_28119;(statearr_28134[(10)] = inst_28091__$1);
return statearr_28134;
})();var statearr_28135_28153 = state_28119__$1;(statearr_28135_28153[(2)] = null);
(statearr_28135_28153[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5861__auto___28143,out))
;return ((function (switch__5846__auto__,c__5861__auto___28143,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_28139 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28139[(0)] = state_machine__5847__auto__);
(statearr_28139[(1)] = (1));
return statearr_28139;
});
var state_machine__5847__auto____1 = (function (state_28119){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_28119);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e28140){if((e28140 instanceof Object))
{var ex__5850__auto__ = e28140;var statearr_28141_28154 = state_28119;(statearr_28141_28154[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_28119);
return cljs.core.constant$keyword$16;
} else
{throw e28140;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__28155 = state_28119;
state_28119 = G__28155;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_28119){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_28119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___28143,out))
})();var state__5863__auto__ = (function (){var statearr_28142 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_28142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___28143);
return statearr_28142;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___28143,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___28251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___28251,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___28251,out){
return (function (state_28228){var state_val_28229 = (state_28228[(1)]);if((state_val_28229 === (7)))
{var inst_28210 = (state_28228[(7)]);var inst_28210__$1 = (state_28228[(2)]);var inst_28211 = (inst_28210__$1 == null);var inst_28212 = cljs.core.not(inst_28211);var state_28228__$1 = (function (){var statearr_28230 = state_28228;(statearr_28230[(7)] = inst_28210__$1);
return statearr_28230;
})();if(inst_28212)
{var statearr_28231_28252 = state_28228__$1;(statearr_28231_28252[(1)] = (8));
} else
{var statearr_28232_28253 = state_28228__$1;(statearr_28232_28253[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28229 === (1)))
{var inst_28205 = (0);var state_28228__$1 = (function (){var statearr_28233 = state_28228;(statearr_28233[(8)] = inst_28205);
return statearr_28233;
})();var statearr_28234_28254 = state_28228__$1;(statearr_28234_28254[(2)] = null);
(statearr_28234_28254[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28229 === (4)))
{var state_28228__$1 = state_28228;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28228__$1,(7),ch);
} else
{if((state_val_28229 === (6)))
{var inst_28223 = (state_28228[(2)]);var state_28228__$1 = state_28228;var statearr_28235_28255 = state_28228__$1;(statearr_28235_28255[(2)] = inst_28223);
(statearr_28235_28255[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28229 === (3)))
{var inst_28225 = (state_28228[(2)]);var inst_28226 = cljs.core.async.close_BANG_(out);var state_28228__$1 = (function (){var statearr_28236 = state_28228;(statearr_28236[(9)] = inst_28225);
return statearr_28236;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_28228__$1,inst_28226);
} else
{if((state_val_28229 === (2)))
{var inst_28205 = (state_28228[(8)]);var inst_28207 = (inst_28205 < n);var state_28228__$1 = state_28228;if(cljs.core.truth_(inst_28207))
{var statearr_28237_28256 = state_28228__$1;(statearr_28237_28256[(1)] = (4));
} else
{var statearr_28238_28257 = state_28228__$1;(statearr_28238_28257[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28229 === (11)))
{var inst_28205 = (state_28228[(8)]);var inst_28215 = (state_28228[(2)]);var inst_28216 = (inst_28205 + (1));var inst_28205__$1 = inst_28216;var state_28228__$1 = (function (){var statearr_28239 = state_28228;(statearr_28239[(8)] = inst_28205__$1);
(statearr_28239[(10)] = inst_28215);
return statearr_28239;
})();var statearr_28240_28258 = state_28228__$1;(statearr_28240_28258[(2)] = null);
(statearr_28240_28258[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28229 === (9)))
{var state_28228__$1 = state_28228;var statearr_28241_28259 = state_28228__$1;(statearr_28241_28259[(2)] = null);
(statearr_28241_28259[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28229 === (5)))
{var state_28228__$1 = state_28228;var statearr_28242_28260 = state_28228__$1;(statearr_28242_28260[(2)] = null);
(statearr_28242_28260[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28229 === (10)))
{var inst_28220 = (state_28228[(2)]);var state_28228__$1 = state_28228;var statearr_28243_28261 = state_28228__$1;(statearr_28243_28261[(2)] = inst_28220);
(statearr_28243_28261[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28229 === (8)))
{var inst_28210 = (state_28228[(7)]);var state_28228__$1 = state_28228;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28228__$1,(11),out,inst_28210);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5861__auto___28251,out))
;return ((function (switch__5846__auto__,c__5861__auto___28251,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_28247 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28247[(0)] = state_machine__5847__auto__);
(statearr_28247[(1)] = (1));
return statearr_28247;
});
var state_machine__5847__auto____1 = (function (state_28228){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_28228);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e28248){if((e28248 instanceof Object))
{var ex__5850__auto__ = e28248;var statearr_28249_28262 = state_28228;(statearr_28249_28262[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_28228);
return cljs.core.constant$keyword$16;
} else
{throw e28248;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__28263 = state_28228;
state_28228 = G__28263;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_28228){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_28228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___28251,out))
})();var state__5863__auto__ = (function (){var statearr_28250 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_28250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___28251);
return statearr_28250;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___28251,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t28276 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28276 = (function (ch,f,map_LT_,meta28277){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28277 = meta28277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28276.cljs$lang$type = true;
cljs.core.async.t28276.cljs$lang$ctorStr = "cljs.core.async/t28276";
cljs.core.async.t28276.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t28276");
});
cljs.core.async.t28276.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28276.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t28276.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28276.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t28279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28279 = (function (fn1,_,meta28277,ch,f,map_LT_,meta28280){
this.fn1 = fn1;
this._ = _;
this.meta28277 = meta28277;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28280 = meta28280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28279.cljs$lang$type = true;
cljs.core.async.t28279.cljs$lang$ctorStr = "cljs.core.async/t28279";
cljs.core.async.t28279.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t28279");
});})(___$1))
;
cljs.core.async.t28279.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t28279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__28264_SHARP_){var G__28282 = (((p1__28264_SHARP_ == null))?null:(function (){var G__28283 = p1__28264_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28283) : self__.f.call(null,G__28283));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28282) : f1.call(null,G__28282));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t28279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28281){var self__ = this;
var _28281__$1 = this;return self__.meta28280;
});})(___$1))
;
cljs.core.async.t28279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28281,meta28280__$1){var self__ = this;
var _28281__$1 = this;return (new cljs.core.async.t28279(self__.fn1,self__._,self__.meta28277,self__.ch,self__.f,self__.map_LT_,meta28280__$1));
});})(___$1))
;
cljs.core.async.__GT_t28279 = ((function (___$1){
return (function __GT_t28279(fn1__$1,___$2,meta28277__$1,ch__$2,f__$2,map_LT___$2,meta28280){return (new cljs.core.async.t28279(fn1__$1,___$2,meta28277__$1,ch__$2,f__$2,map_LT___$2,meta28280));
});})(___$1))
;
}
return (new cljs.core.async.t28279(fn1,___$1,self__.meta28277,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3626__auto__ = ret;if(cljs.core.truth_(and__3626__auto__))
{return !(((function (){var G__28284 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28284) : cljs.core.deref.call(null,G__28284));
})() == null));
} else
{return and__3626__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__28285 = (function (){var G__28286 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28286) : cljs.core.deref.call(null,G__28286));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28285) : self__.f.call(null,G__28285));
})());
} else
{return ret;
}
});
cljs.core.async.t28276.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28276.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t28276.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t28276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28278){var self__ = this;
var _28278__$1 = this;return self__.meta28277;
});
cljs.core.async.t28276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28278,meta28277__$1){var self__ = this;
var _28278__$1 = this;return (new cljs.core.async.t28276(self__.ch,self__.f,self__.map_LT_,meta28277__$1));
});
cljs.core.async.__GT_t28276 = (function __GT_t28276(ch__$1,f__$1,map_LT___$1,meta28277){return (new cljs.core.async.t28276(ch__$1,f__$1,map_LT___$1,meta28277));
});
}
return (new cljs.core.async.t28276(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t28291 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28291 = (function (ch,f,map_GT_,meta28292){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28292 = meta28292;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28291.cljs$lang$type = true;
cljs.core.async.t28291.cljs$lang$ctorStr = "cljs.core.async/t28291";
cljs.core.async.t28291.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t28291");
});
cljs.core.async.t28291.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28291.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__28294 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28294) : self__.f.call(null,G__28294));
})(),fn1);
});
cljs.core.async.t28291.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28291.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t28291.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28291.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t28291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28293){var self__ = this;
var _28293__$1 = this;return self__.meta28292;
});
cljs.core.async.t28291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28293,meta28292__$1){var self__ = this;
var _28293__$1 = this;return (new cljs.core.async.t28291(self__.ch,self__.f,self__.map_GT_,meta28292__$1));
});
cljs.core.async.__GT_t28291 = (function __GT_t28291(ch__$1,f__$1,map_GT___$1,meta28292){return (new cljs.core.async.t28291(ch__$1,f__$1,map_GT___$1,meta28292));
});
}
return (new cljs.core.async.t28291(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t28299 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28299 = (function (ch,p,filter_GT_,meta28300){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28300 = meta28300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28299.cljs$lang$type = true;
cljs.core.async.t28299.cljs$lang$ctorStr = "cljs.core.async/t28299";
cljs.core.async.t28299.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t28299");
});
cljs.core.async.t28299.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28299.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__28302 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__28302) : self__.p.call(null,G__28302));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t28299.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28299.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t28299.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28299.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t28299.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t28299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28301){var self__ = this;
var _28301__$1 = this;return self__.meta28300;
});
cljs.core.async.t28299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28301,meta28300__$1){var self__ = this;
var _28301__$1 = this;return (new cljs.core.async.t28299(self__.ch,self__.p,self__.filter_GT_,meta28300__$1));
});
cljs.core.async.__GT_t28299 = (function __GT_t28299(ch__$1,p__$1,filter_GT___$1,meta28300){return (new cljs.core.async.t28299(ch__$1,p__$1,filter_GT___$1,meta28300));
});
}
return (new cljs.core.async.t28299(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___28390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___28390,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___28390,out){
return (function (state_28368){var state_val_28369 = (state_28368[(1)]);if((state_val_28369 === (7)))
{var inst_28364 = (state_28368[(2)]);var state_28368__$1 = state_28368;var statearr_28370_28391 = state_28368__$1;(statearr_28370_28391[(2)] = inst_28364);
(statearr_28370_28391[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28369 === (1)))
{var state_28368__$1 = state_28368;var statearr_28371_28392 = state_28368__$1;(statearr_28371_28392[(2)] = null);
(statearr_28371_28392[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28369 === (4)))
{var inst_28350 = (state_28368[(7)]);var inst_28350__$1 = (state_28368[(2)]);var inst_28351 = (inst_28350__$1 == null);var state_28368__$1 = (function (){var statearr_28372 = state_28368;(statearr_28372[(7)] = inst_28350__$1);
return statearr_28372;
})();if(cljs.core.truth_(inst_28351))
{var statearr_28373_28393 = state_28368__$1;(statearr_28373_28393[(1)] = (5));
} else
{var statearr_28374_28394 = state_28368__$1;(statearr_28374_28394[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28369 === (6)))
{var inst_28350 = (state_28368[(7)]);var inst_28355 = (function (){var G__28375 = inst_28350;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__28375) : p.call(null,G__28375));
})();var state_28368__$1 = state_28368;if(cljs.core.truth_(inst_28355))
{var statearr_28376_28395 = state_28368__$1;(statearr_28376_28395[(1)] = (8));
} else
{var statearr_28377_28396 = state_28368__$1;(statearr_28377_28396[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28369 === (3)))
{var inst_28366 = (state_28368[(2)]);var state_28368__$1 = state_28368;return cljs.core.async.impl.ioc_helpers.return_chan(state_28368__$1,inst_28366);
} else
{if((state_val_28369 === (2)))
{var state_28368__$1 = state_28368;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28368__$1,(4),ch);
} else
{if((state_val_28369 === (11)))
{var inst_28358 = (state_28368[(2)]);var state_28368__$1 = state_28368;var statearr_28378_28397 = state_28368__$1;(statearr_28378_28397[(2)] = inst_28358);
(statearr_28378_28397[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28369 === (9)))
{var state_28368__$1 = state_28368;var statearr_28379_28398 = state_28368__$1;(statearr_28379_28398[(2)] = null);
(statearr_28379_28398[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28369 === (5)))
{var inst_28353 = cljs.core.async.close_BANG_(out);var state_28368__$1 = state_28368;var statearr_28380_28399 = state_28368__$1;(statearr_28380_28399[(2)] = inst_28353);
(statearr_28380_28399[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28369 === (10)))
{var inst_28361 = (state_28368[(2)]);var state_28368__$1 = (function (){var statearr_28381 = state_28368;(statearr_28381[(8)] = inst_28361);
return statearr_28381;
})();var statearr_28382_28400 = state_28368__$1;(statearr_28382_28400[(2)] = null);
(statearr_28382_28400[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28369 === (8)))
{var inst_28350 = (state_28368[(7)]);var state_28368__$1 = state_28368;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28368__$1,(11),out,inst_28350);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5861__auto___28390,out))
;return ((function (switch__5846__auto__,c__5861__auto___28390,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_28386 = [null,null,null,null,null,null,null,null,null];(statearr_28386[(0)] = state_machine__5847__auto__);
(statearr_28386[(1)] = (1));
return statearr_28386;
});
var state_machine__5847__auto____1 = (function (state_28368){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_28368);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e28387){if((e28387 instanceof Object))
{var ex__5850__auto__ = e28387;var statearr_28388_28401 = state_28368;(statearr_28388_28401[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_28368);
return cljs.core.constant$keyword$16;
} else
{throw e28387;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__28402 = state_28368;
state_28368 = G__28402;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_28368){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_28368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___28390,out))
})();var state__5863__auto__ = (function (){var statearr_28389 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_28389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___28390);
return statearr_28389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___28390,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__){
return (function (state_28572){var state_val_28573 = (state_28572[(1)]);if((state_val_28573 === (7)))
{var inst_28568 = (state_28572[(2)]);var state_28572__$1 = state_28572;var statearr_28574_28616 = state_28572__$1;(statearr_28574_28616[(2)] = inst_28568);
(statearr_28574_28616[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (20)))
{var inst_28538 = (state_28572[(7)]);var inst_28549 = (state_28572[(2)]);var inst_28550 = cljs.core.next(inst_28538);var inst_28524 = inst_28550;var inst_28525 = null;var inst_28526 = (0);var inst_28527 = (0);var state_28572__$1 = (function (){var statearr_28575 = state_28572;(statearr_28575[(8)] = inst_28527);
(statearr_28575[(9)] = inst_28549);
(statearr_28575[(10)] = inst_28525);
(statearr_28575[(11)] = inst_28524);
(statearr_28575[(12)] = inst_28526);
return statearr_28575;
})();var statearr_28576_28617 = state_28572__$1;(statearr_28576_28617[(2)] = null);
(statearr_28576_28617[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (1)))
{var state_28572__$1 = state_28572;var statearr_28577_28618 = state_28572__$1;(statearr_28577_28618[(2)] = null);
(statearr_28577_28618[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (4)))
{var inst_28513 = (state_28572[(13)]);var inst_28513__$1 = (state_28572[(2)]);var inst_28514 = (inst_28513__$1 == null);var state_28572__$1 = (function (){var statearr_28578 = state_28572;(statearr_28578[(13)] = inst_28513__$1);
return statearr_28578;
})();if(cljs.core.truth_(inst_28514))
{var statearr_28579_28619 = state_28572__$1;(statearr_28579_28619[(1)] = (5));
} else
{var statearr_28580_28620 = state_28572__$1;(statearr_28580_28620[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (15)))
{var state_28572__$1 = state_28572;var statearr_28584_28621 = state_28572__$1;(statearr_28584_28621[(2)] = null);
(statearr_28584_28621[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (21)))
{var state_28572__$1 = state_28572;var statearr_28585_28622 = state_28572__$1;(statearr_28585_28622[(2)] = null);
(statearr_28585_28622[(1)] = (23));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (13)))
{var inst_28527 = (state_28572[(8)]);var inst_28525 = (state_28572[(10)]);var inst_28524 = (state_28572[(11)]);var inst_28526 = (state_28572[(12)]);var inst_28534 = (state_28572[(2)]);var inst_28535 = (inst_28527 + (1));var tmp28581 = inst_28525;var tmp28582 = inst_28524;var tmp28583 = inst_28526;var inst_28524__$1 = tmp28582;var inst_28525__$1 = tmp28581;var inst_28526__$1 = tmp28583;var inst_28527__$1 = inst_28535;var state_28572__$1 = (function (){var statearr_28586 = state_28572;(statearr_28586[(8)] = inst_28527__$1);
(statearr_28586[(14)] = inst_28534);
(statearr_28586[(10)] = inst_28525__$1);
(statearr_28586[(11)] = inst_28524__$1);
(statearr_28586[(12)] = inst_28526__$1);
return statearr_28586;
})();var statearr_28587_28623 = state_28572__$1;(statearr_28587_28623[(2)] = null);
(statearr_28587_28623[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (22)))
{var state_28572__$1 = state_28572;var statearr_28588_28624 = state_28572__$1;(statearr_28588_28624[(2)] = null);
(statearr_28588_28624[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (6)))
{var inst_28513 = (state_28572[(13)]);var inst_28522 = (function (){var G__28589 = inst_28513;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28589) : f.call(null,G__28589));
})();var inst_28523 = cljs.core.seq(inst_28522);var inst_28524 = inst_28523;var inst_28525 = null;var inst_28526 = (0);var inst_28527 = (0);var state_28572__$1 = (function (){var statearr_28590 = state_28572;(statearr_28590[(8)] = inst_28527);
(statearr_28590[(10)] = inst_28525);
(statearr_28590[(11)] = inst_28524);
(statearr_28590[(12)] = inst_28526);
return statearr_28590;
})();var statearr_28591_28625 = state_28572__$1;(statearr_28591_28625[(2)] = null);
(statearr_28591_28625[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (17)))
{var inst_28538 = (state_28572[(7)]);var inst_28542 = cljs.core.chunk_first(inst_28538);var inst_28543 = cljs.core.chunk_rest(inst_28538);var inst_28544 = cljs.core.count(inst_28542);var inst_28524 = inst_28543;var inst_28525 = inst_28542;var inst_28526 = inst_28544;var inst_28527 = (0);var state_28572__$1 = (function (){var statearr_28592 = state_28572;(statearr_28592[(8)] = inst_28527);
(statearr_28592[(10)] = inst_28525);
(statearr_28592[(11)] = inst_28524);
(statearr_28592[(12)] = inst_28526);
return statearr_28592;
})();var statearr_28593_28626 = state_28572__$1;(statearr_28593_28626[(2)] = null);
(statearr_28593_28626[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (3)))
{var inst_28570 = (state_28572[(2)]);var state_28572__$1 = state_28572;return cljs.core.async.impl.ioc_helpers.return_chan(state_28572__$1,inst_28570);
} else
{if((state_val_28573 === (12)))
{var inst_28558 = (state_28572[(2)]);var state_28572__$1 = state_28572;var statearr_28594_28627 = state_28572__$1;(statearr_28594_28627[(2)] = inst_28558);
(statearr_28594_28627[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (2)))
{var state_28572__$1 = state_28572;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28572__$1,(4),in$);
} else
{if((state_val_28573 === (23)))
{var inst_28566 = (state_28572[(2)]);var state_28572__$1 = state_28572;var statearr_28595_28628 = state_28572__$1;(statearr_28595_28628[(2)] = inst_28566);
(statearr_28595_28628[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (19)))
{var inst_28553 = (state_28572[(2)]);var state_28572__$1 = state_28572;var statearr_28596_28629 = state_28572__$1;(statearr_28596_28629[(2)] = inst_28553);
(statearr_28596_28629[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (11)))
{var inst_28538 = (state_28572[(7)]);var inst_28524 = (state_28572[(11)]);var inst_28538__$1 = cljs.core.seq(inst_28524);var state_28572__$1 = (function (){var statearr_28597 = state_28572;(statearr_28597[(7)] = inst_28538__$1);
return statearr_28597;
})();if(inst_28538__$1)
{var statearr_28598_28630 = state_28572__$1;(statearr_28598_28630[(1)] = (14));
} else
{var statearr_28599_28631 = state_28572__$1;(statearr_28599_28631[(1)] = (15));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (9)))
{var inst_28560 = (state_28572[(2)]);var inst_28561 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_28572__$1 = (function (){var statearr_28600 = state_28572;(statearr_28600[(15)] = inst_28560);
return statearr_28600;
})();if(cljs.core.truth_(inst_28561))
{var statearr_28601_28632 = state_28572__$1;(statearr_28601_28632[(1)] = (21));
} else
{var statearr_28602_28633 = state_28572__$1;(statearr_28602_28633[(1)] = (22));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (5)))
{var inst_28516 = cljs.core.async.close_BANG_(out);var state_28572__$1 = state_28572;var statearr_28603_28634 = state_28572__$1;(statearr_28603_28634[(2)] = inst_28516);
(statearr_28603_28634[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (14)))
{var inst_28538 = (state_28572[(7)]);var inst_28540 = cljs.core.chunked_seq_QMARK_(inst_28538);var state_28572__$1 = state_28572;if(inst_28540)
{var statearr_28604_28635 = state_28572__$1;(statearr_28604_28635[(1)] = (17));
} else
{var statearr_28605_28636 = state_28572__$1;(statearr_28605_28636[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (16)))
{var inst_28556 = (state_28572[(2)]);var state_28572__$1 = state_28572;var statearr_28606_28637 = state_28572__$1;(statearr_28606_28637[(2)] = inst_28556);
(statearr_28606_28637[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28573 === (10)))
{var inst_28527 = (state_28572[(8)]);var inst_28525 = (state_28572[(10)]);var inst_28532 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28525,inst_28527);var state_28572__$1 = state_28572;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28572__$1,(13),out,inst_28532);
} else
{if((state_val_28573 === (18)))
{var inst_28538 = (state_28572[(7)]);var inst_28547 = cljs.core.first(inst_28538);var state_28572__$1 = state_28572;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28572__$1,(20),out,inst_28547);
} else
{if((state_val_28573 === (8)))
{var inst_28527 = (state_28572[(8)]);var inst_28526 = (state_28572[(12)]);var inst_28529 = (inst_28527 < inst_28526);var inst_28530 = inst_28529;var state_28572__$1 = state_28572;if(cljs.core.truth_(inst_28530))
{var statearr_28607_28638 = state_28572__$1;(statearr_28607_28638[(1)] = (10));
} else
{var statearr_28608_28639 = state_28572__$1;(statearr_28608_28639[(1)] = (11));
}
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5861__auto__))
;return ((function (switch__5846__auto__,c__5861__auto__){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_28612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28612[(0)] = state_machine__5847__auto__);
(statearr_28612[(1)] = (1));
return statearr_28612;
});
var state_machine__5847__auto____1 = (function (state_28572){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_28572);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e28613){if((e28613 instanceof Object))
{var ex__5850__auto__ = e28613;var statearr_28614_28640 = state_28572;(statearr_28614_28640[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_28572);
return cljs.core.constant$keyword$16;
} else
{throw e28613;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__28641 = state_28572;
state_28572 = G__28641;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_28572){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_28572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__))
})();var state__5863__auto__ = (function (){var statearr_28615 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_28615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_28615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__))
);
return c__5861__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___28746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___28746,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___28746,out){
return (function (state_28721){var state_val_28722 = (state_28721[(1)]);if((state_val_28722 === (7)))
{var inst_28716 = (state_28721[(2)]);var state_28721__$1 = state_28721;var statearr_28723_28747 = state_28721__$1;(statearr_28723_28747[(2)] = inst_28716);
(statearr_28723_28747[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28722 === (1)))
{var inst_28698 = null;var state_28721__$1 = (function (){var statearr_28724 = state_28721;(statearr_28724[(7)] = inst_28698);
return statearr_28724;
})();var statearr_28725_28748 = state_28721__$1;(statearr_28725_28748[(2)] = null);
(statearr_28725_28748[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28722 === (4)))
{var inst_28701 = (state_28721[(8)]);var inst_28701__$1 = (state_28721[(2)]);var inst_28702 = (inst_28701__$1 == null);var inst_28703 = cljs.core.not(inst_28702);var state_28721__$1 = (function (){var statearr_28726 = state_28721;(statearr_28726[(8)] = inst_28701__$1);
return statearr_28726;
})();if(inst_28703)
{var statearr_28727_28749 = state_28721__$1;(statearr_28727_28749[(1)] = (5));
} else
{var statearr_28728_28750 = state_28721__$1;(statearr_28728_28750[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28722 === (6)))
{var state_28721__$1 = state_28721;var statearr_28729_28751 = state_28721__$1;(statearr_28729_28751[(2)] = null);
(statearr_28729_28751[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28722 === (3)))
{var inst_28718 = (state_28721[(2)]);var inst_28719 = cljs.core.async.close_BANG_(out);var state_28721__$1 = (function (){var statearr_28730 = state_28721;(statearr_28730[(9)] = inst_28718);
return statearr_28730;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_28721__$1,inst_28719);
} else
{if((state_val_28722 === (2)))
{var state_28721__$1 = state_28721;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28721__$1,(4),ch);
} else
{if((state_val_28722 === (11)))
{var inst_28701 = (state_28721[(8)]);var inst_28710 = (state_28721[(2)]);var inst_28698 = inst_28701;var state_28721__$1 = (function (){var statearr_28731 = state_28721;(statearr_28731[(7)] = inst_28698);
(statearr_28731[(10)] = inst_28710);
return statearr_28731;
})();var statearr_28732_28752 = state_28721__$1;(statearr_28732_28752[(2)] = null);
(statearr_28732_28752[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28722 === (9)))
{var inst_28701 = (state_28721[(8)]);var state_28721__$1 = state_28721;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28721__$1,(11),out,inst_28701);
} else
{if((state_val_28722 === (5)))
{var inst_28698 = (state_28721[(7)]);var inst_28701 = (state_28721[(8)]);var inst_28705 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28701,inst_28698);var state_28721__$1 = state_28721;if(inst_28705)
{var statearr_28734_28753 = state_28721__$1;(statearr_28734_28753[(1)] = (8));
} else
{var statearr_28735_28754 = state_28721__$1;(statearr_28735_28754[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28722 === (10)))
{var inst_28713 = (state_28721[(2)]);var state_28721__$1 = state_28721;var statearr_28736_28755 = state_28721__$1;(statearr_28736_28755[(2)] = inst_28713);
(statearr_28736_28755[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28722 === (8)))
{var inst_28698 = (state_28721[(7)]);var tmp28733 = inst_28698;var inst_28698__$1 = tmp28733;var state_28721__$1 = (function (){var statearr_28737 = state_28721;(statearr_28737[(7)] = inst_28698__$1);
return statearr_28737;
})();var statearr_28738_28756 = state_28721__$1;(statearr_28738_28756[(2)] = null);
(statearr_28738_28756[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5861__auto___28746,out))
;return ((function (switch__5846__auto__,c__5861__auto___28746,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_28742 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28742[(0)] = state_machine__5847__auto__);
(statearr_28742[(1)] = (1));
return statearr_28742;
});
var state_machine__5847__auto____1 = (function (state_28721){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_28721);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e28743){if((e28743 instanceof Object))
{var ex__5850__auto__ = e28743;var statearr_28744_28757 = state_28721;(statearr_28744_28757[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_28721);
return cljs.core.constant$keyword$16;
} else
{throw e28743;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__28758 = state_28721;
state_28721 = G__28758;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_28721){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_28721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___28746,out))
})();var state__5863__auto__ = (function (){var statearr_28745 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_28745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___28746);
return statearr_28745;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___28746,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___28896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___28896,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___28896,out){
return (function (state_28866){var state_val_28867 = (state_28866[(1)]);if((state_val_28867 === (7)))
{var inst_28862 = (state_28866[(2)]);var state_28866__$1 = state_28866;var statearr_28868_28897 = state_28866__$1;(statearr_28868_28897[(2)] = inst_28862);
(statearr_28868_28897[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28867 === (1)))
{var inst_28829 = (new Array(n));var inst_28830 = inst_28829;var inst_28831 = (0);var state_28866__$1 = (function (){var statearr_28869 = state_28866;(statearr_28869[(7)] = inst_28831);
(statearr_28869[(8)] = inst_28830);
return statearr_28869;
})();var statearr_28870_28898 = state_28866__$1;(statearr_28870_28898[(2)] = null);
(statearr_28870_28898[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28867 === (4)))
{var inst_28834 = (state_28866[(9)]);var inst_28834__$1 = (state_28866[(2)]);var inst_28835 = (inst_28834__$1 == null);var inst_28836 = cljs.core.not(inst_28835);var state_28866__$1 = (function (){var statearr_28871 = state_28866;(statearr_28871[(9)] = inst_28834__$1);
return statearr_28871;
})();if(inst_28836)
{var statearr_28872_28899 = state_28866__$1;(statearr_28872_28899[(1)] = (5));
} else
{var statearr_28873_28900 = state_28866__$1;(statearr_28873_28900[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28867 === (15)))
{var inst_28856 = (state_28866[(2)]);var state_28866__$1 = state_28866;var statearr_28874_28901 = state_28866__$1;(statearr_28874_28901[(2)] = inst_28856);
(statearr_28874_28901[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28867 === (13)))
{var state_28866__$1 = state_28866;var statearr_28875_28902 = state_28866__$1;(statearr_28875_28902[(2)] = null);
(statearr_28875_28902[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28867 === (6)))
{var inst_28831 = (state_28866[(7)]);var inst_28852 = (inst_28831 > (0));var state_28866__$1 = state_28866;if(cljs.core.truth_(inst_28852))
{var statearr_28876_28903 = state_28866__$1;(statearr_28876_28903[(1)] = (12));
} else
{var statearr_28877_28904 = state_28866__$1;(statearr_28877_28904[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28867 === (3)))
{var inst_28864 = (state_28866[(2)]);var state_28866__$1 = state_28866;return cljs.core.async.impl.ioc_helpers.return_chan(state_28866__$1,inst_28864);
} else
{if((state_val_28867 === (12)))
{var inst_28830 = (state_28866[(8)]);var inst_28854 = cljs.core.vec(inst_28830);var state_28866__$1 = state_28866;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28866__$1,(15),out,inst_28854);
} else
{if((state_val_28867 === (2)))
{var state_28866__$1 = state_28866;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28866__$1,(4),ch);
} else
{if((state_val_28867 === (11)))
{var inst_28846 = (state_28866[(2)]);var inst_28847 = (new Array(n));var inst_28830 = inst_28847;var inst_28831 = (0);var state_28866__$1 = (function (){var statearr_28878 = state_28866;(statearr_28878[(7)] = inst_28831);
(statearr_28878[(10)] = inst_28846);
(statearr_28878[(8)] = inst_28830);
return statearr_28878;
})();var statearr_28879_28905 = state_28866__$1;(statearr_28879_28905[(2)] = null);
(statearr_28879_28905[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28867 === (9)))
{var inst_28830 = (state_28866[(8)]);var inst_28844 = cljs.core.vec(inst_28830);var state_28866__$1 = state_28866;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28866__$1,(11),out,inst_28844);
} else
{if((state_val_28867 === (5)))
{var inst_28831 = (state_28866[(7)]);var inst_28839 = (state_28866[(11)]);var inst_28834 = (state_28866[(9)]);var inst_28830 = (state_28866[(8)]);var inst_28838 = (inst_28830[inst_28831] = inst_28834);var inst_28839__$1 = (inst_28831 + (1));var inst_28840 = (inst_28839__$1 < n);var state_28866__$1 = (function (){var statearr_28880 = state_28866;(statearr_28880[(11)] = inst_28839__$1);
(statearr_28880[(12)] = inst_28838);
return statearr_28880;
})();if(cljs.core.truth_(inst_28840))
{var statearr_28881_28906 = state_28866__$1;(statearr_28881_28906[(1)] = (8));
} else
{var statearr_28882_28907 = state_28866__$1;(statearr_28882_28907[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28867 === (14)))
{var inst_28859 = (state_28866[(2)]);var inst_28860 = cljs.core.async.close_BANG_(out);var state_28866__$1 = (function (){var statearr_28884 = state_28866;(statearr_28884[(13)] = inst_28859);
return statearr_28884;
})();var statearr_28885_28908 = state_28866__$1;(statearr_28885_28908[(2)] = inst_28860);
(statearr_28885_28908[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28867 === (10)))
{var inst_28850 = (state_28866[(2)]);var state_28866__$1 = state_28866;var statearr_28886_28909 = state_28866__$1;(statearr_28886_28909[(2)] = inst_28850);
(statearr_28886_28909[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28867 === (8)))
{var inst_28839 = (state_28866[(11)]);var inst_28830 = (state_28866[(8)]);var tmp28883 = inst_28830;var inst_28830__$1 = tmp28883;var inst_28831 = inst_28839;var state_28866__$1 = (function (){var statearr_28887 = state_28866;(statearr_28887[(7)] = inst_28831);
(statearr_28887[(8)] = inst_28830__$1);
return statearr_28887;
})();var statearr_28888_28910 = state_28866__$1;(statearr_28888_28910[(2)] = null);
(statearr_28888_28910[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5861__auto___28896,out))
;return ((function (switch__5846__auto__,c__5861__auto___28896,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_28892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28892[(0)] = state_machine__5847__auto__);
(statearr_28892[(1)] = (1));
return statearr_28892;
});
var state_machine__5847__auto____1 = (function (state_28866){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_28866);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e28893){if((e28893 instanceof Object))
{var ex__5850__auto__ = e28893;var statearr_28894_28911 = state_28866;(statearr_28894_28911[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_28866);
return cljs.core.constant$keyword$16;
} else
{throw e28893;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__28912 = state_28866;
state_28866 = G__28912;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_28866){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_28866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___28896,out))
})();var state__5863__auto__ = (function (){var statearr_28895 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_28895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___28896);
return statearr_28895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___28896,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___29060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___29060,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___29060,out){
return (function (state_29029){var state_val_29030 = (state_29029[(1)]);if((state_val_29030 === (7)))
{var inst_29025 = (state_29029[(2)]);var state_29029__$1 = state_29029;var statearr_29031_29061 = state_29029__$1;(statearr_29031_29061[(2)] = inst_29025);
(statearr_29031_29061[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_29030 === (1)))
{var inst_28988 = [];var inst_28989 = inst_28988;var inst_28990 = cljs.core.constant$keyword$31;var state_29029__$1 = (function (){var statearr_29032 = state_29029;(statearr_29032[(7)] = inst_28989);
(statearr_29032[(8)] = inst_28990);
return statearr_29032;
})();var statearr_29033_29062 = state_29029__$1;(statearr_29033_29062[(2)] = null);
(statearr_29033_29062[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_29030 === (4)))
{var inst_28993 = (state_29029[(9)]);var inst_28993__$1 = (state_29029[(2)]);var inst_28994 = (inst_28993__$1 == null);var inst_28995 = cljs.core.not(inst_28994);var state_29029__$1 = (function (){var statearr_29034 = state_29029;(statearr_29034[(9)] = inst_28993__$1);
return statearr_29034;
})();if(inst_28995)
{var statearr_29035_29063 = state_29029__$1;(statearr_29035_29063[(1)] = (5));
} else
{var statearr_29036_29064 = state_29029__$1;(statearr_29036_29064[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_29030 === (15)))
{var inst_29019 = (state_29029[(2)]);var state_29029__$1 = state_29029;var statearr_29037_29065 = state_29029__$1;(statearr_29037_29065[(2)] = inst_29019);
(statearr_29037_29065[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_29030 === (13)))
{var state_29029__$1 = state_29029;var statearr_29038_29066 = state_29029__$1;(statearr_29038_29066[(2)] = null);
(statearr_29038_29066[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_29030 === (6)))
{var inst_28989 = (state_29029[(7)]);var inst_29014 = inst_28989.length;var inst_29015 = (inst_29014 > (0));var state_29029__$1 = state_29029;if(cljs.core.truth_(inst_29015))
{var statearr_29039_29067 = state_29029__$1;(statearr_29039_29067[(1)] = (12));
} else
{var statearr_29040_29068 = state_29029__$1;(statearr_29040_29068[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_29030 === (3)))
{var inst_29027 = (state_29029[(2)]);var state_29029__$1 = state_29029;return cljs.core.async.impl.ioc_helpers.return_chan(state_29029__$1,inst_29027);
} else
{if((state_val_29030 === (12)))
{var inst_28989 = (state_29029[(7)]);var inst_29017 = cljs.core.vec(inst_28989);var state_29029__$1 = state_29029;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29029__$1,(15),out,inst_29017);
} else
{if((state_val_29030 === (2)))
{var state_29029__$1 = state_29029;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29029__$1,(4),ch);
} else
{if((state_val_29030 === (11)))
{var inst_28997 = (state_29029[(10)]);var inst_28993 = (state_29029[(9)]);var inst_29007 = (state_29029[(2)]);var inst_29008 = [];var inst_29009 = inst_29008.push(inst_28993);var inst_28989 = inst_29008;var inst_28990 = inst_28997;var state_29029__$1 = (function (){var statearr_29041 = state_29029;(statearr_29041[(11)] = inst_29009);
(statearr_29041[(12)] = inst_29007);
(statearr_29041[(7)] = inst_28989);
(statearr_29041[(8)] = inst_28990);
return statearr_29041;
})();var statearr_29042_29069 = state_29029__$1;(statearr_29042_29069[(2)] = null);
(statearr_29042_29069[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_29030 === (9)))
{var inst_28989 = (state_29029[(7)]);var inst_29005 = cljs.core.vec(inst_28989);var state_29029__$1 = state_29029;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29029__$1,(11),out,inst_29005);
} else
{if((state_val_29030 === (5)))
{var inst_28997 = (state_29029[(10)]);var inst_28993 = (state_29029[(9)]);var inst_28990 = (state_29029[(8)]);var inst_28997__$1 = (function (){var G__29043 = inst_28993;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29043) : f.call(null,G__29043));
})();var inst_28998 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28997__$1,inst_28990);var inst_28999 = cljs.core.keyword_identical_QMARK_(inst_28990,cljs.core.constant$keyword$31);var inst_29000 = (inst_28998) || (inst_28999);var state_29029__$1 = (function (){var statearr_29044 = state_29029;(statearr_29044[(10)] = inst_28997__$1);
return statearr_29044;
})();if(cljs.core.truth_(inst_29000))
{var statearr_29045_29070 = state_29029__$1;(statearr_29045_29070[(1)] = (8));
} else
{var statearr_29046_29071 = state_29029__$1;(statearr_29046_29071[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_29030 === (14)))
{var inst_29022 = (state_29029[(2)]);var inst_29023 = cljs.core.async.close_BANG_(out);var state_29029__$1 = (function (){var statearr_29048 = state_29029;(statearr_29048[(13)] = inst_29022);
return statearr_29048;
})();var statearr_29049_29072 = state_29029__$1;(statearr_29049_29072[(2)] = inst_29023);
(statearr_29049_29072[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_29030 === (10)))
{var inst_29012 = (state_29029[(2)]);var state_29029__$1 = state_29029;var statearr_29050_29073 = state_29029__$1;(statearr_29050_29073[(2)] = inst_29012);
(statearr_29050_29073[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_29030 === (8)))
{var inst_28997 = (state_29029[(10)]);var inst_28993 = (state_29029[(9)]);var inst_28989 = (state_29029[(7)]);var inst_29002 = inst_28989.push(inst_28993);var tmp29047 = inst_28989;var inst_28989__$1 = tmp29047;var inst_28990 = inst_28997;var state_29029__$1 = (function (){var statearr_29051 = state_29029;(statearr_29051[(14)] = inst_29002);
(statearr_29051[(7)] = inst_28989__$1);
(statearr_29051[(8)] = inst_28990);
return statearr_29051;
})();var statearr_29052_29074 = state_29029__$1;(statearr_29052_29074[(2)] = null);
(statearr_29052_29074[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5861__auto___29060,out))
;return ((function (switch__5846__auto__,c__5861__auto___29060,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_29056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29056[(0)] = state_machine__5847__auto__);
(statearr_29056[(1)] = (1));
return statearr_29056;
});
var state_machine__5847__auto____1 = (function (state_29029){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_29029);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e29057){if((e29057 instanceof Object))
{var ex__5850__auto__ = e29057;var statearr_29058_29075 = state_29029;(statearr_29058_29075[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_29029);
return cljs.core.constant$keyword$16;
} else
{throw e29057;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__29076 = state_29029;
state_29029 = G__29076;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_29029){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_29029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___29060,out))
})();var state__5863__auto__ = (function (){var statearr_29059 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_29059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___29060);
return statearr_29059;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___29060,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
