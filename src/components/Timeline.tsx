import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "./ui/cover";

export function TimelineDemo() {
  const data = [
    {
      title: "Experience",
      content: (
        <div className="flex flex-col gap-[20px]" id="experience">
          <div>
            <div>
              <Cover className="text-3xl font-bold p-2">Freelancing</Cover>
            </div>
            <span className="text-blue-400 p-2">2024</span>
            <h4 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">I&apos;ve successfully completed multiple React and Next.js projects for two clients, delivering high-quality, responsive web applications, and I'm eager to take on new and exciting opportunities.</h4>
          </div>
          <div>
            <div>
              <Cover className="text-3xl font-bold p-2">Web Developer at Stunmonk</Cover>
            </div>
            <span className="text-blue-400 p-2">Feb-July (2024)</span>
            <h4 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">During my internship, I developed a Full Stack Web Application, focusing on both frontend
              and backend development using the MERN stack (MongoDB, Express.js, React.js, and
              Node.js). This experience enhanced my skills in creating seamless user interfaces and robust
              server-side functionalities. I collaborated with the web development team to implement best
              practices and deliver a cohesive application</h4>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="flex flex-col gap-[20px]">
          <div>
            <div>
              <Cover className="text-3xl font-bold p-2">Puducherry Technological University</Cover>
            </div>
            <span className="text-blue-400 p-2">2020-2024</span>
            <h4 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">B.Tech Mechanical Engineering - CGPA-7.9</h4>
          </div>
          <div>
            <div>
              <Cover className="text-3xl font-bold p-2">AHSS (Py)</Cover>
            </div>
            <span className="text-blue-400 p-2">2020</span>
            <h4 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">Higher Secondary - 80.3%</h4>
          </div>
        </div>
      ),
    },
    {
      title: "Hobby",
      content: (
        <div className="flex flex-col gap-[20px]">
          <div>
            <div>
              <Cover className="text-3xl font-bold p-2">Keyboardist</Cover>
            </div>
            <span className="text-blue-400 p-2">2024</span>
            <h4 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">Secured first class distinction in Electronic Keyboard of Trinity College London (grade 4)</h4>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
