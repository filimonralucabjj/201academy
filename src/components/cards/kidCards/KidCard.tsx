import { KidsDetailsItemType } from '../../../types'
import TimeTable from '../../utils/TimeTable'

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