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


// Largest of Four

function largestOfFour(arr) {
	// use two nested for loops to iterate through each array in the set
  for (i = 0; i < arr.length; i++) {
  // use a blank variable to capture the larger of each a/b comparison as it iterates
  	var largest = 0;
  	for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
      	largest = arr[i][j];
      }
    }
    // at the end of each array, set arr[i] to the value of the largest number
    arr[i] = largest;
    // repeat on the next array in the set until all arrays have been changed
  }
  return arr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
