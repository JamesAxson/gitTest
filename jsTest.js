/* freeCodeCamp
https://www.youtube.com/watch?v=PkZNo7MFNFg&t=2790s
*/

// number
var decimal = 8.5;
// console.log(decimal);

// remainder
var remainder = 11 % 3;
// console.log(remainder);

// += adds and assigns value, sames for -=, *=, /=
// ++ adds one to a variable, -- subtracts one to a variable
decimal += 5;
// console.log(decimal);

// strings
var firstName = "Sophie";
var lastName = "Hunter";
var fullName = firstName+" "+lastName;

// console.log(firstName+" "+lastName+": "+decimal);
// console.log(fullName);

// quotes in strings
var nickName = "Sophie \"The Bar\" Hunter";
var nickNameTwo = 'Sophie "The Bar" Hunter';
var nickNameThree = `Sophie 'The' "Bar" Hunter`;

// console.log(nickName);
// console.log(nickNameTwo);
// console.log(nickNameThree);

// Length of variable
var nickNameLength = nickName.length;
// console.log(nickNameLength);

// character in a string
var firstLetter = nickName[0]; // index starts at 0
var lastLetter = nickName[nickNameLength - 1]; // need to use -1 because the first letter is 0, so the 23rd letter is the 22nd index
// console.log(firstLetter);
// console.log(lastLetter);

// adding with +=
var mic = "mic";
mic += " check";

// console.log(mic);

/****
CODE OUTPUT
\'   single quote
\"   double quote
\\   backslash
\n   newline
\r   carriage return
\t   tab
\b   backspace
\f   form feed
 ****/

var backSlash = "Here is a \\";
var newLine = "Here is a \nnewline"; // having a space after \n puts a space at the start of the newline
var tab = "Here is a \n\tnewline with a tab";

// console.log(backSlash);
// console.log(newLine);
// console.log(tab);

// MADLIBS STYLE GAME //// MADLIBS STYLE GAME //// MADLIBS STYLE GAME //
// MADLIBS STYLE GAME //// MADLIBS STYLE GAME //// MADLIBS STYLE GAME //

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";

    return result;
}
// console.log(wordBlanks("dog", "big", "ran", "quickly"))

// ARRAYS //// ARRAYS //// ARRAYS //
// ARRAYS //// ARRAYS //// ARRAYS //

var ourArray = [["Regina", 2018], ["Jolene", 2017]];

// console.log(ourArray);
// console.log(ourArray[0][0]); // first element of first array within the array

ourArray[1][1] = 2018; // edit an element of the array, chaning 2017 to 2018
// console.log(ourArray[1]);

// push data to the end of an array
ourArray.push(["Fenchurch", 2020]);
// console.log(ourArray);

ourArray.push(['Kiki', 2023],['Sophie', 2024]);
// console.log(ourArray);

// pop arrays
var anotherArray = [1,2,3];
// console.log(anotherArray);
var popFromArray = anotherArray.pop(); // pops the last element of the array off

// console.log(anotherArray);
// console.log(popFromArray);

// shift arrays (removes first element, not last)
var shiftFromArray = anotherArray.shift();
// console.log(anotherArray);
// console.log(shiftFromArray);

// unshift pushes data to the beginning of the array
anotherArray.unshift(42);
// console.log(anotherArray);

// FUNCTIONS //// FUNCTIONS //// FUNCTIONS //
// FUNCTIONS //// FUNCTIONS //// FUNCTIONS //

function reusableFunction(a, b) {
    console.log(a - b);
}
// reusableFunction(10, 5);

/* Scope
Variables defined outside a function have GLOBAL scope.
    They can be used inside or outside functions.
Variables defined inside a function are NOT global.
    UNLESS you make a variable without 'var' in front of it.
*/

var myGlobal = 10;

function fun1() {
    oopsGlobal = 5; // since no 'var' in front of this, it is GLOBAL
}

