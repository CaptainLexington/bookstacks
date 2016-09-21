// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32970){
var map__32995 = p__32970;
var map__32995__$1 = ((((!((map__32995 == null)))?((((map__32995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32995):map__32995);
var m = map__32995__$1;
var n = cljs.core.get.call(null,map__32995__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32995__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__32997_33019 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32998_33020 = null;
var count__32999_33021 = (0);
var i__33000_33022 = (0);
while(true){
if((i__33000_33022 < count__32999_33021)){
var f_33023 = cljs.core._nth.call(null,chunk__32998_33020,i__33000_33022);
cljs.core.println.call(null,"  ",f_33023);

var G__33024 = seq__32997_33019;
var G__33025 = chunk__32998_33020;
var G__33026 = count__32999_33021;
var G__33027 = (i__33000_33022 + (1));
seq__32997_33019 = G__33024;
chunk__32998_33020 = G__33025;
count__32999_33021 = G__33026;
i__33000_33022 = G__33027;
continue;
} else {
var temp__4657__auto___33028 = cljs.core.seq.call(null,seq__32997_33019);
if(temp__4657__auto___33028){
var seq__32997_33029__$1 = temp__4657__auto___33028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32997_33029__$1)){
var c__23389__auto___33030 = cljs.core.chunk_first.call(null,seq__32997_33029__$1);
var G__33031 = cljs.core.chunk_rest.call(null,seq__32997_33029__$1);
var G__33032 = c__23389__auto___33030;
var G__33033 = cljs.core.count.call(null,c__23389__auto___33030);
var G__33034 = (0);
seq__32997_33019 = G__33031;
chunk__32998_33020 = G__33032;
count__32999_33021 = G__33033;
i__33000_33022 = G__33034;
continue;
} else {
var f_33035 = cljs.core.first.call(null,seq__32997_33029__$1);
cljs.core.println.call(null,"  ",f_33035);

var G__33036 = cljs.core.next.call(null,seq__32997_33029__$1);
var G__33037 = null;
var G__33038 = (0);
var G__33039 = (0);
seq__32997_33019 = G__33036;
chunk__32998_33020 = G__33037;
count__32999_33021 = G__33038;
i__33000_33022 = G__33039;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33040 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__22578__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__22578__auto__)){
return or__22578__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33040);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33040)))?cljs.core.second.call(null,arglists_33040):arglists_33040));
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
var seq__33001_33041 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33002_33042 = null;
var count__33003_33043 = (0);
var i__33004_33044 = (0);
while(true){
if((i__33004_33044 < count__33003_33043)){
var vec__33005_33045 = cljs.core._nth.call(null,chunk__33002_33042,i__33004_33044);
var name_33046 = cljs.core.nth.call(null,vec__33005_33045,(0),null);
var map__33008_33047 = cljs.core.nth.call(null,vec__33005_33045,(1),null);
var map__33008_33048__$1 = ((((!((map__33008_33047 == null)))?((((map__33008_33047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33008_33047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33008_33047):map__33008_33047);
var doc_33049 = cljs.core.get.call(null,map__33008_33048__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33050 = cljs.core.get.call(null,map__33008_33048__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33046);

cljs.core.println.call(null," ",arglists_33050);

if(cljs.core.truth_(doc_33049)){
cljs.core.println.call(null," ",doc_33049);
} else {
}

var G__33051 = seq__33001_33041;
var G__33052 = chunk__33002_33042;
var G__33053 = count__33003_33043;
var G__33054 = (i__33004_33044 + (1));
seq__33001_33041 = G__33051;
chunk__33002_33042 = G__33052;
count__33003_33043 = G__33053;
i__33004_33044 = G__33054;
continue;
} else {
var temp__4657__auto___33055 = cljs.core.seq.call(null,seq__33001_33041);
if(temp__4657__auto___33055){
var seq__33001_33056__$1 = temp__4657__auto___33055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33001_33056__$1)){
var c__23389__auto___33057 = cljs.core.chunk_first.call(null,seq__33001_33056__$1);
var G__33058 = cljs.core.chunk_rest.call(null,seq__33001_33056__$1);
var G__33059 = c__23389__auto___33057;
var G__33060 = cljs.core.count.call(null,c__23389__auto___33057);
var G__33061 = (0);
seq__33001_33041 = G__33058;
chunk__33002_33042 = G__33059;
count__33003_33043 = G__33060;
i__33004_33044 = G__33061;
continue;
} else {
var vec__33010_33062 = cljs.core.first.call(null,seq__33001_33056__$1);
var name_33063 = cljs.core.nth.call(null,vec__33010_33062,(0),null);
var map__33013_33064 = cljs.core.nth.call(null,vec__33010_33062,(1),null);
var map__33013_33065__$1 = ((((!((map__33013_33064 == null)))?((((map__33013_33064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33013_33064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33013_33064):map__33013_33064);
var doc_33066 = cljs.core.get.call(null,map__33013_33065__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33067 = cljs.core.get.call(null,map__33013_33065__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33063);

cljs.core.println.call(null," ",arglists_33067);

if(cljs.core.truth_(doc_33066)){
cljs.core.println.call(null," ",doc_33066);
} else {
}

var G__33068 = cljs.core.next.call(null,seq__33001_33056__$1);
var G__33069 = null;
var G__33070 = (0);
var G__33071 = (0);
seq__33001_33041 = G__33068;
chunk__33002_33042 = G__33069;
count__33003_33043 = G__33070;
i__33004_33044 = G__33071;
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

var seq__33015 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33016 = null;
var count__33017 = (0);
var i__33018 = (0);
while(true){
if((i__33018 < count__33017)){
var role = cljs.core._nth.call(null,chunk__33016,i__33018);
var temp__4657__auto___33072__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33072__$1)){
var spec_33073 = temp__4657__auto___33072__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33073));
} else {
}

var G__33074 = seq__33015;
var G__33075 = chunk__33016;
var G__33076 = count__33017;
var G__33077 = (i__33018 + (1));
seq__33015 = G__33074;
chunk__33016 = G__33075;
count__33017 = G__33076;
i__33018 = G__33077;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__33015);
if(temp__4657__auto____$1){
var seq__33015__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33015__$1)){
var c__23389__auto__ = cljs.core.chunk_first.call(null,seq__33015__$1);
var G__33078 = cljs.core.chunk_rest.call(null,seq__33015__$1);
var G__33079 = c__23389__auto__;
var G__33080 = cljs.core.count.call(null,c__23389__auto__);
var G__33081 = (0);
seq__33015 = G__33078;
chunk__33016 = G__33079;
count__33017 = G__33080;
i__33018 = G__33081;
continue;
} else {
var role = cljs.core.first.call(null,seq__33015__$1);
var temp__4657__auto___33082__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33082__$2)){
var spec_33083 = temp__4657__auto___33082__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33083));
} else {
}

var G__33084 = cljs.core.next.call(null,seq__33015__$1);
var G__33085 = null;
var G__33086 = (0);
var G__33087 = (0);
seq__33015 = G__33084;
chunk__33016 = G__33085;
count__33017 = G__33086;
i__33018 = G__33087;
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

//# sourceMappingURL=repl.js.map?rel=1474484611276