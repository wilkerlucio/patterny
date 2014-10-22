// Compiled by ClojureScript 0.0-2371
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.classify_char = (function classify_char(c){var G__29341 = c;switch (G__29341) {
case "0":
case "1":
case "2":
case "3":
case "4":
case "5":
case "6":
case "7":
case "8":
case "9":
return cljs.core.constant$keyword$63;

break;
case "-":
case "_":
case " ":
case "\t":
case "\n":
case "\u000B":
case "\f":
case "\r":
return cljs.core.constant$keyword$64;

break;
case "a":
case "b":
case "c":
case "d":
case "e":
case "f":
case "g":
case "h":
case "i":
case "j":
case "k":
case "l":
case "m":
case "n":
case "o":
case "p":
case "q":
case "r":
case "s":
case "t":
case "u":
case "v":
case "w":
case "x":
case "y":
return cljs.core.constant$keyword$65;

break;
case "A":
case "B":
case "C":
case "D":
case "E":
case "F":
case "G":
case "H":
case "I":
case "J":
case "K":
case "L":
case "M":
case "N":
case "O":
case "P":
case "Q":
case "R":
case "S":
case "T":
case "U":
case "V":
case "W":
case "X":
case "Y":
return cljs.core.constant$keyword$66;

break;
default:
return cljs.core.constant$keyword$67;

}
});
camel_snake_kebab.internals.misc.split = (function split(ss){var cs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(camel_snake_kebab.internals.misc.classify_char,ss);var result = cljs.core.PersistentVector.EMPTY;var start = (0);var current = (0);while(true){
var next = (current + (1));var result_PLUS_new = ((function (result,start,current,next,cs){
return (function (end){if((end > start))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,ss.substring(start,end));
} else
{return result;
}
});})(result,start,current,next,cs))
;if((current >= cljs.core.count(ss)))
{return result_PLUS_new(current);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,current),cljs.core.constant$keyword$64))
{{
var G__29345 = result_PLUS_new(current);
var G__29346 = next;
var G__29347 = next;
result = G__29345;
start = G__29346;
current = G__29347;
continue;
}
} else
{if((function (){var vec__29344 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(cs,current);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29344,(0),null);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29344,(1),null);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29344,(2),null);return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constant$keyword$66)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,cljs.core.constant$keyword$66))) || ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constant$keyword$63)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,cljs.core.constant$keyword$63))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constant$keyword$66)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,cljs.core.constant$keyword$66)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.constant$keyword$65)));
})())
{{
var G__29348 = result_PLUS_new(next);
var G__29349 = next;
var G__29350 = next;
result = G__29348;
start = G__29349;
current = G__29350;
continue;
}
} else
{{
var G__29351 = result;
var G__29352 = start;
var G__29353 = next;
result = G__29351;
start = G__29352;
current = G__29353;
continue;
}

}
}
}
break;
}
});
camel_snake_kebab.internals.misc.convert_case = (function convert_case(first_fn,rest_fn,sep,s){var vec__29356 = camel_snake_kebab.internals.misc.split(s);var first = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29356,(0),null);var rest = cljs.core.nthnext(vec__29356,(1));return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((function (){var G__29357 = first;return (first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(G__29357) : first_fn.call(null,G__29357));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});
camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function capitalize_http_header(s){var or__3678__auto__ = (function (){var G__29361 = clojure.string.upper_case(s);return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__29361) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__29361));
})();if(cljs.core.truth_(or__3678__auto__))
{return or__3678__auto__;
} else
{return clojure.string.capitalize(s);
}
});
