class Color {
    constructor(){
        this.hexCode = this.randomHex()
        this.locked = false;
    }

    toggleLock(){
        if (!this.locked) {
            this.locked = true
        } else
            this.locked = false
    }

    randomNum(array) {        
        return Math.floor(Math.random() * array.length)     
    } 

    randomHex(){
        var hex = `#`
        var hexes = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        for (let i = 0; i < 6; i++) {
            hex += hexes[this.randomNum(hexes)]  
        }    
        return hex
    }
}