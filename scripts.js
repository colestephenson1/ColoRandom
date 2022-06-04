//querySelectors
var colorBoxes = document.querySelectorAll('.color-box');
var hexCodes = document.querySelectorAll('.hex-code');
var newPaletteButton = document.querySelector('.new-palette-button');
var savePaletteButton = document.querySelector('.save-palette-button');
var lockAndUnlockIcon = document.querySelectorAll('.unlock-icon');
var paletteContainer = document.querySelector('.palette-container');
var miniColorBoxes = document.querySelectorAll('.mini-color-box');
var savedPaletteSection = document.querySelector('.saved-palettes');
var miniColorContainer = document.querySelector('.mini-color-container')

//global variables
var palette = new Palette();
var color = new Color();
var paletteToSave = [];

//event listeners
window.addEventListener('load', displayNewPalette);
newPaletteButton.addEventListener('click', displayNewPalette);
paletteContainer.addEventListener('click', lockColor);
savePaletteButton.addEventListener('click', savePalette);
savedPaletteSection.addEventListener('click', deleteSavedPalette)

//functions
function paletteGenerator() {
  palette.updateID();
  palette.newColorInstance(5);
};

function displayNewPalette() {
  palette.resetSavedState();
  paletteGenerator();
  shuffleColor();
    for(var i = 0; i < palette.colors.length; i++) {
      colorBoxes[i].style.background = hexCodes[i].innerText = lockAndUnlockIcon[i].id  = palette.colors[i].hexCode;
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

function addNewMiniBox() {
  var newMiniBox =
  `<div class="mini-color-container">
    <div class="mini-color-box" id="0" style="background: ${palette.colors[0].hexCode};">
    </div>
    <div class="mini-color-box" id="1" style="background: ${palette.colors[1].hexCode};">
    </div>
    <div class="mini-color-box" id="2" style="background: ${palette.colors[2].hexCode};">
    </div>
    <div class="mini-color-box" id="3" style="background: ${palette.colors[3].hexCode};">
    </div>
    <div class="mini-color-box" id="4" style="background: ${palette.colors[4].hexCode};">
    </div>
    <img class="trash-bin" id="trashIcon" src="assets/trash-can-icon.svg">
    `
    savedPaletteSection.innerHTML += newMiniBox;
};

function savePalette() {
  if (palette.isSaved) {
    return;
  };
  paletteToSave.push(palette);
  palette.changeSavedState();
  addNewMiniBox();
};

function deleteSavedPalette(e) {
  if (e.target.classList.contains("trash-bin")) {
      e.target.closest("div").remove();
  };
};