//querySelectors
var colorBoxes = document.querySelectorAll('.color-box');
var hexCodes = document.querySelectorAll('.hex-code');
var newPaletteButton = document.querySelector('.new-palette-button');
var savePaletteButton = document.querySelector('.save-palette-button');
var lockAndUnlockIcon = document.querySelector('#icon1');

var palette = new Palette();


window.addEventListener('load', displayPaletteTest);
newPaletteButton.addEventListener('click', displayPaletteTest);

function paletteTest() {
palette.newColorInstance();
palette.newColorInstance();
palette.newColorInstance();
palette.newColorInstance();
palette.newColorInstance();
};

function displayPaletteTest(){
  paletteTest();
  for(var i = 0; i < palette.colors.length; i++) {
    colorBoxes[i].style.background = palette.colors[i].hexCode;
    hexCodes[i].innerText = palette.colors[i].hexCode;
  } console.log(palette);
};
