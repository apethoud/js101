var tileGrid;

tileGrid = document.querySelector('.tile-grid');

tileGrid.addEventListener('click', function(e){
  console.log("you clicked the tile grid");
  console.log(tileGrid);
  console.log(e);
});
