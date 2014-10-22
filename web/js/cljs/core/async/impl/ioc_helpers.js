// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$15);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t29116 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t29116 = (function (f,fn_handler,meta29117){
this.f = f;
this.fn_handler = fn_handler;
this.meta29117 = meta29117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t29116.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t29116.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t29116";
cljs.core.async.impl.ioc_helpers.t29116.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core.async.impl.ioc-helpers/t29116");
});
cljs.core.async.impl.ioc_helpers.t29116.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t29116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t29116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t29116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29118){var self__ = this;
var _29118__$1 = this;return self__.meta29117;
});
cljs.core.async.impl.ioc_helpers.t29116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29118,meta29117__$1){var self__ = this;
var _29118__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t29116(self__.f,self__.fn_handler,meta29117__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t29116 = (function __GT_t29116(f__$1,fn_handler__$1,meta29117){return (new cljs.core.async.impl.ioc_helpers.t29116(f__$1,fn_handler__$1,meta29117));
});
}
return (new cljs.core.async.impl.ioc_helpers.t29116(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e29120){if((e29120 instanceof Object))
{var ex = e29120;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{throw e29120;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4220__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_29124_29127 = state;(statearr_29124_29127[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_29124_29127[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4220__auto__))
{var cb = temp__4220__auto__;var statearr_29125_29128 = state;(statearr_29125_29128[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__29126 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29126) : cljs.core.deref.call(null,G__29126));
})());
(statearr_29125_29128[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$16;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4220__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){var statearr_29132_29135 = state;(statearr_29132_29135[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_29132_29135[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4220__auto__))
{var cb = temp__4220__auto__;var statearr_29133_29136 = state;(statearr_29133_29136[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__29134 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29134) : cljs.core.deref.call(null,G__29134));
})());
(statearr_29133_29136[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$16;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){return null;
});})(c))
));
}
c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4274__auto__,k__4275__auto__){var self__ = this;
var this__4274__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4274__auto____$1,k__4275__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4276__auto__,k29138,else__4277__auto__){var self__ = this;
var this__4276__auto____$1 = this;var G__29140 = (((k29138 instanceof cljs.core.Keyword))?k29138.fqn:null);switch (G__29140) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29138,else__4277__auto__);

}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4288__auto__,writer__4289__auto__,opts__4290__auto__){var self__ = this;
var this__4288__auto____$1 = this;var pr_pair__4291__auto__ = ((function (this__4288__auto____$1){
return (function (keyval__4292__auto__){return cljs.core.pr_sequential_writer(writer__4289__auto__,cljs.core.pr_writer,""," ","",opts__4290__auto__,keyval__4292__auto__);
});})(this__4288__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4289__auto__,pr_pair__4291__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4290__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$18,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$20,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4272__auto__){var self__ = this;
var this__4272__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4268__auto__){var self__ = this;
var this__4268__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4278__auto__){var self__ = this;
var this__4278__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4269__auto__){var self__ = this;
var this__4269__auto____$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_imap(this__4269__auto____$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4270__auto__,other__4271__auto__){var self__ = this;
var this__4270__auto____$1 = this;if(cljs.core.truth_((function (){var and__3666__auto__ = other__4271__auto__;if(cljs.core.truth_(and__3666__auto__))
{return ((this__4270__auto____$1.constructor === other__4271__auto__.constructor)) && (cljs.core.equiv_map(this__4270__auto____$1,other__4271__auto__));
} else
{return and__3666__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4283__auto__,k__4284__auto__){var self__ = this;
var this__4283__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$19,null,cljs.core.constant$keyword$17,null,cljs.core.constant$keyword$18,null,cljs.core.constant$keyword$21,null,cljs.core.constant$keyword$20,null], null), null),k__4284__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4283__auto____$1),self__.__meta),k__4284__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4284__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4281__auto__,k__4282__auto__,G__29137){var self__ = this;
var this__4281__auto____$1 = this;var pred__29141 = cljs.core.keyword_identical_QMARK_;var expr__29142 = k__4282__auto__;if(cljs.core.truth_((function (){var G__29144 = cljs.core.constant$keyword$17;var G__29145 = expr__29142;return (pred__29141.cljs$core$IFn$_invoke$arity$2 ? pred__29141.cljs$core$IFn$_invoke$arity$2(G__29144,G__29145) : pred__29141.call(null,G__29144,G__29145));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__29137,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__29146 = cljs.core.constant$keyword$18;var G__29147 = expr__29142;return (pred__29141.cljs$core$IFn$_invoke$arity$2 ? pred__29141.cljs$core$IFn$_invoke$arity$2(G__29146,G__29147) : pred__29141.call(null,G__29146,G__29147));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__29137,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__29148 = cljs.core.constant$keyword$19;var G__29149 = expr__29142;return (pred__29141.cljs$core$IFn$_invoke$arity$2 ? pred__29141.cljs$core$IFn$_invoke$arity$2(G__29148,G__29149) : pred__29141.call(null,G__29148,G__29149));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__29137,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__29150 = cljs.core.constant$keyword$20;var G__29151 = expr__29142;return (pred__29141.cljs$core$IFn$_invoke$arity$2 ? pred__29141.cljs$core$IFn$_invoke$arity$2(G__29150,G__29151) : pred__29141.call(null,G__29150,G__29151));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__29137,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__29152 = cljs.core.constant$keyword$21;var G__29153 = expr__29142;return (pred__29141.cljs$core$IFn$_invoke$arity$2 ? pred__29141.cljs$core$IFn$_invoke$arity$2(G__29152,G__29153) : pred__29141.call(null,G__29152,G__29153));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__29137,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4282__auto__,G__29137),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4286__auto__){var self__ = this;
var this__4286__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$18,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$20,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4273__auto__,G__29137){var self__ = this;
var this__4273__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__29137,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4279__auto__,entry__4280__auto__){var self__ = this;
var this__4279__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4280__auto__))
{return cljs.core._assoc(this__4279__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4280__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4280__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4279__auto____$1,entry__4280__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4308__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__){return cljs.core._write(writer__4309__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__29139){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(G__29139),cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(G__29139),cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(G__29139),cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(G__29139),cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(G__29139),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29139,cljs.core.constant$keyword$17,cljs.core.array_seq([cljs.core.constant$keyword$18,cljs.core.constant$keyword$19,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_29156 = state;(statearr_29156[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_29156;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3666__auto__ = exception;if(cljs.core.truth_(and__3666__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__3666__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3666__auto__ = exception;if(cljs.core.truth_(and__3666__auto__))
{var and__3666__auto____$1 = catch_block;if(cljs.core.truth_(and__3666__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3666__auto____$1;
}
} else
{return and__3666__auto__;
}
})()))
{var statearr_29162 = state;(statearr_29162[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_29162[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_29162[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_29162[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$17,null,cljs.core.array_seq([cljs.core.constant$keyword$18,null], 0)));
return statearr_29162;
} else
{if(cljs.core.truth_((function (){var and__3666__auto__ = exception;if(cljs.core.truth_(and__3666__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3666__auto__;
}
})()))
{var statearr_29163_29167 = state;(statearr_29163_29167[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__29168 = state;
state = G__29168;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3666__auto__ = exception;if(cljs.core.truth_(and__3666__auto__))
{var and__3666__auto____$1 = cljs.core.not(catch_block);if(and__3666__auto____$1)
{return cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3666__auto____$1;
}
} else
{return and__3666__auto__;
}
})()))
{var statearr_29164 = state;(statearr_29164[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_29164[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$19,null));
return statearr_29164;
} else
{if(cljs.core.truth_((function (){var and__3666__auto__ = cljs.core.not(exception);if(and__3666__auto__)
{return cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3666__auto__;
}
})()))
{var statearr_29165 = state;(statearr_29165[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_29165[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$19,null));
return statearr_29165;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_29166 = state;(statearr_29166[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_29166[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_29166;
} else
{throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
