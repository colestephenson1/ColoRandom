//querySelectors
var colorBoxes = document.querySelectorAll('.color-box');
var hexCodes = document.querySelectorAll('.hex-code');
var newPaletteButton = document.querySelector('.new-palette-button');
var savePaletteButton = document.querySelector('.save-palette-button');
var lockAndUnlockIcon = document.querySelectorAll('.unlock-icon');
var boxInfo = document.querySelector('.box-info')
var paletteContainer = document.querySelector('.palette-container')

var palette = new Palette();
var color = new Color();

window.addEventListener('load', displayNewPalette);
newPaletteButton.addEventListener('click', displayNewPalette);
paletteContainer.addEventListener('click', lockColor);


function paletteGenerator() {
  palette.newColorInstance(5);
};

function displayNewPalette(){
  if(palette.colors.length !== 0) {
    palette.colors = [];
  };
paletteGenerator();
  for(var i = 0; i < palette.colors.length; i++) {
    colorBoxes[i].style.background = palette.colors[i].hexCode;
    hexCodes[i].innerText = palette.colors[i].hexCode;
    lockAndUnlockIcon[i].id = palette.colors[i].hexCode;
  }; console.log(palette);
};



function lockColor(e){
  for (let i = 0; i < palette.colors.length; i++) {
    if (palette.colors[i].hexCode === e.target.id) {
      palette.colors[i].toggleLock();
    }
    if (palette.colors[i].locked === true) {
      lockAndUnlockIcon[i].src ="./assets/lock-icon.svg"
    } else {
      lockAndUnlockIcon[i].src="./assets/unlock-icon.svg"
    };
  };
};
//event listener on the box-info - look for a click
//match the hexcode from Color to the id of the hex-code class.
//find hex-code id via e.target

//when lock button is clicked, toggle the icon.
//
