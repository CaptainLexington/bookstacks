// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('clojure.string');
goog.require('goog.date.Interval');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * **Note:** Equality in goog.date.* (and also with plain
 * javascript dates) is not the same as in Joda/clj-time. Two date
 * objects representing the same instant in time in goog.date.* are not
 * equal.
 * 
 * If you need to test for equality use either `cljs-time.core/=`, or
 * optionally you can require the `cljs-time.extend` namespace which will
 * extend the goog.date.* datatypes, so that clojure.core/= works as
 * expected.
 */
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

/**
 * Interface for various date time functions
 * @interface
 */
cljs_time.core.DateTimeProtocol = function(){};

/**
 * Return the year component of the given date/time.
 */
cljs_time.core.year = (function cljs_time$core$year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.year[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.year["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.year",this$);
}
}
}
});

/**
 * Return the month component of the given date/time.
 */
cljs_time.core.month = (function cljs_time$core$month(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$month$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.month[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.month["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.month",this$);
}
}
}
});

/**
 * Return the day of month component of the given date/time.
 */
cljs_time.core.day = (function cljs_time$core$day(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.day[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.day["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day",this$);
}
}
}
});

/**
 * Return the day of week component of the given date/time. Monday is 1 and Sunday is 7
 */
cljs_time.core.day_of_week = (function cljs_time$core$day_of_week(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day-of-week",this$);
}
}
}
});

/**
 * Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.
 */
cljs_time.core.hour = (function cljs_time$core$hour(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$hour$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.hour[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.hour["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.hour",this$);
}
}
}
});

/**
 * Return the minute of hour component of the given date/time.
 */
cljs_time.core.minute = (function cljs_time$core$minute(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minute$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.minute[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.minute["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minute",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.sec = (function cljs_time$core$sec(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$sec$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.sec[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.sec["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.sec",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.second = (function cljs_time$core$second(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$second$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.second[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.second["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.second",this$);
}
}
}
});

/**
 * Return the millisecond of second component of the given date/time.
 */
cljs_time.core.milli = (function cljs_time$core$milli(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$milli$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.milli[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.milli["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.milli",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly equal to date/time 'that'.
 */
cljs_time.core.equal_QMARK_ = (function cljs_time$core$equal_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2(this$,that);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.equal_QMARK_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$,that);
} else {
var m__26638__auto____$1 = (cljs_time.core.equal_QMARK_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.equal?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly after date/time 'that'.
 */
cljs_time.core.after_QMARK_ = (function cljs_time$core$after_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$,that);
} else {
var m__26638__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.after?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly before date/time 'that'.
 */
cljs_time.core.before_QMARK_ = (function cljs_time$core$before_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$,that);
} else {
var m__26638__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.before?",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).
 */
cljs_time.core.plus_ = (function cljs_time$core$plus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$plus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.plus_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$,period);
} else {
var m__26638__auto____$1 = (cljs_time.core.plus_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.plus-",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).
 */
cljs_time.core.minus_ = (function cljs_time$core$minus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.minus_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$,period);
} else {
var m__26638__auto____$1 = (cljs_time.core.minus_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minus-",this$);
}
}
}
});

/**
 * Returns the first day of the month
 */
cljs_time.core.first_day_of_the_month_ = (function cljs_time$core$first_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.first_day_of_the_month_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.first-day-of-the-month-",this$);
}
}
}
});

/**
 * Returns the last day of the month
 */
cljs_time.core.last_day_of_the_month_ = (function cljs_time$core$last_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.last_day_of_the_month_[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.last-day-of-the-month-",this$);
}
}
}
});


/**
 * Interface for in-<time unit> functions
 * @interface
 */
cljs_time.core.InTimeUnitProtocol = function(){};

/**
 * Return the time in milliseconds.
 */
cljs_time.core.in_millis = (function cljs_time$core$in_millis(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.in_millis[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.in_millis["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-millis",this$);
}
}
}
});

/**
 * Return the time in seconds.
 */
cljs_time.core.in_seconds = (function cljs_time$core$in_seconds(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.in_seconds[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.in_seconds["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-seconds",this$);
}
}
}
});

/**
 * Return the time in minutes.
 */
cljs_time.core.in_minutes = (function cljs_time$core$in_minutes(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.in_minutes[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.in_minutes["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-minutes",this$);
}
}
}
});

/**
 * Return the time in hours.
 */
cljs_time.core.in_hours = (function cljs_time$core$in_hours(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.in_hours[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.in_hours["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-hours",this$);
}
}
}
});

/**
 * Return the time in days.
 */
cljs_time.core.in_days = (function cljs_time$core$in_days(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.in_days[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.in_days["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-days",this$);
}
}
}
});

/**
 * Return the time in weeks
 */
cljs_time.core.in_weeks = (function cljs_time$core$in_weeks(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.in_weeks[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.in_weeks["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-weeks",this$);
}
}
}
});

/**
 * Return the time in months
 */
cljs_time.core.in_months = (function cljs_time$core$in_months(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.in_months[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.in_months["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-months",this$);
}
}
}
});

/**
 * Return the time in years
 */
cljs_time.core.in_years = (function cljs_time$core$in_years(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (cljs_time.core.in_years[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (cljs_time.core.in_years["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-years",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Interval = (function (start,end,__meta,__extmap,__hash){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26596__auto__,k__26597__auto__){
var self__ = this;
var this__26596__auto____$1 = this;
return cljs.core._lookup.call(null,this__26596__auto____$1,k__26597__auto__,null);
});

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26598__auto__,k29968,else__26599__auto__){
var self__ = this;
var this__26598__auto____$1 = this;
var G__29970 = (((k29968 instanceof cljs.core.Keyword))?k29968.fqn:null);
switch (G__29970) {
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29968,else__26599__auto__);

}
});

cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26610__auto__,writer__26611__auto__,opts__26612__auto__){
var self__ = this;
var this__26610__auto____$1 = this;
var pr_pair__26613__auto__ = ((function (this__26610__auto____$1){
return (function (keyval__26614__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26611__auto__,cljs.core.pr_writer,""," ","",opts__26612__auto__,keyval__26614__auto__);
});})(this__26610__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26611__auto__,pr_pair__26613__auto__,"#cljs-time.core.Interval{",", ","}",opts__26612__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Interval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29967){
var self__ = this;
var G__29967__$1 = this;
return (new cljs.core.RecordIter((0),G__29967__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26594__auto__){
var self__ = this;
var this__26594__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26590__auto__){
var self__ = this;
var this__26590__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26600__auto__){
var self__ = this;
var this__26600__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26591__auto__){
var self__ = this;
var this__26591__auto____$1 = this;
var h__26409__auto__ = self__.__hash;
if(!((h__26409__auto__ == null))){
return h__26409__auto__;
} else {
var h__26409__auto____$1 = cljs.core.hash_imap.call(null,this__26591__auto____$1);
self__.__hash = h__26409__auto____$1;

return h__26409__auto____$1;
}
});

cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26592__auto__,other__26593__auto__){
var self__ = this;
var this__26592__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25962__auto__ = other__26593__auto__;
if(cljs.core.truth_(and__25962__auto__)){
var and__25962__auto____$1 = (this__26592__auto____$1.constructor === other__26593__auto__.constructor);
if(and__25962__auto____$1){
return cljs.core.equiv_map.call(null,this__26592__auto____$1,other__26593__auto__);
} else {
return and__25962__auto____$1;
}
} else {
return and__25962__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26605__auto__,k__26606__auto__){
var self__ = this;
var this__26605__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null), null),k__26606__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26605__auto____$1),self__.__meta),k__26606__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26606__auto__)),null));
}
});

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26603__auto__,k__26604__auto__,G__29967){
var self__ = this;
var this__26603__auto____$1 = this;
var pred__29971 = cljs.core.keyword_identical_QMARK_;
var expr__29972 = k__26604__auto__;
if(cljs.core.truth_(pred__29971.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__29972))){
return (new cljs_time.core.Interval(G__29967,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29971.call(null,new cljs.core.Keyword(null,"end","end",-268185958),expr__29972))){
return (new cljs_time.core.Interval(self__.start,G__29967,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26604__auto__,G__29967),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26608__auto__){
var self__ = this;
var this__26608__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26595__auto__,G__29967){
var self__ = this;
var this__26595__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__29967,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26601__auto__,entry__26602__auto__){
var self__ = this;
var this__26601__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26602__auto__)){
return cljs.core._assoc.call(null,this__26601__auto____$1,cljs.core._nth.call(null,entry__26602__auto__,(0)),cljs.core._nth.call(null,entry__26602__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26601__auto____$1,entry__26602__auto__);
}
});

