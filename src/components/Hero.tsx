"use client"
import React from 'react'
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from 'next/image';
import { motion } from 'framer-motion'
import Time from './Time';
import { RotateWords } from './AnimateText';
// import GitHub from './GitHub';
import Skills from './Skills';
import { useRouter } from 'next/navigation';
const Hero = () => {
  const router = useRouter();
  return (
    <div>
      <div className="w-full  overflow-x-hidden lg:flex justify-between px-auto py-3 lg:px-24 lg:py-16">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <div className="max-w-[600px] w-[90%] mx-auto ">
            <a href="/">
              <Image src="/image.png" alt="logo" width={100} height={100} className="mb-5 object-contain object-center" />
              <div className='my-3'>
                <Time />
              </div>
              {/* <GitHub/> */}
            </a>
            <RotateWords text="Hey 👋 I'm Navin Venkat" words={["an Web Developer", "an Web3 Developer", "an Fast Learner", "an Pianist"]} />
            {/* <div className="flex flex-col justify-center h-[80%] ">
      <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans relative z-20 font-bold tracking-tight">
        Navin Venkat <br /> Passionate <RotateWords text='' words={["Web Developer", "Web3 Developer"]}/>
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
    </div> */}
          </div>
        </motion.div>

        {/* <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}>
  <div className="mt-5">
    <div className='rounded-xl '>
      <video muted loop autoPlay src="/auro.mp4" height={1200} className="w-full max-h-[90vh] " />
    </div>
    <span className='text-center flex justify-center mt-3 text-white px-5'><i>“People don&apos;t care about what you say, they care about what you build.”</i></span>
  </div>
</motion.div> */}

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}>
          <div className="w-[90%] mx-auto py-[30px] flex flex-col  z-2">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <span className="text-2xl md:text-5xl text-start w-auto  font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white">About Me</span>
            </motion.div>

            <p className="max-w-xl mx-auto text-sm mt-12 md:text-lg text-neutral-700 dark:text-neutral-400 ">
              I&apos;m <span className="text-white font-bold">Navin Venkat</span>, a freelance
              <span className="text-white font-bold"> full-stack developer</span> specializing in
              <span className="text-white font-bold"> MERN stack</span> and
              <span className="text-white font-bold"> Next.js</span>. I have experience with
              <span className="text-white font-bold"> DevOps</span>,
              <span className="text-white font-bold"> AWS</span>, and
              <span className="text-white font-bold"> Docker</span>. Currently, I&apos;m exploring
              <span className="text-white font-bold"> Web3</span> and sharpening my skills in
              <span className="text-white font-bold"> Data Structures and Algorithms (DSA)</span>.  </p>
            {/* <a href="https://drive.google.com/file/d/17uSTm5G9W-CC9IOloxWMAtPVUPgARTGO/view?usp=drivesdk" className="border mt-10 bg-gradient-to-r hover:scale-105 transition-all focus:ring-2 focus:ring-white from-blue-500 to-purple-500 border-1 text-white max-w-[130px] w-full h-[40px] flex justify-center items-center font-[600] rounded-2xl mx-auto pb-[1px] border-white hover:bg-[#5070ff2f] ">
              Resume
            </a> */}
            <button onClick={()=>{
              router.push('https://drive.google.com/file/d/17uSTm5G9W-CC9IOloxWMAtPVUPgARTGO/view?usp=drivesdk')
            }} className='p-1 bg-blue-50 mt-10 max-w-[130px] w-full bg-gradient-to-r hover:scale-105 text-white transition-all focus:ring-2 focus:ring-white from-blue-500 to-purple-500 rounded-xl'>Resume</button>
            <ShootingStars className="z-[-1]" />
            <StarsBackground className="z-[-1]" />

          </div>
        </motion.div>

      </div>
      
      <div className='px-auto lg:px-24 '>
      <motion.div
            initial={{opacity : 0, x:-50}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:0.5, ease:"easeInOut"}}
            >
                <span className="text-2xl pb-5 lg:pb-16 md:text-5xl flex justify-center text-center w-auto  font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white">Skills & Technologies</span>
            </motion.div>
      <motion.div
      initial={{z:50, opacity:0}}
      whileInView={{z:0, opacity:1}}
      transition={{duration:0.5, ease: "easeInOut"}}
      >
      <div className='flex justify-center gap-2 flex-wrap'>
          <Skills skill="C++" />, <Skills skill="Next.js" />, <Skills skill="TypeScript" />, <Skills skill="React" />,
          <Skills skill="Docker" />, <Skills skill="Tailwind" />, <Skills skill="Prisma" />, <Skills skill="Express.js" />,
          <Skills skill="MongoDB" />, <Skills skill="Node.js" />, <Skills skill="Redis" />, <Skills skill="Bun" />,
          <Skills skill="JavaScript" />, <Skills skill="PostgreSQL" />, <Skills skill="Cloudflare" />,  <Skills skill="AWS" />, <Skills skill='&more'/>
        </div>
      </motion.div>

      </div>
    </div>
  )
}

export default Hero
