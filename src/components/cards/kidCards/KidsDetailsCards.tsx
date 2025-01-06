
import KidCard from './KidCard'
import { useTranslation } from 'react-i18next'
import { KidsDetailsItemType } from '../../../types'
import Title from '../../utils/Title'
const KidsFlipingCards = () => {
    const [t] = useTranslation("global");
    const kidsDetailItems: KidsDetailsItemType[] = t("kidsDetails", { returnObjects: true }) as KidsDetailsItemType[];
    return (
        <section>
            <div className="py-8 mx-auto max-w-screen-xl">
            <Title title={t("kidsSection.title")} subtitle={t("kidsSection.subtitle")} />
                <div className="grid grid-cols-1 place-items-center lg:grid-cols-3 gap-5">
                    {kidsDetailItems.map((item: KidsDetailsItemType) => (
                        // <FlipCard key={item.id} info={item}/>
                        <KidCard key={item.id} info={item}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default KidsFlipingCards