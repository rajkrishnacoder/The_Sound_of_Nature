import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import current from '../../sounds/current';
import { useDispatch, useSelector } from 'react-redux';
import { setOn, clearAll } from '../../app/currentSlice';


function PlayCard() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.currentState)
    const status = current.status()
    
// optimization for some basicks eddge cases for play and pause button
    useEffect(() => {
        if (state.length === 1 && !state.on) {
            dispatch(setOn(true));
        } else if (state.length === 0 && state.on) {
            dispatch(setOn(false));
        }

        if(state.on == false) play() //if play&pause button is pause mode this will play again for clicking new sound
    }, [state.length]); 

// play and pause all current sound those are ueser playing 
    const play = ()=>{
        const key = Object.keys(status)

        if(key.length > 0){
            if(state.on){
                key.forEach(element => {
                    status[element].audio.pause()
                }); 
            }else{
                key.forEach(element => {
                    status[element].audio.play()
                }); 
            }
            dispatch(setOn(!state.on)) 
        }
    }
     
// reset all of song and state on clicking reset buttons
    const reset = ()=>{
        const key = Object.keys(status)
        key.forEach(element => {    // pause all the song before clearing theme
            status[element].audio.pause()
        })

        current.reset() // clearing all songs and data's on current
        dispatch(clearAll())// for state updation on another components, this will help to update them;
    }
  
    return (
        <div className='p-4 pb-6  w-full gap-[0.6rem] grid grid-cols-4  rounded-t-xl'>
            <div className='col-start-1'>
               
            </div>
            <div className='flex col-start-2 col-span-2 justify-center items-center flex-col gap-2'>
                <div className='flex items-center gap-3 h-[2.6rem]' >
                    <Icon icon="material-symbols:skip-next-rounded" width="2.4rem" height="2.4rem" flip='horizontal' style={{color: "black"}} className='cursor-pointer' />
                   
                    <div onClick={play} className=' h-[2.2rem] w-[2.2rem] bg-black flex items-center justify-center rounded-full cursor-pointer'>
                       <Icon icon={state.on ? "bi:pause-fill" : "pepicons-pop:play"} width={state.on ? "1.7rem" : "1.6rem"} height={state.on ? "1.7rem" : "1.6rem"}  style={{color: "white"}} />
                    </div>
    
                     <Icon icon="material-symbols:skip-next-rounded" width="2.4rem" height="2.4rem"  style={{color: "black"}} className='cursor-pointer' />
                </div>
    
                <input type="range" max={100} min={0} className='h-1 cursor-pointer w-full' />
            </div>
            <div className='col-start-4 flex items-center pl-5'>
                <Icon onClick={reset}  id='reset' icon="grommet-icons:power-reset" className='mt-4 cursor-pointer' width="1.2rem" height="1.2rem"  style={{color: "black"}} />
            </div>
        </div>
    );
}


export default PlayCard