cljs_time.core.Interval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null);
});

cljs_time.core.Interval.cljs$lang$type = true;

cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__26630__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Interval");
});

cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__26630__auto__,writer__26631__auto__){
return cljs.core._write.call(null,writer__26631__auto__,"cljs-time.core/Interval");
});

cljs_time.core.__GT_Interval = (function cljs_time$core$__GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

cljs_time.core.map__GT_Interval = (function cljs_time$core$map__GT_Interval(G__29969){
return (new cljs_time.core.Interval(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__29969),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__29969),null,cljs.core.dissoc.call(null,G__29969,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)),null));
});

/**
 * Returns an Interval representing the span between the two given DateTime.
 *   Note that intervals are closed on the left and open on the right.
 */
cljs_time.core.interval = (function cljs_time$core$interval(start,end){
if((start.getTime() <= end.getTime())){
} else {
throw (new Error("Assert failed: (<= (.getTime start) (.getTime end))"));
}

return cljs_time.core.__GT_Interval.call(null,start,end);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap,__hash){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26596__auto__,k__26597__auto__){
var self__ = this;
var this__26596__auto____$1 = this;
return cljs.core._lookup.call(null,this__26596__auto____$1,k__26597__auto__,null);
});

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26598__auto__,k29976,else__26599__auto__){
var self__ = this;
var this__26598__auto____$1 = this;
var G__29978 = (((k29976 instanceof cljs.core.Keyword))?k29976.fqn:null);
switch (G__29978) {
case "years":
return self__.years;

break;
case "months":
return self__.months;

break;
case "weeks":
return self__.weeks;

break;
case "days":
return self__.days;

break;
case "hours":
return self__.hours;

break;
case "minutes":
return self__.minutes;

break;
case "seconds":
return self__.seconds;

break;
case "millis":
return self__.millis;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29976,else__26599__auto__);

}
});

cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26610__auto__,writer__26611__auto__,opts__26612__auto__){
var self__ = this;
var this__26610__auto____$1 = this;
var pr_pair__26613__auto__ = ((function (this__26610__auto____$1){
return (function (keyval__26614__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26611__auto__,cljs.core.pr_writer,""," ","",opts__26612__auto__,keyval__26614__auto__);
});})(this__26610__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26611__auto__,pr_pair__26613__auto__,"#cljs-time.core.Period{",", ","}",opts__26612__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Period.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29975){
var self__ = this;
var G__29975__$1 = this;
return (new cljs.core.RecordIter((0),G__29975__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26594__auto__){
var self__ = this;
var this__26594__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26590__auto__){
var self__ = this;
var this__26590__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26600__auto__){
var self__ = this;
var this__26600__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26591__auto__){
var self__ = this;
var this__26591__auto____$1 = this;
var h__26409__auto__ = self__.__hash;
if(!((h__26409__auto__ == null))){
return h__26409__auto__;
} else {
var h__26409__auto____$1 = cljs.core.hash_imap.call(null,this__26591__auto____$1);
self__.__hash = h__26409__auto____$1;

return h__26409__auto____$1;
}
});

cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26592__auto__,other__26593__auto__){
var self__ = this;
var this__26592__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25962__auto__ = other__26593__auto__;
if(cljs.core.truth_(and__25962__auto__)){
var and__25962__auto____$1 = (this__26592__auto____$1.constructor === other__26593__auto__.constructor);
if(and__25962__auto____$1){
return cljs.core.equiv_map.call(null,this__26592__auto____$1,other__26593__auto__);
} else {
return and__25962__auto____$1;
}
} else {
return and__25962__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26605__auto__,k__26606__auto__){
var self__ = this;
var this__26605__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null,new cljs.core.Keyword(null,"millis","millis",-1338288387),null], null), null),k__26606__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26605__auto____$1),self__.__meta),k__26606__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26606__auto__)),null));
}
});

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26603__auto__,k__26604__auto__,G__29975){
var self__ = this;
var this__26603__auto____$1 = this;
var pred__29979 = cljs.core.keyword_identical_QMARK_;
var expr__29980 = k__26604__auto__;
if(cljs.core.truth_(pred__29979.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),expr__29980))){
return (new cljs_time.core.Period(G__29975,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29979.call(null,new cljs.core.Keyword(null,"months","months",-45571637),expr__29980))){
return (new cljs_time.core.Period(self__.years,G__29975,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29979.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),expr__29980))){
return (new cljs_time.core.Period(self__.years,self__.months,G__29975,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29979.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),expr__29980))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__29975,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29979.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),expr__29980))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__29975,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29979.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),expr__29980))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__29975,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29979.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),expr__29980))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__29975,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29979.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),expr__29980))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__29975,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26604__auto__,G__29975),null));
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26608__auto__){
var self__ = this;
var this__26608__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26595__auto__,G__29975){
var self__ = this;
var this__26595__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__29975,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26601__auto__,entry__26602__auto__){
var self__ = this;
var this__26601__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26602__auto__)){
return cljs.core._assoc.call(null,this__26601__auto____$1,cljs.core._nth.call(null,entry__26602__auto__,(0)),cljs.core._nth.call(null,entry__26602__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26601__auto____$1,entry__26602__auto__);
}
});

cljs_time.core.Period.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"years","years",341951838,null),new cljs.core.Symbol(null,"months","months",1594959890,null),new cljs.core.Symbol(null,"weeks","weeks",-809839644,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"hours","hours",1698912382,null),new cljs.core.Symbol(null,"minutes","minutes",-1335269375,null),new cljs.core.Symbol(null,"seconds","seconds",1195265333,null),new cljs.core.Symbol(null,"millis","millis",302243140,null)], null);
});

cljs_time.core.Period.cljs$lang$type = true;

cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__26630__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Period");
});

cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__26630__auto__,writer__26631__auto__){
return cljs.core._write.call(null,writer__26631__auto__,"cljs-time.core/Period");
});

