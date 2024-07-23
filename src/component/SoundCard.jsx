import React, {useEffect, useState} from 'react';
import current, {status} from '../sounds/current';

function Sound({
    image,
    song,
}) {
    let songValue = 0
    const [value , setValue] = useState(songValue)

    const click = () =>{
        if(!status[song["title"]]){
            songValue = 4
            setValue(songValue)

            song.audio.play().autoplay = true
            song.audio.loop = true
            song.audio.volume = songValue/30
            current.addValue(song)
        }
    }
    const soundValueme = (e)=>{
      songValue = e.target.value
      song.audio.volume = songValue != 0 ? songValue/20 : 0.0
    }

    
    return (
        <div className='flex flex-wrap flex-col te gap-3  justify-center items-center'>
            <div onClick={click}  className='bg-cover h-[5rem] w-[5rem] rounded-xl cursor-pointer' style={{
                    backgroundImage: `url(${image})`,
                }}></div>
            <input type="range" min={0} max={20} value={value} className='h-1.5 w-[5rem] cursor-pointer '
            onChange={soundValueme}
            />
        </div>
    );
}

export default Sound;