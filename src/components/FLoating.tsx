import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconNewSection,
} from "@tabler/icons-react";
import Image from "next/image";
import { MailIcon, Settings2Icon } from "lucide-react";

export function Floating() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Services",
      icon: (
        <Settings2Icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#services",
    },
    {
      title: "Projects",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "LinkedIn",
      icon: (
        <Image
          src="linkedin.svg"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "https://www.linkedin.com/in/navin-venkat-38bb28279/",
    },
    {
      title: "Contact",
      icon: (
        <MailIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/nav_venk",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/NavinVenkatV",
    },
  ];
  return (
    <div className="fixed flex left-[90%] translate-x-[-90%] md:left-[50%] md:translate-x-[-50%] bottom-[50px] z-[101]">
      <FloatingDock
        // mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
