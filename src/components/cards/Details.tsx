import DetailsCard from "./DetailsCard"
import { useTranslation } from 'react-i18next';
import { DetailsItemType } from '../../types';
import KidCards from './kidCards/KidCards';


const Details = () => {
    const [t] = useTranslation("global")
    return (
        <section>
            <DetailsCard info={t('bjj', { returnObjects: true }) as DetailsItemType} black={false} />
            <DetailsCard info={t('kick', { returnObjects: true }) as DetailsItemType} black={true} />
            <DetailsCard info={t('arm', { returnObjects: true }) as DetailsItemType} black={false} />
            <KidCards/>
        </section>
    )
}

export default Details