function fun2() {
    var output = "";
    if(typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
// fun1();
// fun2();

// LOCAL SCOPE - local variable take precedent over global within functions, but do NOT overwrite

function localVariable() {
    var myVar = 5;
    console.log(myVar);
}
// localVariable();

// returning values from functions

function returnFun(a) {
    return a*5;
}
// console.log(returnFun(50));

// outputReturn = returnFun(25);
// console.log(outputReturn);

// queues
function nextInLine(arr, item) {
    arr.push(item)
    return arr.shift();
}
var testArr = [1,2,3,4,5];

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// booleans
function booleans() {
    return false;
}
// console.log(booleans());

// conditional logic
function ourIf(isItTrue) {
    if(isItTrue) {
        return "Yeah, true";
    }
    return "Naw, homie";
}
// console.log(ourIf(false));

/* EQUALITY && LOGICAL OPERATORS
== -> equal to (attempts to convert variables to matching types, so integer 3 would equal string '3')
!= -> not equal to
=== -> strict equality (includes variable type in consideration)
!== -> strict inequality
> -> greater than
< -> less than
>= -> greater than or equal to
<= -> less than or equalt to
&& -> AND
|| -> OR
*/

function equalityFun(a, b) {
    if(a >= b) {
        if(a == b) {
            return "They the same";
        }
        return "A is bigger"
    }
    return "B is bigger";
}
// console.log(equalityFun(-10,-10));

function elseFun(a, b) {
    if(a > b) {
        return "A is bigger";
    } else if (b > a) {
        return "B is bigger";
    } else {
        return "They the same";
    }
}
// console.log(elseFun(-10,-10));

function isLess(a, b) {
    return a < b;
}

// console.log(isLess(13, 8));

// more practice
var scoreNames = ["Hole-in-One", "Albatross", "Eagle", "Birdie", "Par", "Bogey", "Double-Bogey", "Triple-Bogey", "Just Give Up"];

function golfScore(par, strokes) {
    if(strokes == 1) {
        return scoreNames[0];
    } else if(strokes == par - 3) {
        return scoreNames[1];
    } else if(strokes == par - 2) {
        return scoreNames[2];
    } else if(strokes == par - 1) {
        return scoreNames[3];
    } else if(strokes == par) {
        return scoreNames[4];
    } else if(strokes == par + 1) {
        return scoreNames[5];
    } else if(strokes == par + 2) {
        return scoreNames[6];
    } else if(strokes == par + 3) {
        return scoreNames[7];
    } else {
        return scoreNames[8];
    }
}
// console.log(golfScore(4,8));

function improvedGolfScores(par, strokes) {
    if(strokes <= 0) {
        return "Invalid Score"
    }
    
    if(strokes == 1) {
        return scoreNames[0]; // need to return to work with the printTest function
    };
    
    const diff = strokes - par; // const cause diff can't change
    const index = diff + 4;
    if(index >= 0 && index <= scoreNames.length) {
        return scoreNames[index];
    } else {
        return scoreNames[scoreNames.length - 1];
    }
}

function printTest(i) {
    while(i < 10) {
        console.log(improvedGolfScores(5,i));
        i += 1;
    }
}
// printTest(1);

// SWITCH STATEMENTS //
// SWITCH STATEMENTS //

function switchFun(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "n/a";
            break;
    }
    return answer;
}

// console.log(switchFun(6));

// multiple inputs, same output
function switchTwo(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "high";
            break;
        default:
            answer = "n/a";
            break;
    }
    return answer;
}

// console.log(switchTwo(6));

