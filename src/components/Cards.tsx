import React from 'react'
// import bjj from '../assets/bjj1.jpg'
// import kick from '../assets/kick.jpg'
// import armwrestling from '../assets/arm.jpg'
// import kids from '../assets/kids.jpg'

const Cards = (props: { title: string, subtitle: string, imgSeq: number, url:string, img:string }) => {
  // const images = [bjj, kick, armwrestling, kids];
  return (
    <div className="max-w-sm rounded-lg shadow bg-zinc-900 mb-5 brightness-50 hover:brightness-100">
      <img className="rounded-t-lg object-cover h-48 w-96" src={props.img} alt="sdd" />
      <div className="p-5 h-50 md:h-60">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{props.title}</h5>
        <p className="mb-3 font-normal text-zinc-300">{props.subtitle}</p>
        <a href={props.url} className="inline-flex items-center font-medium text-gray-500 hover:text-zinc-50">
          Learn more
          <svg className=" w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </a>
      </div>
    </div>

  )
}

export default Cards