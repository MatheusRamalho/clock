'use client'

import { useState } from 'react'

interface TimeProps {
    hour: number
    minute: number
    second: number
    deg: number
}

export const AnalogClock = () => {
    const [hour, setHour] = useState<number>(0)
    const [minute, setMinute] = useState<number>(0)
    const [second, setSecond] = useState<number>(0)

    const rotatePointersCalc = ({ deg, hour, minute, second }: TimeProps) => {
        const hourDeg = (360 / 12) * hour // Hora é dividida por 12 por que o relógio só tem 12 horas e não 24...
        const minuteDeg = minute * deg
        const secondDeg = second * deg

        setHour(hourDeg)
        setMinute(minuteDeg)
        setSecond(secondDeg)
    }

    setInterval(() => {
        const degreesPerSecond = 6
        const currentTime = new Date()
        const hourTime = currentTime.getHours()
        const minuteTime = currentTime.getMinutes()
        const secondTime = currentTime.getSeconds()

        rotatePointersCalc({
            deg: degreesPerSecond,
            hour: hourTime,
            minute: minuteTime,
            second: secondTime,
        })
    })

    return (
        <div className="relative size-[18.75rem] sm:size-[31.25rem] rounded-full border border-gray-700 bg-gray-800 bg-cover bg-center bg-clock shadow-3xl flex items-center justify-center before:content-[''] before:z-40 before:absolute before:w-5 before:h-5 before:rounded-full before:bg-white">
            <div
                className="pointer-hour absolute w-5 rounded-md flex justify-center h-[8.25rem] sm:h-[11.25rem] before:content-[''] before:z-10 before:absolute before:rounded-md before:w-2 before:h-[4.25rem] sm:before:h-[6.25rem] before:bg-green-300"
                style={{ transform: `rotateZ(${hour}deg)` }}
            />
            <div
                className="pointer-minute absolute w-5 rounded-md flex justify-center h-[11.25rem] sm:h-[16.25rem] before:content-[''] before:z-20 before:absolute before:rounded-md before:w-[0.375rem] before:h-[5.75rem] sm:before:h-[8.75rem] before:bg-green-700"
                style={{ transform: `rotateZ(${minute}deg)` }}
            />
            <div
                className="pointer-second absolute w-5 rounded-md flex justify-center h-[12.25rem] sm:h-[21.25rem] before:content-[''] before:z-30 before:absolute before:rounded-md before:w-1 before:h-[8.375rem] sm:before:h-[14.375rem] before:bg-green-300"
                style={{ transform: `rotateZ(${second}deg)` }}
            />
        </div>
    )
}
