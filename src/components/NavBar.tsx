import React from 'react'
import { useState} from 'react'
import logo from '../assets/logo.svg'
import { HashLink as Link } from "react-router-hash-link";
import { navigation } from '../constants/index';

export const NavBar = () => {
    type ItemType = {
        id: number;
        isActive: boolean;
        title: string;
        url: string;
      };
    const [openNavigation, setOpenNavigation] = useState(false);
    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
        } else {
            setOpenNavigation(true);
        }
    }
    const linkClass = (isActive : boolean) => isActive ? 'bg-zinc-900/70 hover:bg-zinc-900 rounded-md px-4 py-3' : 'hover:bg-zinc-900/70 rounded-md px-4 py-3';
    return (
        <nav className="absolute top-0 w-full bg-black bg-opacity-20 bg-clip-padding backdrop-blur">
            <div className={`${openNavigation ? "bg-zinc-950" : ""} mx-auto max-w-7xl px-6 sm:px-10 lg:px-8`}>
                <div className="flex h-20 items-center justify-between">
                    <div
                        className="flex flex-1 justify-center items-stretch"
                    >
                        <div className="flex flex-shrink-0 items-center mr-4" >
                            <img
                                className="h-14 w-auto"
                                src={logo}
                                alt="React Jobs"
                            />
                        </div>
                        <div className='ml-auto inline-flex items-center justify-center text-sm rounded-lg md:hidden'>
                            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg text-gray-400 hover:bg-zinc-900/70" aria-controls="navbar-default" aria-expanded="false" onClick={toggleNavigation}>
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                        <div className={`${openNavigation ? "flex pb-[5rem]" : "hidden"} bg-zinc-950 fixed top-[5rem] left-0 right-0 md:bg-transparent md:static md:flex ml-auto items-center justify-center`}>
                            <div className={`${openNavigation ? "relative z-2 flex flex-col" : "space-x-2"} md:block items-center justify-center m-auto`}>
                            {navigation.map((item: ItemType) => (
                                // <Link
                                //     key={item.id}
                                //     to={item.url}
                                //     className={linkClass(item.isActive)}
                                // >
                                //     {item.title}
                                // </Link> adauga '#' la linkurile din const
                                <a
                                className={linkClass(item.isActive)}
                                onClick={e => {
                                let element = document.getElementById(`${item.url}`);
                                e.preventDefault(); 
                                element?.scrollIntoView({
                                    behavior:'smooth'
                                })
                                }}
                                >
                                {item.title}
                                </a>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default NavBar