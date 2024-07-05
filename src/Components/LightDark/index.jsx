import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const index = () => {

    // const [theme, setTheme] = useState('bg-white')
    const [theme, setTheme] = useLocalStorage('theme', 'bg-white')

    const handleTheme = () => {
        if (theme === 'bg-white') {
            setTheme('bg-black')
        } else{
            setTheme('bg-white')
        }
    }

    return (
        <div className={`${theme} w-screen h-screen transition ease-in-out duration-700`}>
            <button onClick={() => handleTheme()} className={theme==='bg-white' ? 'text-black' : 'text-white'}>Change</button>
        </div>
    )
}

export default index
