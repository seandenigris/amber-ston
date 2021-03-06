define("amber-ston/STON-Kernel", ["amber/boot", "amber_core/Kernel-Collections", "amber_core/Kernel-Objects"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('STON-Kernel');
$core.packages["STON-Kernel"].innerEval = function (expr) { return eval(expr); };
$core.packages["STON-Kernel"].transport = {"type":"amd","amdNamespace":"amber-ston"};

$core.addClass('Bag', $globals.Set, [], 'STON-Kernel');


$core.addClass('Character', $globals.String, [], 'STON-Kernel');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Character.comment="This is a hack to support transport of Characters in STON.\x0aIt represents stings with only one element ie. self size == 1.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "fromSton:",
protocol: 'STON',
fn: function (stonReader) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(stonReader)._parseListSingleton())._first();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromSton:",{stonReader:stonReader},$globals.Character.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonReader"],
source: "fromSton: stonReader\x0a\x09^ stonReader parseListSingleton first",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["first", "parseListSingleton"]
}),
$globals.Character.klass);


$core.addClass('DateAndTime', $globals.Date, [], 'STON-Kernel');

$core.addMethod(
$core.method({
selector: "fromSton:",
protocol: 'STON',
fn: function (stonReader) {
var self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
stream=$recv($recv(stonReader)._parseListSingleton())._readStream();
$1=self._fromString_($recv(stream)._contents());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromSton:",{stonReader:stonReader,stream:stream},$globals.DateAndTime.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonReader"],
source: "fromSton: stonReader\x0a\x09| stream |\x0a\x09(stream := stonReader parseListSingleton readStream).\x0a\x09^ self fromString: stream contents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["readStream", "parseListSingleton", "fromString:", "contents"]
}),
$globals.DateAndTime.klass);


$core.addClass('IdentityDictionary', $globals.Dictionary, [], 'STON-Kernel');

$core.addMethod(
$core.method({
selector: "fromString:",
protocol: '*STON-Kernel',
fn: function (aString) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Number(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},$globals.Number.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "fromString: aString\x0a\x09<return Number(aString)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number.klass);

});
