// Compiled by ClojureScript 0.0-2371
goog.provide('patterny.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.browser.repl');
goog.require('clojure.browser.repl');
goog.require('wilkerdev.util.reactive');
goog.require('wilkerdev.util.reactive');
goog.require('goog.events');
goog.require('goog.events');
goog.require('cljs.core.async');
patterny.core.$ = (function() {
var $ = null;
var $__1 = (function (query){return $.cljs$core$IFn$_invoke$arity$2(document,query);
});
var $__2 = (function (target,query){return target.querySelector(query);
});
$ = function(target,query){
switch(arguments.length){
case 1:
return $__1.call(this,target);
case 2:
return $__2.call(this,target,query);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
$.cljs$core$IFn$_invoke$arity$1 = $__1;
$.cljs$core$IFn$_invoke$arity$2 = $__2;
return $;
})()
;
patterny.core.event_files = (function event_files(evt){return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(evt.event_.dataTransfer.files);
});
patterny.core.read_file_as_data_url = (function read_file_as_data_url(file){var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var callback = ((function (c){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,e.target.result);
return cljs.core.async.close_BANG_(c);
});})(c))
;var G__30308_30309 = (new FileReader());(G__30308_30309["onload"] = callback);
G__30308_30309.readAsDataURL(file);
return c;
});
patterny.core.create_canvas = (function create_canvas(p__30310){var map__30313 = p__30310;var map__30313__$1 = ((cljs.core.seq_QMARK_(map__30313))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30313):map__30313);var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30313__$1,cljs.core.constant$keyword$56);var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30313__$1,cljs.core.constant$keyword$57);var G__30314 = document.createElement("canvas");(G__30314["width"] = width);
(G__30314["height"] = height);
return G__30314;
});
patterny.core.file_dropper = (function file_dropper(el){var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var G__30319_30322 = el;var G__30320_30323 = "drop";var G__30321_30324 = ((function (G__30319_30322,G__30320_30323,c){
return (function (p1__30315_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,patterny.core.event_files(p1__30315_SHARP_));
});})(G__30319_30322,G__30320_30323,c))
;goog.events.listen(G__30319_30322,G__30320_30323,G__30321_30324);
return c;
});
patterny.core.load_image = (function load_image(src){var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var img = (new Image());var G__30326_30327 = img;(G__30326_30327["onload"] = ((function (G__30326_30327,c,img){
return (function (){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,img);
return cljs.core.async.close_BANG_(c);
});})(G__30326_30327,c,img))
);
(G__30326_30327["src"] = src);
return c;
});
patterny.core.get_size = (function get_size(img){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$57,img.width,cljs.core.constant$keyword$56,img.height], null);
});
patterny.core.canvas_from_image = (function canvas_from_image(img){var canvas = patterny.core.create_canvas(patterny.core.get_size(img));var ctx = canvas.getContext("2d");ctx.drawImage(img,(0),(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas,ctx], null);
});
patterny.core.div_floor = (function div_floor(x,y){return Math.floor((x / y));
});
patterny.core.div_ceil = (function div_ceil(x,y){return Math.ceil((x / y));
});
patterny.core.find_series_pattern = (function find_series_pattern(coll){var options_for_size = (function options_for_size(size){var iter__4417__auto__ = (function iter__30347(s__30348){return (new cljs.core.LazySeq(null,(function (){var s__30348__$1 = s__30348;while(true){
var temp__4222__auto__ = cljs.core.seq(s__30348__$1);if(temp__4222__auto__)
{var s__30348__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(s__30348__$2))
{var c__4415__auto__ = cljs.core.chunk_first(s__30348__$2);var size__4416__auto__ = cljs.core.count(c__4415__auto__);var b__30350 = cljs.core.chunk_buffer(size__4416__auto__);if((function (){var i__30349 = (0);while(true){
if((i__30349 < size__4416__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4415__auto__,i__30349);cljs.core.chunk_append(b__30350,(x * size));
{
var G__30353 = (i__30349 + (1));
i__30349 = G__30353;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__30350),iter__30347(cljs.core.chunk_rest(s__30348__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__30350),null);
}
} else
{var x = cljs.core.first(s__30348__$2);return cljs.core.cons((x * size),iter__30347(cljs.core.rest(s__30348__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4417__auto__(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.range.cljs$core$IFn$_invoke$arity$1(patterny.core.div_floor(cljs.core.count(coll),size))));
});var size_match_QMARK_ = ((function (options_for_size){
return (function size_match_QMARK_(size,x){var a = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),size);var b = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,x,(x + size));return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b);
});})(options_for_size))
;var test_size = ((function (options_for_size,size_match_QMARK_){
return (function test_size(size){return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(size_match_QMARK_,size),options_for_size(size));
});})(options_for_size,size_match_QMARK_))
;var possibles = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.range.cljs$core$IFn$_invoke$arity$1(patterny.core.div_ceil(cljs.core.count(coll),(2))));return ((function (options_for_size,size_match_QMARK_,test_size,possibles){
return (function (p1__30328_SHARP_){var or__3678__auto___30354 = p1__30328_SHARP_;if(cljs.core.truth_(or__3678__auto___30354))
{} else
{cljs.core.count(coll);
}
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(test_size,possibles));
});
;})(options_for_size,size_match_QMARK_,test_size,possibles))
});
patterny.core.compute_axis = (function compute_axis(canvas,axis){var map__30373 = patterny.core.get_size(canvas);var map__30373__$1 = ((cljs.core.seq_QMARK_(map__30373))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30373):map__30373);var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30373__$1,cljs.core.constant$keyword$56);var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30373__$1,cljs.core.constant$keyword$57);var axis_map = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$58,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$60,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$57,width,cljs.core.constant$keyword$56,(1)], null),cljs.core.constant$keyword$61,height,cljs.core.constant$keyword$62,((function (map__30373,map__30373__$1,height,width){
return (function (p1__30355_SHARP_){return (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(0),p1__30355_SHARP_,width,(1)],null));
});})(map__30373,map__30373__$1,height,width))
], null),cljs.core.constant$keyword$59,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$60,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$57,(1),cljs.core.constant$keyword$56,height], null),cljs.core.constant$keyword$61,width,cljs.core.constant$keyword$62,((function (map__30373,map__30373__$1,height,width){
return (function (p1__30356_SHARP_){return (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__30356_SHARP_,(0),(1),height],null));
});})(map__30373,map__30373__$1,height,width))
], null)], null);var map__30374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(axis_map,axis);var map__30374__$1 = ((cljs.core.seq_QMARK_(map__30374))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30374):map__30374);var crop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30374__$1,cljs.core.constant$keyword$62);var range_s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30374__$1,cljs.core.constant$keyword$61);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30374__$1,cljs.core.constant$keyword$60);var tmp_canvas = patterny.core.create_canvas(size);var ctx = tmp_canvas.getContext("2d");var iter__4417__auto__ = ((function (map__30373,map__30373__$1,height,width,axis_map,map__30374,map__30374__$1,crop,range_s,size,tmp_canvas,ctx){
return (function iter__30375(s__30376){return (new cljs.core.LazySeq(null,((function (map__30373,map__30373__$1,height,width,axis_map,map__30374,map__30374__$1,crop,range_s,size,tmp_canvas,ctx){
return (function (){var s__30376__$1 = s__30376;while(true){
var temp__4222__auto__ = cljs.core.seq(s__30376__$1);if(temp__4222__auto__)
{var s__30376__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(s__30376__$2))
{var c__4415__auto__ = cljs.core.chunk_first(s__30376__$2);var size__4416__auto__ = cljs.core.count(c__4415__auto__);var b__30378 = cljs.core.chunk_buffer(size__4416__auto__);if((function (){var i__30377 = (0);while(true){
if((i__30377 < size__4416__auto__))
{var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4415__auto__,i__30377);var vec__30385 = (function (){var G__30386 = n;return (crop.cljs$core$IFn$_invoke$arity$1 ? crop.cljs$core$IFn$_invoke$arity$1(G__30386) : crop.call(null,G__30386));
})();var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30385,(0),null);var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30385,(1),null);var sw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30385,(2),null);var sh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30385,(3),null);cljs.core.chunk_append(b__30378,(function (){ctx.drawImage(canvas,sx,sy,sw,sh,(0),(0),sw,sh);
return tmp_canvas.toDataURL("image/png");
})());
{
var G__30389 = (i__30377 + (1));
i__30377 = G__30389;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__30378),iter__30375(cljs.core.chunk_rest(s__30376__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__30378),null);
}
} else
{var n = cljs.core.first(s__30376__$2);var vec__30387 = (function (){var G__30388 = n;return (crop.cljs$core$IFn$_invoke$arity$1 ? crop.cljs$core$IFn$_invoke$arity$1(G__30388) : crop.call(null,G__30388));
})();var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30387,(0),null);var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30387,(1),null);var sw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30387,(2),null);var sh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30387,(3),null);return cljs.core.cons((function (){ctx.drawImage(canvas,sx,sy,sw,sh,(0),(0),sw,sh);
return tmp_canvas.toDataURL("image/png");
})(),iter__30375(cljs.core.rest(s__30376__$2)));
}
} else
{return null;
}
break;
}
});})(map__30373,map__30373__$1,height,width,axis_map,map__30374,map__30374__$1,crop,range_s,size,tmp_canvas,ctx))
,null,null));
});})(map__30373,map__30373__$1,height,width,axis_map,map__30374,map__30374__$1,crop,range_s,size,tmp_canvas,ctx))
;return iter__4417__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(range_s));
});
patterny.core.find_pattern = (function find_pattern(canvas){var rows = cljs.core.vec(patterny.core.compute_axis(canvas,cljs.core.constant$keyword$59));var columns = cljs.core.vec(patterny.core.compute_axis(canvas,cljs.core.constant$keyword$58));return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$57,patterny.core.find_series_pattern(columns),cljs.core.constant$keyword$56,patterny.core.find_series_pattern(rows)], null);
});
patterny.core.image_from_canvas_crop = (function image_from_canvas_crop(canvas,p__30390){var map__30394 = p__30390;var map__30394__$1 = ((cljs.core.seq_QMARK_(map__30394))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30394):map__30394);var square = map__30394__$1;var y = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30394__$1,cljs.core.constant$keyword$59,(0));var x = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30394__$1,cljs.core.constant$keyword$58,(0));var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30394__$1,cljs.core.constant$keyword$56,(1));var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30394__$1,cljs.core.constant$keyword$57,(1));var new_canvas = patterny.core.create_canvas(square);var G__30395_30397 = new_canvas.getContext("2d");G__30395_30397.drawImage(canvas,x,y,width,height,(0),(0),width,height);
var G__30396 = (new Image());(G__30396["src"] = new_canvas.toDataURL("image/png"));
return G__30396;
});
patterny.core.init = (function init(){console.log("Initializing...");
var view_area = patterny.core.$.cljs$core$IFn$_invoke$arity$1("#view-area");var chan__3468__auto__ = patterny.core.file_dropper(patterny.core.$.cljs$core$IFn$_invoke$arity$1("#drop-container"));var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__,chan__3468__auto__,view_area){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__,chan__3468__auto__,view_area){
return (function (state_30469){var state_val_30470 = (state_30469[(1)]);if((state_val_30470 === (9)))
{var inst_30451 = (state_30469[(2)]);var inst_30452 = patterny.core.load_image(inst_30451);var state_30469__$1 = state_30469;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30469__$1,(8),inst_30452);
} else
{if((state_val_30470 === (8)))
{var inst_30454 = (state_30469[(2)]);var inst_30455 = patterny.core.canvas_from_image(inst_30454);var inst_30456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30455,(0),null);var inst_30457 = console.time("Find pattern");var inst_30458 = patterny.core.find_pattern(inst_30456);var inst_30459 = console.timeEnd("Find pattern");var inst_30460 = patterny.core.image_from_canvas_crop(inst_30456,inst_30458);var inst_30461 = view_area.appendChild(inst_30460);var state_30469__$1 = (function (){var statearr_30471 = state_30469;(statearr_30471[(7)] = inst_30461);
(statearr_30471[(8)] = inst_30459);
(statearr_30471[(9)] = inst_30457);
return statearr_30471;
})();var statearr_30472_30486 = state_30469__$1;(statearr_30472_30486[(2)] = null);
(statearr_30472_30486[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_30470 === (7)))
{var inst_30465 = (state_30469[(2)]);var state_30469__$1 = state_30469;var statearr_30473_30487 = state_30469__$1;(statearr_30473_30487[(2)] = inst_30465);
(statearr_30473_30487[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_30470 === (6)))
{var state_30469__$1 = state_30469;var statearr_30474_30488 = state_30469__$1;(statearr_30474_30488[(2)] = cljs.core.constant$keyword$32);
(statearr_30474_30488[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_30470 === (5)))
{var inst_30444 = (state_30469[(10)]);var inst_30447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30444,(0),null);var inst_30449 = patterny.core.read_file_as_data_url(inst_30447);var state_30469__$1 = state_30469;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30469__$1,(9),inst_30449);
} else
{if((state_val_30470 === (4)))
{var inst_30444 = (state_30469[(10)]);var inst_30444__$1 = (state_30469[(2)]);var state_30469__$1 = (function (){var statearr_30475 = state_30469;(statearr_30475[(10)] = inst_30444__$1);
return statearr_30475;
})();if(cljs.core.truth_(inst_30444__$1))
{var statearr_30476_30489 = state_30469__$1;(statearr_30476_30489[(1)] = (5));
} else
{var statearr_30477_30490 = state_30469__$1;(statearr_30477_30490[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_30470 === (3)))
{var inst_30467 = (state_30469[(2)]);var state_30469__$1 = state_30469;return cljs.core.async.impl.ioc_helpers.return_chan(state_30469__$1,inst_30467);
} else
{if((state_val_30470 === (2)))
{var state_30469__$1 = state_30469;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30469__$1,(4),chan__3468__auto__);
} else
{if((state_val_30470 === (1)))
{var state_30469__$1 = state_30469;var statearr_30478_30491 = state_30469__$1;(statearr_30478_30491[(2)] = null);
(statearr_30478_30491[(1)] = (2));
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
});})(c__5861__auto__,chan__3468__auto__,view_area))
;return ((function (switch__5846__auto__,c__5861__auto__,chan__3468__auto__,view_area){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_30482 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30482[(0)] = state_machine__5847__auto__);
(statearr_30482[(1)] = (1));
return statearr_30482;
});
var state_machine__5847__auto____1 = (function (state_30469){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_30469);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e30483){if((e30483 instanceof Object))
{var ex__5850__auto__ = e30483;var statearr_30484_30492 = state_30469;(statearr_30484_30492[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_30469);
return cljs.core.constant$keyword$16;
} else
{throw e30483;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__30493 = state_30469;
state_30469 = G__30493;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_30469){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_30469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__,chan__3468__auto__,view_area))
})();var state__5863__auto__ = (function (){var statearr_30485 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_30485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_30485;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__,chan__3468__auto__,view_area))
);
return c__5861__auto__;
});
patterny.core.init();
