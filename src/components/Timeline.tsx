import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { GiPointySword } from "react-icons/gi";

export function TimelineDemo() {
  const data = [
    {
      title: "Experience",
      content: (
        <div className="flex flex-col gap-[20px]" id="experience">
          <div>
            <div>
              <span className="text-md md:text-2xl w-full  bg-gradient-to-r bg-clip-text text-transparent from-purple-500 to-blue-500  font-bold ">Software Developer @AgileSoftLabs</span>
            </div>
            <span className="mt-10 text-white text-xs md:text-sm lg:text-lg">2025 - Present</span>
            <ul className="text-neutral-800 mt-7 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-2">
              <li className="flex gap-2"> <GiPointySword/>Interning as a Full-Stack Developer, actively contributing to both frontend and backend development.</li>
              <li className="flex gap-2"> <GiPointySword/>Integrating RESTful APIs and third-party services to enhance application functionality and ensure seamless data flow.</li>
              <li className="flex gap-2"> <GiPointySword/>Managing global state using Redux for efficient data handling, improved performance, and better user experience.</li>
              <li className="flex gap-2"> <GiPointySword/>Implementing Firebase notifications to enable real-time alerts, enhancing user engagement and interactivity.</li>
              <li className="flex gap-2"> <GiPointySword/>Collaborating with cross-functional teams to develop scalable, high-performance applications while following best coding practices.</li>
            </ul>

          </div>
          <div>
            <div>
              <span className="text-md md:text-2xl  bg-gradient-to-r bg-clip-text text-transparent from-purple-500 to-blue-500 font-bold ">Freelancing</span>
            </div>
            <span className="text-white text-xs md:text-sm lg:text-lg">2024</span>
            <h4 className="text-neutral-800 dark:text-neutral-200 mt-7 text-xs md:text-sm font-normal mb-8">I&apos;ve successfully completed multiple React and Next.js projects for two clients, delivering high-quality, responsive web applications, and I&apos;m eager to take on new and exciting opportunities.</h4>
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
              <span className="text-md md:text-2xl  bg-gradient-to-r bg-clip-text text-transparent from-purple-500 to-blue-500 font-bold ">Puducherry Technological University</span>
            </div>
            <span className="text-white text-xs md:text-sm lg:text-lg">2020-2024</span>
            <h4 className="text-neutral-800 mt-7 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">B.Tech Mechanical Engineering - CGPA-7.9</h4>
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
