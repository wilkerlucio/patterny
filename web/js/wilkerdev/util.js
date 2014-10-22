// Compiled by ClojureScript 0.0-2371
goog.provide('wilkerdev.util');
goog.require('cljs.core');
goog.require('camel_snake_kebab.core');
goog.require('camel_snake_kebab.core');
wilkerdev.util.js__GT_map = (function js__GT_map(obj){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19929_SHARP_){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__19929_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,camel_snake_kebab.core.__GT_kebab_case));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19928_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__19928_SHARP_,(obj[p1__19928_SHARP_])],null));
}),cljs.core.js_keys(obj))));
});
wilkerdev.util.map__GT_query = (function map__GT_query(m){return goog.Uri.QueryData.createFromMap(cljs.core.clj__GT_js(m)).toString();
});
wilkerdev.util.quote_regexp = (function quote_regexp(string){return string.replace((function (){var G__19932 = "[-\\^$*+?.()|[\\]{}]";var G__19933 = "g";return RegExp(G__19932,G__19933);
})(),"\\$&");
});
