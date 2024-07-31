import React from 'react';
import { GroupCard} from "../component/index"

function Home(props) {
    return (
        <div className="h-screen mt-2 sm:mt-[3rem] md:mt-[4rem] lg:mt-[10rem] lg:mx-[3rem]">
            <div className="w-full flex p-5  flex-col justify-center items-center gap-[2rem] sm:gap-[4rem] lg:flex-row ">
                <div className=" "><GroupCard/></div>
                <div className=" rounded-3xl overflow-hidden bg-cover bg-no-repeat ">
                    <img src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=600" alt="the nature land" />
                </div>
            </div>
        </div>
    );
}

export default Home