function abTest(a, b) {
    if(a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// console.log(abTest(-2,2));

// CARD COUNTING //
// CARD COUNTING //

var count = 0; // global variable, because outside function

function cardCounting(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++; // ++ increments by one
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdBet = 'Hold';
    if(count > 0) {
        holdBet = 'Bet';
    }
    return count + " " + holdBet;
}

// cardCounting(2); cardCounting('K'); cardCounting(10); cardCounting('K'); cardCounting('A');
// console.log(cardCounting(4));

// OBJECTS //// OBJECTS //// OBJECTS //// OBJECTS //// OBJECTS //
// OBJECTS //// OBJECTS //// OBJECTS //// OBJECTS //// OBJECTS //

var ourDog = {
    "name": "Buster",
    "legs": 4,
    "toys": [],
};

// dot notation
var dogName = ourDog.name;
// console.log(dogName);

// bracket notation
var dogLegs = ourDog["legs"];
// console.log(dogLegs);

// updating object properties
ourDog.toys = ["Moose", "Kong"];
// console.log(ourDog.toys);

ourDog.toys.push("Bone");
// console.log(ourDog.toys);

// add new properties to objects
ourDog.friends = ["Eric", "Lizzy"];
// console.log(ourDog);

ourDog.deleteTest = "AHHHHHHH";
// console.log(ourDog);

// deleting properties
delete ourDog.deleteTest;
// console.log(ourDog);

// check if object has property
function checkObj(checkProp) {
    if(ourDog.hasOwnProperty(checkProp)) {
        return ourDog[checkProp];
    } else {
        return "n/a";
    }
}

// console.log(checkObj("toys"));

// using as a lookup (can replace swithc)
function phonyLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Axson",
        "bravo": "Butts",
        "charlie": "Carroll",
        "delta": "Dobben",
    };
    result = lookup[val];
    return result;
}

// console.log(phonyLookup("bravo"));

// manipulating complex objects //
// manipulating complex objects //
// manipulating complex objects //

// an array of objects, with arrays inside the objects
var myMusic = [
    // object 1
    {
        "artist": "Sophie Hunter",
        "song": "Mic Check",
        "playlists": [
            "By Myself",
            "2024 - 1994 = 30"
        ],
        "good": true
    },
    // object 2
    {
        "artist": "Amyl and The Sniffers",
        "song": "U Should Not Be Doing That",
        "playlists": [
            "By Myself",
            "2024 - 1994 = 30",
            "Sad eyes"
        ],
        "good": true
    }
];
// console.log(myMusic[1].playlists[2]);

// two objects with arrays inside another object
var myLibrary = {
    "Sohpie Hunter": {
        "genres": "rap",
        "songs": [
            "CVNT",
            "Mic Check",
            "Pop",
            "Fight!",
            "Own Devices"
        ]
    },
    "Amyl and The Sniffers": {
        "genres": "punk",
        "songs": [
            "Hertz",
            "U Should Not Be Doing That",
            "Guided by Angels",
            "Security"
        ]
    }
}
var libraryCopy = JSON.parse(JSON.stringify(myLibrary));
// console.log(libraryCopy);

function updateRecords(artist, prop, value) {
    if(value === "") {
        delete myLibrary[artist][prop];
    } else if(prop === "songs") {
        myLibrary[artist][prop] = myLibrary[artist][prop] || [];
        myLibrary[artist][prop].push(value);
    } else {
        myLibrary[artist][prop] = value;
    }
    return myLibrary;
}
updateRecords("Amyl and The Sniffers", "genres", "punk rock");
// console.log(JSON.parse(JSON.stringify(myLibrary)));


//WHILE AND FOR LOOPS//
//WHILE AND FOR LOOPS//

var whileArray = [];
var i = 0;
while(i <= 4) {
    whileArray.push(i);
    i++;
}
// console.log(whileArray);

var forArray = [];
for(var i = 0; i <= 4; i++) {
    forArray.push(i);
}
// console.log(forArray);

var forForArray = [];
for(i = 0; i <= 10; i += 2) {
    forForArray.push(i);
}
// console.log(forForArray);

var backwardsForArray = [];
for(i = 10; i >= 0; i -= 2) {
    backwardsForArray.push(i);
}
// console.log(backwardsForArray);

var addForArray = [1,2,3,4,5];
var totalForArray = 0;
for(i = 0; i < addForArray.length; i++) {
    totalForArray += addForArray[i];
}
// console.log(totalForArray);

// nested for loops
var nestedForArray = [];
for(i = 0; i < 3; i++) {
    for(j = 0; j < 3; j++) {
        nestedForArray.push([i, j]);
    }
}
console.log(nestedForArray);

function sumNested(arr) {
    var sum = [];

    for(var i = 0; i < arr.length; i++) {
        sum[i] = 0; //initialize the sum
        for(var j = 0; j < arr[i].length; j++) {
            sum[i] += arr[i][j];
        }
    }
    return sum;
}
console.log(sumNested(nestedForArray));