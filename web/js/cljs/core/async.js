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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25710 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25710 = (function (f,fn_handler,meta25711){
this.f = f;
this.fn_handler = fn_handler;
this.meta25711 = meta25711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25710.cljs$lang$type = true;
cljs.core.async.t25710.cljs$lang$ctorStr = "cljs.core.async/t25710";
cljs.core.async.t25710.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core.async/t25710");
});
cljs.core.async.t25710.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25712){var self__ = this;
var _25712__$1 = this;return self__.meta25711;
});
cljs.core.async.t25710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25712,meta25711__$1){var self__ = this;
var _25712__$1 = this;return (new cljs.core.async.t25710(self__.f,self__.fn_handler,meta25711__$1));
});
cljs.core.async.__GT_t25710 = (function __GT_t25710(f__$1,fn_handler__$1,meta25711){return (new cljs.core.async.t25710(f__$1,fn_handler__$1,meta25711));
});
}
return (new cljs.core.async.t25710(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25714 = buff;if(G__25714)
{var bit__4342__auto__ = null;if(cljs.core.truth_((function (){var or__3678__auto__ = bit__4342__auto__;if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return G__25714.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25714.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__25714);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__25714);
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
{var val_25731 = (function (){var G__25728 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25728) : cljs.core.deref.call(null,G__25728));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__25729_25732 = val_25731;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__25729_25732) : fn1.call(null,G__25729_25732));
} else
{cljs.core.async.impl.dispatch.run(((function (val_25731,ret){
return (function (){var G__25730 = val_25731;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__25730) : fn1.call(null,G__25730));
});})(val_25731,ret))
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
{var ret = temp__4220__auto__;var G__25741 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25741) : cljs.core.deref.call(null,G__25741));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4220__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4220__auto__))
{var retb = temp__4220__auto__;var ret = (function (){var G__25742 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25742) : cljs.core.deref.call(null,G__25742));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__25743_25745 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__25743_25745) : fn1.call(null,G__25743_25745));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4220__auto__){
return (function (){var G__25744 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__25744) : fn1.call(null,G__25744));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4548__auto___25746 = n;var x_25747 = (0);while(true){
if((x_25747 < n__4548__auto___25746))
{(a[x_25747] = (0));
{
var G__25748 = (x_25747 + (1));
x_25747 = G__25748;
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
var G__25749 = (i + (1));
i = G__25749;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__25757 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25757) : cljs.core.atom.call(null,G__25757));
})();if(typeof cljs.core.async.t25758 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25758 = (function (flag,alt_flag,meta25759){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25759 = meta25759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25758.cljs$lang$type = true;
cljs.core.async.t25758.cljs$lang$ctorStr = "cljs.core.async/t25758";
cljs.core.async.t25758.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core.async/t25758");
});})(flag))
;
cljs.core.async.t25758.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__25761 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25761) : cljs.core.deref.call(null,G__25761));
});})(flag))
;
cljs.core.async.t25758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__25762_25764 = self__.flag;var G__25763_25765 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25762_25764,G__25763_25765) : cljs.core.reset_BANG_.call(null,G__25762_25764,G__25763_25765));
return true;
});})(flag))
;
cljs.core.async.t25758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25760){var self__ = this;
var _25760__$1 = this;return self__.meta25759;
});})(flag))
;
cljs.core.async.t25758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25760,meta25759__$1){var self__ = this;
var _25760__$1 = this;return (new cljs.core.async.t25758(self__.flag,self__.alt_flag,meta25759__$1));
});})(flag))
;
cljs.core.async.__GT_t25758 = ((function (flag){
return (function __GT_t25758(flag__$1,alt_flag__$1,meta25759){return (new cljs.core.async.t25758(flag__$1,alt_flag__$1,meta25759));
});})(flag))
;
}
return (new cljs.core.async.t25758(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25769 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25769 = (function (cb,flag,alt_handler,meta25770){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25770 = meta25770;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25769.cljs$lang$type = true;
cljs.core.async.t25769.cljs$lang$ctorStr = "cljs.core.async/t25769";
cljs.core.async.t25769.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core.async/t25769");
});
cljs.core.async.t25769.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25769.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t25769.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t25769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25771){var self__ = this;
var _25771__$1 = this;return self__.meta25770;
});
cljs.core.async.t25769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25771,meta25770__$1){var self__ = this;
var _25771__$1 = this;return (new cljs.core.async.t25769(self__.cb,self__.flag,self__.alt_handler,meta25770__$1));
});
cljs.core.async.__GT_t25769 = (function __GT_t25769(cb__$1,flag__$1,alt_handler__$1,meta25770){return (new cljs.core.async.t25769(cb__$1,flag__$1,alt_handler__$1,meta25770));
});
}
return (new cljs.core.async.t25769(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__25779 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__25779) : port.call(null,G__25779));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__25780 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__25780) : port.call(null,G__25780));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25772_SHARP_){var G__25781 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25772_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25781) : fret.call(null,G__25781));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25773_SHARP_){var G__25782 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25773_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25782) : fret.call(null,G__25782));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25783 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25783) : cljs.core.deref.call(null,G__25783));
})(),(function (){var or__3678__auto__ = wport;if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__25784 = (i + (1));
i = G__25784;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3678__auto__ = ret;if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4222__auto__ = (function (){var and__3666__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3666__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3666__auto__;
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
var alts_BANG___delegate = function (ports,p__25785){var map__25787 = p__25785;var map__25787__$1 = ((cljs.core.seq_QMARK_(map__25787))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25787):map__25787);var opts = map__25787__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__25785 = null;if (arguments.length > 1) {
  p__25785 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25785);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25788){
var ports = cljs.core.first(arglist__25788);
var p__25785 = cljs.core.rest(arglist__25788);
return alts_BANG___delegate(ports,p__25785);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5861__auto___25886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___25886){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___25886){
return (function (state_25862){var state_val_25863 = (state_25862[(1)]);if((state_val_25863 === (7)))
{var inst_25858 = (state_25862[(2)]);var state_25862__$1 = state_25862;var statearr_25864_25887 = state_25862__$1;(statearr_25864_25887[(2)] = inst_25858);
(statearr_25864_25887[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25863 === (1)))
{var state_25862__$1 = state_25862;var statearr_25865_25888 = state_25862__$1;(statearr_25865_25888[(2)] = null);
(statearr_25865_25888[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25863 === (4)))
{var inst_25841 = (state_25862[(7)]);var inst_25841__$1 = (state_25862[(2)]);var inst_25842 = (inst_25841__$1 == null);var state_25862__$1 = (function (){var statearr_25866 = state_25862;(statearr_25866[(7)] = inst_25841__$1);
return statearr_25866;
})();if(cljs.core.truth_(inst_25842))
{var statearr_25867_25889 = state_25862__$1;(statearr_25867_25889[(1)] = (5));
} else
{var statearr_25868_25890 = state_25862__$1;(statearr_25868_25890[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25863 === (13)))
{var state_25862__$1 = state_25862;var statearr_25869_25891 = state_25862__$1;(statearr_25869_25891[(2)] = null);
(statearr_25869_25891[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25863 === (6)))
{var inst_25841 = (state_25862[(7)]);var state_25862__$1 = state_25862;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25862__$1,(11),to,inst_25841);
} else
{if((state_val_25863 === (3)))
{var inst_25860 = (state_25862[(2)]);var state_25862__$1 = state_25862;return cljs.core.async.impl.ioc_helpers.return_chan(state_25862__$1,inst_25860);
} else
{if((state_val_25863 === (12)))
{var state_25862__$1 = state_25862;var statearr_25870_25892 = state_25862__$1;(statearr_25870_25892[(2)] = null);
(statearr_25870_25892[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25863 === (2)))
{var state_25862__$1 = state_25862;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25862__$1,(4),from);
} else
{if((state_val_25863 === (11)))
{var inst_25851 = (state_25862[(2)]);var state_25862__$1 = state_25862;if(cljs.core.truth_(inst_25851))
{var statearr_25871_25893 = state_25862__$1;(statearr_25871_25893[(1)] = (12));
} else
{var statearr_25872_25894 = state_25862__$1;(statearr_25872_25894[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25863 === (9)))
{var state_25862__$1 = state_25862;var statearr_25873_25895 = state_25862__$1;(statearr_25873_25895[(2)] = null);
(statearr_25873_25895[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25863 === (5)))
{var state_25862__$1 = state_25862;if(cljs.core.truth_(close_QMARK_))
{var statearr_25874_25896 = state_25862__$1;(statearr_25874_25896[(1)] = (8));
} else
{var statearr_25875_25897 = state_25862__$1;(statearr_25875_25897[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25863 === (14)))
{var inst_25856 = (state_25862[(2)]);var state_25862__$1 = state_25862;var statearr_25876_25898 = state_25862__$1;(statearr_25876_25898[(2)] = inst_25856);
(statearr_25876_25898[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25863 === (10)))
{var inst_25848 = (state_25862[(2)]);var state_25862__$1 = state_25862;var statearr_25877_25899 = state_25862__$1;(statearr_25877_25899[(2)] = inst_25848);
(statearr_25877_25899[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25863 === (8)))
{var inst_25845 = cljs.core.async.close_BANG_(to);var state_25862__$1 = state_25862;var statearr_25878_25900 = state_25862__$1;(statearr_25878_25900[(2)] = inst_25845);
(statearr_25878_25900[(1)] = (10));
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
});})(c__5861__auto___25886))
;return ((function (switch__5846__auto__,c__5861__auto___25886){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_25882 = [null,null,null,null,null,null,null,null];(statearr_25882[(0)] = state_machine__5847__auto__);
(statearr_25882[(1)] = (1));
return statearr_25882;
});
var state_machine__5847__auto____1 = (function (state_25862){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_25862);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e25883){if((e25883 instanceof Object))
{var ex__5850__auto__ = e25883;var statearr_25884_25901 = state_25862;(statearr_25884_25901[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25862);
return cljs.core.constant$keyword$16;
} else
{throw e25883;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__25902 = state_25862;
state_25862 = G__25902;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_25862){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_25862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___25886))
})();var state__5863__auto__ = (function (){var statearr_25885 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_25885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___25886);
return statearr_25885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___25886))
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
return (function (p__26088){var vec__26089 = p__26088;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26089,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26089,(1),null);var job = vec__26089;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__5861__auto___26273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___26273,res,vec__26089,v,p,job,jobs,results){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___26273,res,vec__26089,v,p,job,jobs,results){
return (function (state_26094){var state_val_26095 = (state_26094[(1)]);if((state_val_26095 === (2)))
{var inst_26091 = (state_26094[(2)]);var inst_26092 = cljs.core.async.close_BANG_(res);var state_26094__$1 = (function (){var statearr_26096 = state_26094;(statearr_26096[(7)] = inst_26091);
return statearr_26096;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26094__$1,inst_26092);
} else
{if((state_val_26095 === (1)))
{var state_26094__$1 = state_26094;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26094__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5861__auto___26273,res,vec__26089,v,p,job,jobs,results))
;return ((function (switch__5846__auto__,c__5861__auto___26273,res,vec__26089,v,p,job,jobs,results){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_26100 = [null,null,null,null,null,null,null,null];(statearr_26100[(0)] = state_machine__5847__auto__);
(statearr_26100[(1)] = (1));
return statearr_26100;
});
var state_machine__5847__auto____1 = (function (state_26094){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_26094);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e26101){if((e26101 instanceof Object))
{var ex__5850__auto__ = e26101;var statearr_26102_26274 = state_26094;(statearr_26102_26274[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26094);
return cljs.core.constant$keyword$16;
} else
{throw e26101;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__26275 = state_26094;
state_26094 = G__26275;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_26094){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_26094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___26273,res,vec__26089,v,p,job,jobs,results))
})();var state__5863__auto__ = (function (){var statearr_26103 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_26103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___26273);
return statearr_26103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___26273,res,vec__26089,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__26104){var vec__26105 = p__26104;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26105,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26105,(1),null);var job = vec__26105;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__26106_26276 = v;var G__26107_26277 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__26106_26276,G__26107_26277) : xf.call(null,G__26106_26276,G__26107_26277));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4548__auto___26278 = n;var __26279 = (0);while(true){
if((__26279 < n__4548__auto___26278))
{var G__26108_26280 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__26108_26280) {
case "async":
var c__5861__auto___26282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__26279,c__5861__auto___26282,G__26108_26280,n__4548__auto___26278,jobs,results,process,async){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (__26279,c__5861__auto___26282,G__26108_26280,n__4548__auto___26278,jobs,results,process,async){
return (function (state_26121){var state_val_26122 = (state_26121[(1)]);if((state_val_26122 === (7)))
{var inst_26117 = (state_26121[(2)]);var state_26121__$1 = state_26121;var statearr_26123_26283 = state_26121__$1;(statearr_26123_26283[(2)] = inst_26117);
(statearr_26123_26283[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26122 === (6)))
{var state_26121__$1 = state_26121;var statearr_26124_26284 = state_26121__$1;(statearr_26124_26284[(2)] = null);
(statearr_26124_26284[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26122 === (5)))
{var state_26121__$1 = state_26121;var statearr_26125_26285 = state_26121__$1;(statearr_26125_26285[(2)] = null);
(statearr_26125_26285[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26122 === (4)))
{var inst_26111 = (state_26121[(2)]);var inst_26112 = async(inst_26111);var state_26121__$1 = state_26121;if(cljs.core.truth_(inst_26112))
{var statearr_26126_26286 = state_26121__$1;(statearr_26126_26286[(1)] = (5));
} else
{var statearr_26127_26287 = state_26121__$1;(statearr_26127_26287[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26122 === (3)))
{var inst_26119 = (state_26121[(2)]);var state_26121__$1 = state_26121;return cljs.core.async.impl.ioc_helpers.return_chan(state_26121__$1,inst_26119);
} else
{if((state_val_26122 === (2)))
{var state_26121__$1 = state_26121;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26121__$1,(4),jobs);
} else
{if((state_val_26122 === (1)))
{var state_26121__$1 = state_26121;var statearr_26128_26288 = state_26121__$1;(statearr_26128_26288[(2)] = null);
(statearr_26128_26288[(1)] = (2));
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
});})(__26279,c__5861__auto___26282,G__26108_26280,n__4548__auto___26278,jobs,results,process,async))
;return ((function (__26279,switch__5846__auto__,c__5861__auto___26282,G__26108_26280,n__4548__auto___26278,jobs,results,process,async){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_26132 = [null,null,null,null,null,null,null];(statearr_26132[(0)] = state_machine__5847__auto__);
(statearr_26132[(1)] = (1));
return statearr_26132;
});
var state_machine__5847__auto____1 = (function (state_26121){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_26121);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e26133){if((e26133 instanceof Object))
{var ex__5850__auto__ = e26133;var statearr_26134_26289 = state_26121;(statearr_26134_26289[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26121);
return cljs.core.constant$keyword$16;
} else
{throw e26133;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__26290 = state_26121;
state_26121 = G__26290;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_26121){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_26121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(__26279,switch__5846__auto__,c__5861__auto___26282,G__26108_26280,n__4548__auto___26278,jobs,results,process,async))
})();var state__5863__auto__ = (function (){var statearr_26135 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_26135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___26282);
return statearr_26135;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(__26279,c__5861__auto___26282,G__26108_26280,n__4548__auto___26278,jobs,results,process,async))
);

break;
case "compute":
var c__5861__auto___26291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__26279,c__5861__auto___26291,G__26108_26280,n__4548__auto___26278,jobs,results,process,async){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (__26279,c__5861__auto___26291,G__26108_26280,n__4548__auto___26278,jobs,results,process,async){
return (function (state_26148){var state_val_26149 = (state_26148[(1)]);if((state_val_26149 === (7)))
{var inst_26144 = (state_26148[(2)]);var state_26148__$1 = state_26148;var statearr_26150_26292 = state_26148__$1;(statearr_26150_26292[(2)] = inst_26144);
(statearr_26150_26292[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26149 === (6)))
{var state_26148__$1 = state_26148;var statearr_26151_26293 = state_26148__$1;(statearr_26151_26293[(2)] = null);
(statearr_26151_26293[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26149 === (5)))
{var state_26148__$1 = state_26148;var statearr_26152_26294 = state_26148__$1;(statearr_26152_26294[(2)] = null);
(statearr_26152_26294[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26149 === (4)))
{var inst_26138 = (state_26148[(2)]);var inst_26139 = process(inst_26138);var state_26148__$1 = state_26148;if(cljs.core.truth_(inst_26139))
{var statearr_26153_26295 = state_26148__$1;(statearr_26153_26295[(1)] = (5));
} else
{var statearr_26154_26296 = state_26148__$1;(statearr_26154_26296[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26149 === (3)))
{var inst_26146 = (state_26148[(2)]);var state_26148__$1 = state_26148;return cljs.core.async.impl.ioc_helpers.return_chan(state_26148__$1,inst_26146);
} else
{if((state_val_26149 === (2)))
{var state_26148__$1 = state_26148;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26148__$1,(4),jobs);
} else
{if((state_val_26149 === (1)))
{var state_26148__$1 = state_26148;var statearr_26155_26297 = state_26148__$1;(statearr_26155_26297[(2)] = null);
(statearr_26155_26297[(1)] = (2));
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
});})(__26279,c__5861__auto___26291,G__26108_26280,n__4548__auto___26278,jobs,results,process,async))
;return ((function (__26279,switch__5846__auto__,c__5861__auto___26291,G__26108_26280,n__4548__auto___26278,jobs,results,process,async){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_26159 = [null,null,null,null,null,null,null];(statearr_26159[(0)] = state_machine__5847__auto__);
(statearr_26159[(1)] = (1));
return statearr_26159;
});
var state_machine__5847__auto____1 = (function (state_26148){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_26148);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e26160){if((e26160 instanceof Object))
{var ex__5850__auto__ = e26160;var statearr_26161_26298 = state_26148;(statearr_26161_26298[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26148);
return cljs.core.constant$keyword$16;
} else
{throw e26160;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__26299 = state_26148;
state_26148 = G__26299;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_26148){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_26148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(__26279,switch__5846__auto__,c__5861__auto___26291,G__26108_26280,n__4548__auto___26278,jobs,results,process,async))
})();var state__5863__auto__ = (function (){var statearr_26162 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_26162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___26291);
return statearr_26162;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(__26279,c__5861__auto___26291,G__26108_26280,n__4548__auto___26278,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__26300 = (__26279 + (1));
__26279 = G__26300;
continue;
}
} else
{}
break;
}
var c__5861__auto___26301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___26301,jobs,results,process,async){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___26301,jobs,results,process,async){
return (function (state_26184){var state_val_26185 = (state_26184[(1)]);if((state_val_26185 === (9)))
{var inst_26177 = (state_26184[(2)]);var state_26184__$1 = (function (){var statearr_26186 = state_26184;(statearr_26186[(7)] = inst_26177);
return statearr_26186;
})();var statearr_26187_26302 = state_26184__$1;(statearr_26187_26302[(2)] = null);
(statearr_26187_26302[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26185 === (8)))
{var inst_26170 = (state_26184[(8)]);var inst_26175 = (state_26184[(2)]);var state_26184__$1 = (function (){var statearr_26188 = state_26184;(statearr_26188[(9)] = inst_26175);
return statearr_26188;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26184__$1,(9),results,inst_26170);
} else
{if((state_val_26185 === (7)))
{var inst_26180 = (state_26184[(2)]);var state_26184__$1 = state_26184;var statearr_26189_26303 = state_26184__$1;(statearr_26189_26303[(2)] = inst_26180);
(statearr_26189_26303[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26185 === (6)))
{var inst_26165 = (state_26184[(10)]);var inst_26170 = (state_26184[(8)]);var inst_26170__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_26171 = cljs.core.PersistentVector.EMPTY_NODE;var inst_26172 = [inst_26165,inst_26170__$1];var inst_26173 = (new cljs.core.PersistentVector(null,2,(5),inst_26171,inst_26172,null));var state_26184__$1 = (function (){var statearr_26190 = state_26184;(statearr_26190[(8)] = inst_26170__$1);
return statearr_26190;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26184__$1,(8),jobs,inst_26173);
} else
{if((state_val_26185 === (5)))
{var inst_26168 = cljs.core.async.close_BANG_(jobs);var state_26184__$1 = state_26184;var statearr_26191_26304 = state_26184__$1;(statearr_26191_26304[(2)] = inst_26168);
(statearr_26191_26304[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26185 === (4)))
{var inst_26165 = (state_26184[(10)]);var inst_26165__$1 = (state_26184[(2)]);var inst_26166 = (inst_26165__$1 == null);var state_26184__$1 = (function (){var statearr_26192 = state_26184;(statearr_26192[(10)] = inst_26165__$1);
return statearr_26192;
})();if(cljs.core.truth_(inst_26166))
{var statearr_26193_26305 = state_26184__$1;(statearr_26193_26305[(1)] = (5));
} else
{var statearr_26194_26306 = state_26184__$1;(statearr_26194_26306[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26185 === (3)))
{var inst_26182 = (state_26184[(2)]);var state_26184__$1 = state_26184;return cljs.core.async.impl.ioc_helpers.return_chan(state_26184__$1,inst_26182);
} else
{if((state_val_26185 === (2)))
{var state_26184__$1 = state_26184;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26184__$1,(4),from);
} else
{if((state_val_26185 === (1)))
{var state_26184__$1 = state_26184;var statearr_26195_26307 = state_26184__$1;(statearr_26195_26307[(2)] = null);
(statearr_26195_26307[(1)] = (2));
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
});})(c__5861__auto___26301,jobs,results,process,async))
;return ((function (switch__5846__auto__,c__5861__auto___26301,jobs,results,process,async){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_26199 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26199[(0)] = state_machine__5847__auto__);
(statearr_26199[(1)] = (1));
return statearr_26199;
});
var state_machine__5847__auto____1 = (function (state_26184){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_26184);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e26200){if((e26200 instanceof Object))
{var ex__5850__auto__ = e26200;var statearr_26201_26308 = state_26184;(statearr_26201_26308[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26184);
return cljs.core.constant$keyword$16;
} else
{throw e26200;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__26309 = state_26184;
state_26184 = G__26309;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_26184){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_26184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___26301,jobs,results,process,async))
})();var state__5863__auto__ = (function (){var statearr_26202 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_26202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___26301);
return statearr_26202;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___26301,jobs,results,process,async))
);
var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__,jobs,results,process,async){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__,jobs,results,process,async){
return (function (state_26240){var state_val_26241 = (state_26240[(1)]);if((state_val_26241 === (7)))
{var inst_26236 = (state_26240[(2)]);var state_26240__$1 = state_26240;var statearr_26242_26310 = state_26240__$1;(statearr_26242_26310[(2)] = inst_26236);
(statearr_26242_26310[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26241 === (20)))
{var state_26240__$1 = state_26240;var statearr_26243_26311 = state_26240__$1;(statearr_26243_26311[(2)] = null);
(statearr_26243_26311[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26241 === (1)))
{var state_26240__$1 = state_26240;var statearr_26244_26312 = state_26240__$1;(statearr_26244_26312[(2)] = null);
(statearr_26244_26312[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26241 === (4)))
{var inst_26205 = (state_26240[(7)]);var inst_26205__$1 = (state_26240[(2)]);var inst_26206 = (inst_26205__$1 == null);var state_26240__$1 = (function (){var statearr_26245 = state_26240;(statearr_26245[(7)] = inst_26205__$1);
return statearr_26245;
})();if(cljs.core.truth_(inst_26206))
{var statearr_26246_26313 = state_26240__$1;(statearr_26246_26313[(1)] = (5));
} else
{var statearr_26247_26314 = state_26240__$1;(statearr_26247_26314[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26241 === (15)))
{var inst_26218 = (state_26240[(8)]);var state_26240__$1 = state_26240;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26240__$1,(18),to,inst_26218);
} else
{if((state_val_26241 === (21)))
{var inst_26231 = (state_26240[(2)]);var state_26240__$1 = state_26240;var statearr_26248_26315 = state_26240__$1;(statearr_26248_26315[(2)] = inst_26231);
(statearr_26248_26315[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26241 === (13)))
{var inst_26233 = (state_26240[(2)]);var state_26240__$1 = (function (){var statearr_26249 = state_26240;(statearr_26249[(9)] = inst_26233);
return statearr_26249;
})();var statearr_26250_26316 = state_26240__$1;(statearr_26250_26316[(2)] = null);
(statearr_26250_26316[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26241 === (6)))
{var inst_26205 = (state_26240[(7)]);var state_26240__$1 = state_26240;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26240__$1,(11),inst_26205);
} else
{if((state_val_26241 === (17)))
{var inst_26226 = (state_26240[(2)]);var state_26240__$1 = state_26240;if(cljs.core.truth_(inst_26226))
{var statearr_26251_26317 = state_26240__$1;(statearr_26251_26317[(1)] = (19));
} else
{var statearr_26252_26318 = state_26240__$1;(statearr_26252_26318[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26241 === (3)))
{var inst_26238 = (state_26240[(2)]);var state_26240__$1 = state_26240;return cljs.core.async.impl.ioc_helpers.return_chan(state_26240__$1,inst_26238);
} else
{if((state_val_26241 === (12)))
{var inst_26215 = (state_26240[(10)]);var state_26240__$1 = state_26240;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26240__$1,(14),inst_26215);
} else
{if((state_val_26241 === (2)))
{var state_26240__$1 = state_26240;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26240__$1,(4),results);
} else
{if((state_val_26241 === (19)))
{var state_26240__$1 = state_26240;var statearr_26253_26319 = state_26240__$1;(statearr_26253_26319[(2)] = null);
(statearr_26253_26319[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26241 === (11)))
{var inst_26215 = (state_26240[(2)]);var state_26240__$1 = (function (){var statearr_26254 = state_26240;(statearr_26254[(10)] = inst_26215);
return statearr_26254;
})();var statearr_26255_26320 = state_26240__$1;(statearr_26255_26320[(2)] = null);
(statearr_26255_26320[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26241 === (9)))
{var state_26240__$1 = state_26240;var statearr_26256_26321 = state_26240__$1;(statearr_26256_26321[(2)] = null);
(statearr_26256_26321[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26241 === (5)))
{var state_26240__$1 = state_26240;if(cljs.core.truth_(close_QMARK_))
{var statearr_26257_26322 = state_26240__$1;(statearr_26257_26322[(1)] = (8));
} else
{var statearr_26258_26323 = state_26240__$1;(statearr_26258_26323[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26241 === (14)))
{var inst_26218 = (state_26240[(8)]);var inst_26220 = (state_26240[(11)]);var inst_26218__$1 = (state_26240[(2)]);var inst_26219 = (inst_26218__$1 == null);var inst_26220__$1 = cljs.core.not(inst_26219);var state_26240__$1 = (function (){var statearr_26259 = state_26240;(statearr_26259[(8)] = inst_26218__$1);
(statearr_26259[(11)] = inst_26220__$1);
return statearr_26259;
})();if(inst_26220__$1)
{var statearr_26260_26324 = state_26240__$1;(statearr_26260_26324[(1)] = (15));
} else
{var statearr_26261_26325 = state_26240__$1;(statearr_26261_26325[(1)] = (16));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26241 === (16)))
{var inst_26220 = (state_26240[(11)]);var state_26240__$1 = state_26240;var statearr_26262_26326 = state_26240__$1;(statearr_26262_26326[(2)] = inst_26220);
(statearr_26262_26326[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26241 === (10)))
{var inst_26212 = (state_26240[(2)]);var state_26240__$1 = state_26240;var statearr_26263_26327 = state_26240__$1;(statearr_26263_26327[(2)] = inst_26212);
(statearr_26263_26327[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26241 === (18)))
{var inst_26223 = (state_26240[(2)]);var state_26240__$1 = state_26240;var statearr_26264_26328 = state_26240__$1;(statearr_26264_26328[(2)] = inst_26223);
(statearr_26264_26328[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26241 === (8)))
{var inst_26209 = cljs.core.async.close_BANG_(to);var state_26240__$1 = state_26240;var statearr_26265_26329 = state_26240__$1;(statearr_26265_26329[(2)] = inst_26209);
(statearr_26265_26329[(1)] = (10));
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
var state_machine__5847__auto____0 = (function (){var statearr_26269 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26269[(0)] = state_machine__5847__auto__);
(statearr_26269[(1)] = (1));
return statearr_26269;
});
var state_machine__5847__auto____1 = (function (state_26240){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_26240);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e26270){if((e26270 instanceof Object))
{var ex__5850__auto__ = e26270;var statearr_26271_26330 = state_26240;(statearr_26271_26330[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26240);
return cljs.core.constant$keyword$16;
} else
{throw e26270;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__26331 = state_26240;
state_26240 = G__26331;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_26240){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_26240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__,jobs,results,process,async))
})();var state__5863__auto__ = (function (){var statearr_26272 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_26272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_26272;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5861__auto___26454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___26454,tc,fc){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___26454,tc,fc){
return (function (state_26428){var state_val_26429 = (state_26428[(1)]);if((state_val_26429 === (7)))
{var inst_26424 = (state_26428[(2)]);var state_26428__$1 = state_26428;var statearr_26430_26455 = state_26428__$1;(statearr_26430_26455[(2)] = inst_26424);
(statearr_26430_26455[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26429 === (1)))
{var state_26428__$1 = state_26428;var statearr_26431_26456 = state_26428__$1;(statearr_26431_26456[(2)] = null);
(statearr_26431_26456[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26429 === (4)))
{var inst_26405 = (state_26428[(7)]);var inst_26405__$1 = (state_26428[(2)]);var inst_26406 = (inst_26405__$1 == null);var state_26428__$1 = (function (){var statearr_26432 = state_26428;(statearr_26432[(7)] = inst_26405__$1);
return statearr_26432;
})();if(cljs.core.truth_(inst_26406))
{var statearr_26433_26457 = state_26428__$1;(statearr_26433_26457[(1)] = (5));
} else
{var statearr_26434_26458 = state_26428__$1;(statearr_26434_26458[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26429 === (13)))
{var state_26428__$1 = state_26428;var statearr_26435_26459 = state_26428__$1;(statearr_26435_26459[(2)] = null);
(statearr_26435_26459[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26429 === (6)))
{var inst_26405 = (state_26428[(7)]);var inst_26411 = (function (){var G__26436 = inst_26405;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26436) : p.call(null,G__26436));
})();var state_26428__$1 = state_26428;if(cljs.core.truth_(inst_26411))
{var statearr_26437_26460 = state_26428__$1;(statearr_26437_26460[(1)] = (9));
} else
{var statearr_26438_26461 = state_26428__$1;(statearr_26438_26461[(1)] = (10));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26429 === (3)))
{var inst_26426 = (state_26428[(2)]);var state_26428__$1 = state_26428;return cljs.core.async.impl.ioc_helpers.return_chan(state_26428__$1,inst_26426);
} else
{if((state_val_26429 === (12)))
{var state_26428__$1 = state_26428;var statearr_26439_26462 = state_26428__$1;(statearr_26439_26462[(2)] = null);
(statearr_26439_26462[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26429 === (2)))
{var state_26428__$1 = state_26428;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26428__$1,(4),ch);
} else
{if((state_val_26429 === (11)))
{var inst_26405 = (state_26428[(7)]);var inst_26415 = (state_26428[(2)]);var state_26428__$1 = state_26428;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26428__$1,(8),inst_26415,inst_26405);
} else
{if((state_val_26429 === (9)))
{var state_26428__$1 = state_26428;var statearr_26440_26463 = state_26428__$1;(statearr_26440_26463[(2)] = tc);
(statearr_26440_26463[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26429 === (5)))
{var inst_26408 = cljs.core.async.close_BANG_(tc);var inst_26409 = cljs.core.async.close_BANG_(fc);var state_26428__$1 = (function (){var statearr_26441 = state_26428;(statearr_26441[(8)] = inst_26408);
return statearr_26441;
})();var statearr_26442_26464 = state_26428__$1;(statearr_26442_26464[(2)] = inst_26409);
(statearr_26442_26464[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26429 === (14)))
{var inst_26422 = (state_26428[(2)]);var state_26428__$1 = state_26428;var statearr_26443_26465 = state_26428__$1;(statearr_26443_26465[(2)] = inst_26422);
(statearr_26443_26465[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26429 === (10)))
{var state_26428__$1 = state_26428;var statearr_26444_26466 = state_26428__$1;(statearr_26444_26466[(2)] = fc);
(statearr_26444_26466[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26429 === (8)))
{var inst_26417 = (state_26428[(2)]);var state_26428__$1 = state_26428;if(cljs.core.truth_(inst_26417))
{var statearr_26445_26467 = state_26428__$1;(statearr_26445_26467[(1)] = (12));
} else
{var statearr_26446_26468 = state_26428__$1;(statearr_26446_26468[(1)] = (13));
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
});})(c__5861__auto___26454,tc,fc))
;return ((function (switch__5846__auto__,c__5861__auto___26454,tc,fc){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_26450 = [null,null,null,null,null,null,null,null,null];(statearr_26450[(0)] = state_machine__5847__auto__);
(statearr_26450[(1)] = (1));
return statearr_26450;
});
var state_machine__5847__auto____1 = (function (state_26428){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_26428);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e26451){if((e26451 instanceof Object))
{var ex__5850__auto__ = e26451;var statearr_26452_26469 = state_26428;(statearr_26452_26469[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26428);
return cljs.core.constant$keyword$16;
} else
{throw e26451;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__26470 = state_26428;
state_26428 = G__26470;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_26428){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_26428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___26454,tc,fc))
})();var state__5863__auto__ = (function (){var statearr_26453 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_26453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___26454);
return statearr_26453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___26454,tc,fc))
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
return (function (state_26519){var state_val_26520 = (state_26519[(1)]);if((state_val_26520 === (7)))
{var inst_26515 = (state_26519[(2)]);var state_26519__$1 = state_26519;var statearr_26521_26539 = state_26519__$1;(statearr_26521_26539[(2)] = inst_26515);
(statearr_26521_26539[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26520 === (6)))
{var inst_26505 = (state_26519[(7)]);var inst_26508 = (state_26519[(8)]);var inst_26512 = (function (){var G__26522 = inst_26505;var G__26523 = inst_26508;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26522,G__26523) : f.call(null,G__26522,G__26523));
})();var inst_26505__$1 = inst_26512;var state_26519__$1 = (function (){var statearr_26524 = state_26519;(statearr_26524[(7)] = inst_26505__$1);
return statearr_26524;
})();var statearr_26525_26540 = state_26519__$1;(statearr_26525_26540[(2)] = null);
(statearr_26525_26540[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26520 === (5)))
{var inst_26505 = (state_26519[(7)]);var state_26519__$1 = state_26519;var statearr_26526_26541 = state_26519__$1;(statearr_26526_26541[(2)] = inst_26505);
(statearr_26526_26541[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26520 === (4)))
{var inst_26508 = (state_26519[(8)]);var inst_26508__$1 = (state_26519[(2)]);var inst_26509 = (inst_26508__$1 == null);var state_26519__$1 = (function (){var statearr_26527 = state_26519;(statearr_26527[(8)] = inst_26508__$1);
return statearr_26527;
})();if(cljs.core.truth_(inst_26509))
{var statearr_26528_26542 = state_26519__$1;(statearr_26528_26542[(1)] = (5));
} else
{var statearr_26529_26543 = state_26519__$1;(statearr_26529_26543[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26520 === (3)))
{var inst_26517 = (state_26519[(2)]);var state_26519__$1 = state_26519;return cljs.core.async.impl.ioc_helpers.return_chan(state_26519__$1,inst_26517);
} else
{if((state_val_26520 === (2)))
{var state_26519__$1 = state_26519;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26519__$1,(4),ch);
} else
{if((state_val_26520 === (1)))
{var inst_26505 = init;var state_26519__$1 = (function (){var statearr_26530 = state_26519;(statearr_26530[(7)] = inst_26505);
return statearr_26530;
})();var statearr_26531_26544 = state_26519__$1;(statearr_26531_26544[(2)] = null);
(statearr_26531_26544[(1)] = (2));
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
var state_machine__5847__auto____0 = (function (){var statearr_26535 = [null,null,null,null,null,null,null,null,null];(statearr_26535[(0)] = state_machine__5847__auto__);
(statearr_26535[(1)] = (1));
return statearr_26535;
});
var state_machine__5847__auto____1 = (function (state_26519){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_26519);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e26536){if((e26536 instanceof Object))
{var ex__5850__auto__ = e26536;var statearr_26537_26545 = state_26519;(statearr_26537_26545[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26519);
return cljs.core.constant$keyword$16;
} else
{throw e26536;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__26546 = state_26519;
state_26519 = G__26546;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_26519){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_26519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__))
})();var state__5863__auto__ = (function (){var statearr_26538 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_26538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_26538;
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
return (function (state_26623){var state_val_26624 = (state_26623[(1)]);if((state_val_26624 === (7)))
{var inst_26605 = (state_26623[(2)]);var state_26623__$1 = state_26623;var statearr_26625_26648 = state_26623__$1;(statearr_26625_26648[(2)] = inst_26605);
(statearr_26625_26648[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26624 === (1)))
{var inst_26599 = cljs.core.seq(coll);var inst_26600 = inst_26599;var state_26623__$1 = (function (){var statearr_26626 = state_26623;(statearr_26626[(7)] = inst_26600);
return statearr_26626;
})();var statearr_26627_26649 = state_26623__$1;(statearr_26627_26649[(2)] = null);
(statearr_26627_26649[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26624 === (4)))
{var inst_26600 = (state_26623[(7)]);var inst_26603 = cljs.core.first(inst_26600);var state_26623__$1 = state_26623;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26623__$1,(7),ch,inst_26603);
} else
{if((state_val_26624 === (13)))
{var inst_26617 = (state_26623[(2)]);var state_26623__$1 = state_26623;var statearr_26628_26650 = state_26623__$1;(statearr_26628_26650[(2)] = inst_26617);
(statearr_26628_26650[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26624 === (6)))
{var inst_26608 = (state_26623[(2)]);var state_26623__$1 = state_26623;if(cljs.core.truth_(inst_26608))
{var statearr_26629_26651 = state_26623__$1;(statearr_26629_26651[(1)] = (8));
} else
{var statearr_26630_26652 = state_26623__$1;(statearr_26630_26652[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26624 === (3)))
{var inst_26621 = (state_26623[(2)]);var state_26623__$1 = state_26623;return cljs.core.async.impl.ioc_helpers.return_chan(state_26623__$1,inst_26621);
} else
{if((state_val_26624 === (12)))
{var state_26623__$1 = state_26623;var statearr_26631_26653 = state_26623__$1;(statearr_26631_26653[(2)] = null);
(statearr_26631_26653[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26624 === (2)))
{var inst_26600 = (state_26623[(7)]);var state_26623__$1 = state_26623;if(cljs.core.truth_(inst_26600))
{var statearr_26632_26654 = state_26623__$1;(statearr_26632_26654[(1)] = (4));
} else
{var statearr_26633_26655 = state_26623__$1;(statearr_26633_26655[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26624 === (11)))
{var inst_26614 = cljs.core.async.close_BANG_(ch);var state_26623__$1 = state_26623;var statearr_26634_26656 = state_26623__$1;(statearr_26634_26656[(2)] = inst_26614);
(statearr_26634_26656[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26624 === (9)))
{var state_26623__$1 = state_26623;if(cljs.core.truth_(close_QMARK_))
{var statearr_26635_26657 = state_26623__$1;(statearr_26635_26657[(1)] = (11));
} else
{var statearr_26636_26658 = state_26623__$1;(statearr_26636_26658[(1)] = (12));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26624 === (5)))
{var inst_26600 = (state_26623[(7)]);var state_26623__$1 = state_26623;var statearr_26637_26659 = state_26623__$1;(statearr_26637_26659[(2)] = inst_26600);
(statearr_26637_26659[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26624 === (10)))
{var inst_26619 = (state_26623[(2)]);var state_26623__$1 = state_26623;var statearr_26638_26660 = state_26623__$1;(statearr_26638_26660[(2)] = inst_26619);
(statearr_26638_26660[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26624 === (8)))
{var inst_26600 = (state_26623[(7)]);var inst_26610 = cljs.core.next(inst_26600);var inst_26600__$1 = inst_26610;var state_26623__$1 = (function (){var statearr_26639 = state_26623;(statearr_26639[(7)] = inst_26600__$1);
return statearr_26639;
})();var statearr_26640_26661 = state_26623__$1;(statearr_26640_26661[(2)] = null);
(statearr_26640_26661[(1)] = (2));
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
var state_machine__5847__auto____0 = (function (){var statearr_26644 = [null,null,null,null,null,null,null,null];(statearr_26644[(0)] = state_machine__5847__auto__);
(statearr_26644[(1)] = (1));
return statearr_26644;
});
var state_machine__5847__auto____1 = (function (state_26623){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_26623);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e26645){if((e26645 instanceof Object))
{var ex__5850__auto__ = e26645;var statearr_26646_26662 = state_26623;(statearr_26646_26662[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26623);
return cljs.core.constant$keyword$16;
} else
{throw e26645;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__26663 = state_26623;
state_26623 = G__26663;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_26623){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_26623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__))
})();var state__5863__auto__ = (function (){var statearr_26647 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_26647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_26647;
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
cljs.core.async.Mux = (function (){var obj26665 = {};return obj26665;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3666__auto__ = _;if(and__3666__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3666__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4315__auto__ = (((_ == null))?null:_);return (function (){var or__3678__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__26669 = x__4315__auto__;return goog.typeOf(G__26669);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj26671 = {};return obj26671;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3666__auto__ = m;if(and__3666__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3666__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4315__auto__ = (((m == null))?null:m);return (function (){var or__3678__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__26675 = x__4315__auto__;return goog.typeOf(G__26675);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3666__auto__ = m;if(and__3666__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3666__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4315__auto__ = (((m == null))?null:m);return (function (){var or__3678__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__26679 = x__4315__auto__;return goog.typeOf(G__26679);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3666__auto__ = m;if(and__3666__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3666__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4315__auto__ = (((m == null))?null:m);return (function (){var or__3678__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__26683 = x__4315__auto__;return goog.typeOf(G__26683);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__26913 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26913) : cljs.core.atom.call(null,G__26913));
})();var m = (function (){if(typeof cljs.core.async.t26914 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26914 = (function (cs,ch,mult,meta26915){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26915 = meta26915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26914.cljs$lang$type = true;
cljs.core.async.t26914.cljs$lang$ctorStr = "cljs.core.async/t26914";
cljs.core.async.t26914.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core.async/t26914");
});})(cs))
;
cljs.core.async.t26914.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26914.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26914.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26914.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__26917_27142 = self__.cs;var G__26918_27143 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26917_27142,G__26918_27143) : cljs.core.reset_BANG_.call(null,G__26917_27142,G__26918_27143));
return null;
});})(cs))
;
cljs.core.async.t26914.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26914.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26916){var self__ = this;
var _26916__$1 = this;return self__.meta26915;
});})(cs))
;
cljs.core.async.t26914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26916,meta26915__$1){var self__ = this;
var _26916__$1 = this;return (new cljs.core.async.t26914(self__.cs,self__.ch,self__.mult,meta26915__$1));
});})(cs))
;
cljs.core.async.__GT_t26914 = ((function (cs){
return (function __GT_t26914(cs__$1,ch__$1,mult__$1,meta26915){return (new cljs.core.async.t26914(cs__$1,ch__$1,mult__$1,meta26915));
});})(cs))
;
}
return (new cljs.core.async.t26914(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__26919 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26919) : cljs.core.atom.call(null,G__26919));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5861__auto___27144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___27144,cs,m,dchan,dctr,done){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___27144,cs,m,dchan,dctr,done){
return (function (state_27050){var state_val_27051 = (state_27050[(1)]);if((state_val_27051 === (7)))
{var inst_27046 = (state_27050[(2)]);var state_27050__$1 = state_27050;var statearr_27052_27145 = state_27050__$1;(statearr_27052_27145[(2)] = inst_27046);
(statearr_27052_27145[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (20)))
{var inst_26951 = (state_27050[(7)]);var inst_26961 = cljs.core.first(inst_26951);var inst_26962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26961,(0),null);var inst_26963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26961,(1),null);var state_27050__$1 = (function (){var statearr_27053 = state_27050;(statearr_27053[(8)] = inst_26962);
return statearr_27053;
})();if(cljs.core.truth_(inst_26963))
{var statearr_27054_27146 = state_27050__$1;(statearr_27054_27146[(1)] = (22));
} else
{var statearr_27055_27147 = state_27050__$1;(statearr_27055_27147[(1)] = (23));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (27)))
{var inst_26998 = (state_27050[(9)]);var inst_26991 = (state_27050[(10)]);var inst_26993 = (state_27050[(11)]);var inst_26922 = (state_27050[(12)]);var inst_26998__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26991,inst_26993);var inst_26999 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_26998__$1,inst_26922,done);var state_27050__$1 = (function (){var statearr_27056 = state_27050;(statearr_27056[(9)] = inst_26998__$1);
return statearr_27056;
})();if(cljs.core.truth_(inst_26999))
{var statearr_27057_27148 = state_27050__$1;(statearr_27057_27148[(1)] = (30));
} else
{var statearr_27058_27149 = state_27050__$1;(statearr_27058_27149[(1)] = (31));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (1)))
{var state_27050__$1 = state_27050;var statearr_27059_27150 = state_27050__$1;(statearr_27059_27150[(2)] = null);
(statearr_27059_27150[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (24)))
{var inst_26951 = (state_27050[(7)]);var inst_26968 = (state_27050[(2)]);var inst_26969 = cljs.core.next(inst_26951);var inst_26931 = inst_26969;var inst_26932 = null;var inst_26933 = (0);var inst_26934 = (0);var state_27050__$1 = (function (){var statearr_27060 = state_27050;(statearr_27060[(13)] = inst_26931);
(statearr_27060[(14)] = inst_26968);
(statearr_27060[(15)] = inst_26934);
(statearr_27060[(16)] = inst_26933);
(statearr_27060[(17)] = inst_26932);
return statearr_27060;
})();var statearr_27061_27151 = state_27050__$1;(statearr_27061_27151[(2)] = null);
(statearr_27061_27151[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (39)))
{var state_27050__$1 = state_27050;var statearr_27065_27152 = state_27050__$1;(statearr_27065_27152[(2)] = null);
(statearr_27065_27152[(1)] = (41));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (4)))
{var inst_26922 = (state_27050[(12)]);var inst_26922__$1 = (state_27050[(2)]);var inst_26923 = (inst_26922__$1 == null);var state_27050__$1 = (function (){var statearr_27066 = state_27050;(statearr_27066[(12)] = inst_26922__$1);
return statearr_27066;
})();if(cljs.core.truth_(inst_26923))
{var statearr_27067_27153 = state_27050__$1;(statearr_27067_27153[(1)] = (5));
} else
{var statearr_27068_27154 = state_27050__$1;(statearr_27068_27154[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (15)))
{var inst_26931 = (state_27050[(13)]);var inst_26934 = (state_27050[(15)]);var inst_26933 = (state_27050[(16)]);var inst_26932 = (state_27050[(17)]);var inst_26947 = (state_27050[(2)]);var inst_26948 = (inst_26934 + (1));var tmp27062 = inst_26931;var tmp27063 = inst_26933;var tmp27064 = inst_26932;var inst_26931__$1 = tmp27062;var inst_26932__$1 = tmp27064;var inst_26933__$1 = tmp27063;var inst_26934__$1 = inst_26948;var state_27050__$1 = (function (){var statearr_27069 = state_27050;(statearr_27069[(13)] = inst_26931__$1);
(statearr_27069[(18)] = inst_26947);
(statearr_27069[(15)] = inst_26934__$1);
(statearr_27069[(16)] = inst_26933__$1);
(statearr_27069[(17)] = inst_26932__$1);
return statearr_27069;
})();var statearr_27070_27155 = state_27050__$1;(statearr_27070_27155[(2)] = null);
(statearr_27070_27155[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (21)))
{var inst_26972 = (state_27050[(2)]);var state_27050__$1 = state_27050;var statearr_27074_27156 = state_27050__$1;(statearr_27074_27156[(2)] = inst_26972);
(statearr_27074_27156[(1)] = (18));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (31)))
{var inst_26998 = (state_27050[(9)]);var inst_27002 = done(null);var inst_27003 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_26998);var state_27050__$1 = (function (){var statearr_27075 = state_27050;(statearr_27075[(19)] = inst_27002);
return statearr_27075;
})();var statearr_27076_27157 = state_27050__$1;(statearr_27076_27157[(2)] = inst_27003);
(statearr_27076_27157[(1)] = (32));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (32)))
{var inst_26991 = (state_27050[(10)]);var inst_26992 = (state_27050[(20)]);var inst_26990 = (state_27050[(21)]);var inst_26993 = (state_27050[(11)]);var inst_27005 = (state_27050[(2)]);var inst_27006 = (inst_26993 + (1));var tmp27071 = inst_26991;var tmp27072 = inst_26992;var tmp27073 = inst_26990;var inst_26990__$1 = tmp27073;var inst_26991__$1 = tmp27071;var inst_26992__$1 = tmp27072;var inst_26993__$1 = inst_27006;var state_27050__$1 = (function (){var statearr_27077 = state_27050;(statearr_27077[(10)] = inst_26991__$1);
(statearr_27077[(20)] = inst_26992__$1);
(statearr_27077[(22)] = inst_27005);
(statearr_27077[(21)] = inst_26990__$1);
(statearr_27077[(11)] = inst_26993__$1);
return statearr_27077;
})();var statearr_27078_27158 = state_27050__$1;(statearr_27078_27158[(2)] = null);
(statearr_27078_27158[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (40)))
{var inst_27018 = (state_27050[(23)]);var inst_27022 = done(null);var inst_27023 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27018);var state_27050__$1 = (function (){var statearr_27079 = state_27050;(statearr_27079[(24)] = inst_27022);
return statearr_27079;
})();var statearr_27080_27159 = state_27050__$1;(statearr_27080_27159[(2)] = inst_27023);
(statearr_27080_27159[(1)] = (41));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (33)))
{var inst_27009 = (state_27050[(25)]);var inst_27011 = cljs.core.chunked_seq_QMARK_(inst_27009);var state_27050__$1 = state_27050;if(inst_27011)
{var statearr_27081_27160 = state_27050__$1;(statearr_27081_27160[(1)] = (36));
} else
{var statearr_27082_27161 = state_27050__$1;(statearr_27082_27161[(1)] = (37));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (13)))
{var inst_26941 = (state_27050[(26)]);var inst_26944 = cljs.core.async.close_BANG_(inst_26941);var state_27050__$1 = state_27050;var statearr_27083_27162 = state_27050__$1;(statearr_27083_27162[(2)] = inst_26944);
(statearr_27083_27162[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (22)))
{var inst_26962 = (state_27050[(8)]);var inst_26965 = cljs.core.async.close_BANG_(inst_26962);var state_27050__$1 = state_27050;var statearr_27084_27163 = state_27050__$1;(statearr_27084_27163[(2)] = inst_26965);
(statearr_27084_27163[(1)] = (24));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (36)))
{var inst_27009 = (state_27050[(25)]);var inst_27013 = cljs.core.chunk_first(inst_27009);var inst_27014 = cljs.core.chunk_rest(inst_27009);var inst_27015 = cljs.core.count(inst_27013);var inst_26990 = inst_27014;var inst_26991 = inst_27013;var inst_26992 = inst_27015;var inst_26993 = (0);var state_27050__$1 = (function (){var statearr_27085 = state_27050;(statearr_27085[(10)] = inst_26991);
(statearr_27085[(20)] = inst_26992);
(statearr_27085[(21)] = inst_26990);
(statearr_27085[(11)] = inst_26993);
return statearr_27085;
})();var statearr_27086_27164 = state_27050__$1;(statearr_27086_27164[(2)] = null);
(statearr_27086_27164[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (41)))
{var inst_27009 = (state_27050[(25)]);var inst_27025 = (state_27050[(2)]);var inst_27026 = cljs.core.next(inst_27009);var inst_26990 = inst_27026;var inst_26991 = null;var inst_26992 = (0);var inst_26993 = (0);var state_27050__$1 = (function (){var statearr_27087 = state_27050;(statearr_27087[(10)] = inst_26991);
(statearr_27087[(27)] = inst_27025);
(statearr_27087[(20)] = inst_26992);
(statearr_27087[(21)] = inst_26990);
(statearr_27087[(11)] = inst_26993);
return statearr_27087;
})();var statearr_27088_27165 = state_27050__$1;(statearr_27088_27165[(2)] = null);
(statearr_27088_27165[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (43)))
{var state_27050__$1 = state_27050;var statearr_27089_27166 = state_27050__$1;(statearr_27089_27166[(2)] = null);
(statearr_27089_27166[(1)] = (44));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (29)))
{var inst_27034 = (state_27050[(2)]);var state_27050__$1 = state_27050;var statearr_27090_27167 = state_27050__$1;(statearr_27090_27167[(2)] = inst_27034);
(statearr_27090_27167[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (44)))
{var inst_27043 = (state_27050[(2)]);var state_27050__$1 = (function (){var statearr_27091 = state_27050;(statearr_27091[(28)] = inst_27043);
return statearr_27091;
})();var statearr_27092_27168 = state_27050__$1;(statearr_27092_27168[(2)] = null);
(statearr_27092_27168[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (6)))
{var inst_26982 = (state_27050[(29)]);var inst_26981 = (function (){var G__27093 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27093) : cljs.core.deref.call(null,G__27093));
})();var inst_26982__$1 = cljs.core.keys(inst_26981);var inst_26983 = cljs.core.count(inst_26982__$1);var inst_26984 = (function (){var G__27094 = dctr;var G__27095 = inst_26983;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27094,G__27095) : cljs.core.reset_BANG_.call(null,G__27094,G__27095));
})();var inst_26989 = cljs.core.seq(inst_26982__$1);var inst_26990 = inst_26989;var inst_26991 = null;var inst_26992 = (0);var inst_26993 = (0);var state_27050__$1 = (function (){var statearr_27096 = state_27050;(statearr_27096[(10)] = inst_26991);
(statearr_27096[(30)] = inst_26984);
(statearr_27096[(29)] = inst_26982__$1);
(statearr_27096[(20)] = inst_26992);
(statearr_27096[(21)] = inst_26990);
(statearr_27096[(11)] = inst_26993);
return statearr_27096;
})();var statearr_27097_27169 = state_27050__$1;(statearr_27097_27169[(2)] = null);
(statearr_27097_27169[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (28)))
{var inst_26990 = (state_27050[(21)]);var inst_27009 = (state_27050[(25)]);var inst_27009__$1 = cljs.core.seq(inst_26990);var state_27050__$1 = (function (){var statearr_27098 = state_27050;(statearr_27098[(25)] = inst_27009__$1);
return statearr_27098;
})();if(inst_27009__$1)
{var statearr_27099_27170 = state_27050__$1;(statearr_27099_27170[(1)] = (33));
} else
{var statearr_27100_27171 = state_27050__$1;(statearr_27100_27171[(1)] = (34));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (25)))
{var inst_26992 = (state_27050[(20)]);var inst_26993 = (state_27050[(11)]);var inst_26995 = (inst_26993 < inst_26992);var inst_26996 = inst_26995;var state_27050__$1 = state_27050;if(cljs.core.truth_(inst_26996))
{var statearr_27101_27172 = state_27050__$1;(statearr_27101_27172[(1)] = (27));
} else
{var statearr_27102_27173 = state_27050__$1;(statearr_27102_27173[(1)] = (28));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (34)))
{var state_27050__$1 = state_27050;var statearr_27103_27174 = state_27050__$1;(statearr_27103_27174[(2)] = null);
(statearr_27103_27174[(1)] = (35));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (17)))
{var state_27050__$1 = state_27050;var statearr_27104_27175 = state_27050__$1;(statearr_27104_27175[(2)] = null);
(statearr_27104_27175[(1)] = (18));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (3)))
{var inst_27048 = (state_27050[(2)]);var state_27050__$1 = state_27050;return cljs.core.async.impl.ioc_helpers.return_chan(state_27050__$1,inst_27048);
} else
{if((state_val_27051 === (12)))
{var inst_26977 = (state_27050[(2)]);var state_27050__$1 = state_27050;var statearr_27105_27176 = state_27050__$1;(statearr_27105_27176[(2)] = inst_26977);
(statearr_27105_27176[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (2)))
{var state_27050__$1 = state_27050;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27050__$1,(4),ch);
} else
{if((state_val_27051 === (23)))
{var state_27050__$1 = state_27050;var statearr_27106_27177 = state_27050__$1;(statearr_27106_27177[(2)] = null);
(statearr_27106_27177[(1)] = (24));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (35)))
{var inst_27032 = (state_27050[(2)]);var state_27050__$1 = state_27050;var statearr_27107_27178 = state_27050__$1;(statearr_27107_27178[(2)] = inst_27032);
(statearr_27107_27178[(1)] = (29));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (19)))
{var inst_26951 = (state_27050[(7)]);var inst_26955 = cljs.core.chunk_first(inst_26951);var inst_26956 = cljs.core.chunk_rest(inst_26951);var inst_26957 = cljs.core.count(inst_26955);var inst_26931 = inst_26956;var inst_26932 = inst_26955;var inst_26933 = inst_26957;var inst_26934 = (0);var state_27050__$1 = (function (){var statearr_27108 = state_27050;(statearr_27108[(13)] = inst_26931);
(statearr_27108[(15)] = inst_26934);
(statearr_27108[(16)] = inst_26933);
(statearr_27108[(17)] = inst_26932);
return statearr_27108;
})();var statearr_27109_27179 = state_27050__$1;(statearr_27109_27179[(2)] = null);
(statearr_27109_27179[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (11)))
{var inst_26931 = (state_27050[(13)]);var inst_26951 = (state_27050[(7)]);var inst_26951__$1 = cljs.core.seq(inst_26931);var state_27050__$1 = (function (){var statearr_27110 = state_27050;(statearr_27110[(7)] = inst_26951__$1);
return statearr_27110;
})();if(inst_26951__$1)
{var statearr_27111_27180 = state_27050__$1;(statearr_27111_27180[(1)] = (16));
} else
{var statearr_27112_27181 = state_27050__$1;(statearr_27112_27181[(1)] = (17));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (9)))
{var inst_26979 = (state_27050[(2)]);var state_27050__$1 = state_27050;var statearr_27113_27182 = state_27050__$1;(statearr_27113_27182[(2)] = inst_26979);
(statearr_27113_27182[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (5)))
{var inst_26929 = (function (){var G__27114 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27114) : cljs.core.deref.call(null,G__27114));
})();var inst_26930 = cljs.core.seq(inst_26929);var inst_26931 = inst_26930;var inst_26932 = null;var inst_26933 = (0);var inst_26934 = (0);var state_27050__$1 = (function (){var statearr_27115 = state_27050;(statearr_27115[(13)] = inst_26931);
(statearr_27115[(15)] = inst_26934);
(statearr_27115[(16)] = inst_26933);
(statearr_27115[(17)] = inst_26932);
return statearr_27115;
})();var statearr_27116_27183 = state_27050__$1;(statearr_27116_27183[(2)] = null);
(statearr_27116_27183[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (14)))
{var state_27050__$1 = state_27050;var statearr_27117_27184 = state_27050__$1;(statearr_27117_27184[(2)] = null);
(statearr_27117_27184[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (45)))
{var inst_27040 = (state_27050[(2)]);var state_27050__$1 = state_27050;var statearr_27118_27185 = state_27050__$1;(statearr_27118_27185[(2)] = inst_27040);
(statearr_27118_27185[(1)] = (44));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (26)))
{var inst_26982 = (state_27050[(29)]);var inst_27036 = (state_27050[(2)]);var inst_27037 = cljs.core.seq(inst_26982);var state_27050__$1 = (function (){var statearr_27119 = state_27050;(statearr_27119[(31)] = inst_27036);
return statearr_27119;
})();if(inst_27037)
{var statearr_27120_27186 = state_27050__$1;(statearr_27120_27186[(1)] = (42));
} else
{var statearr_27121_27187 = state_27050__$1;(statearr_27121_27187[(1)] = (43));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (16)))
{var inst_26951 = (state_27050[(7)]);var inst_26953 = cljs.core.chunked_seq_QMARK_(inst_26951);var state_27050__$1 = state_27050;if(inst_26953)
{var statearr_27122_27188 = state_27050__$1;(statearr_27122_27188[(1)] = (19));
} else
{var statearr_27123_27189 = state_27050__$1;(statearr_27123_27189[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (38)))
{var inst_27029 = (state_27050[(2)]);var state_27050__$1 = state_27050;var statearr_27124_27190 = state_27050__$1;(statearr_27124_27190[(2)] = inst_27029);
(statearr_27124_27190[(1)] = (35));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (30)))
{var state_27050__$1 = state_27050;var statearr_27125_27191 = state_27050__$1;(statearr_27125_27191[(2)] = null);
(statearr_27125_27191[(1)] = (32));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (10)))
{var inst_26934 = (state_27050[(15)]);var inst_26932 = (state_27050[(17)]);var inst_26940 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26932,inst_26934);var inst_26941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26940,(0),null);var inst_26942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26940,(1),null);var state_27050__$1 = (function (){var statearr_27126 = state_27050;(statearr_27126[(26)] = inst_26941);
return statearr_27126;
})();if(cljs.core.truth_(inst_26942))
{var statearr_27127_27192 = state_27050__$1;(statearr_27127_27192[(1)] = (13));
} else
{var statearr_27128_27193 = state_27050__$1;(statearr_27128_27193[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (18)))
{var inst_26975 = (state_27050[(2)]);var state_27050__$1 = state_27050;var statearr_27129_27194 = state_27050__$1;(statearr_27129_27194[(2)] = inst_26975);
(statearr_27129_27194[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (42)))
{var state_27050__$1 = state_27050;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27050__$1,(45),dchan);
} else
{if((state_val_27051 === (37)))
{var inst_27018 = (state_27050[(23)]);var inst_26922 = (state_27050[(12)]);var inst_27009 = (state_27050[(25)]);var inst_27018__$1 = cljs.core.first(inst_27009);var inst_27019 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27018__$1,inst_26922,done);var state_27050__$1 = (function (){var statearr_27130 = state_27050;(statearr_27130[(23)] = inst_27018__$1);
return statearr_27130;
})();if(cljs.core.truth_(inst_27019))
{var statearr_27131_27195 = state_27050__$1;(statearr_27131_27195[(1)] = (39));
} else
{var statearr_27132_27196 = state_27050__$1;(statearr_27132_27196[(1)] = (40));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27051 === (8)))
{var inst_26934 = (state_27050[(15)]);var inst_26933 = (state_27050[(16)]);var inst_26936 = (inst_26934 < inst_26933);var inst_26937 = inst_26936;var state_27050__$1 = state_27050;if(cljs.core.truth_(inst_26937))
{var statearr_27133_27197 = state_27050__$1;(statearr_27133_27197[(1)] = (10));
} else
{var statearr_27134_27198 = state_27050__$1;(statearr_27134_27198[(1)] = (11));
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
});})(c__5861__auto___27144,cs,m,dchan,dctr,done))
;return ((function (switch__5846__auto__,c__5861__auto___27144,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_27138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27138[(0)] = state_machine__5847__auto__);
(statearr_27138[(1)] = (1));
return statearr_27138;
});
var state_machine__5847__auto____1 = (function (state_27050){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_27050);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e27139){if((e27139 instanceof Object))
{var ex__5850__auto__ = e27139;var statearr_27140_27199 = state_27050;(statearr_27140_27199[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27050);
return cljs.core.constant$keyword$16;
} else
{throw e27139;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__27200 = state_27050;
state_27050 = G__27200;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_27050){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_27050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___27144,cs,m,dchan,dctr,done))
})();var state__5863__auto__ = (function (){var statearr_27141 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_27141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___27144);
return statearr_27141;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___27144,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj27205 = {};return obj27205;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3666__auto__ = m;if(and__3666__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3666__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4315__auto__ = (((m == null))?null:m);return (function (){var or__3678__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__27209 = x__4315__auto__;return goog.typeOf(G__27209);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3666__auto__ = m;if(and__3666__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3666__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4315__auto__ = (((m == null))?null:m);return (function (){var or__3678__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__27213 = x__4315__auto__;return goog.typeOf(G__27213);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3666__auto__ = m;if(and__3666__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3666__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4315__auto__ = (((m == null))?null:m);return (function (){var or__3678__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__27217 = x__4315__auto__;return goog.typeOf(G__27217);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3666__auto__ = m;if(and__3666__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3666__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4315__auto__ = (((m == null))?null:m);return (function (){var or__3678__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__27221 = x__4315__auto__;return goog.typeOf(G__27221);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3666__auto__ = m;if(and__3666__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3666__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4315__auto__ = (((m == null))?null:m);return (function (){var or__3678__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__27225 = x__4315__auto__;return goog.typeOf(G__27225);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__27226){var map__27232 = p__27226;var map__27232__$1 = ((cljs.core.seq_QMARK_(map__27232))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27232):map__27232);var opts = map__27232__$1;var statearr_27233_27237 = state;(statearr_27233_27237[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4222__auto__ = cljs.core.async.do_alts(((function (map__27232,map__27232__$1,opts){
return (function (val){var statearr_27234_27238 = state;(statearr_27234_27238[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__27232,map__27232__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4222__auto__))
{var cb = temp__4222__auto__;var statearr_27235_27239 = state;(statearr_27235_27239[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__27236 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27236) : cljs.core.deref.call(null,G__27236));
})());
return cljs.core.constant$keyword$16;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__27226 = null;if (arguments.length > 3) {
  p__27226 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__27226);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__27240){
var state = cljs.core.first(arglist__27240);
arglist__27240 = cljs.core.next(arglist__27240);
var cont_block = cljs.core.first(arglist__27240);
arglist__27240 = cljs.core.next(arglist__27240);
var ports = cljs.core.first(arglist__27240);
var p__27226 = cljs.core.rest(arglist__27240);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__27226);
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__27374 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27374) : cljs.core.atom.call(null,G__27374));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$26,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$27);var solo_mode = (function (){var G__27375 = cljs.core.constant$keyword$26;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27375) : cljs.core.atom.call(null,G__27375));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__27376 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__27376) : attr.call(null,G__27376));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__27377 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27377) : cljs.core.deref.call(null,G__27377));
})();var mode = (function (){var G__27378 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27378) : cljs.core.deref.call(null,G__27378));
})();var solos = pick(cljs.core.constant$keyword$27,chs);var pauses = pick(cljs.core.constant$keyword$25,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$28,solos,cljs.core.constant$keyword$29,pick(cljs.core.constant$keyword$26,chs),cljs.core.constant$keyword$30,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$25)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t27379 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27379 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27380){
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
this.meta27380 = meta27380;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27379.cljs$lang$type = true;
cljs.core.async.t27379.cljs$lang$ctorStr = "cljs.core.async/t27379";
cljs.core.async.t27379.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core.async/t27379");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27379.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t27379.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27379.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27379.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__27382_27507 = self__.cs;var G__27383_27508 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27382_27507,G__27383_27508) : cljs.core.reset_BANG_.call(null,G__27382_27507,G__27383_27508));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27379.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27379.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__27384 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__27384) : self__.solo_modes.call(null,G__27384));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__27385_27509 = self__.solo_mode;var G__27386_27510 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27385_27509,G__27386_27510) : cljs.core.reset_BANG_.call(null,G__27385_27509,G__27386_27510));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27379.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27379.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27379.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27381){var self__ = this;
var _27381__$1 = this;return self__.meta27380;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27381,meta27380__$1){var self__ = this;
var _27381__$1 = this;return (new cljs.core.async.t27379(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27380__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t27379 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27379(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27380){return (new cljs.core.async.t27379(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27380));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t27379(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5861__auto___27511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___27511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___27511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27458){var state_val_27459 = (state_27458[(1)]);if((state_val_27459 === (7)))
{var inst_27400 = (state_27458[(7)]);var inst_27405 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27400);var state_27458__$1 = state_27458;var statearr_27460_27512 = state_27458__$1;(statearr_27460_27512[(2)] = inst_27405);
(statearr_27460_27512[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (20)))
{var inst_27415 = (state_27458[(8)]);var state_27458__$1 = state_27458;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27458__$1,(23),out,inst_27415);
} else
{if((state_val_27459 === (1)))
{var inst_27390 = (state_27458[(9)]);var inst_27390__$1 = calc_state();var inst_27391 = cljs.core.seq_QMARK_(inst_27390__$1);var state_27458__$1 = (function (){var statearr_27461 = state_27458;(statearr_27461[(9)] = inst_27390__$1);
return statearr_27461;
})();if(inst_27391)
{var statearr_27462_27513 = state_27458__$1;(statearr_27462_27513[(1)] = (2));
} else
{var statearr_27463_27514 = state_27458__$1;(statearr_27463_27514[(1)] = (3));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (24)))
{var inst_27408 = (state_27458[(10)]);var inst_27400 = inst_27408;var state_27458__$1 = (function (){var statearr_27464 = state_27458;(statearr_27464[(7)] = inst_27400);
return statearr_27464;
})();var statearr_27465_27515 = state_27458__$1;(statearr_27465_27515[(2)] = null);
(statearr_27465_27515[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (4)))
{var inst_27390 = (state_27458[(9)]);var inst_27396 = (state_27458[(2)]);var inst_27397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27396,cljs.core.constant$keyword$30);var inst_27398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27396,cljs.core.constant$keyword$29);var inst_27399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27396,cljs.core.constant$keyword$28);var inst_27400 = inst_27390;var state_27458__$1 = (function (){var statearr_27466 = state_27458;(statearr_27466[(11)] = inst_27397);
(statearr_27466[(12)] = inst_27398);
(statearr_27466[(13)] = inst_27399);
(statearr_27466[(7)] = inst_27400);
return statearr_27466;
})();var statearr_27467_27516 = state_27458__$1;(statearr_27467_27516[(2)] = null);
(statearr_27467_27516[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (15)))
{var state_27458__$1 = state_27458;var statearr_27468_27517 = state_27458__$1;(statearr_27468_27517[(2)] = null);
(statearr_27468_27517[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (21)))
{var inst_27408 = (state_27458[(10)]);var inst_27400 = inst_27408;var state_27458__$1 = (function (){var statearr_27469 = state_27458;(statearr_27469[(7)] = inst_27400);
return statearr_27469;
})();var statearr_27470_27518 = state_27458__$1;(statearr_27470_27518[(2)] = null);
(statearr_27470_27518[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (13)))
{var inst_27454 = (state_27458[(2)]);var state_27458__$1 = state_27458;var statearr_27471_27519 = state_27458__$1;(statearr_27471_27519[(2)] = inst_27454);
(statearr_27471_27519[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (22)))
{var inst_27452 = (state_27458[(2)]);var state_27458__$1 = state_27458;var statearr_27472_27520 = state_27458__$1;(statearr_27472_27520[(2)] = inst_27452);
(statearr_27472_27520[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (6)))
{var inst_27456 = (state_27458[(2)]);var state_27458__$1 = state_27458;return cljs.core.async.impl.ioc_helpers.return_chan(state_27458__$1,inst_27456);
} else
{if((state_val_27459 === (25)))
{var state_27458__$1 = state_27458;var statearr_27473_27521 = state_27458__$1;(statearr_27473_27521[(2)] = null);
(statearr_27473_27521[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (17)))
{var inst_27431 = (state_27458[(14)]);var state_27458__$1 = state_27458;var statearr_27474_27522 = state_27458__$1;(statearr_27474_27522[(2)] = inst_27431);
(statearr_27474_27522[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (3)))
{var inst_27390 = (state_27458[(9)]);var state_27458__$1 = state_27458;var statearr_27475_27523 = state_27458__$1;(statearr_27475_27523[(2)] = inst_27390);
(statearr_27475_27523[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (12)))
{var inst_27411 = (state_27458[(15)]);var inst_27416 = (state_27458[(16)]);var inst_27431 = (state_27458[(14)]);var inst_27431__$1 = (function (){var G__27476 = inst_27416;return (inst_27411.cljs$core$IFn$_invoke$arity$1 ? inst_27411.cljs$core$IFn$_invoke$arity$1(G__27476) : inst_27411.call(null,G__27476));
})();var state_27458__$1 = (function (){var statearr_27477 = state_27458;(statearr_27477[(14)] = inst_27431__$1);
return statearr_27477;
})();if(cljs.core.truth_(inst_27431__$1))
{var statearr_27478_27524 = state_27458__$1;(statearr_27478_27524[(1)] = (17));
} else
{var statearr_27479_27525 = state_27458__$1;(statearr_27479_27525[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (2)))
{var inst_27390 = (state_27458[(9)]);var inst_27393 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27390);var state_27458__$1 = state_27458;var statearr_27480_27526 = state_27458__$1;(statearr_27480_27526[(2)] = inst_27393);
(statearr_27480_27526[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (23)))
{var inst_27443 = (state_27458[(2)]);var state_27458__$1 = state_27458;if(cljs.core.truth_(inst_27443))
{var statearr_27481_27527 = state_27458__$1;(statearr_27481_27527[(1)] = (24));
} else
{var statearr_27482_27528 = state_27458__$1;(statearr_27482_27528[(1)] = (25));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (19)))
{var inst_27440 = (state_27458[(2)]);var state_27458__$1 = state_27458;if(cljs.core.truth_(inst_27440))
{var statearr_27483_27529 = state_27458__$1;(statearr_27483_27529[(1)] = (20));
} else
{var statearr_27484_27530 = state_27458__$1;(statearr_27484_27530[(1)] = (21));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (11)))
{var inst_27415 = (state_27458[(8)]);var inst_27421 = (inst_27415 == null);var state_27458__$1 = state_27458;if(cljs.core.truth_(inst_27421))
{var statearr_27485_27531 = state_27458__$1;(statearr_27485_27531[(1)] = (14));
} else
{var statearr_27486_27532 = state_27458__$1;(statearr_27486_27532[(1)] = (15));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (9)))
{var inst_27408 = (state_27458[(10)]);var inst_27408__$1 = (state_27458[(2)]);var inst_27409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27408__$1,cljs.core.constant$keyword$30);var inst_27410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27408__$1,cljs.core.constant$keyword$29);var inst_27411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27408__$1,cljs.core.constant$keyword$28);var state_27458__$1 = (function (){var statearr_27487 = state_27458;(statearr_27487[(15)] = inst_27411);
(statearr_27487[(17)] = inst_27410);
(statearr_27487[(10)] = inst_27408__$1);
return statearr_27487;
})();return cljs.core.async.ioc_alts_BANG_(state_27458__$1,(10),inst_27409);
} else
{if((state_val_27459 === (5)))
{var inst_27400 = (state_27458[(7)]);var inst_27403 = cljs.core.seq_QMARK_(inst_27400);var state_27458__$1 = state_27458;if(inst_27403)
{var statearr_27488_27533 = state_27458__$1;(statearr_27488_27533[(1)] = (7));
} else
{var statearr_27489_27534 = state_27458__$1;(statearr_27489_27534[(1)] = (8));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (14)))
{var inst_27416 = (state_27458[(16)]);var inst_27423 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_27416);var state_27458__$1 = state_27458;var statearr_27490_27535 = state_27458__$1;(statearr_27490_27535[(2)] = inst_27423);
(statearr_27490_27535[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (26)))
{var inst_27448 = (state_27458[(2)]);var state_27458__$1 = state_27458;var statearr_27491_27536 = state_27458__$1;(statearr_27491_27536[(2)] = inst_27448);
(statearr_27491_27536[(1)] = (22));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (16)))
{var inst_27426 = (state_27458[(2)]);var inst_27427 = calc_state();var inst_27400 = inst_27427;var state_27458__$1 = (function (){var statearr_27492 = state_27458;(statearr_27492[(18)] = inst_27426);
(statearr_27492[(7)] = inst_27400);
return statearr_27492;
})();var statearr_27493_27537 = state_27458__$1;(statearr_27493_27537[(2)] = null);
(statearr_27493_27537[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (10)))
{var inst_27415 = (state_27458[(8)]);var inst_27416 = (state_27458[(16)]);var inst_27414 = (state_27458[(2)]);var inst_27415__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27414,(0),null);var inst_27416__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27414,(1),null);var inst_27417 = (inst_27415__$1 == null);var inst_27418 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27416__$1,change);var inst_27419 = (inst_27417) || (inst_27418);var state_27458__$1 = (function (){var statearr_27494 = state_27458;(statearr_27494[(8)] = inst_27415__$1);
(statearr_27494[(16)] = inst_27416__$1);
return statearr_27494;
})();if(cljs.core.truth_(inst_27419))
{var statearr_27495_27538 = state_27458__$1;(statearr_27495_27538[(1)] = (11));
} else
{var statearr_27496_27539 = state_27458__$1;(statearr_27496_27539[(1)] = (12));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (18)))
{var inst_27411 = (state_27458[(15)]);var inst_27410 = (state_27458[(17)]);var inst_27416 = (state_27458[(16)]);var inst_27435 = cljs.core.empty_QMARK_(inst_27411);var inst_27436 = (function (){var G__27497 = inst_27416;return (inst_27410.cljs$core$IFn$_invoke$arity$1 ? inst_27410.cljs$core$IFn$_invoke$arity$1(G__27497) : inst_27410.call(null,G__27497));
})();var inst_27437 = cljs.core.not(inst_27436);var inst_27438 = (inst_27435) && (inst_27437);var state_27458__$1 = state_27458;var statearr_27498_27540 = state_27458__$1;(statearr_27498_27540[(2)] = inst_27438);
(statearr_27498_27540[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27459 === (8)))
{var inst_27400 = (state_27458[(7)]);var state_27458__$1 = state_27458;var statearr_27499_27541 = state_27458__$1;(statearr_27499_27541[(2)] = inst_27400);
(statearr_27499_27541[(1)] = (9));
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
});})(c__5861__auto___27511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5846__auto__,c__5861__auto___27511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_27503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27503[(0)] = state_machine__5847__auto__);
(statearr_27503[(1)] = (1));
return statearr_27503;
});
var state_machine__5847__auto____1 = (function (state_27458){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_27458);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e27504){if((e27504 instanceof Object))
{var ex__5850__auto__ = e27504;var statearr_27505_27542 = state_27458;(statearr_27505_27542[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27458);
return cljs.core.constant$keyword$16;
} else
{throw e27504;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__27543 = state_27458;
state_27458 = G__27543;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_27458){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_27458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___27511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5863__auto__ = (function (){var statearr_27506 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_27506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___27511);
return statearr_27506;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___27511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj27545 = {};return obj27545;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3666__auto__ = p;if(and__3666__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3666__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4315__auto__ = (((p == null))?null:p);return (function (){var or__3678__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__27549 = x__4315__auto__;return goog.typeOf(G__27549);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3666__auto__ = p;if(and__3666__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3666__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4315__auto__ = (((p == null))?null:p);return (function (){var or__3678__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__27553 = x__4315__auto__;return goog.typeOf(G__27553);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3666__auto__ = p;if(and__3666__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3666__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4315__auto__ = (((p == null))?null:p);return (function (){var or__3678__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__27559 = x__4315__auto__;return goog.typeOf(G__27559);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3666__auto__ = p;if(and__3666__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3666__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4315__auto__ = (((p == null))?null:p);return (function (){var or__3678__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__27561 = x__4315__auto__;return goog.typeOf(G__27561);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__27700 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27700) : cljs.core.atom.call(null,G__27700));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3678__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__27702 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27702) : cljs.core.deref.call(null,G__27702));
})(),topic);if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3678__auto__,mults){
return (function (p1__27562_SHARP_){if(cljs.core.truth_((function (){var G__27703 = topic;return (p1__27562_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27562_SHARP_.cljs$core$IFn$_invoke$arity$1(G__27703) : p1__27562_SHARP_.call(null,G__27703));
})()))
{return p1__27562_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27562_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__27704 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__27704) : buf_fn.call(null,G__27704));
})())));
}
});})(or__3678__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27705 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27705 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27706){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27706 = meta27706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27705.cljs$lang$type = true;
cljs.core.async.t27705.cljs$lang$ctorStr = "cljs.core.async/t27705";
cljs.core.async.t27705.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core.async/t27705");
});})(mults,ensure_mult))
;
cljs.core.async.t27705.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27705.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__27708 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__27708) : self__.ensure_mult.call(null,G__27708));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27705.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4222__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__27709 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27709) : cljs.core.deref.call(null,G__27709));
})(),topic);if(cljs.core.truth_(temp__4222__auto__))
{var m = temp__4222__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__27710 = self__.mults;var G__27711 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27710,G__27711) : cljs.core.reset_BANG_.call(null,G__27710,G__27711));
});})(mults,ensure_mult))
;
cljs.core.async.t27705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27705.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27705.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27707){var self__ = this;
var _27707__$1 = this;return self__.meta27706;
});})(mults,ensure_mult))
;
cljs.core.async.t27705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27707,meta27706__$1){var self__ = this;
var _27707__$1 = this;return (new cljs.core.async.t27705(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27706__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27705 = ((function (mults,ensure_mult){
return (function __GT_t27705(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27706){return (new cljs.core.async.t27705(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27706));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27705(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5861__auto___27834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___27834,mults,ensure_mult,p){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___27834,mults,ensure_mult,p){
return (function (state_27783){var state_val_27784 = (state_27783[(1)]);if((state_val_27784 === (7)))
{var inst_27779 = (state_27783[(2)]);var state_27783__$1 = state_27783;var statearr_27785_27835 = state_27783__$1;(statearr_27785_27835[(2)] = inst_27779);
(statearr_27785_27835[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (20)))
{var state_27783__$1 = state_27783;var statearr_27786_27836 = state_27783__$1;(statearr_27786_27836[(2)] = null);
(statearr_27786_27836[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (1)))
{var state_27783__$1 = state_27783;var statearr_27787_27837 = state_27783__$1;(statearr_27787_27837[(2)] = null);
(statearr_27787_27837[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (24)))
{var inst_27762 = (state_27783[(7)]);var inst_27771 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_27762);var state_27783__$1 = state_27783;var statearr_27788_27838 = state_27783__$1;(statearr_27788_27838[(2)] = inst_27771);
(statearr_27788_27838[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (4)))
{var inst_27714 = (state_27783[(8)]);var inst_27714__$1 = (state_27783[(2)]);var inst_27715 = (inst_27714__$1 == null);var state_27783__$1 = (function (){var statearr_27789 = state_27783;(statearr_27789[(8)] = inst_27714__$1);
return statearr_27789;
})();if(cljs.core.truth_(inst_27715))
{var statearr_27790_27839 = state_27783__$1;(statearr_27790_27839[(1)] = (5));
} else
{var statearr_27791_27840 = state_27783__$1;(statearr_27791_27840[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (15)))
{var inst_27756 = (state_27783[(2)]);var state_27783__$1 = state_27783;var statearr_27792_27841 = state_27783__$1;(statearr_27792_27841[(2)] = inst_27756);
(statearr_27792_27841[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (21)))
{var inst_27776 = (state_27783[(2)]);var state_27783__$1 = (function (){var statearr_27793 = state_27783;(statearr_27793[(9)] = inst_27776);
return statearr_27793;
})();var statearr_27794_27842 = state_27783__$1;(statearr_27794_27842[(2)] = null);
(statearr_27794_27842[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (13)))
{var inst_27738 = (state_27783[(10)]);var inst_27740 = cljs.core.chunked_seq_QMARK_(inst_27738);var state_27783__$1 = state_27783;if(inst_27740)
{var statearr_27795_27843 = state_27783__$1;(statearr_27795_27843[(1)] = (16));
} else
{var statearr_27796_27844 = state_27783__$1;(statearr_27796_27844[(1)] = (17));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (22)))
{var inst_27768 = (state_27783[(2)]);var state_27783__$1 = state_27783;if(cljs.core.truth_(inst_27768))
{var statearr_27797_27845 = state_27783__$1;(statearr_27797_27845[(1)] = (23));
} else
{var statearr_27798_27846 = state_27783__$1;(statearr_27798_27846[(1)] = (24));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (6)))
{var inst_27714 = (state_27783[(8)]);var inst_27762 = (state_27783[(7)]);var inst_27764 = (state_27783[(11)]);var inst_27762__$1 = (function (){var G__27799 = inst_27714;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__27799) : topic_fn.call(null,G__27799));
})();var inst_27763 = (function (){var G__27800 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27800) : cljs.core.deref.call(null,G__27800));
})();var inst_27764__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27763,inst_27762__$1);var state_27783__$1 = (function (){var statearr_27801 = state_27783;(statearr_27801[(7)] = inst_27762__$1);
(statearr_27801[(11)] = inst_27764__$1);
return statearr_27801;
})();if(cljs.core.truth_(inst_27764__$1))
{var statearr_27802_27847 = state_27783__$1;(statearr_27802_27847[(1)] = (19));
} else
{var statearr_27803_27848 = state_27783__$1;(statearr_27803_27848[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (25)))
{var inst_27773 = (state_27783[(2)]);var state_27783__$1 = state_27783;var statearr_27804_27849 = state_27783__$1;(statearr_27804_27849[(2)] = inst_27773);
(statearr_27804_27849[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (17)))
{var inst_27738 = (state_27783[(10)]);var inst_27747 = cljs.core.first(inst_27738);var inst_27748 = cljs.core.async.muxch_STAR_(inst_27747);var inst_27749 = cljs.core.async.close_BANG_(inst_27748);var inst_27750 = cljs.core.next(inst_27738);var inst_27724 = inst_27750;var inst_27725 = null;var inst_27726 = (0);var inst_27727 = (0);var state_27783__$1 = (function (){var statearr_27805 = state_27783;(statearr_27805[(12)] = inst_27724);
(statearr_27805[(13)] = inst_27727);
(statearr_27805[(14)] = inst_27726);
(statearr_27805[(15)] = inst_27725);
(statearr_27805[(16)] = inst_27749);
return statearr_27805;
})();var statearr_27806_27850 = state_27783__$1;(statearr_27806_27850[(2)] = null);
(statearr_27806_27850[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (3)))
{var inst_27781 = (state_27783[(2)]);var state_27783__$1 = state_27783;return cljs.core.async.impl.ioc_helpers.return_chan(state_27783__$1,inst_27781);
} else
{if((state_val_27784 === (12)))
{var inst_27758 = (state_27783[(2)]);var state_27783__$1 = state_27783;var statearr_27807_27851 = state_27783__$1;(statearr_27807_27851[(2)] = inst_27758);
(statearr_27807_27851[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (2)))
{var state_27783__$1 = state_27783;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27783__$1,(4),ch);
} else
{if((state_val_27784 === (23)))
{var state_27783__$1 = state_27783;var statearr_27808_27852 = state_27783__$1;(statearr_27808_27852[(2)] = null);
(statearr_27808_27852[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (19)))
{var inst_27714 = (state_27783[(8)]);var inst_27764 = (state_27783[(11)]);var inst_27766 = cljs.core.async.muxch_STAR_(inst_27764);var state_27783__$1 = state_27783;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27783__$1,(22),inst_27766,inst_27714);
} else
{if((state_val_27784 === (11)))
{var inst_27724 = (state_27783[(12)]);var inst_27738 = (state_27783[(10)]);var inst_27738__$1 = cljs.core.seq(inst_27724);var state_27783__$1 = (function (){var statearr_27809 = state_27783;(statearr_27809[(10)] = inst_27738__$1);
return statearr_27809;
})();if(inst_27738__$1)
{var statearr_27810_27853 = state_27783__$1;(statearr_27810_27853[(1)] = (13));
} else
{var statearr_27811_27854 = state_27783__$1;(statearr_27811_27854[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (9)))
{var inst_27760 = (state_27783[(2)]);var state_27783__$1 = state_27783;var statearr_27812_27855 = state_27783__$1;(statearr_27812_27855[(2)] = inst_27760);
(statearr_27812_27855[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (5)))
{var inst_27721 = (function (){var G__27813 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27813) : cljs.core.deref.call(null,G__27813));
})();var inst_27722 = cljs.core.vals(inst_27721);var inst_27723 = cljs.core.seq(inst_27722);var inst_27724 = inst_27723;var inst_27725 = null;var inst_27726 = (0);var inst_27727 = (0);var state_27783__$1 = (function (){var statearr_27814 = state_27783;(statearr_27814[(12)] = inst_27724);
(statearr_27814[(13)] = inst_27727);
(statearr_27814[(14)] = inst_27726);
(statearr_27814[(15)] = inst_27725);
return statearr_27814;
})();var statearr_27815_27856 = state_27783__$1;(statearr_27815_27856[(2)] = null);
(statearr_27815_27856[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (14)))
{var state_27783__$1 = state_27783;var statearr_27819_27857 = state_27783__$1;(statearr_27819_27857[(2)] = null);
(statearr_27819_27857[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (16)))
{var inst_27738 = (state_27783[(10)]);var inst_27742 = cljs.core.chunk_first(inst_27738);var inst_27743 = cljs.core.chunk_rest(inst_27738);var inst_27744 = cljs.core.count(inst_27742);var inst_27724 = inst_27743;var inst_27725 = inst_27742;var inst_27726 = inst_27744;var inst_27727 = (0);var state_27783__$1 = (function (){var statearr_27820 = state_27783;(statearr_27820[(12)] = inst_27724);
(statearr_27820[(13)] = inst_27727);
(statearr_27820[(14)] = inst_27726);
(statearr_27820[(15)] = inst_27725);
return statearr_27820;
})();var statearr_27821_27858 = state_27783__$1;(statearr_27821_27858[(2)] = null);
(statearr_27821_27858[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (10)))
{var inst_27724 = (state_27783[(12)]);var inst_27727 = (state_27783[(13)]);var inst_27726 = (state_27783[(14)]);var inst_27725 = (state_27783[(15)]);var inst_27732 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27725,inst_27727);var inst_27733 = cljs.core.async.muxch_STAR_(inst_27732);var inst_27734 = cljs.core.async.close_BANG_(inst_27733);var inst_27735 = (inst_27727 + (1));var tmp27816 = inst_27724;var tmp27817 = inst_27726;var tmp27818 = inst_27725;var inst_27724__$1 = tmp27816;var inst_27725__$1 = tmp27818;var inst_27726__$1 = tmp27817;var inst_27727__$1 = inst_27735;var state_27783__$1 = (function (){var statearr_27822 = state_27783;(statearr_27822[(12)] = inst_27724__$1);
(statearr_27822[(17)] = inst_27734);
(statearr_27822[(13)] = inst_27727__$1);
(statearr_27822[(14)] = inst_27726__$1);
(statearr_27822[(15)] = inst_27725__$1);
return statearr_27822;
})();var statearr_27823_27859 = state_27783__$1;(statearr_27823_27859[(2)] = null);
(statearr_27823_27859[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (18)))
{var inst_27753 = (state_27783[(2)]);var state_27783__$1 = state_27783;var statearr_27824_27860 = state_27783__$1;(statearr_27824_27860[(2)] = inst_27753);
(statearr_27824_27860[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27784 === (8)))
{var inst_27727 = (state_27783[(13)]);var inst_27726 = (state_27783[(14)]);var inst_27729 = (inst_27727 < inst_27726);var inst_27730 = inst_27729;var state_27783__$1 = state_27783;if(cljs.core.truth_(inst_27730))
{var statearr_27825_27861 = state_27783__$1;(statearr_27825_27861[(1)] = (10));
} else
{var statearr_27826_27862 = state_27783__$1;(statearr_27826_27862[(1)] = (11));
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
});})(c__5861__auto___27834,mults,ensure_mult,p))
;return ((function (switch__5846__auto__,c__5861__auto___27834,mults,ensure_mult,p){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_27830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27830[(0)] = state_machine__5847__auto__);
(statearr_27830[(1)] = (1));
return statearr_27830;
});
var state_machine__5847__auto____1 = (function (state_27783){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_27783);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e27831){if((e27831 instanceof Object))
{var ex__5850__auto__ = e27831;var statearr_27832_27863 = state_27783;(statearr_27832_27863[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27783);
return cljs.core.constant$keyword$16;
} else
{throw e27831;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__27864 = state_27783;
state_27783 = G__27864;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_27783){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_27783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___27834,mults,ensure_mult,p))
})();var state__5863__auto__ = (function (){var statearr_27833 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_27833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___27834);
return statearr_27833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___27834,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__27945 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27945) : cljs.core.atom.call(null,G__27945));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5861__auto___28018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___28018,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___28018,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27984){var state_val_27985 = (state_27984[(1)]);if((state_val_27985 === (7)))
{var state_27984__$1 = state_27984;var statearr_27986_28019 = state_27984__$1;(statearr_27986_28019[(2)] = null);
(statearr_27986_28019[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27985 === (1)))
{var state_27984__$1 = state_27984;var statearr_27987_28020 = state_27984__$1;(statearr_27987_28020[(2)] = null);
(statearr_27987_28020[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27985 === (4)))
{var inst_27948 = (state_27984[(7)]);var inst_27950 = (inst_27948 < cnt);var state_27984__$1 = state_27984;if(cljs.core.truth_(inst_27950))
{var statearr_27988_28021 = state_27984__$1;(statearr_27988_28021[(1)] = (6));
} else
{var statearr_27989_28022 = state_27984__$1;(statearr_27989_28022[(1)] = (7));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27985 === (15)))
{var inst_27980 = (state_27984[(2)]);var state_27984__$1 = state_27984;var statearr_27990_28023 = state_27984__$1;(statearr_27990_28023[(2)] = inst_27980);
(statearr_27990_28023[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27985 === (13)))
{var inst_27973 = cljs.core.async.close_BANG_(out);var state_27984__$1 = state_27984;var statearr_27991_28024 = state_27984__$1;(statearr_27991_28024[(2)] = inst_27973);
(statearr_27991_28024[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27985 === (6)))
{var state_27984__$1 = state_27984;var statearr_27992_28025 = state_27984__$1;(statearr_27992_28025[(2)] = null);
(statearr_27992_28025[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27985 === (3)))
{var inst_27982 = (state_27984[(2)]);var state_27984__$1 = state_27984;return cljs.core.async.impl.ioc_helpers.return_chan(state_27984__$1,inst_27982);
} else
{if((state_val_27985 === (12)))
{var inst_27970 = (state_27984[(8)]);var inst_27970__$1 = (state_27984[(2)]);var inst_27971 = cljs.core.some(cljs.core.nil_QMARK_,inst_27970__$1);var state_27984__$1 = (function (){var statearr_27993 = state_27984;(statearr_27993[(8)] = inst_27970__$1);
return statearr_27993;
})();if(cljs.core.truth_(inst_27971))
{var statearr_27994_28026 = state_27984__$1;(statearr_27994_28026[(1)] = (13));
} else
{var statearr_27995_28027 = state_27984__$1;(statearr_27995_28027[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27985 === (2)))
{var inst_27947 = (function (){var G__27996 = dctr;var G__27997 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27996,G__27997) : cljs.core.reset_BANG_.call(null,G__27996,G__27997));
})();var inst_27948 = (0);var state_27984__$1 = (function (){var statearr_27998 = state_27984;(statearr_27998[(7)] = inst_27948);
(statearr_27998[(9)] = inst_27947);
return statearr_27998;
})();var statearr_27999_28028 = state_27984__$1;(statearr_27999_28028[(2)] = null);
(statearr_27999_28028[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27985 === (11)))
{var inst_27948 = (state_27984[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_27984,(10),Object,null,(9));var inst_27957 = (function (){var G__28000 = inst_27948;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__28000) : chs__$1.call(null,G__28000));
})();var inst_27958 = (function (){var G__28001 = inst_27948;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__28001) : done.call(null,G__28001));
})();var inst_27959 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_27957,inst_27958);var state_27984__$1 = state_27984;var statearr_28002_28029 = state_27984__$1;(statearr_28002_28029[(2)] = inst_27959);
cljs.core.async.impl.ioc_helpers.process_exception(state_27984__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_27985 === (9)))
{var inst_27948 = (state_27984[(7)]);var inst_27961 = (state_27984[(2)]);var inst_27962 = (inst_27948 + (1));var inst_27948__$1 = inst_27962;var state_27984__$1 = (function (){var statearr_28003 = state_27984;(statearr_28003[(10)] = inst_27961);
(statearr_28003[(7)] = inst_27948__$1);
return statearr_28003;
})();var statearr_28004_28030 = state_27984__$1;(statearr_28004_28030[(2)] = null);
(statearr_28004_28030[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27985 === (5)))
{var inst_27968 = (state_27984[(2)]);var state_27984__$1 = (function (){var statearr_28005 = state_27984;(statearr_28005[(11)] = inst_27968);
return statearr_28005;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27984__$1,(12),dchan);
} else
{if((state_val_27985 === (14)))
{var inst_27970 = (state_27984[(8)]);var inst_27975 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_27970);var state_27984__$1 = state_27984;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27984__$1,(16),out,inst_27975);
} else
{if((state_val_27985 === (16)))
{var inst_27977 = (state_27984[(2)]);var state_27984__$1 = (function (){var statearr_28006 = state_27984;(statearr_28006[(12)] = inst_27977);
return statearr_28006;
})();var statearr_28007_28031 = state_27984__$1;(statearr_28007_28031[(2)] = null);
(statearr_28007_28031[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27985 === (10)))
{var inst_27952 = (state_27984[(2)]);var inst_27953 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_27984__$1 = (function (){var statearr_28008 = state_27984;(statearr_28008[(13)] = inst_27952);
return statearr_28008;
})();var statearr_28009_28032 = state_27984__$1;(statearr_28009_28032[(2)] = inst_27953);
cljs.core.async.impl.ioc_helpers.process_exception(state_27984__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_27985 === (8)))
{var inst_27966 = (state_27984[(2)]);var state_27984__$1 = state_27984;var statearr_28010_28033 = state_27984__$1;(statearr_28010_28033[(2)] = inst_27966);
(statearr_28010_28033[(1)] = (5));
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
});})(c__5861__auto___28018,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5846__auto__,c__5861__auto___28018,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_28014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28014[(0)] = state_machine__5847__auto__);
(statearr_28014[(1)] = (1));
return statearr_28014;
});
var state_machine__5847__auto____1 = (function (state_27984){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_27984);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e28015){if((e28015 instanceof Object))
{var ex__5850__auto__ = e28015;var statearr_28016_28034 = state_27984;(statearr_28016_28034[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27984);
return cljs.core.constant$keyword$16;
} else
{throw e28015;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__28035 = state_27984;
state_27984 = G__28035;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_27984){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_27984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___28018,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5863__auto__ = (function (){var statearr_28017 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_28017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___28018);
return statearr_28017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___28018,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___28145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___28145,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___28145,out){
return (function (state_28121){var state_val_28122 = (state_28121[(1)]);if((state_val_28122 === (7)))
{var inst_28101 = (state_28121[(7)]);var inst_28100 = (state_28121[(8)]);var inst_28100__$1 = (state_28121[(2)]);var inst_28101__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28100__$1,(0),null);var inst_28102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28100__$1,(1),null);var inst_28103 = (inst_28101__$1 == null);var state_28121__$1 = (function (){var statearr_28123 = state_28121;(statearr_28123[(9)] = inst_28102);
(statearr_28123[(7)] = inst_28101__$1);
(statearr_28123[(8)] = inst_28100__$1);
return statearr_28123;
})();if(cljs.core.truth_(inst_28103))
{var statearr_28124_28146 = state_28121__$1;(statearr_28124_28146[(1)] = (8));
} else
{var statearr_28125_28147 = state_28121__$1;(statearr_28125_28147[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28122 === (1)))
{var inst_28092 = cljs.core.vec(chs);var inst_28093 = inst_28092;var state_28121__$1 = (function (){var statearr_28126 = state_28121;(statearr_28126[(10)] = inst_28093);
return statearr_28126;
})();var statearr_28127_28148 = state_28121__$1;(statearr_28127_28148[(2)] = null);
(statearr_28127_28148[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28122 === (4)))
{var inst_28093 = (state_28121[(10)]);var state_28121__$1 = state_28121;return cljs.core.async.ioc_alts_BANG_(state_28121__$1,(7),inst_28093);
} else
{if((state_val_28122 === (6)))
{var inst_28117 = (state_28121[(2)]);var state_28121__$1 = state_28121;var statearr_28128_28149 = state_28121__$1;(statearr_28128_28149[(2)] = inst_28117);
(statearr_28128_28149[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28122 === (3)))
{var inst_28119 = (state_28121[(2)]);var state_28121__$1 = state_28121;return cljs.core.async.impl.ioc_helpers.return_chan(state_28121__$1,inst_28119);
} else
{if((state_val_28122 === (2)))
{var inst_28093 = (state_28121[(10)]);var inst_28095 = cljs.core.count(inst_28093);var inst_28096 = (inst_28095 > (0));var state_28121__$1 = state_28121;if(cljs.core.truth_(inst_28096))
{var statearr_28130_28150 = state_28121__$1;(statearr_28130_28150[(1)] = (4));
} else
{var statearr_28131_28151 = state_28121__$1;(statearr_28131_28151[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28122 === (11)))
{var inst_28093 = (state_28121[(10)]);var inst_28110 = (state_28121[(2)]);var tmp28129 = inst_28093;var inst_28093__$1 = tmp28129;var state_28121__$1 = (function (){var statearr_28132 = state_28121;(statearr_28132[(11)] = inst_28110);
(statearr_28132[(10)] = inst_28093__$1);
return statearr_28132;
})();var statearr_28133_28152 = state_28121__$1;(statearr_28133_28152[(2)] = null);
(statearr_28133_28152[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28122 === (9)))
{var inst_28101 = (state_28121[(7)]);var state_28121__$1 = state_28121;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28121__$1,(11),out,inst_28101);
} else
{if((state_val_28122 === (5)))
{var inst_28115 = cljs.core.async.close_BANG_(out);var state_28121__$1 = state_28121;var statearr_28134_28153 = state_28121__$1;(statearr_28134_28153[(2)] = inst_28115);
(statearr_28134_28153[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28122 === (10)))
{var inst_28113 = (state_28121[(2)]);var state_28121__$1 = state_28121;var statearr_28135_28154 = state_28121__$1;(statearr_28135_28154[(2)] = inst_28113);
(statearr_28135_28154[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28122 === (8)))
{var inst_28102 = (state_28121[(9)]);var inst_28101 = (state_28121[(7)]);var inst_28093 = (state_28121[(10)]);var inst_28100 = (state_28121[(8)]);var inst_28105 = (function (){var c = inst_28102;var v = inst_28101;var vec__28098 = inst_28100;var cs = inst_28093;return ((function (c,v,vec__28098,cs,inst_28102,inst_28101,inst_28093,inst_28100,state_val_28122,c__5861__auto___28145,out){
return (function (p1__28036_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__28036_SHARP_);
});
;})(c,v,vec__28098,cs,inst_28102,inst_28101,inst_28093,inst_28100,state_val_28122,c__5861__auto___28145,out))
})();var inst_28106 = cljs.core.filterv(inst_28105,inst_28093);var inst_28093__$1 = inst_28106;var state_28121__$1 = (function (){var statearr_28136 = state_28121;(statearr_28136[(10)] = inst_28093__$1);
return statearr_28136;
})();var statearr_28137_28155 = state_28121__$1;(statearr_28137_28155[(2)] = null);
(statearr_28137_28155[(1)] = (2));
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
});})(c__5861__auto___28145,out))
;return ((function (switch__5846__auto__,c__5861__auto___28145,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_28141 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28141[(0)] = state_machine__5847__auto__);
(statearr_28141[(1)] = (1));
return statearr_28141;
});
var state_machine__5847__auto____1 = (function (state_28121){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_28121);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e28142){if((e28142 instanceof Object))
{var ex__5850__auto__ = e28142;var statearr_28143_28156 = state_28121;(statearr_28143_28156[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_28121);
return cljs.core.constant$keyword$16;
} else
{throw e28142;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__28157 = state_28121;
state_28121 = G__28157;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_28121){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_28121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___28145,out))
})();var state__5863__auto__ = (function (){var statearr_28144 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_28144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___28145);
return statearr_28144;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___28145,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___28253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___28253,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___28253,out){
return (function (state_28230){var state_val_28231 = (state_28230[(1)]);if((state_val_28231 === (7)))
{var inst_28212 = (state_28230[(7)]);var inst_28212__$1 = (state_28230[(2)]);var inst_28213 = (inst_28212__$1 == null);var inst_28214 = cljs.core.not(inst_28213);var state_28230__$1 = (function (){var statearr_28232 = state_28230;(statearr_28232[(7)] = inst_28212__$1);
return statearr_28232;
})();if(inst_28214)
{var statearr_28233_28254 = state_28230__$1;(statearr_28233_28254[(1)] = (8));
} else
{var statearr_28234_28255 = state_28230__$1;(statearr_28234_28255[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28231 === (1)))
{var inst_28207 = (0);var state_28230__$1 = (function (){var statearr_28235 = state_28230;(statearr_28235[(8)] = inst_28207);
return statearr_28235;
})();var statearr_28236_28256 = state_28230__$1;(statearr_28236_28256[(2)] = null);
(statearr_28236_28256[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28231 === (4)))
{var state_28230__$1 = state_28230;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28230__$1,(7),ch);
} else
{if((state_val_28231 === (6)))
{var inst_28225 = (state_28230[(2)]);var state_28230__$1 = state_28230;var statearr_28237_28257 = state_28230__$1;(statearr_28237_28257[(2)] = inst_28225);
(statearr_28237_28257[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28231 === (3)))
{var inst_28227 = (state_28230[(2)]);var inst_28228 = cljs.core.async.close_BANG_(out);var state_28230__$1 = (function (){var statearr_28238 = state_28230;(statearr_28238[(9)] = inst_28227);
return statearr_28238;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_28230__$1,inst_28228);
} else
{if((state_val_28231 === (2)))
{var inst_28207 = (state_28230[(8)]);var inst_28209 = (inst_28207 < n);var state_28230__$1 = state_28230;if(cljs.core.truth_(inst_28209))
{var statearr_28239_28258 = state_28230__$1;(statearr_28239_28258[(1)] = (4));
} else
{var statearr_28240_28259 = state_28230__$1;(statearr_28240_28259[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28231 === (11)))
{var inst_28207 = (state_28230[(8)]);var inst_28217 = (state_28230[(2)]);var inst_28218 = (inst_28207 + (1));var inst_28207__$1 = inst_28218;var state_28230__$1 = (function (){var statearr_28241 = state_28230;(statearr_28241[(8)] = inst_28207__$1);
(statearr_28241[(10)] = inst_28217);
return statearr_28241;
})();var statearr_28242_28260 = state_28230__$1;(statearr_28242_28260[(2)] = null);
(statearr_28242_28260[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28231 === (9)))
{var state_28230__$1 = state_28230;var statearr_28243_28261 = state_28230__$1;(statearr_28243_28261[(2)] = null);
(statearr_28243_28261[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28231 === (5)))
{var state_28230__$1 = state_28230;var statearr_28244_28262 = state_28230__$1;(statearr_28244_28262[(2)] = null);
(statearr_28244_28262[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28231 === (10)))
{var inst_28222 = (state_28230[(2)]);var state_28230__$1 = state_28230;var statearr_28245_28263 = state_28230__$1;(statearr_28245_28263[(2)] = inst_28222);
(statearr_28245_28263[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28231 === (8)))
{var inst_28212 = (state_28230[(7)]);var state_28230__$1 = state_28230;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28230__$1,(11),out,inst_28212);
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
});})(c__5861__auto___28253,out))
;return ((function (switch__5846__auto__,c__5861__auto___28253,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_28249 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28249[(0)] = state_machine__5847__auto__);
(statearr_28249[(1)] = (1));
return statearr_28249;
});
var state_machine__5847__auto____1 = (function (state_28230){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_28230);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e28250){if((e28250 instanceof Object))
{var ex__5850__auto__ = e28250;var statearr_28251_28264 = state_28230;(statearr_28251_28264[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_28230);
return cljs.core.constant$keyword$16;
} else
{throw e28250;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__28265 = state_28230;
state_28230 = G__28265;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_28230){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_28230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___28253,out))
})();var state__5863__auto__ = (function (){var statearr_28252 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_28252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___28253);
return statearr_28252;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___28253,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t28278 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28278 = (function (ch,f,map_LT_,meta28279){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28279 = meta28279;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28278.cljs$lang$type = true;
cljs.core.async.t28278.cljs$lang$ctorStr = "cljs.core.async/t28278";
cljs.core.async.t28278.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core.async/t28278");
});
cljs.core.async.t28278.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28278.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t28278.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28278.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t28281 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28281 = (function (fn1,_,meta28279,ch,f,map_LT_,meta28282){
this.fn1 = fn1;
this._ = _;
this.meta28279 = meta28279;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28282 = meta28282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28281.cljs$lang$type = true;
cljs.core.async.t28281.cljs$lang$ctorStr = "cljs.core.async/t28281";
cljs.core.async.t28281.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core.async/t28281");
});})(___$1))
;
cljs.core.async.t28281.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t28281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__28266_SHARP_){var G__28284 = (((p1__28266_SHARP_ == null))?null:(function (){var G__28285 = p1__28266_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28285) : self__.f.call(null,G__28285));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28284) : f1.call(null,G__28284));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t28281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28283){var self__ = this;
var _28283__$1 = this;return self__.meta28282;
});})(___$1))
;
cljs.core.async.t28281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28283,meta28282__$1){var self__ = this;
var _28283__$1 = this;return (new cljs.core.async.t28281(self__.fn1,self__._,self__.meta28279,self__.ch,self__.f,self__.map_LT_,meta28282__$1));
});})(___$1))
;
cljs.core.async.__GT_t28281 = ((function (___$1){
return (function __GT_t28281(fn1__$1,___$2,meta28279__$1,ch__$2,f__$2,map_LT___$2,meta28282){return (new cljs.core.async.t28281(fn1__$1,___$2,meta28279__$1,ch__$2,f__$2,map_LT___$2,meta28282));
});})(___$1))
;
}
return (new cljs.core.async.t28281(fn1,___$1,self__.meta28279,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3666__auto__ = ret;if(cljs.core.truth_(and__3666__auto__))
{return !(((function (){var G__28286 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28286) : cljs.core.deref.call(null,G__28286));
})() == null));
} else
{return and__3666__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__28287 = (function (){var G__28288 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28288) : cljs.core.deref.call(null,G__28288));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28287) : self__.f.call(null,G__28287));
})());
} else
{return ret;
}
});
cljs.core.async.t28278.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28278.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t28278.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t28278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28280){var self__ = this;
var _28280__$1 = this;return self__.meta28279;
});
cljs.core.async.t28278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28280,meta28279__$1){var self__ = this;
var _28280__$1 = this;return (new cljs.core.async.t28278(self__.ch,self__.f,self__.map_LT_,meta28279__$1));
});
cljs.core.async.__GT_t28278 = (function __GT_t28278(ch__$1,f__$1,map_LT___$1,meta28279){return (new cljs.core.async.t28278(ch__$1,f__$1,map_LT___$1,meta28279));
});
}
return (new cljs.core.async.t28278(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t28293 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28293 = (function (ch,f,map_GT_,meta28294){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28294 = meta28294;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28293.cljs$lang$type = true;
cljs.core.async.t28293.cljs$lang$ctorStr = "cljs.core.async/t28293";
cljs.core.async.t28293.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core.async/t28293");
});
cljs.core.async.t28293.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28293.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__28296 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28296) : self__.f.call(null,G__28296));
})(),fn1);
});
cljs.core.async.t28293.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28293.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t28293.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28293.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t28293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28295){var self__ = this;
var _28295__$1 = this;return self__.meta28294;
});
cljs.core.async.t28293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28295,meta28294__$1){var self__ = this;
var _28295__$1 = this;return (new cljs.core.async.t28293(self__.ch,self__.f,self__.map_GT_,meta28294__$1));
});
cljs.core.async.__GT_t28293 = (function __GT_t28293(ch__$1,f__$1,map_GT___$1,meta28294){return (new cljs.core.async.t28293(ch__$1,f__$1,map_GT___$1,meta28294));
});
}
return (new cljs.core.async.t28293(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t28301 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28301 = (function (ch,p,filter_GT_,meta28302){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28302 = meta28302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28301.cljs$lang$type = true;
cljs.core.async.t28301.cljs$lang$ctorStr = "cljs.core.async/t28301";
cljs.core.async.t28301.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core.async/t28301");
});
cljs.core.async.t28301.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28301.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__28304 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__28304) : self__.p.call(null,G__28304));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t28301.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28301.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t28301.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28301.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t28301.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t28301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28303){var self__ = this;
var _28303__$1 = this;return self__.meta28302;
});
cljs.core.async.t28301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28303,meta28302__$1){var self__ = this;
var _28303__$1 = this;return (new cljs.core.async.t28301(self__.ch,self__.p,self__.filter_GT_,meta28302__$1));
});
cljs.core.async.__GT_t28301 = (function __GT_t28301(ch__$1,p__$1,filter_GT___$1,meta28302){return (new cljs.core.async.t28301(ch__$1,p__$1,filter_GT___$1,meta28302));
});
}
return (new cljs.core.async.t28301(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___28392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___28392,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___28392,out){
return (function (state_28370){var state_val_28371 = (state_28370[(1)]);if((state_val_28371 === (7)))
{var inst_28366 = (state_28370[(2)]);var state_28370__$1 = state_28370;var statearr_28372_28393 = state_28370__$1;(statearr_28372_28393[(2)] = inst_28366);
(statearr_28372_28393[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28371 === (1)))
{var state_28370__$1 = state_28370;var statearr_28373_28394 = state_28370__$1;(statearr_28373_28394[(2)] = null);
(statearr_28373_28394[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28371 === (4)))
{var inst_28352 = (state_28370[(7)]);var inst_28352__$1 = (state_28370[(2)]);var inst_28353 = (inst_28352__$1 == null);var state_28370__$1 = (function (){var statearr_28374 = state_28370;(statearr_28374[(7)] = inst_28352__$1);
return statearr_28374;
})();if(cljs.core.truth_(inst_28353))
{var statearr_28375_28395 = state_28370__$1;(statearr_28375_28395[(1)] = (5));
} else
{var statearr_28376_28396 = state_28370__$1;(statearr_28376_28396[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28371 === (6)))
{var inst_28352 = (state_28370[(7)]);var inst_28357 = (function (){var G__28377 = inst_28352;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__28377) : p.call(null,G__28377));
})();var state_28370__$1 = state_28370;if(cljs.core.truth_(inst_28357))
{var statearr_28378_28397 = state_28370__$1;(statearr_28378_28397[(1)] = (8));
} else
{var statearr_28379_28398 = state_28370__$1;(statearr_28379_28398[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28371 === (3)))
{var inst_28368 = (state_28370[(2)]);var state_28370__$1 = state_28370;return cljs.core.async.impl.ioc_helpers.return_chan(state_28370__$1,inst_28368);
} else
{if((state_val_28371 === (2)))
{var state_28370__$1 = state_28370;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28370__$1,(4),ch);
} else
{if((state_val_28371 === (11)))
{var inst_28360 = (state_28370[(2)]);var state_28370__$1 = state_28370;var statearr_28380_28399 = state_28370__$1;(statearr_28380_28399[(2)] = inst_28360);
(statearr_28380_28399[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28371 === (9)))
{var state_28370__$1 = state_28370;var statearr_28381_28400 = state_28370__$1;(statearr_28381_28400[(2)] = null);
(statearr_28381_28400[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28371 === (5)))
{var inst_28355 = cljs.core.async.close_BANG_(out);var state_28370__$1 = state_28370;var statearr_28382_28401 = state_28370__$1;(statearr_28382_28401[(2)] = inst_28355);
(statearr_28382_28401[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28371 === (10)))
{var inst_28363 = (state_28370[(2)]);var state_28370__$1 = (function (){var statearr_28383 = state_28370;(statearr_28383[(8)] = inst_28363);
return statearr_28383;
})();var statearr_28384_28402 = state_28370__$1;(statearr_28384_28402[(2)] = null);
(statearr_28384_28402[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28371 === (8)))
{var inst_28352 = (state_28370[(7)]);var state_28370__$1 = state_28370;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28370__$1,(11),out,inst_28352);
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
});})(c__5861__auto___28392,out))
;return ((function (switch__5846__auto__,c__5861__auto___28392,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_28388 = [null,null,null,null,null,null,null,null,null];(statearr_28388[(0)] = state_machine__5847__auto__);
(statearr_28388[(1)] = (1));
return statearr_28388;
});
var state_machine__5847__auto____1 = (function (state_28370){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_28370);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e28389){if((e28389 instanceof Object))
{var ex__5850__auto__ = e28389;var statearr_28390_28403 = state_28370;(statearr_28390_28403[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_28370);
return cljs.core.constant$keyword$16;
} else
{throw e28389;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__28404 = state_28370;
state_28370 = G__28404;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_28370){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_28370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___28392,out))
})();var state__5863__auto__ = (function (){var statearr_28391 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_28391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___28392);
return statearr_28391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___28392,out))
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
return (function (state_28574){var state_val_28575 = (state_28574[(1)]);if((state_val_28575 === (7)))
{var inst_28570 = (state_28574[(2)]);var state_28574__$1 = state_28574;var statearr_28576_28618 = state_28574__$1;(statearr_28576_28618[(2)] = inst_28570);
(statearr_28576_28618[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (20)))
{var inst_28540 = (state_28574[(7)]);var inst_28551 = (state_28574[(2)]);var inst_28552 = cljs.core.next(inst_28540);var inst_28526 = inst_28552;var inst_28527 = null;var inst_28528 = (0);var inst_28529 = (0);var state_28574__$1 = (function (){var statearr_28577 = state_28574;(statearr_28577[(8)] = inst_28529);
(statearr_28577[(9)] = inst_28527);
(statearr_28577[(10)] = inst_28551);
(statearr_28577[(11)] = inst_28526);
(statearr_28577[(12)] = inst_28528);
return statearr_28577;
})();var statearr_28578_28619 = state_28574__$1;(statearr_28578_28619[(2)] = null);
(statearr_28578_28619[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (1)))
{var state_28574__$1 = state_28574;var statearr_28579_28620 = state_28574__$1;(statearr_28579_28620[(2)] = null);
(statearr_28579_28620[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (4)))
{var inst_28515 = (state_28574[(13)]);var inst_28515__$1 = (state_28574[(2)]);var inst_28516 = (inst_28515__$1 == null);var state_28574__$1 = (function (){var statearr_28580 = state_28574;(statearr_28580[(13)] = inst_28515__$1);
return statearr_28580;
})();if(cljs.core.truth_(inst_28516))
{var statearr_28581_28621 = state_28574__$1;(statearr_28581_28621[(1)] = (5));
} else
{var statearr_28582_28622 = state_28574__$1;(statearr_28582_28622[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (15)))
{var state_28574__$1 = state_28574;var statearr_28586_28623 = state_28574__$1;(statearr_28586_28623[(2)] = null);
(statearr_28586_28623[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (21)))
{var state_28574__$1 = state_28574;var statearr_28587_28624 = state_28574__$1;(statearr_28587_28624[(2)] = null);
(statearr_28587_28624[(1)] = (23));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (13)))
{var inst_28529 = (state_28574[(8)]);var inst_28527 = (state_28574[(9)]);var inst_28526 = (state_28574[(11)]);var inst_28528 = (state_28574[(12)]);var inst_28536 = (state_28574[(2)]);var inst_28537 = (inst_28529 + (1));var tmp28583 = inst_28527;var tmp28584 = inst_28526;var tmp28585 = inst_28528;var inst_28526__$1 = tmp28584;var inst_28527__$1 = tmp28583;var inst_28528__$1 = tmp28585;var inst_28529__$1 = inst_28537;var state_28574__$1 = (function (){var statearr_28588 = state_28574;(statearr_28588[(8)] = inst_28529__$1);
(statearr_28588[(9)] = inst_28527__$1);
(statearr_28588[(11)] = inst_28526__$1);
(statearr_28588[(14)] = inst_28536);
(statearr_28588[(12)] = inst_28528__$1);
return statearr_28588;
})();var statearr_28589_28625 = state_28574__$1;(statearr_28589_28625[(2)] = null);
(statearr_28589_28625[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (22)))
{var state_28574__$1 = state_28574;var statearr_28590_28626 = state_28574__$1;(statearr_28590_28626[(2)] = null);
(statearr_28590_28626[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (6)))
{var inst_28515 = (state_28574[(13)]);var inst_28524 = (function (){var G__28591 = inst_28515;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28591) : f.call(null,G__28591));
})();var inst_28525 = cljs.core.seq(inst_28524);var inst_28526 = inst_28525;var inst_28527 = null;var inst_28528 = (0);var inst_28529 = (0);var state_28574__$1 = (function (){var statearr_28592 = state_28574;(statearr_28592[(8)] = inst_28529);
(statearr_28592[(9)] = inst_28527);
(statearr_28592[(11)] = inst_28526);
(statearr_28592[(12)] = inst_28528);
return statearr_28592;
})();var statearr_28593_28627 = state_28574__$1;(statearr_28593_28627[(2)] = null);
(statearr_28593_28627[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (17)))
{var inst_28540 = (state_28574[(7)]);var inst_28544 = cljs.core.chunk_first(inst_28540);var inst_28545 = cljs.core.chunk_rest(inst_28540);var inst_28546 = cljs.core.count(inst_28544);var inst_28526 = inst_28545;var inst_28527 = inst_28544;var inst_28528 = inst_28546;var inst_28529 = (0);var state_28574__$1 = (function (){var statearr_28594 = state_28574;(statearr_28594[(8)] = inst_28529);
(statearr_28594[(9)] = inst_28527);
(statearr_28594[(11)] = inst_28526);
(statearr_28594[(12)] = inst_28528);
return statearr_28594;
})();var statearr_28595_28628 = state_28574__$1;(statearr_28595_28628[(2)] = null);
(statearr_28595_28628[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (3)))
{var inst_28572 = (state_28574[(2)]);var state_28574__$1 = state_28574;return cljs.core.async.impl.ioc_helpers.return_chan(state_28574__$1,inst_28572);
} else
{if((state_val_28575 === (12)))
{var inst_28560 = (state_28574[(2)]);var state_28574__$1 = state_28574;var statearr_28596_28629 = state_28574__$1;(statearr_28596_28629[(2)] = inst_28560);
(statearr_28596_28629[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (2)))
{var state_28574__$1 = state_28574;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28574__$1,(4),in$);
} else
{if((state_val_28575 === (23)))
{var inst_28568 = (state_28574[(2)]);var state_28574__$1 = state_28574;var statearr_28597_28630 = state_28574__$1;(statearr_28597_28630[(2)] = inst_28568);
(statearr_28597_28630[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (19)))
{var inst_28555 = (state_28574[(2)]);var state_28574__$1 = state_28574;var statearr_28598_28631 = state_28574__$1;(statearr_28598_28631[(2)] = inst_28555);
(statearr_28598_28631[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (11)))
{var inst_28540 = (state_28574[(7)]);var inst_28526 = (state_28574[(11)]);var inst_28540__$1 = cljs.core.seq(inst_28526);var state_28574__$1 = (function (){var statearr_28599 = state_28574;(statearr_28599[(7)] = inst_28540__$1);
return statearr_28599;
})();if(inst_28540__$1)
{var statearr_28600_28632 = state_28574__$1;(statearr_28600_28632[(1)] = (14));
} else
{var statearr_28601_28633 = state_28574__$1;(statearr_28601_28633[(1)] = (15));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (9)))
{var inst_28562 = (state_28574[(2)]);var inst_28563 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_28574__$1 = (function (){var statearr_28602 = state_28574;(statearr_28602[(15)] = inst_28562);
return statearr_28602;
})();if(cljs.core.truth_(inst_28563))
{var statearr_28603_28634 = state_28574__$1;(statearr_28603_28634[(1)] = (21));
} else
{var statearr_28604_28635 = state_28574__$1;(statearr_28604_28635[(1)] = (22));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (5)))
{var inst_28518 = cljs.core.async.close_BANG_(out);var state_28574__$1 = state_28574;var statearr_28605_28636 = state_28574__$1;(statearr_28605_28636[(2)] = inst_28518);
(statearr_28605_28636[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (14)))
{var inst_28540 = (state_28574[(7)]);var inst_28542 = cljs.core.chunked_seq_QMARK_(inst_28540);var state_28574__$1 = state_28574;if(inst_28542)
{var statearr_28606_28637 = state_28574__$1;(statearr_28606_28637[(1)] = (17));
} else
{var statearr_28607_28638 = state_28574__$1;(statearr_28607_28638[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (16)))
{var inst_28558 = (state_28574[(2)]);var state_28574__$1 = state_28574;var statearr_28608_28639 = state_28574__$1;(statearr_28608_28639[(2)] = inst_28558);
(statearr_28608_28639[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28575 === (10)))
{var inst_28529 = (state_28574[(8)]);var inst_28527 = (state_28574[(9)]);var inst_28534 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28527,inst_28529);var state_28574__$1 = state_28574;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28574__$1,(13),out,inst_28534);
} else
{if((state_val_28575 === (18)))
{var inst_28540 = (state_28574[(7)]);var inst_28549 = cljs.core.first(inst_28540);var state_28574__$1 = state_28574;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28574__$1,(20),out,inst_28549);
} else
{if((state_val_28575 === (8)))
{var inst_28529 = (state_28574[(8)]);var inst_28528 = (state_28574[(12)]);var inst_28531 = (inst_28529 < inst_28528);var inst_28532 = inst_28531;var state_28574__$1 = state_28574;if(cljs.core.truth_(inst_28532))
{var statearr_28609_28640 = state_28574__$1;(statearr_28609_28640[(1)] = (10));
} else
{var statearr_28610_28641 = state_28574__$1;(statearr_28610_28641[(1)] = (11));
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
var state_machine__5847__auto____0 = (function (){var statearr_28614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28614[(0)] = state_machine__5847__auto__);
(statearr_28614[(1)] = (1));
return statearr_28614;
});
var state_machine__5847__auto____1 = (function (state_28574){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_28574);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e28615){if((e28615 instanceof Object))
{var ex__5850__auto__ = e28615;var statearr_28616_28642 = state_28574;(statearr_28616_28642[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_28574);
return cljs.core.constant$keyword$16;
} else
{throw e28615;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__28643 = state_28574;
state_28574 = G__28643;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_28574){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_28574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__))
})();var state__5863__auto__ = (function (){var statearr_28617 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_28617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_28617;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___28748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___28748,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___28748,out){
return (function (state_28723){var state_val_28724 = (state_28723[(1)]);if((state_val_28724 === (7)))
{var inst_28718 = (state_28723[(2)]);var state_28723__$1 = state_28723;var statearr_28725_28749 = state_28723__$1;(statearr_28725_28749[(2)] = inst_28718);
(statearr_28725_28749[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28724 === (1)))
{var inst_28700 = null;var state_28723__$1 = (function (){var statearr_28726 = state_28723;(statearr_28726[(7)] = inst_28700);
return statearr_28726;
})();var statearr_28727_28750 = state_28723__$1;(statearr_28727_28750[(2)] = null);
(statearr_28727_28750[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28724 === (4)))
{var inst_28703 = (state_28723[(8)]);var inst_28703__$1 = (state_28723[(2)]);var inst_28704 = (inst_28703__$1 == null);var inst_28705 = cljs.core.not(inst_28704);var state_28723__$1 = (function (){var statearr_28728 = state_28723;(statearr_28728[(8)] = inst_28703__$1);
return statearr_28728;
})();if(inst_28705)
{var statearr_28729_28751 = state_28723__$1;(statearr_28729_28751[(1)] = (5));
} else
{var statearr_28730_28752 = state_28723__$1;(statearr_28730_28752[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28724 === (6)))
{var state_28723__$1 = state_28723;var statearr_28731_28753 = state_28723__$1;(statearr_28731_28753[(2)] = null);
(statearr_28731_28753[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28724 === (3)))
{var inst_28720 = (state_28723[(2)]);var inst_28721 = cljs.core.async.close_BANG_(out);var state_28723__$1 = (function (){var statearr_28732 = state_28723;(statearr_28732[(9)] = inst_28720);
return statearr_28732;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_28723__$1,inst_28721);
} else
{if((state_val_28724 === (2)))
{var state_28723__$1 = state_28723;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28723__$1,(4),ch);
} else
{if((state_val_28724 === (11)))
{var inst_28703 = (state_28723[(8)]);var inst_28712 = (state_28723[(2)]);var inst_28700 = inst_28703;var state_28723__$1 = (function (){var statearr_28733 = state_28723;(statearr_28733[(7)] = inst_28700);
(statearr_28733[(10)] = inst_28712);
return statearr_28733;
})();var statearr_28734_28754 = state_28723__$1;(statearr_28734_28754[(2)] = null);
(statearr_28734_28754[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28724 === (9)))
{var inst_28703 = (state_28723[(8)]);var state_28723__$1 = state_28723;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28723__$1,(11),out,inst_28703);
} else
{if((state_val_28724 === (5)))
{var inst_28700 = (state_28723[(7)]);var inst_28703 = (state_28723[(8)]);var inst_28707 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28703,inst_28700);var state_28723__$1 = state_28723;if(inst_28707)
{var statearr_28736_28755 = state_28723__$1;(statearr_28736_28755[(1)] = (8));
} else
{var statearr_28737_28756 = state_28723__$1;(statearr_28737_28756[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28724 === (10)))
{var inst_28715 = (state_28723[(2)]);var state_28723__$1 = state_28723;var statearr_28738_28757 = state_28723__$1;(statearr_28738_28757[(2)] = inst_28715);
(statearr_28738_28757[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28724 === (8)))
{var inst_28700 = (state_28723[(7)]);var tmp28735 = inst_28700;var inst_28700__$1 = tmp28735;var state_28723__$1 = (function (){var statearr_28739 = state_28723;(statearr_28739[(7)] = inst_28700__$1);
return statearr_28739;
})();var statearr_28740_28758 = state_28723__$1;(statearr_28740_28758[(2)] = null);
(statearr_28740_28758[(1)] = (2));
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
});})(c__5861__auto___28748,out))
;return ((function (switch__5846__auto__,c__5861__auto___28748,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_28744 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28744[(0)] = state_machine__5847__auto__);
(statearr_28744[(1)] = (1));
return statearr_28744;
});
var state_machine__5847__auto____1 = (function (state_28723){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_28723);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e28745){if((e28745 instanceof Object))
{var ex__5850__auto__ = e28745;var statearr_28746_28759 = state_28723;(statearr_28746_28759[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_28723);
return cljs.core.constant$keyword$16;
} else
{throw e28745;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__28760 = state_28723;
state_28723 = G__28760;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_28723){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_28723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___28748,out))
})();var state__5863__auto__ = (function (){var statearr_28747 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_28747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___28748);
return statearr_28747;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___28748,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___28898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___28898,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___28898,out){
return (function (state_28868){var state_val_28869 = (state_28868[(1)]);if((state_val_28869 === (7)))
{var inst_28864 = (state_28868[(2)]);var state_28868__$1 = state_28868;var statearr_28870_28899 = state_28868__$1;(statearr_28870_28899[(2)] = inst_28864);
(statearr_28870_28899[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28869 === (1)))
{var inst_28831 = (new Array(n));var inst_28832 = inst_28831;var inst_28833 = (0);var state_28868__$1 = (function (){var statearr_28871 = state_28868;(statearr_28871[(7)] = inst_28832);
(statearr_28871[(8)] = inst_28833);
return statearr_28871;
})();var statearr_28872_28900 = state_28868__$1;(statearr_28872_28900[(2)] = null);
(statearr_28872_28900[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28869 === (4)))
{var inst_28836 = (state_28868[(9)]);var inst_28836__$1 = (state_28868[(2)]);var inst_28837 = (inst_28836__$1 == null);var inst_28838 = cljs.core.not(inst_28837);var state_28868__$1 = (function (){var statearr_28873 = state_28868;(statearr_28873[(9)] = inst_28836__$1);
return statearr_28873;
})();if(inst_28838)
{var statearr_28874_28901 = state_28868__$1;(statearr_28874_28901[(1)] = (5));
} else
{var statearr_28875_28902 = state_28868__$1;(statearr_28875_28902[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28869 === (15)))
{var inst_28858 = (state_28868[(2)]);var state_28868__$1 = state_28868;var statearr_28876_28903 = state_28868__$1;(statearr_28876_28903[(2)] = inst_28858);
(statearr_28876_28903[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28869 === (13)))
{var state_28868__$1 = state_28868;var statearr_28877_28904 = state_28868__$1;(statearr_28877_28904[(2)] = null);
(statearr_28877_28904[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28869 === (6)))
{var inst_28833 = (state_28868[(8)]);var inst_28854 = (inst_28833 > (0));var state_28868__$1 = state_28868;if(cljs.core.truth_(inst_28854))
{var statearr_28878_28905 = state_28868__$1;(statearr_28878_28905[(1)] = (12));
} else
{var statearr_28879_28906 = state_28868__$1;(statearr_28879_28906[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28869 === (3)))
{var inst_28866 = (state_28868[(2)]);var state_28868__$1 = state_28868;return cljs.core.async.impl.ioc_helpers.return_chan(state_28868__$1,inst_28866);
} else
{if((state_val_28869 === (12)))
{var inst_28832 = (state_28868[(7)]);var inst_28856 = cljs.core.vec(inst_28832);var state_28868__$1 = state_28868;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28868__$1,(15),out,inst_28856);
} else
{if((state_val_28869 === (2)))
{var state_28868__$1 = state_28868;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28868__$1,(4),ch);
} else
{if((state_val_28869 === (11)))
{var inst_28848 = (state_28868[(2)]);var inst_28849 = (new Array(n));var inst_28832 = inst_28849;var inst_28833 = (0);var state_28868__$1 = (function (){var statearr_28880 = state_28868;(statearr_28880[(10)] = inst_28848);
(statearr_28880[(7)] = inst_28832);
(statearr_28880[(8)] = inst_28833);
return statearr_28880;
})();var statearr_28881_28907 = state_28868__$1;(statearr_28881_28907[(2)] = null);
(statearr_28881_28907[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28869 === (9)))
{var inst_28832 = (state_28868[(7)]);var inst_28846 = cljs.core.vec(inst_28832);var state_28868__$1 = state_28868;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28868__$1,(11),out,inst_28846);
} else
{if((state_val_28869 === (5)))
{var inst_28836 = (state_28868[(9)]);var inst_28841 = (state_28868[(11)]);var inst_28832 = (state_28868[(7)]);var inst_28833 = (state_28868[(8)]);var inst_28840 = (inst_28832[inst_28833] = inst_28836);var inst_28841__$1 = (inst_28833 + (1));var inst_28842 = (inst_28841__$1 < n);var state_28868__$1 = (function (){var statearr_28882 = state_28868;(statearr_28882[(12)] = inst_28840);
(statearr_28882[(11)] = inst_28841__$1);
return statearr_28882;
})();if(cljs.core.truth_(inst_28842))
{var statearr_28883_28908 = state_28868__$1;(statearr_28883_28908[(1)] = (8));
} else
{var statearr_28884_28909 = state_28868__$1;(statearr_28884_28909[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_28869 === (14)))
{var inst_28861 = (state_28868[(2)]);var inst_28862 = cljs.core.async.close_BANG_(out);var state_28868__$1 = (function (){var statearr_28886 = state_28868;(statearr_28886[(13)] = inst_28861);
return statearr_28886;
})();var statearr_28887_28910 = state_28868__$1;(statearr_28887_28910[(2)] = inst_28862);
(statearr_28887_28910[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28869 === (10)))
{var inst_28852 = (state_28868[(2)]);var state_28868__$1 = state_28868;var statearr_28888_28911 = state_28868__$1;(statearr_28888_28911[(2)] = inst_28852);
(statearr_28888_28911[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_28869 === (8)))
{var inst_28841 = (state_28868[(11)]);var inst_28832 = (state_28868[(7)]);var tmp28885 = inst_28832;var inst_28832__$1 = tmp28885;var inst_28833 = inst_28841;var state_28868__$1 = (function (){var statearr_28889 = state_28868;(statearr_28889[(7)] = inst_28832__$1);
(statearr_28889[(8)] = inst_28833);
return statearr_28889;
})();var statearr_28890_28912 = state_28868__$1;(statearr_28890_28912[(2)] = null);
(statearr_28890_28912[(1)] = (2));
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
});})(c__5861__auto___28898,out))
;return ((function (switch__5846__auto__,c__5861__auto___28898,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_28894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28894[(0)] = state_machine__5847__auto__);
(statearr_28894[(1)] = (1));
return statearr_28894;
});
var state_machine__5847__auto____1 = (function (state_28868){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_28868);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e28895){if((e28895 instanceof Object))
{var ex__5850__auto__ = e28895;var statearr_28896_28913 = state_28868;(statearr_28896_28913[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_28868);
return cljs.core.constant$keyword$16;
} else
{throw e28895;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__28914 = state_28868;
state_28868 = G__28914;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_28868){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_28868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___28898,out))
})();var state__5863__auto__ = (function (){var statearr_28897 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_28897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___28898);
return statearr_28897;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___28898,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___29062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___29062,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___29062,out){
return (function (state_29031){var state_val_29032 = (state_29031[(1)]);if((state_val_29032 === (7)))
{var inst_29027 = (state_29031[(2)]);var state_29031__$1 = state_29031;var statearr_29033_29063 = state_29031__$1;(statearr_29033_29063[(2)] = inst_29027);
(statearr_29033_29063[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_29032 === (1)))
{var inst_28990 = [];var inst_28991 = inst_28990;var inst_28992 = cljs.core.constant$keyword$31;var state_29031__$1 = (function (){var statearr_29034 = state_29031;(statearr_29034[(7)] = inst_28991);
(statearr_29034[(8)] = inst_28992);
return statearr_29034;
})();var statearr_29035_29064 = state_29031__$1;(statearr_29035_29064[(2)] = null);
(statearr_29035_29064[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_29032 === (4)))
{var inst_28995 = (state_29031[(9)]);var inst_28995__$1 = (state_29031[(2)]);var inst_28996 = (inst_28995__$1 == null);var inst_28997 = cljs.core.not(inst_28996);var state_29031__$1 = (function (){var statearr_29036 = state_29031;(statearr_29036[(9)] = inst_28995__$1);
return statearr_29036;
})();if(inst_28997)
{var statearr_29037_29065 = state_29031__$1;(statearr_29037_29065[(1)] = (5));
} else
{var statearr_29038_29066 = state_29031__$1;(statearr_29038_29066[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_29032 === (15)))
{var inst_29021 = (state_29031[(2)]);var state_29031__$1 = state_29031;var statearr_29039_29067 = state_29031__$1;(statearr_29039_29067[(2)] = inst_29021);
(statearr_29039_29067[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_29032 === (13)))
{var state_29031__$1 = state_29031;var statearr_29040_29068 = state_29031__$1;(statearr_29040_29068[(2)] = null);
(statearr_29040_29068[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_29032 === (6)))
{var inst_28991 = (state_29031[(7)]);var inst_29016 = inst_28991.length;var inst_29017 = (inst_29016 > (0));var state_29031__$1 = state_29031;if(cljs.core.truth_(inst_29017))
{var statearr_29041_29069 = state_29031__$1;(statearr_29041_29069[(1)] = (12));
} else
{var statearr_29042_29070 = state_29031__$1;(statearr_29042_29070[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_29032 === (3)))
{var inst_29029 = (state_29031[(2)]);var state_29031__$1 = state_29031;return cljs.core.async.impl.ioc_helpers.return_chan(state_29031__$1,inst_29029);
} else
{if((state_val_29032 === (12)))
{var inst_28991 = (state_29031[(7)]);var inst_29019 = cljs.core.vec(inst_28991);var state_29031__$1 = state_29031;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29031__$1,(15),out,inst_29019);
} else
{if((state_val_29032 === (2)))
{var state_29031__$1 = state_29031;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29031__$1,(4),ch);
} else
{if((state_val_29032 === (11)))
{var inst_28995 = (state_29031[(9)]);var inst_28999 = (state_29031[(10)]);var inst_29009 = (state_29031[(2)]);var inst_29010 = [];var inst_29011 = inst_29010.push(inst_28995);var inst_28991 = inst_29010;var inst_28992 = inst_28999;var state_29031__$1 = (function (){var statearr_29043 = state_29031;(statearr_29043[(11)] = inst_29009);
(statearr_29043[(7)] = inst_28991);
(statearr_29043[(12)] = inst_29011);
(statearr_29043[(8)] = inst_28992);
return statearr_29043;
})();var statearr_29044_29071 = state_29031__$1;(statearr_29044_29071[(2)] = null);
(statearr_29044_29071[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_29032 === (9)))
{var inst_28991 = (state_29031[(7)]);var inst_29007 = cljs.core.vec(inst_28991);var state_29031__$1 = state_29031;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29031__$1,(11),out,inst_29007);
} else
{if((state_val_29032 === (5)))
{var inst_28995 = (state_29031[(9)]);var inst_28992 = (state_29031[(8)]);var inst_28999 = (state_29031[(10)]);var inst_28999__$1 = (function (){var G__29045 = inst_28995;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29045) : f.call(null,G__29045));
})();var inst_29000 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28999__$1,inst_28992);var inst_29001 = cljs.core.keyword_identical_QMARK_(inst_28992,cljs.core.constant$keyword$31);var inst_29002 = (inst_29000) || (inst_29001);var state_29031__$1 = (function (){var statearr_29046 = state_29031;(statearr_29046[(10)] = inst_28999__$1);
return statearr_29046;
})();if(cljs.core.truth_(inst_29002))
{var statearr_29047_29072 = state_29031__$1;(statearr_29047_29072[(1)] = (8));
} else
{var statearr_29048_29073 = state_29031__$1;(statearr_29048_29073[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_29032 === (14)))
{var inst_29024 = (state_29031[(2)]);var inst_29025 = cljs.core.async.close_BANG_(out);var state_29031__$1 = (function (){var statearr_29050 = state_29031;(statearr_29050[(13)] = inst_29024);
return statearr_29050;
})();var statearr_29051_29074 = state_29031__$1;(statearr_29051_29074[(2)] = inst_29025);
(statearr_29051_29074[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_29032 === (10)))
{var inst_29014 = (state_29031[(2)]);var state_29031__$1 = state_29031;var statearr_29052_29075 = state_29031__$1;(statearr_29052_29075[(2)] = inst_29014);
(statearr_29052_29075[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_29032 === (8)))
{var inst_28991 = (state_29031[(7)]);var inst_28995 = (state_29031[(9)]);var inst_28999 = (state_29031[(10)]);var inst_29004 = inst_28991.push(inst_28995);var tmp29049 = inst_28991;var inst_28991__$1 = tmp29049;var inst_28992 = inst_28999;var state_29031__$1 = (function (){var statearr_29053 = state_29031;(statearr_29053[(7)] = inst_28991__$1);
(statearr_29053[(14)] = inst_29004);
(statearr_29053[(8)] = inst_28992);
return statearr_29053;
})();var statearr_29054_29076 = state_29031__$1;(statearr_29054_29076[(2)] = null);
(statearr_29054_29076[(1)] = (2));
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
});})(c__5861__auto___29062,out))
;return ((function (switch__5846__auto__,c__5861__auto___29062,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_29058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29058[(0)] = state_machine__5847__auto__);
(statearr_29058[(1)] = (1));
return statearr_29058;
});
var state_machine__5847__auto____1 = (function (state_29031){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_29031);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e29059){if((e29059 instanceof Object))
{var ex__5850__auto__ = e29059;var statearr_29060_29077 = state_29031;(statearr_29060_29077[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_29031);
return cljs.core.constant$keyword$16;
} else
{throw e29059;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__29078 = state_29031;
state_29031 = G__29078;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_29031){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_29031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___29062,out))
})();var state__5863__auto__ = (function (){var statearr_29061 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_29061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___29062);
return statearr_29061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___29062,out))
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
