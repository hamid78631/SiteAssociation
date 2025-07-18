import Cadrant from './Cadrant'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { events } from '../variables/events.jsx';


function Arrierre({events }){
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
    <div className="h-100vh bg-blue-950">
        <Cadrant events={events} />
    </div>
    </motion.div>
}
export default Arrierre