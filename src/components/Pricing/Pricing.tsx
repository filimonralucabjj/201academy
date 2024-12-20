import Title from '../Title'
import PricingCard from './PricingCard'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PricingItemType, ItemPrice } from '../../types'

const Pricing = () => {
  const [t] = useTranslation("global")
  const [active, setActive] = useState(0);
  const pricingItems: PricingItemType[] = t('pricing', { returnObjects: true }) as PricingItemType[];
  return (
    <section id="prices">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <Title title="Pricing" subtitle="Find your best fit" />
        <div className='flex items-center justify-center mb-5' >
          {pricingItems.map((item: PricingItemType) => (
            <button key={item.id} type="button" className={` ${active == item.id ? "text-white bg-neutral-900" : "text-neutral-700"} bg-black hover:text-white border border-neutral-800 hover:bg-neutral-900 font-small md:font-medium rounded-lg text-sm md:px-5 py-1 md:py-2.5 text-center me-2 mb-2 h-12 p-2`}
              onClick={() => { setActive(item.id) }}>
              {item.title}
            </button>
          ))}
        </div>
        {/* <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"> */}
        <div className="flex flex-wrap justify-center">
          {pricingItems[active].options.map((item: ItemPrice) => (
            <PricingCard  key={item.id}  item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing