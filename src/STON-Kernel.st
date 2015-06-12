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

!Character class methodsFor: 'not yet classified'!

fromSton: stonReader
	^ stonReader parseListSingleton first
! !

Dictionary subclass: #IdentityDictionary
	instanceVariableNames: ''
	package: 'STON-Kernel'!

