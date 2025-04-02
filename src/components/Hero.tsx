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

const great = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

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
        <div className="w-[90%] text-white font-semibold items-center mx-auto py-[30px] flex flex-col z-2">
          <h1 className="text-3xl md:text-5xl">Navin Venkat</h1>
          <RotateWords
            text=""
            words={["Web developer", "web3 developer", "Pianist", "Quick Learner"]}
          />
          <p className="mt-5 text-justify text-sm md:text-xl max-w-[700px]">
            I&apos;m Navin Venkat, a skilled{" "}
            <span className="text-red-700">Full Stack Developer and DevOps</span>{" "}
            practitioner passionate about innovative solutions. I&apos;m currently
            advancing my expertise in <span className="text-red-700">web3</span>,
            refining my <span className="text-red-700">Web2 skills, and mastering DSA</span>. I actively contribute to projects and seek opportunities to
            collaborate and grow.
          </p>
          <button
          onClick={()=>{
            router.push('https://drive.google.com/file/d/1beWYVGInuBwK2kIYMoloWe8n0bAVwGOh/view?usp=drivesdk')
          }}
            className={`${great.className} text-red-700 text-xl md:text-3xl mt-10 animate:gradient border px-3 py-2 rounded-2xl hover:-translate-y-1 transition-all duration-300 ease-linear hover:bg-neutral-900`}
          >
            Resume
          </button>
          <p className="mt-5 text-white flex gap-2">
            <p>Contact: vnavinvenkat@gmail.com</p>
            <p
              onClick={handleCopy}
              className="flex flex-col justify-center cursor-pointer"
            >
              {click ? <MdOutlineContentCopy /> : <TiTick />}
            </p>
          </p>
          <ShootingStars className="z-[-1]" />
          <StarsBackground className="z-[-1]" />
        </div>
      </div>

      <div>
        <Hori />
      </div>
    </div>
  );
};

export default Hero;