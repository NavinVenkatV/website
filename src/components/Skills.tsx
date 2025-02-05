"use client"; // Mark this component as a Client Component

import React from 'react';
import { Cover } from './ui/cover';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        "c", "cpp", "javascript", "typescript", "mongodb", "mysql",
        "postgresql", "prisma", "expressjs", "react", "redux", "nodejs", "nextjs",
        "html", "css", "tailwind", "docker", "git", "github", "cloudflare", "aws",
        "figma", "vite", "linux", "postman", "npm", "vscode"
    ];

    return (
        <div className="flex flex-col items-center justify-center text-white w-full">
            <div>
                <Cover className="text-3xl md:text-5xl font-bold">Skills & Technologies</Cover>
            </div>
            <div className="w-full flex flex-wrap justify-center items-center mt-10 mx-auto px-4 sm:px-6 gap-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center justify-center p-2 rounded-lg shadow-lg"
                    >
                        <img
                            src={`https://skillicons.dev/icons?i=${skill}`}
                            alt={skill}
                            className="w-12 h-12"
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;