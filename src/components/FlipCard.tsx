import React from 'react'
import { KidsDetailsItemType } from '../types'
import TimeTable from './TimeTable'
import { useState } from 'react'

const FlipCard = (props: { key: number, info: KidsDetailsItemType }) => {
    const [fliped, setFliped] = useState(false);
    // const toggleFlip = () => {
    //     if (fliped) {
    //         setFliped(false);
    //     } else {
    //         setFliped(true);
    //     }
    // }
    return (
        // <div className='w-10/12 h-[350px] bg-transparent cursor-pointer group rounded perspective-1000 my-5 md:my-0' onClick={toggleFlip}>
        //     <div className={` ${fliped ? "rotate-y-180": ""} relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500`}>
        //         <div className='absolute bottom-0 right-0 p-3 z-10'>
        //         <span className="ml-1"><img src="https://img.icons8.com/?size=100&id=78748&format=png&color=ffffff" className="w-5 h-5" /></span>
        //         </div>
        //         <div className='w-full h-full absolute rounded overflow-hidden'>
        //             <img src={props.info.img} className='w-full h-full' />
        //         </div>
        //         <div className='absolute rotate-y-180 w-full h-full bg-neutral-900 bg-opacity-95 rounded overflow-hidden p-10 text-neutral-300 space-y-5 backface-hidden'>
        //             <p className='font-bold text-3xl text-center'>{props.info.title}</p>
        //             <div className="block md:hidden lg:block max-w-2xl mx-auto mb-4 text-gray-400">
        //                 <p className="my-4">{props.info.subtitle}</p>
        //             </div>
        //             <TimeTable schedule={props.info.schedule} address={props.info.address} />
        //             <div className="flex self-end">
        //                 <div className="flex-shrink-0">
        //                     <img className="w-8 h-8 rounded-full" src={props.info.coachImg} alt="Neil image" />
        //                 </div>
        //                 <div className="flex-1 min-w-0 ms-4">
        //                     <p className="text-sm font-mediumtruncate">
        //                         {props.info.coach}
        //                     </p>
        //                     <p className="text-sm truncatetext-gray-400">
        //                         {props.info.coachDesc}
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // <div className="mx-4 h-full rounded-lg lg:my-0 bg-[50%] bg-no-repeat bg-cover " style={{ backgroundImage: `url(${props.info.img})` }}>
        <div className="mx-4 h-full rounded-lg lg:my-0 bg-[50%] bg-no-repeat bg-cover " style={{ backgroundImage: `url(${props.info.img})` }}>
            <div className="w-full h-full">
                {/* <div className='w-full h-fullrounded overflow-hidden'>
                    <img src={props.info.img} className='w-full h-full' />
                </div> */}
                <div className='flex-row w-full h-full bg-neutral-900 bg-opacity-95 rounded p-10 text-neutral-300 space-y-5'>
                    <p className='font-bold text-xl lg:text-2xl text-center'>{props.info.title}</p>
                    <div className=" max-w-2xl mx-auto mb-4 text-gray-400 ">
                        <p className="my-4">{props.info.subtitle}</p>
                    </div>
                    <div>
                        <TimeTable schedule={props.info.schedule} address={props.info.address} />
                    </div>
                    <div className="flex">
                        <img className="w-8 h-8 rounded-full" src={props.info.coachImg} alt="Neil image" />
                        <div className="min-w-0 ms-4">
                            <p className="text-sm font-medium truncate">
                                {props.info.coach}
                            </p>
                            <p className="text-sm truncatetext-gray-400">
                                {props.info.coachDesc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard