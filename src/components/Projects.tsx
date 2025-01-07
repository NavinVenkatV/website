"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import ProjectContents from "./ui/projectContents";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" id="projects">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Recent Projects & Blogs
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "NOAH",
    title: "Enhance your buisness with us",
    src: "/p1.png",
    content: <ProjectContents title={` N O A H - A highly responsive and interactive website.`} src="/noah.png"
      description={`My personal project N O A H, a highly responsive and interactive website built using Next.js, Typescript, Tailwind CSS, Framer Motion, GSAP, Aceternity UI, and PostgreSQL. The project is designed to offer seamless web development services with smooth animations, modern UI/UX, and robust backend integration.`} />,
  },
  {
    category: "Space X Beta",
    title: "Lost in the stars, found in the universe",
    src: "/po2.png",
    content: <ProjectContents src="/x.png" title={"Lost in the stars, found in the universe."} description={"SpaceXHub is a web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and styled with Tailwind CSS. Currently in its initial stage, the project aims to serve as a hub for space exploration enthusiasts. Future updates will include real-time weather updates and global climate change insights to enhance its functionality and user engagement."} />,
  },
  {
    category: "Portfolio",
    title: "Explore more about my Journey",
    src: "/po3.png",
    content: <ProjectContents src="/po4.png" title="Portfolio" description="A showcase of innovative projects, problem-solving expertise, and a passion for creating impactful digital experiences." />,
  },

  {
    category: "Understanding Blockchain",
    title: "Blockchain is not just the foundation of cryptocurrency",
    src: "/bl.webp",
    content: <ProjectContents src="/bl.webp" title="Understanding Blockchain" description="Blockchain is not just the foundation of cryptocurrency; it’s a transformative technology that can revolutionize industries. This blog will provide an easy-to-understand introduction to blockchain technology, its structure, how it works, and the wide range of applications it powers beyond digital currencies." />
  },
  {
    category: "Zendaya",
    title: "Beauty of Zendaya",
    src  : "/z2.jpeg",
    content: <ProjectContents src="/z.jpg" title="Beauty of Zendaya" description="Zendaya is an American actress, singer, and fashion icon known for her versatile career in the entertainment industry. She gained widespread recognition for her role as MJ in the *Spider-Man* Marvel films and for starring in the HBO series *Euphoria*, where her portrayal of Rue Bennett earned her critical acclaim and multiple awards, including an Emmy. Zendaya began her career in the early 2010s with Disney Channel's *Shake It Up*, where she showcased her dancing and acting talent.Beyond acting, Zendaya is also a prominent figure in the fashion world, admired for her bold and elegant style. She has also ventured into music, releasing singles and contributing to soundtracks for films and shows. Zendaya uses her platform to advocate for social justice issues, including racial equality and mental health awareness. She is celebrated for being a role model, inspiring young people with her talent, activism, and empowering messages."/>
  },
  // {
  //   category: "Hiring",
  //   title: "Hiring for a Staff Software Engineer",
  //   src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: <ProjectContents />,
  // },
];
