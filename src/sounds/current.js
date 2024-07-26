//currently those song are now is playing
class Currently {
    constructor(){
        this.current = {}
        this.length = 0
        this.playStatus = false
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
    updateStatus(value){
        this.playStatus = value
    }
    getStatus(){
        return this.playStatus
    }
}

const current = new Currently()

export const status = current.current
export default current
