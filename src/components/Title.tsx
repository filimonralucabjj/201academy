import React from 'react'

const Title = (props: { title: string, subtitle: string}) => {
  return (
    <div className='py-5'>
        <h2 className="mb-2 text-xl font-extrabold leading-none tracking-tight md:text-2xl">{props.title}</h2>
        <p className="mb-6 font-normal text-gray-500">{props.subtitle}</p>
    </div>
  )
}

export default Title