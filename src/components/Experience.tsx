import React from 'react'
import { Great_Vibes } from "next/font/google";
import Company from './ui/company';
import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const great = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

function Experience() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={container}
      className='text-white w-full flex justify-center px-3 md:px-0'>
      <div className='w-[500px] md:w-[800px]'>
        <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl   "><span className={`${great.className} text-red-700`}>Experience</span> </motion.h1>
       <motion.div
       variants={fadeInUp}> <Company link='https://www.agilesoftlabs.com/' company='AgileSoftLabs' duration='Jan 2025 - April 2025' context='Worked as a Full Stack Engineer building scalable APIs and dynamic web pages.
Focused on performance, clean UI, and seamless backend integration.'/>

       </motion.div>
        <motion.div variants={fadeInUp}><Company link='https://navinvenkat.xyz/' company='Freelancer' duration='July 2024 - Present' context='Developed and delivered two client projects as a freelance Full Stack Engineer.
Built robust APIs and responsive web interfaces tailored to client needs.'/></motion.div>
      </div>
    </motion.div>
  )
}

export default Experience
