import React from 'react';
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <motion.div
    initial={{y:40}}
    whileInView={{y:0}}
    transition={{duration : 0.4, ease: 'easeInOut'}}
     className=' p-5 text-center text-sm  text-black bg-red-900 rounded-2xl gap-1 mt-4 md:mt-40'>
      2025 - Developed By <span className='text-black font-bold'>Navin Venkat</span>  </motion.div>

  );
};

export default Footer;
