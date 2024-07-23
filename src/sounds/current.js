//currently those song are now is playing
class Currently {
    constructor(){
        this.current = {}
    }

    addValue(songData){
        if(!this.current[songData["title"]]) this.current[songData["title"]] = songData
    }

}

const current = new Currently()

export const status = current.current
export default current
