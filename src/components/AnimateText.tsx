"use client"
import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

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

        <div className="text-2xl py-10  font-bold text-white md:text-6xl md:leading-[4rem] w-fit ">
            {text}{' '}
            <AnimatePresence mode="wait">
                <motion.div
                    key={words[index]}
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.5 }}
                    className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
                >
                    {words[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}