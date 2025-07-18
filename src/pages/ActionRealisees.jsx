import Footer from '../components/footer/Footer';
import '../styles/ActionsRealisee.css';  
import { actions } from '../variables/action'; 
import { useTranslation } from 'react-i18next';


function Actions() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'fr';
  
  return (
    <div className="actions-container">
      <h2 className="actions-title">{t('actions.title')}</h2>
      <p className="actions-subtitle">{t('actions.subtitle')} </p>
      
   <div className="actions-list">
        {actions.map((action) => {
          const translation = action.translations[lang] || action.translations['fr'];
          return (
            <div key={action.id} className="action-card">
              <img
                src={action.image}
                alt={`Action : ${translation.title}`}
                className="action-image"
              />
              <div className="action-content">
                <div className="action-title">{translation.title}</div>
                <div className="action-short-desc">{translation.shortDesc}</div>
                <div className="action-date">{action.date}</div>
                <div className="action-location">{action.location}</div>
                <div className="action-full-desc">{translation.fullDesc}</div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer/>
    </div>
  );
}

export default Actions;
