// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37148){
var map__37173 = p__37148;
var map__37173__$1 = ((((!((map__37173 == null)))?((((map__37173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37173):map__37173);
var m = map__37173__$1;
var n = cljs.core.get.call(null,map__37173__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37173__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37175_37197 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37176_37198 = null;
var count__37177_37199 = (0);
var i__37178_37200 = (0);
while(true){
if((i__37178_37200 < count__37177_37199)){
var f_37201 = cljs.core._nth.call(null,chunk__37176_37198,i__37178_37200);
cljs.core.println.call(null,"  ",f_37201);

var G__37202 = seq__37175_37197;
var G__37203 = chunk__37176_37198;
var G__37204 = count__37177_37199;
var G__37205 = (i__37178_37200 + (1));
seq__37175_37197 = G__37202;
chunk__37176_37198 = G__37203;
count__37177_37199 = G__37204;
i__37178_37200 = G__37205;
continue;
} else {
var temp__4657__auto___37206 = cljs.core.seq.call(null,seq__37175_37197);
if(temp__4657__auto___37206){
var seq__37175_37207__$1 = temp__4657__auto___37206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37175_37207__$1)){
var c__26381__auto___37208 = cljs.core.chunk_first.call(null,seq__37175_37207__$1);
var G__37209 = cljs.core.chunk_rest.call(null,seq__37175_37207__$1);
var G__37210 = c__26381__auto___37208;
var G__37211 = cljs.core.count.call(null,c__26381__auto___37208);
var G__37212 = (0);
seq__37175_37197 = G__37209;
chunk__37176_37198 = G__37210;
count__37177_37199 = G__37211;
i__37178_37200 = G__37212;
continue;
} else {
var f_37213 = cljs.core.first.call(null,seq__37175_37207__$1);
cljs.core.println.call(null,"  ",f_37213);

var G__37214 = cljs.core.next.call(null,seq__37175_37207__$1);
var G__37215 = null;
var G__37216 = (0);
var G__37217 = (0);
seq__37175_37197 = G__37214;
chunk__37176_37198 = G__37215;
count__37177_37199 = G__37216;
i__37178_37200 = G__37217;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37218 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25570__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25570__auto__)){
return or__25570__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37218);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37218)))?cljs.core.second.call(null,arglists_37218):arglists_37218));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37179_37219 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37180_37220 = null;
var count__37181_37221 = (0);
var i__37182_37222 = (0);
while(true){
if((i__37182_37222 < count__37181_37221)){
var vec__37183_37223 = cljs.core._nth.call(null,chunk__37180_37220,i__37182_37222);
var name_37224 = cljs.core.nth.call(null,vec__37183_37223,(0),null);
var map__37186_37225 = cljs.core.nth.call(null,vec__37183_37223,(1),null);
var map__37186_37226__$1 = ((((!((map__37186_37225 == null)))?((((map__37186_37225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37186_37225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37186_37225):map__37186_37225);
var doc_37227 = cljs.core.get.call(null,map__37186_37226__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37228 = cljs.core.get.call(null,map__37186_37226__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37224);

cljs.core.println.call(null," ",arglists_37228);

if(cljs.core.truth_(doc_37227)){
cljs.core.println.call(null," ",doc_37227);
} else {
}

var G__37229 = seq__37179_37219;
var G__37230 = chunk__37180_37220;
var G__37231 = count__37181_37221;
var G__37232 = (i__37182_37222 + (1));
seq__37179_37219 = G__37229;
chunk__37180_37220 = G__37230;
count__37181_37221 = G__37231;
i__37182_37222 = G__37232;
continue;
} else {
var temp__4657__auto___37233 = cljs.core.seq.call(null,seq__37179_37219);
if(temp__4657__auto___37233){
var seq__37179_37234__$1 = temp__4657__auto___37233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37179_37234__$1)){
var c__26381__auto___37235 = cljs.core.chunk_first.call(null,seq__37179_37234__$1);
var G__37236 = cljs.core.chunk_rest.call(null,seq__37179_37234__$1);
var G__37237 = c__26381__auto___37235;
var G__37238 = cljs.core.count.call(null,c__26381__auto___37235);
var G__37239 = (0);
seq__37179_37219 = G__37236;
chunk__37180_37220 = G__37237;
count__37181_37221 = G__37238;
i__37182_37222 = G__37239;
continue;
} else {
var vec__37188_37240 = cljs.core.first.call(null,seq__37179_37234__$1);
var name_37241 = cljs.core.nth.call(null,vec__37188_37240,(0),null);
var map__37191_37242 = cljs.core.nth.call(null,vec__37188_37240,(1),null);
var map__37191_37243__$1 = ((((!((map__37191_37242 == null)))?((((map__37191_37242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37191_37242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37191_37242):map__37191_37242);
var doc_37244 = cljs.core.get.call(null,map__37191_37243__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37245 = cljs.core.get.call(null,map__37191_37243__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37241);

cljs.core.println.call(null," ",arglists_37245);

if(cljs.core.truth_(doc_37244)){
cljs.core.println.call(null," ",doc_37244);
} else {
}

var G__37246 = cljs.core.next.call(null,seq__37179_37234__$1);
var G__37247 = null;
var G__37248 = (0);
var G__37249 = (0);
seq__37179_37219 = G__37246;
chunk__37180_37220 = G__37247;
count__37181_37221 = G__37248;
i__37182_37222 = G__37249;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__37193 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37194 = null;
var count__37195 = (0);
var i__37196 = (0);
while(true){
if((i__37196 < count__37195)){
var role = cljs.core._nth.call(null,chunk__37194,i__37196);
var temp__4657__auto___37250__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37250__$1)){
var spec_37251 = temp__4657__auto___37250__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37251));
} else {
}

var G__37252 = seq__37193;
var G__37253 = chunk__37194;
var G__37254 = count__37195;
var G__37255 = (i__37196 + (1));
seq__37193 = G__37252;
chunk__37194 = G__37253;
count__37195 = G__37254;
i__37196 = G__37255;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37193);
if(temp__4657__auto____$1){
var seq__37193__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37193__$1)){
var c__26381__auto__ = cljs.core.chunk_first.call(null,seq__37193__$1);
var G__37256 = cljs.core.chunk_rest.call(null,seq__37193__$1);
var G__37257 = c__26381__auto__;
var G__37258 = cljs.core.count.call(null,c__26381__auto__);
var G__37259 = (0);
seq__37193 = G__37256;
chunk__37194 = G__37257;
count__37195 = G__37258;
i__37196 = G__37259;
continue;
} else {
var role = cljs.core.first.call(null,seq__37193__$1);
var temp__4657__auto___37260__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37260__$2)){
var spec_37261 = temp__4657__auto___37260__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37261));
} else {
}

var G__37262 = cljs.core.next.call(null,seq__37193__$1);
var G__37263 = null;
var G__37264 = (0);
var G__37265 = (0);
seq__37193 = G__37262;
chunk__37194 = G__37263;
count__37195 = G__37264;
i__37196 = G__37265;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1476657533475