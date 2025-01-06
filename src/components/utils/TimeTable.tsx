import { ItemSchedule } from '../../types'

const TimeTable = (props: { schedule: ItemSchedule[] | null, address: string | null }) => {
    return (
        <div className="flex content-center justify-center mt-8 text-sm text-gray-300" >
            <div>
                <table className="mx-6 table-auto flex content-center justify-center">
                    <tbody>
                        {props.schedule?.map((item: ItemSchedule) => (
                            <tr key={item.day}>
                                <td>{item.day}</td>
                                <td>{item.hour}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {props.address && <div className="mt-5 flex">
                    <svg className="h-5 w-5 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm mx-2">{props.address}</p>
                </div>
                }
            </div>
        </div>
    )
}

export default TimeTable