cljs_time.core.__GT_Period = (function cljs_time$core$__GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

cljs_time.core.map__GT_Period = (function cljs_time$core$map__GT_Period(G__29977){
return (new cljs_time.core.Period(new cljs.core.Keyword(null,"years","years",-1298579689).cljs$core$IFn$_invoke$arity$1(G__29977),new cljs.core.Keyword(null,"months","months",-45571637).cljs$core$IFn$_invoke$arity$1(G__29977),new cljs.core.Keyword(null,"weeks","weeks",1844596125).cljs$core$IFn$_invoke$arity$1(G__29977),new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$1(G__29977),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(G__29977),new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(G__29977),new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(G__29977),new cljs.core.Keyword(null,"millis","millis",-1338288387).cljs$core$IFn$_invoke$arity$1(G__29977),null,cljs.core.dissoc.call(null,G__29977,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387)),null));
});

cljs_time.core.period = (function cljs_time$core$period(var_args){
var args29983 = [];
var len__27082__auto___29989 = arguments.length;
var i__27083__auto___29990 = (0);
while(true){
if((i__27083__auto___29990 < len__27082__auto___29989)){
args29983.push((arguments[i__27083__auto___29990]));

var G__29991 = (i__27083__auto___29990 + (1));
i__27083__auto___29990 = G__29991;
continue;
} else {
}
break;
}

var G__29988 = args29983.length;
switch (G__29988) {
case 2:
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27101__auto__ = (new cljs.core.IndexedSeq(args29983.slice((2)),(0),null));
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27101__auto__);

}
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$2 = (function (period,value){
return cljs_time.core.map__GT_Period.call(null,cljs.core.PersistentArrayMap.fromArray([period,value], true, false));
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic = (function (p1,v1,kvs){
return cljs.core.apply.call(null,cljs.core.assoc,cljs_time.core.period.call(null,p1,v1),kvs);
});

cljs_time.core.period.cljs$lang$applyTo = (function (seq29984){
var G__29985 = cljs.core.first.call(null,seq29984);
var seq29984__$1 = cljs.core.next.call(null,seq29984);
var G__29986 = cljs.core.first.call(null,seq29984__$1);
var seq29984__$2 = cljs.core.next.call(null,seq29984__$1);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(G__29985,G__29986,seq29984__$2);
});

cljs_time.core.period.cljs$lang$maxFixedArity = (2);

cljs_time.core.periods = (function (){var fixed_time_fn = (function (f,set_fn,op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
set_fn.call(null,date__$1,op.call(null,f.call(null,date__$1),value));
} else {
}

return date__$1;
});
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"millis","millis",-1338288387),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.milli,((function (fixed_time_fn){
return (function (p1__29993_SHARP_,p2__29994_SHARP_){
return p1__29993_SHARP_.setMilliseconds(p2__29994_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"seconds","seconds",-445266194),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.second,((function (fixed_time_fn){
return (function (p1__29995_SHARP_,p2__29996_SHARP_){
return p1__29995_SHARP_.setSeconds(p2__29996_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"minutes","minutes",1319166394),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.minute,((function (fixed_time_fn){
return (function (p1__29997_SHARP_,p2__29998_SHARP_){
return p1__29997_SHARP_.setMinutes(p2__29998_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"hours","hours",58380855),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.hour,((function (fixed_time_fn){
return (function (p1__29999_SHARP_,p2__30000_SHARP_){
return p1__29999_SHARP_.setHours(p2__30000_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.day,((function (fixed_time_fn){
return (function (p1__30001_SHARP_,p2__30002_SHARP_){
return p1__30001_SHARP_.setDate(p2__30002_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"weeks","weeks",1844596125),((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
date__$1.setDate(op.call(null,cljs_time.core.day.call(null,date__$1),((7) * value)));
} else {
}

return date__$1;
});})(fixed_time_fn))
,new cljs.core.Keyword(null,"months","months",-45571637),((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var m_30003 = op.call(null,(0),value);
var i_30004 = (new goog.date.Interval(goog.date.Interval.MONTHS,m_30003));
date__$1.add(i_30004);
} else {
}

return date__$1;
});})(fixed_time_fn))
,new cljs.core.Keyword(null,"years","years",-1298579689),((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
if(cljs.core.truth_((function (){var and__25962__auto__ = cljs_time.internal.core.leap_year_QMARK_.call(null,cljs_time.core.year.call(null,date__$1));
if(cljs.core.truth_(and__25962__auto__)){
var and__25962__auto____$1 = cljs_time.core._EQ_.call(null,(2),cljs_time.core.month.call(null,date__$1));
if(cljs.core.truth_(and__25962__auto____$1)){
return cljs_time.core._EQ_.call(null,(29),cljs_time.core.day.call(null,date__$1));
} else {
return and__25962__auto____$1;
}
} else {
return and__25962__auto__;
}
})())){
date__$1.setDate((28));
} else {
}

date__$1.setYear(op.call(null,cljs_time.core.year.call(null,date__$1),value));
} else {
}

return date__$1;
});})(fixed_time_fn))
], null);
})();
cljs_time.core.period_fn = (function cljs_time$core$period_fn(p){
return (function (operator,date){
return cljs.core.reduce.call(null,(function (d,p__30009){
var vec__30010 = p__30009;
var k = cljs.core.nth.call(null,vec__30010,(0),null);
var v = cljs.core.nth.call(null,vec__30010,(1),null);
return cljs_time.core.periods.call(null,k).call(null,operator,d,v);
}),date,p);
});
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});
cljs_time.core.utc = ({"id": "UTC", "std_offset": (0), "names": new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null), "transitions": cljs.core.PersistentVector.EMPTY});
cljs_time.core.default_ms_fn = (function cljs_time$core$default_ms_fn(){
return (function (){
return Date.now();
});
});
cljs_time.core.offset_ms_fn = (function cljs_time$core$offset_ms_fn(offset){
return (function (){
return (Date.now() + offset);
});
});
cljs_time.core.static_ms_fn = (function cljs_time$core$static_ms_fn(ms){
return (function (){
return ms;
});
});
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.default_ms_fn.call(null);
/**
 * Returns a DateTime for the current instant in the UTC time zone.
 */
cljs_time.core.now = (function cljs_time$core$now(){
var G__30014 = (new goog.date.UtcDateTime());
G__30014.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__30014;
});
/**
 * Returns a local DateTime for the current instant without date or time zone
 *   in the current time zone.
 */
cljs_time.core.time_now = (function cljs_time$core$time_now(){
var G__30016 = (new goog.date.DateTime());
G__30016.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__30016;
});
cljs_time.core.at_midnight = (function cljs_time$core$at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__30018 = datetime__$1;
G__30018.setHours((0));

G__30018.setMinutes((0));

G__30018.setSeconds((0));

G__30018.setMilliseconds((0));

return G__30018;
});
/**
 * Returns a DateTime for today at midnight in the UTC time zone.
 */
cljs_time.core.today_at_midnight = (function cljs_time$core$today_at_midnight(){
return cljs_time.core.at_midnight.call(null,cljs_time.core.now.call(null));
});
/**
 * Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
 */
cljs_time.core.epoch = (function cljs_time$core$epoch(){
var G__30020 = (new goog.date.UtcDateTime());
G__30020.setTime((0));

return G__30020;
});
/**
 * Constructs and returns a new DateTime at midnight in UTC.
 * 
 *   Specify the year, month of year, day of month. Note that month and day are
 *   1-indexed. Any number of least-significant components can be ommited, in
 *   which case they will default to 1.
 */
cljs_time.core.date_midnight = (function cljs_time$core$date_midnight(var_args){
var args30021 = [];
var len__27082__auto___30024 = arguments.length;
var i__27083__auto___30025 = (0);
while(true){
if((i__27083__auto___30025 < len__27082__auto___30024)){
args30021.push((arguments[i__27083__auto___30025]));

var G__30026 = (i__27083__auto___30025 + (1));
i__27083__auto___30025 = G__30026;
continue;
} else {
}
break;
}

var G__30023 = args30021.length;
switch (G__30023) {
case 1:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30021.length)].join('')));

}
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_midnight.call(null,year,(1),(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_midnight.call(null,year,month,(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
});

cljs_time.core.date_midnight.cljs$lang$maxFixedArity = 3;

/**
 * Constructs and returns a new DateTime in UTC.
 * 
 *   Specify the year, month of year, day of month, hour of day, minute if hour,
 *   second of minute, and millisecond of second. Note that month and day are
 *   1-indexed while hour, second, minute, and millis are 0-indexed.
 * 
 *   Any number of least-significant components can be ommited, in which case
 *   they will default to 1 or 0 as appropriate.
 */
cljs_time.core.date_time = (function cljs_time$core$date_time(var_args){
var args30028 = [];
var len__27082__auto___30031 = arguments.length;
var i__27083__auto___30032 = (0);
while(true){
if((i__27083__auto___30032 < len__27082__auto___30031)){
args30028.push((arguments[i__27083__auto___30032]));

var G__30033 = (i__27083__auto___30032 + (1));
i__27083__auto___30032 = G__30033;
continue;
} else {
}
break;
}

var G__30030 = args30028.length;
switch (G__30030) {
case 1:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30028.length)].join('')));

}
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.date_time.cljs$lang$maxFixedArity = 7;

/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month of year, day of month, hour of day, minute of hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
cljs_time.core.local_date_time = (function cljs_time$core$local_date_time(var_args){
var args30035 = [];
var len__27082__auto___30038 = arguments.length;
var i__27083__auto___30039 = (0);
while(true){
if((i__27083__auto___30039 < len__27082__auto___30038)){
args30035.push((arguments[i__27083__auto___30039]));

var G__30040 = (i__27083__auto___30039 + (1));
i__27083__auto___30039 = G__30040;
continue;
} else {
}
break;
}

var G__30037 = args30035.length;
switch (G__30037) {
case 1:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30035.length)].join('')));

}
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.local_date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.local_date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.local_date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.local_date_time.cljs$lang$maxFixedArity = 7;

/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month, and day. Does not deal with timezones.
 */
cljs_time.core.local_date = (function cljs_time$core$local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
 * Constructs and returns a new local DateTime representing today's date.
 *   local DateTime objects do not deal with timezones at all.
 */
cljs_time.core.today = (function cljs_time$core$today(){
var G__30043 = (new goog.date.Date());
G__30043.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__30043;
});
/**
 * Returns a timezone map for the given offset, specified either in hours or
 *   hours and minutes.
 */
cljs_time.core.time_zone_for_offset = (function cljs_time$core$time_zone_for_offset(var_args){
var args30044 = [];
var len__27082__auto___30047 = arguments.length;
var i__27083__auto___30048 = (0);
while(true){
if((i__27083__auto___30048 < len__27082__auto___30047)){
args30044.push((arguments[i__27083__auto___30048]));

var G__30049 = (i__27083__auto___30048 + (1));
i__27083__auto___30048 = G__30049;
continue;
} else {
}
break;
}

var G__30046 = args30044.length;
switch (G__30046) {
case 1:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30044.length)].join('')));

}
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = (function (hours){
return cljs_time.core.time_zone_for_offset.call(null,hours,null);
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
var sign = (((hours < (0)))?new cljs.core.Keyword(null,"-","-",-2112348439):new cljs.core.Keyword(null,"+","+",1913524883));
var fmt = [cljs.core.str("UTC%s%02d"),cljs.core.str((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1,minutes):cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1));
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),tz_name,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__25974__auto__ = minutes;
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return (0);
}
})(),(0)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),"-",new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.core","time-zone","cljs-time.core/time-zone",751963705)], null));
});

cljs_time.core.time_zone_for_offset.cljs$lang$maxFixedArity = 2;

/**
 * Returns the default timezone map for the current environment.
 */
cljs_time.core.default_time_zone = (function cljs_time$core$default_time_zone(){
var offset = (function (){var G__30052 = (new goog.date.DateTime());
G__30052.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__30052;
})().getTimezoneOffset();
var hours = (((-1) * offset) / (60));
return cljs_time.core.time_zone_for_offset.call(null,(hours | (0)),cljs.core.mod.call(null,hours,(1)));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to in the default
 *   (local) timezone.
 */
cljs_time.core.to_default_time_zone = (function cljs_time$core$to_default_time_zone(dt){
return (new goog.date.DateTime(dt));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the default (local) timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
cljs_time.core.from_default_time_zone = (function cljs_time$core$from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
 * Given a number, returns a Period representing that many years.
 *   Without an argument, returns a Period representing only years.
 */
cljs_time.core.years = (function cljs_time$core$years(var_args){
var args30053 = [];
var len__27082__auto___30056 = arguments.length;
var i__27083__auto___30057 = (0);
while(true){
if((i__27083__auto___30057 < len__27082__auto___30056)){
args30053.push((arguments[i__27083__auto___30057]));

var G__30058 = (i__27083__auto___30057 + (1));
i__27083__auto___30057 = G__30058;
continue;
} else {
}
break;
}

var G__30055 = args30053.length;
switch (G__30055) {
case 0:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30053.length)].join('')));

}
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.years.call(null,null);
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),n);
});

