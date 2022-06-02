function randomHex() {
  var randomNum =  Math.floor(Math.random()*16777215).toString(16);
return `#${randomNum}`
};

class Palette {
    constructor() {
    this.id = Date.now();
    this.colors = [];
  };
  newColorInstance() {
  var newColor = new Color(randomHex());
  this.colors.push(newColor);
  };
};
