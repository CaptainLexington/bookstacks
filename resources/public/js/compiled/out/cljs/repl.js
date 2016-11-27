// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37285){
var map__37310 = p__37285;
var map__37310__$1 = ((((!((map__37310 == null)))?((((map__37310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37310):map__37310);
var m = map__37310__$1;
var n = cljs.core.get.call(null,map__37310__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37310__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37312_37334 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37313_37335 = null;
var count__37314_37336 = (0);
var i__37315_37337 = (0);
while(true){
if((i__37315_37337 < count__37314_37336)){
var f_37338 = cljs.core._nth.call(null,chunk__37313_37335,i__37315_37337);
cljs.core.println.call(null,"  ",f_37338);

var G__37339 = seq__37312_37334;
var G__37340 = chunk__37313_37335;
var G__37341 = count__37314_37336;
var G__37342 = (i__37315_37337 + (1));
seq__37312_37334 = G__37339;
chunk__37313_37335 = G__37340;
count__37314_37336 = G__37341;
i__37315_37337 = G__37342;
continue;
} else {
var temp__4657__auto___37343 = cljs.core.seq.call(null,seq__37312_37334);
if(temp__4657__auto___37343){
var seq__37312_37344__$1 = temp__4657__auto___37343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37312_37344__$1)){
var c__26788__auto___37345 = cljs.core.chunk_first.call(null,seq__37312_37344__$1);
var G__37346 = cljs.core.chunk_rest.call(null,seq__37312_37344__$1);
var G__37347 = c__26788__auto___37345;
var G__37348 = cljs.core.count.call(null,c__26788__auto___37345);
var G__37349 = (0);
seq__37312_37334 = G__37346;
chunk__37313_37335 = G__37347;
count__37314_37336 = G__37348;
i__37315_37337 = G__37349;
continue;
} else {
var f_37350 = cljs.core.first.call(null,seq__37312_37344__$1);
cljs.core.println.call(null,"  ",f_37350);

var G__37351 = cljs.core.next.call(null,seq__37312_37344__$1);
var G__37352 = null;
var G__37353 = (0);
var G__37354 = (0);
seq__37312_37334 = G__37351;
chunk__37313_37335 = G__37352;
count__37314_37336 = G__37353;
i__37315_37337 = G__37354;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37355 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25974__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37355);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37355)))?cljs.core.second.call(null,arglists_37355):arglists_37355));
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
var seq__37316_37356 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37317_37357 = null;
var count__37318_37358 = (0);
var i__37319_37359 = (0);
while(true){
if((i__37319_37359 < count__37318_37358)){
var vec__37320_37360 = cljs.core._nth.call(null,chunk__37317_37357,i__37319_37359);
var name_37361 = cljs.core.nth.call(null,vec__37320_37360,(0),null);
var map__37323_37362 = cljs.core.nth.call(null,vec__37320_37360,(1),null);
var map__37323_37363__$1 = ((((!((map__37323_37362 == null)))?((((map__37323_37362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37323_37362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37323_37362):map__37323_37362);
var doc_37364 = cljs.core.get.call(null,map__37323_37363__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37365 = cljs.core.get.call(null,map__37323_37363__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37361);

cljs.core.println.call(null," ",arglists_37365);

if(cljs.core.truth_(doc_37364)){
cljs.core.println.call(null," ",doc_37364);
} else {
}

var G__37366 = seq__37316_37356;
var G__37367 = chunk__37317_37357;
var G__37368 = count__37318_37358;
var G__37369 = (i__37319_37359 + (1));
seq__37316_37356 = G__37366;
chunk__37317_37357 = G__37367;
count__37318_37358 = G__37368;
i__37319_37359 = G__37369;
continue;
} else {
var temp__4657__auto___37370 = cljs.core.seq.call(null,seq__37316_37356);
if(temp__4657__auto___37370){
var seq__37316_37371__$1 = temp__4657__auto___37370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37316_37371__$1)){
var c__26788__auto___37372 = cljs.core.chunk_first.call(null,seq__37316_37371__$1);
var G__37373 = cljs.core.chunk_rest.call(null,seq__37316_37371__$1);
var G__37374 = c__26788__auto___37372;
var G__37375 = cljs.core.count.call(null,c__26788__auto___37372);
var G__37376 = (0);
seq__37316_37356 = G__37373;
chunk__37317_37357 = G__37374;
count__37318_37358 = G__37375;
i__37319_37359 = G__37376;
continue;
} else {
var vec__37325_37377 = cljs.core.first.call(null,seq__37316_37371__$1);
var name_37378 = cljs.core.nth.call(null,vec__37325_37377,(0),null);
var map__37328_37379 = cljs.core.nth.call(null,vec__37325_37377,(1),null);
var map__37328_37380__$1 = ((((!((map__37328_37379 == null)))?((((map__37328_37379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37328_37379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37328_37379):map__37328_37379);
var doc_37381 = cljs.core.get.call(null,map__37328_37380__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37382 = cljs.core.get.call(null,map__37328_37380__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37378);

cljs.core.println.call(null," ",arglists_37382);

if(cljs.core.truth_(doc_37381)){
cljs.core.println.call(null," ",doc_37381);
} else {
}

var G__37383 = cljs.core.next.call(null,seq__37316_37371__$1);
var G__37384 = null;
var G__37385 = (0);
var G__37386 = (0);
seq__37316_37356 = G__37383;
chunk__37317_37357 = G__37384;
count__37318_37358 = G__37385;
i__37319_37359 = G__37386;
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

var seq__37330 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37331 = null;
var count__37332 = (0);
var i__37333 = (0);
while(true){
if((i__37333 < count__37332)){
var role = cljs.core._nth.call(null,chunk__37331,i__37333);
var temp__4657__auto___37387__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37387__$1)){
var spec_37388 = temp__4657__auto___37387__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37388));
} else {
}

var G__37389 = seq__37330;
var G__37390 = chunk__37331;
var G__37391 = count__37332;
var G__37392 = (i__37333 + (1));
seq__37330 = G__37389;
chunk__37331 = G__37390;
count__37332 = G__37391;
i__37333 = G__37392;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37330);
if(temp__4657__auto____$1){
var seq__37330__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37330__$1)){
var c__26788__auto__ = cljs.core.chunk_first.call(null,seq__37330__$1);
var G__37393 = cljs.core.chunk_rest.call(null,seq__37330__$1);
var G__37394 = c__26788__auto__;
var G__37395 = cljs.core.count.call(null,c__26788__auto__);
var G__37396 = (0);
seq__37330 = G__37393;
chunk__37331 = G__37394;
count__37332 = G__37395;
i__37333 = G__37396;
continue;
} else {
var role = cljs.core.first.call(null,seq__37330__$1);
var temp__4657__auto___37397__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37397__$2)){
var spec_37398 = temp__4657__auto___37397__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37398));
} else {
}

var G__37399 = cljs.core.next.call(null,seq__37330__$1);
var G__37400 = null;
var G__37401 = (0);
var G__37402 = (0);
seq__37330 = G__37399;
chunk__37331 = G__37400;
count__37332 = G__37401;
i__37333 = G__37402;
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

//# sourceMappingURL=repl.js.map?rel=1480126468298