cljs_time.core.years.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many months.
 *   Without an argument, returns a Period representing only months.
 */
cljs_time.core.months = (function cljs_time$core$months(var_args){
var args30060 = [];
var len__27082__auto___30063 = arguments.length;
var i__27083__auto___30064 = (0);
while(true){
if((i__27083__auto___30064 < len__27082__auto___30063)){
args30060.push((arguments[i__27083__auto___30064]));

var G__30065 = (i__27083__auto___30064 + (1));
i__27083__auto___30064 = G__30065;
continue;
} else {
}
break;
}

var G__30062 = args30060.length;
switch (G__30062) {
case 0:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30060.length)].join('')));

}
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.months.call(null,null);
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"months","months",-45571637),n);
});

cljs_time.core.months.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many weeks.
 *   Without an argument, returns a Period representing only weeks.
 */
cljs_time.core.weeks = (function cljs_time$core$weeks(var_args){
var args30067 = [];
var len__27082__auto___30070 = arguments.length;
var i__27083__auto___30071 = (0);
while(true){
if((i__27083__auto___30071 < len__27082__auto___30070)){
args30067.push((arguments[i__27083__auto___30071]));

var G__30072 = (i__27083__auto___30071 + (1));
i__27083__auto___30071 = G__30072;
continue;
} else {
}
break;
}

var G__30069 = args30067.length;
switch (G__30069) {
case 0:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30067.length)].join('')));

}
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.weeks.call(null,null);
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),n);
});

cljs_time.core.weeks.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many days.
 *   Without an argument, returns a Period representing only days.
 */
