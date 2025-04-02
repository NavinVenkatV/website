import React from 'react'
import { easeInOut, motion } from "framer-motion"
import Skills from '../Skills';

const uMarquee = [
    'Next.js',
    'React.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'Prisma',
    'Docker',
    'AWS',
    'DevOps',
    'WebSockets',
    'Redis',
    'Turborepo',
    'Tailwind CSS',
    'Bootstrap',
    'Clerk',
    'NextAuth',
    'Blockchain'
];


interface Typess {
    from: string,
    to: string
}

function Marquee({ from, to }: Typess) {
    return (
        <div className="flex MyGradient bg-black">
            <motion.div
                initial={{ x: `${from}` }}
                animate={{ x: `${to}` }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
            >
                {uMarquee.map((skills, index) => {
                    return <div className='pr-3'>
                        <Skills skill={skills} />
                    </div>;
                })}
            </motion.div>

            <motion.div
                initial={{ x: `${from}` }}
                animate={{ x: `${to}` }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
            >
                {uMarquee.map((skills, index) => {
                    return <div className='pr-3'>
                        <Skills skill={skills} />
                    </div>;
                })}
            </motion.div>
        </div>
    );
}

export default Marquee


// import React from "react";
// import { motion } from "framer-motion";

// const MarqueeItem = ({ images, from, to }) => {
//   return (
//     <div className="flex MyGradient">
//       <motion.div
//         initial={{ x: `${from}` }}
//         animate={{ x: `${to}` }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         className="flex flex-shrink-0"
//       >
//         {images.map((image, index) => {
//           return <img className="h-40 w-56 pr-20" src={image} key={index} />;
//         })}
//       </motion.div>

//       <motion.div
//         initial={{ x: `${from}` }}
//         animate={{ x: `${to}` }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         className="flex flex-shrink-0"
//       >
//         {images.map((image, index) => {
//           return <img className="h-40 w-56 pr-20" src={image} key={index} />;
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default MarqueeItem;