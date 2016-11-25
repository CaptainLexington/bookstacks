// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37132){
var map__37157 = p__37132;
var map__37157__$1 = ((((!((map__37157 == null)))?((((map__37157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37157):map__37157);
var m = map__37157__$1;
var n = cljs.core.get.call(null,map__37157__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37157__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37159_37181 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37160_37182 = null;
var count__37161_37183 = (0);
var i__37162_37184 = (0);
while(true){
if((i__37162_37184 < count__37161_37183)){
var f_37185 = cljs.core._nth.call(null,chunk__37160_37182,i__37162_37184);
cljs.core.println.call(null,"  ",f_37185);

var G__37186 = seq__37159_37181;
var G__37187 = chunk__37160_37182;
var G__37188 = count__37161_37183;
var G__37189 = (i__37162_37184 + (1));
seq__37159_37181 = G__37186;
chunk__37160_37182 = G__37187;
count__37161_37183 = G__37188;
i__37162_37184 = G__37189;
continue;
} else {
var temp__4657__auto___37190 = cljs.core.seq.call(null,seq__37159_37181);
if(temp__4657__auto___37190){
var seq__37159_37191__$1 = temp__4657__auto___37190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37159_37191__$1)){
var c__26387__auto___37192 = cljs.core.chunk_first.call(null,seq__37159_37191__$1);
var G__37193 = cljs.core.chunk_rest.call(null,seq__37159_37191__$1);
var G__37194 = c__26387__auto___37192;
var G__37195 = cljs.core.count.call(null,c__26387__auto___37192);
var G__37196 = (0);
seq__37159_37181 = G__37193;
chunk__37160_37182 = G__37194;
count__37161_37183 = G__37195;
i__37162_37184 = G__37196;
continue;
} else {
var f_37197 = cljs.core.first.call(null,seq__37159_37191__$1);
cljs.core.println.call(null,"  ",f_37197);

var G__37198 = cljs.core.next.call(null,seq__37159_37191__$1);
var G__37199 = null;
var G__37200 = (0);
var G__37201 = (0);
seq__37159_37181 = G__37198;
chunk__37160_37182 = G__37199;
count__37161_37183 = G__37200;
i__37162_37184 = G__37201;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37202 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25576__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25576__auto__)){
return or__25576__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37202);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37202)))?cljs.core.second.call(null,arglists_37202):arglists_37202));
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
var seq__37163_37203 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37164_37204 = null;
var count__37165_37205 = (0);
var i__37166_37206 = (0);
while(true){
if((i__37166_37206 < count__37165_37205)){
var vec__37167_37207 = cljs.core._nth.call(null,chunk__37164_37204,i__37166_37206);
var name_37208 = cljs.core.nth.call(null,vec__37167_37207,(0),null);
var map__37170_37209 = cljs.core.nth.call(null,vec__37167_37207,(1),null);
var map__37170_37210__$1 = ((((!((map__37170_37209 == null)))?((((map__37170_37209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37170_37209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37170_37209):map__37170_37209);
var doc_37211 = cljs.core.get.call(null,map__37170_37210__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37212 = cljs.core.get.call(null,map__37170_37210__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37208);

cljs.core.println.call(null," ",arglists_37212);

if(cljs.core.truth_(doc_37211)){
cljs.core.println.call(null," ",doc_37211);
} else {
}

var G__37213 = seq__37163_37203;
var G__37214 = chunk__37164_37204;
var G__37215 = count__37165_37205;
var G__37216 = (i__37166_37206 + (1));
seq__37163_37203 = G__37213;
chunk__37164_37204 = G__37214;
count__37165_37205 = G__37215;
i__37166_37206 = G__37216;
continue;
} else {
var temp__4657__auto___37217 = cljs.core.seq.call(null,seq__37163_37203);
if(temp__4657__auto___37217){
var seq__37163_37218__$1 = temp__4657__auto___37217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37163_37218__$1)){
var c__26387__auto___37219 = cljs.core.chunk_first.call(null,seq__37163_37218__$1);
var G__37220 = cljs.core.chunk_rest.call(null,seq__37163_37218__$1);
var G__37221 = c__26387__auto___37219;
var G__37222 = cljs.core.count.call(null,c__26387__auto___37219);
var G__37223 = (0);
seq__37163_37203 = G__37220;
chunk__37164_37204 = G__37221;
count__37165_37205 = G__37222;
i__37166_37206 = G__37223;
continue;
} else {
var vec__37172_37224 = cljs.core.first.call(null,seq__37163_37218__$1);
var name_37225 = cljs.core.nth.call(null,vec__37172_37224,(0),null);
var map__37175_37226 = cljs.core.nth.call(null,vec__37172_37224,(1),null);
var map__37175_37227__$1 = ((((!((map__37175_37226 == null)))?((((map__37175_37226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37175_37226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37175_37226):map__37175_37226);
var doc_37228 = cljs.core.get.call(null,map__37175_37227__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37229 = cljs.core.get.call(null,map__37175_37227__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37225);

cljs.core.println.call(null," ",arglists_37229);

if(cljs.core.truth_(doc_37228)){
cljs.core.println.call(null," ",doc_37228);
} else {
}

var G__37230 = cljs.core.next.call(null,seq__37163_37218__$1);
var G__37231 = null;
var G__37232 = (0);
var G__37233 = (0);
seq__37163_37203 = G__37230;
chunk__37164_37204 = G__37231;
count__37165_37205 = G__37232;
i__37166_37206 = G__37233;
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

var seq__37177 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37178 = null;
var count__37179 = (0);
var i__37180 = (0);
while(true){
if((i__37180 < count__37179)){
var role = cljs.core._nth.call(null,chunk__37178,i__37180);
var temp__4657__auto___37234__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37234__$1)){
var spec_37235 = temp__4657__auto___37234__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37235));
} else {
}

var G__37236 = seq__37177;
var G__37237 = chunk__37178;
var G__37238 = count__37179;
var G__37239 = (i__37180 + (1));
seq__37177 = G__37236;
chunk__37178 = G__37237;
count__37179 = G__37238;
i__37180 = G__37239;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37177);
if(temp__4657__auto____$1){
var seq__37177__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37177__$1)){
var c__26387__auto__ = cljs.core.chunk_first.call(null,seq__37177__$1);
var G__37240 = cljs.core.chunk_rest.call(null,seq__37177__$1);
var G__37241 = c__26387__auto__;
var G__37242 = cljs.core.count.call(null,c__26387__auto__);
var G__37243 = (0);
seq__37177 = G__37240;
chunk__37178 = G__37241;
count__37179 = G__37242;
i__37180 = G__37243;
continue;
} else {
var role = cljs.core.first.call(null,seq__37177__$1);
var temp__4657__auto___37244__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37244__$2)){
var spec_37245 = temp__4657__auto___37244__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37245));
} else {
}

var G__37246 = cljs.core.next.call(null,seq__37177__$1);
var G__37247 = null;
var G__37248 = (0);
var G__37249 = (0);
seq__37177 = G__37246;
chunk__37178 = G__37247;
count__37179 = G__37248;
i__37180 = G__37249;
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

//# sourceMappingURL=repl.js.map?rel=1480029286467