Smalltalk createPackage: 'STON-Tests'!
TestCase subclass: #STONReaderTests
	instanceVariableNames: ''
	package: 'STON-Tests'!
!STONReaderTests commentStamp!
STONReaderTests test materialization.!

!STONReaderTests methodsFor: 'private'!

materialize: string
	^ STON reader 
		on: string readStream;
		next
! !

!STONReaderTests methodsFor: 'tests'!

testAssociation
	self assert: (self materialize: '''foo'':1') = ('foo' -> 1).
	self assert: (self materialize: '#bar:2') = (#bar -> 2).
	self assert: (self materialize: '''foo bar'':#ok') = ('foo bar' -> #ok).
	self assert: (self materialize: '123:456') = (123 -> 456).
	
	self assert: (self materialize: '''foo'' : 1') = ('foo' -> 1).
	self assert: (self materialize: '#bar : 2') = (#bar -> 2).
	self assert: (self materialize: '''foo bar'' : #ok') = ('foo bar' -> #ok).
	self assert: (self materialize: '123 : -456') = (123 -> -456).
	
	self assert: (self materialize: '#foo : 1 : 2') = (#foo -> (1 -> 2))
!

testBoolean
	self assert: (self materialize: 'true') = true.
	self assert: (self materialize: 'false') = false
!

testByteArray
	self assert: (self materialize: 'ByteArray[''010203'']') = #(1 2 3) asByteArray
!

testCharacter
	self assert: (self materialize: 'Character[''A'']') == $A.
!

testConvertingNewLines
	| input result output |
	input := '''line ending with CR', String cr, 
		'line ending with LF', String lf, 
		'line ending with CRLF', String crlf, ''''.
	output := 'line ending with CR', String crlf, 
		'line ending with LF', String crlf, 
		'line ending with CRLF', String crlf.
	result := (STON reader on: input readStream) newLine: String crlf; convertNewLines: true; next.
	self assert: result equals: output.
	output := 'line ending with CR', String cr, 
		'line ending with LF', String cr, 
		'line ending with CRLF', String cr.
	result := (STON reader on: input readStream) newLine: String cr; convertNewLines: true; next.
	self assert: result equals: output
!

testDate
	| date |
	date := Date year: 2012 month: 1 day: 1.
	self assert: (self materialize: 'Date[''2012-01-01'']') = date
!

testDateAndTime
	| dateAndTime |
	dateAndTime := DateAndTime year: 2012 month: 1 day: 1 hour: 6 minute: 30 second: 15 offset: 1 hour.
	self assert: (self materialize: 'DateAndTime[''2012-01-01T06:30:15+01:00'']') = dateAndTime
!

testDictionary
	| collection |
	collection := STON mapClass new at: 1 put: 1; at: 2 put: 2; yourself.
	self assert: (self materialize: '{1:1,2:2}') = collection.
	self assert: (self materialize: '{}') = STON mapClass new.
!

testDictionaryWithComplexKeys
	| collection reader |
	collection := STON mapClass new at: true put: 1; at: #(foo) put: 2; yourself.
	(reader := STONReader on: '{true:1,[#foo]:2}' readStream)
		allowComplexMapKeys: true.
	self assert: reader next = collection
!

testError
	#( 'foo' '{foo:}' '{foo,}' '[1,]' '+1' ']' '#' '' '  ' '	' 'nul' 'tru' 'fals' ) do: [ :each |
		self 
			should: [ self materialize: each ] 
			raise: STONReaderError ]
!

testFloat
	self assert: (self materialize: '1.5') = 1.5.
	self assert: (self materialize: '-1.5') = -1.5.
	self assert: (self materialize: '0.0') = 0.0.
	self assert: (Float pi closeTo: (self materialize: '3.14149')).
	self assert: (1/3 closeTo: (self materialize: '0.333333')).
	self assert: (self materialize: '1.0e100') = (10 raisedTo: 100) asFloat.
	self assert: (self materialize: '1.0e-100') = (10 raisedTo: -100) asFloat.
	self assert: (self materialize: '-1.0e-100') = (10 raisedTo: -100) asFloat negated.
!

testIdentityDictionary
	| collection |
	collection := IdentityDictionary new at: 1 put: 1; at: 2 put: 2; yourself.
	self assert: (self materialize: 'IdentityDictionary{1:1,2:2}') = collection.
	self assert: (self materialize: 'IdentityDictionary{}') = IdentityDictionary new.
!

testIllegalCharacterEscapes
	self should: [ STON fromString: '''\a''' ] raise: STONReaderError.
	self should: [ STON fromString: '''\u''' ] raise: STONReaderError.
	self should: [ STON fromString: '''\u00''' ] raise: STONReaderError.
	self should: [ STON fromString: '''\u000''' ] raise: STONReaderError.
	self should: [ STON fromString: '''\*''' ] raise: STONReaderError
!

testInteger
	self assert: (self materialize: '1') = 1.
	self assert: (self materialize: '-1') = -1.
	self assert: (self materialize: '0') = 0.
	self assert: (self materialize: '1234567890') = 1234567890.
	self assert: (self materialize: '-1234567890') = -1234567890
!

testJsonString
	"Allow double quotes for backwards JSON compatibility"
	
	| string |
	self assert: (self materialize: '"foo"') = 'foo'.
	self assert: (self materialize: '"FOO"') = 'FOO'.
	self assert: (self materialize: '"\u00E9l\u00E8ve en Fran\u00E7ais"') = 'élève en Français'.
	string := String withAll: { 
		$". $'. $\. Character tab. Character cr. Character lf.  Character newPage. Character backspace }.
	self assert: (self materialize: '"\"\''\\\t\r\n\f\b"') = string.
!

testList
	| string |
	self assert: STON listClass = Array.
	self assert: (self materialize: '[1,2,3]') = (STON listClass with: 1 with: 2 with: 3).
	self assert: (self materialize: '[]') = STON listClass new
!

testMap
	| string |
	self assert: (self materialize: '{#foo:1}') = (STON mapClass new at: #foo put: 1; yourself).
	self assert: (self materialize: '{}') = STON mapClass new
!

testMultiple
	| reader |
	reader := STON reader 
		on: '123 -123 nil #foo true [ 0 ] false { #one : 1 }' readStream.
	self deny: reader atEnd.
	self assert: reader next equals: 123. 
	self assert: reader next equals: -123. 
	self assert: reader next equals: nil. 
	self assert: reader next equals: #foo. 
	self assert: reader next equals: true. 
	self assert: reader next equals: { 0 }. 
	self assert: reader next equals: false. 
	self assert: reader next equals: (Dictionary with: #one -> 1). 
	self assert: reader atEnd.
!

testNewSymbol
	| n notASymbol shouldBeSymbol |
	
	"Find a name that has not yet been interned"
	n := 0.
	[ Symbol hasInterned: (notASymbol := 'notASymbol', n printString) ifTrue: [ :symbol | symbol ] ] 
		whileTrue: [ n := n + 1 ].
	"Parsing the new, not yet interned name should create a new Symbol"
	shouldBeSymbol := self materialize: '#', notASymbol.
	self assert: (shouldBeSymbol isSymbol and: [ notASymbol = shouldBeSymbol asString ])
!

testNil
	self assert: (self materialize: 'nil') = nil
!

testNull
	self assert: (self materialize: 'null') = nil
!

testObject
	self assert: (self materialize: 'Point[1,2]') = (1@2).
	self assert: (self materialize: 'Point[1.5,-0.5]') = (1.5 @ -0.5).
!

testOrderedCollection
	| collection |
	collection := OrderedCollection with: 1 with: 2 with: 3.
	self assert: (self materialize: 'OrderedCollection[1,2,3]') = collection.
	self assert: (self materialize: 'OrderedCollection[]') = OrderedCollection new.
!

testPoint
	self assert: (self materialize: 'Point[1,2]') = (1@2)
!

testReferenceCycle
	| array |
	array := (self materialize: '[1,@1]').
	self assert: array class = STON listClass.
	self assert: array size = 2.
	self assert: array first = 1.
	self assert: array second == array
!

testReferenceSharing
	| one array |
	one := { #one }.
	array := (self materialize: '[[#one],@2,@2]').
	self assert: array = (STON listClass with: one with: one with: one).
	self assert: array first == array second.
	self assert: array first == array third
!

testStreaming
	| reader |
	reader := STON reader 
		on: '1 2 3 4 5 6 7 8 9 10' readStream.
	self 
		assert: (Array streamContents: [ :stream |
			[ reader atEnd] whileFalse: [ 
				stream nextPut: reader next ] ]) sum
		equals: #(1 2 3 4 5 6 7 8 9 10) sum
!

testString
	| string |
	self assert: (self materialize: '''foo''') = 'foo'.
	self assert: (self materialize: '''FOO''') = 'FOO'.
	self assert: (self materialize: '''\u00E9l\u00E8ve en Fran\u00E7ais''') = 'élève en Français'.
	string := String withAll: { 
		$". $'. $\. Character tab. Character cr. Character lf.  Character newPage. Character backspace }.
	self assert: (self materialize: '''\"\''\\\t\r\n\f\b''') = string.
!

testSymbol
	| string |
	self assert: (self materialize: '#''foo''') = #foo.
	self assert: (self materialize: '#foo') = #foo
!

testTime
	| time |
	time := Time hour: 6 minute: 30 second: 15.
	self assert: (self materialize: 'Time[''06:30:15'']') = time.
!

testUnknownClasses
	| input object |
	input := 'FooBar { #foo : 1, #bar : true }'.
	self should: [ self materialize: input ] raise: STONReaderError.
	object := STON reader 
		acceptUnknownClasses: true; 
		on: input readStream; 
		next.
	self assert: object class equals: STON mapClass.
	self assert: (object at: #foo) equals: 1.
	self assert: (object at: #bar).
	self assert: (object at: STON classNameKey) equals: #FooBar
!

testUser
	| user |
	(user := STONTestUser new)
		username: 'john@foo.com';
		password: 'secret1'.
	self assert: (self materialize: 'STONTestUser{#username:''john@foo.com'',#password:''secret1'',#enabled:true}') = user
!

testUser2
	| user |
	(user := STONTestUser2 new)
		username: 'john@foo.com';
		password: 'secret1'.
	self assert: (self materialize: 'STONTestUser2{#username:''john@foo.com'',#password:''secret1'',#enabled:true}') = user
!

testWhitespace
	| whitespace |
	whitespace := { Character space. Character tab. Character cr. Character lf }.
	self assert: (self materialize: whitespace, '123') = 123
! !

Object subclass: #STONTestDomainObject
	instanceVariableNames: 'created modified integer float description color tags bytes boolean'
	package: 'STON-Tests'!
!STONTestDomainObject commentStamp!
STONTestDomainObject is used to support unit tests.

Instance Variables
	boolean:		<Boolean>
	bytes:			<ByteArray>
	color:			<Symbol>
	created:		<DateAndTime>
	description:	<String>
	float:			<Float>
	integer:		<Integer>
	modified:	<DateAndTime>
	tags:			<Array of: Symbol>!

!STONTestDomainObject methodsFor: 'accessing'!

boolean
	^ boolean
!

boolean: anObject
	boolean := anObject
!

bytes
	^ bytes
!

bytes: anObject
	bytes := anObject
!

color
	^ color
!

color: anObject
	color := anObject
!

created
	^ created
!

created: anObject
	created := anObject
!

description
	^ description
!

description: anObject
	description := anObject
!

float
	^ float
!

float: anObject
	float := anObject
!

integer
	^ integer
!

integer: anObject
	integer := anObject
!

modified
	^ modified
!

modified: anObject
	modified := anObject
!

tags
	^ tags
!

tags: anObject
	tags := anObject
! !

!STONTestDomainObject methodsFor: 'comparing'!

= anObject
	"Answer whether the receiver and anObject represent the same object."

	self == anObject
		ifTrue: [ ^ true ].
	self class = anObject class
		ifFalse: [ ^ false ].
	^ color = anObject color
		and: [ 
			modified = anObject modified
				and: [ 
					created = anObject created
						and: [ 
							description = anObject description
								and: [ 
									boolean = anObject boolean
										and: [ 
											(float closeTo: anObject float) 		"Use #closeTo: instead of #= to increase portability"
												and: [ 
													bytes = anObject bytes 
														and: [ 
															integer = anObject integer 
																and: [ tags = anObject tags ] ] ] ] ] ] ] ]
!

hash
	"Answer an integer value that is related to the identity of the receiver."

	^ color hash
		bitXor:
			(modified hash
				bitXor:
					(created hash
						bitXor:
							(description hash
								bitXor: (boolean hash bitXor: (float hash bitXor: (bytes hash bitXor: (integer hash bitXor: tags hash)))))))
! !

!STONTestDomainObject methodsFor: 'initialize-release'!

initialize
	created := modified := DateAndTime now.
! !

!STONTestDomainObject class methodsFor: 'instance creation'!

dummy
	^ self new
		integer: 999999 atRandom;
		float: 999 atRandom / Float pi;
		boolean: #(true false) atRandom;
		bytes: (ByteArray streamContents: [ :out | 32 timesRepeat: [ out nextPut: 255 atRandom ] ]);
		description: (String streamContents: [ :out | 16 atRandom timesRepeat: [ out nextPutAll: 'Blah' ] ]);
		color: #(#red #green #blue) atRandom;
		tags: (Array 
			with: #(#one #two #three) atRandom
 			with: #(#alpha #beta #gamma) atRandom 
			with: #(#low #medium #high) atRandom);
		yourself
! !

!STONTestDomainObject class methodsFor: 'ston-core'!

stonName
	^ #TestDomainObject
! !

Dictionary subclass: #STONTestMap
	instanceVariableNames: ''
	package: 'STON-Tests'!
!STONTestMap commentStamp!
STONTestMap is used to support unit tests.

I am a Dictionary but I don't print my elements during #printOn: to allow safe inspection of structures containing cycles that would otherwise lead to infinite loops.!

!STONTestMap methodsFor: 'printing'!

printElementsOn: stream
	stream
		nextPut: $(;
		nextPut: $#;
		print: self size;
		nextPut: $)
! !

!STONTestMap class methodsFor: 'instance creation'!

classTree
	^ self classTree: Object
!

classTree: topClass
	| map |
	map := IdentityDictionary new.
	topClass withAllSubclasses do: [ :eachClass | | info |
		(info := self new)
			at: #name put: eachClass name asString;
			at: #comment put: eachClass comment;
			at: #isMeta put: eachClass isMeta;
			at: #methods put: eachClass selectors.		
		map at: eachClass put: info ].
	map keysAndValuesDo: [ :eachClass :eachInfo |
		eachClass == topClass
			ifFalse: [ eachInfo at: #superclass put: (map at: eachClass superclass) ].
		eachInfo at: #subclasses put: (eachClass subclasses collect: [ :subClass | map at: subClass ]) ].
	^ map at: topClass
!

classTreeExtended
	^ self classTreeExtended: Object
!

classTreeExtended: topClass
	| map |
	map := IdentityDictionary new.
	topClass withAllSubclasses do: [ :eachClass | | info methodsInfo |
		(info := self new)
			at: #name put: eachClass name asString;
			at: #comment put: eachClass comment;
			at: #isMeta put: eachClass isMeta;
			at: #methods put: (methodsInfo := self new).
		eachClass methods do: [ :eachMethod | | methodInfo |
			(methodInfo := self new)
				at: #name put: eachMethod selector;
				at: #numArgs put: eachMethod numArgs;
				at: #class put: info.
			methodsInfo at: eachMethod selector put: methodInfo ].
		map at: eachClass put: info ].
	map keysAndValuesDo: [ :eachClass :eachInfo |
		eachClass == topClass 
			ifFalse: [ eachInfo at: #superclass put: (map at: eachClass superclass) ].
		eachInfo at: #subclasses put: (eachClass subclasses collect: [ :subClass | map at: subClass ]) ].
	^ map at: topClass
! !

!STONTestMap class methodsFor: 'ston-core'!

stonName
	^ #TestMap
! !

Object subclass: #STONTestUser
	instanceVariableNames: 'username password enabled'
	package: 'STON-Tests'!
!STONTestUser commentStamp!
STONTestUser is used to support unit tests.

Instance Variables
	enabled:		<Boolean>
	password:	<String>
	username:	<String>!

!STONTestUser methodsFor: 'accessing'!

enabled
	^ enabled
!

enabled: anObject
	enabled := anObject
!

password
	^ password
!

password: anObject
	password := anObject
!

username
	^ username
!

username: anObject
	username := anObject
! !

!STONTestUser methodsFor: 'comparing'!

= anObject
	"Answer whether the receiver and anObject represent the same object."

	self == anObject
		ifTrue: [ ^ true ].
	self class = anObject class
		ifFalse: [ ^ false ].
	^ username = anObject username and: [ password = anObject password and: [ enabled = anObject enabled ] ]
!

hash
	"Answer an integer value that is related to the identity of the receiver."

	^ username hash bitXor: (password hash bitXor: enabled hash)
! !

!STONTestUser methodsFor: 'initialize-release'!

initialize 
	super initialize.
	enabled := true
! !

!STONTestUser class methodsFor: 'instance creation'!

dummy
	"self dummy"
	
	| username password |
	username := String streamContents: [ :stream |
		stream << 'user'; print: 999 atRandom; << '@company'; print: 99 atRandom; << '.com' ].
	password := String streamContents: [ :stream |
		stream << 'secret'; print: 999 atRandom ].
	^ self new
		username: username;
		password: password;
		yourself
! !

!STONTestUser class methodsFor: 'ston-core'!

stonName
	^ #TestUser
! !

STONTestUser subclass: #STONTestUser2
	instanceVariableNames: ''
	package: 'STON-Tests'!
!STONTestUser2 commentStamp!
STONTestUser2 extends STONTestUser with explicit implementations of #fromSton: and #stonOn:!

!STONTestUser2 methodsFor: 'ston-core'!

fromSton: stonReader
	stonReader parseMapDo: [ :key :value |
		key = #username ifTrue: [ username := value ].
		key = #password ifTrue: [ password := value ].
		key = #enabled ifTrue: [ enabled := value ] ]
!

stonOn: stonWriter	
	stonWriter writeObject: self streamMap: [ :dictionary |
		dictionary
			at: #username put: username;
			at: #password put: password;
			at: #enabled put: enabled ]
! !

!STONTestUser2 class methodsFor: 'ston-core'!

stonName
	^ #TestUser2
! !

STONTestUser subclass: #STONTestUser3
	instanceVariableNames: ''
	package: 'STON-Tests'!
!STONTestUser3 commentStamp!
STONTestUser3 extends STONTestUser but wants nil instance variables to be written!

!STONTestUser3 methodsFor: 'ston-core'!

stonShouldWriteNilInstVars
	^ true
! !

!STONTestUser3 class methodsFor: 'ston-core'!

stonAllInstVarNames
	^ #(username password enabled)
!

stonName
	^ #TestUser3
! !

TestCase subclass: #STONTests
	instanceVariableNames: ''
	package: 'STON-Tests'!
!STONTests commentStamp!
STONTests tests the API offered by STON.!

!STONTests methodsFor: 'tests'!

testFromString
	| object |
	object := STON listClass withAll: { 1. 0. -1. true. false. nil }.
	self assert: (STON fromString: '[1,0,-1,true,false,nil]') = object
!

testPrettyPrinting
	| object |
	object := STONTestUser dummy.
	self assert: (STON fromString: (STON toStringPretty: object)) = object.
	object := STONTestDomainObject dummy.
	self assert: (STON fromString: (STON toStringPretty: object)) = object
!

testRoomExitCycles
	| model room1 room2 exit1 exit2 ston object |
	(room1 := STONTestMap new) at: #name put: 'Room 1'.
	(room2 := STONTestMap new) at: #name put: 'Room 2'.
	(exit1 := STONTestMap new)
		at: #name put: 'Exit 1';
		at: #origin put: room1;
		at: #destination put: room2.
	(exit2 := STONTestMap new)
		at: #name put: 'Exit 2';
		at: #origin put: room2;
		at: #destination put: room1.
	room1 at: #exit put: exit1.
	room2 at: #exit put: exit2.
	model := Array with: room1 with: room2.
	ston := STON toString: model.
	object := STON fromString: ston.
	"We can't just compare because this is a recursive datastructure"
	self assert: (object first at: #name) equals: 'Room 1'.
	self assert: (object second at: #name) equals: 'Room 2'.
	self assert: ((object first at: #exit) at: #name) equals: 'Exit 1'.
	self assert: ((object second at: #exit) at: #name) equals: 'Exit 2'.
	self assert: ((object first at: #exit) at: #origin) == object first.
	self assert: ((object first at: #exit) at: #destination) == object second.
	self assert: ((object second at: #exit) at: #origin) == object second.
	self assert: ((object second at: #exit) at: #destination) == object first.
	"Try writing again the parse model" 
	self assert: (STON toString: object) equals: ston
!

testToString
	| object |
	object := STON listClass withAll: { 1. 0. -1. true. false. nil }.
	self assert: (STON toString: object) = '[1,0,-1,true,false,nil]'
! !

!STONTests class methodsFor: 'utilities'!

fastReadFromFileNamed: path
	^ path asFileReference
		readStreamDo: [ :stream | 
			STON reader
				on: (ZnBufferedReadStream on: stream);
				optimizeForLargeStructures;
				next ]
!

fastWrite: object toFileNamed: path
	^ path asFileReference
		writeStreamDo: [ :fileStream | 
			ZnBufferedWriteStream
				on: fileStream
				do: [ :stream | 
					STON writer
						on: stream;
						optimizeForLargeStructures;
						nextPut: object ] ]
!

readFromFileNamed: path
	^ path asFileReference
		readStreamDo: [ :stream | 
			STON reader
				on: stream;
				next ]
!

write: object toFileNamed: path
	^ path asFileReference
		writeStreamDo: [ :stream | 
			STON writer
				on: stream;
				nextPut: object ]
! !

TestCase subclass: #STONWriteReadTests
	instanceVariableNames: ''
	package: 'STON-Tests'!
!STONWriteReadTests commentStamp!
STONWriteReadTests test serialization followed by materialization.!

!STONWriteReadTests methodsFor: 'private'!

materialize: string
	^ STON reader 
		on: string readStream;
		next
!

serialize: anObject
	^ String streamContents: [ :stream |
		STON writer 
			on: stream;
			nextPut: anObject ]
!

serializeAndMaterialize: object
	| serialization materialization |
	serialization := self serialize: object.
	materialization := self materialize: serialization.
	self assert: object equals: materialization
!

serializeAndMaterializeJsonMode: object
	| serialization materialization |
	serialization := self serializeJson: object.
	materialization := self materialize: serialization.
	self assert: object equals: materialization
!

serializeJson: anObject
	^ String streamContents: [ :stream |
		STON jsonWriter 
			on: stream;
			nextPut: anObject ]
! !

!STONWriteReadTests methodsFor: 'tests'!

testAssociations
	| associations |
	associations := OrderedCollection new.
	1 to: 10 do: [ :each |
		associations add: each -> each printString ].
	self serializeAndMaterialize: associations
!

testCharacters
	| characters |
	characters := STON listClass withAll: ($a to: $z), ($A to: $Z).
	self serializeAndMaterialize: characters
!

testCollections
	| collections |
	collections := STON listClass new.
		collections add: #(1 2 3);
		add: (OrderedCollection withAll: #(1 2 3));
		add: (Set withAll: #(1 2 3));
		add: (Dictionary new at: 1 put: 1; at: 2 put: 2; yourself).
	self serializeAndMaterialize: collections
!

testDatesAndTimes
	| datesAndTimes |
	datesAndTimes := STON listClass withAll: { 
		Time fromSeconds: 
		Time now asSeconds. 
		Date today. 
		DateAndTime now }.
	self serializeAndMaterialize: datesAndTimes
!

testDomainObject
	| object objects |
	object := STONTestDomainObject dummy.
	self serializeAndMaterialize: object.
	objects := STON listClass streamContents: [ :stream |
		10 timesRepeat: [ stream nextPut: STONTestDomainObject dummy ] ].
	self serializeAndMaterialize: objects.
	objects := STON mapClass new.
	10 timesRepeat: [ | newObject |
		newObject := STONTestDomainObject dummy.
		objects at: newObject integer put: newObject ].
	self serializeAndMaterialize: objects.
!

testEmpty
	| empty |
	empty := STON listClass new.
	self serializeAndMaterialize: empty.
	empty := STON mapClass new.
	self serializeAndMaterialize: empty.
!

testFloats
	| floats serialization materialization |
	floats := STON listClass withAll: ((-10 to: 10) collect: [ :each | each * Float pi ]).
	serialization := self serialize: floats.
	materialization := self materialize: serialization.
	self assert: floats size = materialization size.
	1 to: floats size do: [:index | | float |
		float := floats at: index.
		"Use #closeTo: instead of #= to increase portability"
		self assert: (float closeTo: (materialization at: index)) ]
!

testJsonMode
	| object |
	object := STON listClass withAll: {
		Float pi.
		'Hello World'.
		true.
		nil.
		STON listClass withAll: #( 1 2 3) asByteArray.
		STON mapClass new 
			at: 'x' put: 1; 
			at: 'y' put: 2; 
			yourself 
	}.
	self serializeAndMaterializeJsonMode: object
!

testOrderedDictionary
	"OrderedDictionary is special because it does not inherit from Dictionary.
	It might also not exist in some dialects, where this test could be skipped."
	
	| dictionaries orderedDictionaryClass orderedIdentityDictionaryClass |
	orderedDictionaryClass := Smalltalk at: #OrderedDictionary ifAbsent: [ Dictionary ].
	orderedIdentityDictionaryClass := Smalltalk at: #OrderedIdentityDictionary ifAbsent: [ IdentityDictionary ].
	dictionaries := STON listClass withAll: {
		orderedDictionaryClass new at: 1 put: 1; at: 2 put: 2; yourself.
		orderedDictionaryClass new at: #a put: 1; at: #b put: -2; at: #c put: 0; yourself.
		orderedDictionaryClass new.
		orderedIdentityDictionaryClass new at: 1 put: 1; at: 2 put: 2; yourself.
		orderedIdentityDictionaryClass new at: #a put: 1; at: #b put: -2; at: #c put: 0; yourself.
		orderedIdentityDictionaryClass new }.
	self serializeAndMaterialize: dictionaries
!

testPrimitives
	| primitives |
	primitives := STON listClass withAll: { true. false. nil }.
	self serializeAndMaterialize: primitives
!

testSmallDictionary
	"SmallDictionary is special because it does not inherit from Dictionary.
	It might also not exist in some dialects, where this test could be skipped."
	
	| dictionaries smallDictionaryClass |
	smallDictionaryClass := Smalltalk at: #SmallDictionary ifAbsent: [ Dictionary ].
	dictionaries := STON listClass withAll: {
		smallDictionaryClass new at: 1 put: 1; at: 2 put: 2; yourself.
		smallDictionaryClass new at: 1 put: 1; at: 2 put: 2; yourself.
		smallDictionaryClass new }.
	self serializeAndMaterialize: dictionaries
!

testSmallIntegers
	| integers |
	integers := STON listClass withAll: (-10 to: 10).
	self serializeAndMaterialize: integers
!

testStrings
	| strings |
	strings := Collection allSubclasses collect: [ :each | each name asString ].
	self serializeAndMaterialize: strings
!

testSymbols
	| symbols |
	self serializeAndMaterialize: #( #bytes #'' ).
	symbols := Collection allSubclasses collect: [ :each | each name ].
	self serializeAndMaterialize: symbols
!

testTextAndRunArray
	| texts |
	texts := { 
		'Text!!' asText. 
		(Text string: 'I am bold' attribute: TextEmphasis bold), ' and I am normal text'.
		Text new }.
	self serializeAndMaterialize: texts
!

testUser
	| user users |
	user := STONTestUser dummy.
	self serializeAndMaterialize: user.
	users := STON listClass streamContents: [ :stream |
		10 timesRepeat: [ stream nextPut: STONTestUser dummy ] ].
	self serializeAndMaterialize: users.
	users := STON mapClass new.
	10 timesRepeat: [ | newUser |
		newUser := STONTestUser dummy.
		users at: newUser username put: newUser ].
	self serializeAndMaterialize: users.
!

testUser2
	| user users |
	user := STONTestUser2 dummy.
	self serializeAndMaterialize: user.
	users := STON listClass streamContents: [ :stream |
		10 timesRepeat: [ stream nextPut: STONTestUser2 dummy ] ].
	self serializeAndMaterialize: users.
	users := STON mapClass new.
	10 timesRepeat: [ | newUser |
		newUser := STONTestUser2 dummy.
		users at: newUser username put: newUser ].
	self serializeAndMaterialize: users.
! !

STONWriteReadTests subclass: #STONLargeWriteReadTests
	instanceVariableNames: ''
	package: 'STON-Tests'!
!STONLargeWriteReadTests commentStamp!
STONLargeWriteReadTests test the optimalizations for large structures.!

!STONLargeWriteReadTests methodsFor: 'private'!

materialize: string
	^ STON reader
		on: string readStream;
		optimizeForLargeStructures;
		next
!

serialize: anObject
	^ String streamContents: [ :stream |
		STON writer 
			on: stream; 
			prettyPrint: true;
			optimizeForLargeStructures; 
			nextPut: anObject ]
!

serializeJson: anObject
	^ String streamContents: [ :stream |
		STON jsonWriter 
			on: stream; 
			prettyPrint: true;
			optimizeForLargeStructures; 
			nextPut: anObject ]
! !

STONWriteReadTests subclass: #STONWritePrettyPrinterReadTests
	instanceVariableNames: ''
	package: 'STON-Tests'!
!STONWritePrettyPrinterReadTests commentStamp!
STONWritePrettyPrinterReadTests tests pretty printed serialization followed by materialization.!

!STONWritePrettyPrinterReadTests methodsFor: 'private'!

serialize: anObject
	^ String streamContents: [ :stream |
		STON writer 
			on: stream; 
			prettyPrint: true;
			nextPut: anObject ]
!

serializeJson: anObject
	^ String streamContents: [ :stream |
		STON jsonWriter 
			on: stream; 
			prettyPrint: true;
			nextPut: anObject ]
! !

TestCase subclass: #STONWriterTests
	instanceVariableNames: ''
	package: 'STON-Tests'!
!STONWriterTests commentStamp!
STONWriterTests test serialization.!

!STONWriterTests methodsFor: 'private'!

serialize: anObject
	^ String streamContents: [ :stream |
		STON writer 
			on: stream;
			nextPut: anObject ]
!

serializeJson: anObject
	^ String streamContents: [ :stream |
		STON jsonWriter 
			on: stream; 
			nextPut: anObject ]
!

serializePretty: anObject
	^ String streamContents: [ :stream |
		STON writer 
			on: stream; 
			prettyPrint: true;
			nextPut: anObject ]
! !

!STONWriterTests methodsFor: 'tests'!

testAssociation
	self assert: (self serialize: 'foo' -> 1) =  '''foo'':1'.
	self assert: (self serialize: #bar -> 2) =  '''bar'':2'.
	self assert: (self serialize: 'foo bar' -> #ok) =  '''foo bar'':''ok'''.
	self assert: (self serialize: 123 -> 456) =  '123:456'
!

testBoolean
	self assert: (self serialize: true) = 'true'.
	self assert: (self serialize: false) = 'false'
!

testByteArray
	"No ByteArray in Amber"
	"self assert: (self serialize: #(1 2 3) asByteArray) = 'ByteArray[''010203'']'"
!

testCustomNewline
	| output |
	output := String streamContents: [ :out |
		(STON writer on: out)
			newLine: String lf;
			prettyPrint: true;
			nextPut: #( 1 ) ].
	self 
		assert: output 
		equals: ('[\	1\]' withCRs replaceAll: Character cr with: Character lf)
!

testDate
	| date |
	date := Date fromString: '2012/01/30 00:00:00'.
	self assert: (self serialize: date) = 'Date[''2012-01-30'']'
!

testDateAndTime
	| dateAndTime |
	dateAndTime := DateAndTime fromString: '2012/11/01 06:30:15'.
	self assert: (self serialize: dateAndTime) = 'DateAndTime[''2012-01-01T06:30:15+01:00'']'
!

testDictionary
	| collection |
	collection := STON mapClass new at: 1 put: 1; at: 2 put: 2; yourself.
	self assert: (self serialize: collection) = '{1:1,2:2}'.
	self assert: (self serialize: STON mapClass new) = '{}'.
!

testDictionaryWithComplexKeys
	| collection |
	collection := STON mapClass new at: true put: 1; at: #(foo) put: 2; yourself.
	self assert: (self serialize: collection) = '{true:1,[''foo'']:2}'.
!

testDoubleQuotedString
	| string |
	self assert: (self serializeJson: 'foo') = '"foo"'.
	self assert: (self serializeJson: 'FOO') = '"FOO"'.
	self assert: (self serializeJson: 'élève en Français') = '"\u00E9l\u00E8ve en Fran\u00E7ais"'.
	string := String withAll: { 
		$". $'. $\. Character tab. Character cr. Character lf.  Character newPage. Character backspace }.
	self assert: (self serializeJson: string) = '"\"\''\\\t\r\n\f\b"'.
!

testEmptyArrayPretty
	self assert: (self serializePretty: STON listClass new) equals: '[ ]'
!

testEmptyDictionaryPretty
	self assert: (self serializePretty: STON mapClass new) equals: '{ }'
!

testFloat
	"No Float in Amber"
	self assert: (self serialize: 1.5) = '1.5'.
	self assert: (self serialize: 0.0) = '0.0'.
	self assert: (self serialize: -1.5) = '-1.5'.
	self assert: ((self serialize: Float pi) beginsWith:  '3.14159').
	self assert: ((self serialize: 1/3) beginsWith:  '0.333').
	self assert: (self serialize: (10 raisedTo: 100) asFloat) = '1.0e100'.
	self assert: (self serialize: (10 raisedTo: -50) asFloat) = '1.0e-50'.
	self assert: (self serialize: (10 raisedTo: -50) asFloat negated) = '-1.0e-50'.
!

testIdentityDictionary
	| collection |
	collection := IdentityDictionary new at: 1 put: 1; at: 2 put: 2; yourself.
	self assert: (self serialize: collection) = 'IdentityDictionary{1:1,2:2}'.
	self assert: (self serialize: IdentityDictionary new) = 'IdentityDictionary{}'.
!

testInteger
	self assert: (self serialize: 1) = '1'.
	self assert: (self serialize: 0) = '0'.
	self assert: (self serialize: -1) = '-1'.
	self assert: (self serialize: 1234567890) = '1234567890'.
	self assert: (self serialize: -1234567890) = '-1234567890'
!

testIsSimpleSymbol
	self assert: (STON writer isSimpleSymbol: #foo).
	self assert: (STON writer isSimpleSymbol: #az).
	self assert: (STON writer isSimpleSymbol: #AZ).
	self assert: (STON writer isSimpleSymbol: #N0123456789).
	self assert: (STON writer isSimpleSymbol: #foo123).
	self assert: (STON writer isSimpleSymbol: #'Foo/Bar').
	self assert: (STON writer isSimpleSymbol: #'Foo.Bar').
	self assert: (STON writer isSimpleSymbol: #'Foo-Bar').
	self assert: (STON writer isSimpleSymbol: #'Foo_Bar').
	self assert: (STON writer isSimpleSymbol: #foo).
	self deny: (STON writer isSimpleSymbol: #'#^&$%')
!

testKeepingNewLines
	| input result output |
	input := 'line ending with CR', String cr, 
		'line ending with LF', String lf, 
		'line ending with CRLF', String crlf.
	output := '''line ending with CR', String crlf, 
		'line ending with LF', String crlf, 
		'line ending with CRLF', String crlf, ''''.
	result := String streamContents: [ :out |
		(STON writer on: out) newLine: String crlf; keepNewLines: true; nextPut: input ].
	self assert: result equals: output.
	output := '''line ending with CR', String cr, 
		'line ending with LF', String cr, 
		'line ending with CRLF', String cr, ''''.
	result := String streamContents: [ :out |
		(STON writer on: out) newLine: String cr; keepNewLines: true; nextPut: input ].
	self assert: result equals: output
!

testList
	self assert: (self serialize: (STON listClass withAll: #(1 2 3))) = '[1,2,3]'.
	self assert: (self serialize: STON listClass new) = '[]'.
	self assert: (self serialize: (STON listClass withAll: { 1. -1. 0. #foo. 'a b c'. true. false. nil })) = '[1,-1,0,''foo'',''a b c'',true,false,nil]'
!

testMap
	| map |
	(map := STON mapClass new)
		at: #foo put: 1;
		at: #bar put: 2.
	self assert: (self serialize: map) = '{#foo:1,#bar:2}'.
	self assert: (self serialize: STON mapClass new) = '{}'.
	map removeAll.
	map at: 'foo bar' put: #ok.
	self assert: (self serialize: map) = '{''foo bar'':#ok}'.
	map removeAll.
	map at: 123 put: 456.
	self assert: (self serialize: map) = '{123:456}'.
!

testNil
	self assert: (self serialize: nil) = 'nil'
!

testNull
	self assert: (self serializeJson: nil) equals: 'null'
!

testOrderedCollection
	| collection |
	collection := OrderedCollection with: 1 with: 2 with: 3.
	self assert: (self serialize: collection) = 'OrderedCollection[1,2,3]'.
	self assert: (self serialize: OrderedCollection new) = 'OrderedCollection[]'.
!

testPoint
	self assert: (self serialize: 1@2) = 'Point[1,2]'
!

testReferenceCycle
	| array |
	array := STON listClass with: 1 with: nil.
	array at: 2 put: array.
	self assert: (self serialize: array) = '[1,@1]'.
!

testReferenceSharing
	| array one |
	one := { #one }.
	array := STON listClass with: one with: one with: one.
	self assert: (self serialize: array) = '[[#one],@2,@2]'.
!

testReferenceSharingError
	| serializer array one |
	serializer := [ :object | 
		String streamContents: [ :stream |
			STON writer 
				on: stream;
				referencePolicy: #error; 
				nextPut: object ] ].
	one := { #one }.
	array := STON listClass with: one with: one with: one.
	self 
		should: [ (serializer value: array) = '[[#one],[#one],[#one]]' ] 
		raise: STONWriterError
!

testReferenceSharingIgnore
	| serializer array one |
	serializer := [ :object | 
		String streamContents: [ :stream |
			STON writer 
				on: stream;
				referencePolicy: #ignore; 
				nextPut: object ] ].
	one := { #one }.
	array := STON listClass with: one with: one with: one.
	self assert: (serializer value: array) = '[[#one],[#one],[#one]]'.
!

testRestrictedClassesInJsonMode
	self should: [ self serializeJson: 1@2 ] raise: STONWriterError.
	self should: [ self serializeJson: STONTestUser dummy ] raise: STONWriterError.
!

testString
	| string |
	self assert: (self serialize: 'foo') = '''foo'''.
	self assert: (self serialize: 'FOO') = '''FOO'''.
	self assert: (self serialize: 'élève en Français') = '''\u00E9l\u00E8ve en Fran\u00E7ais'''.
	string := String withAll: { 
		$". $'. $\. Character tab. Character cr. Character lf.  Character newPage. Character backspace }.
	self assert: (self serialize: string) = '''\"\''\\\t\r\n\f\b'''.
!

testSymbol
	"No Symbols in Amber - they are just String's"
	self assert: (self serialize: #foo) = '''foo'''.
	self assert: (self serialize: #FOO) = '''FOO'''.
	self assert: (self serialize: #bytes) = '''bytes'''.
	self assert: (self serialize: #'foo.bar') = '''foo.bar'''.
	self assert: (self serialize: #'foo-bar') = '''foo-bar'''.
	self assert: (self serialize: #'foo_bar') = '''foo_bar'''.
	self assert: (self serialize: #'foo/bar') = '''foo/bar'''.
	self assert: (self serialize: #'foo bar') = '''foo bar'''.
	self assert: (self serialize: #foo123) = '''foo123'''.
!

testSymbolAsString
	self assert: (self serializeJson: #foo) = '"foo"'.
	self assert: (self serializeJson: #'FOO') = '"FOO"'.
!

testTime
	| time |
	time := Time hour: 6 minute: 30 second: 15.
	self assert: (self serialize: time) = 'Time[''06:30:15'']'.
!

testUser
	| user |
	(user := STONTestUser new)
		username: 'john@foo.com';
		password: 'secret1'.
	self 
		assert: (self serialize: user)
		equals: 'TestUser{''username'':''john@foo.com'',''password'':''secret1'',''enabled'':true}'
!

testUser2
	| user |
	(user := STONTestUser2 new)
		username: 'john@foo.com';
		password: 'secret1'.
	self 
		assert: (self serialize: user)
		equals: 'TestUser2{''username'':''john@foo.com'',''password'':''secret1'',''enabled'':true}'
!

testUser3Nil
	| user |
	user := STONTestUser3 new.
	self 
		assert: (self serialize: user) 
		equals: 'TestUser3{''username'':nil,''password'':nil,''enabled'':true}'
!

testUserNil
	| user |
	user := STONTestUser new.
	self assert: (self serialize: user) equals: 'TestUser{''enabled'':true}'
! !

