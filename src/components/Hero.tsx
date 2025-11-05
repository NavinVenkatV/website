"use client";
import React, { useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { useRouter } from "next/navigation";
import Hori from "./Hori";
import { RotateWords } from "./AnimateText";
import { Great_Vibes } from "next/font/google";
import { MdOutlineContentCopy } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import {motion} from "framer-motion"

const great = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

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

const Hero = () => {
  const router = useRouter();
  const [click, setClick] = useState(true); // True = copy icon, False = tick icon

  const handleCopy = () => {
    navigator.clipboard
      .writeText("vnavinvenkat@gmail.com") // Copies email to clipboard
      .then(() => {
        setClick(false); // Show tick icon
        setTimeout(() => setClick(true), 2000); // Revert to copy icon after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err); // Log any errors
      });
  };

  return (
    <div>
      <div className="w-full overflow-x-hidden lg:flex justify-between px-auto py-3 lg:px-24">
        <motion.div 
        variants={container}
        initial='hidden'
        animate="show"
        className="w-[90%] text-white font-semibold items-center mx-auto py-[30px] flex flex-col z-2">
          <motion.h1
          variants={fadeInUp}
           className="text-3xl md:text-5xl">Navin Venkat </motion.h1>
           <motion.h2
           variants={fadeInUp} className="text-neutral-400 text-bold">
            Msc @<a href="https://www.epita.fr/">Epita - France</a>
           </motion.h2>
          <motion.div
          variants={fadeInUp}>
            <RotateWords
            text=""
            words={["Web developer", "web3 developer", "Pianist", "Quick Learner"]}
          />
          </motion.div>
          <motion.img
          variants={fadeInUp}
          className="rounded-full w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"
           src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXZ0dWI1c2FienQxcHJrdW93YWc2NTNsazQ5d3NlbHpvMDg1YTJmdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3FjEPbKqEPhPpmC8uY/giphy.gif" alt="Hey" />
          <div className="p-4 text-white shadow-sm max-w-xl">
            <motion.p
              variants={fadeInUp}
             className=" leading-relaxed ">
              <span className="font-bold text-red-500">22-year-old Mechanical Engineering graduate </span> turned
              <span className="font-semibold text-red-500"> Full Stack Engineer</span>. Currently exploring
              <span className="font-semibold text-red-500"> Web3</span> with
              <span className="font-semibold text-red-500"> Ethereum</span> and
              <span className="font-semibold text-red-500"> Solana</span>. Interested in
              <span className="font-semibold text-red-500"> Machine Learning</span> and passionate about
              <span className="font-semibold "> scalable applications</span>,
              <span className="font-semibold "> smart contracts</span>, and
              <span className="font-semibold "> cutting-edge technologies</span>.
            </motion.p>
          </div>


          <motion.button variants={fadeInUp}
            onClick={() => {
              router.push('https://drive.google.com/file/d/1aQLpYkAus_zv6dMumj2trqW2cRO8KANA/view')
            }}
            className={`${great.className} text-red-700 text-xl text-left  md:text-3xl mt-10 animate:gradient border px-3 py-2 rounded-2xl hover:-translate-y-1 transition-all duration-300 ease-linear hover:bg-neutral-900`}
          >
            Resume
          </motion.button>
          <motion.p  variants={fadeInUp} className="mt-5 text-white flex lg:gap-2">
            <p>Contact: vnavinvenkat@gmail.com</p>
            <p
              onClick={handleCopy}
              className="flex flex-col justify-center cursor-pointer"
            >
              {click ? <MdOutlineContentCopy /> : <TiTick />}
            </p>
          </motion.p>
          <ShootingStars className="z-[-1]" />
          <StarsBackground className="z-[-1]" />
        </motion.div>
      </div>

      <div>
        <Hori />
      </div>
    </div>
  );
};

export default Hero;