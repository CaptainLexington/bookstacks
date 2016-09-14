// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32941){
var map__32966 = p__32941;
var map__32966__$1 = ((((!((map__32966 == null)))?((((map__32966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32966):map__32966);
var m = map__32966__$1;
var n = cljs.core.get.call(null,map__32966__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32966__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__32968_32990 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32969_32991 = null;
var count__32970_32992 = (0);
var i__32971_32993 = (0);
while(true){
if((i__32971_32993 < count__32970_32992)){
var f_32994 = cljs.core._nth.call(null,chunk__32969_32991,i__32971_32993);
cljs.core.println.call(null,"  ",f_32994);

var G__32995 = seq__32968_32990;
var G__32996 = chunk__32969_32991;
var G__32997 = count__32970_32992;
var G__32998 = (i__32971_32993 + (1));
seq__32968_32990 = G__32995;
chunk__32969_32991 = G__32996;
count__32970_32992 = G__32997;
i__32971_32993 = G__32998;
continue;
} else {
var temp__4657__auto___32999 = cljs.core.seq.call(null,seq__32968_32990);
if(temp__4657__auto___32999){
var seq__32968_33000__$1 = temp__4657__auto___32999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32968_33000__$1)){
var c__23389__auto___33001 = cljs.core.chunk_first.call(null,seq__32968_33000__$1);
var G__33002 = cljs.core.chunk_rest.call(null,seq__32968_33000__$1);
var G__33003 = c__23389__auto___33001;
var G__33004 = cljs.core.count.call(null,c__23389__auto___33001);
var G__33005 = (0);
seq__32968_32990 = G__33002;
chunk__32969_32991 = G__33003;
count__32970_32992 = G__33004;
i__32971_32993 = G__33005;
continue;
} else {
var f_33006 = cljs.core.first.call(null,seq__32968_33000__$1);
cljs.core.println.call(null,"  ",f_33006);

var G__33007 = cljs.core.next.call(null,seq__32968_33000__$1);
var G__33008 = null;
var G__33009 = (0);
var G__33010 = (0);
seq__32968_32990 = G__33007;
chunk__32969_32991 = G__33008;
count__32970_32992 = G__33009;
i__32971_32993 = G__33010;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33011 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__22578__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__22578__auto__)){
return or__22578__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33011);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33011)))?cljs.core.second.call(null,arglists_33011):arglists_33011));
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
var seq__32972_33012 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32973_33013 = null;
var count__32974_33014 = (0);
var i__32975_33015 = (0);
while(true){
if((i__32975_33015 < count__32974_33014)){
var vec__32976_33016 = cljs.core._nth.call(null,chunk__32973_33013,i__32975_33015);
var name_33017 = cljs.core.nth.call(null,vec__32976_33016,(0),null);
var map__32979_33018 = cljs.core.nth.call(null,vec__32976_33016,(1),null);
var map__32979_33019__$1 = ((((!((map__32979_33018 == null)))?((((map__32979_33018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32979_33018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32979_33018):map__32979_33018);
var doc_33020 = cljs.core.get.call(null,map__32979_33019__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33021 = cljs.core.get.call(null,map__32979_33019__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33017);

cljs.core.println.call(null," ",arglists_33021);

if(cljs.core.truth_(doc_33020)){
cljs.core.println.call(null," ",doc_33020);
} else {
}

var G__33022 = seq__32972_33012;
var G__33023 = chunk__32973_33013;
var G__33024 = count__32974_33014;
var G__33025 = (i__32975_33015 + (1));
seq__32972_33012 = G__33022;
chunk__32973_33013 = G__33023;
count__32974_33014 = G__33024;
i__32975_33015 = G__33025;
continue;
} else {
var temp__4657__auto___33026 = cljs.core.seq.call(null,seq__32972_33012);
if(temp__4657__auto___33026){
var seq__32972_33027__$1 = temp__4657__auto___33026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32972_33027__$1)){
var c__23389__auto___33028 = cljs.core.chunk_first.call(null,seq__32972_33027__$1);
var G__33029 = cljs.core.chunk_rest.call(null,seq__32972_33027__$1);
var G__33030 = c__23389__auto___33028;
var G__33031 = cljs.core.count.call(null,c__23389__auto___33028);
var G__33032 = (0);
seq__32972_33012 = G__33029;
chunk__32973_33013 = G__33030;
count__32974_33014 = G__33031;
i__32975_33015 = G__33032;
continue;
} else {
var vec__32981_33033 = cljs.core.first.call(null,seq__32972_33027__$1);
var name_33034 = cljs.core.nth.call(null,vec__32981_33033,(0),null);
var map__32984_33035 = cljs.core.nth.call(null,vec__32981_33033,(1),null);
var map__32984_33036__$1 = ((((!((map__32984_33035 == null)))?((((map__32984_33035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32984_33035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32984_33035):map__32984_33035);
var doc_33037 = cljs.core.get.call(null,map__32984_33036__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33038 = cljs.core.get.call(null,map__32984_33036__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33034);

cljs.core.println.call(null," ",arglists_33038);

if(cljs.core.truth_(doc_33037)){
cljs.core.println.call(null," ",doc_33037);
} else {
}

var G__33039 = cljs.core.next.call(null,seq__32972_33027__$1);
var G__33040 = null;
var G__33041 = (0);
var G__33042 = (0);
seq__32972_33012 = G__33039;
chunk__32973_33013 = G__33040;
count__32974_33014 = G__33041;
i__32975_33015 = G__33042;
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

var seq__32986 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32987 = null;
var count__32988 = (0);
var i__32989 = (0);
while(true){
if((i__32989 < count__32988)){
var role = cljs.core._nth.call(null,chunk__32987,i__32989);
var temp__4657__auto___33043__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33043__$1)){
var spec_33044 = temp__4657__auto___33043__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33044));
} else {
}

var G__33045 = seq__32986;
var G__33046 = chunk__32987;
var G__33047 = count__32988;
var G__33048 = (i__32989 + (1));
seq__32986 = G__33045;
chunk__32987 = G__33046;
count__32988 = G__33047;
i__32989 = G__33048;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32986);
if(temp__4657__auto____$1){
var seq__32986__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32986__$1)){
var c__23389__auto__ = cljs.core.chunk_first.call(null,seq__32986__$1);
var G__33049 = cljs.core.chunk_rest.call(null,seq__32986__$1);
var G__33050 = c__23389__auto__;
var G__33051 = cljs.core.count.call(null,c__23389__auto__);
var G__33052 = (0);
seq__32986 = G__33049;
chunk__32987 = G__33050;
count__32988 = G__33051;
i__32989 = G__33052;
continue;
} else {
var role = cljs.core.first.call(null,seq__32986__$1);
var temp__4657__auto___33053__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33053__$2)){
var spec_33054 = temp__4657__auto___33053__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33054));
} else {
}

var G__33055 = cljs.core.next.call(null,seq__32986__$1);
var G__33056 = null;
var G__33057 = (0);
var G__33058 = (0);
seq__32986 = G__33055;
chunk__32987 = G__33056;
count__32988 = G__33057;
i__32989 = G__33058;
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

//# sourceMappingURL=repl.js.map?rel=1473455236344