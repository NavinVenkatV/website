import React from "react";
import { Great_Vibes } from "next/font/google";
import Marquee from "./ui/Marquee";
import {motion} from "framer-motion"

const great = Great_Vibes({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

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


export default function Hori() {
  return (
    <div className="bg-black md:px-20  text-white">
      <motion.div
      initial="hidden"
      whileInView="show"
      variants={container}
       className="justify-center items-center space-x-4">
        <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl px-5 md:px-14   mb-10 "><span className={`${great.className} text-red-700`}>Skills</span> </motion.h1>
        <div className="">
          <Marquee from="0" to="-100%"/>
        </div>
        <div className="mt-">
          <Marquee from="-100%" to="0"/>
        </div>
      </motion.div>
    </div>
  );
}