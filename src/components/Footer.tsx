import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center max-w-[1200px] w-[90%] mx-auto py-[20px] px-10 gap-[10px] md:justify-between items-center border-t border-[#1d1d1d]'>
      <a href="/" className='flex flex-col items-center justify-center'>
        <img src="/image.png" alt="logo" width={200} height={200} className="h-full object-contain object-center" />
        <span className='text-sm text-gray-500'>Website is currenty on testing purpose*</span>
      </a>
      <span className='text-[0.9rem] font-[500] text-[#9e9e9e]'>
        © 2024 Navin Venkat. All rights reserved.
      </span>
      
    </div>
  );
};

export default Footer;
