import { useState } from "react"
import Footer from "../components/footer/Footer"
import { motion } from 'framer-motion';

import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const members = t('about.team.members', { returnObjects: true });

  const [isOpen , setIsOpen] = useState(true)
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-white p-6 rounded-xl shadow-xl"
    >
      <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">{t("about.title")}</h1>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">{t("about.identityTitle")}</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {t("about.identityText1")}
        </p>
        <p className="text-gray-700 leading-relaxed">
         {t("about.identityText2")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">{t("about.territoryTitle")}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t("about.territoryText")}
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mb-4">{t("about.objectivesTitle")}</h2>
          <ul className="space-y-3 text-gray-700">
          {t("about.objectivesList", { returnObjects: true }).map((obj, i) => (
          <li  className="flex items-start" key={i}>• {obj}</li>
        ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">{t("about.domainsTitle")}</h2>
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <h3 className="text-lg font-medium text-blue-600 mb-2">{t("about.youthWomenTitle")}</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
               {t("about.youthWomenList", { returnObjects: true }).map((item, i) => (
          <li key={i}> {item}</li>
        ))}
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-blue-700 mb-4">{t("about.actionsTitle")}</h2>
          <button onClick={()=> setIsOpen(!isOpen)}
           className="bg-blue-600  text-white p-3 pl-6 pr-6 rounded-2xl hover:bg-blue-600 duration-500 "> 
           {isOpen ? 'Fermer ▲' : 'Afficher ▼'} 
           </button> <br /><br />
            {isOpen ? (<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 duration-500 ">
 {t("about.actionsList", { returnObjects: true }).map((item, i) => (
          <li className="bg-white p-3 rounded shadow-sm"  key={i}>• {item}</li>
        ))}
            </ul>) : null }
        </div>
         
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10 ">
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">{t("about.contactTitle")}</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-2"><span className="font-medium">{t("about.address")} :</span> Blvd. Mohammed VI, imm. Jann</p>
            <p className="text-gray-700 mb-2"><span className="font-medium">{t("about.tel")} :</span> +212 8-08 67 06 22</p>
            <p className="text-gray-700 mb-2"><span className="font-medium">{t("about.whatsapp")} :</span> +212 6-91 68 85 03</p>
            <p className="text-gray-700 mb-4"><span className="font-medium">{t("about.email")} :</span> AQJ.Direction@gmail.com</p>
            
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/AQJ.BM/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/Association_AQJ/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">{t('about.team.title')}</h2>
           <div className="space-y-4">
        {members.map((member, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-600">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <p className="text-gray-700 mt-1">{member.email}</p>
            <p className="text-gray-700">{member.phone}</p>
          </div>
        ))}
      </div>
        </div>
      </div>
      <div > <Footer/></div>
    </motion.div>
  )
}