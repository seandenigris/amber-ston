Smalltalk createPackage: 'STON-Kernel'!
Set subclass: #Bag
	instanceVariableNames: ''
	package: 'STON-Kernel'!

String subclass: #Character
	instanceVariableNames: ''
	package: 'STON-Kernel'!
!Character commentStamp!
This is a hack to support transport of Characters in STON.
It represents stings with only one element ie. self size == 1.!

!Character class methodsFor: 'STON'!

fromSton: stonReader
	^ stonReader parseListSingleton first
! !

Date subclass: #DateAndTime
	instanceVariableNames: ''
	package: 'STON-Kernel'!

!DateAndTime class methodsFor: 'STON'!

fromSton: stonReader
	| stream |
	(stream := stonReader parseListSingleton readStream).
	^ self fromString: stream contents
! !

Dictionary subclass: #IdentityDictionary
	instanceVariableNames: ''
	package: 'STON-Kernel'!

!Number class methodsFor: '*STON-Kernel'!

fromString: aString
	<return Number(aString)>
! !

