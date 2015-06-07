define("amber-ston/STON-Kernel", ["amber/boot", "amber_core/Kernel-Collections"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('STON-Kernel');
$core.packages["STON-Kernel"].innerEval = function (expr) { return eval(expr); };
$core.packages["STON-Kernel"].transport = {"type":"amd","amdNamespace":"amber-ston"};

$core.addClass('Bag', $globals.Set, [], 'STON-Kernel');


$core.addClass('IdentityDictionary', $globals.Dictionary, [], 'STON-Kernel');

});
