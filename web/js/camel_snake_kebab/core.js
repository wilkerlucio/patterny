// Compiled by ClojureScript 0.0-2371
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.misc');
goog.require('clojure.string');
camel_snake_kebab.core.AlterName = (function (){var obj29324 = {};return obj29324;
})();
camel_snake_kebab.core.alter_name = (function alter_name(this$,f){if((function (){var and__3666__auto__ = this$;if(and__3666__auto__)
{return this$.camel_snake_kebab$core$AlterName$alter_name$arity$2;
} else
{return and__3666__auto__;
}
})())
{return this$.camel_snake_kebab$core$AlterName$alter_name$arity$2(this$,f);
} else
{var x__4315__auto__ = (((this$ == null))?null:this$);return (function (){var or__3678__auto__ = (camel_snake_kebab.core.alter_name[(function (){var G__29328 = x__4315__auto__;return goog.typeOf(G__29328);
})()]);if(or__3678__auto__)
{return or__3678__auto__;
} else
{var or__3678__auto____$1 = (camel_snake_kebab.core.alter_name["_"]);if(or__3678__auto____$1)
{return or__3678__auto____$1;
} else
{throw cljs.core.missing_protocol("AlterName.alter-name",this$);
}
}
})().call(null,this$,f);
}
});
cljs.core.Symbol.prototype.camel_snake_kebab$core$AlterName$ = true;
cljs.core.Symbol.prototype.camel_snake_kebab$core$AlterName$alter_name$arity$2 = (function (this$,f){var this$__$1 = this;if(cljs.core.truth_(cljs.core.namespace(this$__$1)))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Namespaced symbols are not supported",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,this$__$1], null));
} else
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__29329 = cljs.core.name(this$__$1);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29329) : f.call(null,G__29329));
})());
}
});
cljs.core.Keyword.prototype.camel_snake_kebab$core$AlterName$ = true;
cljs.core.Keyword.prototype.camel_snake_kebab$core$AlterName$alter_name$arity$2 = (function (this$,f){var this$__$1 = this;if(cljs.core.truth_(cljs.core.namespace(this$__$1)))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Namespaced keywords are not supported",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,this$__$1], null));
} else
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__29330 = cljs.core.name(this$__$1);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29330) : f.call(null,G__29330));
})());
}
});
(camel_snake_kebab.core.AlterName["string"] = true);
(camel_snake_kebab.core.alter_name["string"] = (function (this$,f){var G__29331 = this$;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29331) : f.call(null,G__29331));
}));
camel_snake_kebab.core.convert_case = (function convert_case(first_fn,rest_fn,sep,s){return camel_snake_kebab.internals.misc.convert_case(first_fn,rest_fn,sep,s);
});
var convert_case__19893__auto___29332 = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"");camel_snake_kebab.core.__GT_CamelCase = ((function (convert_case__19893__auto___29332){
return (function __GT_CamelCase(s__19894__auto__){return camel_snake_kebab.core.alter_name(s__19894__auto__,convert_case__19893__auto___29332);
});})(convert_case__19893__auto___29332))
;
camel_snake_kebab.core.__GT_CamelCaseString = (function __GT_CamelCaseString(s__19896__auto__){return cljs.core.identity(camel_snake_kebab.internals.misc.convert_case(clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__19896__auto__)));
});
camel_snake_kebab.core.__GT_CamelCaseKeyword = (function __GT_CamelCaseKeyword(s__19896__auto__){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.internals.misc.convert_case(clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__19896__auto__)));
});
camel_snake_kebab.core.__GT_CamelCaseSymbol = (function __GT_CamelCaseSymbol(s__19896__auto__){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.internals.misc.convert_case(clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__19896__auto__)));
});
var convert_case__19893__auto___29333 = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_");camel_snake_kebab.core.__GT_Camel_Snake_Case = ((function (convert_case__19893__auto___29333){
return (function __GT_Camel_Snake_Case(s__19894__auto__){return camel_snake_kebab.core.alter_name(s__19894__auto__,convert_case__19893__auto___29333);
});})(convert_case__19893__auto___29333))
;
camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function __GT_Camel_Snake_Case_String(s__19896__auto__){return cljs.core.identity(camel_snake_kebab.internals.misc.convert_case(clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__19896__auto__)));
});
camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function __GT_Camel_Snake_Case_Keyword(s__19896__auto__){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.internals.misc.convert_case(clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__19896__auto__)));
});
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function __GT_Camel_Snake_Case_Symbol(s__19896__auto__){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.internals.misc.convert_case(clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__19896__auto__)));
});
var convert_case__19893__auto___29334 = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"");camel_snake_kebab.core.__GT_camelCase = ((function (convert_case__19893__auto___29334){
return (function __GT_camelCase(s__19894__auto__){return camel_snake_kebab.core.alter_name(s__19894__auto__,convert_case__19893__auto___29334);
});})(convert_case__19893__auto___29334))
;
camel_snake_kebab.core.__GT_camelCaseString = (function __GT_camelCaseString(s__19896__auto__){return cljs.core.identity(camel_snake_kebab.internals.misc.convert_case(clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__19896__auto__)));
});
camel_snake_kebab.core.__GT_camelCaseKeyword = (function __GT_camelCaseKeyword(s__19896__auto__){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.internals.misc.convert_case(clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__19896__auto__)));
});
camel_snake_kebab.core.__GT_camelCaseSymbol = (function __GT_camelCaseSymbol(s__19896__auto__){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.internals.misc.convert_case(clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__19896__auto__)));
});
var convert_case__19893__auto___29335 = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.lower_case,"_");camel_snake_kebab.core.__GT_Snake_case = ((function (convert_case__19893__auto___29335){
return (function __GT_Snake_case(s__19894__auto__){return camel_snake_kebab.core.alter_name(s__19894__auto__,convert_case__19893__auto___29335);
});})(convert_case__19893__auto___29335))
;
camel_snake_kebab.core.__GT_Snake_case_string = (function __GT_Snake_case_string(s__19896__auto__){return cljs.core.identity(camel_snake_kebab.internals.misc.convert_case(clojure.string.capitalize,clojure.string.lower_case,"_",cljs.core.name(s__19896__auto__)));
});
camel_snake_kebab.core.__GT_Snake_case_keyword = (function __GT_Snake_case_keyword(s__19896__auto__){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.internals.misc.convert_case(clojure.string.capitalize,clojure.string.lower_case,"_",cljs.core.name(s__19896__auto__)));
});
camel_snake_kebab.core.__GT_Snake_case_symbol = (function __GT_Snake_case_symbol(s__19896__auto__){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.internals.misc.convert_case(clojure.string.capitalize,clojure.string.lower_case,"_",cljs.core.name(s__19896__auto__)));
});
var convert_case__19893__auto___29336 = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_");camel_snake_kebab.core.__GT_SNAKE_CASE = ((function (convert_case__19893__auto___29336){
return (function __GT_SNAKE_CASE(s__19894__auto__){return camel_snake_kebab.core.alter_name(s__19894__auto__,convert_case__19893__auto___29336);
});})(convert_case__19893__auto___29336))
;
camel_snake_kebab.core.__GT_SNAKE_CASE_STRING = (function __GT_SNAKE_CASE_STRING(s__19896__auto__){return cljs.core.identity(camel_snake_kebab.internals.misc.convert_case(clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__19896__auto__)));
});
camel_snake_kebab.core.__GT_SNAKE_CASE_KEYWORD = (function __GT_SNAKE_CASE_KEYWORD(s__19896__auto__){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.internals.misc.convert_case(clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__19896__auto__)));
});
camel_snake_kebab.core.__GT_SNAKE_CASE_SYMBOL = (function __GT_SNAKE_CASE_SYMBOL(s__19896__auto__){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.internals.misc.convert_case(clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__19896__auto__)));
});
var convert_case__19893__auto___29337 = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_");camel_snake_kebab.core.__GT_snake_case = ((function (convert_case__19893__auto___29337){
return (function __GT_snake_case(s__19894__auto__){return camel_snake_kebab.core.alter_name(s__19894__auto__,convert_case__19893__auto___29337);
});})(convert_case__19893__auto___29337))
;
camel_snake_kebab.core.__GT_snake_case_string = (function __GT_snake_case_string(s__19896__auto__){return cljs.core.identity(camel_snake_kebab.internals.misc.convert_case(clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__19896__auto__)));
});
camel_snake_kebab.core.__GT_snake_case_keyword = (function __GT_snake_case_keyword(s__19896__auto__){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.internals.misc.convert_case(clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__19896__auto__)));
});
camel_snake_kebab.core.__GT_snake_case_symbol = (function __GT_snake_case_symbol(s__19896__auto__){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.internals.misc.convert_case(clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__19896__auto__)));
});
var convert_case__19893__auto___29338 = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-");camel_snake_kebab.core.__GT_kebab_case = ((function (convert_case__19893__auto___29338){
return (function __GT_kebab_case(s__19894__auto__){return camel_snake_kebab.core.alter_name(s__19894__auto__,convert_case__19893__auto___29338);
});})(convert_case__19893__auto___29338))
;
camel_snake_kebab.core.__GT_kebab_case_string = (function __GT_kebab_case_string(s__19896__auto__){return cljs.core.identity(camel_snake_kebab.internals.misc.convert_case(clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__19896__auto__)));
});
camel_snake_kebab.core.__GT_kebab_case_keyword = (function __GT_kebab_case_keyword(s__19896__auto__){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.internals.misc.convert_case(clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__19896__auto__)));
});
camel_snake_kebab.core.__GT_kebab_case_symbol = (function __GT_kebab_case_symbol(s__19896__auto__){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.internals.misc.convert_case(clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__19896__auto__)));
});
var convert_case__19893__auto___29339 = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-");camel_snake_kebab.core.__GT_HTTP_Header_Case = ((function (convert_case__19893__auto___29339){
return (function __GT_HTTP_Header_Case(s__19894__auto__){return camel_snake_kebab.core.alter_name(s__19894__auto__,convert_case__19893__auto___29339);
});})(convert_case__19893__auto___29339))
;
camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function __GT_HTTP_Header_Case_String(s__19896__auto__){return cljs.core.identity(camel_snake_kebab.internals.misc.convert_case(camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__19896__auto__)));
});
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function __GT_HTTP_Header_Case_Keyword(s__19896__auto__){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.internals.misc.convert_case(camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__19896__auto__)));
});
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function __GT_HTTP_Header_Case_Symbol(s__19896__auto__){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.internals.misc.convert_case(camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__19896__auto__)));
});
