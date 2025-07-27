import { useEffect, useState } from 'react';
import '../styles/Cadrant.css';
import { useTranslation } from 'react-i18next';
import img from '../assets/img3.jpeg'
function Cadrant({ events }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [timeLeft, setTimeLeft] = useState({});
  const [nextEvent, setNextEvent] = useState(null);

  useEffect(() => {
    const now = new Date();
    const upcomingEvents = events
      .filter(event => new Date(event.date) > now)
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    if (upcomingEvents.length > 0) {
      setNextEvent(upcomingEvents[0]);
    }
  }, [events]);

  useEffect(() => {
    if (!nextEvent) return;

    const interval = setInterval(() => {
      const now = new Date();
      const eventDate = new Date(nextEvent.date);
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({});
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [nextEvent]);

  return (
    <div className="first-cadrant">
      {/* Image */}
      <section className="second-cadrant">
        <img src={img} alt="image3" />
      </section>

      {/* Texte et compte à rebours */}
      <section className="third-cadrant">
        {timeLeft.days !== undefined ? (
          <div className="countdown">
            <div><p>{timeLeft.days}</p><span>{t('cadrant.days')}</span></div>
            <div><p>{timeLeft.hours}</p><span>{t('cadrant.hours')}</span></div>
            <div><p>{timeLeft.minutes}</p><span>{t('cadrant.minutes')}</span></div>
            <div><p>{timeLeft.seconds}</p><span>{t('cadrant.seconds')}</span></div>
          </div>
        ) : (
          <p className="event-started">L'événement a commencé !</p>
        )}

        {nextEvent && (
         <p className="cadrant-description">
           {t('cadrant.nextEvent')}<strong>{nextEvent.translations[currentLang]?.title}</strong><br />
           {nextEvent.translations[currentLang]?.description}
          </p>

        )}
      </section>
    </div>
  );
}

export default Cadrant;





