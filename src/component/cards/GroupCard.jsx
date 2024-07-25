import React from 'react';
import { SoundCard } from '../index';
import songData from '../../sounds/songs';

function GroupCard() {

    return (
        <div className='w-full flex justify-center p-5'>
               <div className='grid h-[20rem] w-[20rem] grid-cols-3 grid-rows-3 gap-3 place-items-center'>
                <SoundCard image={songData["rain"].image} song={songData["rain"]} />
                <SoundCard image={songData["light-rain"].image} song={songData["light-rain"]} />
                <SoundCard image={songData["heavy-rain"].image} song={songData["heavy-rain"]} width='3.2rem' height='3.2rem'/>
                <SoundCard image={songData["wind"].image} song={songData["wind"]} />
                <SoundCard image={songData["thunder-distant"].image} song={songData["thunder-distant"]} />
                <SoundCard image={songData["thunder"].image} song={songData["thunder"]} />
                <SoundCard image={songData["fire"].image} song={songData["fire"]} />
                <SoundCard image={songData["wave"].image} song={songData["wave"]} />
                <SoundCard image={songData["cricket"].image} song={songData["cricket"]} />
              </div>
        </div>
    );
}

export default GroupCard;