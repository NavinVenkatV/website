"use client"
import { Contact } from "@/components/Contact";
import { Floating } from "@/components/FLoating";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import Skills from "@/components/Skills";
import { TimelineDemo } from "@/components/Timeline";
import { Cover } from "@/components/ui/cover";


export default function Home() {


  return (
    <div className="overflow-hidden px-1">
      <Floating/>
      <Hero/>
      <Skills/>
      <div className="flex flex-col justify-center items-center p-5">  
        <div className="mt-20" id="services">       
           <Cover className="text-3xl md:text-5xl font-bold">Our Services</Cover>
        </div>  
        <h1 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-sm font-sans relative z-20 font-bold tracking-tight p-2 mb-10" >We provide you quality of services</h1>
        <Services />
      </div>
      <Projects/>
      <TimelineDemo/>
      <Contact/>
      <Footer/>
    </div>
  );
}
