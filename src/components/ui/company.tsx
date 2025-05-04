import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function Company({ company, duration, context, link }: {
    company: string, duration: string, context: string,link: string
}) {
    return (
        <div className='mt-10 text-justify'>
            <a href={link} className='flex items-center font-bold text-xl'><span><MdOutlineArrowOutward /></span>{company}</a>
            <p className='text-sm text-neutral-400'>{duration}</p>
            <p className='mt-3  text-sm md:text-lg'>{context}</p>
        </div>
    )
}

export default Company
