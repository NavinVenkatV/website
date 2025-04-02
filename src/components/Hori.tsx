import React from "react";
import { Great_Vibes } from "next/font/google";
import Marquee from "./ui/Marquee";

const great = Great_Vibes({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})


export default function Hori() {
  return (
    <div className="bg-black md:px-20  text-white">
      <div className="justify-center items-center space-x-4">
        <h1 className="text-3xl md:text-5xl text-center mb-10 "><span className={`${great.className} text-red-700`}>Skills</span> </h1>
        <div className="">
          <Marquee from="0" to="-100%"/>
        </div>
        <div className="mt-">
          <Marquee from="-100%" to="0"/>
        </div>
      </div>
    </div>
  );
}