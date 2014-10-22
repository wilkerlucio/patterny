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
;var G__30121_30122 = (new FileReader());(G__30121_30122["onload"] = callback);
G__30121_30122.readAsDataURL(file);
return c;
});
patterny.core.create_canvas = (function create_canvas(p__30123){var map__30126 = p__30123;var map__30126__$1 = ((cljs.core.seq_QMARK_(map__30126))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30126):map__30126);var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30126__$1,cljs.core.constant$keyword$56);var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30126__$1,cljs.core.constant$keyword$57);var G__30127 = document.createElement("canvas");(G__30127["width"] = width);
(G__30127["height"] = height);
return G__30127;
});
patterny.core.file_dropper = (function file_dropper(el){var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var G__30132_30135 = el;var G__30133_30136 = "drop";var G__30134_30137 = ((function (G__30132_30135,G__30133_30136,c){
return (function (p1__30128_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,patterny.core.event_files(p1__30128_SHARP_));
});})(G__30132_30135,G__30133_30136,c))
;goog.events.listen(G__30132_30135,G__30133_30136,G__30134_30137);
return c;
});
patterny.core.load_image = (function load_image(src){var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var img = (new Image());var G__30139_30140 = img;(G__30139_30140["onload"] = ((function (G__30139_30140,c,img){
return (function (){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,img);
return cljs.core.async.close_BANG_(c);
});})(G__30139_30140,c,img))
);
(G__30139_30140["src"] = src);
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
patterny.core.find_series_pattern = (function find_series_pattern(coll){var options_for_size = (function options_for_size(size){var iter__4417__auto__ = (function iter__30159(s__30160){return (new cljs.core.LazySeq(null,(function (){var s__30160__$1 = s__30160;while(true){
var temp__4222__auto__ = cljs.core.seq(s__30160__$1);if(temp__4222__auto__)
{var s__30160__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(s__30160__$2))
{var c__4415__auto__ = cljs.core.chunk_first(s__30160__$2);var size__4416__auto__ = cljs.core.count(c__4415__auto__);var b__30162 = cljs.core.chunk_buffer(size__4416__auto__);if((function (){var i__30161 = (0);while(true){
if((i__30161 < size__4416__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4415__auto__,i__30161);cljs.core.chunk_append(b__30162,(x * size));
{
var G__30165 = (i__30161 + (1));
i__30161 = G__30165;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__30162),iter__30159(cljs.core.chunk_rest(s__30160__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__30162),null);
}
} else
{var x = cljs.core.first(s__30160__$2);return cljs.core.cons((x * size),iter__30159(cljs.core.rest(s__30160__$2)));
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
;var possibles = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.range.cljs$core$IFn$_invoke$arity$1(patterny.core.div_ceil(cljs.core.count(coll),(2))));return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(test_size,possibles));
});
patterny.core.compute_axis = (function compute_axis(canvas,axis){var map__30184 = patterny.core.get_size(canvas);var map__30184__$1 = ((cljs.core.seq_QMARK_(map__30184))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30184):map__30184);var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30184__$1,cljs.core.constant$keyword$56);var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30184__$1,cljs.core.constant$keyword$57);var axis_map = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$58,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$60,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$57,width,cljs.core.constant$keyword$56,(1)], null),cljs.core.constant$keyword$61,height,cljs.core.constant$keyword$62,((function (map__30184,map__30184__$1,height,width){
return (function (p1__30166_SHARP_){return (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(0),p1__30166_SHARP_,width,(1)],null));
});})(map__30184,map__30184__$1,height,width))
], null),cljs.core.constant$keyword$59,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$60,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$57,(1),cljs.core.constant$keyword$56,height], null),cljs.core.constant$keyword$61,width,cljs.core.constant$keyword$62,((function (map__30184,map__30184__$1,height,width){
return (function (p1__30167_SHARP_){return (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__30167_SHARP_,(0),(1),height],null));
});})(map__30184,map__30184__$1,height,width))
], null)], null);var map__30185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(axis_map,axis);var map__30185__$1 = ((cljs.core.seq_QMARK_(map__30185))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30185):map__30185);var crop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30185__$1,cljs.core.constant$keyword$62);var range_s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30185__$1,cljs.core.constant$keyword$61);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30185__$1,cljs.core.constant$keyword$60);var tmp_canvas = patterny.core.create_canvas(size);var ctx = tmp_canvas.getContext("2d");var iter__4417__auto__ = ((function (map__30184,map__30184__$1,height,width,axis_map,map__30185,map__30185__$1,crop,range_s,size,tmp_canvas,ctx){
return (function iter__30186(s__30187){return (new cljs.core.LazySeq(null,((function (map__30184,map__30184__$1,height,width,axis_map,map__30185,map__30185__$1,crop,range_s,size,tmp_canvas,ctx){
return (function (){var s__30187__$1 = s__30187;while(true){
var temp__4222__auto__ = cljs.core.seq(s__30187__$1);if(temp__4222__auto__)
{var s__30187__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(s__30187__$2))
{var c__4415__auto__ = cljs.core.chunk_first(s__30187__$2);var size__4416__auto__ = cljs.core.count(c__4415__auto__);var b__30189 = cljs.core.chunk_buffer(size__4416__auto__);if((function (){var i__30188 = (0);while(true){
if((i__30188 < size__4416__auto__))
{var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4415__auto__,i__30188);var vec__30196 = (function (){var G__30197 = n;return (crop.cljs$core$IFn$_invoke$arity$1 ? crop.cljs$core$IFn$_invoke$arity$1(G__30197) : crop.call(null,G__30197));
})();var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30196,(0),null);var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30196,(1),null);var sw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30196,(2),null);var sh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30196,(3),null);cljs.core.chunk_append(b__30189,(function (){ctx.drawImage(canvas,sx,sy,sw,sh,(0),(0),sw,sh);
return tmp_canvas.toDataURL("image/png");
})());
{
var G__30200 = (i__30188 + (1));
i__30188 = G__30200;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__30189),iter__30186(cljs.core.chunk_rest(s__30187__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__30189),null);
}
} else
{var n = cljs.core.first(s__30187__$2);var vec__30198 = (function (){var G__30199 = n;return (crop.cljs$core$IFn$_invoke$arity$1 ? crop.cljs$core$IFn$_invoke$arity$1(G__30199) : crop.call(null,G__30199));
})();var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30198,(0),null);var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30198,(1),null);var sw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30198,(2),null);var sh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30198,(3),null);return cljs.core.cons((function (){ctx.drawImage(canvas,sx,sy,sw,sh,(0),(0),sw,sh);
return tmp_canvas.toDataURL("image/png");
})(),iter__30186(cljs.core.rest(s__30187__$2)));
}
} else
{return null;
}
break;
}
});})(map__30184,map__30184__$1,height,width,axis_map,map__30185,map__30185__$1,crop,range_s,size,tmp_canvas,ctx))
,null,null));
});})(map__30184,map__30184__$1,height,width,axis_map,map__30185,map__30185__$1,crop,range_s,size,tmp_canvas,ctx))
;return iter__4417__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(range_s));
});
patterny.core.find_pattern = (function find_pattern(canvas){var rows = cljs.core.vec(patterny.core.compute_axis(canvas,cljs.core.constant$keyword$59));var columns = cljs.core.vec(patterny.core.compute_axis(canvas,cljs.core.constant$keyword$58));return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$57,patterny.core.find_series_pattern(columns),cljs.core.constant$keyword$56,patterny.core.find_series_pattern(rows)], null);
});
patterny.core.image_from_canvas_crop = (function image_from_canvas_crop(canvas,p__30201){var map__30205 = p__30201;var map__30205__$1 = ((cljs.core.seq_QMARK_(map__30205))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30205):map__30205);var square = map__30205__$1;var y = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30205__$1,cljs.core.constant$keyword$59,(0));var x = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30205__$1,cljs.core.constant$keyword$58,(0));var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30205__$1,cljs.core.constant$keyword$56,(1));var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30205__$1,cljs.core.constant$keyword$57,(1));var new_canvas = patterny.core.create_canvas(square);var G__30206_30208 = new_canvas.getContext("2d");G__30206_30208.drawImage(canvas,x,y,width,height,(0),(0),width,height);
var G__30207 = (new Image());(G__30207["src"] = new_canvas.toDataURL("image/png"));
return G__30207;
});
patterny.core.init = (function init(){console.log("Initializing...");
var view_area = patterny.core.$.cljs$core$IFn$_invoke$arity$1("#view-area");var chan__3468__auto__ = patterny.core.file_dropper(patterny.core.$.cljs$core$IFn$_invoke$arity$1("#drop-container"));var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__,chan__3468__auto__,view_area){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__,chan__3468__auto__,view_area){
return (function (state_30280){var state_val_30281 = (state_30280[(1)]);if((state_val_30281 === (9)))
{var inst_30262 = (state_30280[(2)]);var inst_30263 = patterny.core.load_image(inst_30262);var state_30280__$1 = state_30280;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30280__$1,(8),inst_30263);
} else
{if((state_val_30281 === (8)))
{var inst_30265 = (state_30280[(2)]);var inst_30266 = patterny.core.canvas_from_image(inst_30265);var inst_30267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30266,(0),null);var inst_30268 = console.time("Find pattern");var inst_30269 = patterny.core.find_pattern(inst_30267);var inst_30270 = console.timeEnd("Find pattern");var inst_30271 = patterny.core.image_from_canvas_crop(inst_30267,inst_30269);var inst_30272 = view_area.appendChild(inst_30271);var state_30280__$1 = (function (){var statearr_30282 = state_30280;(statearr_30282[(7)] = inst_30272);
(statearr_30282[(8)] = inst_30270);
(statearr_30282[(9)] = inst_30268);
return statearr_30282;
})();var statearr_30283_30297 = state_30280__$1;(statearr_30283_30297[(2)] = null);
(statearr_30283_30297[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_30281 === (7)))
{var inst_30276 = (state_30280[(2)]);var state_30280__$1 = state_30280;var statearr_30284_30298 = state_30280__$1;(statearr_30284_30298[(2)] = inst_30276);
(statearr_30284_30298[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_30281 === (6)))
{var state_30280__$1 = state_30280;var statearr_30285_30299 = state_30280__$1;(statearr_30285_30299[(2)] = cljs.core.constant$keyword$32);
(statearr_30285_30299[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_30281 === (5)))
{var inst_30255 = (state_30280[(10)]);var inst_30258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30255,(0),null);var inst_30260 = patterny.core.read_file_as_data_url(inst_30258);var state_30280__$1 = state_30280;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30280__$1,(9),inst_30260);
} else
{if((state_val_30281 === (4)))
{var inst_30255 = (state_30280[(10)]);var inst_30255__$1 = (state_30280[(2)]);var state_30280__$1 = (function (){var statearr_30286 = state_30280;(statearr_30286[(10)] = inst_30255__$1);
return statearr_30286;
})();if(cljs.core.truth_(inst_30255__$1))
{var statearr_30287_30300 = state_30280__$1;(statearr_30287_30300[(1)] = (5));
} else
{var statearr_30288_30301 = state_30280__$1;(statearr_30288_30301[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_30281 === (3)))
{var inst_30278 = (state_30280[(2)]);var state_30280__$1 = state_30280;return cljs.core.async.impl.ioc_helpers.return_chan(state_30280__$1,inst_30278);
} else
{if((state_val_30281 === (2)))
{var state_30280__$1 = state_30280;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30280__$1,(4),chan__3468__auto__);
} else
{if((state_val_30281 === (1)))
{var state_30280__$1 = state_30280;var statearr_30289_30302 = state_30280__$1;(statearr_30289_30302[(2)] = null);
(statearr_30289_30302[(1)] = (2));
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
var state_machine__5847__auto____0 = (function (){var statearr_30293 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30293[(0)] = state_machine__5847__auto__);
(statearr_30293[(1)] = (1));
return statearr_30293;
});
var state_machine__5847__auto____1 = (function (state_30280){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_30280);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e30294){if((e30294 instanceof Object))
{var ex__5850__auto__ = e30294;var statearr_30295_30303 = state_30280;(statearr_30295_30303[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_30280);
return cljs.core.constant$keyword$16;
} else
{throw e30294;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__30304 = state_30280;
state_30280 = G__30304;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_30280){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_30280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__,chan__3468__auto__,view_area))
})();var state__5863__auto__ = (function (){var statearr_30296 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_30296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_30296;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__,chan__3468__auto__,view_area))
);
return c__5861__auto__;
});
patterny.core.init();
