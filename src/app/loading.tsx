'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
export default function loading(){
    const router = useRouter();
    useEffect(()=>{
        const timer = setTimeout(()=>{
            router.push('/page.tsx')
        },5000)
        return ()=> clearTimeout(timer)
    })
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <img alt="Loading..." src="/loading/loading.gif"
            width={100} height={100}/>
        </div>
    )
}