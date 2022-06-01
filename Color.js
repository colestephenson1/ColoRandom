class Color {
    constructor(randomNum){
        this.hexCode = randomNum;
        // this.id = randomNum;
        this.locked = false;
    };
    toggleLock(){
        if (!this.locked) {
            this.locked = true
        } else
            this.locked = false
    };
};
