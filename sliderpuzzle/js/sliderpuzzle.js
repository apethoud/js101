var tileGrid = document.querySelector('.tile-grid');
var victoryText = document.querySelector('.victory');
var numberList = ['1','2','3','4','5','6','7','8'];

var squareOne = document.querySelector('#s1');
var squareTwo = document.querySelector('#s2');
var squareThree = document.querySelector('#s3');
var squareFour = document.querySelector('#s4');
var squareFive = document.querySelector('#s5');
var squareSix = document.querySelector('#s6');
var squareSeven = document.querySelector('#s7');
var squareEight = document.querySelector('#s8');
var squareNine = document.querySelector('#s9');

function switchTiles(a,b){
  var numberInA = a.firstElementChild.textContent;
  var numberInB = b.firstElementChild.textContent;
  b.firstElementChild.textContent = numberInA;
  a.firstElementChild.textContent = "";
  a.classList.toggle('invisible');
  b.classList.toggle('invisible');
}

function randomizeOrder(){
  var len = numberList.length;

  for(i = len - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = numberList[i];
    numberList[i] = numberList[j];
    numberList[j] = temp;
  }
}

tileGrid.addEventListener('click', function(e){
  // when you click a square:

    // check if one of that square's horizontal and vertical neighbors is empty. If not, do nothing. If so:
  var clickedTile = e.target;

  if(clickedTile === squareOne){
    if(squareTwo.classList.contains('invisible')){
      switchTiles(squareOne,squareTwo);
    }
    if(squareFour.classList.contains('invisible')){
      switchTiles(squareOne,squareFour);
    }
  }

  if(clickedTile === squareTwo){
    if(squareOne.classList.contains('invisible')){
      switchTiles(squareTwo,squareOne);
    }
    if(squareThree.classList.contains('invisible')){
      switchTiles(squareTwo,squareThree);
    }
    if(squareFive.classList.contains('invisible')){
      switchTiles(squareTwo,squareFive);
    }
  }

  if(clickedTile === squareThree){
    if(squareTwo.classList.contains('invisible')){
      switchTiles(squareThree,squareTwo);
    }
    if(squareSix.classList.contains('invisible')){
      switchTiles(squareThree,squareSix);
    }
  }

  if(clickedTile === squareFour){
    if(squareOne.classList.contains('invisible')){
      switchTiles(squareFour,squareOne);
    }
    if(squareFive.classList.contains('invisible')){
      switchTiles(squareFour,squareFive);
    }
    if(squareSeven.classList.contains('invisible')){
      switchTiles(squareFour,squareSeven);
    }
  }

  if(clickedTile === squareFive){
    if(squareTwo.classList.contains('invisible')){
      switchTiles(squareFive,squareTwo);
    }
    if(squareFour.classList.contains('invisible')){
      switchTiles(squareFive,squareFour);
    }
    if(squareSix.classList.contains('invisible')){
      switchTiles(squareFive,squareSix);
    }
    if(squareEight.classList.contains('invisible')){
      switchTiles(squareFive,squareEight);
    }
  }

  if(clickedTile === squareSix){
    if(squareThree.classList.contains('invisible')){
      switchTiles(squareSix,squareThree);
    }
    if(squareFive.classList.contains('invisible')){
      switchTiles(squareSix,squareFive);
    }
    if(squareNine.classList.contains('invisible')){
      switchTiles(squareSix,squareNine);
    }
  }

  if(clickedTile === squareSeven){
    if(squareFour.classList.contains('invisible')){
      switchTiles(squareSeven,squareFour);
    }
    if(squareEight.classList.contains('invisible')){
      switchTiles(squareSeven,squareEight);
    }
  }

  if(clickedTile === squareEight){
    if(squareFive.classList.contains('invisible')){
      switchTiles(squareEight,squareFive);
    }
    if(squareSeven.classList.contains('invisible')){
      switchTiles(squareEight,squareSeven);
    }
    if(squareNine.classList.contains('invisible')){
      switchTiles(squareEight,squareNine);
    }
  }

  if(clickedTile === squareNine){
    if(squareSix.classList.contains('invisible')){
      switchTiles(squareNine,squareSix);
    }
    if(squareEight.classList.contains('invisible')){
      switchTiles(squareNine,squareEight);
    }
  }

      // check to see if all the tiles are in the correct order. If so, indicate the win. Also insert a reset button to reset the grid.

  if(squareOne.firstElementChild.textContent == 1 &&
     squareTwo.firstElementChild.textContent == 2 &&
     squareThree.firstElementChild.textContent == 3 &&
     squareFour.firstElementChild.textContent == 4 &&
     squareFive.firstElementChild.textContent == 5 &&
     squareSix.firstElementChild.textContent == 6 &&
     squareSeven.firstElementChild.textContent == 7 &&
     squareEight.firstElementChild.textContent == 8){
    victoryText.classList.toggle('hidden');
  }

});
