import React from 'react'
import Navbar from './NavBar'

const Header = (props: { title: string, subtitle: string, buttonText: string }) => {
    return (
        <section className="relative h-[650px] overflow-hidden bg-header-bg bg-cover bg-[50%] bg-no-repeat">
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
            >
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/75 bg-fixed">
                    <div className="flex h-[650px] items-center justify-center">
                        <div className="px-10 text-center md:px-12">
                            <p className="text-4xl font-bold sm:text-5xl md:text-6xl">{props.title}</p>
                            <p className="my-4 text-xl">{props.subtitle}</p>
                            <button
                                type="button"
                                className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-400 hover:text-neutral-400"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                {props.buttonText}
                            </button>
                        </div>
                    </div>
                    <Navbar/>
                </div>
            </div>
        </section>
    )
}

export default Header