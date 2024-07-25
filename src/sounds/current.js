//currently those song are now is playing
class Currently {
    constructor(){
        this.current = {}
    }

    addValue(songData){
        if(!this.current[songData["title"]]) this.current[songData["title"]] = songData
    }
    
    removeValue(songData){
        if(this.current[songData["title"]]) delete this.current[songData["title"]]
    }
}

const current = new Currently()

export const status = current.current
export default current
