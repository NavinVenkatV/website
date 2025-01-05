import React from 'react'
import { Cover } from './ui/cover'

const Skills = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center text-white w-full">
                <div>
                    <Cover className="text-3xl md:text-5xl font-bold">Skills & Technologies</Cover>
                </div>
                <div className="w-full flex flex-col justify-center items-center mt-10 mx-auto px-4 sm:px-6">
                    <img
                        width={1400}
                        height={1400}
                        src="https://skillicons.dev/icons?i=c,cpp,javascript,typescript,python,mongodb,mysql,postgresql,prisma,expressjs,react,redux,nodejs,nextjs,html,css,tailwind,docker,git,github,cloudflare,aws,figma,vite,linux,postman,npm,vscode"
                        alt="Skills and Technologies Icons"
                        className="w-full h-full"
                        loading="lazy"
                    />
                </div>
            </div>

        </div>
    )
}

export default Skills

