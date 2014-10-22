// Compiled by ClojureScript 0.0-2371
goog.provide('wilkerdev.util.reactive');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.Uri');
goog.require('goog.net.Jsonp');
/**
* @param {...*} var_args
*/
wilkerdev.util.reactive.browser_log = (function() { 
var browser_log__delegate = function (params){console.log.apply(console,cljs.core.clj__GT_js(params));
return cljs.core.last(params);
};
var browser_log = function (var_args){
var params = null;if (arguments.length > 0) {
  params = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return browser_log__delegate.call(this,params);};
browser_log.cljs$lang$maxFixedArity = 0;
browser_log.cljs$lang$applyTo = (function (arglist__16870){
var params = cljs.core.seq(arglist__16870);
return browser_log__delegate(params);
});
browser_log.cljs$core$IFn$_invoke$arity$variadic = browser_log__delegate;
return browser_log;
})()
;
wilkerdev.util.reactive.js_error_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.instance_QMARK_,Error);
wilkerdev.util.reactive.remove_js_errors = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(wilkerdev.util.reactive.js_error_QMARK_);
wilkerdev.util.reactive.throw_err = (function throw_err(e){if(cljs.core.truth_((function (){var G__16872 = e;return (wilkerdev.util.reactive.js_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? wilkerdev.util.reactive.js_error_QMARK_.cljs$core$IFn$_invoke$arity$1(G__16872) : wilkerdev.util.reactive.js_error_QMARK_.call(null,G__16872));
})()))
{throw e;
} else
{}
return e;
});
wilkerdev.util.reactive.log = (function() {
var log = null;
var log__1 = (function (in$){return log.cljs$core$IFn$_invoke$arity$2(null,in$);
});
var log__2 = (function (prefix,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var chan__4609__auto___16957 = in$;var c__5861__auto___16958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___16958,chan__4609__auto___16957,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___16958,chan__4609__auto___16957,out){
return (function (state_16935){var state_val_16936 = (state_16935[(1)]);if((state_val_16936 === (7)))
{var inst_16931 = (state_16935[(2)]);var state_16935__$1 = state_16935;var statearr_16937_16959 = state_16935__$1;(statearr_16937_16959[(2)] = inst_16931);
(statearr_16937_16959[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16936 === (1)))
{var state_16935__$1 = state_16935;var statearr_16938_16960 = state_16935__$1;(statearr_16938_16960[(2)] = null);
(statearr_16938_16960[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16936 === (4)))
{var inst_16918 = (state_16935[(7)]);var inst_16918__$1 = (state_16935[(2)]);var state_16935__$1 = (function (){var statearr_16939 = state_16935;(statearr_16939[(7)] = inst_16918__$1);
return statearr_16939;
})();if(cljs.core.truth_(inst_16918__$1))
{var statearr_16940_16961 = state_16935__$1;(statearr_16940_16961[(1)] = (5));
} else
{var statearr_16941_16962 = state_16935__$1;(statearr_16941_16962[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_16936 === (6)))
{var state_16935__$1 = state_16935;var statearr_16942_16963 = state_16935__$1;(statearr_16942_16963[(2)] = cljs.core.constant$keyword$32);
(statearr_16942_16963[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16936 === (3)))
{var inst_16933 = (state_16935[(2)]);var state_16935__$1 = state_16935;return cljs.core.async.impl.ioc_helpers.return_chan(state_16935__$1,inst_16933);
} else
{if((state_val_16936 === (2)))
{var state_16935__$1 = state_16935;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16935__$1,(4),chan__4609__auto___16957);
} else
{if((state_val_16936 === (11)))
{var inst_16927 = (state_16935[(2)]);var state_16935__$1 = (function (){var statearr_16943 = state_16935;(statearr_16943[(8)] = inst_16927);
return statearr_16943;
})();var statearr_16944_16964 = state_16935__$1;(statearr_16944_16964[(2)] = null);
(statearr_16944_16964[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16936 === (9)))
{var inst_16918 = (state_16935[(7)]);var inst_16923 = wilkerdev.util.reactive.browser_log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_16918], 0));var state_16935__$1 = state_16935;var statearr_16945_16965 = state_16935__$1;(statearr_16945_16965[(2)] = inst_16923);
(statearr_16945_16965[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16936 === (5)))
{var state_16935__$1 = state_16935;if(cljs.core.truth_(prefix))
{var statearr_16946_16966 = state_16935__$1;(statearr_16946_16966[(1)] = (8));
} else
{var statearr_16947_16967 = state_16935__$1;(statearr_16947_16967[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_16936 === (10)))
{var inst_16918 = (state_16935[(7)]);var inst_16925 = (state_16935[(2)]);var state_16935__$1 = (function (){var statearr_16948 = state_16935;(statearr_16948[(9)] = inst_16925);
return statearr_16948;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16935__$1,(11),out,inst_16918);
} else
{if((state_val_16936 === (8)))
{var inst_16918 = (state_16935[(7)]);var inst_16921 = wilkerdev.util.reactive.browser_log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([prefix,inst_16918], 0));var state_16935__$1 = state_16935;var statearr_16949_16968 = state_16935__$1;(statearr_16949_16968[(2)] = inst_16921);
(statearr_16949_16968[(1)] = (10));
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
});})(c__5861__auto___16958,chan__4609__auto___16957,out))
;return ((function (switch__5846__auto__,c__5861__auto___16958,chan__4609__auto___16957,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_16953 = [null,null,null,null,null,null,null,null,null,null];(statearr_16953[(0)] = state_machine__5847__auto__);
(statearr_16953[(1)] = (1));
return statearr_16953;
});
var state_machine__5847__auto____1 = (function (state_16935){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_16935);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e16954){if((e16954 instanceof Object))
{var ex__5850__auto__ = e16954;var statearr_16955_16969 = state_16935;(statearr_16955_16969[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16935);
return cljs.core.constant$keyword$16;
} else
{throw e16954;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__16970 = state_16935;
state_16935 = G__16970;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_16935){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_16935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___16958,chan__4609__auto___16957,out))
})();var state__5863__auto__ = (function (){var statearr_16956 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_16956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___16958);
return statearr_16956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___16958,chan__4609__auto___16957,out))
);
return out;
});
log = function(prefix,in$){
switch(arguments.length){
case 1:
return log__1.call(this,prefix);
case 2:
return log__2.call(this,prefix,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
log.cljs$core$IFn$_invoke$arity$1 = log__1;
log.cljs$core$IFn$_invoke$arity$2 = log__2;
return log;
})()
;
wilkerdev.util.reactive.listen = (function() {
var listen = null;
var listen__2 = (function (el,evt){return listen.cljs$core$IFn$_invoke$arity$3(el,evt,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
});
var listen__3 = (function (el,evt,c){var G__16978_16981 = el;var G__16979_16982 = evt;var G__16980_16983 = ((function (G__16978_16981,G__16979_16982){
return (function (p1__16971_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,p1__16971_SHARP_);
});})(G__16978_16981,G__16979_16982))
;goog.events.listen(G__16978_16981,G__16979_16982,G__16980_16983);
return c;
});
listen = function(el,evt,c){
switch(arguments.length){
case 2:
return listen__2.call(this,el,evt);
case 3:
return listen__3.call(this,el,evt,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen.cljs$core$IFn$_invoke$arity$2 = listen__2;
listen.cljs$core$IFn$_invoke$arity$3 = listen__3;
return listen;
})()
;
wilkerdev.util.reactive.map = (function map(f,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___17050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17050,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17050,out){
return (function (state_17032){var state_val_17033 = (state_17032[(1)]);if((state_val_17033 === (8)))
{var inst_17023 = (state_17032[(2)]);var state_17032__$1 = (function (){var statearr_17034 = state_17032;(statearr_17034[(7)] = inst_17023);
return statearr_17034;
})();var statearr_17035_17051 = state_17032__$1;(statearr_17035_17051[(2)] = null);
(statearr_17035_17051[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17033 === (7)))
{var inst_17028 = (state_17032[(2)]);var state_17032__$1 = state_17032;var statearr_17036_17052 = state_17032__$1;(statearr_17036_17052[(2)] = inst_17028);
(statearr_17036_17052[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17033 === (6)))
{var inst_17026 = cljs.core.async.close_BANG_(out);var state_17032__$1 = state_17032;var statearr_17037_17053 = state_17032__$1;(statearr_17037_17053[(2)] = inst_17026);
(statearr_17037_17053[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17033 === (5)))
{var inst_17019 = (state_17032[(8)]);var inst_17021 = (function (){var G__17038 = inst_17019;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17038) : f.call(null,G__17038));
})();var state_17032__$1 = state_17032;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17032__$1,(8),out,inst_17021);
} else
{if((state_val_17033 === (4)))
{var inst_17019 = (state_17032[(8)]);var inst_17019__$1 = (state_17032[(2)]);var state_17032__$1 = (function (){var statearr_17039 = state_17032;(statearr_17039[(8)] = inst_17019__$1);
return statearr_17039;
})();if(cljs.core.truth_(inst_17019__$1))
{var statearr_17040_17054 = state_17032__$1;(statearr_17040_17054[(1)] = (5));
} else
{var statearr_17041_17055 = state_17032__$1;(statearr_17041_17055[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17033 === (3)))
{var inst_17030 = (state_17032[(2)]);var state_17032__$1 = state_17032;return cljs.core.async.impl.ioc_helpers.return_chan(state_17032__$1,inst_17030);
} else
{if((state_val_17033 === (2)))
{var state_17032__$1 = state_17032;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17032__$1,(4),in$);
} else
{if((state_val_17033 === (1)))
{var state_17032__$1 = state_17032;var statearr_17042_17056 = state_17032__$1;(statearr_17042_17056[(2)] = null);
(statearr_17042_17056[(1)] = (2));
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
});})(c__5861__auto___17050,out))
;return ((function (switch__5846__auto__,c__5861__auto___17050,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17046 = [null,null,null,null,null,null,null,null,null];(statearr_17046[(0)] = state_machine__5847__auto__);
(statearr_17046[(1)] = (1));
return statearr_17046;
});
var state_machine__5847__auto____1 = (function (state_17032){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17032);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17047){if((e17047 instanceof Object))
{var ex__5850__auto__ = e17047;var statearr_17048_17057 = state_17032;(statearr_17048_17057[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17032);
return cljs.core.constant$keyword$16;
} else
{throw e17047;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17058 = state_17032;
state_17032 = G__17058;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17032){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17050,out))
})();var state__5863__auto__ = (function (){var statearr_17049 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17050);
return statearr_17049;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17050,out))
);
return out;
});
wilkerdev.util.reactive.keep = (function keep(f,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___17143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17143,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17143,out){
return (function (state_17120){var state_val_17121 = (state_17120[(1)]);if((state_val_17121 === (7)))
{var inst_17116 = (state_17120[(2)]);var state_17120__$1 = state_17120;var statearr_17122_17144 = state_17120__$1;(statearr_17122_17144[(2)] = inst_17116);
(statearr_17122_17144[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17121 === (1)))
{var state_17120__$1 = state_17120;var statearr_17123_17145 = state_17120__$1;(statearr_17123_17145[(2)] = null);
(statearr_17123_17145[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17121 === (4)))
{var inst_17103 = (state_17120[(7)]);var inst_17103__$1 = (state_17120[(2)]);var state_17120__$1 = (function (){var statearr_17124 = state_17120;(statearr_17124[(7)] = inst_17103__$1);
return statearr_17124;
})();if(cljs.core.truth_(inst_17103__$1))
{var statearr_17125_17146 = state_17120__$1;(statearr_17125_17146[(1)] = (5));
} else
{var statearr_17126_17147 = state_17120__$1;(statearr_17126_17147[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17121 === (6)))
{var inst_17114 = cljs.core.async.close_BANG_(out);var state_17120__$1 = state_17120;var statearr_17127_17148 = state_17120__$1;(statearr_17127_17148[(2)] = inst_17114);
(statearr_17127_17148[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17121 === (3)))
{var inst_17118 = (state_17120[(2)]);var state_17120__$1 = state_17120;return cljs.core.async.impl.ioc_helpers.return_chan(state_17120__$1,inst_17118);
} else
{if((state_val_17121 === (2)))
{var state_17120__$1 = state_17120;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17120__$1,(4),in$);
} else
{if((state_val_17121 === (11)))
{var inst_17108 = (state_17120[(2)]);var state_17120__$1 = state_17120;var statearr_17128_17149 = state_17120__$1;(statearr_17128_17149[(2)] = inst_17108);
(statearr_17128_17149[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17121 === (9)))
{var state_17120__$1 = state_17120;var statearr_17129_17150 = state_17120__$1;(statearr_17129_17150[(2)] = null);
(statearr_17129_17150[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17121 === (5)))
{var inst_17105 = (state_17120[(8)]);var inst_17103 = (state_17120[(7)]);var inst_17105__$1 = (function (){var G__17130 = inst_17103;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17130) : f.call(null,G__17130));
})();var state_17120__$1 = (function (){var statearr_17131 = state_17120;(statearr_17131[(8)] = inst_17105__$1);
return statearr_17131;
})();if(cljs.core.truth_(inst_17105__$1))
{var statearr_17132_17151 = state_17120__$1;(statearr_17132_17151[(1)] = (8));
} else
{var statearr_17133_17152 = state_17120__$1;(statearr_17133_17152[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17121 === (10)))
{var inst_17111 = (state_17120[(2)]);var state_17120__$1 = (function (){var statearr_17134 = state_17120;(statearr_17134[(9)] = inst_17111);
return statearr_17134;
})();var statearr_17135_17153 = state_17120__$1;(statearr_17135_17153[(2)] = null);
(statearr_17135_17153[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17121 === (8)))
{var inst_17105 = (state_17120[(8)]);var state_17120__$1 = state_17120;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17120__$1,(11),out,inst_17105);
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
});})(c__5861__auto___17143,out))
;return ((function (switch__5846__auto__,c__5861__auto___17143,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17139 = [null,null,null,null,null,null,null,null,null,null];(statearr_17139[(0)] = state_machine__5847__auto__);
(statearr_17139[(1)] = (1));
return statearr_17139;
});
var state_machine__5847__auto____1 = (function (state_17120){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17120);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17140){if((e17140 instanceof Object))
{var ex__5850__auto__ = e17140;var statearr_17141_17154 = state_17120;(statearr_17141_17154[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17120);
return cljs.core.constant$keyword$16;
} else
{throw e17140;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17155 = state_17120;
state_17120 = G__17155;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17120){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17143,out))
})();var state__5863__auto__ = (function (){var statearr_17142 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17143);
return statearr_17142;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17143,out))
);
return out;
});
wilkerdev.util.reactive.mapchan = (function() {
var mapchan = null;
var mapchan__1 = (function (in$){return mapchan.cljs$core$IFn$_invoke$arity$2(null,in$);
});
var mapchan__2 = (function (f,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___17302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17302,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17302,out){
return (function (state_17265){var state_val_17266 = (state_17265[(1)]);if((state_val_17266 === (7)))
{var inst_17261 = (state_17265[(2)]);var state_17265__$1 = state_17265;var statearr_17267_17303 = state_17265__$1;(statearr_17267_17303[(2)] = inst_17261);
(statearr_17267_17303[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17266 === (1)))
{var state_17265__$1 = state_17265;var statearr_17268_17304 = state_17265__$1;(statearr_17268_17304[(2)] = null);
(statearr_17268_17304[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17266 === (4)))
{var inst_17232 = (state_17265[(7)]);var inst_17232__$1 = (state_17265[(2)]);var state_17265__$1 = (function (){var statearr_17269 = state_17265;(statearr_17269[(7)] = inst_17232__$1);
return statearr_17269;
})();if(cljs.core.truth_(inst_17232__$1))
{var statearr_17270_17305 = state_17265__$1;(statearr_17270_17305[(1)] = (5));
} else
{var statearr_17271_17306 = state_17265__$1;(statearr_17271_17306[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17266 === (6)))
{var inst_17259 = cljs.core.async.close_BANG_(out);var state_17265__$1 = state_17265;var statearr_17272_17307 = state_17265__$1;(statearr_17272_17307[(2)] = inst_17259);
(statearr_17272_17307[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17266 === (3)))
{var inst_17263 = (state_17265[(2)]);var state_17265__$1 = state_17265;return cljs.core.async.impl.ioc_helpers.return_chan(state_17265__$1,inst_17263);
} else
{if((state_val_17266 === (2)))
{var state_17265__$1 = state_17265;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17265__$1,(4),in$);
} else
{if((state_val_17266 === (9)))
{var inst_17232 = (state_17265[(7)]);var state_17265__$1 = state_17265;var statearr_17273_17308 = state_17265__$1;(statearr_17273_17308[(2)] = inst_17232);
(statearr_17273_17308[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17266 === (5)))
{var state_17265__$1 = state_17265;if(cljs.core.truth_(f))
{var statearr_17274_17309 = state_17265__$1;(statearr_17274_17309[(1)] = (8));
} else
{var statearr_17275_17310 = state_17265__$1;(statearr_17275_17310[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17266 === (10)))
{var inst_17232 = (state_17265[(7)]);var inst_17238 = (state_17265[(2)]);var inst_17254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_17255 = (function (){var c__5861__auto____$1 = inst_17254;var chan__4609__auto__ = inst_17238;var x = inst_17232;var temp__4220__auto__ = inst_17232;return ((function (c__5861__auto____$1,chan__4609__auto__,x,temp__4220__auto__,inst_17232,inst_17238,inst_17254,state_val_17266,c__5861__auto___17302,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto____$1,chan__4609__auto__,x,temp__4220__auto__,inst_17232,inst_17238,inst_17254,state_val_17266,c__5861__auto___17302,out){
return (function (state_17252){var state_val_17253 = (state_17252[(1)]);if((state_val_17253 === (8)))
{var inst_17244 = (state_17252[(2)]);var state_17252__$1 = (function (){var statearr_17276 = state_17252;(statearr_17276[(7)] = inst_17244);
return statearr_17276;
})();var statearr_17277_17311 = state_17252__$1;(statearr_17277_17311[(2)] = null);
(statearr_17277_17311[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17253 === (7)))
{var inst_17248 = (state_17252[(2)]);var state_17252__$1 = state_17252;var statearr_17278_17312 = state_17252__$1;(statearr_17278_17312[(2)] = inst_17248);
(statearr_17278_17312[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17253 === (6)))
{var state_17252__$1 = state_17252;var statearr_17279_17313 = state_17252__$1;(statearr_17279_17313[(2)] = cljs.core.constant$keyword$32);
(statearr_17279_17313[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17253 === (5)))
{var inst_17241 = (state_17252[(8)]);var state_17252__$1 = state_17252;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17252__$1,(8),out,inst_17241);
} else
{if((state_val_17253 === (4)))
{var inst_17241 = (state_17252[(8)]);var inst_17241__$1 = (state_17252[(2)]);var state_17252__$1 = (function (){var statearr_17280 = state_17252;(statearr_17280[(8)] = inst_17241__$1);
return statearr_17280;
})();if(cljs.core.truth_(inst_17241__$1))
{var statearr_17281_17314 = state_17252__$1;(statearr_17281_17314[(1)] = (5));
} else
{var statearr_17282_17315 = state_17252__$1;(statearr_17282_17315[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17253 === (3)))
{var inst_17250 = (state_17252[(2)]);var state_17252__$1 = state_17252;return cljs.core.async.impl.ioc_helpers.return_chan(state_17252__$1,inst_17250);
} else
{if((state_val_17253 === (2)))
{var state_17252__$1 = state_17252;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17252__$1,(4),chan__4609__auto__);
} else
{if((state_val_17253 === (1)))
{var state_17252__$1 = state_17252;var statearr_17283_17316 = state_17252__$1;(statearr_17283_17316[(2)] = null);
(statearr_17283_17316[(1)] = (2));
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
});})(c__5861__auto____$1,chan__4609__auto__,x,temp__4220__auto__,inst_17232,inst_17238,inst_17254,state_val_17266,c__5861__auto___17302,out))
;return ((function (switch__5846__auto__,c__5861__auto____$1,chan__4609__auto__,x,temp__4220__auto__,inst_17232,inst_17238,inst_17254,state_val_17266,c__5861__auto___17302,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17287 = [null,null,null,null,null,null,null,null,null];(statearr_17287[(0)] = state_machine__5847__auto__);
(statearr_17287[(1)] = (1));
return statearr_17287;
});
var state_machine__5847__auto____1 = (function (state_17252){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17252);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17288){if((e17288 instanceof Object))
{var ex__5850__auto__ = e17288;var statearr_17289_17317 = state_17252;(statearr_17289_17317[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17252);
return cljs.core.constant$keyword$16;
} else
{throw e17288;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17318 = state_17252;
state_17252 = G__17318;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17252){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto____$1,chan__4609__auto__,x,temp__4220__auto__,inst_17232,inst_17238,inst_17254,state_val_17266,c__5861__auto___17302,out))
})();var state__5863__auto__ = (function (){var statearr_17290 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto____$1);
return statearr_17290;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});
;})(c__5861__auto____$1,chan__4609__auto__,x,temp__4220__auto__,inst_17232,inst_17238,inst_17254,state_val_17266,c__5861__auto___17302,out))
})();var inst_17256 = cljs.core.async.impl.dispatch.run(inst_17255);var state_17265__$1 = (function (){var statearr_17291 = state_17265;(statearr_17291[(8)] = inst_17256);
return statearr_17291;
})();var statearr_17292_17319 = state_17265__$1;(statearr_17292_17319[(2)] = null);
(statearr_17292_17319[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17266 === (8)))
{var inst_17232 = (state_17265[(7)]);var inst_17235 = (function (){var G__17293 = inst_17232;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17293) : f.call(null,G__17293));
})();var state_17265__$1 = state_17265;var statearr_17294_17320 = state_17265__$1;(statearr_17294_17320[(2)] = inst_17235);
(statearr_17294_17320[(1)] = (10));
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
});})(c__5861__auto___17302,out))
;return ((function (switch__5846__auto__,c__5861__auto___17302,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17298 = [null,null,null,null,null,null,null,null,null];(statearr_17298[(0)] = state_machine__5847__auto__);
(statearr_17298[(1)] = (1));
return statearr_17298;
});
var state_machine__5847__auto____1 = (function (state_17265){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17265);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17299){if((e17299 instanceof Object))
{var ex__5850__auto__ = e17299;var statearr_17300_17321 = state_17265;(statearr_17300_17321[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17265);
return cljs.core.constant$keyword$16;
} else
{throw e17299;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17322 = state_17265;
state_17265 = G__17322;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17265){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17302,out))
})();var state__5863__auto__ = (function (){var statearr_17301 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17302);
return statearr_17301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17302,out))
);
return out;
});
mapchan = function(f,in$){
switch(arguments.length){
case 1:
return mapchan__1.call(this,f);
case 2:
return mapchan__2.call(this,f,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapchan.cljs$core$IFn$_invoke$arity$1 = mapchan__1;
mapchan.cljs$core$IFn$_invoke$arity$2 = mapchan__2;
return mapchan;
})()
;
wilkerdev.util.reactive.mapcat = (function() {
var mapcat = null;
var mapcat__1 = (function (in$){return mapcat.cljs$core$IFn$_invoke$arity$2(null,in$);
});
var mapcat__2 = (function (f,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___17445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17445,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17445,out){
return (function (state_17415){var state_val_17416 = (state_17415[(1)]);if((state_val_17416 === (7)))
{var inst_17411 = (state_17415[(2)]);var state_17415__$1 = state_17415;var statearr_17417_17446 = state_17415__$1;(statearr_17417_17446[(2)] = inst_17411);
(statearr_17417_17446[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17416 === (1)))
{var state_17415__$1 = state_17415;var statearr_17418_17447 = state_17415__$1;(statearr_17418_17447[(2)] = null);
(statearr_17418_17447[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17416 === (4)))
{var inst_17387 = (state_17415[(7)]);var inst_17387__$1 = (state_17415[(2)]);var state_17415__$1 = (function (){var statearr_17419 = state_17415;(statearr_17419[(7)] = inst_17387__$1);
return statearr_17419;
})();if(cljs.core.truth_(inst_17387__$1))
{var statearr_17420_17448 = state_17415__$1;(statearr_17420_17448[(1)] = (5));
} else
{var statearr_17421_17449 = state_17415__$1;(statearr_17421_17449[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17416 === (15)))
{var inst_17404 = (state_17415[(2)]);var state_17415__$1 = state_17415;var statearr_17422_17450 = state_17415__$1;(statearr_17422_17450[(2)] = inst_17404);
(statearr_17422_17450[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17416 === (13)))
{var inst_17394 = (state_17415[(8)]);var inst_17397 = cljs.core.first(inst_17394);var state_17415__$1 = state_17415;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17415__$1,(16),out,inst_17397);
} else
{if((state_val_17416 === (6)))
{var inst_17409 = cljs.core.async.close_BANG_(out);var state_17415__$1 = state_17415;var statearr_17423_17451 = state_17415__$1;(statearr_17423_17451[(2)] = inst_17409);
(statearr_17423_17451[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17416 === (3)))
{var inst_17413 = (state_17415[(2)]);var state_17415__$1 = state_17415;return cljs.core.async.impl.ioc_helpers.return_chan(state_17415__$1,inst_17413);
} else
{if((state_val_17416 === (12)))
{var inst_17406 = (state_17415[(2)]);var state_17415__$1 = (function (){var statearr_17424 = state_17415;(statearr_17424[(9)] = inst_17406);
return statearr_17424;
})();var statearr_17425_17452 = state_17415__$1;(statearr_17425_17452[(2)] = null);
(statearr_17425_17452[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17416 === (2)))
{var state_17415__$1 = state_17415;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17415__$1,(4),in$);
} else
{if((state_val_17416 === (11)))
{var inst_17394 = (state_17415[(8)]);var state_17415__$1 = state_17415;if(cljs.core.truth_(inst_17394))
{var statearr_17426_17453 = state_17415__$1;(statearr_17426_17453[(1)] = (13));
} else
{var statearr_17427_17454 = state_17415__$1;(statearr_17427_17454[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17416 === (9)))
{var inst_17387 = (state_17415[(7)]);var state_17415__$1 = state_17415;var statearr_17428_17455 = state_17415__$1;(statearr_17428_17455[(2)] = inst_17387);
(statearr_17428_17455[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17416 === (5)))
{var state_17415__$1 = state_17415;if(cljs.core.truth_(f))
{var statearr_17429_17456 = state_17415__$1;(statearr_17429_17456[(1)] = (8));
} else
{var statearr_17430_17457 = state_17415__$1;(statearr_17430_17457[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17416 === (14)))
{var state_17415__$1 = state_17415;var statearr_17431_17458 = state_17415__$1;(statearr_17431_17458[(2)] = null);
(statearr_17431_17458[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17416 === (16)))
{var inst_17394 = (state_17415[(8)]);var inst_17399 = (state_17415[(2)]);var inst_17400 = cljs.core.next(inst_17394);var inst_17394__$1 = inst_17400;var state_17415__$1 = (function (){var statearr_17432 = state_17415;(statearr_17432[(8)] = inst_17394__$1);
(statearr_17432[(10)] = inst_17399);
return statearr_17432;
})();var statearr_17433_17459 = state_17415__$1;(statearr_17433_17459[(2)] = null);
(statearr_17433_17459[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17416 === (10)))
{var inst_17393 = (state_17415[(2)]);var inst_17394 = inst_17393;var state_17415__$1 = (function (){var statearr_17434 = state_17415;(statearr_17434[(8)] = inst_17394);
return statearr_17434;
})();var statearr_17435_17460 = state_17415__$1;(statearr_17435_17460[(2)] = null);
(statearr_17435_17460[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17416 === (8)))
{var inst_17387 = (state_17415[(7)]);var inst_17390 = (function (){var G__17436 = inst_17387;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17436) : f.call(null,G__17436));
})();var state_17415__$1 = state_17415;var statearr_17437_17461 = state_17415__$1;(statearr_17437_17461[(2)] = inst_17390);
(statearr_17437_17461[(1)] = (10));
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
});})(c__5861__auto___17445,out))
;return ((function (switch__5846__auto__,c__5861__auto___17445,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17441 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17441[(0)] = state_machine__5847__auto__);
(statearr_17441[(1)] = (1));
return statearr_17441;
});
var state_machine__5847__auto____1 = (function (state_17415){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17415);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17442){if((e17442 instanceof Object))
{var ex__5850__auto__ = e17442;var statearr_17443_17462 = state_17415;(statearr_17443_17462[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17415);
return cljs.core.constant$keyword$16;
} else
{throw e17442;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17463 = state_17415;
state_17415 = G__17463;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17415){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17445,out))
})();var state__5863__auto__ = (function (){var statearr_17444 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17445);
return statearr_17444;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17445,out))
);
return out;
});
mapcat = function(f,in$){
switch(arguments.length){
case 1:
return mapcat__1.call(this,f);
case 2:
return mapcat__2.call(this,f,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$core$IFn$_invoke$arity$1 = mapcat__1;
mapcat.cljs$core$IFn$_invoke$arity$2 = mapcat__2;
return mapcat;
})()
;
wilkerdev.util.reactive.filter = (function filter(pred,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___17546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17546,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17546,out){
return (function (state_17524){var state_val_17525 = (state_17524[(1)]);if((state_val_17525 === (7)))
{var inst_17520 = (state_17524[(2)]);var state_17524__$1 = state_17524;var statearr_17526_17547 = state_17524__$1;(statearr_17526_17547[(2)] = inst_17520);
(statearr_17526_17547[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17525 === (1)))
{var state_17524__$1 = state_17524;var statearr_17527_17548 = state_17524__$1;(statearr_17527_17548[(2)] = null);
(statearr_17527_17548[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17525 === (4)))
{var inst_17507 = (state_17524[(7)]);var inst_17507__$1 = (state_17524[(2)]);var state_17524__$1 = (function (){var statearr_17528 = state_17524;(statearr_17528[(7)] = inst_17507__$1);
return statearr_17528;
})();if(cljs.core.truth_(inst_17507__$1))
{var statearr_17529_17549 = state_17524__$1;(statearr_17529_17549[(1)] = (5));
} else
{var statearr_17530_17550 = state_17524__$1;(statearr_17530_17550[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17525 === (6)))
{var inst_17518 = cljs.core.async.close_BANG_(out);var state_17524__$1 = state_17524;var statearr_17531_17551 = state_17524__$1;(statearr_17531_17551[(2)] = inst_17518);
(statearr_17531_17551[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17525 === (3)))
{var inst_17522 = (state_17524[(2)]);var state_17524__$1 = state_17524;return cljs.core.async.impl.ioc_helpers.return_chan(state_17524__$1,inst_17522);
} else
{if((state_val_17525 === (2)))
{var state_17524__$1 = state_17524;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17524__$1,(4),in$);
} else
{if((state_val_17525 === (11)))
{var inst_17512 = (state_17524[(2)]);var state_17524__$1 = state_17524;var statearr_17532_17552 = state_17524__$1;(statearr_17532_17552[(2)] = inst_17512);
(statearr_17532_17552[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17525 === (9)))
{var state_17524__$1 = state_17524;var statearr_17533_17553 = state_17524__$1;(statearr_17533_17553[(2)] = null);
(statearr_17533_17553[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17525 === (5)))
{var inst_17507 = (state_17524[(7)]);var inst_17509 = (function (){var G__17534 = inst_17507;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__17534) : pred.call(null,G__17534));
})();var state_17524__$1 = state_17524;if(cljs.core.truth_(inst_17509))
{var statearr_17535_17554 = state_17524__$1;(statearr_17535_17554[(1)] = (8));
} else
{var statearr_17536_17555 = state_17524__$1;(statearr_17536_17555[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17525 === (10)))
{var inst_17515 = (state_17524[(2)]);var state_17524__$1 = (function (){var statearr_17537 = state_17524;(statearr_17537[(8)] = inst_17515);
return statearr_17537;
})();var statearr_17538_17556 = state_17524__$1;(statearr_17538_17556[(2)] = null);
(statearr_17538_17556[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17525 === (8)))
{var inst_17507 = (state_17524[(7)]);var state_17524__$1 = state_17524;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17524__$1,(11),out,inst_17507);
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
});})(c__5861__auto___17546,out))
;return ((function (switch__5846__auto__,c__5861__auto___17546,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17542 = [null,null,null,null,null,null,null,null,null];(statearr_17542[(0)] = state_machine__5847__auto__);
(statearr_17542[(1)] = (1));
return statearr_17542;
});
var state_machine__5847__auto____1 = (function (state_17524){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17524);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17543){if((e17543 instanceof Object))
{var ex__5850__auto__ = e17543;var statearr_17544_17557 = state_17524;(statearr_17544_17557[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17524);
return cljs.core.constant$keyword$16;
} else
{throw e17543;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17558 = state_17524;
state_17524 = G__17558;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17524){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17546,out))
})();var state__5863__auto__ = (function (){var statearr_17545 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17546);
return statearr_17545;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17546,out))
);
return out;
});
wilkerdev.util.reactive.remove = (function remove(f,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___17641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17641,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17641,out){
return (function (state_17619){var state_val_17620 = (state_17619[(1)]);if((state_val_17620 === (7)))
{var inst_17615 = (state_17619[(2)]);var state_17619__$1 = state_17619;var statearr_17621_17642 = state_17619__$1;(statearr_17621_17642[(2)] = inst_17615);
(statearr_17621_17642[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17620 === (1)))
{var state_17619__$1 = state_17619;var statearr_17622_17643 = state_17619__$1;(statearr_17622_17643[(2)] = null);
(statearr_17622_17643[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17620 === (4)))
{var inst_17602 = (state_17619[(7)]);var inst_17602__$1 = (state_17619[(2)]);var state_17619__$1 = (function (){var statearr_17623 = state_17619;(statearr_17623[(7)] = inst_17602__$1);
return statearr_17623;
})();if(cljs.core.truth_(inst_17602__$1))
{var statearr_17624_17644 = state_17619__$1;(statearr_17624_17644[(1)] = (5));
} else
{var statearr_17625_17645 = state_17619__$1;(statearr_17625_17645[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17620 === (6)))
{var inst_17613 = cljs.core.async.close_BANG_(out);var state_17619__$1 = state_17619;var statearr_17626_17646 = state_17619__$1;(statearr_17626_17646[(2)] = inst_17613);
(statearr_17626_17646[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17620 === (3)))
{var inst_17617 = (state_17619[(2)]);var state_17619__$1 = state_17619;return cljs.core.async.impl.ioc_helpers.return_chan(state_17619__$1,inst_17617);
} else
{if((state_val_17620 === (2)))
{var state_17619__$1 = state_17619;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17619__$1,(4),in$);
} else
{if((state_val_17620 === (11)))
{var inst_17608 = (state_17619[(2)]);var state_17619__$1 = state_17619;var statearr_17627_17647 = state_17619__$1;(statearr_17627_17647[(2)] = inst_17608);
(statearr_17627_17647[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17620 === (9)))
{var inst_17602 = (state_17619[(7)]);var state_17619__$1 = state_17619;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17619__$1,(11),out,inst_17602);
} else
{if((state_val_17620 === (5)))
{var inst_17602 = (state_17619[(7)]);var inst_17604 = (function (){var G__17628 = inst_17602;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17628) : f.call(null,G__17628));
})();var state_17619__$1 = state_17619;if(cljs.core.truth_(inst_17604))
{var statearr_17629_17648 = state_17619__$1;(statearr_17629_17648[(1)] = (8));
} else
{var statearr_17630_17649 = state_17619__$1;(statearr_17630_17649[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17620 === (10)))
{var inst_17610 = (state_17619[(2)]);var state_17619__$1 = (function (){var statearr_17631 = state_17619;(statearr_17631[(8)] = inst_17610);
return statearr_17631;
})();var statearr_17632_17650 = state_17619__$1;(statearr_17632_17650[(2)] = null);
(statearr_17632_17650[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17620 === (8)))
{var state_17619__$1 = state_17619;var statearr_17633_17651 = state_17619__$1;(statearr_17633_17651[(2)] = null);
(statearr_17633_17651[(1)] = (10));
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
});})(c__5861__auto___17641,out))
;return ((function (switch__5846__auto__,c__5861__auto___17641,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17637 = [null,null,null,null,null,null,null,null,null];(statearr_17637[(0)] = state_machine__5847__auto__);
(statearr_17637[(1)] = (1));
return statearr_17637;
});
var state_machine__5847__auto____1 = (function (state_17619){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17619);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17638){if((e17638 instanceof Object))
{var ex__5850__auto__ = e17638;var statearr_17639_17652 = state_17619;(statearr_17639_17652[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17619);
return cljs.core.constant$keyword$16;
} else
{throw e17638;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17653 = state_17619;
state_17619 = G__17653;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17619){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17641,out))
})();var state__5863__auto__ = (function (){var statearr_17640 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17641);
return statearr_17640;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17641,out))
);
return out;
});
wilkerdev.util.reactive.spool = (function spool(xs){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___17720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17720,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17720,out){
return (function (state_17703){var state_val_17704 = (state_17703[(1)]);if((state_val_17704 === (7)))
{var inst_17688 = (state_17703[(7)]);var inst_17693 = (state_17703[(2)]);var inst_17694 = cljs.core.next(inst_17688);var inst_17688__$1 = inst_17694;var state_17703__$1 = (function (){var statearr_17705 = state_17703;(statearr_17705[(8)] = inst_17693);
(statearr_17705[(7)] = inst_17688__$1);
return statearr_17705;
})();var statearr_17706_17721 = state_17703__$1;(statearr_17706_17721[(2)] = null);
(statearr_17706_17721[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17704 === (6)))
{var inst_17699 = (state_17703[(2)]);var state_17703__$1 = state_17703;var statearr_17707_17722 = state_17703__$1;(statearr_17707_17722[(2)] = inst_17699);
(statearr_17707_17722[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17704 === (5)))
{var inst_17697 = cljs.core.async.close_BANG_(out);var state_17703__$1 = state_17703;var statearr_17708_17723 = state_17703__$1;(statearr_17708_17723[(2)] = inst_17697);
(statearr_17708_17723[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17704 === (4)))
{var inst_17688 = (state_17703[(7)]);var inst_17691 = cljs.core.first(inst_17688);var state_17703__$1 = state_17703;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17703__$1,(7),out,inst_17691);
} else
{if((state_val_17704 === (3)))
{var inst_17701 = (state_17703[(2)]);var state_17703__$1 = state_17703;return cljs.core.async.impl.ioc_helpers.return_chan(state_17703__$1,inst_17701);
} else
{if((state_val_17704 === (2)))
{var inst_17688 = (state_17703[(7)]);var state_17703__$1 = state_17703;if(cljs.core.truth_(inst_17688))
{var statearr_17709_17724 = state_17703__$1;(statearr_17709_17724[(1)] = (4));
} else
{var statearr_17710_17725 = state_17703__$1;(statearr_17710_17725[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17704 === (1)))
{var inst_17687 = cljs.core.seq(xs);var inst_17688 = inst_17687;var state_17703__$1 = (function (){var statearr_17711 = state_17703;(statearr_17711[(7)] = inst_17688);
return statearr_17711;
})();var statearr_17712_17726 = state_17703__$1;(statearr_17712_17726[(2)] = null);
(statearr_17712_17726[(1)] = (2));
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
});})(c__5861__auto___17720,out))
;return ((function (switch__5846__auto__,c__5861__auto___17720,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17716 = [null,null,null,null,null,null,null,null,null];(statearr_17716[(0)] = state_machine__5847__auto__);
(statearr_17716[(1)] = (1));
return statearr_17716;
});
var state_machine__5847__auto____1 = (function (state_17703){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17703);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17717){if((e17717 instanceof Object))
{var ex__5850__auto__ = e17717;var statearr_17718_17727 = state_17703;(statearr_17718_17727[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17703);
return cljs.core.constant$keyword$16;
} else
{throw e17717;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17728 = state_17703;
state_17703 = G__17728;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17703){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17720,out))
})();var state__5863__auto__ = (function (){var statearr_17719 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17720);
return statearr_17719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17720,out))
);
return out;
});
wilkerdev.util.reactive.split = (function() {
var split = null;
var split__2 = (function (pred,in$){return split.cljs$core$IFn$_invoke$arity$3(pred,in$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null));
});
var split__3 = (function (pred,in$,p__17729){var vec__17778 = p__17729;var out1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17778,(0),null);var out2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17778,(1),null);var c__5861__auto___17823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17823,vec__17778,out1,out2){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17823,vec__17778,out1,out2){
return (function (state_17800){var state_val_17801 = (state_17800[(1)]);if((state_val_17801 === (7)))
{var inst_17796 = (state_17800[(2)]);var state_17800__$1 = state_17800;var statearr_17802_17824 = state_17800__$1;(statearr_17802_17824[(2)] = inst_17796);
(statearr_17802_17824[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17801 === (1)))
{var state_17800__$1 = state_17800;var statearr_17803_17825 = state_17800__$1;(statearr_17803_17825[(2)] = null);
(statearr_17803_17825[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17801 === (4)))
{var inst_17781 = (state_17800[(7)]);var inst_17781__$1 = (state_17800[(2)]);var state_17800__$1 = (function (){var statearr_17804 = state_17800;(statearr_17804[(7)] = inst_17781__$1);
return statearr_17804;
})();if(cljs.core.truth_(inst_17781__$1))
{var statearr_17805_17826 = state_17800__$1;(statearr_17805_17826[(1)] = (5));
} else
{var statearr_17806_17827 = state_17800__$1;(statearr_17806_17827[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17801 === (6)))
{var state_17800__$1 = state_17800;var statearr_17807_17828 = state_17800__$1;(statearr_17807_17828[(2)] = null);
(statearr_17807_17828[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17801 === (3)))
{var inst_17798 = (state_17800[(2)]);var state_17800__$1 = state_17800;return cljs.core.async.impl.ioc_helpers.return_chan(state_17800__$1,inst_17798);
} else
{if((state_val_17801 === (12)))
{var inst_17790 = (state_17800[(2)]);var state_17800__$1 = (function (){var statearr_17808 = state_17800;(statearr_17808[(8)] = inst_17790);
return statearr_17808;
})();var statearr_17809_17829 = state_17800__$1;(statearr_17809_17829[(2)] = null);
(statearr_17809_17829[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17801 === (2)))
{var state_17800__$1 = state_17800;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17800__$1,(4),in$);
} else
{if((state_val_17801 === (11)))
{var inst_17786 = (state_17800[(2)]);var state_17800__$1 = (function (){var statearr_17810 = state_17800;(statearr_17810[(9)] = inst_17786);
return statearr_17810;
})();var statearr_17811_17830 = state_17800__$1;(statearr_17811_17830[(2)] = null);
(statearr_17811_17830[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17801 === (9)))
{var inst_17781 = (state_17800[(7)]);var state_17800__$1 = state_17800;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17800__$1,(12),out2,inst_17781);
} else
{if((state_val_17801 === (5)))
{var inst_17781 = (state_17800[(7)]);var inst_17783 = (function (){var G__17812 = inst_17781;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__17812) : pred.call(null,G__17812));
})();var state_17800__$1 = state_17800;if(cljs.core.truth_(inst_17783))
{var statearr_17813_17831 = state_17800__$1;(statearr_17813_17831[(1)] = (8));
} else
{var statearr_17814_17832 = state_17800__$1;(statearr_17814_17832[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17801 === (10)))
{var inst_17793 = (state_17800[(2)]);var state_17800__$1 = state_17800;var statearr_17815_17833 = state_17800__$1;(statearr_17815_17833[(2)] = inst_17793);
(statearr_17815_17833[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17801 === (8)))
{var inst_17781 = (state_17800[(7)]);var state_17800__$1 = state_17800;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17800__$1,(11),out1,inst_17781);
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
});})(c__5861__auto___17823,vec__17778,out1,out2))
;return ((function (switch__5846__auto__,c__5861__auto___17823,vec__17778,out1,out2){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17819 = [null,null,null,null,null,null,null,null,null,null];(statearr_17819[(0)] = state_machine__5847__auto__);
(statearr_17819[(1)] = (1));
return statearr_17819;
});
var state_machine__5847__auto____1 = (function (state_17800){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17800);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17820){if((e17820 instanceof Object))
{var ex__5850__auto__ = e17820;var statearr_17821_17834 = state_17800;(statearr_17821_17834[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17800);
return cljs.core.constant$keyword$16;
} else
{throw e17820;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17835 = state_17800;
state_17800 = G__17835;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17800){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17823,vec__17778,out1,out2))
})();var state__5863__auto__ = (function (){var statearr_17822 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17823);
return statearr_17822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17823,vec__17778,out1,out2))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out1,out2], null);
});
split = function(pred,in$,p__17729){
switch(arguments.length){
case 2:
return split__2.call(this,pred,in$);
case 3:
return split__3.call(this,pred,in$,p__17729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$3 = split__3;
return split;
})()
;
wilkerdev.util.reactive.concat = (function concat(xs,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___17934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17934,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17934,out){
return (function (state_17910){var state_val_17911 = (state_17910[(1)]);if((state_val_17911 === (7)))
{var inst_17886 = (state_17910[(7)]);var inst_17891 = (state_17910[(2)]);var inst_17892 = cljs.core.next(inst_17886);var inst_17886__$1 = inst_17892;var state_17910__$1 = (function (){var statearr_17912 = state_17910;(statearr_17912[(7)] = inst_17886__$1);
(statearr_17912[(8)] = inst_17891);
return statearr_17912;
})();var statearr_17913_17935 = state_17910__$1;(statearr_17913_17935[(2)] = null);
(statearr_17913_17935[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17911 === (1)))
{var inst_17885 = cljs.core.seq(xs);var inst_17886 = inst_17885;var state_17910__$1 = (function (){var statearr_17914 = state_17910;(statearr_17914[(7)] = inst_17886);
return statearr_17914;
})();var statearr_17915_17936 = state_17910__$1;(statearr_17915_17936[(2)] = null);
(statearr_17915_17936[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17911 === (4)))
{var inst_17886 = (state_17910[(7)]);var inst_17889 = cljs.core.first(inst_17886);var state_17910__$1 = state_17910;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17910__$1,(7),out,inst_17889);
} else
{if((state_val_17911 === (6)))
{var inst_17906 = (state_17910[(2)]);var state_17910__$1 = state_17910;var statearr_17917_17937 = state_17910__$1;(statearr_17917_17937[(2)] = inst_17906);
(statearr_17917_17937[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17911 === (3)))
{var inst_17908 = (state_17910[(2)]);var state_17910__$1 = state_17910;return cljs.core.async.impl.ioc_helpers.return_chan(state_17910__$1,inst_17908);
} else
{if((state_val_17911 === (12)))
{var inst_17886 = (state_17910[(7)]);var inst_17899 = (state_17910[(2)]);var tmp17916 = inst_17886;var inst_17886__$1 = tmp17916;var state_17910__$1 = (function (){var statearr_17918 = state_17910;(statearr_17918[(9)] = inst_17899);
(statearr_17918[(7)] = inst_17886__$1);
return statearr_17918;
})();var statearr_17919_17938 = state_17910__$1;(statearr_17919_17938[(2)] = null);
(statearr_17919_17938[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17911 === (2)))
{var inst_17886 = (state_17910[(7)]);var state_17910__$1 = state_17910;if(cljs.core.truth_(inst_17886))
{var statearr_17920_17939 = state_17910__$1;(statearr_17920_17939[(1)] = (4));
} else
{var statearr_17921_17940 = state_17910__$1;(statearr_17921_17940[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17911 === (11)))
{var inst_17904 = (state_17910[(2)]);var state_17910__$1 = state_17910;var statearr_17922_17941 = state_17910__$1;(statearr_17922_17941[(2)] = inst_17904);
(statearr_17922_17941[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17911 === (9)))
{var inst_17896 = (state_17910[(10)]);var state_17910__$1 = state_17910;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17910__$1,(12),out,inst_17896);
} else
{if((state_val_17911 === (5)))
{var state_17910__$1 = state_17910;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17910__$1,(8),in$);
} else
{if((state_val_17911 === (10)))
{var inst_17902 = cljs.core.async.close_BANG_(out);var state_17910__$1 = state_17910;var statearr_17923_17942 = state_17910__$1;(statearr_17923_17942[(2)] = inst_17902);
(statearr_17923_17942[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17911 === (8)))
{var inst_17896 = (state_17910[(10)]);var inst_17896__$1 = (state_17910[(2)]);var state_17910__$1 = (function (){var statearr_17924 = state_17910;(statearr_17924[(10)] = inst_17896__$1);
return statearr_17924;
})();if(cljs.core.truth_(inst_17896__$1))
{var statearr_17925_17943 = state_17910__$1;(statearr_17925_17943[(1)] = (9));
} else
{var statearr_17926_17944 = state_17910__$1;(statearr_17926_17944[(1)] = (10));
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
});})(c__5861__auto___17934,out))
;return ((function (switch__5846__auto__,c__5861__auto___17934,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17930 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17930[(0)] = state_machine__5847__auto__);
(statearr_17930[(1)] = (1));
return statearr_17930;
});
var state_machine__5847__auto____1 = (function (state_17910){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17910);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17931){if((e17931 instanceof Object))
{var ex__5850__auto__ = e17931;var statearr_17932_17945 = state_17910;(statearr_17932_17945[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17910);
return cljs.core.constant$keyword$16;
} else
{throw e17931;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17946 = state_17910;
state_17910 = G__17946;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17910){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17934,out))
})();var state__5863__auto__ = (function (){var statearr_17933 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17934);
return statearr_17933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17934,out))
);
return out;
});
wilkerdev.util.reactive.distinct = (function distinct(in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___18031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___18031,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___18031,out){
return (function (state_18009){var state_val_18010 = (state_18009[(1)]);if((state_val_18010 === (7)))
{var inst_18005 = (state_18009[(2)]);var state_18009__$1 = state_18009;var statearr_18011_18032 = state_18009__$1;(statearr_18011_18032[(2)] = inst_18005);
(statearr_18011_18032[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18010 === (1)))
{var inst_17989 = null;var state_18009__$1 = (function (){var statearr_18012 = state_18009;(statearr_18012[(7)] = inst_17989);
return statearr_18012;
})();var statearr_18013_18033 = state_18009__$1;(statearr_18013_18033[(2)] = null);
(statearr_18013_18033[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18010 === (4)))
{var inst_17992 = (state_18009[(8)]);var inst_17992__$1 = (state_18009[(2)]);var state_18009__$1 = (function (){var statearr_18014 = state_18009;(statearr_18014[(8)] = inst_17992__$1);
return statearr_18014;
})();if(cljs.core.truth_(inst_17992__$1))
{var statearr_18015_18034 = state_18009__$1;(statearr_18015_18034[(1)] = (5));
} else
{var statearr_18016_18035 = state_18009__$1;(statearr_18016_18035[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18010 === (6)))
{var inst_18003 = cljs.core.async.close_BANG_(out);var state_18009__$1 = state_18009;var statearr_18017_18036 = state_18009__$1;(statearr_18017_18036[(2)] = inst_18003);
(statearr_18017_18036[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18010 === (3)))
{var inst_18007 = (state_18009[(2)]);var state_18009__$1 = state_18009;return cljs.core.async.impl.ioc_helpers.return_chan(state_18009__$1,inst_18007);
} else
{if((state_val_18010 === (2)))
{var state_18009__$1 = state_18009;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18009__$1,(4),in$);
} else
{if((state_val_18010 === (11)))
{var inst_17997 = (state_18009[(2)]);var state_18009__$1 = state_18009;var statearr_18018_18037 = state_18009__$1;(statearr_18018_18037[(2)] = inst_17997);
(statearr_18018_18037[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18010 === (9)))
{var state_18009__$1 = state_18009;var statearr_18019_18038 = state_18009__$1;(statearr_18019_18038[(2)] = null);
(statearr_18019_18038[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18010 === (5)))
{var inst_17992 = (state_18009[(8)]);var inst_17989 = (state_18009[(7)]);var inst_17994 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_17992,inst_17989);var state_18009__$1 = state_18009;if(inst_17994)
{var statearr_18020_18039 = state_18009__$1;(statearr_18020_18039[(1)] = (8));
} else
{var statearr_18021_18040 = state_18009__$1;(statearr_18021_18040[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18010 === (10)))
{var inst_17992 = (state_18009[(8)]);var inst_18000 = (state_18009[(2)]);var inst_17989 = inst_17992;var state_18009__$1 = (function (){var statearr_18022 = state_18009;(statearr_18022[(9)] = inst_18000);
(statearr_18022[(7)] = inst_17989);
return statearr_18022;
})();var statearr_18023_18041 = state_18009__$1;(statearr_18023_18041[(2)] = null);
(statearr_18023_18041[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18010 === (8)))
{var inst_17992 = (state_18009[(8)]);var state_18009__$1 = state_18009;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18009__$1,(11),out,inst_17992);
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
});})(c__5861__auto___18031,out))
;return ((function (switch__5846__auto__,c__5861__auto___18031,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_18027 = [null,null,null,null,null,null,null,null,null,null];(statearr_18027[(0)] = state_machine__5847__auto__);
(statearr_18027[(1)] = (1));
return statearr_18027;
});
var state_machine__5847__auto____1 = (function (state_18009){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_18009);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e18028){if((e18028 instanceof Object))
{var ex__5850__auto__ = e18028;var statearr_18029_18042 = state_18009;(statearr_18029_18042[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18009);
return cljs.core.constant$keyword$16;
} else
{throw e18028;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__18043 = state_18009;
state_18009 = G__18043;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_18009){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_18009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___18031,out))
})();var state__5863__auto__ = (function (){var statearr_18030 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_18030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18031);
return statearr_18030;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___18031,out))
);
return out;
});
wilkerdev.util.reactive.take_until = (function() {
var take_until = null;
var take_until__2 = (function (pred_sentinel,in$){return take_until.cljs$core$IFn$_invoke$arity$3(pred_sentinel,in$,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
});
var take_until__3 = (function (pred_sentinel,in$,out){var c__5861__auto___18133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___18133){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___18133){
return (function (state_18111){var state_val_18112 = (state_18111[(1)]);if((state_val_18112 === (7)))
{var inst_18107 = (state_18111[(2)]);var state_18111__$1 = state_18111;var statearr_18113_18134 = state_18111__$1;(statearr_18113_18134[(2)] = inst_18107);
(statearr_18113_18134[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18112 === (1)))
{var state_18111__$1 = state_18111;var statearr_18114_18135 = state_18111__$1;(statearr_18114_18135[(2)] = null);
(statearr_18114_18135[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18112 === (4)))
{var inst_18092 = (state_18111[(7)]);var inst_18092__$1 = (state_18111[(2)]);var state_18111__$1 = (function (){var statearr_18115 = state_18111;(statearr_18115[(7)] = inst_18092__$1);
return statearr_18115;
})();if(cljs.core.truth_(inst_18092__$1))
{var statearr_18116_18136 = state_18111__$1;(statearr_18116_18136[(1)] = (5));
} else
{var statearr_18117_18137 = state_18111__$1;(statearr_18117_18137[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18112 === (6)))
{var inst_18105 = cljs.core.async.close_BANG_(out);var state_18111__$1 = state_18111;var statearr_18118_18138 = state_18111__$1;(statearr_18118_18138[(2)] = inst_18105);
(statearr_18118_18138[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18112 === (3)))
{var inst_18109 = (state_18111[(2)]);var state_18111__$1 = state_18111;return cljs.core.async.impl.ioc_helpers.return_chan(state_18111__$1,inst_18109);
} else
{if((state_val_18112 === (2)))
{var state_18111__$1 = state_18111;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18111__$1,(4),in$);
} else
{if((state_val_18112 === (11)))
{var inst_18103 = (state_18111[(2)]);var state_18111__$1 = state_18111;var statearr_18119_18139 = state_18111__$1;(statearr_18119_18139[(2)] = inst_18103);
(statearr_18119_18139[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18112 === (9)))
{var state_18111__$1 = state_18111;var statearr_18120_18140 = state_18111__$1;(statearr_18120_18140[(2)] = null);
(statearr_18120_18140[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18112 === (5)))
{var inst_18092 = (state_18111[(7)]);var state_18111__$1 = state_18111;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18111__$1,(8),out,inst_18092);
} else
{if((state_val_18112 === (10)))
{var inst_18101 = cljs.core.async.close_BANG_(out);var state_18111__$1 = state_18111;var statearr_18121_18141 = state_18111__$1;(statearr_18121_18141[(2)] = inst_18101);
(statearr_18121_18141[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18112 === (8)))
{var inst_18092 = (state_18111[(7)]);var inst_18095 = (state_18111[(2)]);var inst_18096 = (function (){var G__18122 = inst_18092;return (pred_sentinel.cljs$core$IFn$_invoke$arity$1 ? pred_sentinel.cljs$core$IFn$_invoke$arity$1(G__18122) : pred_sentinel.call(null,G__18122));
})();var inst_18097 = cljs.core.not(inst_18096);var state_18111__$1 = (function (){var statearr_18123 = state_18111;(statearr_18123[(8)] = inst_18095);
return statearr_18123;
})();if(inst_18097)
{var statearr_18124_18142 = state_18111__$1;(statearr_18124_18142[(1)] = (9));
} else
{var statearr_18125_18143 = state_18111__$1;(statearr_18125_18143[(1)] = (10));
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
});})(c__5861__auto___18133))
;return ((function (switch__5846__auto__,c__5861__auto___18133){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_18129 = [null,null,null,null,null,null,null,null,null];(statearr_18129[(0)] = state_machine__5847__auto__);
(statearr_18129[(1)] = (1));
return statearr_18129;
});
var state_machine__5847__auto____1 = (function (state_18111){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_18111);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e18130){if((e18130 instanceof Object))
{var ex__5850__auto__ = e18130;var statearr_18131_18144 = state_18111;(statearr_18131_18144[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18111);
return cljs.core.constant$keyword$16;
} else
{throw e18130;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__18145 = state_18111;
state_18111 = G__18145;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_18111){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_18111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___18133))
})();var state__5863__auto__ = (function (){var statearr_18132 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_18132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18133);
return statearr_18132;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___18133))
);
return out;
});
take_until = function(pred_sentinel,in$,out){
switch(arguments.length){
case 2:
return take_until__2.call(this,pred_sentinel,in$);
case 3:
return take_until__3.call(this,pred_sentinel,in$,out);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_until.cljs$core$IFn$_invoke$arity$2 = take_until__2;
take_until.cljs$core$IFn$_invoke$arity$3 = take_until__3;
return take_until;
})()
;
wilkerdev.util.reactive.drop_while = (function() {
var drop_while = null;
var drop_while__2 = (function (sentinel,in$){return drop_while.cljs$core$IFn$_invoke$arity$3(sentinel,in$,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
});
var drop_while__3 = (function (sentinel,in$,out){var c__5861__auto___18263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___18263){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___18263){
return (function (state_18234){var state_val_18235 = (state_18234[(1)]);if((state_val_18235 === (7)))
{var inst_18230 = (state_18234[(2)]);var state_18234__$1 = state_18234;var statearr_18236_18264 = state_18234__$1;(statearr_18236_18264[(2)] = inst_18230);
(statearr_18236_18264[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18235 === (1)))
{var inst_18206 = true;var state_18234__$1 = (function (){var statearr_18237 = state_18234;(statearr_18237[(7)] = inst_18206);
return statearr_18237;
})();var statearr_18238_18265 = state_18234__$1;(statearr_18238_18265[(2)] = null);
(statearr_18238_18265[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18235 === (4)))
{var inst_18209 = (state_18234[(8)]);var inst_18209__$1 = (state_18234[(2)]);var state_18234__$1 = (function (){var statearr_18239 = state_18234;(statearr_18239[(8)] = inst_18209__$1);
return statearr_18239;
})();if(cljs.core.truth_(inst_18209__$1))
{var statearr_18240_18266 = state_18234__$1;(statearr_18240_18266[(1)] = (5));
} else
{var statearr_18241_18267 = state_18234__$1;(statearr_18241_18267[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18235 === (15)))
{var inst_18223 = (state_18234[(2)]);var inst_18206 = false;var state_18234__$1 = (function (){var statearr_18242 = state_18234;(statearr_18242[(7)] = inst_18206);
(statearr_18242[(9)] = inst_18223);
return statearr_18242;
})();var statearr_18243_18268 = state_18234__$1;(statearr_18243_18268[(2)] = null);
(statearr_18243_18268[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18235 === (13)))
{var inst_18220 = (state_18234[(2)]);var state_18234__$1 = state_18234;var statearr_18244_18269 = state_18234__$1;(statearr_18244_18269[(2)] = inst_18220);
(statearr_18244_18269[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18235 === (6)))
{var inst_18228 = cljs.core.async.close_BANG_(out);var state_18234__$1 = state_18234;var statearr_18245_18270 = state_18234__$1;(statearr_18245_18270[(2)] = inst_18228);
(statearr_18245_18270[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18235 === (3)))
{var inst_18232 = (state_18234[(2)]);var state_18234__$1 = state_18234;return cljs.core.async.impl.ioc_helpers.return_chan(state_18234__$1,inst_18232);
} else
{if((state_val_18235 === (12)))
{var inst_18209 = (state_18234[(8)]);var state_18234__$1 = state_18234;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18234__$1,(14),out,inst_18209);
} else
{if((state_val_18235 === (2)))
{var state_18234__$1 = state_18234;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18234__$1,(4),in$);
} else
{if((state_val_18235 === (11)))
{var inst_18206 = true;var state_18234__$1 = (function (){var statearr_18246 = state_18234;(statearr_18246[(7)] = inst_18206);
return statearr_18246;
})();var statearr_18247_18271 = state_18234__$1;(statearr_18247_18271[(2)] = null);
(statearr_18247_18271[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18235 === (9)))
{var inst_18209 = (state_18234[(8)]);var state_18234__$1 = state_18234;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18234__$1,(15),out,inst_18209);
} else
{if((state_val_18235 === (5)))
{var inst_18206 = (state_18234[(7)]);var state_18234__$1 = state_18234;if(cljs.core.truth_(inst_18206))
{var statearr_18248_18272 = state_18234__$1;(statearr_18248_18272[(1)] = (8));
} else
{var statearr_18249_18273 = state_18234__$1;(statearr_18249_18273[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18235 === (14)))
{var inst_18217 = (state_18234[(2)]);var inst_18206 = false;var state_18234__$1 = (function (){var statearr_18250 = state_18234;(statearr_18250[(7)] = inst_18206);
(statearr_18250[(10)] = inst_18217);
return statearr_18250;
})();var statearr_18251_18274 = state_18234__$1;(statearr_18251_18274[(2)] = null);
(statearr_18251_18274[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18235 === (10)))
{var inst_18226 = (state_18234[(2)]);var state_18234__$1 = state_18234;var statearr_18252_18275 = state_18234__$1;(statearr_18252_18275[(2)] = inst_18226);
(statearr_18252_18275[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18235 === (8)))
{var inst_18209 = (state_18234[(8)]);var inst_18212 = (function (){var G__18253 = inst_18209;return (sentinel.cljs$core$IFn$_invoke$arity$1 ? sentinel.cljs$core$IFn$_invoke$arity$1(G__18253) : sentinel.call(null,G__18253));
})();var state_18234__$1 = state_18234;if(cljs.core.truth_(inst_18212))
{var statearr_18254_18276 = state_18234__$1;(statearr_18254_18276[(1)] = (11));
} else
{var statearr_18255_18277 = state_18234__$1;(statearr_18255_18277[(1)] = (12));
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
});})(c__5861__auto___18263))
;return ((function (switch__5846__auto__,c__5861__auto___18263){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_18259 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18259[(0)] = state_machine__5847__auto__);
(statearr_18259[(1)] = (1));
return statearr_18259;
});
var state_machine__5847__auto____1 = (function (state_18234){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_18234);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e18260){if((e18260 instanceof Object))
{var ex__5850__auto__ = e18260;var statearr_18261_18278 = state_18234;(statearr_18261_18278[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18234);
return cljs.core.constant$keyword$16;
} else
{throw e18260;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__18279 = state_18234;
state_18234 = G__18279;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_18234){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_18234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___18263))
})();var state__5863__auto__ = (function (){var statearr_18262 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_18262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18263);
return statearr_18262;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___18263))
);
return out;
});
drop_while = function(sentinel,in$,out){
switch(arguments.length){
case 2:
return drop_while__2.call(this,sentinel,in$);
case 3:
return drop_while__3.call(this,sentinel,in$,out);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_while.cljs$core$IFn$_invoke$arity$2 = drop_while__2;
drop_while.cljs$core$IFn$_invoke$arity$3 = drop_while__3;
return drop_while;
})()
;
wilkerdev.util.reactive.toggle = (function toggle(in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var control = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___18430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___18430,out,control){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___18430,out,control){
return (function (state_18398){var state_val_18399 = (state_18398[(1)]);if((state_val_18399 === (7)))
{var inst_18393 = (state_18398[(2)]);var inst_18355 = inst_18393;var state_18398__$1 = (function (){var statearr_18400 = state_18398;(statearr_18400[(7)] = inst_18355);
return statearr_18400;
})();var statearr_18401_18431 = state_18398__$1;(statearr_18401_18431[(2)] = null);
(statearr_18401_18431[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18399 === (1)))
{var inst_18355 = true;var state_18398__$1 = (function (){var statearr_18402 = state_18398;(statearr_18402[(7)] = inst_18355);
return statearr_18402;
})();var statearr_18403_18432 = state_18398__$1;(statearr_18403_18432[(2)] = null);
(statearr_18403_18432[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18399 === (4)))
{var inst_18368 = (state_18398[(8)]);var inst_18366 = (state_18398[(9)]);var inst_18366__$1 = (state_18398[(2)]);var inst_18367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18366__$1,(0),null);var inst_18368__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18366__$1,(1),null);var inst_18369 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18368__$1,in$);var state_18398__$1 = (function (){var statearr_18404 = state_18398;(statearr_18404[(10)] = inst_18367);
(statearr_18404[(8)] = inst_18368__$1);
(statearr_18404[(9)] = inst_18366__$1);
return statearr_18404;
})();if(inst_18369)
{var statearr_18405_18433 = state_18398__$1;(statearr_18405_18433[(1)] = (5));
} else
{var statearr_18406_18434 = state_18398__$1;(statearr_18406_18434[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18399 === (15)))
{var inst_18367 = (state_18398[(10)]);var state_18398__$1 = state_18398;var statearr_18407_18435 = state_18398__$1;(statearr_18407_18435[(2)] = inst_18367);
(statearr_18407_18435[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18399 === (13)))
{var inst_18368 = (state_18398[(8)]);var inst_18385 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18368,cljs.core.constant$keyword$7);var state_18398__$1 = state_18398;if(inst_18385)
{var statearr_18408_18436 = state_18398__$1;(statearr_18408_18436[(1)] = (15));
} else
{var statearr_18409_18437 = state_18398__$1;(statearr_18409_18437[(1)] = (16));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18399 === (6)))
{var inst_18368 = (state_18398[(8)]);var inst_18380 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18368,control);var state_18398__$1 = state_18398;if(inst_18380)
{var statearr_18410_18438 = state_18398__$1;(statearr_18410_18438[(1)] = (12));
} else
{var statearr_18411_18439 = state_18398__$1;(statearr_18411_18439[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18399 === (17)))
{var inst_18389 = (state_18398[(2)]);var state_18398__$1 = state_18398;var statearr_18412_18440 = state_18398__$1;(statearr_18412_18440[(2)] = inst_18389);
(statearr_18412_18440[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18399 === (3)))
{var inst_18396 = (state_18398[(2)]);var state_18398__$1 = state_18398;return cljs.core.async.impl.ioc_helpers.return_chan(state_18398__$1,inst_18396);
} else
{if((state_val_18399 === (12)))
{var inst_18366 = (state_18398[(9)]);var inst_18383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18366,(0),null);var state_18398__$1 = state_18398;var statearr_18413_18441 = state_18398__$1;(statearr_18413_18441[(2)] = inst_18383);
(statearr_18413_18441[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18399 === (2)))
{var inst_18362 = cljs.core.PersistentVector.EMPTY_NODE;var inst_18363 = [in$,control];var inst_18364 = (new cljs.core.PersistentVector(null,2,(5),inst_18362,inst_18363,null));var state_18398__$1 = state_18398;return cljs.core.async.ioc_alts_BANG_(state_18398__$1,(4),inst_18364);
} else
{if((state_val_18399 === (11)))
{var inst_18375 = (state_18398[(2)]);var state_18398__$1 = state_18398;var statearr_18414_18442 = state_18398__$1;(statearr_18414_18442[(2)] = inst_18375);
(statearr_18414_18442[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18399 === (9)))
{var state_18398__$1 = state_18398;var statearr_18415_18443 = state_18398__$1;(statearr_18415_18443[(2)] = null);
(statearr_18415_18443[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18399 === (5)))
{var inst_18355 = (state_18398[(7)]);var inst_18366 = (state_18398[(9)]);var inst_18372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18366,(0),null);var state_18398__$1 = (function (){var statearr_18416 = state_18398;(statearr_18416[(11)] = inst_18372);
return statearr_18416;
})();if(cljs.core.truth_(inst_18355))
{var statearr_18417_18444 = state_18398__$1;(statearr_18417_18444[(1)] = (8));
} else
{var statearr_18418_18445 = state_18398__$1;(statearr_18418_18445[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18399 === (14)))
{var inst_18391 = (state_18398[(2)]);var state_18398__$1 = state_18398;var statearr_18419_18446 = state_18398__$1;(statearr_18419_18446[(2)] = inst_18391);
(statearr_18419_18446[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18399 === (16)))
{var state_18398__$1 = state_18398;var statearr_18420_18447 = state_18398__$1;(statearr_18420_18447[(2)] = null);
(statearr_18420_18447[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18399 === (10)))
{var inst_18355 = (state_18398[(7)]);var inst_18378 = (state_18398[(2)]);var state_18398__$1 = (function (){var statearr_18421 = state_18398;(statearr_18421[(12)] = inst_18378);
return statearr_18421;
})();var statearr_18422_18448 = state_18398__$1;(statearr_18422_18448[(2)] = inst_18355);
(statearr_18422_18448[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18399 === (8)))
{var inst_18372 = (state_18398[(11)]);var state_18398__$1 = state_18398;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18398__$1,(11),out,inst_18372);
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
});})(c__5861__auto___18430,out,control))
;return ((function (switch__5846__auto__,c__5861__auto___18430,out,control){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_18426 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18426[(0)] = state_machine__5847__auto__);
(statearr_18426[(1)] = (1));
return statearr_18426;
});
var state_machine__5847__auto____1 = (function (state_18398){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_18398);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e18427){if((e18427 instanceof Object))
{var ex__5850__auto__ = e18427;var statearr_18428_18449 = state_18398;(statearr_18428_18449[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18398);
return cljs.core.constant$keyword$16;
} else
{throw e18427;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__18450 = state_18398;
state_18398 = G__18450;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_18398){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_18398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___18430,out,control))
})();var state__5863__auto__ = (function (){var statearr_18429 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_18429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18430);
return statearr_18429;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___18430,out,control))
);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$33,out,cljs.core.constant$keyword$34,control], null);
});
wilkerdev.util.reactive.barrier = (function barrier(cs){var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__){
return (function (state_18505){var state_val_18506 = (state_18505[(1)]);if((state_val_18506 === (7)))
{var inst_18493 = (state_18505[(7)]);var inst_18490 = (state_18505[(8)]);var inst_18496 = (state_18505[(2)]);var inst_18497 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_18490,inst_18496);var inst_18489 = inst_18493;var inst_18490__$1 = inst_18497;var state_18505__$1 = (function (){var statearr_18507 = state_18505;(statearr_18507[(8)] = inst_18490__$1);
(statearr_18507[(9)] = inst_18489);
return statearr_18507;
})();var statearr_18508_18523 = state_18505__$1;(statearr_18508_18523[(2)] = null);
(statearr_18508_18523[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18506 === (6)))
{var inst_18501 = (state_18505[(2)]);var state_18505__$1 = state_18505;var statearr_18509_18524 = state_18505__$1;(statearr_18509_18524[(2)] = inst_18501);
(statearr_18509_18524[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18506 === (5)))
{var inst_18490 = (state_18505[(8)]);var state_18505__$1 = state_18505;var statearr_18510_18525 = state_18505__$1;(statearr_18510_18525[(2)] = inst_18490);
(statearr_18510_18525[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18506 === (4)))
{var inst_18489 = (state_18505[(9)]);var inst_18493 = cljs.core.next(inst_18489);var inst_18494 = cljs.core.first(inst_18489);var state_18505__$1 = (function (){var statearr_18511 = state_18505;(statearr_18511[(7)] = inst_18493);
return statearr_18511;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18505__$1,(7),inst_18494);
} else
{if((state_val_18506 === (3)))
{var inst_18503 = (state_18505[(2)]);var state_18505__$1 = state_18505;return cljs.core.async.impl.ioc_helpers.return_chan(state_18505__$1,inst_18503);
} else
{if((state_val_18506 === (2)))
{var inst_18489 = (state_18505[(9)]);var state_18505__$1 = state_18505;if(cljs.core.truth_(inst_18489))
{var statearr_18512_18526 = state_18505__$1;(statearr_18512_18526[(1)] = (4));
} else
{var statearr_18513_18527 = state_18505__$1;(statearr_18513_18527[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18506 === (1)))
{var inst_18487 = cljs.core.seq(cs);var inst_18488 = cljs.core.PersistentVector.EMPTY;var inst_18489 = inst_18487;var inst_18490 = inst_18488;var state_18505__$1 = (function (){var statearr_18514 = state_18505;(statearr_18514[(8)] = inst_18490);
(statearr_18514[(9)] = inst_18489);
return statearr_18514;
})();var statearr_18515_18528 = state_18505__$1;(statearr_18515_18528[(2)] = null);
(statearr_18515_18528[(1)] = (2));
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
var state_machine__5847__auto____0 = (function (){var statearr_18519 = [null,null,null,null,null,null,null,null,null,null];(statearr_18519[(0)] = state_machine__5847__auto__);
(statearr_18519[(1)] = (1));
return statearr_18519;
});
var state_machine__5847__auto____1 = (function (state_18505){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_18505);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e18520){if((e18520 instanceof Object))
{var ex__5850__auto__ = e18520;var statearr_18521_18529 = state_18505;(statearr_18521_18529[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18505);
return cljs.core.constant$keyword$16;
} else
{throw e18520;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__18530 = state_18505;
state_18505 = G__18530;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_18505){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_18505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__))
})();var state__5863__auto__ = (function (){var statearr_18522 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_18522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_18522;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__))
);
return c__5861__auto__;
});
wilkerdev.util.reactive.cyclic_barrier = (function cyclic_barrier(cs){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___18575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___18575,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___18575,out){
return (function (state_18563){var state_val_18564 = (state_18563[(1)]);if((state_val_18564 === (5)))
{var inst_18556 = (state_18563[(2)]);var state_18563__$1 = state_18563;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18563__$1,(4),out,inst_18556);
} else
{if((state_val_18564 === (4)))
{var inst_18558 = (state_18563[(2)]);var state_18563__$1 = (function (){var statearr_18565 = state_18563;(statearr_18565[(7)] = inst_18558);
return statearr_18565;
})();var statearr_18566_18576 = state_18563__$1;(statearr_18566_18576[(2)] = null);
(statearr_18566_18576[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18564 === (3)))
{var inst_18561 = (state_18563[(2)]);var state_18563__$1 = state_18563;return cljs.core.async.impl.ioc_helpers.return_chan(state_18563__$1,inst_18561);
} else
{if((state_val_18564 === (2)))
{var inst_18554 = wilkerdev.util.reactive.barrier(cs);var state_18563__$1 = state_18563;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18563__$1,(5),inst_18554);
} else
{if((state_val_18564 === (1)))
{var state_18563__$1 = state_18563;var statearr_18567_18577 = state_18563__$1;(statearr_18567_18577[(2)] = null);
(statearr_18567_18577[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
});})(c__5861__auto___18575,out))
;return ((function (switch__5846__auto__,c__5861__auto___18575,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_18571 = [null,null,null,null,null,null,null,null];(statearr_18571[(0)] = state_machine__5847__auto__);
(statearr_18571[(1)] = (1));
return statearr_18571;
});
var state_machine__5847__auto____1 = (function (state_18563){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_18563);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e18572){if((e18572 instanceof Object))
{var ex__5850__auto__ = e18572;var statearr_18573_18578 = state_18563;(statearr_18573_18578[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18563);
return cljs.core.constant$keyword$16;
} else
{throw e18572;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__18579 = state_18563;
state_18563 = G__18579;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_18563){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_18563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___18575,out))
})();var state__5863__auto__ = (function (){var statearr_18574 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_18574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18575);
return statearr_18574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___18575,out))
);
return out;
});
wilkerdev.util.reactive.throttle_STAR_ = (function() {
var throttle_STAR_ = null;
var throttle_STAR___2 = (function (in$,msecs){return throttle_STAR_.cljs$core$IFn$_invoke$arity$3(in$,msecs,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
});
var throttle_STAR___3 = (function (in$,msecs,out){return throttle_STAR_.cljs$core$IFn$_invoke$arity$4(in$,msecs,out,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
});
var throttle_STAR___4 = (function (in$,msecs,out,control){var c__5861__auto___18877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___18877){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___18877){
return (function (state_18824){var state_val_18825 = (state_18824[(1)]);if((state_val_18825 === (7)))
{var inst_18820 = (state_18824[(2)]);var state_18824__$1 = state_18824;var statearr_18826_18878 = state_18824__$1;(statearr_18826_18878[(2)] = inst_18820);
(statearr_18826_18878[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (20)))
{var inst_18736 = (state_18824[(7)]);var inst_18786 = cljs.core.PersistentVector.EMPTY_NODE;var inst_18787 = [cljs.core.constant$keyword$35,inst_18736];var inst_18788 = (new cljs.core.PersistentVector(null,2,(5),inst_18786,inst_18787,null));var state_18824__$1 = state_18824;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18824__$1,(23),out,inst_18788);
} else
{if((state_val_18825 === (27)))
{var inst_18737 = (state_18824[(8)]);var inst_18806 = cljs.core.pop(inst_18737);var state_18824__$1 = state_18824;var statearr_18827_18879 = state_18824__$1;(statearr_18827_18879[(2)] = inst_18806);
(statearr_18827_18879[(1)] = (29));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (1)))
{var inst_18732 = cljs.core.PersistentVector.EMPTY_NODE;var inst_18733 = [in$,control];var inst_18734 = (new cljs.core.PersistentVector(null,2,(5),inst_18732,inst_18733,null));var inst_18735 = cljs.core.constant$keyword$36;var inst_18736 = null;var inst_18737 = inst_18734;var state_18824__$1 = (function (){var statearr_18828 = state_18824;(statearr_18828[(9)] = inst_18735);
(statearr_18828[(7)] = inst_18736);
(statearr_18828[(8)] = inst_18737);
return statearr_18828;
})();var statearr_18829_18880 = state_18824__$1;(statearr_18829_18880[(2)] = null);
(statearr_18829_18880[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (24)))
{var inst_18737 = (state_18824[(8)]);var inst_18803 = cljs.core.count(inst_18737);var inst_18804 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18803,(3));var state_18824__$1 = state_18824;if(inst_18804)
{var statearr_18830_18881 = state_18824__$1;(statearr_18830_18881[(1)] = (27));
} else
{var statearr_18831_18882 = state_18824__$1;(statearr_18831_18882[(1)] = (28));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (4)))
{var inst_18747 = (state_18824[(10)]);var inst_18745 = (state_18824[(2)]);var inst_18746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18745,(0),null);var inst_18747__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18745,(1),null);var inst_18751 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$,inst_18747__$1);var state_18824__$1 = (function (){var statearr_18833 = state_18824;(statearr_18833[(11)] = inst_18746);
(statearr_18833[(10)] = inst_18747__$1);
return statearr_18833;
})();if(inst_18751)
{var statearr_18834_18883 = state_18824__$1;(statearr_18834_18883[(1)] = (5));
} else
{var statearr_18835_18884 = state_18824__$1;(statearr_18835_18884[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (15)))
{var inst_18779 = (state_18824[(2)]);var state_18824__$1 = state_18824;var statearr_18836_18885 = state_18824__$1;(statearr_18836_18885[(2)] = inst_18779);
(statearr_18836_18885[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (21)))
{var inst_18736 = (state_18824[(7)]);var inst_18737 = (state_18824[(8)]);var inst_18796 = cljs.core.pop(inst_18737);var tmp18832 = inst_18736;var inst_18735 = cljs.core.constant$keyword$36;var inst_18736__$1 = tmp18832;var inst_18737__$1 = inst_18796;var state_18824__$1 = (function (){var statearr_18837 = state_18824;(statearr_18837[(9)] = inst_18735);
(statearr_18837[(7)] = inst_18736__$1);
(statearr_18837[(8)] = inst_18737__$1);
return statearr_18837;
})();var statearr_18838_18886 = state_18824__$1;(statearr_18838_18886[(2)] = null);
(statearr_18838_18886[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (13)))
{var inst_18746 = (state_18824[(11)]);var state_18824__$1 = state_18824;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18824__$1,(16),out,inst_18746);
} else
{if((state_val_18825 === (22)))
{var inst_18799 = (state_18824[(2)]);var state_18824__$1 = state_18824;var statearr_18839_18887 = state_18824__$1;(statearr_18839_18887[(2)] = inst_18799);
(statearr_18839_18887[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (29)))
{var inst_18809 = (state_18824[(2)]);var inst_18735 = cljs.core.constant$keyword$36;var inst_18736 = null;var inst_18737 = inst_18809;var state_18824__$1 = (function (){var statearr_18840 = state_18824;(statearr_18840[(9)] = inst_18735);
(statearr_18840[(7)] = inst_18736);
(statearr_18840[(8)] = inst_18737);
return statearr_18840;
})();var statearr_18841_18888 = state_18824__$1;(statearr_18841_18888[(2)] = null);
(statearr_18841_18888[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (6)))
{var inst_18742 = (state_18824[(12)]);var inst_18747 = (state_18824[(10)]);var inst_18783 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18742,inst_18747);var state_18824__$1 = state_18824;if(inst_18783)
{var statearr_18842_18889 = state_18824__$1;(statearr_18842_18889[(1)] = (17));
} else
{var statearr_18843_18890 = state_18824__$1;(statearr_18843_18890[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (28)))
{var inst_18737 = (state_18824[(8)]);var state_18824__$1 = state_18824;var statearr_18844_18891 = state_18824__$1;(statearr_18844_18891[(2)] = inst_18737);
(statearr_18844_18891[(1)] = (29));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (25)))
{var inst_18747 = (state_18824[(10)]);var inst_18812 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18747));var inst_18813 = (new Error(inst_18812));var inst_18814 = (function(){throw inst_18813})();var state_18824__$1 = state_18824;var statearr_18845_18892 = state_18824__$1;(statearr_18845_18892[(2)] = inst_18814);
(statearr_18845_18892[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (17)))
{var inst_18736 = (state_18824[(7)]);var state_18824__$1 = state_18824;if(cljs.core.truth_(inst_18736))
{var statearr_18847_18893 = state_18824__$1;(statearr_18847_18893[(1)] = (20));
} else
{var statearr_18848_18894 = state_18824__$1;(statearr_18848_18894[(1)] = (21));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (3)))
{var inst_18822 = (state_18824[(2)]);var state_18824__$1 = state_18824;return cljs.core.async.impl.ioc_helpers.return_chan(state_18824__$1,inst_18822);
} else
{if((state_val_18825 === (12)))
{var inst_18736 = (state_18824[(7)]);var inst_18737 = (state_18824[(8)]);var inst_18764 = (state_18824[(2)]);var inst_18765 = cljs.core.async.timeout(msecs);var inst_18766 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_18737,inst_18765);var tmp18846 = inst_18736;var inst_18735 = cljs.core.constant$keyword$37;var inst_18736__$1 = tmp18846;var inst_18737__$1 = inst_18766;var state_18824__$1 = (function (){var statearr_18850 = state_18824;(statearr_18850[(13)] = inst_18764);
(statearr_18850[(9)] = inst_18735);
(statearr_18850[(7)] = inst_18736__$1);
(statearr_18850[(8)] = inst_18737__$1);
return statearr_18850;
})();var statearr_18851_18895 = state_18824__$1;(statearr_18851_18895[(2)] = null);
(statearr_18851_18895[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (2)))
{var inst_18737 = (state_18824[(8)]);var inst_18740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18737,(0),null);var inst_18741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18737,(1),null);var inst_18742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18737,(2),null);var state_18824__$1 = (function (){var statearr_18852 = state_18824;(statearr_18852[(12)] = inst_18742);
(statearr_18852[(14)] = inst_18741);
(statearr_18852[(15)] = inst_18740);
return statearr_18852;
})();return cljs.core.async.ioc_alts_BANG_(state_18824__$1,(4),inst_18737);
} else
{if((state_val_18825 === (23)))
{var inst_18735 = (state_18824[(9)]);var inst_18737 = (state_18824[(8)]);var inst_18790 = (state_18824[(2)]);var inst_18791 = cljs.core.pop(inst_18737);var inst_18792 = cljs.core.async.timeout(msecs);var inst_18793 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_18791,inst_18792);var tmp18849 = inst_18735;var inst_18735__$1 = tmp18849;var inst_18736 = null;var inst_18737__$1 = inst_18793;var state_18824__$1 = (function (){var statearr_18853 = state_18824;(statearr_18853[(16)] = inst_18790);
(statearr_18853[(9)] = inst_18735__$1);
(statearr_18853[(7)] = inst_18736);
(statearr_18853[(8)] = inst_18737__$1);
return statearr_18853;
})();var statearr_18854_18896 = state_18824__$1;(statearr_18854_18896[(2)] = null);
(statearr_18854_18896[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (19)))
{var inst_18818 = (state_18824[(2)]);var state_18824__$1 = state_18824;var statearr_18855_18897 = state_18824__$1;(statearr_18855_18897[(2)] = inst_18818);
(statearr_18855_18897[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (11)))
{var inst_18746 = (state_18824[(11)]);var inst_18759 = (state_18824[(2)]);var inst_18760 = cljs.core.PersistentVector.EMPTY_NODE;var inst_18761 = [cljs.core.constant$keyword$35,inst_18746];var inst_18762 = (new cljs.core.PersistentVector(null,2,(5),inst_18760,inst_18761,null));var state_18824__$1 = (function (){var statearr_18856 = state_18824;(statearr_18856[(17)] = inst_18759);
return statearr_18856;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18824__$1,(12),out,inst_18762);
} else
{if((state_val_18825 === (9)))
{var inst_18735 = (state_18824[(9)]);var inst_18769 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$37,inst_18735);var state_18824__$1 = state_18824;if(inst_18769)
{var statearr_18857_18898 = state_18824__$1;(statearr_18857_18898[(1)] = (13));
} else
{var statearr_18858_18899 = state_18824__$1;(statearr_18858_18899[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (5)))
{var inst_18735 = (state_18824[(9)]);var inst_18756 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$36,inst_18735);var state_18824__$1 = state_18824;if(inst_18756)
{var statearr_18859_18900 = state_18824__$1;(statearr_18859_18900[(1)] = (8));
} else
{var statearr_18860_18901 = state_18824__$1;(statearr_18860_18901[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (14)))
{var inst_18735 = (state_18824[(9)]);var inst_18775 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18735));var inst_18776 = (new Error(inst_18775));var inst_18777 = (function(){throw inst_18776})();var state_18824__$1 = state_18824;var statearr_18863_18902 = state_18824__$1;(statearr_18863_18902[(2)] = inst_18777);
(statearr_18863_18902[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (26)))
{var inst_18816 = (state_18824[(2)]);var state_18824__$1 = state_18824;var statearr_18864_18903 = state_18824__$1;(statearr_18864_18903[(2)] = inst_18816);
(statearr_18864_18903[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (16)))
{var inst_18746 = (state_18824[(11)]);var inst_18735 = (state_18824[(9)]);var inst_18737 = (state_18824[(8)]);var inst_18772 = (state_18824[(2)]);var tmp18861 = inst_18735;var tmp18862 = inst_18737;var inst_18735__$1 = tmp18861;var inst_18736 = inst_18746;var inst_18737__$1 = tmp18862;var state_18824__$1 = (function (){var statearr_18865 = state_18824;(statearr_18865[(9)] = inst_18735__$1);
(statearr_18865[(18)] = inst_18772);
(statearr_18865[(7)] = inst_18736);
(statearr_18865[(8)] = inst_18737__$1);
return statearr_18865;
})();var statearr_18866_18904 = state_18824__$1;(statearr_18866_18904[(2)] = null);
(statearr_18866_18904[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (10)))
{var inst_18781 = (state_18824[(2)]);var state_18824__$1 = state_18824;var statearr_18867_18905 = state_18824__$1;(statearr_18867_18905[(2)] = inst_18781);
(statearr_18867_18905[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (18)))
{var inst_18747 = (state_18824[(10)]);var inst_18801 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(control,inst_18747);var state_18824__$1 = state_18824;if(inst_18801)
{var statearr_18868_18906 = state_18824__$1;(statearr_18868_18906[(1)] = (24));
} else
{var statearr_18869_18907 = state_18824__$1;(statearr_18869_18907[(1)] = (25));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18825 === (8)))
{var inst_18746 = (state_18824[(11)]);var state_18824__$1 = state_18824;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18824__$1,(11),out,inst_18746);
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
});})(c__5861__auto___18877))
;return ((function (switch__5846__auto__,c__5861__auto___18877){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_18873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18873[(0)] = state_machine__5847__auto__);
(statearr_18873[(1)] = (1));
return statearr_18873;
});
var state_machine__5847__auto____1 = (function (state_18824){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_18824);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e18874){if((e18874 instanceof Object))
{var ex__5850__auto__ = e18874;var statearr_18875_18908 = state_18824;(statearr_18875_18908[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18824);
return cljs.core.constant$keyword$16;
} else
{throw e18874;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__18909 = state_18824;
state_18824 = G__18909;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_18824){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_18824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___18877))
})();var state__5863__auto__ = (function (){var statearr_18876 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_18876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18877);
return statearr_18876;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___18877))
);
return out;
});
throttle_STAR_ = function(in$,msecs,out,control){
switch(arguments.length){
case 2:
return throttle_STAR___2.call(this,in$,msecs);
case 3:
return throttle_STAR___3.call(this,in$,msecs,out);
case 4:
return throttle_STAR___4.call(this,in$,msecs,out,control);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
throttle_STAR_.cljs$core$IFn$_invoke$arity$2 = throttle_STAR___2;
throttle_STAR_.cljs$core$IFn$_invoke$arity$3 = throttle_STAR___3;
throttle_STAR_.cljs$core$IFn$_invoke$arity$4 = throttle_STAR___4;
return throttle_STAR_;
})()
;
wilkerdev.util.reactive.throttle_msg_QMARK_ = (function throttle_msg_QMARK_(x){return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),cljs.core.constant$keyword$35));
});
wilkerdev.util.reactive.throttle = (function() {
var throttle = null;
var throttle__2 = (function (in$,msecs){return throttle.cljs$core$IFn$_invoke$arity$3(in$,msecs,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
});
var throttle__3 = (function (in$,msecs,out){return wilkerdev.util.reactive.map(cljs.core.second,wilkerdev.util.reactive.filter((function (p1__18910_SHARP_){return (cljs.core.vector_QMARK_(p1__18910_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__18910_SHARP_),cljs.core.constant$keyword$35));
}),wilkerdev.util.reactive.throttle_STAR_.cljs$core$IFn$_invoke$arity$3(in$,msecs,out)));
});
throttle = function(in$,msecs,out){
switch(arguments.length){
case 2:
return throttle__2.call(this,in$,msecs);
case 3:
return throttle__3.call(this,in$,msecs,out);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
throttle.cljs$core$IFn$_invoke$arity$2 = throttle__2;
throttle.cljs$core$IFn$_invoke$arity$3 = throttle__3;
return throttle;
})()
;
wilkerdev.util.reactive.debounce = (function() {
var debounce = null;
var debounce__2 = (function (source,msecs){return debounce.cljs$core$IFn$_invoke$arity$3(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),source,msecs);
});
var debounce__3 = (function (out,source,msecs){var c__5861__auto___19105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___19105){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___19105){
return (function (state_19071){var state_val_19072 = (state_19071[(1)]);if((state_val_19072 === (7)))
{var inst_19067 = (state_19071[(2)]);var state_19071__$1 = state_19071;var statearr_19073_19106 = state_19071__$1;(statearr_19073_19106[(2)] = inst_19067);
(statearr_19073_19106[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19072 === (1)))
{var inst_19011 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19012 = [source];var inst_19013 = (new cljs.core.PersistentVector(null,1,(5),inst_19011,inst_19012,null));var inst_19014 = cljs.core.constant$keyword$36;var inst_19015 = inst_19013;var state_19071__$1 = (function (){var statearr_19074 = state_19071;(statearr_19074[(7)] = inst_19015);
(statearr_19074[(8)] = inst_19014);
return statearr_19074;
})();var statearr_19075_19107 = state_19071__$1;(statearr_19075_19107[(2)] = null);
(statearr_19075_19107[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19072 === (4)))
{var inst_19024 = (state_19071[(9)]);var inst_19022 = (state_19071[(2)]);var inst_19023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19022,(0),null);var inst_19024__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19022,(1),null);var inst_19028 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source,inst_19024__$1);var state_19071__$1 = (function (){var statearr_19076 = state_19071;(statearr_19076[(10)] = inst_19023);
(statearr_19076[(9)] = inst_19024__$1);
return statearr_19076;
})();if(inst_19028)
{var statearr_19077_19108 = state_19071__$1;(statearr_19077_19108[(1)] = (5));
} else
{var statearr_19078_19109 = state_19071__$1;(statearr_19078_19109[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19072 === (15)))
{var inst_19015 = (state_19071[(7)]);var inst_19058 = cljs.core.pop(inst_19015);var inst_19014 = cljs.core.constant$keyword$36;var inst_19015__$1 = inst_19058;var state_19071__$1 = (function (){var statearr_19079 = state_19071;(statearr_19079[(7)] = inst_19015__$1);
(statearr_19079[(8)] = inst_19014);
return statearr_19079;
})();var statearr_19080_19110 = state_19071__$1;(statearr_19080_19110[(2)] = null);
(statearr_19080_19110[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19072 === (13)))
{var inst_19014 = (state_19071[(8)]);var inst_19048 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19014));var inst_19049 = (new Error(inst_19048));var inst_19050 = (function(){throw inst_19049})();var state_19071__$1 = state_19071;var statearr_19081_19111 = state_19071__$1;(statearr_19081_19111[(2)] = inst_19050);
(statearr_19081_19111[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19072 === (6)))
{var inst_19019 = (state_19071[(11)]);var inst_19024 = (state_19071[(9)]);var inst_19056 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19019,inst_19024);var state_19071__$1 = state_19071;if(inst_19056)
{var statearr_19082_19112 = state_19071__$1;(statearr_19082_19112[(1)] = (15));
} else
{var statearr_19083_19113 = state_19071__$1;(statearr_19083_19113[(1)] = (16));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19072 === (17)))
{var inst_19065 = (state_19071[(2)]);var state_19071__$1 = state_19071;var statearr_19085_19114 = state_19071__$1;(statearr_19085_19114[(2)] = inst_19065);
(statearr_19085_19114[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19072 === (3)))
{var inst_19069 = (state_19071[(2)]);var state_19071__$1 = state_19071;return cljs.core.async.impl.ioc_helpers.return_chan(state_19071__$1,inst_19069);
} else
{if((state_val_19072 === (12)))
{var inst_19015 = (state_19071[(7)]);var inst_19014 = (state_19071[(8)]);var inst_19043 = cljs.core.pop(inst_19015);var inst_19044 = cljs.core.async.timeout(msecs);var inst_19045 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19043,inst_19044);var tmp19084 = inst_19014;var inst_19014__$1 = tmp19084;var inst_19015__$1 = inst_19045;var state_19071__$1 = (function (){var statearr_19086 = state_19071;(statearr_19086[(7)] = inst_19015__$1);
(statearr_19086[(8)] = inst_19014__$1);
return statearr_19086;
})();var statearr_19087_19115 = state_19071__$1;(statearr_19087_19115[(2)] = null);
(statearr_19087_19115[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19072 === (2)))
{var inst_19015 = (state_19071[(7)]);var inst_19018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19015,(0),null);var inst_19019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19015,(1),null);var state_19071__$1 = (function (){var statearr_19088 = state_19071;(statearr_19088[(11)] = inst_19019);
(statearr_19088[(12)] = inst_19018);
return statearr_19088;
})();return cljs.core.async.ioc_alts_BANG_(state_19071__$1,(4),inst_19015);
} else
{if((state_val_19072 === (11)))
{var inst_19015 = (state_19071[(7)]);var inst_19036 = (state_19071[(2)]);var inst_19037 = cljs.core.async.timeout(msecs);var inst_19038 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19015,inst_19037);var inst_19014 = cljs.core.constant$keyword$38;var inst_19015__$1 = inst_19038;var state_19071__$1 = (function (){var statearr_19089 = state_19071;(statearr_19089[(13)] = inst_19036);
(statearr_19089[(7)] = inst_19015__$1);
(statearr_19089[(8)] = inst_19014);
return statearr_19089;
})();var statearr_19090_19116 = state_19071__$1;(statearr_19090_19116[(2)] = null);
(statearr_19090_19116[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19072 === (9)))
{var inst_19014 = (state_19071[(8)]);var inst_19041 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$38,inst_19014);var state_19071__$1 = state_19071;if(inst_19041)
{var statearr_19091_19117 = state_19071__$1;(statearr_19091_19117[(1)] = (12));
} else
{var statearr_19092_19118 = state_19071__$1;(statearr_19092_19118[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19072 === (5)))
{var inst_19014 = (state_19071[(8)]);var inst_19033 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$36,inst_19014);var state_19071__$1 = state_19071;if(inst_19033)
{var statearr_19093_19119 = state_19071__$1;(statearr_19093_19119[(1)] = (8));
} else
{var statearr_19094_19120 = state_19071__$1;(statearr_19094_19120[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19072 === (14)))
{var inst_19052 = (state_19071[(2)]);var state_19071__$1 = state_19071;var statearr_19095_19121 = state_19071__$1;(statearr_19095_19121[(2)] = inst_19052);
(statearr_19095_19121[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19072 === (16)))
{var inst_19024 = (state_19071[(9)]);var inst_19061 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19024));var inst_19062 = (new Error(inst_19061));var inst_19063 = (function(){throw inst_19062})();var state_19071__$1 = state_19071;var statearr_19096_19122 = state_19071__$1;(statearr_19096_19122[(2)] = inst_19063);
(statearr_19096_19122[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19072 === (10)))
{var inst_19054 = (state_19071[(2)]);var state_19071__$1 = state_19071;var statearr_19097_19123 = state_19071__$1;(statearr_19097_19123[(2)] = inst_19054);
(statearr_19097_19123[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19072 === (8)))
{var inst_19023 = (state_19071[(10)]);var state_19071__$1 = state_19071;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19071__$1,(11),out,inst_19023);
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
});})(c__5861__auto___19105))
;return ((function (switch__5846__auto__,c__5861__auto___19105){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_19101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19101[(0)] = state_machine__5847__auto__);
(statearr_19101[(1)] = (1));
return statearr_19101;
});
var state_machine__5847__auto____1 = (function (state_19071){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19071);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19102){if((e19102 instanceof Object))
{var ex__5850__auto__ = e19102;var statearr_19103_19124 = state_19071;(statearr_19103_19124[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19071);
return cljs.core.constant$keyword$16;
} else
{throw e19102;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19125 = state_19071;
state_19071 = G__19125;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19071){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___19105))
})();var state__5863__auto__ = (function (){var statearr_19104 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___19105);
return statearr_19104;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___19105))
);
return out;
});
debounce = function(out,source,msecs){
switch(arguments.length){
case 2:
return debounce__2.call(this,out,source);
case 3:
return debounce__3.call(this,out,source,msecs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
debounce.cljs$core$IFn$_invoke$arity$2 = debounce__2;
debounce.cljs$core$IFn$_invoke$arity$3 = debounce__3;
return debounce;
})()
;
wilkerdev.util.reactive.once = (function once(f,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___19204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___19204,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___19204,out){
return (function (state_19184){var state_val_19185 = (state_19184[(1)]);if((state_val_19185 === (7)))
{var inst_19172 = (state_19184[(7)]);var state_19184__$1 = state_19184;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19184__$1,(10),out,inst_19172);
} else
{if((state_val_19185 === (1)))
{var state_19184__$1 = state_19184;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19184__$1,(2),in$);
} else
{if((state_val_19185 === (4)))
{var state_19184__$1 = state_19184;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19184__$1,(6),in$);
} else
{if((state_val_19185 === (6)))
{var inst_19172 = (state_19184[(7)]);var inst_19172__$1 = (state_19184[(2)]);var state_19184__$1 = (function (){var statearr_19186 = state_19184;(statearr_19186[(7)] = inst_19172__$1);
return statearr_19186;
})();if(cljs.core.truth_(inst_19172__$1))
{var statearr_19187_19205 = state_19184__$1;(statearr_19187_19205[(1)] = (7));
} else
{var statearr_19188_19206 = state_19184__$1;(statearr_19188_19206[(1)] = (8));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19185 === (3)))
{var inst_19169 = (state_19184[(2)]);var state_19184__$1 = (function (){var statearr_19189 = state_19184;(statearr_19189[(8)] = inst_19169);
return statearr_19189;
})();var statearr_19190_19207 = state_19184__$1;(statearr_19190_19207[(2)] = null);
(statearr_19190_19207[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19185 === (2)))
{var inst_19166 = (state_19184[(2)]);var inst_19167 = (function (){var G__19191 = inst_19166;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19191) : f.call(null,G__19191));
})();var state_19184__$1 = (function (){var statearr_19192 = state_19184;(statearr_19192[(9)] = inst_19167);
return statearr_19192;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19184__$1,(3),out,inst_19166);
} else
{if((state_val_19185 === (9)))
{var inst_19180 = (state_19184[(2)]);var state_19184__$1 = state_19184;var statearr_19193_19208 = state_19184__$1;(statearr_19193_19208[(2)] = inst_19180);
(statearr_19193_19208[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19185 === (5)))
{var inst_19182 = (state_19184[(2)]);var state_19184__$1 = state_19184;return cljs.core.async.impl.ioc_helpers.return_chan(state_19184__$1,inst_19182);
} else
{if((state_val_19185 === (10)))
{var inst_19175 = (state_19184[(2)]);var state_19184__$1 = (function (){var statearr_19194 = state_19184;(statearr_19194[(10)] = inst_19175);
return statearr_19194;
})();var statearr_19195_19209 = state_19184__$1;(statearr_19195_19209[(2)] = null);
(statearr_19195_19209[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19185 === (8)))
{var inst_19178 = cljs.core.async.close_BANG_(out);var state_19184__$1 = state_19184;var statearr_19196_19210 = state_19184__$1;(statearr_19196_19210[(2)] = inst_19178);
(statearr_19196_19210[(1)] = (9));
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
});})(c__5861__auto___19204,out))
;return ((function (switch__5846__auto__,c__5861__auto___19204,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_19200 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19200[(0)] = state_machine__5847__auto__);
(statearr_19200[(1)] = (1));
return statearr_19200;
});
var state_machine__5847__auto____1 = (function (state_19184){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19184);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19201){if((e19201 instanceof Object))
{var ex__5850__auto__ = e19201;var statearr_19202_19211 = state_19184;(statearr_19202_19211[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19184);
return cljs.core.constant$keyword$16;
} else
{throw e19201;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19212 = state_19184;
state_19184 = G__19212;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19184){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___19204,out))
})();var state__5863__auto__ = (function (){var statearr_19203 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___19204);
return statearr_19203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___19204,out))
);
return out;
});
wilkerdev.util.reactive.complement = (function complement(f){return (function() { 
var G__19263__delegate = function (args){var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__){
return (function (state_19251){var state_val_19252 = (state_19251[(1)]);if((state_val_19252 === (5)))
{var inst_19244 = (state_19251[(2)]);var inst_19245 = wilkerdev.util.reactive.throw_err(inst_19244);var inst_19246 = cljs.core.not(inst_19245);var inst_19247 = cljs.core.boolean$(inst_19246);var state_19251__$1 = state_19251;var statearr_19253_19264 = state_19251__$1;(statearr_19253_19264[(2)] = inst_19247);
cljs.core.async.impl.ioc_helpers.process_exception(state_19251__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_19252 === (4)))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19251,(3),Error,null,(2));var inst_19242 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var state_19251__$1 = state_19251;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19251__$1,(5),inst_19242);
} else
{if((state_val_19252 === (3)))
{var inst_19238 = (state_19251[(2)]);var state_19251__$1 = state_19251;var statearr_19254_19265 = state_19251__$1;(statearr_19254_19265[(2)] = inst_19238);
cljs.core.async.impl.ioc_helpers.process_exception(state_19251__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_19252 === (2)))
{var inst_19249 = (state_19251[(2)]);var state_19251__$1 = state_19251;return cljs.core.async.impl.ioc_helpers.return_chan(state_19251__$1,inst_19249);
} else
{if((state_val_19252 === (1)))
{var state_19251__$1 = state_19251;var statearr_19255_19266 = state_19251__$1;(statearr_19255_19266[(2)] = null);
(statearr_19255_19266[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
});})(c__5861__auto__))
;return ((function (switch__5846__auto__,c__5861__auto__){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_19259 = [null,null,null,null,null,null,null];(statearr_19259[(0)] = state_machine__5847__auto__);
(statearr_19259[(1)] = (1));
return statearr_19259;
});
var state_machine__5847__auto____1 = (function (state_19251){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19251);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19260){if((e19260 instanceof Object))
{var ex__5850__auto__ = e19260;var statearr_19261_19267 = state_19251;(statearr_19261_19267[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19251);
return cljs.core.constant$keyword$16;
} else
{throw e19260;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19268 = state_19251;
state_19251 = G__19268;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19251){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__))
})();var state__5863__auto__ = (function (){var statearr_19262 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_19262;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__))
);
return c__5861__auto__;
};
var G__19263 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19263__delegate.call(this,args);};
G__19263.cljs$lang$maxFixedArity = 0;
G__19263.cljs$lang$applyTo = (function (arglist__19269){
var args = cljs.core.seq(arglist__19269);
return G__19263__delegate(args);
});
G__19263.cljs$core$IFn$_invoke$arity$variadic = G__19263__delegate;
return G__19263;
})()
;
});
wilkerdev.util.reactive.memoize_async = (function memoize_async(f){var mem = (function (){var G__19309 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19309) : cljs.core.atom.call(null,G__19309));
})();return ((function (mem){
return (function() { 
var G__19348__delegate = function (args){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__19310 = mem;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19310) : cljs.core.deref.call(null,G__19310));
})(),args,cljs.core.constant$keyword$39);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.constant$keyword$39))
{var c = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$40,c], null));
var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__,c,v,mem){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__,c,v,mem){
return (function (state_19318){var state_val_19319 = (state_19318[(1)]);if((state_val_19319 === (2)))
{var inst_19312 = (state_19318[(2)]);var inst_19313 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19314 = [args,cljs.core.constant$keyword$41];var inst_19315 = (new cljs.core.PersistentVector(null,2,(5),inst_19313,inst_19314,null));var inst_19316 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc_in,inst_19315,inst_19312);var state_19318__$1 = (function (){var statearr_19320 = state_19318;(statearr_19320[(7)] = inst_19316);
return statearr_19320;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_19318__$1,inst_19312);
} else
{if((state_val_19319 === (1)))
{var state_19318__$1 = state_19318;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19318__$1,(2),c);
} else
{return null;
}
}
});})(c__5861__auto__,c,v,mem))
;return ((function (switch__5846__auto__,c__5861__auto__,c,v,mem){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_19324 = [null,null,null,null,null,null,null,null];(statearr_19324[(0)] = state_machine__5847__auto__);
(statearr_19324[(1)] = (1));
return statearr_19324;
});
var state_machine__5847__auto____1 = (function (state_19318){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19318);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19325){if((e19325 instanceof Object))
{var ex__5850__auto__ = e19325;var statearr_19326_19349 = state_19318;(statearr_19326_19349[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19318);
return cljs.core.constant$keyword$16;
} else
{throw e19325;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19350 = state_19318;
state_19318 = G__19350;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19318){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__,c,v,mem))
})();var state__5863__auto__ = (function (){var statearr_19327 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_19327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__,c,v,mem))
);
return c__5861__auto__;
} else
{var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__,v,mem){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__,v,mem){
return (function (state_19337){var state_val_19338 = (state_19337[(1)]);if((state_val_19338 === (2)))
{var inst_19330 = (state_19337[(2)]);var inst_19331 = (function (){var G__19339 = mem;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19339) : cljs.core.deref.call(null,G__19339));
})();var inst_19332 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19333 = [args,cljs.core.constant$keyword$41];var inst_19334 = (new cljs.core.PersistentVector(null,2,(5),inst_19332,inst_19333,null));var inst_19335 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_19331,inst_19334);var state_19337__$1 = (function (){var statearr_19340 = state_19337;(statearr_19340[(7)] = inst_19330);
return statearr_19340;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_19337__$1,inst_19335);
} else
{if((state_val_19338 === (1)))
{var inst_19328 = cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(v);var state_19337__$1 = state_19337;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19337__$1,(2),inst_19328);
} else
{return null;
}
}
});})(c__5861__auto__,v,mem))
;return ((function (switch__5846__auto__,c__5861__auto__,v,mem){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_19344 = [null,null,null,null,null,null,null,null];(statearr_19344[(0)] = state_machine__5847__auto__);
(statearr_19344[(1)] = (1));
return statearr_19344;
});
var state_machine__5847__auto____1 = (function (state_19337){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19337);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19345){if((e19345 instanceof Object))
{var ex__5850__auto__ = e19345;var statearr_19346_19351 = state_19337;(statearr_19346_19351[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19337);
return cljs.core.constant$keyword$16;
} else
{throw e19345;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19352 = state_19337;
state_19337 = G__19352;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19337){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__,v,mem))
})();var state__5863__auto__ = (function (){var statearr_19347 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_19347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__,v,mem))
);
return c__5861__auto__;
}
};
var G__19348 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19348__delegate.call(this,args);};
G__19348.cljs$lang$maxFixedArity = 0;
G__19348.cljs$lang$applyTo = (function (arglist__19353){
var args = cljs.core.seq(arglist__19353);
return G__19348__delegate(args);
});
G__19348.cljs$core$IFn$_invoke$arity$variadic = G__19348__delegate;
return G__19348;
})()
;
;})(mem))
});
wilkerdev.util.reactive.channel_pool = (function() {
var channel_pool = null;
var channel_pool__1 = (function (n){return channel_pool.cljs$core$IFn$_invoke$arity$2(n,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((2048)));
});
var channel_pool__2 = (function (n,queue){var n__4508__auto___19494 = n;var __19495 = (0);while(true){
if((__19495 < n__4508__auto___19494))
{var chan__4609__auto___19496 = queue;var c__5861__auto___19497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__19495,c__5861__auto___19497,chan__4609__auto___19496,n__4508__auto___19494){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (__19495,c__5861__auto___19497,chan__4609__auto___19496,n__4508__auto___19494){
return (function (state_19461){var state_val_19462 = (state_19461[(1)]);if((state_val_19462 === (8)))
{var inst_19431 = (state_19461[(7)]);var inst_19452 = (state_19461[(2)]);var inst_19453 = cljs.core.async.close_BANG_(inst_19431);var state_19461__$1 = (function (){var statearr_19463 = state_19461;(statearr_19463[(8)] = inst_19452);
(statearr_19463[(9)] = inst_19453);
return statearr_19463;
})();var statearr_19464_19498 = state_19461__$1;(statearr_19464_19498[(2)] = null);
(statearr_19464_19498[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19462 === (7)))
{var inst_19457 = (state_19461[(2)]);var state_19461__$1 = state_19461;var statearr_19465_19499 = state_19461__$1;(statearr_19465_19499[(2)] = inst_19457);
(statearr_19465_19499[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19462 === (6)))
{var state_19461__$1 = state_19461;var statearr_19466_19500 = state_19461__$1;(statearr_19466_19500[(2)] = cljs.core.constant$keyword$32);
(statearr_19466_19500[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19462 === (5)))
{var inst_19431 = (state_19461[(7)]);var inst_19427 = (state_19461[(10)]);var inst_19430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19427,(0),null);var inst_19431__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19427,(1),null);var inst_19432 = (function (){return (inst_19430.cljs$core$IFn$_invoke$arity$0 ? inst_19430.cljs$core$IFn$_invoke$arity$0() : inst_19430.call(null));
})();var inst_19448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_19449 = (function (){var c__5861__auto____$1 = inst_19448;var chan__4609__auto____$1 = inst_19432;var input = inst_19432;var output = inst_19431__$1;var initializer = inst_19430;var vec__19429 = inst_19427;var temp__4220__auto__ = inst_19427;return ((function (__19495,c__5861__auto____$1,chan__4609__auto____$1,input,output,initializer,vec__19429,temp__4220__auto__,inst_19431,inst_19427,inst_19430,inst_19431__$1,inst_19432,inst_19448,state_val_19462,c__5861__auto___19497,chan__4609__auto___19496,n__4508__auto___19494){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (__19495,c__5861__auto____$1,chan__4609__auto____$1,input,output,initializer,vec__19429,temp__4220__auto__,inst_19431,inst_19427,inst_19430,inst_19431__$1,inst_19432,inst_19448,state_val_19462,c__5861__auto___19497,chan__4609__auto___19496,n__4508__auto___19494){
return (function (state_19446){var state_val_19447 = (state_19446[(1)]);if((state_val_19447 === (8)))
{var inst_19438 = (state_19446[(2)]);var state_19446__$1 = (function (){var statearr_19467 = state_19446;(statearr_19467[(7)] = inst_19438);
return statearr_19467;
})();var statearr_19468_19501 = state_19446__$1;(statearr_19468_19501[(2)] = null);
(statearr_19468_19501[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19447 === (7)))
{var inst_19442 = (state_19446[(2)]);var state_19446__$1 = state_19446;var statearr_19469_19502 = state_19446__$1;(statearr_19469_19502[(2)] = inst_19442);
(statearr_19469_19502[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19447 === (6)))
{var state_19446__$1 = state_19446;var statearr_19470_19503 = state_19446__$1;(statearr_19470_19503[(2)] = cljs.core.constant$keyword$32);
(statearr_19470_19503[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19447 === (5)))
{var inst_19435 = (state_19446[(8)]);var state_19446__$1 = state_19446;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19446__$1,(8),output,inst_19435);
} else
{if((state_val_19447 === (4)))
{var inst_19435 = (state_19446[(8)]);var inst_19435__$1 = (state_19446[(2)]);var state_19446__$1 = (function (){var statearr_19471 = state_19446;(statearr_19471[(8)] = inst_19435__$1);
return statearr_19471;
})();if(cljs.core.truth_(inst_19435__$1))
{var statearr_19472_19504 = state_19446__$1;(statearr_19472_19504[(1)] = (5));
} else
{var statearr_19473_19505 = state_19446__$1;(statearr_19473_19505[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19447 === (3)))
{var inst_19444 = (state_19446[(2)]);var state_19446__$1 = state_19446;return cljs.core.async.impl.ioc_helpers.return_chan(state_19446__$1,inst_19444);
} else
{if((state_val_19447 === (2)))
{var state_19446__$1 = state_19446;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19446__$1,(4),chan__4609__auto____$1);
} else
{if((state_val_19447 === (1)))
{var state_19446__$1 = state_19446;var statearr_19474_19506 = state_19446__$1;(statearr_19474_19506[(2)] = null);
(statearr_19474_19506[(1)] = (2));
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
});})(__19495,c__5861__auto____$1,chan__4609__auto____$1,input,output,initializer,vec__19429,temp__4220__auto__,inst_19431,inst_19427,inst_19430,inst_19431__$1,inst_19432,inst_19448,state_val_19462,c__5861__auto___19497,chan__4609__auto___19496,n__4508__auto___19494))
;return ((function (__19495,switch__5846__auto__,c__5861__auto____$1,chan__4609__auto____$1,input,output,initializer,vec__19429,temp__4220__auto__,inst_19431,inst_19427,inst_19430,inst_19431__$1,inst_19432,inst_19448,state_val_19462,c__5861__auto___19497,chan__4609__auto___19496,n__4508__auto___19494){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_19478 = [null,null,null,null,null,null,null,null,null];(statearr_19478[(0)] = state_machine__5847__auto__);
(statearr_19478[(1)] = (1));
return statearr_19478;
});
var state_machine__5847__auto____1 = (function (state_19446){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19446);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19479){if((e19479 instanceof Object))
{var ex__5850__auto__ = e19479;var statearr_19480_19507 = state_19446;(statearr_19480_19507[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19446);
return cljs.core.constant$keyword$16;
} else
{throw e19479;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19508 = state_19446;
state_19446 = G__19508;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19446){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(__19495,switch__5846__auto__,c__5861__auto____$1,chan__4609__auto____$1,input,output,initializer,vec__19429,temp__4220__auto__,inst_19431,inst_19427,inst_19430,inst_19431__$1,inst_19432,inst_19448,state_val_19462,c__5861__auto___19497,chan__4609__auto___19496,n__4508__auto___19494))
})();var state__5863__auto__ = (function (){var statearr_19481 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto____$1);
return statearr_19481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});
;})(__19495,c__5861__auto____$1,chan__4609__auto____$1,input,output,initializer,vec__19429,temp__4220__auto__,inst_19431,inst_19427,inst_19430,inst_19431__$1,inst_19432,inst_19448,state_val_19462,c__5861__auto___19497,chan__4609__auto___19496,n__4508__auto___19494))
})();var inst_19450 = cljs.core.async.impl.dispatch.run(inst_19449);var state_19461__$1 = (function (){var statearr_19482 = state_19461;(statearr_19482[(7)] = inst_19431__$1);
(statearr_19482[(11)] = inst_19450);
return statearr_19482;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19461__$1,(8),inst_19448);
} else
{if((state_val_19462 === (4)))
{var inst_19427 = (state_19461[(10)]);var inst_19427__$1 = (state_19461[(2)]);var state_19461__$1 = (function (){var statearr_19483 = state_19461;(statearr_19483[(10)] = inst_19427__$1);
return statearr_19483;
})();if(cljs.core.truth_(inst_19427__$1))
{var statearr_19484_19509 = state_19461__$1;(statearr_19484_19509[(1)] = (5));
} else
{var statearr_19485_19510 = state_19461__$1;(statearr_19485_19510[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19462 === (3)))
{var inst_19459 = (state_19461[(2)]);var state_19461__$1 = state_19461;return cljs.core.async.impl.ioc_helpers.return_chan(state_19461__$1,inst_19459);
} else
{if((state_val_19462 === (2)))
{var state_19461__$1 = state_19461;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19461__$1,(4),chan__4609__auto___19496);
} else
{if((state_val_19462 === (1)))
{var state_19461__$1 = state_19461;var statearr_19486_19511 = state_19461__$1;(statearr_19486_19511[(2)] = null);
(statearr_19486_19511[(1)] = (2));
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
});})(__19495,c__5861__auto___19497,chan__4609__auto___19496,n__4508__auto___19494))
;return ((function (__19495,switch__5846__auto__,c__5861__auto___19497,chan__4609__auto___19496,n__4508__auto___19494){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_19490 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19490[(0)] = state_machine__5847__auto__);
(statearr_19490[(1)] = (1));
return statearr_19490;
});
var state_machine__5847__auto____1 = (function (state_19461){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19461);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19491){if((e19491 instanceof Object))
{var ex__5850__auto__ = e19491;var statearr_19492_19512 = state_19461;(statearr_19492_19512[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19461);
return cljs.core.constant$keyword$16;
} else
{throw e19491;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19513 = state_19461;
state_19461 = G__19513;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19461){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(__19495,switch__5846__auto__,c__5861__auto___19497,chan__4609__auto___19496,n__4508__auto___19494))
})();var state__5863__auto__ = (function (){var statearr_19493 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___19497);
return statearr_19493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(__19495,c__5861__auto___19497,chan__4609__auto___19496,n__4508__auto___19494))
);
{
var G__19514 = (__19495 + (1));
__19495 = G__19514;
continue;
}
} else
{}
break;
}
return queue;
});
channel_pool = function(n,queue){
switch(arguments.length){
case 1:
return channel_pool__1.call(this,n);
case 2:
return channel_pool__2.call(this,n,queue);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
channel_pool.cljs$core$IFn$_invoke$arity$1 = channel_pool__1;
channel_pool.cljs$core$IFn$_invoke$arity$2 = channel_pool__2;
return channel_pool;
})()
;
wilkerdev.util.reactive.reduce = (function reduce(f,init,ch){var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__){
return (function (state_19584){var state_val_19585 = (state_19584[(1)]);if((state_val_19585 === (7)))
{var inst_19568 = (state_19584[(7)]);var inst_19568__$1 = (state_19584[(2)]);var inst_19569 = (inst_19568__$1 == null);var state_19584__$1 = (function (){var statearr_19586 = state_19584;(statearr_19586[(7)] = inst_19568__$1);
return statearr_19586;
})();if(cljs.core.truth_(inst_19569))
{var statearr_19587_19607 = state_19584__$1;(statearr_19587_19607[(1)] = (8));
} else
{var statearr_19588_19608 = state_19584__$1;(statearr_19588_19608[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19585 === (1)))
{var state_19584__$1 = state_19584;var statearr_19589_19609 = state_19584__$1;(statearr_19589_19609[(2)] = null);
(statearr_19589_19609[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19585 === (4)))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19584,(3),Error,null,(2));var inst_19565 = init;var state_19584__$1 = (function (){var statearr_19590 = state_19584;(statearr_19590[(8)] = inst_19565);
return statearr_19590;
})();var statearr_19591_19610 = state_19584__$1;(statearr_19591_19610[(2)] = null);
(statearr_19591_19610[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19585 === (6)))
{var inst_19580 = (state_19584[(2)]);var state_19584__$1 = state_19584;var statearr_19592_19611 = state_19584__$1;(statearr_19592_19611[(2)] = inst_19580);
cljs.core.async.impl.ioc_helpers.process_exception(state_19584__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_19585 === (3)))
{var inst_19561 = (state_19584[(2)]);var state_19584__$1 = state_19584;var statearr_19593_19612 = state_19584__$1;(statearr_19593_19612[(2)] = inst_19561);
cljs.core.async.impl.ioc_helpers.process_exception(state_19584__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_19585 === (2)))
{var inst_19582 = (state_19584[(2)]);var state_19584__$1 = state_19584;return cljs.core.async.impl.ioc_helpers.return_chan(state_19584__$1,inst_19582);
} else
{if((state_val_19585 === (11)))
{var inst_19574 = (state_19584[(2)]);var inst_19575 = wilkerdev.util.reactive.throw_err(inst_19574);var inst_19565 = inst_19575;var state_19584__$1 = (function (){var statearr_19594 = state_19584;(statearr_19594[(8)] = inst_19565);
return statearr_19594;
})();var statearr_19595_19613 = state_19584__$1;(statearr_19595_19613[(2)] = null);
(statearr_19595_19613[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19585 === (9)))
{var inst_19565 = (state_19584[(8)]);var inst_19568 = (state_19584[(7)]);var inst_19572 = (function (){var G__19596 = inst_19565;var G__19597 = inst_19568;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19596,G__19597) : f.call(null,G__19596,G__19597));
})();var state_19584__$1 = state_19584;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19584__$1,(11),inst_19572);
} else
{if((state_val_19585 === (5)))
{var state_19584__$1 = state_19584;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19584__$1,(7),ch);
} else
{if((state_val_19585 === (10)))
{var inst_19578 = (state_19584[(2)]);var state_19584__$1 = state_19584;var statearr_19598_19614 = state_19584__$1;(statearr_19598_19614[(2)] = inst_19578);
(statearr_19598_19614[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19585 === (8)))
{var inst_19565 = (state_19584[(8)]);var state_19584__$1 = state_19584;var statearr_19599_19615 = state_19584__$1;(statearr_19599_19615[(2)] = inst_19565);
(statearr_19599_19615[(1)] = (10));
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
});})(c__5861__auto__))
;return ((function (switch__5846__auto__,c__5861__auto__){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_19603 = [null,null,null,null,null,null,null,null,null];(statearr_19603[(0)] = state_machine__5847__auto__);
(statearr_19603[(1)] = (1));
return statearr_19603;
});
var state_machine__5847__auto____1 = (function (state_19584){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19584);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19604){if((e19604 instanceof Object))
{var ex__5850__auto__ = e19604;var statearr_19605_19616 = state_19584;(statearr_19605_19616[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19584);
return cljs.core.constant$keyword$16;
} else
{throw e19604;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19617 = state_19584;
state_19584 = G__19617;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19584){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__))
})();var state__5863__auto__ = (function (){var statearr_19606 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_19606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__))
);
return c__5861__auto__;
});
wilkerdev.util.reactive.pool_enqueue = (function pool_enqueue(pool,initializer){var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(pool,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [initializer,c], null));
return c;
});
wilkerdev.util.reactive.into_list = (function() {
var into_list = null;
var into_list__1 = (function (channels){return into_list.cljs$core$IFn$_invoke$arity$2(channels,cljs.core.PersistentVector.EMPTY);
});
var into_list__2 = (function (channels,base){return cljs.core.async.into(base,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(channels));
});
into_list = function(channels,base){
switch(arguments.length){
case 1:
return into_list__1.call(this,channels);
case 2:
return into_list__2.call(this,channels,base);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_list.cljs$core$IFn$_invoke$arity$1 = into_list__1;
into_list.cljs$core$IFn$_invoke$arity$2 = into_list__2;
return into_list;
})()
;
/**
* Call async function f, if it fails, try again n times.
* Will return the last error in case all tries fails.
*/
wilkerdev.util.reactive.retry = (function retry(f,n){var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__){
return (function (state_19685){var state_val_19686 = (state_19685[(1)]);if((state_val_19686 === (7)))
{var inst_19665 = (state_19685[(7)]);var state_19685__$1 = state_19685;var statearr_19687_19706 = state_19685__$1;(statearr_19687_19706[(2)] = inst_19665);
(statearr_19687_19706[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19686 === (1)))
{var inst_19663 = n;var state_19685__$1 = (function (){var statearr_19688 = state_19685;(statearr_19688[(8)] = inst_19663);
return statearr_19688;
})();var statearr_19689_19707 = state_19685__$1;(statearr_19689_19707[(2)] = null);
(statearr_19689_19707[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19686 === (4)))
{var inst_19681 = (state_19685[(2)]);var state_19685__$1 = state_19685;var statearr_19690_19708 = state_19685__$1;(statearr_19690_19708[(2)] = inst_19681);
(statearr_19690_19708[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19686 === (6)))
{var inst_19663 = (state_19685[(8)]);var inst_19668 = (inst_19663 - (1));var inst_19663__$1 = inst_19668;var state_19685__$1 = (function (){var statearr_19691 = state_19685;(statearr_19691[(8)] = inst_19663__$1);
return statearr_19691;
})();var statearr_19692_19709 = state_19685__$1;(statearr_19692_19709[(2)] = null);
(statearr_19692_19709[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19686 === (3)))
{var inst_19683 = (state_19685[(2)]);var state_19685__$1 = state_19685;return cljs.core.async.impl.ioc_helpers.return_chan(state_19685__$1,inst_19683);
} else
{if((state_val_19686 === (2)))
{var state_19685__$1 = state_19685;var statearr_19693_19710 = state_19685__$1;(statearr_19693_19710[(2)] = null);
(statearr_19693_19710[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19686 === (9)))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19685,(5),Error,null,(4));var inst_19676 = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();var state_19685__$1 = state_19685;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19685__$1,(10),inst_19676);
} else
{if((state_val_19686 === (5)))
{var inst_19663 = (state_19685[(8)]);var inst_19665 = (state_19685[(2)]);var inst_19666 = (inst_19663 > (0));var state_19685__$1 = (function (){var statearr_19694 = state_19685;(statearr_19694[(7)] = inst_19665);
return statearr_19694;
})();if(cljs.core.truth_(inst_19666))
{var statearr_19695_19711 = state_19685__$1;(statearr_19695_19711[(1)] = (6));
} else
{var statearr_19696_19712 = state_19685__$1;(statearr_19696_19712[(1)] = (7));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19686 === (10)))
{var inst_19678 = (state_19685[(2)]);var inst_19679 = wilkerdev.util.reactive.throw_err(inst_19678);var state_19685__$1 = state_19685;var statearr_19697_19713 = state_19685__$1;(statearr_19697_19713[(2)] = inst_19679);
cljs.core.async.impl.ioc_helpers.process_exception(state_19685__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_19686 === (8)))
{var inst_19672 = (state_19685[(2)]);var state_19685__$1 = state_19685;var statearr_19698_19714 = state_19685__$1;(statearr_19698_19714[(2)] = inst_19672);
cljs.core.async.impl.ioc_helpers.process_exception(state_19685__$1);
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
});})(c__5861__auto__))
;return ((function (switch__5846__auto__,c__5861__auto__){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_19702 = [null,null,null,null,null,null,null,null,null];(statearr_19702[(0)] = state_machine__5847__auto__);
(statearr_19702[(1)] = (1));
return statearr_19702;
});
var state_machine__5847__auto____1 = (function (state_19685){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19685);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19703){if((e19703 instanceof Object))
{var ex__5850__auto__ = e19703;var statearr_19704_19715 = state_19685;(statearr_19704_19715[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19685);
return cljs.core.constant$keyword$16;
} else
{throw e19703;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19716 = state_19685;
state_19685 = G__19716;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19685){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__))
})();var state__5863__auto__ = (function (){var statearr_19705 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_19705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__))
);
return c__5861__auto__;
});
/**
* Do an alt! between channel c and a timout with msec milli seconds.
* In case the timeout is the taken, a timeout error will be returned.
*/
wilkerdev.util.reactive.timeout = (function timeout(c,msec){var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__){
return (function (state_19806){var state_val_19807 = (state_19806[(1)]);if((state_val_19807 === (7)))
{var inst_19785 = (state_19806[(7)]);var inst_19796 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19785,cljs.core.constant$keyword$7);var state_19806__$1 = state_19806;if(inst_19796)
{var statearr_19808_19829 = state_19806__$1;(statearr_19808_19829[(1)] = (9));
} else
{var statearr_19809_19830 = state_19806__$1;(statearr_19809_19830[(1)] = (10));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19807 === (1)))
{var inst_19778 = (state_19806[(8)]);var inst_19778__$1 = cljs.core.async.timeout(msec);var inst_19779 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19780 = [c,inst_19778__$1];var inst_19781 = (new cljs.core.PersistentVector(null,2,(5),inst_19779,inst_19780,null));var state_19806__$1 = (function (){var statearr_19810 = state_19806;(statearr_19810[(8)] = inst_19778__$1);
return statearr_19810;
})();return cljs.core.async.ioc_alts_BANG_(state_19806__$1,(2),inst_19781);
} else
{if((state_val_19807 === (4)))
{var inst_19778 = (state_19806[(8)]);var inst_19785 = (state_19806[(7)]);var inst_19791 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19785,inst_19778);var state_19806__$1 = state_19806;if(inst_19791)
{var statearr_19811_19831 = state_19806__$1;(statearr_19811_19831[(1)] = (6));
} else
{var statearr_19812_19832 = state_19806__$1;(statearr_19812_19832[(1)] = (7));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19807 === (6)))
{var inst_19793 = ("Timeout "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msec)+"ms");var inst_19794 = (new Error(inst_19793));var state_19806__$1 = state_19806;var statearr_19813_19833 = state_19806__$1;(statearr_19813_19833[(2)] = inst_19794);
(statearr_19813_19833[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19807 === (3)))
{var inst_19783 = (state_19806[(9)]);var inst_19789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19783,(0),null);var state_19806__$1 = state_19806;var statearr_19814_19834 = state_19806__$1;(statearr_19814_19834[(2)] = inst_19789);
(statearr_19814_19834[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19807 === (2)))
{var inst_19783 = (state_19806[(9)]);var inst_19785 = (state_19806[(7)]);var inst_19783__$1 = (state_19806[(2)]);var inst_19784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19783__$1,(0),null);var inst_19785__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19783__$1,(1),null);var inst_19786 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19785__$1,c);var state_19806__$1 = (function (){var statearr_19815 = state_19806;(statearr_19815[(9)] = inst_19783__$1);
(statearr_19815[(7)] = inst_19785__$1);
(statearr_19815[(10)] = inst_19784);
return statearr_19815;
})();if(inst_19786)
{var statearr_19816_19835 = state_19806__$1;(statearr_19816_19835[(1)] = (3));
} else
{var statearr_19817_19836 = state_19806__$1;(statearr_19817_19836[(1)] = (4));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19807 === (11)))
{var inst_19800 = (state_19806[(2)]);var state_19806__$1 = state_19806;var statearr_19818_19837 = state_19806__$1;(statearr_19818_19837[(2)] = inst_19800);
(statearr_19818_19837[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19807 === (9)))
{var inst_19784 = (state_19806[(10)]);var state_19806__$1 = state_19806;var statearr_19819_19838 = state_19806__$1;(statearr_19819_19838[(2)] = inst_19784);
(statearr_19819_19838[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19807 === (5)))
{var inst_19804 = (state_19806[(2)]);var state_19806__$1 = state_19806;return cljs.core.async.impl.ioc_helpers.return_chan(state_19806__$1,inst_19804);
} else
{if((state_val_19807 === (10)))
{var state_19806__$1 = state_19806;var statearr_19820_19839 = state_19806__$1;(statearr_19820_19839[(2)] = null);
(statearr_19820_19839[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19807 === (8)))
{var inst_19802 = (state_19806[(2)]);var state_19806__$1 = state_19806;var statearr_19821_19840 = state_19806__$1;(statearr_19821_19840[(2)] = inst_19802);
(statearr_19821_19840[(1)] = (5));
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
});})(c__5861__auto__))
;return ((function (switch__5846__auto__,c__5861__auto__){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_19825 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19825[(0)] = state_machine__5847__auto__);
(statearr_19825[(1)] = (1));
return statearr_19825;
});
var state_machine__5847__auto____1 = (function (state_19806){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19806);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19826){if((e19826 instanceof Object))
{var ex__5850__auto__ = e19826;var statearr_19827_19841 = state_19806;(statearr_19827_19841[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19806);
return cljs.core.constant$keyword$16;
} else
{throw e19826;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19842 = state_19806;
state_19806 = G__19842;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19806){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__))
})();var state__5863__auto__ = (function (){var statearr_19828 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_19828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__))
);
return c__5861__auto__;
});