cljs_time.core.days = (function cljs_time$core$days(var_args){
var args30074 = [];
var len__27082__auto___30077 = arguments.length;
var i__27083__auto___30078 = (0);
while(true){
if((i__27083__auto___30078 < len__27082__auto___30077)){
args30074.push((arguments[i__27083__auto___30078]));

var G__30079 = (i__27083__auto___30078 + (1));
i__27083__auto___30078 = G__30079;
continue;
} else {
}
break;
}

var G__30076 = args30074.length;
switch (G__30076) {
case 0:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30074.length)].join('')));

}
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.days.call(null,null);
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),n);
});

cljs_time.core.days.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many hours.
 *   Without an argument, returns a Period representing only hours.
 */
cljs_time.core.hours = (function cljs_time$core$hours(var_args){
var args30081 = [];
var len__27082__auto___30084 = arguments.length;
var i__27083__auto___30085 = (0);
while(true){
if((i__27083__auto___30085 < len__27082__auto___30084)){
args30081.push((arguments[i__27083__auto___30085]));

var G__30086 = (i__27083__auto___30085 + (1));
i__27083__auto___30085 = G__30086;
continue;
} else {
}
break;
}

var G__30083 = args30081.length;
switch (G__30083) {
case 0:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30081.length)].join('')));

}
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.hours.call(null,null);
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),n);
});

cljs_time.core.hours.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many minutes.
 *   Without an argument, returns a Period representing only minutes.
 */
cljs_time.core.minutes = (function cljs_time$core$minutes(var_args){
var args30088 = [];
var len__27082__auto___30091 = arguments.length;
var i__27083__auto___30092 = (0);
while(true){
if((i__27083__auto___30092 < len__27082__auto___30091)){
args30088.push((arguments[i__27083__auto___30092]));

var G__30093 = (i__27083__auto___30092 + (1));
i__27083__auto___30092 = G__30093;
continue;
} else {
}
break;
}

var G__30090 = args30088.length;
switch (G__30090) {
case 0:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30088.length)].join('')));

}
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.minutes.call(null,null);
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),n);
});

cljs_time.core.minutes.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many seconds.
 *   Without an argument, returns a Period representing only seconds.
 */
cljs_time.core.seconds = (function cljs_time$core$seconds(var_args){
var args30095 = [];
var len__27082__auto___30098 = arguments.length;
var i__27083__auto___30099 = (0);
while(true){
if((i__27083__auto___30099 < len__27082__auto___30098)){
args30095.push((arguments[i__27083__auto___30099]));

var G__30100 = (i__27083__auto___30099 + (1));
i__27083__auto___30099 = G__30100;
continue;
} else {
}
break;
}

var G__30097 = args30095.length;
switch (G__30097) {
case 0:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30095.length)].join('')));

}
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.seconds.call(null,null);
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),n);
});

cljs_time.core.seconds.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many milliseconds.
 *   Without an argument, returns a Period representing only milliseconds.
 */
cljs_time.core.millis = (function cljs_time$core$millis(var_args){
var args30102 = [];
var len__27082__auto___30105 = arguments.length;
var i__27083__auto___30106 = (0);
while(true){
if((i__27083__auto___30106 < len__27082__auto___30105)){
args30102.push((arguments[i__27083__auto___30106]));

var G__30107 = (i__27083__auto___30106 + (1));
i__27083__auto___30106 = G__30107;
continue;
} else {
}
break;
}

var G__30104 = args30102.length;
switch (G__30104) {
case 0:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30102.length)].join('')));

}
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.millis.call(null,null);
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),n);
});

cljs_time.core.millis.cljs$lang$maxFixedArity = 1;

/**
 * Returns a new date/time corresponding to the given date/time moved
 *   forwards by the given Period(s).
 */
cljs_time.core.plus = (function cljs_time$core$plus(var_args){
var args30109 = [];
var len__27082__auto___30115 = arguments.length;
var i__27083__auto___30116 = (0);
while(true){
if((i__27083__auto___30116 < len__27082__auto___30115)){
args30109.push((arguments[i__27083__auto___30116]));

var G__30117 = (i__27083__auto___30116 + (1));
i__27083__auto___30116 = G__30117;
continue;
} else {
}
break;
}

var G__30114 = args30109.length;
switch (G__30114) {
case 2:
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27101__auto__ = (new cljs.core.IndexedSeq(args30109.slice((2)),(0),null));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27101__auto__);

}
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.plus_.call(null,dt,p);
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.plus_,cljs_time.core.plus_.call(null,dt,p),ps);
});

cljs_time.core.plus.cljs$lang$applyTo = (function (seq30110){
var G__30111 = cljs.core.first.call(null,seq30110);
var seq30110__$1 = cljs.core.next.call(null,seq30110);
var G__30112 = cljs.core.first.call(null,seq30110__$1);
var seq30110__$2 = cljs.core.next.call(null,seq30110__$1);
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic(G__30111,G__30112,seq30110__$2);
});

cljs_time.core.plus.cljs$lang$maxFixedArity = (2);

/**
 * Returns a new date/time object corresponding to the given date/time
 *   moved backwards by the given Period(s).
 */
cljs_time.core.minus = (function cljs_time$core$minus(var_args){
var args30119 = [];
var len__27082__auto___30125 = arguments.length;
var i__27083__auto___30126 = (0);
while(true){
if((i__27083__auto___30126 < len__27082__auto___30125)){
args30119.push((arguments[i__27083__auto___30126]));

var G__30127 = (i__27083__auto___30126 + (1));
i__27083__auto___30126 = G__30127;
continue;
} else {
}
break;
}

var G__30124 = args30119.length;
switch (G__30124) {
case 2:
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27101__auto__ = (new cljs.core.IndexedSeq(args30119.slice((2)),(0),null));
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27101__auto__);

}
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.minus_.call(null,dt,p);
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.minus_,cljs_time.core.minus_.call(null,dt,p),ps);
});

cljs_time.core.minus.cljs$lang$applyTo = (function (seq30120){
var G__30121 = cljs.core.first.call(null,seq30120);
var seq30120__$1 = cljs.core.next.call(null,seq30120);
var G__30122 = cljs.core.first.call(null,seq30120__$1);
var seq30120__$2 = cljs.core.next.call(null,seq30120__$1);
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic(G__30121,G__30122,seq30120__$2);
});

cljs_time.core.minus.cljs$lang$maxFixedArity = (2);

/**
 * Returns a DateTime a supplied period before the present.
 * 
 *   e.g. `(-> 5 years ago)`
 */
cljs_time.core.ago = (function cljs_time$core$ago(period){
return cljs_time.core.minus.call(null,cljs_time.core.now.call(null),period);
});
/**
 * Returns a DateTime for yesterday relative to now
 */
cljs_time.core.yesterday = (function cljs_time$core$yesterday(){
return cljs_time.core.ago.call(null,cljs_time.core.days.call(null,(1)));
});
/**
 * Returns a DateTime a supplied period after the present.
 *   e.g. `(-> 30 minutes from-now)`
 */
cljs_time.core.from_now = (function cljs_time$core$from_now(period){
return cljs_time.core.plus.call(null,cljs_time.core.now.call(null),period);
});
/**
 * Returns the earliest of the supplied DateTimes
 */
