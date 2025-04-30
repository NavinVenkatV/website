import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import Skills from '../Skills';

const uMarquee = [
    'Next.js', 'React.js', 'TypeScript', 'JavaScript', 'Node.js',
    'PostgreSQL', 'MongoDB', 'Prisma', 'Docker', 'AWS',
    'DevOps', 'WebSockets', 'Redis', 'Turborepo', 'Tailwind CSS',
    'Bootstrap', 'Clerk', 'NextAuth', 'Blockchain'
];

interface Typess {
    from: string,
    to: string
}

function Marquee({ from, to }: Typess) {
    const control1 = useAnimation();
    const control2 = useAnimation();

    useEffect(() => {
        control1.start({
            x: to,
            transition: { duration: 60, repeat: Infinity, ease: "linear" }
        });

        control2.start({
            x: to,
            transition: { duration: 60, repeat: Infinity, ease: "linear" }
        });
    }, [to]);

    const mouseEnter = () => {
        control1.stop();
        control2.stop();
    };

    const mouseLeave = () => {
        control1.start({
            x: to,
            transition: { duration: 60, repeat: Infinity, ease: "linear" }
        });

        control2.start({
            x: to,
            transition: { duration: 60, repeat: Infinity, ease: "linear" }
        });
    };

    return (
        <div className="flex MyGradient bg-black overflow-hidden" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <motion.div
                initial={{ x: from }}
                animate={control1}
                className="flex flex-shrink-0"
            >
                {uMarquee.map((skills, index) => (
                    <div key={`one-${index}`} className='pr-3'>
                        <Skills skill={skills} />
                    </div>
                ))}
            </motion.div>

            <motion.div
                initial={{ x: from }}
                animate={control2}
                className="flex flex-shrink-0"
            >
                {uMarquee.map((skills, index) => (
                    <div key={`two-${index}`} className='pr-3'>
                        <Skills skill={skills} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default Marquee;
