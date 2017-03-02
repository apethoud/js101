var tileGrid;

tileGrid = document.querySelector('.tile-grid');

tileGrid.addEventListener('click', function(e){
  // when you click a square:

    // check if one of that square's horizontal and vertical neighbors is empty. If not, do nothing. If so:
  var tile = e.target;
  var squareOne = document.querySelector('#s1');
  var squareTwo = document.querySelector('#s2');
  var squareThree = document.querySelector('#s3');
  var squareFour = document.querySelector('#s4');
  var squareFive = document.querySelector('#s5');
  var squareSix = document.querySelector('#s6');
  var squareSeven = document.querySelector('#s7');
  var squareEight = document.querySelector('#s8');
  var squareNine = document.querySelector('#s9');
  if(tile === squareOne){
    console.log("you clicked on square One!");
  }

      // add the visible number of the clicked square to the empty square, then remove the visible number from the clicked square.

      // toggle visibility of both squares.

});
