"use client"
import React from 'react'
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Cover } from "@/components/ui/cover";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { people } from '@/data/people';
import Image from 'next/image';
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden grid lg:grid-cols-[1fr_0.6fr_0.5fr] gap-[20px]">

    <motion.div
    initial={{opacity:0, x:-20}}
    animate={{opacity:1, x:0}}
    transition={{duration:0.5}}>
    <div className="max-w-[600px] w-[90%] mx-auto py-[30px]">
      <a href="/">
        <Image src="/image.png" alt="logo" width={100} height={100} className="mb-5 object-contain object-center"/>
      </a>
      <div  className="flex flex-col justify-center h-[80%] ">
        <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans relative z-20 font-bold tracking-tight">
          Navin Venkat <br /> Passionate Web <Cover>Developer</Cover>
        </h2>
        <br />
        <a href="#contact" className="text-white border-b border-1 hover:p-[10px] hover:bg-[#5070ff2f] transition-all ease-in-out py-[10px] mr-auto font-[600]">
          Hire Me &rarr;
        </a>
        <div className="mt-[20px] flex flex-start">
          <AnimatedTooltip items={people}/>
        </div>
        <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-sm font-sans relative z-20 font-bold tracking-tight p-2">
          Our Team Members
        </h2>
      </div>
    </div>
    </motion.div>

    <motion.div
    initial={{opacity:0, y:-20}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.5}}>
    <div className="mt-5">
      <Image src="/p9.webp" alt="" width={800} height={1200} className="w-full max-h-[90vh] object-contain object-bottom"/>
      <span className='text-center flex justify-center text-white px-5'><i>“People don&apos;t care about what you say, they care about what you build.”</i></span>

    </div>
    </motion.div>

    <motion.div
    initial={{opacity:0, x:20}}
    animate={{opacity:1, x:0}}
    transition={{duration:0.5}}>
    <div className="w-[90%] mx-auto py-[30px] flex flex-col items-center z-2">
      <a href="https://drive.google.com/file/d/1G1bNQP3vCyvgQrmrxM_4tGLH92WYXz9K/view?usp=drivesdk " className="border border-1 text-white max-w-[130px] w-full h-[40px] flex justify-center items-center font-[600] rounded-2xl mx-auto pb-[1px] border-white hover:bg-[#5070ff2f] ">
        Resume
      </a>
      <h2 className="bg-clip-text mt-[20px] text-transparent text-start mr-auto bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans relative z-20 font-bold tracking-tight">
        About me
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
      I am a proactive software developer with expertise in front-end development and experience in full-stack projects. My skills span across technologies like React.js, Next.js, and the MERN stack, where I excel at creating dynamic and scalable web applications. I&apos;ve successfully delivered solutions from wallet apps to video platforms, always focusing on optimal user experience and performance. I leverage my background in Data Structures and Algorithms (DSA) to craft efficient, robust code. As a freelancer, I thrive on turning client visions into engaging, interactive websites
      </p>
      

      <ShootingStars className="z-[-1]"/>
      <StarsBackground className="z-[-1]"/>

    </div>
    </motion.div>

  </div>
  )
}

export default Hero
