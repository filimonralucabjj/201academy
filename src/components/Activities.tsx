import React from 'react'
import Title from './Title'
import Cards from './Cards'
import { activities } from '../constants/index';

const Activities = () => {
  type ItemType = {
    id: number;
    title: string;
    subtitle: string;
    elementId: string;
    img: string;
  };
  return (
    <>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <Title title="Invest in your potential" subtitle="Combine physical fitness with mental discipline, self-defense, and personal development" />
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4 ">
            {activities.map((item: ItemType) => (
              <Cards
                imgSeq={item.id}
                title={item.title}
                subtitle={item.subtitle}
                id={item.elementId}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Activities