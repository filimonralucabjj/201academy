import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Gallery = () => {
    const [selected, setSelected] = useState(1);
    const [start, setStart] = useState(0);
    const [t] = useTranslation("global")
    const windowSize = window.innerWidth < 768 ? 3 : 8;
    const images: string[] = t('gallery', { returnObjects: true }) as string[];

    const updateStart = (start: number) => {
        if (start + windowSize < images.length) {
            console.log(start + windowSize);
            setStart(start + windowSize)
        }
        else {
            setStart(images.length - windowSize - 1)
            console.log('here2');
        }
        console.log(start);
    }
    return (
        <div id="gallery" className="grid gap-4 p-10 mx-auto max-w-screen-xl place-items-center">
            <div className="place-items-center flex">
                {selected > 0 && <div className="hidden md:block rounded-full bg-zinc-900 p-3 text-xs shadow-md hover:bg-zinc-700 hover:shadow-lg mr-5 cursor-pointer" onClick={() => { setSelected(selected - 1) }}>
                    <svg className="md:w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"></path>
                    </svg>
                </div>}
                <img className="[h-200px] md:h-[550px] rounded-lg" src={images[selected]} alt="" />
                {selected < images.length - 1 && <div className="hidden md:block rounded-full bg-zinc-900 p-3 text-xs shadow-md hover:bg-zinc-700 hover:shadow-lg ml-5 cursor-pointer" onClick={() => { setSelected(selected + 1) }}>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                    </svg>
                </div>
                }

            </div>
            <div className="flex justify-center items-center">
                <button className={`${start - windowSize < 0 ? "text-gray-600" : ""} p-3 cursor-pointer`} onClick={() => { if (start - windowSize >= 0) setStart(start - windowSize) }}>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"></path>
                    </svg>
                </button>
                <div className="flex gap-4">
                    {images.slice(start, start + windowSize).map((item, index) => (
                        <div className='cursor-pointer' key={index} onClick={() => { setSelected(start + index) }}>
                            <img className="h-[100px] max-w-full rounded-lg" src={item} alt="" />
                        </div>
                    ))}
                </div>
                <div className={`${start + windowSize >= images.length ? "text-gray-600" : ""} p-3 cursor-pointer`} onClick={() => { if (start + windowSize < images.length - 1) updateStart(start) }}>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Gallery