import EnabledLine from './EnabledLine'
import DisabledLine from './DisabledLine'
import { ItemPrice } from '../../types'

const PricingCard = (props: {key:number, item: ItemPrice}) => {
    return (
        // <div className="w-full max-w-sm p-4 rounded-lg shadow sm:p-8 bg-neutral-900 border border-neutral-800">
        //     <h5 className="mb-4 text-xl font-medium text-gray-400">{props.item.title}</h5>
        //     <div className="flex items-baseline text-white">
        //         <span className="text-3xl font-semibold">RON</span>
        //         <span className="text-5xl font-extrabold tracking-tight">{props.item.price}</span>
        //         <span className="ms-1 text-xl font-normal text-gray-400">/{props.item.per}</span>
        //     </div>
            <div className="w-full lg:w-1/4 m-5 flex flex-col p-6 max-w-lg text-center rounded-lg border shadow border-neutral-800 xl:p-8 bg-neutral-900 text-white">
              <h3 className="text-xl font-semibold">{props.item.title}</h3>
              {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p> */}
              <div className="flex justify-center items-baseline mt-8">
                  <span className="mr-2 text-2xl font-extrabold">{props.item.price} RON</span>
                  <span className="text-gray-400">/{props.item.per}</span>
              </div>
            <ul role="list" className="space-y-5 my-7">
                <EnabledLine lines={props.item.includes}/>
                <DisabledLine lines={props.item.excludes}/>
            </ul>
        </div>


    )
}

export default PricingCard