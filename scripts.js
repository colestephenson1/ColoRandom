//querySelectors
var colorBoxes = document.querySelectorAll('.color-box');
var newPaletteButton = document.querySelector('.new-palette-button');
var savePaletteButton = document.querySelector('.save-palette-button');
var box1 = document.querySelector('#box1');


window.addEventListener('load', randomHex)





//Functions
function randomHex() {
  var randomNum =  Math.floor(Math.random()*16777215).toString(16);
  box1.style.backgroundColor = randomNum;
};

var palette = new Palette();
palette.newColorInstance();
console.log(palette);
// function newColorInstance() {
// var newColor = new Color(randomHex());
// };
