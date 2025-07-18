 "use client";
import '../styles/Equipe.css'
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import Footer from '../components/footer/Footer';

const executiveTeam = [
  {
    id: 1,
    name: "Mme. Oumayma OUGUENNOUS",
    image: 'src/assets/blocPhoto/prof2.jpeg',
    description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
    contact: 'Membre1@partners.org',
    role: "Présidente",
  },
  {
    id: 2,
    name: "Mme. Bouchra BEN AMMA",
    image: 'src/assets/blocPhoto/prof1.jpeg',
    description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
    contact: 'Membre2@partners.org',
    role: "Sécrétaire Générale",
  },
  {
    id: 3,
    name: "Mme. Rihab MAHDAD",
    image: 'src/assets/blocPhoto/prof3.jpeg',
    description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
    contact: 'Membre3@partners.org',
    role: "Trésoriere",
  },
  {
    id: 4,
    name: "Mme. Awatif BOUSSETTA",
    image: 'src/assets/blocPhoto/prof2.jpeg',
    description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
    contact: 'Membre1@partners.org',
    role: "Conseillere",
  },
  {
    id: 5,
    name: "Mr. Rachid ENNAJI ",
    image: 'src/assets/blocPhoto/prof1.jpeg',
    description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
    contact: 'Membre2@partners.org',
    role: "Conseiller",
  },
  {
    id: 6,
    name: "Mr. Rachid EL HABIB",
    image: 'src/assets/blocPhoto/prof3.jpeg',
    description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
    contact: 'Membre3@partners.org',
    role: "Directeur exécutif",
  },
];

const workTeam = [
  {
    id: 1,
    name: "Mr. Youssef LOUTA ",
    role: "Chargé des R.P., partenariat et communication",
    image: 'src/assets/blocPhoto/prof1.jpeg',
    description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
    contact: "prof1@partners.org"
  },
  {
    id: 2,
    name: "Mr. Omar AMINE ",
    role: "Coach",
    image: 'src/assets/blocPhoto/prof2.jpeg',
    description: "Pionnier dans les technologies éducatives et la recherche appliquée.",
    contact: "prof2@partners.org"
  },
  {
    id: 3,
    name: "Mr. Anass AZIZI ",
    role: "Assistant admin et finance",
    image: 'src/assets/blocPhoto/prof3.jpeg',
    description: "Spécialiste en développement des compétences et orientation professionnelle.",
    contact: "prof3@partners.org"
  },
  {
    id: 4,
    name: "Mme. Fatima Zahra MAHDAD ",
    role: "Chargée de projet",
    image: 'src/assets/blocPhoto/prof1.jpeg',
    description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
    contact: "prof1@partners.org"
  },
  {
    id: 5,
    name: "Mme. Meryem TAOUSS ",
    role: "Coordinatrice de projet",
    image: 'src/assets/blocPhoto/prof2.jpeg',
    description: "Pionnier dans les technologies éducatives et la recherche appliquée.",
    contact: "prof2@partners.org"
  },
  {
    id: 6,
    name: "Mme. Narimane TAHIRI",
    role: "Assistante bureau",
    image: 'src/assets/blocPhoto/prof3.jpeg',
    description: "Spécialiste en développement des compétences et orientation professionnelle.",
    contact: "prof3@partners.org"
  },
  {
    id: 7,
    name: "Mme. Soumaya SALHI ",
    role: "Responsable admin et finance",
    image: 'src/assets/blocPhoto/prof3.jpeg',
    description: "Spécialiste en développement des compétences et orientation professionnelle.",
    contact: "prof3@partners.org"
  },
];

