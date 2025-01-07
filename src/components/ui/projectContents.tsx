import React, { FC } from 'react';
import Image from 'next/image';

interface typesofContent {
  title: string;
  description: string;
  src : string
}

const ProjectContents: FC<typesofContent> = ({ title, description,src }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title} <br />
        </span>
        {description}
      </p>
      <Image
        src={src}
        alt="Noah project - 1"
        height={500}
        width={500}
        className="md:w-1/2 md:h-1/2 h-full mt-10 rounded-xl w-full mx-auto object-contain"
      />
    </div>
  );
};

export default ProjectContents;
