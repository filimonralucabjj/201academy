
import Navbar from './NavBar'
import { useTranslation } from 'react-i18next'
const Header = () => {
    const [t] = useTranslation("global");
    return (
        <section className="relative h-[650px] overflow-hidden bg-cover bg-[50%] bg-no-repeat default-bg md:bg-header-bg">
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
            >
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/75 bg-fixed">
                    <div className="flex h-[650px] items-center justify-center">
                        <div className="px-10 text-center md:px-12">
                            <p className="text-4xl font-bold sm:text-5xl md:text-6xl">{t("header.title")}</p>
                            <p className="my-4 text-xl">{t("header.subtitle")}</p>
                            <button
                                type="button"
                                className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-400 hover:text-neutral-400 focus:border-neutral-400 focus:text-neutral-400"
                                data-twe-ripple-init
                                data-twe-ripple-color="light"
                                onClick={e => {
                                    let element = document.getElementById(`contact`);
                                    e.preventDefault();
                                    element?.scrollIntoView({
                                        behavior: 'smooth'
                                    })
                                }}>
                                {t("header.buttonText")}
                            </button>
                        </div>
                    </div>
                    <Navbar/>
                </div>
            </div>
        </section>
    )
}

export default Header