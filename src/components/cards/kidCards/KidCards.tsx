import KidsDetailsCards from './KidsDetailsCards'
import { useTranslation } from 'react-i18next'

const KidCards = () => {
    const [t] = useTranslation("global");
    return (
        <>
            <section id="kids" className="container py-8 px-4 md:py-10 mx-auto max-w-screen-xl text-center">
                <div className="relative transform duration-500 hover:shadow-2xl ">
                    <img className="xl:max-w-4xl brightness-50 rounded-lg" src="../images/kids1.jpg" alt="" />
                    <div className="content bg-neutral-900 py-8 px-8 md:p-14 pb-12 lg:max-w-lg w-full lg:absolute top-14 right-0 rounded-lg mb-5">
                        <div className="flex justify-between font-bold text-sm">
                            <span className="ml-1"><img src="https://img.icons8.com/?size=100&id=71288&format=png&color=ffffff" className="w-5 h-5" /></span>
                            <span className="ml-1"><img src="https://img.icons8.com/?size=100&id=71303&format=png&color=ffffff" className="w-5 h-5" /></span>
                            <span className="ml-1"><img src="https://img.icons8.com/?size=100&id=71285&format=png&color=ffffff" className="w-5 h-5" /></span>
                        </div>
                        <div className="my-3 text-justify text-gray-400 leading-relaxed">
                            <h2 className="text-3xl font-semibold my-4 md:mt-10 text-white text-center">{t("kids.title")}</h2>
                            <p>{t("kids.subtitle1")}</p>
                            <br/>
                            <p>{t("kids.subtitle2")}</p>
                        </div>
                    </div>
                </div>
            </section>
            <KidsDetailsCards />
        </>
    )
}

export default KidCards