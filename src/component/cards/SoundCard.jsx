import React, {useEffect, useState} from 'react';
import current, {status} from '../../sounds/current';
import { Icon, InlineIcon } from '@iconify/react';

function Sound({
    image,
    song,
    width= "4rem",
    height= "4rem"
}) {
    let songValue = 0
    const [value , setValue] = useState(songValue)
    const [color, setColor] = useState(false)

    const click = () =>{
        let me = value
        if(!status[song["title"]]){
            me == 0 ? songValue = 4 : songValue = me
            setValue(songValue)
            setColor(true)

            song.audio.play().autoplay = true
            song.audio.loop = true
            song.audio.volume = songValue/30
            current.addValue(song)
        }else{
            setColor(false)

            song.audio.pause()
            current.removeValue(song)
        }
    }
    const soundValueme = (e)=>{
      songValue = e.target.value
      song.audio.volume = songValue/20
      setValue(songValue)
    }
    
    
    return (
        <div className='flex flex-wrap flex-col te gap-3  justify-center items-center'>
            <div onClick={click}  className={`bg-cover h-[5rem] w-[5rem] rounded-3xl cursor-pointer flex  justify-center items-center 
             border-[2px] ${color ? "border-black" : "border-gray-60"} ${color ? "bg-white" : null}`} >

            <Icon icon={image} width={width} height={height}  style={{color: color ? "black" : "white"}} />
            </div>
            <input type="range" min={0} max={20} value={value} className='h-1 w-[5rem] cursor-pointer '
            onChange={soundValueme}
            />
        </div> 
    );
}

export default Sound;