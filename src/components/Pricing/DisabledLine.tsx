import React from 'react'

const DisabledLine = (props: { lines: string[] }) => {
    return (
        <div>
            {props.lines.map((item: string, index:number) => (
                <li className="flex line-through decoration-gray-500" key={index}>
                    <svg className="flex-shrink-0 w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">{item}</span>
                </li>
            ))}
        </div>
    )
}

export default DisabledLine