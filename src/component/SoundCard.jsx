import React, {useState} from 'react';

function Sound() {
    return (
        <div className='flex flex-wrap flex-col te gap-3  justify-center items-center'>
            <div className='bg-cover h-[5rem] w-[5rem] rounded-xl cursor-pointer' style={{
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2024/01/24/22/23/boy-8530678_640.png)',
                }}></div>
            <input type="range" min={0} max={30} value={0} className='h-1.5 w-[5rem] cursor-pointer'/>
        </div>
    );
}

export default Sound;