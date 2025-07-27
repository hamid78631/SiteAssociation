import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Arrierre from '../components/Arrierre'
import Element2 from '../components/Element2'
import Compartiment from '../components/Compartiment/Compartiment'
import Stats from '../components/BarStats/Stats'
import Contact from './Contact'
import Footer from '../components/footer/Footer'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { events } from '../variables/events'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const images = [
  '/src/assets/img1.jpeg',
  '/src/assets/img2.jpeg',
  '/src/assets/img3.jpeg',
  '/src/assets/forum4.jpeg',
  '/src/assets/forum2.jpeg',
  '/src/assets/forum7.jpeg',
]

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const settings = {
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    fade: true,
  }

  const eventDate = new Date("2024-01-01T10:00:00")
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const distance = eventDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (distance < 0) {
        clearInterval(interval)
        setTimeLeft({})
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const { t } = useTranslation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="box">


      {/* SLIDER */}
      <div className="relative h-[100vh]">
        <Slider {...settings} className="h-full">
          {images.map((img, i) => (
            <div key={i}>
              <div
                className="h-[100vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="bg-black/50 h-full flex flex-col items-center justify-center text-white text-center">
                  <h1 className="text-4xl md:text-4xl font-bold">{t('home.title')}</h1>
                  <h2 className="text-6xl md:text-6xl font-bold text-cyan-300">{t('home.subtitle')}</h2>
                  <h3 className="text-3xl md:text-3xl font-bold">{t('home.quote')}</h3>
                  <p className="flex items-center justify-center mt-[50px] px-[150px] text-2xl font-bold leading-relaxed transition-all duration-500 
             scroll-ani-fade-in">{t('home.description')}</p>
    
                    <Link to="/about"
                      onClick={() => window.scrollTo(0, 0)}
                      className="bg-cyan-300 text-white p-4 pl-10 pr-10 rounded-2xl hover:bg-blue-600 duration-500 mt-[50px]"
                    >
                      {t('home.read_more')}
                    </Link>

                </div>
                
              </div>
            </div>
          ))}
        </Slider>
          
       <div><Arrierre events={events}/></div>
       <Stats/> <br />
        <div> <Element2 /></div>  

        
        <div className="w-full">
          <Partenaire />
        </div>

        <div className="bg-gray-400"><Contact/></div>
        <div className="bg-gradient-to-b from-cyan-300 to-blue-900 w-full">
        <Footer/>
      </div>

      </div>

    </motion.div>
  )
}
