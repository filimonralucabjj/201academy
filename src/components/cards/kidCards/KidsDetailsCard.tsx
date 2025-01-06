import { KidsDetailsItemType } from '../../../types'
import TimeTable from '../../utils/TimeTable'
// import { useState } from 'react'

const KidsDetailsCard = (props: { key: number, info: KidsDetailsItemType }) => {
    return (
        <div className="mx-4 h-full rounded-lg lg:my-0 bg-[50%] bg-no-repeat bg-cover " style={{ backgroundImage: `url(${props.info.img})` }}>
            <div className="w-full h-full">
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

export default KidsDetailsCard