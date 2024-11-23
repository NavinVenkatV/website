import React from 'react'
import { Cover } from './ui/cover'

const Skills = () => {
    return (
        <div className='transition ease-in-out'>
            <h2 className="flex justify-center items-center text-center mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Skills & Technologies

            </h2>
            <div className='px-10 py-19 flex justify-center text-center'>
                <a href="https://skillicons.dev">
                    <img  width={1400} height={1400} src="https://skillicons.dev/icons?i=c,cpp,javascript,typescript,python,mongodb,mysql,postgresql,prisma,expressjs,react,redux,nodejs,nextjs,html,css,tailwind,docker,git,github,cloudflare,aws,figma,vite,linux,postman,npm,vscode" />
                </a>
            </div>

        </div>
    )
}

export default Skills
