import React from 'react';
import { SoundCard } from '.';

function GroupCard(props) {
    return (
        <div className='w-full flex justify-center'>
            <div className='rounded-lg p-5 backdrop-blur-sm bg-white/30 border border-gray-60'>
               <div className='flex flex-wrap w-[18rem]  gap-6'>
                <SoundCard/>
                <SoundCard/>
                <SoundCard/>
                <SoundCard/>
                <SoundCard/>
                <SoundCard/>
                <SoundCard/>
                <SoundCard/>
                <SoundCard/>
              </div> 
            </div>
            
        </div>
    );
}

export default GroupCard;