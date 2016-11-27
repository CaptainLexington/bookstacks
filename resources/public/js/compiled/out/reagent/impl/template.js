// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('clojure.string');
goog.require('reagent.debug');
goog.require('clojure.walk');
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (){
})

reagent.impl.template.NativeWrapper.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

reagent.impl.template.NativeWrapper.cljs$lang$type = true;

reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper";

reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__26580__auto__,writer__26581__auto__,opt__26582__auto__){
return cljs.core._write.call(null,writer__26581__auto__,"reagent.impl.template/NativeWrapper");
});

reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(){
return (new reagent.impl.template.NativeWrapper());
});

reagent.impl.template.named_QMARK_ = (function reagent$impl$template$named_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return (reagent.impl.template.named_QMARK_.call(null,x)) || (typeof x === 'string');
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return (reagent.impl.template.hiccup_tag_QMARK_.call(null,x)) || (cljs.core.ifn_QMARK_.call(null,x)) || ((x instanceof reagent.impl.template.NativeWrapper));
});
reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
reagent.impl.template.cache_get = (function reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return (o[k]);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(reagent.impl.template.named_QMARK_.call(null,k)){
var temp__4659__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k));
if((temp__4659__auto__ == null)){
return (reagent.impl.template.prop_name_cache[cljs.core.name.call(null,k)] = reagent.impl.util.dash_to_camel.call(null,k));
} else {
var k_SINGLEQUOTE_ = temp__4659__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.js_val_QMARK_ = (function reagent$impl$template$js_val_QMARK_(x){
return !(("object" === goog.typeOf(x)));
});
reagent.impl.template.kv_conv = (function reagent$impl$template$kv_conv(o,k,v){
var G__29287 = o;
(G__29287[reagent.impl.template.cached_prop_name.call(null,k)] = reagent.impl.template.convert_prop_value.call(null,v));

return G__29287;
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(reagent.impl.template.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
var G__29288__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__29288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29289__i = 0, G__29289__a = new Array(arguments.length -  0);
while (G__29289__i < G__29289__a.length) {G__29289__a[G__29289__i] = arguments[G__29289__i + 0]; ++G__29289__i;}
  args = new cljs.core.IndexedSeq(G__29289__a,0);
} 
return G__29288__delegate.call(this,args);};
G__29288.cljs$lang$maxFixedArity = 0;
G__29288.cljs$lang$applyTo = (function (arglist__29290){
var args = cljs.core.seq(arglist__29290);
return G__29288__delegate(args);
});
G__29288.cljs$core$IFn$_invoke$arity$variadic = G__29288__delegate;
return G__29288;
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
reagent.impl.template.oset = (function reagent$impl$template$oset(o,k,v){
var G__29292 = (((o == null))?({}):o);
(G__29292[k] = v);

return G__29292;
});
reagent.impl.template.oget = (function reagent$impl$template$oget(o,k){
if((o == null)){
return null;
} else {
return (o[k]);
}
});
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(p,id_class){
var id = (id_class["id"]);
var p__$1 = (((cljs.core.some_QMARK_.call(null,id)) && ((reagent.impl.template.oget.call(null,p,"id") == null)))?reagent.impl.template.oset.call(null,p,"id",id):p);
var temp__4659__auto__ = (id_class["className"]);
if((temp__4659__auto__ == null)){
return p__$1;
} else {
var class$ = temp__4659__auto__;
var old = reagent.impl.template.oget.call(null,p__$1,"className");
return reagent.impl.template.oset.call(null,p__$1,"className",(((old == null))?class$:[cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(old)].join('')));
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
return reagent.impl.template.set_id_class.call(null,reagent.impl.template.convert_prop_value.call(null,props),id_class);
});
if(typeof reagent.impl.template.find_dom_node !== 'undefined'){
} else {
reagent.impl.template.find_dom_node = null;
}
reagent.impl.template.input_unmount = (function reagent$impl$template$input_unmount(this$){
return (this$["cljsInputValue"] = null);
});
reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
reagent.impl.template.has_selection_api_QMARK_ = (function reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_.call(null,reagent.impl.template.these_inputs_have_selection_api,input_type);
});
reagent.impl.template.input_set_value = (function reagent$impl$template$input_set_value(this$){
var temp__4661__auto__ = (this$["cljsInputValue"]);
if((temp__4661__auto__ == null)){
return null;
} else {
var value = temp__4661__auto__;
(this$["cljsInputDirty"] = false);

var node = reagent.impl.template.find_dom_node.call(null,this$);
var node_value = (node["value"]);
if(cljs.core.not_EQ_.call(null,value,node_value)){
if(!(((node === (document["activeElement"]))) && (reagent.impl.template.has_selection_api_QMARK_.call(null,(node["type"]))) && (typeof value === 'string') && (typeof node_value === 'string'))){
return (node["value"] = value);
} else {
var existing_offset_from_end = (cljs.core.count.call(null,node_value) - (node["selectionStart"]));
var new_cursor_offset = (cljs.core.count.call(null,value) - existing_offset_from_end);
(node["value"] = value);

(node["selectionStart"] = new_cursor_offset);

return (node["selectionEnd"] = new_cursor_offset);
}
} else {
return null;
}
}
});
reagent.impl.template.input_handle_change = (function reagent$impl$template$input_handle_change(this$,on_change,e){
var res = on_change.call(null,e);
if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

reagent.impl.batching.do_after_render.call(null,((function (res){
return (function (){
return reagent.impl.template.input_set_value.call(null,this$);
});})(res))
);
}

return res;
});
reagent.impl.template.input_render_setup = (function reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__25962__auto__ = cljs.core.some_QMARK_.call(null,reagent.impl.template.find_dom_node);
if(and__25962__auto__){
var and__25962__auto____$1 = cljs.core.some_QMARK_.call(null,jsprops);
if(and__25962__auto____$1){
var and__25962__auto____$2 = (jsprops["hasOwnProperty"])("onChange");
if(cljs.core.truth_(and__25962__auto____$2)){
return (jsprops["hasOwnProperty"])("value");
} else {
return and__25962__auto____$2;
}
} else {
return and__25962__auto____$1;
}
} else {
return and__25962__auto__;
}
})())){
var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
(this$["cljsInputValue"] = value);

delete jsprops["value"];

var G__29295 = jsprops;
(G__29295["defaultValue"] = value);

(G__29295["onChange"] = ((function (G__29295,v,value,on_change){
return (function (p1__29293_SHARP_){
return reagent.impl.template.input_handle_change.call(null,this$,on_change,p1__29293_SHARP_);
});})(G__29295,v,value,on_change))
);

return G__29295;
} else {
return (this$["cljsInputValue"] = null);
}
});
reagent.impl.template.input_component_QMARK_ = (function reagent$impl$template$input_component_QMARK_(x){
var G__29297 = x;
switch (G__29297) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
reagent.impl.template.reagent_input_class = null;
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),reagent.impl.template.input_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup.call(null,this$,jsprops);

return reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child);
})], null);
reagent.impl.template.reagent_input = (function reagent$impl$template$reagent_input(){
if((reagent.impl.template.reagent_input_class == null)){
reagent.impl.template.reagent_input_class = reagent.impl.component.create_class.call(null,reagent.impl.template.input_spec);
} else {
}

return reagent.impl.template.reagent_input_class;
});
reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__29302 = cljs.core.next.call(null,cljs.core.re_matches.call(null,reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__29302,(0),null);
var id = cljs.core.nth.call(null,vec__29302,(1),null);
var class$ = cljs.core.nth.call(null,vec__29302,(2),null);
var class$__$1 = (((class$ == null))?null:clojure.string.replace.call(null,class$,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid tag: '"),cljs.core.str(hiccup_tag),cljs.core.str("'"),cljs.core.str(reagent.impl.component.comp_name.call(null))].join('')),cljs.core.str("\n"),cljs.core.str("tag")].join('')));
}

return ({"name": tag, "id": id, "className": class$__$1});
});
reagent.impl.template.try_get_key = (function reagent$impl$template$try_get_key(x){
try{return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e29306){var e = e29306;
return null;
}});
reagent.impl.template.get_key = (function reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_.call(null,x)){
return reagent.impl.template.try_get_key.call(null,x);
} else {
return null;
}
});
reagent.impl.template.key_from_vec = (function reagent$impl$template$key_from_vec(v){
var temp__4659__auto__ = reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,v));
if((temp__4659__auto__ == null)){
return reagent.impl.template.get_key.call(null,cljs.core.nth.call(null,v,(1),null));
} else {
var k = temp__4659__auto__;
return k;
}
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v){
var c = reagent.impl.component.as_class.call(null,tag);
var jsprops = ({"argv": v});
var temp__4661__auto___29307 = reagent.impl.template.key_from_vec.call(null,v);
if((temp__4661__auto___29307 == null)){
} else {
var key_29308 = temp__4661__auto___29307;
(jsprops["key"] = key_29308);
}

return (reagent.impl.util.react["createElement"])(c,jsprops);
});
reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(c){
var G__29310 = (new reagent.impl.template.NativeWrapper());
(G__29310["name"] = c);

(G__29310["id"] = null);

(G__29310["class"] = null);

return G__29310;
});
reagent.impl.template.tag_name_cache = ({});
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(x){
var temp__4659__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.tag_name_cache,x);
if((temp__4659__auto__ == null)){
return (reagent.impl.template.tag_name_cache[x] = reagent.impl.template.parse_tag.call(null,x));
} else {
var s = temp__4659__auto__;
return s;
}
});
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv,first){
var comp = (parsed["name"]);
var props = cljs.core.nth.call(null,argv,first,null);
var hasprops = ((props == null)) || (cljs.core.map_QMARK_.call(null,props));
var jsprops = reagent.impl.template.convert_props.call(null,((hasprops)?props:null),parsed);
var first_child = (first + ((hasprops)?(1):(0)));
if(reagent.impl.template.input_component_QMARK_.call(null,comp)){
return reagent.impl.template.as_element.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input.call(null),argv,comp,jsprops,first_child], null),cljs.core.meta.call(null,argv)));
} else {
var key = reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,argv));
var p = (((key == null))?jsprops:reagent.impl.template.oset.call(null,jsprops,"key",key));
return reagent.impl.template.make_element.call(null,argv,comp,p,first_child);
}
});
reagent.impl.template.str_coll = (function reagent$impl$template$str_coll(coll){
return [cljs.core.str(clojure.walk.prewalk.call(null,(function (x){
if(cljs.core.fn_QMARK_.call(null,x)){
var n = reagent.impl.util.fun_name.call(null,x);
var G__29312 = n;
switch (G__29312) {
case "":
return x;

break;
default:
return cljs.core.symbol.call(null,n);

}
} else {
return x;
}
}),coll))].join('');

});
reagent.impl.template.hiccup_err = (function reagent$impl$template$hiccup_err(var_args){
var args__27089__auto__ = [];
var len__27082__auto___29316 = arguments.length;
var i__27083__auto___29317 = (0);
while(true){
if((i__27083__auto___29317 < len__27082__auto___29316)){
args__27089__auto__.push((arguments[i__27083__auto___29317]));

var G__29318 = (i__27083__auto___29317 + (1));
i__27083__auto___29317 = G__29318;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((1) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((1)),(0),null)):null);
return reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27090__auto__);
});

reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,msg)),cljs.core.str(": "),cljs.core.str(reagent.impl.template.str_coll.call(null,v)),cljs.core.str("\n"),cljs.core.str(reagent.impl.component.comp_name.call(null))].join('');
});

reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1);

reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq29314){
var G__29315 = cljs.core.first.call(null,seq29314);
var seq29314__$1 = cljs.core.next.call(null,seq29314);
return reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(G__29315,seq29314__$1);
});

reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count.call(null,v) > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,v,"Hiccup form should not be empty")),cljs.core.str("\n"),cljs.core.str("(pos? (count v))")].join('')));
}

var tag = cljs.core.nth.call(null,v,(0),null);
if(reagent.impl.template.valid_tag_QMARK_.call(null,tag)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,v,"Invalid Hiccup form")),cljs.core.str("\n"),cljs.core.str("(valid-tag? tag)")].join('')));
}

if(reagent.impl.template.hiccup_tag_QMARK_.call(null,tag)){
var n = cljs.core.name.call(null,tag);
var pos = n.indexOf(">");
var G__29320 = pos;
switch (G__29320) {
case (-1):
return reagent.impl.template.native_element.call(null,reagent.impl.template.cached_parse.call(null,n),v,(1));

break;
case (0):
var comp = cljs.core.nth.call(null,v,(1),null);
if(cljs.core._EQ_.call(null,">",n)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,v,"Invalid Hiccup tag")),cljs.core.str("\n"),cljs.core.str("(= \">\" n)")].join('')));
}

