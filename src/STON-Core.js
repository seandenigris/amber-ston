define("amber-ston/STON-Core", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Exceptions", "amber_core/Kernel-Classes", "amber_core/Kernel-Collections"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('STON-Core');
$core.packages["STON-Core"].innerEval = function (expr) { return eval(expr); };
$core.packages["STON-Core"].transport = {"type":"amd","amdNamespace":"amber-ston"};

$core.addClass('STON', $globals.Object, [], 'STON-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STON.comment="STON implements serialization and materialization using the Smalltalk Object Notation format.\x0a \x0aS y n t a x\x0a\x0a\x09value\x0a\x09  primitive-value\x0a\x09  object-value\x0a\x09  reference\x0a\x09  nil\x0a\x09primitive-value\x0a\x09  number\x0a\x09  true\x0a\x09  false\x0a\x09  symbol\x0a\x09  string\x0a\x09object-value\x0a\x09  object\x0a\x09  map\x0a\x09  list\x0a\x09object\x0a\x09  classname map\x0a\x09  classname list\x0a\x09reference\x0a\x09  @ int-index-previous-object-value\x0a\x09map\x0a\x09  {}\x0a\x09  { members }\x0a\x09members\x0a\x09  pair\x0a\x09  pair , members\x0a\x09pair\x0a\x09  string : value\x0a\x09  symbol : value\x0a\x09  number : value\x0a\x09list\x0a\x09  []\x0a\x09  [ elements ]\x0a\x09elements\x0a\x09  value \x0a\x09  value , elements\x0a\x09string\x0a\x09  ''\x0a\x09  ' chars '\x0a\x09chars\x0a\x09  char\x0a\x09  char chars\x0a\x09char\x0a\x09  any-printable-ASCII-character-\x0a\x09    except-'-\x22-or-\x5c\x0a\x09  \x5c'\x0a\x09  \x5c\x22\x0a\x09  \x5c\x5c\x0a\x09  \x5c/\x0a\x09  \x5cb\x0a\x09  \x5cf\x0a\x09  \x5cn\x0a\x09  \x5cr\x0a\x09  \x5ct\x0a\x09  \x5cu four-hex-digits\x0a\x09symbol\x0a\x09  # chars-limited\x0a\x09  # ' chars '\x0a\x09chars-limited\x0a\x09  char-limited\x0a\x09  char-limited chars-limited\x0a\x09char-limited\x0a\x09  a-z A-Z 0-9 - _ . /\x0a\x09classname\x0a\x09  uppercase-alpha-char alphanumeric-char\x0a\x09number\x0a\x09  int\x0a\x09  int frac\x0a\x09  int exp\x0a\x09  int frac exp\x0a\x09int\x0a\x09  digit\x0a\x09  digit1-9 digits \x0a\x09  - digit\x0a\x09  - digit1-9 digits\x0a\x09frac\x0a\x09  . digits\x0a\x09exp\x0a\x09  e digits\x0a\x09digits\x0a\x09  digit\x0a\x09  digit digits\x0a\x09e\x0a\x09  e\x0a\x09  e+\x0a\x09  e-\x0a\x09  E\x0a\x09  E+\x0a\x09  E-";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "fromStream:",
protocol: 'convencience',
fn: function (readStream) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._reader())._on_(readStream))._next();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromStream:",{readStream:readStream},$globals.STON.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["readStream"],
source: "fromStream: readStream\x0a\x09^ (self reader on: readStream) next",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["next", "on:", "reader"]
}),
$globals.STON.klass);

$core.addMethod(
$core.method({
selector: "fromString:",
protocol: 'convencience',
fn: function (string) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._fromStream_($recv(string)._readStream());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromString:",{string:string},$globals.STON.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["string"],
source: "fromString: string\x0a\x09^ self fromStream: string readStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromStream:", "readStream"]
}),
$globals.STON.klass);

