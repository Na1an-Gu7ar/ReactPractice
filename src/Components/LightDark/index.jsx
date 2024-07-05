import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const index = () => {

    // const [theme, setTheme] = useState('bg-white')
    const [theme, setTheme] = useLocalStorage('theme', 'bg-white')

    const handleTheme = () => {
        setTheme(theme === 'bg-white' ? 'bg-black' : 'bg-white')
    }

    return (
        <div className={`${theme} w-screen h-screen transition ease-in-out duration-700`}>
            <button onClick={() => handleTheme()} className={theme === 'bg-white' ? 'text-white bg-black rounded-md py-1.5 px-2.5' : 'text-black bg-white rounded-md py-1.5 px-2.5'}>Change</button>
        </div>
    )
}

export default index
