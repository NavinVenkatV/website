"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import ProjectContents from "./ui/projectContents";
import {motion} from "framer-motion"

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" id="projects">
      <motion.h2
      initial={{opacity : 0, x:50}}
      whileInView={{opacity : 1, x:0}}
      transition={{duration : 0.5, ease:"easeIn"}}
       className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Recent Projects & Blogs
      </motion.h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "pingMe",
    title: "Real time website monitoring solution.",
    src: "/pingME_mobile.png",
    content: <ProjectContents navigate="https://pingmeyourwebsite.vercel.app/" title={`PingMe is a tool that helps you monitor your website and get notified when it goes down.`} src="/pingMe_pc.png"
      description={`Developed PingMe, a SaaS platform for website monitoring, providing real-time performance and uptime tracking for websites.
 Implemented features for users to monitor multiple websites, track downtime, and get instant alerts on performance issues.
 Built the front-end with Next.js and styled the platform using Tailwind CSS for a clean and responsive UI.
 Utilized NextAuth for secure user authentication and management, providing a personalized user experience.
 Used Prisma and PostgreSQL to handle efficient data management and storage in the backend.
 Integrated Framer Motion for smooth animations and transitions to enhance user interaction and experience.`} />,
  },
  {
    category: "DigixLabs",
    title: "Building the Future of Technical Content.",
    src: "/digix_mobile.png",
    content: <ProjectContents navigate="https://digix-labs.vercel.app/" title={`Technical expertise, viral content,and growth strategies, all in one place.`} src="/digix_pc.png"
      description={`Developed a SaaS platform tailored for technical content creators, offering marketing, website creation, and innovative project ideas.
 Built an engaging and dynamic user interface using Framer Motion and GSAP for animations and interactions.
 Integrated user authentication and management with Next Auth to ensure secure access and seamless user onboarding.
 Utilized Prisma and PostgreSQL for efficient data handling and storage, ensuring a scalable backend architecture.
 Implemented advanced content management tools to help creators streamline their workflows and reach broader audiences.`} />,
  },
  {
    category: "NOAH",
    title: "Enhance your business with us",
    src: "/p1.png",
    content: <ProjectContents navigate="https://noahdevs.vercel.app/" title={`N O A H - A highly reponsive and interactive website.`} src="/noah.png"
      description={`My personal project N O A H, a highly responsive and interactive website built using Next.js, Typescript, Tailwind CSS, Framer Motion, GSAP, Aceternity UI, and PostgreSQL. The project is designed to offer seamless web development services with smooth animations, modern UI/UX, and robust backend integration.`} />,
  },
  {
    category: "Space X Beta",
    title: "Lost in the stars, found in the universe",
    src: "/po2.png",
    content: <ProjectContents navigate="https://spacexbeta.vercel.app/" src="/x.png" title={"Lost in the stars, found in the universe."} description={"SpaceXHub is a web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and styled with Tailwind CSS. Currently in its initial stage, the project aims to serve as a hub for space exploration enthusiasts. Future updates will include real-time weather updates and global climate change insights to enhance its functionality and user engagement."} />,
  },
  {
    category: "Portfolio",
    title: "Explore more about my Journey",
    src: "/po3.png",
    content: <ProjectContents navigate="https://navinpinkman.vercel.app/" src="/po4.png" title="Portfolio" description="A showcase of innovative projects, problem-solving expertise, and a passion for creating impactful digital experiences." />,
  },

  {
    category: "Understanding Blockchain",
    title: "Blockchain is not just the foundation of cryptocurrency",
    src: "/bl.webp",
    content: <ProjectContents navigate="https://www.blockchain.com/" src="/bl.webp" title="Understanding Blockchain" description="Blockchain is not just the foundation of cryptocurrency; it’s a transformative technology that can revolutionize industries. This blog will provide an easy-to-understand introduction to blockchain technology, its structure, how it works, and the wide range of applications it powers beyond digital currencies." />
  },
  {
    category: "Zendaya",
    title: "Beauty of Zendaya",
    src  : "/z2.jpeg",
    content: <ProjectContents navigate="https://www.zendaya.com/" src="/z.jpg" title="Beauty of Zendaya" description="Zendaya is an American actress, singer, and fashion icon known for her versatile career in the entertainment industry. She gained widespread recognition for her role as MJ in the *Spider-Man* Marvel films and for starring in the HBO series *Euphoria*, where her portrayal of Rue Bennett earned her critical acclaim and multiple awards, including an Emmy. Zendaya began her career in the early 2010s with Disney Channel's *Shake It Up*, where she showcased her dancing and acting talent.Beyond acting, Zendaya is also a prominent figure in the fashion world, admired for her bold and elegant style. She has also ventured into music, releasing singles and contributing to soundtracks for films and shows. Zendaya uses her platform to advocate for social justice issues, including racial equality and mental health awareness. She is celebrated for being a role model, inspiring young people with her talent, activism, and empowering messages."/>
  },
  {
    category: "Aritificial Intelligence",
    title: "Explore more about Artificial Intelligence",
    src : "/p2.jpg",
    content: <ProjectContents navigate="https://ai.google/" src="/xyz.jpg" title="Artificial Intelligence" description="Personalized Assistants: AI assistants will become more intuitive, handling complex tasks like booking appointments, managing finances, and even emotional support. Smart Homes: AI-driven IoT devices will create fully integrated smart homes, optimizing energy use, security, and convenience."/>,
  },
];
