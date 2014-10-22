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
;var G__16686_16687 = (new FileReader());(G__16686_16687["onload"] = callback);
G__16686_16687.readAsDataURL(file);
return c;
});
patterny.core.create_canvas = (function create_canvas(p__16688){var map__16691 = p__16688;var map__16691__$1 = ((cljs.core.seq_QMARK_(map__16691))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16691):map__16691);var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16691__$1,cljs.core.constant$keyword$56);var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16691__$1,cljs.core.constant$keyword$57);var G__16692 = document.createElement("canvas");(G__16692["width"] = width);
(G__16692["height"] = height);
return G__16692;
});
patterny.core.file_dropper = (function file_dropper(el){var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var G__16697_16700 = el;var G__16698_16701 = "drop";var G__16699_16702 = ((function (G__16697_16700,G__16698_16701,c){
return (function (p1__16693_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,patterny.core.event_files(p1__16693_SHARP_));
});})(G__16697_16700,G__16698_16701,c))
;goog.events.listen(G__16697_16700,G__16698_16701,G__16699_16702);
return c;
});
patterny.core.load_image = (function load_image(src){var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var img = (new Image());var G__16704_16705 = img;(G__16704_16705["onload"] = ((function (G__16704_16705,c,img){
return (function (){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,img);
return cljs.core.async.close_BANG_(c);
});})(G__16704_16705,c,img))
);
(G__16704_16705["src"] = src);
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
patterny.core.find_series_pattern = (function find_series_pattern(coll){var options_for_size = (function options_for_size(size){var iter__4377__auto__ = (function iter__16724(s__16725){return (new cljs.core.LazySeq(null,(function (){var s__16725__$1 = s__16725;while(true){
var temp__4222__auto__ = cljs.core.seq(s__16725__$1);if(temp__4222__auto__)
{var s__16725__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(s__16725__$2))
{var c__4375__auto__ = cljs.core.chunk_first(s__16725__$2);var size__4376__auto__ = cljs.core.count(c__4375__auto__);var b__16727 = cljs.core.chunk_buffer(size__4376__auto__);if((function (){var i__16726 = (0);while(true){
if((i__16726 < size__4376__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4375__auto__,i__16726);cljs.core.chunk_append(b__16727,(x * size));
{
var G__16730 = (i__16726 + (1));
i__16726 = G__16730;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16727),iter__16724(cljs.core.chunk_rest(s__16725__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16727),null);
}
} else
{var x = cljs.core.first(s__16725__$2);return cljs.core.cons((x * size),iter__16724(cljs.core.rest(s__16725__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.range.cljs$core$IFn$_invoke$arity$1(patterny.core.div_floor(cljs.core.count(coll),size))));
});var size_match_QMARK_ = ((function (options_for_size){
return (function size_match_QMARK_(size,x){var a = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),size);var b = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,x,(x + size));return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b);
});})(options_for_size))
;var test_size = ((function (options_for_size,size_match_QMARK_){
return (function test_size(size){return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(size_match_QMARK_,size),options_for_size(size));
});})(options_for_size,size_match_QMARK_))
;var possibles = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.range.cljs$core$IFn$_invoke$arity$1(patterny.core.div_ceil(cljs.core.count(coll),(2))));var or__3638__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(test_size,possibles));if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return cljs.core.count(coll);
}
});
patterny.core.compute_axis = (function compute_axis(canvas,axis){var map__16749 = patterny.core.get_size(canvas);var map__16749__$1 = ((cljs.core.seq_QMARK_(map__16749))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16749):map__16749);var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16749__$1,cljs.core.constant$keyword$56);var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16749__$1,cljs.core.constant$keyword$57);var axis_map = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$58,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$60,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$57,width,cljs.core.constant$keyword$56,(1)], null),cljs.core.constant$keyword$61,height,cljs.core.constant$keyword$62,((function (map__16749,map__16749__$1,height,width){
return (function (p1__16731_SHARP_){return (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(0),p1__16731_SHARP_,width,(1)],null));
});})(map__16749,map__16749__$1,height,width))
], null),cljs.core.constant$keyword$59,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$60,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$57,(1),cljs.core.constant$keyword$56,height], null),cljs.core.constant$keyword$61,width,cljs.core.constant$keyword$62,((function (map__16749,map__16749__$1,height,width){
return (function (p1__16732_SHARP_){return (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__16732_SHARP_,(0),(1),height],null));
});})(map__16749,map__16749__$1,height,width))
], null)], null);var map__16750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(axis_map,axis);var map__16750__$1 = ((cljs.core.seq_QMARK_(map__16750))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16750):map__16750);var crop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16750__$1,cljs.core.constant$keyword$62);var range_s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16750__$1,cljs.core.constant$keyword$61);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16750__$1,cljs.core.constant$keyword$60);var tmp_canvas = patterny.core.create_canvas(size);var ctx = tmp_canvas.getContext("2d");var iter__4377__auto__ = ((function (map__16749,map__16749__$1,height,width,axis_map,map__16750,map__16750__$1,crop,range_s,size,tmp_canvas,ctx){
return (function iter__16751(s__16752){return (new cljs.core.LazySeq(null,((function (map__16749,map__16749__$1,height,width,axis_map,map__16750,map__16750__$1,crop,range_s,size,tmp_canvas,ctx){
return (function (){var s__16752__$1 = s__16752;while(true){
var temp__4222__auto__ = cljs.core.seq(s__16752__$1);if(temp__4222__auto__)
{var s__16752__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(s__16752__$2))
{var c__4375__auto__ = cljs.core.chunk_first(s__16752__$2);var size__4376__auto__ = cljs.core.count(c__4375__auto__);var b__16754 = cljs.core.chunk_buffer(size__4376__auto__);if((function (){var i__16753 = (0);while(true){
if((i__16753 < size__4376__auto__))
{var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4375__auto__,i__16753);var vec__16761 = (function (){var G__16762 = n;return (crop.cljs$core$IFn$_invoke$arity$1 ? crop.cljs$core$IFn$_invoke$arity$1(G__16762) : crop.call(null,G__16762));
})();var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16761,(0),null);var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16761,(1),null);var sw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16761,(2),null);var sh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16761,(3),null);cljs.core.chunk_append(b__16754,(function (){ctx.drawImage(canvas,sx,sy,sw,sh,(0),(0),sw,sh);
return tmp_canvas.toDataURL("image/png");
})());
{
var G__16765 = (i__16753 + (1));
i__16753 = G__16765;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16754),iter__16751(cljs.core.chunk_rest(s__16752__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16754),null);
}
} else
{var n = cljs.core.first(s__16752__$2);var vec__16763 = (function (){var G__16764 = n;return (crop.cljs$core$IFn$_invoke$arity$1 ? crop.cljs$core$IFn$_invoke$arity$1(G__16764) : crop.call(null,G__16764));
})();var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16763,(0),null);var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16763,(1),null);var sw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16763,(2),null);var sh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16763,(3),null);return cljs.core.cons((function (){ctx.drawImage(canvas,sx,sy,sw,sh,(0),(0),sw,sh);
return tmp_canvas.toDataURL("image/png");
})(),iter__16751(cljs.core.rest(s__16752__$2)));
}
} else
{return null;
}
break;
}
});})(map__16749,map__16749__$1,height,width,axis_map,map__16750,map__16750__$1,crop,range_s,size,tmp_canvas,ctx))
,null,null));
});})(map__16749,map__16749__$1,height,width,axis_map,map__16750,map__16750__$1,crop,range_s,size,tmp_canvas,ctx))
;return iter__4377__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(range_s));
});
patterny.core.find_pattern = (function find_pattern(canvas){var rows = cljs.core.vec(patterny.core.compute_axis(canvas,cljs.core.constant$keyword$59));var columns = cljs.core.vec(patterny.core.compute_axis(canvas,cljs.core.constant$keyword$58));return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$57,patterny.core.find_series_pattern(columns),cljs.core.constant$keyword$56,patterny.core.find_series_pattern(rows)], null);
});
patterny.core.image_from_canvas_crop = (function image_from_canvas_crop(canvas,p__16766){var map__16770 = p__16766;var map__16770__$1 = ((cljs.core.seq_QMARK_(map__16770))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16770):map__16770);var square = map__16770__$1;var y = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16770__$1,cljs.core.constant$keyword$59,(0));var x = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16770__$1,cljs.core.constant$keyword$58,(0));var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16770__$1,cljs.core.constant$keyword$56,(1));var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16770__$1,cljs.core.constant$keyword$57,(1));var new_canvas = patterny.core.create_canvas(square);var G__16771_16773 = new_canvas.getContext("2d");G__16771_16773.drawImage(canvas,x,y,width,height,(0),(0),width,height);
var G__16772 = (new Image());(G__16772["src"] = new_canvas.toDataURL("image/png"));
return G__16772;
});
patterny.core.init = (function init(){console.log("Initializing...");
var view_area = patterny.core.$.cljs$core$IFn$_invoke$arity$1("#view-area");var chan__4609__auto__ = patterny.core.file_dropper(patterny.core.$.cljs$core$IFn$_invoke$arity$1("body"));var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5861__auto__,chan__4609__auto__,view_area){
return (function (){var f__5862__auto__ = (function (){var switch__5846__auto__ = ((function (c__5861__auto__,chan__4609__auto__,view_area){
return (function (state_16845){var state_val_16846 = (state_16845[(1)]);if((state_val_16846 === (9)))
{var inst_16827 = (state_16845[(2)]);var inst_16828 = patterny.core.load_image(inst_16827);var state_16845__$1 = state_16845;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16845__$1,(8),inst_16828);
} else
{if((state_val_16846 === (8)))
{var inst_16830 = (state_16845[(2)]);var inst_16831 = patterny.core.canvas_from_image(inst_16830);var inst_16832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16831,(0),null);var inst_16833 = console.time("Find pattern");var inst_16834 = patterny.core.find_pattern(inst_16832);var inst_16835 = console.timeEnd("Find pattern");var inst_16836 = patterny.core.image_from_canvas_crop(inst_16832,inst_16834);var inst_16837 = view_area.appendChild(inst_16836);var state_16845__$1 = (function (){var statearr_16847 = state_16845;(statearr_16847[(7)] = inst_16833);
(statearr_16847[(8)] = inst_16835);
(statearr_16847[(9)] = inst_16837);
return statearr_16847;
})();var statearr_16848_16862 = state_16845__$1;(statearr_16848_16862[(2)] = null);
(statearr_16848_16862[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16846 === (7)))
{var inst_16841 = (state_16845[(2)]);var state_16845__$1 = state_16845;var statearr_16849_16863 = state_16845__$1;(statearr_16849_16863[(2)] = inst_16841);
(statearr_16849_16863[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16846 === (6)))
{var state_16845__$1 = state_16845;var statearr_16850_16864 = state_16845__$1;(statearr_16850_16864[(2)] = cljs.core.constant$keyword$32);
(statearr_16850_16864[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16846 === (5)))
{var inst_16820 = (state_16845[(10)]);var inst_16823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16820,(0),null);var inst_16825 = patterny.core.read_file_as_data_url(inst_16823);var state_16845__$1 = state_16845;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16845__$1,(9),inst_16825);
} else
{if((state_val_16846 === (4)))
{var inst_16820 = (state_16845[(10)]);var inst_16820__$1 = (state_16845[(2)]);var state_16845__$1 = (function (){var statearr_16851 = state_16845;(statearr_16851[(10)] = inst_16820__$1);
return statearr_16851;
})();if(cljs.core.truth_(inst_16820__$1))
{var statearr_16852_16865 = state_16845__$1;(statearr_16852_16865[(1)] = (5));
} else
{var statearr_16853_16866 = state_16845__$1;(statearr_16853_16866[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_16846 === (3)))
{var inst_16843 = (state_16845[(2)]);var state_16845__$1 = state_16845;return cljs.core.async.impl.ioc_helpers.return_chan(state_16845__$1,inst_16843);
} else
{if((state_val_16846 === (2)))
{var state_16845__$1 = state_16845;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16845__$1,(4),chan__4609__auto__);
} else
{if((state_val_16846 === (1)))
{var state_16845__$1 = state_16845;var statearr_16854_16867 = state_16845__$1;(statearr_16854_16867[(2)] = null);
(statearr_16854_16867[(1)] = (2));
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
});})(c__5861__auto__,chan__4609__auto__,view_area))
;return ((function (switch__5846__auto__,c__5861__auto__,chan__4609__auto__,view_area){
return (function() {
var state_machine__5847__auto__ = null;
var state_machine__5847__auto____0 = (function (){var statearr_16858 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16858[(0)] = state_machine__5847__auto__);
(statearr_16858[(1)] = (1));
return statearr_16858;
});
var state_machine__5847__auto____1 = (function (state_16845){while(true){
var ret_value__5848__auto__ = (function (){try{while(true){
var result__5849__auto__ = switch__5846__auto__(state_16845);if(cljs.core.keyword_identical_QMARK_(result__5849__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__5849__auto__;
}
break;
}
}catch (e16859){if((e16859 instanceof Object))
{var ex__5850__auto__ = e16859;var statearr_16860_16868 = state_16845;(statearr_16860_16868[(5)] = ex__5850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16845);
return cljs.core.constant$keyword$16;
} else
{throw e16859;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5848__auto__,cljs.core.constant$keyword$16))
{{
var G__16869 = state_16845;
state_16845 = G__16869;
continue;
}
} else
{return ret_value__5848__auto__;
}
break;
}
});
state_machine__5847__auto__ = function(state_16845){
switch(arguments.length){
case 0:
return state_machine__5847__auto____0.call(this);
case 1:
return state_machine__5847__auto____1.call(this,state_16845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5847__auto____0;
state_machine__5847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5847__auto____1;
return state_machine__5847__auto__;
})()
;})(switch__5846__auto__,c__5861__auto__,chan__4609__auto__,view_area))
})();var state__5863__auto__ = (function (){var statearr_16861 = (function (){return (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));
})();(statearr_16861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_16861;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
});})(c__5861__auto__,chan__4609__auto__,view_area))
);
return c__5861__auto__;
});
patterny.core.init();
