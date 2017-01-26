// Reverse a string

var str = "My dog is a scottish terrier";

var myArray = str.split(" ");
console.log(myArray);

var myArray = myArray.reverse();
console.log(myArray);

var str = myArray.join(" ");
console.log(str);


// Factorialize a number

function factorialize(num) {
	var result = 1;
	for (i = 1; i <= num; i++) {
  	result = result * i;
  }
  return result;
}

console.log(factorialize(5));


// Find the length of the longest word in a string

function findLongestWord(str) {
	// use .split to split the str into an array
  var myWords = str.split(" ");
  var word = "";
  // use a for loop and if statement to compare myWords[i].length
  for (i = 0; i < myWords.length; i++) {
    if (word.length < myWords[i].length) {
    	word = myWords[i];
    }
  }
  return word.length;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
