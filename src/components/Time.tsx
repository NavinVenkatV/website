import { useEffect, useState } from "react";

export default function Time() {
    const [ time, setTime ] = useState(new Date());

    useEffect(() =>{
        const interval = setInterval(()=>{
            setTime(new Date())
        }, 1000)

        return ()=>clearInterval(interval)
    })
    const formatTime = (date : Date) => {
        return date.toLocaleTimeString("en-US")
    }

    return (
        <div className="text-white font-bold p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 w-[180px] md:w-[300px] text-sm text-center">
            {formatTime(time)} - Idle
        </div>
    )
}