import { useTranslation } from 'react-i18next'

const ContactUs = () => {
    const [t] = useTranslation("global")
        return (
        <section id="contact" className="bg-neutral-900">
            <div className="py-10 mx-auto max-w-screen-xl">
                <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                    <h2 className="text-xl  md:text-2xl font-extrabold">{t("contactUsSection.title")}</h2>
                    <p className="mt-4 text-gray-500">{t("contactUsSection.subtitle")}</p>
                </div>
                <div className="mt-10 px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-lg overflow-hidden">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.040988723437!2d27.60249091161945!3d47.137463020136025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb4a7949854f%3A0x8cdc0b0767b1c475!2sTwo%20on%20One%20Academy!5e0!3m2!1sen!2sus!4v1728998085670!5m2!1sen!2sus"
                             width="100%" height="380" loading="lazy"></iframe> 
                        </div>
                        <div>
                            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                <div className="px-6 py-4">
                                    <h3 className="font-medium ">{t("contact.addressTitle")}</h3>
                                    <p className="mt-1 text-gray-400">{t("contact.address")}</p>
                                    <p className="mt-1 text-gray-400">Cladirea Socar/RVR - Receptie Service - et. 4</p>
                                </div>
                                {/* <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="font-medium ">Hours</h3>
                                    <p className="mt-1 text-gray-400">Monday - Friday: 9am - 5pm</p>
                                    <p className="mt-1 text-gray-400">Saturday: 10am - 4pm</p>
                                    <p className="mt-1 text-gray-400">Sunday: Closed</p>
                                </div> */}
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="font-medium ">Contact</h3>
                                    <p className="mt-1 text-gray-400">{t("contact.email")}</p>
                                    <p className="mt-1 text-gray-400">{t("contact.number")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs