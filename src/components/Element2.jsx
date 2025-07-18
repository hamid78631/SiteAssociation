import Images from "./phase2/Images.jsx"
import Detail from "./phase2/Detail.jsx"
import  "../styles/Element2.css"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



function Element2(){
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
    return <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 100 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="box"> 
    <div className="parentElement">
        <section>
        <Images />
        </section>
        <section>
        <Detail />
        </section>
    </div>
    </motion.div>
}
export default Element2