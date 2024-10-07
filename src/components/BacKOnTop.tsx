import React from 'react'
import { useEffect, useState } from 'react';

const BacKOnTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])
    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <button className={`${isVisible ? 'opacity-100' : 'opacity-0 hidden'} fixed bottom-5 end-5 rounded-full bg-zinc-900 p-3 text-xs shadow-md transition duration-150 ease-in-out hover:bg-zinc-700 hover:shadow-lg transition-opacity `}
            onClick={backToTop}>
            <span className="[&>svg]:w-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
            </span>
        </button>
    )
}

export default BacKOnTop