cljs_time.core.earliest = (function cljs_time$core$earliest(var_args){
var args30129 = [];
var len__27082__auto___30132 = arguments.length;
var i__27083__auto___30133 = (0);
while(true){
if((i__27083__auto___30133 < len__27082__auto___30132)){
args30129.push((arguments[i__27083__auto___30133]));

var G__30134 = (i__27083__auto___30133 + (1));
i__27083__auto___30133 = G__30134;
continue;
} else {
}
break;
}

var G__30131 = args30129.length;
switch (G__30131) {
case 2:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30129.length)].join('')));

}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.earliest,dts);
});

cljs_time.core.earliest.cljs$lang$maxFixedArity = 2;

/**
 * Returns the latest of the supplied DateTimes
 */
cljs_time.core.latest = (function cljs_time$core$latest(var_args){
var args30136 = [];
var len__27082__auto___30139 = arguments.length;
var i__27083__auto___30140 = (0);
while(true){
if((i__27083__auto___30140 < len__27082__auto___30139)){
args30136.push((arguments[i__27083__auto___30140]));

var G__30141 = (i__27083__auto___30140 + (1));
i__27083__auto___30140 = G__30141;
continue;
} else {
}
break;
}

var G__30138 = args30136.length;
switch (G__30138) {
case 2:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30136.length)].join('')));

}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.latest,dts);
});

cljs_time.core.latest.cljs$lang$maxFixedArity = 2;

/**
 * Returns the start DateTime of an Interval.
 */