if((typeof comp === 'string') || (cljs.core.fn_QMARK_.call(null,comp))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,v,"Expected React component in")),cljs.core.str("\n"),cljs.core.str("(or (string? comp) (fn? comp))")].join('')));
}

return reagent.impl.template.native_element.call(null,({"name": comp}),v,(2));

break;
default:
var G__29322 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,n,(0),pos),cljs.core.assoc.call(null,v,(0),cljs.core.subs.call(null,n,(pos + (1))))], null);
v = G__29322;
continue;

}
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element.call(null,tag,v,(1));
} else {
return reagent.impl.template.reag_element.call(null,tag,v);

}
}
break;
}
});
reagent.impl.template.as_element = (function reagent$impl$template$as_element(x){
if(reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return reagent.impl.template.vec_to_elem.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return reagent.impl.template.expand_seq_check.call(null,x);

} else {
if(reagent.impl.template.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.call(null,x);
} else {
return x;

}
}
}
}
}
});
reagent.impl.component.as_element = reagent.impl.template.as_element;
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.call(null,s);
var n__26892__auto___29325 = a.length;
var i_29326 = (0);
while(true){
if((i_29326 < n__26892__auto___29325)){
(a[i_29326] = reagent.impl.template.as_element.call(null,(a[i_29326])));

var G__29327 = (i_29326 + (1));
i_29326 = G__29327;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.call(null,s);
var n__26892__auto___29328 = a.length;
var i_29329 = (0);
while(true){
if((i_29329 < n__26892__auto___29328)){
var val_29330 = (a[i_29329]);
if((cljs.core.vector_QMARK_.call(null,val_29330)) && ((reagent.impl.template.key_from_vec.call(null,val_29330) == null))){
(o["no-key"] = true);
} else {
}

(a[i_29329] = reagent.impl.template.as_element.call(null,val_29330));

var G__29331 = (i_29329 + (1));
i_29329 = G__29331;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var vec__29335 = reagent.ratom.check_derefs.call(null,((function (ctx){
return (function (){
return reagent.impl.template.expand_seq_dev.call(null,x,ctx);
});})(ctx))
);
var res = cljs.core.nth.call(null,vec__29335,(0),null);
var derefed = cljs.core.nth.call(null,vec__29335,(1),null);
if(cljs.core.truth_(derefed)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn([cljs.core.str("Warning: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,x,"Reactive deref not supported in lazy seq, ","it should be wrapped in doall"))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn([cljs.core.str("Warning: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,x,"Every element in a seq should have a unique :key"))].join(''));
} else {
}
} else {
}

return res;
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__29339 = (cljs.core.count.call(null,argv) - first_child);
switch (G__29339) {
case (0):
return (reagent.impl.util.react["createElement"])(comp,jsprops);

break;
case (1):
return (reagent.impl.util.react["createElement"])(comp,jsprops,reagent.impl.template.as_element.call(null,cljs.core.nth.call(null,argv,first_child,null)));

break;
default:
return (reagent.impl.util.react["createElement"]).apply(null,cljs.core.reduce_kv.call(null,((function (G__29339){
return (function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_element.call(null,v));
} else {
}

return a;
});})(G__29339))
,[comp,jsprops],argv));

}
});

//# sourceMappingURL=template.js.map?rel=1480126456914