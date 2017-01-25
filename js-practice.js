function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line
  result += "My " + myNoun + " was really " + myAdjective + " and " + myVerb + " very " + myAdverb + ".";
  // Your code above this line
  return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));



var myVar;
myVar = "catfish";
var myNum = 15;
var myRemainder = 100 % 15;
var x = 2;
if (x > 3) {
 console.log("Greater than 3!");
}
var myArray = [1, "fruit", true, null, undefined, ];
var wordOne = "car";
var wordTwo = "truck";
var wordThree = "train";
function threeWords(x, y, z) {
  return x + y + z;
}
console.log(threeWords(wordOne, wordTwo, wordThree));

var myPar;
var myStrokes;

function myDiff (myPar, myStrokes) {
  var result;
  result = myStrokes - myPar;
}

function myScore (myDiff) {
  if (myDiff <= 2) {
    console.log("Eagle");
  }
}

myScore(7, 2);

if (myScore <= -2) {
  console.log("Eagle");
}

// My Answer for FizzBuzz

// Part 1

var myArray = [];
var myAdd;
var myRemainderOne;
var myRemainderTwo;
for (var i = 1; i < 101; i++) {
	myAdd = i;
  myRemainderOne = myAdd % 3;
  myRemainderTwo = myAdd % 5;
  if (myRemainderOne === 0) {
  	myAdd = "Fizz";
  } else if (myRemainderTwo === 0) {
  	myAdd = "Buzz";
  }
	myArray.push(myAdd);
}
console.log(myArray);

// Part 2

var myArray = [];
var myAdd;
var myRemainderOne;
var myRemainderTwo;
for (var i = 1; i < 101; i++) {
	myAdd = i;
  myRemainderOne = myAdd % 3;
  myRemainderTwo = myAdd % 5;
  if (myRemainderOne === 0 && myRemainderTwo === 0) {
 		myAdd = "FizzBuzz";
  } else if (myRemainderOne === 0) {
  	myAdd = "Fizz";
  } else if (myRemainderTwo === 0) {
  	myAdd = "Buzz";
  }
	myArray.push(myAdd);
}
console.log(myArray);

// Extra Credit Triangle Puzzle

// Answer 1

var myArray = [];
var mySymbol;
for (var i = 1; i < 8; i++) {
	mySymbol = i;
  mySymbol = "#";
  myArray.push(mySymbol);
  console.log(myArray);
}

// Answer 2

var myString = "";
for (var p = 1; p < 8; p++) {
	myString = "";
	for (var i = 0; i !== p; i++) {
		myString = myString + "#";
    // Can also be myString += "#"; -called a compound assignment
	}
	console.log(myString);
}

// Find Akira

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
// Only change code below this line
	var profileFound = false;
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      profileFound = true;
      if (contacts[i].hasOwnProperty(prop)) {
       	console.log(contacts[i][prop]);
      } else {
        console.log("Error: The property", prop, "doesn't exist for", name, ".");
      }
    }
  }
  if (profileFound === false) {
  	console.log("Error: The name", name, "doesn't exist.");
  }
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");


// Constructor practice

var Student = function (name, age, subject) {
	this.name = name,
  this.age = age,
  this.subject = subject
}

var me = new Student("Chase", 23, "Math");
var other = new Student("Eric", 21, "Tai Chi");

console.log(me);
console.log(other);


// Map practice

var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(currentValue, index, array){
  return currentValue * 4;
});
console.log(timesFour); // returns [4, 8, 12]


// Map practice #2

var oldArray = [1,2,3,4,5];
var newArray = oldArray.map(function(currentValue){
	return currentValue + 3;
});

console.log(newArray);;

// Filter practice

var oldArray = [4, 5, 10, 12, 15, 7];
var newArray = oldArray.filter(function(val){
	return val % 5 === 0;
});

console.log(newArray);;


// Sort practice

var array = [1, 12, 21, 2];
array.sort(function(a, b) {
  return a - b;

    });

console.log(array);


// Reduce practice

var myArray = [4,5,6,7,8];
var singleVal = 0;

singleVal = myArray.reduce(function(accumulator, currentVal) {
	return accumulator + currentVal;
})

console.log(singleVal); // Returns 30 (all the numbers added together)

// If i did "return accumulator * currentVal", then it would multiply all the numbers together


// Functional Programming practice

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955  },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727  },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642  },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934  },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630  },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543  },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947  },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979  },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852  },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905  },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968  },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909  }
];

// console.log(inventors[2].year);
// Array.prototype.filter()
//1. Filter the list of inventors for those who were born in the 1500's

var bornIn = inventors.filter(function(val){
	return val.year < 1600 && val.year >= 1500;
});

// console.log(bornIn);

// Array.prototype.map()
//2. Give us an array of the inventors' first and last names

var firstLast = inventors.map(function(currentValue){
	return currentValue.first + " " + currentValue.last;
});

// console.log(firstLast);

// Array.prototype.sort()
//3. Sort the inventors by birthdate, oldest to youngest

var oldToYoung = inventors.sort(function(a, b){
	return a.year - b.year;
});

// console.log(oldToYoung);

//Array.prototype.reduce()
//4. How many years did all the inventors live?

var totalYears = inventors.reduce(function(a, b){
	// var lifeSpanA = a.passed - a.year;
  // var lifeSpanB = b.passed - b.year;
  // return lifeSpanA + lifeSpanB;
  // console.log((a.passed - a.year) + (b.passed - b.year));
  return a + (b.passed - b.year);
}, 0);

console.log(totalYears);
