//currently those song are now is playing
class Currently {
    constructor(){
        this.current = {}
        this.length = 0
    }

    addValue(songData){
        if(!this.current[songData["title"]]) {
            this.current[songData["title"]] = songData
            this.length++
        }
    }
    
    removeValue(songData){
        if(this.current[songData["title"]]) {
            delete this.current[songData["title"]]
            this.length--
        }
    }
    getLength(){
        return this.length
    }
    reset(){
        this.current = {}
        this.length = 0
        this.playStatus = false
    }
    status(){
        return this.current
    }
}

const current = new Currently()

export default current
