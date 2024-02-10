'use client'

import { useState } from 'react'

export const DigitalWatch = () => {
    const [hour, setHour] = useState<string>('--:--:--')

    const fixZero = (time: number) => {
        return time < 10 ? `0${time}` : time
    }

    setInterval(() => {
        const currentTime = new Date()
        const hour = currentTime.getHours()
        const minute = currentTime.getMinutes()
        const second = currentTime.getSeconds()

        setHour(`${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`)
    })

    return (
        <div className="w-44 h-16 mt-8 rounded-lg border border-gray-700 bg-gray-800 flex items-center justify-center text-4xl font-bold text-white">
            {' '}
            {hour}{' '}
        </div>
    )
}
