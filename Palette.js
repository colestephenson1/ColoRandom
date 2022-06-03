class Palette {
  constructor() {
    this.id = Date.now();
    this.colors = [];
  };

  newColorInstance(colorCount) {
    for (var i = 0; i < colorCount; i++) {
      var newColor = new Color();
      if (this.colors.length < 5) {
        this.colors.push(newColor);
      };
    };
  };

  shuffleColorInstance() {
    var newColor = new Color();
    return newColor
  };
};
