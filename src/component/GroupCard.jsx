import React from 'react';
import { SoundCard } from '.';
import songData from '../sounds/songs';

function GroupCard() {

    return (
        <div className='w-full flex justify-center'>
            <div className='rounded-xl p-5'>
               <div className='grid h-[20rem] w-[20rem] grid-cols-3 grid-rows-3 gap-3 place-items-center'>
                <SoundCard image={"https://cdn.pixabay.com/photo/2024/01/24/22/23/boy-8530678_640.png"} />
                <SoundCard image={songData["rain"].image} song={songData["rain"]}/>
                <SoundCard image={"https://cdn.pixabay.com/photo/2024/01/24/22/23/boy-8530678_640.png"}/>
                <SoundCard image={"https://cdn.pixabay.com/photo/2024/01/23/14/37/couple-8527721_640.png"}/>
                <SoundCard image={"https://cdn.pixabay.com/photo/2024/05/16/10/56/forest-8765686_640.jpg"}/>
                <SoundCard image={"https://cdn.pixabay.com/photo/2023/09/25/12/49/trees-8274904_640.jpg"} />
                <SoundCard image={"https://cdn.pixabay.com/photo/2024/01/02/13/28/gecko-8483282_640.png"} />
                <SoundCard image={"https://cdn.pixabay.com/photo/2024/03/13/17/57/sea-8631493_640.jpg"} />
                <SoundCard image={"https://cdn.pixabay.com/photo/2024/04/19/22/25/man-8707406_640.png"} />
              </div> 
            </div>
            
        </div>
    );
}

export default GroupCard;