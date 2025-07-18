import '../styles/Event.css';
import { events } from '../variables/events';
import Footer from '../components/footer/Footer';
import { useTranslation } from 'react-i18next';

function Events() {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'fr';

  // Fonction pour obtenir une traduction sécurisée
  const getSafeTranslation = (event, language) => {
    // Essayer la langue demandée d'abord
    if (event.translations?.[language]) {
      return event.translations[language];
    }
    // Fallback en français
    if (event.translations?.fr) {
      return event.translations.fr;
    }
    // Fallback minimal si aucune traduction n'existe
    return {
      title: 'Titre non disponible',
      description: 'Description non disponible'
    };
  };

  // Fonction pour formater la date de manière sécurisée
  const formatDate = (dateString, language) => {
    try {
      const date = new Date(dateString);
      return isNaN(date) ? 'Date invalide' : date.toLocaleDateString(language);
    } catch {
      return 'Date invalide';
    }
  };

  return (
    <div className="events-container">
      <h2 className="events-title">
        {lang === 'fr' ? "Nos événements" : 
         lang === 'en' ? "Our Events" : "فعالياتنا"}
      </h2>
      
      <p className="events-subtitle">
        {lang === 'fr' ? "Découvrez nos prochains événements" : 
         lang === 'en' ? "Discover our upcoming events" : "اكتشف فعالياتنا القادمة"}
      </p>
      
      <div className="events-list">
        {events && Array.isArray(events) ? (
          events.map((event) => {
            const translation = getSafeTranslation(event, lang);
            
            return (
              <div key={event.id || Math.random()} className="event-card">
                <div className="event-content">
                  <h3 className="event-title">{translation.title}</h3>
                  <div className="event-date">{formatDate(event.date, lang)}</div>
                  <p className="event-description">{translation.description}</p>
                </div>
                {event.img && (
                  <img 
                    src={event.img} 
                    alt={translation.title} 
                    className="event-image"
                    onError={(e) => {
                      e.target.style.display = 'none'; // Cache l'image si elle ne charge pas
                    }}
                  />
                )}
              </div>
            );
          })
        ) : (
          <p className="no-events-message">
            {lang === 'fr' ? "Aucun événement à afficher pour le moment" :
             lang === 'en' ? "No events to display at this time" :
             "لا توجد فعاليات لعرضها حاليا"}
          </p>
        )}
      </div>
      
      <Footer />
    </div>
  );
}

export default Events;