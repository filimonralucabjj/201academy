
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const [, i18n] = useTranslation("global")
    const changeLanguage = () => {
        if (i18n.language === "ro")
            i18n.changeLanguage("en");
        else i18n.changeLanguage("ro");
    }
    return (
        <div className="flex flex-row items-center md:ml-5">
            <button className="p-2 flex flex-row items-center text-sm text-gray-600 hover:text-white"
                onClick={() => changeLanguage()}
            >
                {i18n.language === "ro"
                    ? <><span className="text-md">en</span><span className="ml-1"><img src="https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png" className="w-5 h-5" /></span></>

                    : <><span className="text-md">ro</span><span className="ml-1"> <img src=" https://img.icons8.com/?size=100&id=vtGJjy9EsMiz&format=png" className="w-5 h-5" /></span></>

                }
            </button>
        </div>
    )
}

export default LanguageSelector