const TeamSlider = ({ team, selectedMember, setSelectedMember }) => {
  const scrollRef = useRef(null);

  const scrollByAmount = 220;

  const scrollLeft = () => {
    const container = scrollRef.current;
    if (!container) return;
    if (container.scrollLeft === 0) {
      container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    if (!container) return;
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollByAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative max-w-[500px] mx-auto overflow-hidden equipe-page">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
      >
        <ChevronLeft />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-10 py-4"
      >
        {team.map((member) => (
          <div
            key={member.id}
            className={`flex-shrink-0 w-40 cursor-pointer border rounded-lg p-2 ${
              selectedMember?.id === member.id ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setSelectedMember(member)}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-36 object-cover rounded"
            />
            <p className="text-sm font-semibold text-black text-center mt-2">{member.name}</p>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default function AssociationTeamPage() {
  const [selectedExecutive, setSelectedExecutive] = useState(executiveTeam[0]);
  const [selectedWorker, setSelectedWorker] = useState(workTeam[0]);

  return (
    <div className="p-6 space-y-12">
      {/* Bloc équipe exécutive */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Équipe Exécutive</h2>
        <div className="flex flex-row gap-6">
          <div className="flex-1">
            <TeamSlider
              team={executiveTeam}
              selectedMember={selectedExecutive}
              setSelectedMember={setSelectedExecutive}
            />
          </div>
          <div className="w-1/2 bg-gray-100 rounded p-4 shadow">
            <h3 className="text-xl text-black font-semibold mb-2">{selectedExecutive.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{selectedExecutive.role}</p>
            <p className="text-gray-700">{selectedExecutive.description}</p>
          </div>
        </div>
      </section>

      {/* Bloc équipe de travail */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Équipe de Travail</h2>
        <div className="flex flex-row gap-6">
          <div className="flex-1">
            <TeamSlider
              team={workTeam}
              selectedMember={selectedWorker}
              setSelectedMember={setSelectedWorker}
            />
          </div>
          <div className="w-1/2 bg-gray-100 rounded p-4 shadow">
            <h3 className="text-xl text-black font-semibold mb-2">{selectedWorker.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{selectedWorker.role}</p>
            <p className="text-gray-700">{selectedWorker.description}</p>
          </div>
        </div>
      </section>
      <div > <Footer/></div>
    </div>
   
  );
}























// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import Slider from "react-slick";
// import '../styles/Equipe.css'

// function Equipe() {
//     const [ref, inView] = useInView({
//         triggerOnce: true,
//         threshold: 0.2,
//     });

//     const [choix, setChoix] = useState(null);

//     const membres = [
//         {
//             id: 1,
//             name: "Mr. Youssef LOUTA ",
//             role: "Chargé des R.P., partenariat et communication",
//             image: 'src/assets/blocPhoto/prof1.jpeg',
//             description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
//             contact: "prof1@partners.org"
//         },
//         {
//             id: 2,
//             name: "Mr. Omar AMINE ",
//             role: "Coach",
//             image: 'src/assets/blocPhoto/prof2.jpeg',
//             description: "Pionnier dans les technologies éducatives et la recherche appliquée.",
//             contact: "prof2@partners.org"
//         },
//         {
//             id: 3,
//             name: "Mr. Anass AZIZI ",
//             role: "Assistant admin et finance",
//             image: 'src/assets/blocPhoto/prof3.jpeg',
//             description: "Spécialiste en développement des compétences et orientation professionnelle.",
//             contact: "prof3@partners.org"
//         },
//         {
//             id: 4,
//             name: "Mme. Fatima Zahra MAHDAD ",
//             role: "chargée de projet",
//             image: 'src/assets/blocPhoto/prof1.jpeg',
//             description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
//             contact: "prof1@partners.org"
//         },
//         {
//             id: 5,
//             name: "Mme. Meryem TAOUSS ",
//             role: "Coordinatrice de projet",
//             image: 'src/assets/blocPhoto/prof2.jpeg',
//             description: "Pionnier dans les technologies éducatives et la recherche appliquée.",
//             contact: "prof2@partners.org"
//         },
//         {
//             id: 6,
//             name: "Mme. Narimane TAHIRI",
//             role: "Assistante bureau",
//             image: 'src/assets/blocPhoto/prof3.jpeg',
//             description: "Spécialiste en développement des compétences et orientation professionnelle.",
//             contact: "prof3@partners.org"
//         },
//         {
//             id: 7,
//             name: "Mme. Soumaya SALHI ",
//             role: "Responsable admin et finance",
//             image: 'src/assets/blocPhoto/prof3.jpeg',
//             description: "Spécialiste en développement des compétences et orientation professionnelle.",
//             contact: "prof3@partners.org"
//         },
//     ];

//     const equipes = [
//         {
//             id: 1,
//             name: "Mme. Oumayma OUGUENNOUS",
//             image: 'src/assets/blocPhoto/prof2.jpeg',
//             description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
//             contact: 'Membre1@partners.org',
//             role: "Présidente",
//         },
//         {
//             id: 2,
//             name: "Mme. Bouchra BEN AMMA",
//             image: 'src/assets/blocPhoto/prof1.jpeg',
//             description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
//             contact: 'Membre2@partners.org',
//             role: "Sécrétaire Générale",
//         },
//         {
//             id: 3,
//             name: "Mme. Rihab MAHDAD",
//             image: 'src/assets/blocPhoto/prof3.jpeg',
//             description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
//             contact: 'Membre3@partners.org',
//             role: "Trésoriere",
//         },
//         {
//             id: 4,
//             name: "Mme. Awatif BOUSSETTA",
//             image: 'src/assets/blocPhoto/prof2.jpeg',
//             description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
//             contact: 'Membre1@partners.org',
//             role: "Conseillere",
//         },
//         {
//             id: 5,
//             name: "Mr. Rachid ENNAJI ",
//             image: 'src/assets/blocPhoto/prof1.jpeg',
//             description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
//             contact: 'Membre2@partners.org',
//             role: "Conseiller",
//         },
//         {
//             id: 6,
//             name: "Mr. Rachid EL HABIB",
//             image: 'src/assets/blocPhoto/prof3.jpeg',
//             description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
//             contact: 'Membre3@partners.org',
//             role: "Directeur exécutif",
//         },
//     ];

//     const handleClick = (personne, type) => {
//         setChoix({ ...personne, type });
//     };

//     const settings = {
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: true, // Pour afficher les flèches
//         centerMode: true, // Pour centrer les éléments du Slider
//         focusOnSelect: true, // Pour sélectionner un élément au centre
//         centerPadding: '10%', // Espace autour de l'élément centré
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: 100 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="box"
//         >
//             <div className="bg-gray-400 pt-20 pb-20">
//                 <div className="flex flex-row gap-6 ml-[9%] mr-[9%]">

//                     {/* Partie gauche : Équipes */}
//                     <div className="flex flex-col w-[70%]">
//                         <h1 className="text-cyan-300 pt-[5%] h-[70px] font-extrabold text-4xl">
//                             Equipe éxécutive
//                         </h1>
//                         <div className="w-full mt-4">
//                             <Slider {...settings}>
//                                 {equipes.map((equipe) => (
//                                     <div
//                                         key={equipe.id}
//                                         onClick={() => handleClick(equipe, 'equipe')}
//                                         className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
//                                             choix?.id === equipe.id && choix?.type === 'equipe' ? 'ring-4 ring-cyan-300' : ''
//                                         }`}
//                                     >
//                                         <img
//                                             src={equipe.image}
//                                             alt={equipe.name}
//                                             className="w-full h-48 object-cover rounded-lg"
//                                         />
//                                         <h3 className="text-white mt-2 font-bold">{equipe.name}</h3>
//                                         <p className="text-white text-sm">{equipe.role}</p>
//                                     </div>
//                                 ))}
//                             </Slider>
//                         </div>

//                         <h1 className="text-cyan-300 mt-8 h-[70px] font-extrabold text-4xl">
//                             Equipe de Travail
//                         </h1>
//                         <div className="w-full mt-4">
//                             <Slider {...settings}>
//                                 {membres.map((membre) => (
//                                     <div
//                                         key={membre.id}
//                                         onClick={() => handleClick(membre, 'membre')}
//                                         className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
//                                             choix?.id === membre.id && choix?.type === 'membre' ? 'ring-4 ring-cyan-300' : ''
//                                         }`}
//                                     >
//                                         <img
//                                             src={membre.image}
//                                             alt={membre.name}
//                                             className="w-full h-48 object-cover rounded-lg"
//                                         />
//                                         <h3 className="text-white mt-2 font-bold">{membre.name}</h3>
//                                         <p className="text-white text-sm">{membre.role}</p>
//                                     </div>
//                                 ))}
//                             </Slider>
//                         </div>
//                     </div>

//                     {/* Partie droite : Profils sélectionnés */}
//                     <div className="flex flex-col w-[30%] mt-50 gap-8">
//                         <div className="bg-gray-900 p-6 rounded-lg h-fit">
//                             <h2 className="text-cyan-300 text-xl font-bold">Equipe éxécutive</h2>
//                             {choix?.type === 'equipe' && (
//                                 <div className="text-white">
//                                     <div className="flex items-center mb-6">
//                                         <img
//                                             src={choix.image}
//                                             alt={choix.name}
//                                             className="w-24 h-24 rounded-full object-cover mr-4"
//                                         />
//                                         <div>
//                                             <h2 className="text-2xl font-bold">{choix.name}</h2>
//                                             <p className="text-cyan-300">{choix.role}</p>
//                                         </div>
//                                     </div>
//                                     <div className="mb-4">
//                                         <h3 className="font-bold text-lg mb-2">Description</h3>
//                                         <p className="text-gray-300">{choix.description}</p>
//                                     </div>
//                                     <div>
//                                         <h3 className="font-bold text-lg mb-2">Contact</h3>
//                                         <a
//                                             href={`mailto:${choix.contact}`}
//                                             className="text-cyan-300 hover:underline"
//                                         >
//                                             {choix.contact}
//                                         </a>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>

//                         <div className="bg-gray-900 p-6 rounded-lg h-fit">
//                             <h2 className="text-cyan-300 text-xl font-bold">Equipe de Travail</h2>
//                             {choix?.type === 'membre' && (
//                                 <div className="text-white">
//                                     <div className="flex items-center mb-6">
//                                         <img
//                                             src={choix.image}
//                                             alt={choix.name}
//                                             className="w-24 h-24 rounded-full object-cover mr-4"
//                                         />
//                                         <div>
//                                             <h2 className="text-2xl font-bold">{choix.name}</h2>
//                                             <p className="text-cyan-300">{choix.role}</p>
//                                         </div>
//                                     </div>
//                                     <div className="mb-4">
//                                         <h3 className="font-bold text-lg mb-2">Description</h3>
//                                         <p className="text-gray-300">{choix.description}</p>
//                                     </div>
//                                     <div>
//                                         <h3 className="font-bold text-lg mb-2">Contact</h3>
//                                         <a
//                                             href={`mailto:${choix.contact}`}
//                                             className="text-cyan-300 hover:underline"
//                                         >
//                                             {choix.contact}
//                                         </a>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>

//                 </div> {/* fin flex-row */}
//             </div> {/* fin bg-black */}
//         </motion.div>
//     );
// }

// export default Equipe;
