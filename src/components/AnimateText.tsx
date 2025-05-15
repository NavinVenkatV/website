"use client"
import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Great_Vibes } from "next/font/google";

const great = Great_Vibes({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})


export function RotateWords({
    text = "Rotate",
    words = ["Word 1", "Word 2", "Word 3"],
}: {
    text: string
    words: string[]
}) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length)
        }, 3000)
        // Clean up interval on unmount
        return () => clearInterval(interval)
    }, [])
    return (

        <div className=" w-auto rounded-full bg-red-900 px-2 my-3 text-4xl flex justify-center items-center font-bold text-black md:leading-[4rem] ">
            {text}{' '}
            <AnimatePresence mode="wait">
                <motion.div
                    key={words[index]}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                className={`${great.className} `}
                >
                    {words[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}