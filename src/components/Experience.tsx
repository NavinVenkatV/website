import React from 'react'
import { Great_Vibes } from "next/font/google";
import Company from './ui/company';


const great = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

function Experience() {
  return (
    <div className='text-white w-full flex justify-center px-3 md:px-0'>
      <div className='w-[500px] md:w-[800px]'>
        <h1 className="text-3xl md:text-5xl   "><span className={`${great.className} text-red-700`}>Experience</span> </h1>
        <Company link='https://www.agilesoftlabs.com/' company='AgileSoftLabs' duration='Jan 2025 - April 2025' context='Worked as a Full Stack Engineer building scalable APIs and dynamic web pages.
Focused on performance, clean UI, and seamless backend integration.'/>
  <Company link='https://navinvenkat.xyz/' company='Freelancer' duration='July 2024 - Present' context='Developed and delivered two client projects as a freelance Full Stack Engineer.
Built robust APIs and responsive web interfaces tailored to client needs.'/>
      </div>
    </div>
  )
}

export default Experience
