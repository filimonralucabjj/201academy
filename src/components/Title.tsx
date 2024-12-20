import React from 'react'

const Title = (props: { title: string, subtitle: string}) => {
  return (
    <div className='pb-5 px-5 text-center'>
        <h2 className="mb-2 text-xl font-extrabold leading-none tracking-tight md:text-2xl">{props.title}</h2>
        <p className="mb-6 font-normal text-gray-500">{props.subtitle}</p>
    </div>
  )
}

export default Title