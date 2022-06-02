class Palette {
  constructor() {
    this.id = Date.now();
    this.colors = [];
  };
  newColorInstance(colorCount) {
    for (var i = 0; i < colorCount; i++) {
      var newColor = new Color();
      this.colors.push(newColor);
    };
  };
};
