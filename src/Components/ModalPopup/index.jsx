import React, { useState } from 'react'

const index = () => {

    const [click, setClick] = useState('opacity-0 translate-y-0')

    const handleClick = () => {
        setClick(click==='opacity-0 translate-y-0' ? 'opacity-100 translate-y-5' : 'opacity-0 translate-y-0')
    }

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <button onClick={() => handleClick()} className={click==='opacity-0 translate-y-0' ? '' : 'opacity-0'}>Click Me</button>
            <div className={`${click} w-4/6 h-96 bg-blue-300 flex flex-col gap-5 items-center justify-center transition ease-in-out duration-500`}>
                <div className='w-10 relative bottom-40' style={{left: '27rem'}}>
                    <button onClick={() => handleClick()}>X</button>
                </div>
            </div>
        </div>
    )
}

export default index
