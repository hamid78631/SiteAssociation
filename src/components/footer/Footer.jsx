import "../../styles/Footer.css";
import BottomFooter from "./BottomFooter/BottomFooter";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="footer-container"
    >
      {/* Logo en haut */}
      <div className="footer-logo">
        <img src="src/assets/AQJ_Logo-workjob.png" alt="LogoJob" />
      </div>

      {/* Contenu principal en deux colonnes */}
      <div className="footer-main-content">
        {/* Colonne des réseaux sociaux */}
        

        {/* Colonne des informations */}
        <div className="info-column">
          <BottomFooter />
        </div>
        <span 
        style ={{ color : 'white' , fontWeight :'bold' , alignItems:'flex-end' , justifyContent : 'flex-end'}}>© copyright - Association Qualification des Jeunes – ⵜⴰⵎⵙⵎⵓⵏⵜ ⵓⵙⵖⵔⵜ ⵏ ⵜⵉⵄⵄⵓⵔⵎⴰ – ‎جمعية التأهيل للشباب</span>
      </div>
    </motion.footer>
  );
}

export default Footer;



























// import "../../styles/Footer.css"
// import BottomFooter from "./BottomFooter/BottomFooter"
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// function Footer(){
//     const [ref, inView] = useInView({
//         triggerOnce: true,
//         threshold: 0.2,
//       });

//     return <motion.div
//     ref={ref}
//     initial={{ opacity: 0, y: 100 }}
//     animate={inView ? { opacity: 1, y: 0 } : {}}
//     transition={{ duration: 0.8, ease: "easeOut" }}
//     className="box"> 
   
//     <div className="pieddepage">
//         <img src="src/assets/AQJ_Logo-workjob.png" alt="LogoJob" />
//     </div>
//   <div className=" display-flex flex-col items-center justify-center gap-30 p-15">
 
//    <a href="https://www.instagram.com/aqj__bm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
//       <img 
//        src="src/assets/instagram.png" 
//        alt="Instagram" 
//        className="w-8 h-8 hover:scale-110 transition-transform" 
//       />
//     </a>
//     <a href="https://www.facebook.com/AQJ.BM/">
//      <img 
//        src="src/assets/communication.png" 
//         alt="Facebook" 
//         className="w-8 h-8 hover:scale-110 transition-transform" 
//       />
//    </a>
//   <a href="https://www.youtube.com/@AQJ-BM">
//   <img 
//     src="src/assets/youtube.png" 
//     alt="Facebook" 
//     className="w-8 h-8 hover:scale-110 transition-transform" 
//   />
//   </a>
//   <a href="https://x.com/">
//   <img 
//     src="src/assets/twitter.png" 
//     alt="X (Twitter)" 
//     className="w-8 h-8 hover:scale-110 transition-transform bg-white b-black" 
//   /></a>
  
//   <a href="https://www.linkedin.com/"><img 
//     src="src/assets/Linkedin.png" 
//     alt="LinkedIn" 
//     className="w-8 h-8 hover:scale-110 transition-transform" 
//   /></a>
// </div>
//     <div className="second-footer">
//         <BottomFooter />
        
//     </div>
//     </motion.div>
// }

// export default Footer