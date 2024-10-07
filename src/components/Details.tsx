import React from 'react'
import DetailsCard from "./DetailsCard"
// import { bjjDetails, kickDetails, armWrestlingDetails } from '../constants/index';
import { useTranslation } from 'react-i18next';
import { DetailsItemType } from '../types';


const Details = () => {
    const [t, i18n] = useTranslation("global")
    return (
        <section>
            <DetailsCard info={t('bjj', { returnObjects: true }) as DetailsItemType} black={false} />
            <DetailsCard info={t('kick', { returnObjects: true }) as DetailsItemType} black={true} />
            <DetailsCard info={t('arm', { returnObjects: true }) as DetailsItemType} black={false} />
        </section>
    )
}

export default Details