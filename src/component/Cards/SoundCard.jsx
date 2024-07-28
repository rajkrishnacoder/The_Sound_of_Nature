import React, {useEffect, useState} from 'react';
import current from '../../sounds/current';
import { Icon} from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseLength, decreaseLength, resetSet } from '../../app/currentSlice';

function Sound({
    image,
    song,
    width= "85%",
    height= "85%"
}) {
// redux state managers 
    const dispatch = useDispatch()
    const state = useSelector(state => state.currentState)

// importent constant and other's variable for state and other's management
    let songValue = 0
    const [value , setValue] = useState(songValue)
    const [color, setColor] = useState(false)
    let status = current.status()

// play and pause for indivisual's buttons
    const click = () =>{
        let me = value // after pausing soundm, this variable will save the volume of your sound for next time play

        if(!status[song["title"]]){
            me == 0 ? songValue = 4 : songValue = me
            setValue(songValue)
            setColor(true)

            song.audio.currentTime = 0
            song.audio.play().autoplay = true
            song.audio.loop = true
            song.audio.volume = songValue/30
            current.addValue(song)
            dispatch(increaseLength()) // this is for redux state management;
        }else{
            setColor(false)
            
            song.audio.pause()
            current.removeValue(song)
            dispatch(decreaseLength()) // this is for redux state management;
        }
    }

// volume up and down controller
    const soundValueme = (e)=>{
      songValue = e.target.value  // resong using songValue instant of useEffect, becouse it's more acurate for volume
      song.audio.volume = songValue/20 // converting range value into volume standard 1.00 for volume up and down;
      setValue(songValue) // for dome updation on screen
    }

// on clicking reset button settting all the state in default
    useEffect(()=>{
        songValue = 0
        setColor(false)
        setValue(songValue)

        dispatch(resetSet())//resetting resetAll state for next time use;
    }, [state.resetAll])
    
    return (
        <div className='flex flex-wrap flex-col te gap-3  justify-center items-center'>
            <div onClick={click}  className={`bg-cover domHelper h-[5rem] w-[5rem] rounded-3xl cursor-pointer flex  justify-center items-center 
             border-[2px] ${color ? "border-none" : "border-gray-60"} ${color ? "bg-white" : null}
             sm:h-20 sm:w-20 md:h-24 md:w-24 `}>

            <Icon icon={image} width={width} height={height}  style={{color: color ? "black" : "white"}} /> 
            </div>
            <input type="range" min={0} max={20} value={value} className='h-1 w-[5rem] sm:w-20  md:w-24 cursor-pointer '
            onChange={soundValueme}
            />
        </div> 
    );
}

export default Sound;