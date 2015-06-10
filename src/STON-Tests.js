define("amber-ston/STON-Tests", ["amber/boot", "amber_core/SUnit", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('STON-Tests');
$core.packages["STON-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["STON-Tests"].transport = {"type":"amd","amdNamespace":"amber-ston"};

$core.addClass('STONReaderTests', $globals.TestCase, [], 'STON-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONReaderTests.comment="STONReaderTests test materialization.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "materialize:",
protocol: 'private',
fn: function (string) {
var self=this;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($STON())._reader();
$recv($2)._on_($recv(string)._readStream());
$3=$recv($2)._next();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"materialize:",{string:string},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["string"],
source: "materialize: string\x0a\x09^ STON reader \x0a\x09\x09on: string readStream;\x0a\x09\x09next",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["on:", "reader", "readStream", "next"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testAssociation",
protocol: 'tests',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$5,$6,$4,$8,$9,$7,$11,$12,$10,$14,$15,$13,$17,$18,$16,$20,$21,$19,$23,$24,$22,$26,$27,$25;
$2=self._materialize_("'foo':1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=1;
//>>excludeEnd("ctx");
$3="foo".__minus_gt((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$5=self._materialize_("#bar:2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=2;
//>>excludeEnd("ctx");
$6="bar".__minus_gt((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__eq($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$8=self._materialize_("'foo bar':#ok");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=3;
//>>excludeEnd("ctx");
$9="foo bar".__minus_gt("ok");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$7=$recv($8).__eq($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$11=self._materialize_("123:456");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=4;
//>>excludeEnd("ctx");
$12=(123).__minus_gt((456));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$10=$recv($11).__eq($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=4;
//>>excludeEnd("ctx");
self._assert_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$14=self._materialize_("'foo' : 1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=5;
//>>excludeEnd("ctx");
$15="foo".__minus_gt((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=5;
//>>excludeEnd("ctx");
$13=$recv($14).__eq($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=5;
//>>excludeEnd("ctx");
self._assert_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$17=self._materialize_("#bar : 2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=6;
//>>excludeEnd("ctx");
$18="bar".__minus_gt((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=6;
//>>excludeEnd("ctx");
$16=$recv($17).__eq($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=6;
//>>excludeEnd("ctx");
self._assert_($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=6;
//>>excludeEnd("ctx");
$20=self._materialize_("'foo bar' : #ok");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=7;
//>>excludeEnd("ctx");
$21="foo bar".__minus_gt("ok");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=7;
//>>excludeEnd("ctx");
$19=$recv($20).__eq($21);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=7;
//>>excludeEnd("ctx");
self._assert_($19);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=7;
//>>excludeEnd("ctx");
$23=self._materialize_("123 : -456");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=8;
//>>excludeEnd("ctx");
$24=(123).__minus_gt((-456));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=8;
//>>excludeEnd("ctx");
$22=$recv($23).__eq($24);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=8;
//>>excludeEnd("ctx");
self._assert_($22);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=8;
//>>excludeEnd("ctx");
$26=self._materialize_("#foo : 1 : 2");
$27="foo".__minus_gt((1).__minus_gt((2)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=9;
//>>excludeEnd("ctx");
$25=$recv($26).__eq($27);
self._assert_($25);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAssociation",{},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAssociation\x0a\x09self assert: (self materialize: '''foo'':1') = ('foo' -> 1).\x0a\x09self assert: (self materialize: '#bar:2') = (#bar -> 2).\x0a\x09self assert: (self materialize: '''foo bar'':#ok') = ('foo bar' -> #ok).\x0a\x09self assert: (self materialize: '123:456') = (123 -> 456).\x0a\x09\x0a\x09self assert: (self materialize: '''foo'' : 1') = ('foo' -> 1).\x0a\x09self assert: (self materialize: '#bar : 2') = (#bar -> 2).\x0a\x09self assert: (self materialize: '''foo bar'' : #ok') = ('foo bar' -> #ok).\x0a\x09self assert: (self materialize: '123 : -456') = (123 -> -456).\x0a\x09\x0a\x09self assert: (self materialize: '#foo : 1 : 2') = (#foo -> (1 -> 2))",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "materialize:", "->"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testBoolean",
protocol: 'tests',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._materialize_("true");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv(self._materialize_("false")).__eq(false));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBoolean",{},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBoolean\x0a\x09self assert: (self materialize: 'true') = true.\x0a\x09self assert: (self materialize: 'false') = false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "materialize:"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testByteArray",
protocol: 'tests',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_($recv(self._materialize_("ByteArray['010203']")).__eq([(1), (2), (3)]._asByteArray()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testByteArray",{},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testByteArray\x0a\x09self assert: (self materialize: 'ByteArray[''010203'']') = #(1 2 3) asByteArray",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "materialize:", "asByteArray"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testCharacter",
protocol: 'tests',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_($recv(self._materialize_("Character['A']")).__eq_eq("A"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCharacter",{},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCharacter\x0a\x09self assert: (self materialize: 'Character[''A'']') == $A.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "==", "materialize:"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testConvertingNewLines",
protocol: 'tests',
fn: function () {
var self=this;
var input,result,output;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $6,$5,$4,$3,$2,$7,$1,$12,$11,$10,$13,$9,$8,$14,$16,$17,$15,$18,$23,$22,$21,$24,$20,$19,$25,$26,$27;
$6=$recv($String())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$5="'line ending with CR".__comma($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
$4=$recv($5).__comma("line ending with LF");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($recv($String())._lf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$2=$recv($3).__comma("line ending with CRLF");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$7=$recv($String())._crlf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["crlf"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
input=$recv($1).__comma("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$12=$recv($String())._crlf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["crlf"]=2;
//>>excludeEnd("ctx");
$11="line ending with CR".__comma($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=11;
//>>excludeEnd("ctx");
$10=$recv($11).__comma("line ending with LF");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=10;
//>>excludeEnd("ctx");
$13=$recv($String())._crlf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["crlf"]=3;
//>>excludeEnd("ctx");
$9=$recv($10).__comma($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=9;
//>>excludeEnd("ctx");
$8=$recv($9).__comma("line ending with CRLF");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=8;
//>>excludeEnd("ctx");
$14=$recv($String())._crlf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["crlf"]=4;
//>>excludeEnd("ctx");
output=$recv($8).__comma($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=7;
//>>excludeEnd("ctx");
$16=$recv($STON())._reader();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["reader"]=1;
//>>excludeEnd("ctx");
$17=$recv(input)._readStream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["readStream"]=1;
//>>excludeEnd("ctx");
$15=$recv($16)._on_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:"]=1;
//>>excludeEnd("ctx");
$recv($15)._newLine_($recv($String())._crlf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newLine:"]=1;
//>>excludeEnd("ctx");
$recv($15)._convertNewLines_(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["convertNewLines:"]=1;
//>>excludeEnd("ctx");
$18=$recv($15)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=1;
//>>excludeEnd("ctx");
result=$18;
self._assert_equals_(result,output);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$23=$recv($String())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=2;
//>>excludeEnd("ctx");
$22="line ending with CR".__comma($23);
$21=$recv($22).__comma("line ending with LF");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=15;
//>>excludeEnd("ctx");
$24=$recv($String())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=3;
//>>excludeEnd("ctx");
$20=$recv($21).__comma($24);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=14;
//>>excludeEnd("ctx");
$19=$recv($20).__comma("line ending with CRLF");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=13;
//>>excludeEnd("ctx");
$25=$recv($String())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=4;
//>>excludeEnd("ctx");
output=$recv($19).__comma($25);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=12;
//>>excludeEnd("ctx");
$26=$recv($recv($STON())._reader())._on_($recv(input)._readStream());
$recv($26)._newLine_($recv($String())._cr());
$recv($26)._convertNewLines_(true);
$27=$recv($26)._next();
result=$27;
self._assert_equals_(result,output);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testConvertingNewLines",{input:input,result:result,output:output},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testConvertingNewLines\x0a\x09| input result output |\x0a\x09input := '''line ending with CR', String cr, \x0a\x09\x09'line ending with LF', String lf, \x0a\x09\x09'line ending with CRLF', String crlf, ''''.\x0a\x09output := 'line ending with CR', String crlf, \x0a\x09\x09'line ending with LF', String crlf, \x0a\x09\x09'line ending with CRLF', String crlf.\x0a\x09result := (STON reader on: input readStream) newLine: String crlf; convertNewLines: true; next.\x0a\x09self assert: result equals: output.\x0a\x09output := 'line ending with CR', String cr, \x0a\x09\x09'line ending with LF', String cr, \x0a\x09\x09'line ending with CRLF', String cr.\x0a\x09result := (STON reader on: input readStream) newLine: String cr; convertNewLines: true; next.\x0a\x09self assert: result equals: output",
referencedClasses: ["String", "STON"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "lf", "crlf", "newLine:", "on:", "reader", "readStream", "convertNewLines:", "next", "assert:equals:"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testDate",
protocol: 'tests',
fn: function () {
var self=this;
var date;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
date=$recv($Date())._year_month_day_((2012),(1),(1));
self._assert_($recv(self._materialize_("Date['2012-01-01']")).__eq(date));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDate",{date:date},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDate\x0a\x09| date |\x0a\x09date := Date year: 2012 month: 1 day: 1.\x0a\x09self assert: (self materialize: 'Date[''2012-01-01'']') = date",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["year:month:day:", "assert:", "=", "materialize:"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testDateAndTime",
protocol: 'tests',
fn: function () {
var self=this;
var dateAndTime;
function $DateAndTime(){return $globals.DateAndTime||(typeof DateAndTime=="undefined"?nil:DateAndTime)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
dateAndTime=$recv($DateAndTime())._year_month_day_hour_minute_second_offset_((2012),(1),(1),(6),(30),(15),(1)._hour());
self._assert_($recv(self._materialize_("DateAndTime['2012-01-01T06:30:15+01:00']")).__eq(dateAndTime));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDateAndTime",{dateAndTime:dateAndTime},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDateAndTime\x0a\x09| dateAndTime |\x0a\x09dateAndTime := DateAndTime year: 2012 month: 1 day: 1 hour: 6 minute: 30 second: 15 offset: 1 hour.\x0a\x09self assert: (self materialize: 'DateAndTime[''2012-01-01T06:30:15+01:00'']') = dateAndTime",
referencedClasses: ["DateAndTime"],
//>>excludeEnd("ide");
messageSends: ["year:month:day:hour:minute:second:offset:", "hour", "assert:", "=", "materialize:"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testDictionary",
protocol: 'tests',
fn: function () {
var self=this;
var collection;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4;
$2=$recv($STON())._mapClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["mapClass"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_((1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_((2),(2));
$3=$recv($1)._yourself();
collection=$3;
$5=self._materialize_("{1:1,2:2}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__eq(collection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv(self._materialize_("{}")).__eq($recv($recv($STON())._mapClass())._new()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDictionary",{collection:collection},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDictionary\x0a\x09| collection |\x0a\x09collection := STON mapClass new at: 1 put: 1; at: 2 put: 2; yourself.\x0a\x09self assert: (self materialize: '{1:1,2:2}') = collection.\x0a\x09self assert: (self materialize: '{}') = STON mapClass new.",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new", "mapClass", "yourself", "assert:", "=", "materialize:"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testDictionaryWithComplexKeys",
protocol: 'tests',
fn: function () {
var self=this;
var collection,reader;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
function $STONReader(){return $globals.STONReader||(typeof STONReader=="undefined"?nil:STONReader)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv($recv($STON())._mapClass())._new();
$recv($1)._at_put_(true,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_(["foo"],(2));
$2=$recv($1)._yourself();
collection=$2;
reader=$recv($STONReader())._on_("{true:1,[#foo]:2}"._readStream());
$3=reader;
$recv($3)._allowComplexMapKeys_(true);
self._assert_($recv($recv(reader)._next()).__eq(collection));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDictionaryWithComplexKeys",{collection:collection,reader:reader},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDictionaryWithComplexKeys\x0a\x09| collection reader |\x0a\x09collection := STON mapClass new at: true put: 1; at: #(foo) put: 2; yourself.\x0a\x09(reader := STONReader on: '{true:1,[#foo]:2}' readStream)\x0a\x09\x09allowComplexMapKeys: true.\x0a\x09self assert: reader next = collection",
referencedClasses: ["STON", "STONReader"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new", "mapClass", "yourself", "allowComplexMapKeys:", "on:", "readStream", "assert:", "=", "next"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testError",
protocol: 'tests',
fn: function () {
var self=this;
function $STONReaderError(){return $globals.STONReaderError||(typeof STONReaderError=="undefined"?nil:STONReaderError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
["foo", "{foo:}", "{foo,}", "[1,]", "+1", "]", "#", "", "  ", "\x09", "nul", "tru", "fals"]._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._materialize_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$STONReaderError());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testError",{},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testError\x0a\x09#( 'foo' '{foo:}' '{foo,}' '[1,]' '+1' ']' '#' '' '  ' '\x09' 'nul' 'tru' 'fals' ) do: [ :each |\x0a\x09\x09self \x0a\x09\x09\x09should: [ self materialize: each ] \x0a\x09\x09\x09raise: STONReaderError ]",
referencedClasses: ["STONReaderError"],
//>>excludeEnd("ide");
messageSends: ["do:", "should:raise:", "materialize:"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testFloat",
protocol: 'tests',
fn: function () {
var self=this;
function $Float(){return $globals.Float||(typeof Float=="undefined"?nil:Float)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$8,$9,$7,$11,$12,$10,$14,$16,$15,$13,$18,$20,$19,$17;
$2=self._materialize_("1.5");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq((1.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=self._materialize_("-1.5");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq((-1.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$6=self._materialize_("0.0");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$8=$recv($Float())._pi();
$9=self._materialize_("3.14149");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=4;
//>>excludeEnd("ctx");
$7=$recv($8)._closeTo_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["closeTo:"]=1;
//>>excludeEnd("ctx");
self._assert_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$11=(1).__slash((3));
$12=self._materialize_("0.333333");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=5;
//>>excludeEnd("ctx");
$10=$recv($11)._closeTo_($12);
self._assert_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$14=self._materialize_("1.0e100");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=6;
//>>excludeEnd("ctx");
$16=(10)._raisedTo_((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["raisedTo:"]=1;
//>>excludeEnd("ctx");
$15=$recv($16)._asFloat();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asFloat"]=1;
//>>excludeEnd("ctx");
$13=$recv($14).__eq($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=4;
//>>excludeEnd("ctx");
self._assert_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=6;
//>>excludeEnd("ctx");
$18=self._materialize_("1.0e-100");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=7;
//>>excludeEnd("ctx");
$20=(10)._raisedTo_((-100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["raisedTo:"]=2;
//>>excludeEnd("ctx");
$19=$recv($20)._asFloat();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asFloat"]=2;
//>>excludeEnd("ctx");
$17=$recv($18).__eq($19);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=5;
//>>excludeEnd("ctx");
self._assert_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=7;
//>>excludeEnd("ctx");
self._assert_($recv(self._materialize_("-1.0e-100")).__eq($recv($recv((10)._raisedTo_((-100)))._asFloat())._negated()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFloat",{},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFloat\x0a\x09self assert: (self materialize: '1.5') = 1.5.\x0a\x09self assert: (self materialize: '-1.5') = -1.5.\x0a\x09self assert: (self materialize: '0.0') = 0.0.\x0a\x09self assert: (Float pi closeTo: (self materialize: '3.14149')).\x0a\x09self assert: (1/3 closeTo: (self materialize: '0.333333')).\x0a\x09self assert: (self materialize: '1.0e100') = (10 raisedTo: 100) asFloat.\x0a\x09self assert: (self materialize: '1.0e-100') = (10 raisedTo: -100) asFloat.\x0a\x09self assert: (self materialize: '-1.0e-100') = (10 raisedTo: -100) asFloat negated.",
referencedClasses: ["Float"],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "materialize:", "closeTo:", "pi", "/", "asFloat", "raisedTo:", "negated"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testIdentityDictionary",
protocol: 'tests',
fn: function () {
var self=this;
var collection;
function $IdentityDictionary(){return $globals.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
$1=$recv($IdentityDictionary())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_((1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_((2),(2));
$2=$recv($1)._yourself();
collection=$2;
$4=self._materialize_("IdentityDictionary{1:1,2:2}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__eq(collection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv(self._materialize_("IdentityDictionary{}")).__eq($recv($IdentityDictionary())._new()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIdentityDictionary",{collection:collection},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIdentityDictionary\x0a\x09| collection |\x0a\x09collection := IdentityDictionary new at: 1 put: 1; at: 2 put: 2; yourself.\x0a\x09self assert: (self materialize: 'IdentityDictionary{1:1,2:2}') = collection.\x0a\x09self assert: (self materialize: 'IdentityDictionary{}') = IdentityDictionary new.",
referencedClasses: ["IdentityDictionary"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new", "yourself", "assert:", "=", "materialize:"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testIllegalCharacterEscapes",
protocol: 'tests',
fn: function () {
var self=this;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
function $STONReaderError(){return $globals.STONReaderError||(typeof STONReaderError=="undefined"?nil:STONReaderError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($STON())._fromString_("'\x5ca'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["fromString:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$STONReaderError());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=1;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($STON())._fromString_("'\x5cu'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["fromString:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$STONReaderError());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=2;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($STON())._fromString_("'\x5cu00'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["fromString:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}),$STONReaderError());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=3;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($STON())._fromString_("'\x5cu000'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["fromString:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}),$STONReaderError());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=4;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($STON())._fromString_("'\x5c*'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}),$STONReaderError());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIllegalCharacterEscapes",{},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIllegalCharacterEscapes\x0a\x09self should: [ STON fromString: '''\x5ca''' ] raise: STONReaderError.\x0a\x09self should: [ STON fromString: '''\x5cu''' ] raise: STONReaderError.\x0a\x09self should: [ STON fromString: '''\x5cu00''' ] raise: STONReaderError.\x0a\x09self should: [ STON fromString: '''\x5cu000''' ] raise: STONReaderError.\x0a\x09self should: [ STON fromString: '''\x5c*''' ] raise: STONReaderError",
referencedClasses: ["STON", "STONReaderError"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "fromString:"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testInteger",
protocol: 'tests',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$8,$7;
$2=self._materialize_("1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=self._materialize_("-1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq((-1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$6=self._materialize_("0");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$8=self._materialize_("1234567890");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=4;
//>>excludeEnd("ctx");
$7=$recv($8).__eq((1234567890));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=4;
//>>excludeEnd("ctx");
self._assert_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
self._assert_($recv(self._materialize_("-1234567890")).__eq((-1234567890)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInteger",{},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInteger\x0a\x09self assert: (self materialize: '1') = 1.\x0a\x09self assert: (self materialize: '-1') = -1.\x0a\x09self assert: (self materialize: '0') = 0.\x0a\x09self assert: (self materialize: '1234567890') = 1234567890.\x0a\x09self assert: (self materialize: '-1234567890') = -1234567890",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "materialize:"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testJsonString",
protocol: 'tests',
fn: function () {
var self=this;
var string;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $Character(){return $globals.Character||(typeof Character=="undefined"?nil:Character)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5;
$2=self._materialize_("\x22foo\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=self._materialize_("\x22FOO\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq("FOO");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$6=self._materialize_("\x22\x5cu00E9l\x5cu00E8ve en Fran\x5cu00E7ais\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__eq("élève en Français");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
string=$recv($String())._withAll_(["\x22","'","\x5c",$recv($Character())._tab(),$recv($Character())._cr(),$recv($Character())._lf(),$recv($Character())._newPage(),$recv($Character())._backspace()]);
self._assert_($recv(self._materialize_("\x22\x5c\x22\x5c'\x5c\x5c\x5ct\x5cr\x5cn\x5cf\x5cb\x22")).__eq(string));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testJsonString",{string:string},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testJsonString\x0a\x09\x22Allow double quotes for backwards JSON compatibility\x22\x0a\x09\x0a\x09| string |\x0a\x09self assert: (self materialize: '\x22foo\x22') = 'foo'.\x0a\x09self assert: (self materialize: '\x22FOO\x22') = 'FOO'.\x0a\x09self assert: (self materialize: '\x22\x5cu00E9l\x5cu00E8ve en Fran\x5cu00E7ais\x22') = 'élève en Français'.\x0a\x09string := String withAll: { \x0a\x09\x09$\x22. $'. $\x5c. Character tab. Character cr. Character lf.  Character newPage. Character backspace }.\x0a\x09self assert: (self materialize: '\x22\x5c\x22\x5c''\x5c\x5c\x5ct\x5cr\x5cn\x5cf\x5cb\x22') = string.",
referencedClasses: ["String", "Character"],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "materialize:", "withAll:", "tab", "cr", "lf", "newPage", "backspace"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testList",
protocol: 'tests',
fn: function () {
var self=this;
var string;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$6,$5,$3;
$2=$recv($STON())._listClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["listClass"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($Array());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=self._materialize_("[1,2,3]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=1;
//>>excludeEnd("ctx");
$6=$recv($STON())._listClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["listClass"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._with_with_with_((1),(2),(3));
$3=$recv($4).__eq($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
self._assert_($recv(self._materialize_("[]")).__eq($recv($recv($STON())._listClass())._new()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testList",{string:string},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testList\x0a\x09| string |\x0a\x09self assert: STON listClass = Array.\x0a\x09self assert: (self materialize: '[1,2,3]') = (STON listClass with: 1 with: 2 with: 3).\x0a\x09self assert: (self materialize: '[]') = STON listClass new",
referencedClasses: ["STON", "Array"],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "listClass", "materialize:", "with:with:with:", "new"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testMap",
protocol: 'tests',
fn: function () {
var self=this;
var string;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$5,$4,$6,$3,$1;
$2=self._materialize_("{#foo:1}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=1;
//>>excludeEnd("ctx");
$5=$recv($STON())._mapClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["mapClass"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($4)._at_put_("foo",(1));
$6=$recv($4)._yourself();
$3=$6;
$1=$recv($2).__eq($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv(self._materialize_("{}")).__eq($recv($recv($STON())._mapClass())._new()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMap",{string:string},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMap\x0a\x09| string |\x0a\x09self assert: (self materialize: '{#foo:1}') = (STON mapClass new at: #foo put: 1; yourself).\x0a\x09self assert: (self materialize: '{}') = STON mapClass new",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "materialize:", "at:put:", "new", "mapClass", "yourself"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testMultiple",
protocol: 'tests',
fn: function () {
var self=this;
var reader;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8;
reader=$recv($recv($STON())._reader())._on_("123 -123 nil #foo true [ 0 ] false { #one : 1 }"._readStream());
$1=$recv(reader)._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atEnd"]=1;
//>>excludeEnd("ctx");
self._deny_($1);
$2=$recv(reader)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($2,(123));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$3=$recv(reader)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($3,(-123));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$4=$recv(reader)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($4,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$5=$recv(reader)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($5,"foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$6=$recv(reader)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($6,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$7=$recv(reader)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=6;
//>>excludeEnd("ctx");
self._assert_equals_($7,[(0)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=6;
//>>excludeEnd("ctx");
$8=$recv(reader)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=7;
//>>excludeEnd("ctx");
self._assert_equals_($8,false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=7;
//>>excludeEnd("ctx");
self._assert_equals_($recv(reader)._next(),$recv($Dictionary())._with_("one".__minus_gt((1))));
self._assert_($recv(reader)._atEnd());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMultiple",{reader:reader},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMultiple\x0a\x09| reader |\x0a\x09reader := STON reader \x0a\x09\x09on: '123 -123 nil #foo true [ 0 ] false { #one : 1 }' readStream.\x0a\x09self deny: reader atEnd.\x0a\x09self assert: reader next equals: 123. \x0a\x09self assert: reader next equals: -123. \x0a\x09self assert: reader next equals: nil. \x0a\x09self assert: reader next equals: #foo. \x0a\x09self assert: reader next equals: true. \x0a\x09self assert: reader next equals: { 0 }. \x0a\x09self assert: reader next equals: false. \x0a\x09self assert: reader next equals: (Dictionary with: #one -> 1). \x0a\x09self assert: reader atEnd.",
referencedClasses: ["STON", "Dictionary"],
//>>excludeEnd("ide");
messageSends: ["on:", "reader", "readStream", "deny:", "atEnd", "assert:equals:", "next", "with:", "->", "assert:"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testNewSymbol",
protocol: 'tests',
fn: function () {
var self=this;
var n,notASymbol,shouldBeSymbol;
function $Symbol(){return $globals.Symbol||(typeof Symbol=="undefined"?nil:Symbol)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
n=(0);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
notASymbol="notASymbol".__comma($recv(n)._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=notASymbol;
return $recv($Symbol())._hasInterned_ifTrue_($1,(function(symbol){
return symbol;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
n=$recv(n).__plus((1));
return n;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
shouldBeSymbol=self._materialize_("#".__comma(notASymbol));
self._assert_($recv($recv(shouldBeSymbol)._isSymbol())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(notASymbol).__eq($recv(shouldBeSymbol)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNewSymbol",{n:n,notASymbol:notASymbol,shouldBeSymbol:shouldBeSymbol},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNewSymbol\x0a\x09| n notASymbol shouldBeSymbol |\x0a\x09\x0a\x09\x22Find a name that has not yet been interned\x22\x0a\x09n := 0.\x0a\x09[ Symbol hasInterned: (notASymbol := 'notASymbol', n printString) ifTrue: [ :symbol | symbol ] ] \x0a\x09\x09whileTrue: [ n := n + 1 ].\x0a\x09\x22Parsing the new, not yet interned name should create a new Symbol\x22\x0a\x09shouldBeSymbol := self materialize: '#', notASymbol.\x0a\x09self assert: (shouldBeSymbol isSymbol and: [ notASymbol = shouldBeSymbol asString ])",
referencedClasses: ["Symbol"],
//>>excludeEnd("ide");
messageSends: ["whileTrue:", "hasInterned:ifTrue:", ",", "printString", "+", "materialize:", "assert:", "and:", "isSymbol", "=", "asString"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testNil",
protocol: 'tests',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_($recv(self._materialize_("nil")).__eq(nil));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNil",{},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNil\x0a\x09self assert: (self materialize: 'nil') = nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "materialize:"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testNull",
protocol: 'tests',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_($recv(self._materialize_("null")).__eq(nil));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNull",{},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNull\x0a\x09self assert: (self materialize: 'null') = nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "materialize:"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testObject",
protocol: 'tests',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._materialize_("Point[1,2]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=1;
//>>excludeEnd("ctx");
$3=(1).__at((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv(self._materialize_("Point[1.5,-0.5]")).__eq((1.5).__at((-0.5))));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testObject",{},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testObject\x0a\x09self assert: (self materialize: 'Point[1,2]') = (1@2).\x0a\x09self assert: (self materialize: 'Point[1.5,-0.5]') = (1.5 @ -0.5).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "materialize:", "@"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testOrderedCollection",
protocol: 'tests',
fn: function () {
var self=this;
var collection;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
collection=$recv($OrderedCollection())._with_with_with_((1),(2),(3));
$2=self._materialize_("OrderedCollection[1,2,3]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq(collection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv(self._materialize_("OrderedCollection[]")).__eq($recv($OrderedCollection())._new()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testOrderedCollection",{collection:collection},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testOrderedCollection\x0a\x09| collection |\x0a\x09collection := OrderedCollection with: 1 with: 2 with: 3.\x0a\x09self assert: (self materialize: 'OrderedCollection[1,2,3]') = collection.\x0a\x09self assert: (self materialize: 'OrderedCollection[]') = OrderedCollection new.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["with:with:with:", "assert:", "=", "materialize:", "new"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testPoint",
protocol: 'tests',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_($recv(self._materialize_("Point[1,2]")).__eq((1).__at((2))));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPoint",{},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPoint\x0a\x09self assert: (self materialize: 'Point[1,2]') = (1@2)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "materialize:", "@"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testReferenceCycle",
protocol: 'tests',
fn: function () {
var self=this;
var array;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
array=self._materialize_("[1,@1]");
$1=$recv($recv(array)._class()).__eq($recv($STON())._listClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$2=$recv($recv(array)._size()).__eq((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
self._assert_($recv($recv(array)._first()).__eq((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
self._assert_($recv($recv(array)._second()).__eq_eq(array));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReferenceCycle",{array:array},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReferenceCycle\x0a\x09| array |\x0a\x09array := (self materialize: '[1,@1]').\x0a\x09self assert: array class = STON listClass.\x0a\x09self assert: array size = 2.\x0a\x09self assert: array first = 1.\x0a\x09self assert: array second == array",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["materialize:", "assert:", "=", "class", "listClass", "size", "first", "==", "second"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testReferenceSharing",
protocol: 'tests',
fn: function () {
var self=this;
var one,array;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
one=["one"];
array=self._materialize_("[[#one],@2,@2]");
self._assert_($recv(array).__eq($recv($recv($STON())._listClass())._with_with_with_(one,one,one)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$2=$recv(array)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq_eq($recv(array)._second());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
self._assert_($recv($recv(array)._first()).__eq_eq($recv(array)._third()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReferenceSharing",{one:one,array:array},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReferenceSharing\x0a\x09| one array |\x0a\x09one := { #one }.\x0a\x09array := (self materialize: '[[#one],@2,@2]').\x0a\x09self assert: array = (STON listClass with: one with: one with: one).\x0a\x09self assert: array first == array second.\x0a\x09self assert: array first == array third",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["materialize:", "assert:", "=", "with:with:with:", "listClass", "==", "first", "second", "third"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testStreaming",
protocol: 'tests',
fn: function () {
var self=this;
var reader;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
reader=$recv($recv($STON())._reader())._on_("1 2 3 4 5 6 7 8 9 10"._readStream());
$1=$recv($recv($Array())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(reader)._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPut_($recv(reader)._next());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
})))._sum();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sum"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,[(1), (2), (3), (4), (5), (6), (7), (8), (9), (10)]._sum());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testStreaming",{reader:reader},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testStreaming\x0a\x09| reader |\x0a\x09reader := STON reader \x0a\x09\x09on: '1 2 3 4 5 6 7 8 9 10' readStream.\x0a\x09self \x0a\x09\x09assert: (Array streamContents: [ :stream |\x0a\x09\x09\x09[ reader atEnd] whileFalse: [ \x0a\x09\x09\x09\x09stream nextPut: reader next ] ]) sum\x0a\x09\x09equals: #(1 2 3 4 5 6 7 8 9 10) sum",
referencedClasses: ["STON", "Array"],
//>>excludeEnd("ide");
messageSends: ["on:", "reader", "readStream", "assert:equals:", "sum", "streamContents:", "whileFalse:", "atEnd", "nextPut:", "next"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testString",
protocol: 'tests',
fn: function () {
var self=this;
var string;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $Character(){return $globals.Character||(typeof Character=="undefined"?nil:Character)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5;
$2=self._materialize_("'foo'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=self._materialize_("'FOO'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq("FOO");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$6=self._materialize_("'\x5cu00E9l\x5cu00E8ve en Fran\x5cu00E7ais'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__eq("élève en Français");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
string=$recv($String())._withAll_(["\x22","'","\x5c",$recv($Character())._tab(),$recv($Character())._cr(),$recv($Character())._lf(),$recv($Character())._newPage(),$recv($Character())._backspace()]);
self._assert_($recv(self._materialize_("'\x5c\x22\x5c'\x5c\x5c\x5ct\x5cr\x5cn\x5cf\x5cb'")).__eq(string));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testString",{string:string},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testString\x0a\x09| string |\x0a\x09self assert: (self materialize: '''foo''') = 'foo'.\x0a\x09self assert: (self materialize: '''FOO''') = 'FOO'.\x0a\x09self assert: (self materialize: '''\x5cu00E9l\x5cu00E8ve en Fran\x5cu00E7ais''') = 'élève en Français'.\x0a\x09string := String withAll: { \x0a\x09\x09$\x22. $'. $\x5c. Character tab. Character cr. Character lf.  Character newPage. Character backspace }.\x0a\x09self assert: (self materialize: '''\x5c\x22\x5c''\x5c\x5c\x5ct\x5cr\x5cn\x5cf\x5cb''') = string.",
referencedClasses: ["String", "Character"],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "materialize:", "withAll:", "tab", "cr", "lf", "newPage", "backspace"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testSymbol",
protocol: 'tests',
fn: function () {
var self=this;
var string;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._materialize_("#'foo'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["materialize:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv(self._materialize_("#foo")).__eq("foo"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSymbol",{string:string},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSymbol\x0a\x09| string |\x0a\x09self assert: (self materialize: '#''foo''') = #foo.\x0a\x09self assert: (self materialize: '#foo') = #foo",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "materialize:"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testTime",
protocol: 'tests',
fn: function () {
var self=this;
var time;
function $Time(){return $globals.Time||(typeof Time=="undefined"?nil:Time)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
time=$recv($Time())._hour_minute_second_((6),(30),(15));
self._assert_($recv(self._materialize_("Time['06:30:15']")).__eq(time));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTime",{time:time},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTime\x0a\x09| time |\x0a\x09time := Time hour: 6 minute: 30 second: 15.\x0a\x09self assert: (self materialize: 'Time[''06:30:15'']') = time.",
referencedClasses: ["Time"],
//>>excludeEnd("ide");
messageSends: ["hour:minute:second:", "assert:", "=", "materialize:"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testUnknownClasses",
protocol: 'tests',
fn: function () {
var self=this;
var input,object;
function $STONReaderError(){return $globals.STONReaderError||(typeof STONReaderError=="undefined"?nil:STONReaderError)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
input="FooBar { #foo : 1, #bar : true }";
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._materialize_(input);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$STONReaderError());
$1=$recv($STON())._reader();
$recv($1)._acceptUnknownClasses_(true);
$recv($1)._on_($recv(input)._readStream());
$2=$recv($1)._next();
object=$2;
self._assert_equals_($recv(object)._class(),$recv($STON())._mapClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$3=$recv(object)._at_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($3,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$4=$recv(object)._at_("bar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
self._assert_($4);
self._assert_equals_($recv(object)._at_($recv($STON())._classNameKey()),"FooBar");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUnknownClasses",{input:input,object:object},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUnknownClasses\x0a\x09| input object |\x0a\x09input := 'FooBar { #foo : 1, #bar : true }'.\x0a\x09self should: [ self materialize: input ] raise: STONReaderError.\x0a\x09object := STON reader \x0a\x09\x09acceptUnknownClasses: true; \x0a\x09\x09on: input readStream; \x0a\x09\x09next.\x0a\x09self assert: object class equals: STON mapClass.\x0a\x09self assert: (object at: #foo) equals: 1.\x0a\x09self assert: (object at: #bar).\x0a\x09self assert: (object at: STON classNameKey) equals: #FooBar",
referencedClasses: ["STONReaderError", "STON"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "materialize:", "acceptUnknownClasses:", "reader", "on:", "readStream", "next", "assert:equals:", "class", "mapClass", "at:", "assert:", "classNameKey"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testUser",
protocol: 'tests',
fn: function () {
var self=this;
var user;
function $STONTestUser(){return $globals.STONTestUser||(typeof STONTestUser=="undefined"?nil:STONTestUser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
user=$recv($STONTestUser())._new();
$1=user;
$recv($1)._username_("john@foo.com");
$2=$recv($1)._password_("secret1");
self._assert_($recv(self._materialize_("STONTestUser{#username:'john@foo.com',#password:'secret1',#enabled:true}")).__eq(user));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUser",{user:user},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUser\x0a\x09| user |\x0a\x09(user := STONTestUser new)\x0a\x09\x09username: 'john@foo.com';\x0a\x09\x09password: 'secret1'.\x0a\x09self assert: (self materialize: 'STONTestUser{#username:''john@foo.com'',#password:''secret1'',#enabled:true}') = user",
referencedClasses: ["STONTestUser"],
//>>excludeEnd("ide");
messageSends: ["username:", "new", "password:", "assert:", "=", "materialize:"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testUser2",
protocol: 'tests',
fn: function () {
var self=this;
var user;
function $STONTestUser2(){return $globals.STONTestUser2||(typeof STONTestUser2=="undefined"?nil:STONTestUser2)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
user=$recv($STONTestUser2())._new();
$1=user;
$recv($1)._username_("john@foo.com");
$2=$recv($1)._password_("secret1");
self._assert_($recv(self._materialize_("STONTestUser2{#username:'john@foo.com',#password:'secret1',#enabled:true}")).__eq(user));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUser2",{user:user},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUser2\x0a\x09| user |\x0a\x09(user := STONTestUser2 new)\x0a\x09\x09username: 'john@foo.com';\x0a\x09\x09password: 'secret1'.\x0a\x09self assert: (self materialize: 'STONTestUser2{#username:''john@foo.com'',#password:''secret1'',#enabled:true}') = user",
referencedClasses: ["STONTestUser2"],
//>>excludeEnd("ide");
messageSends: ["username:", "new", "password:", "assert:", "=", "materialize:"]
}),
$globals.STONReaderTests);

$core.addMethod(
$core.method({
selector: "testWhitespace",
protocol: 'tests',
fn: function () {
var self=this;
var whitespace;
function $Character(){return $globals.Character||(typeof Character=="undefined"?nil:Character)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
whitespace=[$recv($Character())._space(),$recv($Character())._tab(),$recv($Character())._cr(),$recv($Character())._lf()];
self._assert_($recv(self._materialize_($recv(whitespace).__comma("123"))).__eq((123)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testWhitespace",{whitespace:whitespace},$globals.STONReaderTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testWhitespace\x0a\x09| whitespace |\x0a\x09whitespace := { Character space. Character tab. Character cr. Character lf }.\x0a\x09self assert: (self materialize: whitespace, '123') = 123",
referencedClasses: ["Character"],
//>>excludeEnd("ide");
messageSends: ["space", "tab", "cr", "lf", "assert:", "=", "materialize:", ","]
}),
$globals.STONReaderTests);



$core.addClass('STONTestDomainObject', $globals.Object, ['created', 'modified', 'integer', 'float', 'description', 'color', 'tags', 'bytes', 'boolean'], 'STON-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONTestDomainObject.comment="STONTestDomainObject is used to support unit tests.\x0a\x0aInstance Variables\x0a\x09boolean:\x09\x09<Boolean>\x0a\x09bytes:\x09\x09\x09<ByteArray>\x0a\x09color:\x09\x09\x09<Symbol>\x0a\x09created:\x09\x09<DateAndTime>\x0a\x09description:\x09<String>\x0a\x09float:\x09\x09\x09<Float>\x0a\x09integer:\x09\x09<Integer>\x0a\x09modified:\x09<DateAndTime>\x0a\x09tags:\x09\x09\x09<Array of: Symbol>";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: 'comparing',
fn: function (anObject) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$5,$6,$7,$8,$9,$10,$11,$4;
$1=self.__eq_eq(anObject);
if($core.assert($1)){
return true;
};
$3=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq($recv(anObject)._class());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if(!$core.assert($2)){
return false;
};
$5=$recv(self["@color"]).__eq($recv(anObject)._color());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$recv(self["@modified"]).__eq($recv(anObject)._modified());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=3;
//>>excludeEnd("ctx");
return $recv($6)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$7=$recv(self["@created"]).__eq($recv(anObject)._created());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=4;
//>>excludeEnd("ctx");
return $recv($7)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$8=$recv(self["@description"]).__eq($recv(anObject)._description());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["="]=5;
//>>excludeEnd("ctx");
return $recv($8)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
$9=$recv(self["@boolean"]).__eq($recv(anObject)._boolean());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["="]=6;
//>>excludeEnd("ctx");
return $recv($9)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx6) {
//>>excludeEnd("ctx");
return $recv($recv(self["@float"])._closeTo_($recv(anObject)._float()))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx7) {
//>>excludeEnd("ctx");
$10=$recv(self["@bytes"]).__eq($recv(anObject)._bytes());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx7.sendIdx["="]=7;
//>>excludeEnd("ctx");
return $recv($10)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx8) {
//>>excludeEnd("ctx");
$11=$recv(self["@integer"]).__eq($recv(anObject)._integer());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx8.sendIdx["="]=8;
//>>excludeEnd("ctx");
return $recv($11)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx9) {
//>>excludeEnd("ctx");
return $recv(self["@tags"]).__eq($recv(anObject)._tags());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx9) {$ctx9.fillBlock({},$ctx8,10)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx8) {$ctx8.fillBlock({},$ctx7,9)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx7.sendIdx["and:"]=7;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx7) {$ctx7.fillBlock({},$ctx6,8)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx6.sendIdx["and:"]=6;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["and:"]=5;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["and:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["and:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["and:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject},$globals.STONTestDomainObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "= anObject\x0a\x09\x22Answer whether the receiver and anObject represent the same object.\x22\x0a\x0a\x09self == anObject\x0a\x09\x09ifTrue: [ ^ true ].\x0a\x09self class = anObject class\x0a\x09\x09ifFalse: [ ^ false ].\x0a\x09^ color = anObject color\x0a\x09\x09and: [ \x0a\x09\x09\x09modified = anObject modified\x0a\x09\x09\x09\x09and: [ \x0a\x09\x09\x09\x09\x09created = anObject created\x0a\x09\x09\x09\x09\x09\x09and: [ \x0a\x09\x09\x09\x09\x09\x09\x09description = anObject description\x0a\x09\x09\x09\x09\x09\x09\x09\x09and: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09boolean = anObject boolean\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09and: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09(float closeTo: anObject float) \x09\x09\x22Use #closeTo: instead of #= to increase portability\x22\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09and: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09bytes = anObject bytes \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09and: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09integer = anObject integer \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09and: [ tags = anObject tags ] ] ] ] ] ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "==", "ifFalse:", "=", "class", "and:", "color", "modified", "created", "description", "boolean", "closeTo:", "float", "bytes", "integer", "tags"]
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "boolean",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@boolean"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "boolean\x0a\x09^ boolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "boolean:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@boolean"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "boolean: anObject\x0a\x09boolean := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "bytes",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@bytes"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bytes\x0a\x09^ bytes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "bytes:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@bytes"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "bytes: anObject\x0a\x09bytes := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "color",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@color"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "color\x0a\x09^ color",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "color:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@color"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "color: anObject\x0a\x09color := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "created",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@created"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "created\x0a\x09^ created",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "created:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@created"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "created: anObject\x0a\x09created := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "description",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@description"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "description\x0a\x09^ description",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "description:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@description"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "description: anObject\x0a\x09description := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "float",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@float"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "float\x0a\x09^ float",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "float:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@float"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "float: anObject\x0a\x09float := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "hash",
protocol: 'comparing',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$4,$6,$8,$10,$12,$14,$16,$15,$13,$11,$9,$7,$5,$3,$1;
$2=$recv(self["@color"])._hash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hash"]=1;
//>>excludeEnd("ctx");
$4=$recv(self["@modified"])._hash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hash"]=2;
//>>excludeEnd("ctx");
$6=$recv(self["@created"])._hash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hash"]=3;
//>>excludeEnd("ctx");
$8=$recv(self["@description"])._hash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hash"]=4;
//>>excludeEnd("ctx");
$10=$recv(self["@boolean"])._hash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hash"]=5;
//>>excludeEnd("ctx");
$12=$recv(self["@float"])._hash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hash"]=6;
//>>excludeEnd("ctx");
$14=$recv(self["@bytes"])._hash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hash"]=7;
//>>excludeEnd("ctx");
$16=$recv(self["@integer"])._hash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hash"]=8;
//>>excludeEnd("ctx");
$15=$recv($16)._bitXor_($recv(self["@tags"])._hash());
$13=$recv($14)._bitXor_($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bitXor:"]=7;
//>>excludeEnd("ctx");
$11=$recv($12)._bitXor_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bitXor:"]=6;
//>>excludeEnd("ctx");
$9=$recv($10)._bitXor_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bitXor:"]=5;
//>>excludeEnd("ctx");
$7=$recv($8)._bitXor_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bitXor:"]=4;
//>>excludeEnd("ctx");
$5=$recv($6)._bitXor_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bitXor:"]=3;
//>>excludeEnd("ctx");
$3=$recv($4)._bitXor_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bitXor:"]=2;
//>>excludeEnd("ctx");
$1=$recv($2)._bitXor_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bitXor:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hash",{},$globals.STONTestDomainObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hash\x0a\x09\x22Answer an integer value that is related to the identity of the receiver.\x22\x0a\x0a\x09^ color hash\x0a\x09\x09bitXor:\x0a\x09\x09\x09(modified hash\x0a\x09\x09\x09\x09bitXor:\x0a\x09\x09\x09\x09\x09(created hash\x0a\x09\x09\x09\x09\x09\x09bitXor:\x0a\x09\x09\x09\x09\x09\x09\x09(description hash\x0a\x09\x09\x09\x09\x09\x09\x09\x09bitXor: (boolean hash bitXor: (float hash bitXor: (bytes hash bitXor: (integer hash bitXor: tags hash)))))))",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bitXor:", "hash"]
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function () {
var self=this;
function $DateAndTime(){return $globals.DateAndTime||(typeof DateAndTime=="undefined"?nil:DateAndTime)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@modified"]=$recv($DateAndTime())._now();
self["@created"]=self["@modified"];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.STONTestDomainObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09created := modified := DateAndTime now.",
referencedClasses: ["DateAndTime"],
//>>excludeEnd("ide");
messageSends: ["now"]
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "integer",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@integer"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "integer\x0a\x09^ integer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "integer:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@integer"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "integer: anObject\x0a\x09integer := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "modified",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@modified"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "modified\x0a\x09^ modified",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "modified:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@modified"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "modified: anObject\x0a\x09modified := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "tags",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@tags"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tags\x0a\x09^ tags",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);

$core.addMethod(
$core.method({
selector: "tags:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@tags"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "tags: anObject\x0a\x09tags := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject);


$core.addMethod(
$core.method({
selector: "dummy",
protocol: 'instance creation',
fn: function () {
var self=this;
function $Float(){return $globals.Float||(typeof Float=="undefined"?nil:Float)}
function $ByteArray(){return $globals.ByteArray||(typeof ByteArray=="undefined"?nil:ByteArray)}
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$7,$6,$8,$9,$10,$12,$11,$13,$14,$15,$16,$18,$19,$17,$20,$1;
$2=self._new();
$3=$2;
$4=(999999)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$recv($3)._integer_($4);
$5=$2;
$7=(999)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=2;
//>>excludeEnd("ctx");
$6=$recv($7).__slash($recv($Float())._pi());
$recv($5)._float_($6);
$8=$2;
$9=[true, false]._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=3;
//>>excludeEnd("ctx");
$recv($8)._boolean_($9);
$10=$2;
$11=$recv($ByteArray())._streamContents_((function(out){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (32)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$12=(255)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["atRandom"]=4;
//>>excludeEnd("ctx");
return $recv(out)._nextPut_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["timesRepeat:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({out:out},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["streamContents:"]=1;
//>>excludeEnd("ctx");
$recv($10)._bytes_($11);
$recv($2)._description_($recv($String())._streamContents_((function(out){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$13=(16)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["atRandom"]=5;
//>>excludeEnd("ctx");
return $recv($13)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(out)._nextPutAll_("Blah");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({out:out},$ctx1,3)});
//>>excludeEnd("ctx");
})));
$14=$2;
$15=["red", "green", "blue"]._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=6;
//>>excludeEnd("ctx");
$recv($14)._color_($15);
$16=$2;
$18=["one", "two", "three"]._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=7;
//>>excludeEnd("ctx");
$19=["alpha", "beta", "gamma"]._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=8;
//>>excludeEnd("ctx");
$17=$recv($Array())._with_with_with_($18,$19,["low", "medium", "high"]._atRandom());
$recv($16)._tags_($17);
$20=$recv($2)._yourself();
$1=$20;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dummy",{},$globals.STONTestDomainObject.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dummy\x0a\x09^ self new\x0a\x09\x09integer: 999999 atRandom;\x0a\x09\x09float: 999 atRandom / Float pi;\x0a\x09\x09boolean: #(true false) atRandom;\x0a\x09\x09bytes: (ByteArray streamContents: [ :out | 32 timesRepeat: [ out nextPut: 255 atRandom ] ]);\x0a\x09\x09description: (String streamContents: [ :out | 16 atRandom timesRepeat: [ out nextPutAll: 'Blah' ] ]);\x0a\x09\x09color: #(#red #green #blue) atRandom;\x0a\x09\x09tags: (Array \x0a\x09\x09\x09with: #(#one #two #three) atRandom\x0a \x09\x09\x09with: #(#alpha #beta #gamma) atRandom \x0a\x09\x09\x09with: #(#low #medium #high) atRandom);\x0a\x09\x09yourself",
referencedClasses: ["Float", "ByteArray", "String", "Array"],
//>>excludeEnd("ide");
messageSends: ["integer:", "new", "atRandom", "float:", "/", "pi", "boolean:", "bytes:", "streamContents:", "timesRepeat:", "nextPut:", "description:", "nextPutAll:", "color:", "tags:", "with:with:with:", "yourself"]
}),
$globals.STONTestDomainObject.klass);

$core.addMethod(
$core.method({
selector: "stonName",
protocol: 'ston-core',
fn: function () {
var self=this;
return "TestDomainObject";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stonName\x0a\x09^ #TestDomainObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestDomainObject.klass);


$core.addClass('STONTestMap', $globals.Dictionary, [], 'STON-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONTestMap.comment="STONTestMap is used to support unit tests.\x0a\x0aI am a Dictionary but I don't print my elements during #printOn: to allow safe inspection of structures containing cycles that would otherwise lead to infinite loops.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "printElementsOn:",
protocol: 'printing',
fn: function (stream) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(stream)._nextPut_("(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPut_("#");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._print_(self._size());
$1=$recv(stream)._nextPut_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printElementsOn:",{stream:stream},$globals.STONTestMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printElementsOn: stream\x0a\x09stream\x0a\x09\x09nextPut: $(;\x0a\x09\x09nextPut: $#;\x0a\x09\x09print: self size;\x0a\x09\x09nextPut: $)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:", "print:", "size"]
}),
$globals.STONTestMap);


$core.addMethod(
$core.method({
selector: "classTree",
protocol: 'instance creation',
fn: function () {
var self=this;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._classTree_($Object());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classTree",{},$globals.STONTestMap.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTree\x0a\x09^ self classTree: Object",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["classTree:"]
}),
$globals.STONTestMap.klass);

$core.addMethod(
$core.method({
selector: "classTree:",
protocol: 'instance creation',
fn: function (topClass) {
var self=this;
var map;
function $IdentityDictionary(){return $globals.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
map=$recv($IdentityDictionary())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($recv(topClass)._withAllSubclasses())._do_((function(eachClass){
var info;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
info=self._new();
$1=info;
$recv($1)._at_put_("name",$recv($recv(eachClass)._name())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("comment",$recv(eachClass)._comment());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($1)._at_put_("isMeta",$recv(eachClass)._isMeta());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$2=$recv($1)._at_put_("methods",$recv(eachClass)._selectors());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$2;
return $recv(map)._at_put_(eachClass,info);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachClass:eachClass,info:info},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(map)._keysAndValuesDo_((function(eachClass,eachInfo){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(eachClass).__eq_eq(topClass);
if(!$core.assert($3)){
$4=$recv(map)._at_($recv(eachClass)._superclass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv(eachInfo)._at_put_("superclass",$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
};
return $recv(eachInfo)._at_put_("subclasses",$recv($recv(eachClass)._subclasses())._collect_((function(subClass){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(map)._at_(subClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({subClass:subClass},$ctx2,4)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachClass:eachClass,eachInfo:eachInfo},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$5=$recv(map)._at_(topClass);
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classTree:",{topClass:topClass,map:map},$globals.STONTestMap.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["topClass"],
source: "classTree: topClass\x0a\x09| map |\x0a\x09map := IdentityDictionary new.\x0a\x09topClass withAllSubclasses do: [ :eachClass | | info |\x0a\x09\x09(info := self new)\x0a\x09\x09\x09at: #name put: eachClass name asString;\x0a\x09\x09\x09at: #comment put: eachClass comment;\x0a\x09\x09\x09at: #isMeta put: eachClass isMeta;\x0a\x09\x09\x09at: #methods put: eachClass selectors.\x09\x09\x0a\x09\x09map at: eachClass put: info ].\x0a\x09map keysAndValuesDo: [ :eachClass :eachInfo |\x0a\x09\x09eachClass == topClass\x0a\x09\x09\x09ifFalse: [ eachInfo at: #superclass put: (map at: eachClass superclass) ].\x0a\x09\x09eachInfo at: #subclasses put: (eachClass subclasses collect: [ :subClass | map at: subClass ]) ].\x0a\x09^ map at: topClass",
referencedClasses: ["IdentityDictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "withAllSubclasses", "at:put:", "asString", "name", "comment", "isMeta", "selectors", "keysAndValuesDo:", "ifFalse:", "==", "at:", "superclass", "collect:", "subclasses"]
}),
$globals.STONTestMap.klass);

$core.addMethod(
$core.method({
selector: "classTreeExtended",
protocol: 'instance creation',
fn: function () {
var self=this;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._classTreeExtended_($Object());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classTreeExtended",{},$globals.STONTestMap.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTreeExtended\x0a\x09^ self classTreeExtended: Object",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["classTreeExtended:"]
}),
$globals.STONTestMap.klass);

$core.addMethod(
$core.method({
selector: "classTreeExtended:",
protocol: 'instance creation',
fn: function (topClass) {
var self=this;
var map;
function $IdentityDictionary(){return $globals.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2,$5,$6,$7,$8,$9,$10,$11;
map=$recv($IdentityDictionary())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($recv(topClass)._withAllSubclasses())._do_((function(eachClass){
var info,methodsInfo;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
info=self._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$1=info;
$recv($1)._at_put_("name",$recv($recv(eachClass)._name())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("comment",$recv(eachClass)._comment());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($1)._at_put_("isMeta",$recv(eachClass)._isMeta());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$3=$1;
methodsInfo=self._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$4=methodsInfo;
$2=$recv($3)._at_put_("methods",$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$2;
$recv($recv(eachClass)._methods())._do_((function(eachMethod){
var methodInfo;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
methodInfo=self._new();
$5=methodInfo;
$6=$5;
$7=$recv(eachMethod)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$recv($6)._at_put_("name",$7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$recv($5)._at_put_("numArgs",$recv(eachMethod)._numArgs());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
$8=$recv($5)._at_put_("class",info);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:put:"]=7;
//>>excludeEnd("ctx");
$8;
return $recv(methodsInfo)._at_put_($recv(eachMethod)._selector(),methodInfo);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:put:"]=8;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({eachMethod:eachMethod,methodInfo:methodInfo},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv(map)._at_put_(eachClass,info);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=9;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachClass:eachClass,info:info,methodsInfo:methodsInfo},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv(map)._keysAndValuesDo_((function(eachClass,eachInfo){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$9=$recv(eachClass).__eq_eq(topClass);
if(!$core.assert($9)){
$10=$recv(map)._at_($recv(eachClass)._superclass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv(eachInfo)._at_put_("superclass",$10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=10;
//>>excludeEnd("ctx");
};
return $recv(eachInfo)._at_put_("subclasses",$recv($recv(eachClass)._subclasses())._collect_((function(subClass){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(map)._at_(subClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({subClass:subClass},$ctx2,5)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachClass:eachClass,eachInfo:eachInfo},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$11=$recv(map)._at_(topClass);
return $11;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classTreeExtended:",{topClass:topClass,map:map},$globals.STONTestMap.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["topClass"],
source: "classTreeExtended: topClass\x0a\x09| map |\x0a\x09map := IdentityDictionary new.\x0a\x09topClass withAllSubclasses do: [ :eachClass | | info methodsInfo |\x0a\x09\x09(info := self new)\x0a\x09\x09\x09at: #name put: eachClass name asString;\x0a\x09\x09\x09at: #comment put: eachClass comment;\x0a\x09\x09\x09at: #isMeta put: eachClass isMeta;\x0a\x09\x09\x09at: #methods put: (methodsInfo := self new).\x0a\x09\x09eachClass methods do: [ :eachMethod | | methodInfo |\x0a\x09\x09\x09(methodInfo := self new)\x0a\x09\x09\x09\x09at: #name put: eachMethod selector;\x0a\x09\x09\x09\x09at: #numArgs put: eachMethod numArgs;\x0a\x09\x09\x09\x09at: #class put: info.\x0a\x09\x09\x09methodsInfo at: eachMethod selector put: methodInfo ].\x0a\x09\x09map at: eachClass put: info ].\x0a\x09map keysAndValuesDo: [ :eachClass :eachInfo |\x0a\x09\x09eachClass == topClass \x0a\x09\x09\x09ifFalse: [ eachInfo at: #superclass put: (map at: eachClass superclass) ].\x0a\x09\x09eachInfo at: #subclasses put: (eachClass subclasses collect: [ :subClass | map at: subClass ]) ].\x0a\x09^ map at: topClass",
referencedClasses: ["IdentityDictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "withAllSubclasses", "at:put:", "asString", "name", "comment", "isMeta", "methods", "selector", "numArgs", "keysAndValuesDo:", "ifFalse:", "==", "at:", "superclass", "collect:", "subclasses"]
}),
$globals.STONTestMap.klass);

$core.addMethod(
$core.method({
selector: "stonName",
protocol: 'ston-core',
fn: function () {
var self=this;
return "TestMap";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stonName\x0a\x09^ #TestMap",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestMap.klass);


$core.addClass('STONTestUser', $globals.Object, ['username', 'password', 'enabled'], 'STON-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONTestUser.comment="STONTestUser is used to support unit tests.\x0a\x0aInstance Variables\x0a\x09enabled:\x09\x09<Boolean>\x0a\x09password:\x09<String>\x0a\x09username:\x09<String>";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: 'comparing',
fn: function (anObject) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$5,$6,$4;
$1=self.__eq_eq(anObject);
if($core.assert($1)){
return true;
};
$3=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq($recv(anObject)._class());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if(!$core.assert($2)){
return false;
};
$5=$recv(self["@username"]).__eq($recv(anObject)._username());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$recv(self["@password"]).__eq($recv(anObject)._password());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=3;
//>>excludeEnd("ctx");
return $recv($6)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self["@enabled"]).__eq($recv(anObject)._enabled());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject},$globals.STONTestUser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "= anObject\x0a\x09\x22Answer whether the receiver and anObject represent the same object.\x22\x0a\x0a\x09self == anObject\x0a\x09\x09ifTrue: [ ^ true ].\x0a\x09self class = anObject class\x0a\x09\x09ifFalse: [ ^ false ].\x0a\x09^ username = anObject username and: [ password = anObject password and: [ enabled = anObject enabled ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "==", "ifFalse:", "=", "class", "and:", "username", "password", "enabled"]
}),
$globals.STONTestUser);

$core.addMethod(
$core.method({
selector: "enabled",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@enabled"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "enabled\x0a\x09^ enabled",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestUser);

$core.addMethod(
$core.method({
selector: "enabled:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@enabled"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "enabled: anObject\x0a\x09enabled := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestUser);

$core.addMethod(
$core.method({
selector: "hash",
protocol: 'comparing',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$4,$3,$1;
$2=$recv(self["@username"])._hash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hash"]=1;
//>>excludeEnd("ctx");
$4=$recv(self["@password"])._hash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hash"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._bitXor_($recv(self["@enabled"])._hash());
$1=$recv($2)._bitXor_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bitXor:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hash",{},$globals.STONTestUser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hash\x0a\x09\x22Answer an integer value that is related to the identity of the receiver.\x22\x0a\x0a\x09^ username hash bitXor: (password hash bitXor: enabled hash)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bitXor:", "hash"]
}),
$globals.STONTestUser);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.STONTestUser.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@enabled"]=true;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.STONTestUser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize \x0a\x09super initialize.\x0a\x09enabled := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.STONTestUser);

$core.addMethod(
$core.method({
selector: "password",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@password"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "password\x0a\x09^ password",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestUser);

$core.addMethod(
$core.method({
selector: "password:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@password"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "password: anObject\x0a\x09password := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestUser);

$core.addMethod(
$core.method({
selector: "username",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@username"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "username\x0a\x09^ username",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestUser);

$core.addMethod(
$core.method({
selector: "username:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@username"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "username: anObject\x0a\x09username := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestUser);


$core.addMethod(
$core.method({
selector: "dummy",
protocol: 'instance creation',
fn: function () {
var self=this;
var username,password;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$7,$5;
username=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream).__lt_lt("user");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
$1=(999)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$recv(stream)._print_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["print:"]=1;
//>>excludeEnd("ctx");
$recv(stream).__lt_lt("@company");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$2=(99)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["atRandom"]=2;
//>>excludeEnd("ctx");
$recv(stream)._print_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["print:"]=2;
//>>excludeEnd("ctx");
$3=$recv(stream).__lt_lt(".com");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=3;
//>>excludeEnd("ctx");
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["streamContents:"]=1;
//>>excludeEnd("ctx");
password=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream).__lt_lt("secret");
$4=$recv(stream)._print_((999)._atRandom());
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$6=self._new();
$recv($6)._username_(username);
$recv($6)._password_(password);
$7=$recv($6)._yourself();
$5=$7;
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dummy",{username:username,password:password},$globals.STONTestUser.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dummy\x0a\x09\x22self dummy\x22\x0a\x09\x0a\x09| username password |\x0a\x09username := String streamContents: [ :stream |\x0a\x09\x09stream << 'user'; print: 999 atRandom; << '@company'; print: 99 atRandom; << '.com' ].\x0a\x09password := String streamContents: [ :stream |\x0a\x09\x09stream << 'secret'; print: 999 atRandom ].\x0a\x09^ self new\x0a\x09\x09username: username;\x0a\x09\x09password: password;\x0a\x09\x09yourself",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "<<", "print:", "atRandom", "username:", "new", "password:", "yourself"]
}),
$globals.STONTestUser.klass);

$core.addMethod(
$core.method({
selector: "stonName",
protocol: 'ston-core',
fn: function () {
var self=this;
return "TestUser";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stonName\x0a\x09^ #TestUser",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestUser.klass);


$core.addClass('STONTestUser2', $globals.STONTestUser, [], 'STON-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONTestUser2.comment="STONTestUser2 extends STONTestUser with explicit implementations of #fromSton: and #stonOn:";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "fromSton:",
protocol: 'ston-core',
fn: function (stonReader) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$recv(stonReader)._parseMapDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(key).__eq("username");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
self["@username"]=value;
self["@username"];
};
$2=$recv(key).__eq("password");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
if($core.assert($2)){
self["@password"]=value;
self["@password"];
};
$3=$recv(key).__eq("enabled");
if($core.assert($3)){
self["@enabled"]=value;
return self["@enabled"];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromSton:",{stonReader:stonReader},$globals.STONTestUser2)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonReader"],
source: "fromSton: stonReader\x0a\x09stonReader parseMapDo: [ :key :value |\x0a\x09\x09key = #username ifTrue: [ username := value ].\x0a\x09\x09key = #password ifTrue: [ password := value ].\x0a\x09\x09key = #enabled ifTrue: [ enabled := value ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parseMapDo:", "ifTrue:", "="]
}),
$globals.STONTestUser2);

$core.addMethod(
$core.method({
selector: "stonOn:",
protocol: 'ston-core',
fn: function (stonWriter) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(stonWriter)._writeObject_streamMap_(self,(function(dictionary){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(dictionary)._at_put_("username",self["@username"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(dictionary)._at_put_("password",self["@password"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$1=$recv(dictionary)._at_put_("enabled",self["@enabled"]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({dictionary:dictionary},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},$globals.STONTestUser2)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonWriter"],
source: "stonOn: stonWriter\x09\x0a\x09stonWriter writeObject: self streamMap: [ :dictionary |\x0a\x09\x09dictionary\x0a\x09\x09\x09at: #username put: username;\x0a\x09\x09\x09at: #password put: password;\x0a\x09\x09\x09at: #enabled put: enabled ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeObject:streamMap:", "at:put:"]
}),
$globals.STONTestUser2);


$core.addMethod(
$core.method({
selector: "stonName",
protocol: 'ston-core',
fn: function () {
var self=this;
return "TestUser2";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stonName\x0a\x09^ #TestUser2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestUser2.klass);


$core.addClass('STONTestUser3', $globals.STONTestUser, [], 'STON-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONTestUser3.comment="STONTestUser3 extends STONTestUser but wants nil instance variables to be written";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "stonShouldWriteNilInstVars",
protocol: 'ston-core',
fn: function () {
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stonShouldWriteNilInstVars\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestUser3);


$core.addMethod(
$core.method({
selector: "stonAllInstVarNames",
protocol: 'ston-core',
fn: function () {
var self=this;
var $1;
$1=["username", "password", "enabled"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stonAllInstVarNames\x0a\x09^ #(username password enabled)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestUser3.klass);

$core.addMethod(
$core.method({
selector: "stonName",
protocol: 'ston-core',
fn: function () {
var self=this;
return "TestUser3";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stonName\x0a\x09^ #TestUser3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONTestUser3.klass);


$core.addClass('STONTests', $globals.TestCase, [], 'STON-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONTests.comment="STONTests tests the API offered by STON.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "testFromString",
protocol: 'tests',
fn: function () {
var self=this;
var object;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
object=$recv($recv($STON())._listClass())._withAll_([(1),(0),(-1),true,false,nil]);
self._assert_($recv($recv($STON())._fromString_("[1,0,-1,true,false,nil]")).__eq(object));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFromString",{object:object},$globals.STONTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFromString\x0a\x09| object |\x0a\x09object := STON listClass withAll: { 1. 0. -1. true. false. nil }.\x0a\x09self assert: (STON fromString: '[1,0,-1,true,false,nil]') = object",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["withAll:", "listClass", "assert:", "=", "fromString:"]
}),
$globals.STONTests);

$core.addMethod(
$core.method({
selector: "testPrettyPrinting",
protocol: 'tests',
fn: function () {
var self=this;
var object;
function $STONTestUser(){return $globals.STONTestUser||(typeof STONTestUser=="undefined"?nil:STONTestUser)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
function $STONTestDomainObject(){return $globals.STONTestDomainObject||(typeof STONTestDomainObject=="undefined"?nil:STONTestDomainObject)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
object=$recv($STONTestUser())._dummy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dummy"]=1;
//>>excludeEnd("ctx");
$3=$recv($STON())._toStringPretty_(object);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["toStringPretty:"]=1;
//>>excludeEnd("ctx");
$2=$recv($STON())._fromString_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fromString:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq(object);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
object=$recv($STONTestDomainObject())._dummy();
self._assert_($recv($recv($STON())._fromString_($recv($STON())._toStringPretty_(object))).__eq(object));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPrettyPrinting",{object:object},$globals.STONTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPrettyPrinting\x0a\x09| object |\x0a\x09object := STONTestUser dummy.\x0a\x09self assert: (STON fromString: (STON toStringPretty: object)) = object.\x0a\x09object := STONTestDomainObject dummy.\x0a\x09self assert: (STON fromString: (STON toStringPretty: object)) = object",
referencedClasses: ["STONTestUser", "STON", "STONTestDomainObject"],
//>>excludeEnd("ide");
messageSends: ["dummy", "assert:", "=", "fromString:", "toStringPretty:"]
}),
$globals.STONTests);

$core.addMethod(
$core.method({
selector: "testRoomExitCycles",
protocol: 'tests',
fn: function () {
var self=this;
var model,room1,room2,exit1,exit2,ston,object;
function $STONTestMap(){return $globals.STONTestMap||(typeof STONTestMap=="undefined"?nil:STONTestMap)}
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$8,$7,$10,$9,$13,$12,$11,$16,$15,$14,$20,$19,$18,$21,$17,$25,$24,$23,$26,$22,$30,$29,$28,$31,$27,$33,$32;
room1=$recv($STONTestMap())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=room1;
$recv($1)._at_put_("name","Room 1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
room2=$recv($STONTestMap())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$2=room2;
$recv($2)._at_put_("name","Room 2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
exit1=$recv($STONTestMap())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$3=exit1;
$recv($3)._at_put_("name","Exit 1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($3)._at_put_("origin",room1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$4=$recv($3)._at_put_("destination",room2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
exit2=$recv($STONTestMap())._new();
$5=exit2;
$recv($5)._at_put_("name","Exit 2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
$recv($5)._at_put_("origin",room2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=7;
//>>excludeEnd("ctx");
$6=$recv($5)._at_put_("destination",room1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=8;
//>>excludeEnd("ctx");
$recv(room1)._at_put_("exit",exit1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=9;
//>>excludeEnd("ctx");
$recv(room2)._at_put_("exit",exit2);
model=$recv($Array())._with_with_(room1,room2);
ston=$recv($STON())._toString_(model);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["toString:"]=1;
//>>excludeEnd("ctx");
object=$recv($STON())._fromString_(ston);
$8=$recv(object)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$7=$recv($8)._at_("name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($7,"Room 1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$10=$recv(object)._second();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["second"]=1;
//>>excludeEnd("ctx");
$9=$recv($10)._at_("name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($9,"Room 2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$13=$recv(object)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=2;
//>>excludeEnd("ctx");
$12=$recv($13)._at_("exit");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=4;
//>>excludeEnd("ctx");
$11=$recv($12)._at_("name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($11,"Exit 1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$16=$recv(object)._second();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["second"]=2;
//>>excludeEnd("ctx");
$15=$recv($16)._at_("exit");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=6;
//>>excludeEnd("ctx");
$14=$recv($15)._at_("name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($14,"Exit 2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$20=$recv(object)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=3;
//>>excludeEnd("ctx");
$19=$recv($20)._at_("exit");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=8;
//>>excludeEnd("ctx");
$18=$recv($19)._at_("origin");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=7;
//>>excludeEnd("ctx");
$21=$recv(object)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=4;
//>>excludeEnd("ctx");
$17=$recv($18).__eq_eq($21);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
self._assert_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$25=$recv(object)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=5;
//>>excludeEnd("ctx");
$24=$recv($25)._at_("exit");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=10;
//>>excludeEnd("ctx");
$23=$recv($24)._at_("destination");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=9;
//>>excludeEnd("ctx");
$26=$recv(object)._second();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["second"]=3;
//>>excludeEnd("ctx");
$22=$recv($23).__eq_eq($26);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=2;
//>>excludeEnd("ctx");
self._assert_($22);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$30=$recv(object)._second();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["second"]=4;
//>>excludeEnd("ctx");
$29=$recv($30)._at_("exit");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=12;
//>>excludeEnd("ctx");
$28=$recv($29)._at_("origin");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=11;
//>>excludeEnd("ctx");
$31=$recv(object)._second();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["second"]=5;
//>>excludeEnd("ctx");
$27=$recv($28).__eq_eq($31);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=3;
//>>excludeEnd("ctx");
self._assert_($27);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$33=$recv($recv($recv(object)._second())._at_("exit"))._at_("destination");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=13;
//>>excludeEnd("ctx");
$32=$recv($33).__eq_eq($recv(object)._first());
self._assert_($32);
self._assert_equals_($recv($STON())._toString_(object),ston);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRoomExitCycles",{model:model,room1:room1,room2:room2,exit1:exit1,exit2:exit2,ston:ston,object:object},$globals.STONTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRoomExitCycles\x0a\x09| model room1 room2 exit1 exit2 ston object |\x0a\x09(room1 := STONTestMap new) at: #name put: 'Room 1'.\x0a\x09(room2 := STONTestMap new) at: #name put: 'Room 2'.\x0a\x09(exit1 := STONTestMap new)\x0a\x09\x09at: #name put: 'Exit 1';\x0a\x09\x09at: #origin put: room1;\x0a\x09\x09at: #destination put: room2.\x0a\x09(exit2 := STONTestMap new)\x0a\x09\x09at: #name put: 'Exit 2';\x0a\x09\x09at: #origin put: room2;\x0a\x09\x09at: #destination put: room1.\x0a\x09room1 at: #exit put: exit1.\x0a\x09room2 at: #exit put: exit2.\x0a\x09model := Array with: room1 with: room2.\x0a\x09ston := STON toString: model.\x0a\x09object := STON fromString: ston.\x0a\x09\x22We can't just compare because this is a recursive datastructure\x22\x0a\x09self assert: (object first at: #name) equals: 'Room 1'.\x0a\x09self assert: (object second at: #name) equals: 'Room 2'.\x0a\x09self assert: ((object first at: #exit) at: #name) equals: 'Exit 1'.\x0a\x09self assert: ((object second at: #exit) at: #name) equals: 'Exit 2'.\x0a\x09self assert: ((object first at: #exit) at: #origin) == object first.\x0a\x09self assert: ((object first at: #exit) at: #destination) == object second.\x0a\x09self assert: ((object second at: #exit) at: #origin) == object second.\x0a\x09self assert: ((object second at: #exit) at: #destination) == object first.\x0a\x09\x22Try writing again the parse model\x22 \x0a\x09self assert: (STON toString: object) equals: ston",
referencedClasses: ["STONTestMap", "Array", "STON"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new", "with:with:", "toString:", "fromString:", "assert:equals:", "at:", "first", "second", "assert:", "=="]
}),
$globals.STONTests);

$core.addMethod(
$core.method({
selector: "testToString",
protocol: 'tests',
fn: function () {
var self=this;
var object;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
object=$recv($recv($STON())._listClass())._withAll_([(1),(0),(-1),true,false,nil]);
self._assert_($recv($recv($STON())._toString_(object)).__eq("[1,0,-1,true,false,nil]"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testToString",{object:object},$globals.STONTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testToString\x0a\x09| object |\x0a\x09object := STON listClass withAll: { 1. 0. -1. true. false. nil }.\x0a\x09self assert: (STON toString: object) = '[1,0,-1,true,false,nil]'",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["withAll:", "listClass", "assert:", "=", "toString:"]
}),
$globals.STONTests);


$core.addMethod(
$core.method({
selector: "fastReadFromFileNamed:",
protocol: 'utilities',
fn: function (path) {
var self=this;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
function $ZnBufferedReadStream(){return $globals.ZnBufferedReadStream||(typeof ZnBufferedReadStream=="undefined"?nil:ZnBufferedReadStream)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=$recv($recv(path)._asFileReference())._readStreamDo_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($STON())._reader();
$recv($2)._on_($recv($ZnBufferedReadStream())._on_(stream));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["on:"]=1;
//>>excludeEnd("ctx");
$recv($2)._optimizeForLargeStructures();
$3=$recv($2)._next();
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fastReadFromFileNamed:",{path:path},$globals.STONTests.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path"],
source: "fastReadFromFileNamed: path\x0a\x09^ path asFileReference\x0a\x09\x09readStreamDo: [ :stream | \x0a\x09\x09\x09STON reader\x0a\x09\x09\x09\x09on: (ZnBufferedReadStream on: stream);\x0a\x09\x09\x09\x09optimizeForLargeStructures;\x0a\x09\x09\x09\x09next ]",
referencedClasses: ["STON", "ZnBufferedReadStream"],
//>>excludeEnd("ide");
messageSends: ["readStreamDo:", "asFileReference", "on:", "reader", "optimizeForLargeStructures", "next"]
}),
$globals.STONTests.klass);

$core.addMethod(
$core.method({
selector: "fastWrite:toFileNamed:",
protocol: 'utilities',
fn: function (object, path) {
var self=this;
function $ZnBufferedWriteStream(){return $globals.ZnBufferedWriteStream||(typeof ZnBufferedWriteStream=="undefined"?nil:ZnBufferedWriteStream)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=$recv($recv(path)._asFileReference())._writeStreamDo_((function(fileStream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ZnBufferedWriteStream())._on_do_(fileStream,(function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=$recv($STON())._writer();
$recv($2)._on_(stream);
$recv($2)._optimizeForLargeStructures();
$3=$recv($2)._nextPut_(object);
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({stream:stream},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({fileStream:fileStream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fastWrite:toFileNamed:",{object:object,path:path},$globals.STONTests.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object", "path"],
source: "fastWrite: object toFileNamed: path\x0a\x09^ path asFileReference\x0a\x09\x09writeStreamDo: [ :fileStream | \x0a\x09\x09\x09ZnBufferedWriteStream\x0a\x09\x09\x09\x09on: fileStream\x0a\x09\x09\x09\x09do: [ :stream | \x0a\x09\x09\x09\x09\x09STON writer\x0a\x09\x09\x09\x09\x09\x09on: stream;\x0a\x09\x09\x09\x09\x09\x09optimizeForLargeStructures;\x0a\x09\x09\x09\x09\x09\x09nextPut: object ] ]",
referencedClasses: ["ZnBufferedWriteStream", "STON"],
//>>excludeEnd("ide");
messageSends: ["writeStreamDo:", "asFileReference", "on:do:", "on:", "writer", "optimizeForLargeStructures", "nextPut:"]
}),
$globals.STONTests.klass);

$core.addMethod(
$core.method({
selector: "readFromFileNamed:",
protocol: 'utilities',
fn: function (path) {
var self=this;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=$recv($recv(path)._asFileReference())._readStreamDo_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($STON())._reader();
$recv($2)._on_(stream);
$3=$recv($2)._next();
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readFromFileNamed:",{path:path},$globals.STONTests.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path"],
source: "readFromFileNamed: path\x0a\x09^ path asFileReference\x0a\x09\x09readStreamDo: [ :stream | \x0a\x09\x09\x09STON reader\x0a\x09\x09\x09\x09on: stream;\x0a\x09\x09\x09\x09next ]",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["readStreamDo:", "asFileReference", "on:", "reader", "next"]
}),
$globals.STONTests.klass);

$core.addMethod(
$core.method({
selector: "write:toFileNamed:",
protocol: 'utilities',
fn: function (object, path) {
var self=this;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=$recv($recv(path)._asFileReference())._writeStreamDo_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($STON())._writer();
$recv($2)._on_(stream);
$3=$recv($2)._nextPut_(object);
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"write:toFileNamed:",{object:object,path:path},$globals.STONTests.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object", "path"],
source: "write: object toFileNamed: path\x0a\x09^ path asFileReference\x0a\x09\x09writeStreamDo: [ :stream | \x0a\x09\x09\x09STON writer\x0a\x09\x09\x09\x09on: stream;\x0a\x09\x09\x09\x09nextPut: object ]",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["writeStreamDo:", "asFileReference", "on:", "writer", "nextPut:"]
}),
$globals.STONTests.klass);


$core.addClass('STONWriteReadTests', $globals.TestCase, [], 'STON-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONWriteReadTests.comment="STONWriteReadTests test serialization followed by materialization.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "materialize:",
protocol: 'private',
fn: function (string) {
var self=this;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($STON())._reader();
$recv($2)._on_($recv(string)._readStream());
$3=$recv($2)._next();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"materialize:",{string:string},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["string"],
source: "materialize: string\x0a\x09^ STON reader \x0a\x09\x09on: string readStream;\x0a\x09\x09next",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["on:", "reader", "readStream", "next"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "serialize:",
protocol: 'private',
fn: function (anObject) {
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($STON())._writer();
$recv($2)._on_(stream);
$3=$recv($2)._nextPut_(anObject);
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serialize:",{anObject:anObject},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "serialize: anObject\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09STON writer \x0a\x09\x09\x09on: stream;\x0a\x09\x09\x09nextPut: anObject ]",
referencedClasses: ["String", "STON"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "on:", "writer", "nextPut:"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "serializeAndMaterialize:",
protocol: 'private',
fn: function (object) {
var self=this;
var serialization,materialization;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
serialization=self._serialize_(object);
materialization=self._materialize_(serialization);
self._assert_equals_(object,materialization);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serializeAndMaterialize:",{object:object,serialization:serialization,materialization:materialization},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object"],
source: "serializeAndMaterialize: object\x0a\x09| serialization materialization |\x0a\x09serialization := self serialize: object.\x0a\x09materialization := self materialize: serialization.\x0a\x09self assert: object equals: materialization",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["serialize:", "materialize:", "assert:equals:"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "serializeAndMaterializeJsonMode:",
protocol: 'private',
fn: function (object) {
var self=this;
var serialization,materialization;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
serialization=self._serializeJson_(object);
materialization=self._materialize_(serialization);
self._assert_equals_(object,materialization);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serializeAndMaterializeJsonMode:",{object:object,serialization:serialization,materialization:materialization},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object"],
source: "serializeAndMaterializeJsonMode: object\x0a\x09| serialization materialization |\x0a\x09serialization := self serializeJson: object.\x0a\x09materialization := self materialize: serialization.\x0a\x09self assert: object equals: materialization",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["serializeJson:", "materialize:", "assert:equals:"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "serializeJson:",
protocol: 'private',
fn: function (anObject) {
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($STON())._jsonWriter();
$recv($2)._on_(stream);
$3=$recv($2)._nextPut_(anObject);
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serializeJson:",{anObject:anObject},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "serializeJson: anObject\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09STON jsonWriter \x0a\x09\x09\x09on: stream;\x0a\x09\x09\x09nextPut: anObject ]",
referencedClasses: ["String", "STON"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "on:", "jsonWriter", "nextPut:"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "testAssociations",
protocol: 'tests',
fn: function () {
var self=this;
var associations;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
associations=$recv($OrderedCollection())._new();
(1)._to_do_((10),(function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(associations)._add_($recv(each).__minus_gt($recv(each)._printString()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._serializeAndMaterialize_(associations);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAssociations",{associations:associations},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAssociations\x0a\x09| associations |\x0a\x09associations := OrderedCollection new.\x0a\x091 to: 10 do: [ :each |\x0a\x09\x09associations add: each -> each printString ].\x0a\x09self serializeAndMaterialize: associations",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "to:do:", "add:", "->", "printString", "serializeAndMaterialize:"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "testCharacters",
protocol: 'tests',
fn: function () {
var self=this;
var characters;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=$recv($STON())._listClass();
$3="a"._to_("z");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma("A"._to_("Z"));
characters=$recv($1)._withAll_($2);
self._serializeAndMaterialize_(characters);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCharacters",{characters:characters},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCharacters\x0a\x09| characters |\x0a\x09characters := STON listClass withAll: ($a to: $z), ($A to: $Z).\x0a\x09self serializeAndMaterialize: characters",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["withAll:", "listClass", ",", "to:", "serializeAndMaterialize:"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "testCollections",
protocol: 'tests',
fn: function () {
var self=this;
var collections;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$7,$8,$6,$4;
collections=$recv($recv($STON())._listClass())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=collections;
$recv($1)._add_([(1), (2), (3)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$2=$1;
$3=$recv($OrderedCollection())._withAll_([(1), (2), (3)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["withAll:"]=1;
//>>excludeEnd("ctx");
$recv($2)._add_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv($1)._add_($recv($Set())._withAll_([(1), (2), (3)]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$5=$1;
$7=$recv($Dictionary())._new();
$recv($7)._at_put_((1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($7)._at_put_((2),(2));
$8=$recv($7)._yourself();
$6=$8;
$4=$recv($5)._add_($6);
self._serializeAndMaterialize_(collections);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCollections",{collections:collections},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCollections\x0a\x09| collections |\x0a\x09collections := STON listClass new.\x0a\x09\x09collections add: #(1 2 3);\x0a\x09\x09add: (OrderedCollection withAll: #(1 2 3));\x0a\x09\x09add: (Set withAll: #(1 2 3));\x0a\x09\x09add: (Dictionary new at: 1 put: 1; at: 2 put: 2; yourself).\x0a\x09self serializeAndMaterialize: collections",
referencedClasses: ["STON", "OrderedCollection", "Set", "Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "listClass", "add:", "withAll:", "at:put:", "yourself", "serializeAndMaterialize:"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "testDatesAndTimes",
protocol: 'tests',
fn: function () {
var self=this;
var datesAndTimes;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
function $Time(){return $globals.Time||(typeof Time=="undefined"?nil:Time)}
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
function $DateAndTime(){return $globals.DateAndTime||(typeof DateAndTime=="undefined"?nil:DateAndTime)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$5,$4,$3,$2;
$1=$recv($STON())._listClass();
$5=$recv($Time())._now();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["now"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._asSeconds();
$3=$recv($Time())._fromSeconds_($4);
$2=[$3,$recv($Date())._today(),$recv($DateAndTime())._now()];
datesAndTimes=$recv($1)._withAll_($2);
self._serializeAndMaterialize_(datesAndTimes);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDatesAndTimes",{datesAndTimes:datesAndTimes},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDatesAndTimes\x0a\x09| datesAndTimes |\x0a\x09datesAndTimes := STON listClass withAll: { \x0a\x09\x09Time fromSeconds: \x0a\x09\x09Time now asSeconds. \x0a\x09\x09Date today. \x0a\x09\x09DateAndTime now }.\x0a\x09self serializeAndMaterialize: datesAndTimes",
referencedClasses: ["STON", "Time", "Date", "DateAndTime"],
//>>excludeEnd("ide");
messageSends: ["withAll:", "listClass", "fromSeconds:", "asSeconds", "now", "today", "serializeAndMaterialize:"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "testDomainObject",
protocol: 'tests',
fn: function () {
var self=this;
var object,objects;
function $STONTestDomainObject(){return $globals.STONTestDomainObject||(typeof STONTestDomainObject=="undefined"?nil:STONTestDomainObject)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
object=$recv($STONTestDomainObject())._dummy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dummy"]=1;
//>>excludeEnd("ctx");
self._serializeAndMaterialize_(object);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serializeAndMaterialize:"]=1;
//>>excludeEnd("ctx");
objects=$recv($recv($STON())._listClass())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (10)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv($STONTestDomainObject())._dummy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["dummy"]=2;
//>>excludeEnd("ctx");
return $recv(stream)._nextPut_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["timesRepeat:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._serializeAndMaterialize_(objects);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serializeAndMaterialize:"]=2;
//>>excludeEnd("ctx");
objects=$recv($recv($STON())._mapClass())._new();
(10)._timesRepeat_((function(){
var newObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
newObject=$recv($STONTestDomainObject())._dummy();
newObject;
return $recv(objects)._at_put_($recv(newObject)._integer(),newObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({newObject:newObject},$ctx1,3)});
//>>excludeEnd("ctx");
}));
self._serializeAndMaterialize_(objects);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDomainObject",{object:object,objects:objects},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDomainObject\x0a\x09| object objects |\x0a\x09object := STONTestDomainObject dummy.\x0a\x09self serializeAndMaterialize: object.\x0a\x09objects := STON listClass streamContents: [ :stream |\x0a\x09\x0910 timesRepeat: [ stream nextPut: STONTestDomainObject dummy ] ].\x0a\x09self serializeAndMaterialize: objects.\x0a\x09objects := STON mapClass new.\x0a\x0910 timesRepeat: [ | newObject |\x0a\x09\x09newObject := STONTestDomainObject dummy.\x0a\x09\x09objects at: newObject integer put: newObject ].\x0a\x09self serializeAndMaterialize: objects.",
referencedClasses: ["STONTestDomainObject", "STON"],
//>>excludeEnd("ide");
messageSends: ["dummy", "serializeAndMaterialize:", "streamContents:", "listClass", "timesRepeat:", "nextPut:", "new", "mapClass", "at:put:", "integer"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "testEmpty",
protocol: 'tests',
fn: function () {
var self=this;
var empty;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
empty=$recv($recv($STON())._listClass())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self._serializeAndMaterialize_(empty);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serializeAndMaterialize:"]=1;
//>>excludeEnd("ctx");
empty=$recv($recv($STON())._mapClass())._new();
self._serializeAndMaterialize_(empty);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEmpty",{empty:empty},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEmpty\x0a\x09| empty |\x0a\x09empty := STON listClass new.\x0a\x09self serializeAndMaterialize: empty.\x0a\x09empty := STON mapClass new.\x0a\x09self serializeAndMaterialize: empty.",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["new", "listClass", "serializeAndMaterialize:", "mapClass"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "testFloats",
protocol: 'tests',
fn: function () {
var self=this;
var floats,serialization,materialization;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
function $Float(){return $globals.Float||(typeof Float=="undefined"?nil:Float)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
floats=$recv($recv($STON())._listClass())._withAll_($recv((-10)._to_((10)))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__star($recv($Float())._pi());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})));
serialization=self._serialize_(floats);
materialization=self._materialize_(serialization);
$2=$recv(floats)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$3=$recv(materialization)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($3);
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
(1)._to_do_($recv(floats)._size(),(function(index){
var float;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
float=$recv(floats)._at_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
float;
return self._assert_($recv(float)._closeTo_($recv(materialization)._at_(index)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,float:float},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFloats",{floats:floats,serialization:serialization,materialization:materialization},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFloats\x0a\x09| floats serialization materialization |\x0a\x09floats := STON listClass withAll: ((-10 to: 10) collect: [ :each | each * Float pi ]).\x0a\x09serialization := self serialize: floats.\x0a\x09materialization := self materialize: serialization.\x0a\x09self assert: floats size = materialization size.\x0a\x091 to: floats size do: [:index | | float |\x0a\x09\x09float := floats at: index.\x0a\x09\x09\x22Use #closeTo: instead of #= to increase portability\x22\x0a\x09\x09self assert: (float closeTo: (materialization at: index)) ]",
referencedClasses: ["STON", "Float"],
//>>excludeEnd("ide");
messageSends: ["withAll:", "listClass", "collect:", "to:", "*", "pi", "serialize:", "materialize:", "assert:", "=", "size", "to:do:", "at:", "closeTo:"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "testJsonMode",
protocol: 'tests',
fn: function () {
var self=this;
var object;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
function $Float(){return $globals.Float||(typeof Float=="undefined"?nil:Float)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$6,$7,$5,$2;
$1=$recv($STON())._listClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["listClass"]=1;
//>>excludeEnd("ctx");
$3=$recv($Float())._pi();
$4=$recv($recv($STON())._listClass())._withAll_([(1), (2), (3)]._asByteArray());
$6=$recv($recv($STON())._mapClass())._new();
$recv($6)._at_put_("x",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($6)._at_put_("y",(2));
$7=$recv($6)._yourself();
$5=$7;
$2=[$3,"Hello World",true,nil,$4,$5];
object=$recv($1)._withAll_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["withAll:"]=1;
//>>excludeEnd("ctx");
self._serializeAndMaterializeJsonMode_(object);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testJsonMode",{object:object},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testJsonMode\x0a\x09| object |\x0a\x09object := STON listClass withAll: {\x0a\x09\x09Float pi.\x0a\x09\x09'Hello World'.\x0a\x09\x09true.\x0a\x09\x09nil.\x0a\x09\x09STON listClass withAll: #( 1 2 3) asByteArray.\x0a\x09\x09STON mapClass new \x0a\x09\x09\x09at: 'x' put: 1; \x0a\x09\x09\x09at: 'y' put: 2; \x0a\x09\x09\x09yourself \x0a\x09}.\x0a\x09self serializeAndMaterializeJsonMode: object",
referencedClasses: ["STON", "Float"],
//>>excludeEnd("ide");
messageSends: ["withAll:", "listClass", "pi", "asByteArray", "at:put:", "new", "mapClass", "yourself", "serializeAndMaterializeJsonMode:"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "testOrderedDictionary",
protocol: 'tests',
fn: function () {
var self=this;
var dictionaries,orderedDictionaryClass,orderedIdentityDictionaryClass;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $IdentityDictionary(){return $globals.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$5,$3,$7,$8,$6,$9,$11,$12,$10,$14,$15,$13,$2;
orderedDictionaryClass=$recv($Smalltalk())._at_ifAbsent_("OrderedDictionary",(function(){
return $Dictionary();

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
orderedIdentityDictionaryClass=$recv($Smalltalk())._at_ifAbsent_("OrderedIdentityDictionary",(function(){
return $IdentityDictionary();

}));
$1=$recv($STON())._listClass();
$4=$recv(orderedDictionaryClass)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($4)._at_put_((1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($4)._at_put_((2),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$5=$recv($4)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$3=$5;
$7=$recv(orderedDictionaryClass)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($7)._at_put_("a",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($7)._at_put_("b",(-2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv($7)._at_put_("c",(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$8=$recv($7)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$6=$8;
$9=$recv(orderedDictionaryClass)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$11=$recv(orderedIdentityDictionaryClass)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$recv($11)._at_put_((1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
$recv($11)._at_put_((2),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=7;
//>>excludeEnd("ctx");
$12=$recv($11)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=3;
//>>excludeEnd("ctx");
$10=$12;
$14=$recv(orderedIdentityDictionaryClass)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=5;
//>>excludeEnd("ctx");
$recv($14)._at_put_("a",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=8;
//>>excludeEnd("ctx");
$recv($14)._at_put_("b",(-2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=9;
//>>excludeEnd("ctx");
$recv($14)._at_put_("c",(0));
$15=$recv($14)._yourself();
$13=$15;
$2=[$3,$6,$9,$10,$13,$recv(orderedIdentityDictionaryClass)._new()];
dictionaries=$recv($1)._withAll_($2);
self._serializeAndMaterialize_(dictionaries);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testOrderedDictionary",{dictionaries:dictionaries,orderedDictionaryClass:orderedDictionaryClass,orderedIdentityDictionaryClass:orderedIdentityDictionaryClass},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testOrderedDictionary\x0a\x09\x22OrderedDictionary is special because it does not inherit from Dictionary.\x0a\x09It might also not exist in some dialects, where this test could be skipped.\x22\x0a\x09\x0a\x09| dictionaries orderedDictionaryClass orderedIdentityDictionaryClass |\x0a\x09orderedDictionaryClass := Smalltalk at: #OrderedDictionary ifAbsent: [ Dictionary ].\x0a\x09orderedIdentityDictionaryClass := Smalltalk at: #OrderedIdentityDictionary ifAbsent: [ IdentityDictionary ].\x0a\x09dictionaries := STON listClass withAll: {\x0a\x09\x09orderedDictionaryClass new at: 1 put: 1; at: 2 put: 2; yourself.\x0a\x09\x09orderedDictionaryClass new at: #a put: 1; at: #b put: -2; at: #c put: 0; yourself.\x0a\x09\x09orderedDictionaryClass new.\x0a\x09\x09orderedIdentityDictionaryClass new at: 1 put: 1; at: 2 put: 2; yourself.\x0a\x09\x09orderedIdentityDictionaryClass new at: #a put: 1; at: #b put: -2; at: #c put: 0; yourself.\x0a\x09\x09orderedIdentityDictionaryClass new }.\x0a\x09self serializeAndMaterialize: dictionaries",
referencedClasses: ["Smalltalk", "Dictionary", "IdentityDictionary", "STON"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "withAll:", "listClass", "at:put:", "new", "yourself", "serializeAndMaterialize:"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "testPrimitives",
protocol: 'tests',
fn: function () {
var self=this;
var primitives;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
primitives=$recv($recv($STON())._listClass())._withAll_([true,false,nil]);
self._serializeAndMaterialize_(primitives);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPrimitives",{primitives:primitives},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPrimitives\x0a\x09| primitives |\x0a\x09primitives := STON listClass withAll: { true. false. nil }.\x0a\x09self serializeAndMaterialize: primitives",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["withAll:", "listClass", "serializeAndMaterialize:"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "testSmallDictionary",
protocol: 'tests',
fn: function () {
var self=this;
var dictionaries,smallDictionaryClass;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$5,$3,$7,$8,$6,$2;
smallDictionaryClass=$recv($Smalltalk())._at_ifAbsent_("SmallDictionary",(function(){
return $Dictionary();

}));
$1=$recv($STON())._listClass();
$4=$recv(smallDictionaryClass)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($4)._at_put_((1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($4)._at_put_((2),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$5=$recv($4)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$3=$5;
$7=$recv(smallDictionaryClass)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($7)._at_put_((1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($7)._at_put_((2),(2));
$8=$recv($7)._yourself();
$6=$8;
$2=[$3,$6,$recv(smallDictionaryClass)._new()];
dictionaries=$recv($1)._withAll_($2);
self._serializeAndMaterialize_(dictionaries);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSmallDictionary",{dictionaries:dictionaries,smallDictionaryClass:smallDictionaryClass},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSmallDictionary\x0a\x09\x22SmallDictionary is special because it does not inherit from Dictionary.\x0a\x09It might also not exist in some dialects, where this test could be skipped.\x22\x0a\x09\x0a\x09| dictionaries smallDictionaryClass |\x0a\x09smallDictionaryClass := Smalltalk at: #SmallDictionary ifAbsent: [ Dictionary ].\x0a\x09dictionaries := STON listClass withAll: {\x0a\x09\x09smallDictionaryClass new at: 1 put: 1; at: 2 put: 2; yourself.\x0a\x09\x09smallDictionaryClass new at: 1 put: 1; at: 2 put: 2; yourself.\x0a\x09\x09smallDictionaryClass new }.\x0a\x09self serializeAndMaterialize: dictionaries",
referencedClasses: ["Smalltalk", "Dictionary", "STON"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "withAll:", "listClass", "at:put:", "new", "yourself", "serializeAndMaterialize:"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "testSmallIntegers",
protocol: 'tests',
fn: function () {
var self=this;
var integers;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
integers=$recv($recv($STON())._listClass())._withAll_((-10)._to_((10)));
self._serializeAndMaterialize_(integers);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSmallIntegers",{integers:integers},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSmallIntegers\x0a\x09| integers |\x0a\x09integers := STON listClass withAll: (-10 to: 10).\x0a\x09self serializeAndMaterialize: integers",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["withAll:", "listClass", "to:", "serializeAndMaterialize:"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "testStrings",
protocol: 'tests',
fn: function () {
var self=this;
var strings;
function $Collection(){return $globals.Collection||(typeof Collection=="undefined"?nil:Collection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
strings=$recv($recv($Collection())._allSubclasses())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._name())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._serializeAndMaterialize_(strings);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testStrings",{strings:strings},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testStrings\x0a\x09| strings |\x0a\x09strings := Collection allSubclasses collect: [ :each | each name asString ].\x0a\x09self serializeAndMaterialize: strings",
referencedClasses: ["Collection"],
//>>excludeEnd("ide");
messageSends: ["collect:", "allSubclasses", "asString", "name", "serializeAndMaterialize:"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "testSymbols",
protocol: 'tests',
fn: function () {
var self=this;
var symbols;
function $Collection(){return $globals.Collection||(typeof Collection=="undefined"?nil:Collection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._serializeAndMaterialize_(["bytes", ""]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serializeAndMaterialize:"]=1;
//>>excludeEnd("ctx");
symbols=$recv($recv($Collection())._allSubclasses())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._serializeAndMaterialize_(symbols);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSymbols",{symbols:symbols},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSymbols\x0a\x09| symbols |\x0a\x09self serializeAndMaterialize: #( #bytes #'' ).\x0a\x09symbols := Collection allSubclasses collect: [ :each | each name ].\x0a\x09self serializeAndMaterialize: symbols",
referencedClasses: ["Collection"],
//>>excludeEnd("ide");
messageSends: ["serializeAndMaterialize:", "collect:", "allSubclasses", "name"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "testTextAndRunArray",
protocol: 'tests',
fn: function () {
var self=this;
var texts;
function $Text(){return $globals.Text||(typeof Text=="undefined"?nil:Text)}
function $TextEmphasis(){return $globals.TextEmphasis||(typeof TextEmphasis=="undefined"?nil:TextEmphasis)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
texts=["Text!"._asText(),$recv($recv($Text())._string_attribute_("I am bold",$recv($TextEmphasis())._bold())).__comma(" and I am normal text"),$recv($Text())._new()];
self._serializeAndMaterialize_(texts);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTextAndRunArray",{texts:texts},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTextAndRunArray\x0a\x09| texts |\x0a\x09texts := { \x0a\x09\x09'Text!' asText. \x0a\x09\x09(Text string: 'I am bold' attribute: TextEmphasis bold), ' and I am normal text'.\x0a\x09\x09Text new }.\x0a\x09self serializeAndMaterialize: texts",
referencedClasses: ["Text", "TextEmphasis"],
//>>excludeEnd("ide");
messageSends: ["asText", ",", "string:attribute:", "bold", "new", "serializeAndMaterialize:"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "testUser",
protocol: 'tests',
fn: function () {
var self=this;
var user,users;
function $STONTestUser(){return $globals.STONTestUser||(typeof STONTestUser=="undefined"?nil:STONTestUser)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
user=$recv($STONTestUser())._dummy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dummy"]=1;
//>>excludeEnd("ctx");
self._serializeAndMaterialize_(user);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serializeAndMaterialize:"]=1;
//>>excludeEnd("ctx");
users=$recv($recv($STON())._listClass())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (10)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv($STONTestUser())._dummy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["dummy"]=2;
//>>excludeEnd("ctx");
return $recv(stream)._nextPut_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["timesRepeat:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._serializeAndMaterialize_(users);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serializeAndMaterialize:"]=2;
//>>excludeEnd("ctx");
users=$recv($recv($STON())._mapClass())._new();
(10)._timesRepeat_((function(){
var newUser;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
newUser=$recv($STONTestUser())._dummy();
newUser;
return $recv(users)._at_put_($recv(newUser)._username(),newUser);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({newUser:newUser},$ctx1,3)});
//>>excludeEnd("ctx");
}));
self._serializeAndMaterialize_(users);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUser",{user:user,users:users},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUser\x0a\x09| user users |\x0a\x09user := STONTestUser dummy.\x0a\x09self serializeAndMaterialize: user.\x0a\x09users := STON listClass streamContents: [ :stream |\x0a\x09\x0910 timesRepeat: [ stream nextPut: STONTestUser dummy ] ].\x0a\x09self serializeAndMaterialize: users.\x0a\x09users := STON mapClass new.\x0a\x0910 timesRepeat: [ | newUser |\x0a\x09\x09newUser := STONTestUser dummy.\x0a\x09\x09users at: newUser username put: newUser ].\x0a\x09self serializeAndMaterialize: users.",
referencedClasses: ["STONTestUser", "STON"],
//>>excludeEnd("ide");
messageSends: ["dummy", "serializeAndMaterialize:", "streamContents:", "listClass", "timesRepeat:", "nextPut:", "new", "mapClass", "at:put:", "username"]
}),
$globals.STONWriteReadTests);

$core.addMethod(
$core.method({
selector: "testUser2",
protocol: 'tests',
fn: function () {
var self=this;
var user,users;
function $STONTestUser2(){return $globals.STONTestUser2||(typeof STONTestUser2=="undefined"?nil:STONTestUser2)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
user=$recv($STONTestUser2())._dummy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dummy"]=1;
//>>excludeEnd("ctx");
self._serializeAndMaterialize_(user);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serializeAndMaterialize:"]=1;
//>>excludeEnd("ctx");
users=$recv($recv($STON())._listClass())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (10)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv($STONTestUser2())._dummy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["dummy"]=2;
//>>excludeEnd("ctx");
return $recv(stream)._nextPut_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["timesRepeat:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._serializeAndMaterialize_(users);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serializeAndMaterialize:"]=2;
//>>excludeEnd("ctx");
users=$recv($recv($STON())._mapClass())._new();
(10)._timesRepeat_((function(){
var newUser;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
newUser=$recv($STONTestUser2())._dummy();
newUser;
return $recv(users)._at_put_($recv(newUser)._username(),newUser);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({newUser:newUser},$ctx1,3)});
//>>excludeEnd("ctx");
}));
self._serializeAndMaterialize_(users);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUser2",{user:user,users:users},$globals.STONWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUser2\x0a\x09| user users |\x0a\x09user := STONTestUser2 dummy.\x0a\x09self serializeAndMaterialize: user.\x0a\x09users := STON listClass streamContents: [ :stream |\x0a\x09\x0910 timesRepeat: [ stream nextPut: STONTestUser2 dummy ] ].\x0a\x09self serializeAndMaterialize: users.\x0a\x09users := STON mapClass new.\x0a\x0910 timesRepeat: [ | newUser |\x0a\x09\x09newUser := STONTestUser2 dummy.\x0a\x09\x09users at: newUser username put: newUser ].\x0a\x09self serializeAndMaterialize: users.",
referencedClasses: ["STONTestUser2", "STON"],
//>>excludeEnd("ide");
messageSends: ["dummy", "serializeAndMaterialize:", "streamContents:", "listClass", "timesRepeat:", "nextPut:", "new", "mapClass", "at:put:", "username"]
}),
$globals.STONWriteReadTests);



$core.addClass('STONLargeWriteReadTests', $globals.STONWriteReadTests, [], 'STON-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONLargeWriteReadTests.comment="STONLargeWriteReadTests test the optimalizations for large structures.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "materialize:",
protocol: 'private',
fn: function (string) {
var self=this;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($STON())._reader();
$recv($2)._on_($recv(string)._readStream());
$recv($2)._optimizeForLargeStructures();
$3=$recv($2)._next();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"materialize:",{string:string},$globals.STONLargeWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["string"],
source: "materialize: string\x0a\x09^ STON reader\x0a\x09\x09on: string readStream;\x0a\x09\x09optimizeForLargeStructures;\x0a\x09\x09next",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["on:", "reader", "readStream", "optimizeForLargeStructures", "next"]
}),
$globals.STONLargeWriteReadTests);

$core.addMethod(
$core.method({
selector: "serialize:",
protocol: 'private',
fn: function (anObject) {
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($STON())._writer();
$recv($2)._on_(stream);
$recv($2)._prettyPrint_(true);
$recv($2)._optimizeForLargeStructures();
$3=$recv($2)._nextPut_(anObject);
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serialize:",{anObject:anObject},$globals.STONLargeWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "serialize: anObject\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09STON writer \x0a\x09\x09\x09on: stream; \x0a\x09\x09\x09prettyPrint: true;\x0a\x09\x09\x09optimizeForLargeStructures; \x0a\x09\x09\x09nextPut: anObject ]",
referencedClasses: ["String", "STON"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "on:", "writer", "prettyPrint:", "optimizeForLargeStructures", "nextPut:"]
}),
$globals.STONLargeWriteReadTests);

$core.addMethod(
$core.method({
selector: "serializeJson:",
protocol: 'private',
fn: function (anObject) {
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($STON())._jsonWriter();
$recv($2)._on_(stream);
$recv($2)._prettyPrint_(true);
$recv($2)._optimizeForLargeStructures();
$3=$recv($2)._nextPut_(anObject);
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serializeJson:",{anObject:anObject},$globals.STONLargeWriteReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "serializeJson: anObject\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09STON jsonWriter \x0a\x09\x09\x09on: stream; \x0a\x09\x09\x09prettyPrint: true;\x0a\x09\x09\x09optimizeForLargeStructures; \x0a\x09\x09\x09nextPut: anObject ]",
referencedClasses: ["String", "STON"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "on:", "jsonWriter", "prettyPrint:", "optimizeForLargeStructures", "nextPut:"]
}),
$globals.STONLargeWriteReadTests);



$core.addClass('STONWritePrettyPrinterReadTests', $globals.STONWriteReadTests, [], 'STON-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONWritePrettyPrinterReadTests.comment="STONWritePrettyPrinterReadTests tests pretty printed serialization followed by materialization.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "serialize:",
protocol: 'private',
fn: function (anObject) {
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($STON())._writer();
$recv($2)._on_(stream);
$recv($2)._prettyPrint_(true);
$3=$recv($2)._nextPut_(anObject);
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serialize:",{anObject:anObject},$globals.STONWritePrettyPrinterReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "serialize: anObject\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09STON writer \x0a\x09\x09\x09on: stream; \x0a\x09\x09\x09prettyPrint: true;\x0a\x09\x09\x09nextPut: anObject ]",
referencedClasses: ["String", "STON"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "on:", "writer", "prettyPrint:", "nextPut:"]
}),
$globals.STONWritePrettyPrinterReadTests);

$core.addMethod(
$core.method({
selector: "serializeJson:",
protocol: 'private',
fn: function (anObject) {
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($STON())._jsonWriter();
$recv($2)._on_(stream);
$recv($2)._prettyPrint_(true);
$3=$recv($2)._nextPut_(anObject);
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serializeJson:",{anObject:anObject},$globals.STONWritePrettyPrinterReadTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "serializeJson: anObject\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09STON jsonWriter \x0a\x09\x09\x09on: stream; \x0a\x09\x09\x09prettyPrint: true;\x0a\x09\x09\x09nextPut: anObject ]",
referencedClasses: ["String", "STON"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "on:", "jsonWriter", "prettyPrint:", "nextPut:"]
}),
$globals.STONWritePrettyPrinterReadTests);



$core.addClass('STONWriterTests', $globals.TestCase, [], 'STON-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONWriterTests.comment="STONWriterTests test serialization.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "serialize:",
protocol: 'private',
fn: function (anObject) {
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($STON())._writer();
$recv($2)._on_(stream);
$3=$recv($2)._nextPut_(anObject);
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serialize:",{anObject:anObject},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "serialize: anObject\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09STON writer \x0a\x09\x09\x09on: stream;\x0a\x09\x09\x09nextPut: anObject ]",
referencedClasses: ["String", "STON"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "on:", "writer", "nextPut:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "serializeJson:",
protocol: 'private',
fn: function (anObject) {
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($STON())._jsonWriter();
$recv($2)._on_(stream);
$3=$recv($2)._nextPut_(anObject);
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serializeJson:",{anObject:anObject},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "serializeJson: anObject\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09STON jsonWriter \x0a\x09\x09\x09on: stream; \x0a\x09\x09\x09nextPut: anObject ]",
referencedClasses: ["String", "STON"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "on:", "jsonWriter", "nextPut:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "serializePretty:",
protocol: 'private',
fn: function (anObject) {
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($STON())._writer();
$recv($2)._on_(stream);
$recv($2)._prettyPrint_(true);
$3=$recv($2)._nextPut_(anObject);
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serializePretty:",{anObject:anObject},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "serializePretty: anObject\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09STON writer \x0a\x09\x09\x09on: stream; \x0a\x09\x09\x09prettyPrint: true;\x0a\x09\x09\x09nextPut: anObject ]",
referencedClasses: ["String", "STON"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "on:", "writer", "prettyPrint:", "nextPut:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testAssociation",
protocol: 'tests',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$6,$5,$4,$9,$8,$7;
$3="foo".__minus_gt((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$2=self._serialize_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("'foo':1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$6="bar".__minus_gt((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$5=self._serialize_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__eq("'bar':2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$9="foo bar".__minus_gt("ok");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$8=self._serialize_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=3;
//>>excludeEnd("ctx");
$7=$recv($8).__eq("'foo bar':'ok'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
self._assert_($recv(self._serialize_((123).__minus_gt((456)))).__eq("123:456"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAssociation",{},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAssociation\x0a\x09self assert: (self serialize: 'foo' -> 1) =  '''foo'':1'.\x0a\x09self assert: (self serialize: #bar -> 2) =  '''bar'':2'.\x0a\x09self assert: (self serialize: 'foo bar' -> #ok) =  '''foo bar'':''ok'''.\x0a\x09self assert: (self serialize: 123 -> 456) =  '123:456'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "serialize:", "->"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testBoolean",
protocol: 'tests',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._serialize_(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("true");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv(self._serialize_(false)).__eq("false"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBoolean",{},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBoolean\x0a\x09self assert: (self serialize: true) = 'true'.\x0a\x09self assert: (self serialize: false) = 'false'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "serialize:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testByteArray",
protocol: 'tests',
fn: function () {
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testByteArray\x0a\x09\x22No ByteArray in Amber\x22\x0a\x09\x22self assert: (self serialize: #(1 2 3) asByteArray) = 'ByteArray[''010203'']'\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testCustomNewline",
protocol: 'tests',
fn: function () {
var self=this;
var output;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
function $Character(){return $globals.Character||(typeof Character=="undefined"?nil:Character)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
output=$recv($String())._streamContents_((function(out){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv($STON())._writer())._on_(out);
$2=$1;
$3=$recv($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv($2)._newLine_($3);
$recv($1)._prettyPrint_(true);
$4=$recv($1)._nextPut_([(1)]);
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({out:out},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._assert_equals_(output,$recv("[\x5c\x091\x5c]"._withCRs())._replaceAll_with_($recv($Character())._cr(),$recv($Character())._lf()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCustomNewline",{output:output},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCustomNewline\x0a\x09| output |\x0a\x09output := String streamContents: [ :out |\x0a\x09\x09(STON writer on: out)\x0a\x09\x09\x09newLine: String lf;\x0a\x09\x09\x09prettyPrint: true;\x0a\x09\x09\x09nextPut: #( 1 ) ].\x0a\x09self \x0a\x09\x09assert: output \x0a\x09\x09equals: ('[\x5c\x091\x5c]' withCRs replaceAll: Character cr with: Character lf)",
referencedClasses: ["String", "STON", "Character"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "newLine:", "on:", "writer", "lf", "prettyPrint:", "nextPut:", "assert:equals:", "replaceAll:with:", "withCRs", "cr"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testDate",
protocol: 'tests',
fn: function () {
var self=this;
var date;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
date=$recv($Date())._fromString_("2012/01/30 00:00:00");
self._assert_($recv(self._serialize_(date)).__eq("Date['2012-01-30']"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDate",{date:date},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDate\x0a\x09| date |\x0a\x09date := Date fromString: '2012/01/30 00:00:00'.\x0a\x09self assert: (self serialize: date) = 'Date[''2012-01-30'']'",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["fromString:", "assert:", "=", "serialize:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testDateAndTime",
protocol: 'tests',
fn: function () {
var self=this;
var dateAndTime;
function $DateAndTime(){return $globals.DateAndTime||(typeof DateAndTime=="undefined"?nil:DateAndTime)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
dateAndTime=$recv($DateAndTime())._fromString_("2012/11/01 06:30:15");
self._assert_($recv(self._serialize_(dateAndTime)).__eq("DateAndTime['2012-01-01T06:30:15+01:00']"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDateAndTime",{dateAndTime:dateAndTime},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDateAndTime\x0a\x09| dateAndTime |\x0a\x09dateAndTime := DateAndTime fromString: '2012/11/01 06:30:15'.\x0a\x09self assert: (self serialize: dateAndTime) = 'DateAndTime[''2012-01-01T06:30:15+01:00'']'",
referencedClasses: ["DateAndTime"],
//>>excludeEnd("ide");
messageSends: ["fromString:", "assert:", "=", "serialize:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testDictionary",
protocol: 'tests',
fn: function () {
var self=this;
var collection;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4;
$2=$recv($STON())._mapClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["mapClass"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_((1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_((2),(2));
$3=$recv($1)._yourself();
collection=$3;
$5=self._serialize_(collection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__eq("{1:1,2:2}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv(self._serialize_($recv($recv($STON())._mapClass())._new())).__eq("{}"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDictionary",{collection:collection},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDictionary\x0a\x09| collection |\x0a\x09collection := STON mapClass new at: 1 put: 1; at: 2 put: 2; yourself.\x0a\x09self assert: (self serialize: collection) = '{1:1,2:2}'.\x0a\x09self assert: (self serialize: STON mapClass new) = '{}'.",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new", "mapClass", "yourself", "assert:", "=", "serialize:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testDictionaryWithComplexKeys",
protocol: 'tests',
fn: function () {
var self=this;
var collection;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($recv($STON())._mapClass())._new();
$recv($1)._at_put_(true,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_(["foo"],(2));
$2=$recv($1)._yourself();
collection=$2;
self._assert_($recv(self._serialize_(collection)).__eq("{true:1,['foo']:2}"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDictionaryWithComplexKeys",{collection:collection},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDictionaryWithComplexKeys\x0a\x09| collection |\x0a\x09collection := STON mapClass new at: true put: 1; at: #(foo) put: 2; yourself.\x0a\x09self assert: (self serialize: collection) = '{true:1,[''foo'']:2}'.",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new", "mapClass", "yourself", "assert:", "=", "serialize:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testDoubleQuotedString",
protocol: 'tests',
fn: function () {
var self=this;
var string;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $Character(){return $globals.Character||(typeof Character=="undefined"?nil:Character)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5;
$2=self._serializeJson_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serializeJson:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("\x22foo\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=self._serializeJson_("FOO");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serializeJson:"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq("\x22FOO\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$6=self._serializeJson_("élève en Français");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serializeJson:"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__eq("\x22\x5cu00E9l\x5cu00E8ve en Fran\x5cu00E7ais\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
string=$recv($String())._withAll_(["\x22","'","\x5c",$recv($Character())._tab(),$recv($Character())._cr(),$recv($Character())._lf(),$recv($Character())._newPage(),$recv($Character())._backspace()]);
self._assert_($recv(self._serializeJson_(string)).__eq("\x22\x5c\x22\x5c'\x5c\x5c\x5ct\x5cr\x5cn\x5cf\x5cb\x22"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDoubleQuotedString",{string:string},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDoubleQuotedString\x0a\x09| string |\x0a\x09self assert: (self serializeJson: 'foo') = '\x22foo\x22'.\x0a\x09self assert: (self serializeJson: 'FOO') = '\x22FOO\x22'.\x0a\x09self assert: (self serializeJson: 'élève en Français') = '\x22\x5cu00E9l\x5cu00E8ve en Fran\x5cu00E7ais\x22'.\x0a\x09string := String withAll: { \x0a\x09\x09$\x22. $'. $\x5c. Character tab. Character cr. Character lf.  Character newPage. Character backspace }.\x0a\x09self assert: (self serializeJson: string) = '\x22\x5c\x22\x5c''\x5c\x5c\x5ct\x5cr\x5cn\x5cf\x5cb\x22'.",
referencedClasses: ["String", "Character"],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "serializeJson:", "withAll:", "tab", "cr", "lf", "newPage", "backspace"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testEmptyArrayPretty",
protocol: 'tests',
fn: function () {
var self=this;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_equals_(self._serializePretty_($recv($recv($STON())._listClass())._new()),"[ ]");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEmptyArrayPretty",{},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEmptyArrayPretty\x0a\x09self assert: (self serializePretty: STON listClass new) equals: '[ ]'",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "serializePretty:", "new", "listClass"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testEmptyDictionaryPretty",
protocol: 'tests',
fn: function () {
var self=this;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_equals_(self._serializePretty_($recv($recv($STON())._mapClass())._new()),"{ }");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEmptyDictionaryPretty",{},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEmptyDictionaryPretty\x0a\x09self assert: (self serializePretty: STON mapClass new) equals: '{ }'",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "serializePretty:", "new", "mapClass"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testFloat",
protocol: 'tests',
fn: function () {
var self=this;
function $Float(){return $globals.Float||(typeof Float=="undefined"?nil:Float)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$8,$7,$10,$9,$14,$13,$12,$11,$18,$17,$16,$15;
$2=self._serialize_((1.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("1.5");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=self._serialize_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq("0.0");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$6=self._serialize_((-1.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__eq("-1.5");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$8=self._serialize_($recv($Float())._pi());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=4;
//>>excludeEnd("ctx");
$7=$recv($8)._beginsWith_("3.14159");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["beginsWith:"]=1;
//>>excludeEnd("ctx");
self._assert_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$10=self._serialize_((1).__slash((3)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=5;
//>>excludeEnd("ctx");
$9=$recv($10)._beginsWith_("0.333");
self._assert_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$14=(10)._raisedTo_((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["raisedTo:"]=1;
//>>excludeEnd("ctx");
$13=$recv($14)._asFloat();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asFloat"]=1;
//>>excludeEnd("ctx");
$12=self._serialize_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=6;
//>>excludeEnd("ctx");
$11=$recv($12).__eq("1.0e100");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=4;
//>>excludeEnd("ctx");
self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=6;
//>>excludeEnd("ctx");
$18=(10)._raisedTo_((-50));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["raisedTo:"]=2;
//>>excludeEnd("ctx");
$17=$recv($18)._asFloat();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asFloat"]=2;
//>>excludeEnd("ctx");
$16=self._serialize_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=7;
//>>excludeEnd("ctx");
$15=$recv($16).__eq("1.0e-50");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=5;
//>>excludeEnd("ctx");
self._assert_($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=7;
//>>excludeEnd("ctx");
self._assert_($recv(self._serialize_($recv($recv((10)._raisedTo_((-50)))._asFloat())._negated())).__eq("-1.0e-50"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFloat",{},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFloat\x0a\x09\x22No Float in Amber\x22\x0a\x09self assert: (self serialize: 1.5) = '1.5'.\x0a\x09self assert: (self serialize: 0.0) = '0.0'.\x0a\x09self assert: (self serialize: -1.5) = '-1.5'.\x0a\x09self assert: ((self serialize: Float pi) beginsWith:  '3.14159').\x0a\x09self assert: ((self serialize: 1/3) beginsWith:  '0.333').\x0a\x09self assert: (self serialize: (10 raisedTo: 100) asFloat) = '1.0e100'.\x0a\x09self assert: (self serialize: (10 raisedTo: -50) asFloat) = '1.0e-50'.\x0a\x09self assert: (self serialize: (10 raisedTo: -50) asFloat negated) = '-1.0e-50'.",
referencedClasses: ["Float"],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "serialize:", "beginsWith:", "pi", "/", "asFloat", "raisedTo:", "negated"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testIdentityDictionary",
protocol: 'tests',
fn: function () {
var self=this;
var collection;
function $IdentityDictionary(){return $globals.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
$1=$recv($IdentityDictionary())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_((1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_((2),(2));
$2=$recv($1)._yourself();
collection=$2;
$4=self._serialize_(collection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__eq("IdentityDictionary{1:1,2:2}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv(self._serialize_($recv($IdentityDictionary())._new())).__eq("IdentityDictionary{}"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIdentityDictionary",{collection:collection},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIdentityDictionary\x0a\x09| collection |\x0a\x09collection := IdentityDictionary new at: 1 put: 1; at: 2 put: 2; yourself.\x0a\x09self assert: (self serialize: collection) = 'IdentityDictionary{1:1,2:2}'.\x0a\x09self assert: (self serialize: IdentityDictionary new) = 'IdentityDictionary{}'.",
referencedClasses: ["IdentityDictionary"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new", "yourself", "assert:", "=", "serialize:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testInteger",
protocol: 'tests',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$8,$7;
$2=self._serialize_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=self._serialize_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq("0");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$6=self._serialize_((-1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__eq("-1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$8=self._serialize_((1234567890));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=4;
//>>excludeEnd("ctx");
$7=$recv($8).__eq("1234567890");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=4;
//>>excludeEnd("ctx");
self._assert_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
self._assert_($recv(self._serialize_((-1234567890))).__eq("-1234567890"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInteger",{},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInteger\x0a\x09self assert: (self serialize: 1) = '1'.\x0a\x09self assert: (self serialize: 0) = '0'.\x0a\x09self assert: (self serialize: -1) = '-1'.\x0a\x09self assert: (self serialize: 1234567890) = '1234567890'.\x0a\x09self assert: (self serialize: -1234567890) = '-1234567890'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "serialize:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testIsSimpleSymbol",
protocol: 'tests',
fn: function () {
var self=this;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$8,$7,$10,$9,$12,$11,$14,$13,$16,$15,$18,$17,$20,$19;
$2=$recv($STON())._writer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["writer"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isSimpleSymbol_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isSimpleSymbol:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=$recv($STON())._writer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["writer"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._isSimpleSymbol_("az");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isSimpleSymbol:"]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$6=$recv($STON())._writer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["writer"]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._isSimpleSymbol_("AZ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isSimpleSymbol:"]=3;
//>>excludeEnd("ctx");
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$8=$recv($STON())._writer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["writer"]=4;
//>>excludeEnd("ctx");
$7=$recv($8)._isSimpleSymbol_("N0123456789");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isSimpleSymbol:"]=4;
//>>excludeEnd("ctx");
self._assert_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$10=$recv($STON())._writer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["writer"]=5;
//>>excludeEnd("ctx");
$9=$recv($10)._isSimpleSymbol_("foo123");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isSimpleSymbol:"]=5;
//>>excludeEnd("ctx");
self._assert_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$12=$recv($STON())._writer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["writer"]=6;
//>>excludeEnd("ctx");
$11=$recv($12)._isSimpleSymbol_("Foo/Bar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isSimpleSymbol:"]=6;
//>>excludeEnd("ctx");
self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=6;
//>>excludeEnd("ctx");
$14=$recv($STON())._writer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["writer"]=7;
//>>excludeEnd("ctx");
$13=$recv($14)._isSimpleSymbol_("Foo.Bar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isSimpleSymbol:"]=7;
//>>excludeEnd("ctx");
self._assert_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=7;
//>>excludeEnd("ctx");
$16=$recv($STON())._writer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["writer"]=8;
//>>excludeEnd("ctx");
$15=$recv($16)._isSimpleSymbol_("Foo-Bar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isSimpleSymbol:"]=8;
//>>excludeEnd("ctx");
self._assert_($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=8;
//>>excludeEnd("ctx");
$18=$recv($STON())._writer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["writer"]=9;
//>>excludeEnd("ctx");
$17=$recv($18)._isSimpleSymbol_("Foo_Bar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isSimpleSymbol:"]=9;
//>>excludeEnd("ctx");
self._assert_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=9;
//>>excludeEnd("ctx");
$20=$recv($STON())._writer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["writer"]=10;
//>>excludeEnd("ctx");
$19=$recv($20)._isSimpleSymbol_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isSimpleSymbol:"]=10;
//>>excludeEnd("ctx");
self._assert_($19);
self._deny_($recv($recv($STON())._writer())._isSimpleSymbol_("#^&$%"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIsSimpleSymbol",{},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIsSimpleSymbol\x0a\x09self assert: (STON writer isSimpleSymbol: #foo).\x0a\x09self assert: (STON writer isSimpleSymbol: #az).\x0a\x09self assert: (STON writer isSimpleSymbol: #AZ).\x0a\x09self assert: (STON writer isSimpleSymbol: #N0123456789).\x0a\x09self assert: (STON writer isSimpleSymbol: #foo123).\x0a\x09self assert: (STON writer isSimpleSymbol: #'Foo/Bar').\x0a\x09self assert: (STON writer isSimpleSymbol: #'Foo.Bar').\x0a\x09self assert: (STON writer isSimpleSymbol: #'Foo-Bar').\x0a\x09self assert: (STON writer isSimpleSymbol: #'Foo_Bar').\x0a\x09self assert: (STON writer isSimpleSymbol: #foo).\x0a\x09self deny: (STON writer isSimpleSymbol: #'#^&$%')",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["assert:", "isSimpleSymbol:", "writer", "deny:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testKeepingNewLines",
protocol: 'tests',
fn: function () {
var self=this;
var input,result,output;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $5,$4,$3,$2,$1,$6,$12,$11,$10,$13,$9,$8,$14,$7,$16,$15,$17,$23,$22,$21,$24,$20,$19,$25,$18,$26,$27;
$5=$recv($String())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$4="line ending with CR".__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$3=$recv($4).__comma("line ending with LF");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$2=$recv($3).__comma($recv($String())._lf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$1=$recv($2).__comma("line ending with CRLF");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$6=$recv($String())._crlf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["crlf"]=1;
//>>excludeEnd("ctx");
input=$recv($1).__comma($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$12=$recv($String())._crlf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["crlf"]=2;
//>>excludeEnd("ctx");
$11="'line ending with CR".__comma($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=11;
//>>excludeEnd("ctx");
$10=$recv($11).__comma("line ending with LF");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=10;
//>>excludeEnd("ctx");
$13=$recv($String())._crlf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["crlf"]=3;
//>>excludeEnd("ctx");
$9=$recv($10).__comma($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=9;
//>>excludeEnd("ctx");
$8=$recv($9).__comma("line ending with CRLF");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=8;
//>>excludeEnd("ctx");
$14=$recv($String())._crlf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["crlf"]=4;
//>>excludeEnd("ctx");
$7=$recv($8).__comma($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=7;
//>>excludeEnd("ctx");
output=$recv($7).__comma("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
result=$recv($String())._streamContents_((function(out){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$16=$recv($STON())._writer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["writer"]=1;
//>>excludeEnd("ctx");
$15=$recv($16)._on_(out);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["on:"]=1;
//>>excludeEnd("ctx");
$recv($15)._newLine_($recv($String())._crlf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["newLine:"]=1;
//>>excludeEnd("ctx");
$recv($15)._keepNewLines_(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["keepNewLines:"]=1;
//>>excludeEnd("ctx");
$17=$recv($15)._nextPut_(input);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
return $17;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({out:out},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["streamContents:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_(result,output);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$23=$recv($String())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=2;
//>>excludeEnd("ctx");
$22="'line ending with CR".__comma($23);
$21=$recv($22).__comma("line ending with LF");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=16;
//>>excludeEnd("ctx");
$24=$recv($String())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=3;
//>>excludeEnd("ctx");
$20=$recv($21).__comma($24);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=15;
//>>excludeEnd("ctx");
$19=$recv($20).__comma("line ending with CRLF");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=14;
//>>excludeEnd("ctx");
$25=$recv($String())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=4;
//>>excludeEnd("ctx");
$18=$recv($19).__comma($25);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=13;
//>>excludeEnd("ctx");
output=$recv($18).__comma("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=12;
//>>excludeEnd("ctx");
result=$recv($String())._streamContents_((function(out){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$26=$recv($recv($STON())._writer())._on_(out);
$recv($26)._newLine_($recv($String())._cr());
$recv($26)._keepNewLines_(true);
$27=$recv($26)._nextPut_(input);
return $27;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({out:out},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._assert_equals_(result,output);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testKeepingNewLines",{input:input,result:result,output:output},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testKeepingNewLines\x0a\x09| input result output |\x0a\x09input := 'line ending with CR', String cr, \x0a\x09\x09'line ending with LF', String lf, \x0a\x09\x09'line ending with CRLF', String crlf.\x0a\x09output := '''line ending with CR', String crlf, \x0a\x09\x09'line ending with LF', String crlf, \x0a\x09\x09'line ending with CRLF', String crlf, ''''.\x0a\x09result := String streamContents: [ :out |\x0a\x09\x09(STON writer on: out) newLine: String crlf; keepNewLines: true; nextPut: input ].\x0a\x09self assert: result equals: output.\x0a\x09output := '''line ending with CR', String cr, \x0a\x09\x09'line ending with LF', String cr, \x0a\x09\x09'line ending with CRLF', String cr, ''''.\x0a\x09result := String streamContents: [ :out |\x0a\x09\x09(STON writer on: out) newLine: String cr; keepNewLines: true; nextPut: input ].\x0a\x09self assert: result equals: output",
referencedClasses: ["String", "STON"],
//>>excludeEnd("ide");
messageSends: [",", "cr", "lf", "crlf", "streamContents:", "newLine:", "on:", "writer", "keepNewLines:", "nextPut:", "assert:equals:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testList",
protocol: 'tests',
fn: function () {
var self=this;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1,$8,$7,$6,$5;
$4=$recv($STON())._listClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["listClass"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._withAll_([(1), (2), (3)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["withAll:"]=1;
//>>excludeEnd("ctx");
$2=self._serialize_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("[1,2,3]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$8=$recv($STON())._listClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["listClass"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._new();
$6=self._serialize_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__eq("[]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
self._assert_($recv(self._serialize_($recv($recv($STON())._listClass())._withAll_([(1),(-1),(0),"foo","a b c",true,false,nil]))).__eq("[1,-1,0,'foo','a b c',true,false,nil]"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testList",{},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testList\x0a\x09self assert: (self serialize: (STON listClass withAll: #(1 2 3))) = '[1,2,3]'.\x0a\x09self assert: (self serialize: STON listClass new) = '[]'.\x0a\x09self assert: (self serialize: (STON listClass withAll: { 1. -1. 0. #foo. 'a b c'. true. false. nil })) = '[1,-1,0,''foo'',''a b c'',true,false,nil]'",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "serialize:", "withAll:", "listClass", "new"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testMap",
protocol: 'tests',
fn: function () {
var self=this;
var map;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4,$7,$6,$9,$8;
$2=$recv($STON())._mapClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["mapClass"]=1;
//>>excludeEnd("ctx");
map=$recv($2)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=map;
$recv($1)._at_put_("foo",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$3=$recv($1)._at_put_("bar",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$5=self._serialize_(map);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__eq("{#foo:1,#bar:2}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$7=self._serialize_($recv($recv($STON())._mapClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=2;
//>>excludeEnd("ctx");
$6=$recv($7).__eq("{}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$recv(map)._removeAll();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeAll"]=1;
//>>excludeEnd("ctx");
$recv(map)._at_put_("foo bar","ok");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$9=self._serialize_(map);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=3;
//>>excludeEnd("ctx");
$8=$recv($9).__eq("{'foo bar':#ok}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$recv(map)._removeAll();
$recv(map)._at_put_((123),(456));
self._assert_($recv(self._serialize_(map)).__eq("{123:456}"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMap",{map:map},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMap\x0a\x09| map |\x0a\x09(map := STON mapClass new)\x0a\x09\x09at: #foo put: 1;\x0a\x09\x09at: #bar put: 2.\x0a\x09self assert: (self serialize: map) = '{#foo:1,#bar:2}'.\x0a\x09self assert: (self serialize: STON mapClass new) = '{}'.\x0a\x09map removeAll.\x0a\x09map at: 'foo bar' put: #ok.\x0a\x09self assert: (self serialize: map) = '{''foo bar'':#ok}'.\x0a\x09map removeAll.\x0a\x09map at: 123 put: 456.\x0a\x09self assert: (self serialize: map) = '{123:456}'.",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new", "mapClass", "assert:", "=", "serialize:", "removeAll"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testNil",
protocol: 'tests',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_($recv(self._serialize_(nil)).__eq("nil"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNil",{},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNil\x0a\x09self assert: (self serialize: nil) = 'nil'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "serialize:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testNull",
protocol: 'tests',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_equals_(self._serializeJson_(nil),"null");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNull",{},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNull\x0a\x09self assert: (self serializeJson: nil) equals: 'null'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "serializeJson:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testOrderedCollection",
protocol: 'tests',
fn: function () {
var self=this;
var collection;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
collection=$recv($OrderedCollection())._with_with_with_((1),(2),(3));
$2=self._serialize_(collection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("OrderedCollection[1,2,3]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv(self._serialize_($recv($OrderedCollection())._new())).__eq("OrderedCollection[]"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testOrderedCollection",{collection:collection},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testOrderedCollection\x0a\x09| collection |\x0a\x09collection := OrderedCollection with: 1 with: 2 with: 3.\x0a\x09self assert: (self serialize: collection) = 'OrderedCollection[1,2,3]'.\x0a\x09self assert: (self serialize: OrderedCollection new) = 'OrderedCollection[]'.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["with:with:with:", "assert:", "=", "serialize:", "new"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testPoint",
protocol: 'tests',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_($recv(self._serialize_((1).__at((2)))).__eq("Point[1,2]"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPoint",{},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPoint\x0a\x09self assert: (self serialize: 1@2) = 'Point[1,2]'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "serialize:", "@"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testReferenceCycle",
protocol: 'tests',
fn: function () {
var self=this;
var array;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
array=$recv($recv($STON())._listClass())._with_with_((1),nil);
$recv(array)._at_put_((2),array);
self._assert_($recv(self._serialize_(array)).__eq("[1,@1]"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReferenceCycle",{array:array},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReferenceCycle\x0a\x09| array |\x0a\x09array := STON listClass with: 1 with: nil.\x0a\x09array at: 2 put: array.\x0a\x09self assert: (self serialize: array) = '[1,@1]'.",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["with:with:", "listClass", "at:put:", "assert:", "=", "serialize:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testReferenceSharing",
protocol: 'tests',
fn: function () {
var self=this;
var array,one;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
one=["one"];
array=$recv($recv($STON())._listClass())._with_with_with_(one,one,one);
self._assert_($recv(self._serialize_(array)).__eq("[[#one],@2,@2]"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReferenceSharing",{array:array,one:one},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReferenceSharing\x0a\x09| array one |\x0a\x09one := { #one }.\x0a\x09array := STON listClass with: one with: one with: one.\x0a\x09self assert: (self serialize: array) = '[[#one],@2,@2]'.",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["with:with:with:", "listClass", "assert:", "=", "serialize:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testReferenceSharingError",
protocol: 'tests',
fn: function () {
var self=this;
var serializer,array,one;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
function $STONWriterError(){return $globals.STONWriterError||(typeof STONWriterError=="undefined"?nil:STONWriterError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
serializer=(function(object){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv($STON())._writer();
$recv($1)._on_(stream);
$recv($1)._referencePolicy_("error");
$2=$recv($1)._nextPut_(object);
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({stream:stream},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({object:object},$ctx1,1)});
//>>excludeEnd("ctx");
});
one=["one"];
array=$recv($recv($STON())._listClass())._with_with_with_(one,one,one);
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(serializer)._value_(array)).__eq("[[#one],[#one],[#one]]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}),$STONWriterError());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReferenceSharingError",{serializer:serializer,array:array,one:one},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReferenceSharingError\x0a\x09| serializer array one |\x0a\x09serializer := [ :object | \x0a\x09\x09String streamContents: [ :stream |\x0a\x09\x09\x09STON writer \x0a\x09\x09\x09\x09on: stream;\x0a\x09\x09\x09\x09referencePolicy: #error; \x0a\x09\x09\x09\x09nextPut: object ] ].\x0a\x09one := { #one }.\x0a\x09array := STON listClass with: one with: one with: one.\x0a\x09self \x0a\x09\x09should: [ (serializer value: array) = '[[#one],[#one],[#one]]' ] \x0a\x09\x09raise: STONWriterError",
referencedClasses: ["String", "STON", "STONWriterError"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "on:", "writer", "referencePolicy:", "nextPut:", "with:with:with:", "listClass", "should:raise:", "=", "value:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testReferenceSharingIgnore",
protocol: 'tests',
fn: function () {
var self=this;
var serializer,array,one;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
serializer=(function(object){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv($STON())._writer();
$recv($1)._on_(stream);
$recv($1)._referencePolicy_("ignore");
$2=$recv($1)._nextPut_(object);
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({stream:stream},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({object:object},$ctx1,1)});
//>>excludeEnd("ctx");
});
one=["one"];
array=$recv($recv($STON())._listClass())._with_with_with_(one,one,one);
self._assert_($recv($recv(serializer)._value_(array)).__eq("[[#one],[#one],[#one]]"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReferenceSharingIgnore",{serializer:serializer,array:array,one:one},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReferenceSharingIgnore\x0a\x09| serializer array one |\x0a\x09serializer := [ :object | \x0a\x09\x09String streamContents: [ :stream |\x0a\x09\x09\x09STON writer \x0a\x09\x09\x09\x09on: stream;\x0a\x09\x09\x09\x09referencePolicy: #ignore; \x0a\x09\x09\x09\x09nextPut: object ] ].\x0a\x09one := { #one }.\x0a\x09array := STON listClass with: one with: one with: one.\x0a\x09self assert: (serializer value: array) = '[[#one],[#one],[#one]]'.",
referencedClasses: ["String", "STON"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "on:", "writer", "referencePolicy:", "nextPut:", "with:with:with:", "listClass", "assert:", "=", "value:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testRestrictedClassesInJsonMode",
protocol: 'tests',
fn: function () {
var self=this;
function $STONWriterError(){return $globals.STONWriterError||(typeof STONWriterError=="undefined"?nil:STONWriterError)}
function $STONTestUser(){return $globals.STONTestUser||(typeof STONTestUser=="undefined"?nil:STONTestUser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._serializeJson_((1).__at((2)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["serializeJson:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$STONWriterError());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=1;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._serializeJson_($recv($STONTestUser())._dummy());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$STONWriterError());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRestrictedClassesInJsonMode",{},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRestrictedClassesInJsonMode\x0a\x09self should: [ self serializeJson: 1@2 ] raise: STONWriterError.\x0a\x09self should: [ self serializeJson: STONTestUser dummy ] raise: STONWriterError.",
referencedClasses: ["STONWriterError", "STONTestUser"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "serializeJson:", "@", "dummy"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testString",
protocol: 'tests',
fn: function () {
var self=this;
var string;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $Character(){return $globals.Character||(typeof Character=="undefined"?nil:Character)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5;
$2=self._serialize_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("'foo'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=self._serialize_("FOO");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq("'FOO'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$6=self._serialize_("élève en Français");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__eq("'\x5cu00E9l\x5cu00E8ve en Fran\x5cu00E7ais'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
string=$recv($String())._withAll_(["\x22","'","\x5c",$recv($Character())._tab(),$recv($Character())._cr(),$recv($Character())._lf(),$recv($Character())._newPage(),$recv($Character())._backspace()]);
self._assert_($recv(self._serialize_(string)).__eq("'\x5c\x22\x5c'\x5c\x5c\x5ct\x5cr\x5cn\x5cf\x5cb'"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testString",{string:string},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testString\x0a\x09| string |\x0a\x09self assert: (self serialize: 'foo') = '''foo'''.\x0a\x09self assert: (self serialize: 'FOO') = '''FOO'''.\x0a\x09self assert: (self serialize: 'élève en Français') = '''\x5cu00E9l\x5cu00E8ve en Fran\x5cu00E7ais'''.\x0a\x09string := String withAll: { \x0a\x09\x09$\x22. $'. $\x5c. Character tab. Character cr. Character lf.  Character newPage. Character backspace }.\x0a\x09self assert: (self serialize: string) = '''\x5c\x22\x5c''\x5c\x5c\x5ct\x5cr\x5cn\x5cf\x5cb'''.",
referencedClasses: ["String", "Character"],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "serialize:", "withAll:", "tab", "cr", "lf", "newPage", "backspace"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testSymbol",
protocol: 'tests',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$8,$7,$10,$9,$12,$11,$14,$13,$16,$15;
$2=self._serialize_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("'foo'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=self._serialize_("FOO");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq("'FOO'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$6=self._serialize_("bytes");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__eq("'bytes'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$8=self._serialize_("foo.bar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=4;
//>>excludeEnd("ctx");
$7=$recv($8).__eq("'foo.bar'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=4;
//>>excludeEnd("ctx");
self._assert_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$10=self._serialize_("foo-bar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=5;
//>>excludeEnd("ctx");
$9=$recv($10).__eq("'foo-bar'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=5;
//>>excludeEnd("ctx");
self._assert_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$12=self._serialize_("foo_bar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=6;
//>>excludeEnd("ctx");
$11=$recv($12).__eq("'foo_bar'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=6;
//>>excludeEnd("ctx");
self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=6;
//>>excludeEnd("ctx");
$14=self._serialize_("foo/bar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=7;
//>>excludeEnd("ctx");
$13=$recv($14).__eq("'foo/bar'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=7;
//>>excludeEnd("ctx");
self._assert_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=7;
//>>excludeEnd("ctx");
$16=self._serialize_("foo bar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serialize:"]=8;
//>>excludeEnd("ctx");
$15=$recv($16).__eq("'foo bar'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=8;
//>>excludeEnd("ctx");
self._assert_($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=8;
//>>excludeEnd("ctx");
self._assert_($recv(self._serialize_("foo123")).__eq("'foo123'"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSymbol",{},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSymbol\x0a\x09\x22No Symbols in Amber - they are just String's\x22\x0a\x09self assert: (self serialize: #foo) = '''foo'''.\x0a\x09self assert: (self serialize: #FOO) = '''FOO'''.\x0a\x09self assert: (self serialize: #bytes) = '''bytes'''.\x0a\x09self assert: (self serialize: #'foo.bar') = '''foo.bar'''.\x0a\x09self assert: (self serialize: #'foo-bar') = '''foo-bar'''.\x0a\x09self assert: (self serialize: #'foo_bar') = '''foo_bar'''.\x0a\x09self assert: (self serialize: #'foo/bar') = '''foo/bar'''.\x0a\x09self assert: (self serialize: #'foo bar') = '''foo bar'''.\x0a\x09self assert: (self serialize: #foo123) = '''foo123'''.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "serialize:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testSymbolAsString",
protocol: 'tests',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._serializeJson_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["serializeJson:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("\x22foo\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv(self._serializeJson_("FOO")).__eq("\x22FOO\x22"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSymbolAsString",{},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSymbolAsString\x0a\x09self assert: (self serializeJson: #foo) = '\x22foo\x22'.\x0a\x09self assert: (self serializeJson: #'FOO') = '\x22FOO\x22'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "serializeJson:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testTime",
protocol: 'tests',
fn: function () {
var self=this;
var time;
function $Time(){return $globals.Time||(typeof Time=="undefined"?nil:Time)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
time=$recv($Time())._hour_minute_second_((6),(30),(15));
self._assert_($recv(self._serialize_(time)).__eq("Time['06:30:15']"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTime",{time:time},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTime\x0a\x09| time |\x0a\x09time := Time hour: 6 minute: 30 second: 15.\x0a\x09self assert: (self serialize: time) = 'Time[''06:30:15'']'.",
referencedClasses: ["Time"],
//>>excludeEnd("ide");
messageSends: ["hour:minute:second:", "assert:", "=", "serialize:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testUser",
protocol: 'tests',
fn: function () {
var self=this;
var user;
function $STONTestUser(){return $globals.STONTestUser||(typeof STONTestUser=="undefined"?nil:STONTestUser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
user=$recv($STONTestUser())._new();
$1=user;
$recv($1)._username_("john@foo.com");
$2=$recv($1)._password_("secret1");
self._assert_equals_(self._serialize_(user),"TestUser{'username':'john@foo.com','password':'secret1','enabled':true}");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUser",{user:user},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUser\x0a\x09| user |\x0a\x09(user := STONTestUser new)\x0a\x09\x09username: 'john@foo.com';\x0a\x09\x09password: 'secret1'.\x0a\x09self \x0a\x09\x09assert: (self serialize: user)\x0a\x09\x09equals: 'TestUser{''username'':''john@foo.com'',''password'':''secret1'',''enabled'':true}'",
referencedClasses: ["STONTestUser"],
//>>excludeEnd("ide");
messageSends: ["username:", "new", "password:", "assert:equals:", "serialize:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testUser2",
protocol: 'tests',
fn: function () {
var self=this;
var user;
function $STONTestUser2(){return $globals.STONTestUser2||(typeof STONTestUser2=="undefined"?nil:STONTestUser2)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
user=$recv($STONTestUser2())._new();
$1=user;
$recv($1)._username_("john@foo.com");
$2=$recv($1)._password_("secret1");
self._assert_equals_(self._serialize_(user),"TestUser2{'username':'john@foo.com','password':'secret1','enabled':true}");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUser2",{user:user},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUser2\x0a\x09| user |\x0a\x09(user := STONTestUser2 new)\x0a\x09\x09username: 'john@foo.com';\x0a\x09\x09password: 'secret1'.\x0a\x09self \x0a\x09\x09assert: (self serialize: user)\x0a\x09\x09equals: 'TestUser2{''username'':''john@foo.com'',''password'':''secret1'',''enabled'':true}'",
referencedClasses: ["STONTestUser2"],
//>>excludeEnd("ide");
messageSends: ["username:", "new", "password:", "assert:equals:", "serialize:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testUser3Nil",
protocol: 'tests',
fn: function () {
var self=this;
var user;
function $STONTestUser3(){return $globals.STONTestUser3||(typeof STONTestUser3=="undefined"?nil:STONTestUser3)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
user=$recv($STONTestUser3())._new();
self._assert_equals_(self._serialize_(user),"TestUser3{'username':nil,'password':nil,'enabled':true}");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUser3Nil",{user:user},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUser3Nil\x0a\x09| user |\x0a\x09user := STONTestUser3 new.\x0a\x09self \x0a\x09\x09assert: (self serialize: user) \x0a\x09\x09equals: 'TestUser3{''username'':nil,''password'':nil,''enabled'':true}'",
referencedClasses: ["STONTestUser3"],
//>>excludeEnd("ide");
messageSends: ["new", "assert:equals:", "serialize:"]
}),
$globals.STONWriterTests);

$core.addMethod(
$core.method({
selector: "testUserNil",
protocol: 'tests',
fn: function () {
var self=this;
var user;
function $STONTestUser(){return $globals.STONTestUser||(typeof STONTestUser=="undefined"?nil:STONTestUser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
user=$recv($STONTestUser())._new();
self._assert_equals_(self._serialize_(user),"TestUser{'enabled':true}");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUserNil",{user:user},$globals.STONWriterTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUserNil\x0a\x09| user |\x0a\x09user := STONTestUser new.\x0a\x09self assert: (self serialize: user) equals: 'TestUser{''enabled'':true}'",
referencedClasses: ["STONTestUser"],
//>>excludeEnd("ide");
messageSends: ["new", "assert:equals:", "serialize:"]
}),
$globals.STONWriterTests);


});
