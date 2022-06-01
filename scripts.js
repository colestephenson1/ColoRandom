//querySelectors
var colorBoxes = document.querySelectorAll('.color-box');
var hexCodes = document.querySelectorAll('.hex-code');
var newPaletteButton = document.querySelector('.new-palette-button');
var savePaletteButton = document.querySelector('.save-palette-button');
var lockAndUnlockIcon = document.querySelector('#icon1');
// var box1 = document.querySelector('#box1');
// var box2 = document.querySelector('#box2');


window.addEventListener('load', randomHex);
newPaletteButton.addEventListener('click', makeNewPalette);
lockAndUnlockIcon.addEventListener('click', switchIcon)





//Functions
function randomHex() {
  for (var i = 0; i < colorBoxes.length; i++) {
    var randomNum =  Math.floor(Math.random()*16777215).toString(16);
    colorBoxes[i].style.background = `#${randomNum}`;
    hexCodes[i].innerText = `#${randomNum}`;
  };
};

function makeNewPalette() {
  randomHex();
};

function switchIcon() {
  if (color.locked) {
  lockAndUnlockIcon.src ="./assets/lock-icon.svg";
} else {
  lockAndUnlockIcon.src ="./assets/unlock-icon.svg"
    };
  };

var palette = new Palette();
palette.newColorInstance();
console.log(palette);
// function newColorInstance() {
// var newColor = new Color(randomHex());
// };
