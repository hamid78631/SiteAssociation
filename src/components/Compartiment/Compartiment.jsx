import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import prof1 from '../../../assets/blocPhoto/prof1.jpeg'
import prof2 from '../../../assets/blocPhoto/prof2.jpeg'
import prof3 from '../../../assets/blocPhoto/prof3.jpeg'


function Compartiment() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });

    const [choix, setChoix] = useState(null);
      const membres = [
        {
            id : 1 ,
            name : "Membre1",
            image : {prof1},
            description :"Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.", 
            contact : 'Membre1@partners.org',
            role: "Expert en Éducation",
        },
        {
            id : 2 ,
            name : "Membre2",
            image : {prof2},
            description :"Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.", 
            contact : 'Membre2@partners.org',
            role: "Expert en Éducation",

        },
        {
            id : 3 ,
            name : "Membre3",
            image : {prof3},
            description :"Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.", 
            contact : 'Membre3@partners.org',
            role: "Expert en Éducation",
        }
      ];


    const equipes = [
        {
            id: 1,
            name: "Professeur 1",
            role: "Expert en Éducation",
            image: {prof1},
            description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
            contact: "prof1@partners.org"
        },
        {
            id: 2,
            name: "Professeur 2",
            role: "Directeur de Recherche",
            image: {prof2},
            description: "Pionnier dans les technologies éducatives et la recherche appliquée.",
            contact: "prof2@partners.org"
        },
        {
            id: 3,
            name: "Professeur 3",
            role: "Conseiller Pédagogique",
            image: {prof3},
            description: "Spécialiste en développement des compétences et orientation professionnelle.",
            contact: "prof3@partners.org"
        }
    ];

    const handleClick = (personne, type) => {
        setChoix({ ...personne, type });
    }
    
    return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="box"
        > 
          <div className="bg-gray-800 pt-20 pb-20">
            <div className="flex flex-row gap-12 ml-[9%] mr-[9%]">
      
              {/* Partie gauche : Équipes */}
              <div className="flex flex-col w-[70%]">
                <h1 className="text-cyan-300 pt-[5%] h-[70px] font-extrabold text-4xl">
                  Equipe éxécutive
                </h1><br />
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  {equipes.map((equipe) => (
                    <div 
                      key={equipe.id}
                      onClick={() => handleClick(equipe, 'equipe')}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                        choix?.id === equipe.id && choix?.type === 'equipe' ?  'ring-4 ring-cyan-300' : ''
                      }`}
                    >
                      <img 
                        src={equipe.image} 
                        alt={equipe.name} 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <h3 className="text-white mt-2 font-bold">{equipe.name}</h3>
                      <p className="text-gray-400 text-sm">{equipe.role}</p>
                    </div>
                  ))}
                </div>
      
                <h1 className="text-cyan-300 pt-[5%] h-[70px] font-extrabold text-4xl">
                  Notre équipe
                </h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  {membres.map((membre) => (
                    <div 
                      key={membre.id}
                      onClick={() => handleClick(membre , 'membre')}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                        choix?.id === membre.id && choix?.type === 'membre' ? 'ring-4 ring-cyan-300' : ''
                      }`}
                    >
                      <img 
                        src={membre.image} 
                        alt={membre.name} 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <h3 className="text-white mt-2 font-bold">{membre.name}</h3>
                      <p className="text-gray-400 text-sm">{membre.role}</p>
                    </div>
                  ))}
                </div>
              </div>
      
              {/* Partie droite : Profil sélectionné */}
              <div className="bg-gray-900 p-6 rounded-lg sticky top-20 h-fit w-[30%]">
                {choix ? (
                  <div className="text-white">
                    <div className="flex items-center mb-6">
                      <img 
                        src={choix.image} 
                        alt={choix.name} 
                        className="w-24 h-24 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h2 className="text-2xl font-bold">{choix.name}</h2>
                        <p className="text-cyan-300">{choix.role}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-bold text-lg mb-2">Description</h3>
                      <p className="text-gray-300">{choix.description}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Contact</h3>
                      <a 
                        href={`mailto:${choix.contact}`} 
                        className="text-cyan-300 hover:underline"
                      >
                        {choix.contact}
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-400 h-full flex items-center justify-center">
                    <p>Sélectionnez un partenaire pour voir son profil</p>
                  </div>
                )}
              </div>
      
            </div> {/* fin flex-row */}
          </div> {/* fin bg-black */}
        </motion.div>
      );
      
      
}

export default Compartiment;