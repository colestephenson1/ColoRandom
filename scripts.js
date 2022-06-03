//querySelectors
var colorBoxes = document.querySelectorAll('.color-box');
var hexCodes = document.querySelectorAll('.hex-code');
var newPaletteButton = document.querySelector('.new-palette-button');
var savePaletteButton = document.querySelector('.save-palette-button');
var lockAndUnlockIcon = document.querySelectorAll('.unlock-icon');
var paletteContainer = document.querySelector('.palette-container');
var miniColorBoxes = document.querySelectorAll('.mini-color-box');

//global variables
var palette = new Palette();
var color = new Color();

//event listeners
window.addEventListener('load', displayNewPalette);
newPaletteButton.addEventListener('click', displayNewPalette);
paletteContainer.addEventListener('click', lockColor);
savePaletteButton.addEventListener('click', savePalette);

//functions
function paletteGenerator() {
  palette.newColorInstance(5);
};

function displayNewPalette() {
  shuffleColor();
  paletteGenerator();
    for(var i = 0; i < palette.colors.length; i++) {
      colorBoxes[i].style.background = palette.colors[i].hexCode;
      hexCodes[i].innerText = palette.colors[i].hexCode;
      lockAndUnlockIcon[i].id = palette.colors[i].hexCode;
    };
  console.log(palette);
};

function lockColor(e) {
  for (let i = 0; i < palette.colors.length; i++) {
    if (palette.colors[i].hexCode === e.target.id) {
      palette.colors[i].toggleLock();
    }
    if (palette.colors[i].locked === true) {
      lockAndUnlockIcon[i].src ="./assets/lock-icon.svg";
    } else {
      lockAndUnlockIcon[i].src="./assets/unlock-icon.svg";
    };
  };
};

function shuffleColor() {
  for (let i = 0; i < palette.colors.length; i++) {
    if (!palette.colors[i].locked) {
      var shuffleColor = palette.shuffleColorInstance();
      palette.colors.splice(i, 1, shuffleColor);
    };
  };
};

function savePalette() {
  var paletteToSave = [];
  for (var i = 0; i < palette.colors.length; i++) {
    paletteToSave.push(palette.colors[i].hexCode);
  };
  renderSavedPalette(paletteToSave);
  console.log(paletteToSave);
};

function renderSavedPalette(savedPalette) {
  console.log(savedPalette);
  for (var i = 0; i < savedPalette.length; i++) {
    miniColorBoxes[i].style.background = savedPalette[i];
  };
};
