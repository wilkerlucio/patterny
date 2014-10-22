// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.array');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2371";
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a different way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Set *print-fn* to f.
*/
cljs.core.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_ = f;
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core._STAR_print_level_STAR_ = null;
cljs.core.pr_opts = (function pr_opts(){return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1,cljs.core._STAR_flush_on_newline_STAR_,cljs.core.constant$keyword$2,cljs.core._STAR_print_readably_STAR_,cljs.core.constant$keyword$3,cljs.core._STAR_print_meta_STAR_,cljs.core.constant$keyword$4,cljs.core._STAR_print_dup_STAR_,cljs.core.constant$keyword$5,cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){cljs.core._STAR_print_newline_STAR_ = false;
return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20080__delegate = function (args){return console.log.apply(console,(function (){var G__20079 = args;return (cljs.core.into_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(G__20079) : cljs.core.into_array.call(null,G__20079));
})());
};
var G__20080 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20080__delegate.call(this,args);};
G__20080.cljs$lang$maxFixedArity = 0;
G__20080.cljs$lang$applyTo = (function (arglist__20081){
var args = cljs.core.seq(arglist__20081);
return G__20080__delegate(args);
});
G__20080.cljs$core$IFn$_invoke$arity$variadic = G__20080__delegate;
return G__20080;
})()
;
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){return (x != null && x !== false);
});
cljs.core.not_native = null;
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){return (x == null);
});
cljs.core.array_QMARK_ = (function array_QMARK_(x){return x instanceof Array;
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){return typeof n === 'number';
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* Returns true if x is not nil, false otherwise.
*/
cljs.core.some_QMARK_ = (function some_QMARK_(x){return !((x == null));
});
cljs.core.object_QMARK_ = (function object_QMARK_(x){if(!((x == null)))
{return (x.constructor === Object);
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){var G__20083 = x;return goog.isString(G__20083);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){var x__$1 = (((x == null))?null:x);if((p[(function (){var G__20085 = x__$1;return goog.typeOf(G__20085);
})()]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{return false;

}
}
});
cljs.core.is_proto_ = (function is_proto_(x){return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.type = (function type(x){if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.missing_protocol = (function missing_protocol(proto,obj){var ty = cljs.core.type(obj);var ty__$1 = (cljs.core.truth_((function (){var and__3666__auto__ = ty;if(cljs.core.truth_(and__3666__auto__))
{return ty.cljs$lang$type;
} else
{return and__3666__auto__;
}
})())?ty.cljs$lang$ctorStr:(function (){var G__20087 = obj;return goog.typeOf(G__20087);
})());return (new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join("")));
});
cljs.core.type__GT_str = (function type__GT_str(ty){var temp__4220__auto__ = ty.cljs$lang$ctorStr;if(cljs.core.truth_(temp__4220__auto__))
{var s = temp__4220__auto__;return s;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ty));
}
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){return (new Array(size));
});
var make_array__2 = (function (type,size){return make_array.cljs$core$IFn$_invoke$arity$1(size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$core$IFn$_invoke$arity$1 = make_array__1;
make_array.cljs$core$IFn$_invoke$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(arr){var len = arr.length;var new_arr = (new Array(len));var n__4548__auto___20089 = len;var i_20090 = (0);while(true){
if((i_20090 < n__4548__auto___20089))
{(new_arr[i_20090] = (arr[i_20090]));
{
var G__20091 = (i_20090 + (1));
i_20090 = G__20091;
continue;
}
} else
{}
break;
}
return new_arr;
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){return (array[i]);
});
var aget__3 = (function() { 
var G__20100__delegate = function (array,i,idxs){var G__20097 = aget;var G__20098 = aget.cljs$core$IFn$_invoke$arity$2(array,i);var G__20099 = idxs;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__20097,G__20098,G__20099) : cljs.core.apply.call(null,G__20097,G__20098,G__20099));
};
var G__20100 = function (array,i,var_args){
var idxs = null;if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20100__delegate.call(this,array,i,idxs);};
G__20100.cljs$lang$maxFixedArity = 2;
G__20100.cljs$lang$applyTo = (function (arglist__20101){
var array = cljs.core.first(arglist__20101);
arglist__20101 = cljs.core.next(arglist__20101);
var i = cljs.core.first(arglist__20101);
var idxs = cljs.core.rest(arglist__20101);
return G__20100__delegate(array,i,idxs);
});
G__20100.cljs$core$IFn$_invoke$arity$variadic = G__20100__delegate;
return G__20100;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$core$IFn$_invoke$arity$2 = aget__2;
aget.cljs$core$IFn$_invoke$arity$variadic = aget__3.cljs$core$IFn$_invoke$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
* @param {...*} var_args
*/
cljs.core.aset = (function() {
var aset = null;
var aset__3 = (function (array,i,val){return (array[i] = val);
});
var aset__4 = (function() { 
var G__20110__delegate = function (array,idx,idx2,idxv){var G__20106 = aset;var G__20107 = (array[idx]);var G__20108 = idx2;var G__20109 = idxv;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$4(G__20106,G__20107,G__20108,G__20109) : cljs.core.apply.call(null,G__20106,G__20107,G__20108,G__20109));
};
var G__20110 = function (array,idx,idx2,var_args){
var idxv = null;if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__20110__delegate.call(this,array,idx,idx2,idxv);};
G__20110.cljs$lang$maxFixedArity = 3;
G__20110.cljs$lang$applyTo = (function (arglist__20111){
var array = cljs.core.first(arglist__20111);
arglist__20111 = cljs.core.next(arglist__20111);
var idx = cljs.core.first(arglist__20111);
arglist__20111 = cljs.core.next(arglist__20111);
var idx2 = cljs.core.first(arglist__20111);
var idxv = cljs.core.rest(arglist__20111);
return G__20110__delegate(array,idx,idx2,idxv);
});
G__20110.cljs$core$IFn$_invoke$arity$variadic = G__20110__delegate;
return G__20110;
})()
;
aset = function(array,idx,idx2,var_args){
var idxv = var_args;
switch(arguments.length){
case 3:
return aset__3.call(this,array,idx,idx2);
default:
return aset__4.cljs$core$IFn$_invoke$arity$variadic(array,idx,idx2, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aset.cljs$lang$maxFixedArity = 3;
aset.cljs$lang$applyTo = aset__4.cljs$lang$applyTo;
aset.cljs$core$IFn$_invoke$arity$3 = aset__3;
aset.cljs$core$IFn$_invoke$arity$variadic = aset__4.cljs$core$IFn$_invoke$arity$variadic;
return aset;
})()
;
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){return into_array.cljs$core$IFn$_invoke$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){var G__20117 = (function (a,x){a.push(x);
return a;
});var G__20118 = [];var G__20119 = aseq;return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__20117,G__20118,G__20119) : cljs.core.reduce.call(null,G__20117,G__20118,G__20119));
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$core$IFn$_invoke$arity$1 = into_array__1;
into_array.cljs$core$IFn$_invoke$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.Fn = (function (){var obj20121 = {};return obj20121;
})();
cljs.core.IFn = (function (){var obj20123 = {};return obj20123;
})();
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20169 = x__4315__auto__;return goog.typeOf(G__20169);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20171 = x__4315__auto__;return goog.typeOf(G__20171);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20173 = x__4315__auto__;return goog.typeOf(G__20173);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20175 = x__4315__auto__;return goog.typeOf(G__20175);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20177 = x__4315__auto__;return goog.typeOf(G__20177);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20179 = x__4315__auto__;return goog.typeOf(G__20179);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20181 = x__4315__auto__;return goog.typeOf(G__20181);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20183 = x__4315__auto__;return goog.typeOf(G__20183);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20185 = x__4315__auto__;return goog.typeOf(G__20185);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20187 = x__4315__auto__;return goog.typeOf(G__20187);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20189 = x__4315__auto__;return goog.typeOf(G__20189);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20191 = x__4315__auto__;return goog.typeOf(G__20191);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20193 = x__4315__auto__;return goog.typeOf(G__20193);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20195 = x__4315__auto__;return goog.typeOf(G__20195);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20197 = x__4315__auto__;return goog.typeOf(G__20197);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20199 = x__4315__auto__;return goog.typeOf(G__20199);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20201 = x__4315__auto__;return goog.typeOf(G__20201);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20203 = x__4315__auto__;return goog.typeOf(G__20203);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20205 = x__4315__auto__;return goog.typeOf(G__20205);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20207 = x__4315__auto__;return goog.typeOf(G__20207);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20209 = x__4315__auto__;return goog.typeOf(G__20209);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
});
var _invoke__22 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IFn$_invoke$arity$22;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$22(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._invoke[(function (){var G__20211 = x__4315__auto__;return goog.typeOf(G__20211);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._invoke["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return _invoke__22.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$core$IFn$_invoke$arity$1 = _invoke__1;
_invoke.cljs$core$IFn$_invoke$arity$2 = _invoke__2;
_invoke.cljs$core$IFn$_invoke$arity$3 = _invoke__3;
_invoke.cljs$core$IFn$_invoke$arity$4 = _invoke__4;
_invoke.cljs$core$IFn$_invoke$arity$5 = _invoke__5;
_invoke.cljs$core$IFn$_invoke$arity$6 = _invoke__6;
_invoke.cljs$core$IFn$_invoke$arity$7 = _invoke__7;
_invoke.cljs$core$IFn$_invoke$arity$8 = _invoke__8;
_invoke.cljs$core$IFn$_invoke$arity$9 = _invoke__9;
_invoke.cljs$core$IFn$_invoke$arity$10 = _invoke__10;
_invoke.cljs$core$IFn$_invoke$arity$11 = _invoke__11;
_invoke.cljs$core$IFn$_invoke$arity$12 = _invoke__12;
_invoke.cljs$core$IFn$_invoke$arity$13 = _invoke__13;
_invoke.cljs$core$IFn$_invoke$arity$14 = _invoke__14;
_invoke.cljs$core$IFn$_invoke$arity$15 = _invoke__15;
_invoke.cljs$core$IFn$_invoke$arity$16 = _invoke__16;
_invoke.cljs$core$IFn$_invoke$arity$17 = _invoke__17;
_invoke.cljs$core$IFn$_invoke$arity$18 = _invoke__18;
_invoke.cljs$core$IFn$_invoke$arity$19 = _invoke__19;
_invoke.cljs$core$IFn$_invoke$arity$20 = _invoke__20;
_invoke.cljs$core$IFn$_invoke$arity$21 = _invoke__21;
_invoke.cljs$core$IFn$_invoke$arity$22 = _invoke__22;
return _invoke;
})()
;
cljs.core.ICloneable = (function (){var obj20213 = {};return obj20213;
})();
cljs.core._clone = (function _clone(value){if((function (){var and__3666__auto__ = value;if(and__3666__auto__)
{return value.cljs$core$ICloneable$_clone$arity$1;
} else
{return and__3666__auto__;
}
})())
{return value.cljs$core$ICloneable$_clone$arity$1(value);
} else
{var x__4315__auto__ = (((value == null))?null:value);return (function (){var or__3678__auto__ = (cljs.core._clone[(function (){var G__20217 = x__4315__auto__;return goog.typeOf(G__20217);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._clone["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ICloneable.-clone",value);
}
}
})().call(null,value);
}
});
cljs.core.ICounted = (function (){var obj20219 = {};return obj20219;
})();
cljs.core._count = (function _count(coll){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._count[(function (){var G__20223 = x__4315__auto__;return goog.typeOf(G__20223);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._count["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = (function (){var obj20225 = {};return obj20225;
})();
cljs.core._empty = (function _empty(coll){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._empty[(function (){var G__20229 = x__4315__auto__;return goog.typeOf(G__20229);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._empty["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = (function (){var obj20231 = {};return obj20231;
})();
cljs.core._conj = (function _conj(coll,o){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._conj[(function (){var G__20235 = x__4315__auto__;return goog.typeOf(G__20235);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._conj["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = (function (){var obj20237 = {};return obj20237;
})();
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._nth[(function (){var G__20243 = x__4315__auto__;return goog.typeOf(G__20243);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._nth["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._nth[(function (){var G__20245 = x__4315__auto__;return goog.typeOf(G__20245);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._nth["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$core$IFn$_invoke$arity$2 = _nth__2;
_nth.cljs$core$IFn$_invoke$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = (function (){var obj20247 = {};return obj20247;
})();
cljs.core.ISeq = (function (){var obj20249 = {};return obj20249;
})();
cljs.core._first = (function _first(coll){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._first[(function (){var G__20253 = x__4315__auto__;return goog.typeOf(G__20253);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._first["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._rest[(function (){var G__20257 = x__4315__auto__;return goog.typeOf(G__20257);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._rest["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = (function (){var obj20259 = {};return obj20259;
})();
cljs.core._next = (function _next(coll){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._next[(function (){var G__20263 = x__4315__auto__;return goog.typeOf(G__20263);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._next["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = (function (){var obj20265 = {};return obj20265;
})();
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){if((function (){var and__3666__auto__ = o;if(and__3666__auto__)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3666__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__4315__auto__ = (((o == null))?null:o);return (function (){var or__3678__auto__ = (cljs.core._lookup[(function (){var G__20271 = x__4315__auto__;return goog.typeOf(G__20271);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._lookup["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){if((function (){var and__3666__auto__ = o;if(and__3666__auto__)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3666__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__4315__auto__ = (((o == null))?null:o);return (function (){var or__3678__auto__ = (cljs.core._lookup[(function (){var G__20273 = x__4315__auto__;return goog.typeOf(G__20273);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._lookup["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$core$IFn$_invoke$arity$2 = _lookup__2;
_lookup.cljs$core$IFn$_invoke$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = (function (){var obj20275 = {};return obj20275;
})();
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._contains_key_QMARK_[(function (){var G__20279 = x__4315__auto__;return goog.typeOf(G__20279);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._assoc[(function (){var G__20283 = x__4315__auto__;return goog.typeOf(G__20283);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._assoc["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = (function (){var obj20285 = {};return obj20285;
})();
cljs.core._dissoc = (function _dissoc(coll,k){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._dissoc[(function (){var G__20289 = x__4315__auto__;return goog.typeOf(G__20289);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._dissoc["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = (function (){var obj20291 = {};return obj20291;
})();
cljs.core._key = (function _key(coll){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._key[(function (){var G__20295 = x__4315__auto__;return goog.typeOf(G__20295);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._key["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._val[(function (){var G__20299 = x__4315__auto__;return goog.typeOf(G__20299);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._val["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = (function (){var obj20301 = {};return obj20301;
})();
cljs.core._disjoin = (function _disjoin(coll,v){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._disjoin[(function (){var G__20305 = x__4315__auto__;return goog.typeOf(G__20305);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._disjoin["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = (function (){var obj20307 = {};return obj20307;
})();
cljs.core._peek = (function _peek(coll){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._peek[(function (){var G__20311 = x__4315__auto__;return goog.typeOf(G__20311);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._peek["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._pop[(function (){var G__20315 = x__4315__auto__;return goog.typeOf(G__20315);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._pop["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = (function (){var obj20317 = {};return obj20317;
})();
cljs.core._assoc_n = (function _assoc_n(coll,n,val){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._assoc_n[(function (){var G__20321 = x__4315__auto__;return goog.typeOf(G__20321);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._assoc_n["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = (function (){var obj20323 = {};return obj20323;
})();
cljs.core._deref = (function _deref(o){if((function (){var and__3666__auto__ = o;if(and__3666__auto__)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3666__auto__;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__4315__auto__ = (((o == null))?null:o);return (function (){var or__3678__auto__ = (cljs.core._deref[(function (){var G__20327 = x__4315__auto__;return goog.typeOf(G__20327);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._deref["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = (function (){var obj20329 = {};return obj20329;
})();
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){if((function (){var and__3666__auto__ = o;if(and__3666__auto__)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3666__auto__;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__4315__auto__ = (((o == null))?null:o);return (function (){var or__3678__auto__ = (cljs.core._deref_with_timeout[(function (){var G__20333 = x__4315__auto__;return goog.typeOf(G__20333);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._deref_with_timeout["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = (function (){var obj20335 = {};return obj20335;
})();
cljs.core._meta = (function _meta(o){if((function (){var and__3666__auto__ = o;if(and__3666__auto__)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3666__auto__;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__4315__auto__ = (((o == null))?null:o);return (function (){var or__3678__auto__ = (cljs.core._meta[(function (){var G__20339 = x__4315__auto__;return goog.typeOf(G__20339);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._meta["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = (function (){var obj20341 = {};return obj20341;
})();
cljs.core._with_meta = (function _with_meta(o,meta){if((function (){var and__3666__auto__ = o;if(and__3666__auto__)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3666__auto__;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__4315__auto__ = (((o == null))?null:o);return (function (){var or__3678__auto__ = (cljs.core._with_meta[(function (){var G__20345 = x__4315__auto__;return goog.typeOf(G__20345);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._with_meta["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = (function (){var obj20347 = {};return obj20347;
})();
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._reduce[(function (){var G__20353 = x__4315__auto__;return goog.typeOf(G__20353);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._reduce["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._reduce[(function (){var G__20355 = x__4315__auto__;return goog.typeOf(G__20355);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._reduce["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$core$IFn$_invoke$arity$2 = _reduce__2;
_reduce.cljs$core$IFn$_invoke$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = (function (){var obj20357 = {};return obj20357;
})();
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._kv_reduce[(function (){var G__20361 = x__4315__auto__;return goog.typeOf(G__20361);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._kv_reduce["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = (function (){var obj20363 = {};return obj20363;
})();
cljs.core._equiv = (function _equiv(o,other){if((function (){var and__3666__auto__ = o;if(and__3666__auto__)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3666__auto__;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__4315__auto__ = (((o == null))?null:o);return (function (){var or__3678__auto__ = (cljs.core._equiv[(function (){var G__20367 = x__4315__auto__;return goog.typeOf(G__20367);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._equiv["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = (function (){var obj20369 = {};return obj20369;
})();
cljs.core._hash = (function _hash(o){if((function (){var and__3666__auto__ = o;if(and__3666__auto__)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3666__auto__;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__4315__auto__ = (((o == null))?null:o);return (function (){var or__3678__auto__ = (cljs.core._hash[(function (){var G__20373 = x__4315__auto__;return goog.typeOf(G__20373);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._hash["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = (function (){var obj20375 = {};return obj20375;
})();
cljs.core._seq = (function _seq(o){if((function (){var and__3666__auto__ = o;if(and__3666__auto__)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3666__auto__;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__4315__auto__ = (((o == null))?null:o);return (function (){var or__3678__auto__ = (cljs.core._seq[(function (){var G__20379 = x__4315__auto__;return goog.typeOf(G__20379);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._seq["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = (function (){var obj20381 = {};return obj20381;
})();
cljs.core.IList = (function (){var obj20383 = {};return obj20383;
})();
cljs.core.IRecord = (function (){var obj20385 = {};return obj20385;
})();
cljs.core.IReversible = (function (){var obj20387 = {};return obj20387;
})();
cljs.core._rseq = (function _rseq(coll){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._rseq[(function (){var G__20391 = x__4315__auto__;return goog.typeOf(G__20391);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._rseq["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = (function (){var obj20393 = {};return obj20393;
})();
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._sorted_seq[(function (){var G__20397 = x__4315__auto__;return goog.typeOf(G__20397);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._sorted_seq["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._sorted_seq_from[(function (){var G__20401 = x__4315__auto__;return goog.typeOf(G__20401);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._sorted_seq_from["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._entry_key[(function (){var G__20405 = x__4315__auto__;return goog.typeOf(G__20405);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._entry_key["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._comparator[(function (){var G__20409 = x__4315__auto__;return goog.typeOf(G__20409);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._comparator["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IWriter = (function (){var obj20411 = {};return obj20411;
})();
cljs.core._write = (function _write(writer,s){if((function (){var and__3666__auto__ = writer;if(and__3666__auto__)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3666__auto__;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__4315__auto__ = (((writer == null))?null:writer);return (function (){var or__3678__auto__ = (cljs.core._write[(function (){var G__20415 = x__4315__auto__;return goog.typeOf(G__20415);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._write["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){if((function (){var and__3666__auto__ = writer;if(and__3666__auto__)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3666__auto__;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__4315__auto__ = (((writer == null))?null:writer);return (function (){var or__3678__auto__ = (cljs.core._flush[(function (){var G__20419 = x__4315__auto__;return goog.typeOf(G__20419);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._flush["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = (function (){var obj20421 = {};return obj20421;
})();
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){if((function (){var and__3666__auto__ = o;if(and__3666__auto__)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3666__auto__;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__4315__auto__ = (((o == null))?null:o);return (function (){var or__3678__auto__ = (cljs.core._pr_writer[(function (){var G__20425 = x__4315__auto__;return goog.typeOf(G__20425);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._pr_writer["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = (function (){var obj20427 = {};return obj20427;
})();
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){if((function (){var and__3666__auto__ = d;if(and__3666__auto__)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3666__auto__;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__4315__auto__ = (((d == null))?null:d);return (function (){var or__3678__auto__ = (cljs.core._realized_QMARK_[(function (){var G__20431 = x__4315__auto__;return goog.typeOf(G__20431);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._realized_QMARK_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = (function (){var obj20433 = {};return obj20433;
})();
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._notify_watches[(function (){var G__20437 = x__4315__auto__;return goog.typeOf(G__20437);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._notify_watches["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._add_watch[(function (){var G__20441 = x__4315__auto__;return goog.typeOf(G__20441);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._add_watch["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3666__auto__;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (cljs.core._remove_watch[(function (){var G__20445 = x__4315__auto__;return goog.typeOf(G__20445);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._remove_watch["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = (function (){var obj20447 = {};return obj20447;
})();
cljs.core._as_transient = (function _as_transient(coll){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._as_transient[(function (){var G__20451 = x__4315__auto__;return goog.typeOf(G__20451);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._as_transient["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = (function (){var obj20453 = {};return obj20453;
})();
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){if((function (){var and__3666__auto__ = tcoll;if(and__3666__auto__)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3666__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__4315__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3678__auto__ = (cljs.core._conj_BANG_[(function (){var G__20457 = x__4315__auto__;return goog.typeOf(G__20457);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._conj_BANG_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){if((function (){var and__3666__auto__ = tcoll;if(and__3666__auto__)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3666__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__4315__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3678__auto__ = (cljs.core._persistent_BANG_[(function (){var G__20461 = x__4315__auto__;return goog.typeOf(G__20461);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._persistent_BANG_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = (function (){var obj20463 = {};return obj20463;
})();
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){if((function (){var and__3666__auto__ = tcoll;if(and__3666__auto__)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3666__auto__;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__4315__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3678__auto__ = (cljs.core._assoc_BANG_[(function (){var G__20467 = x__4315__auto__;return goog.typeOf(G__20467);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._assoc_BANG_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = (function (){var obj20469 = {};return obj20469;
})();
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){if((function (){var and__3666__auto__ = tcoll;if(and__3666__auto__)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3666__auto__;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__4315__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3678__auto__ = (cljs.core._dissoc_BANG_[(function (){var G__20473 = x__4315__auto__;return goog.typeOf(G__20473);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._dissoc_BANG_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = (function (){var obj20475 = {};return obj20475;
})();
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){if((function (){var and__3666__auto__ = tcoll;if(and__3666__auto__)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3666__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__4315__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3678__auto__ = (cljs.core._assoc_n_BANG_[(function (){var G__20479 = x__4315__auto__;return goog.typeOf(G__20479);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){if((function (){var and__3666__auto__ = tcoll;if(and__3666__auto__)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3666__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__4315__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3678__auto__ = (cljs.core._pop_BANG_[(function (){var G__20483 = x__4315__auto__;return goog.typeOf(G__20483);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._pop_BANG_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = (function (){var obj20485 = {};return obj20485;
})();
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){if((function (){var and__3666__auto__ = tcoll;if(and__3666__auto__)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3666__auto__;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__4315__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3678__auto__ = (cljs.core._disjoin_BANG_[(function (){var G__20489 = x__4315__auto__;return goog.typeOf(G__20489);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._disjoin_BANG_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = (function (){var obj20491 = {};return obj20491;
})();
cljs.core._compare = (function _compare(x,y){if((function (){var and__3666__auto__ = x;if(and__3666__auto__)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3666__auto__;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__4315__auto__ = (((x == null))?null:x);return (function (){var or__3678__auto__ = (cljs.core._compare[(function (){var G__20495 = x__4315__auto__;return goog.typeOf(G__20495);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._compare["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = (function (){var obj20497 = {};return obj20497;
})();
cljs.core._drop_first = (function _drop_first(coll){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._drop_first[(function (){var G__20501 = x__4315__auto__;return goog.typeOf(G__20501);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._drop_first["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = (function (){var obj20503 = {};return obj20503;
})();
cljs.core._chunked_first = (function _chunked_first(coll){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._chunked_first[(function (){var G__20507 = x__4315__auto__;return goog.typeOf(G__20507);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._chunked_first["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._chunked_rest[(function (){var G__20511 = x__4315__auto__;return goog.typeOf(G__20511);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._chunked_rest["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = (function (){var obj20513 = {};return obj20513;
})();
cljs.core._chunked_next = (function _chunked_next(coll){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._chunked_next[(function (){var G__20517 = x__4315__auto__;return goog.typeOf(G__20517);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._chunked_next["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INamed = (function (){var obj20519 = {};return obj20519;
})();
cljs.core._name = (function _name(x){if((function (){var and__3666__auto__ = x;if(and__3666__auto__)
{return x.cljs$core$INamed$_name$arity$1;
} else
{return and__3666__auto__;
}
})())
{return x.cljs$core$INamed$_name$arity$1(x);
} else
{var x__4315__auto__ = (((x == null))?null:x);return (function (){var or__3678__auto__ = (cljs.core._name[(function (){var G__20523 = x__4315__auto__;return goog.typeOf(G__20523);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._name["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("INamed.-name",x);
}
}
})().call(null,x);
}
});
cljs.core._namespace = (function _namespace(x){if((function (){var and__3666__auto__ = x;if(and__3666__auto__)
{return x.cljs$core$INamed$_namespace$arity$1;
} else
{return and__3666__auto__;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(x);
} else
{var x__4315__auto__ = (((x == null))?null:x);return (function (){var or__3678__auto__ = (cljs.core._namespace[(function (){var G__20527 = x__4315__auto__;return goog.typeOf(G__20527);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._namespace["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("INamed.-namespace",x);
}
}
})().call(null,x);
}
});
cljs.core.IAtom = (function (){var obj20529 = {};return obj20529;
})();
cljs.core.IReset = (function (){var obj20531 = {};return obj20531;
})();
cljs.core._reset_BANG_ = (function _reset_BANG_(o,new_value){if((function (){var and__3666__auto__ = o;if(and__3666__auto__)
{return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else
{return and__3666__auto__;
}
})())
{return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else
{var x__4315__auto__ = (((o == null))?null:o);return (function (){var or__3678__auto__ = (cljs.core._reset_BANG_[(function (){var G__20535 = x__4315__auto__;return goog.typeOf(G__20535);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._reset_BANG_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});
cljs.core.ISwap = (function (){var obj20537 = {};return obj20537;
})();
cljs.core._swap_BANG_ = (function() {
var _swap_BANG_ = null;
var _swap_BANG___2 = (function (o,f){if((function (){var and__3666__auto__ = o;if(and__3666__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else
{return and__3666__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else
{var x__4315__auto__ = (((o == null))?null:o);return (function (){var or__3678__auto__ = (cljs.core._swap_BANG_[(function (){var G__20547 = x__4315__auto__;return goog.typeOf(G__20547);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var _swap_BANG___3 = (function (o,f,a){if((function (){var and__3666__auto__ = o;if(and__3666__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else
{return and__3666__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else
{var x__4315__auto__ = (((o == null))?null:o);return (function (){var or__3678__auto__ = (cljs.core._swap_BANG_[(function (){var G__20549 = x__4315__auto__;return goog.typeOf(G__20549);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var _swap_BANG___4 = (function (o,f,a,b){if((function (){var and__3666__auto__ = o;if(and__3666__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else
{return and__3666__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else
{var x__4315__auto__ = (((o == null))?null:o);return (function (){var or__3678__auto__ = (cljs.core._swap_BANG_[(function (){var G__20551 = x__4315__auto__;return goog.typeOf(G__20551);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var _swap_BANG___5 = (function (o,f,a,b,xs){if((function (){var and__3666__auto__ = o;if(and__3666__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else
{return and__3666__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else
{var x__4315__auto__ = (((o == null))?null:o);return (function (){var or__3678__auto__ = (cljs.core._swap_BANG_[(function (){var G__20553 = x__4315__auto__;return goog.typeOf(G__20553);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b,xs);
}
});
_swap_BANG_ = function(o,f,a,b,xs){
switch(arguments.length){
case 2:
return _swap_BANG___2.call(this,o,f);
case 3:
return _swap_BANG___3.call(this,o,f,a);
case 4:
return _swap_BANG___4.call(this,o,f,a,b);
case 5:
return _swap_BANG___5.call(this,o,f,a,b,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = _swap_BANG___2;
_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = _swap_BANG___3;
_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = _swap_BANG___4;
_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = _swap_BANG___5;
return _swap_BANG_;
})()
;
cljs.core.IIterable = (function (){var obj20555 = {};return obj20555;
})();
cljs.core._iterator = (function _iterator(coll){if((function (){var and__3666__auto__ = coll;if(and__3666__auto__)
{return coll.cljs$core$IIterable$_iterator$arity$1;
} else
{return and__3666__auto__;
}
})())
{return coll.cljs$core$IIterable$_iterator$arity$1(coll);
} else
{var x__4315__auto__ = (((coll == null))?null:coll);return (function (){var or__3678__auto__ = (cljs.core._iterator[(function (){var G__20559 = x__4315__auto__;return goog.typeOf(G__20559);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._iterator["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IIterable.-iterator",coll);
}
}
})().call(null,coll);
}
});

/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.cljs$lang$type = true;
cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return self__.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
cljs.core.__GT_StringBufferWriter = (function __GT_StringBufferWriter(sb){return (new cljs.core.StringBufferWriter(sb));
});
/**
* Support so that collections can implement toString without
* loading all the printing machinery.
*/
cljs.core.pr_str_STAR_ = (function pr_str_STAR_(obj){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,cljs.core.pr_opts());
writer.cljs$core$IWriter$_flush$arity$1(null);
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
});
cljs.core.int_rotate_left = (function int_rotate_left(x,n){return ((x << n) | (x >>> (- n)));
});
if((typeof Math.imul !== 'undefined') && (!(((function (){var G__20562 = (4294967295);var G__20563 = (5);return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__20562,G__20563) : Math.imul.call(null,G__20562,G__20563));
})() === (0)))))
{cljs.core.imul = (function imul(a,b){var G__20566 = a;var G__20567 = b;return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__20566,G__20567) : Math.imul.call(null,G__20566,G__20567));
});
} else
{cljs.core.imul = (function imul(a,b){var ah = ((a >>> (16)) & (65535));var al = (a & (65535));var bh = ((b >>> (16)) & (65535));var bl = (b & (65535));return (((al * bl) + ((((ah * bl) + (al * bh)) << (16)) >>> (0))) | (0));
});
}
cljs.core.m3_seed = (0);
cljs.core.m3_C1 = (3432918353);
cljs.core.m3_C2 = (461845907);
cljs.core.m3_mix_K1 = (function m3_mix_K1(k1){return cljs.core.imul(cljs.core.int_rotate_left(cljs.core.imul(k1,cljs.core.m3_C1),(15)),cljs.core.m3_C2);
});
cljs.core.m3_mix_H1 = (function m3_mix_H1(h1,k1){return (cljs.core.imul(cljs.core.int_rotate_left((h1 ^ k1),(13)),(5)) + (3864292196));
});
cljs.core.m3_fmix = (function m3_fmix(h1,len){var h1__$1 = h1;var h1__$2 = (h1__$1 ^ len);var h1__$3 = (h1__$2 ^ (h1__$2 >>> (16)));var h1__$4 = cljs.core.imul(h1__$3,(2246822507));var h1__$5 = (h1__$4 ^ (h1__$4 >>> (13)));var h1__$6 = cljs.core.imul(h1__$5,(3266489909));var h1__$7 = (h1__$6 ^ (h1__$6 >>> (16)));return h1__$7;
});
cljs.core.m3_hash_int = (function m3_hash_int(in$){if((in$ === (0)))
{return in$;
} else
{var k1 = cljs.core.m3_mix_K1(in$);var h1 = cljs.core.m3_mix_H1(cljs.core.m3_seed,k1);return cljs.core.m3_fmix(h1,(4));
}
});
cljs.core.m3_hash_unencoded_chars = (function m3_hash_unencoded_chars(in$){var h1 = (function (){var i = (1);var h1 = cljs.core.m3_seed;while(true){
if((i < in$.length))
{{
var G__20568 = (i + (2));
var G__20569 = cljs.core.m3_mix_H1(h1,cljs.core.m3_mix_K1((in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__20568;
h1 = G__20569;
continue;
}
} else
{return h1;
}
break;
}
})();var h1__$1 = ((((in$.length & (1)) === (1)))?(h1 ^ cljs.core.m3_mix_K1(in$.charCodeAt((in$.length - (1))))):h1);return cljs.core.m3_fmix(h1__$1,cljs.core.imul((2),in$.length));
});
cljs.core.string_hash_cache = (function (){var obj20571 = {};return obj20571;
})();
cljs.core.string_hash_cache_count = (0);
cljs.core.hash_string_STAR_ = (function hash_string_STAR_(s){if(!((s == null)))
{var len = s.length;if((len > (0)))
{var i = (0);var hash = (0);while(true){
if((i < len))
{{
var G__20572 = (i + (1));
var G__20573 = (cljs.core.imul((31),hash) + s.charCodeAt(i));
i = G__20572;
hash = G__20573;
continue;
}
} else
{return hash;
}
break;
}
} else
{return (0);
}
} else
{return (0);
}
});
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){var h = cljs.core.hash_string_STAR_(k);(cljs.core.string_hash_cache[k] = h);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + (1));
return h;
});
cljs.core.hash_string = (function hash_string(k){if((cljs.core.string_hash_cache_count > (255)))
{cljs.core.string_hash_cache = (function (){var obj20577 = {};return obj20577;
})();
cljs.core.string_hash_cache_count = (0);
} else
{}
var h = (cljs.core.string_hash_cache[k]);if(typeof h === 'number')
{return h;
} else
{return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function hash(o){if((function (){var G__20580 = o;if(G__20580)
{var bit__4335__auto__ = (G__20580.cljs$lang$protocol_mask$partition0$ & (4194304));if((bit__4335__auto__) || (G__20580.cljs$core$IHash$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(null);
} else
{if(typeof o === 'number')
{return ((function (){var G__20581 = o;return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__20581) : Math.floor.call(null,G__20581));
})() % (2147483647));
} else
{if(o === true)
{return (1);
} else
{if(o === false)
{return (0);
} else
{if(typeof o === 'string')
{return cljs.core.m3_hash_int(cljs.core.hash_string(o));
} else
{if((o == null))
{return (0);
} else
{return cljs.core._hash(o);

}
}
}
}
}
}
});
cljs.core.hash_combine = (function hash_combine(seed,hash){return (seed ^ (((hash + (2654435769)) + (seed << (6))) + (seed >> (2))));
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function hash_symbol(sym){return cljs.core.hash_combine(cljs.core.m3_hash_unencoded_chars(sym.name),cljs.core.hash_string(sym.ns));
});
cljs.core.compare_symbols = (function compare_symbols(a,b){if(cljs.core.truth_((function (){var G__20590 = a;var G__20591 = b;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__20590,G__20591) : cljs.core._EQ_.call(null,G__20590,G__20591));
})()))
{return (0);
} else
{if(cljs.core.truth_((function (){var and__3666__auto__ = cljs.core.not(a.ns);if(and__3666__auto__)
{return b.ns;
} else
{return and__3666__auto__;
}
})()))
{return (-1);
} else
{if(cljs.core.truth_(a.ns))
{if(cljs.core.not(b.ns))
{return (1);
} else
{var nsc = (function (){var G__20592 = a.ns;var G__20593 = b.ns;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__20592,G__20593) : cljs.core.compare.call(null,G__20592,G__20593));
})();if((nsc === (0)))
{var G__20594 = a.name;var G__20595 = b.name;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__20594,G__20595) : cljs.core.compare.call(null,G__20594,G__20595));
} else
{return nsc;
}
}
} else
{var G__20596 = a.name;var G__20597 = b.name;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__20596,G__20597) : cljs.core.compare.call(null,G__20596,G__20597));

}
}
}
});

/**
* @constructor
*/
cljs.core.Symbol = (function (ns,name,str,_hash,_meta){
this.ns = ns;
this.name = name;
this.str = str;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168321;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Symbol.cljs$lang$type = true;
cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";
cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/Symbol");
});
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write(writer,self__.str);
});
cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){var self__ = this;
var sym__$1 = this;var h__4089__auto__ = self__._hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_symbol(sym__$1);self__._hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});
cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__._meta;
});
cljs.core.Symbol.prototype.call = (function() {
var G__20599 = null;
var G__20599__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
var G__20599__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
G__20599 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__20599__2.call(this,self__,coll);
case 3:
return G__20599__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20599.cljs$core$IFn$_invoke$arity$2 = G__20599__2;
G__20599.cljs$core$IFn$_invoke$arity$3 = G__20599__3;
return G__20599;
})()
;
cljs.core.Symbol.prototype.apply = (function (self__,args20598){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20598)));
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var sym = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var sym = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Symbol))
{return (self__.str === other.str);
} else
{return false;
}
});
cljs.core.Symbol.prototype.toString = (function (){var self__ = this;
var _ = this;return self__.str;
});
cljs.core.Symbol.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_Symbol = (function __GT_Symbol(ns,name,str,_hash,_meta){return (new cljs.core.Symbol(ns,name,str,_hash,_meta));
});
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){if((name instanceof cljs.core.Symbol))
{return name;
} else
{return symbol.cljs$core$IFn$_invoke$arity$2(null,name);
}
});
var symbol__2 = (function (ns,name){var sym_str = ((!((ns == null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return (new cljs.core.Symbol(ns,name,sym_str,null,null));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$core$IFn$_invoke$arity$1 = symbol__1;
symbol.cljs$core$IFn$_invoke$arity$2 = symbol__2;
return symbol;
})()
;
cljs.core.iterable_QMARK_ = (function iterable_QMARK_(x){var G__20603 = x;if(G__20603)
{var bit__4342__auto__ = null;if(cljs.core.truth_((function (){var or__3678__auto__ = bit__4342__auto__;if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return G__20603.cljs$core$IIterable$;
}
})()))
{return true;
} else
{if((!G__20603.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__20603);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__20603);
}
});
cljs.core.clone = (function clone(value){return cljs.core._clone(value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){var G__20605 = value;if(G__20605)
{var bit__4342__auto__ = (G__20605.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__4342__auto__) || (G__20605.cljs$core$ICloneable$))
{return true;
} else
{if((!G__20605.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__20605);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__20605);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){if((coll == null))
{return null;
} else
{if((function (){var G__20607 = coll;if(G__20607)
{var bit__4335__auto__ = (G__20607.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4335__auto__) || (G__20607.cljs$core$ISeqable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeqable$_seq$arity$1(null);
} else
{if(coll instanceof Array)
{if((coll.length === (0)))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,(0)));
}
} else
{if(typeof coll === 'string')
{if((coll.length === (0)))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,(0)));
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,coll))
{return cljs.core._seq(coll);
} else
{throw (new Error((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll)+" is not ISeqable")));

}
}
}
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){if((coll == null))
{return null;
} else
{if((function (){var G__20609 = coll;if(G__20609)
{var bit__4335__auto__ = (G__20609.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4335__auto__) || (G__20609.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(null);
} else
{var s = cljs.core.seq(coll);if((s == null))
{return null;
} else
{return cljs.core._first(s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){if(!((coll == null)))
{if((function (){var G__20611 = coll;if(G__20611)
{var bit__4335__auto__ = (G__20611.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4335__auto__) || (G__20611.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(null);
} else
{var s = cljs.core.seq(coll);if(s)
{return cljs.core._rest(s);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){if((coll == null))
{return null;
} else
{if((function (){var G__20613 = coll;if(G__20613)
{var bit__4335__auto__ = (G__20613.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4335__auto__) || (G__20613.cljs$core$INext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$INext$_next$arity$1(null);
} else
{return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){return true;
});
var _EQ___2 = (function (x,y){if((x == null))
{return (y == null);
} else
{return ((x === y)) || (cljs.core._equiv(x,y));
}
});
var _EQ___3 = (function() { 
var G__20618__delegate = function (x,y,more){while(true){
if(_EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{if(cljs.core.next(more))
{{
var G__20619 = y;
var G__20620 = cljs.core.first(more);
var G__20621 = cljs.core.next(more);
x = G__20619;
y = G__20620;
more = G__20621;
continue;
}
} else
{return _EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__20618 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20618__delegate.call(this,x,y,more);};
G__20618.cljs$lang$maxFixedArity = 2;
G__20618.cljs$lang$applyTo = (function (arglist__20622){
var x = cljs.core.first(arglist__20622);
arglist__20622 = cljs.core.next(arglist__20622);
var y = cljs.core.first(arglist__20622);
var more = cljs.core.rest(arglist__20622);
return G__20618__delegate(x,y,more);
});
G__20618.cljs$core$IFn$_invoke$arity$variadic = G__20618__delegate;
return G__20618;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ___1;
_EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ___2;
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ_;
})()
;
/**
* Mix final collection hash for ordered or unordered collections.
* hash-basis is the combined collection hash, count is the number
* of elements included in the basis. Note this is the hash code
* consistent with =, different from .hashCode.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.mix_collection_hash = (function mix_collection_hash(hash_basis,count){var h1 = cljs.core.m3_seed;var k1 = cljs.core.m3_mix_K1(hash_basis);var h1__$1 = cljs.core.m3_mix_H1(h1,k1);return cljs.core.m3_fmix(h1__$1,count);
});
/**
* Returns the hash code, consistent with =, for an external ordered
* collection implementing Iterable.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_ordered_coll = (function hash_ordered_coll(coll){var n = (0);var hash_code = (1);var coll__$1 = cljs.core.seq(coll);while(true){
if(!((coll__$1 == null)))
{{
var G__20623 = (n + (1));
var G__20624 = ((cljs.core.imul((31),hash_code) + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__20625 = cljs.core.next(coll__$1);
n = G__20623;
hash_code = G__20624;
coll__$1 = G__20625;
continue;
}
} else
{return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});
/**
* Returns the hash code, consistent with =, for an external unordered
* collection implementing Iterable. For maps, the iterator should
* return map entries whose hash is computed as
* (hash-ordered-coll [k v]).
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_unordered_coll = (function hash_unordered_coll(coll){var n = (0);var hash_code = (0);var coll__$1 = cljs.core.seq(coll);while(true){
if(!((coll__$1 == null)))
{{
var G__20626 = (n + (1));
var G__20627 = ((hash_code + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__20628 = cljs.core.next(coll__$1);
n = G__20626;
hash_code = G__20627;
coll__$1 = G__20628;
continue;
}
} else
{return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){return (0);
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var o__$1 = this;return ((other instanceof Date)) && ((o__$1.toString() === other.toString()));
});
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){return (x === o);
}));
(cljs.core.IMeta["function"] = true);
(cljs.core._meta["function"] = (function (_){return null;
}));
(cljs.core.Fn["function"] = true);
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){var G__20629 = o;return goog.getUid(G__20629);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){return (x + (1));
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){var self__ = this;
var o__$1 = this;return self__.val;
});
cljs.core.__GT_Reduced = (function __GT_Reduced(val){return (new cljs.core.Reduced(val));
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){return (r instanceof cljs.core.Reduced);
});
cljs.core.deref = (function deref(o){return cljs.core._deref(o);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){var cnt = cljs.core._count(cicoll);if((cnt === (0)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,(0));var n = (1);while(true){
if((n < cnt))
{var nval = (function (){var G__20636 = val;var G__20637 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20636,G__20637) : f.call(null,G__20636,G__20637));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__20642 = nval;
var G__20643 = (n + (1));
val = G__20642;
n = G__20643;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){var cnt = cljs.core._count(cicoll);var val__$1 = val;var n = (0);while(true){
if((n < cnt))
{var nval = (function (){var G__20638 = val__$1;var G__20639 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20638,G__20639) : f.call(null,G__20638,G__20639));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__20644 = nval;
var G__20645 = (n + (1));
val__$1 = G__20644;
n = G__20645;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){var cnt = cljs.core._count(cicoll);var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = (function (){var G__20640 = val__$1;var G__20641 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20640,G__20641) : f.call(null,G__20640,G__20641));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__20646 = nval;
var G__20647 = (n + (1));
val__$1 = G__20646;
n = G__20647;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$core$IFn$_invoke$arity$2 = ci_reduce__2;
ci_reduce.cljs$core$IFn$_invoke$arity$3 = ci_reduce__3;
ci_reduce.cljs$core$IFn$_invoke$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){var cnt = arr.length;if((arr.length === (0)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var val = (arr[(0)]);var n = (1);while(true){
if((n < cnt))
{var nval = (function (){var G__20654 = val;var G__20655 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20654,G__20655) : f.call(null,G__20654,G__20655));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__20660 = nval;
var G__20661 = (n + (1));
val = G__20660;
n = G__20661;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){var cnt = arr.length;var val__$1 = val;var n = (0);while(true){
if((n < cnt))
{var nval = (function (){var G__20656 = val__$1;var G__20657 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20656,G__20657) : f.call(null,G__20656,G__20657));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__20662 = nval;
var G__20663 = (n + (1));
val__$1 = G__20662;
n = G__20663;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){var cnt = arr.length;var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = (function (){var G__20658 = val__$1;var G__20659 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20658,G__20659) : f.call(null,G__20658,G__20659));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__20664 = nval;
var G__20665 = (n + (1));
val__$1 = G__20664;
n = G__20665;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$core$IFn$_invoke$arity$2 = array_reduce__2;
array_reduce.cljs$core$IFn$_invoke$arity$3 = array_reduce__3;
array_reduce.cljs$core$IFn$_invoke$arity$4 = array_reduce__4;
return array_reduce;
})()
;
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){var G__20667 = x;if(G__20667)
{var bit__4342__auto__ = (G__20667.cljs$lang$protocol_mask$partition0$ & (2));if((bit__4342__auto__) || (G__20667.cljs$core$ICounted$))
{return true;
} else
{if((!G__20667.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__20667);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__20667);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){var G__20669 = x;if(G__20669)
{var bit__4342__auto__ = (G__20669.cljs$lang$protocol_mask$partition0$ & (16));if((bit__4342__auto__) || (G__20669.cljs$core$IIndexed$))
{return true;
} else
{if((!G__20669.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__20669);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__20669);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeqIterator = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.IndexedSeqIterator.cljs$lang$type = true;
cljs.core.IndexedSeqIterator.cljs$lang$ctorStr = "cljs.core/IndexedSeqIterator";
cljs.core.IndexedSeqIterator.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/IndexedSeqIterator");
});
cljs.core.IndexedSeqIterator.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.arr.length);
});
cljs.core.IndexedSeqIterator.prototype.next = (function (){var self__ = this;
var _ = this;var ret = (self__.arr[self__.i]);self__.i = (self__.i + (1));
return ret;
});
cljs.core.__GT_IndexedSeqIterator = (function __GT_IndexedSeqIterator(arr,i){return (new cljs.core.IndexedSeqIterator(arr,i));
});

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (arr,i){
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.IndexedSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIterable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.IndexedSeqIterator(self__.arr,self__.i));
});
cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.IndexedSeq(self__.arr,self__.i));
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + (1)) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr.length - self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var c = cljs.core._count(coll__$1);if((c > (0)))
{return (new cljs.core.RSeq(coll__$1,(c - (1)),null));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;var G__20670 = coll__$1;var G__20671 = other;return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__20670,G__20671) : cljs.core.equiv_sequential.call(null,G__20670,G__20671));
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.i]),(self__.i + (1)));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr[self__.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + (1)) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;var G__20672 = o;var G__20673 = coll__$1;return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__20672,G__20673) : cljs.core.cons.call(null,G__20672,G__20673));
});
cljs.core.__GT_IndexedSeq = (function __GT_IndexedSeq(arr,i){return (new cljs.core.IndexedSeq(arr,i));
});
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){return prim_seq.cljs$core$IFn$_invoke$arity$2(prim,(0));
});
var prim_seq__2 = (function (prim,i){if((i < prim.length))
{return (new cljs.core.IndexedSeq(prim,i));
} else
{return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$core$IFn$_invoke$arity$1 = prim_seq__1;
prim_seq.cljs$core$IFn$_invoke$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,(0));
});
var array_seq__2 = (function (array,i){return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$core$IFn$_invoke$arity$1 = array_seq__1;
array_seq.cljs$core$IFn$_invoke$arity$2 = array_seq__2;
return array_seq;
})()
;

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.RSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,self__.meta));
});
cljs.core.RSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i > (0)))
{return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else
{return null;
}
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.i + (1));
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;var G__20676 = coll__$1;var G__20677 = other;return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__20676,G__20677) : cljs.core.equiv_sequential.call(null,G__20676,G__20677));
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var G__20678 = cljs.core.List.EMPTY;var G__20679 = self__.meta;return (cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2(G__20678,G__20679) : cljs.core.with_meta.call(null,G__20678,G__20679));
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){var self__ = this;
var col__$1 = this;var G__20680 = f;var G__20681 = col__$1;return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(G__20680,G__20681) : cljs.core.seq_reduce.call(null,G__20680,G__20681));
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){var self__ = this;
var col__$1 = this;var G__20682 = f;var G__20683 = start;var G__20684 = col__$1;return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(G__20682,G__20683,G__20684) : cljs.core.seq_reduce.call(null,G__20682,G__20683,G__20684));
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.ci,self__.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i > (0)))
{return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;var G__20685 = o;var G__20686 = coll__$1;return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__20685,G__20686) : cljs.core.cons.call(null,G__20685,G__20686));
});
cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){return (new cljs.core.RSeq(ci,i,meta));
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){while(true){
var sn = cljs.core.next(s);if(!((sn == null)))
{{
var G__20687 = sn;
s = G__20687;
continue;
}
} else
{return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__0 = (function (){return cljs.core.PersistentVector.EMPTY;
});
var conj__1 = (function (coll){return coll;
});
var conj__2 = (function (coll,x){if(!((coll == null)))
{return cljs.core._conj(coll,x);
} else
{return cljs.core._conj(cljs.core.List.EMPTY,x);
}
});
var conj__3 = (function() { 
var G__20692__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__20693 = conj.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__20694 = cljs.core.first(xs);
var G__20695 = cljs.core.next(xs);
coll = G__20693;
x = G__20694;
xs = G__20695;
continue;
}
} else
{return conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__20692 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20692__delegate.call(this,coll,x,xs);};
G__20692.cljs$lang$maxFixedArity = 2;
G__20692.cljs$lang$applyTo = (function (arglist__20696){
var coll = cljs.core.first(arglist__20696);
arglist__20696 = cljs.core.next(arglist__20696);
var x = cljs.core.first(arglist__20696);
var xs = cljs.core.rest(arglist__20696);
return G__20692__delegate(coll,x,xs);
});
G__20692.cljs$core$IFn$_invoke$arity$variadic = G__20692__delegate;
return G__20692;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return conj__0.call(this);
case 1:
return conj__1.call(this,coll);
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$core$IFn$_invoke$arity$0 = conj__0;
conj.cljs$core$IFn$_invoke$arity$1 = conj__1;
conj.cljs$core$IFn$_invoke$arity$2 = conj__2;
conj.cljs$core$IFn$_invoke$arity$variadic = conj__3.cljs$core$IFn$_invoke$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){if((coll == null))
{return null;
} else
{return cljs.core._empty(coll);
}
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){var s = cljs.core.seq(coll);var acc = (0);while(true){
if(cljs.core.counted_QMARK_(s))
{return (acc + cljs.core._count(s));
} else
{{
var G__20697 = cljs.core.next(s);
var G__20698 = (acc + (1));
s = G__20697;
acc = G__20698;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){if(!((coll == null)))
{if((function (){var G__20700 = coll;if(G__20700)
{var bit__4335__auto__ = (G__20700.cljs$lang$protocol_mask$partition0$ & (2));if((bit__4335__auto__) || (G__20700.cljs$core$ICounted$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(null);
} else
{if(coll instanceof Array)
{return coll.length;
} else
{if(typeof coll === 'string')
{return coll.length;
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,coll))
{return cljs.core._count(coll);
} else
{return cljs.core.accumulating_seq_count(coll);

}
}
}
}
} else
{return (0);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === (0)))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if(cljs.core.seq(coll))
{{
var G__20701 = cljs.core.next(coll);
var G__20702 = (n - (1));
coll = G__20701;
n = G__20702;
continue;
}
} else
{throw (new Error("Index out of bounds"));

}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){while(true){
if((coll == null))
{return not_found;
} else
{if((n === (0)))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else
{if(cljs.core.seq(coll))
{{
var G__20703 = cljs.core.next(coll);
var G__20704 = (n - (1));
var G__20705 = not_found;
coll = G__20703;
n = G__20704;
not_found = G__20705;
continue;
}
} else
{return not_found;

}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){if(!(typeof n === 'number'))
{throw (new Error("index argument to nth must be a number"));
} else
{if((coll == null))
{return coll;
} else
{if((function (){var G__20710 = coll;if(G__20710)
{var bit__4335__auto__ = (G__20710.cljs$lang$protocol_mask$partition0$ & (16));if((bit__4335__auto__) || (G__20710.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(null,n);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if((function (){var G__20711 = coll;if(G__20711)
{var bit__4342__auto__ = (G__20711.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4342__auto__) || (G__20711.cljs$core$ISeq$))
{return true;
} else
{if((!G__20711.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__20711);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__20711);
}
})())
{return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{throw (new Error(("nth not supported on this type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str(cljs.core.type(coll))))));

}
}
}
}
}
}
}
});
var nth__3 = (function (coll,n,not_found){if(!(typeof n === 'number'))
{throw (new Error("index argument to nth must be a number."));
} else
{if((coll == null))
{return not_found;
} else
{if((function (){var G__20712 = coll;if(G__20712)
{var bit__4335__auto__ = (G__20712.cljs$lang$protocol_mask$partition0$ & (16));if((bit__4335__auto__) || (G__20712.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(null,n,not_found);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if((function (){var G__20713 = coll;if(G__20713)
{var bit__4342__auto__ = (G__20713.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4342__auto__) || (G__20713.cljs$core$ISeq$))
{return true;
} else
{if((!G__20713.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__20713);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__20713);
}
})())
{return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else
{throw (new Error(("nth not supported on this type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str(cljs.core.type(coll))))));

}
}
}
}
}
}
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$core$IFn$_invoke$arity$2 = nth__2;
nth.cljs$core$IFn$_invoke$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){if((o == null))
{return null;
} else
{if((function (){var G__20716 = o;if(G__20716)
{var bit__4335__auto__ = (G__20716.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4335__auto__) || (G__20716.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(null,k);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o))
{return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o,k);
} else
{return null;

}
}
}
}
}
});
var get__3 = (function (o,k,not_found){if(!((o == null)))
{if((function (){var G__20717 = o;if(G__20717)
{var bit__4335__auto__ = (G__20717.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4335__auto__) || (G__20717.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o))
{return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(o,k,not_found);
} else
{return not_found;

}
}
}
}
} else
{return not_found;
}
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$core$IFn$_invoke$arity$2 = get__2;
get.cljs$core$IFn$_invoke$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){if(!((coll == null)))
{return cljs.core._assoc(coll,k,v);
} else
{return cljs.core.PersistentHashMap.fromArrays([k],[v]);
}
});
var assoc__4 = (function() { 
var G__20721__delegate = function (coll,k,v,kvs){while(true){
var ret = assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);if(cljs.core.truth_(kvs))
{{
var G__20722 = ret;
var G__20723 = cljs.core.first(kvs);
var G__20724 = cljs.core.second(kvs);
var G__20725 = cljs.core.nnext(kvs);
coll = G__20722;
k = G__20723;
v = G__20724;
kvs = G__20725;
continue;
}
} else
{return ret;
}
break;
}
};
var G__20721 = function (coll,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__20721__delegate.call(this,coll,k,v,kvs);};
G__20721.cljs$lang$maxFixedArity = 3;
G__20721.cljs$lang$applyTo = (function (arglist__20726){
var coll = cljs.core.first(arglist__20726);
arglist__20726 = cljs.core.next(arglist__20726);
var k = cljs.core.first(arglist__20726);
arglist__20726 = cljs.core.next(arglist__20726);
var v = cljs.core.first(arglist__20726);
var kvs = cljs.core.rest(arglist__20726);
return G__20721__delegate(coll,k,v,kvs);
});
G__20721.cljs$core$IFn$_invoke$arity$variadic = G__20721__delegate;
return G__20721;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$core$IFn$_invoke$arity$3 = assoc__3;
assoc.cljs$core$IFn$_invoke$arity$variadic = assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){return coll;
});
var dissoc__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._dissoc(coll,k);
}
});
var dissoc__3 = (function() { 
var G__20729__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = dissoc.cljs$core$IFn$_invoke$arity$2(coll,k);if(cljs.core.truth_(ks))
{{
var G__20730 = ret;
var G__20731 = cljs.core.first(ks);
var G__20732 = cljs.core.next(ks);
coll = G__20730;
k = G__20731;
ks = G__20732;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__20729 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20729__delegate.call(this,coll,k,ks);};
G__20729.cljs$lang$maxFixedArity = 2;
G__20729.cljs$lang$applyTo = (function (arglist__20733){
var coll = cljs.core.first(arglist__20733);
arglist__20733 = cljs.core.next(arglist__20733);
var k = cljs.core.first(arglist__20733);
var ks = cljs.core.rest(arglist__20733);
return G__20729__delegate(coll,k,ks);
});
G__20729.cljs$core$IFn$_invoke$arity$variadic = G__20729__delegate;
return G__20729;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$core$IFn$_invoke$arity$1 = dissoc__1;
dissoc.cljs$core$IFn$_invoke$arity$2 = dissoc__2;
dissoc.cljs$core$IFn$_invoke$arity$variadic = dissoc__3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc;
})()
;
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){var or__3678__auto__ = (function (){var G__20738 = f;return goog.isFunction(G__20738);
})();if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{var G__20739 = f;if(G__20739)
{var bit__4342__auto__ = null;if(cljs.core.truth_((function (){var or__3678__auto____$1 = bit__4342__auto__;if(cljs.core.truth_(or__3678__auto____$1))
{return or__3678__auto____$1;
} else
{return G__20739.cljs$core$Fn$;
}
})()))
{return true;
} else
{if((!G__20739.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__20739);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__20739);
}
}
});

/**
* @constructor
*/
cljs.core.MetaFn = (function (afn,meta){
this.afn = afn;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.MetaFn.cljs$lang$type = true;
cljs.core.MetaFn.cljs$lang$ctorStr = "cljs.core/MetaFn";
cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/MetaFn");
});
cljs.core.MetaFn.prototype.call = (function() {
var G__21205 = null;
var G__21205__1 = (function (self__){var self__ = this;
var self____$1 = this;var _ = self____$1;return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
var G__21205__2 = (function (self__,a){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20741 = a;return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__20741) : self__.afn.call(null,G__20741));
});
var G__21205__3 = (function (self__,a,b){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20742 = a;var G__20743 = b;return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__20742,G__20743) : self__.afn.call(null,G__20742,G__20743));
});
var G__21205__4 = (function (self__,a,b,c){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20744 = a;var G__20745 = b;var G__20746 = c;return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__20744,G__20745,G__20746) : self__.afn.call(null,G__20744,G__20745,G__20746));
});
var G__21205__5 = (function (self__,a,b,c,d){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20747 = a;var G__20748 = b;var G__20749 = c;var G__20750 = d;return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__20747,G__20748,G__20749,G__20750) : self__.afn.call(null,G__20747,G__20748,G__20749,G__20750));
});
var G__21205__6 = (function (self__,a,b,c,d,e){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20751 = a;var G__20752 = b;var G__20753 = c;var G__20754 = d;var G__20755 = e;return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__20751,G__20752,G__20753,G__20754,G__20755) : self__.afn.call(null,G__20751,G__20752,G__20753,G__20754,G__20755));
});
var G__21205__7 = (function (self__,a,b,c,d,e,f){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20756 = a;var G__20757 = b;var G__20758 = c;var G__20759 = d;var G__20760 = e;var G__20761 = f;return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__20756,G__20757,G__20758,G__20759,G__20760,G__20761) : self__.afn.call(null,G__20756,G__20757,G__20758,G__20759,G__20760,G__20761));
});
var G__21205__8 = (function (self__,a,b,c,d,e,f,g){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20762 = a;var G__20763 = b;var G__20764 = c;var G__20765 = d;var G__20766 = e;var G__20767 = f;var G__20768 = g;return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__20762,G__20763,G__20764,G__20765,G__20766,G__20767,G__20768) : self__.afn.call(null,G__20762,G__20763,G__20764,G__20765,G__20766,G__20767,G__20768));
});
var G__21205__9 = (function (self__,a,b,c,d,e,f,g,h){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20769 = a;var G__20770 = b;var G__20771 = c;var G__20772 = d;var G__20773 = e;var G__20774 = f;var G__20775 = g;var G__20776 = h;return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__20769,G__20770,G__20771,G__20772,G__20773,G__20774,G__20775,G__20776) : self__.afn.call(null,G__20769,G__20770,G__20771,G__20772,G__20773,G__20774,G__20775,G__20776));
});
var G__21205__10 = (function (self__,a,b,c,d,e,f,g,h,i){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20777 = a;var G__20778 = b;var G__20779 = c;var G__20780 = d;var G__20781 = e;var G__20782 = f;var G__20783 = g;var G__20784 = h;var G__20785 = i;return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__20777,G__20778,G__20779,G__20780,G__20781,G__20782,G__20783,G__20784,G__20785) : self__.afn.call(null,G__20777,G__20778,G__20779,G__20780,G__20781,G__20782,G__20783,G__20784,G__20785));
});
var G__21205__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20786 = a;var G__20787 = b;var G__20788 = c;var G__20789 = d;var G__20790 = e;var G__20791 = f;var G__20792 = g;var G__20793 = h;var G__20794 = i;var G__20795 = j;return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__20786,G__20787,G__20788,G__20789,G__20790,G__20791,G__20792,G__20793,G__20794,G__20795) : self__.afn.call(null,G__20786,G__20787,G__20788,G__20789,G__20790,G__20791,G__20792,G__20793,G__20794,G__20795));
});
var G__21205__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20796 = a;var G__20797 = b;var G__20798 = c;var G__20799 = d;var G__20800 = e;var G__20801 = f;var G__20802 = g;var G__20803 = h;var G__20804 = i;var G__20805 = j;var G__20806 = k;return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__20796,G__20797,G__20798,G__20799,G__20800,G__20801,G__20802,G__20803,G__20804,G__20805,G__20806) : self__.afn.call(null,G__20796,G__20797,G__20798,G__20799,G__20800,G__20801,G__20802,G__20803,G__20804,G__20805,G__20806));
});
var G__21205__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20807 = a;var G__20808 = b;var G__20809 = c;var G__20810 = d;var G__20811 = e;var G__20812 = f;var G__20813 = g;var G__20814 = h;var G__20815 = i;var G__20816 = j;var G__20817 = k;var G__20818 = l;return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__20807,G__20808,G__20809,G__20810,G__20811,G__20812,G__20813,G__20814,G__20815,G__20816,G__20817,G__20818) : self__.afn.call(null,G__20807,G__20808,G__20809,G__20810,G__20811,G__20812,G__20813,G__20814,G__20815,G__20816,G__20817,G__20818));
});
var G__21205__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20819 = a;var G__20820 = b;var G__20821 = c;var G__20822 = d;var G__20823 = e;var G__20824 = f;var G__20825 = g;var G__20826 = h;var G__20827 = i;var G__20828 = j;var G__20829 = k;var G__20830 = l;var G__20831 = m;return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__20819,G__20820,G__20821,G__20822,G__20823,G__20824,G__20825,G__20826,G__20827,G__20828,G__20829,G__20830,G__20831) : self__.afn.call(null,G__20819,G__20820,G__20821,G__20822,G__20823,G__20824,G__20825,G__20826,G__20827,G__20828,G__20829,G__20830,G__20831));
});
var G__21205__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20832 = a;var G__20833 = b;var G__20834 = c;var G__20835 = d;var G__20836 = e;var G__20837 = f;var G__20838 = g;var G__20839 = h;var G__20840 = i;var G__20841 = j;var G__20842 = k;var G__20843 = l;var G__20844 = m;var G__20845 = n;return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__20832,G__20833,G__20834,G__20835,G__20836,G__20837,G__20838,G__20839,G__20840,G__20841,G__20842,G__20843,G__20844,G__20845) : self__.afn.call(null,G__20832,G__20833,G__20834,G__20835,G__20836,G__20837,G__20838,G__20839,G__20840,G__20841,G__20842,G__20843,G__20844,G__20845));
});
var G__21205__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20846 = a;var G__20847 = b;var G__20848 = c;var G__20849 = d;var G__20850 = e;var G__20851 = f;var G__20852 = g;var G__20853 = h;var G__20854 = i;var G__20855 = j;var G__20856 = k;var G__20857 = l;var G__20858 = m;var G__20859 = n;var G__20860 = o;return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__20846,G__20847,G__20848,G__20849,G__20850,G__20851,G__20852,G__20853,G__20854,G__20855,G__20856,G__20857,G__20858,G__20859,G__20860) : self__.afn.call(null,G__20846,G__20847,G__20848,G__20849,G__20850,G__20851,G__20852,G__20853,G__20854,G__20855,G__20856,G__20857,G__20858,G__20859,G__20860));
});
var G__21205__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20861 = a;var G__20862 = b;var G__20863 = c;var G__20864 = d;var G__20865 = e;var G__20866 = f;var G__20867 = g;var G__20868 = h;var G__20869 = i;var G__20870 = j;var G__20871 = k;var G__20872 = l;var G__20873 = m;var G__20874 = n;var G__20875 = o;var G__20876 = p;return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__20861,G__20862,G__20863,G__20864,G__20865,G__20866,G__20867,G__20868,G__20869,G__20870,G__20871,G__20872,G__20873,G__20874,G__20875,G__20876) : self__.afn.call(null,G__20861,G__20862,G__20863,G__20864,G__20865,G__20866,G__20867,G__20868,G__20869,G__20870,G__20871,G__20872,G__20873,G__20874,G__20875,G__20876));
});
var G__21205__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20877 = a;var G__20878 = b;var G__20879 = c;var G__20880 = d;var G__20881 = e;var G__20882 = f;var G__20883 = g;var G__20884 = h;var G__20885 = i;var G__20886 = j;var G__20887 = k;var G__20888 = l;var G__20889 = m;var G__20890 = n;var G__20891 = o;var G__20892 = p;var G__20893 = q;return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__20877,G__20878,G__20879,G__20880,G__20881,G__20882,G__20883,G__20884,G__20885,G__20886,G__20887,G__20888,G__20889,G__20890,G__20891,G__20892,G__20893) : self__.afn.call(null,G__20877,G__20878,G__20879,G__20880,G__20881,G__20882,G__20883,G__20884,G__20885,G__20886,G__20887,G__20888,G__20889,G__20890,G__20891,G__20892,G__20893));
});
var G__21205__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20894 = a;var G__20895 = b;var G__20896 = c;var G__20897 = d;var G__20898 = e;var G__20899 = f;var G__20900 = g;var G__20901 = h;var G__20902 = i;var G__20903 = j;var G__20904 = k;var G__20905 = l;var G__20906 = m;var G__20907 = n;var G__20908 = o;var G__20909 = p;var G__20910 = q;var G__20911 = r;return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__20894,G__20895,G__20896,G__20897,G__20898,G__20899,G__20900,G__20901,G__20902,G__20903,G__20904,G__20905,G__20906,G__20907,G__20908,G__20909,G__20910,G__20911) : self__.afn.call(null,G__20894,G__20895,G__20896,G__20897,G__20898,G__20899,G__20900,G__20901,G__20902,G__20903,G__20904,G__20905,G__20906,G__20907,G__20908,G__20909,G__20910,G__20911));
});
var G__21205__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20912 = a;var G__20913 = b;var G__20914 = c;var G__20915 = d;var G__20916 = e;var G__20917 = f;var G__20918 = g;var G__20919 = h;var G__20920 = i;var G__20921 = j;var G__20922 = k;var G__20923 = l;var G__20924 = m;var G__20925 = n;var G__20926 = o;var G__20927 = p;var G__20928 = q;var G__20929 = r;var G__20930 = s;return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__20912,G__20913,G__20914,G__20915,G__20916,G__20917,G__20918,G__20919,G__20920,G__20921,G__20922,G__20923,G__20924,G__20925,G__20926,G__20927,G__20928,G__20929,G__20930) : self__.afn.call(null,G__20912,G__20913,G__20914,G__20915,G__20916,G__20917,G__20918,G__20919,G__20920,G__20921,G__20922,G__20923,G__20924,G__20925,G__20926,G__20927,G__20928,G__20929,G__20930));
});
var G__21205__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20931 = a;var G__20932 = b;var G__20933 = c;var G__20934 = d;var G__20935 = e;var G__20936 = f;var G__20937 = g;var G__20938 = h;var G__20939 = i;var G__20940 = j;var G__20941 = k;var G__20942 = l;var G__20943 = m;var G__20944 = n;var G__20945 = o;var G__20946 = p;var G__20947 = q;var G__20948 = r;var G__20949 = s;var G__20950 = t;return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__20931,G__20932,G__20933,G__20934,G__20935,G__20936,G__20937,G__20938,G__20939,G__20940,G__20941,G__20942,G__20943,G__20944,G__20945,G__20946,G__20947,G__20948,G__20949,G__20950) : self__.afn.call(null,G__20931,G__20932,G__20933,G__20934,G__20935,G__20936,G__20937,G__20938,G__20939,G__20940,G__20941,G__20942,G__20943,G__20944,G__20945,G__20946,G__20947,G__20948,G__20949,G__20950));
});
var G__21205__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__20951 = self__.afn;var G__20952 = a;var G__20953 = b;var G__20954 = c;var G__20955 = d;var G__20956 = e;var G__20957 = f;var G__20958 = g;var G__20959 = h;var G__20960 = i;var G__20961 = j;var G__20962 = k;var G__20963 = l;var G__20964 = m;var G__20965 = n;var G__20966 = o;var G__20967 = p;var G__20968 = q;var G__20969 = r;var G__20970 = s;var G__20971 = t;var G__20972 = rest;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__20951,G__20952,G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960,G__20961,G__20962,G__20963,G__20964,G__20965,G__20966,G__20967,G__20968,G__20969,G__20970,G__20971,G__20972) : cljs.core.apply.call(null,G__20951,G__20952,G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960,G__20961,G__20962,G__20963,G__20964,G__20965,G__20966,G__20967,G__20968,G__20969,G__20970,G__20971,G__20972));
});
G__21205 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__21205__1.call(this,self__);
case 2:
return G__21205__2.call(this,self__,a);
case 3:
return G__21205__3.call(this,self__,a,b);
case 4:
return G__21205__4.call(this,self__,a,b,c);
case 5:
return G__21205__5.call(this,self__,a,b,c,d);
case 6:
return G__21205__6.call(this,self__,a,b,c,d,e);
case 7:
return G__21205__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__21205__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__21205__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__21205__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__21205__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__21205__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__21205__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__21205__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__21205__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__21205__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__21205__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__21205__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__21205__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__21205__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__21205__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__21205__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21205.cljs$core$IFn$_invoke$arity$1 = G__21205__1;
G__21205.cljs$core$IFn$_invoke$arity$2 = G__21205__2;
G__21205.cljs$core$IFn$_invoke$arity$3 = G__21205__3;
G__21205.cljs$core$IFn$_invoke$arity$4 = G__21205__4;
G__21205.cljs$core$IFn$_invoke$arity$5 = G__21205__5;
G__21205.cljs$core$IFn$_invoke$arity$6 = G__21205__6;
G__21205.cljs$core$IFn$_invoke$arity$7 = G__21205__7;
G__21205.cljs$core$IFn$_invoke$arity$8 = G__21205__8;
G__21205.cljs$core$IFn$_invoke$arity$9 = G__21205__9;
G__21205.cljs$core$IFn$_invoke$arity$10 = G__21205__10;
G__21205.cljs$core$IFn$_invoke$arity$11 = G__21205__11;
G__21205.cljs$core$IFn$_invoke$arity$12 = G__21205__12;
G__21205.cljs$core$IFn$_invoke$arity$13 = G__21205__13;
G__21205.cljs$core$IFn$_invoke$arity$14 = G__21205__14;
G__21205.cljs$core$IFn$_invoke$arity$15 = G__21205__15;
G__21205.cljs$core$IFn$_invoke$arity$16 = G__21205__16;
G__21205.cljs$core$IFn$_invoke$arity$17 = G__21205__17;
G__21205.cljs$core$IFn$_invoke$arity$18 = G__21205__18;
G__21205.cljs$core$IFn$_invoke$arity$19 = G__21205__19;
G__21205.cljs$core$IFn$_invoke$arity$20 = G__21205__20;
G__21205.cljs$core$IFn$_invoke$arity$21 = G__21205__21;
G__21205.cljs$core$IFn$_invoke$arity$22 = G__21205__22;
return G__21205;
})()
;
cljs.core.MetaFn.prototype.apply = (function (self__,args20740){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20740)));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){var self__ = this;
var _ = this;return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var _ = this;var G__20973 = a;return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__20973) : self__.afn.call(null,G__20973));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){var self__ = this;
var _ = this;var G__20974 = a;var G__20975 = b;return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__20974,G__20975) : self__.afn.call(null,G__20974,G__20975));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){var self__ = this;
var _ = this;var G__20976 = a;var G__20977 = b;var G__20978 = c;return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__20976,G__20977,G__20978) : self__.afn.call(null,G__20976,G__20977,G__20978));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){var self__ = this;
var _ = this;var G__20979 = a;var G__20980 = b;var G__20981 = c;var G__20982 = d;return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__20979,G__20980,G__20981,G__20982) : self__.afn.call(null,G__20979,G__20980,G__20981,G__20982));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){var self__ = this;
var _ = this;var G__20983 = a;var G__20984 = b;var G__20985 = c;var G__20986 = d;var G__20987 = e;return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__20983,G__20984,G__20985,G__20986,G__20987) : self__.afn.call(null,G__20983,G__20984,G__20985,G__20986,G__20987));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){var self__ = this;
var _ = this;var G__20988 = a;var G__20989 = b;var G__20990 = c;var G__20991 = d;var G__20992 = e;var G__20993 = f;return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__20988,G__20989,G__20990,G__20991,G__20992,G__20993) : self__.afn.call(null,G__20988,G__20989,G__20990,G__20991,G__20992,G__20993));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){var self__ = this;
var _ = this;var G__20994 = a;var G__20995 = b;var G__20996 = c;var G__20997 = d;var G__20998 = e;var G__20999 = f;var G__21000 = g;return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__20994,G__20995,G__20996,G__20997,G__20998,G__20999,G__21000) : self__.afn.call(null,G__20994,G__20995,G__20996,G__20997,G__20998,G__20999,G__21000));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){var self__ = this;
var _ = this;var G__21001 = a;var G__21002 = b;var G__21003 = c;var G__21004 = d;var G__21005 = e;var G__21006 = f;var G__21007 = g;var G__21008 = h;return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__21001,G__21002,G__21003,G__21004,G__21005,G__21006,G__21007,G__21008) : self__.afn.call(null,G__21001,G__21002,G__21003,G__21004,G__21005,G__21006,G__21007,G__21008));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){var self__ = this;
var _ = this;var G__21009 = a;var G__21010 = b;var G__21011 = c;var G__21012 = d;var G__21013 = e;var G__21014 = f;var G__21015 = g;var G__21016 = h;var G__21017 = i;return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__21009,G__21010,G__21011,G__21012,G__21013,G__21014,G__21015,G__21016,G__21017) : self__.afn.call(null,G__21009,G__21010,G__21011,G__21012,G__21013,G__21014,G__21015,G__21016,G__21017));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){var self__ = this;
var _ = this;var G__21018 = a;var G__21019 = b;var G__21020 = c;var G__21021 = d;var G__21022 = e;var G__21023 = f;var G__21024 = g;var G__21025 = h;var G__21026 = i;var G__21027 = j;return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__21018,G__21019,G__21020,G__21021,G__21022,G__21023,G__21024,G__21025,G__21026,G__21027) : self__.afn.call(null,G__21018,G__21019,G__21020,G__21021,G__21022,G__21023,G__21024,G__21025,G__21026,G__21027));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var _ = this;var G__21028 = a;var G__21029 = b;var G__21030 = c;var G__21031 = d;var G__21032 = e;var G__21033 = f;var G__21034 = g;var G__21035 = h;var G__21036 = i;var G__21037 = j;var G__21038 = k;return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__21028,G__21029,G__21030,G__21031,G__21032,G__21033,G__21034,G__21035,G__21036,G__21037,G__21038) : self__.afn.call(null,G__21028,G__21029,G__21030,G__21031,G__21032,G__21033,G__21034,G__21035,G__21036,G__21037,G__21038));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var _ = this;var G__21039 = a;var G__21040 = b;var G__21041 = c;var G__21042 = d;var G__21043 = e;var G__21044 = f;var G__21045 = g;var G__21046 = h;var G__21047 = i;var G__21048 = j;var G__21049 = k;var G__21050 = l;return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__21039,G__21040,G__21041,G__21042,G__21043,G__21044,G__21045,G__21046,G__21047,G__21048,G__21049,G__21050) : self__.afn.call(null,G__21039,G__21040,G__21041,G__21042,G__21043,G__21044,G__21045,G__21046,G__21047,G__21048,G__21049,G__21050));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var _ = this;var G__21051 = a;var G__21052 = b;var G__21053 = c;var G__21054 = d;var G__21055 = e;var G__21056 = f;var G__21057 = g;var G__21058 = h;var G__21059 = i;var G__21060 = j;var G__21061 = k;var G__21062 = l;var G__21063 = m;return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__21051,G__21052,G__21053,G__21054,G__21055,G__21056,G__21057,G__21058,G__21059,G__21060,G__21061,G__21062,G__21063) : self__.afn.call(null,G__21051,G__21052,G__21053,G__21054,G__21055,G__21056,G__21057,G__21058,G__21059,G__21060,G__21061,G__21062,G__21063));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var _ = this;var G__21064 = a;var G__21065 = b;var G__21066 = c;var G__21067 = d;var G__21068 = e;var G__21069 = f;var G__21070 = g;var G__21071 = h;var G__21072 = i;var G__21073 = j;var G__21074 = k;var G__21075 = l;var G__21076 = m;var G__21077 = n;return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__21064,G__21065,G__21066,G__21067,G__21068,G__21069,G__21070,G__21071,G__21072,G__21073,G__21074,G__21075,G__21076,G__21077) : self__.afn.call(null,G__21064,G__21065,G__21066,G__21067,G__21068,G__21069,G__21070,G__21071,G__21072,G__21073,G__21074,G__21075,G__21076,G__21077));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var _ = this;var G__21078 = a;var G__21079 = b;var G__21080 = c;var G__21081 = d;var G__21082 = e;var G__21083 = f;var G__21084 = g;var G__21085 = h;var G__21086 = i;var G__21087 = j;var G__21088 = k;var G__21089 = l;var G__21090 = m;var G__21091 = n;var G__21092 = o;return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__21078,G__21079,G__21080,G__21081,G__21082,G__21083,G__21084,G__21085,G__21086,G__21087,G__21088,G__21089,G__21090,G__21091,G__21092) : self__.afn.call(null,G__21078,G__21079,G__21080,G__21081,G__21082,G__21083,G__21084,G__21085,G__21086,G__21087,G__21088,G__21089,G__21090,G__21091,G__21092));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var _ = this;var G__21093 = a;var G__21094 = b;var G__21095 = c;var G__21096 = d;var G__21097 = e;var G__21098 = f;var G__21099 = g;var G__21100 = h;var G__21101 = i;var G__21102 = j;var G__21103 = k;var G__21104 = l;var G__21105 = m;var G__21106 = n;var G__21107 = o;var G__21108 = p;return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__21093,G__21094,G__21095,G__21096,G__21097,G__21098,G__21099,G__21100,G__21101,G__21102,G__21103,G__21104,G__21105,G__21106,G__21107,G__21108) : self__.afn.call(null,G__21093,G__21094,G__21095,G__21096,G__21097,G__21098,G__21099,G__21100,G__21101,G__21102,G__21103,G__21104,G__21105,G__21106,G__21107,G__21108));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var _ = this;var G__21109 = a;var G__21110 = b;var G__21111 = c;var G__21112 = d;var G__21113 = e;var G__21114 = f;var G__21115 = g;var G__21116 = h;var G__21117 = i;var G__21118 = j;var G__21119 = k;var G__21120 = l;var G__21121 = m;var G__21122 = n;var G__21123 = o;var G__21124 = p;var G__21125 = q;return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__21109,G__21110,G__21111,G__21112,G__21113,G__21114,G__21115,G__21116,G__21117,G__21118,G__21119,G__21120,G__21121,G__21122,G__21123,G__21124,G__21125) : self__.afn.call(null,G__21109,G__21110,G__21111,G__21112,G__21113,G__21114,G__21115,G__21116,G__21117,G__21118,G__21119,G__21120,G__21121,G__21122,G__21123,G__21124,G__21125));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var _ = this;var G__21126 = a;var G__21127 = b;var G__21128 = c;var G__21129 = d;var G__21130 = e;var G__21131 = f;var G__21132 = g;var G__21133 = h;var G__21134 = i;var G__21135 = j;var G__21136 = k;var G__21137 = l;var G__21138 = m;var G__21139 = n;var G__21140 = o;var G__21141 = p;var G__21142 = q;var G__21143 = r;return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__21126,G__21127,G__21128,G__21129,G__21130,G__21131,G__21132,G__21133,G__21134,G__21135,G__21136,G__21137,G__21138,G__21139,G__21140,G__21141,G__21142,G__21143) : self__.afn.call(null,G__21126,G__21127,G__21128,G__21129,G__21130,G__21131,G__21132,G__21133,G__21134,G__21135,G__21136,G__21137,G__21138,G__21139,G__21140,G__21141,G__21142,G__21143));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var _ = this;var G__21144 = a;var G__21145 = b;var G__21146 = c;var G__21147 = d;var G__21148 = e;var G__21149 = f;var G__21150 = g;var G__21151 = h;var G__21152 = i;var G__21153 = j;var G__21154 = k;var G__21155 = l;var G__21156 = m;var G__21157 = n;var G__21158 = o;var G__21159 = p;var G__21160 = q;var G__21161 = r;var G__21162 = s;return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__21144,G__21145,G__21146,G__21147,G__21148,G__21149,G__21150,G__21151,G__21152,G__21153,G__21154,G__21155,G__21156,G__21157,G__21158,G__21159,G__21160,G__21161,G__21162) : self__.afn.call(null,G__21144,G__21145,G__21146,G__21147,G__21148,G__21149,G__21150,G__21151,G__21152,G__21153,G__21154,G__21155,G__21156,G__21157,G__21158,G__21159,G__21160,G__21161,G__21162));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var _ = this;var G__21163 = a;var G__21164 = b;var G__21165 = c;var G__21166 = d;var G__21167 = e;var G__21168 = f;var G__21169 = g;var G__21170 = h;var G__21171 = i;var G__21172 = j;var G__21173 = k;var G__21174 = l;var G__21175 = m;var G__21176 = n;var G__21177 = o;var G__21178 = p;var G__21179 = q;var G__21180 = r;var G__21181 = s;var G__21182 = t;return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__21163,G__21164,G__21165,G__21166,G__21167,G__21168,G__21169,G__21170,G__21171,G__21172,G__21173,G__21174,G__21175,G__21176,G__21177,G__21178,G__21179,G__21180,G__21181,G__21182) : self__.afn.call(null,G__21163,G__21164,G__21165,G__21166,G__21167,G__21168,G__21169,G__21170,G__21171,G__21172,G__21173,G__21174,G__21175,G__21176,G__21177,G__21178,G__21179,G__21180,G__21181,G__21182));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var _ = this;var G__21183 = self__.afn;var G__21184 = a;var G__21185 = b;var G__21186 = c;var G__21187 = d;var G__21188 = e;var G__21189 = f;var G__21190 = g;var G__21191 = h;var G__21192 = i;var G__21193 = j;var G__21194 = k;var G__21195 = l;var G__21196 = m;var G__21197 = n;var G__21198 = o;var G__21199 = p;var G__21200 = q;var G__21201 = r;var G__21202 = s;var G__21203 = t;var G__21204 = rest;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__21183,G__21184,G__21185,G__21186,G__21187,G__21188,G__21189,G__21190,G__21191,G__21192,G__21193,G__21194,G__21195,G__21196,G__21197,G__21198,G__21199,G__21200,G__21201,G__21202,G__21203,G__21204) : cljs.core.apply.call(null,G__21183,G__21184,G__21185,G__21186,G__21187,G__21188,G__21189,G__21190,G__21191,G__21192,G__21193,G__21194,G__21195,G__21196,G__21197,G__21198,G__21199,G__21200,G__21201,G__21202,G__21203,G__21204));
});
cljs.core.MetaFn.prototype.cljs$core$Fn$ = true;
cljs.core.MetaFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.MetaFn(self__.afn,new_meta));
});
cljs.core.MetaFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
cljs.core.__GT_MetaFn = (function __GT_MetaFn(afn,meta){return (new cljs.core.MetaFn(afn,meta));
});
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){if((cljs.core.fn_QMARK_(o)) && (!((function (){var G__21209 = o;if(G__21209)
{var bit__4342__auto__ = (G__21209.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__4342__auto__) || (G__21209.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__21209.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__21209);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__21209);
}
})())))
{return (new cljs.core.MetaFn(o,meta));
} else
{if((o == null))
{return null;
} else
{return cljs.core._with_meta(o,meta);
}
}
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){if((function (){var and__3666__auto__ = !((o == null));if(and__3666__auto__)
{var G__21213 = o;if(G__21213)
{var bit__4342__auto__ = (G__21213.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__4342__auto__) || (G__21213.cljs$core$IMeta$))
{return true;
} else
{if((!G__21213.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__21213);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__21213);
}
} else
{return and__3666__auto__;
}
})())
{return cljs.core._meta(o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){if((coll == null))
{return null;
} else
{return cljs.core._peek(coll);
}
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){if((coll == null))
{return null;
} else
{return cljs.core._pop(coll);
}
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){return coll;
});
var disj__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._disjoin(coll,k);
}
});
var disj__3 = (function() { 
var G__21216__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = disj.cljs$core$IFn$_invoke$arity$2(coll,k);if(cljs.core.truth_(ks))
{{
var G__21217 = ret;
var G__21218 = cljs.core.first(ks);
var G__21219 = cljs.core.next(ks);
coll = G__21217;
k = G__21218;
ks = G__21219;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__21216 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21216__delegate.call(this,coll,k,ks);};
G__21216.cljs$lang$maxFixedArity = 2;
G__21216.cljs$lang$applyTo = (function (arglist__21220){
var coll = cljs.core.first(arglist__21220);
arglist__21220 = cljs.core.next(arglist__21220);
var k = cljs.core.first(arglist__21220);
var ks = cljs.core.rest(arglist__21220);
return G__21216__delegate(coll,k,ks);
});
G__21216.cljs$core$IFn$_invoke$arity$variadic = G__21216__delegate;
return G__21216;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$core$IFn$_invoke$arity$1 = disj__1;
disj.cljs$core$IFn$_invoke$arity$2 = disj__2;
disj.cljs$core$IFn$_invoke$arity$variadic = disj__3.cljs$core$IFn$_invoke$arity$variadic;
return disj;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){return ((coll == null)) || (cljs.core.not(cljs.core.seq(coll)));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){if((x == null))
{return false;
} else
{var G__21222 = x;if(G__21222)
{var bit__4342__auto__ = (G__21222.cljs$lang$protocol_mask$partition0$ & (8));if((bit__4342__auto__) || (G__21222.cljs$core$ICollection$))
{return true;
} else
{if((!G__21222.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__21222);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__21222);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){if((x == null))
{return false;
} else
{var G__21224 = x;if(G__21224)
{var bit__4342__auto__ = (G__21224.cljs$lang$protocol_mask$partition0$ & (4096));if((bit__4342__auto__) || (G__21224.cljs$core$ISet$))
{return true;
} else
{if((!G__21224.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__21224);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__21224);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){var G__21226 = x;if(G__21226)
{var bit__4342__auto__ = (G__21226.cljs$lang$protocol_mask$partition0$ & (512));if((bit__4342__auto__) || (G__21226.cljs$core$IAssociative$))
{return true;
} else
{if((!G__21226.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__21226);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__21226);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){var G__21228 = x;if(G__21228)
{var bit__4342__auto__ = (G__21228.cljs$lang$protocol_mask$partition0$ & (16777216));if((bit__4342__auto__) || (G__21228.cljs$core$ISequential$))
{return true;
} else
{if((!G__21228.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__21228);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__21228);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){var G__21230 = x;if(G__21230)
{var bit__4342__auto__ = (G__21230.cljs$lang$protocol_mask$partition0$ & (268435456));if((bit__4342__auto__) || (G__21230.cljs$core$ISorted$))
{return true;
} else
{if((!G__21230.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__21230);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__21230);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){var G__21232 = x;if(G__21232)
{var bit__4342__auto__ = (G__21232.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__4342__auto__) || (G__21232.cljs$core$IReduce$))
{return true;
} else
{if((!G__21232.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__21232);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__21232);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){if((x == null))
{return false;
} else
{var G__21234 = x;if(G__21234)
{var bit__4342__auto__ = (G__21234.cljs$lang$protocol_mask$partition0$ & (1024));if((bit__4342__auto__) || (G__21234.cljs$core$IMap$))
{return true;
} else
{if((!G__21234.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__21234);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__21234);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){var G__21236 = x;if(G__21236)
{var bit__4342__auto__ = (G__21236.cljs$lang$protocol_mask$partition0$ & (16384));if((bit__4342__auto__) || (G__21236.cljs$core$IVector$))
{return true;
} else
{if((!G__21236.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__21236);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__21236);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){var G__21238 = x;if(G__21238)
{var bit__4335__auto__ = (G__21238.cljs$lang$protocol_mask$partition1$ & (512));if((bit__4335__auto__) || (G__21238.cljs$core$IChunkedSeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){var obj21244 = {};return obj21244;
});
var js_obj__1 = (function() { 
var G__21247__delegate = function (keyvals){var G__21245 = goog.object.create;var G__21246 = keyvals;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__21245,G__21246) : cljs.core.apply.call(null,G__21245,G__21246));
};
var G__21247 = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21247__delegate.call(this,keyvals);};
G__21247.cljs$lang$maxFixedArity = 0;
G__21247.cljs$lang$applyTo = (function (arglist__21248){
var keyvals = cljs.core.seq(arglist__21248);
return G__21247__delegate(keyvals);
});
G__21247.cljs$core$IFn$_invoke$arity$variadic = G__21247__delegate;
return G__21247;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$core$IFn$_invoke$arity$0 = js_obj__0;
js_obj.cljs$core$IFn$_invoke$arity$variadic = js_obj__1.cljs$core$IFn$_invoke$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){var keys = [];var G__21251_21253 = obj;var G__21252_21254 = ((function (G__21251_21253,keys){
return (function (val,key,obj__$1){return keys.push(key);
});})(G__21251_21253,keys))
;goog.object.forEach(G__21251_21253,G__21252_21254);
return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){var i__$1 = i;var j__$1 = j;var len__$1 = len;while(true){
if((len__$1 === (0)))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__21255 = (i__$1 + (1));
var G__21256 = (j__$1 + (1));
var G__21257 = (len__$1 - (1));
i__$1 = G__21255;
j__$1 = G__21256;
len__$1 = G__21257;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){var i__$1 = (i + (len - (1)));var j__$1 = (j + (len - (1)));var len__$1 = len;while(true){
if((len__$1 === (0)))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__21258 = (i__$1 - (1));
var G__21259 = (j__$1 - (1));
var G__21260 = (len__$1 - (1));
i__$1 = G__21258;
j__$1 = G__21259;
len__$1 = G__21260;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj21262 = {};return obj21262;
})();
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){if((s == null))
{return false;
} else
{var G__21264 = s;if(G__21264)
{var bit__4342__auto__ = (G__21264.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4342__auto__) || (G__21264.cljs$core$ISeq$))
{return true;
} else
{if((!G__21264.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__21264);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__21264);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){var G__21266 = s;if(G__21266)
{var bit__4342__auto__ = (G__21266.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4342__auto__) || (G__21266.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21266.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__21266);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__21266);
}
});
cljs.core.boolean$ = (function boolean$(x){if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){var or__3678__auto__ = cljs.core.fn_QMARK_(f);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var G__21270 = f;if(G__21270)
{var bit__4342__auto__ = (G__21270.cljs$lang$protocol_mask$partition0$ & (1));if((bit__4342__auto__) || (G__21270.cljs$core$IFn$))
{return true;
} else
{if((!G__21270.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__21270);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__21270);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){return (typeof n === 'number') && (cljs.core.not((function (){var G__21283 = n;return isNaN(G__21283);
})())) && (!((n === Infinity))) && (((function (){var G__21284 = n;return parseFloat(G__21284);
})() === (function (){var G__21285 = n;var G__21286 = (10);return parseInt(G__21285,G__21286);
})()));
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){if((cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){if((!((coll == null))) && (cljs.core.associative_QMARK_(coll)) && (cljs.core.contains_QMARK_(coll,k)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,k)], null);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){return true;
});
var distinct_QMARK___2 = (function (x,y){return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__21287__delegate = function (x,y,more){if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)))
{var s = cljs.core.PersistentHashSet.fromArray([x,y], true);var xs = more;while(true){
var x__$1 = cljs.core.first(xs);var etc = cljs.core.next(xs);if(cljs.core.truth_(xs))
{if(cljs.core.contains_QMARK_(s,x__$1))
{return false;
} else
{{
var G__21288 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,x__$1);
var G__21289 = etc;
s = G__21288;
xs = G__21289;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__21287 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21287__delegate.call(this,x,y,more);};
G__21287.cljs$lang$maxFixedArity = 2;
G__21287.cljs$lang$applyTo = (function (arglist__21290){
var x = cljs.core.first(arglist__21290);
arglist__21290 = cljs.core.next(arglist__21290);
var y = cljs.core.first(arglist__21290);
var more = cljs.core.rest(arglist__21290);
return G__21287__delegate(x,y,more);
});
G__21287.cljs$core$IFn$_invoke$arity$variadic = G__21287__delegate;
return G__21287;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields ()
*/
cljs.core.sequence = (function sequence(coll){if(cljs.core.seq_QMARK_(coll))
{return coll;
} else
{var or__3678__auto__ = cljs.core.seq(coll);if(or__3678__auto__)
{return or__3678__auto__;
} else
{return cljs.core.List.EMPTY;
}
}
});
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){if((x === y))
{return (0);
} else
{if((x == null))
{return (-1);
} else
{if((y == null))
{return (1);
} else
{if((cljs.core.type(x) === cljs.core.type(y)))
{if((function (){var G__21294 = x;if(G__21294)
{var bit__4335__auto__ = (G__21294.cljs$lang$protocol_mask$partition1$ & (2048));if((bit__4335__auto__) || (G__21294.cljs$core$IComparable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(null,y);
} else
{var G__21295 = x;var G__21296 = y;return goog.array.defaultCompare(G__21295,G__21296);
}
} else
{throw (new Error("compare on non-nil objects of different types"));

}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){var xl = cljs.core.count(xs);var yl = cljs.core.count(ys);if((xl < yl))
{return (-1);
} else
{if((xl > yl))
{return (1);
} else
{return compare_indexed.cljs$core$IFn$_invoke$arity$4(xs,ys,xl,(0));

}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){while(true){
var d = cljs.core.compare(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ys,n));if(((d === (0))) && (((n + (1)) < len)))
{{
var G__21301 = xs;
var G__21302 = ys;
var G__21303 = len;
var G__21304 = (n + (1));
xs = G__21301;
ys = G__21302;
len = G__21303;
n = G__21304;
continue;
}
} else
{return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$core$IFn$_invoke$arity$2 = compare_indexed__2;
compare_indexed.cljs$core$IFn$_invoke$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){var r = (function (){var G__21309 = x;var G__21310 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21309,G__21310) : f.call(null,G__21309,G__21310));
})();if(typeof r === 'number')
{return r;
} else
{if(cljs.core.truth_(r))
{return (-1);
} else
{if(cljs.core.truth_((function (){var G__21311 = y;var G__21312 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21311,G__21312) : f.call(null,G__21311,G__21312));
})()))
{return (1);
} else
{return (0);
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){return sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){if(cljs.core.seq(coll))
{var a = (function (){var G__21318 = coll;return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__21318) : cljs.core.to_array.call(null,G__21318));
})();var G__21319_21321 = a;var G__21320_21322 = cljs.core.fn__GT_comparator(comp);goog.array.stableSort(G__21319_21321,G__21320_21322);
return cljs.core.seq(a);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$core$IFn$_invoke$arity$1 = sort__1;
sort.cljs$core$IFn$_invoke$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){return sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){return cljs.core.fn__GT_comparator(comp).call(null,(function (){var G__21328 = x;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__21328) : keyfn.call(null,G__21328));
})(),(function (){var G__21329 = y;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__21329) : keyfn.call(null,G__21329));
})());
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$core$IFn$_invoke$arity$2 = sort_by__2;
sort_by.cljs$core$IFn$_invoke$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){var temp__4220__auto__ = cljs.core.seq(coll);if(temp__4220__auto__)
{var s = temp__4220__auto__;var G__21335 = f;var G__21336 = cljs.core.first(s);var G__21337 = cljs.core.next(s);return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__21335,G__21336,G__21337) : cljs.core.reduce.call(null,G__21335,G__21336,G__21337));
} else
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){var val__$1 = val;var coll__$1 = cljs.core.seq(coll);while(true){
if(coll__$1)
{var nval = (function (){var G__21338 = val__$1;var G__21339 = cljs.core.first(coll__$1);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21338,G__21339) : f.call(null,G__21338,G__21339));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__21340 = nval;
var G__21341 = cljs.core.next(coll__$1);
val__$1 = G__21340;
coll__$1 = G__21341;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$core$IFn$_invoke$arity$2 = seq_reduce__2;
seq_reduce.cljs$core$IFn$_invoke$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){var a = (function (){var G__21345 = coll;return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__21345) : cljs.core.to_array.call(null,G__21345));
})();var G__21346_21348 = a;goog.array.shuffle(G__21346_21348);
var G__21347 = a;return (cljs.core.vec.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vec.cljs$core$IFn$_invoke$arity$1(G__21347) : cljs.core.vec.call(null,G__21347));
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){if((function (){var G__21351 = coll;if(G__21351)
{var bit__4335__auto__ = (G__21351.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__4335__auto__) || (G__21351.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(null,f);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll))
{return cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll);

}
}
}
}
});
var reduce__3 = (function (f,val,coll){if((function (){var G__21352 = coll;if(G__21352)
{var bit__4335__auto__ = (G__21352.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__4335__auto__) || (G__21352.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(null,f,val);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll))
{return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,val,coll);

}
}
}
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){if(!((coll == null)))
{return cljs.core._kv_reduce(coll,f,init);
} else
{return init;
}
});
cljs.core.identity = (function identity(x){return x;
});
cljs.core.completing = (function() {
var completing = null;
var completing__1 = (function (f){return completing.cljs$core$IFn$_invoke$arity$2(f,cljs.core.identity);
});
var completing__2 = (function (f,cf){return (function() {
var G__21361 = null;
var G__21361__0 = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__21361__1 = (function (x){var G__21358 = x;return (cf.cljs$core$IFn$_invoke$arity$1 ? cf.cljs$core$IFn$_invoke$arity$1(G__21358) : cf.call(null,G__21358));
});
var G__21361__2 = (function (x,y){var G__21359 = x;var G__21360 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21359,G__21360) : f.call(null,G__21359,G__21360));
});
G__21361 = function(x,y){
switch(arguments.length){
case 0:
return G__21361__0.call(this);
case 1:
return G__21361__1.call(this,x);
case 2:
return G__21361__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21361.cljs$core$IFn$_invoke$arity$0 = G__21361__0;
G__21361.cljs$core$IFn$_invoke$arity$1 = G__21361__1;
G__21361.cljs$core$IFn$_invoke$arity$2 = G__21361__2;
return G__21361;
})()
});
completing = function(f,cf){
switch(arguments.length){
case 1:
return completing__1.call(this,f);
case 2:
return completing__2.call(this,f,cf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
completing.cljs$core$IFn$_invoke$arity$1 = completing__1;
completing.cljs$core$IFn$_invoke$arity$2 = completing__2;
return completing;
})()
;
/**
* reduce with a transformation of f (xf). If init is not
* supplied, (f) will be called to produce it. f should be a reducing
* step function that accepts both 1 and 2 arguments, if it accepts
* only 2 you can add the arity-1 with 'completing'. Returns the result
* of applying (the transformed) xf to init and the first item in coll,
* then applying xf to that result and the 2nd item, etc. If coll
* contains no items, returns init and f is not called. Note that
* certain transforms may inject or skip items.
*/
cljs.core.transduce = (function() {
var transduce = null;
var transduce__3 = (function (xform,f,coll){return transduce.cljs$core$IFn$_invoke$arity$4(xform,f,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),coll);
});
var transduce__4 = (function (xform,f,init,coll){var f__$1 = (function (){var G__21368 = f;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__21368) : xform.call(null,G__21368));
})();var ret = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f__$1,init,coll);var G__21369 = ret;return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__21369) : f__$1.call(null,G__21369));
});
transduce = function(xform,f,init,coll){
switch(arguments.length){
case 3:
return transduce__3.call(this,xform,f,init);
case 4:
return transduce__4.call(this,xform,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transduce.cljs$core$IFn$_invoke$arity$3 = transduce__3;
transduce.cljs$core$IFn$_invoke$arity$4 = transduce__4;
return transduce;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){return (0);
});
var _PLUS___1 = (function (x){return x;
});
var _PLUS___2 = (function (x,y){return (x + y);
});
var _PLUS___3 = (function() { 
var G__21370__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_PLUS_,(x + y),more);
};
var G__21370 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21370__delegate.call(this,x,y,more);};
G__21370.cljs$lang$maxFixedArity = 2;
G__21370.cljs$lang$applyTo = (function (arglist__21371){
var x = cljs.core.first(arglist__21371);
arglist__21371 = cljs.core.next(arglist__21371);
var y = cljs.core.first(arglist__21371);
var more = cljs.core.rest(arglist__21371);
return G__21370__delegate(x,y,more);
});
G__21370.cljs$core$IFn$_invoke$arity$variadic = G__21370__delegate;
return G__21370;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$core$IFn$_invoke$arity$0 = _PLUS___0;
_PLUS_.cljs$core$IFn$_invoke$arity$1 = _PLUS___1;
_PLUS_.cljs$core$IFn$_invoke$arity$2 = _PLUS___2;
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){return (- x);
});
var ___2 = (function (x,y){return (x - y);
});
var ___3 = (function() { 
var G__21372__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_,(x - y),more);
};
var G__21372 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21372__delegate.call(this,x,y,more);};
G__21372.cljs$lang$maxFixedArity = 2;
G__21372.cljs$lang$applyTo = (function (arglist__21373){
var x = cljs.core.first(arglist__21373);
arglist__21373 = cljs.core.next(arglist__21373);
var y = cljs.core.first(arglist__21373);
var more = cljs.core.rest(arglist__21373);
return G__21372__delegate(x,y,more);
});
G__21372.cljs$core$IFn$_invoke$arity$variadic = G__21372__delegate;
return G__21372;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$core$IFn$_invoke$arity$1 = ___1;
_.cljs$core$IFn$_invoke$arity$2 = ___2;
_.cljs$core$IFn$_invoke$arity$variadic = ___3.cljs$core$IFn$_invoke$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){return (1);
});
var _STAR___1 = (function (x){return x;
});
var _STAR___2 = (function (x,y){return (x * y);
});
var _STAR___3 = (function() { 
var G__21374__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,(x * y),more);
};
var G__21374 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21374__delegate.call(this,x,y,more);};
G__21374.cljs$lang$maxFixedArity = 2;
G__21374.cljs$lang$applyTo = (function (arglist__21375){
var x = cljs.core.first(arglist__21375);
arglist__21375 = cljs.core.next(arglist__21375);
var y = cljs.core.first(arglist__21375);
var more = cljs.core.rest(arglist__21375);
return G__21374__delegate(x,y,more);
});
G__21374.cljs$core$IFn$_invoke$arity$variadic = G__21374__delegate;
return G__21374;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$core$IFn$_invoke$arity$0 = _STAR___0;
_STAR_.cljs$core$IFn$_invoke$arity$1 = _STAR___1;
_STAR_.cljs$core$IFn$_invoke$arity$2 = _STAR___2;
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){return _SLASH_.cljs$core$IFn$_invoke$arity$2((1),x);
});
var _SLASH___2 = (function (x,y){return (x / y);
});
var _SLASH___3 = (function() { 
var G__21380__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_SLASH_,_SLASH_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__21380 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21380__delegate.call(this,x,y,more);};
G__21380.cljs$lang$maxFixedArity = 2;
G__21380.cljs$lang$applyTo = (function (arglist__21381){
var x = cljs.core.first(arglist__21381);
arglist__21381 = cljs.core.next(arglist__21381);
var y = cljs.core.first(arglist__21381);
var more = cljs.core.rest(arglist__21381);
return G__21380__delegate(x,y,more);
});
G__21380.cljs$core$IFn$_invoke$arity$variadic = G__21380__delegate;
return G__21380;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$core$IFn$_invoke$arity$1 = _SLASH___1;
_SLASH_.cljs$core$IFn$_invoke$arity$2 = _SLASH___2;
_SLASH_.cljs$core$IFn$_invoke$arity$variadic = _SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){return true;
});
var _LT___2 = (function (x,y){return (x < y);
});
var _LT___3 = (function() { 
var G__21382__delegate = function (x,y,more){while(true){
if((x < y))
{if(cljs.core.next(more))
{{
var G__21383 = y;
var G__21384 = cljs.core.first(more);
var G__21385 = cljs.core.next(more);
x = G__21383;
y = G__21384;
more = G__21385;
continue;
}
} else
{return (y < cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__21382 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21382__delegate.call(this,x,y,more);};
G__21382.cljs$lang$maxFixedArity = 2;
G__21382.cljs$lang$applyTo = (function (arglist__21386){
var x = cljs.core.first(arglist__21386);
arglist__21386 = cljs.core.next(arglist__21386);
var y = cljs.core.first(arglist__21386);
var more = cljs.core.rest(arglist__21386);
return G__21382__delegate(x,y,more);
});
G__21382.cljs$core$IFn$_invoke$arity$variadic = G__21382__delegate;
return G__21382;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$core$IFn$_invoke$arity$1 = _LT___1;
_LT_.cljs$core$IFn$_invoke$arity$2 = _LT___2;
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){return true;
});
var _LT__EQ___2 = (function (x,y){return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__21387__delegate = function (x,y,more){while(true){
if((x <= y))
{if(cljs.core.next(more))
{{
var G__21388 = y;
var G__21389 = cljs.core.first(more);
var G__21390 = cljs.core.next(more);
x = G__21388;
y = G__21389;
more = G__21390;
continue;
}
} else
{return (y <= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__21387 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21387__delegate.call(this,x,y,more);};
G__21387.cljs$lang$maxFixedArity = 2;
G__21387.cljs$lang$applyTo = (function (arglist__21391){
var x = cljs.core.first(arglist__21391);
arglist__21391 = cljs.core.next(arglist__21391);
var y = cljs.core.first(arglist__21391);
var more = cljs.core.rest(arglist__21391);
return G__21387__delegate(x,y,more);
});
G__21387.cljs$core$IFn$_invoke$arity$variadic = G__21387__delegate;
return G__21387;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$core$IFn$_invoke$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$core$IFn$_invoke$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){return true;
});
var _GT___2 = (function (x,y){return (x > y);
});
var _GT___3 = (function() { 
var G__21392__delegate = function (x,y,more){while(true){
if((x > y))
{if(cljs.core.next(more))
{{
var G__21393 = y;
var G__21394 = cljs.core.first(more);
var G__21395 = cljs.core.next(more);
x = G__21393;
y = G__21394;
more = G__21395;
continue;
}
} else
{return (y > cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__21392 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21392__delegate.call(this,x,y,more);};
G__21392.cljs$lang$maxFixedArity = 2;
G__21392.cljs$lang$applyTo = (function (arglist__21396){
var x = cljs.core.first(arglist__21396);
arglist__21396 = cljs.core.next(arglist__21396);
var y = cljs.core.first(arglist__21396);
var more = cljs.core.rest(arglist__21396);
return G__21392__delegate(x,y,more);
});
G__21392.cljs$core$IFn$_invoke$arity$variadic = G__21392__delegate;
return G__21392;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$core$IFn$_invoke$arity$1 = _GT___1;
_GT_.cljs$core$IFn$_invoke$arity$2 = _GT___2;
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){return true;
});
var _GT__EQ___2 = (function (x,y){return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__21397__delegate = function (x,y,more){while(true){
if((x >= y))
{if(cljs.core.next(more))
{{
var G__21398 = y;
var G__21399 = cljs.core.first(more);
var G__21400 = cljs.core.next(more);
x = G__21398;
y = G__21399;
more = G__21400;
continue;
}
} else
{return (y >= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__21397 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21397__delegate.call(this,x,y,more);};
G__21397.cljs$lang$maxFixedArity = 2;
G__21397.cljs$lang$applyTo = (function (arglist__21401){
var x = cljs.core.first(arglist__21401);
arglist__21401 = cljs.core.next(arglist__21401);
var y = cljs.core.first(arglist__21401);
var more = cljs.core.rest(arglist__21401);
return G__21397__delegate(x,y,more);
});
G__21397.cljs$core$IFn$_invoke$arity$variadic = G__21397__delegate;
return G__21397;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$core$IFn$_invoke$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$core$IFn$_invoke$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){return (x - (1));
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){return x;
});
var max__2 = (function (x,y){var x__3985__auto__ = x;var y__3986__auto__ = y;return ((x__3985__auto__ > y__3986__auto__) ? x__3985__auto__ : y__3986__auto__);
});
var max__3 = (function() { 
var G__21402__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(max,(function (){var x__3985__auto__ = x;var y__3986__auto__ = y;return ((x__3985__auto__ > y__3986__auto__) ? x__3985__auto__ : y__3986__auto__);
})(),more);
};
var G__21402 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21402__delegate.call(this,x,y,more);};
G__21402.cljs$lang$maxFixedArity = 2;
G__21402.cljs$lang$applyTo = (function (arglist__21403){
var x = cljs.core.first(arglist__21403);
arglist__21403 = cljs.core.next(arglist__21403);
var y = cljs.core.first(arglist__21403);
var more = cljs.core.rest(arglist__21403);
return G__21402__delegate(x,y,more);
});
G__21402.cljs$core$IFn$_invoke$arity$variadic = G__21402__delegate;
return G__21402;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$core$IFn$_invoke$arity$1 = max__1;
max.cljs$core$IFn$_invoke$arity$2 = max__2;
max.cljs$core$IFn$_invoke$arity$variadic = max__3.cljs$core$IFn$_invoke$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){return x;
});
var min__2 = (function (x,y){var x__3992__auto__ = x;var y__3993__auto__ = y;return ((x__3992__auto__ < y__3993__auto__) ? x__3992__auto__ : y__3993__auto__);
});
var min__3 = (function() { 
var G__21404__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(min,(function (){var x__3992__auto__ = x;var y__3993__auto__ = y;return ((x__3992__auto__ < y__3993__auto__) ? x__3992__auto__ : y__3993__auto__);
})(),more);
};
var G__21404 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21404__delegate.call(this,x,y,more);};
G__21404.cljs$lang$maxFixedArity = 2;
G__21404.cljs$lang$applyTo = (function (arglist__21405){
var x = cljs.core.first(arglist__21405);
arglist__21405 = cljs.core.next(arglist__21405);
var y = cljs.core.first(arglist__21405);
var more = cljs.core.rest(arglist__21405);
return G__21404__delegate(x,y,more);
});
G__21404.cljs$core$IFn$_invoke$arity$variadic = G__21404__delegate;
return G__21404;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$core$IFn$_invoke$arity$1 = min__1;
min.cljs$core$IFn$_invoke$arity$2 = min__2;
min.cljs$core$IFn$_invoke$arity$variadic = min__3.cljs$core$IFn$_invoke$arity$variadic;
return min;
})()
;
cljs.core.byte$ = (function byte$(x){return x;
});
/**
* Coerce to char
*/
cljs.core.char$ = (function char$(x){if(typeof x === 'number')
{return String.fromCharCode(x);
} else
{if((typeof x === 'string') && ((x.length === (1))))
{return x;
} else
{throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.core.short$ = (function short$(x){return x;
});
cljs.core.float$ = (function float$(x){return x;
});
cljs.core.double$ = (function double$(x){return x;
});
cljs.core.unchecked_byte = (function unchecked_byte(x){return x;
});
cljs.core.unchecked_char = (function unchecked_char(x){return x;
});
cljs.core.unchecked_short = (function unchecked_short(x){return x;
});
cljs.core.unchecked_float = (function unchecked_float(x){return x;
});
cljs.core.unchecked_double = (function unchecked_double(x){return x;
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add = (function() {
var unchecked_add = null;
var unchecked_add__0 = (function (){return (0);
});
var unchecked_add__1 = (function (x){return x;
});
var unchecked_add__2 = (function (x,y){return (x + y);
});
var unchecked_add__3 = (function() { 
var G__21406__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add,(x + y),more);
};
var G__21406 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21406__delegate.call(this,x,y,more);};
G__21406.cljs$lang$maxFixedArity = 2;
G__21406.cljs$lang$applyTo = (function (arglist__21407){
var x = cljs.core.first(arglist__21407);
arglist__21407 = cljs.core.next(arglist__21407);
var y = cljs.core.first(arglist__21407);
var more = cljs.core.rest(arglist__21407);
return G__21406__delegate(x,y,more);
});
G__21406.cljs$core$IFn$_invoke$arity$variadic = G__21406__delegate;
return G__21406;
})()
;
unchecked_add = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add__0.call(this);
case 1:
return unchecked_add__1.call(this,x);
case 2:
return unchecked_add__2.call(this,x,y);
default:
return unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add.cljs$lang$maxFixedArity = 2;
unchecked_add.cljs$lang$applyTo = unchecked_add__3.cljs$lang$applyTo;
unchecked_add.cljs$core$IFn$_invoke$arity$0 = unchecked_add__0;
unchecked_add.cljs$core$IFn$_invoke$arity$1 = unchecked_add__1;
unchecked_add.cljs$core$IFn$_invoke$arity$2 = unchecked_add__2;
unchecked_add.cljs$core$IFn$_invoke$arity$variadic = unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add_int = (function() {
var unchecked_add_int = null;
var unchecked_add_int__0 = (function (){return (0);
});
var unchecked_add_int__1 = (function (x){return x;
});
var unchecked_add_int__2 = (function (x,y){return (x + y);
});
var unchecked_add_int__3 = (function() { 
var G__21408__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add_int,(x + y),more);
};
var G__21408 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21408__delegate.call(this,x,y,more);};
G__21408.cljs$lang$maxFixedArity = 2;
G__21408.cljs$lang$applyTo = (function (arglist__21409){
var x = cljs.core.first(arglist__21409);
arglist__21409 = cljs.core.next(arglist__21409);
var y = cljs.core.first(arglist__21409);
var more = cljs.core.rest(arglist__21409);
return G__21408__delegate(x,y,more);
});
G__21408.cljs$core$IFn$_invoke$arity$variadic = G__21408__delegate;
return G__21408;
})()
;
unchecked_add_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add_int__0.call(this);
case 1:
return unchecked_add_int__1.call(this,x);
case 2:
return unchecked_add_int__2.call(this,x,y);
default:
return unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add_int.cljs$lang$maxFixedArity = 2;
unchecked_add_int.cljs$lang$applyTo = unchecked_add_int__3.cljs$lang$applyTo;
unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = unchecked_add_int__0;
unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = unchecked_add_int__1;
unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = unchecked_add_int__2;
unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add_int;
})()
;
cljs.core.unchecked_dec = (function unchecked_dec(x){return (x - (1));
});
cljs.core.unchecked_dec_int = (function unchecked_dec_int(x){return (x - (1));
});
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core.unchecked_divide_int = (function() {
var unchecked_divide_int = null;
var unchecked_divide_int__1 = (function (x){return unchecked_divide_int.cljs$core$IFn$_invoke$arity$2((1),x);
});
var unchecked_divide_int__2 = (function (x,y){return (x / y);
});
var unchecked_divide_int__3 = (function() { 
var G__21414__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_divide_int,unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__21414 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21414__delegate.call(this,x,y,more);};
G__21414.cljs$lang$maxFixedArity = 2;
G__21414.cljs$lang$applyTo = (function (arglist__21415){
var x = cljs.core.first(arglist__21415);
arglist__21415 = cljs.core.next(arglist__21415);
var y = cljs.core.first(arglist__21415);
var more = cljs.core.rest(arglist__21415);
return G__21414__delegate(x,y,more);
});
G__21414.cljs$core$IFn$_invoke$arity$variadic = G__21414__delegate;
return G__21414;
})()
;
unchecked_divide_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_divide_int__1.call(this,x);
case 2:
return unchecked_divide_int__2.call(this,x,y);
default:
return unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_divide_int.cljs$lang$maxFixedArity = 2;
unchecked_divide_int.cljs$lang$applyTo = unchecked_divide_int__3.cljs$lang$applyTo;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = unchecked_divide_int__1;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = unchecked_divide_int__2;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_divide_int;
})()
;
cljs.core.unchecked_inc = (function unchecked_inc(x){return (x + (1));
});
cljs.core.unchecked_inc_int = (function unchecked_inc_int(x){return (x + (1));
});
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply = (function() {
var unchecked_multiply = null;
var unchecked_multiply__0 = (function (){return (1);
});
var unchecked_multiply__1 = (function (x){return x;
});
var unchecked_multiply__2 = (function (x,y){return (x * y);
});
var unchecked_multiply__3 = (function() { 
var G__21416__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply,(x * y),more);
};
var G__21416 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21416__delegate.call(this,x,y,more);};
G__21416.cljs$lang$maxFixedArity = 2;
G__21416.cljs$lang$applyTo = (function (arglist__21417){
var x = cljs.core.first(arglist__21417);
arglist__21417 = cljs.core.next(arglist__21417);
var y = cljs.core.first(arglist__21417);
var more = cljs.core.rest(arglist__21417);
return G__21416__delegate(x,y,more);
});
G__21416.cljs$core$IFn$_invoke$arity$variadic = G__21416__delegate;
return G__21416;
})()
;
unchecked_multiply = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply__0.call(this);
case 1:
return unchecked_multiply__1.call(this,x);
case 2:
return unchecked_multiply__2.call(this,x,y);
default:
return unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply.cljs$lang$maxFixedArity = 2;
unchecked_multiply.cljs$lang$applyTo = unchecked_multiply__3.cljs$lang$applyTo;
unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply__0;
unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply__1;
unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply__2;
unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply_int = (function() {
var unchecked_multiply_int = null;
var unchecked_multiply_int__0 = (function (){return (1);
});
var unchecked_multiply_int__1 = (function (x){return x;
});
var unchecked_multiply_int__2 = (function (x,y){return (x * y);
});
var unchecked_multiply_int__3 = (function() { 
var G__21418__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply_int,(x * y),more);
};
var G__21418 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21418__delegate.call(this,x,y,more);};
G__21418.cljs$lang$maxFixedArity = 2;
G__21418.cljs$lang$applyTo = (function (arglist__21419){
var x = cljs.core.first(arglist__21419);
arglist__21419 = cljs.core.next(arglist__21419);
var y = cljs.core.first(arglist__21419);
var more = cljs.core.rest(arglist__21419);
return G__21418__delegate(x,y,more);
});
G__21418.cljs$core$IFn$_invoke$arity$variadic = G__21418__delegate;
return G__21418;
})()
;
unchecked_multiply_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply_int__0.call(this);
case 1:
return unchecked_multiply_int__1.call(this,x);
case 2:
return unchecked_multiply_int__2.call(this,x,y);
default:
return unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
unchecked_multiply_int.cljs$lang$applyTo = unchecked_multiply_int__3.cljs$lang$applyTo;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply_int__0;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply_int__1;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply_int__2;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply_int;
})()
;
cljs.core.unchecked_negate = (function unchecked_negate(x){return (- x);
});
cljs.core.unchecked_negate_int = (function unchecked_negate_int(x){return (- x);
});
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){var G__21422 = x;var G__21423 = n;return (cljs.core.mod.cljs$core$IFn$_invoke$arity$2 ? cljs.core.mod.cljs$core$IFn$_invoke$arity$2(G__21422,G__21423) : cljs.core.mod.call(null,G__21422,G__21423));
});
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract = (function() {
var unchecked_subtract = null;
var unchecked_subtract__1 = (function (x){return (- x);
});
var unchecked_subtract__2 = (function (x,y){return (x - y);
});
var unchecked_subtract__3 = (function() { 
var G__21424__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract,(x - y),more);
};
var G__21424 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21424__delegate.call(this,x,y,more);};
G__21424.cljs$lang$maxFixedArity = 2;
G__21424.cljs$lang$applyTo = (function (arglist__21425){
var x = cljs.core.first(arglist__21425);
arglist__21425 = cljs.core.next(arglist__21425);
var y = cljs.core.first(arglist__21425);
var more = cljs.core.rest(arglist__21425);
return G__21424__delegate(x,y,more);
});
G__21424.cljs$core$IFn$_invoke$arity$variadic = G__21424__delegate;
return G__21424;
})()
;
unchecked_subtract = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract__1.call(this,x);
case 2:
return unchecked_subtract__2.call(this,x,y);
default:
return unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract.cljs$lang$maxFixedArity = 2;
unchecked_subtract.cljs$lang$applyTo = unchecked_subtract__3.cljs$lang$applyTo;
unchecked_subtract.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract__1;
unchecked_subtract.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract__2;
unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract_int = (function() {
var unchecked_subtract_int = null;
var unchecked_subtract_int__1 = (function (x){return (- x);
});
var unchecked_subtract_int__2 = (function (x,y){return (x - y);
});
var unchecked_subtract_int__3 = (function() { 
var G__21426__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract_int,(x - y),more);
};
var G__21426 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21426__delegate.call(this,x,y,more);};
G__21426.cljs$lang$maxFixedArity = 2;
G__21426.cljs$lang$applyTo = (function (arglist__21427){
var x = cljs.core.first(arglist__21427);
arglist__21427 = cljs.core.next(arglist__21427);
var y = cljs.core.first(arglist__21427);
var more = cljs.core.rest(arglist__21427);
return G__21426__delegate(x,y,more);
});
G__21426.cljs$core$IFn$_invoke$arity$variadic = G__21426__delegate;
return G__21426;
})()
;
unchecked_subtract_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract_int__1.call(this,x);
case 2:
return unchecked_subtract_int__2.call(this,x,y);
default:
return unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract_int.cljs$lang$maxFixedArity = 2;
unchecked_subtract_int.cljs$lang$applyTo = unchecked_subtract_int__3.cljs$lang$applyTo;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract_int__1;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract_int__2;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract_int;
})()
;
cljs.core.fix = (function fix(q){if((q >= (0)))
{var G__21430 = q;return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__21430) : Math.floor.call(null,G__21430));
} else
{var G__21431 = q;return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__21431) : Math.ceil.call(null,G__21431));
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){return (x | (0));
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.unchecked_int = (function unchecked_int(x){return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.unchecked_long = (function unchecked_long(x){return cljs.core.fix(x);
});
cljs.core.booleans = (function booleans(x){return x;
});
cljs.core.bytes = (function bytes(x){return x;
});
cljs.core.chars = (function chars(x){return x;
});
cljs.core.shorts = (function shorts(x){return x;
});
cljs.core.ints = (function ints(x){return x;
});
cljs.core.floats = (function floats(x){return x;
});
cljs.core.doubles = (function doubles(x){return x;
});
cljs.core.longs = (function longs(x){return x;
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljs.core.js_mod = (function js_mod(n,d){return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){var rem = (n % d);return cljs.core.fix(((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){var q = cljs.core.quot(n,d);return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
});
var rand__1 = (function (n){return (n * rand.cljs$core$IFn$_invoke$arity$0());
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){return cljs.core.fix(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){return (x >> n);
});
/**
* DEPRECATED: Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){return (x >>> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.unsigned_bit_shift_right = (function unsigned_bit_shift_right(x,n){return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){var v__$1 = (v - ((v >> (1)) & (1431655765)));var v__$2 = ((v__$1 & (858993459)) + ((v__$1 >> (2)) & (858993459)));return ((((v__$2 + (v__$2 >> (4))) & (252645135)) * (16843009)) >> (24));
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){return true;
});
var _EQ__EQ___2 = (function (x,y){return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__21436__delegate = function (x,y,more){while(true){
if(_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{if(cljs.core.next(more))
{{
var G__21437 = y;
var G__21438 = cljs.core.first(more);
var G__21439 = cljs.core.next(more);
x = G__21437;
y = G__21438;
more = G__21439;
continue;
}
} else
{return _EQ__EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__21436 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21436__delegate.call(this,x,y,more);};
G__21436.cljs$lang$maxFixedArity = 2;
G__21436.cljs$lang$applyTo = (function (arglist__21440){
var x = cljs.core.first(arglist__21440);
arglist__21440 = cljs.core.next(arglist__21440);
var y = cljs.core.first(arglist__21440);
var more = cljs.core.rest(arglist__21440);
return G__21436__delegate(x,y,more);
});
G__21436.cljs$core$IFn$_invoke$arity$variadic = G__21436__delegate;
return G__21436;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){return (n > (0));
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){return (n === (0));
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){return (x < (0));
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){var n__$1 = n;var xs = cljs.core.seq(coll);while(true){
if((xs) && ((n__$1 > (0))))
{{
var G__21441 = (n__$1 - (1));
var G__21442 = cljs.core.next(xs);
n__$1 = G__21441;
xs = G__21442;
continue;
}
} else
{return xs;
}
break;
}
});
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){return "";
});
var str__1 = (function (x){if((x == null))
{return "";
} else
{return ''+x;
}
});
var str__2 = (function() { 
var G__21445__delegate = function (x,ys){var sb = (new goog.string.StringBuffer(str.cljs$core$IFn$_invoke$arity$1(x)));var more = ys;while(true){
if(cljs.core.truth_(more))
{{
var G__21446 = sb.append(str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)));
var G__21447 = cljs.core.next(more);
sb = G__21446;
more = G__21447;
continue;
}
} else
{return sb.toString();
}
break;
}
};
var G__21445 = function (x,var_args){
var ys = null;if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__21445__delegate.call(this,x,ys);};
G__21445.cljs$lang$maxFixedArity = 1;
G__21445.cljs$lang$applyTo = (function (arglist__21448){
var x = cljs.core.first(arglist__21448);
var ys = cljs.core.rest(arglist__21448);
return G__21445__delegate(x,ys);
});
G__21445.cljs$core$IFn$_invoke$arity$variadic = G__21445__delegate;
return G__21445;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$core$IFn$_invoke$arity$0 = str__0;
str.cljs$core$IFn$_invoke$arity$1 = str__1;
str.cljs$core$IFn$_invoke$arity$variadic = str__2.cljs$core$IFn$_invoke$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){return s.substring(start);
});
var subs__3 = (function (s,start,end){return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$core$IFn$_invoke$arity$2 = subs__2;
subs.cljs$core$IFn$_invoke$arity$3 = subs__3;
return subs;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(((cljs.core.counted_QMARK_(x)) && (cljs.core.counted_QMARK_(y)) && (!((cljs.core.count(x) === cljs.core.count(y)))))?false:(function (){var xs = cljs.core.seq(x);var ys = cljs.core.seq(y);while(true){
if((xs == null))
{return (ys == null);
} else
{if((ys == null))
{return false;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys)))
{{
var G__21449 = cljs.core.next(xs);
var G__21450 = cljs.core.next(ys);
xs = G__21449;
ys = G__21450;
continue;
}
} else
{return false;

}
}
}
break;
}
})()):null));
});
cljs.core.hash_coll = (function hash_coll(coll){if(cljs.core.seq(coll))
{var res = cljs.core.hash(cljs.core.first(coll));var s = cljs.core.next(coll);while(true){
if((s == null))
{return res;
} else
{{
var G__21451 = cljs.core.hash_combine(res,cljs.core.hash(cljs.core.first(s)));
var G__21452 = cljs.core.next(s);
res = G__21451;
s = G__21452;
continue;
}
}
break;
}
} else
{return (0);
}
});
cljs.core.hash_imap = (function hash_imap(m){var h = (0);var s = cljs.core.seq(m);while(true){
if(s)
{var e = cljs.core.first(s);{
var G__21457 = ((h + (cljs.core.hash((function (){var G__21455 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__21455) : cljs.core.key.call(null,G__21455));
})()) ^ cljs.core.hash((function (){var G__21456 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__21456) : cljs.core.val.call(null,G__21456));
})()))) % (4503599627370496));
var G__21458 = cljs.core.next(s);
h = G__21457;
s = G__21458;
continue;
}
} else
{return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){var h = (0);var s__$1 = cljs.core.seq(s);while(true){
if(s__$1)
{var e = cljs.core.first(s__$1);{
var G__21459 = ((h + cljs.core.hash(e)) % (4503599627370496));
var G__21460 = cljs.core.next(s__$1);
h = G__21459;
s__$1 = G__21460;
continue;
}
} else
{return h;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){var seq__21471_21481 = cljs.core.seq(fn_map);var chunk__21472_21482 = null;var count__21473_21483 = (0);var i__21474_21484 = (0);while(true){
if((i__21474_21484 < count__21473_21483))
{var vec__21475_21485 = chunk__21472_21482.cljs$core$IIndexed$_nth$arity$2(null,i__21474_21484);var key_name_21486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21475_21485,(0),null);var f_21487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21475_21485,(1),null);var str_name_21488 = (function (){var G__21476 = key_name_21486;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__21476) : cljs.core.name.call(null,G__21476));
})();(obj[str_name_21488] = f_21487);
{
var G__21489 = seq__21471_21481;
var G__21490 = chunk__21472_21482;
var G__21491 = count__21473_21483;
var G__21492 = (i__21474_21484 + (1));
seq__21471_21481 = G__21489;
chunk__21472_21482 = G__21490;
count__21473_21483 = G__21491;
i__21474_21484 = G__21492;
continue;
}
} else
{var temp__4222__auto___21493 = cljs.core.seq(seq__21471_21481);if(temp__4222__auto___21493)
{var seq__21471_21494__$1 = temp__4222__auto___21493;if(cljs.core.chunked_seq_QMARK_(seq__21471_21494__$1))
{var c__4448__auto___21495 = (function (){var G__21477 = seq__21471_21494__$1;return (cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1(G__21477) : cljs.core.chunk_first.call(null,G__21477));
})();{
var G__21496 = (function (){var G__21478 = seq__21471_21494__$1;return (cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1(G__21478) : cljs.core.chunk_rest.call(null,G__21478));
})();
var G__21497 = c__4448__auto___21495;
var G__21498 = cljs.core.count(c__4448__auto___21495);
var G__21499 = (0);
seq__21471_21481 = G__21496;
chunk__21472_21482 = G__21497;
count__21473_21483 = G__21498;
i__21474_21484 = G__21499;
continue;
}
} else
{var vec__21479_21500 = cljs.core.first(seq__21471_21494__$1);var key_name_21501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21479_21500,(0),null);var f_21502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21479_21500,(1),null);var str_name_21503 = (function (){var G__21480 = key_name_21501;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__21480) : cljs.core.name.call(null,G__21480));
})();(obj[str_name_21503] = f_21502);
{
var G__21504 = cljs.core.next(seq__21471_21494__$1);
var G__21505 = null;
var G__21506 = (0);
var G__21507 = (0);
seq__21471_21481 = G__21504;
chunk__21472_21482 = G__21505;
count__21473_21483 = G__21506;
i__21474_21484 = G__21507;
continue;
}
}
} else
{}
}
break;
}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65937646;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/List");
});
cljs.core.List.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.List.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === (1)))
{return null;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._rest(coll__$1);
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === (1)))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,coll__$1,(self__.count + (1)),null));
});
cljs.core.__GT_List = (function __GT_List(meta,first,rest,count,__hash){return (new cljs.core.List(meta,first,rest,count,__hash));
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 65937614;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.EmptyList.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.EmptyList(self__.meta));
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (0);
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (0);
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.EmptyList(meta__$1));
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,null,(1),null));
});
cljs.core.__GT_EmptyList = (function __GT_EmptyList(meta){return (new cljs.core.EmptyList(meta));
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){var G__21509 = coll;if(G__21509)
{var bit__4342__auto__ = (G__21509.cljs$lang$protocol_mask$partition0$ & (134217728));if((bit__4342__auto__) || (G__21509.cljs$core$IReversible$))
{return true;
} else
{if((!G__21509.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__21509);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__21509);
}
});
cljs.core.rseq = (function rseq(coll){return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){if(cljs.core.reversible_QMARK_(coll))
{return cljs.core.rseq(coll);
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (xs){var arr = ((((xs instanceof cljs.core.IndexedSeq)) && ((xs.i === (0))))?xs.arr:(function (){var arr = [];var xs__$1 = xs;while(true){
if(!((xs__$1 == null)))
{arr.push(xs__$1.cljs$core$ISeq$_first$arity$1(null));
{
var G__21510 = xs__$1.cljs$core$INext$_next$arity$1(null);
xs__$1 = G__21510;
continue;
}
} else
{return arr;
}
break;
}
})());var i = arr.length;var r = cljs.core.List.EMPTY;while(true){
if((i > (0)))
{{
var G__21511 = (i - (1));
var G__21512 = r.cljs$core$ICollection$_conj$arity$2(null,(arr[(i - (1))]));
i = G__21511;
r = G__21512;
continue;
}
} else
{return r;
}
break;
}
};
var list = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return list__delegate.call(this,xs);};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__21513){
var xs = cljs.core.seq(arglist__21513);
return list__delegate(xs);
});
list.cljs$core$IFn$_invoke$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65929452;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Cons.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return null;
} else
{return cljs.core.seq(self__.rest);
}
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});
cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){return (new cljs.core.Cons(meta,first,rest,__hash));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){if((function (){var or__3678__auto__ = (coll == null);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var G__21517 = coll;if(G__21517)
{var bit__4335__auto__ = (G__21517.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4335__auto__) || (G__21517.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){var G__21519 = x;if(G__21519)
{var bit__4342__auto__ = (G__21519.cljs$lang$protocol_mask$partition0$ & (33554432));if((bit__4342__auto__) || (G__21519.cljs$core$IList$))
{return true;
} else
{if((!G__21519.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__21519);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__21519);
}
});
cljs.core.hash_keyword = (function hash_keyword(k){return ((cljs.core.hash_symbol(k) + (2654435769)) | (0));
});

/**
* @constructor
*/
cljs.core.Keyword = (function (ns,name,fqn,_hash){
this.ns = ns;
this.name = name;
this.fqn = fqn;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775105;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorStr = "cljs.core/Keyword";
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write(writer,(":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fqn)));
});
cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__4089__auto__ = self__._hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_keyword(this$__$1);self__._hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.Keyword.prototype.call = (function() {
var G__21521 = null;
var G__21521__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
var G__21521__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
G__21521 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__21521__2.call(this,self__,coll);
case 3:
return G__21521__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21521.cljs$core$IFn$_invoke$arity$2 = G__21521__2;
G__21521.cljs$core$IFn$_invoke$arity$3 = G__21521__3;
return G__21521;
})()
;
cljs.core.Keyword.prototype.apply = (function (self__,args21520){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21520)));
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var kw = this;return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var kw = this;return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Keyword))
{return (self__.fqn === other.fqn);
} else
{return false;
}
});
cljs.core.Keyword.prototype.toString = (function (){var self__ = this;
var _ = this;return (":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fqn));
});
cljs.core.Keyword.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_Keyword = (function __GT_Keyword(ns,name,fqn,_hash){return (new cljs.core.Keyword(ns,name,fqn,_hash));
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){return (x instanceof cljs.core.Keyword);
});
cljs.core.keyword_identical_QMARK_ = (function keyword_identical_QMARK_(x,y){if((x === y))
{return true;
} else
{if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword)))
{return (x.fqn === y.fqn);
} else
{return false;
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){if((function (){var G__21523 = x;if(G__21523)
{var bit__4335__auto__ = (G__21523.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__4335__auto__) || (G__21523.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(null);
} else
{throw (new Error(("Doesn't support namespace: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
}
});
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){if((name instanceof cljs.core.Keyword))
{return name;
} else
{if((name instanceof cljs.core.Symbol))
{return (new cljs.core.Keyword(cljs.core.namespace(name),(function (){var G__21525 = name;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__21525) : cljs.core.name.call(null,G__21525));
})(),name.str,null));
} else
{if(typeof name === 'string')
{var parts = name.split("/");if((parts.length === (2)))
{return (new cljs.core.Keyword((parts[(0)]),(parts[(1)]),name,null));
} else
{return (new cljs.core.Keyword(null,(parts[(0)]),name,null));
}
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){return (new cljs.core.Keyword(ns,name,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),null));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$core$IFn$_invoke$arity$1 = keyword__1;
keyword.cljs$core$IFn$_invoke$arity$2 = keyword__2;
return keyword;
})()
;

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,fn,s,__hash){
this.meta = meta;
this.fn = fn;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorStr = "cljs.core/LazySeq";
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.LazySeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.LazySeq.prototype.sval = (function (){var self__ = this;
var coll = this;if((self__.fn == null))
{return self__.s;
} else
{self__.s = (function (){return (self__.fn.cljs$core$IFn$_invoke$arity$0 ? self__.fn.cljs$core$IFn$_invoke$arity$0() : self__.fn.call(null));
})();
self__.fn = null;
return self__.s;
}
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.next(self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.first(self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if(!((self__.s == null)))
{return cljs.core.rest(self__.s);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;coll__$1.sval();
if((self__.s == null))
{return null;
} else
{var ls = self__.s;while(true){
if((ls instanceof cljs.core.LazySeq))
{{
var G__21526 = ls.sval();
ls = G__21526;
continue;
}
} else
{self__.s = ls;
return cljs.core.seq(self__.s);
}
break;
}
}
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_LazySeq = (function __GT_LazySeq(meta,fn,s,__hash){return (new cljs.core.LazySeq(meta,fn,s,__hash));
});

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorStr = "cljs.core/ChunkBuffer";
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){var self__ = this;
var _ = this;(self__.buf[self__.end] = o);
return self__.end = (self__.end + (1));
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){var self__ = this;
var _ = this;var ret = (new cljs.core.ArrayChunk(self__.buf,(0),self__.end));self__.buf = null;
return ret;
});
cljs.core.__GT_ChunkBuffer = (function __GT_ChunkBuffer(buf,end){return (new cljs.core.ChunkBuffer(buf,end));
});
cljs.core.chunk_buffer = (function chunk_buffer(capacity){return (new cljs.core.ChunkBuffer((new Array(capacity)),(0)));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorStr = "cljs.core/ArrayChunk";
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.off]),(self__.off + (1)));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.off === self__.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){var self__ = this;
var coll__$1 = this;return (self__.arr[(self__.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){var self__ = this;
var coll__$1 = this;if(((i >= (0))) && ((i < (self__.end - self__.off))))
{return (self__.arr[(self__.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.end - self__.off);
});
cljs.core.__GT_ArrayChunk = (function __GT_ArrayChunk(arr,off,end){return (new cljs.core.ArrayChunk(arr,off,end));
});
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){return (new cljs.core.ArrayChunk(arr,(0),arr.length));
});
var array_chunk__2 = (function (arr,off){return (new cljs.core.ArrayChunk(arr,off,arr.length));
});
var array_chunk__3 = (function (arr,off,end){return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$core$IFn$_invoke$arity$1 = array_chunk__1;
array_chunk.cljs$core$IFn$_invoke$arity$2 = array_chunk__2;
array_chunk.cljs$core$IFn$_invoke$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850732;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorStr = "cljs.core/ChunkedCons";
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ChunkedCons.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count(self__.chunk) > (1)))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else
{var more__$1 = cljs.core._seq(self__.more);if((more__$1 == null))
{return null;
} else
{return more__$1;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.chunk,(0));
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count(self__.chunk) > (1)))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else
{if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return cljs.core.cons(o,this$__$1);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.more == null))
{return null;
} else
{return self__.more;
}
});
cljs.core.__GT_ChunkedCons = (function __GT_ChunkedCons(chunk,more,meta,__hash){return (new cljs.core.ChunkedCons(chunk,more,meta,__hash));
});
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){if((cljs.core._count(chunk) === (0)))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){return b.add(x);
});
cljs.core.chunk = (function chunk(b){return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){if((function (){var G__21528 = s;if(G__21528)
{var bit__4335__auto__ = (G__21528.cljs$lang$protocol_mask$partition1$ & (1024));if((bit__4335__auto__) || (G__21528.cljs$core$IChunkedNext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._chunked_next(s);
} else
{return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){var ary = [];var s__$1 = s;while(true){
if(cljs.core.seq(s__$1))
{ary.push(cljs.core.first(s__$1));
{
var G__21529 = cljs.core.next(s__$1);
s__$1 = G__21529;
continue;
}
} else
{return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){var ret = (new Array(cljs.core.count(coll)));var i_21530 = (0);var xs_21531 = cljs.core.seq(coll);while(true){
if(xs_21531)
{(ret[i_21530] = cljs.core.to_array(cljs.core.first(xs_21531)));
{
var G__21532 = (i_21530 + (1));
var G__21533 = cljs.core.next(xs_21531);
i_21530 = G__21532;
xs_21531 = G__21533;
continue;
}
} else
{}
break;
}
return ret;
});
cljs.core.int_array = (function() {
var int_array = null;
var int_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return int_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var int_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__21536 = (i + (1));
var G__21537 = cljs.core.next(s__$1);
i = G__21536;
s__$1 = G__21537;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4548__auto___21538 = size;var i_21539 = (0);while(true){
if((i_21539 < n__4548__auto___21538))
{(a[i_21539] = init_val_or_seq);
{
var G__21540 = (i_21539 + (1));
i_21539 = G__21540;
continue;
}
} else
{}
break;
}
return a;
}
});
int_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return int_array__1.call(this,size);
case 2:
return int_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
int_array.cljs$core$IFn$_invoke$arity$1 = int_array__1;
int_array.cljs$core$IFn$_invoke$arity$2 = int_array__2;
return int_array;
})()
;
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return long_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var long_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__21543 = (i + (1));
var G__21544 = cljs.core.next(s__$1);
i = G__21543;
s__$1 = G__21544;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4548__auto___21545 = size;var i_21546 = (0);while(true){
if((i_21546 < n__4548__auto___21545))
{(a[i_21546] = init_val_or_seq);
{
var G__21547 = (i_21546 + (1));
i_21546 = G__21547;
continue;
}
} else
{}
break;
}
return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$core$IFn$_invoke$arity$1 = long_array__1;
long_array.cljs$core$IFn$_invoke$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return double_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var double_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__21550 = (i + (1));
var G__21551 = cljs.core.next(s__$1);
i = G__21550;
s__$1 = G__21551;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4548__auto___21552 = size;var i_21553 = (0);while(true){
if((i_21553 < n__4548__auto___21552))
{(a[i_21553] = init_val_or_seq);
{
var G__21554 = (i_21553 + (1));
i_21553 = G__21554;
continue;
}
} else
{}
break;
}
return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$core$IFn$_invoke$arity$1 = double_array__1;
double_array.cljs$core$IFn$_invoke$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return object_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var object_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__21557 = (i + (1));
var G__21558 = cljs.core.next(s__$1);
i = G__21557;
s__$1 = G__21558;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4548__auto___21559 = size;var i_21560 = (0);while(true){
if((i_21560 < n__4548__auto___21559))
{(a[i_21560] = init_val_or_seq);
{
var G__21561 = (i_21560 + (1));
i_21560 = G__21561;
continue;
}
} else
{}
break;
}
return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$core$IFn$_invoke$arity$1 = object_array__1;
object_array.cljs$core$IFn$_invoke$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){if(cljs.core.counted_QMARK_(s))
{return cljs.core.count(s);
} else
{var s__$1 = s;var i = n;var sum = (0);while(true){
if(((i > (0))) && (cljs.core.seq(s__$1)))
{{
var G__21562 = cljs.core.next(s__$1);
var G__21563 = (i - (1));
var G__21564 = (sum + (1));
s__$1 = G__21562;
i = G__21563;
sum = G__21564;
continue;
}
} else
{return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){if((arglist == null))
{return null;
} else
{if((cljs.core.next(arglist) == null))
{return cljs.core.seq(cljs.core.first(arglist));
} else
{return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));

}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){return (new cljs.core.LazySeq(null,(function (){return null;
}),null,null));
});
var concat__1 = (function (x){return (new cljs.core.LazySeq(null,(function (){return x;
}),null,null));
});
var concat__2 = (function (x,y){return (new cljs.core.LazySeq(null,(function (){var s = cljs.core.seq(x);if(s)
{if(cljs.core.chunked_seq_QMARK_(s))
{return cljs.core.chunk_cons(cljs.core.chunk_first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.chunk_rest(s),y));
} else
{return cljs.core.cons(cljs.core.first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s),y));
}
} else
{return y;
}
}),null,null));
});
var concat__3 = (function() { 
var G__21584__delegate = function (x,y,zs){var cat = (function cat(xys,zs__$1){return (new cljs.core.LazySeq(null,(function (){var xys__$1 = cljs.core.seq(xys);if(xys__$1)
{if(cljs.core.chunked_seq_QMARK_(xys__$1))
{return cljs.core.chunk_cons(cljs.core.chunk_first(xys__$1),cat(cljs.core.chunk_rest(xys__$1),zs__$1));
} else
{return cljs.core.cons(cljs.core.first(xys__$1),cat(cljs.core.rest(xys__$1),zs__$1));
}
} else
{if(cljs.core.truth_(zs__$1))
{return cat(cljs.core.first(zs__$1),cljs.core.next(zs__$1));
} else
{return null;
}
}
}),null,null));
});return cat(concat.cljs$core$IFn$_invoke$arity$2(x,y),zs);
};
var G__21584 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21584__delegate.call(this,x,y,zs);};
G__21584.cljs$lang$maxFixedArity = 2;
G__21584.cljs$lang$applyTo = (function (arglist__21585){
var x = cljs.core.first(arglist__21585);
arglist__21585 = cljs.core.next(arglist__21585);
var y = cljs.core.first(arglist__21585);
var zs = cljs.core.rest(arglist__21585);
return G__21584__delegate(x,y,zs);
});
G__21584.cljs$core$IFn$_invoke$arity$variadic = G__21584__delegate;
return G__21584;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$core$IFn$_invoke$arity$0 = concat__0;
concat.cljs$core$IFn$_invoke$arity$1 = concat__1;
concat.cljs$core$IFn$_invoke$arity$2 = concat__2;
concat.cljs$core$IFn$_invoke$arity$variadic = concat__3.cljs$core$IFn$_invoke$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__21586__delegate = function (a,b,c,d,more){return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__21586 = function (a,b,c,d,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__21586__delegate.call(this,a,b,c,d,more);};
G__21586.cljs$lang$maxFixedArity = 4;
G__21586.cljs$lang$applyTo = (function (arglist__21587){
var a = cljs.core.first(arglist__21587);
arglist__21587 = cljs.core.next(arglist__21587);
var b = cljs.core.first(arglist__21587);
arglist__21587 = cljs.core.next(arglist__21587);
var c = cljs.core.first(arglist__21587);
arglist__21587 = cljs.core.next(arglist__21587);
var d = cljs.core.first(arglist__21587);
var more = cljs.core.rest(arglist__21587);
return G__21586__delegate(a,b,c,d,more);
});
G__21586.cljs$core$IFn$_invoke$arity$variadic = G__21586__delegate;
return G__21586;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$core$IFn$_invoke$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$core$IFn$_invoke$arity$1 = list_STAR___1;
list_STAR_.cljs$core$IFn$_invoke$arity$2 = list_STAR___2;
list_STAR_.cljs$core$IFn$_invoke$arity$3 = list_STAR___3;
list_STAR_.cljs$core$IFn$_invoke$arity$4 = list_STAR___4;
list_STAR_.cljs$core$IFn$_invoke$arity$variadic = list_STAR___5.cljs$core$IFn$_invoke$arity$variadic;
return list_STAR_;
})()
;
/**
* Returns a new, transient version of the collection, in constant time.
*/
cljs.core.transient$ = (function transient$(coll){return cljs.core._as_transient(coll);
});
/**
* Returns a new, persistent version of the transient collection, in
* constant time. The transient collection cannot be used after this
* call, any such use will throw an exception.
*/
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){return cljs.core._persistent_BANG_(tcoll);
});
/**
* Adds x to the transient collection, and return coll. The 'addition'
* may happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj_BANG_ = (function() {
var conj_BANG_ = null;
var conj_BANG___0 = (function (){return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
var conj_BANG___1 = (function (coll){return coll;
});
var conj_BANG___2 = (function (tcoll,val){return cljs.core._conj_BANG_(tcoll,val);
});
var conj_BANG___3 = (function() { 
var G__21588__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._conj_BANG_(tcoll,val);if(cljs.core.truth_(vals))
{{
var G__21589 = ntcoll;
var G__21590 = cljs.core.first(vals);
var G__21591 = cljs.core.next(vals);
tcoll = G__21589;
val = G__21590;
vals = G__21591;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__21588 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21588__delegate.call(this,tcoll,val,vals);};
G__21588.cljs$lang$maxFixedArity = 2;
G__21588.cljs$lang$applyTo = (function (arglist__21592){
var tcoll = cljs.core.first(arglist__21592);
arglist__21592 = cljs.core.next(arglist__21592);
var val = cljs.core.first(arglist__21592);
var vals = cljs.core.rest(arglist__21592);
return G__21588__delegate(tcoll,val,vals);
});
G__21588.cljs$core$IFn$_invoke$arity$variadic = G__21588__delegate;
return G__21588;
})()
;
conj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 0:
return conj_BANG___0.call(this);
case 1:
return conj_BANG___1.call(this,tcoll);
case 2:
return conj_BANG___2.call(this,tcoll,val);
default:
return conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_BANG_.cljs$lang$maxFixedArity = 2;
conj_BANG_.cljs$lang$applyTo = conj_BANG___3.cljs$lang$applyTo;
conj_BANG_.cljs$core$IFn$_invoke$arity$0 = conj_BANG___0;
conj_BANG_.cljs$core$IFn$_invoke$arity$1 = conj_BANG___1;
conj_BANG_.cljs$core$IFn$_invoke$arity$2 = conj_BANG___2;
conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return conj_BANG_;
})()
;
/**
* When applied to a transient map, adds mapping of key(s) to
* val(s). When applied to a transient vector, sets the val at index.
* Note - index must be <= (count vector). Returns coll.
* @param {...*} var_args
*/
cljs.core.assoc_BANG_ = (function() {
var assoc_BANG_ = null;
var assoc_BANG___3 = (function (tcoll,key,val){return cljs.core._assoc_BANG_(tcoll,key,val);
});
var assoc_BANG___4 = (function() { 
var G__21593__delegate = function (tcoll,key,val,kvs){while(true){
var ntcoll = cljs.core._assoc_BANG_(tcoll,key,val);if(cljs.core.truth_(kvs))
{{
var G__21594 = ntcoll;
var G__21595 = cljs.core.first(kvs);
var G__21596 = cljs.core.second(kvs);
var G__21597 = cljs.core.nnext(kvs);
tcoll = G__21594;
key = G__21595;
val = G__21596;
kvs = G__21597;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__21593 = function (tcoll,key,val,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__21593__delegate.call(this,tcoll,key,val,kvs);};
G__21593.cljs$lang$maxFixedArity = 3;
G__21593.cljs$lang$applyTo = (function (arglist__21598){
var tcoll = cljs.core.first(arglist__21598);
arglist__21598 = cljs.core.next(arglist__21598);
var key = cljs.core.first(arglist__21598);
arglist__21598 = cljs.core.next(arglist__21598);
var val = cljs.core.first(arglist__21598);
var kvs = cljs.core.rest(arglist__21598);
return G__21593__delegate(tcoll,key,val,kvs);
});
G__21593.cljs$core$IFn$_invoke$arity$variadic = G__21593__delegate;
return G__21593;
})()
;
assoc_BANG_ = function(tcoll,key,val,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc_BANG___3.call(this,tcoll,key,val);
default:
return assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic(tcoll,key,val, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc_BANG_.cljs$lang$maxFixedArity = 3;
assoc_BANG_.cljs$lang$applyTo = assoc_BANG___4.cljs$lang$applyTo;
assoc_BANG_.cljs$core$IFn$_invoke$arity$3 = assoc_BANG___3;
assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return assoc_BANG_;
})()
;
/**
* Returns a transient map that doesn't contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc_BANG_ = (function() {
var dissoc_BANG_ = null;
var dissoc_BANG___2 = (function (tcoll,key){return cljs.core._dissoc_BANG_(tcoll,key);
});
var dissoc_BANG___3 = (function() { 
var G__21599__delegate = function (tcoll,key,ks){while(true){
var ntcoll = cljs.core._dissoc_BANG_(tcoll,key);if(cljs.core.truth_(ks))
{{
var G__21600 = ntcoll;
var G__21601 = cljs.core.first(ks);
var G__21602 = cljs.core.next(ks);
tcoll = G__21600;
key = G__21601;
ks = G__21602;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__21599 = function (tcoll,key,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21599__delegate.call(this,tcoll,key,ks);};
G__21599.cljs$lang$maxFixedArity = 2;
G__21599.cljs$lang$applyTo = (function (arglist__21603){
var tcoll = cljs.core.first(arglist__21603);
arglist__21603 = cljs.core.next(arglist__21603);
var key = cljs.core.first(arglist__21603);
var ks = cljs.core.rest(arglist__21603);
return G__21599__delegate(tcoll,key,ks);
});
G__21599.cljs$core$IFn$_invoke$arity$variadic = G__21599__delegate;
return G__21599;
})()
;
dissoc_BANG_ = function(tcoll,key,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dissoc_BANG___2.call(this,tcoll,key);
default:
return dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,key, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc_BANG_.cljs$lang$maxFixedArity = 2;
dissoc_BANG_.cljs$lang$applyTo = dissoc_BANG___3.cljs$lang$applyTo;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$2 = dissoc_BANG___2;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc_BANG_;
})()
;
/**
* Removes the last item from a transient vector. If
* the collection is empty, throws an exception. Returns coll
*/
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){return cljs.core._pop_BANG_(tcoll);
});
/**
* disj[oin]. Returns a transient set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj_BANG_ = (function() {
var disj_BANG_ = null;
var disj_BANG___2 = (function (tcoll,val){return cljs.core._disjoin_BANG_(tcoll,val);
});
var disj_BANG___3 = (function() { 
var G__21604__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._disjoin_BANG_(tcoll,val);if(cljs.core.truth_(vals))
{{
var G__21605 = ntcoll;
var G__21606 = cljs.core.first(vals);
var G__21607 = cljs.core.next(vals);
tcoll = G__21605;
val = G__21606;
vals = G__21607;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__21604 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21604__delegate.call(this,tcoll,val,vals);};
G__21604.cljs$lang$maxFixedArity = 2;
G__21604.cljs$lang$applyTo = (function (arglist__21608){
var tcoll = cljs.core.first(arglist__21608);
arglist__21608 = cljs.core.next(arglist__21608);
var val = cljs.core.first(arglist__21608);
var vals = cljs.core.rest(arglist__21608);
return G__21604__delegate(tcoll,val,vals);
});
G__21604.cljs$core$IFn$_invoke$arity$variadic = G__21604__delegate;
return G__21604;
})()
;
disj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 2:
return disj_BANG___2.call(this,tcoll,val);
default:
return disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj_BANG_.cljs$lang$maxFixedArity = 2;
disj_BANG_.cljs$lang$applyTo = disj_BANG___3.cljs$lang$applyTo;
disj_BANG_.cljs$core$IFn$_invoke$arity$2 = disj_BANG___2;
disj_BANG_.cljs$core$IFn$_invoke$arity$variadic = disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return disj_BANG_;
})()
;
cljs.core.apply_to = (function apply_to(f,argc,args){var args__$1 = cljs.core.seq(args);if((argc === (0)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var a4592 = cljs.core._first(args__$1);var args__$2 = cljs.core._rest(args__$1);if((argc === (1)))
{if(f.cljs$core$IFn$_invoke$arity$1)
{return f.cljs$core$IFn$_invoke$arity$1(a4592);
} else
{var G__21819 = a4592;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21819) : f.call(null,G__21819));
}
} else
{var b4593 = cljs.core._first(args__$2);var args__$3 = cljs.core._rest(args__$2);if((argc === (2)))
{if(f.cljs$core$IFn$_invoke$arity$2)
{return f.cljs$core$IFn$_invoke$arity$2(a4592,b4593);
} else
{var G__21820 = a4592;var G__21821 = b4593;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21820,G__21821) : f.call(null,G__21820,G__21821));
}
} else
{var c4594 = cljs.core._first(args__$3);var args__$4 = cljs.core._rest(args__$3);if((argc === (3)))
{if(f.cljs$core$IFn$_invoke$arity$3)
{return f.cljs$core$IFn$_invoke$arity$3(a4592,b4593,c4594);
} else
{var G__21822 = a4592;var G__21823 = b4593;var G__21824 = c4594;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__21822,G__21823,G__21824) : f.call(null,G__21822,G__21823,G__21824));
}
} else
{var d4595 = cljs.core._first(args__$4);var args__$5 = cljs.core._rest(args__$4);if((argc === (4)))
{if(f.cljs$core$IFn$_invoke$arity$4)
{return f.cljs$core$IFn$_invoke$arity$4(a4592,b4593,c4594,d4595);
} else
{var G__21825 = a4592;var G__21826 = b4593;var G__21827 = c4594;var G__21828 = d4595;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__21825,G__21826,G__21827,G__21828) : f.call(null,G__21825,G__21826,G__21827,G__21828));
}
} else
{var e4596 = cljs.core._first(args__$5);var args__$6 = cljs.core._rest(args__$5);if((argc === (5)))
{if(f.cljs$core$IFn$_invoke$arity$5)
{return f.cljs$core$IFn$_invoke$arity$5(a4592,b4593,c4594,d4595,e4596);
} else
{var G__21829 = a4592;var G__21830 = b4593;var G__21831 = c4594;var G__21832 = d4595;var G__21833 = e4596;return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__21829,G__21830,G__21831,G__21832,G__21833) : f.call(null,G__21829,G__21830,G__21831,G__21832,G__21833));
}
} else
{var f4597 = cljs.core._first(args__$6);var args__$7 = cljs.core._rest(args__$6);if((argc === (6)))
{if(f.cljs$core$IFn$_invoke$arity$6)
{return f.cljs$core$IFn$_invoke$arity$6(a4592,b4593,c4594,d4595,e4596,f4597);
} else
{var G__21834 = a4592;var G__21835 = b4593;var G__21836 = c4594;var G__21837 = d4595;var G__21838 = e4596;var G__21839 = f4597;return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__21834,G__21835,G__21836,G__21837,G__21838,G__21839) : f.call(null,G__21834,G__21835,G__21836,G__21837,G__21838,G__21839));
}
} else
{var g4598 = cljs.core._first(args__$7);var args__$8 = cljs.core._rest(args__$7);if((argc === (7)))
{if(f.cljs$core$IFn$_invoke$arity$7)
{return f.cljs$core$IFn$_invoke$arity$7(a4592,b4593,c4594,d4595,e4596,f4597,g4598);
} else
{var G__21840 = a4592;var G__21841 = b4593;var G__21842 = c4594;var G__21843 = d4595;var G__21844 = e4596;var G__21845 = f4597;var G__21846 = g4598;return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__21840,G__21841,G__21842,G__21843,G__21844,G__21845,G__21846) : f.call(null,G__21840,G__21841,G__21842,G__21843,G__21844,G__21845,G__21846));
}
} else
{var h4599 = cljs.core._first(args__$8);var args__$9 = cljs.core._rest(args__$8);if((argc === (8)))
{if(f.cljs$core$IFn$_invoke$arity$8)
{return f.cljs$core$IFn$_invoke$arity$8(a4592,b4593,c4594,d4595,e4596,f4597,g4598,h4599);
} else
{var G__21847 = a4592;var G__21848 = b4593;var G__21849 = c4594;var G__21850 = d4595;var G__21851 = e4596;var G__21852 = f4597;var G__21853 = g4598;var G__21854 = h4599;return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__21847,G__21848,G__21849,G__21850,G__21851,G__21852,G__21853,G__21854) : f.call(null,G__21847,G__21848,G__21849,G__21850,G__21851,G__21852,G__21853,G__21854));
}
} else
{var i4600 = cljs.core._first(args__$9);var args__$10 = cljs.core._rest(args__$9);if((argc === (9)))
{if(f.cljs$core$IFn$_invoke$arity$9)
{return f.cljs$core$IFn$_invoke$arity$9(a4592,b4593,c4594,d4595,e4596,f4597,g4598,h4599,i4600);
} else
{var G__21855 = a4592;var G__21856 = b4593;var G__21857 = c4594;var G__21858 = d4595;var G__21859 = e4596;var G__21860 = f4597;var G__21861 = g4598;var G__21862 = h4599;var G__21863 = i4600;return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__21855,G__21856,G__21857,G__21858,G__21859,G__21860,G__21861,G__21862,G__21863) : f.call(null,G__21855,G__21856,G__21857,G__21858,G__21859,G__21860,G__21861,G__21862,G__21863));
}
} else
{var j4601 = cljs.core._first(args__$10);var args__$11 = cljs.core._rest(args__$10);if((argc === (10)))
{if(f.cljs$core$IFn$_invoke$arity$10)
{return f.cljs$core$IFn$_invoke$arity$10(a4592,b4593,c4594,d4595,e4596,f4597,g4598,h4599,i4600,j4601);
} else
{var G__21864 = a4592;var G__21865 = b4593;var G__21866 = c4594;var G__21867 = d4595;var G__21868 = e4596;var G__21869 = f4597;var G__21870 = g4598;var G__21871 = h4599;var G__21872 = i4600;var G__21873 = j4601;return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__21864,G__21865,G__21866,G__21867,G__21868,G__21869,G__21870,G__21871,G__21872,G__21873) : f.call(null,G__21864,G__21865,G__21866,G__21867,G__21868,G__21869,G__21870,G__21871,G__21872,G__21873));
}
} else
{var k4602 = cljs.core._first(args__$11);var args__$12 = cljs.core._rest(args__$11);if((argc === (11)))
{if(f.cljs$core$IFn$_invoke$arity$11)
{return f.cljs$core$IFn$_invoke$arity$11(a4592,b4593,c4594,d4595,e4596,f4597,g4598,h4599,i4600,j4601,k4602);
} else
{var G__21874 = a4592;var G__21875 = b4593;var G__21876 = c4594;var G__21877 = d4595;var G__21878 = e4596;var G__21879 = f4597;var G__21880 = g4598;var G__21881 = h4599;var G__21882 = i4600;var G__21883 = j4601;var G__21884 = k4602;return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__21874,G__21875,G__21876,G__21877,G__21878,G__21879,G__21880,G__21881,G__21882,G__21883,G__21884) : f.call(null,G__21874,G__21875,G__21876,G__21877,G__21878,G__21879,G__21880,G__21881,G__21882,G__21883,G__21884));
}
} else
{var l4603 = cljs.core._first(args__$12);var args__$13 = cljs.core._rest(args__$12);if((argc === (12)))
{if(f.cljs$core$IFn$_invoke$arity$12)
{return f.cljs$core$IFn$_invoke$arity$12(a4592,b4593,c4594,d4595,e4596,f4597,g4598,h4599,i4600,j4601,k4602,l4603);
} else
{var G__21885 = a4592;var G__21886 = b4593;var G__21887 = c4594;var G__21888 = d4595;var G__21889 = e4596;var G__21890 = f4597;var G__21891 = g4598;var G__21892 = h4599;var G__21893 = i4600;var G__21894 = j4601;var G__21895 = k4602;var G__21896 = l4603;return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__21885,G__21886,G__21887,G__21888,G__21889,G__21890,G__21891,G__21892,G__21893,G__21894,G__21895,G__21896) : f.call(null,G__21885,G__21886,G__21887,G__21888,G__21889,G__21890,G__21891,G__21892,G__21893,G__21894,G__21895,G__21896));
}
} else
{var m4604 = cljs.core._first(args__$13);var args__$14 = cljs.core._rest(args__$13);if((argc === (13)))
{if(f.cljs$core$IFn$_invoke$arity$13)
{return f.cljs$core$IFn$_invoke$arity$13(a4592,b4593,c4594,d4595,e4596,f4597,g4598,h4599,i4600,j4601,k4602,l4603,m4604);
} else
{var G__21897 = a4592;var G__21898 = b4593;var G__21899 = c4594;var G__21900 = d4595;var G__21901 = e4596;var G__21902 = f4597;var G__21903 = g4598;var G__21904 = h4599;var G__21905 = i4600;var G__21906 = j4601;var G__21907 = k4602;var G__21908 = l4603;var G__21909 = m4604;return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__21897,G__21898,G__21899,G__21900,G__21901,G__21902,G__21903,G__21904,G__21905,G__21906,G__21907,G__21908,G__21909) : f.call(null,G__21897,G__21898,G__21899,G__21900,G__21901,G__21902,G__21903,G__21904,G__21905,G__21906,G__21907,G__21908,G__21909));
}
} else
{var n4605 = cljs.core._first(args__$14);var args__$15 = cljs.core._rest(args__$14);if((argc === (14)))
{if(f.cljs$core$IFn$_invoke$arity$14)
{return f.cljs$core$IFn$_invoke$arity$14(a4592,b4593,c4594,d4595,e4596,f4597,g4598,h4599,i4600,j4601,k4602,l4603,m4604,n4605);
} else
{var G__21910 = a4592;var G__21911 = b4593;var G__21912 = c4594;var G__21913 = d4595;var G__21914 = e4596;var G__21915 = f4597;var G__21916 = g4598;var G__21917 = h4599;var G__21918 = i4600;var G__21919 = j4601;var G__21920 = k4602;var G__21921 = l4603;var G__21922 = m4604;var G__21923 = n4605;return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__21910,G__21911,G__21912,G__21913,G__21914,G__21915,G__21916,G__21917,G__21918,G__21919,G__21920,G__21921,G__21922,G__21923) : f.call(null,G__21910,G__21911,G__21912,G__21913,G__21914,G__21915,G__21916,G__21917,G__21918,G__21919,G__21920,G__21921,G__21922,G__21923));
}
} else
{var o4606 = cljs.core._first(args__$15);var args__$16 = cljs.core._rest(args__$15);if((argc === (15)))
{if(f.cljs$core$IFn$_invoke$arity$15)
{return f.cljs$core$IFn$_invoke$arity$15(a4592,b4593,c4594,d4595,e4596,f4597,g4598,h4599,i4600,j4601,k4602,l4603,m4604,n4605,o4606);
} else
{var G__21924 = a4592;var G__21925 = b4593;var G__21926 = c4594;var G__21927 = d4595;var G__21928 = e4596;var G__21929 = f4597;var G__21930 = g4598;var G__21931 = h4599;var G__21932 = i4600;var G__21933 = j4601;var G__21934 = k4602;var G__21935 = l4603;var G__21936 = m4604;var G__21937 = n4605;var G__21938 = o4606;return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__21924,G__21925,G__21926,G__21927,G__21928,G__21929,G__21930,G__21931,G__21932,G__21933,G__21934,G__21935,G__21936,G__21937,G__21938) : f.call(null,G__21924,G__21925,G__21926,G__21927,G__21928,G__21929,G__21930,G__21931,G__21932,G__21933,G__21934,G__21935,G__21936,G__21937,G__21938));
}
} else
{var p4607 = cljs.core._first(args__$16);var args__$17 = cljs.core._rest(args__$16);if((argc === (16)))
{if(f.cljs$core$IFn$_invoke$arity$16)
{return f.cljs$core$IFn$_invoke$arity$16(a4592,b4593,c4594,d4595,e4596,f4597,g4598,h4599,i4600,j4601,k4602,l4603,m4604,n4605,o4606,p4607);
} else
{var G__21939 = a4592;var G__21940 = b4593;var G__21941 = c4594;var G__21942 = d4595;var G__21943 = e4596;var G__21944 = f4597;var G__21945 = g4598;var G__21946 = h4599;var G__21947 = i4600;var G__21948 = j4601;var G__21949 = k4602;var G__21950 = l4603;var G__21951 = m4604;var G__21952 = n4605;var G__21953 = o4606;var G__21954 = p4607;return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__21939,G__21940,G__21941,G__21942,G__21943,G__21944,G__21945,G__21946,G__21947,G__21948,G__21949,G__21950,G__21951,G__21952,G__21953,G__21954) : f.call(null,G__21939,G__21940,G__21941,G__21942,G__21943,G__21944,G__21945,G__21946,G__21947,G__21948,G__21949,G__21950,G__21951,G__21952,G__21953,G__21954));
}
} else
{var q4608 = cljs.core._first(args__$17);var args__$18 = cljs.core._rest(args__$17);if((argc === (17)))
{if(f.cljs$core$IFn$_invoke$arity$17)
{return f.cljs$core$IFn$_invoke$arity$17(a4592,b4593,c4594,d4595,e4596,f4597,g4598,h4599,i4600,j4601,k4602,l4603,m4604,n4605,o4606,p4607,q4608);
} else
{var G__21955 = a4592;var G__21956 = b4593;var G__21957 = c4594;var G__21958 = d4595;var G__21959 = e4596;var G__21960 = f4597;var G__21961 = g4598;var G__21962 = h4599;var G__21963 = i4600;var G__21964 = j4601;var G__21965 = k4602;var G__21966 = l4603;var G__21967 = m4604;var G__21968 = n4605;var G__21969 = o4606;var G__21970 = p4607;var G__21971 = q4608;return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__21955,G__21956,G__21957,G__21958,G__21959,G__21960,G__21961,G__21962,G__21963,G__21964,G__21965,G__21966,G__21967,G__21968,G__21969,G__21970,G__21971) : f.call(null,G__21955,G__21956,G__21957,G__21958,G__21959,G__21960,G__21961,G__21962,G__21963,G__21964,G__21965,G__21966,G__21967,G__21968,G__21969,G__21970,G__21971));
}
} else
{var r4609 = cljs.core._first(args__$18);var args__$19 = cljs.core._rest(args__$18);if((argc === (18)))
{if(f.cljs$core$IFn$_invoke$arity$18)
{return f.cljs$core$IFn$_invoke$arity$18(a4592,b4593,c4594,d4595,e4596,f4597,g4598,h4599,i4600,j4601,k4602,l4603,m4604,n4605,o4606,p4607,q4608,r4609);
} else
{var G__21972 = a4592;var G__21973 = b4593;var G__21974 = c4594;var G__21975 = d4595;var G__21976 = e4596;var G__21977 = f4597;var G__21978 = g4598;var G__21979 = h4599;var G__21980 = i4600;var G__21981 = j4601;var G__21982 = k4602;var G__21983 = l4603;var G__21984 = m4604;var G__21985 = n4605;var G__21986 = o4606;var G__21987 = p4607;var G__21988 = q4608;var G__21989 = r4609;return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__21972,G__21973,G__21974,G__21975,G__21976,G__21977,G__21978,G__21979,G__21980,G__21981,G__21982,G__21983,G__21984,G__21985,G__21986,G__21987,G__21988,G__21989) : f.call(null,G__21972,G__21973,G__21974,G__21975,G__21976,G__21977,G__21978,G__21979,G__21980,G__21981,G__21982,G__21983,G__21984,G__21985,G__21986,G__21987,G__21988,G__21989));
}
} else
{var s4610 = cljs.core._first(args__$19);var args__$20 = cljs.core._rest(args__$19);if((argc === (19)))
{if(f.cljs$core$IFn$_invoke$arity$19)
{return f.cljs$core$IFn$_invoke$arity$19(a4592,b4593,c4594,d4595,e4596,f4597,g4598,h4599,i4600,j4601,k4602,l4603,m4604,n4605,o4606,p4607,q4608,r4609,s4610);
} else
{var G__21990 = a4592;var G__21991 = b4593;var G__21992 = c4594;var G__21993 = d4595;var G__21994 = e4596;var G__21995 = f4597;var G__21996 = g4598;var G__21997 = h4599;var G__21998 = i4600;var G__21999 = j4601;var G__22000 = k4602;var G__22001 = l4603;var G__22002 = m4604;var G__22003 = n4605;var G__22004 = o4606;var G__22005 = p4607;var G__22006 = q4608;var G__22007 = r4609;var G__22008 = s4610;return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__21990,G__21991,G__21992,G__21993,G__21994,G__21995,G__21996,G__21997,G__21998,G__21999,G__22000,G__22001,G__22002,G__22003,G__22004,G__22005,G__22006,G__22007,G__22008) : f.call(null,G__21990,G__21991,G__21992,G__21993,G__21994,G__21995,G__21996,G__21997,G__21998,G__21999,G__22000,G__22001,G__22002,G__22003,G__22004,G__22005,G__22006,G__22007,G__22008));
}
} else
{var t4611 = cljs.core._first(args__$20);var args__$21 = cljs.core._rest(args__$20);if((argc === (20)))
{if(f.cljs$core$IFn$_invoke$arity$20)
{return f.cljs$core$IFn$_invoke$arity$20(a4592,b4593,c4594,d4595,e4596,f4597,g4598,h4599,i4600,j4601,k4602,l4603,m4604,n4605,o4606,p4607,q4608,r4609,s4610,t4611);
} else
{var G__22009 = a4592;var G__22010 = b4593;var G__22011 = c4594;var G__22012 = d4595;var G__22013 = e4596;var G__22014 = f4597;var G__22015 = g4598;var G__22016 = h4599;var G__22017 = i4600;var G__22018 = j4601;var G__22019 = k4602;var G__22020 = l4603;var G__22021 = m4604;var G__22022 = n4605;var G__22023 = o4606;var G__22024 = p4607;var G__22025 = q4608;var G__22026 = r4609;var G__22027 = s4610;var G__22028 = t4611;return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__22009,G__22010,G__22011,G__22012,G__22013,G__22014,G__22015,G__22016,G__22017,G__22018,G__22019,G__22020,G__22021,G__22022,G__22023,G__22024,G__22025,G__22026,G__22027,G__22028) : f.call(null,G__22009,G__22010,G__22011,G__22012,G__22013,G__22014,G__22015,G__22016,G__22017,G__22018,G__22019,G__22020,G__22021,G__22022,G__22023,G__22024,G__22025,G__22026,G__22027,G__22028));
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(args,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(x,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__4 = (function (f,x,y,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__5 = (function (f,x,y,z,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(x,y,z,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__6 = (function() { 
var G__22029__delegate = function (f,a,b,c,d,args){var arglist = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
};
var G__22029 = function (f,a,b,c,d,var_args){
var args = null;if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__22029__delegate.call(this,f,a,b,c,d,args);};
G__22029.cljs$lang$maxFixedArity = 5;
G__22029.cljs$lang$applyTo = (function (arglist__22030){
var f = cljs.core.first(arglist__22030);
arglist__22030 = cljs.core.next(arglist__22030);
var a = cljs.core.first(arglist__22030);
arglist__22030 = cljs.core.next(arglist__22030);
var b = cljs.core.first(arglist__22030);
arglist__22030 = cljs.core.next(arglist__22030);
var c = cljs.core.first(arglist__22030);
arglist__22030 = cljs.core.next(arglist__22030);
var d = cljs.core.first(arglist__22030);
var args = cljs.core.rest(arglist__22030);
return G__22029__delegate(f,a,b,c,d,args);
});
G__22029.cljs$core$IFn$_invoke$arity$variadic = G__22029__delegate;
return G__22029;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$core$IFn$_invoke$arity$2 = apply__2;
apply.cljs$core$IFn$_invoke$arity$3 = apply__3;
apply.cljs$core$IFn$_invoke$arity$4 = apply__4;
apply.cljs$core$IFn$_invoke$arity$5 = apply__5;
apply.cljs$core$IFn$_invoke$arity$variadic = apply__6.cljs$core$IFn$_invoke$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() {
var vary_meta = null;
var vary_meta__2 = (function (obj,f){return cljs.core.with_meta(obj,(function (){var G__22046 = cljs.core.meta(obj);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22046) : f.call(null,G__22046));
})());
});
var vary_meta__3 = (function (obj,f,a){return cljs.core.with_meta(obj,(function (){var G__22047 = cljs.core.meta(obj);var G__22048 = a;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22047,G__22048) : f.call(null,G__22047,G__22048));
})());
});
var vary_meta__4 = (function (obj,f,a,b){return cljs.core.with_meta(obj,(function (){var G__22049 = cljs.core.meta(obj);var G__22050 = a;var G__22051 = b;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22049,G__22050,G__22051) : f.call(null,G__22049,G__22050,G__22051));
})());
});
var vary_meta__5 = (function (obj,f,a,b,c){return cljs.core.with_meta(obj,(function (){var G__22052 = cljs.core.meta(obj);var G__22053 = a;var G__22054 = b;var G__22055 = c;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__22052,G__22053,G__22054,G__22055) : f.call(null,G__22052,G__22053,G__22054,G__22055));
})());
});
var vary_meta__6 = (function (obj,f,a,b,c,d){return cljs.core.with_meta(obj,(function (){var G__22056 = cljs.core.meta(obj);var G__22057 = a;var G__22058 = b;var G__22059 = c;var G__22060 = d;return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__22056,G__22057,G__22058,G__22059,G__22060) : f.call(null,G__22056,G__22057,G__22058,G__22059,G__22060));
})());
});
var vary_meta__7 = (function() { 
var G__22061__delegate = function (obj,f,a,b,c,d,args){return cljs.core.with_meta(obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.meta(obj),a,b,c,cljs.core.array_seq([d,args], 0)));
};
var G__22061 = function (obj,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__22061__delegate.call(this,obj,f,a,b,c,d,args);};
G__22061.cljs$lang$maxFixedArity = 6;
G__22061.cljs$lang$applyTo = (function (arglist__22062){
var obj = cljs.core.first(arglist__22062);
arglist__22062 = cljs.core.next(arglist__22062);
var f = cljs.core.first(arglist__22062);
arglist__22062 = cljs.core.next(arglist__22062);
var a = cljs.core.first(arglist__22062);
arglist__22062 = cljs.core.next(arglist__22062);
var b = cljs.core.first(arglist__22062);
arglist__22062 = cljs.core.next(arglist__22062);
var c = cljs.core.first(arglist__22062);
arglist__22062 = cljs.core.next(arglist__22062);
var d = cljs.core.first(arglist__22062);
var args = cljs.core.rest(arglist__22062);
return G__22061__delegate(obj,f,a,b,c,d,args);
});
G__22061.cljs$core$IFn$_invoke$arity$variadic = G__22061__delegate;
return G__22061;
})()
;
vary_meta = function(obj,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return vary_meta__2.call(this,obj,f);
case 3:
return vary_meta__3.call(this,obj,f,a);
case 4:
return vary_meta__4.call(this,obj,f,a,b);
case 5:
return vary_meta__5.call(this,obj,f,a,b,c);
case 6:
return vary_meta__6.call(this,obj,f,a,b,c,d);
default:
return vary_meta__7.cljs$core$IFn$_invoke$arity$variadic(obj,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vary_meta.cljs$lang$maxFixedArity = 6;
vary_meta.cljs$lang$applyTo = vary_meta__7.cljs$lang$applyTo;
vary_meta.cljs$core$IFn$_invoke$arity$2 = vary_meta__2;
vary_meta.cljs$core$IFn$_invoke$arity$3 = vary_meta__3;
vary_meta.cljs$core$IFn$_invoke$arity$4 = vary_meta__4;
vary_meta.cljs$core$IFn$_invoke$arity$5 = vary_meta__5;
vary_meta.cljs$core$IFn$_invoke$arity$6 = vary_meta__6;
vary_meta.cljs$core$IFn$_invoke$arity$variadic = vary_meta__7.cljs$core$IFn$_invoke$arity$variadic;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){return false;
});
var not_EQ___2 = (function (x,y){return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__22063__delegate = function (x,y,more){return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more));
};
var G__22063 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22063__delegate.call(this,x,y,more);};
G__22063.cljs$lang$maxFixedArity = 2;
G__22063.cljs$lang$applyTo = (function (arglist__22064){
var x = cljs.core.first(arglist__22064);
arglist__22064 = cljs.core.next(arglist__22064);
var y = cljs.core.first(arglist__22064);
var more = cljs.core.rest(arglist__22064);
return G__22063__delegate(x,y,more);
});
G__22063.cljs$core$IFn$_invoke$arity$variadic = G__22063__delegate;
return G__22063;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$core$IFn$_invoke$arity$1 = not_EQ___1;
not_EQ_.cljs$core$IFn$_invoke$arity$2 = not_EQ___2;
not_EQ_.cljs$core$IFn$_invoke$arity$variadic = not_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){if(cljs.core.seq(coll))
{return coll;
} else
{return null;
}
});
cljs.core.nil_iter = (function nil_iter(){if(typeof cljs.core.t22068 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.t22068 = (function (nil_iter,meta22069){
this.nil_iter = nil_iter;
this.meta22069 = meta22069;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.t22068.cljs$lang$type = true;
cljs.core.t22068.cljs$lang$ctorStr = "cljs.core/t22068";
cljs.core.t22068.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/t22068");
});
cljs.core.t22068.prototype.hasNext = (function (){var self__ = this;
var _ = this;return false;
});
cljs.core.t22068.prototype.next = (function (){var self__ = this;
var _ = this;return (new Error("No such element"));
});
cljs.core.t22068.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.t22068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22070){var self__ = this;
var _22070__$1 = this;return self__.meta22069;
});
cljs.core.t22068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22070,meta22069__$1){var self__ = this;
var _22070__$1 = this;return (new cljs.core.t22068(self__.nil_iter,meta22069__$1));
});
cljs.core.__GT_t22068 = (function __GT_t22068(nil_iter__$1,meta22069){return (new cljs.core.t22068(nil_iter__$1,meta22069));
});
}
return (new cljs.core.t22068(nil_iter,null));
});

/**
* @constructor
*/
cljs.core.StringIter = (function (s,i){
this.s = s;
this.i = i;
})
cljs.core.StringIter.cljs$lang$type = true;
cljs.core.StringIter.cljs$lang$ctorStr = "cljs.core/StringIter";
cljs.core.StringIter.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/StringIter");
});
cljs.core.StringIter.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.s.length);
});
cljs.core.StringIter.prototype.next = (function (){var self__ = this;
var _ = this;var ret = self__.s.charAt(self__.i);self__.i = (self__.i + (1));
return ret;
});
cljs.core.StringIter.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.__GT_StringIter = (function __GT_StringIter(s,i){return (new cljs.core.StringIter(s,i));
});
cljs.core.string_iter = (function string_iter(x){return (new cljs.core.StringIter(x,(0)));
});

/**
* @constructor
*/
cljs.core.ArrayIter = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.ArrayIter.cljs$lang$type = true;
cljs.core.ArrayIter.cljs$lang$ctorStr = "cljs.core/ArrayIter";
cljs.core.ArrayIter.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/ArrayIter");
});
cljs.core.ArrayIter.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.arr.length);
});
cljs.core.ArrayIter.prototype.next = (function (){var self__ = this;
var _ = this;var ret = (self__.arr[self__.i]);self__.i = (self__.i + (1));
return ret;
});
cljs.core.ArrayIter.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.__GT_ArrayIter = (function __GT_ArrayIter(arr,i){return (new cljs.core.ArrayIter(arr,i));
});
cljs.core.array_iter = (function array_iter(x){return (new cljs.core.ArrayIter(x,(0)));
});
cljs.core.INIT = {};
cljs.core.START = {};

/**
* @constructor
*/
cljs.core.SeqIter = (function (_seq,_next){
this._seq = _seq;
this._next = _next;
})
cljs.core.SeqIter.cljs$lang$type = true;
cljs.core.SeqIter.cljs$lang$ctorStr = "cljs.core/SeqIter";
cljs.core.SeqIter.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/SeqIter");
});
cljs.core.SeqIter.prototype.hasNext = (function (){var self__ = this;
var _ = this;if((self__._seq === cljs.core.INIT))
{self__._seq = cljs.core.START;
self__._next = cljs.core.seq(self__._next);
} else
{if((self__._seq === self__._next))
{self__._next = cljs.core.next(self__._seq);
} else
{}
}
return !((self__._next == null));
});
cljs.core.SeqIter.prototype.next = (function (){var self__ = this;
var this$ = this;if(cljs.core.not(this$.hasNext()))
{throw (new Error("No such element"));
} else
{self__._seq = self__._next;
return cljs.core.first(self__._next);
}
});
cljs.core.SeqIter.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.__GT_SeqIter = (function __GT_SeqIter(_seq,_next){return (new cljs.core.SeqIter(_seq,_next));
});
cljs.core.seq_iter = (function seq_iter(coll){return (new cljs.core.SeqIter(cljs.core.INIT,coll));
});
cljs.core.iter = (function iter(coll){if((coll == null))
{return cljs.core.nil_iter();
} else
{if(typeof coll === 'string')
{return cljs.core.string_iter(coll);
} else
{if(coll instanceof Array)
{return cljs.core.array_iter(coll);
} else
{if(cljs.core.iterable_QMARK_(coll))
{return cljs.core._iterator(coll);
} else
{if(cljs.core.seqable_QMARK_(coll))
{return cljs.core.seq_iter(coll);
} else
{throw (new Error(("Cannot create iterator from "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll))));

}
}
}
}
}
});
cljs.core.lazy_transformer = (function lazy_transformer(stepper){return (new cljs.core.LazyTransformer(stepper,null,null,null));
});

/**
* @constructor
*/
cljs.core.Stepper = (function (xform,iter){
this.xform = xform;
this.iter = iter;
})
cljs.core.Stepper.cljs$lang$type = true;
cljs.core.Stepper.cljs$lang$ctorStr = "cljs.core/Stepper";
cljs.core.Stepper.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/Stepper");
});
cljs.core.Stepper.prototype.step = (function (lt){var self__ = this;
var this$ = this;while(true){
if(cljs.core.truth_((function (){var and__3666__auto__ = !((lt.stepper == null));if(and__3666__auto__)
{return self__.iter.hasNext();
} else
{return and__3666__auto__;
}
})()))
{if(cljs.core.reduced_QMARK_((function (){var G__22071 = lt;var G__22072 = self__.iter.next();return (self__.xform.cljs$core$IFn$_invoke$arity$2 ? self__.xform.cljs$core$IFn$_invoke$arity$2(G__22071,G__22072) : self__.xform.call(null,G__22071,G__22072));
})()))
{if((lt.rest == null))
{} else
{lt.rest.stepper = null;
}
} else
{{
continue;
}
}
} else
{}
break;
}
if((lt.stepper == null))
{return null;
} else
{var G__22073 = lt;return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__22073) : self__.xform.call(null,G__22073));
}
});
cljs.core.__GT_Stepper = (function __GT_Stepper(xform,iter){return (new cljs.core.Stepper(xform,iter));
});
cljs.core.stepper = (function stepper(xform,iter){var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);lt.stepper = null;
return result;
});
var stepfn__2 = (function (result,input){var lt = result;lt.first = input;
lt.rest = cljs.core.lazy_transformer(lt.stepper);
lt.stepper = null;
return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.Stepper((function (){var G__22075 = stepfn;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__22075) : xform.call(null,G__22075));
})(),iter));
});

/**
* @constructor
*/
cljs.core.MultiStepper = (function (xform,iters,nexts){
this.xform = xform;
this.iters = iters;
this.nexts = nexts;
})
cljs.core.MultiStepper.cljs$lang$type = true;
cljs.core.MultiStepper.cljs$lang$ctorStr = "cljs.core/MultiStepper";
cljs.core.MultiStepper.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/MultiStepper");
});
cljs.core.MultiStepper.prototype.hasNext = (function (){var self__ = this;
var _ = this;var iters__$1 = cljs.core.seq(self__.iters);while(true){
if(!((iters__$1 == null)))
{var iter = cljs.core.first(iters__$1);if(cljs.core.not(iter.hasNext()))
{return false;
} else
{{
var G__22077 = cljs.core.next(iters__$1);
iters__$1 = G__22077;
continue;
}
}
} else
{return true;
}
break;
}
});
cljs.core.MultiStepper.prototype.next = (function (){var self__ = this;
var _ = this;var n__4548__auto___22078 = self__.iters.length;var i_22079 = (0);while(true){
if((i_22079 < n__4548__auto___22078))
{(self__.nexts[i_22079] = (self__.iters[i_22079]).next());
{
var G__22080 = (i_22079 + (1));
i_22079 = G__22080;
continue;
}
} else
{}
break;
}
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(self__.nexts,(0));
});
cljs.core.MultiStepper.prototype.step = (function (lt){var self__ = this;
var this$ = this;while(true){
if(cljs.core.truth_((function (){var and__3666__auto__ = !((lt.stepper == null));if(and__3666__auto__)
{return this$.hasNext();
} else
{return and__3666__auto__;
}
})()))
{if(cljs.core.reduced_QMARK_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.xform,cljs.core.cons(lt,this$.next()))))
{if((lt.rest == null))
{} else
{lt.rest.stepper = null;
}
} else
{{
continue;
}
}
} else
{}
break;
}
if((lt.stepper == null))
{return null;
} else
{var G__22076 = lt;return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__22076) : self__.xform.call(null,G__22076));
}
});
cljs.core.__GT_MultiStepper = (function __GT_MultiStepper(xform,iters,nexts){return (new cljs.core.MultiStepper(xform,iters,nexts));
});
cljs.core.multi_stepper = (function() {
var multi_stepper = null;
var multi_stepper__2 = (function (xform,iters){return multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length)));
});
var multi_stepper__3 = (function (xform,iters,nexts){var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);lt.stepper = null;
return lt;
});
var stepfn__2 = (function (result,input){var lt = result;lt.first = input;
lt.rest = cljs.core.lazy_transformer(lt.stepper);
lt.stepper = null;
return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.MultiStepper((function (){var G__22085 = stepfn;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__22085) : xform.call(null,G__22085));
})(),iters,nexts));
});
multi_stepper = function(xform,iters,nexts){
switch(arguments.length){
case 2:
return multi_stepper__2.call(this,xform,iters);
case 3:
return multi_stepper__3.call(this,xform,iters,nexts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_stepper.cljs$core$IFn$_invoke$arity$2 = multi_stepper__2;
multi_stepper.cljs$core$IFn$_invoke$arity$3 = multi_stepper__3;
return multi_stepper;
})()
;

/**
* @constructor
*/
cljs.core.LazyTransformer = (function (stepper,first,rest,meta){
this.stepper = stepper;
this.first = first;
this.rest = rest;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31719628;
})
cljs.core.LazyTransformer.cljs$lang$type = true;
cljs.core.LazyTransformer.cljs$lang$ctorStr = "cljs.core/LazyTransformer";
cljs.core.LazyTransformer.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/LazyTransformer");
});
cljs.core.LazyTransformer.prototype.cljs$core$INext$_next$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{cljs.core._seq(this$__$1);
}
if((self__.rest == null))
{return null;
} else
{return cljs.core._seq(self__.rest);
}
});
cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{cljs.core._seq(this$__$1);
}
if((self__.rest == null))
{return null;
} else
{return self__.first;
}
});
cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{cljs.core._seq(this$__$1);
}
if((self__.rest == null))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.LazyTransformer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{self__.stepper.step(this$__$1);
}
if((self__.rest == null))
{return null;
} else
{return this$__$1;
}
});
cljs.core.LazyTransformer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.hash_ordered_coll(this$__$1);
});
cljs.core.LazyTransformer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var self__ = this;
var this$__$1 = this;var s = cljs.core._seq(this$__$1);if(!((s == null)))
{return cljs.core.equiv_sequential(this$__$1,other);
} else
{return (cljs.core.sequential_QMARK_(other)) && ((cljs.core.seq(other) == null));
}
});
cljs.core.LazyTransformer.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.LazyTransformer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return cljs.core.cons(o,cljs.core._seq(this$__$1));
});
cljs.core.LazyTransformer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.LazyTransformer(self__.stepper,self__.first,self__.rest,new_meta));
});
cljs.core.__GT_LazyTransformer = (function __GT_LazyTransformer(stepper,first,rest,meta){return (new cljs.core.LazyTransformer(stepper,first,rest,meta));
});
cljs.core.LazyTransformer.create = (function (xform,coll){return (new cljs.core.LazyTransformer(cljs.core.stepper(xform,cljs.core.iter(coll)),null,null,null));
});
cljs.core.LazyTransformer.createMulti = (function (xform,colls){var iters = [];var seq__22086_22090 = cljs.core.seq(colls);var chunk__22087_22091 = null;var count__22088_22092 = (0);var i__22089_22093 = (0);while(true){
if((i__22089_22093 < count__22088_22092))
{var coll_22094 = chunk__22087_22091.cljs$core$IIndexed$_nth$arity$2(null,i__22089_22093);iters.push(cljs.core.iter(coll_22094));
{
var G__22095 = seq__22086_22090;
var G__22096 = chunk__22087_22091;
var G__22097 = count__22088_22092;
var G__22098 = (i__22089_22093 + (1));
seq__22086_22090 = G__22095;
chunk__22087_22091 = G__22096;
count__22088_22092 = G__22097;
i__22089_22093 = G__22098;
continue;
}
} else
{var temp__4222__auto___22099 = cljs.core.seq(seq__22086_22090);if(temp__4222__auto___22099)
{var seq__22086_22100__$1 = temp__4222__auto___22099;if(cljs.core.chunked_seq_QMARK_(seq__22086_22100__$1))
{var c__4448__auto___22101 = cljs.core.chunk_first(seq__22086_22100__$1);{
var G__22102 = cljs.core.chunk_rest(seq__22086_22100__$1);
var G__22103 = c__4448__auto___22101;
var G__22104 = cljs.core.count(c__4448__auto___22101);
var G__22105 = (0);
seq__22086_22090 = G__22102;
chunk__22087_22091 = G__22103;
count__22088_22092 = G__22104;
i__22089_22093 = G__22105;
continue;
}
} else
{var coll_22106 = cljs.core.first(seq__22086_22100__$1);iters.push(cljs.core.iter(coll_22106));
{
var G__22107 = cljs.core.next(seq__22086_22100__$1);
var G__22108 = null;
var G__22109 = (0);
var G__22110 = (0);
seq__22086_22090 = G__22107;
chunk__22087_22091 = G__22108;
count__22088_22092 = G__22109;
i__22089_22093 = G__22110;
continue;
}
}
} else
{}
}
break;
}
return (new cljs.core.LazyTransformer(cljs.core.multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length))),null,null,null));
});
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields (), When a
* transducer is supplied, returns a lazy sequence of applications of
* the transform to the items in coll(s), i.e. to the set of first
* items of each coll, followed by the set of second
* items in each coll, until any one of the colls is exhausted.  Any
* remaining items in other colls are ignored. The transform should accept
* number-of-colls arguments
* @param {...*} var_args
*/
cljs.core.sequence = (function() {
var sequence = null;
var sequence__1 = (function (coll){if(cljs.core.seq_QMARK_(coll))
{return coll;
} else
{var or__3678__auto__ = cljs.core.seq(coll);if(or__3678__auto__)
{return or__3678__auto__;
} else
{return cljs.core.List.EMPTY;
}
}
});
var sequence__2 = (function (xform,coll){return cljs.core.LazyTransformer.create(xform,coll);
});
var sequence__3 = (function() { 
var G__22111__delegate = function (xform,coll,colls){return cljs.core.LazyTransformer.createMulti(xform,cljs.core.to_array(cljs.core.cons(coll,colls)));
};
var G__22111 = function (xform,coll,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22111__delegate.call(this,xform,coll,colls);};
G__22111.cljs$lang$maxFixedArity = 2;
G__22111.cljs$lang$applyTo = (function (arglist__22112){
var xform = cljs.core.first(arglist__22112);
arglist__22112 = cljs.core.next(arglist__22112);
var coll = cljs.core.first(arglist__22112);
var colls = cljs.core.rest(arglist__22112);
return G__22111__delegate(xform,coll,colls);
});
G__22111.cljs$core$IFn$_invoke$arity$variadic = G__22111__delegate;
return G__22111;
})()
;
sequence = function(xform,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return sequence__1.call(this,xform);
case 2:
return sequence__2.call(this,xform,coll);
default:
return sequence__3.cljs$core$IFn$_invoke$arity$variadic(xform,coll, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sequence.cljs$lang$maxFixedArity = 2;
sequence.cljs$lang$applyTo = sequence__3.cljs$lang$applyTo;
sequence.cljs$core$IFn$_invoke$arity$1 = sequence__1;
sequence.cljs$core$IFn$_invoke$arity$2 = sequence__2;
sequence.cljs$core$IFn$_invoke$arity$variadic = sequence__3.cljs$core$IFn$_invoke$arity$variadic;
return sequence;
})()
;
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){while(true){
if((cljs.core.seq(coll) == null))
{return true;
} else
{if(cljs.core.truth_((function (){var G__22114 = cljs.core.first(coll);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__22114) : pred.call(null,G__22114));
})()))
{{
var G__22115 = pred;
var G__22116 = cljs.core.next(coll);
pred = G__22115;
coll = G__22116;
continue;
}
} else
{return false;

}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){while(true){
if(cljs.core.seq(coll))
{var or__3678__auto__ = (function (){var G__22120 = cljs.core.first(coll);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__22120) : pred.call(null,G__22120));
})();if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{{
var G__22121 = pred;
var G__22122 = cljs.core.next(coll);
pred = G__22121;
coll = G__22122;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){if(cljs.core.integer_QMARK_(n))
{return ((n & (1)) === (0));
} else
{throw (new Error(("Argument must be an integer: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n))));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){return !(cljs.core.even_QMARK_(n));
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){return (function() {
var G__22129 = null;
var G__22129__0 = (function (){return cljs.core.not((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
});
var G__22129__1 = (function (x){return cljs.core.not((function (){var G__22126 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22126) : f.call(null,G__22126));
})());
});
var G__22129__2 = (function (x,y){return cljs.core.not((function (){var G__22127 = x;var G__22128 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22127,G__22128) : f.call(null,G__22127,G__22128));
})());
});
var G__22129__3 = (function() { 
var G__22130__delegate = function (x,y,zs){return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,x,y,zs));
};
var G__22130 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22130__delegate.call(this,x,y,zs);};
G__22130.cljs$lang$maxFixedArity = 2;
G__22130.cljs$lang$applyTo = (function (arglist__22131){
var x = cljs.core.first(arglist__22131);
arglist__22131 = cljs.core.next(arglist__22131);
var y = cljs.core.first(arglist__22131);
var zs = cljs.core.rest(arglist__22131);
return G__22130__delegate(x,y,zs);
});
G__22130.cljs$core$IFn$_invoke$arity$variadic = G__22130__delegate;
return G__22130;
})()
;
G__22129 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__22129__0.call(this);
case 1:
return G__22129__1.call(this,x);
case 2:
return G__22129__2.call(this,x,y);
default:
return G__22129__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22129.cljs$lang$maxFixedArity = 2;
G__22129.cljs$lang$applyTo = G__22129__3.cljs$lang$applyTo;
G__22129.cljs$core$IFn$_invoke$arity$0 = G__22129__0;
G__22129.cljs$core$IFn$_invoke$arity$1 = G__22129__1;
G__22129.cljs$core$IFn$_invoke$arity$2 = G__22129__2;
G__22129.cljs$core$IFn$_invoke$arity$variadic = G__22129__3.cljs$core$IFn$_invoke$arity$variadic;
return G__22129;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){return (function() { 
var G__22132__delegate = function (args){return x;
};
var G__22132 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22132__delegate.call(this,args);};
G__22132.cljs$lang$maxFixedArity = 0;
G__22132.cljs$lang$applyTo = (function (arglist__22133){
var args = cljs.core.seq(arglist__22133);
return G__22132__delegate(args);
});
G__22132.cljs$core$IFn$_invoke$arity$variadic = G__22132__delegate;
return G__22132;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){return cljs.core.identity;
});
var comp__1 = (function (f){return f;
});
var comp__2 = (function (f,g){return (function() {
var G__22188 = null;
var G__22188__0 = (function (){var G__22161 = (function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22161) : f.call(null,G__22161));
});
var G__22188__1 = (function (x){var G__22162 = (function (){var G__22163 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__22163) : g.call(null,G__22163));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22162) : f.call(null,G__22162));
});
var G__22188__2 = (function (x,y){var G__22164 = (function (){var G__22165 = x;var G__22166 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__22165,G__22166) : g.call(null,G__22165,G__22166));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22164) : f.call(null,G__22164));
});
var G__22188__3 = (function (x,y,z){var G__22167 = (function (){var G__22168 = x;var G__22169 = y;var G__22170 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__22168,G__22169,G__22170) : g.call(null,G__22168,G__22169,G__22170));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22167) : f.call(null,G__22167));
});
var G__22188__4 = (function() { 
var G__22189__delegate = function (x,y,z,args){var G__22171 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22171) : f.call(null,G__22171));
};
var G__22189 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__22189__delegate.call(this,x,y,z,args);};
G__22189.cljs$lang$maxFixedArity = 3;
G__22189.cljs$lang$applyTo = (function (arglist__22190){
var x = cljs.core.first(arglist__22190);
arglist__22190 = cljs.core.next(arglist__22190);
var y = cljs.core.first(arglist__22190);
arglist__22190 = cljs.core.next(arglist__22190);
var z = cljs.core.first(arglist__22190);
var args = cljs.core.rest(arglist__22190);
return G__22189__delegate(x,y,z,args);
});
G__22189.cljs$core$IFn$_invoke$arity$variadic = G__22189__delegate;
return G__22189;
})()
;
G__22188 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__22188__0.call(this);
case 1:
return G__22188__1.call(this,x);
case 2:
return G__22188__2.call(this,x,y);
case 3:
return G__22188__3.call(this,x,y,z);
default:
return G__22188__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22188.cljs$lang$maxFixedArity = 3;
G__22188.cljs$lang$applyTo = G__22188__4.cljs$lang$applyTo;
G__22188.cljs$core$IFn$_invoke$arity$0 = G__22188__0;
G__22188.cljs$core$IFn$_invoke$arity$1 = G__22188__1;
G__22188.cljs$core$IFn$_invoke$arity$2 = G__22188__2;
G__22188.cljs$core$IFn$_invoke$arity$3 = G__22188__3;
G__22188.cljs$core$IFn$_invoke$arity$variadic = G__22188__4.cljs$core$IFn$_invoke$arity$variadic;
return G__22188;
})()
});
var comp__3 = (function (f,g,h){return (function() {
var G__22191 = null;
var G__22191__0 = (function (){var G__22172 = (function (){var G__22173 = (function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__22173) : g.call(null,G__22173));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22172) : f.call(null,G__22172));
});
var G__22191__1 = (function (x){var G__22174 = (function (){var G__22175 = (function (){var G__22176 = x;return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__22176) : h.call(null,G__22176));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__22175) : g.call(null,G__22175));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22174) : f.call(null,G__22174));
});
var G__22191__2 = (function (x,y){var G__22177 = (function (){var G__22178 = (function (){var G__22179 = x;var G__22180 = y;return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__22179,G__22180) : h.call(null,G__22179,G__22180));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__22178) : g.call(null,G__22178));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22177) : f.call(null,G__22177));
});
var G__22191__3 = (function (x,y,z){var G__22181 = (function (){var G__22182 = (function (){var G__22183 = x;var G__22184 = y;var G__22185 = z;return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__22183,G__22184,G__22185) : h.call(null,G__22183,G__22184,G__22185));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__22182) : g.call(null,G__22182));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22181) : f.call(null,G__22181));
});
var G__22191__4 = (function() { 
var G__22192__delegate = function (x,y,z,args){var G__22186 = (function (){var G__22187 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args);return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__22187) : g.call(null,G__22187));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22186) : f.call(null,G__22186));
};
var G__22192 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__22192__delegate.call(this,x,y,z,args);};
G__22192.cljs$lang$maxFixedArity = 3;
G__22192.cljs$lang$applyTo = (function (arglist__22193){
var x = cljs.core.first(arglist__22193);
arglist__22193 = cljs.core.next(arglist__22193);
var y = cljs.core.first(arglist__22193);
arglist__22193 = cljs.core.next(arglist__22193);
var z = cljs.core.first(arglist__22193);
var args = cljs.core.rest(arglist__22193);
return G__22192__delegate(x,y,z,args);
});
G__22192.cljs$core$IFn$_invoke$arity$variadic = G__22192__delegate;
return G__22192;
})()
;
G__22191 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__22191__0.call(this);
case 1:
return G__22191__1.call(this,x);
case 2:
return G__22191__2.call(this,x,y);
case 3:
return G__22191__3.call(this,x,y,z);
default:
return G__22191__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22191.cljs$lang$maxFixedArity = 3;
G__22191.cljs$lang$applyTo = G__22191__4.cljs$lang$applyTo;
G__22191.cljs$core$IFn$_invoke$arity$0 = G__22191__0;
G__22191.cljs$core$IFn$_invoke$arity$1 = G__22191__1;
G__22191.cljs$core$IFn$_invoke$arity$2 = G__22191__2;
G__22191.cljs$core$IFn$_invoke$arity$3 = G__22191__3;
G__22191.cljs$core$IFn$_invoke$arity$variadic = G__22191__4.cljs$core$IFn$_invoke$arity$variadic;
return G__22191;
})()
});
var comp__4 = (function() { 
var G__22194__delegate = function (f1,f2,f3,fs){var fs__$1 = cljs.core.reverse(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f1,f2,f3,fs));return ((function (fs__$1){
return (function() { 
var G__22195__delegate = function (args){var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fs__$1),args);var fs__$2 = cljs.core.next(fs__$1);while(true){
if(fs__$2)
{{
var G__22196 = cljs.core.first(fs__$2).call(null,ret);
var G__22197 = cljs.core.next(fs__$2);
ret = G__22196;
fs__$2 = G__22197;
continue;
}
} else
{return ret;
}
break;
}
};
var G__22195 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22195__delegate.call(this,args);};
G__22195.cljs$lang$maxFixedArity = 0;
G__22195.cljs$lang$applyTo = (function (arglist__22198){
var args = cljs.core.seq(arglist__22198);
return G__22195__delegate(args);
});
G__22195.cljs$core$IFn$_invoke$arity$variadic = G__22195__delegate;
return G__22195;
})()
;
;})(fs__$1))
};
var G__22194 = function (f1,f2,f3,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__22194__delegate.call(this,f1,f2,f3,fs);};
G__22194.cljs$lang$maxFixedArity = 3;
G__22194.cljs$lang$applyTo = (function (arglist__22199){
var f1 = cljs.core.first(arglist__22199);
arglist__22199 = cljs.core.next(arglist__22199);
var f2 = cljs.core.first(arglist__22199);
arglist__22199 = cljs.core.next(arglist__22199);
var f3 = cljs.core.first(arglist__22199);
var fs = cljs.core.rest(arglist__22199);
return G__22194__delegate(f1,f2,f3,fs);
});
G__22194.cljs$core$IFn$_invoke$arity$variadic = G__22194__delegate;
return G__22194;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$core$IFn$_invoke$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$core$IFn$_invoke$arity$0 = comp__0;
comp.cljs$core$IFn$_invoke$arity$1 = comp__1;
comp.cljs$core$IFn$_invoke$arity$2 = comp__2;
comp.cljs$core$IFn$_invoke$arity$3 = comp__3;
comp.cljs$core$IFn$_invoke$arity$variadic = comp__4.cljs$core$IFn$_invoke$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__1 = (function (f){return f;
});
var partial__2 = (function (f,arg1){return (function() { 
var G__22200__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg1,args);
};
var G__22200 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22200__delegate.call(this,args);};
G__22200.cljs$lang$maxFixedArity = 0;
G__22200.cljs$lang$applyTo = (function (arglist__22201){
var args = cljs.core.seq(arglist__22201);
return G__22200__delegate(args);
});
G__22200.cljs$core$IFn$_invoke$arity$variadic = G__22200__delegate;
return G__22200;
})()
;
});
var partial__3 = (function (f,arg1,arg2){return (function() { 
var G__22202__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,arg1,arg2,args);
};
var G__22202 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22202__delegate.call(this,args);};
G__22202.cljs$lang$maxFixedArity = 0;
G__22202.cljs$lang$applyTo = (function (arglist__22203){
var args = cljs.core.seq(arglist__22203);
return G__22202__delegate(args);
});
G__22202.cljs$core$IFn$_invoke$arity$variadic = G__22202__delegate;
return G__22202;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){return (function() { 
var G__22204__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,args);
};
var G__22204 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22204__delegate.call(this,args);};
G__22204.cljs$lang$maxFixedArity = 0;
G__22204.cljs$lang$applyTo = (function (arglist__22205){
var args = cljs.core.seq(arglist__22205);
return G__22204__delegate(args);
});
G__22204.cljs$core$IFn$_invoke$arity$variadic = G__22204__delegate;
return G__22204;
})()
;
});
var partial__5 = (function() { 
var G__22206__delegate = function (f,arg1,arg2,arg3,more){return (function() { 
var G__22207__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,args));
};
var G__22207 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22207__delegate.call(this,args);};
G__22207.cljs$lang$maxFixedArity = 0;
G__22207.cljs$lang$applyTo = (function (arglist__22208){
var args = cljs.core.seq(arglist__22208);
return G__22207__delegate(args);
});
G__22207.cljs$core$IFn$_invoke$arity$variadic = G__22207__delegate;
return G__22207;
})()
;
};
var G__22206 = function (f,arg1,arg2,arg3,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__22206__delegate.call(this,f,arg1,arg2,arg3,more);};
G__22206.cljs$lang$maxFixedArity = 4;
G__22206.cljs$lang$applyTo = (function (arglist__22209){
var f = cljs.core.first(arglist__22209);
arglist__22209 = cljs.core.next(arglist__22209);
var arg1 = cljs.core.first(arglist__22209);
arglist__22209 = cljs.core.next(arglist__22209);
var arg2 = cljs.core.first(arglist__22209);
arglist__22209 = cljs.core.next(arglist__22209);
var arg3 = cljs.core.first(arglist__22209);
var more = cljs.core.rest(arglist__22209);
return G__22206__delegate(f,arg1,arg2,arg3,more);
});
G__22206.cljs$core$IFn$_invoke$arity$variadic = G__22206__delegate;
return G__22206;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return partial__1.call(this,f);
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$core$IFn$_invoke$arity$1 = partial__1;
partial.cljs$core$IFn$_invoke$arity$2 = partial__2;
partial.cljs$core$IFn$_invoke$arity$3 = partial__3;
partial.cljs$core$IFn$_invoke$arity$4 = partial__4;
partial.cljs$core$IFn$_invoke$arity$variadic = partial__5.cljs$core$IFn$_invoke$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){return (function() {
var G__22242 = null;
var G__22242__1 = (function (a){var G__22226 = (((a == null))?x:a);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22226) : f.call(null,G__22226));
});
var G__22242__2 = (function (a,b){var G__22227 = (((a == null))?x:a);var G__22228 = b;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22227,G__22228) : f.call(null,G__22227,G__22228));
});
var G__22242__3 = (function (a,b,c){var G__22229 = (((a == null))?x:a);var G__22230 = b;var G__22231 = c;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22229,G__22230,G__22231) : f.call(null,G__22229,G__22230,G__22231));
});
var G__22242__4 = (function() { 
var G__22243__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__22243 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__22243__delegate.call(this,a,b,c,ds);};
G__22243.cljs$lang$maxFixedArity = 3;
G__22243.cljs$lang$applyTo = (function (arglist__22244){
var a = cljs.core.first(arglist__22244);
arglist__22244 = cljs.core.next(arglist__22244);
var b = cljs.core.first(arglist__22244);
arglist__22244 = cljs.core.next(arglist__22244);
var c = cljs.core.first(arglist__22244);
var ds = cljs.core.rest(arglist__22244);
return G__22243__delegate(a,b,c,ds);
});
G__22243.cljs$core$IFn$_invoke$arity$variadic = G__22243__delegate;
return G__22243;
})()
;
G__22242 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__22242__1.call(this,a);
case 2:
return G__22242__2.call(this,a,b);
case 3:
return G__22242__3.call(this,a,b,c);
default:
return G__22242__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22242.cljs$lang$maxFixedArity = 3;
G__22242.cljs$lang$applyTo = G__22242__4.cljs$lang$applyTo;
G__22242.cljs$core$IFn$_invoke$arity$1 = G__22242__1;
G__22242.cljs$core$IFn$_invoke$arity$2 = G__22242__2;
G__22242.cljs$core$IFn$_invoke$arity$3 = G__22242__3;
G__22242.cljs$core$IFn$_invoke$arity$variadic = G__22242__4.cljs$core$IFn$_invoke$arity$variadic;
return G__22242;
})()
});
var fnil__3 = (function (f,x,y){return (function() {
var G__22245 = null;
var G__22245__2 = (function (a,b){var G__22232 = (((a == null))?x:a);var G__22233 = (((b == null))?y:b);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22232,G__22233) : f.call(null,G__22232,G__22233));
});
var G__22245__3 = (function (a,b,c){var G__22234 = (((a == null))?x:a);var G__22235 = (((b == null))?y:b);var G__22236 = c;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22234,G__22235,G__22236) : f.call(null,G__22234,G__22235,G__22236));
});
var G__22245__4 = (function() { 
var G__22246__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__22246 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__22246__delegate.call(this,a,b,c,ds);};
G__22246.cljs$lang$maxFixedArity = 3;
G__22246.cljs$lang$applyTo = (function (arglist__22247){
var a = cljs.core.first(arglist__22247);
arglist__22247 = cljs.core.next(arglist__22247);
var b = cljs.core.first(arglist__22247);
arglist__22247 = cljs.core.next(arglist__22247);
var c = cljs.core.first(arglist__22247);
var ds = cljs.core.rest(arglist__22247);
return G__22246__delegate(a,b,c,ds);
});
G__22246.cljs$core$IFn$_invoke$arity$variadic = G__22246__delegate;
return G__22246;
})()
;
G__22245 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__22245__2.call(this,a,b);
case 3:
return G__22245__3.call(this,a,b,c);
default:
return G__22245__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22245.cljs$lang$maxFixedArity = 3;
G__22245.cljs$lang$applyTo = G__22245__4.cljs$lang$applyTo;
G__22245.cljs$core$IFn$_invoke$arity$2 = G__22245__2;
G__22245.cljs$core$IFn$_invoke$arity$3 = G__22245__3;
G__22245.cljs$core$IFn$_invoke$arity$variadic = G__22245__4.cljs$core$IFn$_invoke$arity$variadic;
return G__22245;
})()
});
var fnil__4 = (function (f,x,y,z){return (function() {
var G__22248 = null;
var G__22248__2 = (function (a,b){var G__22237 = (((a == null))?x:a);var G__22238 = (((b == null))?y:b);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22237,G__22238) : f.call(null,G__22237,G__22238));
});
var G__22248__3 = (function (a,b,c){var G__22239 = (((a == null))?x:a);var G__22240 = (((b == null))?y:b);var G__22241 = (((c == null))?z:c);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22239,G__22240,G__22241) : f.call(null,G__22239,G__22240,G__22241));
});
var G__22248__4 = (function() { 
var G__22249__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__22249 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__22249__delegate.call(this,a,b,c,ds);};
G__22249.cljs$lang$maxFixedArity = 3;
G__22249.cljs$lang$applyTo = (function (arglist__22250){
var a = cljs.core.first(arglist__22250);
arglist__22250 = cljs.core.next(arglist__22250);
var b = cljs.core.first(arglist__22250);
arglist__22250 = cljs.core.next(arglist__22250);
var c = cljs.core.first(arglist__22250);
var ds = cljs.core.rest(arglist__22250);
return G__22249__delegate(a,b,c,ds);
});
G__22249.cljs$core$IFn$_invoke$arity$variadic = G__22249__delegate;
return G__22249;
})()
;
G__22248 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__22248__2.call(this,a,b);
case 3:
return G__22248__3.call(this,a,b,c);
default:
return G__22248__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22248.cljs$lang$maxFixedArity = 3;
G__22248.cljs$lang$applyTo = G__22248__4.cljs$lang$applyTo;
G__22248.cljs$core$IFn$_invoke$arity$2 = G__22248__2;
G__22248.cljs$core$IFn$_invoke$arity$3 = G__22248__3;
G__22248.cljs$core$IFn$_invoke$arity$variadic = G__22248__4.cljs$core$IFn$_invoke$arity$variadic;
return G__22248;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$core$IFn$_invoke$arity$2 = fnil__2;
fnil.cljs$core$IFn$_invoke$arity$3 = fnil__3;
fnil.cljs$core$IFn$_invoke$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){var mapi = (function mapi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4222__auto__ = cljs.core.seq(coll__$1);if(temp__4222__auto__)
{var s = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4548__auto___22299 = size;var i_22300 = (0);while(true){
if((i_22300 < n__4548__auto___22299))
{cljs.core.chunk_append(b,(function (){var G__22295 = (idx + i_22300);var G__22296 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_22300);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22295,G__22296) : f.call(null,G__22295,G__22296));
})());
{
var G__22301 = (i_22300 + (1));
i_22300 = G__22301;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),mapi((idx + size),cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((function (){var G__22297 = idx;var G__22298 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22297,G__22298) : f.call(null,G__22297,G__22298));
})(),mapi((idx + (1)),cljs.core.rest(s)));
}
} else
{return null;
}
}),null,null));
});
return mapi((0),coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a transducer when no collection is provided.
*/
cljs.core.keep = (function() {
var keep = null;
var keep__1 = (function (f){return (function (rf){return (function() {
var G__22320 = null;
var G__22320__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__22320__1 = (function (result){var G__22314 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__22314) : rf.call(null,G__22314));
});
var G__22320__2 = (function (result,input){var v = (function (){var G__22315 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22315) : f.call(null,G__22315));
})();if((v == null))
{return result;
} else
{var G__22316 = result;var G__22317 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__22316,G__22317) : rf.call(null,G__22316,G__22317));
}
});
G__22320 = function(result,input){
switch(arguments.length){
case 0:
return G__22320__0.call(this);
case 1:
return G__22320__1.call(this,result);
case 2:
return G__22320__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22320.cljs$core$IFn$_invoke$arity$0 = G__22320__0;
G__22320.cljs$core$IFn$_invoke$arity$1 = G__22320__1;
G__22320.cljs$core$IFn$_invoke$arity$2 = G__22320__2;
return G__22320;
})()
});
});
var keep__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4222__auto__ = cljs.core.seq(coll);if(temp__4222__auto__)
{var s = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4548__auto___22321 = size;var i_22322 = (0);while(true){
if((i_22322 < n__4548__auto___22321))
{var x_22323 = (function (){var G__22318 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_22322);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22318) : f.call(null,G__22318));
})();if((x_22323 == null))
{} else
{cljs.core.chunk_append(b,x_22323);
}
{
var G__22324 = (i_22322 + (1));
i_22322 = G__22324;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else
{var x = (function (){var G__22319 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22319) : f.call(null,G__22319));
})();if((x == null))
{return keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s));
} else
{return cljs.core.cons(x,keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
}
} else
{return null;
}
}),null,null));
});
keep = function(f,coll){
switch(arguments.length){
case 1:
return keep__1.call(this,f);
case 2:
return keep__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep.cljs$core$IFn$_invoke$arity$1 = keep__1;
keep.cljs$core$IFn$_invoke$arity$2 = keep__2;
return keep;
})()
;

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 6455296;
this.cljs$lang$protocol_mask$partition1$ = 16386;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorStr = "cljs.core/Atom";
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__22325 = this$__$1;return goog.getUid(G__22325);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__22326 = cljs.core.seq(self__.watches);var chunk__22327 = null;var count__22328 = (0);var i__22329 = (0);while(true){
if((i__22329 < count__22328))
{var vec__22330 = chunk__22327.cljs$core$IIndexed$_nth$arity$2(null,i__22329);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22330,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22330,(1),null);var G__22331_22340 = key;var G__22332_22341 = this$__$1;var G__22333_22342 = oldval;var G__22334_22343 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__22331_22340,G__22332_22341,G__22333_22342,G__22334_22343) : f.call(null,G__22331_22340,G__22332_22341,G__22333_22342,G__22334_22343));
{
var G__22344 = seq__22326;
var G__22345 = chunk__22327;
var G__22346 = count__22328;
var G__22347 = (i__22329 + (1));
seq__22326 = G__22344;
chunk__22327 = G__22345;
count__22328 = G__22346;
i__22329 = G__22347;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq(seq__22326);if(temp__4222__auto__)
{var seq__22326__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22326__$1))
{var c__4448__auto__ = cljs.core.chunk_first(seq__22326__$1);{
var G__22348 = cljs.core.chunk_rest(seq__22326__$1);
var G__22349 = c__4448__auto__;
var G__22350 = cljs.core.count(c__4448__auto__);
var G__22351 = (0);
seq__22326 = G__22348;
chunk__22327 = G__22349;
count__22328 = G__22350;
i__22329 = G__22351;
continue;
}
} else
{var vec__22335 = cljs.core.first(seq__22326__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22335,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22335,(1),null);var G__22336_22352 = key;var G__22337_22353 = this$__$1;var G__22338_22354 = oldval;var G__22339_22355 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__22336_22352,G__22337_22353,G__22338_22354,G__22339_22355) : f.call(null,G__22336_22352,G__22337_22353,G__22338_22354,G__22339_22355));
{
var G__22356 = cljs.core.next(seq__22326__$1);
var G__22357 = null;
var G__22358 = (0);
var G__22359 = (0);
seq__22326 = G__22356;
chunk__22327 = G__22357;
count__22328 = G__22358;
i__22329 = G__22359;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
return this$__$1;
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
cljs.core.Atom.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_Atom = (function __GT_Atom(state,meta,validator,watches){return (new cljs.core.Atom(state,meta,validator,watches));
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__22363__delegate = function (x,p__22360){var map__22362 = p__22360;var map__22362__$1 = ((cljs.core.seq_QMARK_(map__22362))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22362):map__22362);var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22362__$1,cljs.core.constant$keyword$8);var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22362__$1,cljs.core.constant$keyword$3);return (new cljs.core.Atom(x,meta,validator,null));
};
var G__22363 = function (x,var_args){
var p__22360 = null;if (arguments.length > 1) {
  p__22360 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__22363__delegate.call(this,x,p__22360);};
G__22363.cljs$lang$maxFixedArity = 1;
G__22363.cljs$lang$applyTo = (function (arglist__22364){
var x = cljs.core.first(arglist__22364);
var p__22360 = cljs.core.rest(arglist__22364);
return G__22363__delegate(x,p__22360);
});
G__22363.cljs$core$IFn$_invoke$arity$variadic = G__22363__delegate;
return G__22363;
})()
;
atom = function(x,var_args){
var p__22360 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){if((a instanceof cljs.core.Atom))
{var validate = a.validator;if((validate == null))
{} else
{if(cljs.core.truth_((function (){var G__22367 = new_value;return (validate.cljs$core$IFn$_invoke$arity$1 ? validate.cljs$core$IFn$_invoke$arity$1(G__22367) : validate.call(null,G__22367));
})()))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__22368 = cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null));return (cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1 ? cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1(G__22368) : cljs.core.pr_str.call(null,G__22368));
})()))));
}
}
var old_value = a.state;a.state = new_value;
if((a.watches == null))
{} else
{cljs.core._notify_watches(a,old_value,new_value);
}
return new_value;
} else
{return cljs.core._reset_BANG_(a,new_value);
}
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__22375 = a.state;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22375) : f.call(null,G__22375));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,f);
}
});
var swap_BANG___3 = (function (a,f,x){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__22376 = a.state;var G__22377 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22376,G__22377) : f.call(null,G__22376,G__22377));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,f,x);
}
});
var swap_BANG___4 = (function (a,f,x,y){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__22378 = a.state;var G__22379 = x;var G__22380 = y;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22378,G__22379,G__22380) : f.call(null,G__22378,G__22379,G__22380));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,f,x,y);
}
});
var swap_BANG___5 = (function() { 
var G__22381__delegate = function (a,f,x,y,more){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a.state,x,y,more));
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a,f,x,y,more);
}
};
var G__22381 = function (a,f,x,y,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__22381__delegate.call(this,a,f,x,y,more);};
G__22381.cljs$lang$maxFixedArity = 4;
G__22381.cljs$lang$applyTo = (function (arglist__22382){
var a = cljs.core.first(arglist__22382);
arglist__22382 = cljs.core.next(arglist__22382);
var f = cljs.core.first(arglist__22382);
arglist__22382 = cljs.core.next(arglist__22382);
var x = cljs.core.first(arglist__22382);
arglist__22382 = cljs.core.next(arglist__22382);
var y = cljs.core.first(arglist__22382);
var more = cljs.core.rest(arglist__22382);
return G__22381__delegate(a,f,x,y,more);
});
G__22381.cljs$core$IFn$_invoke$arity$variadic = G__22381__delegate;
return G__22381;
})()
;
swap_BANG_ = function(a,f,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
default:
return swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic(a,f,x,y, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 4;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5.cljs$lang$applyTo;
swap_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_BANG___2;
swap_BANG_.cljs$core$IFn$_invoke$arity$3 = swap_BANG___3;
swap_BANG_.cljs$core$IFn$_invoke$arity$4 = swap_BANG___4;
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.state,oldval))
{cljs.core.reset_BANG_(a,newval);
return true;
} else
{return false;
}
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){return iref.validator;
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a stateful transducer when no collection is
* provided.
*/
cljs.core.keep_indexed = (function() {
var keep_indexed = null;
var keep_indexed__1 = (function (f){return (function (rf){var ia = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));return ((function (ia){
return (function() {
var G__22449 = null;
var G__22449__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__22449__1 = (function (result){var G__22416 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__22416) : rf.call(null,G__22416));
});
var G__22449__2 = (function (result,input){var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);var v = (function (){var G__22417 = i;var G__22418 = input;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22417,G__22418) : f.call(null,G__22417,G__22418));
})();if((v == null))
{return result;
} else
{var G__22419 = result;var G__22420 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__22419,G__22420) : rf.call(null,G__22419,G__22420));
}
});
G__22449 = function(result,input){
switch(arguments.length){
case 0:
return G__22449__0.call(this);
case 1:
return G__22449__1.call(this,result);
case 2:
return G__22449__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22449.cljs$core$IFn$_invoke$arity$0 = G__22449__0;
G__22449.cljs$core$IFn$_invoke$arity$1 = G__22449__1;
G__22449.cljs$core$IFn$_invoke$arity$2 = G__22449__2;
return G__22449;
})()
;})(ia))
});
});
var keep_indexed__2 = (function (f,coll){var keepi = (function keepi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4222__auto__ = cljs.core.seq(coll__$1);if(temp__4222__auto__)
{var s = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4548__auto___22450 = size;var i_22451 = (0);while(true){
if((i_22451 < n__4548__auto___22450))
{var x_22452 = (function (){var G__22445 = (idx + i_22451);var G__22446 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_22451);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22445,G__22446) : f.call(null,G__22445,G__22446));
})();if((x_22452 == null))
{} else
{cljs.core.chunk_append(b,x_22452);
}
{
var G__22453 = (i_22451 + (1));
i_22451 = G__22453;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keepi((idx + size),cljs.core.chunk_rest(s)));
} else
{var x = (function (){var G__22447 = idx;var G__22448 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22447,G__22448) : f.call(null,G__22447,G__22448));
})();if((x == null))
{return keepi((idx + (1)),cljs.core.rest(s));
} else
{return cljs.core.cons(x,keepi((idx + (1)),cljs.core.rest(s)));
}
}
} else
{return null;
}
}),null,null));
});
return keepi((0),coll);
});
keep_indexed = function(f,coll){
switch(arguments.length){
case 1:
return keep_indexed__1.call(this,f);
case 2:
return keep_indexed__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep_indexed.cljs$core$IFn$_invoke$arity$1 = keep_indexed__1;
keep_indexed.cljs$core$IFn$_invoke$arity$2 = keep_indexed__2;
return keep_indexed;
})()
;
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){return (function() {
var ep1 = null;
var ep1__0 = (function (){return true;
});
var ep1__1 = (function (x){return cljs.core.boolean$((function (){var G__22667 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__22667) : p.call(null,G__22667));
})());
});
var ep1__2 = (function (x,y){return cljs.core.boolean$((function (){var and__3666__auto__ = (function (){var G__22669 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__22669) : p.call(null,G__22669));
})();if(cljs.core.truth_(and__3666__auto__))
{var G__22670 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__22670) : p.call(null,G__22670));
} else
{return and__3666__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__3666__auto__ = (function (){var G__22672 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__22672) : p.call(null,G__22672));
})();if(cljs.core.truth_(and__3666__auto__))
{var and__3666__auto____$1 = (function (){var G__22674 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__22674) : p.call(null,G__22674));
})();if(cljs.core.truth_(and__3666__auto____$1))
{var G__22675 = z;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__22675) : p.call(null,G__22675));
} else
{return and__3666__auto____$1;
}
} else
{return and__3666__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__22844__delegate = function (x,y,z,args){return cljs.core.boolean$((ep1.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(p,args)));
};
var G__22844 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__22844__delegate.call(this,x,y,z,args);};
G__22844.cljs$lang$maxFixedArity = 3;
G__22844.cljs$lang$applyTo = (function (arglist__22845){
var x = cljs.core.first(arglist__22845);
arglist__22845 = cljs.core.next(arglist__22845);
var y = cljs.core.first(arglist__22845);
arglist__22845 = cljs.core.next(arglist__22845);
var z = cljs.core.first(arglist__22845);
var args = cljs.core.rest(arglist__22845);
return G__22844__delegate(x,y,z,args);
});
G__22844.cljs$core$IFn$_invoke$arity$variadic = G__22844__delegate;
return G__22844;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$core$IFn$_invoke$arity$0 = ep1__0;
ep1.cljs$core$IFn$_invoke$arity$1 = ep1__1;
ep1.cljs$core$IFn$_invoke$arity$2 = ep1__2;
ep1.cljs$core$IFn$_invoke$arity$3 = ep1__3;
ep1.cljs$core$IFn$_invoke$arity$variadic = ep1__4.cljs$core$IFn$_invoke$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){return (function() {
var ep2 = null;
var ep2__0 = (function (){return true;
});
var ep2__1 = (function (x){return cljs.core.boolean$((function (){var and__3666__auto__ = (function (){var G__22707 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__22707) : p1.call(null,G__22707));
})();if(cljs.core.truth_(and__3666__auto__))
{var G__22708 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__22708) : p2.call(null,G__22708));
} else
{return and__3666__auto__;
}
})());
});
var ep2__2 = (function (x,y){return cljs.core.boolean$((function (){var and__3666__auto__ = (function (){var G__22710 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__22710) : p1.call(null,G__22710));
})();if(cljs.core.truth_(and__3666__auto__))
{var and__3666__auto____$1 = (function (){var G__22712 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__22712) : p1.call(null,G__22712));
})();if(cljs.core.truth_(and__3666__auto____$1))
{var and__3666__auto____$2 = (function (){var G__22714 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__22714) : p2.call(null,G__22714));
})();if(cljs.core.truth_(and__3666__auto____$2))
{var G__22715 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__22715) : p2.call(null,G__22715));
} else
{return and__3666__auto____$2;
}
} else
{return and__3666__auto____$1;
}
} else
{return and__3666__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__3666__auto__ = (function (){var G__22717 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__22717) : p1.call(null,G__22717));
})();if(cljs.core.truth_(and__3666__auto__))
{var and__3666__auto____$1 = (function (){var G__22719 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__22719) : p1.call(null,G__22719));
})();if(cljs.core.truth_(and__3666__auto____$1))
{var and__3666__auto____$2 = (function (){var G__22721 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__22721) : p1.call(null,G__22721));
})();if(cljs.core.truth_(and__3666__auto____$2))
{var and__3666__auto____$3 = (function (){var G__22723 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__22723) : p2.call(null,G__22723));
})();if(cljs.core.truth_(and__3666__auto____$3))
{var and__3666__auto____$4 = (function (){var G__22725 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__22725) : p2.call(null,G__22725));
})();if(cljs.core.truth_(and__3666__auto____$4))
{var G__22726 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__22726) : p2.call(null,G__22726));
} else
{return and__3666__auto____$4;
}
} else
{return and__3666__auto____$3;
}
} else
{return and__3666__auto____$2;
}
} else
{return and__3666__auto____$1;
}
} else
{return and__3666__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__22846__delegate = function (x,y,z,args){return cljs.core.boolean$((ep2.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__22454_SHARP_){var and__3666__auto__ = (function (){var G__22731 = p1__22454_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__22731) : p1.call(null,G__22731));
})();if(cljs.core.truth_(and__3666__auto__))
{var G__22732 = p1__22454_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__22732) : p2.call(null,G__22732));
} else
{return and__3666__auto__;
}
}),args)));
};
var G__22846 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__22846__delegate.call(this,x,y,z,args);};
G__22846.cljs$lang$maxFixedArity = 3;
G__22846.cljs$lang$applyTo = (function (arglist__22847){
var x = cljs.core.first(arglist__22847);
arglist__22847 = cljs.core.next(arglist__22847);
var y = cljs.core.first(arglist__22847);
arglist__22847 = cljs.core.next(arglist__22847);
var z = cljs.core.first(arglist__22847);
var args = cljs.core.rest(arglist__22847);
return G__22846__delegate(x,y,z,args);
});
G__22846.cljs$core$IFn$_invoke$arity$variadic = G__22846__delegate;
return G__22846;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$core$IFn$_invoke$arity$0 = ep2__0;
ep2.cljs$core$IFn$_invoke$arity$1 = ep2__1;
ep2.cljs$core$IFn$_invoke$arity$2 = ep2__2;
ep2.cljs$core$IFn$_invoke$arity$3 = ep2__3;
ep2.cljs$core$IFn$_invoke$arity$variadic = ep2__4.cljs$core$IFn$_invoke$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){return (function() {
var ep3 = null;
var ep3__0 = (function (){return true;
});
var ep3__1 = (function (x){return cljs.core.boolean$((function (){var and__3666__auto__ = (function (){var G__22778 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__22778) : p1.call(null,G__22778));
})();if(cljs.core.truth_(and__3666__auto__))
{var and__3666__auto____$1 = (function (){var G__22780 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__22780) : p2.call(null,G__22780));
})();if(cljs.core.truth_(and__3666__auto____$1))
{var G__22781 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__22781) : p3.call(null,G__22781));
} else
{return and__3666__auto____$1;
}
} else
{return and__3666__auto__;
}
})());
});
var ep3__2 = (function (x,y){return cljs.core.boolean$((function (){var and__3666__auto__ = (function (){var G__22783 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__22783) : p1.call(null,G__22783));
})();if(cljs.core.truth_(and__3666__auto__))
{var and__3666__auto____$1 = (function (){var G__22785 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__22785) : p2.call(null,G__22785));
})();if(cljs.core.truth_(and__3666__auto____$1))
{var and__3666__auto____$2 = (function (){var G__22787 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__22787) : p3.call(null,G__22787));
})();if(cljs.core.truth_(and__3666__auto____$2))
{var and__3666__auto____$3 = (function (){var G__22789 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__22789) : p1.call(null,G__22789));
})();if(cljs.core.truth_(and__3666__auto____$3))
{var and__3666__auto____$4 = (function (){var G__22791 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__22791) : p2.call(null,G__22791));
})();if(cljs.core.truth_(and__3666__auto____$4))
{var G__22792 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__22792) : p3.call(null,G__22792));
} else
{return and__3666__auto____$4;
}
} else
{return and__3666__auto____$3;
}
} else
{return and__3666__auto____$2;
}
} else
{return and__3666__auto____$1;
}
} else
{return and__3666__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__3666__auto__ = (function (){var G__22794 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__22794) : p1.call(null,G__22794));
})();if(cljs.core.truth_(and__3666__auto__))
{var and__3666__auto____$1 = (function (){var G__22796 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__22796) : p2.call(null,G__22796));
})();if(cljs.core.truth_(and__3666__auto____$1))
{var and__3666__auto____$2 = (function (){var G__22798 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__22798) : p3.call(null,G__22798));
})();if(cljs.core.truth_(and__3666__auto____$2))
{var and__3666__auto____$3 = (function (){var G__22800 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__22800) : p1.call(null,G__22800));
})();if(cljs.core.truth_(and__3666__auto____$3))
{var and__3666__auto____$4 = (function (){var G__22802 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__22802) : p2.call(null,G__22802));
})();if(cljs.core.truth_(and__3666__auto____$4))
{var and__3666__auto____$5 = (function (){var G__22804 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__22804) : p3.call(null,G__22804));
})();if(cljs.core.truth_(and__3666__auto____$5))
{var and__3666__auto____$6 = (function (){var G__22806 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__22806) : p1.call(null,G__22806));
})();if(cljs.core.truth_(and__3666__auto____$6))
{var and__3666__auto____$7 = (function (){var G__22808 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__22808) : p2.call(null,G__22808));
})();if(cljs.core.truth_(and__3666__auto____$7))
{var G__22809 = z;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__22809) : p3.call(null,G__22809));
} else
{return and__3666__auto____$7;
}
} else
{return and__3666__auto____$6;
}
} else
{return and__3666__auto____$5;
}
} else
{return and__3666__auto____$4;
}
} else
{return and__3666__auto____$3;
}
} else
{return and__3666__auto____$2;
}
} else
{return and__3666__auto____$1;
}
} else
{return and__3666__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__22848__delegate = function (x,y,z,args){return cljs.core.boolean$((ep3.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__22455_SHARP_){var and__3666__auto__ = (function (){var G__22816 = p1__22455_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__22816) : p1.call(null,G__22816));
})();if(cljs.core.truth_(and__3666__auto__))
{var and__3666__auto____$1 = (function (){var G__22818 = p1__22455_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__22818) : p2.call(null,G__22818));
})();if(cljs.core.truth_(and__3666__auto____$1))
{var G__22819 = p1__22455_SHARP_;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__22819) : p3.call(null,G__22819));
} else
{return and__3666__auto____$1;
}
} else
{return and__3666__auto__;
}
}),args)));
};
var G__22848 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__22848__delegate.call(this,x,y,z,args);};
G__22848.cljs$lang$maxFixedArity = 3;
G__22848.cljs$lang$applyTo = (function (arglist__22849){
var x = cljs.core.first(arglist__22849);
arglist__22849 = cljs.core.next(arglist__22849);
var y = cljs.core.first(arglist__22849);
arglist__22849 = cljs.core.next(arglist__22849);
var z = cljs.core.first(arglist__22849);
var args = cljs.core.rest(arglist__22849);
return G__22848__delegate(x,y,z,args);
});
G__22848.cljs$core$IFn$_invoke$arity$variadic = G__22848__delegate;
return G__22848;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$core$IFn$_invoke$arity$0 = ep3__0;
ep3.cljs$core$IFn$_invoke$arity$1 = ep3__1;
ep3.cljs$core$IFn$_invoke$arity$2 = ep3__2;
ep3.cljs$core$IFn$_invoke$arity$3 = ep3__3;
ep3.cljs$core$IFn$_invoke$arity$variadic = ep3__4.cljs$core$IFn$_invoke$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__22850__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);return ((function (ps__$1){
return (function() {
var epn = null;
var epn__0 = (function (){return true;
});
var epn__1 = (function (x){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__22456_SHARP_){var G__22835 = x;return (p1__22456_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22456_SHARP_.cljs$core$IFn$_invoke$arity$1(G__22835) : p1__22456_SHARP_.call(null,G__22835));
});})(ps__$1))
,ps__$1);
});
var epn__2 = (function (x,y){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__22457_SHARP_){var and__3666__auto__ = (function (){var G__22837 = x;return (p1__22457_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22457_SHARP_.cljs$core$IFn$_invoke$arity$1(G__22837) : p1__22457_SHARP_.call(null,G__22837));
})();if(cljs.core.truth_(and__3666__auto__))
{var G__22838 = y;return (p1__22457_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22457_SHARP_.cljs$core$IFn$_invoke$arity$1(G__22838) : p1__22457_SHARP_.call(null,G__22838));
} else
{return and__3666__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__3 = (function (x,y,z){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__22458_SHARP_){var and__3666__auto__ = (function (){var G__22840 = x;return (p1__22458_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22458_SHARP_.cljs$core$IFn$_invoke$arity$1(G__22840) : p1__22458_SHARP_.call(null,G__22840));
})();if(cljs.core.truth_(and__3666__auto__))
{var and__3666__auto____$1 = (function (){var G__22842 = y;return (p1__22458_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22458_SHARP_.cljs$core$IFn$_invoke$arity$1(G__22842) : p1__22458_SHARP_.call(null,G__22842));
})();if(cljs.core.truth_(and__3666__auto____$1))
{var G__22843 = z;return (p1__22458_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22458_SHARP_.cljs$core$IFn$_invoke$arity$1(G__22843) : p1__22458_SHARP_.call(null,G__22843));
} else
{return and__3666__auto____$1;
}
} else
{return and__3666__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__4 = (function() { 
var G__22851__delegate = function (x,y,z,args){return cljs.core.boolean$((epn.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__22459_SHARP_){return cljs.core.every_QMARK_(p1__22459_SHARP_,args);
});})(ps__$1))
,ps__$1)));
};
var G__22851 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__22851__delegate.call(this,x,y,z,args);};
G__22851.cljs$lang$maxFixedArity = 3;
G__22851.cljs$lang$applyTo = (function (arglist__22852){
var x = cljs.core.first(arglist__22852);
arglist__22852 = cljs.core.next(arglist__22852);
var y = cljs.core.first(arglist__22852);
arglist__22852 = cljs.core.next(arglist__22852);
var z = cljs.core.first(arglist__22852);
var args = cljs.core.rest(arglist__22852);
return G__22851__delegate(x,y,z,args);
});
G__22851.cljs$core$IFn$_invoke$arity$variadic = G__22851__delegate;
return G__22851;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$core$IFn$_invoke$arity$0 = epn__0;
epn.cljs$core$IFn$_invoke$arity$1 = epn__1;
epn.cljs$core$IFn$_invoke$arity$2 = epn__2;
epn.cljs$core$IFn$_invoke$arity$3 = epn__3;
epn.cljs$core$IFn$_invoke$arity$variadic = epn__4.cljs$core$IFn$_invoke$arity$variadic;
return epn;
})()
;})(ps__$1))
};
var G__22850 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__22850__delegate.call(this,p1,p2,p3,ps);};
G__22850.cljs$lang$maxFixedArity = 3;
G__22850.cljs$lang$applyTo = (function (arglist__22853){
var p1 = cljs.core.first(arglist__22853);
arglist__22853 = cljs.core.next(arglist__22853);
var p2 = cljs.core.first(arglist__22853);
arglist__22853 = cljs.core.next(arglist__22853);
var p3 = cljs.core.first(arglist__22853);
var ps = cljs.core.rest(arglist__22853);
return G__22850__delegate(p1,p2,p3,ps);
});
G__22850.cljs$core$IFn$_invoke$arity$variadic = G__22850__delegate;
return G__22850;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$core$IFn$_invoke$arity$1 = every_pred__1;
every_pred.cljs$core$IFn$_invoke$arity$2 = every_pred__2;
every_pred.cljs$core$IFn$_invoke$arity$3 = every_pred__3;
every_pred.cljs$core$IFn$_invoke$arity$variadic = every_pred__4.cljs$core$IFn$_invoke$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){return (function() {
var sp1 = null;
var sp1__0 = (function (){return null;
});
var sp1__1 = (function (x){var G__23059 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23059) : p.call(null,G__23059));
});
var sp1__2 = (function (x,y){var or__3678__auto__ = (function (){var G__23061 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23061) : p.call(null,G__23061));
})();if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{var G__23062 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23062) : p.call(null,G__23062));
}
});
var sp1__3 = (function (x,y,z){var or__3678__auto__ = (function (){var G__23064 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23064) : p.call(null,G__23064));
})();if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (function (){var G__23066 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23066) : p.call(null,G__23066));
})();if(cljs.core.truth_(or__3678__auto____$1))
{return or__3678__auto____$1;
} else
{var G__23067 = z;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23067) : p.call(null,G__23067));
}
}
});
var sp1__4 = (function() { 
var G__23228__delegate = function (x,y,z,args){var or__3678__auto__ = sp1.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return cljs.core.some(p,args);
}
};
var G__23228 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23228__delegate.call(this,x,y,z,args);};
G__23228.cljs$lang$maxFixedArity = 3;
G__23228.cljs$lang$applyTo = (function (arglist__23229){
var x = cljs.core.first(arglist__23229);
arglist__23229 = cljs.core.next(arglist__23229);
var y = cljs.core.first(arglist__23229);
arglist__23229 = cljs.core.next(arglist__23229);
var z = cljs.core.first(arglist__23229);
var args = cljs.core.rest(arglist__23229);
return G__23228__delegate(x,y,z,args);
});
G__23228.cljs$core$IFn$_invoke$arity$variadic = G__23228__delegate;
return G__23228;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$core$IFn$_invoke$arity$0 = sp1__0;
sp1.cljs$core$IFn$_invoke$arity$1 = sp1__1;
sp1.cljs$core$IFn$_invoke$arity$2 = sp1__2;
sp1.cljs$core$IFn$_invoke$arity$3 = sp1__3;
sp1.cljs$core$IFn$_invoke$arity$variadic = sp1__4.cljs$core$IFn$_invoke$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){return (function() {
var sp2 = null;
var sp2__0 = (function (){return null;
});
var sp2__1 = (function (x){var or__3678__auto__ = (function (){var G__23099 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23099) : p1.call(null,G__23099));
})();if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{var G__23100 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23100) : p2.call(null,G__23100));
}
});
var sp2__2 = (function (x,y){var or__3678__auto__ = (function (){var G__23102 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23102) : p1.call(null,G__23102));
})();if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (function (){var G__23104 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23104) : p1.call(null,G__23104));
})();if(cljs.core.truth_(or__3678__auto____$1))
{return or__3678__auto____$1;
} else
{var or__3678__auto____$2 = (function (){var G__23106 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23106) : p2.call(null,G__23106));
})();if(cljs.core.truth_(or__3678__auto____$2))
{return or__3678__auto____$2;
} else
{var G__23107 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23107) : p2.call(null,G__23107));
}
}
}
});
var sp2__3 = (function (x,y,z){var or__3678__auto__ = (function (){var G__23109 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23109) : p1.call(null,G__23109));
})();if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (function (){var G__23111 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23111) : p1.call(null,G__23111));
})();if(cljs.core.truth_(or__3678__auto____$1))
{return or__3678__auto____$1;
} else
{var or__3678__auto____$2 = (function (){var G__23113 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23113) : p1.call(null,G__23113));
})();if(cljs.core.truth_(or__3678__auto____$2))
{return or__3678__auto____$2;
} else
{var or__3678__auto____$3 = (function (){var G__23115 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23115) : p2.call(null,G__23115));
})();if(cljs.core.truth_(or__3678__auto____$3))
{return or__3678__auto____$3;
} else
{var or__3678__auto____$4 = (function (){var G__23117 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23117) : p2.call(null,G__23117));
})();if(cljs.core.truth_(or__3678__auto____$4))
{return or__3678__auto____$4;
} else
{var G__23118 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23118) : p2.call(null,G__23118));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__23230__delegate = function (x,y,z,args){var or__3678__auto__ = sp2.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return cljs.core.some(((function (or__3678__auto__){
return (function (p1__22854_SHARP_){var or__3678__auto____$1 = (function (){var G__23120 = p1__22854_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23120) : p1.call(null,G__23120));
})();if(cljs.core.truth_(or__3678__auto____$1))
{return or__3678__auto____$1;
} else
{var G__23121 = p1__22854_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23121) : p2.call(null,G__23121));
}
});})(or__3678__auto__))
,args);
}
};
var G__23230 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23230__delegate.call(this,x,y,z,args);};
G__23230.cljs$lang$maxFixedArity = 3;
G__23230.cljs$lang$applyTo = (function (arglist__23231){
var x = cljs.core.first(arglist__23231);
arglist__23231 = cljs.core.next(arglist__23231);
var y = cljs.core.first(arglist__23231);
arglist__23231 = cljs.core.next(arglist__23231);
var z = cljs.core.first(arglist__23231);
var args = cljs.core.rest(arglist__23231);
return G__23230__delegate(x,y,z,args);
});
G__23230.cljs$core$IFn$_invoke$arity$variadic = G__23230__delegate;
return G__23230;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$core$IFn$_invoke$arity$0 = sp2__0;
sp2.cljs$core$IFn$_invoke$arity$1 = sp2__1;
sp2.cljs$core$IFn$_invoke$arity$2 = sp2__2;
sp2.cljs$core$IFn$_invoke$arity$3 = sp2__3;
sp2.cljs$core$IFn$_invoke$arity$variadic = sp2__4.cljs$core$IFn$_invoke$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){return (function() {
var sp3 = null;
var sp3__0 = (function (){return null;
});
var sp3__1 = (function (x){var or__3678__auto__ = (function (){var G__23167 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23167) : p1.call(null,G__23167));
})();if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (function (){var G__23169 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23169) : p2.call(null,G__23169));
})();if(cljs.core.truth_(or__3678__auto____$1))
{return or__3678__auto____$1;
} else
{var G__23170 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23170) : p3.call(null,G__23170));
}
}
});
var sp3__2 = (function (x,y){var or__3678__auto__ = (function (){var G__23172 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23172) : p1.call(null,G__23172));
})();if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (function (){var G__23174 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23174) : p2.call(null,G__23174));
})();if(cljs.core.truth_(or__3678__auto____$1))
{return or__3678__auto____$1;
} else
{var or__3678__auto____$2 = (function (){var G__23176 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23176) : p3.call(null,G__23176));
})();if(cljs.core.truth_(or__3678__auto____$2))
{return or__3678__auto____$2;
} else
{var or__3678__auto____$3 = (function (){var G__23178 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23178) : p1.call(null,G__23178));
})();if(cljs.core.truth_(or__3678__auto____$3))
{return or__3678__auto____$3;
} else
{var or__3678__auto____$4 = (function (){var G__23180 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23180) : p2.call(null,G__23180));
})();if(cljs.core.truth_(or__3678__auto____$4))
{return or__3678__auto____$4;
} else
{var G__23181 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23181) : p3.call(null,G__23181));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){var or__3678__auto__ = (function (){var G__23183 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23183) : p1.call(null,G__23183));
})();if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (function (){var G__23185 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23185) : p2.call(null,G__23185));
})();if(cljs.core.truth_(or__3678__auto____$1))
{return or__3678__auto____$1;
} else
{var or__3678__auto____$2 = (function (){var G__23187 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23187) : p3.call(null,G__23187));
})();if(cljs.core.truth_(or__3678__auto____$2))
{return or__3678__auto____$2;
} else
{var or__3678__auto____$3 = (function (){var G__23189 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23189) : p1.call(null,G__23189));
})();if(cljs.core.truth_(or__3678__auto____$3))
{return or__3678__auto____$3;
} else
{var or__3678__auto____$4 = (function (){var G__23191 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23191) : p2.call(null,G__23191));
})();if(cljs.core.truth_(or__3678__auto____$4))
{return or__3678__auto____$4;
} else
{var or__3678__auto____$5 = (function (){var G__23193 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23193) : p3.call(null,G__23193));
})();if(cljs.core.truth_(or__3678__auto____$5))
{return or__3678__auto____$5;
} else
{var or__3678__auto____$6 = (function (){var G__23195 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23195) : p1.call(null,G__23195));
})();if(cljs.core.truth_(or__3678__auto____$6))
{return or__3678__auto____$6;
} else
{var or__3678__auto____$7 = (function (){var G__23197 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23197) : p2.call(null,G__23197));
})();if(cljs.core.truth_(or__3678__auto____$7))
{return or__3678__auto____$7;
} else
{var G__23198 = z;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23198) : p3.call(null,G__23198));
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__23232__delegate = function (x,y,z,args){var or__3678__auto__ = sp3.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return cljs.core.some(((function (or__3678__auto__){
return (function (p1__22855_SHARP_){var or__3678__auto____$1 = (function (){var G__23200 = p1__22855_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23200) : p1.call(null,G__23200));
})();if(cljs.core.truth_(or__3678__auto____$1))
{return or__3678__auto____$1;
} else
{var or__3678__auto____$2 = (function (){var G__23202 = p1__22855_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23202) : p2.call(null,G__23202));
})();if(cljs.core.truth_(or__3678__auto____$2))
{return or__3678__auto____$2;
} else
{var G__23203 = p1__22855_SHARP_;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23203) : p3.call(null,G__23203));
}
}
});})(or__3678__auto__))
,args);
}
};
var G__23232 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23232__delegate.call(this,x,y,z,args);};
G__23232.cljs$lang$maxFixedArity = 3;
G__23232.cljs$lang$applyTo = (function (arglist__23233){
var x = cljs.core.first(arglist__23233);
arglist__23233 = cljs.core.next(arglist__23233);
var y = cljs.core.first(arglist__23233);
arglist__23233 = cljs.core.next(arglist__23233);
var z = cljs.core.first(arglist__23233);
var args = cljs.core.rest(arglist__23233);
return G__23232__delegate(x,y,z,args);
});
G__23232.cljs$core$IFn$_invoke$arity$variadic = G__23232__delegate;
return G__23232;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$core$IFn$_invoke$arity$0 = sp3__0;
sp3.cljs$core$IFn$_invoke$arity$1 = sp3__1;
sp3.cljs$core$IFn$_invoke$arity$2 = sp3__2;
sp3.cljs$core$IFn$_invoke$arity$3 = sp3__3;
sp3.cljs$core$IFn$_invoke$arity$variadic = sp3__4.cljs$core$IFn$_invoke$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__23234__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);return ((function (ps__$1){
return (function() {
var spn = null;
var spn__0 = (function (){return null;
});
var spn__1 = (function (x){return cljs.core.some(((function (ps__$1){
return (function (p1__22856_SHARP_){var G__23219 = x;return (p1__22856_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22856_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23219) : p1__22856_SHARP_.call(null,G__23219));
});})(ps__$1))
,ps__$1);
});
var spn__2 = (function (x,y){return cljs.core.some(((function (ps__$1){
return (function (p1__22857_SHARP_){var or__3678__auto__ = (function (){var G__23221 = x;return (p1__22857_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22857_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23221) : p1__22857_SHARP_.call(null,G__23221));
})();if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{var G__23222 = y;return (p1__22857_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22857_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23222) : p1__22857_SHARP_.call(null,G__23222));
}
});})(ps__$1))
,ps__$1);
});
var spn__3 = (function (x,y,z){return cljs.core.some(((function (ps__$1){
return (function (p1__22858_SHARP_){var or__3678__auto__ = (function (){var G__23224 = x;return (p1__22858_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22858_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23224) : p1__22858_SHARP_.call(null,G__23224));
})();if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (function (){var G__23226 = y;return (p1__22858_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22858_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23226) : p1__22858_SHARP_.call(null,G__23226));
})();if(cljs.core.truth_(or__3678__auto____$1))
{return or__3678__auto____$1;
} else
{var G__23227 = z;return (p1__22858_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22858_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23227) : p1__22858_SHARP_.call(null,G__23227));
}
}
});})(ps__$1))
,ps__$1);
});
var spn__4 = (function() { 
var G__23235__delegate = function (x,y,z,args){var or__3678__auto__ = spn.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return cljs.core.some(((function (or__3678__auto__,ps__$1){
return (function (p1__22859_SHARP_){return cljs.core.some(p1__22859_SHARP_,args);
});})(or__3678__auto__,ps__$1))
,ps__$1);
}
};
var G__23235 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23235__delegate.call(this,x,y,z,args);};
G__23235.cljs$lang$maxFixedArity = 3;
G__23235.cljs$lang$applyTo = (function (arglist__23236){
var x = cljs.core.first(arglist__23236);
arglist__23236 = cljs.core.next(arglist__23236);
var y = cljs.core.first(arglist__23236);
arglist__23236 = cljs.core.next(arglist__23236);
var z = cljs.core.first(arglist__23236);
var args = cljs.core.rest(arglist__23236);
return G__23235__delegate(x,y,z,args);
});
G__23235.cljs$core$IFn$_invoke$arity$variadic = G__23235__delegate;
return G__23235;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$core$IFn$_invoke$arity$0 = spn__0;
spn.cljs$core$IFn$_invoke$arity$1 = spn__1;
spn.cljs$core$IFn$_invoke$arity$2 = spn__2;
spn.cljs$core$IFn$_invoke$arity$3 = spn__3;
spn.cljs$core$IFn$_invoke$arity$variadic = spn__4.cljs$core$IFn$_invoke$arity$variadic;
return spn;
})()
;})(ps__$1))
};
var G__23234 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23234__delegate.call(this,p1,p2,p3,ps);};
G__23234.cljs$lang$maxFixedArity = 3;
G__23234.cljs$lang$applyTo = (function (arglist__23237){
var p1 = cljs.core.first(arglist__23237);
arglist__23237 = cljs.core.next(arglist__23237);
var p2 = cljs.core.first(arglist__23237);
arglist__23237 = cljs.core.next(arglist__23237);
var p3 = cljs.core.first(arglist__23237);
var ps = cljs.core.rest(arglist__23237);
return G__23234__delegate(p1,p2,p3,ps);
});
G__23234.cljs$core$IFn$_invoke$arity$variadic = G__23234__delegate;
return G__23234;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$core$IFn$_invoke$arity$1 = some_fn__1;
some_fn.cljs$core$IFn$_invoke$arity$2 = some_fn__2;
some_fn.cljs$core$IFn$_invoke$arity$3 = some_fn__3;
some_fn.cljs$core$IFn$_invoke$arity$variadic = some_fn__4.cljs$core$IFn$_invoke$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to
* the set of first items of each coll, followed by applying f to the
* set of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments. Returns a transducer when
* no collection is provided.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__1 = (function (f){return (function (rf){return (function() {
var G__23292 = null;
var G__23292__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23292__1 = (function (result){var G__23278 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__23278) : rf.call(null,G__23278));
});
var G__23292__2 = (function (result,input){var G__23279 = result;var G__23280 = (function (){var G__23281 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23281) : f.call(null,G__23281));
})();return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__23279,G__23280) : rf.call(null,G__23279,G__23280));
});
var G__23292__3 = (function() { 
var G__23293__delegate = function (result,input,inputs){var G__23282 = result;var G__23283 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,input,inputs);return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__23282,G__23283) : rf.call(null,G__23282,G__23283));
};
var G__23293 = function (result,input,var_args){
var inputs = null;if (arguments.length > 2) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23293__delegate.call(this,result,input,inputs);};
G__23293.cljs$lang$maxFixedArity = 2;
G__23293.cljs$lang$applyTo = (function (arglist__23294){
var result = cljs.core.first(arglist__23294);
arglist__23294 = cljs.core.next(arglist__23294);
var input = cljs.core.first(arglist__23294);
var inputs = cljs.core.rest(arglist__23294);
return G__23293__delegate(result,input,inputs);
});
G__23293.cljs$core$IFn$_invoke$arity$variadic = G__23293__delegate;
return G__23293;
})()
;
G__23292 = function(result,input,var_args){
var inputs = var_args;
switch(arguments.length){
case 0:
return G__23292__0.call(this);
case 1:
return G__23292__1.call(this,result);
case 2:
return G__23292__2.call(this,result,input);
default:
return G__23292__3.cljs$core$IFn$_invoke$arity$variadic(result,input, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23292.cljs$lang$maxFixedArity = 2;
G__23292.cljs$lang$applyTo = G__23292__3.cljs$lang$applyTo;
G__23292.cljs$core$IFn$_invoke$arity$0 = G__23292__0;
G__23292.cljs$core$IFn$_invoke$arity$1 = G__23292__1;
G__23292.cljs$core$IFn$_invoke$arity$2 = G__23292__2;
G__23292.cljs$core$IFn$_invoke$arity$variadic = G__23292__3.cljs$core$IFn$_invoke$arity$variadic;
return G__23292;
})()
});
});
var map__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4222__auto__ = cljs.core.seq(coll);if(temp__4222__auto__)
{var s = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4548__auto___23295 = size;var i_23296 = (0);while(true){
if((i_23296 < n__4548__auto___23295))
{cljs.core.chunk_append(b,(function (){var G__23284 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_23296);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23284) : f.call(null,G__23284));
})());
{
var G__23297 = (i_23296 + (1));
i_23296 = G__23297;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((function (){var G__23285 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23285) : f.call(null,G__23285));
})(),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
} else
{return null;
}
}),null,null));
});
var map__3 = (function (f,c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);if((s1) && (s2))
{return cljs.core.cons((function (){var G__23286 = cljs.core.first(s1);var G__23287 = cljs.core.first(s2);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23286,G__23287) : f.call(null,G__23286,G__23287));
})(),map.cljs$core$IFn$_invoke$arity$3(f,cljs.core.rest(s1),cljs.core.rest(s2)));
} else
{return null;
}
}),null,null));
});
var map__4 = (function (f,c1,c2,c3){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);var s3 = cljs.core.seq(c3);if((s1) && (s2) && (s3))
{return cljs.core.cons((function (){var G__23288 = cljs.core.first(s1);var G__23289 = cljs.core.first(s2);var G__23290 = cljs.core.first(s3);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__23288,G__23289,G__23290) : f.call(null,G__23288,G__23289,G__23290));
})(),map.cljs$core$IFn$_invoke$arity$4(f,cljs.core.rest(s1),cljs.core.rest(s2),cljs.core.rest(s3)));
} else
{return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__23298__delegate = function (f,c1,c2,c3,colls){var step = (function step(cs){return (new cljs.core.LazySeq(null,(function (){var ss = map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cs);if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.cons(map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),step(map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
});return map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (p1__23238_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,p1__23238_SHARP_);
});})(step))
,step(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))));
};
var G__23298 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__23298__delegate.call(this,f,c1,c2,c3,colls);};
G__23298.cljs$lang$maxFixedArity = 4;
G__23298.cljs$lang$applyTo = (function (arglist__23299){
var f = cljs.core.first(arglist__23299);
arglist__23299 = cljs.core.next(arglist__23299);
var c1 = cljs.core.first(arglist__23299);
arglist__23299 = cljs.core.next(arglist__23299);
var c2 = cljs.core.first(arglist__23299);
arglist__23299 = cljs.core.next(arglist__23299);
var c3 = cljs.core.first(arglist__23299);
var colls = cljs.core.rest(arglist__23299);
return G__23298__delegate(f,c1,c2,c3,colls);
});
G__23298.cljs$core$IFn$_invoke$arity$variadic = G__23298__delegate;
return G__23298;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return map__1.call(this,f);
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$1 = map__1;
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
map.cljs$core$IFn$_invoke$arity$4 = map__4;
map.cljs$core$IFn$_invoke$arity$variadic = map__5.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.  Returns a stateful transducer when
* no collection is provided.
*/
cljs.core.take = (function() {
var take = null;
var take__1 = (function (n){return (function (rf){var na = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);return ((function (na){
return (function() {
var G__23308 = null;
var G__23308__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23308__1 = (function (result){var G__23305 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__23305) : rf.call(null,G__23305));
});
var G__23308__2 = (function (result,input){var n__$1 = cljs.core.deref(na);var nn = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);var result__$1 = (((n__$1 > (0)))?(function (){var G__23306 = result;var G__23307 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__23306,G__23307) : rf.call(null,G__23306,G__23307));
})():result);if(!((nn > (0))))
{return cljs.core.reduced(result__$1);
} else
{return result__$1;
}
});
G__23308 = function(result,input){
switch(arguments.length){
case 0:
return G__23308__0.call(this);
case 1:
return G__23308__1.call(this,result);
case 2:
return G__23308__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23308.cljs$core$IFn$_invoke$arity$0 = G__23308__0;
G__23308.cljs$core$IFn$_invoke$arity$1 = G__23308__1;
G__23308.cljs$core$IFn$_invoke$arity$2 = G__23308__2;
return G__23308;
})()
;})(na))
});
});
var take__2 = (function (n,coll){return (new cljs.core.LazySeq(null,(function (){if((n > (0)))
{var temp__4222__auto__ = cljs.core.seq(coll);if(temp__4222__auto__)
{var s = temp__4222__auto__;return cljs.core.cons(cljs.core.first(s),take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.rest(s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
take = function(n,coll){
switch(arguments.length){
case 1:
return take__1.call(this,n);
case 2:
return take__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$1 = take__1;
take.cljs$core$IFn$_invoke$arity$2 = take__2;
return take;
})()
;
/**
* Returns a lazy sequence of all but the first n items in coll.
* Returns a stateful transducer when no collection is provided.
*/
cljs.core.drop = (function() {
var drop = null;
var drop__1 = (function (n){return (function (rf){var na = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);return ((function (na){
return (function() {
var G__23315 = null;
var G__23315__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23315__1 = (function (result){var G__23312 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__23312) : rf.call(null,G__23312));
});
var G__23315__2 = (function (result,input){var n__$1 = cljs.core.deref(na);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);
if((n__$1 > (0)))
{return result;
} else
{var G__23313 = result;var G__23314 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__23313,G__23314) : rf.call(null,G__23313,G__23314));
}
});
G__23315 = function(result,input){
switch(arguments.length){
case 0:
return G__23315__0.call(this);
case 1:
return G__23315__1.call(this,result);
case 2:
return G__23315__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23315.cljs$core$IFn$_invoke$arity$0 = G__23315__0;
G__23315.cljs$core$IFn$_invoke$arity$1 = G__23315__1;
G__23315.cljs$core$IFn$_invoke$arity$2 = G__23315__2;
return G__23315;
})()
;})(na))
});
});
var drop__2 = (function (n,coll){var step = (function (n__$1,coll__$1){while(true){
var s = cljs.core.seq(coll__$1);if(((n__$1 > (0))) && (s))
{{
var G__23316 = (n__$1 - (1));
var G__23317 = cljs.core.rest(s);
n__$1 = G__23316;
coll__$1 = G__23317;
continue;
}
} else
{return s;
}
break;
}
});return (new cljs.core.LazySeq(null,((function (step){
return (function (){return step(n,coll);
});})(step))
,null,null));
});
drop = function(n,coll){
switch(arguments.length){
case 1:
return drop__1.call(this,n);
case 2:
return drop__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop.cljs$core$IFn$_invoke$arity$1 = drop__1;
drop.cljs$core$IFn$_invoke$arity$2 = drop__2;
return drop;
})()
;
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){return drop_last.cljs$core$IFn$_invoke$arity$2((1),s);
});
var drop_last__2 = (function (n,s){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,_){return x;
}),s,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$core$IFn$_invoke$arity$1 = drop_last__1;
drop_last.cljs$core$IFn$_invoke$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){var s = cljs.core.seq(coll);var lead = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll));while(true){
if(lead)
{{
var G__23320 = cljs.core.next(s);
var G__23321 = cljs.core.next(lead);
s = G__23320;
lead = G__23321;
continue;
}
} else
{return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the
* first item for which (pred item) returns logical false.  Returns a
* stateful transducer when no collection is provided.
*/
cljs.core.drop_while = (function() {
var drop_while = null;
var drop_while__1 = (function (pred){return (function (rf){var da = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);return ((function (da){
return (function() {
var G__23334 = null;
var G__23334__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23334__1 = (function (result){var G__23328 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__23328) : rf.call(null,G__23328));
});
var G__23334__2 = (function (result,input){var drop_QMARK_ = cljs.core.deref(da);if(cljs.core.truth_((function (){var and__3666__auto__ = drop_QMARK_;if(cljs.core.truth_(and__3666__auto__))
{var G__23329 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__23329) : pred.call(null,G__23329));
} else
{return and__3666__auto__;
}
})()))
{return result;
} else
{cljs.core.reset_BANG_(da,null);
var G__23330 = result;var G__23331 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__23330,G__23331) : rf.call(null,G__23330,G__23331));
}
});
G__23334 = function(result,input){
switch(arguments.length){
case 0:
return G__23334__0.call(this);
case 1:
return G__23334__1.call(this,result);
case 2:
return G__23334__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23334.cljs$core$IFn$_invoke$arity$0 = G__23334__0;
G__23334.cljs$core$IFn$_invoke$arity$1 = G__23334__1;
G__23334.cljs$core$IFn$_invoke$arity$2 = G__23334__2;
return G__23334;
})()
;})(da))
});
});
var drop_while__2 = (function (pred,coll){var step = (function (pred__$1,coll__$1){while(true){
var s = cljs.core.seq(coll__$1);if(cljs.core.truth_((function (){var and__3666__auto__ = s;if(and__3666__auto__)
{var G__23333 = cljs.core.first(s);return (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(G__23333) : pred__$1.call(null,G__23333));
} else
{return and__3666__auto__;
}
})()))
{{
var G__23335 = pred__$1;
var G__23336 = cljs.core.rest(s);
pred__$1 = G__23335;
coll__$1 = G__23336;
continue;
}
} else
{return s;
}
break;
}
});return (new cljs.core.LazySeq(null,((function (step){
return (function (){return step(pred,coll);
});})(step))
,null,null));
});
drop_while = function(pred,coll){
switch(arguments.length){
case 1:
return drop_while__1.call(this,pred);
case 2:
return drop_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_while.cljs$core$IFn$_invoke$arity$1 = drop_while__1;
drop_while.cljs$core$IFn$_invoke$arity$2 = drop_while__2;
return drop_while;
})()
;
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){return (new cljs.core.LazySeq(null,(function (){var temp__4222__auto__ = cljs.core.seq(coll);if(temp__4222__auto__)
{var s = temp__4222__auto__;return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(s,cycle(s));
} else
{return null;
}
}),null,null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll)], null);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(x,repeat.cljs$core$IFn$_invoke$arity$1(x));
}),null,null));
});
var repeat__2 = (function (n,x){return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeat.cljs$core$IFn$_invoke$arity$1(x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$core$IFn$_invoke$arity$1 = repeat__1;
repeat.cljs$core$IFn$_invoke$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),repeatedly.cljs$core$IFn$_invoke$arity$1(f));
}),null,null));
});
var repeatedly__2 = (function (n,f){return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeatedly.cljs$core$IFn$_invoke$arity$1(f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$core$IFn$_invoke$arity$1 = repeatedly__1;
repeatedly.cljs$core$IFn$_invoke$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){return cljs.core.cons(x,(new cljs.core.LazySeq(null,(function (){return iterate(f,(function (){var G__23345 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23345) : f.call(null,G__23345));
})());
}),null,null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);if((s1) && (s2))
{return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else
{return null;
}
}),null,null));
});
var interleave__3 = (function() { 
var G__23348__delegate = function (c1,c2,colls){return (new cljs.core.LazySeq(null,(function (){var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
};
var G__23348 = function (c1,c2,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23348__delegate.call(this,c1,c2,colls);};
G__23348.cljs$lang$maxFixedArity = 2;
G__23348.cljs$lang$applyTo = (function (arglist__23349){
var c1 = cljs.core.first(arglist__23349);
arglist__23349 = cljs.core.next(arglist__23349);
var c2 = cljs.core.first(arglist__23349);
var colls = cljs.core.rest(arglist__23349);
return G__23348__delegate(c1,c2,colls);
});
G__23348.cljs$core$IFn$_invoke$arity$variadic = G__23348__delegate;
return G__23348;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$core$IFn$_invoke$arity$2 = interleave__2;
interleave.cljs$core$IFn$_invoke$arity$variadic = interleave__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){var cat = (function cat(coll,colls__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4220__auto__ = cljs.core.seq(coll);if(temp__4220__auto__)
{var coll__$1 = temp__4220__auto__;return cljs.core.cons(cljs.core.first(coll__$1),cat(cljs.core.rest(coll__$1),colls__$1));
} else
{if(cljs.core.seq(colls__$1))
{return cat(cljs.core.first(colls__$1),cljs.core.rest(colls__$1));
} else
{return null;
}
}
}),null,null));
});return cat(null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection. Returns
* a transducer when no collections are provided
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__1 = (function (f){return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cat);
});
var mapcat__2 = (function() { 
var G__23358__delegate = function (f,colls){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,colls));
};
var G__23358 = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__23358__delegate.call(this,f,colls);};
G__23358.cljs$lang$maxFixedArity = 1;
G__23358.cljs$lang$applyTo = (function (arglist__23359){
var f = cljs.core.first(arglist__23359);
var colls = cljs.core.rest(arglist__23359);
return G__23358__delegate(f,colls);
});
G__23358.cljs$core$IFn$_invoke$arity$variadic = G__23358__delegate;
return G__23358;
})()
;
mapcat = function(f,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return mapcat__1.call(this,f);
default:
return mapcat__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 1;
mapcat.cljs$lang$applyTo = mapcat__2.cljs$lang$applyTo;
mapcat.cljs$core$IFn$_invoke$arity$1 = mapcat__1;
mapcat.cljs$core$IFn$_invoke$arity$variadic = mapcat__2.cljs$core$IFn$_invoke$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.filter = (function() {
var filter = null;
var filter__1 = (function (pred){return (function (rf){return (function() {
var G__23378 = null;
var G__23378__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23378__1 = (function (result){var G__23372 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__23372) : rf.call(null,G__23372));
});
var G__23378__2 = (function (result,input){if(cljs.core.truth_((function (){var G__23373 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__23373) : pred.call(null,G__23373));
})()))
{var G__23374 = result;var G__23375 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__23374,G__23375) : rf.call(null,G__23374,G__23375));
} else
{return result;
}
});
G__23378 = function(result,input){
switch(arguments.length){
case 0:
return G__23378__0.call(this);
case 1:
return G__23378__1.call(this,result);
case 2:
return G__23378__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23378.cljs$core$IFn$_invoke$arity$0 = G__23378__0;
G__23378.cljs$core$IFn$_invoke$arity$1 = G__23378__1;
G__23378.cljs$core$IFn$_invoke$arity$2 = G__23378__2;
return G__23378;
})()
});
});
var filter__2 = (function (pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4222__auto__ = cljs.core.seq(coll);if(temp__4222__auto__)
{var s = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4548__auto___23379 = size;var i_23380 = (0);while(true){
if((i_23380 < n__4548__auto___23379))
{if(cljs.core.truth_((function (){var G__23376 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_23380);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__23376) : pred.call(null,G__23376));
})()))
{cljs.core.chunk_append(b,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_23380));
} else
{}
{
var G__23381 = (i_23380 + (1));
i_23380 = G__23381;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),filter.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.chunk_rest(s)));
} else
{var f = cljs.core.first(s);var r = cljs.core.rest(s);if(cljs.core.truth_((function (){var G__23377 = f;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__23377) : pred.call(null,G__23377));
})()))
{return cljs.core.cons(f,filter.cljs$core$IFn$_invoke$arity$2(pred,r));
} else
{return filter.cljs$core$IFn$_invoke$arity$2(pred,r);
}
}
} else
{return null;
}
}),null,null));
});
filter = function(pred,coll){
switch(arguments.length){
case 1:
return filter__1.call(this,pred);
case 2:
return filter__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter.cljs$core$IFn$_invoke$arity$1 = filter__1;
filter.cljs$core$IFn$_invoke$arity$2 = filter__2;
return filter;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.remove = (function() {
var remove = null;
var remove__1 = (function (pred){return cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.complement(pred));
});
var remove__2 = (function (pred,coll){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
});
remove = function(pred,coll){
switch(arguments.length){
case 1:
return remove__1.call(this,pred);
case 2:
return remove__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove.cljs$core$IFn$_invoke$arity$1 = remove__1;
remove.cljs$core$IFn$_invoke$arity$2 = remove__2;
return remove;
})()
;
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){var walk = (function walk(node){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(node,(cljs.core.truth_((function (){var G__23388 = node;return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__23388) : branch_QMARK_.call(null,G__23388));
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(walk,cljs.core.array_seq([(function (){var G__23389 = node;return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__23389) : children.call(null,G__23389));
})()], 0)):null));
}),null,null));
});return walk(root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__23390_SHARP_){return !(cljs.core.sequential_QMARK_(p1__23390_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined. A transducer may be supplied.
*/
cljs.core.into = (function() {
var into = null;
var into__2 = (function (to,from){if(!((to == null)))
{if((function (){var G__23393 = to;if(G__23393)
{var bit__4335__auto__ = (G__23393.cljs$lang$protocol_mask$partition1$ & (4));if((bit__4335__auto__) || (G__23393.cljs$core$IEditableCollection$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,to,from);
}
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,from);
}
});
var into__3 = (function (to,xform,from){if((function (){var G__23394 = to;if(G__23394)
{var bit__4335__auto__ = (G__23394.cljs$lang$protocol_mask$partition1$ & (4));if((bit__4335__auto__) || (G__23394.cljs$core$IEditableCollection$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else
{return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj,to,from);
}
});
into = function(to,xform,from){
switch(arguments.length){
case 2:
return into__2.call(this,to,xform);
case 3:
return into__3.call(this,to,xform,from);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into.cljs$core$IFn$_invoke$arity$2 = into__2;
into.cljs$core$IFn$_invoke$arity$3 = into__3;
return into;
})()
;
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__23396 = o;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23396) : f.call(null,G__23396));
})());
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__23397__delegate = function (f,c1,c2,c3,colls){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__23397 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__23397__delegate.call(this,f,c1,c2,c3,colls);};
G__23397.cljs$lang$maxFixedArity = 4;
G__23397.cljs$lang$applyTo = (function (arglist__23398){
var f = cljs.core.first(arglist__23398);
arglist__23398 = cljs.core.next(arglist__23398);
var c1 = cljs.core.first(arglist__23398);
arglist__23398 = cljs.core.next(arglist__23398);
var c2 = cljs.core.first(arglist__23398);
arglist__23398 = cljs.core.next(arglist__23398);
var c3 = cljs.core.first(arglist__23398);
var colls = cljs.core.rest(arglist__23398);
return G__23397__delegate(f,c1,c2,c3,colls);
});
G__23397.cljs$core$IFn$_invoke$arity$variadic = G__23397__delegate;
return G__23397;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$core$IFn$_invoke$arity$2 = mapv__2;
mapv.cljs$core$IFn$_invoke$arity$3 = mapv__3;
mapv.cljs$core$IFn$_invoke$arity$4 = mapv__4;
mapv.cljs$core$IFn$_invoke$arity$variadic = mapv__5.cljs$core$IFn$_invoke$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){if(cljs.core.truth_((function (){var G__23400 = o;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__23400) : pred.call(null,G__23400));
})()))
{return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
} else
{return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){return partition.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4222__auto__ = cljs.core.seq(coll);if(temp__4222__auto__)
{var s = temp__4222__auto__;var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);if((n === cljs.core.count(p)))
{return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
var partition__4 = (function (n,step,pad,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4222__auto__ = cljs.core.seq(coll);if(temp__4222__auto__)
{var s = temp__4222__auto__;var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);if((n === cljs.core.count(p)))
{return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$4(n,step,pad,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else
{return cljs.core._conj(cljs.core.List.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,pad)));
}
} else
{return null;
}
}),null,null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
partition.cljs$core$IFn$_invoke$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){return get_in.cljs$core$IFn$_invoke$arity$3(m,ks,null);
});
var get_in__3 = (function (m,ks,not_found){var sentinel = cljs.core.lookup_sentinel;var m__$1 = m;var ks__$1 = cljs.core.seq(ks);while(true){
if(ks__$1)
{if(!((function (){var G__23415 = m__$1;if(G__23415)
{var bit__4342__auto__ = (G__23415.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4342__auto__) || (G__23415.cljs$core$ILookup$))
{return true;
} else
{if((!G__23415.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__23415);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__23415);
}
})()))
{return not_found;
} else
{var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.first(ks__$1),sentinel);if((sentinel === m__$2))
{return not_found;
} else
{{
var G__23416 = sentinel;
var G__23417 = m__$2;
var G__23418 = cljs.core.next(ks__$1);
sentinel = G__23416;
m__$1 = G__23417;
ks__$1 = G__23418;
continue;
}
}
}
} else
{return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$core$IFn$_invoke$arity$2 = get_in__2;
get_in.cljs$core$IFn$_invoke$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__23419,v){var vec__23424 = p__23419;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23424,(0),null);var ks = cljs.core.nthnext(vec__23424,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,assoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,v));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() {
var update_in = null;
var update_in__3 = (function (m,p__23425,f){var vec__23463 = p__23425;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23463,(0),null);var ks = cljs.core.nthnext(vec__23463,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__23464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23464) : f.call(null,G__23464));
})());
}
});
var update_in__4 = (function (m,p__23426,f,a){var vec__23465 = p__23426;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23465,(0),null);var ks = cljs.core.nthnext(vec__23465,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__23466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__23467 = a;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23466,G__23467) : f.call(null,G__23466,G__23467));
})());
}
});
var update_in__5 = (function (m,p__23427,f,a,b){var vec__23468 = p__23427;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23468,(0),null);var ks = cljs.core.nthnext(vec__23468,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__23469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__23470 = a;var G__23471 = b;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__23469,G__23470,G__23471) : f.call(null,G__23469,G__23470,G__23471));
})());
}
});
var update_in__6 = (function (m,p__23428,f,a,b,c){var vec__23472 = p__23428;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23472,(0),null);var ks = cljs.core.nthnext(vec__23472,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b,c));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__23473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__23474 = a;var G__23475 = b;var G__23476 = c;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__23473,G__23474,G__23475,G__23476) : f.call(null,G__23473,G__23474,G__23475,G__23476));
})());
}
});
var update_in__7 = (function() { 
var G__23478__delegate = function (m,p__23429,f,a,b,c,args){var vec__23477 = p__23429;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23477,(0),null);var ks = cljs.core.nthnext(vec__23477,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(update_in,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,cljs.core.array_seq([b,c,args], 0)));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c,cljs.core.array_seq([args], 0)));
}
};
var G__23478 = function (m,p__23429,f,a,b,c,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__23478__delegate.call(this,m,p__23429,f,a,b,c,args);};
G__23478.cljs$lang$maxFixedArity = 6;
G__23478.cljs$lang$applyTo = (function (arglist__23479){
var m = cljs.core.first(arglist__23479);
arglist__23479 = cljs.core.next(arglist__23479);
var p__23429 = cljs.core.first(arglist__23479);
arglist__23479 = cljs.core.next(arglist__23479);
var f = cljs.core.first(arglist__23479);
arglist__23479 = cljs.core.next(arglist__23479);
var a = cljs.core.first(arglist__23479);
arglist__23479 = cljs.core.next(arglist__23479);
var b = cljs.core.first(arglist__23479);
arglist__23479 = cljs.core.next(arglist__23479);
var c = cljs.core.first(arglist__23479);
var args = cljs.core.rest(arglist__23479);
return G__23478__delegate(m,p__23429,f,a,b,c,args);
});
G__23478.cljs$core$IFn$_invoke$arity$variadic = G__23478__delegate;
return G__23478;
})()
;
update_in = function(m,p__23429,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__23429,f);
case 4:
return update_in__4.call(this,m,p__23429,f,a);
case 5:
return update_in__5.call(this,m,p__23429,f,a,b);
case 6:
return update_in__6.call(this,m,p__23429,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__23429,f,a,b,c, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_in.cljs$lang$maxFixedArity = 6;
update_in.cljs$lang$applyTo = update_in__7.cljs$lang$applyTo;
update_in.cljs$core$IFn$_invoke$arity$3 = update_in__3;
update_in.cljs$core$IFn$_invoke$arity$4 = update_in__4;
update_in.cljs$core$IFn$_invoke$arity$5 = update_in__5;
update_in.cljs$core$IFn$_invoke$arity$6 = update_in__6;
update_in.cljs$core$IFn$_invoke$arity$variadic = update_in__7.cljs$core$IFn$_invoke$arity$variadic;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorStr = "cljs.core/VectorNode";
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__4258__auto__,writer__4259__auto__,opts__4260__auto__){return cljs.core._write(writer__4259__auto__,"cljs.core/VectorNode");
});
cljs.core.__GT_VectorNode = (function __GT_VectorNode(edit,arr){return (new cljs.core.VectorNode(edit,arr));
});
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){return (new cljs.core.VectorNode(edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
});
cljs.core.pv_aget = (function pv_aget(node,idx){return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){return (new cljs.core.VectorNode(node.edit,cljs.core.aclone(node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){var cnt = pv.cnt;if((cnt < (32)))
{return (0);
} else
{return (((cnt - (1)) >>> (5)) << (5));
}
});
cljs.core.new_path = (function new_path(edit,level,node){var ll = level;var ret = node;while(true){
if((ll === (0)))
{return ret;
} else
{var embed = ret;var r = cljs.core.pv_fresh_node(edit);var _ = cljs.core.pv_aset(r,(0),embed);{
var G__23480 = (ll - (5));
var G__23481 = r;
ll = G__23480;
ret = G__23481;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){var ret = cljs.core.pv_clone_node(parent);var subidx = (((pv.cnt - (1)) >>> level) & (31));if(((5) === level))
{cljs.core.pv_aset(ret,subidx,tailnode);
return ret;
} else
{var child = cljs.core.pv_aget(parent,subidx);if(!((child == null)))
{var node_to_insert = push_tail(pv,(level - (5)),child,tailnode);cljs.core.pv_aset(ret,subidx,node_to_insert);
return ret;
} else
{var node_to_insert = cljs.core.new_path(null,(level - (5)),tailnode);cljs.core.pv_aset(ret,subidx,node_to_insert);
return ret;
}
}
});
cljs.core.vector_index_out_of_bounds = (function vector_index_out_of_bounds(i,cnt){throw (new Error(("No item "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+" in vector of length "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt))));
});
cljs.core.first_array_for_longvec = (function first_array_for_longvec(pv){var node = pv.root;var level = pv.shift;while(true){
if((level > (0)))
{{
var G__23486 = cljs.core.pv_aget(node,(0));
var G__23487 = (level - (5));
node = G__23486;
level = G__23487;
continue;
}
} else
{return node.arr;
}
break;
}
});
cljs.core.unchecked_array_for = (function unchecked_array_for(pv,i){if((i >= cljs.core.tail_off(pv)))
{return pv.tail;
} else
{var node = pv.root;var level = pv.shift;while(true){
if((level > (0)))
{{
var G__23488 = cljs.core.pv_aget(node,((i >>> level) & (31)));
var G__23489 = (level - (5));
node = G__23488;
level = G__23489;
continue;
}
} else
{return node.arr;
}
break;
}
}
});
cljs.core.array_for = (function array_for(pv,i){if((((0) <= i)) && ((i < pv.cnt)))
{return cljs.core.unchecked_array_for(pv,i);
} else
{return cljs.core.vector_index_out_of_bounds(i,pv.cnt);
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){var ret = cljs.core.pv_clone_node(node);if((level === (0)))
{cljs.core.pv_aset(ret,(i & (31)),val);
return ret;
} else
{var subidx = ((i >>> level) & (31));cljs.core.pv_aset(ret,subidx,do_assoc(pv,(level - (5)),cljs.core.pv_aget(node,subidx),i,val));
return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){var subidx = (((pv.cnt - (2)) >>> level) & (31));if((level > (5)))
{var new_child = pop_tail(pv,(level - (5)),cljs.core.pv_aget(node,subidx));if(((new_child == null)) && ((subidx === (0))))
{return null;
} else
{var ret = cljs.core.pv_clone_node(node);cljs.core.pv_aset(ret,subidx,new_child);
return ret;
}
} else
{if((subidx === (0)))
{return null;
} else
{var ret = cljs.core.pv_clone_node(node);cljs.core.pv_aset(ret,subidx,null);
return ret;

}
}
});

/**
* @constructor
*/
cljs.core.RangedIterator = (function (i,base,arr,v,start,end){
this.i = i;
this.base = base;
this.arr = arr;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.RangedIterator.cljs$lang$type = true;
cljs.core.RangedIterator.cljs$lang$ctorStr = "cljs.core/RangedIterator";
cljs.core.RangedIterator.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/RangedIterator");
});
cljs.core.RangedIterator.prototype.hasNext = (function (){var self__ = this;
var this$ = this;return (self__.i < self__.end);
});
cljs.core.RangedIterator.prototype.next = (function (){var self__ = this;
var this$ = this;if(((self__.i - self__.base) === (32)))
{self__.arr = cljs.core.unchecked_array_for(self__.v,self__.i);
self__.base = (self__.base + (32));
} else
{}
var ret = (self__.arr[(self__.i & (31))]);self__.i = (self__.i + (1));
return ret;
});
cljs.core.__GT_RangedIterator = (function __GT_RangedIterator(i,base,arr,v,start,end){return (new cljs.core.RangedIterator(i,base,arr,v,start,end));
});
cljs.core.ranged_iterator = (function ranged_iterator(v,start,end){var i = start;return (new cljs.core.RangedIterator(i,(i - (i % (32))),(((start < cljs.core.count(v)))?cljs.core.unchecked_array_for(v,i):null),v,start,end));
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorStr = "cljs.core/PersistentVector";
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentVector.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){var self__ = this;
var v__$1 = this;var i = (0);var init__$1 = init;while(true){
if((i < self__.cnt))
{var arr = cljs.core.unchecked_array_for(v__$1,i);var len = arr.length;var init__$2 = (function (){var j = (0);var init__$2 = init__$1;while(true){
if((j < len))
{var init__$3 = (function (){var G__23499 = init__$2;var G__23500 = (j + i);var G__23501 = (arr[j]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__23499,G__23500,G__23501) : f.call(null,G__23499,G__23500,G__23501));
})();if(cljs.core.reduced_QMARK_(init__$3))
{return init__$3;
} else
{{
var G__23512 = (j + (1));
var G__23513 = init__$3;
j = G__23512;
init__$2 = G__23513;
continue;
}
}
} else
{return init__$2;
}
break;
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__23502 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23502) : cljs.core.deref.call(null,G__23502));
} else
{{
var G__23514 = (i + len);
var G__23515 = init__$2;
i = G__23514;
init__$1 = G__23515;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{return (cljs.core.unchecked_array_for(coll__$1,n)[(n & (31))]);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{if((cljs.core.tail_off(coll__$1) <= n))
{var new_tail = cljs.core.aclone(self__.tail);(new_tail[(n & (31))] = val);
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc(coll__$1,self__.shift,self__.root,n,val),self__.tail,null));
}
} else
{if((n === self__.cnt))
{return cljs.core._conj(coll__$1,val);
} else
{throw (new Error(("Index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+" out of bounds  [0,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.cnt)+"]")));

}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IIterable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.ranged_iterator(this$__$1,(0),self__.cnt);
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(0));
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(1));
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(self__.cnt - (1)));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt === (0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(((1) === self__.cnt))
{return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else
{if(((1) < (self__.cnt - cljs.core.tail_off(coll__$1))))
{return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - (1)),self__.shift,self__.root,self__.tail.slice((0),(-1)),null));
} else
{var new_tail = cljs.core.unchecked_array_for(coll__$1,(self__.cnt - (2)));var nr = cljs.core.pop_tail(coll__$1,self__.shift,self__.root);var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);var cnt_1 = (self__.cnt - (1));if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null)))
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - (5)),cljs.core.pv_aget(new_root,(0)),new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}

}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return (new cljs.core.RSeq(coll__$1,(self__.cnt - (1)),null));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;if((other instanceof cljs.core.PersistentVector))
{if((self__.cnt === cljs.core.count(other)))
{var me_iter = cljs.core._iterator(coll__$1);var you_iter = cljs.core._iterator(other);while(true){
if(cljs.core.truth_(me_iter.hasNext()))
{var x = me_iter.next();var y = you_iter.next();if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{{
continue;
}
} else
{return false;
}
} else
{return true;
}
break;
}
} else
{return false;
}
} else
{return cljs.core.equiv_sequential(coll__$1,other);
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientVector(self__.cnt,self__.shift,(function (){var G__23503 = self__.root;return (cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1(G__23503) : cljs.core.tv_editable_root.call(null,G__23503));
})(),(function (){var G__23504 = self__.tail;return (cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1(G__23504) : cljs.core.tv_editable_tail.call(null,G__23504));
})()));
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(v__$1,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,init){var self__ = this;
var v__$1 = this;var i = (0);var init__$1 = init;while(true){
if((i < self__.cnt))
{var arr = cljs.core.unchecked_array_for(v__$1,i);var len = arr.length;var init__$2 = (function (){var j = (0);var init__$2 = init__$1;while(true){
if((j < len))
{var init__$3 = (function (){var G__23505 = init__$2;var G__23506 = (arr[j]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23505,G__23506) : f.call(null,G__23505,G__23506));
})();if(cljs.core.reduced_QMARK_(init__$3))
{return init__$3;
} else
{{
var G__23516 = (j + (1));
var G__23517 = init__$3;
j = G__23516;
init__$2 = G__23517;
continue;
}
}
} else
{return init__$2;
}
break;
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__23507 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23507) : cljs.core.deref.call(null,G__23507));
} else
{{
var G__23518 = (i + len);
var G__23519 = init__$2;
i = G__23518;
init__$1 = G__23519;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._assoc_n(coll__$1,k,v);
} else
{throw (new Error("Vector's key for assoc must be a number."));
}
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt === (0)))
{return null;
} else
{if((self__.cnt <= (32)))
{return (new cljs.core.IndexedSeq(self__.tail,(0)));
} else
{var G__23508 = coll__$1;var G__23509 = cljs.core.first_array_for_longvec(coll__$1);var G__23510 = (0);var G__23511 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__23508,G__23509,G__23510,G__23511) : cljs.core.chunked_seq.call(null,G__23508,G__23509,G__23510,G__23511));

}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;if(((self__.cnt - cljs.core.tail_off(coll__$1)) < (32)))
{var len = self__.tail.length;var new_tail = (new Array((len + (1))));var n__4548__auto___23520 = len;var i_23521 = (0);while(true){
if((i_23521 < n__4548__auto___23520))
{(new_tail[i_23521] = (self__.tail[i_23521]));
{
var G__23522 = (i_23521 + (1));
i_23521 = G__23522;
continue;
}
} else
{}
break;
}
(new_tail[len] = o);
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),self__.shift,self__.root,new_tail,null));
} else
{var root_overflow_QMARK_ = ((self__.cnt >>> (5)) > ((1) << self__.shift));var new_shift = ((root_overflow_QMARK_)?(self__.shift + (5)):self__.shift);var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node(null);cljs.core.pv_aset(n_r,(0),self__.root);
cljs.core.pv_aset(n_r,(1),cljs.core.new_path(null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));
return n_r;
})():cljs.core.push_tail(coll__$1,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),new_shift,new_root,[o],null));
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__23523 = null;
var G__23523__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__23523__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__23523 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23523__2.call(this,self__,k);
case 3:
return G__23523__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23523.cljs$core$IFn$_invoke$arity$2 = G__23523__2;
G__23523.cljs$core$IFn$_invoke$arity$3 = G__23523__3;
return G__23523;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (self__,args23498){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23498)));
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentVector = (function __GT_PersistentVector(meta,cnt,shift,root,tail,__hash){return (new cljs.core.PersistentVector(meta,cnt,shift,root,tail,__hash));
});
cljs.core.PersistentVector.EMPTY_NODE = (new cljs.core.VectorNode(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,(0),(5),cljs.core.PersistentVector.EMPTY_NODE,[],(0)));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){var l = xs.length;var xs__$1 = ((no_clone)?xs:cljs.core.aclone(xs));if((l < (32)))
{return (new cljs.core.PersistentVector(null,l,(5),cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else
{var node = xs__$1.slice((0),(32));var v = (new cljs.core.PersistentVector(null,(32),(5),cljs.core.PersistentVector.EMPTY_NODE,node,null));var i = (32);var out = v.cljs$core$IEditableCollection$_as_transient$arity$1(null);while(true){
if((i < l))
{{
var G__23524 = (i + (1));
var G__23525 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(xs__$1[i]));
i = G__23524;
out = G__23525;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){if(((args instanceof cljs.core.IndexedSeq)) && ((args.i === (0))))
{return cljs.core.PersistentVector.fromArray(args.arr,true);
} else
{return cljs.core.vec(args);
}
};
var vector = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return vector__delegate.call(this,args);};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__23526){
var args = cljs.core.seq(arglist__23526);
return vector__delegate(args);
});
vector.cljs$core$IFn$_invoke$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375020;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorStr = "cljs.core/ChunkedSeq";
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ChunkedSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + (1)) < self__.node.length))
{var s = (function (){var G__23527 = self__.vec;var G__23528 = self__.node;var G__23529 = self__.i;var G__23530 = (self__.off + (1));return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__23527,G__23528,G__23529,G__23530) : cljs.core.chunked_seq.call(null,G__23527,G__23528,G__23529,G__23530));
})();if((s == null))
{return null;
} else
{return s;
}
} else
{return cljs.core._chunked_next(coll__$1);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((function (){var G__23531 = self__.vec;var G__23532 = (self__.i + self__.off);var G__23533 = cljs.core.count(self__.vec);return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__23531,G__23532,G__23533) : cljs.core.subvec.call(null,G__23531,G__23532,G__23533));
})(),f);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((function (){var G__23534 = self__.vec;var G__23535 = (self__.i + self__.off);var G__23536 = cljs.core.count(self__.vec);return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__23534,G__23535,G__23536) : cljs.core.subvec.call(null,G__23534,G__23535,G__23536));
})(),f,start);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.node[self__.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + (1)) < self__.node.length))
{var s = (function (){var G__23537 = self__.vec;var G__23538 = self__.node;var G__23539 = self__.i;var G__23540 = (self__.off + (1));return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__23537,G__23538,G__23539,G__23540) : cljs.core.chunked_seq.call(null,G__23537,G__23538,G__23539,G__23540));
})();if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
} else
{return cljs.core._chunked_rest(coll__$1);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(self__.node,self__.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var end = (self__.i + self__.node.length);if((end < cljs.core._count(self__.vec)))
{var G__23541 = self__.vec;var G__23542 = cljs.core.unchecked_array_for(self__.vec,end);var G__23543 = end;var G__23544 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__23541,G__23542,G__23543,G__23544) : cljs.core.chunked_seq.call(null,G__23541,G__23542,G__23543,G__23544));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;var G__23545 = self__.vec;var G__23546 = self__.node;var G__23547 = self__.i;var G__23548 = self__.off;var G__23549 = m;return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(G__23545,G__23546,G__23547,G__23548,G__23549) : cljs.core.chunked_seq.call(null,G__23545,G__23546,G__23547,G__23548,G__23549));
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var end = (self__.i + self__.node.length);if((end < cljs.core._count(self__.vec)))
{var G__23550 = self__.vec;var G__23551 = cljs.core.unchecked_array_for(self__.vec,end);var G__23552 = end;var G__23553 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__23550,G__23551,G__23552,G__23553) : cljs.core.chunked_seq.call(null,G__23550,G__23551,G__23552,G__23553));
} else
{return null;
}
});
cljs.core.__GT_ChunkedSeq = (function __GT_ChunkedSeq(vec,node,i,off,meta,__hash){return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash));
});
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){return (new cljs.core.ChunkedSeq(vec,cljs.core.array_for(vec,i),i,off,null,null));
});
var chunked_seq__4 = (function (vec,node,i,off){return (new cljs.core.ChunkedSeq(vec,node,i,off,null,null));
});
var chunked_seq__5 = (function (vec,node,i,off,meta){return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$core$IFn$_invoke$arity$3 = chunked_seq__3;
chunked_seq.cljs$core$IFn$_invoke$arity$4 = chunked_seq__4;
chunked_seq.cljs$core$IFn$_invoke$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 166617887;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorStr = "cljs.core/Subvec";
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Subvec.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;if(((n < (0))) || ((self__.end <= (self__.start + n))))
{return cljs.core.vector_index_out_of_bounds(n,(self__.end - self__.start));
} else
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.start + n));
}
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if(((n < (0))) || ((self__.end <= (self__.start + n))))
{return not_found;
} else
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.v,(self__.start + n),not_found);
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){var self__ = this;
var coll__$1 = this;var v_pos = (self__.start + n);var G__23555 = self__.meta;var G__23556 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.v,v_pos,val);var G__23557 = self__.start;var G__23558 = (function (){var x__3985__auto__ = self__.end;var y__3986__auto__ = (v_pos + (1));return ((x__3985__auto__ > y__3986__auto__) ? x__3985__auto__ : y__3986__auto__);
})();var G__23559 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__23555,G__23556,G__23557,G__23558,G__23559) : cljs.core.build_subvec.call(null,G__23555,G__23556,G__23557,G__23558,G__23559));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Subvec(self__.meta,self__.v,self__.start,self__.end,self__.__hash));
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.end - self__.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.end - (1)));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.start === self__.end))
{throw (new Error("Can't pop empty vector"));
} else
{var G__23560 = self__.meta;var G__23561 = self__.v;var G__23562 = self__.start;var G__23563 = (self__.end - (1));var G__23564 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__23560,G__23561,G__23562,G__23563,G__23564) : cljs.core.build_subvec.call(null,G__23560,G__23561,G__23562,G__23563,G__23564));
}
});
cljs.core.Subvec.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(!((self__.start === self__.end)))
{return (new cljs.core.RSeq(coll__$1,((self__.end - self__.start) - (1)),null));
} else
{return null;
}
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(coll__$1,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(coll__$1,f,start__$1);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){var self__ = this;
var coll__$1 = this;if(typeof key === 'number')
{return cljs.core._assoc_n(coll__$1,key,val);
} else
{throw (new Error("Subvec's key for assoc must be a number."));
}
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var subvec_seq = ((function (coll__$1){
return (function subvec_seq(i){if((i === self__.end))
{return null;
} else
{return cljs.core.cons(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,i),(new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){return subvec_seq((i + (1)));
});})(coll__$1))
,null,null)));
}
});})(coll__$1))
;return subvec_seq(self__.start);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;var G__23566 = meta__$1;var G__23567 = self__.v;var G__23568 = self__.start;var G__23569 = self__.end;var G__23570 = self__.__hash;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__23566,G__23567,G__23568,G__23569,G__23570) : cljs.core.build_subvec.call(null,G__23566,G__23567,G__23568,G__23569,G__23570));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;var G__23571 = self__.meta;var G__23572 = cljs.core._assoc_n(self__.v,self__.end,o);var G__23573 = self__.start;var G__23574 = (self__.end + (1));var G__23575 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__23571,G__23572,G__23573,G__23574,G__23575) : cljs.core.build_subvec.call(null,G__23571,G__23572,G__23573,G__23574,G__23575));
});
cljs.core.Subvec.prototype.call = (function() {
var G__23576 = null;
var G__23576__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__23576__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__23576 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23576__2.call(this,self__,k);
case 3:
return G__23576__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23576.cljs$core$IFn$_invoke$arity$2 = G__23576__2;
G__23576.cljs$core$IFn$_invoke$arity$3 = G__23576__3;
return G__23576;
})()
;
cljs.core.Subvec.prototype.apply = (function (self__,args23554){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23554)));
});
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
cljs.core.__GT_Subvec = (function __GT_Subvec(meta,v,start,end,__hash){return (new cljs.core.Subvec(meta,v,start,end,__hash));
});
cljs.core.build_subvec = (function build_subvec(meta,v,start,end,__hash){while(true){
if((v instanceof cljs.core.Subvec))
{{
var G__23577 = meta;
var G__23578 = v.v;
var G__23579 = (v.start + start);
var G__23580 = (v.start + end);
var G__23581 = __hash;
meta = G__23577;
v = G__23578;
start = G__23579;
end = G__23580;
__hash = G__23581;
continue;
}
} else
{var c = cljs.core.count(v);if(((start < (0))) || ((end < (0))) || ((start > c)) || ((end > c)))
{throw (new Error("Index out of bounds"));
} else
{}
return (new cljs.core.Subvec(meta,v,start,end,__hash));
}
break;
}
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){return subvec.cljs$core$IFn$_invoke$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){return cljs.core.build_subvec(null,v,start,end,null);
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$core$IFn$_invoke$arity$2 = subvec__2;
subvec.cljs$core$IFn$_invoke$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,cljs.core.aclone(node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){return (new cljs.core.VectorNode((function (){var obj23588 = {};return obj23588;
})(),cljs.core.aclone(node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];cljs.core.array_copy(tl,(0),ret,(0),tl.length);
return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){var ret = cljs.core.tv_ensure_editable(tv.root.edit,parent);var subidx = (((tv.cnt - (1)) >>> level) & (31));cljs.core.pv_aset(ret,subidx,(((level === (5)))?tail_node:(function (){var child = cljs.core.pv_aget(ret,subidx);if(!((child == null)))
{return tv_push_tail(tv,(level - (5)),child,tail_node);
} else
{return cljs.core.new_path(tv.root.edit,(level - (5)),tail_node);
}
})()));
return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){var node__$1 = cljs.core.tv_ensure_editable(tv.root.edit,node);var subidx = (((tv.cnt - (2)) >>> level) & (31));if((level > (5)))
{var new_child = tv_pop_tail(tv,(level - (5)),cljs.core.pv_aget(node__$1,subidx));if(((new_child == null)) && ((subidx === (0))))
{return null;
} else
{cljs.core.pv_aset(node__$1,subidx,new_child);
return node__$1;
}
} else
{if((subidx === (0)))
{return null;
} else
{cljs.core.pv_aset(node__$1,subidx,null);
return node__$1;

}
}
});
cljs.core.unchecked_editable_array_for = (function unchecked_editable_array_for(tv,i){if((i >= cljs.core.tail_off(tv)))
{return tv.tail;
} else
{var root = tv.root;var node = root;var level = tv.shift;while(true){
if((level > (0)))
{{
var G__23596 = cljs.core.tv_ensure_editable(root.edit,cljs.core.pv_aget(node,((i >>> level) & (31))));
var G__23597 = (level - (5));
node = G__23596;
level = G__23597;
continue;
}
} else
{return node.arr;
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorStr = "cljs.core/TransientVector";
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__23601 = null;
var G__23601__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__23601__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__23601 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23601__2.call(this,self__,k);
case 3:
return G__23601__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23601.cljs$core$IFn$_invoke$arity$2 = G__23601__2;
G__23601.cljs$core$IFn$_invoke$arity$3 = G__23601__3;
return G__23601;
})()
;
cljs.core.TransientVector.prototype.apply = (function (self__,args23598){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23598)));
});
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;if(self__.root.edit)
{return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(self__.root.edit)
{return self__.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if((((0) <= n)) && ((n < self__.cnt)))
{if((cljs.core.tail_off(tcoll__$1) <= n))
{(self__.tail[(n & (31))] = val);
return tcoll__$1;
} else
{var new_root = ((function (tcoll__$1){
return (function go(level,node){var node__$1 = cljs.core.tv_ensure_editable(self__.root.edit,node);if((level === (0)))
{cljs.core.pv_aset(node__$1,(n & (31)),val);
return node__$1;
} else
{var subidx = ((n >>> level) & (31));cljs.core.pv_aset(node__$1,subidx,go((level - (5)),cljs.core.pv_aget(node__$1,subidx)));
return node__$1;
}
});})(tcoll__$1))
.call(null,self__.shift,self__.root);self__.root = new_root;
return tcoll__$1;
}
} else
{if((n === self__.cnt))
{return cljs.core._conj_BANG_(tcoll__$1,val);
} else
{throw (new Error(("Index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+" out of bounds for TransientVector of length"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.cnt))));

}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if((self__.cnt === (0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(((1) === self__.cnt))
{self__.cnt = (0);
return tcoll__$1;
} else
{if((((self__.cnt - (1)) & (31)) > (0)))
{self__.cnt = (self__.cnt - (1));
return tcoll__$1;
} else
{var new_tail = cljs.core.unchecked_editable_array_for(tcoll__$1,(self__.cnt - (2)));var new_root = (function (){var nr = cljs.core.tv_pop_tail(tcoll__$1,self__.shift,self__.root);if(!((nr == null)))
{return nr;
} else
{return (new cljs.core.VectorNode(self__.root.edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
}
})();if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null)))
{var new_root__$1 = cljs.core.tv_ensure_editable(self__.root.edit,cljs.core.pv_aget(new_root,(0)));self__.root = new_root__$1;
self__.shift = (self__.shift - (5));
self__.cnt = (self__.cnt - (1));
self__.tail = new_tail;
return tcoll__$1;
} else
{self__.root = new_root;
self__.cnt = (self__.cnt - (1));
self__.tail = new_tail;
return tcoll__$1;
}

}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;if(typeof key === 'number')
{return cljs.core._assoc_n_BANG_(tcoll__$1,key,val);
} else
{throw (new Error("TransientVector's key for assoc! must be a number."));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if(((self__.cnt - cljs.core.tail_off(tcoll__$1)) < (32)))
{(self__.tail[(self__.cnt & (31))] = o);
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
} else
{var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(new_tail[(0)] = o);
self__.tail = new_tail;
if(((self__.cnt >>> (5)) > ((1) << self__.shift)))
{var new_root_array = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_shift = (self__.shift + (5));(new_root_array[(0)] = self__.root);
(new_root_array[(1)] = cljs.core.new_path(self__.root.edit,self__.shift,tail_node));
self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));
self__.shift = new_shift;
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
} else
{var new_root = cljs.core.tv_push_tail(tcoll__$1,self__.shift,self__.root,tail_node);self__.root = new_root;
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{self__.root.edit = null;
var len = (self__.cnt - cljs.core.tail_off(tcoll__$1));var trimmed_tail = (new Array(len));cljs.core.array_copy(self__.tail,(0),trimmed_tail,(0),len);
return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.__GT_TransientVector = (function __GT_TransientVector(cnt,shift,root,tail){return (new cljs.core.TransientVector(cnt,shift,root,tail));
});

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorStr = "cljs.core/PersistentQueueSeq";
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentQueueSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var temp__4220__auto__ = cljs.core.next(self__.front);if(temp__4220__auto__)
{var f1 = temp__4220__auto__;return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else
{if((self__.rear == null))
{return cljs.core._empty(coll__$1);
} else
{return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_PersistentQueueSeq = (function __GT_PersistentQueueSeq(meta,front,rear,__hash){return (new cljs.core.PersistentQueueSeq(meta,front,rear,__hash));
});

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorStr = "cljs.core/PersistentQueue";
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentQueue.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueue(self__.meta,self__.count,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.front))
{var temp__4220__auto__ = cljs.core.next(self__.front);if(temp__4220__auto__)
{var f1 = temp__4220__auto__;return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),f1,self__.rear,null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),cljs.core.seq(self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll__$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.rest(cljs.core.seq(coll__$1));
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var rear__$1 = cljs.core.seq(self__.rear);if(cljs.core.truth_((function (){var or__3678__auto__ = self__.front;if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return rear__$1;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq(rear__$1),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.front))
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),self__.front,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3678__auto__ = self__.rear;if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.__GT_PersistentQueue = (function __GT_PersistentQueue(meta,count,front,rear,__hash){return (new cljs.core.PersistentQueue(meta,count,front,rear,__hash));
});
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,(0),null,cljs.core.PersistentVector.EMPTY,(0)));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorStr = "cljs.core/NeverEquiv";
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return false;
});
cljs.core.NeverEquiv.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_NeverEquiv = (function __GT_NeverEquiv(){return (new cljs.core.NeverEquiv());
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xkv){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){var len = array.length;var i = (0);while(true){
if((i < len))
{if((k === (array[i])))
{return i;
} else
{{
var G__23602 = (i + incr);
i = G__23602;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){var a__$1 = cljs.core.hash(a);var b__$1 = cljs.core.hash(b);if((a__$1 < b__$1))
{return (-1);
} else
{if((a__$1 > b__$1))
{return (1);
} else
{return (0);

}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){var ks = m.keys;var len = ks.length;var so = m.strobj;var mm = cljs.core.meta(m);var i = (0);var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if((i < len))
{var k__$1 = (ks[i]);{
var G__23603 = (i + (1));
var G__23604 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k__$1,(so[k__$1]));
i = G__23603;
out = G__23604;
continue;
}
} else
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){var new_obj = (function (){var obj23608 = {};return obj23608;
})();var l = ks.length;var i_23609 = (0);while(true){
if((i_23609 < l))
{var k_23610 = (ks[i_23609]);(new_obj[k_23610] = (obj[k_23610]));
{
var G__23611 = (i_23609 + (1));
i_23609 = G__23611;
continue;
}
} else
{}
break;
}
return new_obj;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 4;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorStr = "cljs.core/ObjMap";
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ObjMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var and__3666__auto__ = (function (){var G__23615 = k;return goog.isString(G__23615);
})();if(cljs.core.truth_(and__3666__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__3666__auto__;
}
})()))
{return (self__.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var len = self__.keys.length;var keys__$1 = self__.keys.sort(cljs.core.obj_map_compare_keys);var init__$1 = init;while(true){
if(cljs.core.seq(keys__$1))
{var k = cljs.core.first(keys__$1);var init__$2 = (function (){var G__23616 = init__$1;var G__23617 = k;var G__23618 = (self__.strobj[k]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__23616,G__23617,G__23618) : f.call(null,G__23616,G__23617,G__23618));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__23619 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23619) : cljs.core.deref.call(null,G__23619));
} else
{{
var G__23625 = cljs.core.rest(keys__$1);
var G__23626 = init__$2;
keys__$1 = G__23625;
init__$1 = G__23626;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.transient$(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1));
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,self__.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var and__3666__auto__ = (function (){var G__23621 = k;return goog.isString(G__23621);
})();if(cljs.core.truth_(and__3666__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__3666__auto__;
}
})()))
{var new_keys = cljs.core.aclone(self__.keys);var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);new_keys.splice(cljs.core.scan_array((1),k,new_keys),(1));
delete new_strobj[k];
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
} else
{return coll__$1;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var G__23622 = k;return goog.isString(G__23622);
})()))
{if(((self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD)) || ((self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD)))
{return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
} else
{if(!((cljs.core.scan_array((1),k,self__.keys) == null)))
{var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);(new_strobj[k] = v);
return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + (1)),null));
} else
{var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);var new_keys = cljs.core.aclone(self__.keys);(new_strobj[k] = v);
new_keys.push(k);
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var and__3666__auto__ = (function (){var G__23624 = k;return goog.isString(G__23624);
})();if(cljs.core.truth_(and__3666__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__3666__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.keys.length > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (coll__$1){
return (function (p1__23612_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__23612_SHARP_,(self__.strobj[p1__23612_SHARP_])],null));
});})(coll__$1))
,self__.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll__$1,entry);
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__23627 = null;
var G__23627__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__23627__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__23627 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23627__2.call(this,self__,k);
case 3:
return G__23627__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23627.cljs$core$IFn$_invoke$arity$2 = G__23627__2;
G__23627.cljs$core$IFn$_invoke$arity$3 = G__23627__3;
return G__23627;
})()
;
cljs.core.ObjMap.prototype.apply = (function (self__,args23613){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23613)));
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj23629 = {};return obj23629;
})(),(0),(0)));
cljs.core.ObjMap.HASHMAP_THRESHOLD = (8);
cljs.core.ObjMap.fromObject = (function (ks,obj){return (new cljs.core.ObjMap(null,ks,obj,(0),null));
});

/**
* @constructor
*/
cljs.core.ES6Iterator = (function (s){
this.s = s;
})
cljs.core.ES6Iterator.cljs$lang$type = true;
cljs.core.ES6Iterator.cljs$lang$ctorStr = "cljs.core/ES6Iterator";
cljs.core.ES6Iterator.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/ES6Iterator");
});
cljs.core.ES6Iterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var x = cljs.core.first(self__.s);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": x};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_ES6Iterator = (function __GT_ES6Iterator(s){return (new cljs.core.ES6Iterator(s));
});
cljs.core.es6_iterator = (function es6_iterator(coll){return (new cljs.core.ES6Iterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6EntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6EntriesIterator.cljs$lang$type = true;
cljs.core.ES6EntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6EntriesIterator";
cljs.core.ES6EntriesIterator.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/ES6EntriesIterator");
});
cljs.core.ES6EntriesIterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var vec__23630 = cljs.core.first(self__.s);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23630,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23630,(1),null);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": [k,v]};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_ES6EntriesIterator = (function __GT_ES6EntriesIterator(s){return (new cljs.core.ES6EntriesIterator(s));
});
cljs.core.es6_entries_iterator = (function es6_entries_iterator(coll){return (new cljs.core.ES6EntriesIterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6SetEntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6SetEntriesIterator.cljs$lang$type = true;
cljs.core.ES6SetEntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6SetEntriesIterator";
cljs.core.ES6SetEntriesIterator.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/ES6SetEntriesIterator");
});
cljs.core.ES6SetEntriesIterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var x = cljs.core.first(self__.s);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": [x,x]};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_ES6SetEntriesIterator = (function __GT_ES6SetEntriesIterator(s){return (new cljs.core.ES6SetEntriesIterator(s));
});
cljs.core.es6_set_entries_iterator = (function es6_set_entries_iterator(coll){return (new cljs.core.ES6SetEntriesIterator(cljs.core.seq(coll)));
});
cljs.core.array_map_index_of_nil_QMARK_ = (function array_map_index_of_nil_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if(((arr[i]) == null))
{return i;
} else
{{
var G__23631 = (i + (2));
i = G__23631;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_keyword_QMARK_ = (function array_map_index_of_keyword_QMARK_(arr,m,k){var len = arr.length;var kstr = k.fqn;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((function (){var k_SINGLEQUOTE_ = (arr[i]);return ((k_SINGLEQUOTE_ instanceof cljs.core.Keyword)) && ((kstr === k_SINGLEQUOTE_.fqn));
})())
{return i;
} else
{{
var G__23632 = (i + (2));
i = G__23632;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_symbol_QMARK_ = (function array_map_index_of_symbol_QMARK_(arr,m,k){var len = arr.length;var kstr = k.str;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((function (){var k_SINGLEQUOTE_ = (arr[i]);return ((k_SINGLEQUOTE_ instanceof cljs.core.Symbol)) && ((kstr === k_SINGLEQUOTE_.str));
})())
{return i;
} else
{{
var G__23633 = (i + (2));
i = G__23633;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_identical_QMARK_ = (function array_map_index_of_identical_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((k === (arr[i])))
{return i;
} else
{{
var G__23634 = (i + (2));
i = G__23634;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_equiv_QMARK_ = (function array_map_index_of_equiv_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(arr[i])))
{return i;
} else
{{
var G__23635 = (i + (2));
i = G__23635;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){var arr = m.arr;if((k instanceof cljs.core.Keyword))
{return cljs.core.array_map_index_of_keyword_QMARK_(arr,m,k);
} else
{if(cljs.core.truth_((function (){var or__3678__auto__ = (function (){var G__23639 = k;return goog.isString(G__23639);
})();if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return typeof k === 'number';
}
})()))
{return cljs.core.array_map_index_of_identical_QMARK_(arr,m,k);
} else
{if((k instanceof cljs.core.Symbol))
{return cljs.core.array_map_index_of_symbol_QMARK_(arr,m,k);
} else
{if((k == null))
{return cljs.core.array_map_index_of_nil_QMARK_(arr,m,k);
} else
{return cljs.core.array_map_index_of_equiv_QMARK_(arr,m,k);

}
}
}
}
});
cljs.core.array_map_extend_kv = (function array_map_extend_kv(m,k,v){var arr = m.arr;var l = arr.length;var narr = (new Array((l + (2))));var i_23640 = (0);while(true){
if((i_23640 < l))
{(narr[i_23640] = (arr[i_23640]));
{
var G__23641 = (i_23640 + (1));
i_23640 = G__23641;
continue;
}
} else
{}
break;
}
(narr[l] = k);
(narr[(l + (1))] = v);
return narr;
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapSeq = (function (arr,i,_meta){
this.arr = arr;
this.i = i;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
})
cljs.core.PersistentArrayMapSeq.cljs$lang$type = true;
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapSeq";
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/PersistentArrayMapSeq");
});
cljs.core.PersistentArrayMapSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentArrayMapSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i < (self__.arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else
{return null;
}
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return ((self__.arr.length - self__.i) / (2));
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i < (self__.arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i,new_meta));
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_PersistentArrayMapSeq = (function __GT_PersistentArrayMapSeq(arr,i,_meta){return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
});
cljs.core.persistent_array_map_seq = (function persistent_array_map_seq(arr,i,_meta){if((i <= (arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapIterator = (function (arr,i,cnt){
this.arr = arr;
this.i = i;
this.cnt = cnt;
})
cljs.core.PersistentArrayMapIterator.cljs$lang$type = true;
cljs.core.PersistentArrayMapIterator.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapIterator";
cljs.core.PersistentArrayMapIterator.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/PersistentArrayMapIterator");
});
cljs.core.PersistentArrayMapIterator.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.cnt);
});
cljs.core.PersistentArrayMapIterator.prototype.next = (function (){var self__ = this;
var _ = this;var ret = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);self__.i = (self__.i + (2));
return ret;
});
cljs.core.__GT_PersistentArrayMapIterator = (function __GT_PersistentArrayMapIterator(arr,i,cnt){return (new cljs.core.PersistentArrayMapIterator(arr,i,cnt));
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16647951;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorStr = "cljs.core/PersistentArrayMap";
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentArrayMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentArrayMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__23643 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__23643) : cljs.core.keys.call(null,G__23643));
})());
});
cljs.core.PersistentArrayMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentArrayMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__23644 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__23644) : cljs.core.vals.call(null,G__23644));
})());
});
cljs.core.PersistentArrayMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentArrayMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentArrayMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__23645 = cljs.core.seq(coll);var chunk__23646 = null;var count__23647 = (0);var i__23648 = (0);while(true){
if((i__23648 < count__23647))
{var vec__23649 = chunk__23646.cljs$core$IIndexed$_nth$arity$2(null,i__23648);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23649,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23649,(1),null);var G__23650_23663 = v;var G__23651_23664 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23650_23663,G__23651_23664) : f.call(null,G__23650_23663,G__23651_23664));
{
var G__23665 = seq__23645;
var G__23666 = chunk__23646;
var G__23667 = count__23647;
var G__23668 = (i__23648 + (1));
seq__23645 = G__23665;
chunk__23646 = G__23666;
count__23647 = G__23667;
i__23648 = G__23668;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq(seq__23645);if(temp__4222__auto__)
{var seq__23645__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23645__$1))
{var c__4448__auto__ = cljs.core.chunk_first(seq__23645__$1);{
var G__23669 = cljs.core.chunk_rest(seq__23645__$1);
var G__23670 = c__4448__auto__;
var G__23671 = cljs.core.count(c__4448__auto__);
var G__23672 = (0);
seq__23645 = G__23669;
chunk__23646 = G__23670;
count__23647 = G__23671;
i__23648 = G__23672;
continue;
}
} else
{var vec__23652 = cljs.core.first(seq__23645__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23652,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23652,(1),null);var G__23653_23673 = v;var G__23654_23674 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23653_23673,G__23654_23674) : f.call(null,G__23653_23673,G__23654_23674));
{
var G__23675 = cljs.core.next(seq__23645__$1);
var G__23676 = null;
var G__23677 = (0);
var G__23678 = (0);
seq__23645 = G__23675;
chunk__23646 = G__23676;
count__23647 = G__23677;
i__23648 = G__23678;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx === (-1)))
{return not_found;
} else
{return (self__.arr[(idx + (1))]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var len = self__.arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var init__$2 = (function (){var G__23655 = init__$1;var G__23656 = (self__.arr[i]);var G__23657 = (self__.arr[(i + (1))]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__23655,G__23656,G__23657) : f.call(null,G__23655,G__23656,G__23657));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__23658 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23658) : cljs.core.deref.call(null,G__23658));
} else
{{
var G__23679 = (i + (2));
var G__23680 = init__$2;
i = G__23679;
init__$1 = G__23680;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (new cljs.core.PersistentArrayMapIterator(self__.arr,(0),(self__.cnt * (2))));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;if((function (){var G__23659 = other;if(G__23659)
{var bit__4335__auto__ = (G__23659.cljs$lang$protocol_mask$partition0$ & (1024));if((bit__4335__auto__) || (G__23659.cljs$core$IMap$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{var alen = self__.arr.length;var other__$1 = other;if((self__.cnt === other__$1.cljs$core$ICounted$_count$arity$1(null)))
{var i = (0);while(true){
if((i < alen))
{var v = other__$1.cljs$core$ILookup$_lookup$arity$3(null,(self__.arr[i]),cljs.core.lookup_sentinel);if(!((v === cljs.core.lookup_sentinel)))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[(i + (1))]),v))
{{
var G__23681 = (i + (2));
i = G__23681;
continue;
}
} else
{return false;
}
} else
{return false;
}
} else
{return true;
}
break;
}
} else
{return false;
}
} else
{return cljs.core.equiv_map(coll__$1,other);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientArrayMap((function (){var obj23661 = {};return obj23661;
})(),self__.arr.length,cljs.core.aclone(self__.arr)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx >= (0)))
{var len = self__.arr.length;var new_len = (len - (2));if((new_len === (0)))
{return cljs.core._empty(coll__$1);
} else
{var new_arr = (new Array(new_len));var s = (0);var d = (0);while(true){
if((s >= len))
{return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - (1)),new_arr,null));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(self__.arr[s])))
{{
var G__23682 = (s + (2));
var G__23683 = d;
s = G__23682;
d = G__23683;
continue;
}
} else
{(new_arr[d] = (self__.arr[s]));
(new_arr[(d + (1))] = (self__.arr[(s + (1))]));
{
var G__23684 = (s + (2));
var G__23685 = (d + (2));
s = G__23684;
d = G__23685;
continue;
}

}
}
break;
}
}
} else
{return coll__$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx === (-1)))
{if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{var arr__$1 = cljs.core.array_map_extend_kv(coll__$1,k,v);return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + (1)),arr__$1,null));
} else
{return cljs.core._with_meta(cljs.core._assoc(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1),k,v),self__.meta);
}
} else
{if((v === (self__.arr[(idx + (1))])))
{return coll__$1;
} else
{var arr__$1 = (function (){var G__23662 = cljs.core.aclone(self__.arr);(G__23662[(idx + (1))] = v);
return G__23662;
})();return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,arr__$1,null));

}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return !((cljs.core.array_map_index_of(coll__$1,k) === (-1)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.persistent_array_map_seq(self__.arr,(0),null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq(entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first(es);if(cljs.core.vector_QMARK_(e))
{{
var G__23686 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__23687 = cljs.core.next(es);
ret = G__23686;
es = G__23687;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__23688 = null;
var G__23688__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__23688__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__23688 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23688__2.call(this,self__,k);
case 3:
return G__23688__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23688.cljs$core$IFn$_invoke$arity$2 = G__23688__2;
G__23688.cljs$core$IFn$_invoke$arity$3 = G__23688__3;
return G__23688;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args23642){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23642)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentArrayMap = (function __GT_PersistentArrayMap(meta,cnt,arr,__hash){return (new cljs.core.PersistentArrayMap(meta,cnt,arr,__hash));
});
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,(0),[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = (8);
cljs.core.PersistentArrayMap.fromArray = (function (arr,no_clone,no_check){var arr__$1 = ((no_clone)?arr:cljs.core.aclone(arr));if(no_check)
{var cnt = (arr__$1.length / (2));return (new cljs.core.PersistentArrayMap(null,cnt,arr__$1,null));
} else
{var len = arr__$1.length;var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < len))
{{
var G__23689 = (i + (2));
var G__23690 = cljs.core._assoc_BANG_(ret,(arr__$1[i]),(arr__$1[(i + (1))]));
i = G__23689;
ret = G__23690;
continue;
}
} else
{return cljs.core._persistent_BANG_(ret);
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorStr = "cljs.core/TransientArrayMap";
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,key);if((idx >= (0)))
{(self__.arr[idx] = (self__.arr[(self__.len - (2))]));
(self__.arr[(idx + (1))] = (self__.arr[(self__.len - (1))]));
var G__23691_23699 = self__.arr;G__23691_23699.pop();
G__23691_23699.pop();
self__.len = (self__.len - (2));
} else
{}
return tcoll__$1;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,key);if((idx === (-1)))
{if(((self__.len + (2)) <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{self__.len = (self__.len + (2));
self__.arr.push(key);
self__.arr.push(val);
return tcoll__$1;
} else
{return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var G__23692 = self__.len;var G__23693 = self__.arr;return (cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2 ? cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2(G__23692,G__23693) : cljs.core.array__GT_transient_hash_map.call(null,G__23692,G__23693));
})(),key,val);
}
} else
{if((val === (self__.arr[(idx + (1))])))
{return tcoll__$1;
} else
{(self__.arr[(idx + (1))] = val);
return tcoll__$1;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{if((function (){var G__23694 = o;if(G__23694)
{var bit__4342__auto__ = (G__23694.cljs$lang$protocol_mask$partition0$ & (2048));if((bit__4342__auto__) || (G__23694.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__23694.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__23694);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__23694);
}
})())
{return cljs.core._assoc_BANG_(tcoll__$1,(function (){var G__23695 = o;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__23695) : cljs.core.key.call(null,G__23695));
})(),(function (){var G__23696 = o;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__23696) : cljs.core.val.call(null,G__23696));
})());
} else
{var es = cljs.core.seq(o);var tcoll__$2 = tcoll__$1;while(true){
var temp__4220__auto__ = cljs.core.first(es);if(cljs.core.truth_(temp__4220__auto__))
{var e = temp__4220__auto__;{
var G__23700 = cljs.core.next(es);
var G__23701 = cljs.core._assoc_BANG_(tcoll__$2,(function (){var G__23697 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__23697) : cljs.core.key.call(null,G__23697));
})(),(function (){var G__23698 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__23698) : cljs.core.val.call(null,G__23698));
})());
es = G__23700;
tcoll__$2 = G__23701;
continue;
}
} else
{return tcoll__$2;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{self__.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(self__.len,(2)),self__.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){var self__ = this;
var tcoll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,k);if((idx === (-1)))
{return not_found;
} else
{return (self__.arr[(idx + (1))]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{return cljs.core.quot(self__.len,(2));
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.__GT_TransientArrayMap = (function __GT_TransientArrayMap(editable_QMARK_,len,arr){return (new cljs.core.TransientArrayMap(editable_QMARK_,len,arr));
});
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);var i = (0);while(true){
if((i < len))
{{
var G__23702 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,(arr[i]),(arr[(i + (1))]));
var G__23703 = (i + (2));
out = G__23702;
i = G__23703;
continue;
}
} else
{return out;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorStr = "cljs.core/Box";
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__4258__auto__,writer__4259__auto__,opts__4260__auto__){return cljs.core._write(writer__4259__auto__,"cljs.core/Box");
});
cljs.core.__GT_Box = (function __GT_Box(val){return (new cljs.core.Box(val));
});
cljs.core.key_test = (function key_test(key,other){if((key === other))
{return true;
} else
{if(cljs.core.keyword_identical_QMARK_(key,other))
{return true;
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,other);

}
}
});
cljs.core.mask = (function mask(hash,shift){return ((hash >>> shift) & (31));
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){var G__23706 = cljs.core.aclone(arr);(G__23706[i] = a);
return G__23706;
});
var clone_and_set__5 = (function (arr,i,a,j,b){var G__23707 = cljs.core.aclone(arr);(G__23707[i] = a);
(G__23707[j] = b);
return G__23707;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$core$IFn$_invoke$arity$3 = clone_and_set__3;
clone_and_set.cljs$core$IFn$_invoke$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){var new_arr = (new Array((arr.length - (2))));cljs.core.array_copy(arr,(0),new_arr,(0),((2) * i));
cljs.core.array_copy(arr,((2) * (i + (1))),new_arr,((2) * i),(new_arr.length - ((2) * i)));
return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){return cljs.core.bit_count((bitmap & (bit - (1))));
});
cljs.core.bitpos = (function bitpos(hash,shift){return ((1) << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){var editable = inode.ensure_editable(edit);(editable.arr[i] = a);
return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){var editable = inode.ensure_editable(edit);(editable.arr[i] = a);
(editable.arr[j] = b);
return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$core$IFn$_invoke$arity$4 = edit_and_set__4;
edit_and_set.cljs$core$IFn$_invoke$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){var len = arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var init__$2 = (function (){var k = (arr[i]);if(!((k == null)))
{var G__23712 = init__$1;var G__23713 = k;var G__23714 = (arr[(i + (1))]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__23712,G__23713,G__23714) : f.call(null,G__23712,G__23713,G__23714));
} else
{var node = (arr[(i + (1))]);if(!((node == null)))
{return node.kv_reduce(f,init__$1);
} else
{return init__$1;
}
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__23715 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23715) : cljs.core.deref.call(null,G__23715));
} else
{{
var G__23716 = (i + (2));
var G__23717 = init__$2;
i = G__23716;
init__$1 = G__23717;
continue;
}
}
} else
{return init__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorStr = "cljs.core/BitmapIndexedNode";
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{var n = cljs.core.bit_count(self__.bitmap);var new_arr = (new Array((((n < (0)))?(4):((2) * (n + (1))))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * n));
return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
} else
{if((self__.bitmap === bit))
{return null;
} else
{return inode.edit_and_remove_pair(edit__$1,bit,idx);

}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{(removed_leaf_QMARK_[(0)] = true);
return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{return inode;

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){var self__ = this;
var inode = this;if((self__.bitmap === bit))
{return null;
} else
{var editable = inode.ensure_editable(e);var earr = editable.arr;var len = earr.length;editable.bitmap = (bit ^ editable.bitmap);
cljs.core.array_copy(earr,((2) * (i + (1))),earr,((2) * i),(len - ((2) * (i + (1)))));
(earr[(len - (2))] = null);
(earr[(len - (1))] = null);
return editable;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;var G__23718 = self__.arr;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__23718) : cljs.core.create_inode_seq.call(null,G__23718));
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;return cljs.core.inode_kv_reduce(self__.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{return val_or_node.inode_lookup((shift + (5)),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil))
{return val_or_node;
} else
{return not_found;

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);if(((self__.bitmap & bit) === (0)))
{var n = cljs.core.bit_count(self__.bitmap);if((((2) * n) < self__.arr.length))
{var editable = inode.ensure_editable(edit__$1);var earr = editable.arr;added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward(earr,((2) * idx),earr,((2) * (idx + (1))),((2) * (n - idx)));
(earr[((2) * idx)] = key);
(earr[(((2) * idx) + (1))] = val);
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{if((n >= (16)))
{var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));
var i_23732 = (0);var j_23733 = (0);while(true){
if((i_23732 < (32)))
{if((((self__.bitmap >>> i_23732) & (1)) === (0)))
{{
var G__23734 = (i_23732 + (1));
var G__23735 = j_23733;
i_23732 = G__23734;
j_23733 = G__23735;
continue;
}
} else
{(nodes[i_23732] = ((!(((self__.arr[j_23733]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),cljs.core.hash((self__.arr[j_23733])),(self__.arr[j_23733]),(self__.arr[(j_23733 + (1))]),added_leaf_QMARK_):(self__.arr[(j_23733 + (1))])));
{
var G__23736 = (i_23732 + (1));
var G__23737 = (j_23733 + (2));
i_23732 = G__23736;
j_23733 = G__23737;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit__$1,(n + (1)),nodes));
} else
{var new_arr = (new Array(((2) * (n + (4)))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));
(new_arr[((2) * idx)] = key);
(new_arr[(((2) * idx) + (1))] = val);
cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));
added_leaf_QMARK_.val = true;
var editable = inode.ensure_editable(edit__$1);editable.arr = new_arr;
editable.bitmap = (editable.bitmap | bit);
return editable;

}
}
} else
{var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),val);
}
} else
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__23719 = edit__$1;var G__23720 = (shift + (5));var G__23721 = key_or_nil;var G__23722 = val_or_node;var G__23723 = hash;var G__23724 = key;var G__23725 = val;return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$7 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(G__23719,G__23720,G__23721,G__23722,G__23723,G__23724,G__23725) : cljs.core.create_node.call(null,G__23719,G__23720,G__23721,G__23722,G__23723,G__23724,G__23725));
})());

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);if(((self__.bitmap & bit) === (0)))
{var n = cljs.core.bit_count(self__.bitmap);if((n >= (16)))
{var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_));
var i_23738 = (0);var j_23739 = (0);while(true){
if((i_23738 < (32)))
{if((((self__.bitmap >>> i_23738) & (1)) === (0)))
{{
var G__23740 = (i_23738 + (1));
var G__23741 = j_23739;
i_23738 = G__23740;
j_23739 = G__23741;
continue;
}
} else
{(nodes[i_23738] = ((!(((self__.arr[j_23739]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),cljs.core.hash((self__.arr[j_23739])),(self__.arr[j_23739]),(self__.arr[(j_23739 + (1))]),added_leaf_QMARK_):(self__.arr[(j_23739 + (1))])));
{
var G__23742 = (i_23738 + (1));
var G__23743 = (j_23739 + (2));
i_23738 = G__23742;
j_23739 = G__23743;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n + (1)),nodes));
} else
{var new_arr = (new Array(((2) * (n + (1)))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));
(new_arr[((2) * idx)] = key);
(new_arr[(((2) * idx) + (1))] = val);
cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else
{var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),val)));
}
} else
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(self__.arr,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__23726 = (shift + (5));var G__23727 = key_or_nil;var G__23728 = val_or_node;var G__23729 = hash;var G__23730 = key;var G__23731 = val;return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$6 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$6(G__23726,G__23727,G__23728,G__23729,G__23730,G__23731) : cljs.core.create_node.call(null,G__23726,G__23727,G__23728,G__23729,G__23730,G__23731));
})())));

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{return val_or_node.inode_find((shift + (5)),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_nil,val_or_node], null);
} else
{return not_found;

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_without((shift + (5)),hash,key);if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
} else
{if((self__.bitmap === bit))
{return null;
} else
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));

}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));
} else
{return inode;

}
}
}
});
cljs.core.__GT_BitmapIndexedNode = (function __GT_BitmapIndexedNode(edit,bitmap,arr){return (new cljs.core.BitmapIndexedNode(edit,bitmap,arr));
});
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,(0),[]));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){var arr = array_node.arr;var len = arr.length;var new_arr = (new Array(((2) * (array_node.cnt - (1)))));var i = (0);var j = (1);var bitmap = (0);while(true){
if((i < len))
{if((!((i === idx))) && (!(((arr[i]) == null))))
{(new_arr[j] = (arr[i]));
{
var G__23744 = (i + (1));
var G__23745 = (j + (2));
var G__23746 = (bitmap | ((1) << i));
i = G__23744;
j = G__23745;
bitmap = G__23746;
continue;
}
} else
{{
var G__23747 = (i + (1));
var G__23748 = j;
var G__23749 = bitmap;
i = G__23747;
j = G__23748;
bitmap = G__23749;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorStr = "cljs.core/ArrayNode";
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{return (new cljs.core.ArrayNode(e,self__.cnt,cljs.core.aclone(self__.arr)));
}
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{return inode;
} else
{var n = node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= (8)))
{return cljs.core.pack_array_node(inode,edit__$1,idx);
} else
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);editable.cnt = (editable.cnt - (1));
return editable;
}
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);

}
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;var G__23750 = self__.arr;return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(G__23750) : cljs.core.create_array_node_seq.call(null,G__23750));
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;var len = self__.arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var node = (self__.arr[i]);if(!((node == null)))
{var init__$2 = node.kv_reduce(f,init__$1);if(cljs.core.reduced_QMARK_(init__$2))
{var G__23751 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23751) : cljs.core.deref.call(null,G__23751));
} else
{{
var G__23752 = (i + (1));
var G__23753 = init__$2;
i = G__23752;
init__$1 = G__23753;
continue;
}
}
} else
{{
var G__23754 = (i + (1));
var G__23755 = init__$1;
i = G__23754;
init__$1 = G__23755;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{return node.inode_lookup((shift + (5)),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));editable.cnt = (editable.cnt + (1));
return editable;
} else
{var n = node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
}
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{return (new cljs.core.ArrayNode(null,(self__.cnt + (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_))));
} else
{var n = node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === node))
{return inode;
} else
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{return node.inode_find((shift + (5)),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{var n = node.inode_without((shift + (5)),hash,key);if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= (8)))
{return cljs.core.pack_array_node(inode,null,idx);
} else
{return (new cljs.core.ArrayNode(null,(self__.cnt - (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
} else
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));

}
}
} else
{return inode;
}
});
cljs.core.__GT_ArrayNode = (function __GT_ArrayNode(edit,cnt,arr){return (new cljs.core.ArrayNode(edit,cnt,arr));
});
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){var lim = ((2) * cnt);var i = (0);while(true){
if((i < lim))
{if(cljs.core.key_test(key,(arr[i])))
{return i;
} else
{{
var G__23756 = (i + (2));
i = G__23756;
continue;
}
}
} else
{return (-1);
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorStr = "cljs.core/HashCollisionNode";
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{var new_arr = (new Array(((2) * (self__.cnt + (1)))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * self__.cnt));
return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{return inode;
} else
{(removed_leaf_QMARK_[(0)] = true);
if((self__.cnt === (1)))
{return null;
} else
{var editable = inode.ensure_editable(edit__$1);var earr = editable.arr;(earr[idx] = (earr[(((2) * self__.cnt) - (2))]));
(earr[(idx + (1))] = (earr[(((2) * self__.cnt) - (1))]));
(earr[(((2) * self__.cnt) - (1))] = null);
(earr[(((2) * self__.cnt) - (2))] = null);
editable.cnt = (editable.cnt - (1));
return editable;
}
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;var G__23757 = self__.arr;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__23757) : cljs.core.create_inode_seq.call(null,G__23757));
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;return cljs.core.inode_kv_reduce(self__.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx < (0)))
{return not_found;
} else
{if(cljs.core.key_test(key,(self__.arr[idx])))
{return (self__.arr[(idx + (1))]);
} else
{return not_found;

}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{if((self__.arr.length > ((2) * self__.cnt)))
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * self__.cnt),key,(((2) * self__.cnt) + (1)),val);added_leaf_QMARK_.val = true;
editable.cnt = (editable.cnt + (1));
return editable;
} else
{var len = self__.arr.length;var new_arr = (new Array((len + (2))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);
(new_arr[len] = key);
(new_arr[(len + (1))] = val);
added_leaf_QMARK_.val = true;
return inode.ensure_editable_array(edit__$1,(self__.cnt + (1)),new_arr);
}
} else
{if(((self__.arr[(idx + (1))]) === val))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(idx + (1)),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{var len = ((2) * self__.cnt);var new_arr = (new Array((len + (2))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);
(new_arr[len] = key);
(new_arr[(len + (1))] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + (1)),new_arr));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[idx]),val))
{return inode;
} else
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(idx + (1)),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){var self__ = this;
var inode = this;if((e === self__.edit))
{self__.arr = array;
self__.cnt = count;
return inode;
} else
{return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx < (0)))
{return not_found;
} else
{if(cljs.core.key_test(key,(self__.arr[idx])))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[idx]),(self__.arr[(idx + (1))])], null);
} else
{return not_found;

}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{return inode;
} else
{if((self__.cnt === (1)))
{return null;
} else
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - (1)),cljs.core.remove_pair(self__.arr,cljs.core.quot(idx,(2)))));

}
}
});
cljs.core.__GT_HashCollisionNode = (function __GT_HashCollisionNode(edit,collision_hash,cnt,arr){return (new cljs.core.HashCollisionNode(edit,collision_hash,cnt,arr));
});
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){var key1hash = cljs.core.hash(key1);if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){var key1hash = cljs.core.hash(key1);if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$core$IFn$_invoke$arity$6 = create_node__6;
create_node.cljs$core$IFn$_invoke$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorStr = "cljs.core/NodeSeq";
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.NodeSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.s == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nodes[self__.i]),(self__.nodes[(self__.i + (1))])], null);
} else
{return cljs.core.first(self__.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.s == null))
{var G__23758 = self__.nodes;var G__23759 = (self__.i + (2));var G__23760 = null;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__23758,G__23759,G__23760) : cljs.core.create_inode_seq.call(null,G__23758,G__23759,G__23760));
} else
{var G__23761 = self__.nodes;var G__23762 = self__.i;var G__23763 = cljs.core.next(self__.s);return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__23761,G__23762,G__23763) : cljs.core.create_inode_seq.call(null,G__23761,G__23762,G__23763));
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_NodeSeq = (function __GT_NodeSeq(meta,nodes,i,s,__hash){return (new cljs.core.NodeSeq(meta,nodes,i,s,__hash));
});
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){return create_inode_seq.cljs$core$IFn$_invoke$arity$3(nodes,(0),null);
});
var create_inode_seq__3 = (function (nodes,i,s){if((s == null))
{var len = nodes.length;var j = i;while(true){
if((j < len))
{if(!(((nodes[j]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else
{var temp__4220__auto__ = (nodes[(j + (1))]);if(cljs.core.truth_(temp__4220__auto__))
{var node = temp__4220__auto__;var temp__4220__auto____$1 = node.inode_seq();if(cljs.core.truth_(temp__4220__auto____$1))
{var node_seq = temp__4220__auto____$1;return (new cljs.core.NodeSeq(null,nodes,(j + (2)),node_seq,null));
} else
{{
var G__23767 = (j + (2));
j = G__23767;
continue;
}
}
} else
{{
var G__23768 = (j + (2));
j = G__23768;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$core$IFn$_invoke$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$core$IFn$_invoke$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorStr = "cljs.core/ArrayNodeSeq";
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ArrayNodeSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var G__23769 = null;var G__23770 = self__.nodes;var G__23771 = self__.i;var G__23772 = cljs.core.next(self__.s);return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(G__23769,G__23770,G__23771,G__23772) : cljs.core.create_array_node_seq.call(null,G__23769,G__23770,G__23771,G__23772));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_ArrayNodeSeq = (function __GT_ArrayNodeSeq(meta,nodes,i,s,__hash){return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash));
});
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){return create_array_node_seq.cljs$core$IFn$_invoke$arity$4(null,nodes,(0),null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){if((s == null))
{var len = nodes.length;var j = i;while(true){
if((j < len))
{var temp__4220__auto__ = (nodes[j]);if(cljs.core.truth_(temp__4220__auto__))
{var nj = temp__4220__auto__;var temp__4220__auto____$1 = nj.inode_seq();if(cljs.core.truth_(temp__4220__auto____$1))
{var ns = temp__4220__auto____$1;return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + (1)),ns,null));
} else
{{
var G__23777 = (j + (1));
j = G__23777;
continue;
}
}
} else
{{
var G__23778 = (j + (1));
j = G__23778;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$core$IFn$_invoke$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$core$IFn$_invoke$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorStr = "cljs.core/PersistentHashMap";
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentHashMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentHashMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__23780 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__23780) : cljs.core.keys.call(null,G__23780));
})());
});
cljs.core.PersistentHashMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__23781 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__23781) : cljs.core.vals.call(null,G__23781));
})());
});
cljs.core.PersistentHashMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentHashMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__23782 = cljs.core.seq(coll);var chunk__23783 = null;var count__23784 = (0);var i__23785 = (0);while(true){
if((i__23785 < count__23784))
{var vec__23786 = chunk__23783.cljs$core$IIndexed$_nth$arity$2(null,i__23785);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23786,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23786,(1),null);var G__23787_23798 = v;var G__23788_23799 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23787_23798,G__23788_23799) : f.call(null,G__23787_23798,G__23788_23799));
{
var G__23800 = seq__23782;
var G__23801 = chunk__23783;
var G__23802 = count__23784;
var G__23803 = (i__23785 + (1));
seq__23782 = G__23800;
chunk__23783 = G__23801;
count__23784 = G__23802;
i__23785 = G__23803;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq(seq__23782);if(temp__4222__auto__)
{var seq__23782__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23782__$1))
{var c__4448__auto__ = cljs.core.chunk_first(seq__23782__$1);{
var G__23804 = cljs.core.chunk_rest(seq__23782__$1);
var G__23805 = c__4448__auto__;
var G__23806 = cljs.core.count(c__4448__auto__);
var G__23807 = (0);
seq__23782 = G__23804;
chunk__23783 = G__23805;
count__23784 = G__23806;
i__23785 = G__23807;
continue;
}
} else
{var vec__23789 = cljs.core.first(seq__23782__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23789,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23789,(1),null);var G__23790_23808 = v;var G__23791_23809 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23790_23808,G__23791_23809) : f.call(null,G__23790_23808,G__23791_23809));
{
var G__23810 = cljs.core.next(seq__23782__$1);
var G__23811 = null;
var G__23812 = (0);
var G__23813 = (0);
seq__23782 = G__23810;
chunk__23783 = G__23811;
count__23784 = G__23812;
i__23785 = G__23813;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var init__$1 = ((self__.has_nil_QMARK_)?(function (){var G__23792 = init;var G__23793 = null;var G__23794 = self__.nil_val;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__23792,G__23793,G__23794) : f.call(null,G__23792,G__23793,G__23794));
})():init);if(cljs.core.reduced_QMARK_(init__$1))
{var G__23795 = init__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23795) : cljs.core.deref.call(null,G__23795));
} else
{if(!((self__.root == null)))
{return self__.root.kv_reduce(f,init__$1);
} else
{return init__$1;

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentHashMap(self__.meta,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashMap((function (){var obj23797 = {};return obj23797;
})(),self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,self__.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),self__.root,false,null,null));
} else
{return coll__$1;
}
} else
{if((self__.root == null))
{return coll__$1;
} else
{var new_root = self__.root.inode_without((0),cljs.core.hash(k),k);if((new_root === self__.root))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if((k == null))
{if((self__.has_nil_QMARK_) && ((v === self__.nil_val)))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + (1))),self__.root,true,v,null));
}
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc((0),cljs.core.hash(k),k,v,added_leaf_QMARK_);if((new_root === self__.root))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + (1)):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((k == null))
{return self__.has_nil_QMARK_;
} else
{if((self__.root == null))
{return false;
} else
{return !((self__.root.inode_lookup((0),cljs.core.hash(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{var s = ((!((self__.root == null)))?self__.root.inode_seq():null);if(self__.has_nil_QMARK_)
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.nil_val], null),s);
} else
{return s;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq(entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first(es);if(cljs.core.vector_QMARK_(e))
{{
var G__23814 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__23815 = cljs.core.next(es);
ret = G__23814;
es = G__23815;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__23816 = null;
var G__23816__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__23816__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__23816 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23816__2.call(this,self__,k);
case 3:
return G__23816__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23816.cljs$core$IFn$_invoke$arity$2 = G__23816__2;
G__23816.cljs$core$IFn$_invoke$arity$3 = G__23816__3;
return G__23816;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (self__,args23779){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23779)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentHashMap = (function __GT_PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash){return (new cljs.core.PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash));
});
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,(0),null,false,null,(0)));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){var len = ks.length;var i = (0);var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if((i < len))
{{
var G__23817 = (i + (1));
var G__23818 = out.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,(ks[i]),(vs[i]));
i = G__23817;
out = G__23818;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorStr = "cljs.core/TransientHashMap";
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){var self__ = this;
var tcoll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return null;
}
} else
{if((self__.root == null))
{return null;
} else
{return self__.root.inode_lookup((0),cljs.core.hash(k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){var self__ = this;
var tcoll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(self__.edit)
{return self__.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){var self__ = this;
var tcoll = this;if(self__.edit)
{if((function (){var G__23819 = o;if(G__23819)
{var bit__4342__auto__ = (G__23819.cljs$lang$protocol_mask$partition0$ & (2048));if((bit__4342__auto__) || (G__23819.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__23819.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__23819);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__23819);
}
})())
{return tcoll.assoc_BANG_((function (){var G__23820 = o;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__23820) : cljs.core.key.call(null,G__23820));
})(),(function (){var G__23821 = o;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__23821) : cljs.core.val.call(null,G__23821));
})());
} else
{var es = cljs.core.seq(o);var tcoll__$1 = tcoll;while(true){
var temp__4220__auto__ = cljs.core.first(es);if(cljs.core.truth_(temp__4220__auto__))
{var e = temp__4220__auto__;{
var G__23824 = cljs.core.next(es);
var G__23825 = tcoll__$1.assoc_BANG_((function (){var G__23822 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__23822) : cljs.core.key.call(null,G__23822));
})(),(function (){var G__23823 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__23823) : cljs.core.val.call(null,G__23823));
})());
es = G__23824;
tcoll__$1 = G__23825;
continue;
}
} else
{return tcoll__$1;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){var self__ = this;
var tcoll = this;if(self__.edit)
{if((k == null))
{if((self__.nil_val === v))
{} else
{self__.nil_val = v;
}
if(self__.has_nil_QMARK_)
{} else
{self__.count = (self__.count + (1));
self__.has_nil_QMARK_ = true;
}
return tcoll;
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,(0),cljs.core.hash(k),k,v,added_leaf_QMARK_);if((node === self__.root))
{} else
{self__.root = node;
}
if(added_leaf_QMARK_.val)
{self__.count = (self__.count + (1));
} else
{}
return tcoll;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){var self__ = this;
var tcoll = this;if(self__.edit)
{if((k == null))
{if(self__.has_nil_QMARK_)
{self__.has_nil_QMARK_ = false;
self__.nil_val = null;
self__.count = (self__.count - (1));
return tcoll;
} else
{return tcoll;
}
} else
{if((self__.root == null))
{return tcoll;
} else
{var removed_leaf_QMARK_ = (new cljs.core.Box(false));var node = self__.root.inode_without_BANG_(self__.edit,(0),cljs.core.hash(k),k,removed_leaf_QMARK_);if((node === self__.root))
{} else
{self__.root = node;
}
if(cljs.core.truth_((removed_leaf_QMARK_[(0)])))
{self__.count = (self__.count - (1));
} else
{}
return tcoll;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){var self__ = this;
var tcoll = this;if(self__.edit)
{self__.edit = null;
return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.__GT_TransientHashMap = (function __GT_TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val){return (new cljs.core.TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val));
});
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){var t = node;var stack__$1 = stack;while(true){
if(!((t == null)))
{{
var G__23826 = ((ascending_QMARK_)?t.left:t.right);
var G__23827 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,t);
t = G__23826;
stack__$1 = G__23827;
continue;
}
} else
{return stack__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374862;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentTreeMapSeq";
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeMapSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt < (0)))
{return (cljs.core.count(cljs.core.next(coll__$1)) + (1));
} else
{return self__.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.peek(self__.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var t = cljs.core.first(self__.stack);var next_stack = cljs.core.tree_map_seq_push(((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next(self__.stack),self__.ascending_QMARK_);if(!((next_stack == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - (1)),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_PersistentTreeMapSeq = (function __GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){return (new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash));
});
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){if((ins instanceof cljs.core.RedNode))
{if((ins.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if((ins.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));

}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){if((ins instanceof cljs.core.RedNode))
{if((ins.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if((ins.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));

}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){if((del instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if((right instanceof cljs.core.BlackNode))
{return cljs.core.balance_right(key,val,del,right.redden());
} else
{if(((right instanceof cljs.core.RedNode)) && ((right.left instanceof cljs.core.BlackNode)))
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else
{throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){if((del instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if((left instanceof cljs.core.BlackNode))
{return cljs.core.balance_left(key,val,left.redden(),del);
} else
{if(((left instanceof cljs.core.RedNode)) && ((left.right instanceof cljs.core.BlackNode)))
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){var init__$1 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init):init);if(cljs.core.reduced_QMARK_(init__$1))
{var G__23840 = init__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23840) : cljs.core.deref.call(null,G__23840));
} else
{var init__$2 = (function (){var G__23841 = init__$1;var G__23842 = node.key;var G__23843 = node.val;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__23841,G__23842,G__23843) : f.call(null,G__23841,G__23842,G__23843));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__23844 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23844) : cljs.core.deref.call(null,G__23844));
} else
{var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__$2):init__$2);if(cljs.core.reduced_QMARK_(init__$3))
{var G__23845 = init__$3;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23845) : cljs.core.deref.call(null,G__23845));
} else
{return init__$3;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorStr = "cljs.core/BlackNode";
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.add_right = (function (ins){var self__ = this;
var node = this;return ins.balance_right(node);
});
cljs.core.BlackNode.prototype.redden = (function (){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){var self__ = this;
var node = this;return node;
});
cljs.core.BlackNode.prototype.add_left = (function (ins){var self__ = this;
var node = this;return ins.balance_left(node);
});
cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){var self__ = this;
var node = this;return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){var self__ = this;
var node = this;return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});
cljs.core.BlackNode.prototype.balance_right = (function (parent){var self__ = this;
var node = this;return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});
cljs.core.BlackNode.prototype.remove_left = (function (del){var self__ = this;
var node = this;return cljs.core.balance_left_del(self__.key,self__.val,del,self__.right);
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var node = this;return cljs.core.tree_map_kv_reduce(node,f,init);
});
cljs.core.BlackNode.prototype.remove_right = (function (del){var self__ = this;
var node = this;return cljs.core.balance_right_del(self__.key,self__.val,self__.left,del);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return null;

}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return not_found;

}
}
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return null;
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return (2);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){var self__ = this;
var node__$1 = this;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){var self__ = this;
var node__$1 = this;return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__23847 = null;
var G__23847__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__23847__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__23847 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23847__2.call(this,self__,k);
case 3:
return G__23847__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23847.cljs$core$IFn$_invoke$arity$2 = G__23847__2;
G__23847.cljs$core$IFn$_invoke$arity$3 = G__23847__3;
return G__23847;
})()
;
cljs.core.BlackNode.prototype.apply = (function (self__,args23846){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23846)));
});
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_BlackNode = (function __GT_BlackNode(key,val,left,right,__hash){return (new cljs.core.BlackNode(key,val,left,right,__hash));
});

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorStr = "cljs.core/RedNode";
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.add_right = (function (ins){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){var self__ = this;
var node = this;throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.blacken = (function (){var self__ = this;
var node = this;return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});
cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){var self__ = this;
var node = this;return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){var self__ = this;
var node = this;if((self__.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else
{if((self__.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else
{return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));

}
}
});
cljs.core.RedNode.prototype.balance_right = (function (parent){var self__ = this;
var node = this;if((self__.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else
{if((self__.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));

}
}
});
cljs.core.RedNode.prototype.remove_left = (function (del){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var node = this;return cljs.core.tree_map_kv_reduce(node,f,init);
});
cljs.core.RedNode.prototype.remove_right = (function (del){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return null;

}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return not_found;

}
}
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return null;
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return (2);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){var self__ = this;
var node__$1 = this;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){var self__ = this;
var node__$1 = this;return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});
cljs.core.RedNode.prototype.call = (function() {
var G__23849 = null;
var G__23849__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__23849__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__23849 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23849__2.call(this,self__,k);
case 3:
return G__23849__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23849.cljs$core$IFn$_invoke$arity$2 = G__23849__2;
G__23849.cljs$core$IFn$_invoke$arity$3 = G__23849__3;
return G__23849;
})()
;
cljs.core.RedNode.prototype.apply = (function (self__,args23848){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23848)));
});
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_RedNode = (function __GT_RedNode(key,val,left,right,__hash){return (new cljs.core.RedNode(key,val,left,right,__hash));
});
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c = (function (){var G__23862 = k;var G__23863 = tree.key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__23862,G__23863) : comp.call(null,G__23862,G__23863));
})();if((c === (0)))
{(found[(0)] = tree);
return null;
} else
{if((c < (0)))
{var ins = tree_map_add(comp,tree.left,k,v,found);if(!((ins == null)))
{return tree.add_left(ins);
} else
{return null;
}
} else
{var ins = tree_map_add(comp,tree.right,k,v,found);if(!((ins == null)))
{return tree.add_right(ins);
} else
{return null;
}

}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if((left instanceof cljs.core.RedNode))
{if((right instanceof cljs.core.RedNode))
{var app = tree_map_append(left.right,right.left);if((app instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else
{if((right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else
{var app = tree_map_append(left.right,right.left);if((app instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}

}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){if(!((tree == null)))
{var c = (function (){var G__23882 = k;var G__23883 = tree.key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__23882,G__23883) : comp.call(null,G__23882,G__23883));
})();if((c === (0)))
{(found[(0)] = tree);
return cljs.core.tree_map_append(tree.left,tree.right);
} else
{if((c < (0)))
{var del = tree_map_remove(comp,tree.left,k,found);if((!((del == null))) || (!(((found[(0)]) == null))))
{if((tree.left instanceof cljs.core.BlackNode))
{return cljs.core.balance_left_del(tree.key,tree.val,del,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else
{return null;
}
} else
{var del = tree_map_remove(comp,tree.right,k,found);if((!((del == null))) || (!(((found[(0)]) == null))))
{if((tree.right instanceof cljs.core.BlackNode))
{return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else
{return null;
}

}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){var tk = tree.key;var c = (function (){var G__23894 = k;var G__23895 = tk;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__23894,G__23895) : comp.call(null,G__23894,G__23895));
})();if((c === (0)))
{return tree.replace(tk,v,tree.left,tree.right);
} else
{if((c < (0)))
{return tree.replace(tk,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else
{return tree.replace(tk,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));

}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorStr = "cljs.core/PersistentTreeMap";
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__23897 = cljs.core.seq(coll);var chunk__23898 = null;var count__23899 = (0);var i__23900 = (0);while(true){
if((i__23900 < count__23899))
{var vec__23901 = chunk__23898.cljs$core$IIndexed$_nth$arity$2(null,i__23900);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23901,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23901,(1),null);var G__23902_23914 = v;var G__23903_23915 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23902_23914,G__23903_23915) : f.call(null,G__23902_23914,G__23903_23915));
{
var G__23916 = seq__23897;
var G__23917 = chunk__23898;
var G__23918 = count__23899;
var G__23919 = (i__23900 + (1));
seq__23897 = G__23916;
chunk__23898 = G__23917;
count__23899 = G__23918;
i__23900 = G__23919;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq(seq__23897);if(temp__4222__auto__)
{var seq__23897__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23897__$1))
{var c__4448__auto__ = cljs.core.chunk_first(seq__23897__$1);{
var G__23920 = cljs.core.chunk_rest(seq__23897__$1);
var G__23921 = c__4448__auto__;
var G__23922 = cljs.core.count(c__4448__auto__);
var G__23923 = (0);
seq__23897 = G__23920;
chunk__23898 = G__23921;
count__23899 = G__23922;
i__23900 = G__23923;
continue;
}
} else
{var vec__23904 = cljs.core.first(seq__23897__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23904,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23904,(1),null);var G__23905_23924 = v;var G__23906_23925 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23905_23924,G__23906_23925) : f.call(null,G__23905_23924,G__23906_23925));
{
var G__23926 = cljs.core.next(seq__23897__$1);
var G__23927 = null;
var G__23928 = (0);
var G__23929 = (0);
seq__23897 = G__23926;
chunk__23898 = G__23927;
count__23899 = G__23928;
i__23900 = G__23929;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__23907 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__23907) : cljs.core.keys.call(null,G__23907));
})());
});
cljs.core.PersistentTreeMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__23908 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__23908) : cljs.core.vals.call(null,G__23908));
})());
});
cljs.core.PersistentTreeMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){var self__ = this;
var coll = this;var t = self__.tree;while(true){
if(!((t == null)))
{var c = (function (){var G__23909 = k;var G__23910 = t.key;return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__23909,G__23910) : self__.comp.call(null,G__23909,G__23910));
})();if((c === (0)))
{return t;
} else
{if((c < (0)))
{{
var G__23930 = t.left;
t = G__23930;
continue;
}
} else
{{
var G__23931 = t.right;
t = G__23931;
continue;
}

}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;var n = coll__$1.entry_at(k);if(!((n == null)))
{return n.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;if(!((self__.tree == null)))
{return cljs.core.tree_map_kv_reduce(self__.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,self__.meta,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq(self__.tree,false,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentTreeMap.EMPTY,self__.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;var found = [null];var t = cljs.core.tree_map_remove(self__.comp,self__.tree,k,found);if((t == null))
{if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0)) == null))
{return coll__$1;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - (1)),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;var found = [null];var t = cljs.core.tree_map_add(self__.comp,self__.tree,k,v,found);if((t == null))
{var found_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,found_node.val))
{return coll__$1;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace(self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + (1)),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return !((coll__$1.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq(self__.tree,true,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq(entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first(es);if(cljs.core.vector_QMARK_(e))
{{
var G__23932 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__23933 = cljs.core.next(es);
ret = G__23932;
es = G__23933;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__23934 = null;
var G__23934__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__23934__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__23934 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23934__2.call(this,self__,k);
case 3:
return G__23934__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23934.cljs$core$IFn$_invoke$arity$2 = G__23934__2;
G__23934.cljs$core$IFn$_invoke$arity$3 = G__23934__3;
return G__23934;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args23896){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23896)));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq(self__.tree,ascending_QMARK_,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{var stack = null;var t = self__.tree;while(true){
if(!((t == null)))
{var c = (function (){var G__23911 = k;var G__23912 = t.key;return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__23911,G__23912) : self__.comp.call(null,G__23911,G__23912));
})();if((c === (0)))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t),ascending_QMARK_,(-1),null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c < (0)))
{{
var G__23935 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__23936 = t.left;
stack = G__23935;
t = G__23936;
continue;
}
} else
{{
var G__23937 = stack;
var G__23938 = t.right;
stack = G__23937;
t = G__23938;
continue;
}
}
} else
{if((c > (0)))
{{
var G__23939 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__23940 = t.right;
stack = G__23939;
t = G__23940;
continue;
}
} else
{{
var G__23941 = stack;
var G__23942 = t.left;
stack = G__23941;
t = G__23942;
continue;
}
}

}
}
} else
{if((stack == null))
{return null;
} else
{return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,(-1),null));
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;var G__23913 = entry;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__23913) : cljs.core.key.call(null,G__23913));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.comp;
});
cljs.core.__GT_PersistentTreeMap = (function __GT_PersistentTreeMap(comp,tree,cnt,meta,__hash){return (new cljs.core.PersistentTreeMap(comp,tree,cnt,meta,__hash));
});
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,(0),null,(0)));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){var in$ = cljs.core.seq(keyvals);var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if(in$)
{{
var G__23943 = cljs.core.nnext(in$);
var G__23944 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__23943;
out = G__23944;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hash_map__delegate.call(this,keyvals);};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__23945){
var keyvals = cljs.core.seq(arglist__23945);
return hash_map__delegate(keyvals);
});
hash_map.cljs$core$IFn$_invoke$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(cljs.core.count(keyvals),(2)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return array_map__delegate.call(this,keyvals);};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__23946){
var keyvals = cljs.core.seq(arglist__23946);
return array_map__delegate(keyvals);
});
array_map.cljs$core$IFn$_invoke$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){var ks = [];var obj = (function (){var obj23950 = {};return obj23950;
})();var kvs = cljs.core.seq(keyvals);while(true){
if(kvs)
{ks.push(cljs.core.first(kvs));
(obj[cljs.core.first(kvs)] = cljs.core.second(kvs));
{
var G__23951 = cljs.core.nnext(kvs);
kvs = G__23951;
continue;
}
} else
{return cljs.core.ObjMap.fromObject(ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return obj_map__delegate.call(this,keyvals);};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__23952){
var keyvals = cljs.core.seq(arglist__23952);
return obj_map__delegate(keyvals);
});
obj_map.cljs$core$IFn$_invoke$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){var in$ = cljs.core.seq(keyvals);var out = cljs.core.PersistentTreeMap.EMPTY;while(true){
if(in$)
{{
var G__23953 = cljs.core.nnext(in$);
var G__23954 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__23953;
out = G__23954;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sorted_map__delegate.call(this,keyvals);};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__23955){
var keyvals = cljs.core.seq(arglist__23955);
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$core$IFn$_invoke$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){var in$ = cljs.core.seq(keyvals);var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator(comparator),null,(0),null,(0)));while(true){
if(in$)
{{
var G__23956 = cljs.core.nnext(in$);
var G__23957 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__23956;
out = G__23957;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sorted_map_by__delegate.call(this,comparator,keyvals);};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__23958){
var comparator = cljs.core.first(arglist__23958);
var keyvals = cljs.core.rest(arglist__23958);
return sorted_map_by__delegate(comparator,keyvals);
});
sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;

/**
* @constructor
*/
cljs.core.KeySeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.KeySeq.cljs$lang$type = true;
cljs.core.KeySeq.cljs$lang$ctorStr = "cljs.core/KeySeq";
cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/KeySeq");
});
cljs.core.KeySeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.KeySeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__23959 = self__.mseq;if(G__23959)
{var bit__4342__auto__ = (G__23959.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4342__auto__) || (G__23959.cljs$core$INext$))
{return true;
} else
{if((!G__23959.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__23959);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__23959);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if((nseq == null))
{return null;
} else
{return (new cljs.core.KeySeq(nseq,self__._meta));
}
});
cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);return me.cljs$core$IMapEntry$_key$arity$1(null);
});
cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__23960 = self__.mseq;if(G__23960)
{var bit__4342__auto__ = (G__23960.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4342__auto__) || (G__23960.cljs$core$INext$))
{return true;
} else
{if((!G__23960.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__23960);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__23960);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if(!((nseq == null)))
{return (new cljs.core.KeySeq(nseq,self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.KeySeq(self__.mseq,new_meta));
});
cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_KeySeq = (function __GT_KeySeq(mseq,_meta){return (new cljs.core.KeySeq(mseq,_meta));
});
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){var temp__4222__auto__ = cljs.core.seq(hash_map);if(temp__4222__auto__)
{var mseq = temp__4222__auto__;return (new cljs.core.KeySeq(mseq,null));
} else
{return null;
}
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){return cljs.core._key(map_entry);
});

/**
* @constructor
*/
cljs.core.ValSeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.ValSeq.cljs$lang$type = true;
cljs.core.ValSeq.cljs$lang$ctorStr = "cljs.core/ValSeq";
cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/ValSeq");
});
cljs.core.ValSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ValSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__23961 = self__.mseq;if(G__23961)
{var bit__4342__auto__ = (G__23961.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4342__auto__) || (G__23961.cljs$core$INext$))
{return true;
} else
{if((!G__23961.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__23961);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__23961);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if((nseq == null))
{return null;
} else
{return (new cljs.core.ValSeq(nseq,self__._meta));
}
});
cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);return me.cljs$core$IMapEntry$_val$arity$1(null);
});
cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__23962 = self__.mseq;if(G__23962)
{var bit__4342__auto__ = (G__23962.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4342__auto__) || (G__23962.cljs$core$INext$))
{return true;
} else
{if((!G__23962.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__23962);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__23962);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if(!((nseq == null)))
{return (new cljs.core.ValSeq(nseq,self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.ValSeq(self__.mseq,new_meta));
});
cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_ValSeq = (function __GT_ValSeq(mseq,_meta){return (new cljs.core.ValSeq(mseq,_meta));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){var temp__4222__auto__ = cljs.core.seq(hash_map);if(temp__4222__auto__)
{var mseq = temp__4222__auto__;return (new cljs.core.ValSeq(mseq,null));
} else
{return null;
}
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__23963_SHARP_,p2__23964_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3678__auto__ = p1__23963_SHARP_;if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__23964_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return merge__delegate.call(this,maps);};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__23965){
var maps = cljs.core.seq(arglist__23965);
return merge__delegate(maps);
});
merge.cljs$core$IFn$_invoke$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{var merge_entry = (function (m,e){var k = cljs.core.first(e);var v = cljs.core.second(e);if(cljs.core.contains_QMARK_(m,k))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__23968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__23969 = v;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23968,G__23969) : f.call(null,G__23968,G__23969));
})());
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});var merge2 = ((function (merge_entry){
return (function (m1,m2){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__3678__auto__ = m1;if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});})(merge_entry))
;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(merge2,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return merge_with__delegate.call(this,f,maps);};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__23970){
var f = cljs.core.first(arglist__23970);
var maps = cljs.core.rest(arglist__23970);
return merge_with__delegate(f,maps);
});
merge_with.cljs$core$IFn$_invoke$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){var ret = cljs.core.PersistentArrayMap.EMPTY;var keys = cljs.core.seq(keyseq);while(true){
if(keys)
{var key = cljs.core.first(keys);var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map,key,cljs.core.constant$keyword$9);{
var G__23971 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(entry,cljs.core.constant$keyword$9))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,entry):ret);
var G__23972 = cljs.core.next(keys);
ret = G__23971;
keys = G__23972;
continue;
}
} else
{return ret;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorStr = "cljs.core/PersistentHashSet";
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentHashSet.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentHashSet.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentHashSet.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__23975 = cljs.core.seq(coll);var chunk__23976 = null;var count__23977 = (0);var i__23978 = (0);while(true){
if((i__23978 < count__23977))
{var vec__23979 = chunk__23976.cljs$core$IIndexed$_nth$arity$2(null,i__23978);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23979,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23979,(1),null);var G__23980_23985 = v;var G__23981_23986 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23980_23985,G__23981_23986) : f.call(null,G__23980_23985,G__23981_23986));
{
var G__23987 = seq__23975;
var G__23988 = chunk__23976;
var G__23989 = count__23977;
var G__23990 = (i__23978 + (1));
seq__23975 = G__23987;
chunk__23976 = G__23988;
count__23977 = G__23989;
i__23978 = G__23990;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq(seq__23975);if(temp__4222__auto__)
{var seq__23975__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23975__$1))
{var c__4448__auto__ = cljs.core.chunk_first(seq__23975__$1);{
var G__23991 = cljs.core.chunk_rest(seq__23975__$1);
var G__23992 = c__4448__auto__;
var G__23993 = cljs.core.count(c__4448__auto__);
var G__23994 = (0);
seq__23975 = G__23991;
chunk__23976 = G__23992;
count__23977 = G__23993;
i__23978 = G__23994;
continue;
}
} else
{var vec__23982 = cljs.core.first(seq__23975__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23982,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23982,(1),null);var G__23983_23995 = v;var G__23984_23996 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23983_23995,G__23984_23996) : f.call(null,G__23983_23995,G__23984_23996));
{
var G__23997 = cljs.core.next(seq__23975__$1);
var G__23998 = null;
var G__23999 = (0);
var G__24000 = (0);
seq__23975 = G__23997;
chunk__23976 = G__23998;
count__23977 = G__23999;
i__23978 = G__24000;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){var self__ = this;
var coll__$1 = this;if(cljs.core._contains_key_QMARK_(self__.hash_map,v))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._count(self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__23973_SHARP_){return cljs.core.contains_QMARK_(coll__$1,p1__23973_SHARP_);
});})(coll__$1))
,other));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashSet(cljs.core._as_transient(self__.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,self__.meta);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,cljs.core._dissoc(self__.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.keys(self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__24001 = null;
var G__24001__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__24001__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__24001 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24001__2.call(this,self__,k);
case 3:
return G__24001__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24001.cljs$core$IFn$_invoke$arity$2 = G__24001__2;
G__24001.cljs$core$IFn$_invoke$arity$3 = G__24001__3;
return G__24001;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (self__,args23974){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23974)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentHashSet = (function __GT_PersistentHashSet(meta,hash_map,__hash){return (new cljs.core.PersistentHashSet(meta,hash_map,__hash));
});
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,(0)));
cljs.core.PersistentHashSet.fromArray = (function (items,no_clone){var len = items.length;if((len <= cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{var arr = ((no_clone)?items:cljs.core.aclone(items));var i = (0);var out = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < len))
{{
var G__24002 = (i + (1));
var G__24003 = cljs.core._assoc_BANG_(out,(items[i]),null);
i = G__24002;
out = G__24003;
continue;
}
} else
{return (new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_(out),null));
}
break;
}
} else
{var i = (0);var out = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < len))
{{
var G__24004 = (i + (1));
var G__24005 = cljs.core._conj_BANG_(out,(items[i]));
i = G__24004;
out = G__24005;
continue;
}
} else
{return cljs.core._persistent_BANG_(out);
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorStr = "cljs.core/TransientHashSet";
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__24007 = null;
var G__24007__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__24007__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__24007 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24007__2.call(this,self__,k);
case 3:
return G__24007__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24007.cljs$core$IFn$_invoke$arity$2 = G__24007__2;
G__24007.cljs$core$IFn$_invoke$arity$3 = G__24007__3;
return G__24007;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (self__,args24006){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24006)));
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var tcoll = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var tcoll = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){var self__ = this;
var tcoll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){var self__ = this;
var tcoll__$1 = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return cljs.core.count(self__.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){var self__ = this;
var tcoll__$1 = this;self__.transient_map = cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(self__.transient_map,v);
return tcoll__$1;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;self__.transient_map = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(self__.transient_map,o,null);
return tcoll__$1;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(self__.transient_map),null));
});
cljs.core.__GT_TransientHashSet = (function __GT_TransientHashSet(transient_map){return (new cljs.core.TransientHashSet(transient_map));
});

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorStr = "cljs.core/PersistentTreeSet";
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeSet.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeSet.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentTreeSet.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__24010 = cljs.core.seq(coll);var chunk__24011 = null;var count__24012 = (0);var i__24013 = (0);while(true){
if((i__24013 < count__24012))
{var vec__24014 = chunk__24011.cljs$core$IIndexed$_nth$arity$2(null,i__24013);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24014,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24014,(1),null);var G__24015_24020 = v;var G__24016_24021 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24015_24020,G__24016_24021) : f.call(null,G__24015_24020,G__24016_24021));
{
var G__24022 = seq__24010;
var G__24023 = chunk__24011;
var G__24024 = count__24012;
var G__24025 = (i__24013 + (1));
seq__24010 = G__24022;
chunk__24011 = G__24023;
count__24012 = G__24024;
i__24013 = G__24025;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq(seq__24010);if(temp__4222__auto__)
{var seq__24010__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(seq__24010__$1))
{var c__4448__auto__ = cljs.core.chunk_first(seq__24010__$1);{
var G__24026 = cljs.core.chunk_rest(seq__24010__$1);
var G__24027 = c__4448__auto__;
var G__24028 = cljs.core.count(c__4448__auto__);
var G__24029 = (0);
seq__24010 = G__24026;
chunk__24011 = G__24027;
count__24012 = G__24028;
i__24013 = G__24029;
continue;
}
} else
{var vec__24017 = cljs.core.first(seq__24010__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24017,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24017,(1),null);var G__24018_24030 = v;var G__24019_24031 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24018_24030,G__24019_24031) : f.call(null,G__24018_24030,G__24019_24031));
{
var G__24032 = cljs.core.next(seq__24010__$1);
var G__24033 = null;
var G__24034 = (0);
var G__24035 = (0);
seq__24010 = G__24032;
chunk__24011 = G__24033;
count__24012 = G__24034;
i__24013 = G__24035;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){var self__ = this;
var coll__$1 = this;var n = self__.tree_map.entry_at(v);if(!((n == null)))
{return n.key;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.count(self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core.count(self__.tree_map) > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.rseq(self__.tree_map));
} else
{return null;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__24008_SHARP_){return cljs.core.contains_QMARK_(coll__$1,p1__24008_SHARP_);
});})(coll__$1))
,other));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentTreeSet.EMPTY,self__.meta);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.keys(self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__24036 = null;
var G__24036__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__24036__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__24036 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24036__2.call(this,self__,k);
case 3:
return G__24036__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24036.cljs$core$IFn$_invoke$arity$2 = G__24036__2;
G__24036.cljs$core$IFn$_invoke$arity$3 = G__24036__3;
return G__24036;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args24009){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24009)));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){var self__ = this;
var coll__$1 = this;return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq(self__.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){var self__ = this;
var coll__$1 = this;return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq_from(self__.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._comparator(self__.tree_map);
});
cljs.core.__GT_PersistentTreeSet = (function __GT_PersistentTreeSet(meta,tree_map,__hash){return (new cljs.core.PersistentTreeSet(meta,tree_map,__hash));
});
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,(0)));
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){var arr = iseq.arr;var ret = (function (){var a__4542__auto__ = arr;var i = (0);var res = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < a__4542__auto__.length))
{{
var G__24037 = (i + (1));
var G__24038 = res.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,(arr[i]));
i = G__24037;
res = G__24038;
continue;
}
} else
{return res;
}
break;
}
})();return ret.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
});
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){var in$ = cljs.core.seq(coll);if((in$ == null))
{return cljs.core.PersistentHashSet.EMPTY;
} else
{if(((in$ instanceof cljs.core.IndexedSeq)) && ((in$.i === (0))))
{return cljs.core.set_from_indexed_seq(in$);
} else
{var in$__$1 = in$;var out = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);while(true){
if(!((in$__$1 == null)))
{{
var G__24039 = in$__$1.cljs$core$INext$_next$arity$1(null);
var G__24040 = out.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,in$__$1.cljs$core$ISeq$_first$arity$1(null));
in$__$1 = G__24039;
out = G__24040;
continue;
}
} else
{return out.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
}
break;
}

}
}
});
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__24041__delegate = function (keys){return cljs.core.set(keys);
};
var G__24041 = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24041__delegate.call(this,keys);};
G__24041.cljs$lang$maxFixedArity = 0;
G__24041.cljs$lang$applyTo = (function (arglist__24042){
var keys = cljs.core.seq(arglist__24042);
return G__24041__delegate(keys);
});
G__24041.cljs$core$IFn$_invoke$arity$variadic = G__24041__delegate;
return G__24041;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$core$IFn$_invoke$arity$0 = hash_set__0;
hash_set.cljs$core$IFn$_invoke$arity$variadic = hash_set__1.cljs$core$IFn$_invoke$arity$variadic;
return hash_set;
})()
;
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sorted_set__delegate.call(this,keys);};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__24043){
var keys = cljs.core.seq(arglist__24043);
return sorted_set__delegate(keys);
});
sorted_set.cljs$core$IFn$_invoke$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),(0))),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sorted_set_by__delegate.call(this,comparator,keys);};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__24044){
var comparator = cljs.core.first(arglist__24044);
var keys = cljs.core.rest(arglist__24044);
return sorted_set_by__delegate(comparator,keys);
});
sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap.  Returns a transducer when no collection
* is provided.
*/
cljs.core.replace = (function() {
var replace = null;
var replace__1 = (function (smap){return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__24045_SHARP_){var temp__4220__auto__ = cljs.core.find(smap,p1__24045_SHARP_);if(cljs.core.truth_(temp__4220__auto__))
{var e = temp__4220__auto__;return cljs.core.val(e);
} else
{return p1__24045_SHARP_;
}
}));
});
var replace__2 = (function (smap,coll){if(cljs.core.vector_QMARK_(coll))
{var n = cljs.core.count(coll);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n){
return (function (v,i){var temp__4220__auto__ = cljs.core.find(smap,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i));if(cljs.core.truth_(temp__4220__auto__))
{var e = temp__4220__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,cljs.core.second(e));
} else
{return v;
}
});})(n))
,coll,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(cljs.core.inc,(0))));
} else
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24046_SHARP_){var temp__4220__auto__ = cljs.core.find(smap,p1__24046_SHARP_);if(cljs.core.truth_(temp__4220__auto__))
{var e = temp__4220__auto__;return cljs.core.second(e);
} else
{return p1__24046_SHARP_;
}
}),coll);
}
});
replace = function(smap,coll){
switch(arguments.length){
case 1:
return replace__1.call(this,smap);
case 2:
return replace__2.call(this,smap,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace.cljs$core$IFn$_invoke$arity$1 = replace__1;
replace.cljs$core$IFn$_invoke$arity$2 = replace__2;
return replace;
})()
;
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){var step = (function step(xs,seen){return (new cljs.core.LazySeq(null,(function (){return (function (p__24057,seen__$1){while(true){
var vec__24058 = p__24057;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24058,(0),null);var xs__$1 = vec__24058;var temp__4222__auto__ = cljs.core.seq(xs__$1);if(temp__4222__auto__)
{var s = temp__4222__auto__;if(cljs.core.contains_QMARK_(seen__$1,f))
{{
var G__24059 = cljs.core.rest(s);
var G__24060 = seen__$1;
p__24057 = G__24059;
seen__$1 = G__24060;
continue;
}
} else
{return cljs.core.cons(f,step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,f)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){var ret = cljs.core.PersistentVector.EMPTY;var s__$1 = s;while(true){
if(cljs.core.next(s__$1))
{{
var G__24061 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.first(s__$1));
var G__24062 = cljs.core.next(s__$1);
ret = G__24061;
s__$1 = G__24062;
continue;
}
} else
{return cljs.core.seq(ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){if((function (){var G__24064 = x;if(G__24064)
{var bit__4335__auto__ = (G__24064.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__4335__auto__) || (G__24064.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$INamed$_name$arity$1(null);
} else
{if(typeof x === 'string')
{return x;
} else
{throw (new Error(("Doesn't support name: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
}
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){var map = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);var ks = cljs.core.seq(keys);var vs = cljs.core.seq(vals);while(true){
if((ks) && (vs))
{{
var G__24065 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map,cljs.core.first(ks),cljs.core.first(vs));
var G__24066 = cljs.core.next(ks);
var G__24067 = cljs.core.next(vs);
map = G__24065;
ks = G__24066;
vs = G__24067;
continue;
}
} else
{return cljs.core.persistent_BANG_(map);
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){return x;
});
var max_key__3 = (function (k,x,y){if(((function (){var G__24078 = x;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__24078) : k.call(null,G__24078));
})() > (function (){var G__24079 = y;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__24079) : k.call(null,G__24079));
})()))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__24080__delegate = function (k,x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24068_SHARP_,p2__24069_SHARP_){return max_key.cljs$core$IFn$_invoke$arity$3(k,p1__24068_SHARP_,p2__24069_SHARP_);
}),max_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__24080 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__24080__delegate.call(this,k,x,y,more);};
G__24080.cljs$lang$maxFixedArity = 3;
G__24080.cljs$lang$applyTo = (function (arglist__24081){
var k = cljs.core.first(arglist__24081);
arglist__24081 = cljs.core.next(arglist__24081);
var x = cljs.core.first(arglist__24081);
arglist__24081 = cljs.core.next(arglist__24081);
var y = cljs.core.first(arglist__24081);
var more = cljs.core.rest(arglist__24081);
return G__24080__delegate(k,x,y,more);
});
G__24080.cljs$core$IFn$_invoke$arity$variadic = G__24080__delegate;
return G__24080;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$core$IFn$_invoke$arity$2 = max_key__2;
max_key.cljs$core$IFn$_invoke$arity$3 = max_key__3;
max_key.cljs$core$IFn$_invoke$arity$variadic = max_key__4.cljs$core$IFn$_invoke$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){return x;
});
var min_key__3 = (function (k,x,y){if(((function (){var G__24092 = x;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__24092) : k.call(null,G__24092));
})() < (function (){var G__24093 = y;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__24093) : k.call(null,G__24093));
})()))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__24094__delegate = function (k,x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24082_SHARP_,p2__24083_SHARP_){return min_key.cljs$core$IFn$_invoke$arity$3(k,p1__24082_SHARP_,p2__24083_SHARP_);
}),min_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__24094 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__24094__delegate.call(this,k,x,y,more);};
G__24094.cljs$lang$maxFixedArity = 3;
G__24094.cljs$lang$applyTo = (function (arglist__24095){
var k = cljs.core.first(arglist__24095);
arglist__24095 = cljs.core.next(arglist__24095);
var x = cljs.core.first(arglist__24095);
arglist__24095 = cljs.core.next(arglist__24095);
var y = cljs.core.first(arglist__24095);
var more = cljs.core.rest(arglist__24095);
return G__24094__delegate(k,x,y,more);
});
G__24094.cljs$core$IFn$_invoke$arity$variadic = G__24094__delegate;
return G__24094;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$core$IFn$_invoke$arity$2 = min_key__2;
min_key.cljs$core$IFn$_invoke$arity$3 = min_key__3;
min_key.cljs$core$IFn$_invoke$arity$variadic = min_key__4.cljs$core$IFn$_invoke$arity$variadic;
return min_key;
})()
;

/**
* @constructor
*/
cljs.core.ArrayList = (function (arr){
this.arr = arr;
})
cljs.core.ArrayList.cljs$lang$type = true;
cljs.core.ArrayList.cljs$lang$ctorStr = "cljs.core/ArrayList";
cljs.core.ArrayList.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/ArrayList");
});
cljs.core.ArrayList.prototype.add = (function (x){var self__ = this;
var _ = this;return self__.arr.push(x);
});
cljs.core.ArrayList.prototype.size = (function (){var self__ = this;
var _ = this;return self__.arr.length;
});
cljs.core.ArrayList.prototype.clear = (function (){var self__ = this;
var _ = this;return self__.arr = [];
});
cljs.core.ArrayList.prototype.isEmpty = (function (){var self__ = this;
var _ = this;return (self__.arr.length === (0));
});
cljs.core.ArrayList.prototype.toArray = (function (){var self__ = this;
var _ = this;return self__.arr;
});
cljs.core.__GT_ArrayList = (function __GT_ArrayList(arr){return (new cljs.core.ArrayList(arr));
});
cljs.core.array_list = (function array_list(){return (new cljs.core.ArrayList([]));
});
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__1 = (function (n){return (function (rf){var a = cljs.core.array_list();return ((function (a){
return (function() {
var G__24112 = null;
var G__24112__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__24112__1 = (function (result){var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());a.clear();
var G__24107 = result;var G__24108 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__24107,G__24108) : rf.call(null,G__24107,G__24108));
})());var G__24109 = result__$1;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__24109) : rf.call(null,G__24109));
});
var G__24112__2 = (function (result,input){a.add(input);
if((n === a.size()))
{var v = cljs.core.vec(a.toArray());a.clear();
var G__24110 = result;var G__24111 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__24110,G__24111) : rf.call(null,G__24110,G__24111));
} else
{return result;
}
});
G__24112 = function(result,input){
switch(arguments.length){
case 0:
return G__24112__0.call(this);
case 1:
return G__24112__1.call(this,result);
case 2:
return G__24112__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24112.cljs$core$IFn$_invoke$arity$0 = G__24112__0;
G__24112.cljs$core$IFn$_invoke$arity$1 = G__24112__1;
G__24112.cljs$core$IFn$_invoke$arity$2 = G__24112__2;
return G__24112;
})()
;})(a))
});
});
var partition_all__2 = (function (n,coll){return partition_all.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4222__auto__ = cljs.core.seq(coll);if(temp__4222__auto__)
{var s = temp__4222__auto__;return cljs.core.cons(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s),partition_all.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else
{return null;
}
}),null,null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 1:
return partition_all__1.call(this,n);
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$core$IFn$_invoke$arity$1 = partition_all__1;
partition_all.cljs$core$IFn$_invoke$arity$2 = partition_all__2;
partition_all.cljs$core$IFn$_invoke$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.take_while = (function() {
var take_while = null;
var take_while__1 = (function (pred){return (function (rf){return (function() {
var G__24125 = null;
var G__24125__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__24125__1 = (function (result){var G__24120 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__24120) : rf.call(null,G__24120));
});
var G__24125__2 = (function (result,input){if(cljs.core.truth_((function (){var G__24121 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__24121) : pred.call(null,G__24121));
})()))
{var G__24122 = result;var G__24123 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__24122,G__24123) : rf.call(null,G__24122,G__24123));
} else
{return cljs.core.reduced(result);
}
});
G__24125 = function(result,input){
switch(arguments.length){
case 0:
return G__24125__0.call(this);
case 1:
return G__24125__1.call(this,result);
case 2:
return G__24125__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24125.cljs$core$IFn$_invoke$arity$0 = G__24125__0;
G__24125.cljs$core$IFn$_invoke$arity$1 = G__24125__1;
G__24125.cljs$core$IFn$_invoke$arity$2 = G__24125__2;
return G__24125;
})()
});
});
var take_while__2 = (function (pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4222__auto__ = cljs.core.seq(coll);if(temp__4222__auto__)
{var s = temp__4222__auto__;if(cljs.core.truth_((function (){var G__24124 = cljs.core.first(s);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__24124) : pred.call(null,G__24124));
})()))
{return cljs.core.cons(cljs.core.first(s),take_while.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.rest(s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
take_while = function(pred,coll){
switch(arguments.length){
case 1:
return take_while__1.call(this,pred);
case 2:
return take_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_while.cljs$core$IFn$_invoke$arity$1 = take_while__1;
take_while.cljs$core$IFn$_invoke$arity$2 = take_while__2;
return take_while;
})()
;
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){return (function (e){var comp = cljs.core._comparator(sc);var G__24130 = (function (){var G__24132 = cljs.core._entry_key(sc,e);var G__24133 = key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__24132,G__24133) : comp.call(null,G__24132,G__24133));
})();var G__24131 = (0);return (test.cljs$core$IFn$_invoke$arity$2 ? test.cljs$core$IFn$_invoke$arity$2(G__24130,G__24131) : test.call(null,G__24130,G__24131));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){var include = cljs.core.mk_bound_fn(sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_], true).call(null,test)))
{var temp__4222__auto__ = cljs.core._sorted_seq_from(sc,key,true);if(cljs.core.truth_(temp__4222__auto__))
{var vec__24137 = temp__4222__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24137,(0),null);var s = vec__24137;if(cljs.core.truth_((function (){var G__24138 = e;return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__24138) : include.call(null,G__24138));
})()))
{return s;
} else
{return cljs.core.next(s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){var temp__4222__auto__ = cljs.core._sorted_seq_from(sc,start_key,true);if(cljs.core.truth_(temp__4222__auto__))
{var vec__24139 = temp__4222__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24139,(0),null);var s = vec__24139;return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e))?s:cljs.core.next(s)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$core$IFn$_invoke$arity$3 = subseq__3;
subseq.cljs$core$IFn$_invoke$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){var include = cljs.core.mk_bound_fn(sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_], true).call(null,test)))
{var temp__4222__auto__ = cljs.core._sorted_seq_from(sc,key,false);if(cljs.core.truth_(temp__4222__auto__))
{var vec__24143 = temp__4222__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24143,(0),null);var s = vec__24143;if(cljs.core.truth_((function (){var G__24144 = e;return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__24144) : include.call(null,G__24144));
})()))
{return s;
} else
{return cljs.core.next(s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){var temp__4222__auto__ = cljs.core._sorted_seq_from(sc,end_key,false);if(cljs.core.truth_(temp__4222__auto__))
{var vec__24145 = temp__4222__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24145,(0),null);var s = vec__24145;return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e))?s:cljs.core.next(s)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$core$IFn$_invoke$arity$3 = rsubseq__3;
rsubseq.cljs$core$IFn$_invoke$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.RangeIterator = (function (i,end,step){
this.i = i;
this.end = end;
this.step = step;
})
cljs.core.RangeIterator.cljs$lang$type = true;
cljs.core.RangeIterator.cljs$lang$ctorStr = "cljs.core/RangeIterator";
cljs.core.RangeIterator.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/RangeIterator");
});
cljs.core.RangeIterator.prototype.hasNext = (function (){var self__ = this;
var _ = this;if((self__.step > (0)))
{return (self__.i < self__.end);
} else
{return (self__.i > self__.end);
}
});
cljs.core.RangeIterator.prototype.next = (function (){var self__ = this;
var _ = this;var ret = self__.i;self__.i = (self__.i + self__.step);
return ret;
});
cljs.core.__GT_RangeIterator = (function __GT_RangeIterator(i,end,step){return (new cljs.core.RangeIterator(i,end,step));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorStr = "cljs.core/Range";
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Range.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){var self__ = this;
var rng__$1 = this;if((n < cljs.core._count(rng__$1)))
{return (self__.start + (n * self__.step));
} else
{if(((self__.start > self__.end)) && ((self__.step === (0))))
{return self__.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){var self__ = this;
var rng__$1 = this;if((n < cljs.core._count(rng__$1)))
{return (self__.start + (n * self__.step));
} else
{if(((self__.start > self__.end)) && ((self__.step === (0))))
{return self__.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IIterable$ = true;
cljs.core.Range.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.RangeIterator(self__.start,self__.end,self__.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;return self__.meta;
});
cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Range(self__.meta,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((self__.step > (0)))
{if(((self__.start + self__.step) < self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
} else
{if(((self__.start + self__.step) > self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if(cljs.core.not(cljs.core._seq(rng__$1)))
{return (0);
} else
{var G__24146 = ((self__.end - self__.start) / self__.step);return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__24146) : Math.ceil.call(null,G__24146));
}
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;var h__4089__auto__ = self__.__hash;if(!((h__4089__auto__ == null)))
{return h__4089__auto__;
} else
{var h__4089__auto____$1 = cljs.core.hash_ordered_coll(rng__$1);self__.__hash = h__4089__auto____$1;
return h__4089__auto____$1;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){var self__ = this;
var rng__$1 = this;return cljs.core.equiv_sequential(rng__$1,other);
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){var self__ = this;
var rng__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(rng__$1,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,init){var self__ = this;
var rng__$1 = this;var i = self__.start;var ret = init;while(true){
if((((self__.step > (0)))?(i < self__.end):(i > self__.end)))
{var ret__$1 = (function (){var G__24147 = ret;var G__24148 = i;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24147,G__24148) : f.call(null,G__24147,G__24148));
})();if(cljs.core.reduced_QMARK_(ret__$1))
{var G__24149 = ret__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24149) : cljs.core.deref.call(null,G__24149));
} else
{{
var G__24150 = (i + self__.step);
var G__24151 = ret__$1;
i = G__24150;
ret = G__24151;
continue;
}
}
} else
{return ret;
}
break;
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((cljs.core._seq(rng__$1) == null))
{return null;
} else
{return self__.start;
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if(!((cljs.core._seq(rng__$1) == null)))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((self__.step > (0)))
{if((self__.start < self__.end))
{return rng__$1;
} else
{return null;
}
} else
{if((self__.start > self__.end))
{return rng__$1;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){var self__ = this;
var rng__$1 = this;return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){var self__ = this;
var rng__$1 = this;return cljs.core.cons(o,rng__$1);
});
cljs.core.__GT_Range = (function __GT_Range(meta,start,end,step,__hash){return (new cljs.core.Range(meta,start,end,step,__hash));
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){return range.cljs$core$IFn$_invoke$arity$3((0),Number.MAX_VALUE,(1));
});
var range__1 = (function (end){return range.cljs$core$IFn$_invoke$arity$3((0),end,(1));
});
var range__2 = (function (start,end){return range.cljs$core$IFn$_invoke$arity$3(start,end,(1));
});
var range__3 = (function (start,end,step){return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$core$IFn$_invoke$arity$0 = range__0;
range.cljs$core$IFn$_invoke$arity$1 = range__1;
range.cljs$core$IFn$_invoke$arity$2 = range__2;
range.cljs$core$IFn$_invoke$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.take_nth = (function() {
var take_nth = null;
var take_nth__1 = (function (n){return (function (rf){var ia = (function (){var G__24167 = (-1);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24167) : cljs.core.atom.call(null,G__24167));
})();return ((function (ia){
return (function() {
var G__24171 = null;
var G__24171__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__24171__1 = (function (result){var G__24168 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__24168) : rf.call(null,G__24168));
});
var G__24171__2 = (function (result,input){var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);if((cljs.core.rem(i,n) === (0)))
{var G__24169 = result;var G__24170 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__24169,G__24170) : rf.call(null,G__24169,G__24170));
} else
{return result;
}
});
G__24171 = function(result,input){
switch(arguments.length){
case 0:
return G__24171__0.call(this);
case 1:
return G__24171__1.call(this,result);
case 2:
return G__24171__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24171.cljs$core$IFn$_invoke$arity$0 = G__24171__0;
G__24171.cljs$core$IFn$_invoke$arity$1 = G__24171__1;
G__24171.cljs$core$IFn$_invoke$arity$2 = G__24171__2;
return G__24171;
})()
;})(ia))
});
});
var take_nth__2 = (function (n,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4222__auto__ = cljs.core.seq(coll);if(temp__4222__auto__)
{var s = temp__4222__auto__;return cljs.core.cons(cljs.core.first(s),take_nth.cljs$core$IFn$_invoke$arity$2(n,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s)));
} else
{return null;
}
}),null,null));
});
take_nth = function(n,coll){
switch(arguments.length){
case 1:
return take_nth__1.call(this,n);
case 2:
return take_nth__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_nth.cljs$core$IFn$_invoke$arity$1 = take_nth__1;
take_nth.cljs$core$IFn$_invoke$arity$2 = take_nth__2;
return take_nth;
})()
;
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(pred,coll),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(pred,coll)], null);
});
/**
* Applies f to each value in coll, splitting it each time f returns a
* new value.  Returns a lazy seq of partitions.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_by = (function() {
var partition_by = null;
var partition_by__1 = (function (f){return (function (rf){var a = cljs.core.array_list();var pa = (function (){var G__24187 = cljs.core.constant$keyword$10;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24187) : cljs.core.atom.call(null,G__24187));
})();return ((function (a,pa){
return (function() {
var G__24199 = null;
var G__24199__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__24199__1 = (function (result){var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());a.clear();
var G__24188 = result;var G__24189 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__24188,G__24189) : rf.call(null,G__24188,G__24189));
})());var G__24190 = result__$1;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__24190) : rf.call(null,G__24190));
});
var G__24199__2 = (function (result,input){var pval = (function (){var G__24191 = pa;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24191) : cljs.core.deref.call(null,G__24191));
})();var val = (function (){var G__24192 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24192) : f.call(null,G__24192));
})();var G__24193_24200 = pa;var G__24194_24201 = val;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24193_24200,G__24194_24201) : cljs.core.reset_BANG_.call(null,G__24193_24200,G__24194_24201));
if((cljs.core.keyword_identical_QMARK_(pval,cljs.core.constant$keyword$10)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,pval)))
{a.add(input);
return result;
} else
{var v = cljs.core.vec(a.toArray());a.clear();
var ret = (function (){var G__24195 = result;var G__24196 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__24195,G__24196) : rf.call(null,G__24195,G__24196));
})();if(cljs.core.reduced_QMARK_(ret))
{} else
{a.add(input);
}
return ret;
}
});
G__24199 = function(result,input){
switch(arguments.length){
case 0:
return G__24199__0.call(this);
case 1:
return G__24199__1.call(this,result);
case 2:
return G__24199__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24199.cljs$core$IFn$_invoke$arity$0 = G__24199__0;
G__24199.cljs$core$IFn$_invoke$arity$1 = G__24199__1;
G__24199.cljs$core$IFn$_invoke$arity$2 = G__24199__2;
return G__24199;
})()
;})(a,pa))
});
});
var partition_by__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4222__auto__ = cljs.core.seq(coll);if(temp__4222__auto__)
{var s = temp__4222__auto__;var fst = cljs.core.first(s);var fv = (function (){var G__24197 = fst;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24197) : f.call(null,G__24197));
})();var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (fst,fv,s,temp__4222__auto__){
return (function (p1__24172_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fv,(function (){var G__24198 = p1__24172_SHARP_;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24198) : f.call(null,G__24198));
})());
});})(fst,fv,s,temp__4222__auto__))
,cljs.core.next(s)));return cljs.core.cons(run,partition_by.cljs$core$IFn$_invoke$arity$2(f,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),s))));
} else
{return null;
}
}),null,null));
});
partition_by = function(f,coll){
switch(arguments.length){
case 1:
return partition_by__1.call(this,f);
case 2:
return partition_by__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$1 = partition_by__1;
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
return partition_by;
})()
;
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (counts,x){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(counts,x,(cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,x,(0)) + (1)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4220__auto__ = cljs.core.seq(coll);if(temp__4220__auto__)
{var s = temp__4220__auto__;return reductions.cljs$core$IFn$_invoke$arity$3(f,cljs.core.first(s),cljs.core.rest(s));
} else
{return cljs.core._conj(cljs.core.List.EMPTY,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
}
}),null,null));
});
var reductions__3 = (function (f,init,coll){return cljs.core.cons(init,(new cljs.core.LazySeq(null,(function (){var temp__4222__auto__ = cljs.core.seq(coll);if(temp__4222__auto__)
{var s = temp__4222__auto__;return reductions.cljs$core$IFn$_invoke$arity$3(f,(function (){var G__24210 = init;var G__24211 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24210,G__24211) : f.call(null,G__24210,G__24211));
})(),cljs.core.rest(s));
} else
{return null;
}
}),null,null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$core$IFn$_invoke$arity$2 = reductions__2;
reductions.cljs$core$IFn$_invoke$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){return (function() {
var G__24306 = null;
var G__24306__0 = (function (){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})()],null));
});
var G__24306__1 = (function (x){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24264 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24264) : f.call(null,G__24264));
})()],null));
});
var G__24306__2 = (function (x,y){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24265 = x;var G__24266 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24265,G__24266) : f.call(null,G__24265,G__24266));
})()],null));
});
var G__24306__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24267 = x;var G__24268 = y;var G__24269 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24267,G__24268,G__24269) : f.call(null,G__24267,G__24268,G__24269));
})()],null));
});
var G__24306__4 = (function() { 
var G__24307__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args)],null));
};
var G__24307 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__24307__delegate.call(this,x,y,z,args);};
G__24307.cljs$lang$maxFixedArity = 3;
G__24307.cljs$lang$applyTo = (function (arglist__24308){
var x = cljs.core.first(arglist__24308);
arglist__24308 = cljs.core.next(arglist__24308);
var y = cljs.core.first(arglist__24308);
arglist__24308 = cljs.core.next(arglist__24308);
var z = cljs.core.first(arglist__24308);
var args = cljs.core.rest(arglist__24308);
return G__24307__delegate(x,y,z,args);
});
G__24307.cljs$core$IFn$_invoke$arity$variadic = G__24307__delegate;
return G__24307;
})()
;
G__24306 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__24306__0.call(this);
case 1:
return G__24306__1.call(this,x);
case 2:
return G__24306__2.call(this,x,y);
case 3:
return G__24306__3.call(this,x,y,z);
default:
return G__24306__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24306.cljs$lang$maxFixedArity = 3;
G__24306.cljs$lang$applyTo = G__24306__4.cljs$lang$applyTo;
G__24306.cljs$core$IFn$_invoke$arity$0 = G__24306__0;
G__24306.cljs$core$IFn$_invoke$arity$1 = G__24306__1;
G__24306.cljs$core$IFn$_invoke$arity$2 = G__24306__2;
G__24306.cljs$core$IFn$_invoke$arity$3 = G__24306__3;
G__24306.cljs$core$IFn$_invoke$arity$variadic = G__24306__4.cljs$core$IFn$_invoke$arity$variadic;
return G__24306;
})()
});
var juxt__2 = (function (f,g){return (function() {
var G__24309 = null;
var G__24309__0 = (function (){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})()],null));
});
var G__24309__1 = (function (x){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24270 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24270) : f.call(null,G__24270));
})(),(function (){var G__24271 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__24271) : g.call(null,G__24271));
})()],null));
});
var G__24309__2 = (function (x,y){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24272 = x;var G__24273 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24272,G__24273) : f.call(null,G__24272,G__24273));
})(),(function (){var G__24274 = x;var G__24275 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__24274,G__24275) : g.call(null,G__24274,G__24275));
})()],null));
});
var G__24309__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24276 = x;var G__24277 = y;var G__24278 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24276,G__24277,G__24278) : f.call(null,G__24276,G__24277,G__24278));
})(),(function (){var G__24279 = x;var G__24280 = y;var G__24281 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__24279,G__24280,G__24281) : g.call(null,G__24279,G__24280,G__24281));
})()],null));
});
var G__24309__4 = (function() { 
var G__24310__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)],null));
};
var G__24310 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__24310__delegate.call(this,x,y,z,args);};
G__24310.cljs$lang$maxFixedArity = 3;
G__24310.cljs$lang$applyTo = (function (arglist__24311){
var x = cljs.core.first(arglist__24311);
arglist__24311 = cljs.core.next(arglist__24311);
var y = cljs.core.first(arglist__24311);
arglist__24311 = cljs.core.next(arglist__24311);
var z = cljs.core.first(arglist__24311);
var args = cljs.core.rest(arglist__24311);
return G__24310__delegate(x,y,z,args);
});
G__24310.cljs$core$IFn$_invoke$arity$variadic = G__24310__delegate;
return G__24310;
})()
;
G__24309 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__24309__0.call(this);
case 1:
return G__24309__1.call(this,x);
case 2:
return G__24309__2.call(this,x,y);
case 3:
return G__24309__3.call(this,x,y,z);
default:
return G__24309__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24309.cljs$lang$maxFixedArity = 3;
G__24309.cljs$lang$applyTo = G__24309__4.cljs$lang$applyTo;
G__24309.cljs$core$IFn$_invoke$arity$0 = G__24309__0;
G__24309.cljs$core$IFn$_invoke$arity$1 = G__24309__1;
G__24309.cljs$core$IFn$_invoke$arity$2 = G__24309__2;
G__24309.cljs$core$IFn$_invoke$arity$3 = G__24309__3;
G__24309.cljs$core$IFn$_invoke$arity$variadic = G__24309__4.cljs$core$IFn$_invoke$arity$variadic;
return G__24309;
})()
});
var juxt__3 = (function (f,g,h){return (function() {
var G__24312 = null;
var G__24312__0 = (function (){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})(),(function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})()],null));
});
var G__24312__1 = (function (x){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24282 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24282) : f.call(null,G__24282));
})(),(function (){var G__24283 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__24283) : g.call(null,G__24283));
})(),(function (){var G__24284 = x;return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__24284) : h.call(null,G__24284));
})()],null));
});
var G__24312__2 = (function (x,y){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24285 = x;var G__24286 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24285,G__24286) : f.call(null,G__24285,G__24286));
})(),(function (){var G__24287 = x;var G__24288 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__24287,G__24288) : g.call(null,G__24287,G__24288));
})(),(function (){var G__24289 = x;var G__24290 = y;return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__24289,G__24290) : h.call(null,G__24289,G__24290));
})()],null));
});
var G__24312__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24291 = x;var G__24292 = y;var G__24293 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24291,G__24292,G__24293) : f.call(null,G__24291,G__24292,G__24293));
})(),(function (){var G__24294 = x;var G__24295 = y;var G__24296 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__24294,G__24295,G__24296) : g.call(null,G__24294,G__24295,G__24296));
})(),(function (){var G__24297 = x;var G__24298 = y;var G__24299 = z;return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__24297,G__24298,G__24299) : h.call(null,G__24297,G__24298,G__24299));
})()],null));
});
var G__24312__4 = (function() { 
var G__24313__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)],null));
};
var G__24313 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__24313__delegate.call(this,x,y,z,args);};
G__24313.cljs$lang$maxFixedArity = 3;
G__24313.cljs$lang$applyTo = (function (arglist__24314){
var x = cljs.core.first(arglist__24314);
arglist__24314 = cljs.core.next(arglist__24314);
var y = cljs.core.first(arglist__24314);
arglist__24314 = cljs.core.next(arglist__24314);
var z = cljs.core.first(arglist__24314);
var args = cljs.core.rest(arglist__24314);
return G__24313__delegate(x,y,z,args);
});
G__24313.cljs$core$IFn$_invoke$arity$variadic = G__24313__delegate;
return G__24313;
})()
;
G__24312 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__24312__0.call(this);
case 1:
return G__24312__1.call(this,x);
case 2:
return G__24312__2.call(this,x,y);
case 3:
return G__24312__3.call(this,x,y,z);
default:
return G__24312__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24312.cljs$lang$maxFixedArity = 3;
G__24312.cljs$lang$applyTo = G__24312__4.cljs$lang$applyTo;
G__24312.cljs$core$IFn$_invoke$arity$0 = G__24312__0;
G__24312.cljs$core$IFn$_invoke$arity$1 = G__24312__1;
G__24312.cljs$core$IFn$_invoke$arity$2 = G__24312__2;
G__24312.cljs$core$IFn$_invoke$arity$3 = G__24312__3;
G__24312.cljs$core$IFn$_invoke$arity$variadic = G__24312__4.cljs$core$IFn$_invoke$arity$variadic;
return G__24312;
})()
});
var juxt__4 = (function() { 
var G__24315__delegate = function (f,g,h,fs){var fs__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f,g,h,fs);return ((function (fs__$1){
return (function() {
var G__24316 = null;
var G__24316__0 = (function (){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__24212_SHARP_,p2__24213_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24212_SHARP_,(function (){return (p2__24213_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p2__24213_SHARP_.cljs$core$IFn$_invoke$arity$0() : p2__24213_SHARP_.call(null));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__24316__1 = (function (x){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__24214_SHARP_,p2__24215_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24214_SHARP_,(function (){var G__24300 = x;return (p2__24215_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__24215_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24300) : p2__24215_SHARP_.call(null,G__24300));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__24316__2 = (function (x,y){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__24216_SHARP_,p2__24217_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24216_SHARP_,(function (){var G__24301 = x;var G__24302 = y;return (p2__24217_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__24217_SHARP_.cljs$core$IFn$_invoke$arity$2(G__24301,G__24302) : p2__24217_SHARP_.call(null,G__24301,G__24302));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__24316__3 = (function (x,y,z){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__24218_SHARP_,p2__24219_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24218_SHARP_,(function (){var G__24303 = x;var G__24304 = y;var G__24305 = z;return (p2__24219_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__24219_SHARP_.cljs$core$IFn$_invoke$arity$3(G__24303,G__24304,G__24305) : p2__24219_SHARP_.call(null,G__24303,G__24304,G__24305));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__24316__4 = (function() { 
var G__24317__delegate = function (x,y,z,args){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__24220_SHARP_,p2__24221_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24220_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p2__24221_SHARP_,x,y,z,args));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__24317 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__24317__delegate.call(this,x,y,z,args);};
G__24317.cljs$lang$maxFixedArity = 3;
G__24317.cljs$lang$applyTo = (function (arglist__24318){
var x = cljs.core.first(arglist__24318);
arglist__24318 = cljs.core.next(arglist__24318);
var y = cljs.core.first(arglist__24318);
arglist__24318 = cljs.core.next(arglist__24318);
var z = cljs.core.first(arglist__24318);
var args = cljs.core.rest(arglist__24318);
return G__24317__delegate(x,y,z,args);
});
G__24317.cljs$core$IFn$_invoke$arity$variadic = G__24317__delegate;
return G__24317;
})()
;
G__24316 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__24316__0.call(this);
case 1:
return G__24316__1.call(this,x);
case 2:
return G__24316__2.call(this,x,y);
case 3:
return G__24316__3.call(this,x,y,z);
default:
return G__24316__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24316.cljs$lang$maxFixedArity = 3;
G__24316.cljs$lang$applyTo = G__24316__4.cljs$lang$applyTo;
G__24316.cljs$core$IFn$_invoke$arity$0 = G__24316__0;
G__24316.cljs$core$IFn$_invoke$arity$1 = G__24316__1;
G__24316.cljs$core$IFn$_invoke$arity$2 = G__24316__2;
G__24316.cljs$core$IFn$_invoke$arity$3 = G__24316__3;
G__24316.cljs$core$IFn$_invoke$arity$variadic = G__24316__4.cljs$core$IFn$_invoke$arity$variadic;
return G__24316;
})()
;})(fs__$1))
};
var G__24315 = function (f,g,h,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__24315__delegate.call(this,f,g,h,fs);};
G__24315.cljs$lang$maxFixedArity = 3;
G__24315.cljs$lang$applyTo = (function (arglist__24319){
var f = cljs.core.first(arglist__24319);
arglist__24319 = cljs.core.next(arglist__24319);
var g = cljs.core.first(arglist__24319);
arglist__24319 = cljs.core.next(arglist__24319);
var h = cljs.core.first(arglist__24319);
var fs = cljs.core.rest(arglist__24319);
return G__24315__delegate(f,g,h,fs);
});
G__24315.cljs$core$IFn$_invoke$arity$variadic = G__24315__delegate;
return G__24315;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$core$IFn$_invoke$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$core$IFn$_invoke$arity$1 = juxt__1;
juxt.cljs$core$IFn$_invoke$arity$2 = juxt__2;
juxt.cljs$core$IFn$_invoke$arity$3 = juxt__3;
juxt.cljs$core$IFn$_invoke$arity$variadic = juxt__4.cljs$core$IFn$_invoke$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){while(true){
if(cljs.core.seq(coll))
{{
var G__24320 = cljs.core.next(coll);
coll = G__24320;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){while(true){
if((cljs.core.seq(coll)) && ((n > (0))))
{{
var G__24321 = (n - (1));
var G__24322 = cljs.core.next(coll);
n = G__24321;
coll = G__24322;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$core$IFn$_invoke$arity$1 = dorun__1;
dorun.cljs$core$IFn$_invoke$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(coll);
return coll;
});
var doall__2 = (function (n,coll){cljs.core.dorun.cljs$core$IFn$_invoke$arity$2(n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$core$IFn$_invoke$arity$1 = doall__1;
doall.cljs$core$IFn$_invoke$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){return (o instanceof RegExp);
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){if(typeof s === 'string')
{var matches = re.exec(s);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(matches),s))
{if((cljs.core.count(matches) === (1)))
{return cljs.core.first(matches);
} else
{return cljs.core.vec(matches);
}
} else
{return null;
}
} else
{throw (new TypeError("re-matches must match against a string."));
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){if(typeof s === 'string')
{var matches = re.exec(s);if((matches == null))
{return null;
} else
{if((cljs.core.count(matches) === (1)))
{return cljs.core.first(matches);
} else
{return cljs.core.vec(matches);
}
}
} else
{throw (new TypeError("re-find must match against a string."));
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){var match_data = cljs.core.re_find(re,s);var match_idx = s.search(re);var match_str = ((cljs.core.coll_QMARK_(match_data))?cljs.core.first(match_data):match_data);var post_match = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(match_idx + cljs.core.count(match_str)));if(cljs.core.truth_(match_data))
{return (new cljs.core.LazySeq(null,((function (match_data,match_idx,match_str,post_match){
return (function (){return cljs.core.cons(match_data,((cljs.core.seq(post_match))?re_seq(re,post_match):null));
});})(match_data,match_idx,match_str,post_match))
,null,null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){if((s instanceof RegExp))
{return s;
} else
{var vec__24326 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24326,(0),null);var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24326,(1),null);var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24326,(2),null);return (new RegExp(pattern,flags));
}
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){var _STAR_print_level_STAR_24334 = cljs.core._STAR_print_level_STAR_;try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - (1)));
if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < (0))))
{return cljs.core._write(writer,"#");
} else
{cljs.core._write(writer,begin);
if(cljs.core.seq(coll))
{var G__24335_24341 = cljs.core.first(coll);var G__24336_24342 = writer;var G__24337_24343 = opts;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__24335_24341,G__24336_24342,G__24337_24343) : print_one.call(null,G__24335_24341,G__24336_24342,G__24337_24343));
} else
{}
var coll_24344__$1 = cljs.core.next(coll);var n_24345 = (cljs.core.constant$keyword$5.cljs$core$IFn$_invoke$arity$1(opts) - (1));while(true){
if((coll_24344__$1) && (((n_24345 == null)) || (!((n_24345 === (0))))))
{cljs.core._write(writer,sep);
var G__24338_24346 = cljs.core.first(coll_24344__$1);var G__24339_24347 = writer;var G__24340_24348 = opts;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__24338_24346,G__24339_24347,G__24340_24348) : print_one.call(null,G__24338_24346,G__24339_24347,G__24340_24348));
{
var G__24349 = cljs.core.next(coll_24344__$1);
var G__24350 = (n_24345 - (1));
coll_24344__$1 = G__24349;
n_24345 = G__24350;
continue;
}
} else
{if((cljs.core.seq(coll_24344__$1)) && ((n_24345 === (0))))
{cljs.core._write(writer,sep);
cljs.core._write(writer,"...");
} else
{}
}
break;
}
return cljs.core._write(writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_24334;
}});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){var seq__24355 = cljs.core.seq(ss);var chunk__24356 = null;var count__24357 = (0);var i__24358 = (0);while(true){
if((i__24358 < count__24357))
{var s = chunk__24356.cljs$core$IIndexed$_nth$arity$2(null,i__24358);cljs.core._write(writer,s);
{
var G__24359 = seq__24355;
var G__24360 = chunk__24356;
var G__24361 = count__24357;
var G__24362 = (i__24358 + (1));
seq__24355 = G__24359;
chunk__24356 = G__24360;
count__24357 = G__24361;
i__24358 = G__24362;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq(seq__24355);if(temp__4222__auto__)
{var seq__24355__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(seq__24355__$1))
{var c__4448__auto__ = cljs.core.chunk_first(seq__24355__$1);{
var G__24363 = cljs.core.chunk_rest(seq__24355__$1);
var G__24364 = c__4448__auto__;
var G__24365 = cljs.core.count(c__4448__auto__);
var G__24366 = (0);
seq__24355 = G__24363;
chunk__24356 = G__24364;
count__24357 = G__24365;
i__24358 = G__24366;
continue;
}
} else
{var s = cljs.core.first(seq__24355__$1);cljs.core._write(writer,s);
{
var G__24367 = cljs.core.next(seq__24355__$1);
var G__24368 = null;
var G__24369 = (0);
var G__24370 = (0);
seq__24355 = G__24367;
chunk__24356 = G__24368;
count__24357 = G__24369;
i__24358 = G__24370;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;if (arguments.length > 1) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return write_all__delegate.call(this,writer,ss);};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__24371){
var writer = cljs.core.first(arglist__24371);
var ss = cljs.core.rest(arglist__24371);
return write_all__delegate(writer,ss);
});
write_all.cljs$core$IFn$_invoke$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core._STAR_print_fn_STAR_.call(null,x));
return null;
});
cljs.core.flush = (function flush(){return null;
});
cljs.core.char_escapes = (function (){var obj24373 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};return obj24373;
})();
cljs.core.quote_string = (function quote_string(s){return ("\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s.replace((function (){var G__24376 = "[\\\\\"\b\f\n\r\t]";var G__24377 = "g";return RegExp(G__24376,G__24377);
})(),(function (match){return (cljs.core.char_escapes[match]);
})))+"\"");
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){if((obj == null))
{return cljs.core._write(writer,"nil");
} else
{if((void 0 === obj))
{return cljs.core._write(writer,"#<undefined>");
} else
{if(cljs.core.truth_((function (){var and__3666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$3);if(cljs.core.truth_(and__3666__auto__))
{var and__3666__auto____$1 = (function (){var G__24391 = obj;if(G__24391)
{var bit__4342__auto__ = (G__24391.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__4342__auto__) || (G__24391.cljs$core$IMeta$))
{return true;
} else
{if((!G__24391.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__24391);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__24391);
}
})();if(and__3666__auto____$1)
{return cljs.core.meta(obj);
} else
{return and__3666__auto____$1;
}
} else
{return and__3666__auto__;
}
})()))
{cljs.core._write(writer,"^");
pr_writer(cljs.core.meta(obj),writer,opts);
cljs.core._write(writer," ");
} else
{}
if((obj == null))
{return cljs.core._write(writer,"nil");
} else
{if(obj.cljs$lang$type)
{return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else
{if((function (){var G__24392 = obj;if(G__24392)
{var bit__4335__auto__ = (G__24392.cljs$lang$protocol_mask$partition0$ & (2147483648));if((bit__4335__auto__) || (G__24392.cljs$core$IPrintWithWriter$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,opts);
} else
{if(((cljs.core.type(obj) === Boolean)) || (typeof obj === 'number'))
{return cljs.core._write(writer,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)));
} else
{if(cljs.core.object_QMARK_(obj))
{cljs.core._write(writer,"#js ");
var G__24393 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),cljs.core.js_keys(obj));var G__24394 = pr_writer;var G__24395 = writer;var G__24396 = opts;return (cljs.core.print_map.cljs$core$IFn$_invoke$arity$4 ? cljs.core.print_map.cljs$core$IFn$_invoke$arity$4(G__24393,G__24394,G__24395,G__24396) : cljs.core.print_map.call(null,G__24393,G__24394,G__24395,G__24396));
} else
{if(obj instanceof Array)
{return cljs.core.pr_sequential_writer(writer,pr_writer,"#js ["," ","]",opts,obj);
} else
{if(cljs.core.truth_((function (){var G__24397 = obj;return goog.isString(G__24397);
})()))
{if(cljs.core.truth_(cljs.core.constant$keyword$2.cljs$core$IFn$_invoke$arity$1(opts)))
{return cljs.core._write(writer,cljs.core.quote_string(obj));
} else
{return cljs.core._write(writer,obj);
}
} else
{if(cljs.core.fn_QMARK_(obj))
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)),">"], 0));
} else
{if((obj instanceof Date))
{var normalize = (function (n,len){var ns = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));while(true){
if((cljs.core.count(ns) < len))
{{
var G__24399 = ("0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns));
ns = G__24399;
continue;
}
} else
{return ns;
}
break;
}
});return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#inst \"",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj.getUTCFullYear())),"-",normalize((obj.getUTCMonth() + (1)),(2)),"-",normalize(obj.getUTCDate(),(2)),"T",normalize(obj.getUTCHours(),(2)),":",normalize(obj.getUTCMinutes(),(2)),":",normalize(obj.getUTCSeconds(),(2)),".",normalize(obj.getUTCMilliseconds(),(3)),"-","00:00\""], 0));
} else
{if(cljs.core.regexp_QMARK_(obj))
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#\"",obj.source,"\""], 0));
} else
{if((function (){var G__24398 = obj;if(G__24398)
{var bit__4342__auto__ = (G__24398.cljs$lang$protocol_mask$partition0$ & (2147483648));if((bit__4342__auto__) || (G__24398.cljs$core$IPrintWithWriter$))
{return true;
} else
{if((!G__24398.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__24398);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__24398);
}
})())
{return cljs.core._pr_writer(obj,writer,opts);
} else
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)),">"], 0));

}
}
}
}
}
}
}
}
}
}
}

}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){cljs.core.pr_writer(cljs.core.first(objs),writer,opts);
var seq__24404 = cljs.core.seq(cljs.core.next(objs));var chunk__24405 = null;var count__24406 = (0);var i__24407 = (0);while(true){
if((i__24407 < count__24406))
{var obj = chunk__24405.cljs$core$IIndexed$_nth$arity$2(null,i__24407);cljs.core._write(writer," ");
cljs.core.pr_writer(obj,writer,opts);
{
var G__24408 = seq__24404;
var G__24409 = chunk__24405;
var G__24410 = count__24406;
var G__24411 = (i__24407 + (1));
seq__24404 = G__24408;
chunk__24405 = G__24409;
count__24406 = G__24410;
i__24407 = G__24411;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq(seq__24404);if(temp__4222__auto__)
{var seq__24404__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(seq__24404__$1))
{var c__4448__auto__ = cljs.core.chunk_first(seq__24404__$1);{
var G__24412 = cljs.core.chunk_rest(seq__24404__$1);
var G__24413 = c__4448__auto__;
var G__24414 = cljs.core.count(c__4448__auto__);
var G__24415 = (0);
seq__24404 = G__24412;
chunk__24405 = G__24413;
count__24406 = G__24414;
i__24407 = G__24415;
continue;
}
} else
{var obj = cljs.core.first(seq__24404__$1);cljs.core._write(writer," ");
cljs.core.pr_writer(obj,writer,opts);
{
var G__24416 = cljs.core.next(seq__24404__$1);
var G__24417 = null;
var G__24418 = (0);
var G__24419 = (0);
seq__24404 = G__24416;
chunk__24405 = G__24417;
count__24406 = G__24418;
i__24407 = G__24419;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));cljs.core.pr_seq_writer(objs,writer,opts);
writer.cljs$core$IWriter$_flush$arity$1(null);
return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_(objs))
{return "";
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_sb_with_opts(objs,opts)));
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_(objs))
{return "\n";
} else
{var sb = cljs.core.pr_sb_with_opts(objs,opts);sb.append("\n");
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){return cljs.core.string_print(cljs.core.pr_str_with_opts(objs,opts));
});
cljs.core.newline = (function newline(opts){cljs.core.string_print("\n");
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$1)))
{return cljs.core.flush();
} else
{return null;
}
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pr_str__delegate.call(this,objs);};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__24420){
var objs = cljs.core.seq(arglist__24420);
return pr_str__delegate(objs);
});
pr_str.cljs$core$IFn$_invoke$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prn_str__delegate.call(this,objs);};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__24421){
var objs = cljs.core.seq(arglist__24421);
return prn_str__delegate(objs);
});
prn_str.cljs$core$IFn$_invoke$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pr__delegate.call(this,objs);};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__24422){
var objs = cljs.core.seq(arglist__24422);
return pr__delegate(objs);
});
pr.cljs$core$IFn$_invoke$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var cljs_core_print = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cljs_core_print__delegate.call(this,objs);};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__24423){
var objs = cljs.core.seq(arglist__24423);
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$core$IFn$_invoke$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var print_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return print_str__delegate.call(this,objs);};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__24424){
var objs = cljs.core.seq(arglist__24424);
return print_str__delegate(objs);
});
print_str.cljs$core$IFn$_invoke$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))
{return cljs.core.newline(cljs.core.pr_opts());
} else
{return null;
}
};
var println = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return println__delegate.call(this,objs);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__24425){
var objs = cljs.core.seq(arglist__24425);
return println__delegate(objs);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var println_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return println_str__delegate.call(this,objs);};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__24426){
var objs = cljs.core.seq(arglist__24426);
return println_str__delegate(objs);
});
println_str.cljs$core$IFn$_invoke$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))
{return cljs.core.newline(cljs.core.pr_opts());
} else
{return null;
}
};
var prn = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prn__delegate.call(this,objs);};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__24427){
var objs = cljs.core.seq(arglist__24427);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.print_map = (function print_map(m,print_one,writer,opts){return cljs.core.pr_sequential_writer(writer,(function (e,w,opts__$1){var G__24434_24440 = cljs.core.key(e);var G__24435_24441 = w;var G__24436_24442 = opts__$1;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__24434_24440,G__24435_24441,G__24436_24442) : print_one.call(null,G__24434_24440,G__24435_24441,G__24436_24442));
cljs.core._write(w," ");
var G__24437 = cljs.core.val(e);var G__24438 = w;var G__24439 = opts__$1;return (print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__24437,G__24438,G__24439) : print_one.call(null,G__24437,G__24438,G__24439));
}),"{",", ","}",opts,cljs.core.seq(m));
});
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var a__$1 = this;cljs.core._write(writer,"#<Atom: ");
cljs.core.pr_writer(a__$1.state,writer,opts);
return cljs.core._write(writer,">");
});
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core._write(writer,"()");
});
cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq(coll__$1));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});
cljs.core.Subvec.prototype.cljs$core$IComparable$ = true;
cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});
cljs.core.Keyword.prototype.cljs$core$IComparable$ = true;
cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_symbols(x__$1,y);
});
cljs.core.Symbol.prototype.cljs$core$IComparable$ = true;
cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_symbols(x__$1,y);
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){return iref.meta = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alter_meta_BANG___delegate.call(this,iref,f,args);};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__24443){
var iref = cljs.core.first(arglist__24443);
arglist__24443 = cljs.core.next(arglist__24443);
var f = cljs.core.first(arglist__24443);
var args = cljs.core.rest(arglist__24443);
return alter_meta_BANG___delegate(iref,f,args);
});
alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){return gensym.cljs$core$IFn$_invoke$arity$1("G__");
});
var gensym__1 = (function (prefix_string){if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = (function (){var G__24446 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24446) : cljs.core.atom.call(null,G__24446));
})();
} else
{}
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix_string)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym_counter,cljs.core.inc))));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$core$IFn$_invoke$arity$0 = gensym__0;
gensym.cljs$core$IFn$_invoke$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = (1);
cljs.core.fixture2 = (2);

/**
* @constructor
*/
cljs.core.Delay = (function (f,value){
this.f = f;
this.value = value;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorStr = "cljs.core/Delay";
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){var self__ = this;
var d__$1 = this;return cljs.core.not(self__.f);
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.f))
{self__.value = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();
self__.f = null;
} else
{}
return self__.value;
});
cljs.core.__GT_Delay = (function __GT_Delay(f,value){return (new cljs.core.Delay(f,value));
});
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){return (x instanceof cljs.core.Delay);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){if(cljs.core.delay_QMARK_(x))
{var G__24448 = x;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24448) : cljs.core.deref.call(null,G__24448));
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){return cljs.core._realized_QMARK_(d);
});
cljs.core.preserving_reduced = (function preserving_reduced(rf){return (function (p1__24449_SHARP_,p2__24450_SHARP_){var ret = (function (){var G__24453 = p1__24449_SHARP_;var G__24454 = p2__24450_SHARP_;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__24453,G__24454) : rf.call(null,G__24453,G__24454));
})();if(cljs.core.reduced_QMARK_(ret))
{return cljs.core.reduced(ret);
} else
{return ret;
}
});
});
/**
* A transducer which concatenates the contents of each input, which must be a
* collection, into the reduction.
*/
cljs.core.cat = (function cat(rf){var rf1 = cljs.core.preserving_reduced(rf);return ((function (rf1){
return (function() {
var G__24457 = null;
var G__24457__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__24457__1 = (function (result){var G__24456 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__24456) : rf.call(null,G__24456));
});
var G__24457__2 = (function (result,input){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf1,result,input);
});
G__24457 = function(result,input){
switch(arguments.length){
case 0:
return G__24457__0.call(this);
case 1:
return G__24457__1.call(this,result);
case 2:
return G__24457__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24457.cljs$core$IFn$_invoke$arity$0 = G__24457__0;
G__24457.cljs$core$IFn$_invoke$arity$1 = G__24457__1;
G__24457.cljs$core$IFn$_invoke$arity$2 = G__24457__2;
return G__24457;
})()
;})(rf1))
});
/**
* Returns a lazy sequence removing consecutive duplicates in coll.
* Returns a transducer when no collection is provided.
*/
cljs.core.dedupe = (function() {
var dedupe = null;
var dedupe__0 = (function (){return (function (rf){var pa = (function (){var G__24465 = cljs.core.constant$keyword$10;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24465) : cljs.core.atom.call(null,G__24465));
})();return ((function (pa){
return (function() {
var G__24472 = null;
var G__24472__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__24472__1 = (function (result){var G__24466 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__24466) : rf.call(null,G__24466));
});
var G__24472__2 = (function (result,input){var prior = (function (){var G__24467 = pa;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24467) : cljs.core.deref.call(null,G__24467));
})();var G__24468_24473 = pa;var G__24469_24474 = input;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24468_24473,G__24469_24474) : cljs.core.reset_BANG_.call(null,G__24468_24473,G__24469_24474));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,input))
{return result;
} else
{var G__24470 = result;var G__24471 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__24470,G__24471) : rf.call(null,G__24470,G__24471));
}
});
G__24472 = function(result,input){
switch(arguments.length){
case 0:
return G__24472__0.call(this);
case 1:
return G__24472__1.call(this,result);
case 2:
return G__24472__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24472.cljs$core$IFn$_invoke$arity$0 = G__24472__0;
G__24472.cljs$core$IFn$_invoke$arity$1 = G__24472__1;
G__24472.cljs$core$IFn$_invoke$arity$2 = G__24472__2;
return G__24472;
})()
;})(pa))
});
});
var dedupe__1 = (function (coll){return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(dedupe.cljs$core$IFn$_invoke$arity$0(),coll);
});
dedupe = function(coll){
switch(arguments.length){
case 0:
return dedupe__0.call(this);
case 1:
return dedupe__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dedupe.cljs$core$IFn$_invoke$arity$0 = dedupe__0;
dedupe.cljs$core$IFn$_invoke$arity$1 = dedupe__1;
return dedupe;
})()
;
/**
* Returns items from coll with random probability of prob (0.0 -
* 1.0).  Returns a transducer when no collection is provided.
*/
cljs.core.random_sample = (function() {
var random_sample = null;
var random_sample__1 = (function (prob){return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (_){return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}));
});
var random_sample__2 = (function (prob,coll){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (_){return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}),coll);
});
random_sample = function(prob,coll){
switch(arguments.length){
case 1:
return random_sample__1.call(this,prob);
case 2:
return random_sample__2.call(this,prob,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_sample.cljs$core$IFn$_invoke$arity$1 = random_sample__1;
random_sample.cljs$core$IFn$_invoke$arity$2 = random_sample__2;
return random_sample;
})()
;

/**
* @constructor
*/
cljs.core.Eduction = (function (xform,coll){
this.xform = xform;
this.coll = coll;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2173173760;
})
cljs.core.Eduction.cljs$lang$type = true;
cljs.core.Eduction.cljs$lang$ctorStr = "cljs.core/Eduction";
cljs.core.Eduction.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/Eduction");
});
cljs.core.Eduction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll__$1,writer,opts){var self__ = this;
var coll__$2 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$2);
});
cljs.core.Eduction.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){var self__ = this;
var ___$1 = this;return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(self__.xform,f,init,self__.coll);
});
cljs.core.Eduction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.seq(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(self__.xform,self__.coll));
});
cljs.core.__GT_Eduction = (function __GT_Eduction(xform,coll){return (new cljs.core.Eduction(xform,coll));
});
/**
* Returns a reducible/iterable/seqable application of
* the transducer to the items in coll. Note that these applications
* will be performed every time iterator/seq/reduce is called.
*/
cljs.core.eduction = (function eduction(xform,coll){return (new cljs.core.Eduction(xform,coll));
});
/**
* Runs the supplied procedure (via reduce), for purposes of side
* effects, on successive items in the collection. Returns nil
*/
cljs.core.run_BANG_ = (function run_BANG_(proc,coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24476_SHARP_,p2__24475_SHARP_){var G__24478 = p2__24475_SHARP_;return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(G__24478) : proc.call(null,G__24478));
}),null,coll);
});
cljs.core.IEncodeJS = (function (){var obj24480 = {};return obj24480;
})();
cljs.core._clj__GT_js = (function _clj__GT_js(x){if((function (){var and__3666__auto__ = x;if(and__3666__auto__)
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else
{return and__3666__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else
{var x__4315__auto__ = (((x == null))?null:x);return (function (){var or__3678__auto__ = (cljs.core._clj__GT_js[(function (){var G__24484 = x__4315__auto__;return goog.typeOf(G__24484);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._clj__GT_js["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});
cljs.core._key__GT_js = (function _key__GT_js(x){if((function (){var and__3666__auto__ = x;if(and__3666__auto__)
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else
{return and__3666__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else
{var x__4315__auto__ = (((x == null))?null:x);return (function (){var or__3678__auto__ = (cljs.core._key__GT_js[(function (){var G__24488 = x__4315__auto__;return goog.typeOf(G__24488);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._key__GT_js["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});
cljs.core.key__GT_js = (function key__GT_js(k){if((function (){var G__24491 = k;if(G__24491)
{var bit__4342__auto__ = null;if(cljs.core.truth_((function (){var or__3678__auto__ = bit__4342__auto__;if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return G__24491.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__24491.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__24491);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__24491);
}
})())
{return cljs.core._clj__GT_js(k);
} else
{if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol)))
{var G__24492 = k;return (cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(G__24492) : cljs.core.clj__GT_js.call(null,G__24492));
} else
{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0));
}
}
});
/**
* Recursively transforms ClojureScript values to JavaScript.
* sets/vectors/lists become Arrays, Keywords and Symbol become Strings,
* Maps become Objects. Arbitrary keys are encoded to by key->js.
*/
cljs.core.clj__GT_js = (function clj__GT_js(x){if((x == null))
{return null;
} else
{if((function (){var G__24508 = x;if(G__24508)
{var bit__4342__auto__ = null;if(cljs.core.truth_((function (){var or__3678__auto__ = bit__4342__auto__;if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return G__24508.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__24508.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__24508);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__24508);
}
})())
{return cljs.core._clj__GT_js(x);
} else
{if((x instanceof cljs.core.Keyword))
{return cljs.core.name(x);
} else
{if((x instanceof cljs.core.Symbol))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
} else
{if(cljs.core.map_QMARK_(x))
{var m = (function (){var obj24510 = {};return obj24510;
})();var seq__24511_24521 = cljs.core.seq(x);var chunk__24512_24522 = null;var count__24513_24523 = (0);var i__24514_24524 = (0);while(true){
if((i__24514_24524 < count__24513_24523))
{var vec__24515_24525 = chunk__24512_24522.cljs$core$IIndexed$_nth$arity$2(null,i__24514_24524);var k_24526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24515_24525,(0),null);var v_24527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24515_24525,(1),null);(m[cljs.core.key__GT_js(k_24526)] = clj__GT_js(v_24527));
{
var G__24528 = seq__24511_24521;
var G__24529 = chunk__24512_24522;
var G__24530 = count__24513_24523;
var G__24531 = (i__24514_24524 + (1));
seq__24511_24521 = G__24528;
chunk__24512_24522 = G__24529;
count__24513_24523 = G__24530;
i__24514_24524 = G__24531;
continue;
}
} else
{var temp__4222__auto___24532 = cljs.core.seq(seq__24511_24521);if(temp__4222__auto___24532)
{var seq__24511_24533__$1 = temp__4222__auto___24532;if(cljs.core.chunked_seq_QMARK_(seq__24511_24533__$1))
{var c__4448__auto___24534 = cljs.core.chunk_first(seq__24511_24533__$1);{
var G__24535 = cljs.core.chunk_rest(seq__24511_24533__$1);
var G__24536 = c__4448__auto___24534;
var G__24537 = cljs.core.count(c__4448__auto___24534);
var G__24538 = (0);
seq__24511_24521 = G__24535;
chunk__24512_24522 = G__24536;
count__24513_24523 = G__24537;
i__24514_24524 = G__24538;
continue;
}
} else
{var vec__24516_24539 = cljs.core.first(seq__24511_24533__$1);var k_24540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24516_24539,(0),null);var v_24541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24516_24539,(1),null);(m[cljs.core.key__GT_js(k_24540)] = clj__GT_js(v_24541));
{
var G__24542 = cljs.core.next(seq__24511_24533__$1);
var G__24543 = null;
var G__24544 = (0);
var G__24545 = (0);
seq__24511_24521 = G__24542;
chunk__24512_24522 = G__24543;
count__24513_24523 = G__24544;
i__24514_24524 = G__24545;
continue;
}
}
} else
{}
}
break;
}
return m;
} else
{if(cljs.core.coll_QMARK_(x))
{var arr = [];var seq__24517_24546 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clj__GT_js,x));var chunk__24518_24547 = null;var count__24519_24548 = (0);var i__24520_24549 = (0);while(true){
if((i__24520_24549 < count__24519_24548))
{var x_24550__$1 = chunk__24518_24547.cljs$core$IIndexed$_nth$arity$2(null,i__24520_24549);arr.push(x_24550__$1);
{
var G__24551 = seq__24517_24546;
var G__24552 = chunk__24518_24547;
var G__24553 = count__24519_24548;
var G__24554 = (i__24520_24549 + (1));
seq__24517_24546 = G__24551;
chunk__24518_24547 = G__24552;
count__24519_24548 = G__24553;
i__24520_24549 = G__24554;
continue;
}
} else
{var temp__4222__auto___24555 = cljs.core.seq(seq__24517_24546);if(temp__4222__auto___24555)
{var seq__24517_24556__$1 = temp__4222__auto___24555;if(cljs.core.chunked_seq_QMARK_(seq__24517_24556__$1))
{var c__4448__auto___24557 = cljs.core.chunk_first(seq__24517_24556__$1);{
var G__24558 = cljs.core.chunk_rest(seq__24517_24556__$1);
var G__24559 = c__4448__auto___24557;
var G__24560 = cljs.core.count(c__4448__auto___24557);
var G__24561 = (0);
seq__24517_24546 = G__24558;
chunk__24518_24547 = G__24559;
count__24519_24548 = G__24560;
i__24520_24549 = G__24561;
continue;
}
} else
{var x_24562__$1 = cljs.core.first(seq__24517_24556__$1);arr.push(x_24562__$1);
{
var G__24563 = cljs.core.next(seq__24517_24556__$1);
var G__24564 = null;
var G__24565 = (0);
var G__24566 = (0);
seq__24517_24546 = G__24563;
chunk__24518_24547 = G__24564;
count__24519_24548 = G__24565;
i__24520_24549 = G__24566;
continue;
}
}
} else
{}
}
break;
}
return arr;
} else
{return x;

}
}
}
}
}
}
});
cljs.core.IEncodeClojure = (function (){var obj24568 = {};return obj24568;
})();
cljs.core._js__GT_clj = (function _js__GT_clj(x,options){if((function (){var and__3666__auto__ = x;if(and__3666__auto__)
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else
{return and__3666__auto__;
}
})())
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else
{var x__4315__auto__ = (((x == null))?null:x);return (function (){var or__3678__auto__ = (cljs.core._js__GT_clj[(function (){var G__24572 = x__4315__auto__;return goog.typeOf(G__24572);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._js__GT_clj["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeClojure.-js->clj",x);
}
}
})().call(null,x,options);
}
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() {
var js__GT_clj = null;
var js__GT_clj__1 = (function (x){return js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$11,false], null)], 0));
});
var js__GT_clj__2 = (function() { 
var G__24627__delegate = function (x,opts){if((function (){var G__24601 = x;if(G__24601)
{var bit__4342__auto__ = null;if(cljs.core.truth_((function (){var or__3678__auto__ = bit__4342__auto__;if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return G__24601.cljs$core$IEncodeClojure$;
}
})()))
{return true;
} else
{if((!G__24601.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__24601);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__24601);
}
})())
{return cljs.core._js__GT_clj(x,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,opts));
} else
{if(cljs.core.seq(opts))
{var map__24602 = opts;var map__24602__$1 = ((cljs.core.seq_QMARK_(map__24602))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24602):map__24602);var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24602__$1,cljs.core.constant$keyword$11);var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);var f = ((function (map__24602,map__24602__$1,keywordize_keys,keyfn){
return (function thisfn(x__$1){if(cljs.core.seq_QMARK_(x__$1))
{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if(cljs.core.coll_QMARK_(x__$1))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if(x__$1 instanceof Array)
{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if((cljs.core.type(x__$1) === Object))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4417__auto__ = ((function (map__24602,map__24602__$1,keywordize_keys,keyfn){
return (function iter__24617(s__24618){return (new cljs.core.LazySeq(null,((function (map__24602,map__24602__$1,keywordize_keys,keyfn){
return (function (){var s__24618__$1 = s__24618;while(true){
var temp__4222__auto__ = cljs.core.seq(s__24618__$1);if(temp__4222__auto__)
{var s__24618__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_(s__24618__$2))
{var c__4415__auto__ = cljs.core.chunk_first(s__24618__$2);var size__4416__auto__ = cljs.core.count(c__4415__auto__);var b__24620 = cljs.core.chunk_buffer(size__4416__auto__);if((function (){var i__24619 = (0);while(true){
if((i__24619 < size__4416__auto__))
{var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4415__auto__,i__24619);cljs.core.chunk_append(b__24620,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24625 = k;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__24625) : keyfn.call(null,G__24625));
})(),thisfn((x__$1[k]))], null));
{
var G__24628 = (i__24619 + (1));
i__24619 = G__24628;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24620),iter__24617(cljs.core.chunk_rest(s__24618__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24620),null);
}
} else
{var k = cljs.core.first(s__24618__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24626 = k;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__24626) : keyfn.call(null,G__24626));
})(),thisfn((x__$1[k]))], null),iter__24617(cljs.core.rest(s__24618__$2)));
}
} else
{return null;
}
break;
}
});})(map__24602,map__24602__$1,keywordize_keys,keyfn))
,null,null));
});})(map__24602,map__24602__$1,keywordize_keys,keyfn))
;return iter__4417__auto__(cljs.core.js_keys(x__$1));
})());
} else
{return x__$1;

}
}
}
}
});})(map__24602,map__24602__$1,keywordize_keys,keyfn))
;return f(x);
} else
{return null;
}
}
};
var G__24627 = function (x,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__24627__delegate.call(this,x,opts);};
G__24627.cljs$lang$maxFixedArity = 1;
G__24627.cljs$lang$applyTo = (function (arglist__24629){
var x = cljs.core.first(arglist__24629);
var opts = cljs.core.rest(arglist__24629);
return G__24627__delegate(x,opts);
});
G__24627.cljs$core$IFn$_invoke$arity$variadic = G__24627__delegate;
return G__24627;
})()
;
js__GT_clj = function(x,var_args){
var opts = var_args;
switch(arguments.length){
case 1:
return js__GT_clj__1.call(this,x);
default:
return js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = js__GT_clj__2.cljs$lang$applyTo;
js__GT_clj.cljs$core$IFn$_invoke$arity$1 = js__GT_clj__1;
js__GT_clj.cljs$core$IFn$_invoke$arity$variadic = js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){var mem = (function (){var G__24632 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24632) : cljs.core.atom.call(null,G__24632));
})();return ((function (mem){
return (function() { 
var G__24634__delegate = function (args){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__24633 = mem;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24633) : cljs.core.deref.call(null,G__24633));
})(),args,cljs.core.lookup_sentinel);if((v === cljs.core.lookup_sentinel))
{var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);
return ret;
} else
{return v;
}
};
var G__24634 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24634__delegate.call(this,args);};
G__24634.cljs$lang$maxFixedArity = 0;
G__24634.cljs$lang$applyTo = (function (arglist__24635){
var args = cljs.core.seq(arglist__24635);
return G__24634__delegate(args);
});
G__24634.cljs$core$IFn$_invoke$arity$variadic = G__24634__delegate;
return G__24634;
})()
;
;})(mem))
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){while(true){
var ret = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();if(cljs.core.fn_QMARK_(ret))
{{
var G__24637 = ret;
f = G__24637;
continue;
}
} else
{return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__24638__delegate = function (f,args){return trampoline.cljs$core$IFn$_invoke$arity$1((function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));
};
var G__24638 = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__24638__delegate.call(this,f,args);};
G__24638.cljs$lang$maxFixedArity = 1;
G__24638.cljs$lang$applyTo = (function (arglist__24639){
var f = cljs.core.first(arglist__24639);
var args = cljs.core.rest(arglist__24639);
return G__24638__delegate(f,args);
});
G__24638.cljs$core$IFn$_invoke$arity$variadic = G__24638__delegate;
return G__24638;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$core$IFn$_invoke$arity$1 = trampoline__1;
trampoline.cljs$core$IFn$_invoke$arity$variadic = trampoline__2.cljs$core$IFn$_invoke$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){return rand.cljs$core$IFn$_invoke$arity$1((1));
});
var rand__1 = (function (n){return ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){var G__24642 = ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__24642) : Math.floor.call(null,G__24642));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (function (){var G__24644 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24644) : f.call(null,G__24644));
})();return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$12,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$13,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$14,cljs.core.PersistentArrayMap.EMPTY], null);
});
cljs.core._global_hierarchy = null;
cljs.core.get_global_hierarchy = (function get_global_hierarchy(){if((cljs.core._global_hierarchy == null))
{cljs.core._global_hierarchy = (function (){var G__24646 = cljs.core.make_hierarchy();return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24646) : cljs.core.atom.call(null,G__24646));
})();
} else
{}
return cljs.core._global_hierarchy;
});
/**
* @param {...*} var_args
*/
cljs.core.swap_global_hierarchy_BANG_ = (function() { 
var swap_global_hierarchy_BANG___delegate = function (f,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljs.core.get_global_hierarchy(),f,args);
};
var swap_global_hierarchy_BANG_ = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return swap_global_hierarchy_BANG___delegate.call(this,f,args);};
swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity = 1;
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__24647){
var f = cljs.core.first(arglist__24647);
var args = cljs.core.rest(arglist__24647);
return swap_global_hierarchy_BANG___delegate(f,args);
});
swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_global_hierarchy_BANG___delegate;
return swap_global_hierarchy_BANG_;
})()
;
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){return isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__24712 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24712) : cljs.core.deref.call(null,G__24712));
})(),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){var or__3678__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child,parent);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = cljs.core.contains_QMARK_(cljs.core.constant$keyword$14.cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{var and__3666__auto__ = cljs.core.vector_QMARK_(parent);if(and__3666__auto__)
{var and__3666__auto____$1 = cljs.core.vector_QMARK_(child);if(and__3666__auto____$1)
{var and__3666__auto____$2 = (cljs.core.count(parent) === cljs.core.count(child));if(and__3666__auto____$2)
{var ret = true;var i = (0);while(true){
if((!(ret)) || ((i === cljs.core.count(parent))))
{return ret;
} else
{{
var G__24737 = isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,(function (){var G__24735 = i;return (child.cljs$core$IFn$_invoke$arity$1 ? child.cljs$core$IFn$_invoke$arity$1(G__24735) : child.call(null,G__24735));
})(),(function (){var G__24736 = i;return (parent.cljs$core$IFn$_invoke$arity$1 ? parent.cljs$core$IFn$_invoke$arity$1(G__24736) : parent.call(null,G__24736));
})());
var G__24738 = (i + (1));
ret = G__24737;
i = G__24738;
continue;
}
}
break;
}
} else
{return and__3666__auto____$2;
}
} else
{return and__3666__auto____$1;
}
} else
{return and__3666__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$core$IFn$_invoke$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$core$IFn$_invoke$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){return parents.cljs$core$IFn$_invoke$arity$2((function (){var G__24742 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24742) : cljs.core.deref.call(null,G__24742));
})(),tag);
});
var parents__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$12.cljs$core$IFn$_invoke$arity$1(h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$core$IFn$_invoke$arity$1 = parents__1;
parents.cljs$core$IFn$_invoke$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){return ancestors.cljs$core$IFn$_invoke$arity$2((function (){var G__24746 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24746) : cljs.core.deref.call(null,G__24746));
})(),tag);
});
var ancestors__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$14.cljs$core$IFn$_invoke$arity$1(h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$core$IFn$_invoke$arity$1 = ancestors__1;
ancestors.cljs$core$IFn$_invoke$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){return descendants.cljs$core$IFn$_invoke$arity$2((function (){var G__24750 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24750) : cljs.core.deref.call(null,G__24750));
})(),tag);
});
var descendants__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$13.cljs$core$IFn$_invoke$arity$1(h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$core$IFn$_invoke$arity$1 = descendants__1;
descendants.cljs$core$IFn$_invoke$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){if(cljs.core.truth_(cljs.core.namespace(parent)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0))))));
}
cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(derive,cljs.core.array_seq([tag,parent], 0));
return null;
});
var derive__3 = (function (h,tag,parent){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tag,parent))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0))))));
}
var tp = cljs.core.constant$keyword$12.cljs$core$IFn$_invoke$arity$1(h);var td = cljs.core.constant$keyword$13.cljs$core$IFn$_invoke$arity$1(h);var ta = cljs.core.constant$keyword$14.cljs$core$IFn$_invoke$arity$1(h);var tf = ((function (tp,td,ta){
return (function (m,source,sources,target,targets){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tp,td,ta){
return (function (ret,k){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(function (){var G__24759 = target;return (targets.cljs$core$IFn$_invoke$arity$1 ? targets.cljs$core$IFn$_invoke$arity$1(G__24759) : targets.call(null,G__24759));
})())));
});})(tp,td,ta))
,m,cljs.core.cons(source,(function (){var G__24760 = source;return (sources.cljs$core$IFn$_invoke$arity$1 ? sources.cljs$core$IFn$_invoke$arity$1(G__24760) : sources.call(null,G__24760));
})()));
});})(tp,td,ta))
;var or__3678__auto__ = ((cljs.core.contains_QMARK_((function (){var G__24764 = tag;return (tp.cljs$core$IFn$_invoke$arity$1 ? tp.cljs$core$IFn$_invoke$arity$1(G__24764) : tp.call(null,G__24764));
})(),parent))?null:(function (){if(cljs.core.contains_QMARK_((function (){var G__24765 = tag;return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__24765) : ta.call(null,G__24765));
})(),parent))
{throw (new Error((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"already has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+"as ancestor")));
} else
{}
if(cljs.core.contains_QMARK_((function (){var G__24766 = parent;return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__24766) : ta.call(null,G__24766));
})(),tag))
{throw (new Error(("Cyclic derivation:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+"has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"as ancestor")));
} else
{}
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$12,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$12.cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),cljs.core.constant$keyword$14,tf(cljs.core.constant$keyword$14.cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),cljs.core.constant$keyword$13,tf(cljs.core.constant$keyword$13.cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})());if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$core$IFn$_invoke$arity$2 = derive__2;
derive.cljs$core$IFn$_invoke$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(underive,cljs.core.array_seq([tag,parent], 0));
return null;
});
var underive__3 = (function (h,tag,parent){var parentMap = cljs.core.constant$keyword$12.cljs$core$IFn$_invoke$arity$1(h);var childsParents = (cljs.core.truth_((function (){var G__24773 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__24773) : parentMap.call(null,G__24773));
})())?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var G__24774 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__24774) : parentMap.call(null,G__24774));
})(),parent):cljs.core.PersistentHashSet.EMPTY);var newParents = (cljs.core.truth_(cljs.core.not_empty(childsParents))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parentMap,tag,childsParents):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parentMap,tag));var deriv_seq = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parentMap,childsParents,newParents){
return (function (p1__24767_SHARP_){return cljs.core.cons(cljs.core.first(p1__24767_SHARP_),cljs.core.interpose(cljs.core.first(p1__24767_SHARP_),cljs.core.second(p1__24767_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq(newParents)));if(cljs.core.contains_QMARK_((function (){var G__24775 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__24775) : parentMap.call(null,G__24775));
})(),parent))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parentMap,childsParents,newParents,deriv_seq){
return (function (p1__24768_SHARP_,p2__24769_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.derive,p1__24768_SHARP_,p2__24769_SHARP_);
});})(parentMap,childsParents,newParents,deriv_seq))
,cljs.core.make_hierarchy(),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),deriv_seq));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$core$IFn$_invoke$arity$2 = underive__2;
underive.cljs$core$IFn$_invoke$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(method_cache,(function (_){var G__24778 = method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24778) : cljs.core.deref.call(null,G__24778));
}));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cached_hierarchy,(function (_){var G__24779 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24779) : cljs.core.deref.call(null,G__24779));
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){var xprefs = (function (){var G__24795 = prefer_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24795) : cljs.core.deref.call(null,G__24795));
})().call(null,x);var or__3678__auto__ = (cljs.core.truth_((function (){var and__3666__auto__ = xprefs;if(cljs.core.truth_(and__3666__auto__))
{var G__24797 = y;return (xprefs.cljs$core$IFn$_invoke$arity$1 ? xprefs.cljs$core$IFn$_invoke$arity$1(G__24797) : xprefs.call(null,G__24797));
} else
{return and__3666__auto__;
}
})())?true:null);if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(y);while(true){
if((cljs.core.count(ps) > (0)))
{if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps),prefer_table)))
{} else
{}
{
var G__24798 = cljs.core.rest(ps);
ps = G__24798;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__3678__auto____$1))
{return or__3678__auto____$1;
} else
{var or__3678__auto____$2 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(x);while(true){
if((cljs.core.count(ps) > (0)))
{if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps),y,prefer_table)))
{} else
{}
{
var G__24799 = cljs.core.rest(ps);
ps = G__24799;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__3678__auto____$2))
{return or__3678__auto____$2;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){var or__3678__auto__ = cljs.core.prefers_STAR_(x,y,prefer_table);if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){var best_entry = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (be,p__24813){var vec__24814 = p__24813;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24814,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24814,(1),null);var e = vec__24814;if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__24815 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24815) : cljs.core.deref.call(null,G__24815));
})(),dispatch_val,k))
{var be2 = (cljs.core.truth_((function (){var or__3678__auto__ = (be == null);if(or__3678__auto__)
{return or__3678__auto__;
} else
{return cljs.core.dominates(k,cljs.core.first(be),prefer_table);
}
})())?e:be);if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2),k,prefer_table)))
{} else
{throw (new Error(("Multiple methods in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"' match dispatch value: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(be2))+", and neither is preferred")));
}
return be2;
} else
{return be;
}
}),null,(function (){var G__24816 = method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24816) : cljs.core.deref.call(null,G__24816));
})());if(cljs.core.truth_(best_entry))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__24817 = cached_hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24817) : cljs.core.deref.call(null,G__24817));
})(),(function (){var G__24818 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24818) : cljs.core.deref.call(null,G__24818));
})()))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry));
return cljs.core.second(best_entry);
} else
{cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = (function (){var obj24820 = {};return obj24820;
})();
cljs.core._reset = (function _reset(mf){if((function (){var and__3666__auto__ = mf;if(and__3666__auto__)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3666__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__4315__auto__ = (((mf == null))?null:mf);return (function (){var or__3678__auto__ = (cljs.core._reset[(function (){var G__24824 = x__4315__auto__;return goog.typeOf(G__24824);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._reset["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){if((function (){var and__3666__auto__ = mf;if(and__3666__auto__)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3666__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__4315__auto__ = (((mf == null))?null:mf);return (function (){var or__3678__auto__ = (cljs.core._add_method[(function (){var G__24828 = x__4315__auto__;return goog.typeOf(G__24828);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._add_method["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){if((function (){var and__3666__auto__ = mf;if(and__3666__auto__)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3666__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__4315__auto__ = (((mf == null))?null:mf);return (function (){var or__3678__auto__ = (cljs.core._remove_method[(function (){var G__24832 = x__4315__auto__;return goog.typeOf(G__24832);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._remove_method["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){if((function (){var and__3666__auto__ = mf;if(and__3666__auto__)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3666__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__4315__auto__ = (((mf == null))?null:mf);return (function (){var or__3678__auto__ = (cljs.core._prefer_method[(function (){var G__24836 = x__4315__auto__;return goog.typeOf(G__24836);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._prefer_method["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){if((function (){var and__3666__auto__ = mf;if(and__3666__auto__)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3666__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__4315__auto__ = (((mf == null))?null:mf);return (function (){var or__3678__auto__ = (cljs.core._get_method[(function (){var G__24840 = x__4315__auto__;return goog.typeOf(G__24840);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._get_method["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){if((function (){var and__3666__auto__ = mf;if(and__3666__auto__)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3666__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__4315__auto__ = (((mf == null))?null:mf);return (function (){var or__3678__auto__ = (cljs.core._methods[(function (){var G__24844 = x__4315__auto__;return goog.typeOf(G__24844);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._methods["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){if((function (){var and__3666__auto__ = mf;if(and__3666__auto__)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3666__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__4315__auto__ = (((mf == null))?null:mf);return (function (){var or__3678__auto__ = (cljs.core._prefers[(function (){var G__24848 = x__4315__auto__;return goog.typeOf(G__24848);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (cljs.core._prefers["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core.throw_no_method_error = (function throw_no_method_error(name,dispatch_val){throw (new Error(("No method in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"' for dispatch value: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val))));
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194305;
this.cljs$lang$protocol_mask$partition1$ = 256;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorStr = "cljs.core/MultiFn";
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__24850 = this$__$1;return goog.getUid(G__24850);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_table,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_cache,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cached_hierarchy,((function (mf__$1){
return (function (mf__$2){return null;
});})(mf__$1))
);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){var self__ = this;
var mf__$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__24851 = self__.cached_hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24851) : cljs.core.deref.call(null,G__24851));
})(),(function (){var G__24852 = self__.hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24852) : cljs.core.deref.call(null,G__24852));
})()))
{} else
{cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}
var temp__4220__auto__ = (function (){var G__24853 = self__.method_cache;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24853) : cljs.core.deref.call(null,G__24853));
})().call(null,dispatch_val);if(cljs.core.truth_(temp__4220__auto__))
{var target_fn = temp__4220__auto__;return target_fn;
} else
{var temp__4220__auto____$1 = cljs.core.find_and_cache_best_method(self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);if(cljs.core.truth_(temp__4220__auto____$1))
{var target_fn = temp__4220__auto____$1;return target_fn;
} else
{return (function (){var G__24854 = self__.method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24854) : cljs.core.deref.call(null,G__24854));
})().call(null,self__.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){var self__ = this;
var mf__$1 = this;if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,self__.prefer_table)))
{throw (new Error(("Preference conflict in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+"': "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val_y)+" is already preferred to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val_x))));
} else
{}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (old){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
});})(mf__$1))
);
return cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;var G__24855 = self__.method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24855) : cljs.core.deref.call(null,G__24855));
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;var G__24856 = self__.prefer_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24856) : cljs.core.deref.call(null,G__24856));
});
cljs.core.MultiFn.prototype.call = (function() {
var G__25697 = null;
var G__25697__2 = (function (self__,a){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__24857 = a;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__24857) : self__.dispatch_fn.call(null,G__24857));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__24858 = a;return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__24858) : target_fn.call(null,G__24858));
});
var G__25697__3 = (function (self__,a,b){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__24859 = a;var G__24860 = b;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__24859,G__24860) : self__.dispatch_fn.call(null,G__24859,G__24860));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__24861 = a;var G__24862 = b;return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__24861,G__24862) : target_fn.call(null,G__24861,G__24862));
});
var G__25697__4 = (function (self__,a,b,c){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__24863 = a;var G__24864 = b;var G__24865 = c;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__24863,G__24864,G__24865) : self__.dispatch_fn.call(null,G__24863,G__24864,G__24865));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__24866 = a;var G__24867 = b;var G__24868 = c;return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__24866,G__24867,G__24868) : target_fn.call(null,G__24866,G__24867,G__24868));
});
var G__25697__5 = (function (self__,a,b,c,d){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__24869 = a;var G__24870 = b;var G__24871 = c;var G__24872 = d;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__24869,G__24870,G__24871,G__24872) : self__.dispatch_fn.call(null,G__24869,G__24870,G__24871,G__24872));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__24873 = a;var G__24874 = b;var G__24875 = c;var G__24876 = d;return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__24873,G__24874,G__24875,G__24876) : target_fn.call(null,G__24873,G__24874,G__24875,G__24876));
});
var G__25697__6 = (function (self__,a,b,c,d,e){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__24877 = a;var G__24878 = b;var G__24879 = c;var G__24880 = d;var G__24881 = e;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__24877,G__24878,G__24879,G__24880,G__24881) : self__.dispatch_fn.call(null,G__24877,G__24878,G__24879,G__24880,G__24881));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__24882 = a;var G__24883 = b;var G__24884 = c;var G__24885 = d;var G__24886 = e;return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__24882,G__24883,G__24884,G__24885,G__24886) : target_fn.call(null,G__24882,G__24883,G__24884,G__24885,G__24886));
});
var G__25697__7 = (function (self__,a,b,c,d,e,f){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__24887 = a;var G__24888 = b;var G__24889 = c;var G__24890 = d;var G__24891 = e;var G__24892 = f;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__24887,G__24888,G__24889,G__24890,G__24891,G__24892) : self__.dispatch_fn.call(null,G__24887,G__24888,G__24889,G__24890,G__24891,G__24892));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__24893 = a;var G__24894 = b;var G__24895 = c;var G__24896 = d;var G__24897 = e;var G__24898 = f;return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__24893,G__24894,G__24895,G__24896,G__24897,G__24898) : target_fn.call(null,G__24893,G__24894,G__24895,G__24896,G__24897,G__24898));
});
var G__25697__8 = (function (self__,a,b,c,d,e,f,g){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__24899 = a;var G__24900 = b;var G__24901 = c;var G__24902 = d;var G__24903 = e;var G__24904 = f;var G__24905 = g;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,G__24905) : self__.dispatch_fn.call(null,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,G__24905));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__24906 = a;var G__24907 = b;var G__24908 = c;var G__24909 = d;var G__24910 = e;var G__24911 = f;var G__24912 = g;return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__24906,G__24907,G__24908,G__24909,G__24910,G__24911,G__24912) : target_fn.call(null,G__24906,G__24907,G__24908,G__24909,G__24910,G__24911,G__24912));
});
var G__25697__9 = (function (self__,a,b,c,d,e,f,g,h){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__24913 = a;var G__24914 = b;var G__24915 = c;var G__24916 = d;var G__24917 = e;var G__24918 = f;var G__24919 = g;var G__24920 = h;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__24913,G__24914,G__24915,G__24916,G__24917,G__24918,G__24919,G__24920) : self__.dispatch_fn.call(null,G__24913,G__24914,G__24915,G__24916,G__24917,G__24918,G__24919,G__24920));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__24921 = a;var G__24922 = b;var G__24923 = c;var G__24924 = d;var G__24925 = e;var G__24926 = f;var G__24927 = g;var G__24928 = h;return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__24921,G__24922,G__24923,G__24924,G__24925,G__24926,G__24927,G__24928) : target_fn.call(null,G__24921,G__24922,G__24923,G__24924,G__24925,G__24926,G__24927,G__24928));
});
var G__25697__10 = (function (self__,a,b,c,d,e,f,g,h,i){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__24929 = a;var G__24930 = b;var G__24931 = c;var G__24932 = d;var G__24933 = e;var G__24934 = f;var G__24935 = g;var G__24936 = h;var G__24937 = i;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__24929,G__24930,G__24931,G__24932,G__24933,G__24934,G__24935,G__24936,G__24937) : self__.dispatch_fn.call(null,G__24929,G__24930,G__24931,G__24932,G__24933,G__24934,G__24935,G__24936,G__24937));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__24938 = a;var G__24939 = b;var G__24940 = c;var G__24941 = d;var G__24942 = e;var G__24943 = f;var G__24944 = g;var G__24945 = h;var G__24946 = i;return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__24938,G__24939,G__24940,G__24941,G__24942,G__24943,G__24944,G__24945,G__24946) : target_fn.call(null,G__24938,G__24939,G__24940,G__24941,G__24942,G__24943,G__24944,G__24945,G__24946));
});
var G__25697__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__24947 = a;var G__24948 = b;var G__24949 = c;var G__24950 = d;var G__24951 = e;var G__24952 = f;var G__24953 = g;var G__24954 = h;var G__24955 = i;var G__24956 = j;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__24947,G__24948,G__24949,G__24950,G__24951,G__24952,G__24953,G__24954,G__24955,G__24956) : self__.dispatch_fn.call(null,G__24947,G__24948,G__24949,G__24950,G__24951,G__24952,G__24953,G__24954,G__24955,G__24956));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__24957 = a;var G__24958 = b;var G__24959 = c;var G__24960 = d;var G__24961 = e;var G__24962 = f;var G__24963 = g;var G__24964 = h;var G__24965 = i;var G__24966 = j;return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__24957,G__24958,G__24959,G__24960,G__24961,G__24962,G__24963,G__24964,G__24965,G__24966) : target_fn.call(null,G__24957,G__24958,G__24959,G__24960,G__24961,G__24962,G__24963,G__24964,G__24965,G__24966));
});
var G__25697__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__24967 = a;var G__24968 = b;var G__24969 = c;var G__24970 = d;var G__24971 = e;var G__24972 = f;var G__24973 = g;var G__24974 = h;var G__24975 = i;var G__24976 = j;var G__24977 = k;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__24967,G__24968,G__24969,G__24970,G__24971,G__24972,G__24973,G__24974,G__24975,G__24976,G__24977) : self__.dispatch_fn.call(null,G__24967,G__24968,G__24969,G__24970,G__24971,G__24972,G__24973,G__24974,G__24975,G__24976,G__24977));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__24978 = a;var G__24979 = b;var G__24980 = c;var G__24981 = d;var G__24982 = e;var G__24983 = f;var G__24984 = g;var G__24985 = h;var G__24986 = i;var G__24987 = j;var G__24988 = k;return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__24978,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,G__24987,G__24988) : target_fn.call(null,G__24978,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,G__24987,G__24988));
});
var G__25697__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__24989 = a;var G__24990 = b;var G__24991 = c;var G__24992 = d;var G__24993 = e;var G__24994 = f;var G__24995 = g;var G__24996 = h;var G__24997 = i;var G__24998 = j;var G__24999 = k;var G__25000 = l;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,G__24998,G__24999,G__25000) : self__.dispatch_fn.call(null,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,G__24998,G__24999,G__25000));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25001 = a;var G__25002 = b;var G__25003 = c;var G__25004 = d;var G__25005 = e;var G__25006 = f;var G__25007 = g;var G__25008 = h;var G__25009 = i;var G__25010 = j;var G__25011 = k;var G__25012 = l;return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,G__25007,G__25008,G__25009,G__25010,G__25011,G__25012) : target_fn.call(null,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,G__25007,G__25008,G__25009,G__25010,G__25011,G__25012));
});
var G__25697__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__25013 = a;var G__25014 = b;var G__25015 = c;var G__25016 = d;var G__25017 = e;var G__25018 = f;var G__25019 = g;var G__25020 = h;var G__25021 = i;var G__25022 = j;var G__25023 = k;var G__25024 = l;var G__25025 = m;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__25013,G__25014,G__25015,G__25016,G__25017,G__25018,G__25019,G__25020,G__25021,G__25022,G__25023,G__25024,G__25025) : self__.dispatch_fn.call(null,G__25013,G__25014,G__25015,G__25016,G__25017,G__25018,G__25019,G__25020,G__25021,G__25022,G__25023,G__25024,G__25025));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25026 = a;var G__25027 = b;var G__25028 = c;var G__25029 = d;var G__25030 = e;var G__25031 = f;var G__25032 = g;var G__25033 = h;var G__25034 = i;var G__25035 = j;var G__25036 = k;var G__25037 = l;var G__25038 = m;return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__25026,G__25027,G__25028,G__25029,G__25030,G__25031,G__25032,G__25033,G__25034,G__25035,G__25036,G__25037,G__25038) : target_fn.call(null,G__25026,G__25027,G__25028,G__25029,G__25030,G__25031,G__25032,G__25033,G__25034,G__25035,G__25036,G__25037,G__25038));
});
var G__25697__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__25039 = a;var G__25040 = b;var G__25041 = c;var G__25042 = d;var G__25043 = e;var G__25044 = f;var G__25045 = g;var G__25046 = h;var G__25047 = i;var G__25048 = j;var G__25049 = k;var G__25050 = l;var G__25051 = m;var G__25052 = n;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__25039,G__25040,G__25041,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,G__25050,G__25051,G__25052) : self__.dispatch_fn.call(null,G__25039,G__25040,G__25041,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,G__25050,G__25051,G__25052));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25053 = a;var G__25054 = b;var G__25055 = c;var G__25056 = d;var G__25057 = e;var G__25058 = f;var G__25059 = g;var G__25060 = h;var G__25061 = i;var G__25062 = j;var G__25063 = k;var G__25064 = l;var G__25065 = m;var G__25066 = n;return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__25053,G__25054,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066) : target_fn.call(null,G__25053,G__25054,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066));
});
var G__25697__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__25067 = a;var G__25068 = b;var G__25069 = c;var G__25070 = d;var G__25071 = e;var G__25072 = f;var G__25073 = g;var G__25074 = h;var G__25075 = i;var G__25076 = j;var G__25077 = k;var G__25078 = l;var G__25079 = m;var G__25080 = n;var G__25081 = o;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__25067,G__25068,G__25069,G__25070,G__25071,G__25072,G__25073,G__25074,G__25075,G__25076,G__25077,G__25078,G__25079,G__25080,G__25081) : self__.dispatch_fn.call(null,G__25067,G__25068,G__25069,G__25070,G__25071,G__25072,G__25073,G__25074,G__25075,G__25076,G__25077,G__25078,G__25079,G__25080,G__25081));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25082 = a;var G__25083 = b;var G__25084 = c;var G__25085 = d;var G__25086 = e;var G__25087 = f;var G__25088 = g;var G__25089 = h;var G__25090 = i;var G__25091 = j;var G__25092 = k;var G__25093 = l;var G__25094 = m;var G__25095 = n;var G__25096 = o;return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__25082,G__25083,G__25084,G__25085,G__25086,G__25087,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,G__25096) : target_fn.call(null,G__25082,G__25083,G__25084,G__25085,G__25086,G__25087,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,G__25096));
});
var G__25697__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__25097 = a;var G__25098 = b;var G__25099 = c;var G__25100 = d;var G__25101 = e;var G__25102 = f;var G__25103 = g;var G__25104 = h;var G__25105 = i;var G__25106 = j;var G__25107 = k;var G__25108 = l;var G__25109 = m;var G__25110 = n;var G__25111 = o;var G__25112 = p;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__25097,G__25098,G__25099,G__25100,G__25101,G__25102,G__25103,G__25104,G__25105,G__25106,G__25107,G__25108,G__25109,G__25110,G__25111,G__25112) : self__.dispatch_fn.call(null,G__25097,G__25098,G__25099,G__25100,G__25101,G__25102,G__25103,G__25104,G__25105,G__25106,G__25107,G__25108,G__25109,G__25110,G__25111,G__25112));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25113 = a;var G__25114 = b;var G__25115 = c;var G__25116 = d;var G__25117 = e;var G__25118 = f;var G__25119 = g;var G__25120 = h;var G__25121 = i;var G__25122 = j;var G__25123 = k;var G__25124 = l;var G__25125 = m;var G__25126 = n;var G__25127 = o;var G__25128 = p;return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__25113,G__25114,G__25115,G__25116,G__25117,G__25118,G__25119,G__25120,G__25121,G__25122,G__25123,G__25124,G__25125,G__25126,G__25127,G__25128) : target_fn.call(null,G__25113,G__25114,G__25115,G__25116,G__25117,G__25118,G__25119,G__25120,G__25121,G__25122,G__25123,G__25124,G__25125,G__25126,G__25127,G__25128));
});
var G__25697__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__25129 = a;var G__25130 = b;var G__25131 = c;var G__25132 = d;var G__25133 = e;var G__25134 = f;var G__25135 = g;var G__25136 = h;var G__25137 = i;var G__25138 = j;var G__25139 = k;var G__25140 = l;var G__25141 = m;var G__25142 = n;var G__25143 = o;var G__25144 = p;var G__25145 = q;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__25129,G__25130,G__25131,G__25132,G__25133,G__25134,G__25135,G__25136,G__25137,G__25138,G__25139,G__25140,G__25141,G__25142,G__25143,G__25144,G__25145) : self__.dispatch_fn.call(null,G__25129,G__25130,G__25131,G__25132,G__25133,G__25134,G__25135,G__25136,G__25137,G__25138,G__25139,G__25140,G__25141,G__25142,G__25143,G__25144,G__25145));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25146 = a;var G__25147 = b;var G__25148 = c;var G__25149 = d;var G__25150 = e;var G__25151 = f;var G__25152 = g;var G__25153 = h;var G__25154 = i;var G__25155 = j;var G__25156 = k;var G__25157 = l;var G__25158 = m;var G__25159 = n;var G__25160 = o;var G__25161 = p;var G__25162 = q;return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__25146,G__25147,G__25148,G__25149,G__25150,G__25151,G__25152,G__25153,G__25154,G__25155,G__25156,G__25157,G__25158,G__25159,G__25160,G__25161,G__25162) : target_fn.call(null,G__25146,G__25147,G__25148,G__25149,G__25150,G__25151,G__25152,G__25153,G__25154,G__25155,G__25156,G__25157,G__25158,G__25159,G__25160,G__25161,G__25162));
});
var G__25697__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__25163 = a;var G__25164 = b;var G__25165 = c;var G__25166 = d;var G__25167 = e;var G__25168 = f;var G__25169 = g;var G__25170 = h;var G__25171 = i;var G__25172 = j;var G__25173 = k;var G__25174 = l;var G__25175 = m;var G__25176 = n;var G__25177 = o;var G__25178 = p;var G__25179 = q;var G__25180 = r;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__25163,G__25164,G__25165,G__25166,G__25167,G__25168,G__25169,G__25170,G__25171,G__25172,G__25173,G__25174,G__25175,G__25176,G__25177,G__25178,G__25179,G__25180) : self__.dispatch_fn.call(null,G__25163,G__25164,G__25165,G__25166,G__25167,G__25168,G__25169,G__25170,G__25171,G__25172,G__25173,G__25174,G__25175,G__25176,G__25177,G__25178,G__25179,G__25180));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25181 = a;var G__25182 = b;var G__25183 = c;var G__25184 = d;var G__25185 = e;var G__25186 = f;var G__25187 = g;var G__25188 = h;var G__25189 = i;var G__25190 = j;var G__25191 = k;var G__25192 = l;var G__25193 = m;var G__25194 = n;var G__25195 = o;var G__25196 = p;var G__25197 = q;var G__25198 = r;return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__25181,G__25182,G__25183,G__25184,G__25185,G__25186,G__25187,G__25188,G__25189,G__25190,G__25191,G__25192,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198) : target_fn.call(null,G__25181,G__25182,G__25183,G__25184,G__25185,G__25186,G__25187,G__25188,G__25189,G__25190,G__25191,G__25192,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198));
});
var G__25697__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__25199 = a;var G__25200 = b;var G__25201 = c;var G__25202 = d;var G__25203 = e;var G__25204 = f;var G__25205 = g;var G__25206 = h;var G__25207 = i;var G__25208 = j;var G__25209 = k;var G__25210 = l;var G__25211 = m;var G__25212 = n;var G__25213 = o;var G__25214 = p;var G__25215 = q;var G__25216 = r;var G__25217 = s;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__25199,G__25200,G__25201,G__25202,G__25203,G__25204,G__25205,G__25206,G__25207,G__25208,G__25209,G__25210,G__25211,G__25212,G__25213,G__25214,G__25215,G__25216,G__25217) : self__.dispatch_fn.call(null,G__25199,G__25200,G__25201,G__25202,G__25203,G__25204,G__25205,G__25206,G__25207,G__25208,G__25209,G__25210,G__25211,G__25212,G__25213,G__25214,G__25215,G__25216,G__25217));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25218 = a;var G__25219 = b;var G__25220 = c;var G__25221 = d;var G__25222 = e;var G__25223 = f;var G__25224 = g;var G__25225 = h;var G__25226 = i;var G__25227 = j;var G__25228 = k;var G__25229 = l;var G__25230 = m;var G__25231 = n;var G__25232 = o;var G__25233 = p;var G__25234 = q;var G__25235 = r;var G__25236 = s;return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__25218,G__25219,G__25220,G__25221,G__25222,G__25223,G__25224,G__25225,G__25226,G__25227,G__25228,G__25229,G__25230,G__25231,G__25232,G__25233,G__25234,G__25235,G__25236) : target_fn.call(null,G__25218,G__25219,G__25220,G__25221,G__25222,G__25223,G__25224,G__25225,G__25226,G__25227,G__25228,G__25229,G__25230,G__25231,G__25232,G__25233,G__25234,G__25235,G__25236));
});
var G__25697__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__25237 = a;var G__25238 = b;var G__25239 = c;var G__25240 = d;var G__25241 = e;var G__25242 = f;var G__25243 = g;var G__25244 = h;var G__25245 = i;var G__25246 = j;var G__25247 = k;var G__25248 = l;var G__25249 = m;var G__25250 = n;var G__25251 = o;var G__25252 = p;var G__25253 = q;var G__25254 = r;var G__25255 = s;var G__25256 = t;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__25237,G__25238,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,G__25247,G__25248,G__25249,G__25250,G__25251,G__25252,G__25253,G__25254,G__25255,G__25256) : self__.dispatch_fn.call(null,G__25237,G__25238,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,G__25247,G__25248,G__25249,G__25250,G__25251,G__25252,G__25253,G__25254,G__25255,G__25256));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25257 = a;var G__25258 = b;var G__25259 = c;var G__25260 = d;var G__25261 = e;var G__25262 = f;var G__25263 = g;var G__25264 = h;var G__25265 = i;var G__25266 = j;var G__25267 = k;var G__25268 = l;var G__25269 = m;var G__25270 = n;var G__25271 = o;var G__25272 = p;var G__25273 = q;var G__25274 = r;var G__25275 = s;var G__25276 = t;return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__25257,G__25258,G__25259,G__25260,G__25261,G__25262,G__25263,G__25264,G__25265,G__25266,G__25267,G__25268,G__25269,G__25270,G__25271,G__25272,G__25273,G__25274,G__25275,G__25276) : target_fn.call(null,G__25257,G__25258,G__25259,G__25260,G__25261,G__25262,G__25263,G__25264,G__25265,G__25266,G__25267,G__25268,G__25269,G__25270,G__25271,G__25272,G__25273,G__25274,G__25275,G__25276));
});
var G__25697__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__25697 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 2:
return G__25697__2.call(this,self__,a);
case 3:
return G__25697__3.call(this,self__,a,b);
case 4:
return G__25697__4.call(this,self__,a,b,c);
case 5:
return G__25697__5.call(this,self__,a,b,c,d);
case 6:
return G__25697__6.call(this,self__,a,b,c,d,e);
case 7:
return G__25697__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__25697__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__25697__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__25697__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__25697__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__25697__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__25697__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__25697__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__25697__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__25697__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__25697__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__25697__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__25697__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__25697__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__25697__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__25697__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25697.cljs$core$IFn$_invoke$arity$2 = G__25697__2;
G__25697.cljs$core$IFn$_invoke$arity$3 = G__25697__3;
G__25697.cljs$core$IFn$_invoke$arity$4 = G__25697__4;
G__25697.cljs$core$IFn$_invoke$arity$5 = G__25697__5;
G__25697.cljs$core$IFn$_invoke$arity$6 = G__25697__6;
G__25697.cljs$core$IFn$_invoke$arity$7 = G__25697__7;
G__25697.cljs$core$IFn$_invoke$arity$8 = G__25697__8;
G__25697.cljs$core$IFn$_invoke$arity$9 = G__25697__9;
G__25697.cljs$core$IFn$_invoke$arity$10 = G__25697__10;
G__25697.cljs$core$IFn$_invoke$arity$11 = G__25697__11;
G__25697.cljs$core$IFn$_invoke$arity$12 = G__25697__12;
G__25697.cljs$core$IFn$_invoke$arity$13 = G__25697__13;
G__25697.cljs$core$IFn$_invoke$arity$14 = G__25697__14;
G__25697.cljs$core$IFn$_invoke$arity$15 = G__25697__15;
G__25697.cljs$core$IFn$_invoke$arity$16 = G__25697__16;
G__25697.cljs$core$IFn$_invoke$arity$17 = G__25697__17;
G__25697.cljs$core$IFn$_invoke$arity$18 = G__25697__18;
G__25697.cljs$core$IFn$_invoke$arity$19 = G__25697__19;
G__25697.cljs$core$IFn$_invoke$arity$20 = G__25697__20;
G__25697.cljs$core$IFn$_invoke$arity$21 = G__25697__21;
G__25697.cljs$core$IFn$_invoke$arity$22 = G__25697__22;
return G__25697;
})()
;
cljs.core.MultiFn.prototype.apply = (function (self__,args24849){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24849)));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25277 = a;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__25277) : self__.dispatch_fn.call(null,G__25277));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25278 = a;return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__25278) : target_fn.call(null,G__25278));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25279 = a;var G__25280 = b;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__25279,G__25280) : self__.dispatch_fn.call(null,G__25279,G__25280));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25281 = a;var G__25282 = b;return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__25281,G__25282) : target_fn.call(null,G__25281,G__25282));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25283 = a;var G__25284 = b;var G__25285 = c;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__25283,G__25284,G__25285) : self__.dispatch_fn.call(null,G__25283,G__25284,G__25285));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25286 = a;var G__25287 = b;var G__25288 = c;return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__25286,G__25287,G__25288) : target_fn.call(null,G__25286,G__25287,G__25288));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25289 = a;var G__25290 = b;var G__25291 = c;var G__25292 = d;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__25289,G__25290,G__25291,G__25292) : self__.dispatch_fn.call(null,G__25289,G__25290,G__25291,G__25292));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25293 = a;var G__25294 = b;var G__25295 = c;var G__25296 = d;return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__25293,G__25294,G__25295,G__25296) : target_fn.call(null,G__25293,G__25294,G__25295,G__25296));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25297 = a;var G__25298 = b;var G__25299 = c;var G__25300 = d;var G__25301 = e;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__25297,G__25298,G__25299,G__25300,G__25301) : self__.dispatch_fn.call(null,G__25297,G__25298,G__25299,G__25300,G__25301));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25302 = a;var G__25303 = b;var G__25304 = c;var G__25305 = d;var G__25306 = e;return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__25302,G__25303,G__25304,G__25305,G__25306) : target_fn.call(null,G__25302,G__25303,G__25304,G__25305,G__25306));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25307 = a;var G__25308 = b;var G__25309 = c;var G__25310 = d;var G__25311 = e;var G__25312 = f;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__25307,G__25308,G__25309,G__25310,G__25311,G__25312) : self__.dispatch_fn.call(null,G__25307,G__25308,G__25309,G__25310,G__25311,G__25312));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25313 = a;var G__25314 = b;var G__25315 = c;var G__25316 = d;var G__25317 = e;var G__25318 = f;return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__25313,G__25314,G__25315,G__25316,G__25317,G__25318) : target_fn.call(null,G__25313,G__25314,G__25315,G__25316,G__25317,G__25318));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25319 = a;var G__25320 = b;var G__25321 = c;var G__25322 = d;var G__25323 = e;var G__25324 = f;var G__25325 = g;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__25319,G__25320,G__25321,G__25322,G__25323,G__25324,G__25325) : self__.dispatch_fn.call(null,G__25319,G__25320,G__25321,G__25322,G__25323,G__25324,G__25325));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25326 = a;var G__25327 = b;var G__25328 = c;var G__25329 = d;var G__25330 = e;var G__25331 = f;var G__25332 = g;return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__25326,G__25327,G__25328,G__25329,G__25330,G__25331,G__25332) : target_fn.call(null,G__25326,G__25327,G__25328,G__25329,G__25330,G__25331,G__25332));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25333 = a;var G__25334 = b;var G__25335 = c;var G__25336 = d;var G__25337 = e;var G__25338 = f;var G__25339 = g;var G__25340 = h;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__25333,G__25334,G__25335,G__25336,G__25337,G__25338,G__25339,G__25340) : self__.dispatch_fn.call(null,G__25333,G__25334,G__25335,G__25336,G__25337,G__25338,G__25339,G__25340));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25341 = a;var G__25342 = b;var G__25343 = c;var G__25344 = d;var G__25345 = e;var G__25346 = f;var G__25347 = g;var G__25348 = h;return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__25341,G__25342,G__25343,G__25344,G__25345,G__25346,G__25347,G__25348) : target_fn.call(null,G__25341,G__25342,G__25343,G__25344,G__25345,G__25346,G__25347,G__25348));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25349 = a;var G__25350 = b;var G__25351 = c;var G__25352 = d;var G__25353 = e;var G__25354 = f;var G__25355 = g;var G__25356 = h;var G__25357 = i;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__25349,G__25350,G__25351,G__25352,G__25353,G__25354,G__25355,G__25356,G__25357) : self__.dispatch_fn.call(null,G__25349,G__25350,G__25351,G__25352,G__25353,G__25354,G__25355,G__25356,G__25357));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25358 = a;var G__25359 = b;var G__25360 = c;var G__25361 = d;var G__25362 = e;var G__25363 = f;var G__25364 = g;var G__25365 = h;var G__25366 = i;return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__25358,G__25359,G__25360,G__25361,G__25362,G__25363,G__25364,G__25365,G__25366) : target_fn.call(null,G__25358,G__25359,G__25360,G__25361,G__25362,G__25363,G__25364,G__25365,G__25366));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25367 = a;var G__25368 = b;var G__25369 = c;var G__25370 = d;var G__25371 = e;var G__25372 = f;var G__25373 = g;var G__25374 = h;var G__25375 = i;var G__25376 = j;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__25367,G__25368,G__25369,G__25370,G__25371,G__25372,G__25373,G__25374,G__25375,G__25376) : self__.dispatch_fn.call(null,G__25367,G__25368,G__25369,G__25370,G__25371,G__25372,G__25373,G__25374,G__25375,G__25376));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25377 = a;var G__25378 = b;var G__25379 = c;var G__25380 = d;var G__25381 = e;var G__25382 = f;var G__25383 = g;var G__25384 = h;var G__25385 = i;var G__25386 = j;return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__25377,G__25378,G__25379,G__25380,G__25381,G__25382,G__25383,G__25384,G__25385,G__25386) : target_fn.call(null,G__25377,G__25378,G__25379,G__25380,G__25381,G__25382,G__25383,G__25384,G__25385,G__25386));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25387 = a;var G__25388 = b;var G__25389 = c;var G__25390 = d;var G__25391 = e;var G__25392 = f;var G__25393 = g;var G__25394 = h;var G__25395 = i;var G__25396 = j;var G__25397 = k;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__25387,G__25388,G__25389,G__25390,G__25391,G__25392,G__25393,G__25394,G__25395,G__25396,G__25397) : self__.dispatch_fn.call(null,G__25387,G__25388,G__25389,G__25390,G__25391,G__25392,G__25393,G__25394,G__25395,G__25396,G__25397));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25398 = a;var G__25399 = b;var G__25400 = c;var G__25401 = d;var G__25402 = e;var G__25403 = f;var G__25404 = g;var G__25405 = h;var G__25406 = i;var G__25407 = j;var G__25408 = k;return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__25398,G__25399,G__25400,G__25401,G__25402,G__25403,G__25404,G__25405,G__25406,G__25407,G__25408) : target_fn.call(null,G__25398,G__25399,G__25400,G__25401,G__25402,G__25403,G__25404,G__25405,G__25406,G__25407,G__25408));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25409 = a;var G__25410 = b;var G__25411 = c;var G__25412 = d;var G__25413 = e;var G__25414 = f;var G__25415 = g;var G__25416 = h;var G__25417 = i;var G__25418 = j;var G__25419 = k;var G__25420 = l;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__25409,G__25410,G__25411,G__25412,G__25413,G__25414,G__25415,G__25416,G__25417,G__25418,G__25419,G__25420) : self__.dispatch_fn.call(null,G__25409,G__25410,G__25411,G__25412,G__25413,G__25414,G__25415,G__25416,G__25417,G__25418,G__25419,G__25420));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25421 = a;var G__25422 = b;var G__25423 = c;var G__25424 = d;var G__25425 = e;var G__25426 = f;var G__25427 = g;var G__25428 = h;var G__25429 = i;var G__25430 = j;var G__25431 = k;var G__25432 = l;return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__25421,G__25422,G__25423,G__25424,G__25425,G__25426,G__25427,G__25428,G__25429,G__25430,G__25431,G__25432) : target_fn.call(null,G__25421,G__25422,G__25423,G__25424,G__25425,G__25426,G__25427,G__25428,G__25429,G__25430,G__25431,G__25432));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25433 = a;var G__25434 = b;var G__25435 = c;var G__25436 = d;var G__25437 = e;var G__25438 = f;var G__25439 = g;var G__25440 = h;var G__25441 = i;var G__25442 = j;var G__25443 = k;var G__25444 = l;var G__25445 = m;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__25433,G__25434,G__25435,G__25436,G__25437,G__25438,G__25439,G__25440,G__25441,G__25442,G__25443,G__25444,G__25445) : self__.dispatch_fn.call(null,G__25433,G__25434,G__25435,G__25436,G__25437,G__25438,G__25439,G__25440,G__25441,G__25442,G__25443,G__25444,G__25445));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25446 = a;var G__25447 = b;var G__25448 = c;var G__25449 = d;var G__25450 = e;var G__25451 = f;var G__25452 = g;var G__25453 = h;var G__25454 = i;var G__25455 = j;var G__25456 = k;var G__25457 = l;var G__25458 = m;return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__25446,G__25447,G__25448,G__25449,G__25450,G__25451,G__25452,G__25453,G__25454,G__25455,G__25456,G__25457,G__25458) : target_fn.call(null,G__25446,G__25447,G__25448,G__25449,G__25450,G__25451,G__25452,G__25453,G__25454,G__25455,G__25456,G__25457,G__25458));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25459 = a;var G__25460 = b;var G__25461 = c;var G__25462 = d;var G__25463 = e;var G__25464 = f;var G__25465 = g;var G__25466 = h;var G__25467 = i;var G__25468 = j;var G__25469 = k;var G__25470 = l;var G__25471 = m;var G__25472 = n;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__25459,G__25460,G__25461,G__25462,G__25463,G__25464,G__25465,G__25466,G__25467,G__25468,G__25469,G__25470,G__25471,G__25472) : self__.dispatch_fn.call(null,G__25459,G__25460,G__25461,G__25462,G__25463,G__25464,G__25465,G__25466,G__25467,G__25468,G__25469,G__25470,G__25471,G__25472));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25473 = a;var G__25474 = b;var G__25475 = c;var G__25476 = d;var G__25477 = e;var G__25478 = f;var G__25479 = g;var G__25480 = h;var G__25481 = i;var G__25482 = j;var G__25483 = k;var G__25484 = l;var G__25485 = m;var G__25486 = n;return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__25473,G__25474,G__25475,G__25476,G__25477,G__25478,G__25479,G__25480,G__25481,G__25482,G__25483,G__25484,G__25485,G__25486) : target_fn.call(null,G__25473,G__25474,G__25475,G__25476,G__25477,G__25478,G__25479,G__25480,G__25481,G__25482,G__25483,G__25484,G__25485,G__25486));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25487 = a;var G__25488 = b;var G__25489 = c;var G__25490 = d;var G__25491 = e;var G__25492 = f;var G__25493 = g;var G__25494 = h;var G__25495 = i;var G__25496 = j;var G__25497 = k;var G__25498 = l;var G__25499 = m;var G__25500 = n;var G__25501 = o;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__25487,G__25488,G__25489,G__25490,G__25491,G__25492,G__25493,G__25494,G__25495,G__25496,G__25497,G__25498,G__25499,G__25500,G__25501) : self__.dispatch_fn.call(null,G__25487,G__25488,G__25489,G__25490,G__25491,G__25492,G__25493,G__25494,G__25495,G__25496,G__25497,G__25498,G__25499,G__25500,G__25501));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25502 = a;var G__25503 = b;var G__25504 = c;var G__25505 = d;var G__25506 = e;var G__25507 = f;var G__25508 = g;var G__25509 = h;var G__25510 = i;var G__25511 = j;var G__25512 = k;var G__25513 = l;var G__25514 = m;var G__25515 = n;var G__25516 = o;return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__25502,G__25503,G__25504,G__25505,G__25506,G__25507,G__25508,G__25509,G__25510,G__25511,G__25512,G__25513,G__25514,G__25515,G__25516) : target_fn.call(null,G__25502,G__25503,G__25504,G__25505,G__25506,G__25507,G__25508,G__25509,G__25510,G__25511,G__25512,G__25513,G__25514,G__25515,G__25516));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25517 = a;var G__25518 = b;var G__25519 = c;var G__25520 = d;var G__25521 = e;var G__25522 = f;var G__25523 = g;var G__25524 = h;var G__25525 = i;var G__25526 = j;var G__25527 = k;var G__25528 = l;var G__25529 = m;var G__25530 = n;var G__25531 = o;var G__25532 = p;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__25517,G__25518,G__25519,G__25520,G__25521,G__25522,G__25523,G__25524,G__25525,G__25526,G__25527,G__25528,G__25529,G__25530,G__25531,G__25532) : self__.dispatch_fn.call(null,G__25517,G__25518,G__25519,G__25520,G__25521,G__25522,G__25523,G__25524,G__25525,G__25526,G__25527,G__25528,G__25529,G__25530,G__25531,G__25532));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25533 = a;var G__25534 = b;var G__25535 = c;var G__25536 = d;var G__25537 = e;var G__25538 = f;var G__25539 = g;var G__25540 = h;var G__25541 = i;var G__25542 = j;var G__25543 = k;var G__25544 = l;var G__25545 = m;var G__25546 = n;var G__25547 = o;var G__25548 = p;return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__25533,G__25534,G__25535,G__25536,G__25537,G__25538,G__25539,G__25540,G__25541,G__25542,G__25543,G__25544,G__25545,G__25546,G__25547,G__25548) : target_fn.call(null,G__25533,G__25534,G__25535,G__25536,G__25537,G__25538,G__25539,G__25540,G__25541,G__25542,G__25543,G__25544,G__25545,G__25546,G__25547,G__25548));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25549 = a;var G__25550 = b;var G__25551 = c;var G__25552 = d;var G__25553 = e;var G__25554 = f;var G__25555 = g;var G__25556 = h;var G__25557 = i;var G__25558 = j;var G__25559 = k;var G__25560 = l;var G__25561 = m;var G__25562 = n;var G__25563 = o;var G__25564 = p;var G__25565 = q;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__25549,G__25550,G__25551,G__25552,G__25553,G__25554,G__25555,G__25556,G__25557,G__25558,G__25559,G__25560,G__25561,G__25562,G__25563,G__25564,G__25565) : self__.dispatch_fn.call(null,G__25549,G__25550,G__25551,G__25552,G__25553,G__25554,G__25555,G__25556,G__25557,G__25558,G__25559,G__25560,G__25561,G__25562,G__25563,G__25564,G__25565));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25566 = a;var G__25567 = b;var G__25568 = c;var G__25569 = d;var G__25570 = e;var G__25571 = f;var G__25572 = g;var G__25573 = h;var G__25574 = i;var G__25575 = j;var G__25576 = k;var G__25577 = l;var G__25578 = m;var G__25579 = n;var G__25580 = o;var G__25581 = p;var G__25582 = q;return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__25566,G__25567,G__25568,G__25569,G__25570,G__25571,G__25572,G__25573,G__25574,G__25575,G__25576,G__25577,G__25578,G__25579,G__25580,G__25581,G__25582) : target_fn.call(null,G__25566,G__25567,G__25568,G__25569,G__25570,G__25571,G__25572,G__25573,G__25574,G__25575,G__25576,G__25577,G__25578,G__25579,G__25580,G__25581,G__25582));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25583 = a;var G__25584 = b;var G__25585 = c;var G__25586 = d;var G__25587 = e;var G__25588 = f;var G__25589 = g;var G__25590 = h;var G__25591 = i;var G__25592 = j;var G__25593 = k;var G__25594 = l;var G__25595 = m;var G__25596 = n;var G__25597 = o;var G__25598 = p;var G__25599 = q;var G__25600 = r;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__25583,G__25584,G__25585,G__25586,G__25587,G__25588,G__25589,G__25590,G__25591,G__25592,G__25593,G__25594,G__25595,G__25596,G__25597,G__25598,G__25599,G__25600) : self__.dispatch_fn.call(null,G__25583,G__25584,G__25585,G__25586,G__25587,G__25588,G__25589,G__25590,G__25591,G__25592,G__25593,G__25594,G__25595,G__25596,G__25597,G__25598,G__25599,G__25600));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25601 = a;var G__25602 = b;var G__25603 = c;var G__25604 = d;var G__25605 = e;var G__25606 = f;var G__25607 = g;var G__25608 = h;var G__25609 = i;var G__25610 = j;var G__25611 = k;var G__25612 = l;var G__25613 = m;var G__25614 = n;var G__25615 = o;var G__25616 = p;var G__25617 = q;var G__25618 = r;return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__25601,G__25602,G__25603,G__25604,G__25605,G__25606,G__25607,G__25608,G__25609,G__25610,G__25611,G__25612,G__25613,G__25614,G__25615,G__25616,G__25617,G__25618) : target_fn.call(null,G__25601,G__25602,G__25603,G__25604,G__25605,G__25606,G__25607,G__25608,G__25609,G__25610,G__25611,G__25612,G__25613,G__25614,G__25615,G__25616,G__25617,G__25618));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25619 = a;var G__25620 = b;var G__25621 = c;var G__25622 = d;var G__25623 = e;var G__25624 = f;var G__25625 = g;var G__25626 = h;var G__25627 = i;var G__25628 = j;var G__25629 = k;var G__25630 = l;var G__25631 = m;var G__25632 = n;var G__25633 = o;var G__25634 = p;var G__25635 = q;var G__25636 = r;var G__25637 = s;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__25619,G__25620,G__25621,G__25622,G__25623,G__25624,G__25625,G__25626,G__25627,G__25628,G__25629,G__25630,G__25631,G__25632,G__25633,G__25634,G__25635,G__25636,G__25637) : self__.dispatch_fn.call(null,G__25619,G__25620,G__25621,G__25622,G__25623,G__25624,G__25625,G__25626,G__25627,G__25628,G__25629,G__25630,G__25631,G__25632,G__25633,G__25634,G__25635,G__25636,G__25637));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25638 = a;var G__25639 = b;var G__25640 = c;var G__25641 = d;var G__25642 = e;var G__25643 = f;var G__25644 = g;var G__25645 = h;var G__25646 = i;var G__25647 = j;var G__25648 = k;var G__25649 = l;var G__25650 = m;var G__25651 = n;var G__25652 = o;var G__25653 = p;var G__25654 = q;var G__25655 = r;var G__25656 = s;return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__25638,G__25639,G__25640,G__25641,G__25642,G__25643,G__25644,G__25645,G__25646,G__25647,G__25648,G__25649,G__25650,G__25651,G__25652,G__25653,G__25654,G__25655,G__25656) : target_fn.call(null,G__25638,G__25639,G__25640,G__25641,G__25642,G__25643,G__25644,G__25645,G__25646,G__25647,G__25648,G__25649,G__25650,G__25651,G__25652,G__25653,G__25654,G__25655,G__25656));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__25657 = a;var G__25658 = b;var G__25659 = c;var G__25660 = d;var G__25661 = e;var G__25662 = f;var G__25663 = g;var G__25664 = h;var G__25665 = i;var G__25666 = j;var G__25667 = k;var G__25668 = l;var G__25669 = m;var G__25670 = n;var G__25671 = o;var G__25672 = p;var G__25673 = q;var G__25674 = r;var G__25675 = s;var G__25676 = t;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__25657,G__25658,G__25659,G__25660,G__25661,G__25662,G__25663,G__25664,G__25665,G__25666,G__25667,G__25668,G__25669,G__25670,G__25671,G__25672,G__25673,G__25674,G__25675,G__25676) : self__.dispatch_fn.call(null,G__25657,G__25658,G__25659,G__25660,G__25661,G__25662,G__25663,G__25664,G__25665,G__25666,G__25667,G__25668,G__25669,G__25670,G__25671,G__25672,G__25673,G__25674,G__25675,G__25676));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__25677 = a;var G__25678 = b;var G__25679 = c;var G__25680 = d;var G__25681 = e;var G__25682 = f;var G__25683 = g;var G__25684 = h;var G__25685 = i;var G__25686 = j;var G__25687 = k;var G__25688 = l;var G__25689 = m;var G__25690 = n;var G__25691 = o;var G__25692 = p;var G__25693 = q;var G__25694 = r;var G__25695 = s;var G__25696 = t;return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__25677,G__25678,G__25679,G__25680,G__25681,G__25682,G__25683,G__25684,G__25685,G__25686,G__25687,G__25688,G__25689,G__25690,G__25691,G__25692,G__25693,G__25694,G__25695,G__25696) : target_fn.call(null,G__25677,G__25678,G__25679,G__25680,G__25681,G__25682,G__25683,G__25684,G__25685,G__25686,G__25687,G__25688,G__25689,G__25690,G__25691,G__25692,G__25693,G__25694,G__25695,G__25696));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var mf = this;var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
cljs.core.__GT_MultiFn = (function __GT_MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){return (new cljs.core.MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){return cljs.core._prefers(multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorStr = "cljs.core/UUID";
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__,opt__4257__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__25698 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0));return goog.string.hashCode(G__25698);
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){var self__ = this;
var ___$2 = this;return cljs.core._write(writer,("#uuid \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.uuid)+"\""));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return ((other instanceof cljs.core.UUID)) && ((self__.uuid === other.uuid));
});
cljs.core.UUID.prototype.toString = (function (){var self__ = this;
var _ = this;return self__.uuid;
});
cljs.core.UUID.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_UUID = (function __GT_UUID(uuid){return (new cljs.core.UUID(uuid));
});

/**
* @constructor
*/
cljs.core.ExceptionInfo = (function (message,data,cause){
this.message = message;
this.data = data;
this.cause = cause;
})
cljs.core.ExceptionInfo.cljs$lang$type = true;
cljs.core.ExceptionInfo.cljs$lang$ctorStr = "cljs.core/ExceptionInfo";
cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__4258__auto__,writer__4259__auto__,opts__4260__auto__){return cljs.core._write(writer__4259__auto__,"cljs.core/ExceptionInfo");
});
cljs.core.__GT_ExceptionInfo = (function __GT_ExceptionInfo(message,data,cause){return (new cljs.core.ExceptionInfo(message,data,cause));
});
cljs.core.ExceptionInfo.prototype = (new Error());
cljs.core.ExceptionInfo.prototype.constructor = cljs.core.ExceptionInfo;
/**
* Alpha - subject to change.
* Create an instance of ExceptionInfo, an Error type that carries a
* map of additional data.
*/
cljs.core.ex_info = (function() {
var ex_info = null;
var ex_info__2 = (function (msg,map){return (new cljs.core.ExceptionInfo(msg,map,null));
});
var ex_info__3 = (function (msg,map,cause){return (new cljs.core.ExceptionInfo(msg,map,cause));
});
ex_info = function(msg,map,cause){
switch(arguments.length){
case 2:
return ex_info__2.call(this,msg,map);
case 3:
return ex_info__3.call(this,msg,map,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ex_info.cljs$core$IFn$_invoke$arity$2 = ex_info__2;
ex_info.cljs$core$IFn$_invoke$arity$3 = ex_info__3;
return ex_info;
})()
;
/**
* Alpha - subject to change.
* Returns exception data (a map) if ex is an ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_data = (function ex_data(ex){if((ex instanceof cljs.core.ExceptionInfo))
{return ex.data;
} else
{return null;
}
});
/**
* Alpha - subject to change.
* Returns the message attached to the given Error / ExceptionInfo object.
* For non-Errors returns nil.
*/
cljs.core.ex_message = (function ex_message(ex){if((ex instanceof Error))
{return ex.message;
} else
{return null;
}
});
/**
* Alpha - subject to change.
* Returns exception cause (an Error / ExceptionInfo) if ex is an
* ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_cause = (function ex_cause(ex){if((ex instanceof cljs.core.ExceptionInfo))
{return ex.cause;
} else
{return null;
}
});
/**
* Returns an JavaScript compatible comparator based upon pred.
*/
cljs.core.comparator = (function comparator(pred){return (function (x,y){if(cljs.core.truth_((function (){var G__25703 = x;var G__25704 = y;return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__25703,G__25704) : pred.call(null,G__25703,G__25704));
})()))
{return (-1);
} else
{if(cljs.core.truth_((function (){var G__25705 = y;var G__25706 = x;return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__25705,G__25706) : pred.call(null,G__25705,G__25706));
})()))
{return (1);
} else
{return (0);

}
}
});
});
cljs.core.special_symbol_QMARK_ = (function special_symbol_QMARK_(x){return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null),x);
});
