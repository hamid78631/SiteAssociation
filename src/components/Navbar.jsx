import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLangMenu = () => setShowLangMenu(!showLangMenu);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLangMenu(false);
  };

   const getLangLabel = (lng) => {
    switch (lng) {
      case 'fr':
        return 'FR';
      case 'en':
        return 'EN';
      case 'ar':
        return 'AR';
      default:
        return 'Langue';
    }
  };


  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 h-30">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo de l’association */}
       <div className="flex items-center">
         <img src="src/assets/aqj.png" alt="Logo" className="h-20 w-auto mr-3 mt-2" />
         <span className="text-xl flex flex-col leading-tight">
         <span className='text-blue-600 font-bold'>جمعية تأهيل الشباب</span>
         <span className='text-cyan-300 font-bold'>ⵜⴰⵎⵙⵎⵓⵏⵜ ⵓⵙⵖⵔⵜ ⵏ ⵜⵉⵄⵄⵓⵔⵎⴰ</span>
         <span className='text-blue-900 font-bold'>Association Qualification des Jeunes</span>
         </span>
       </div>

        {/* Bouton burger menu mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-700">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        
        {/* Liens de navigation */}
        <div className={`md:flex space-x-6 h-5 display-flex item-center justify-center text-center ${isOpen ? 'block mt-4 md:mt-0 ' : 'hidden'} md:block`}>
          <Link to="/" className="block text-gray-700 hover:text-cyan-300 border-b-2 border-transparent 
            hover:border-cyan-300 transition-colors duration-700 pb-10">{t('navbar.home')}</Link>
          <Link to="/about" className="block text-gray-700 hover:text-cyan-300 border-b-2 border-transparent 
            hover:border-cyan-300 transition-colors duration-700 pb-10">{t('navbar.about')}</Link>
          <Link to="/events" className="block text-gray-700 hover:text-cyan-300 border-b-2 border-transparent 
            hover:border-cyan-300 transition-colors duration-700 pb-10">{t('navbar.events')}</Link>
          <Link to="/ActionsRealisees" className="block text-gray-700 hover:text-cyan-300 border-b-2 border-transparent 
            hover:border-cyan-300 transition-colors duration-700 pb-10">{t('navbar.actions')}</Link>
          {/* <Link to="/Equipe" className="block text-gray-700 hover:text-cyan-300 border-b-2 border-transparent 
            hover:border-cyan-300 transition-colors duration-700 pb-10">{t('navbar.team')}</Link> */}
          <Link to="/contact" className="block text-gray-700 hover:text-cyan-300 border-b-2 border-transparent 
            hover:border-cyan-300 transition-colors duration-700 pb-10">{t('navbar.contact')}</Link>
        </div>
              {/* Single Language Button */}
        <div className="relative">
          <button
            onClick={toggleLangMenu}
            className="bg-cyan-300 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 transition duration-300"
          >
            {getLangLabel(i18n.language)}
          </button>
          {showLangMenu && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-md z-10">
              <button onClick={() => changeLanguage('fr')} className="block w-full px-4 py-2 text-left hover:bg-gray-100">FR - Français</button>
              <button onClick={() => changeLanguage('en')} className="block w-full px-4 py-2 text-left hover:bg-gray-100">EN - English</button>
              <button onClick={() => changeLanguage('ar')} className="block w-full px-4 py-2 text-left hover:bg-gray-100">AR - العربية</button>
            </div>
          )}
        </div>

      </div>
    </nav>
  )
}
