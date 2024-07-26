import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import current,{status} from '../../sounds/current';



function PlayCard() {
    const [on, setOn] = useState(false)
    let ON = false

    const observer = ()=>{
        const length = current.getLength()
        if(length == 1 && !ON){
            ON = true
            setOn(ON)
        }
        else if(length == 0 && ON){
            ON = false
            setOn(ON)
        }
    }
    
    const play = ()=>{
        const key = Object.keys(status)
        if(key.length > 0){
            if(on){
                key.forEach(element => {
                    status[element].audio.pause()
                }); 
            }else{
                key.forEach(element => {
                    status[element].audio.play()
                }); 
            }
            setOn(prevOn => !prevOn)  
        }
    }
     
    useEffect(()=>{
        const myEvent = document.querySelectorAll(".domHelper")
        myEvent.forEach(element =>{
           element.addEventListener("click", ()=>{
              const timeout = setTimeout(observer,100)
              return ()=> clearTimeout(timeout)
           }) 
        })
    }, [])
    
  
    return (
        <div className='p-4 pb-6  w-full gap-[0.6rem] flex items-center justify-center  flex-col bg-black'>
            <div className='flex items-center gap-3 h-[2.6rem]' >
                <Icon icon="material-symbols:skip-next-rounded" width="2.4rem" height="2.4rem" flip='horizontal' style={{color: "white"}} className='cursor-pointer' />
               
                <div onClick={play} className=' h-[2.2rem] w-[2.2rem] bg-white flex items-center justify-center rounded-full cursor-pointer'>
                   <Icon icon={on ? "bi:pause-fill" : "pepicons-pop:play"} width={on ? "1.7rem" : "1.6rem"} height={on ? "1.7rem" : "1.6rem"}  style={{color: "black"}} />
                </div>

                 <Icon icon="material-symbols:skip-next-rounded" width="2.4rem" height="2.4rem"  style={{color: "white"}} className='cursor-pointer' />
            </div>

            <input type="range" max={100} min={0} className='h-1 cursor-pointer w-[20rem]' />

        </div>
    );
}


export default PlayCard