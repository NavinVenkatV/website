"use client"
import { Contact } from "@/components/Contact";
import { Floating } from "@/components/FLoating";
import Footer from "@/components/Footer";
// import GitHubGraph from "@/components/gitHub";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
// import { Services } from "@/components/Services";
// import Skills from "@/components/Skills";
import { TimelineDemo } from "@/components/Timeline";
// import { useEffect } from "react";
// import Lenis from 'lenis'
// import LocomotiveScroll from 'locomotive-scroll';
// import { useEffect } from "react";



export default function Home() {

  // useEffect(()=>{
  //   const lenis = new Lenis();
  //   function raf(time : number){
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }
  //   requestAnimationFrame(raf)
  // }, [])

  return (
    <div className="overflow-hidden px-1">
      <Floating/>
      <Hero/>
      {/* <div className="flex flex-col justify-center items-center p-5">  
        <div className="mt-20" id="services">       
           <Cover className="text-3xl md:text-5xl font-bold">Our Services</Cover>
        </div>  
        <h1 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-sm font-sans relative z-20 font-bold tracking-tight p-2 mb-10" >We provide you quality of services</h1>
        <Services />
         <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
            <GitHubGraph username="NavinVenkatV" />
        </div>
      </div> */}
      <Projects/>
      <div>
        <TimelineDemo/>
      </div>
      <div className="mt-3">
        <Contact/>
      </div>
      {/* <RotateWords text="You can" words={["build", "beautiful", "websites"]} /> */}
      <Footer/>
    </div>
  );
}



