import { useState } from 'react'
import TimeTable from './TimeTable';

type ItemType = {
    id: number;
    sectionId: string;
    title: string;
    subtitle1: string;
    subtitle2: string;
    img1: string;
    img2: string;
  };

const Details = (props: {info: ItemType}) => {
    const [openSchedule, setOpenSchedule] = useState(false);
    const [buttonText, setButtonText] = useState('Show schedule');
    const toggleSchedule = () => {
        if (openSchedule) {
            setOpenSchedule(false);
            setButtonText('Show schedule');
        } else {
            setOpenSchedule(true);
            setButtonText('Hide schedule');
        }
    }
    return (
        <section id={props.info.sectionId} className="mb-10">
            <div className="px-4 mx-auto max-w-screen-xl text-center">
                <div className="gap-16 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 py-16 px-16 bg-neutral-900 rounded-lg shadow brightness-70">
                    <div className="font-lighttext-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">{props.info.title}</h2>
                        <p className="mb-4 text-gray-400">{props.info.subtitle1}</p>
                        <p className="mb-4 text-gray-400">{props.info.subtitle2}</p>
                        {openSchedule == true &&
                            <TimeTable />
                        }
                        <button
                            type="button"
                            className={` ${openSchedule ? "mt-5" : ""} underline inline-flex items-center font-medium text-gray-300 hover:text-zinc-50`}
                            onClick={toggleSchedule}>
                            {buttonText}
                            <svg className=" w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg brightness-75 hover:brightness-100" src={props.info.img1} />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg brightness-75 hover:brightness-100" src={props.info.img2} />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Details