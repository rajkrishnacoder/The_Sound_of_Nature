import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

function PlayCard() {
    const [on, setOn] = useState(false)

    const play = ()=>{
        on ? setOn(false) : setOn(true)
    }

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