import React, { useState } from 'react'

const index = () => {

    const [click, setClick] = useState('opacity-0 translate-y-0')

    const handleClick = () => {
        setClick(click==='opacity-0 translate-y-0' ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-0')
    }

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <button onClick={() => handleClick()}>Click Me</button>
            <div className={`${click} w-4/6 h-96 bg-blue-300 flex flex-col gap-5 items-center justify-center transition ease-in-out duration-1000`}>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='City' />
                <input type="text" placeholder='State' />
            </div>
        </div>
    )
}

export default index
