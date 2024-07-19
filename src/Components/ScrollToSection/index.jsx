import React, { useRef } from 'react'

const index = () => {

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()

    const handleScrollToSection = (reference) => {
        window.scrollTo({
            top: reference.current.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            <button onClick={() => handleScrollToSection(ref1)} className='fixed text-center bg-black text-white'>Scroll to <span className='text-red-400'>red</span> section</button>
            <button onClick={() => handleScrollToSection(ref2)} className='fixed left-10 bg-black text-white'>Scroll to <span className='text-green-400'>green</span> section</button>
            <button onClick={() => handleScrollToSection(ref3)} className='fixed right-10 bg-black text-white'>Scroll to <span className='text-purple-400'>purple</span> section</button>
            
            <div ref={ref1} className="div1 bg-red-400 w-full h-screen"></div>
            <div ref={ref2} className="div2 bg-green-400 w-full h-screen"></div>
            <div ref={ref3} className="div3 bg-purple-400 w-full h-screen"></div>
        </div>
    )
}

export default index
