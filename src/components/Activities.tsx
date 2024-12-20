import Title from './Title'
import Cards from './Cards'
import { useTranslation } from 'react-i18next';
import { ActivityItemType } from '../types';

const Activities = () => {
  const [t] = useTranslation("global")
  const cardItems: ActivityItemType[] = t('cards', { returnObjects: true }) as ActivityItemType[];
  return (
    <>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <Title title={t("activities.title")} subtitle={t("activities.subtitle")} />
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4 ">
            {cardItems.map((item: ActivityItemType) => (
              <Cards
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                id={item.elementId}
                img={item.img}
                buttonText={t("buttons.learnMore")}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Activities