import React from 'react'
import DetailsLeft from "./DetailsLeft"
import DetailsRight from "./DetailsRight"
import { bjjDetails, kickDetails, armWrestlingDetails } from '../constants/index';


const Details = () => {
    return (
        <section>
            <DetailsLeft info={bjjDetails} />
            <DetailsRight info={kickDetails} />
            <DetailsLeft info={armWrestlingDetails} />
        </section>
    )
}

export default Details