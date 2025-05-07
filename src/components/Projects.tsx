"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import ProjectContents from "./ui/projectContents";
import {motion} from "framer-motion"
import { Great_Vibes } from "next/font/google";

const great = Great_Vibes({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})


export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index}/>
  ));

  return (
    <div className="w-full h-full py-20" id="projects">
      <motion.div
                  // initial={{opacity : 0, x:-50}}
                  // whileInView={{opacity:1, x:0}}
                  // transition={{duration:0.5, ease:"easeInOut"}}
                  >
        <h1 className="text-3xl md:text-5xl text-center mb-10 "><span className={`${great.className} text-red-700`}>Recent Projects & Blogs</span> </h1>
        </motion.div>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Exa",
    link : "https://exaai.vercel.app/",
    title: "",
    src: "/exa_mob.png",
    content: <ProjectContents navigate="https://exaai.vercel.app/" title={``} src="/exa_pc.png"
      description={`Exa is an AI-powered search engine that helps developers and researchers find high-quality, relevant content from the web with precision.`} />,
  },
  {
    category: "PingMe",
    link : "https://pingmeyourwebsite.vercel.app/",
    title: "",
    src: "/pingMe.png",
    content: <ProjectContents navigate="https://pingmeyourwebsite.vercel.app/" title={``} src="/pingMe_pc.png"
      description={`PingMe is a SaaS platform for website monitoring, ensuring uptime and performance tracking. Built with Next.js, Next Auth, TypeScript, PostgreSQL, and Prisma, it offers real-time insights. Secure authentication and a sleek UI enhance the user experience.`} />,
  },
  {
    category: "newsHub",
    link : "https://nav-news-hub.vercel.app/",
    title: "",
    src: "/pingMe.png",
    content: <ProjectContents navigate="https://nav-news-hub.vercel.app/" title={``} src="/pingMe_pc.png"
      description={`Built an AI-driven platform that summarizes trending news articles into concise, real-time updates. Users can save topics, receive
 weekly digests, and personalize content. Admins can update blogs from a dashboard, with automatic S3 upload for media.`} />,
  },
  {
    category: "DigixLabs",
    title: "",
    link : "https://digix-labs.vercel.app/",
    src: "/digix_mobile.png",
    content: <ProjectContents navigate="https://digix-labs.vercel.app/" title={`Technical expertise, viral content,and growth strategies, all in one place.`} src="/digix_pc.png"
      description={`Developed a SaaS platform tailored for technical content creators, offering marketing, website creation, and innovative project ideas.
 Built an engaging and dynamic user interface using Framer Motion and GSAP for animations and interactions.`} />,
  },
  {
    category: "NOAH",
    title: "",
    link : "https://noahdevs.vercel.app/",
    src: "/p1.png",
    content: <ProjectContents navigate="https://noahdevs.vercel.app/" title={`N O A H - A highly reponsive and interactive website.`} src="/noah.png"
      description={`My personal project N O A H, a highly responsive and interactive website built using Next.js, Typescript, Tailwind CSS, Framer Motion, GSAP, Aceternity UI, and PostgreSQL. The project is designed to offer seamless web development services with smooth animations, modern UI/UX, and robust backend integration.`} />,
  },
  {
    category: "Space X Beta",
    title: "",
    link : "https://spacexbeta.vercel.app/",
    src: "/po2.png",
    content: <ProjectContents navigate="https://spacexbeta.vercel.app/" src="/x.png" title={"Lost in the stars, found in the universe."} description={"SpaceXHub is a web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and styled with Tailwind CSS. Currently in its initial stage, the project aims to serve as a hub for space exploration enthusiasts. Future updates will include real-time weather updates and global climate change insights to enhance its functionality and user engagement."} />,
  },
  {
    category: "Portfolio",
    title: "",
    link : "https://navinvenkat.xyz/",
    src: "/po3.png",
    content: <ProjectContents navigate="https://navinvenkat.xyz/" src="/po4.png" title="Portfolio" description="A showcase of innovative projects, problem-solving expertise, and a passion for creating impactful digital experiences." />,
  },

  {
    category: "Understanding Blockchain",
    title: "",
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
    title: "",
    src : "/p2.jpg",
    content: <ProjectContents navigate="https://ai.google/" src="/xyz.jpg" title="Artificial Intelligence" description="Personalized Assistants: AI assistants will become more intuitive, handling complex tasks like booking appointments, managing finances, and even emotional support. Smart Homes: AI-driven IoT devices will create fully integrated smart homes, optimizing energy use, security, and convenience."/>,
  },
];
