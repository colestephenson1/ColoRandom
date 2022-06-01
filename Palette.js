class Palette {
    constructor() {
    this.id = Date.now();
    this.colors = [];
  };
  newColorInstance() {
  var newColor = new Color(randomHex());
  this.colors.push(newColor);
  console.log(this.colors);
  };
};
