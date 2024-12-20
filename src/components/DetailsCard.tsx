// import { useState} from 'react'
import TimeTable from './TimeTable';
import { DetailsItemType } from '../types';
// import { useTranslation } from 'react-i18next';

const Details = (props: { info: DetailsItemType, black: boolean }) => {
    // const [t] = useTranslation("global")
    // const [openSchedule, setOpenSchedule] = useState(false);
    // const [buttonText, setButtonText] = useState(t("buttons.schedule"));
    // const toggleSchedule = () => {
    //     if (openSchedule) {
    //         setOpenSchedule(false);
    //     } else {
    //         setOpenSchedule(true);
    //     }
    // }
    return (
        <section id={props.info.sectionId} className="mb-10">
            <div className="px-4 mx-auto max-w-screen-xl text-center">
                <div className={` ${props.black ? "" : "bg-neutral-900"} gap-16 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 p-8 md:p-16 rounded-lg shadow brightness-70`}>
                    {props.black && <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg brightness-75 hover:brightness-100 focus:brightness-100" src={props.info.img1} />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg brightness-75 hover:brightness-100 focus:brightness-100" src={props.info.img2} />
                    </div>}
                    <div className="text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">{props.info.title}</h2>
                        <p className="mb-4 text-gray-400 text-justify">{props.info.subtitle1}</p>
                        {/* <p className="mb-4 text-gray-400 text-justify">{props.info.subtitle2}</p> */}
                        {/* {openSchedule == true &&
                            <TimeTable schedule={props.info.schedule} address={props.info.address} />
                        } */}
                        <TimeTable schedule={props.info.schedule} address={props.info.address} />
                        {/* <button
                            type="button"
                            className={` ${openSchedule ? "mt-5" : ""} inline-flex items-center font-medium text-gray-300 hover:text-zinc-50`}
                            onClick={toggleSchedule}>
                            {openSchedule ? t("buttons.scheduleActive") : t("buttons.schedule")}
                            {openSchedule ?
                                <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg> :
                                <svg className=" w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>}
                        </button> */}
                    </div>
                    {!props.black && <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg brightness-75 hover:brightness-100 focus:brightness-100" src={props.info.img1} />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg brightness-75 hover:brightness-100 focus:brightness-100" src={props.info.img2} />
                    </div>}
                </div>
            </div>
        </section >
    )
}

export default Details