import React from 'react'
import { KidsDetailsItemType } from '../types'
import TimeTable from './TimeTable'

const KidCard = (props: { key: number, info: KidsDetailsItemType }) => {
    return (
        <div className="block mx-4 max-w-sm p-6 border rounded-lg shadowbg-gray-100 bg-neutral-900 border-neutral-800 hover:bg-neutral-800">

            <h5 className="mb-2 text-xl text-center font-bold tracking-tight">{props.info.title}</h5>
            <p className="font-normal text-md text-gray-500">{props.info.subtitle}</p>
            <div className="h-[100px]">
                <TimeTable schedule={props.info.schedule} address={props.info.address} />
            </div>
            <div className="flex">
                <img className="w-12 h-12 rounded-full" src={props.info.coachImg} alt="Coach image" />
                <div className="min-w-0 ms-4 h-[100px]">
                    <p className="text-sm font-medium truncate">
                        {props.info.coach}
                    </p>
                    {
                        props.info.coachDesc.map((item: string) => (
                            <div className='flex items-center'>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                                </svg> */}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg> */}


                                <p className="text-sm text-gray-400 mb-1">
                                    {item}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default KidCard