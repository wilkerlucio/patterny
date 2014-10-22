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
browser_log.cljs$lang$applyTo = (function (arglist__16872){
var params = cljs.core.seq(arglist__16872);
return browser_log__delegate(params);
});
browser_log.cljs$core$IFn$_invoke$arity$variadic = browser_log__delegate;
return browser_log;
})()
;
wilkerdev.util.reactive.js_error_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.instance_QMARK_,Error);
wilkerdev.util.reactive.remove_js_errors = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(wilkerdev.util.reactive.js_error_QMARK_);
wilkerdev.util.reactive.throw_err = (function throw_err(e){if(cljs.core.truth_((function (){var G__16874 = e;return (wilkerdev.util.reactive.js_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? wilkerdev.util.reactive.js_error_QMARK_.cljs$core$IFn$_invoke$arity$1(G__16874) : wilkerdev.util.reactive.js_error_QMARK_.call(null,G__16874));
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
var log__2 = (function (prefix,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var chan__3468__auto___16959 = in$;var c__5861__auto___16960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___16960,chan__3468__auto___16959,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___16960,chan__3468__auto___16959,out){
return (function (state_16937){var state_val_16938 = (state_16937[(1)]);if((state_val_16938 === (7)))
{var inst_16933 = (state_16937[(2)]);var state_16937__$1 = state_16937;var statearr_16939_16961 = state_16937__$1;(statearr_16939_16961[(2)] = inst_16933);
(statearr_16939_16961[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16938 === (1)))
{var state_16937__$1 = state_16937;var statearr_16940_16962 = state_16937__$1;(statearr_16940_16962[(2)] = null);
(statearr_16940_16962[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16938 === (4)))
{var inst_16920 = (state_16937[(7)]);var inst_16920__$1 = (state_16937[(2)]);var state_16937__$1 = (function (){var statearr_16941 = state_16937;(statearr_16941[(7)] = inst_16920__$1);
return statearr_16941;
})();if(cljs.core.truth_(inst_16920__$1))
{var statearr_16942_16963 = state_16937__$1;(statearr_16942_16963[(1)] = (5));
} else
{var statearr_16943_16964 = state_16937__$1;(statearr_16943_16964[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_16938 === (6)))
{var state_16937__$1 = state_16937;var statearr_16944_16965 = state_16937__$1;(statearr_16944_16965[(2)] = cljs.core.constant$keyword$32);
(statearr_16944_16965[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16938 === (3)))
{var inst_16935 = (state_16937[(2)]);var state_16937__$1 = state_16937;return cljs.core.async.impl.ioc_helpers.return_chan(state_16937__$1,inst_16935);
} else
{if((state_val_16938 === (2)))
{var state_16937__$1 = state_16937;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16937__$1,(4),chan__3468__auto___16959);
} else
{if((state_val_16938 === (11)))
{var inst_16929 = (state_16937[(2)]);var state_16937__$1 = (function (){var statearr_16945 = state_16937;(statearr_16945[(8)] = inst_16929);
return statearr_16945;
})();var statearr_16946_16966 = state_16937__$1;(statearr_16946_16966[(2)] = null);
(statearr_16946_16966[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16938 === (9)))
{var inst_16920 = (state_16937[(7)]);var inst_16925 = wilkerdev.util.reactive.browser_log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_16920], 0));var state_16937__$1 = state_16937;var statearr_16947_16967 = state_16937__$1;(statearr_16947_16967[(2)] = inst_16925);
(statearr_16947_16967[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16938 === (5)))
{var state_16937__$1 = state_16937;if(cljs.core.truth_(prefix))
{var statearr_16948_16968 = state_16937__$1;(statearr_16948_16968[(1)] = (8));
} else
{var statearr_16949_16969 = state_16937__$1;(statearr_16949_16969[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_16938 === (10)))
{var inst_16920 = (state_16937[(7)]);var inst_16927 = (state_16937[(2)]);var state_16937__$1 = (function (){var statearr_16950 = state_16937;(statearr_16950[(9)] = inst_16927);
return statearr_16950;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16937__$1,(11),out,inst_16920);
} else
{if((state_val_16938 === (8)))
{var inst_16920 = (state_16937[(7)]);var inst_16923 = wilkerdev.util.reactive.browser_log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([prefix,inst_16920], 0));var state_16937__$1 = state_16937;var statearr_16951_16970 = state_16937__$1;(statearr_16951_16970[(2)] = inst_16923);
(statearr_16951_16970[(1)] = (10));
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
});})(c__5861__auto___16960,chan__3468__auto___16959,out))
;return ((function (switch__5846__auto__,c__5861__auto___16960,chan__3468__auto___16959,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_16955 = [null,null,null,null,null,null,null,null,null,null];(statearr_16955[(0)] = state_machine__5847__auto__);
(statearr_16955[(1)] = (1));
return statearr_16955;
});
var state_machine__5847__auto____1 = (function (state_16937){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_16937);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e16956){if((e16956 instanceof Object))
{var ex__5850__auto__ = e16956;var statearr_16957_16971 = state_16937;(statearr_16957_16971[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16937);
return cljs.core.constant$keyword$16;
} else
{throw e16956;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__16972 = state_16937;
state_16937 = G__16972;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_16937){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_16937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___16960,chan__3468__auto___16959,out))
})();var state__5863__auto__ = (function (){var statearr_16958 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_16958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___16960);
return statearr_16958;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___16960,chan__3468__auto___16959,out))
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
var listen__3 = (function (el,evt,c){var G__16980_16983 = el;var G__16981_16984 = evt;var G__16982_16985 = ((function (G__16980_16983,G__16981_16984){
return (function (p1__16973_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,p1__16973_SHARP_);
});})(G__16980_16983,G__16981_16984))
;goog.events.listen(G__16980_16983,G__16981_16984,G__16982_16985);
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
wilkerdev.util.reactive.map = (function map(f,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___17052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17052,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17052,out){
return (function (state_17034){var state_val_17035 = (state_17034[(1)]);if((state_val_17035 === (8)))
{var inst_17025 = (state_17034[(2)]);var state_17034__$1 = (function (){var statearr_17036 = state_17034;(statearr_17036[(7)] = inst_17025);
return statearr_17036;
})();var statearr_17037_17053 = state_17034__$1;(statearr_17037_17053[(2)] = null);
(statearr_17037_17053[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17035 === (7)))
{var inst_17030 = (state_17034[(2)]);var state_17034__$1 = state_17034;var statearr_17038_17054 = state_17034__$1;(statearr_17038_17054[(2)] = inst_17030);
(statearr_17038_17054[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17035 === (6)))
{var inst_17028 = cljs.core.async.close_BANG_(out);var state_17034__$1 = state_17034;var statearr_17039_17055 = state_17034__$1;(statearr_17039_17055[(2)] = inst_17028);
(statearr_17039_17055[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17035 === (5)))
{var inst_17021 = (state_17034[(8)]);var inst_17023 = (function (){var G__17040 = inst_17021;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17040) : f.call(null,G__17040));
})();var state_17034__$1 = state_17034;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17034__$1,(8),out,inst_17023);
} else
{if((state_val_17035 === (4)))
{var inst_17021 = (state_17034[(8)]);var inst_17021__$1 = (state_17034[(2)]);var state_17034__$1 = (function (){var statearr_17041 = state_17034;(statearr_17041[(8)] = inst_17021__$1);
return statearr_17041;
})();if(cljs.core.truth_(inst_17021__$1))
{var statearr_17042_17056 = state_17034__$1;(statearr_17042_17056[(1)] = (5));
} else
{var statearr_17043_17057 = state_17034__$1;(statearr_17043_17057[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17035 === (3)))
{var inst_17032 = (state_17034[(2)]);var state_17034__$1 = state_17034;return cljs.core.async.impl.ioc_helpers.return_chan(state_17034__$1,inst_17032);
} else
{if((state_val_17035 === (2)))
{var state_17034__$1 = state_17034;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17034__$1,(4),in$);
} else
{if((state_val_17035 === (1)))
{var state_17034__$1 = state_17034;var statearr_17044_17058 = state_17034__$1;(statearr_17044_17058[(2)] = null);
(statearr_17044_17058[(1)] = (2));
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
});})(c__5861__auto___17052,out))
;return ((function (switch__5846__auto__,c__5861__auto___17052,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17048 = [null,null,null,null,null,null,null,null,null];(statearr_17048[(0)] = state_machine__5847__auto__);
(statearr_17048[(1)] = (1));
return statearr_17048;
});
var state_machine__5847__auto____1 = (function (state_17034){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17034);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17049){if((e17049 instanceof Object))
{var ex__5850__auto__ = e17049;var statearr_17050_17059 = state_17034;(statearr_17050_17059[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17034);
return cljs.core.constant$keyword$16;
} else
{throw e17049;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17060 = state_17034;
state_17034 = G__17060;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17034){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17052,out))
})();var state__5863__auto__ = (function (){var statearr_17051 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17052);
return statearr_17051;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17052,out))
);
return out;
});
wilkerdev.util.reactive.keep = (function keep(f,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___17145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17145,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17145,out){
return (function (state_17122){var state_val_17123 = (state_17122[(1)]);if((state_val_17123 === (7)))
{var inst_17118 = (state_17122[(2)]);var state_17122__$1 = state_17122;var statearr_17124_17146 = state_17122__$1;(statearr_17124_17146[(2)] = inst_17118);
(statearr_17124_17146[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17123 === (1)))
{var state_17122__$1 = state_17122;var statearr_17125_17147 = state_17122__$1;(statearr_17125_17147[(2)] = null);
(statearr_17125_17147[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17123 === (4)))
{var inst_17105 = (state_17122[(7)]);var inst_17105__$1 = (state_17122[(2)]);var state_17122__$1 = (function (){var statearr_17126 = state_17122;(statearr_17126[(7)] = inst_17105__$1);
return statearr_17126;
})();if(cljs.core.truth_(inst_17105__$1))
{var statearr_17127_17148 = state_17122__$1;(statearr_17127_17148[(1)] = (5));
} else
{var statearr_17128_17149 = state_17122__$1;(statearr_17128_17149[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17123 === (6)))
{var inst_17116 = cljs.core.async.close_BANG_(out);var state_17122__$1 = state_17122;var statearr_17129_17150 = state_17122__$1;(statearr_17129_17150[(2)] = inst_17116);
(statearr_17129_17150[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17123 === (3)))
{var inst_17120 = (state_17122[(2)]);var state_17122__$1 = state_17122;return cljs.core.async.impl.ioc_helpers.return_chan(state_17122__$1,inst_17120);
} else
{if((state_val_17123 === (2)))
{var state_17122__$1 = state_17122;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17122__$1,(4),in$);
} else
{if((state_val_17123 === (11)))
{var inst_17110 = (state_17122[(2)]);var state_17122__$1 = state_17122;var statearr_17130_17151 = state_17122__$1;(statearr_17130_17151[(2)] = inst_17110);
(statearr_17130_17151[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17123 === (9)))
{var state_17122__$1 = state_17122;var statearr_17131_17152 = state_17122__$1;(statearr_17131_17152[(2)] = null);
(statearr_17131_17152[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17123 === (5)))
{var inst_17105 = (state_17122[(7)]);var inst_17107 = (state_17122[(8)]);var inst_17107__$1 = (function (){var G__17132 = inst_17105;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17132) : f.call(null,G__17132));
})();var state_17122__$1 = (function (){var statearr_17133 = state_17122;(statearr_17133[(8)] = inst_17107__$1);
return statearr_17133;
})();if(cljs.core.truth_(inst_17107__$1))
{var statearr_17134_17153 = state_17122__$1;(statearr_17134_17153[(1)] = (8));
} else
{var statearr_17135_17154 = state_17122__$1;(statearr_17135_17154[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17123 === (10)))
{var inst_17113 = (state_17122[(2)]);var state_17122__$1 = (function (){var statearr_17136 = state_17122;(statearr_17136[(9)] = inst_17113);
return statearr_17136;
})();var statearr_17137_17155 = state_17122__$1;(statearr_17137_17155[(2)] = null);
(statearr_17137_17155[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17123 === (8)))
{var inst_17107 = (state_17122[(8)]);var state_17122__$1 = state_17122;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17122__$1,(11),out,inst_17107);
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
});})(c__5861__auto___17145,out))
;return ((function (switch__5846__auto__,c__5861__auto___17145,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17141 = [null,null,null,null,null,null,null,null,null,null];(statearr_17141[(0)] = state_machine__5847__auto__);
(statearr_17141[(1)] = (1));
return statearr_17141;
});
var state_machine__5847__auto____1 = (function (state_17122){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17122);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17142){if((e17142 instanceof Object))
{var ex__5850__auto__ = e17142;var statearr_17143_17156 = state_17122;(statearr_17143_17156[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17122);
return cljs.core.constant$keyword$16;
} else
{throw e17142;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17157 = state_17122;
state_17122 = G__17157;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17122){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17145,out))
})();var state__5863__auto__ = (function (){var statearr_17144 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17145);
return statearr_17144;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17145,out))
);
return out;
});
wilkerdev.util.reactive.mapchan = (function() {
var mapchan = null;
var mapchan__1 = (function (in$){return mapchan.cljs$core$IFn$_invoke$arity$2(null,in$);
});
var mapchan__2 = (function (f,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___17304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17304,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17304,out){
return (function (state_17267){var state_val_17268 = (state_17267[(1)]);if((state_val_17268 === (7)))
{var inst_17263 = (state_17267[(2)]);var state_17267__$1 = state_17267;var statearr_17269_17305 = state_17267__$1;(statearr_17269_17305[(2)] = inst_17263);
(statearr_17269_17305[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17268 === (1)))
{var state_17267__$1 = state_17267;var statearr_17270_17306 = state_17267__$1;(statearr_17270_17306[(2)] = null);
(statearr_17270_17306[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17268 === (4)))
{var inst_17234 = (state_17267[(7)]);var inst_17234__$1 = (state_17267[(2)]);var state_17267__$1 = (function (){var statearr_17271 = state_17267;(statearr_17271[(7)] = inst_17234__$1);
return statearr_17271;
})();if(cljs.core.truth_(inst_17234__$1))
{var statearr_17272_17307 = state_17267__$1;(statearr_17272_17307[(1)] = (5));
} else
{var statearr_17273_17308 = state_17267__$1;(statearr_17273_17308[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17268 === (6)))
{var inst_17261 = cljs.core.async.close_BANG_(out);var state_17267__$1 = state_17267;var statearr_17274_17309 = state_17267__$1;(statearr_17274_17309[(2)] = inst_17261);
(statearr_17274_17309[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17268 === (3)))
{var inst_17265 = (state_17267[(2)]);var state_17267__$1 = state_17267;return cljs.core.async.impl.ioc_helpers.return_chan(state_17267__$1,inst_17265);
} else
{if((state_val_17268 === (2)))
{var state_17267__$1 = state_17267;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17267__$1,(4),in$);
} else
{if((state_val_17268 === (9)))
{var inst_17234 = (state_17267[(7)]);var state_17267__$1 = state_17267;var statearr_17275_17310 = state_17267__$1;(statearr_17275_17310[(2)] = inst_17234);
(statearr_17275_17310[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17268 === (5)))
{var state_17267__$1 = state_17267;if(cljs.core.truth_(f))
{var statearr_17276_17311 = state_17267__$1;(statearr_17276_17311[(1)] = (8));
} else
{var statearr_17277_17312 = state_17267__$1;(statearr_17277_17312[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17268 === (10)))
{var inst_17234 = (state_17267[(7)]);var inst_17240 = (state_17267[(2)]);var inst_17256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_17257 = (function (){var c__5861__auto____$1 = inst_17256;var chan__3468__auto__ = inst_17240;var x = inst_17234;var temp__4220__auto__ = inst_17234;return ((function (c__5861__auto____$1,chan__3468__auto__,x,temp__4220__auto__,inst_17234,inst_17240,inst_17256,state_val_17268,c__5861__auto___17304,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto____$1,chan__3468__auto__,x,temp__4220__auto__,inst_17234,inst_17240,inst_17256,state_val_17268,c__5861__auto___17304,out){
return (function (state_17254){var state_val_17255 = (state_17254[(1)]);if((state_val_17255 === (8)))
{var inst_17246 = (state_17254[(2)]);var state_17254__$1 = (function (){var statearr_17278 = state_17254;(statearr_17278[(7)] = inst_17246);
return statearr_17278;
})();var statearr_17279_17313 = state_17254__$1;(statearr_17279_17313[(2)] = null);
(statearr_17279_17313[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17255 === (7)))
{var inst_17250 = (state_17254[(2)]);var state_17254__$1 = state_17254;var statearr_17280_17314 = state_17254__$1;(statearr_17280_17314[(2)] = inst_17250);
(statearr_17280_17314[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17255 === (6)))
{var state_17254__$1 = state_17254;var statearr_17281_17315 = state_17254__$1;(statearr_17281_17315[(2)] = cljs.core.constant$keyword$32);
(statearr_17281_17315[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17255 === (5)))
{var inst_17243 = (state_17254[(8)]);var state_17254__$1 = state_17254;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17254__$1,(8),out,inst_17243);
} else
{if((state_val_17255 === (4)))
{var inst_17243 = (state_17254[(8)]);var inst_17243__$1 = (state_17254[(2)]);var state_17254__$1 = (function (){var statearr_17282 = state_17254;(statearr_17282[(8)] = inst_17243__$1);
return statearr_17282;
})();if(cljs.core.truth_(inst_17243__$1))
{var statearr_17283_17316 = state_17254__$1;(statearr_17283_17316[(1)] = (5));
} else
{var statearr_17284_17317 = state_17254__$1;(statearr_17284_17317[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17255 === (3)))
{var inst_17252 = (state_17254[(2)]);var state_17254__$1 = state_17254;return cljs.core.async.impl.ioc_helpers.return_chan(state_17254__$1,inst_17252);
} else
{if((state_val_17255 === (2)))
{var state_17254__$1 = state_17254;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17254__$1,(4),chan__3468__auto__);
} else
{if((state_val_17255 === (1)))
{var state_17254__$1 = state_17254;var statearr_17285_17318 = state_17254__$1;(statearr_17285_17318[(2)] = null);
(statearr_17285_17318[(1)] = (2));
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
});})(c__5861__auto____$1,chan__3468__auto__,x,temp__4220__auto__,inst_17234,inst_17240,inst_17256,state_val_17268,c__5861__auto___17304,out))
;return ((function (switch__5846__auto__,c__5861__auto____$1,chan__3468__auto__,x,temp__4220__auto__,inst_17234,inst_17240,inst_17256,state_val_17268,c__5861__auto___17304,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17289 = [null,null,null,null,null,null,null,null,null];(statearr_17289[(0)] = state_machine__5847__auto__);
(statearr_17289[(1)] = (1));
return statearr_17289;
});
var state_machine__5847__auto____1 = (function (state_17254){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17254);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17290){if((e17290 instanceof Object))
{var ex__5850__auto__ = e17290;var statearr_17291_17319 = state_17254;(statearr_17291_17319[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17254);
return cljs.core.constant$keyword$16;
} else
{throw e17290;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17320 = state_17254;
state_17254 = G__17320;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17254){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto____$1,chan__3468__auto__,x,temp__4220__auto__,inst_17234,inst_17240,inst_17256,state_val_17268,c__5861__auto___17304,out))
})();var state__5863__auto__ = (function (){var statearr_17292 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto____$1);
return statearr_17292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});
;})(c__5861__auto____$1,chan__3468__auto__,x,temp__4220__auto__,inst_17234,inst_17240,inst_17256,state_val_17268,c__5861__auto___17304,out))
})();var inst_17258 = cljs.core.async.impl.dispatch.run(inst_17257);var state_17267__$1 = (function (){var statearr_17293 = state_17267;(statearr_17293[(8)] = inst_17258);
return statearr_17293;
})();var statearr_17294_17321 = state_17267__$1;(statearr_17294_17321[(2)] = null);
(statearr_17294_17321[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17268 === (8)))
{var inst_17234 = (state_17267[(7)]);var inst_17237 = (function (){var G__17295 = inst_17234;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17295) : f.call(null,G__17295));
})();var state_17267__$1 = state_17267;var statearr_17296_17322 = state_17267__$1;(statearr_17296_17322[(2)] = inst_17237);
(statearr_17296_17322[(1)] = (10));
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
});})(c__5861__auto___17304,out))
;return ((function (switch__5846__auto__,c__5861__auto___17304,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17300 = [null,null,null,null,null,null,null,null,null];(statearr_17300[(0)] = state_machine__5847__auto__);
(statearr_17300[(1)] = (1));
return statearr_17300;
});
var state_machine__5847__auto____1 = (function (state_17267){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17267);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17301){if((e17301 instanceof Object))
{var ex__5850__auto__ = e17301;var statearr_17302_17323 = state_17267;(statearr_17302_17323[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17267);
return cljs.core.constant$keyword$16;
} else
{throw e17301;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17324 = state_17267;
state_17267 = G__17324;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17267){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17304,out))
})();var state__5863__auto__ = (function (){var statearr_17303 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17304);
return statearr_17303;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17304,out))
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
var mapcat__2 = (function (f,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___17447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17447,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17447,out){
return (function (state_17417){var state_val_17418 = (state_17417[(1)]);if((state_val_17418 === (7)))
{var inst_17413 = (state_17417[(2)]);var state_17417__$1 = state_17417;var statearr_17419_17448 = state_17417__$1;(statearr_17419_17448[(2)] = inst_17413);
(statearr_17419_17448[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17418 === (1)))
{var state_17417__$1 = state_17417;var statearr_17420_17449 = state_17417__$1;(statearr_17420_17449[(2)] = null);
(statearr_17420_17449[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17418 === (4)))
{var inst_17389 = (state_17417[(7)]);var inst_17389__$1 = (state_17417[(2)]);var state_17417__$1 = (function (){var statearr_17421 = state_17417;(statearr_17421[(7)] = inst_17389__$1);
return statearr_17421;
})();if(cljs.core.truth_(inst_17389__$1))
{var statearr_17422_17450 = state_17417__$1;(statearr_17422_17450[(1)] = (5));
} else
{var statearr_17423_17451 = state_17417__$1;(statearr_17423_17451[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17418 === (15)))
{var inst_17406 = (state_17417[(2)]);var state_17417__$1 = state_17417;var statearr_17424_17452 = state_17417__$1;(statearr_17424_17452[(2)] = inst_17406);
(statearr_17424_17452[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17418 === (13)))
{var inst_17396 = (state_17417[(8)]);var inst_17399 = cljs.core.first(inst_17396);var state_17417__$1 = state_17417;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17417__$1,(16),out,inst_17399);
} else
{if((state_val_17418 === (6)))
{var inst_17411 = cljs.core.async.close_BANG_(out);var state_17417__$1 = state_17417;var statearr_17425_17453 = state_17417__$1;(statearr_17425_17453[(2)] = inst_17411);
(statearr_17425_17453[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17418 === (3)))
{var inst_17415 = (state_17417[(2)]);var state_17417__$1 = state_17417;return cljs.core.async.impl.ioc_helpers.return_chan(state_17417__$1,inst_17415);
} else
{if((state_val_17418 === (12)))
{var inst_17408 = (state_17417[(2)]);var state_17417__$1 = (function (){var statearr_17426 = state_17417;(statearr_17426[(9)] = inst_17408);
return statearr_17426;
})();var statearr_17427_17454 = state_17417__$1;(statearr_17427_17454[(2)] = null);
(statearr_17427_17454[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17418 === (2)))
{var state_17417__$1 = state_17417;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17417__$1,(4),in$);
} else
{if((state_val_17418 === (11)))
{var inst_17396 = (state_17417[(8)]);var state_17417__$1 = state_17417;if(cljs.core.truth_(inst_17396))
{var statearr_17428_17455 = state_17417__$1;(statearr_17428_17455[(1)] = (13));
} else
{var statearr_17429_17456 = state_17417__$1;(statearr_17429_17456[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17418 === (9)))
{var inst_17389 = (state_17417[(7)]);var state_17417__$1 = state_17417;var statearr_17430_17457 = state_17417__$1;(statearr_17430_17457[(2)] = inst_17389);
(statearr_17430_17457[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17418 === (5)))
{var state_17417__$1 = state_17417;if(cljs.core.truth_(f))
{var statearr_17431_17458 = state_17417__$1;(statearr_17431_17458[(1)] = (8));
} else
{var statearr_17432_17459 = state_17417__$1;(statearr_17432_17459[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17418 === (14)))
{var state_17417__$1 = state_17417;var statearr_17433_17460 = state_17417__$1;(statearr_17433_17460[(2)] = null);
(statearr_17433_17460[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17418 === (16)))
{var inst_17396 = (state_17417[(8)]);var inst_17401 = (state_17417[(2)]);var inst_17402 = cljs.core.next(inst_17396);var inst_17396__$1 = inst_17402;var state_17417__$1 = (function (){var statearr_17434 = state_17417;(statearr_17434[(8)] = inst_17396__$1);
(statearr_17434[(10)] = inst_17401);
return statearr_17434;
})();var statearr_17435_17461 = state_17417__$1;(statearr_17435_17461[(2)] = null);
(statearr_17435_17461[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17418 === (10)))
{var inst_17395 = (state_17417[(2)]);var inst_17396 = inst_17395;var state_17417__$1 = (function (){var statearr_17436 = state_17417;(statearr_17436[(8)] = inst_17396);
return statearr_17436;
})();var statearr_17437_17462 = state_17417__$1;(statearr_17437_17462[(2)] = null);
(statearr_17437_17462[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17418 === (8)))
{var inst_17389 = (state_17417[(7)]);var inst_17392 = (function (){var G__17438 = inst_17389;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17438) : f.call(null,G__17438));
})();var state_17417__$1 = state_17417;var statearr_17439_17463 = state_17417__$1;(statearr_17439_17463[(2)] = inst_17392);
(statearr_17439_17463[(1)] = (10));
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
});})(c__5861__auto___17447,out))
;return ((function (switch__5846__auto__,c__5861__auto___17447,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17443 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17443[(0)] = state_machine__5847__auto__);
(statearr_17443[(1)] = (1));
return statearr_17443;
});
var state_machine__5847__auto____1 = (function (state_17417){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17417);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17444){if((e17444 instanceof Object))
{var ex__5850__auto__ = e17444;var statearr_17445_17464 = state_17417;(statearr_17445_17464[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17417);
return cljs.core.constant$keyword$16;
} else
{throw e17444;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17465 = state_17417;
state_17417 = G__17465;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17417){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17447,out))
})();var state__5863__auto__ = (function (){var statearr_17446 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17447);
return statearr_17446;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17447,out))
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
wilkerdev.util.reactive.filter = (function filter(pred,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___17548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17548,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17548,out){
return (function (state_17526){var state_val_17527 = (state_17526[(1)]);if((state_val_17527 === (7)))
{var inst_17522 = (state_17526[(2)]);var state_17526__$1 = state_17526;var statearr_17528_17549 = state_17526__$1;(statearr_17528_17549[(2)] = inst_17522);
(statearr_17528_17549[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17527 === (1)))
{var state_17526__$1 = state_17526;var statearr_17529_17550 = state_17526__$1;(statearr_17529_17550[(2)] = null);
(statearr_17529_17550[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17527 === (4)))
{var inst_17509 = (state_17526[(7)]);var inst_17509__$1 = (state_17526[(2)]);var state_17526__$1 = (function (){var statearr_17530 = state_17526;(statearr_17530[(7)] = inst_17509__$1);
return statearr_17530;
})();if(cljs.core.truth_(inst_17509__$1))
{var statearr_17531_17551 = state_17526__$1;(statearr_17531_17551[(1)] = (5));
} else
{var statearr_17532_17552 = state_17526__$1;(statearr_17532_17552[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17527 === (6)))
{var inst_17520 = cljs.core.async.close_BANG_(out);var state_17526__$1 = state_17526;var statearr_17533_17553 = state_17526__$1;(statearr_17533_17553[(2)] = inst_17520);
(statearr_17533_17553[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17527 === (3)))
{var inst_17524 = (state_17526[(2)]);var state_17526__$1 = state_17526;return cljs.core.async.impl.ioc_helpers.return_chan(state_17526__$1,inst_17524);
} else
{if((state_val_17527 === (2)))
{var state_17526__$1 = state_17526;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17526__$1,(4),in$);
} else
{if((state_val_17527 === (11)))
{var inst_17514 = (state_17526[(2)]);var state_17526__$1 = state_17526;var statearr_17534_17554 = state_17526__$1;(statearr_17534_17554[(2)] = inst_17514);
(statearr_17534_17554[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17527 === (9)))
{var state_17526__$1 = state_17526;var statearr_17535_17555 = state_17526__$1;(statearr_17535_17555[(2)] = null);
(statearr_17535_17555[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17527 === (5)))
{var inst_17509 = (state_17526[(7)]);var inst_17511 = (function (){var G__17536 = inst_17509;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__17536) : pred.call(null,G__17536));
})();var state_17526__$1 = state_17526;if(cljs.core.truth_(inst_17511))
{var statearr_17537_17556 = state_17526__$1;(statearr_17537_17556[(1)] = (8));
} else
{var statearr_17538_17557 = state_17526__$1;(statearr_17538_17557[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17527 === (10)))
{var inst_17517 = (state_17526[(2)]);var state_17526__$1 = (function (){var statearr_17539 = state_17526;(statearr_17539[(8)] = inst_17517);
return statearr_17539;
})();var statearr_17540_17558 = state_17526__$1;(statearr_17540_17558[(2)] = null);
(statearr_17540_17558[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17527 === (8)))
{var inst_17509 = (state_17526[(7)]);var state_17526__$1 = state_17526;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17526__$1,(11),out,inst_17509);
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
});})(c__5861__auto___17548,out))
;return ((function (switch__5846__auto__,c__5861__auto___17548,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17544 = [null,null,null,null,null,null,null,null,null];(statearr_17544[(0)] = state_machine__5847__auto__);
(statearr_17544[(1)] = (1));
return statearr_17544;
});
var state_machine__5847__auto____1 = (function (state_17526){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17526);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17545){if((e17545 instanceof Object))
{var ex__5850__auto__ = e17545;var statearr_17546_17559 = state_17526;(statearr_17546_17559[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17526);
return cljs.core.constant$keyword$16;
} else
{throw e17545;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17560 = state_17526;
state_17526 = G__17560;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17526){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17548,out))
})();var state__5863__auto__ = (function (){var statearr_17547 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17548);
return statearr_17547;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17548,out))
);
return out;
});
wilkerdev.util.reactive.remove = (function remove(f,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___17643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17643,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17643,out){
return (function (state_17621){var state_val_17622 = (state_17621[(1)]);if((state_val_17622 === (7)))
{var inst_17617 = (state_17621[(2)]);var state_17621__$1 = state_17621;var statearr_17623_17644 = state_17621__$1;(statearr_17623_17644[(2)] = inst_17617);
(statearr_17623_17644[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17622 === (1)))
{var state_17621__$1 = state_17621;var statearr_17624_17645 = state_17621__$1;(statearr_17624_17645[(2)] = null);
(statearr_17624_17645[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17622 === (4)))
{var inst_17604 = (state_17621[(7)]);var inst_17604__$1 = (state_17621[(2)]);var state_17621__$1 = (function (){var statearr_17625 = state_17621;(statearr_17625[(7)] = inst_17604__$1);
return statearr_17625;
})();if(cljs.core.truth_(inst_17604__$1))
{var statearr_17626_17646 = state_17621__$1;(statearr_17626_17646[(1)] = (5));
} else
{var statearr_17627_17647 = state_17621__$1;(statearr_17627_17647[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17622 === (6)))
{var inst_17615 = cljs.core.async.close_BANG_(out);var state_17621__$1 = state_17621;var statearr_17628_17648 = state_17621__$1;(statearr_17628_17648[(2)] = inst_17615);
(statearr_17628_17648[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17622 === (3)))
{var inst_17619 = (state_17621[(2)]);var state_17621__$1 = state_17621;return cljs.core.async.impl.ioc_helpers.return_chan(state_17621__$1,inst_17619);
} else
{if((state_val_17622 === (2)))
{var state_17621__$1 = state_17621;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17621__$1,(4),in$);
} else
{if((state_val_17622 === (11)))
{var inst_17610 = (state_17621[(2)]);var state_17621__$1 = state_17621;var statearr_17629_17649 = state_17621__$1;(statearr_17629_17649[(2)] = inst_17610);
(statearr_17629_17649[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17622 === (9)))
{var inst_17604 = (state_17621[(7)]);var state_17621__$1 = state_17621;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17621__$1,(11),out,inst_17604);
} else
{if((state_val_17622 === (5)))
{var inst_17604 = (state_17621[(7)]);var inst_17606 = (function (){var G__17630 = inst_17604;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17630) : f.call(null,G__17630));
})();var state_17621__$1 = state_17621;if(cljs.core.truth_(inst_17606))
{var statearr_17631_17650 = state_17621__$1;(statearr_17631_17650[(1)] = (8));
} else
{var statearr_17632_17651 = state_17621__$1;(statearr_17632_17651[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17622 === (10)))
{var inst_17612 = (state_17621[(2)]);var state_17621__$1 = (function (){var statearr_17633 = state_17621;(statearr_17633[(8)] = inst_17612);
return statearr_17633;
})();var statearr_17634_17652 = state_17621__$1;(statearr_17634_17652[(2)] = null);
(statearr_17634_17652[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17622 === (8)))
{var state_17621__$1 = state_17621;var statearr_17635_17653 = state_17621__$1;(statearr_17635_17653[(2)] = null);
(statearr_17635_17653[(1)] = (10));
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
});})(c__5861__auto___17643,out))
;return ((function (switch__5846__auto__,c__5861__auto___17643,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17639 = [null,null,null,null,null,null,null,null,null];(statearr_17639[(0)] = state_machine__5847__auto__);
(statearr_17639[(1)] = (1));
return statearr_17639;
});
var state_machine__5847__auto____1 = (function (state_17621){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17621);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17640){if((e17640 instanceof Object))
{var ex__5850__auto__ = e17640;var statearr_17641_17654 = state_17621;(statearr_17641_17654[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17621);
return cljs.core.constant$keyword$16;
} else
{throw e17640;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17655 = state_17621;
state_17621 = G__17655;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17621){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17643,out))
})();var state__5863__auto__ = (function (){var statearr_17642 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17643);
return statearr_17642;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17643,out))
);
return out;
});
wilkerdev.util.reactive.spool = (function spool(xs){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___17722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17722,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17722,out){
return (function (state_17705){var state_val_17706 = (state_17705[(1)]);if((state_val_17706 === (7)))
{var inst_17690 = (state_17705[(7)]);var inst_17695 = (state_17705[(2)]);var inst_17696 = cljs.core.next(inst_17690);var inst_17690__$1 = inst_17696;var state_17705__$1 = (function (){var statearr_17707 = state_17705;(statearr_17707[(7)] = inst_17690__$1);
(statearr_17707[(8)] = inst_17695);
return statearr_17707;
})();var statearr_17708_17723 = state_17705__$1;(statearr_17708_17723[(2)] = null);
(statearr_17708_17723[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17706 === (6)))
{var inst_17701 = (state_17705[(2)]);var state_17705__$1 = state_17705;var statearr_17709_17724 = state_17705__$1;(statearr_17709_17724[(2)] = inst_17701);
(statearr_17709_17724[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17706 === (5)))
{var inst_17699 = cljs.core.async.close_BANG_(out);var state_17705__$1 = state_17705;var statearr_17710_17725 = state_17705__$1;(statearr_17710_17725[(2)] = inst_17699);
(statearr_17710_17725[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17706 === (4)))
{var inst_17690 = (state_17705[(7)]);var inst_17693 = cljs.core.first(inst_17690);var state_17705__$1 = state_17705;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17705__$1,(7),out,inst_17693);
} else
{if((state_val_17706 === (3)))
{var inst_17703 = (state_17705[(2)]);var state_17705__$1 = state_17705;return cljs.core.async.impl.ioc_helpers.return_chan(state_17705__$1,inst_17703);
} else
{if((state_val_17706 === (2)))
{var inst_17690 = (state_17705[(7)]);var state_17705__$1 = state_17705;if(cljs.core.truth_(inst_17690))
{var statearr_17711_17726 = state_17705__$1;(statearr_17711_17726[(1)] = (4));
} else
{var statearr_17712_17727 = state_17705__$1;(statearr_17712_17727[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17706 === (1)))
{var inst_17689 = cljs.core.seq(xs);var inst_17690 = inst_17689;var state_17705__$1 = (function (){var statearr_17713 = state_17705;(statearr_17713[(7)] = inst_17690);
return statearr_17713;
})();var statearr_17714_17728 = state_17705__$1;(statearr_17714_17728[(2)] = null);
(statearr_17714_17728[(1)] = (2));
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
});})(c__5861__auto___17722,out))
;return ((function (switch__5846__auto__,c__5861__auto___17722,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17718 = [null,null,null,null,null,null,null,null,null];(statearr_17718[(0)] = state_machine__5847__auto__);
(statearr_17718[(1)] = (1));
return statearr_17718;
});
var state_machine__5847__auto____1 = (function (state_17705){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17705);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17719){if((e17719 instanceof Object))
{var ex__5850__auto__ = e17719;var statearr_17720_17729 = state_17705;(statearr_17720_17729[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17705);
return cljs.core.constant$keyword$16;
} else
{throw e17719;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17730 = state_17705;
state_17705 = G__17730;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17705){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17722,out))
})();var state__5863__auto__ = (function (){var statearr_17721 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17722);
return statearr_17721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17722,out))
);
return out;
});
wilkerdev.util.reactive.split = (function() {
var split = null;
var split__2 = (function (pred,in$){return split.cljs$core$IFn$_invoke$arity$3(pred,in$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null));
});
var split__3 = (function (pred,in$,p__17731){var vec__17780 = p__17731;var out1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17780,(0),null);var out2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17780,(1),null);var c__5861__auto___17825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17825,vec__17780,out1,out2){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17825,vec__17780,out1,out2){
return (function (state_17802){var state_val_17803 = (state_17802[(1)]);if((state_val_17803 === (7)))
{var inst_17798 = (state_17802[(2)]);var state_17802__$1 = state_17802;var statearr_17804_17826 = state_17802__$1;(statearr_17804_17826[(2)] = inst_17798);
(statearr_17804_17826[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17803 === (1)))
{var state_17802__$1 = state_17802;var statearr_17805_17827 = state_17802__$1;(statearr_17805_17827[(2)] = null);
(statearr_17805_17827[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17803 === (4)))
{var inst_17783 = (state_17802[(7)]);var inst_17783__$1 = (state_17802[(2)]);var state_17802__$1 = (function (){var statearr_17806 = state_17802;(statearr_17806[(7)] = inst_17783__$1);
return statearr_17806;
})();if(cljs.core.truth_(inst_17783__$1))
{var statearr_17807_17828 = state_17802__$1;(statearr_17807_17828[(1)] = (5));
} else
{var statearr_17808_17829 = state_17802__$1;(statearr_17808_17829[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17803 === (6)))
{var state_17802__$1 = state_17802;var statearr_17809_17830 = state_17802__$1;(statearr_17809_17830[(2)] = null);
(statearr_17809_17830[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17803 === (3)))
{var inst_17800 = (state_17802[(2)]);var state_17802__$1 = state_17802;return cljs.core.async.impl.ioc_helpers.return_chan(state_17802__$1,inst_17800);
} else
{if((state_val_17803 === (12)))
{var inst_17792 = (state_17802[(2)]);var state_17802__$1 = (function (){var statearr_17810 = state_17802;(statearr_17810[(8)] = inst_17792);
return statearr_17810;
})();var statearr_17811_17831 = state_17802__$1;(statearr_17811_17831[(2)] = null);
(statearr_17811_17831[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17803 === (2)))
{var state_17802__$1 = state_17802;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17802__$1,(4),in$);
} else
{if((state_val_17803 === (11)))
{var inst_17788 = (state_17802[(2)]);var state_17802__$1 = (function (){var statearr_17812 = state_17802;(statearr_17812[(9)] = inst_17788);
return statearr_17812;
})();var statearr_17813_17832 = state_17802__$1;(statearr_17813_17832[(2)] = null);
(statearr_17813_17832[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17803 === (9)))
{var inst_17783 = (state_17802[(7)]);var state_17802__$1 = state_17802;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17802__$1,(12),out2,inst_17783);
} else
{if((state_val_17803 === (5)))
{var inst_17783 = (state_17802[(7)]);var inst_17785 = (function (){var G__17814 = inst_17783;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__17814) : pred.call(null,G__17814));
})();var state_17802__$1 = state_17802;if(cljs.core.truth_(inst_17785))
{var statearr_17815_17833 = state_17802__$1;(statearr_17815_17833[(1)] = (8));
} else
{var statearr_17816_17834 = state_17802__$1;(statearr_17816_17834[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17803 === (10)))
{var inst_17795 = (state_17802[(2)]);var state_17802__$1 = state_17802;var statearr_17817_17835 = state_17802__$1;(statearr_17817_17835[(2)] = inst_17795);
(statearr_17817_17835[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17803 === (8)))
{var inst_17783 = (state_17802[(7)]);var state_17802__$1 = state_17802;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17802__$1,(11),out1,inst_17783);
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
});})(c__5861__auto___17825,vec__17780,out1,out2))
;return ((function (switch__5846__auto__,c__5861__auto___17825,vec__17780,out1,out2){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17821 = [null,null,null,null,null,null,null,null,null,null];(statearr_17821[(0)] = state_machine__5847__auto__);
(statearr_17821[(1)] = (1));
return statearr_17821;
});
var state_machine__5847__auto____1 = (function (state_17802){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17802);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17822){if((e17822 instanceof Object))
{var ex__5850__auto__ = e17822;var statearr_17823_17836 = state_17802;(statearr_17823_17836[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17802);
return cljs.core.constant$keyword$16;
} else
{throw e17822;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17837 = state_17802;
state_17802 = G__17837;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17802){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17825,vec__17780,out1,out2))
})();var state__5863__auto__ = (function (){var statearr_17824 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17825);
return statearr_17824;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17825,vec__17780,out1,out2))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out1,out2], null);
});
split = function(pred,in$,p__17731){
switch(arguments.length){
case 2:
return split__2.call(this,pred,in$);
case 3:
return split__3.call(this,pred,in$,p__17731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$3 = split__3;
return split;
})()
;
wilkerdev.util.reactive.concat = (function concat(xs,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___17936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___17936,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___17936,out){
return (function (state_17912){var state_val_17913 = (state_17912[(1)]);if((state_val_17913 === (7)))
{var inst_17888 = (state_17912[(7)]);var inst_17893 = (state_17912[(2)]);var inst_17894 = cljs.core.next(inst_17888);var inst_17888__$1 = inst_17894;var state_17912__$1 = (function (){var statearr_17914 = state_17912;(statearr_17914[(8)] = inst_17893);
(statearr_17914[(7)] = inst_17888__$1);
return statearr_17914;
})();var statearr_17915_17937 = state_17912__$1;(statearr_17915_17937[(2)] = null);
(statearr_17915_17937[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17913 === (1)))
{var inst_17887 = cljs.core.seq(xs);var inst_17888 = inst_17887;var state_17912__$1 = (function (){var statearr_17916 = state_17912;(statearr_17916[(7)] = inst_17888);
return statearr_17916;
})();var statearr_17917_17938 = state_17912__$1;(statearr_17917_17938[(2)] = null);
(statearr_17917_17938[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17913 === (4)))
{var inst_17888 = (state_17912[(7)]);var inst_17891 = cljs.core.first(inst_17888);var state_17912__$1 = state_17912;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17912__$1,(7),out,inst_17891);
} else
{if((state_val_17913 === (6)))
{var inst_17908 = (state_17912[(2)]);var state_17912__$1 = state_17912;var statearr_17919_17939 = state_17912__$1;(statearr_17919_17939[(2)] = inst_17908);
(statearr_17919_17939[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17913 === (3)))
{var inst_17910 = (state_17912[(2)]);var state_17912__$1 = state_17912;return cljs.core.async.impl.ioc_helpers.return_chan(state_17912__$1,inst_17910);
} else
{if((state_val_17913 === (12)))
{var inst_17888 = (state_17912[(7)]);var inst_17901 = (state_17912[(2)]);var tmp17918 = inst_17888;var inst_17888__$1 = tmp17918;var state_17912__$1 = (function (){var statearr_17920 = state_17912;(statearr_17920[(9)] = inst_17901);
(statearr_17920[(7)] = inst_17888__$1);
return statearr_17920;
})();var statearr_17921_17940 = state_17912__$1;(statearr_17921_17940[(2)] = null);
(statearr_17921_17940[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17913 === (2)))
{var inst_17888 = (state_17912[(7)]);var state_17912__$1 = state_17912;if(cljs.core.truth_(inst_17888))
{var statearr_17922_17941 = state_17912__$1;(statearr_17922_17941[(1)] = (4));
} else
{var statearr_17923_17942 = state_17912__$1;(statearr_17923_17942[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_17913 === (11)))
{var inst_17906 = (state_17912[(2)]);var state_17912__$1 = state_17912;var statearr_17924_17943 = state_17912__$1;(statearr_17924_17943[(2)] = inst_17906);
(statearr_17924_17943[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17913 === (9)))
{var inst_17898 = (state_17912[(10)]);var state_17912__$1 = state_17912;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17912__$1,(12),out,inst_17898);
} else
{if((state_val_17913 === (5)))
{var state_17912__$1 = state_17912;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17912__$1,(8),in$);
} else
{if((state_val_17913 === (10)))
{var inst_17904 = cljs.core.async.close_BANG_(out);var state_17912__$1 = state_17912;var statearr_17925_17944 = state_17912__$1;(statearr_17925_17944[(2)] = inst_17904);
(statearr_17925_17944[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_17913 === (8)))
{var inst_17898 = (state_17912[(10)]);var inst_17898__$1 = (state_17912[(2)]);var state_17912__$1 = (function (){var statearr_17926 = state_17912;(statearr_17926[(10)] = inst_17898__$1);
return statearr_17926;
})();if(cljs.core.truth_(inst_17898__$1))
{var statearr_17927_17945 = state_17912__$1;(statearr_17927_17945[(1)] = (9));
} else
{var statearr_17928_17946 = state_17912__$1;(statearr_17928_17946[(1)] = (10));
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
});})(c__5861__auto___17936,out))
;return ((function (switch__5846__auto__,c__5861__auto___17936,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_17932 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17932[(0)] = state_machine__5847__auto__);
(statearr_17932[(1)] = (1));
return statearr_17932;
});
var state_machine__5847__auto____1 = (function (state_17912){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_17912);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e17933){if((e17933 instanceof Object))
{var ex__5850__auto__ = e17933;var statearr_17934_17947 = state_17912;(statearr_17934_17947[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17912);
return cljs.core.constant$keyword$16;
} else
{throw e17933;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__17948 = state_17912;
state_17912 = G__17948;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_17912){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_17912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___17936,out))
})();var state__5863__auto__ = (function (){var statearr_17935 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_17935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17936);
return statearr_17935;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___17936,out))
);
return out;
});
wilkerdev.util.reactive.distinct = (function distinct(in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___18033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___18033,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___18033,out){
return (function (state_18011){var state_val_18012 = (state_18011[(1)]);if((state_val_18012 === (7)))
{var inst_18007 = (state_18011[(2)]);var state_18011__$1 = state_18011;var statearr_18013_18034 = state_18011__$1;(statearr_18013_18034[(2)] = inst_18007);
(statearr_18013_18034[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18012 === (1)))
{var inst_17991 = null;var state_18011__$1 = (function (){var statearr_18014 = state_18011;(statearr_18014[(7)] = inst_17991);
return statearr_18014;
})();var statearr_18015_18035 = state_18011__$1;(statearr_18015_18035[(2)] = null);
(statearr_18015_18035[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18012 === (4)))
{var inst_17994 = (state_18011[(8)]);var inst_17994__$1 = (state_18011[(2)]);var state_18011__$1 = (function (){var statearr_18016 = state_18011;(statearr_18016[(8)] = inst_17994__$1);
return statearr_18016;
})();if(cljs.core.truth_(inst_17994__$1))
{var statearr_18017_18036 = state_18011__$1;(statearr_18017_18036[(1)] = (5));
} else
{var statearr_18018_18037 = state_18011__$1;(statearr_18018_18037[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18012 === (6)))
{var inst_18005 = cljs.core.async.close_BANG_(out);var state_18011__$1 = state_18011;var statearr_18019_18038 = state_18011__$1;(statearr_18019_18038[(2)] = inst_18005);
(statearr_18019_18038[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18012 === (3)))
{var inst_18009 = (state_18011[(2)]);var state_18011__$1 = state_18011;return cljs.core.async.impl.ioc_helpers.return_chan(state_18011__$1,inst_18009);
} else
{if((state_val_18012 === (2)))
{var state_18011__$1 = state_18011;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18011__$1,(4),in$);
} else
{if((state_val_18012 === (11)))
{var inst_17999 = (state_18011[(2)]);var state_18011__$1 = state_18011;var statearr_18020_18039 = state_18011__$1;(statearr_18020_18039[(2)] = inst_17999);
(statearr_18020_18039[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18012 === (9)))
{var state_18011__$1 = state_18011;var statearr_18021_18040 = state_18011__$1;(statearr_18021_18040[(2)] = null);
(statearr_18021_18040[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18012 === (5)))
{var inst_17994 = (state_18011[(8)]);var inst_17991 = (state_18011[(7)]);var inst_17996 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_17994,inst_17991);var state_18011__$1 = state_18011;if(inst_17996)
{var statearr_18022_18041 = state_18011__$1;(statearr_18022_18041[(1)] = (8));
} else
{var statearr_18023_18042 = state_18011__$1;(statearr_18023_18042[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18012 === (10)))
{var inst_17994 = (state_18011[(8)]);var inst_18002 = (state_18011[(2)]);var inst_17991 = inst_17994;var state_18011__$1 = (function (){var statearr_18024 = state_18011;(statearr_18024[(7)] = inst_17991);
(statearr_18024[(9)] = inst_18002);
return statearr_18024;
})();var statearr_18025_18043 = state_18011__$1;(statearr_18025_18043[(2)] = null);
(statearr_18025_18043[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18012 === (8)))
{var inst_17994 = (state_18011[(8)]);var state_18011__$1 = state_18011;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18011__$1,(11),out,inst_17994);
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
});})(c__5861__auto___18033,out))
;return ((function (switch__5846__auto__,c__5861__auto___18033,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_18029 = [null,null,null,null,null,null,null,null,null,null];(statearr_18029[(0)] = state_machine__5847__auto__);
(statearr_18029[(1)] = (1));
return statearr_18029;
});
var state_machine__5847__auto____1 = (function (state_18011){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_18011);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e18030){if((e18030 instanceof Object))
{var ex__5850__auto__ = e18030;var statearr_18031_18044 = state_18011;(statearr_18031_18044[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18011);
return cljs.core.constant$keyword$16;
} else
{throw e18030;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__18045 = state_18011;
state_18011 = G__18045;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_18011){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_18011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___18033,out))
})();var state__5863__auto__ = (function (){var statearr_18032 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_18032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18033);
return statearr_18032;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___18033,out))
);
return out;
});
wilkerdev.util.reactive.take_until = (function() {
var take_until = null;
var take_until__2 = (function (pred_sentinel,in$){return take_until.cljs$core$IFn$_invoke$arity$3(pred_sentinel,in$,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
});
var take_until__3 = (function (pred_sentinel,in$,out){var c__5861__auto___18135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___18135){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___18135){
return (function (state_18113){var state_val_18114 = (state_18113[(1)]);if((state_val_18114 === (7)))
{var inst_18109 = (state_18113[(2)]);var state_18113__$1 = state_18113;var statearr_18115_18136 = state_18113__$1;(statearr_18115_18136[(2)] = inst_18109);
(statearr_18115_18136[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18114 === (1)))
{var state_18113__$1 = state_18113;var statearr_18116_18137 = state_18113__$1;(statearr_18116_18137[(2)] = null);
(statearr_18116_18137[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18114 === (4)))
{var inst_18094 = (state_18113[(7)]);var inst_18094__$1 = (state_18113[(2)]);var state_18113__$1 = (function (){var statearr_18117 = state_18113;(statearr_18117[(7)] = inst_18094__$1);
return statearr_18117;
})();if(cljs.core.truth_(inst_18094__$1))
{var statearr_18118_18138 = state_18113__$1;(statearr_18118_18138[(1)] = (5));
} else
{var statearr_18119_18139 = state_18113__$1;(statearr_18119_18139[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18114 === (6)))
{var inst_18107 = cljs.core.async.close_BANG_(out);var state_18113__$1 = state_18113;var statearr_18120_18140 = state_18113__$1;(statearr_18120_18140[(2)] = inst_18107);
(statearr_18120_18140[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18114 === (3)))
{var inst_18111 = (state_18113[(2)]);var state_18113__$1 = state_18113;return cljs.core.async.impl.ioc_helpers.return_chan(state_18113__$1,inst_18111);
} else
{if((state_val_18114 === (2)))
{var state_18113__$1 = state_18113;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18113__$1,(4),in$);
} else
{if((state_val_18114 === (11)))
{var inst_18105 = (state_18113[(2)]);var state_18113__$1 = state_18113;var statearr_18121_18141 = state_18113__$1;(statearr_18121_18141[(2)] = inst_18105);
(statearr_18121_18141[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18114 === (9)))
{var state_18113__$1 = state_18113;var statearr_18122_18142 = state_18113__$1;(statearr_18122_18142[(2)] = null);
(statearr_18122_18142[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18114 === (5)))
{var inst_18094 = (state_18113[(7)]);var state_18113__$1 = state_18113;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18113__$1,(8),out,inst_18094);
} else
{if((state_val_18114 === (10)))
{var inst_18103 = cljs.core.async.close_BANG_(out);var state_18113__$1 = state_18113;var statearr_18123_18143 = state_18113__$1;(statearr_18123_18143[(2)] = inst_18103);
(statearr_18123_18143[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18114 === (8)))
{var inst_18094 = (state_18113[(7)]);var inst_18097 = (state_18113[(2)]);var inst_18098 = (function (){var G__18124 = inst_18094;return (pred_sentinel.cljs$core$IFn$_invoke$arity$1 ? pred_sentinel.cljs$core$IFn$_invoke$arity$1(G__18124) : pred_sentinel.call(null,G__18124));
})();var inst_18099 = cljs.core.not(inst_18098);var state_18113__$1 = (function (){var statearr_18125 = state_18113;(statearr_18125[(8)] = inst_18097);
return statearr_18125;
})();if(inst_18099)
{var statearr_18126_18144 = state_18113__$1;(statearr_18126_18144[(1)] = (9));
} else
{var statearr_18127_18145 = state_18113__$1;(statearr_18127_18145[(1)] = (10));
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
});})(c__5861__auto___18135))
;return ((function (switch__5846__auto__,c__5861__auto___18135){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_18131 = [null,null,null,null,null,null,null,null,null];(statearr_18131[(0)] = state_machine__5847__auto__);
(statearr_18131[(1)] = (1));
return statearr_18131;
});
var state_machine__5847__auto____1 = (function (state_18113){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_18113);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e18132){if((e18132 instanceof Object))
{var ex__5850__auto__ = e18132;var statearr_18133_18146 = state_18113;(statearr_18133_18146[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18113);
return cljs.core.constant$keyword$16;
} else
{throw e18132;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__18147 = state_18113;
state_18113 = G__18147;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_18113){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_18113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___18135))
})();var state__5863__auto__ = (function (){var statearr_18134 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_18134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18135);
return statearr_18134;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___18135))
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
var drop_while__3 = (function (sentinel,in$,out){var c__5861__auto___18265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___18265){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___18265){
return (function (state_18236){var state_val_18237 = (state_18236[(1)]);if((state_val_18237 === (7)))
{var inst_18232 = (state_18236[(2)]);var state_18236__$1 = state_18236;var statearr_18238_18266 = state_18236__$1;(statearr_18238_18266[(2)] = inst_18232);
(statearr_18238_18266[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18237 === (1)))
{var inst_18208 = true;var state_18236__$1 = (function (){var statearr_18239 = state_18236;(statearr_18239[(7)] = inst_18208);
return statearr_18239;
})();var statearr_18240_18267 = state_18236__$1;(statearr_18240_18267[(2)] = null);
(statearr_18240_18267[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18237 === (4)))
{var inst_18211 = (state_18236[(8)]);var inst_18211__$1 = (state_18236[(2)]);var state_18236__$1 = (function (){var statearr_18241 = state_18236;(statearr_18241[(8)] = inst_18211__$1);
return statearr_18241;
})();if(cljs.core.truth_(inst_18211__$1))
{var statearr_18242_18268 = state_18236__$1;(statearr_18242_18268[(1)] = (5));
} else
{var statearr_18243_18269 = state_18236__$1;(statearr_18243_18269[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18237 === (15)))
{var inst_18225 = (state_18236[(2)]);var inst_18208 = false;var state_18236__$1 = (function (){var statearr_18244 = state_18236;(statearr_18244[(7)] = inst_18208);
(statearr_18244[(9)] = inst_18225);
return statearr_18244;
})();var statearr_18245_18270 = state_18236__$1;(statearr_18245_18270[(2)] = null);
(statearr_18245_18270[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18237 === (13)))
{var inst_18222 = (state_18236[(2)]);var state_18236__$1 = state_18236;var statearr_18246_18271 = state_18236__$1;(statearr_18246_18271[(2)] = inst_18222);
(statearr_18246_18271[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18237 === (6)))
{var inst_18230 = cljs.core.async.close_BANG_(out);var state_18236__$1 = state_18236;var statearr_18247_18272 = state_18236__$1;(statearr_18247_18272[(2)] = inst_18230);
(statearr_18247_18272[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18237 === (3)))
{var inst_18234 = (state_18236[(2)]);var state_18236__$1 = state_18236;return cljs.core.async.impl.ioc_helpers.return_chan(state_18236__$1,inst_18234);
} else
{if((state_val_18237 === (12)))
{var inst_18211 = (state_18236[(8)]);var state_18236__$1 = state_18236;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18236__$1,(14),out,inst_18211);
} else
{if((state_val_18237 === (2)))
{var state_18236__$1 = state_18236;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18236__$1,(4),in$);
} else
{if((state_val_18237 === (11)))
{var inst_18208 = true;var state_18236__$1 = (function (){var statearr_18248 = state_18236;(statearr_18248[(7)] = inst_18208);
return statearr_18248;
})();var statearr_18249_18273 = state_18236__$1;(statearr_18249_18273[(2)] = null);
(statearr_18249_18273[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18237 === (9)))
{var inst_18211 = (state_18236[(8)]);var state_18236__$1 = state_18236;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18236__$1,(15),out,inst_18211);
} else
{if((state_val_18237 === (5)))
{var inst_18208 = (state_18236[(7)]);var state_18236__$1 = state_18236;if(cljs.core.truth_(inst_18208))
{var statearr_18250_18274 = state_18236__$1;(statearr_18250_18274[(1)] = (8));
} else
{var statearr_18251_18275 = state_18236__$1;(statearr_18251_18275[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18237 === (14)))
{var inst_18219 = (state_18236[(2)]);var inst_18208 = false;var state_18236__$1 = (function (){var statearr_18252 = state_18236;(statearr_18252[(10)] = inst_18219);
(statearr_18252[(7)] = inst_18208);
return statearr_18252;
})();var statearr_18253_18276 = state_18236__$1;(statearr_18253_18276[(2)] = null);
(statearr_18253_18276[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18237 === (10)))
{var inst_18228 = (state_18236[(2)]);var state_18236__$1 = state_18236;var statearr_18254_18277 = state_18236__$1;(statearr_18254_18277[(2)] = inst_18228);
(statearr_18254_18277[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18237 === (8)))
{var inst_18211 = (state_18236[(8)]);var inst_18214 = (function (){var G__18255 = inst_18211;return (sentinel.cljs$core$IFn$_invoke$arity$1 ? sentinel.cljs$core$IFn$_invoke$arity$1(G__18255) : sentinel.call(null,G__18255));
})();var state_18236__$1 = state_18236;if(cljs.core.truth_(inst_18214))
{var statearr_18256_18278 = state_18236__$1;(statearr_18256_18278[(1)] = (11));
} else
{var statearr_18257_18279 = state_18236__$1;(statearr_18257_18279[(1)] = (12));
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
});})(c__5861__auto___18265))
;return ((function (switch__5846__auto__,c__5861__auto___18265){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_18261 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18261[(0)] = state_machine__5847__auto__);
(statearr_18261[(1)] = (1));
return statearr_18261;
});
var state_machine__5847__auto____1 = (function (state_18236){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_18236);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e18262){if((e18262 instanceof Object))
{var ex__5850__auto__ = e18262;var statearr_18263_18280 = state_18236;(statearr_18263_18280[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18236);
return cljs.core.constant$keyword$16;
} else
{throw e18262;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__18281 = state_18236;
state_18236 = G__18281;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_18236){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_18236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___18265))
})();var state__5863__auto__ = (function (){var statearr_18264 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_18264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18265);
return statearr_18264;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___18265))
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
wilkerdev.util.reactive.toggle = (function toggle(in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var control = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___18432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___18432,out,control){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___18432,out,control){
return (function (state_18400){var state_val_18401 = (state_18400[(1)]);if((state_val_18401 === (7)))
{var inst_18395 = (state_18400[(2)]);var inst_18357 = inst_18395;var state_18400__$1 = (function (){var statearr_18402 = state_18400;(statearr_18402[(7)] = inst_18357);
return statearr_18402;
})();var statearr_18403_18433 = state_18400__$1;(statearr_18403_18433[(2)] = null);
(statearr_18403_18433[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18401 === (1)))
{var inst_18357 = true;var state_18400__$1 = (function (){var statearr_18404 = state_18400;(statearr_18404[(7)] = inst_18357);
return statearr_18404;
})();var statearr_18405_18434 = state_18400__$1;(statearr_18405_18434[(2)] = null);
(statearr_18405_18434[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18401 === (4)))
{var inst_18370 = (state_18400[(8)]);var inst_18368 = (state_18400[(9)]);var inst_18368__$1 = (state_18400[(2)]);var inst_18369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18368__$1,(0),null);var inst_18370__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18368__$1,(1),null);var inst_18371 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18370__$1,in$);var state_18400__$1 = (function (){var statearr_18406 = state_18400;(statearr_18406[(8)] = inst_18370__$1);
(statearr_18406[(10)] = inst_18369);
(statearr_18406[(9)] = inst_18368__$1);
return statearr_18406;
})();if(inst_18371)
{var statearr_18407_18435 = state_18400__$1;(statearr_18407_18435[(1)] = (5));
} else
{var statearr_18408_18436 = state_18400__$1;(statearr_18408_18436[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18401 === (15)))
{var inst_18369 = (state_18400[(10)]);var state_18400__$1 = state_18400;var statearr_18409_18437 = state_18400__$1;(statearr_18409_18437[(2)] = inst_18369);
(statearr_18409_18437[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18401 === (13)))
{var inst_18370 = (state_18400[(8)]);var inst_18387 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18370,cljs.core.constant$keyword$7);var state_18400__$1 = state_18400;if(inst_18387)
{var statearr_18410_18438 = state_18400__$1;(statearr_18410_18438[(1)] = (15));
} else
{var statearr_18411_18439 = state_18400__$1;(statearr_18411_18439[(1)] = (16));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18401 === (6)))
{var inst_18370 = (state_18400[(8)]);var inst_18382 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18370,control);var state_18400__$1 = state_18400;if(inst_18382)
{var statearr_18412_18440 = state_18400__$1;(statearr_18412_18440[(1)] = (12));
} else
{var statearr_18413_18441 = state_18400__$1;(statearr_18413_18441[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18401 === (17)))
{var inst_18391 = (state_18400[(2)]);var state_18400__$1 = state_18400;var statearr_18414_18442 = state_18400__$1;(statearr_18414_18442[(2)] = inst_18391);
(statearr_18414_18442[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18401 === (3)))
{var inst_18398 = (state_18400[(2)]);var state_18400__$1 = state_18400;return cljs.core.async.impl.ioc_helpers.return_chan(state_18400__$1,inst_18398);
} else
{if((state_val_18401 === (12)))
{var inst_18368 = (state_18400[(9)]);var inst_18385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18368,(0),null);var state_18400__$1 = state_18400;var statearr_18415_18443 = state_18400__$1;(statearr_18415_18443[(2)] = inst_18385);
(statearr_18415_18443[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18401 === (2)))
{var inst_18364 = cljs.core.PersistentVector.EMPTY_NODE;var inst_18365 = [in$,control];var inst_18366 = (new cljs.core.PersistentVector(null,2,(5),inst_18364,inst_18365,null));var state_18400__$1 = state_18400;return cljs.core.async.ioc_alts_BANG_(state_18400__$1,(4),inst_18366);
} else
{if((state_val_18401 === (11)))
{var inst_18377 = (state_18400[(2)]);var state_18400__$1 = state_18400;var statearr_18416_18444 = state_18400__$1;(statearr_18416_18444[(2)] = inst_18377);
(statearr_18416_18444[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18401 === (9)))
{var state_18400__$1 = state_18400;var statearr_18417_18445 = state_18400__$1;(statearr_18417_18445[(2)] = null);
(statearr_18417_18445[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18401 === (5)))
{var inst_18368 = (state_18400[(9)]);var inst_18357 = (state_18400[(7)]);var inst_18374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18368,(0),null);var state_18400__$1 = (function (){var statearr_18418 = state_18400;(statearr_18418[(11)] = inst_18374);
return statearr_18418;
})();if(cljs.core.truth_(inst_18357))
{var statearr_18419_18446 = state_18400__$1;(statearr_18419_18446[(1)] = (8));
} else
{var statearr_18420_18447 = state_18400__$1;(statearr_18420_18447[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18401 === (14)))
{var inst_18393 = (state_18400[(2)]);var state_18400__$1 = state_18400;var statearr_18421_18448 = state_18400__$1;(statearr_18421_18448[(2)] = inst_18393);
(statearr_18421_18448[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18401 === (16)))
{var state_18400__$1 = state_18400;var statearr_18422_18449 = state_18400__$1;(statearr_18422_18449[(2)] = null);
(statearr_18422_18449[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18401 === (10)))
{var inst_18357 = (state_18400[(7)]);var inst_18380 = (state_18400[(2)]);var state_18400__$1 = (function (){var statearr_18423 = state_18400;(statearr_18423[(12)] = inst_18380);
return statearr_18423;
})();var statearr_18424_18450 = state_18400__$1;(statearr_18424_18450[(2)] = inst_18357);
(statearr_18424_18450[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18401 === (8)))
{var inst_18374 = (state_18400[(11)]);var state_18400__$1 = state_18400;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18400__$1,(11),out,inst_18374);
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
});})(c__5861__auto___18432,out,control))
;return ((function (switch__5846__auto__,c__5861__auto___18432,out,control){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_18428 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18428[(0)] = state_machine__5847__auto__);
(statearr_18428[(1)] = (1));
return statearr_18428;
});
var state_machine__5847__auto____1 = (function (state_18400){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_18400);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e18429){if((e18429 instanceof Object))
{var ex__5850__auto__ = e18429;var statearr_18430_18451 = state_18400;(statearr_18430_18451[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18400);
return cljs.core.constant$keyword$16;
} else
{throw e18429;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__18452 = state_18400;
state_18400 = G__18452;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_18400){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_18400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___18432,out,control))
})();var state__5863__auto__ = (function (){var statearr_18431 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_18431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18432);
return statearr_18431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___18432,out,control))
);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$33,out,cljs.core.constant$keyword$34,control], null);
});
wilkerdev.util.reactive.barrier = (function barrier(cs){var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__){
return (function (state_18507){var state_val_18508 = (state_18507[(1)]);if((state_val_18508 === (7)))
{var inst_18492 = (state_18507[(7)]);var inst_18495 = (state_18507[(8)]);var inst_18498 = (state_18507[(2)]);var inst_18499 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_18492,inst_18498);var inst_18491 = inst_18495;var inst_18492__$1 = inst_18499;var state_18507__$1 = (function (){var statearr_18509 = state_18507;(statearr_18509[(9)] = inst_18491);
(statearr_18509[(7)] = inst_18492__$1);
return statearr_18509;
})();var statearr_18510_18525 = state_18507__$1;(statearr_18510_18525[(2)] = null);
(statearr_18510_18525[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18508 === (6)))
{var inst_18503 = (state_18507[(2)]);var state_18507__$1 = state_18507;var statearr_18511_18526 = state_18507__$1;(statearr_18511_18526[(2)] = inst_18503);
(statearr_18511_18526[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18508 === (5)))
{var inst_18492 = (state_18507[(7)]);var state_18507__$1 = state_18507;var statearr_18512_18527 = state_18507__$1;(statearr_18512_18527[(2)] = inst_18492);
(statearr_18512_18527[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18508 === (4)))
{var inst_18491 = (state_18507[(9)]);var inst_18495 = cljs.core.next(inst_18491);var inst_18496 = cljs.core.first(inst_18491);var state_18507__$1 = (function (){var statearr_18513 = state_18507;(statearr_18513[(8)] = inst_18495);
return statearr_18513;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18507__$1,(7),inst_18496);
} else
{if((state_val_18508 === (3)))
{var inst_18505 = (state_18507[(2)]);var state_18507__$1 = state_18507;return cljs.core.async.impl.ioc_helpers.return_chan(state_18507__$1,inst_18505);
} else
{if((state_val_18508 === (2)))
{var inst_18491 = (state_18507[(9)]);var state_18507__$1 = state_18507;if(cljs.core.truth_(inst_18491))
{var statearr_18514_18528 = state_18507__$1;(statearr_18514_18528[(1)] = (4));
} else
{var statearr_18515_18529 = state_18507__$1;(statearr_18515_18529[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18508 === (1)))
{var inst_18489 = cljs.core.seq(cs);var inst_18490 = cljs.core.PersistentVector.EMPTY;var inst_18491 = inst_18489;var inst_18492 = inst_18490;var state_18507__$1 = (function (){var statearr_18516 = state_18507;(statearr_18516[(9)] = inst_18491);
(statearr_18516[(7)] = inst_18492);
return statearr_18516;
})();var statearr_18517_18530 = state_18507__$1;(statearr_18517_18530[(2)] = null);
(statearr_18517_18530[(1)] = (2));
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
var state_machine__5847__auto____0 = (function (){var statearr_18521 = [null,null,null,null,null,null,null,null,null,null];(statearr_18521[(0)] = state_machine__5847__auto__);
(statearr_18521[(1)] = (1));
return statearr_18521;
});
var state_machine__5847__auto____1 = (function (state_18507){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_18507);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e18522){if((e18522 instanceof Object))
{var ex__5850__auto__ = e18522;var statearr_18523_18531 = state_18507;(statearr_18523_18531[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18507);
return cljs.core.constant$keyword$16;
} else
{throw e18522;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__18532 = state_18507;
state_18507 = G__18532;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_18507){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_18507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__))
})();var state__5863__auto__ = (function (){var statearr_18524 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_18524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_18524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__))
);
return c__5861__auto__;
});
wilkerdev.util.reactive.cyclic_barrier = (function cyclic_barrier(cs){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___18577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___18577,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___18577,out){
return (function (state_18565){var state_val_18566 = (state_18565[(1)]);if((state_val_18566 === (5)))
{var inst_18558 = (state_18565[(2)]);var state_18565__$1 = state_18565;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18565__$1,(4),out,inst_18558);
} else
{if((state_val_18566 === (4)))
{var inst_18560 = (state_18565[(2)]);var state_18565__$1 = (function (){var statearr_18567 = state_18565;(statearr_18567[(7)] = inst_18560);
return statearr_18567;
})();var statearr_18568_18578 = state_18565__$1;(statearr_18568_18578[(2)] = null);
(statearr_18568_18578[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18566 === (3)))
{var inst_18563 = (state_18565[(2)]);var state_18565__$1 = state_18565;return cljs.core.async.impl.ioc_helpers.return_chan(state_18565__$1,inst_18563);
} else
{if((state_val_18566 === (2)))
{var inst_18556 = wilkerdev.util.reactive.barrier(cs);var state_18565__$1 = state_18565;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18565__$1,(5),inst_18556);
} else
{if((state_val_18566 === (1)))
{var state_18565__$1 = state_18565;var statearr_18569_18579 = state_18565__$1;(statearr_18569_18579[(2)] = null);
(statearr_18569_18579[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
});})(c__5861__auto___18577,out))
;return ((function (switch__5846__auto__,c__5861__auto___18577,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_18573 = [null,null,null,null,null,null,null,null];(statearr_18573[(0)] = state_machine__5847__auto__);
(statearr_18573[(1)] = (1));
return statearr_18573;
});
var state_machine__5847__auto____1 = (function (state_18565){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_18565);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e18574){if((e18574 instanceof Object))
{var ex__5850__auto__ = e18574;var statearr_18575_18580 = state_18565;(statearr_18575_18580[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18565);
return cljs.core.constant$keyword$16;
} else
{throw e18574;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__18581 = state_18565;
state_18565 = G__18581;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_18565){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_18565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___18577,out))
})();var state__5863__auto__ = (function (){var statearr_18576 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_18576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18577);
return statearr_18576;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___18577,out))
);
return out;
});
wilkerdev.util.reactive.throttle_STAR_ = (function() {
var throttle_STAR_ = null;
var throttle_STAR___2 = (function (in$,msecs){return throttle_STAR_.cljs$core$IFn$_invoke$arity$3(in$,msecs,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
});
var throttle_STAR___3 = (function (in$,msecs,out){return throttle_STAR_.cljs$core$IFn$_invoke$arity$4(in$,msecs,out,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
});
var throttle_STAR___4 = (function (in$,msecs,out,control){var c__5861__auto___18879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___18879){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___18879){
return (function (state_18826){var state_val_18827 = (state_18826[(1)]);if((state_val_18827 === (7)))
{var inst_18822 = (state_18826[(2)]);var state_18826__$1 = state_18826;var statearr_18828_18880 = state_18826__$1;(statearr_18828_18880[(2)] = inst_18822);
(statearr_18828_18880[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (20)))
{var inst_18738 = (state_18826[(7)]);var inst_18788 = cljs.core.PersistentVector.EMPTY_NODE;var inst_18789 = [cljs.core.constant$keyword$35,inst_18738];var inst_18790 = (new cljs.core.PersistentVector(null,2,(5),inst_18788,inst_18789,null));var state_18826__$1 = state_18826;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18826__$1,(23),out,inst_18790);
} else
{if((state_val_18827 === (27)))
{var inst_18739 = (state_18826[(8)]);var inst_18808 = cljs.core.pop(inst_18739);var state_18826__$1 = state_18826;var statearr_18829_18881 = state_18826__$1;(statearr_18829_18881[(2)] = inst_18808);
(statearr_18829_18881[(1)] = (29));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (1)))
{var inst_18734 = cljs.core.PersistentVector.EMPTY_NODE;var inst_18735 = [in$,control];var inst_18736 = (new cljs.core.PersistentVector(null,2,(5),inst_18734,inst_18735,null));var inst_18737 = cljs.core.constant$keyword$36;var inst_18738 = null;var inst_18739 = inst_18736;var state_18826__$1 = (function (){var statearr_18830 = state_18826;(statearr_18830[(8)] = inst_18739);
(statearr_18830[(7)] = inst_18738);
(statearr_18830[(9)] = inst_18737);
return statearr_18830;
})();var statearr_18831_18882 = state_18826__$1;(statearr_18831_18882[(2)] = null);
(statearr_18831_18882[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (24)))
{var inst_18739 = (state_18826[(8)]);var inst_18805 = cljs.core.count(inst_18739);var inst_18806 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18805,(3));var state_18826__$1 = state_18826;if(inst_18806)
{var statearr_18832_18883 = state_18826__$1;(statearr_18832_18883[(1)] = (27));
} else
{var statearr_18833_18884 = state_18826__$1;(statearr_18833_18884[(1)] = (28));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (4)))
{var inst_18749 = (state_18826[(10)]);var inst_18747 = (state_18826[(2)]);var inst_18748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18747,(0),null);var inst_18749__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18747,(1),null);var inst_18753 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$,inst_18749__$1);var state_18826__$1 = (function (){var statearr_18835 = state_18826;(statearr_18835[(10)] = inst_18749__$1);
(statearr_18835[(11)] = inst_18748);
return statearr_18835;
})();if(inst_18753)
{var statearr_18836_18885 = state_18826__$1;(statearr_18836_18885[(1)] = (5));
} else
{var statearr_18837_18886 = state_18826__$1;(statearr_18837_18886[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (15)))
{var inst_18781 = (state_18826[(2)]);var state_18826__$1 = state_18826;var statearr_18838_18887 = state_18826__$1;(statearr_18838_18887[(2)] = inst_18781);
(statearr_18838_18887[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (21)))
{var inst_18739 = (state_18826[(8)]);var inst_18738 = (state_18826[(7)]);var inst_18798 = cljs.core.pop(inst_18739);var tmp18834 = inst_18738;var inst_18737 = cljs.core.constant$keyword$36;var inst_18738__$1 = tmp18834;var inst_18739__$1 = inst_18798;var state_18826__$1 = (function (){var statearr_18839 = state_18826;(statearr_18839[(8)] = inst_18739__$1);
(statearr_18839[(7)] = inst_18738__$1);
(statearr_18839[(9)] = inst_18737);
return statearr_18839;
})();var statearr_18840_18888 = state_18826__$1;(statearr_18840_18888[(2)] = null);
(statearr_18840_18888[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (13)))
{var inst_18748 = (state_18826[(11)]);var state_18826__$1 = state_18826;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18826__$1,(16),out,inst_18748);
} else
{if((state_val_18827 === (22)))
{var inst_18801 = (state_18826[(2)]);var state_18826__$1 = state_18826;var statearr_18841_18889 = state_18826__$1;(statearr_18841_18889[(2)] = inst_18801);
(statearr_18841_18889[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (29)))
{var inst_18811 = (state_18826[(2)]);var inst_18737 = cljs.core.constant$keyword$36;var inst_18738 = null;var inst_18739 = inst_18811;var state_18826__$1 = (function (){var statearr_18842 = state_18826;(statearr_18842[(8)] = inst_18739);
(statearr_18842[(7)] = inst_18738);
(statearr_18842[(9)] = inst_18737);
return statearr_18842;
})();var statearr_18843_18890 = state_18826__$1;(statearr_18843_18890[(2)] = null);
(statearr_18843_18890[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (6)))
{var inst_18744 = (state_18826[(12)]);var inst_18749 = (state_18826[(10)]);var inst_18785 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18744,inst_18749);var state_18826__$1 = state_18826;if(inst_18785)
{var statearr_18844_18891 = state_18826__$1;(statearr_18844_18891[(1)] = (17));
} else
{var statearr_18845_18892 = state_18826__$1;(statearr_18845_18892[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (28)))
{var inst_18739 = (state_18826[(8)]);var state_18826__$1 = state_18826;var statearr_18846_18893 = state_18826__$1;(statearr_18846_18893[(2)] = inst_18739);
(statearr_18846_18893[(1)] = (29));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (25)))
{var inst_18749 = (state_18826[(10)]);var inst_18814 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18749));var inst_18815 = (new Error(inst_18814));var inst_18816 = (function(){throw inst_18815})();var state_18826__$1 = state_18826;var statearr_18847_18894 = state_18826__$1;(statearr_18847_18894[(2)] = inst_18816);
(statearr_18847_18894[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (17)))
{var inst_18738 = (state_18826[(7)]);var state_18826__$1 = state_18826;if(cljs.core.truth_(inst_18738))
{var statearr_18849_18895 = state_18826__$1;(statearr_18849_18895[(1)] = (20));
} else
{var statearr_18850_18896 = state_18826__$1;(statearr_18850_18896[(1)] = (21));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (3)))
{var inst_18824 = (state_18826[(2)]);var state_18826__$1 = state_18826;return cljs.core.async.impl.ioc_helpers.return_chan(state_18826__$1,inst_18824);
} else
{if((state_val_18827 === (12)))
{var inst_18739 = (state_18826[(8)]);var inst_18738 = (state_18826[(7)]);var inst_18766 = (state_18826[(2)]);var inst_18767 = cljs.core.async.timeout(msecs);var inst_18768 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_18739,inst_18767);var tmp18848 = inst_18738;var inst_18737 = cljs.core.constant$keyword$37;var inst_18738__$1 = tmp18848;var inst_18739__$1 = inst_18768;var state_18826__$1 = (function (){var statearr_18852 = state_18826;(statearr_18852[(8)] = inst_18739__$1);
(statearr_18852[(7)] = inst_18738__$1);
(statearr_18852[(13)] = inst_18766);
(statearr_18852[(9)] = inst_18737);
return statearr_18852;
})();var statearr_18853_18897 = state_18826__$1;(statearr_18853_18897[(2)] = null);
(statearr_18853_18897[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (2)))
{var inst_18739 = (state_18826[(8)]);var inst_18742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18739,(0),null);var inst_18743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18739,(1),null);var inst_18744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18739,(2),null);var state_18826__$1 = (function (){var statearr_18854 = state_18826;(statearr_18854[(12)] = inst_18744);
(statearr_18854[(14)] = inst_18742);
(statearr_18854[(15)] = inst_18743);
return statearr_18854;
})();return cljs.core.async.ioc_alts_BANG_(state_18826__$1,(4),inst_18739);
} else
{if((state_val_18827 === (23)))
{var inst_18739 = (state_18826[(8)]);var inst_18737 = (state_18826[(9)]);var inst_18792 = (state_18826[(2)]);var inst_18793 = cljs.core.pop(inst_18739);var inst_18794 = cljs.core.async.timeout(msecs);var inst_18795 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_18793,inst_18794);var tmp18851 = inst_18737;var inst_18737__$1 = tmp18851;var inst_18738 = null;var inst_18739__$1 = inst_18795;var state_18826__$1 = (function (){var statearr_18855 = state_18826;(statearr_18855[(8)] = inst_18739__$1);
(statearr_18855[(7)] = inst_18738);
(statearr_18855[(16)] = inst_18792);
(statearr_18855[(9)] = inst_18737__$1);
return statearr_18855;
})();var statearr_18856_18898 = state_18826__$1;(statearr_18856_18898[(2)] = null);
(statearr_18856_18898[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (19)))
{var inst_18820 = (state_18826[(2)]);var state_18826__$1 = state_18826;var statearr_18857_18899 = state_18826__$1;(statearr_18857_18899[(2)] = inst_18820);
(statearr_18857_18899[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (11)))
{var inst_18748 = (state_18826[(11)]);var inst_18761 = (state_18826[(2)]);var inst_18762 = cljs.core.PersistentVector.EMPTY_NODE;var inst_18763 = [cljs.core.constant$keyword$35,inst_18748];var inst_18764 = (new cljs.core.PersistentVector(null,2,(5),inst_18762,inst_18763,null));var state_18826__$1 = (function (){var statearr_18858 = state_18826;(statearr_18858[(17)] = inst_18761);
return statearr_18858;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18826__$1,(12),out,inst_18764);
} else
{if((state_val_18827 === (9)))
{var inst_18737 = (state_18826[(9)]);var inst_18771 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$37,inst_18737);var state_18826__$1 = state_18826;if(inst_18771)
{var statearr_18859_18900 = state_18826__$1;(statearr_18859_18900[(1)] = (13));
} else
{var statearr_18860_18901 = state_18826__$1;(statearr_18860_18901[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (5)))
{var inst_18737 = (state_18826[(9)]);var inst_18758 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$36,inst_18737);var state_18826__$1 = state_18826;if(inst_18758)
{var statearr_18861_18902 = state_18826__$1;(statearr_18861_18902[(1)] = (8));
} else
{var statearr_18862_18903 = state_18826__$1;(statearr_18862_18903[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (14)))
{var inst_18737 = (state_18826[(9)]);var inst_18777 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18737));var inst_18778 = (new Error(inst_18777));var inst_18779 = (function(){throw inst_18778})();var state_18826__$1 = state_18826;var statearr_18865_18904 = state_18826__$1;(statearr_18865_18904[(2)] = inst_18779);
(statearr_18865_18904[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (26)))
{var inst_18818 = (state_18826[(2)]);var state_18826__$1 = state_18826;var statearr_18866_18905 = state_18826__$1;(statearr_18866_18905[(2)] = inst_18818);
(statearr_18866_18905[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (16)))
{var inst_18739 = (state_18826[(8)]);var inst_18748 = (state_18826[(11)]);var inst_18737 = (state_18826[(9)]);var inst_18774 = (state_18826[(2)]);var tmp18863 = inst_18739;var tmp18864 = inst_18737;var inst_18737__$1 = tmp18864;var inst_18738 = inst_18748;var inst_18739__$1 = tmp18863;var state_18826__$1 = (function (){var statearr_18867 = state_18826;(statearr_18867[(18)] = inst_18774);
(statearr_18867[(8)] = inst_18739__$1);
(statearr_18867[(7)] = inst_18738);
(statearr_18867[(9)] = inst_18737__$1);
return statearr_18867;
})();var statearr_18868_18906 = state_18826__$1;(statearr_18868_18906[(2)] = null);
(statearr_18868_18906[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (10)))
{var inst_18783 = (state_18826[(2)]);var state_18826__$1 = state_18826;var statearr_18869_18907 = state_18826__$1;(statearr_18869_18907[(2)] = inst_18783);
(statearr_18869_18907[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (18)))
{var inst_18749 = (state_18826[(10)]);var inst_18803 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(control,inst_18749);var state_18826__$1 = state_18826;if(inst_18803)
{var statearr_18870_18908 = state_18826__$1;(statearr_18870_18908[(1)] = (24));
} else
{var statearr_18871_18909 = state_18826__$1;(statearr_18871_18909[(1)] = (25));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_18827 === (8)))
{var inst_18748 = (state_18826[(11)]);var state_18826__$1 = state_18826;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18826__$1,(11),out,inst_18748);
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
});})(c__5861__auto___18879))
;return ((function (switch__5846__auto__,c__5861__auto___18879){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_18875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18875[(0)] = state_machine__5847__auto__);
(statearr_18875[(1)] = (1));
return statearr_18875;
});
var state_machine__5847__auto____1 = (function (state_18826){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_18826);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e18876){if((e18876 instanceof Object))
{var ex__5850__auto__ = e18876;var statearr_18877_18910 = state_18826;(statearr_18877_18910[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18826);
return cljs.core.constant$keyword$16;
} else
{throw e18876;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__18911 = state_18826;
state_18826 = G__18911;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_18826){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_18826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___18879))
})();var state__5863__auto__ = (function (){var statearr_18878 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_18878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18879);
return statearr_18878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___18879))
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
var throttle__3 = (function (in$,msecs,out){return wilkerdev.util.reactive.map(cljs.core.second,wilkerdev.util.reactive.filter((function (p1__18912_SHARP_){return (cljs.core.vector_QMARK_(p1__18912_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__18912_SHARP_),cljs.core.constant$keyword$35));
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
var debounce__3 = (function (out,source,msecs){var c__5861__auto___19107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___19107){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___19107){
return (function (state_19073){var state_val_19074 = (state_19073[(1)]);if((state_val_19074 === (7)))
{var inst_19069 = (state_19073[(2)]);var state_19073__$1 = state_19073;var statearr_19075_19108 = state_19073__$1;(statearr_19075_19108[(2)] = inst_19069);
(statearr_19075_19108[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19074 === (1)))
{var inst_19013 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19014 = [source];var inst_19015 = (new cljs.core.PersistentVector(null,1,(5),inst_19013,inst_19014,null));var inst_19016 = cljs.core.constant$keyword$36;var inst_19017 = inst_19015;var state_19073__$1 = (function (){var statearr_19076 = state_19073;(statearr_19076[(7)] = inst_19017);
(statearr_19076[(8)] = inst_19016);
return statearr_19076;
})();var statearr_19077_19109 = state_19073__$1;(statearr_19077_19109[(2)] = null);
(statearr_19077_19109[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19074 === (4)))
{var inst_19026 = (state_19073[(9)]);var inst_19024 = (state_19073[(2)]);var inst_19025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19024,(0),null);var inst_19026__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19024,(1),null);var inst_19030 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source,inst_19026__$1);var state_19073__$1 = (function (){var statearr_19078 = state_19073;(statearr_19078[(9)] = inst_19026__$1);
(statearr_19078[(10)] = inst_19025);
return statearr_19078;
})();if(inst_19030)
{var statearr_19079_19110 = state_19073__$1;(statearr_19079_19110[(1)] = (5));
} else
{var statearr_19080_19111 = state_19073__$1;(statearr_19080_19111[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19074 === (15)))
{var inst_19017 = (state_19073[(7)]);var inst_19060 = cljs.core.pop(inst_19017);var inst_19016 = cljs.core.constant$keyword$36;var inst_19017__$1 = inst_19060;var state_19073__$1 = (function (){var statearr_19081 = state_19073;(statearr_19081[(7)] = inst_19017__$1);
(statearr_19081[(8)] = inst_19016);
return statearr_19081;
})();var statearr_19082_19112 = state_19073__$1;(statearr_19082_19112[(2)] = null);
(statearr_19082_19112[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19074 === (13)))
{var inst_19016 = (state_19073[(8)]);var inst_19050 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19016));var inst_19051 = (new Error(inst_19050));var inst_19052 = (function(){throw inst_19051})();var state_19073__$1 = state_19073;var statearr_19083_19113 = state_19073__$1;(statearr_19083_19113[(2)] = inst_19052);
(statearr_19083_19113[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19074 === (6)))
{var inst_19021 = (state_19073[(11)]);var inst_19026 = (state_19073[(9)]);var inst_19058 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19021,inst_19026);var state_19073__$1 = state_19073;if(inst_19058)
{var statearr_19084_19114 = state_19073__$1;(statearr_19084_19114[(1)] = (15));
} else
{var statearr_19085_19115 = state_19073__$1;(statearr_19085_19115[(1)] = (16));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19074 === (17)))
{var inst_19067 = (state_19073[(2)]);var state_19073__$1 = state_19073;var statearr_19087_19116 = state_19073__$1;(statearr_19087_19116[(2)] = inst_19067);
(statearr_19087_19116[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19074 === (3)))
{var inst_19071 = (state_19073[(2)]);var state_19073__$1 = state_19073;return cljs.core.async.impl.ioc_helpers.return_chan(state_19073__$1,inst_19071);
} else
{if((state_val_19074 === (12)))
{var inst_19017 = (state_19073[(7)]);var inst_19016 = (state_19073[(8)]);var inst_19045 = cljs.core.pop(inst_19017);var inst_19046 = cljs.core.async.timeout(msecs);var inst_19047 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19045,inst_19046);var tmp19086 = inst_19016;var inst_19016__$1 = tmp19086;var inst_19017__$1 = inst_19047;var state_19073__$1 = (function (){var statearr_19088 = state_19073;(statearr_19088[(7)] = inst_19017__$1);
(statearr_19088[(8)] = inst_19016__$1);
return statearr_19088;
})();var statearr_19089_19117 = state_19073__$1;(statearr_19089_19117[(2)] = null);
(statearr_19089_19117[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19074 === (2)))
{var inst_19017 = (state_19073[(7)]);var inst_19020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19017,(0),null);var inst_19021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19017,(1),null);var state_19073__$1 = (function (){var statearr_19090 = state_19073;(statearr_19090[(11)] = inst_19021);
(statearr_19090[(12)] = inst_19020);
return statearr_19090;
})();return cljs.core.async.ioc_alts_BANG_(state_19073__$1,(4),inst_19017);
} else
{if((state_val_19074 === (11)))
{var inst_19017 = (state_19073[(7)]);var inst_19038 = (state_19073[(2)]);var inst_19039 = cljs.core.async.timeout(msecs);var inst_19040 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19017,inst_19039);var inst_19016 = cljs.core.constant$keyword$38;var inst_19017__$1 = inst_19040;var state_19073__$1 = (function (){var statearr_19091 = state_19073;(statearr_19091[(13)] = inst_19038);
(statearr_19091[(7)] = inst_19017__$1);
(statearr_19091[(8)] = inst_19016);
return statearr_19091;
})();var statearr_19092_19118 = state_19073__$1;(statearr_19092_19118[(2)] = null);
(statearr_19092_19118[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19074 === (9)))
{var inst_19016 = (state_19073[(8)]);var inst_19043 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$38,inst_19016);var state_19073__$1 = state_19073;if(inst_19043)
{var statearr_19093_19119 = state_19073__$1;(statearr_19093_19119[(1)] = (12));
} else
{var statearr_19094_19120 = state_19073__$1;(statearr_19094_19120[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19074 === (5)))
{var inst_19016 = (state_19073[(8)]);var inst_19035 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$36,inst_19016);var state_19073__$1 = state_19073;if(inst_19035)
{var statearr_19095_19121 = state_19073__$1;(statearr_19095_19121[(1)] = (8));
} else
{var statearr_19096_19122 = state_19073__$1;(statearr_19096_19122[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19074 === (14)))
{var inst_19054 = (state_19073[(2)]);var state_19073__$1 = state_19073;var statearr_19097_19123 = state_19073__$1;(statearr_19097_19123[(2)] = inst_19054);
(statearr_19097_19123[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19074 === (16)))
{var inst_19026 = (state_19073[(9)]);var inst_19063 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19026));var inst_19064 = (new Error(inst_19063));var inst_19065 = (function(){throw inst_19064})();var state_19073__$1 = state_19073;var statearr_19098_19124 = state_19073__$1;(statearr_19098_19124[(2)] = inst_19065);
(statearr_19098_19124[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19074 === (10)))
{var inst_19056 = (state_19073[(2)]);var state_19073__$1 = state_19073;var statearr_19099_19125 = state_19073__$1;(statearr_19099_19125[(2)] = inst_19056);
(statearr_19099_19125[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19074 === (8)))
{var inst_19025 = (state_19073[(10)]);var state_19073__$1 = state_19073;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19073__$1,(11),out,inst_19025);
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
});})(c__5861__auto___19107))
;return ((function (switch__5846__auto__,c__5861__auto___19107){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_19103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19103[(0)] = state_machine__5847__auto__);
(statearr_19103[(1)] = (1));
return statearr_19103;
});
var state_machine__5847__auto____1 = (function (state_19073){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19073);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19104){if((e19104 instanceof Object))
{var ex__5850__auto__ = e19104;var statearr_19105_19126 = state_19073;(statearr_19105_19126[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19073);
return cljs.core.constant$keyword$16;
} else
{throw e19104;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19127 = state_19073;
state_19073 = G__19127;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19073){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___19107))
})();var state__5863__auto__ = (function (){var statearr_19106 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___19107);
return statearr_19106;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___19107))
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
wilkerdev.util.reactive.once = (function once(f,in$){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5861__auto___19206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto___19206,out){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto___19206,out){
return (function (state_19186){var state_val_19187 = (state_19186[(1)]);if((state_val_19187 === (7)))
{var inst_19174 = (state_19186[(7)]);var state_19186__$1 = state_19186;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19186__$1,(10),out,inst_19174);
} else
{if((state_val_19187 === (1)))
{var state_19186__$1 = state_19186;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19186__$1,(2),in$);
} else
{if((state_val_19187 === (4)))
{var state_19186__$1 = state_19186;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19186__$1,(6),in$);
} else
{if((state_val_19187 === (6)))
{var inst_19174 = (state_19186[(7)]);var inst_19174__$1 = (state_19186[(2)]);var state_19186__$1 = (function (){var statearr_19188 = state_19186;(statearr_19188[(7)] = inst_19174__$1);
return statearr_19188;
})();if(cljs.core.truth_(inst_19174__$1))
{var statearr_19189_19207 = state_19186__$1;(statearr_19189_19207[(1)] = (7));
} else
{var statearr_19190_19208 = state_19186__$1;(statearr_19190_19208[(1)] = (8));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19187 === (3)))
{var inst_19171 = (state_19186[(2)]);var state_19186__$1 = (function (){var statearr_19191 = state_19186;(statearr_19191[(8)] = inst_19171);
return statearr_19191;
})();var statearr_19192_19209 = state_19186__$1;(statearr_19192_19209[(2)] = null);
(statearr_19192_19209[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19187 === (2)))
{var inst_19168 = (state_19186[(2)]);var inst_19169 = (function (){var G__19193 = inst_19168;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19193) : f.call(null,G__19193));
})();var state_19186__$1 = (function (){var statearr_19194 = state_19186;(statearr_19194[(9)] = inst_19169);
return statearr_19194;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19186__$1,(3),out,inst_19168);
} else
{if((state_val_19187 === (9)))
{var inst_19182 = (state_19186[(2)]);var state_19186__$1 = state_19186;var statearr_19195_19210 = state_19186__$1;(statearr_19195_19210[(2)] = inst_19182);
(statearr_19195_19210[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19187 === (5)))
{var inst_19184 = (state_19186[(2)]);var state_19186__$1 = state_19186;return cljs.core.async.impl.ioc_helpers.return_chan(state_19186__$1,inst_19184);
} else
{if((state_val_19187 === (10)))
{var inst_19177 = (state_19186[(2)]);var state_19186__$1 = (function (){var statearr_19196 = state_19186;(statearr_19196[(10)] = inst_19177);
return statearr_19196;
})();var statearr_19197_19211 = state_19186__$1;(statearr_19197_19211[(2)] = null);
(statearr_19197_19211[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19187 === (8)))
{var inst_19180 = cljs.core.async.close_BANG_(out);var state_19186__$1 = state_19186;var statearr_19198_19212 = state_19186__$1;(statearr_19198_19212[(2)] = inst_19180);
(statearr_19198_19212[(1)] = (9));
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
});})(c__5861__auto___19206,out))
;return ((function (switch__5846__auto__,c__5861__auto___19206,out){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_19202 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19202[(0)] = state_machine__5847__auto__);
(statearr_19202[(1)] = (1));
return statearr_19202;
});
var state_machine__5847__auto____1 = (function (state_19186){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19186);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19203){if((e19203 instanceof Object))
{var ex__5850__auto__ = e19203;var statearr_19204_19213 = state_19186;(statearr_19204_19213[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19186);
return cljs.core.constant$keyword$16;
} else
{throw e19203;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19214 = state_19186;
state_19186 = G__19214;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19186){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto___19206,out))
})();var state__5863__auto__ = (function (){var statearr_19205 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___19206);
return statearr_19205;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto___19206,out))
);
return out;
});
wilkerdev.util.reactive.complement = (function complement(f){return (function() { 
var G__19265__delegate = function (args){var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__){
return (function (state_19253){var state_val_19254 = (state_19253[(1)]);if((state_val_19254 === (5)))
{var inst_19246 = (state_19253[(2)]);var inst_19247 = wilkerdev.util.reactive.throw_err(inst_19246);var inst_19248 = cljs.core.not(inst_19247);var inst_19249 = cljs.core.boolean$(inst_19248);var state_19253__$1 = state_19253;var statearr_19255_19266 = state_19253__$1;(statearr_19255_19266[(2)] = inst_19249);
cljs.core.async.impl.ioc_helpers.process_exception(state_19253__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_19254 === (4)))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19253,(3),Error,null,(2));var inst_19244 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var state_19253__$1 = state_19253;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19253__$1,(5),inst_19244);
} else
{if((state_val_19254 === (3)))
{var inst_19240 = (state_19253[(2)]);var state_19253__$1 = state_19253;var statearr_19256_19267 = state_19253__$1;(statearr_19256_19267[(2)] = inst_19240);
cljs.core.async.impl.ioc_helpers.process_exception(state_19253__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_19254 === (2)))
{var inst_19251 = (state_19253[(2)]);var state_19253__$1 = state_19253;return cljs.core.async.impl.ioc_helpers.return_chan(state_19253__$1,inst_19251);
} else
{if((state_val_19254 === (1)))
{var state_19253__$1 = state_19253;var statearr_19257_19268 = state_19253__$1;(statearr_19257_19268[(2)] = null);
(statearr_19257_19268[(1)] = (4));
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
var state_machine__5847__auto____0 = (function (){var statearr_19261 = [null,null,null,null,null,null,null];(statearr_19261[(0)] = state_machine__5847__auto__);
(statearr_19261[(1)] = (1));
return statearr_19261;
});
var state_machine__5847__auto____1 = (function (state_19253){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19253);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19262){if((e19262 instanceof Object))
{var ex__5850__auto__ = e19262;var statearr_19263_19269 = state_19253;(statearr_19263_19269[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19253);
return cljs.core.constant$keyword$16;
} else
{throw e19262;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19270 = state_19253;
state_19253 = G__19270;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19253){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__))
})();var state__5863__auto__ = (function (){var statearr_19264 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_19264;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__))
);
return c__5861__auto__;
};
var G__19265 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19265__delegate.call(this,args);};
G__19265.cljs$lang$maxFixedArity = 0;
G__19265.cljs$lang$applyTo = (function (arglist__19271){
var args = cljs.core.seq(arglist__19271);
return G__19265__delegate(args);
});
G__19265.cljs$core$IFn$_invoke$arity$variadic = G__19265__delegate;
return G__19265;
})()
;
});
wilkerdev.util.reactive.memoize_async = (function memoize_async(f){var mem = (function (){var G__19311 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19311) : cljs.core.atom.call(null,G__19311));
})();return ((function (mem){
return (function() { 
var G__19350__delegate = function (args){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__19312 = mem;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19312) : cljs.core.deref.call(null,G__19312));
})(),args,cljs.core.constant$keyword$39);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.constant$keyword$39))
{var c = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$40,c], null));
var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__,c,v,mem){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__,c,v,mem){
return (function (state_19320){var state_val_19321 = (state_19320[(1)]);if((state_val_19321 === (2)))
{var inst_19314 = (state_19320[(2)]);var inst_19315 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19316 = [args,cljs.core.constant$keyword$41];var inst_19317 = (new cljs.core.PersistentVector(null,2,(5),inst_19315,inst_19316,null));var inst_19318 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc_in,inst_19317,inst_19314);var state_19320__$1 = (function (){var statearr_19322 = state_19320;(statearr_19322[(7)] = inst_19318);
return statearr_19322;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_19320__$1,inst_19314);
} else
{if((state_val_19321 === (1)))
{var state_19320__$1 = state_19320;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19320__$1,(2),c);
} else
{return null;
}
}
});})(c__5861__auto__,c,v,mem))
;return ((function (switch__5846__auto__,c__5861__auto__,c,v,mem){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_19326 = [null,null,null,null,null,null,null,null];(statearr_19326[(0)] = state_machine__5847__auto__);
(statearr_19326[(1)] = (1));
return statearr_19326;
});
var state_machine__5847__auto____1 = (function (state_19320){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19320);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19327){if((e19327 instanceof Object))
{var ex__5850__auto__ = e19327;var statearr_19328_19351 = state_19320;(statearr_19328_19351[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19320);
return cljs.core.constant$keyword$16;
} else
{throw e19327;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19352 = state_19320;
state_19320 = G__19352;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19320){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__,c,v,mem))
})();var state__5863__auto__ = (function (){var statearr_19329 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_19329;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__,c,v,mem))
);
return c__5861__auto__;
} else
{var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__,v,mem){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__,v,mem){
return (function (state_19339){var state_val_19340 = (state_19339[(1)]);if((state_val_19340 === (2)))
{var inst_19332 = (state_19339[(2)]);var inst_19333 = (function (){var G__19341 = mem;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19341) : cljs.core.deref.call(null,G__19341));
})();var inst_19334 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19335 = [args,cljs.core.constant$keyword$41];var inst_19336 = (new cljs.core.PersistentVector(null,2,(5),inst_19334,inst_19335,null));var inst_19337 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_19333,inst_19336);var state_19339__$1 = (function (){var statearr_19342 = state_19339;(statearr_19342[(7)] = inst_19332);
return statearr_19342;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_19339__$1,inst_19337);
} else
{if((state_val_19340 === (1)))
{var inst_19330 = cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(v);var state_19339__$1 = state_19339;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19339__$1,(2),inst_19330);
} else
{return null;
}
}
});})(c__5861__auto__,v,mem))
;return ((function (switch__5846__auto__,c__5861__auto__,v,mem){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_19346 = [null,null,null,null,null,null,null,null];(statearr_19346[(0)] = state_machine__5847__auto__);
(statearr_19346[(1)] = (1));
return statearr_19346;
});
var state_machine__5847__auto____1 = (function (state_19339){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19339);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19347){if((e19347 instanceof Object))
{var ex__5850__auto__ = e19347;var statearr_19348_19353 = state_19339;(statearr_19348_19353[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19339);
return cljs.core.constant$keyword$16;
} else
{throw e19347;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19354 = state_19339;
state_19339 = G__19354;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19339){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__,v,mem))
})();var state__5863__auto__ = (function (){var statearr_19349 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_19349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__,v,mem))
);
return c__5861__auto__;
}
};
var G__19350 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19350__delegate.call(this,args);};
G__19350.cljs$lang$maxFixedArity = 0;
G__19350.cljs$lang$applyTo = (function (arglist__19355){
var args = cljs.core.seq(arglist__19355);
return G__19350__delegate(args);
});
G__19350.cljs$core$IFn$_invoke$arity$variadic = G__19350__delegate;
return G__19350;
})()
;
;})(mem))
});
wilkerdev.util.reactive.channel_pool = (function() {
var channel_pool = null;
var channel_pool__1 = (function (n){return channel_pool.cljs$core$IFn$_invoke$arity$2(n,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((2048)));
});
var channel_pool__2 = (function (n,queue){var n__4548__auto___19496 = n;var __19497 = (0);while(true){
if((__19497 < n__4548__auto___19496))
{var chan__3468__auto___19498 = queue;var c__5861__auto___19499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__19497,c__5861__auto___19499,chan__3468__auto___19498,n__4548__auto___19496){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (__19497,c__5861__auto___19499,chan__3468__auto___19498,n__4548__auto___19496){
return (function (state_19463){var state_val_19464 = (state_19463[(1)]);if((state_val_19464 === (8)))
{var inst_19433 = (state_19463[(7)]);var inst_19454 = (state_19463[(2)]);var inst_19455 = cljs.core.async.close_BANG_(inst_19433);var state_19463__$1 = (function (){var statearr_19465 = state_19463;(statearr_19465[(8)] = inst_19454);
(statearr_19465[(9)] = inst_19455);
return statearr_19465;
})();var statearr_19466_19500 = state_19463__$1;(statearr_19466_19500[(2)] = null);
(statearr_19466_19500[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19464 === (7)))
{var inst_19459 = (state_19463[(2)]);var state_19463__$1 = state_19463;var statearr_19467_19501 = state_19463__$1;(statearr_19467_19501[(2)] = inst_19459);
(statearr_19467_19501[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19464 === (6)))
{var state_19463__$1 = state_19463;var statearr_19468_19502 = state_19463__$1;(statearr_19468_19502[(2)] = cljs.core.constant$keyword$32);
(statearr_19468_19502[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19464 === (5)))
{var inst_19429 = (state_19463[(10)]);var inst_19433 = (state_19463[(7)]);var inst_19432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19429,(0),null);var inst_19433__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19429,(1),null);var inst_19434 = (function (){return (inst_19432.cljs$core$IFn$_invoke$arity$0 ? inst_19432.cljs$core$IFn$_invoke$arity$0() : inst_19432.call(null));
})();var inst_19450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_19451 = (function (){var c__5861__auto____$1 = inst_19450;var chan__3468__auto____$1 = inst_19434;var input = inst_19434;var output = inst_19433__$1;var initializer = inst_19432;var vec__19431 = inst_19429;var temp__4220__auto__ = inst_19429;return ((function (__19497,c__5861__auto____$1,chan__3468__auto____$1,input,output,initializer,vec__19431,temp__4220__auto__,inst_19429,inst_19433,inst_19432,inst_19433__$1,inst_19434,inst_19450,state_val_19464,c__5861__auto___19499,chan__3468__auto___19498,n__4548__auto___19496){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (__19497,c__5861__auto____$1,chan__3468__auto____$1,input,output,initializer,vec__19431,temp__4220__auto__,inst_19429,inst_19433,inst_19432,inst_19433__$1,inst_19434,inst_19450,state_val_19464,c__5861__auto___19499,chan__3468__auto___19498,n__4548__auto___19496){
return (function (state_19448){var state_val_19449 = (state_19448[(1)]);if((state_val_19449 === (8)))
{var inst_19440 = (state_19448[(2)]);var state_19448__$1 = (function (){var statearr_19469 = state_19448;(statearr_19469[(7)] = inst_19440);
return statearr_19469;
})();var statearr_19470_19503 = state_19448__$1;(statearr_19470_19503[(2)] = null);
(statearr_19470_19503[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19449 === (7)))
{var inst_19444 = (state_19448[(2)]);var state_19448__$1 = state_19448;var statearr_19471_19504 = state_19448__$1;(statearr_19471_19504[(2)] = inst_19444);
(statearr_19471_19504[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19449 === (6)))
{var state_19448__$1 = state_19448;var statearr_19472_19505 = state_19448__$1;(statearr_19472_19505[(2)] = cljs.core.constant$keyword$32);
(statearr_19472_19505[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19449 === (5)))
{var inst_19437 = (state_19448[(8)]);var state_19448__$1 = state_19448;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19448__$1,(8),output,inst_19437);
} else
{if((state_val_19449 === (4)))
{var inst_19437 = (state_19448[(8)]);var inst_19437__$1 = (state_19448[(2)]);var state_19448__$1 = (function (){var statearr_19473 = state_19448;(statearr_19473[(8)] = inst_19437__$1);
return statearr_19473;
})();if(cljs.core.truth_(inst_19437__$1))
{var statearr_19474_19506 = state_19448__$1;(statearr_19474_19506[(1)] = (5));
} else
{var statearr_19475_19507 = state_19448__$1;(statearr_19475_19507[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19449 === (3)))
{var inst_19446 = (state_19448[(2)]);var state_19448__$1 = state_19448;return cljs.core.async.impl.ioc_helpers.return_chan(state_19448__$1,inst_19446);
} else
{if((state_val_19449 === (2)))
{var state_19448__$1 = state_19448;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19448__$1,(4),chan__3468__auto____$1);
} else
{if((state_val_19449 === (1)))
{var state_19448__$1 = state_19448;var statearr_19476_19508 = state_19448__$1;(statearr_19476_19508[(2)] = null);
(statearr_19476_19508[(1)] = (2));
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
});})(__19497,c__5861__auto____$1,chan__3468__auto____$1,input,output,initializer,vec__19431,temp__4220__auto__,inst_19429,inst_19433,inst_19432,inst_19433__$1,inst_19434,inst_19450,state_val_19464,c__5861__auto___19499,chan__3468__auto___19498,n__4548__auto___19496))
;return ((function (__19497,switch__5846__auto__,c__5861__auto____$1,chan__3468__auto____$1,input,output,initializer,vec__19431,temp__4220__auto__,inst_19429,inst_19433,inst_19432,inst_19433__$1,inst_19434,inst_19450,state_val_19464,c__5861__auto___19499,chan__3468__auto___19498,n__4548__auto___19496){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_19480 = [null,null,null,null,null,null,null,null,null];(statearr_19480[(0)] = state_machine__5847__auto__);
(statearr_19480[(1)] = (1));
return statearr_19480;
});
var state_machine__5847__auto____1 = (function (state_19448){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19448);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19481){if((e19481 instanceof Object))
{var ex__5850__auto__ = e19481;var statearr_19482_19509 = state_19448;(statearr_19482_19509[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19448);
return cljs.core.constant$keyword$16;
} else
{throw e19481;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19510 = state_19448;
state_19448 = G__19510;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19448){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(__19497,switch__5846__auto__,c__5861__auto____$1,chan__3468__auto____$1,input,output,initializer,vec__19431,temp__4220__auto__,inst_19429,inst_19433,inst_19432,inst_19433__$1,inst_19434,inst_19450,state_val_19464,c__5861__auto___19499,chan__3468__auto___19498,n__4548__auto___19496))
})();var state__5863__auto__ = (function (){var statearr_19483 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto____$1);
return statearr_19483;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});
;})(__19497,c__5861__auto____$1,chan__3468__auto____$1,input,output,initializer,vec__19431,temp__4220__auto__,inst_19429,inst_19433,inst_19432,inst_19433__$1,inst_19434,inst_19450,state_val_19464,c__5861__auto___19499,chan__3468__auto___19498,n__4548__auto___19496))
})();var inst_19452 = cljs.core.async.impl.dispatch.run(inst_19451);var state_19463__$1 = (function (){var statearr_19484 = state_19463;(statearr_19484[(11)] = inst_19452);
(statearr_19484[(7)] = inst_19433__$1);
return statearr_19484;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19463__$1,(8),inst_19450);
} else
{if((state_val_19464 === (4)))
{var inst_19429 = (state_19463[(10)]);var inst_19429__$1 = (state_19463[(2)]);var state_19463__$1 = (function (){var statearr_19485 = state_19463;(statearr_19485[(10)] = inst_19429__$1);
return statearr_19485;
})();if(cljs.core.truth_(inst_19429__$1))
{var statearr_19486_19511 = state_19463__$1;(statearr_19486_19511[(1)] = (5));
} else
{var statearr_19487_19512 = state_19463__$1;(statearr_19487_19512[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19464 === (3)))
{var inst_19461 = (state_19463[(2)]);var state_19463__$1 = state_19463;return cljs.core.async.impl.ioc_helpers.return_chan(state_19463__$1,inst_19461);
} else
{if((state_val_19464 === (2)))
{var state_19463__$1 = state_19463;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19463__$1,(4),chan__3468__auto___19498);
} else
{if((state_val_19464 === (1)))
{var state_19463__$1 = state_19463;var statearr_19488_19513 = state_19463__$1;(statearr_19488_19513[(2)] = null);
(statearr_19488_19513[(1)] = (2));
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
});})(__19497,c__5861__auto___19499,chan__3468__auto___19498,n__4548__auto___19496))
;return ((function (__19497,switch__5846__auto__,c__5861__auto___19499,chan__3468__auto___19498,n__4548__auto___19496){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_19492 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19492[(0)] = state_machine__5847__auto__);
(statearr_19492[(1)] = (1));
return statearr_19492;
});
var state_machine__5847__auto____1 = (function (state_19463){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19463);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19493){if((e19493 instanceof Object))
{var ex__5850__auto__ = e19493;var statearr_19494_19514 = state_19463;(statearr_19494_19514[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19463);
return cljs.core.constant$keyword$16;
} else
{throw e19493;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19515 = state_19463;
state_19463 = G__19515;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19463){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(__19497,switch__5846__auto__,c__5861__auto___19499,chan__3468__auto___19498,n__4548__auto___19496))
})();var state__5863__auto__ = (function (){var statearr_19495 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___19499);
return statearr_19495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(__19497,c__5861__auto___19499,chan__3468__auto___19498,n__4548__auto___19496))
);
{
var G__19516 = (__19497 + (1));
__19497 = G__19516;
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
return (function (state_19586){var state_val_19587 = (state_19586[(1)]);if((state_val_19587 === (7)))
{var inst_19570 = (state_19586[(7)]);var inst_19570__$1 = (state_19586[(2)]);var inst_19571 = (inst_19570__$1 == null);var state_19586__$1 = (function (){var statearr_19588 = state_19586;(statearr_19588[(7)] = inst_19570__$1);
return statearr_19588;
})();if(cljs.core.truth_(inst_19571))
{var statearr_19589_19609 = state_19586__$1;(statearr_19589_19609[(1)] = (8));
} else
{var statearr_19590_19610 = state_19586__$1;(statearr_19590_19610[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19587 === (1)))
{var state_19586__$1 = state_19586;var statearr_19591_19611 = state_19586__$1;(statearr_19591_19611[(2)] = null);
(statearr_19591_19611[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19587 === (4)))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19586,(3),Error,null,(2));var inst_19567 = init;var state_19586__$1 = (function (){var statearr_19592 = state_19586;(statearr_19592[(8)] = inst_19567);
return statearr_19592;
})();var statearr_19593_19612 = state_19586__$1;(statearr_19593_19612[(2)] = null);
(statearr_19593_19612[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19587 === (6)))
{var inst_19582 = (state_19586[(2)]);var state_19586__$1 = state_19586;var statearr_19594_19613 = state_19586__$1;(statearr_19594_19613[(2)] = inst_19582);
cljs.core.async.impl.ioc_helpers.process_exception(state_19586__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_19587 === (3)))
{var inst_19563 = (state_19586[(2)]);var state_19586__$1 = state_19586;var statearr_19595_19614 = state_19586__$1;(statearr_19595_19614[(2)] = inst_19563);
cljs.core.async.impl.ioc_helpers.process_exception(state_19586__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_19587 === (2)))
{var inst_19584 = (state_19586[(2)]);var state_19586__$1 = state_19586;return cljs.core.async.impl.ioc_helpers.return_chan(state_19586__$1,inst_19584);
} else
{if((state_val_19587 === (11)))
{var inst_19576 = (state_19586[(2)]);var inst_19577 = wilkerdev.util.reactive.throw_err(inst_19576);var inst_19567 = inst_19577;var state_19586__$1 = (function (){var statearr_19596 = state_19586;(statearr_19596[(8)] = inst_19567);
return statearr_19596;
})();var statearr_19597_19615 = state_19586__$1;(statearr_19597_19615[(2)] = null);
(statearr_19597_19615[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19587 === (9)))
{var inst_19570 = (state_19586[(7)]);var inst_19567 = (state_19586[(8)]);var inst_19574 = (function (){var G__19598 = inst_19567;var G__19599 = inst_19570;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19598,G__19599) : f.call(null,G__19598,G__19599));
})();var state_19586__$1 = state_19586;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19586__$1,(11),inst_19574);
} else
{if((state_val_19587 === (5)))
{var state_19586__$1 = state_19586;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19586__$1,(7),ch);
} else
{if((state_val_19587 === (10)))
{var inst_19580 = (state_19586[(2)]);var state_19586__$1 = state_19586;var statearr_19600_19616 = state_19586__$1;(statearr_19600_19616[(2)] = inst_19580);
(statearr_19600_19616[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19587 === (8)))
{var inst_19567 = (state_19586[(8)]);var state_19586__$1 = state_19586;var statearr_19601_19617 = state_19586__$1;(statearr_19601_19617[(2)] = inst_19567);
(statearr_19601_19617[(1)] = (10));
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
var state_machine__5847__auto____0 = (function (){var statearr_19605 = [null,null,null,null,null,null,null,null,null];(statearr_19605[(0)] = state_machine__5847__auto__);
(statearr_19605[(1)] = (1));
return statearr_19605;
});
var state_machine__5847__auto____1 = (function (state_19586){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19586);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19606){if((e19606 instanceof Object))
{var ex__5850__auto__ = e19606;var statearr_19607_19618 = state_19586;(statearr_19607_19618[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19586);
return cljs.core.constant$keyword$16;
} else
{throw e19606;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19619 = state_19586;
state_19586 = G__19619;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19586){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__))
})();var state__5863__auto__ = (function (){var statearr_19608 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_19608;
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
return (function (state_19687){var state_val_19688 = (state_19687[(1)]);if((state_val_19688 === (7)))
{var inst_19667 = (state_19687[(7)]);var state_19687__$1 = state_19687;var statearr_19689_19708 = state_19687__$1;(statearr_19689_19708[(2)] = inst_19667);
(statearr_19689_19708[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19688 === (1)))
{var inst_19665 = n;var state_19687__$1 = (function (){var statearr_19690 = state_19687;(statearr_19690[(8)] = inst_19665);
return statearr_19690;
})();var statearr_19691_19709 = state_19687__$1;(statearr_19691_19709[(2)] = null);
(statearr_19691_19709[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19688 === (4)))
{var inst_19683 = (state_19687[(2)]);var state_19687__$1 = state_19687;var statearr_19692_19710 = state_19687__$1;(statearr_19692_19710[(2)] = inst_19683);
(statearr_19692_19710[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19688 === (6)))
{var inst_19665 = (state_19687[(8)]);var inst_19670 = (inst_19665 - (1));var inst_19665__$1 = inst_19670;var state_19687__$1 = (function (){var statearr_19693 = state_19687;(statearr_19693[(8)] = inst_19665__$1);
return statearr_19693;
})();var statearr_19694_19711 = state_19687__$1;(statearr_19694_19711[(2)] = null);
(statearr_19694_19711[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19688 === (3)))
{var inst_19685 = (state_19687[(2)]);var state_19687__$1 = state_19687;return cljs.core.async.impl.ioc_helpers.return_chan(state_19687__$1,inst_19685);
} else
{if((state_val_19688 === (2)))
{var state_19687__$1 = state_19687;var statearr_19695_19712 = state_19687__$1;(statearr_19695_19712[(2)] = null);
(statearr_19695_19712[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19688 === (9)))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19687,(5),Error,null,(4));var inst_19678 = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();var state_19687__$1 = state_19687;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19687__$1,(10),inst_19678);
} else
{if((state_val_19688 === (5)))
{var inst_19665 = (state_19687[(8)]);var inst_19667 = (state_19687[(2)]);var inst_19668 = (inst_19665 > (0));var state_19687__$1 = (function (){var statearr_19696 = state_19687;(statearr_19696[(7)] = inst_19667);
return statearr_19696;
})();if(cljs.core.truth_(inst_19668))
{var statearr_19697_19713 = state_19687__$1;(statearr_19697_19713[(1)] = (6));
} else
{var statearr_19698_19714 = state_19687__$1;(statearr_19698_19714[(1)] = (7));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19688 === (10)))
{var inst_19680 = (state_19687[(2)]);var inst_19681 = wilkerdev.util.reactive.throw_err(inst_19680);var state_19687__$1 = state_19687;var statearr_19699_19715 = state_19687__$1;(statearr_19699_19715[(2)] = inst_19681);
cljs.core.async.impl.ioc_helpers.process_exception(state_19687__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_19688 === (8)))
{var inst_19674 = (state_19687[(2)]);var state_19687__$1 = state_19687;var statearr_19700_19716 = state_19687__$1;(statearr_19700_19716[(2)] = inst_19674);
cljs.core.async.impl.ioc_helpers.process_exception(state_19687__$1);
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
var state_machine__5847__auto____0 = (function (){var statearr_19704 = [null,null,null,null,null,null,null,null,null];(statearr_19704[(0)] = state_machine__5847__auto__);
(statearr_19704[(1)] = (1));
return statearr_19704;
});
var state_machine__5847__auto____1 = (function (state_19687){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19687);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19705){if((e19705 instanceof Object))
{var ex__5850__auto__ = e19705;var statearr_19706_19717 = state_19687;(statearr_19706_19717[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19687);
return cljs.core.constant$keyword$16;
} else
{throw e19705;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19718 = state_19687;
state_19687 = G__19718;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19687){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__))
})();var state__5863__auto__ = (function (){var statearr_19707 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_19707;
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
return (function (state_19808){var state_val_19809 = (state_19808[(1)]);if((state_val_19809 === (7)))
{var inst_19787 = (state_19808[(7)]);var inst_19798 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19787,cljs.core.constant$keyword$7);var state_19808__$1 = state_19808;if(inst_19798)
{var statearr_19810_19831 = state_19808__$1;(statearr_19810_19831[(1)] = (9));
} else
{var statearr_19811_19832 = state_19808__$1;(statearr_19811_19832[(1)] = (10));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19809 === (1)))
{var inst_19780 = (state_19808[(8)]);var inst_19780__$1 = cljs.core.async.timeout(msec);var inst_19781 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19782 = [c,inst_19780__$1];var inst_19783 = (new cljs.core.PersistentVector(null,2,(5),inst_19781,inst_19782,null));var state_19808__$1 = (function (){var statearr_19812 = state_19808;(statearr_19812[(8)] = inst_19780__$1);
return statearr_19812;
})();return cljs.core.async.ioc_alts_BANG_(state_19808__$1,(2),inst_19783);
} else
{if((state_val_19809 === (4)))
{var inst_19787 = (state_19808[(7)]);var inst_19780 = (state_19808[(8)]);var inst_19793 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19787,inst_19780);var state_19808__$1 = state_19808;if(inst_19793)
{var statearr_19813_19833 = state_19808__$1;(statearr_19813_19833[(1)] = (6));
} else
{var statearr_19814_19834 = state_19808__$1;(statearr_19814_19834[(1)] = (7));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19809 === (6)))
{var inst_19795 = ("Timeout "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msec)+"ms");var inst_19796 = (new Error(inst_19795));var state_19808__$1 = state_19808;var statearr_19815_19835 = state_19808__$1;(statearr_19815_19835[(2)] = inst_19796);
(statearr_19815_19835[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19809 === (3)))
{var inst_19785 = (state_19808[(9)]);var inst_19791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19785,(0),null);var state_19808__$1 = state_19808;var statearr_19816_19836 = state_19808__$1;(statearr_19816_19836[(2)] = inst_19791);
(statearr_19816_19836[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19809 === (2)))
{var inst_19787 = (state_19808[(7)]);var inst_19785 = (state_19808[(9)]);var inst_19785__$1 = (state_19808[(2)]);var inst_19786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19785__$1,(0),null);var inst_19787__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19785__$1,(1),null);var inst_19788 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19787__$1,c);var state_19808__$1 = (function (){var statearr_19817 = state_19808;(statearr_19817[(7)] = inst_19787__$1);
(statearr_19817[(9)] = inst_19785__$1);
(statearr_19817[(10)] = inst_19786);
return statearr_19817;
})();if(inst_19788)
{var statearr_19818_19837 = state_19808__$1;(statearr_19818_19837[(1)] = (3));
} else
{var statearr_19819_19838 = state_19808__$1;(statearr_19819_19838[(1)] = (4));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_19809 === (11)))
{var inst_19802 = (state_19808[(2)]);var state_19808__$1 = state_19808;var statearr_19820_19839 = state_19808__$1;(statearr_19820_19839[(2)] = inst_19802);
(statearr_19820_19839[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19809 === (9)))
{var inst_19786 = (state_19808[(10)]);var state_19808__$1 = state_19808;var statearr_19821_19840 = state_19808__$1;(statearr_19821_19840[(2)] = inst_19786);
(statearr_19821_19840[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19809 === (5)))
{var inst_19806 = (state_19808[(2)]);var state_19808__$1 = state_19808;return cljs.core.async.impl.ioc_helpers.return_chan(state_19808__$1,inst_19806);
} else
{if((state_val_19809 === (10)))
{var state_19808__$1 = state_19808;var statearr_19822_19841 = state_19808__$1;(statearr_19822_19841[(2)] = null);
(statearr_19822_19841[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_19809 === (8)))
{var inst_19804 = (state_19808[(2)]);var state_19808__$1 = state_19808;var statearr_19823_19842 = state_19808__$1;(statearr_19823_19842[(2)] = inst_19804);
(statearr_19823_19842[(1)] = (5));
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
var state_machine__5847__auto____0 = (function (){var statearr_19827 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19827[(0)] = state_machine__5847__auto__);
(statearr_19827[(1)] = (1));
return statearr_19827;
});
var state_machine__5847__auto____1 = (function (state_19808){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_19808);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e19828){if((e19828 instanceof Object))
{var ex__5850__auto__ = e19828;var statearr_19829_19843 = state_19808;(statearr_19829_19843[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19808);
return cljs.core.constant$keyword$16;
} else
{throw e19828;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__19844 = state_19808;
state_19808 = G__19844;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_19808){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_19808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__))
})();var state__5863__auto__ = (function (){var statearr_19830 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_19830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_19830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__))
);
return c__5861__auto__;
});
