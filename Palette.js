class Palette {
  constructor() {
    this.id = Date.now();
    this.colors = [];
    this.isSaved = false;
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

  changeSavedState() {
    this.isSaved = true;
  };

  resetSavedState(){
    this.isSaved = false
  };

  updateID(){
    this.id = Date.now()
  };
};