$core.addMethod(
$core.method({
selector: "jsonWriter",
protocol: 'accessing',
fn: function () {
var self=this;
function $STONWriter(){return $globals.STONWriter||(typeof STONWriter=="undefined"?nil:STONWriter)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($STONWriter())._new();
$recv($2)._jsonMode_(true);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsonWriter",{},$globals.STON.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jsonWriter\x0a\x09^ STONWriter new\x0a\x09\x09  jsonMode: true;\x0a\x09\x09  yourself",
referencedClasses: ["STONWriter"],
//>>excludeEnd("ide");
messageSends: ["jsonMode:", "new", "yourself"]
}),
$globals.STON.klass);

$core.addMethod(
$core.method({
selector: "listClass",
protocol: 'accessing',
fn: function () {
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
return $Array();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "listClass\x0a\x09^ Array",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STON.klass);

$core.addMethod(
$core.method({
selector: "mapClass",
protocol: 'accessing',
fn: function () {
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return $Dictionary();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mapClass\x0a\x09^ Dictionary",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STON.klass);

$core.addMethod(
$core.method({
selector: "put:asJsonOnStream:",
protocol: 'convencience',
fn: function (object, stream) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._jsonWriter())._on_(stream))._nextPut_(object);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"put:asJsonOnStream:",{object:object,stream:stream},$globals.STON.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object", "stream"],
source: "put: object asJsonOnStream: stream\x0a\x09(self jsonWriter on: stream) nextPut: object",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:", "on:", "jsonWriter"]
}),
$globals.STON.klass);

$core.addMethod(
$core.method({
selector: "put:asJsonOnStreamPretty:",
protocol: 'convencience',
fn: function (object, stream) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._jsonWriter())._on_(stream);
$recv($1)._prettyPrint_(true);
$2=$recv($1)._nextPut_(object);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"put:asJsonOnStreamPretty:",{object:object,stream:stream},$globals.STON.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object", "stream"],
source: "put: object asJsonOnStreamPretty: stream\x0a\x09(self jsonWriter on: stream)\x0a\x09\x09prettyPrint: true; \x0a\x09\x09nextPut: object",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["prettyPrint:", "on:", "jsonWriter", "nextPut:"]
}),
$globals.STON.klass);

$core.addMethod(
$core.method({
selector: "put:onStream:",
protocol: 'convencience',
fn: function (object, stream) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._writer())._on_(stream))._nextPut_(object);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"put:onStream:",{object:object,stream:stream},$globals.STON.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object", "stream"],
source: "put: object onStream: stream\x0a\x09(self writer on: stream) nextPut: object",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:", "on:", "writer"]
}),
$globals.STON.klass);

$core.addMethod(
$core.method({
selector: "put:onStreamPretty:",
protocol: 'convencience',
fn: function (object, stream) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._writer())._on_(stream);
$recv($1)._prettyPrint_(true);
$2=$recv($1)._nextPut_(object);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"put:onStreamPretty:",{object:object,stream:stream},$globals.STON.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object", "stream"],
source: "put: object onStreamPretty: stream\x0a\x09(self writer on: stream)\x0a\x09\x09prettyPrint: true; \x0a\x09\x09nextPut: object",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["prettyPrint:", "on:", "writer", "nextPut:"]
}),
$globals.STON.klass);

$core.addMethod(
$core.method({
selector: "reader",
protocol: 'accessing',
fn: function () {
var self=this;
function $STONReader(){return $globals.STONReader||(typeof STONReader=="undefined"?nil:STONReader)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($STONReader())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reader",{},$globals.STON.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reader\x0a\x09^ STONReader new",
referencedClasses: ["STONReader"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.STON.klass);

$core.addMethod(
$core.method({
selector: "toJsonString:",
protocol: 'convencience',
fn: function (object) {
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._put_asJsonOnStream_(object,stream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toJsonString:",{object:object},$globals.STON.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object"],
source: "toJsonString: object\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09self put: object asJsonOnStream: stream ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "put:asJsonOnStream:"]
}),
$globals.STON.klass);

$core.addMethod(
$core.method({
selector: "toJsonStringPretty:",
protocol: 'convencience',
fn: function (object) {
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._put_asJsonOnStreamPretty_(object,stream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toJsonStringPretty:",{object:object},$globals.STON.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object"],
source: "toJsonStringPretty: object\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09self put: object asJsonOnStreamPretty: stream ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "put:asJsonOnStreamPretty:"]
}),
$globals.STON.klass);

$core.addMethod(
$core.method({
selector: "toString:",
protocol: 'convencience',
fn: function (object) {
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._put_onStream_(object,stream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toString:",{object:object},$globals.STON.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object"],
source: "toString: object\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09self put: object onStream: stream ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "put:onStream:"]
}),
$globals.STON.klass);

$core.addMethod(
$core.method({
selector: "toStringPretty:",
protocol: 'convencience',
fn: function (object) {
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._put_onStreamPretty_(object,stream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toStringPretty:",{object:object},$globals.STON.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object"],
source: "toStringPretty: object\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09self put: object onStreamPretty: stream ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "put:onStreamPretty:"]
}),
$globals.STON.klass);

$core.addMethod(
$core.method({
selector: "writer",
protocol: 'accessing',
fn: function () {
var self=this;
function $STONWriter(){return $globals.STONWriter||(typeof STONWriter=="undefined"?nil:STONWriter)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($STONWriter())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writer",{},$globals.STON.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "writer\x0a\x09^ STONWriter new",
referencedClasses: ["STONWriter"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.STON.klass);


$core.addClass('STONReader', $globals.Object, ['readStream', 'objects', 'classes', 'unresolvedReferences', 'stringStream'], 'STON-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONReader.comment="STONReader materializes objects using the Smalltalk Object Notation format.\x0a\x0aThis parser is backwards compatible with standard JSON.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "atEnd",
protocol: 'testing',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@readStream"])._atEnd();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atEnd\x0a\x09^ readStream atEnd",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["atEnd"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "close",
protocol: 'initialize-release',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@readStream"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self["@readStream"])._close();
self["@readStream"]=nil;
self["@readStream"];
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"close",{},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "close\x0a\x09readStream ifNotNil: [\x0a\x09\x09readStream close.\x0a\x09\x09readStream := nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "close"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "consumeWhitespace",
protocol: 'private',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(self["@readStream"])._atEnd())._not())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(self["@readStream"])._peek())._isSeparator();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@readStream"])._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"consumeWhitespace",{},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "consumeWhitespace\x0a\x09\x22Strip whitespaces from the input stream.\x22\x0a\x0a\x09[ readStream atEnd not and: [ readStream peek isSeparator ] ]\x0a\x09\x09whileTrue: [ readStream next ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileTrue:", "and:", "not", "atEnd", "isSeparator", "peek", "next"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "error:",
protocol: 'error handling',
fn: function (aString) {
var self=this;
function $STONReaderError(){return $globals.STONReaderError||(typeof STONReaderError=="undefined"?nil:STONReaderError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($STONReaderError())._signal_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"error:",{aString:aString},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "error: aString\x0a\x09^ STONReaderError signal: aString",
referencedClasses: ["STONReaderError"],
//>>excludeEnd("ide");
messageSends: ["signal:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "expectChar:",
protocol: 'private',
fn: function (character) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._matchChar_(character);
if(!$core.assert($1)){
self._error_($recv($recv(character)._asString()).__comma(" expected"));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"expectChar:",{character:character},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["character"],
source: "expectChar: character\x0a\x09\x22Expect character and consume input and optional whitespace at the end,\x0a\x09 throw an error otherwise.\x22\x0a\x0a\x09(self matchChar: character)\x0a\x09\x09ifFalse: [ self error: character asString, ' expected' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "matchChar:", "error:", ",", "asString"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function () {
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.STONReader.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@objects"]=$recv($Dictionary())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@classes"]=$recv($Dictionary())._new();
self["@unresolvedReferences"]=(0);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09objects := Dictionary new.\x0a\x09classes := Dictionary new.\x0a\x09unresolvedReferences := 0",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "isClassChar:",
protocol: 'private',
fn: function (char) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"._includes_(char);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isClassChar:",{char:char},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["char"],
source: "isClassChar: char\x0a\x09^ 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' includes: char",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includes:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "isClassStartChar:",
protocol: 'private',
fn: function (char) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="ABCDEFGHIJKLMNOPQRSTUVWXYZ"._includes_(char);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isClassStartChar:",{char:char},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["char"],
source: "isClassStartChar: char\x0a\x09^ 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' includes: char",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includes:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "isSimpleSymbolChar:",
protocol: 'private',
fn: function (char) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_./"._includes_(char);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSimpleSymbolChar:",{char:char},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["char"],
source: "isSimpleSymbolChar: char\x0a\x09^ 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_./' includes: char",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includes:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "lookupClass:",
protocol: 'private',
fn: function (name) {
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
$recv($recv($Smalltalk())._globals())._at_ifPresent_(name,(function(cls){
throw $early=[cls];

}));
$1=$recv(self["@classes"])._at_ifAbsentPut_(name,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($Object())._allSubclasses())._detect_ifNone_((function(cls){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(cls)._stonName()).__eq_eq(name);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({cls:cls},$ctx2,3)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._error_("Cannot resolve cls named ".__comma($recv(name)._printString()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lookupClass:",{name:name},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["name"],
source: "lookupClass: name\x0a\x09Smalltalk globals \x0a\x09\x09at: name \x0a\x09\x09ifPresent: [ :cls | ^ cls ].\x0a\x09^ classes \x0a\x09\x09at: name \x0a\x09\x09ifAbsentPut: [\x0a\x09\x09\x09Object allSubclasses \x0a\x09\x09\x09\x09detect: [ :cls | cls stonName == name ] \x0a\x09\x09\x09\x09ifNone: [ self error: 'Cannot resolve cls named ', name printString ] ]",
referencedClasses: ["Smalltalk", "Object"],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:", "globals", "at:ifAbsentPut:", "detect:ifNone:", "allSubclasses", "==", "stonName", "error:", ",", "printString"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "match:do:",
protocol: 'private',
fn: function (string, block) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(string)._allSatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._matchChar_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$recv(block)._value();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"match:do:",{string:string,block:block},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["string", "block"],
source: "match: string do: block\x0a\x09\x22Try to read and consume string and execute block if successful.\x0a\x09Else do nothing (but do not back up)\x22\x0a\x09 \x0a\x09(string allSatisfy: [ :each | self matchChar: each ] )\x0a\x09\x09ifTrue: [ block value ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "allSatisfy:", "matchChar:", "value"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "matchChar:",
protocol: 'private',
fn: function (character) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($recv(self["@readStream"])._peek()).__eq(character);
if($core.assert($2)){
$recv(self["@readStream"])._next();
self._consumeWhitespace();
$1=true;
} else {
$1=false;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"matchChar:",{character:character},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["character"],
source: "matchChar: character\x0a\x09\x22Tries to match character, consume input and \x0a\x09answer true if successful and consumes whitespace at the end.\x22\x0a\x09\x0a\x09^ readStream peek = character\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09readStream next.\x0a\x09\x09\x09self consumeWhitespace.\x0a\x09\x09\x09true ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "=", "peek", "next", "consumeWhitespace"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "newReference",
protocol: 'private',
fn: function () {
var self=this;
var index,reference;
function $STONReference(){return $globals.STONReference||(typeof STONReference=="undefined"?nil:STONReference)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
index=$recv($recv(self["@objects"])._size()).__plus((1));
reference=$recv($STONReference())._index_(index);
$recv(self["@objects"])._at_put_(index,reference);
$1=reference;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newReference",{index:index,reference:reference},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newReference\x0a\x09| index reference |\x0a\x09index := objects size + 1.\x0a\x09reference := STONReference index: index.\x0a\x09objects at: index put: reference.\x0a\x09^ reference",
referencedClasses: ["STONReference"],
//>>excludeEnd("ide");
messageSends: ["+", "size", "index:", "at:put:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "next",
protocol: 'public',
fn: function () {
var self=this;
var object;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self._consumeWhitespace();
object=self._parseValue();
$1=$recv(self["@unresolvedReferences"]).__gt((0));
if($core.assert($1)){
self._processSubObjectsOf_(object);
};
$2=object;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next",{object:object},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09| object |\x0a\x09self consumeWhitespace.\x0a\x09object := self parseValue.\x0a\x09unresolvedReferences > 0\x0a\x09\x09ifTrue: [ self processSubObjectsOf: object ].\x0a\x09^ object",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["consumeWhitespace", "parseValue", "ifTrue:", ">", "processSubObjectsOf:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'initialize-release',
fn: function (aReadStream) {
var self=this;
self["@readStream"]=aReadStream;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aReadStream"],
source: "on: aReadStream\x0a\x09readStream := aReadStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseCharacter",
protocol: 'parsing-internal',
fn: function () {
var self=this;
var char;
function $Character(){return $globals.Character||(typeof Character=="undefined"?nil:Character)}
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$6,$4,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19;
char=$recv(self["@readStream"])._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=1;
//>>excludeEnd("ctx");
$2=char;
$1=$recv($2).__eq("\x5c");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
$3=char;
return $3;
};
$5=["'", "\x22", "/", "\x5c"];
char=$recv(self["@readStream"])._next();
$6=char;
$4=$recv($5)._includes_($6);
if($core.assert($4)){
$7=char;
return $7;
};
$8=$recv(char).__eq("b");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
if($core.assert($8)){
$9=$recv($Character())._backspace();
return $9;
};
$10=$recv(char).__eq("f");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
if($core.assert($10)){
$11=$recv($Character())._newPage();
return $11;
};
$12=$recv(char).__eq("n");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=4;
//>>excludeEnd("ctx");
if($core.assert($12)){
$13=$recv($Character())._lf();
return $13;
};
$14=$recv(char).__eq("r");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=5;
//>>excludeEnd("ctx");
if($core.assert($14)){
$15=$recv($Character())._cr();
return $15;
};
$16=$recv(char).__eq("t");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=6;
//>>excludeEnd("ctx");
if($core.assert($16)){
$17=$recv($Character())._tab();
return $17;
};
$18=$recv(char).__eq("u");
if($core.assert($18)){
$19=self._parseCharacterHex();
return $19;
};
self._error_("invalid escape character \x5c".__comma($recv($String())._with_(char)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseCharacter",{char:char},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parseCharacter\x0a\x09| char |\x0a\x09(char := readStream next) = $\x5c \x0a\x09\x09ifFalse: [ ^ char ].\x0a\x09(#( $' $\x22 $/ $\x5c) includes: (char := readStream next))\x0a\x09\x09ifTrue: [ ^ char ].\x0a\x09char = $b\x0a\x09\x09ifTrue: [ ^ Character backspace ].\x0a\x09char = $f\x0a\x09\x09ifTrue: [ ^ Character newPage ].\x0a\x09char = $n\x0a\x09\x09ifTrue: [ ^ Character lf ].\x0a\x09char = $r\x0a\x09\x09ifTrue: [ ^ Character cr ].\x0a\x09char = $t\x0a\x09\x09ifTrue: [ ^ Character tab ].\x0a\x09char = $u\x0a\x09\x09ifTrue: [ ^ self parseCharacterHex ].\x0a\x09self error: 'invalid escape character \x5c' , (String with: char)",
referencedClasses: ["Character", "String"],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "next", "ifTrue:", "includes:", "backspace", "newPage", "lf", "cr", "tab", "parseCharacterHex", "error:", ",", "with:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseCharacterHex",
protocol: 'parsing-internal',
fn: function () {
var self=this;
var value;
function $Character(){return $globals.Character||(typeof Character=="undefined"?nil:Character)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
value=self._parseCharacterHexDigit();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parseCharacterHexDigit"]=1;
//>>excludeEnd("ctx");
(3)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
value=$recv($recv(value).__lt_lt((4))).__plus(self._parseCharacterHexDigit());
return value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$recv($Character())._codePoint_(value);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseCharacterHex",{value:value},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parseCharacterHex\x0a\x09| value |\x0a\x09value := self parseCharacterHexDigit.\x0a\x093 timesRepeat: [ \x0a\x09\x09value := (value << 4) + self parseCharacterHexDigit ].\x0a\x09^ Character codePoint: value",
referencedClasses: ["Character"],
//>>excludeEnd("ide");
messageSends: ["parseCharacterHexDigit", "timesRepeat:", "+", "<<", "codePoint:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseCharacterHexDigit",
protocol: 'parsing-internal',
fn: function () {
var self=this;
var digit;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7;
$1=$recv(self["@readStream"])._atEnd();
if(!$core.assert($1)){
digit=$recv($recv(self["@readStream"])._next())._asInteger();
digit;
$2=$recv(digit)._between_and_((48),(57));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["between:and:"]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
$3=$recv(digit).__minus((48));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
return $3;
};
$4=$recv(digit)._between_and_((65),(70));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["between:and:"]=2;
//>>excludeEnd("ctx");
if($core.assert($4)){
$5=$recv(digit).__minus((55));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
return $5;
};
$6=$recv(digit)._between_and_((97),(102));
if($core.assert($6)){
$7=$recv(digit).__minus((87));
return $7;
};
};
self._error_("hex-digit expected");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseCharacterHexDigit",{digit:digit},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parseCharacterHexDigit\x0a\x09| digit |\x0a\x09readStream atEnd ifFalse: [ \x0a\x09\x09digit := readStream next asInteger.\x0a\x09\x09(digit between: \x22$0\x22 48 and: \x22$9\x22 57)\x0a\x09\x09\x09ifTrue: [ ^ digit - 48 ].\x0a\x09\x09(digit between: \x22$A\x22 65 and: \x22$F\x22 70)\x0a\x09\x09\x09ifTrue: [ ^ digit - 55 ].\x0a\x09\x09(digit between: \x22$a\x22 97 and: \x22$f\x22 102)\x0a\x09\x09\x09ifTrue: [ ^ digit - 87 ] ].\x0a\x09self error: 'hex-digit expected'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "atEnd", "asInteger", "next", "ifTrue:", "between:and:", "-", "error:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseClass",
protocol: 'parsing-internal',
fn: function () {
var self=this;
var className;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
className=self._stringStreamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($recv(self["@readStream"])._atEnd())._not())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._isClassChar_($recv(self["@readStream"])._peek());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPut_($recv(self["@readStream"])._next());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._consumeWhitespace();
$1=self._lookupClass_($recv(className)._asSymbol());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseClass",{className:className},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parseClass\x0a\x09| className |\x0a\x09className := self stringStreamContents: [ :stream |\x0a\x09\x09[ readStream atEnd not and: [ self isClassChar: readStream peek ] ] whileTrue: [ \x0a\x09\x09\x09stream nextPut: readStream next ] ].\x0a\x09self consumeWhitespace.\x0a\x09^ self lookupClass: className asSymbol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stringStreamContents:", "whileTrue:", "and:", "not", "atEnd", "isClassChar:", "peek", "nextPut:", "next", "consumeWhitespace", "lookupClass:", "asSymbol"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseConstantDo:",
protocol: 'parsing-internal',
fn: function (block) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4,$6,$8,$7,$10,$9,$11;
$2=$recv(self["@readStream"])._peek();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["peek"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("t");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$3=self._match_do_("true",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(block)._value_(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["match:do:"]=1;
//>>excludeEnd("ctx");
return $3;
};
$5=$recv(self["@readStream"])._peek();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["peek"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__eq("f");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
if($core.assert($4)){
$6=self._match_do_("false",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(block)._value_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["match:do:"]=2;
//>>excludeEnd("ctx");
return $6;
};
$8=$recv(self["@readStream"])._peek();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["peek"]=3;
//>>excludeEnd("ctx");
$7=$recv($8).__eq("n");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
if($core.assert($7)){
$recv(self["@readStream"])._next();
$10=$recv(self["@readStream"])._peek();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["peek"]=4;
//>>excludeEnd("ctx");
$9=$recv($10).__eq("i");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=4;
//>>excludeEnd("ctx");
if($core.assert($9)){
self._match_do_("il",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(block)._value_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["match:do:"]=3;
//>>excludeEnd("ctx");
};
$11=$recv($recv(self["@readStream"])._peek()).__eq("u");
if($core.assert($11)){
self._match_do_("ull",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(block)._value_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,9)});
//>>excludeEnd("ctx");
}));
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseConstantDo:",{block:block},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["block"],
source: "parseConstantDo: block\x0a\x09\x22Parse and consume either true|false|nil|null and execute block \x0a\x09or else do nothing (but do not back up).\x0a\x09Hand written implementation to avoid the use of #position:\x22\x0a\x09\x0a\x09(readStream peek = $t)\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09^ self match: 'true' do: [ block value: true ] ].\x0a\x09(readStream peek = $f)\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09^ self match: 'false' do: [ block value: false ] ].\x0a\x09(readStream peek = $n)\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09readStream next.\x0a\x09\x09\x09(readStream peek = $i)\x0a\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09self match: 'il' do: [ block value: nil ] ].\x0a\x09\x09\x09(readStream peek = $u)\x0a\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09self match: 'ull' do: [ block value: nil ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "peek", "match:do:", "value:", "next"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseList",
protocol: 'parsing',
fn: function () {
var self=this;
var reference,array;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
reference=self._newReference();
array=$recv($recv($STON())._listClass())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._parseListDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPut_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._setReference_to_(reference,array);
$1=array;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseList",{reference:reference,array:array},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parseList\x0a\x09| reference array |\x0a\x09reference := self newReference.\x0a\x09array := STON listClass streamContents: [ :stream |\x0a\x09\x09self parseListDo: [ :each | stream nextPut: each ] ].\x0a\x09self setReference: reference to: array.\x0a\x09^ array",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["newReference", "streamContents:", "listClass", "parseListDo:", "nextPut:", "setReference:to:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseListDo:",
protocol: 'parsing',
fn: function (block) {
var self=this;
var index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
var $early={};
try {
self._expectChar_("[");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["expectChar:"]=1;
//>>excludeEnd("ctx");
$1=self._matchChar_("]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["matchChar:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
return self;
};
index=(1);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@readStream"])._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(block)._cull_cull_(self._parseValue(),index);
$2=self._matchChar_("]");
if($core.assert($2)){
throw $early=[self];
};
index=$recv(index).__plus((1));
index;
return self._expectChar_(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
self._error_("end of list expected");
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseListDo:",{block:block,index:index},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["block"],
source: "parseListDo: block\x0a\x09| index |\x0a\x09self expectChar: $[.\x0a\x09(self matchChar: $]) \x0a\x09\x09ifTrue: [ ^ self ].\x0a\x09index := 1.\x0a\x09[ readStream atEnd ] whileFalse: [\x0a\x09\x09block cull: self parseValue cull: index.\x0a\x09\x09(self matchChar: $]) \x0a\x09\x09\x09ifTrue: [ ^ self ].\x0a\x09\x09index := index + 1.\x0a\x09\x09self expectChar: $, ].\x0a\x09self error: 'end of list expected'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["expectChar:", "ifTrue:", "matchChar:", "whileFalse:", "atEnd", "cull:cull:", "parseValue", "+", "error:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseListSingleton",
protocol: 'parsing',
fn: function () {
var self=this;
var value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
value=nil;
self._parseListDo_((function(each,index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(index).__eq((1));
if($core.assert($1)){
value=each;
return value;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=value;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseListSingleton",{value:value},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parseListSingleton\x0a\x09| value |\x0a\x09value := nil.\x0a\x09self parseListDo: [ :each :index |\x0a\x09\x09index = 1 ifTrue: [ value := each ] ].\x0a\x09^ value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parseListDo:", "ifTrue:", "="]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseMap",
protocol: 'parsing',
fn: function () {
var self=this;
var map;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
map=$recv($recv($STON())._mapClass())._new();
self._storeReference_(map);
self._parseMapDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(map)._at_put_(key,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=map;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseMap",{map:map},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parseMap\x0a\x09| map |\x0a\x09map := STON mapClass new.\x0a\x09self storeReference: map.\x0a\x09self parseMapDo: [ :key :value |\x0a\x09\x09map at: key put: value ].\x0a\x09^ map",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["new", "mapClass", "storeReference:", "parseMapDo:", "at:put:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseMapDo:",
protocol: 'parsing',
fn: function (block) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
var $early={};
try {
self._expectChar_("{");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["expectChar:"]=1;
//>>excludeEnd("ctx");
$1=self._matchChar_("}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["matchChar:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
return self;
};
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@readStream"])._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
var name,value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
name=self._parseValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["parseValue"]=1;
//>>excludeEnd("ctx");
name;
$2=$recv($recv(name)._isString())._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(name)._isNumber();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
if(!$core.assert($2)){
self._error_("unexpected property name type");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["error:"]=1;
//>>excludeEnd("ctx");
};
self._expectChar_(":");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["expectChar:"]=2;
//>>excludeEnd("ctx");
value=self._parseValue();
value;
$recv(block)._value_value_(name,value);
$3=self._matchChar_("}");
if($core.assert($3)){
throw $early=[self];
};
return self._expectChar_(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({name:name,value:value},$ctx1,3)});
//>>excludeEnd("ctx");
}));
self._error_("end of map expected");
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseMapDo:",{block:block},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["block"],
source: "parseMapDo: block\x0a\x09self expectChar: ${.\x0a\x09(self matchChar: $})\x0a\x09\x09ifTrue: [ ^ self ].\x0a\x09[ readStream atEnd ] whileFalse: [ | name value |\x0a\x09\x09name := self parseValue.\x0a\x09\x09(name isString or: [ name isNumber ])\x0a\x09\x09\x09ifFalse: [ self error: 'unexpected property name type' ].\x0a\x09\x09self expectChar: $:.\x0a\x09\x09value := self parseValue.\x0a\x09\x09block value: name value: value.\x0a\x09\x09(self matchChar: $}) \x0a\x09\x09\x09ifTrue: [ ^ self ].\x0a\x09\x09self expectChar: $, ].\x0a\x09self error: 'end of map expected'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["expectChar:", "ifTrue:", "matchChar:", "whileFalse:", "atEnd", "parseValue", "ifFalse:", "or:", "isString", "isNumber", "error:", "value:value:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseNumber",
protocol: 'parsing-internal',
fn: function () {
var self=this;
var negated,number;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$7,$6,$5,$8,$9;
$1=$recv(self["@readStream"])._peek();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["peek"]=1;
//>>excludeEnd("ctx");
negated=$recv($1).__eq("-");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$2=negated;
if($core.assert($2)){
$recv(self["@readStream"])._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=1;
//>>excludeEnd("ctx");
};
number=self._parseNumberInteger();
$4=$recv(self["@readStream"])._peek();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["peek"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq(".");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
if($core.assert($3)){
$recv(self["@readStream"])._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=2;
//>>excludeEnd("ctx");
number=$recv(number).__plus(self._parseNumberFraction());
number;
};
$7=$recv(self["@readStream"])._peek();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["peek"]=3;
//>>excludeEnd("ctx");
$6=$recv($7).__eq("e");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self["@readStream"])._peek()).__eq("E");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
if($core.assert($5)){
$recv(self["@readStream"])._next();
number=$recv(number).__star(self._parseNumberExponent());
number;
};
$8=negated;
if($core.assert($8)){
number=$recv(number)._negated();
number;
};
self._consumeWhitespace();
$9=number;
return $9;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseNumber",{negated:negated,number:number},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parseNumber\x0a\x09| negated number |\x0a\x09negated := readStream peek = $-.\x0a\x09negated ifTrue: [ readStream next ].\x0a\x09number := self parseNumberInteger.\x0a\x09(readStream peek = $.) ifTrue: [\x0a\x09\x09readStream next. \x0a\x09\x09number := number + self parseNumberFraction ].\x0a\x09(readStream peek = $e or: [ readStream peek = $E ]) ifTrue: [\x0a\x09\x09readStream next.\x0a\x09\x09number := number * self parseNumberExponent ].\x0a\x09negated ifTrue: [ number := number negated ].\x0a\x09self consumeWhitespace.\x0a\x09^ number",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "peek", "ifTrue:", "next", "parseNumberInteger", "+", "parseNumberFraction", "or:", "*", "parseNumberExponent", "negated", "consumeWhitespace"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseNumberExponent",
protocol: 'parsing-internal',
fn: function () {
var self=this;
var number,negated;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$5;
number=(0);
$1=$recv(self["@readStream"])._peek();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["peek"]=1;
//>>excludeEnd("ctx");
negated=$recv($1).__eq("-");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$2=$recv(negated)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(self["@readStream"])._peek();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["peek"]=2;
//>>excludeEnd("ctx");
return $recv($3).__eq("+");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($2)){
$recv(self["@readStream"])._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=1;
//>>excludeEnd("ctx");
};
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(self["@readStream"])._atEnd())._not())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(self["@readStream"])._peek())._isDigit();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
number=$recv((10).__star(number)).__plus($recv($recv(self["@readStream"])._next())._digitValue());
return number;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
$4=negated;
if($core.assert($4)){
number=$recv(number)._negated();
number;
};
$5=(10)._raisedTo_(number);
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseNumberExponent",{number:number,negated:negated},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parseNumberExponent\x0a\x09| number negated |\x0a\x09number := 0.\x0a\x09negated := readStream peek = $-.\x0a\x09(negated or: [ readStream peek = $+ ]) ifTrue: [ readStream next ].\x0a\x09[ readStream atEnd not and: [ readStream peek isDigit ] ] whileTrue: [ \x0a\x09\x09number := 10 * number + readStream next digitValue ].\x0a\x09negated ifTrue: [ number := number negated ].\x0a\x09^ 10 raisedTo: number",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "peek", "ifTrue:", "or:", "next", "whileTrue:", "and:", "not", "atEnd", "isDigit", "+", "*", "digitValue", "negated", "raisedTo:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseNumberFraction",
protocol: 'parsing-internal',
fn: function () {
var self=this;
var number,power;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
number=(0);
power=(1);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(self["@readStream"])._atEnd())._not())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(self["@readStream"])._peek())._isDigit();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=(10).__star(number);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["*"]=1;
//>>excludeEnd("ctx");
number=$recv($1).__plus($recv($recv(self["@readStream"])._next())._digitValue());
number;
power=$recv(power).__star((10));
return power;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$2=$recv(number).__slash(power);
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseNumberFraction",{number:number,power:power},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parseNumberFraction\x0a\x09| number power |\x0a\x09number := 0.\x0a\x09power := 1.0.\x0a\x09[ readStream atEnd not and: [ readStream peek isDigit ] ] whileTrue: [\x0a\x09\x09number := 10 * number + readStream next digitValue.\x0a\x09\x09power := power * 10.0 ].\x0a\x09^ number / power",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileTrue:", "and:", "not", "atEnd", "isDigit", "peek", "+", "*", "digitValue", "next", "/"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseNumberInteger",
protocol: 'parsing-internal',
fn: function () {
var self=this;
var number;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
number=(0);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(self["@readStream"])._atEnd())._not())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(self["@readStream"])._peek())._isDigit();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
number=$recv((10).__star(number)).__plus($recv($recv(self["@readStream"])._next())._digitValue());
return number;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$1=number;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseNumberInteger",{number:number},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parseNumberInteger\x0a\x09| number |\x0a\x09number := 0.\x0a\x09[ readStream atEnd not and: [ readStream peek isDigit ] ] whileTrue: [ \x0a\x09\x09number := 10 * number + readStream next digitValue ].\x0a\x09^ number",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileTrue:", "and:", "not", "atEnd", "isDigit", "peek", "+", "*", "digitValue", "next"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseObject",
protocol: 'parsing',
fn: function () {
var self=this;
var targetClass,reference,object;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
targetClass=self._parseClass();
reference=self._newReference();
object=$recv(targetClass)._fromSton_(self);
self._setReference_to_(reference,object);
$1=object;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseObject",{targetClass:targetClass,reference:reference,object:object},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parseObject\x0a\x09| targetClass reference object |\x0a\x09targetClass := self parseClass.\x0a\x09reference := self newReference.\x0a\x09object := targetClass fromSton: self.\x0a\x09self setReference: reference to: object.\x0a\x09^ object",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parseClass", "newReference", "fromSton:", "setReference:to:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseReference",
protocol: 'parsing-internal',
fn: function () {
var self=this;
var index,object;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self._expectChar_("@");
index=self._parseNumberInteger();
self._consumeWhitespace();
object=self._resolveReferenceIndex_(index);
$1=$recv(object)._isStonReference();
if($core.assert($1)){
self["@unresolvedReferences"]=$recv(self["@unresolvedReferences"]).__plus((1));
self["@unresolvedReferences"];
};
$2=object;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseReference",{index:index,object:object},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parseReference\x0a\x09| index object |\x0a\x09self expectChar: $@.\x0a\x09index := self parseNumberInteger.\x0a\x09self consumeWhitespace.\x0a\x09object := self resolveReferenceIndex: index.\x0a\x09object isStonReference \x0a\x09\x09ifTrue: [ unresolvedReferences := unresolvedReferences + 1 ].\x0a\x09^ object",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["expectChar:", "parseNumberInteger", "consumeWhitespace", "resolveReferenceIndex:", "ifTrue:", "isStonReference", "+"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseString",
protocol: 'parsing-internal',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._parseStringInternal();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseString",{},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parseString\x0a\x09^ self parseStringInternal",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parseStringInternal"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseStringInternal",
protocol: 'parsing-internal',
fn: function () {
var self=this;
var result,delimiter;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3;
delimiter=$recv(self["@readStream"])._next();
$2=$recv(delimiter).__eq("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(delimiter).__eq("\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
self._error_("' or \x22 expected");
};
result=self._stringStreamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(self["@readStream"])._atEnd())._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($recv(self["@readStream"])._peek()).__eq(delimiter);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPut_(self._parseCharacter());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,3)});
//>>excludeEnd("ctx");
}));
self._expectChar_(delimiter);
$3=$recv(result)._convertFromEncoding_("utf-8");
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseStringInternal",{result:result,delimiter:delimiter},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parseStringInternal\x0a  | result delimiter |\x0a  delimiter := readStream next.\x0a  (delimiter = $' or: [ delimiter = $\x22 ])\x0a    ifFalse: [ self error: ''' or \x22 expected' ].\x0a  result := self\x0a    stringStreamContents: [ :stream | [ readStream atEnd or: [ readStream peek = delimiter ] ] whileFalse: [ stream nextPut: self parseCharacter ] ].\x0a  self expectChar: delimiter.\x0a  ^ result convertFromEncoding: #'utf-8'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["next", "ifFalse:", "or:", "=", "error:", "stringStreamContents:", "whileFalse:", "atEnd", "peek", "nextPut:", "parseCharacter", "expectChar:", "convertFromEncoding:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseSymbol",
protocol: 'parsing-internal',
fn: function () {
var self=this;
var string;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$5;
self._expectChar_("#");
$2=$recv(self["@readStream"])._peek();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["peek"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("'");
if($core.assert($1)){
$3=$recv(self._parseStringInternal())._asSymbol();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSymbol"]=1;
//>>excludeEnd("ctx");
return $3;
};
string=self._stringStreamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($recv(self["@readStream"])._atEnd())._not())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._isSimpleSymbolChar_($recv(self["@readStream"])._peek());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPut_($recv(self["@readStream"])._next());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$4=$recv(string)._isEmpty();
if(!$core.assert($4)){
self._consumeWhitespace();
$5=$recv(string)._asSymbol();
return $5;
};
self._error_("unexpected input");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseSymbol",{string:string},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parseSymbol\x0a\x09| string |\x0a\x09self expectChar: $#.\x0a\x09readStream peek = $'\x0a\x09\x09ifTrue: [ ^ self parseStringInternal asSymbol ].\x0a\x09string := self stringStreamContents: [ :stream |\x0a\x09\x09[ readStream atEnd not and: [ self isSimpleSymbolChar: readStream peek ] ] whileTrue: [\x0a\x09\x09\x09stream nextPut: readStream next ] ].\x0a\x09string isEmpty\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09self consumeWhitespace.\x0a\x09\x09\x09^ string asSymbol ].\x0a\x09self error: 'unexpected input'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["expectChar:", "ifTrue:", "=", "peek", "asSymbol", "parseStringInternal", "stringStreamContents:", "whileTrue:", "and:", "not", "atEnd", "isSimpleSymbolChar:", "nextPut:", "next", "ifFalse:", "isEmpty", "consumeWhitespace", "error:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "parseValue",
protocol: 'parsing',
fn: function () {
var self=this;
var char;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$5,$6,$7,$8,$10,$9,$11,$12,$13,$14,$15,$16,$17;
var $early={};
try {
$1=$recv(self["@readStream"])._atEnd();
if(!$core.assert($1)){
char=$recv(self["@readStream"])._peek();
$3=char;
$2=self._isClassStartChar_($3);
if($core.assert($2)){
$4=self._parseObject();
return $4;
};
$5=$recv(char).__eq("{");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($5)){
$6=self._parseMap();
return $6;
};
$7=$recv(char).__eq("[");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
if($core.assert($7)){
$8=self._parseList();
return $8;
};
$10=$recv(char).__eq("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
$9=$recv($10)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(char).__eq("\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=1;
//>>excludeEnd("ctx");
if($core.assert($9)){
$11=self._parseString();
return $11;
};
$12=$recv(char).__eq("#");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=5;
//>>excludeEnd("ctx");
if($core.assert($12)){
$13=self._parseSymbol();
return $13;
};
$14=$recv(char).__eq("@");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=6;
//>>excludeEnd("ctx");
if($core.assert($14)){
$15=self._parseReference();
return $15;
};
$16=$recv($recv(char).__eq("-"))._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(char)._isDigit();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,9)});
//>>excludeEnd("ctx");
}));
if($core.assert($16)){
$17=self._parseNumber();
return $17;
};
self._parseConstantDo_((function(value){
throw $early=[value];

}));
};
self._error_("invalid input");
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseValue",{char:char},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parseValue\x0a\x09| char |\x0a\x09readStream atEnd ifFalse: [ \x0a\x09\x09(self isClassStartChar: (char := readStream peek)) \x0a\x09\x09\x09ifTrue: [ ^ self parseObject ].\x0a\x09\x09char = ${\x0a\x09\x09\x09ifTrue: [ ^ self parseMap ].\x0a\x09\x09char = $[\x0a\x09\x09\x09ifTrue: [ ^ self parseList ].\x0a\x09\x09(char = $' or: [ char = $\x22 ])\x0a\x09\x09\x09ifTrue: [ ^ self parseString ].\x0a\x09\x09char = $#\x0a\x09\x09\x09ifTrue: [ ^ self parseSymbol ].\x0a\x09\x09char = $@\x0a\x09\x09\x09ifTrue: [ ^ self parseReference ].\x0a\x09\x09(char = $- or: [ char isDigit ])\x0a\x09\x09\x09ifTrue: [ ^ self parseNumber ].\x0a\x09\x09self parseConstantDo: [ :value | ^ value ] ].\x0a\x09self error: 'invalid input'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "atEnd", "ifTrue:", "isClassStartChar:", "peek", "parseObject", "=", "parseMap", "parseList", "or:", "parseString", "parseSymbol", "parseReference", "isDigit", "parseNumber", "parseConstantDo:", "error:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "processSubObjectsOf:",
protocol: 'private',
fn: function (object) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(object)._stonProcessSubObjects_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(each)._isStonReference();
if($core.assert($1)){
return self._resolveReference_(each);
} else {
self._processSubObjectsOf_(each);
return each;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"processSubObjectsOf:",{object:object},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object"],
source: "processSubObjectsOf: object\x0a\x09object stonProcessSubObjects: [ :each |\x0a\x09\x09each isStonReference \x0a\x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09self resolveReference: each ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09self processSubObjectsOf: each. \x0a\x09\x09\x09\x09each ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stonProcessSubObjects:", "ifTrue:ifFalse:", "isStonReference", "resolveReference:", "processSubObjectsOf:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "resolveReference:",
protocol: 'private',
fn: function (reference) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._resolveReferenceIndex_($recv(reference)._index());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resolveReference:",{reference:reference},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["reference"],
source: "resolveReference: reference\x0a\x09^ self resolveReferenceIndex: reference index",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["resolveReferenceIndex:", "index"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "resolveReferenceIndex:",
protocol: 'private',
fn: function (index) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@objects"])._at_(index);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resolveReferenceIndex:",{index:index},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "resolveReferenceIndex: index\x0a\x09^ objects at: index",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "setReference:to:",
protocol: 'private',
fn: function (reference, object) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@objects"])._at_put_($recv(reference)._index(),object);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setReference:to:",{reference:reference,object:object},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["reference", "object"],
source: "setReference: reference to: object\x0a\x09objects at: reference index put: object",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "index"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "storeReference:",
protocol: 'private',
fn: function (object) {
var self=this;
var index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
index=$recv($recv(self["@objects"])._size()).__plus((1));
$recv(self["@objects"])._at_put_(index,object);
$1=index;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"storeReference:",{object:object,index:index},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object"],
source: "storeReference: object\x0a\x09| index |\x0a\x09index := objects size + 1.\x0a\x09objects at: index put: object.\x0a\x09^ index",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "size", "at:put:"]
}),
$globals.STONReader);

$core.addMethod(
$core.method({
selector: "stringStreamContents:",
protocol: 'private',
fn: function (block) {
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@stringStream"];
if(($receiver = $1) == null || $receiver.isNil){
self["@stringStream"]=$recv($recv($String())._new_((32)))._writeStream();
self["@stringStream"];
} else {
$1;
};
$recv(self["@stringStream"])._reset();
$recv(block)._value_(self["@stringStream"]);
$2=$recv(self["@stringStream"])._contents();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stringStreamContents:",{block:block},$globals.STONReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["block"],
source: "stringStreamContents: block\x0a\x09stringStream ifNil: [ \x0a\x09\x09stringStream := (String new: 32) writeStream ].\x0a\x09stringStream reset.\x0a\x09block value: stringStream.\x0a\x09^ stringStream contents",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "writeStream", "new:", "reset", "value:", "contents"]
}),
$globals.STONReader);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (readStream) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._on_(readStream);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{readStream:readStream},$globals.STONReader.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["readStream"],
source: "on: readStream\x0a\x09^ self new\x0a\x09\x09on: readStream;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["on:", "new", "yourself"]
}),
$globals.STONReader.klass);


$core.addClass('STONReaderError', $globals.Error, [], 'STON-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONReaderError.comment="STONReaderError is the error/exception signalled by STONReader when illegal/incorrect input is seen.";
//>>excludeEnd("ide");


$core.addClass('STONReference', $globals.Object, ['index'], 'STON-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONReference.comment="STONReference holds a forward reference to another object during materialization.";
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
var $3,$2,$4,$1;
$3=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq_eq($recv(anObject)._class());
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=self._index();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["index"]=1;
//>>excludeEnd("ctx");
return $recv($4).__eq($recv(anObject)._index());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject},$globals.STONReference)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "= anObject\x0a\x09^ self class == anObject class and: [ self index = anObject index ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "==", "class", "=", "index"]
}),
$globals.STONReference);

$core.addMethod(
$core.method({
selector: "hash",
protocol: 'comparing',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@index"])._hash();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hash",{},$globals.STONReference)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hash\x0a\x09^ index hash",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hash"]
}),
$globals.STONReference);

$core.addMethod(
$core.method({
selector: "index",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@index"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "index\x0a\x09^ index",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONReference);

$core.addMethod(
$core.method({
selector: "index:",
protocol: 'accessing',
fn: function (integer) {
var self=this;
self["@index"]=integer;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["integer"],
source: "index: integer\x0a\x09index := integer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONReference);

$core.addMethod(
$core.method({
selector: "isStonReference",
protocol: 'testing',
fn: function () {
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isStonReference\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONReference);


$core.addMethod(
$core.method({
selector: "index:",
protocol: 'instance creation',
fn: function (integer) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._index_(integer);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"index:",{integer:integer},$globals.STONReference.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["integer"],
source: "index: integer\x0a\x09^ self new\x0a\x09\x09index: integer;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["index:", "new", "yourself"]
}),
$globals.STONReference.klass);


$core.addClass('STONStreamWriter', $globals.Object, ['writer', 'first'], 'STON-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONStreamWriter.comment="STONStreamWriter helps in streaming writing STON representations.\x0aThis is an abstract class.";
//>>excludeEnd("ide");
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
$globals.STONStreamWriter.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@first"]=true;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.STONStreamWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09first := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.STONStreamWriter);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'initialize-release',
fn: function (stonWriter) {
var self=this;
self["@writer"]=stonWriter;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonWriter"],
source: "on: stonWriter\x0a\x09writer := stonWriter",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONStreamWriter);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (stonWriter) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._on_(stonWriter);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{stonWriter:stonWriter},$globals.STONStreamWriter.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonWriter"],
source: "on: stonWriter\x0a\x09^ self new\x0a\x09\x09on: stonWriter;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["on:", "new", "yourself"]
}),
$globals.STONStreamWriter.klass);


$core.addClass('STONListWriter', $globals.STONStreamWriter, [], 'STON-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONListWriter.comment="STONArrayWriter helps in writing array based STON representations.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "add:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self["@first"];
if($core.assert($1)){
self["@first"]=false;
self["@first"];
} else {
$recv(self["@writer"])._listElementSeparator();
};
$recv(self["@writer"])._nextPut_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},$globals.STONListWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "add: anObject\x0a\x09first ifTrue: [ first := false ] ifFalse: [ writer listElementSeparator ].\x0a\x09writer nextPut: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "listElementSeparator", "nextPut:"]
}),
$globals.STONListWriter);



$core.addClass('STONShortListWriter', $globals.STONListWriter, [], 'STON-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONShortListWriter.comment="STONShortArrayWriter helps in writing short array based STON representations.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "add:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self["@first"];
if($core.assert($1)){
self["@first"]=false;
self["@first"];
} else {
$recv(self["@writer"])._shortListElementSeparator();
};
$recv(self["@writer"])._nextPut_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},$globals.STONShortListWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "add: anObject\x0a\x09first ifTrue: [ first := false ] ifFalse: [ writer shortListElementSeparator ].\x0a\x09writer nextPut: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "shortListElementSeparator", "nextPut:"]
}),
$globals.STONShortListWriter);



$core.addClass('STONMapWriter', $globals.STONStreamWriter, [], 'STON-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONMapWriter.comment="STONDictionaryWriter helps in writing dictionary based STON representations.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (key, value) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self["@first"];
if($core.assert($1)){
self["@first"]=false;
self["@first"];
} else {
$recv(self["@writer"])._mapElementSeparator();
};
$recv(self["@writer"])._encodeKey_value_(key,value);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{key:key,value:value},$globals.STONMapWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["key", "value"],
source: "at: key put: value\x0a\x09first ifTrue: [ first := false ] ifFalse: [ writer mapElementSeparator ].\x0a\x09writer encodeKey: key value: value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "mapElementSeparator", "encodeKey:value:"]
}),
$globals.STONMapWriter);



$core.addClass('STONWriter', $globals.Object, ['writeStream', 'prettyPrint', 'jsonMode', 'referencePolicy', 'level', 'objects'], 'STON-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONWriter.comment="STONWriter serializes objects using the Smalltalk Object Notation format. \x0a\x0aCustomization options are:\x0a\x0a- prettyPrint <Boolean> default is false\x0a\x09if true, produce pretty printed output\x0a- jsonMode <Boolean> default is false\x0a\x09if true, the follow changes occur\x0a\x09- strings are delimited with double quotes\x0a\x09- nil is encoded as null\x0a\x09- symbols are treated as strings\x0a\x09- only STON listClass and STON mapClass instances are allowed as composite objects\x0a\x09it is wise to also use either #error or #ignore as referencePolicy to avoid references\x0a- referencePolicy <#normal|#ignore|#error> default is #normal\x0a\x09if #normal, track and count object references and use references to implement sharing and break cycles\x0a\x09if #error, track object references and signal STONWriterError when a shared reference is encountered\x0a\x09if #ignore, don't track object references which might loop forever on cycles";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "close",
protocol: 'initialize-release',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@writeStream"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self["@writeStream"])._close();
self["@writeStream"]=nil;
self["@writeStream"];
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"close",{},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "close\x0a\x09writeStream ifNotNil: [\x0a\x09\x09writeStream close.\x0a\x09\x09writeStream := nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "close"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "encodeCharacter:",
protocol: 'private',
fn: function (char) {
var self=this;
var code,encoding;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$4,$1,$5;
code=$recv(char)._charCodeAt_((1));
$3=code;
$2=$recv($3).__lt((127));
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
encoding=$recv($recv(self._class())._stonCharacters())._at_($recv(code).__plus((1)));
$4=encoding;
return $recv($4)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$5=$recv(encoding).__eq("pass");
if($core.assert($5)){
$recv(self["@writeStream"])._nextPut_(char);
} else {
$recv(self["@writeStream"])._nextPutAll_(encoding);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
};
} else {
$recv(self["@writeStream"])._nextPutAll_("\x5cu");
$recv(code)._printOn_base_nDigits_(self["@writeStream"],(16),(4));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"encodeCharacter:",{char:char,code:code,encoding:encoding},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["char"],
source: "encodeCharacter: char\x0a\x09| code encoding |\x0a\x09((code := char charCodeAt: 1) < 127 and: [ (encoding := self class stonCharacters at: code + 1) notNil ])\x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09encoding = #pass\x0a\x09\x09\x09\x09ifTrue: [ writeStream nextPut: char ]\x0a\x09\x09\x09\x09ifFalse: [ writeStream nextPutAll: encoding ] ]\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09writeStream nextPutAll: '\x5cu'.\x0a\x09\x09\x09code printOn: writeStream base: 16 nDigits: 4 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "and:", "<", "charCodeAt:", "notNil", "at:", "stonCharacters", "class", "+", "=", "nextPut:", "nextPutAll:", "printOn:base:nDigits:"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "encodeKey:value:",
protocol: 'private',
fn: function (key, value) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._nextPut_(key);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
self._prettyPrintSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["prettyPrintSpace"]=1;
//>>excludeEnd("ctx");
$recv(self["@writeStream"])._nextPut_(":");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=2;
//>>excludeEnd("ctx");
self._prettyPrintSpace();
self._nextPut_(value);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"encodeKey:value:",{key:key,value:value},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["key", "value"],
source: "encodeKey: key value: value\x0a\x09self nextPut: key.\x0a\x09self prettyPrintSpace.\x0a\x09writeStream nextPut: $:.\x0a\x09self prettyPrintSpace.\x0a\x09self nextPut: value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:", "prettyPrintSpace"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "encodeList:",
protocol: 'writing',
fn: function (elements) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(self["@writeStream"])._nextPut_("[");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
$1=$recv(elements)._isEmpty();
if($core.assert($1)){
self._prettyPrintSpace();
} else {
self._indentedDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._newlineIndent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["newlineIndent"]=1;
//>>excludeEnd("ctx");
return $recv(elements)._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._nextPut_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPut:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,4)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._listElementSeparator();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
self._newlineIndent();
};
$recv(self["@writeStream"])._nextPut_("]");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"encodeList:",{elements:elements},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["elements"],
source: "encodeList: elements\x0a\x09writeStream nextPut: $[.\x0a\x09elements isEmpty\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self prettyPrintSpace ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self indentedDo: [\x0a\x09\x09\x09\x09self newlineIndent.\x0a\x09\x09\x09\x09elements \x0a\x09\x09\x09\x09\x09do: [ :each | self nextPut: each ]\x0a\x09\x09\x09\x09\x09separatedBy: [ self listElementSeparator ] ].\x0a\x09\x09\x09self newlineIndent ].\x0a\x09writeStream nextPut: $]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:", "ifTrue:ifFalse:", "isEmpty", "prettyPrintSpace", "indentedDo:", "newlineIndent", "do:separatedBy:", "listElementSeparator"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "encodeMap:",
protocol: 'writing',
fn: function (pairs) {
var self=this;
var first;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
first=true;
$recv(self["@writeStream"])._nextPut_("{");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
$1=$recv(pairs)._isEmpty();
if($core.assert($1)){
self._prettyPrintSpace();
} else {
self._indentedDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._newlineIndent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["newlineIndent"]=1;
//>>excludeEnd("ctx");
return $recv(pairs)._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=first;
if($core.assert($2)){
first=false;
first;
} else {
self._mapElementSeparator();
};
return self._encodeKey_value_(key,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
self._newlineIndent();
};
$recv(self["@writeStream"])._nextPut_("}");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"encodeMap:",{pairs:pairs,first:first},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pairs"],
source: "encodeMap: pairs\x0a\x09| first |\x0a\x09first := true.\x0a\x09writeStream nextPut: ${.\x0a\x09pairs isEmpty\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self prettyPrintSpace ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self indentedDo: [\x0a\x09\x09\x09\x09self newlineIndent.\x0a\x09\x09\x09\x09pairs keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09\x09\x09first \x0a\x09\x09\x09\x09\x09\x09ifTrue: [ first := false ] \x0a\x09\x09\x09\x09\x09\x09ifFalse: [ self mapElementSeparator ].\x0a\x09\x09\x09\x09\x09self encodeKey: key value: value ] ].\x0a\x09\x09\x09self newlineIndent ].\x0a\x09writeStream nextPut: $}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:", "ifTrue:ifFalse:", "isEmpty", "prettyPrintSpace", "indentedDo:", "newlineIndent", "keysAndValuesDo:", "mapElementSeparator", "encodeKey:value:"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "encodeString:",
protocol: 'private',
fn: function (string) {
var self=this;
var encodedString;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$6,$5;
encodedString=string;
$1=self["@writeStream"];
$3=self["@jsonMode"];
if($core.assert($3)){
$2="\x22";
} else {
$2="'";
};
$recv($1)._nextPut_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
$recv(encodedString)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._encodeCharacter_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$4=self["@writeStream"];
$6=self["@jsonMode"];
if($core.assert($6)){
$5="\x22";
} else {
$5="'";
};
$recv($4)._nextPut_($5);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"encodeString:",{string:string,encodedString:encodedString},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["string"],
source: "encodeString: string\x0a  | encodedString |\x0a  encodedString := string \x22convertToEncoding: #'utf-8'\x22.\x0a  writeStream\x0a    nextPut:\x0a      (jsonMode\x0a        ifTrue: [ $\x22 ]\x0a        ifFalse: [ $' ]).\x0a  encodedString do: [ :each | self encodeCharacter: each ].\x0a  writeStream\x0a    nextPut:\x0a      (jsonMode\x0a        ifTrue: [ $\x22 ]\x0a        ifFalse: [ $' ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:", "ifTrue:ifFalse:", "do:", "encodeCharacter:"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "indentedDo:",
protocol: 'private',
fn: function (block) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@level"]=$recv(self["@level"]).__plus((1));
$recv(block)._value();
self["@level"]=$recv(self["@level"]).__minus((1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indentedDo:",{block:block},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["block"],
source: "indentedDo: block\x0a\x09level := level + 1.\x0a\x09block value.\x0a\x09level := level - 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "value", "-"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function () {
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.STONWriter.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@prettyPrint"]=false;
self["@level"]=(0);
self["@referencePolicy"]="normal";
self["@jsonMode"]=false;
self["@objects"]=$recv($Dictionary())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09prettyPrint := false.\x0a\x09level := 0.\x0a\x09referencePolicy := #normal.\x0a\x09jsonMode := false.\x0a\x09objects := Dictionary new",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "isSimpleSymbol:",
protocol: 'private',
fn: function (symbol) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv(symbol)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._findFirstInString_inSet_startingAt_(symbol,$recv(self._class())._stonSimpleSymbolCharacters(),(1));
$1=$recv($2).__eq((0));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSimpleSymbol:",{symbol:symbol},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["symbol"],
source: "isSimpleSymbol: symbol\x0a\x09^ (symbol class \x0a\x09\x09findFirstInString: symbol \x0a\x09\x09inSet: self class stonSimpleSymbolCharacters \x0a\x09\x09startingAt: 1) = 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "findFirstInString:inSet:startingAt:", "class", "stonSimpleSymbolCharacters"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "jsonMode:",
protocol: 'initialize-release',
fn: function (boolean) {
var self=this;
self["@jsonMode"]=boolean;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["boolean"],
source: "jsonMode: boolean\x0a\x09jsonMode := boolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "listElementSeparator",
protocol: 'private',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@writeStream"])._nextPut_(",");
self._newlineIndent();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"listElementSeparator",{},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "listElementSeparator\x0a\x09writeStream nextPut: $,.\x0a\x09self newlineIndent",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:", "newlineIndent"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "mapElementSeparator",
protocol: 'private',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@writeStream"])._nextPut_(",");
self._newlineIndent();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mapElementSeparator",{},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mapElementSeparator\x0a\x09writeStream nextPut: $,.\x0a\x09self newlineIndent",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:", "newlineIndent"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "newlineIndent",
protocol: 'private',
fn: function () {
var self=this;
function $Character(){return $globals.Character||(typeof Character=="undefined"?nil:Character)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self["@prettyPrint"];
if($core.assert($1)){
$recv(self["@writeStream"])._nextPut_($recv($Character())._cr());
$recv(self["@level"])._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@writeStream"])._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newlineIndent",{},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newlineIndent\x0a\x09prettyPrint ifTrue: [ \x0a\x09\x09writeStream nextPut: Character cr.\x0a\x09\x09level timesRepeat: [ writeStream tab ] ]",
referencedClasses: ["Character"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "nextPut:", "cr", "timesRepeat:", "tab"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "nextPut:",
protocol: 'public',
fn: function (anObject) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anObject)._stonOn_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "nextPut: anObject\x0a\x09anObject stonOn: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stonOn:"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'initialize-release',
fn: function (aWriteStream) {
var self=this;
self["@writeStream"]=aWriteStream;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWriteStream"],
source: "on: aWriteStream\x0a\x09writeStream := aWriteStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "prettyPrint:",
protocol: 'initialize-release',
fn: function (boolean) {
var self=this;
self["@prettyPrint"]=boolean;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["boolean"],
source: "prettyPrint: boolean\x0a\x09prettyPrint := boolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "prettyPrintSpace",
protocol: 'private',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self["@prettyPrint"];
if($core.assert($1)){
$recv(self["@writeStream"])._space();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prettyPrintSpace",{},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "prettyPrintSpace\x0a\x09prettyPrint ifTrue: [ writeStream space ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "space"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "referencePolicy:",
protocol: 'initialize-release',
fn: function (policy) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_(["normal", "ignore", "error"]._includes_(policy));
self["@referencePolicy"]=policy;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"referencePolicy:",{policy:policy},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["policy"],
source: "referencePolicy: policy\x0a\x09self assert: ( #(#normal #ignore #error) includes: policy ).\x0a\x09referencePolicy := policy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "includes:"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "reset",
protocol: 'initialize-release',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@objects"])._removeAll();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reset",{},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09objects removeAll",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeAll"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "shortListElementSeparator",
protocol: 'private',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@writeStream"])._nextPut_(",");
self._prettyPrintSpace();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shortListElementSeparator",{},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shortListElementSeparator\x0a\x09writeStream nextPut: $,.\x0a\x09self prettyPrintSpace",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:", "prettyPrintSpace"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "with:do:",
protocol: 'private',
fn: function (object, block) {
var self=this;
var index;
function $STONWriterError(){return $globals.STONWriterError||(typeof STONWriterError=="undefined"?nil:STONWriterError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$6;
$1=$recv(self["@referencePolicy"]).__eq("ignore");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$2=$recv(block)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
return $2;
};
index=$recv(self["@objects"])._at_ifAbsent_(object,(function(){
return nil;

}));
$4=index;
$3=$recv($4)._notNil();
if($core.assert($3)){
$5=$recv(self["@referencePolicy"]).__eq("error");
if($core.assert($5)){
$6=$recv($STONWriterError())._signal_("Shared reference detected");
return $6;
};
self._writeReference_(index);
} else {
index=$recv($recv(self["@objects"])._size()).__plus((1));
index;
$recv(self["@objects"])._at_put_(object,index);
$recv(block)._value();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:do:",{object:object,block:block,index:index},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object", "block"],
source: "with: object do: block\x0a\x09| index |\x0a\x09referencePolicy = #ignore \x0a\x09\x09ifTrue: [ ^ block value ].\x0a\x09(index := objects at: object ifAbsent: [ nil ]) notNil\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09referencePolicy = #error\x0a\x09\x09\x09\x09ifTrue: [ ^ STONWriterError signal: 'Shared reference detected' ].\x0a\x09\x09\x09self writeReference: index ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09index := objects size + 1.\x0a\x09\x09\x09objects at: object put: index.\x0a\x09\x09\x09block value ]",
referencedClasses: ["STONWriterError"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "value", "ifTrue:ifFalse:", "notNil", "at:ifAbsent:", "signal:", "writeReference:", "+", "size", "at:put:"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "writeAssociation:",
protocol: 'writing',
fn: function (association) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._encodeKey_value_($recv(association)._key(),$recv(association)._value());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeAssociation:",{association:association},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["association"],
source: "writeAssociation: association\x0a\x09self \x0a\x09\x09encodeKey: association key\x0a\x09\x09value: association value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["encodeKey:value:", "key", "value"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "writeBoolean:",
protocol: 'writing',
fn: function (boolean) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(boolean)._printOn_(self["@writeStream"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeBoolean:",{boolean:boolean},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["boolean"],
source: "writeBoolean: boolean\x0a\x09boolean printOn: writeStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "writeFloat:",
protocol: 'writing',
fn: function (float) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(float)._printOn_(self["@writeStream"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeFloat:",{float:float},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["float"],
source: "writeFloat: float\x0a\x09float printOn: writeStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "writeInteger:",
protocol: 'writing',
fn: function (integer) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(integer)._prontOn_(self["@writeStream"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeInteger:",{integer:integer},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["integer"],
source: "writeInteger: integer\x0a\x09integer prontOn: writeStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["prontOn:"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "writeList:",
protocol: 'writing',
fn: function (collection) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._with_do_(collection,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._encodeList_(collection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeList:",{collection:collection},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["collection"],
source: "writeList: collection\x0a\x09self with: collection do: [ \x0a\x09\x09self encodeList: collection ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:do:", "encodeList:"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "writeMap:",
protocol: 'writing',
fn: function (hashedCollection) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._with_do_(hashedCollection,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._encodeMap_(hashedCollection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeMap:",{hashedCollection:hashedCollection},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hashedCollection"],
source: "writeMap: hashedCollection\x0a\x09self with: hashedCollection do: [ \x0a\x09\x09self encodeMap: hashedCollection ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:do:", "encodeMap:"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "writeNull",
protocol: 'writing',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self["@jsonMode"];
if($core.assert($1)){
$recv(self["@writeStream"])._nextPutAll_("null");
} else {
nil._printOn_(self["@writeStream"]);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeNull",{},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "writeNull\x0a\x09jsonMode\x0a\x09\x09ifTrue: [ writeStream nextPutAll: 'null' ]\x0a\x09\x09ifFalse: [ nil printOn: writeStream ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "nextPutAll:", "printOn:"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "writeObject:do:",
protocol: 'writing',
fn: function (anObject, block) {
var self=this;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
function $STONWriterError(){return $globals.STONWriterError||(typeof STONWriterError=="undefined"?nil:STONWriterError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$4,$1;
$1=$recv(self["@jsonMode"])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(anObject)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__tild_eq($recv($STON())._listClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["~="]=1;
//>>excludeEnd("ctx");
return $recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$4=$recv(anObject)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class"]=2;
//>>excludeEnd("ctx");
return $recv($4).__tild_eq($recv($STON())._mapClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$recv($STONWriterError())._signal_("Wrong object class for JSON mode");
};
self._with_do_(anObject,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@writeStream"])._nextPutAll_($recv($recv(anObject)._class())._stonName());
self._prettyPrintSpace();
return $recv(block)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeObject:do:",{anObject:anObject,block:block},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "block"],
source: "writeObject: anObject do: block\x0a\x09(jsonMode and: [ anObject class ~= STON listClass and: [ anObject class ~= STON mapClass ] ])\x0a\x09\x09ifTrue: [ STONWriterError signal: 'Wrong object class for JSON mode' ].\x0a\x09self with: anObject do: [\x0a\x09\x09writeStream nextPutAll: anObject class stonName.\x0a\x09\x09self prettyPrintSpace.\x0a\x09\x09block value ]",
referencedClasses: ["STON", "STONWriterError"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "and:", "~=", "class", "listClass", "mapClass", "signal:", "with:do:", "nextPutAll:", "stonName", "prettyPrintSpace", "value"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "writeObject:listSingleton:",
protocol: 'writing',
fn: function (object, element) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._writeObject_do_(object,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@writeStream"])._nextPut_("[");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
self._prettyPrintSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["prettyPrintSpace"]=1;
//>>excludeEnd("ctx");
self._nextPut_(element);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPut:"]=2;
//>>excludeEnd("ctx");
$1=self._prettyPrintSpace();
$1;
return $recv(self["@writeStream"])._nextPut_("]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeObject:listSingleton:",{object:object,element:element},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object", "element"],
source: "writeObject: object listSingleton: element\x0a\x09self writeObject: object do: [\x0a\x09\x09writeStream nextPut: $[.\x0a\x09\x09self \x0a\x09\x09\x09prettyPrintSpace;\x0a\x09\x09\x09nextPut: element;\x0a\x09\x09\x09prettyPrintSpace.\x0a\x09\x09writeStream nextPut: $] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeObject:do:", "nextPut:", "prettyPrintSpace"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "writeObject:streamList:",
protocol: 'writing',
fn: function (object, block) {
var self=this;
function $STONListWriter(){return $globals.STONListWriter||(typeof STONListWriter=="undefined"?nil:STONListWriter)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._writeObject_do_(object,(function(){
var listWriter;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
listWriter=$recv($STONListWriter())._on_(self);
listWriter;
$recv(self["@writeStream"])._nextPut_("[");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
self._indentedDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
self._newlineIndent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["newlineIndent"]=1;
//>>excludeEnd("ctx");
return $recv(block)._value_(listWriter);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
self._newlineIndent();
return $recv(self["@writeStream"])._nextPut_("]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({listWriter:listWriter},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeObject:streamList:",{object:object,block:block},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object", "block"],
source: "writeObject: object streamList: block\x0a\x09self writeObject: object do: [ | listWriter |\x0a\x09\x09listWriter := STONListWriter on: self.\x0a\x09\x09writeStream nextPut: $[.\x0a\x09\x09self indentedDo: [\x0a\x09\x09\x09self newlineIndent.\x0a\x09\x09\x09block value: listWriter ].\x0a\x09\x09self newlineIndent.\x0a\x09\x09writeStream nextPut: $] ]",
referencedClasses: ["STONListWriter"],
//>>excludeEnd("ide");
messageSends: ["writeObject:do:", "on:", "nextPut:", "indentedDo:", "newlineIndent", "value:"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "writeObject:streamMap:",
protocol: 'writing',
fn: function (object, block) {
var self=this;
function $STONMapWriter(){return $globals.STONMapWriter||(typeof STONMapWriter=="undefined"?nil:STONMapWriter)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._writeObject_do_(object,(function(){
var mapWriter;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
mapWriter=$recv($STONMapWriter())._on_(self);
mapWriter;
$recv(self["@writeStream"])._nextPut_("{");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
self._indentedDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
self._newlineIndent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["newlineIndent"]=1;
//>>excludeEnd("ctx");
return $recv(block)._value_(mapWriter);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
self._newlineIndent();
return $recv(self["@writeStream"])._nextPut_("}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({mapWriter:mapWriter},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeObject:streamMap:",{object:object,block:block},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object", "block"],
source: "writeObject: object streamMap: block\x0a\x09self writeObject: object do: [ | mapWriter |\x0a\x09\x09mapWriter := STONMapWriter on: self.\x0a\x09\x09writeStream nextPut: ${.\x0a\x09\x09self indentedDo: [\x0a\x09\x09\x09self newlineIndent.\x0a\x09\x09\x09block value: mapWriter ].\x0a\x09\x09self newlineIndent.\x0a\x09\x09writeStream nextPut: $} ]",
referencedClasses: ["STONMapWriter"],
//>>excludeEnd("ide");
messageSends: ["writeObject:do:", "on:", "nextPut:", "indentedDo:", "newlineIndent", "value:"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "writeObject:streamShortList:",
protocol: 'writing',
fn: function (object, block) {
var self=this;
function $STONShortListWriter(){return $globals.STONShortListWriter||(typeof STONShortListWriter=="undefined"?nil:STONShortListWriter)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._writeObject_do_(object,(function(){
var listWriter;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
listWriter=$recv($STONShortListWriter())._on_(self);
listWriter;
$recv(self["@writeStream"])._nextPut_("[");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
self._indentedDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
self._prettyPrintSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["prettyPrintSpace"]=1;
//>>excludeEnd("ctx");
return $recv(block)._value_(listWriter);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
self._prettyPrintSpace();
return $recv(self["@writeStream"])._nextPut_("]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({listWriter:listWriter},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeObject:streamShortList:",{object:object,block:block},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object", "block"],
source: "writeObject: object streamShortList: block\x0a\x09self writeObject: object do: [ | listWriter |\x0a\x09\x09listWriter := STONShortListWriter on: self.\x0a\x09\x09writeStream nextPut: $[.\x0a\x09\x09self indentedDo: [\x0a\x09\x09\x09self prettyPrintSpace.\x0a\x09\x09\x09block value: listWriter ].\x0a\x09\x09self prettyPrintSpace.\x0a\x09\x09writeStream nextPut: $] ]",
referencedClasses: ["STONShortListWriter"],
//>>excludeEnd("ide");
messageSends: ["writeObject:do:", "on:", "nextPut:", "indentedDo:", "prettyPrintSpace", "value:"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "writeReference:",
protocol: 'writing',
fn: function (index) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self["@writeStream"];
$recv($1)._nextPut_("@");
$2=$recv($1)._print_(index);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeReference:",{index:index},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "writeReference: index\x0a\x09writeStream\x0a\x09\x09nextPut: $@;\x0a\x09\x09print: index",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:", "print:"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "writeString:",
protocol: 'writing',
fn: function (string) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._encodeString_(string);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeString:",{string:string},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["string"],
source: "writeString: string\x0a\x09self encodeString: string",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["encodeString:"]
}),
$globals.STONWriter);

$core.addMethod(
$core.method({
selector: "writeSymbol:",
protocol: 'writing',
fn: function (symbol) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self["@jsonMode"];
if($core.assert($1)){
self._writeString_(symbol);
} else {
$recv(self["@writeStream"])._nextPut_("#");
$2=self._isSimpleSymbol_(symbol);
if($core.assert($2)){
$recv(self["@writeStream"])._nextPutAll_(symbol);
} else {
self._encodeString_(symbol);
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeSymbol:",{symbol:symbol},$globals.STONWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["symbol"],
source: "writeSymbol: symbol\x0a\x09jsonMode\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self writeString: symbol ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09writeStream nextPut: $#.\x0a\x09\x09\x09(self isSimpleSymbol: symbol)\x0a\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09writeStream nextPutAll: symbol ]\x0a\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09self encodeString: symbol ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "writeString:", "nextPut:", "isSimpleSymbol:", "nextPutAll:", "encodeString:"]
}),
$globals.STONWriter);


$globals.STONWriter.klass.iVarNames = ['STONCharacters','STONSimpleSymbolCharacters'];
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'class initialization',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._initializeSTONCharacters();
self._initializeSTONSimpleSymbolCharacters();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.STONWriter.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self initializeSTONCharacters.\x0a\x09self initializeSTONSimpleSymbolCharacters",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeSTONCharacters", "initializeSTONSimpleSymbolCharacters"]
}),
$globals.STONWriter.klass);

$core.addMethod(
$core.method({
selector: "initializeSTONCharacters",
protocol: 'class initialization',
fn: function () {
var self=this;
var escapes;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4;
self["@STONCharacters"]=$recv($Array())._new_((127));
(32)._to_do_((126),(function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self["@STONCharacters"];
$2=$recv(each).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return $recv($1)._at_put_($2,"pass");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
escapes=[(8), "\x5cb", (9), "\x5ct", (10), "\x5cn", (12), "\x5cf", (13), "\x5cr", (34), "\x5c\x22", (39), "\x5c'", (92), "\x5c\x5c"];
(1)._to_by_do_($recv($recv(escapes)._size()).__minus((1)),(2),(function(index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=self["@STONCharacters"];
$5=$recv(escapes)._at_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=2;
//>>excludeEnd("ctx");
return $recv($3)._at_put_($4,$recv(escapes)._at_($recv(index).__plus((1))));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeSTONCharacters",{escapes:escapes},$globals.STONWriter.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeSTONCharacters\x0a\x09| escapes | \x0a\x09STONCharacters := Array new: 127.\x0a\x0932 to: 126 do: [ :each | \x0a\x09\x09STONCharacters at: each + 1 put: #pass ].\x0a\x09escapes := #( 8 '\x5cb' 9 '\x5ct' 10 '\x5cn' 12 '\x5cf' 13 '\x5cr' 34 '\x5c\x22' 39 '\x5c''' 92 '\x5c\x5c' ).\x0a\x091 to: escapes size - 1 by: 2 do: [ :index | \x0a\x09\x09STONCharacters \x0a\x09\x09\x09at: (escapes at: index) + 1\x0a\x09\x09\x09put: (escapes at: index + 1) ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new:", "to:do:", "at:put:", "+", "to:by:do:", "-", "size", "at:"]
}),
$globals.STONWriter.klass);

$core.addMethod(
$core.method({
selector: "initializeSTONSimpleSymbolCharacters",
protocol: 'class initialization',
fn: function () {
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@STONSimpleSymbolCharacters"]=$recv($Array())._new_((256));
(1)._to_do_((256),(function(each){
var char;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
char=$recv($String())._fromCharCode_($recv(each).__minus((1)));
char;
$1=self._isSimpleSymbolChar_(char);
if($core.assert($1)){
return $recv(self["@STONSimpleSymbolCharacters"])._at_put_(each,(0));
} else {
return $recv(self["@STONSimpleSymbolCharacters"])._at_put_(each,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,char:char},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeSTONSimpleSymbolCharacters",{},$globals.STONWriter.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeSTONSimpleSymbolCharacters\x0a\x09\x22STONSimpleSymbolCharacters asArray collectWithIndex: [ :each :index |\x0a\x09\x09each isZero ifTrue: [ (index - 1) asCharacter ] ].\x22\x0a\x0a\x09STONSimpleSymbolCharacters := Array new: 256.\x0a\x091 to: 256 do: [ :each | | char |\x0a\x09\x09char := String fromCharCode: each - 1.\x0a\x09\x09(self isSimpleSymbolChar: char)\x0a\x09\x09\x09ifFalse: [ STONSimpleSymbolCharacters at: each put: 1 ]\x0a\x09\x09\x09ifTrue: [ STONSimpleSymbolCharacters at: each put: 0 ]\x0a\x09]",
referencedClasses: ["Array", "String"],
//>>excludeEnd("ide");
messageSends: ["new:", "to:do:", "fromCharCode:", "-", "ifFalse:ifTrue:", "isSimpleSymbolChar:", "at:put:"]
}),
$globals.STONWriter.klass);

$core.addMethod(
$core.method({
selector: "isSimpleSymbolChar:",
protocol: 'private',
fn: function (char) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_./"._includes_(char);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSimpleSymbolChar:",{char:char},$globals.STONWriter.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["char"],
source: "isSimpleSymbolChar: char\x0a\x09^ 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_./' includes: char",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includes:"]
}),
$globals.STONWriter.klass);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (writeStream) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._on_(writeStream);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{writeStream:writeStream},$globals.STONWriter.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["writeStream"],
source: "on: writeStream\x0a\x09^ self new\x0a\x09\x09on: writeStream;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["on:", "new", "yourself"]
}),
$globals.STONWriter.klass);

$core.addMethod(
$core.method({
selector: "stonCharacters",
protocol: 'class initialization',
fn: function () {
var self=this;
var $1;
$1=self["@STONCharacters"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stonCharacters\x0a\x09^ STONCharacters",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONWriter.klass);

$core.addMethod(
$core.method({
selector: "stonSimpleSymbolCharacters",
protocol: 'class initialization',
fn: function () {
var self=this;
var $1;
$1=self["@STONSimpleSymbolCharacters"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stonSimpleSymbolCharacters\x0a\x09^ STONSimpleSymbolCharacters",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.STONWriter.klass);


$core.addClass('STONWriterError', $globals.Error, [], 'STON-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.STONWriterError.comment="STONWriterError is the error/exception signalled by STONWriter when illegal/incorrect input is seen.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "stonOn:",
protocol: '*STON-Core',
fn: function (stonWriter) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stonWriter)._writeAssociation_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},$globals.Association)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonWriter"],
source: "stonOn: stonWriter\x0a\x09stonWriter writeAssociation: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeAssociation:"]
}),
$globals.Association);

$core.addMethod(
$core.method({
selector: "stonOn:",
protocol: '*STON-Core',
fn: function (stonWriter) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stonWriter)._writeBoolean_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},$globals.Boolean)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonWriter"],
source: "stonOn: stonWriter\x0a\x09stonWriter writeBoolean: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeBoolean:"]
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "stonProcessSubObjects:",
protocol: '*STON-Core',
fn: function (block) {
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["block"],
source: "stonProcessSubObjects: block",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "stonName",
protocol: '*STON-Core',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._name();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stonName",{},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stonName\x0a\x09\x22Override to encode my instances using a different class name.\x22\x0a\x09\x0a\x09^ self name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["name"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "stonOn:",
protocol: '*STON-Core',
fn: function (stonWriter) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stonWriter)._writeObject_do_(self,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stonWriter)._encodeList_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonWriter"],
source: "stonOn: stonWriter\x0a\x09stonWriter writeObject: self do: [\x0a\x09\x09stonWriter encodeList: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeObject:do:", "encodeList:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "stonOn:",
protocol: '*STON-Core',
fn: function (stonWriter) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stonWriter)._writeObject_listSingleton_(self,self._yyyymmdd());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonWriter"],
source: "stonOn: stonWriter\x0a\x09\x22Use an ISO style YYYYMMDD representation\x22\x0a\x09\x0a\x09stonWriter writeObject: self listSingleton: self yyyymmdd",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeObject:listSingleton:", "yyyymmdd"]
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "stonProcessSubObjects:",
protocol: '*STON-Core',
fn: function (block) {
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["block"],
source: "stonProcessSubObjects: block",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "stonOn:",
protocol: '*STON-Core',
fn: function (stonWriter) {
var self=this;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class()).__eq_eq($recv($STON())._mapClass());
if($core.assert($1)){
$recv(stonWriter)._writeMap_(self);
} else {
$recv(stonWriter)._writeObject_do_(self,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stonWriter)._encodeMap_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},$globals.Dictionary)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonWriter"],
source: "stonOn: stonWriter\x0a\x09\x22Instances of STON mapClass will be encoded directly, without a class tag.\x0a\x09Other (sub)classes will be encoded with a class tag and will use a map representation. \x22\x0a\x09\x0a\x09self class == STON mapClass\x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09stonWriter writeMap: self ]\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09stonWriter \x0a\x09\x09\x09\x09writeObject: self \x0a\x09\x09\x09\x09do: [ stonWriter encodeMap: self ] ]",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "==", "class", "mapClass", "writeMap:", "writeObject:do:", "encodeMap:"]
}),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "stonOn:",
protocol: '*STON-Core',
fn: function (stonWriter) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stonWriter)._writeFloat_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonWriter"],
source: "stonOn: stonWriter\x0a\x09stonWriter writeFloat: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeFloat:"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "stonProcessSubObjects:",
protocol: '*STON-Core',
fn: function (block) {
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["block"],
source: "stonProcessSubObjects: block",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "fromSton:",
protocol: '*STON-Core',
fn: function (stonReader) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._isVariable();
if($core.assert($1)){
self._subclassResponsibility();
} else {
$recv(stonReader)._parseMapDo_((function(instVarName,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._instVarNamed_put_(instVarName,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({instVarName:instVarName,value:value},$ctx1,3)});
//>>excludeEnd("ctx");
}));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromSton:",{stonReader:stonReader},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonReader"],
source: "fromSton: stonReader\x0a\x09\x22Decode non-variable classes from a map of their instance variables and values.\x0a\x09Override to customize and add a mathcing #toSton: (see implementors).\x22\x0a\x09\x0a\x09self class isVariable \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self subclassResponsibility ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09stonReader parseMapDo: [ :instVarName :value |\x0a\x09\x09\x09\x09self instVarNamed: instVarName put: value ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isVariable", "class", "subclassResponsibility", "parseMapDo:", "instVarNamed:put:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isStonReference",
protocol: '*STON-Core',
fn: function () {
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isStonReference\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "stonOn:",
protocol: '*STON-Core',
fn: function (stonWriter) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stonWriter)._writeObject_streamMap_(self,(function(dictionary){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self._class())._allInstanceVariableNames())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(dictionary)._at_put_($recv(each)._asSymbol(),self._instVarAt_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({dictionary:dictionary},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonWriter"],
source: "stonOn: stonWriter\x0a\x09\x22Encode non-variable classes with a map of their instance variable and values.\x0a\x09Override to customize and add a matching #fromSton: (see implementors).\x22\x0a\x0a\x09stonWriter writeObject: self streamMap: [ :dictionary |\x0a\x09\x09self class allInstanceVariableNames do: [ :each |\x0a\x09\x09\x09dictionary at: each asSymbol put: (self instVarAt: each) ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeObject:streamMap:", "do:", "allInstanceVariableNames", "class", "at:put:", "asSymbol", "instVarAt:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "stonProcessSubObjects:",
protocol: '*STON-Core',
fn: function (block) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$6,$5,$4;
$2=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._instSize();
(1)._to_do_($1,(function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(block)._value_(self._instVarAt_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
return self._instVarAt_put_(each,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:do:"]=1;
//>>excludeEnd("ctx");
$6=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._isVariable();
$4=$recv($5)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self._class())._isBytes())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
if($core.assert($4)){
(1)._to_do_(self._basicSize(),(function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._basicAt_put_(each,$recv(block)._value_(self._basicAt_(each)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stonProcessSubObjects:",{block:block},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["block"],
source: "stonProcessSubObjects: block\x0a\x091 to: self class instSize do: [ :each |\x0a\x09\x09self instVarAt: each put: (block value: (self instVarAt: each)) ].\x0a\x09(self class isVariable and: [ self class isBytes not ])\x0a\x09\x09ifTrue: [\x0a\x09\x09\x091 to: self basicSize do: [ :each |\x0a\x09\x09\x09\x09self basicAt: each put: (block value: (self basicAt: each)) ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["to:do:", "instSize", "class", "instVarAt:put:", "value:", "instVarAt:", "ifTrue:", "and:", "isVariable", "not", "isBytes", "basicSize", "basicAt:put:", "basicAt:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "fromSton:",
protocol: '*STON-Core',
fn: function (stonReader) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv(stonReader)._parseListDo_((function(each,index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(index).__eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
self["@x"]=each;
self["@x"];
};
$2=$recv(index).__eq((2));
if($core.assert($2)){
self["@y"]=each;
return self["@y"];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromSton:",{stonReader:stonReader},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonReader"],
source: "fromSton: stonReader\x0a\x09stonReader parseListDo: [ :each :index |\x0a\x09\x09index = 1 ifTrue: [ x := each ].\x0a\x09\x09index = 2 ifTrue: [ y := each ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parseListDo:", "ifTrue:", "="]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "stonOn:",
protocol: '*STON-Core',
fn: function (stonWriter) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(stonWriter)._writeObject_streamShortList_(self,(function(array){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(array)._add_(self["@x"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$1=$recv(array)._add_(self["@y"]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonWriter"],
source: "stonOn: stonWriter\x0a\x09stonWriter writeObject: self streamShortList: [ :array |\x0a\x09\x09array add: x; add: y ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeObject:streamShortList:", "add:"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "stonOn:",
protocol: '*STON-Core',
fn: function (stonWriter) {
var self=this;
function $STON(){return $globals.STON||(typeof STON=="undefined"?nil:STON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class()).__eq_eq($recv($STON())._listClass());
if($core.assert($1)){
$recv(stonWriter)._writeList_(self);
} else {
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SequenceableCollection.superclass.fn.prototype._stonOn_.apply($recv(self), [stonWriter]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonWriter"],
source: "stonOn: stonWriter\x0a\x09self class == STON listClass\x0a\x09\x09ifTrue: [ stonWriter writeList: self ]\x0a\x09\x09ifFalse: [ super stonOn: stonWriter ]",
referencedClasses: ["STON"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "==", "class", "listClass", "writeList:", "stonOn:"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "isSeparator",
protocol: '*STON-Core',
fn: function () {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=[(32), (13), (9), (10), (12)]._includes_(self._asciiValue());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSeparator",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSeparator\x0a\x09\x22Answer whether the receiver is one of the separator characters--space, \x0a\x09cr, tab, line feed, or form feed.\x22\x0a\x09^ #( 32 \x22space\x22 13 \x22cr\x22 9 \x22tab\x22 10 \x22lf\x22 12 \x22ff\x22 ) includes: self asciiValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includes:", "asciiValue"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "stonOn:",
protocol: '*STON-Core',
fn: function (stonWriter) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stonWriter)._writeString_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonWriter"],
source: "stonOn: stonWriter\x0a\x09stonWriter writeString: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeString:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "stonProcessSubObjects:",
protocol: '*STON-Core',
fn: function (block) {
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["block"],
source: "stonProcessSubObjects: block",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "stonOn:",
protocol: '*STON-Core',
fn: function (stonWriter) {
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stonWriter)._writeNull();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},$globals.UndefinedObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stonWriter"],
source: "stonOn: stonWriter\x0a\x09stonWriter writeNull",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeNull"]
}),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "stonProcessSubObjects:",
protocol: '*STON-Core',
fn: function (block) {
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["block"],
source: "stonProcessSubObjects: block",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.UndefinedObject);

});
