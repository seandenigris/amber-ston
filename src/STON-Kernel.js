define("amber-ston/STON-Kernel", ["amber/boot", "amber_core/Kernel-Collections"], function($boot){"use strict";
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
protocol: 'not yet classified',
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


$core.addClass('IdentityDictionary', $globals.Dictionary, [], 'STON-Kernel');

});