cljs_time.core.start = (function cljs_time$core$start(in$){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns the end DateTime of an Interval.
 */
cljs_time.core.end = (function cljs_time$core$end(in$){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns an Interval with an end DateTime the specified Period after the end
 *   of the given Interval
 */
cljs_time.core.extend = (function cljs_time$core$extend(var_args){
var args__27089__auto__ = [];
var len__27082__auto___30145 = arguments.length;
var i__27083__auto___30146 = (0);
while(true){
if((i__27083__auto___30146 < len__27082__auto___30145)){
args__27089__auto__.push((arguments[i__27083__auto___30146]));

var G__30147 = (i__27083__auto___30146 + (1));
i__27083__auto___30146 = G__30147;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((1) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((1)),(0),null)):null);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27090__auto__);
});

cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic = (function (in$,by){
return cljs.core.assoc.call(null,in$,new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.apply.call(null,cljs_time.core.plus,cljs_time.core.end.call(null,in$),by));
});

cljs_time.core.extend.cljs$lang$maxFixedArity = (1);

cljs_time.core.extend.cljs$lang$applyTo = (function (seq30143){
var G__30144 = cljs.core.first.call(null,seq30143);
var seq30143__$1 = cljs.core.next.call(null,seq30143);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic(G__30144,seq30143__$1);
});

cljs_time.core.month_range = (function cljs_time$core$month_range(p__30150){
var map__30153 = p__30150;
var map__30153__$1 = ((((!((map__30153 == null)))?((((map__30153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30153):map__30153);
var start = cljs.core.get.call(null,map__30153__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__30153__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.take_while.call(null,((function (map__30153,map__30153__$1,start,end){
return (function (p1__30149_SHARP_){
return cljs.core.not.call(null,cljs_time.core.after_QMARK_.call(null,p1__30149_SHARP_,end));
});})(map__30153,map__30153__$1,start,end))
,cljs.core.map.call(null,((function (map__30153,map__30153__$1,start,end){
return (function (p1__30148_SHARP_){
return cljs_time.core.plus.call(null,start,cljs_time.core.months.call(null,(p1__30148_SHARP_ + (1))));
});})(map__30153,map__30153__$1,start,end))
,cljs.core.range.call(null)));
});
cljs_time.core.total_days_in_whole_months = (function cljs_time$core$total_days_in_whole_months(interval){
return cljs.core.map.call(null,(function (p1__30155_SHARP_){
return p1__30155_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range.call(null,interval));
});
/**
 * Returns the number of months in the given Interval.
 * 
 *   For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
 *   returns 1 month.
 * 
 *   Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
 */
cljs_time.core.in_months_ = (function cljs_time$core$in_months_(p__30156){
var map__30159 = p__30156;
var map__30159__$1 = ((((!((map__30159 == null)))?((((map__30159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30159):map__30159);
var interval = map__30159__$1;
var start = cljs.core.get.call(null,map__30159__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__30159__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.count.call(null,cljs_time.core.total_days_in_whole_months.call(null,interval));
});
/**
 * Returns the number of standard years in the given Interval.
 */
cljs_time.core.in_years_ = (function cljs_time$core$in_years_(p__30161){
var map__30164 = p__30161;
var map__30164__$1 = ((((!((map__30164 == null)))?((((map__30164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30164):map__30164);
var start = cljs.core.get.call(null,map__30164__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__30164__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var sm = cljs_time.core.month.call(null,start);
var sd = cljs_time.core.day.call(null,start);
var em = cljs_time.core.month.call(null,end);
var ed = cljs_time.core.day.call(null,end);
var d1 = (cljs.core.truth_((function (){var and__25962__auto__ = cljs_time.core._EQ_.call(null,sm,(2));
if(cljs.core.truth_(and__25962__auto__)){
var and__25962__auto____$1 = cljs_time.core._EQ_.call(null,sd,(29));
if(cljs.core.truth_(and__25962__auto____$1)){
var and__25962__auto____$2 = cljs_time.core._EQ_.call(null,em,(2));
if(cljs.core.truth_(and__25962__auto____$2)){
return cljs_time.core._EQ_.call(null,ed,(28));
} else {
return and__25962__auto____$2;
}
} else {
return and__25962__auto____$1;
}
} else {
return and__25962__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year.call(null,end) - cljs_time.core.year.call(null,start)) - d1);
});
cljs_time.core.conversion_error = (function cljs_time$core$conversion_error(from,to){
var from__$1 = clojure.string.capitalize.call(null,cljs.core.name.call(null,from));
var to__$1 = cljs.core.name.call(null,to);
throw cljs.core.ex_info.call(null,cljs_time.internal.core.format.call(null,"%s cannot be converted to %s",from__$1,to__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unsupported-operation","unsupported-operation",1890540953)], null));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__30166){
var map__30167 = p__30166;
var map__30167__$1 = ((((!((map__30167 == null)))?((((map__30167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30167):map__30167);
var millis = cljs.core.get.call(null,map__30167__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__30167__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__30167__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__30167__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__30167__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__30167__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__30167__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__30167__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__30169 = this;
var map__30169__$1 = ((((!((map__30169 == null)))?((((map__30169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30169):map__30169);
var millis__$1 = cljs.core.get.call(null,map__30169__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__30169__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__30169__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__30169__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__30169__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__30169__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__30169__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__30169__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__30171){
var map__30172 = p__30171;
var map__30172__$1 = ((((!((map__30172 == null)))?((((map__30172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30172):map__30172);
var millis = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__30174 = this;
var map__30174__$1 = ((((!((map__30174 == null)))?((((map__30174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30174):map__30174);
var millis__$1 = cljs.core.get.call(null,map__30174__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__30174__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__30174__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__30174__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__30174__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__30174__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__30174__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__30174__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__25974__auto__ = years__$1;
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return (0);
}
})() * (12)));
} else {
if(cljs.core.truth_(years__$1)){
return (years__$1 * (12));
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__30176){
var map__30177 = p__30176;
var map__30177__$1 = ((((!((map__30177 == null)))?((((map__30177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30177):map__30177);
var millis = cljs.core.get.call(null,map__30177__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__30177__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__30177__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__30177__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__30177__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__30177__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__30177__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__30177__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__30179 = this;
var map__30179__$1 = ((((!((map__30179 == null)))?((((map__30179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30179):map__30179);
var millis__$1 = cljs.core.get.call(null,map__30179__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__30179__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__30179__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__30179__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__30179__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__30179__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__30179__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__30179__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(months__$1)){
return (((months__$1 / (12)) + years__$1) | (0));
} else {
if(cljs.core.truth_(years__$1)){
return years__$1;
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__30181){
var map__30182 = p__30181;
var map__30182__$1 = ((((!((map__30182 == null)))?((((map__30182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30182):map__30182);
var start = cljs.core.get.call(null,map__30182__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__30182__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__30184 = this;
var map__30184__$1 = ((((!((map__30184 == null)))?((((map__30184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30184):map__30184);
var start__$1 = cljs.core.get.call(null,map__30184__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.call(null,map__30184__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return (end__$1.getTime() - start__$1.getTime());
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_months_.call(null,this$__$1);
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_years_.call(null,this$__$1);
});
/**
 * With 2 arguments: Returns true if the given Interval contains the given
 *   DateTime. Note that if the DateTime is exactly equal to the
 *   end of the interval, this function returns false.
 * 
 *   With 3 arguments: Returns true if the start DateTime is
 *   equal to or before and the end DateTime is equal to or after the test
 *   DateTime.
 */
cljs_time.core.within_QMARK_ = (function cljs_time$core$within_QMARK_(var_args){
var args30186 = [];
var len__27082__auto___30192 = arguments.length;
var i__27083__auto___30193 = (0);
while(true){
if((i__27083__auto___30193 < len__27082__auto___30192)){
args30186.push((arguments[i__27083__auto___30193]));

var G__30194 = (i__27083__auto___30193 + (1));
i__27083__auto___30193 = G__30194;
continue;
} else {
}
break;
}

var G__30188 = args30186.length;
switch (G__30188) {
case 2:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30186.length)].join('')));

}
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__30189,date){
var map__30190 = p__30189;
var map__30190__$1 = ((((!((map__30190 == null)))?((((map__30190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30190.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30190):map__30190);
var start = cljs.core.get.call(null,map__30190__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__30190__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs_time.core.within_QMARK_.call(null,start,end,date);
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,date){
var or__25974__auto__ = cljs_time.core._EQ_.call(null,start,date);
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
var and__25962__auto__ = cljs_time.core.before_QMARK_.call(null,start,date);
if(cljs.core.truth_(and__25962__auto__)){
return cljs_time.core.after_QMARK_.call(null,end,date);
} else {
return and__25962__auto__;
}
}
});

cljs_time.core.within_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * With 2 arguments: Returns true of the two given Intervals overlap.
 *   Note that intervals that satisfy abuts? do not satisfy overlaps?
 * 
 *   With 4 arguments: Returns true if the range specified by start-a and end-a
 *   overlaps with the range specified by start-b and end-b.
 */
cljs_time.core.overlaps_QMARK_ = (function cljs_time$core$overlaps_QMARK_(var_args){
var args30196 = [];
var len__27082__auto___30205 = arguments.length;
var i__27083__auto___30206 = (0);
while(true){
if((i__27083__auto___30206 < len__27082__auto___30205)){
args30196.push((arguments[i__27083__auto___30206]));

var G__30207 = (i__27083__auto___30206 + (1));
i__27083__auto___30206 = G__30207;
continue;
} else {
}
break;
}

var G__30198 = args30196.length;
switch (G__30198) {
case 2:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30196.length)].join('')));

}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__30199,p__30200){
var map__30201 = p__30199;
var map__30201__$1 = ((((!((map__30201 == null)))?((((map__30201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30201):map__30201);
var start_a = cljs.core.get.call(null,map__30201__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__30201__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__30202 = p__30200;
var map__30202__$1 = ((((!((map__30202 == null)))?((((map__30202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30202):map__30202);
var start_b = cljs.core.get.call(null,map__30202__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__30202__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var and__25962__auto__ = cljs.core.not.call(null,(function (){var or__25974__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
})());
if(and__25962__auto__){
return cljs_time.core.overlaps_QMARK_.call(null,start_a,end_a,start_b,end_b);
} else {
return and__25962__auto__;
}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (start_a,end_a,start_b,end_b){
var or__25974__auto__ = (function (){var and__25962__auto__ = cljs_time.core.before_QMARK_.call(null,start_b,end_a);
if(cljs.core.truth_(and__25962__auto__)){
return cljs_time.core.after_QMARK_.call(null,end_b,start_a);
} else {
return and__25962__auto__;
}
})();
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
var or__25974__auto____$1 = (function (){var and__25962__auto__ = cljs_time.core.after_QMARK_.call(null,end_b,start_a);
if(cljs.core.truth_(and__25962__auto__)){
return cljs_time.core.before_QMARK_.call(null,start_b,end_a);
} else {
return and__25962__auto__;
}
})();
if(cljs.core.truth_(or__25974__auto____$1)){
return or__25974__auto____$1;
} else {
var or__25974__auto____$2 = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__25974__auto____$2)){
return or__25974__auto____$2;
} else {
return cljs_time.core._EQ_.call(null,start_b,end_a);
}
}
}
});

cljs_time.core.overlaps_QMARK_.cljs$lang$maxFixedArity = 4;

/**
 * Returns true if Interval a abuts b, i.e. then end of a is exactly the
 *   beginning of b.
 */
cljs_time.core.abuts_QMARK_ = (function cljs_time$core$abuts_QMARK_(p__30209,p__30210){
var map__30215 = p__30209;
var map__30215__$1 = ((((!((map__30215 == null)))?((((map__30215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30215):map__30215);
var start_a = cljs.core.get.call(null,map__30215__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__30215__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__30216 = p__30210;
var map__30216__$1 = ((((!((map__30216 == null)))?((((map__30216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30216):map__30216);
var start_b = cljs.core.get.call(null,map__30216__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__30216__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var or__25974__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
});
cljs_time.core.date_QMARK_ = (function cljs_time$core$date_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs_time$core$DateTimeProtocol$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,x);
}
});
cljs_time.core.interval_QMARK_ = (function cljs_time$core$interval_QMARK_(x){
return (x instanceof cljs_time.core.Interval);
});
cljs_time.core.period_QMARK_ = (function cljs_time$core$period_QMARK_(x){
return (x instanceof cljs_time.core.Period);
});
cljs_time.core.period_type_QMARK_ = (function cljs_time$core$period_type_QMARK_(type,x){
var and__25962__auto__ = cljs_time.core.period_QMARK_.call(null,x);
if(cljs.core.truth_(and__25962__auto__)){
return cljs.core.contains_QMARK_.call(null,x,type);
} else {
return and__25962__auto__;
}
});
/**
 * Returns true if the given value is an instance of Years
 */
cljs_time.core.years_QMARK_ = (function cljs_time$core$years_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),val);
});
/**
 * Returns true if the given value is an instance of Months
 */
cljs_time.core.months_QMARK_ = (function cljs_time$core$months_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"months","months",-45571637),val);
});
/**
 * Returns true if the given value is an instance of Weeks
 */
cljs_time.core.weeks_QMARK_ = (function cljs_time$core$weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),val);
});
/**
 * Returns true if the given value is an instance of Days
 */
cljs_time.core.days_QMARK_ = (function cljs_time$core$days_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),val);
});
/**
 * Returns true if the given value is an instance of Hours
 */
cljs_time.core.hours_QMARK_ = (function cljs_time$core$hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),val);
});
/**
 * Returns true if the given value is an instance of Minutes
 */
cljs_time.core.minutes_QMARK_ = (function cljs_time$core$minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),val);
});
/**
 * Returns true if the given value is an instance of Seconds
 */
cljs_time.core.seconds_QMARK_ = (function cljs_time$core$seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),val);
});
cljs_time.core.mins_ago = (function cljs_time$core$mins_ago(d){
return cljs_time.core.in_minutes.call(null,cljs_time.core.interval.call(null,d,cljs_time.core.now.call(null)));
});
cljs_time.core.last_day_of_the_month = (function cljs_time$core$last_day_of_the_month(var_args){
var args30221 = [];
var len__27082__auto___30224 = arguments.length;
var i__27083__auto___30225 = (0);
while(true){
if((i__27083__auto___30225 < len__27082__auto___30224)){
args30221.push((arguments[i__27083__auto___30225]));

var G__30226 = (i__27083__auto___30225 + (1));
i__27083__auto___30225 = G__30226;
continue;
} else {
}
break;
}

var G__30223 = args30221.length;
switch (G__30223) {
case 1:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30221.length)].join('')));

}
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.last_day_of_the_month_.call(null,dt);
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.last_day_of_the_month.cljs$lang$maxFixedArity = 2;

cljs_time.core.number_of_days_in_the_month = (function cljs_time$core$number_of_days_in_the_month(var_args){
var args30228 = [];
var len__27082__auto___30231 = arguments.length;
var i__27083__auto___30232 = (0);
while(true){
if((i__27083__auto___30232 < len__27082__auto___30231)){
args30228.push((arguments[i__27083__auto___30232]));

var G__30233 = (i__27083__auto___30232 + (1));
i__27083__auto___30232 = G__30233;
continue;
} else {
}
break;
}

var G__30230 = args30228.length;
switch (G__30230) {
case 1:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30228.length)].join('')));

}
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.number_of_days_in_the_month.call(null,cljs_time.core.year.call(null,dt),cljs_time.core.month.call(null,dt));
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.call(null,year,month).getDate();
});

cljs_time.core.number_of_days_in_the_month.cljs$lang$maxFixedArity = 2;

cljs_time.core.first_day_of_the_month = (function cljs_time$core$first_day_of_the_month(var_args){
var args30235 = [];
var len__27082__auto___30238 = arguments.length;
var i__27083__auto___30239 = (0);
while(true){
if((i__27083__auto___30239 < len__27082__auto___30238)){
args30235.push((arguments[i__27083__auto___30239]));

var G__30240 = (i__27083__auto___30239 + (1));
i__27083__auto___30239 = G__30240;
continue;
} else {
}
break;
}

var G__30237 = args30235.length;
switch (G__30237) {
case 1:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30235.length)].join('')));

}
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.first_day_of_the_month_.call(null,dt);
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.first_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.first_day_of_the_month.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
cljs_time.core.IToPeriod = function(){};

cljs_time.core.__GT_period = (function cljs_time$core$__GT_period(obj){
if((!((obj == null))) && (!((obj.cljs_time$core$IToPeriod$__GT_period$arity$1 == null)))){
return obj.cljs_time$core$IToPeriod$__GT_period$arity$1(obj);
} else {
var x__26637__auto__ = (((obj == null))?null:obj);
var m__26638__auto__ = (cljs_time.core.__GT_period[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,obj);
} else {
var m__26638__auto____$1 = (cljs_time.core.__GT_period["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"IToPeriod.->period",obj);
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (p__30242){
var map__30243 = p__30242;
var map__30243__$1 = ((((!((map__30243 == null)))?((((map__30243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30243):map__30243);
var interval = map__30243__$1;
var start = cljs.core.get.call(null,map__30243__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__30243__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__30245 = this;
var map__30245__$1 = ((((!((map__30245 == null)))?((((map__30245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30245):map__30245);
var interval__$1 = map__30245__$1;
var start__$1 = cljs.core.get.call(null,map__30245__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.call(null,map__30245__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var years = cljs_time.core.in_years.call(null,interval__$1);
var start_year = cljs_time.core.year.call(null,start__$1);
var leap_years = cljs.core.count.call(null,cljs.core.remove.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.call(null,start_year,(start_year + years)))));
var start_month = cljs_time.core.month.call(null,start__$1);
var days_in_months = cljs_time.core.total_days_in_whole_months.call(null,interval__$1);
var months = (cljs.core.count.call(null,days_in_months) - (years * (12)));
var days_to_remove = cljs.core.reduce.call(null,cljs.core._PLUS_,days_in_months);
var days = (cljs_time.core.in_days.call(null,interval__$1) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (cljs_time.core.in_hours.call(null,interval__$1) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (cljs_time.core.in_minutes.call(null,interval__$1) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (cljs_time.core.in_seconds.call(null,interval__$1) - seconds_to_remove);
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),years,new cljs.core.Keyword(null,"months","months",-45571637),months,new cljs.core.Keyword(null,"days","days",-1394072564),days,new cljs.core.Keyword(null,"hours","hours",58380855),hours,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds,new cljs.core.Keyword(null,"millis","millis",-1338288387),(cljs_time.core.in_millis.call(null,interval__$1) - ((1000) * (seconds + seconds_to_remove))));
});

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (period){
var period__$1 = this;
return period__$1;
});
cljs_time.core.today_at = (function cljs_time$core$today_at(var_args){
var args30247 = [];
var len__27082__auto___30252 = arguments.length;
var i__27083__auto___30253 = (0);
while(true){
if((i__27083__auto___30253 < len__27082__auto___30252)){
args30247.push((arguments[i__27083__auto___30253]));

var G__30254 = (i__27083__auto___30253 + (1));
i__27083__auto___30253 = G__30254;
continue;
} else {
}
break;
}

var G__30249 = args30247.length;
switch (G__30249) {
case 4:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30247.length)].join('')));

}
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4 = (function (hours,minutes,seconds,millis){
var midnight = (function (){var G__30250 = (new goog.date.Date());
G__30250.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__30250;
})();
var G__30251 = (new goog.date.UtcDateTime((0)));
G__30251.setYear(midnight.getYear());

G__30251.setMonth(midnight.getMonth());

G__30251.setDate(midnight.getDate());

G__30251.setHours(hours);

G__30251.setMinutes(minutes);

G__30251.setSeconds(seconds);

G__30251.setMilliseconds(millis);

return G__30251;
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljs_time.core.today_at.call(null,hours,minutes,seconds,(0));
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljs_time.core.today_at.call(null,hours,minutes,(0));
});

cljs_time.core.today_at.cljs$lang$maxFixedArity = 4;

cljs_time.core.do_at_STAR_ = (function cljs_time$core$do_at_STAR_(base_date_time,body_fn){
var _STAR_ms_fn_STAR_30257 = cljs_time.core._STAR_ms_fn_STAR_;
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.static_ms_fn.call(null,base_date_time.getTime());

try{return body_fn.call(null);
}finally {cljs_time.core._STAR_ms_fn_STAR_ = _STAR_ms_fn_STAR_30257;
}});

//# sourceMappingURL=core.js.map?rel=1480126459419