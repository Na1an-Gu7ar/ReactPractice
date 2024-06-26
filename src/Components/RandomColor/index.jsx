import React, { useState } from 'react'

const index = () => {
    const [rnum1, setRnum1] = useState()
    const [rnum2, setRnum2] = useState()
    const [rnum3, setRnum3] = useState()
    const [hex, setHex] = useState()

    function generateRgbNumber() {
        let num1 = Math.floor(Math.random() * 255)
        let num2 = Math.floor(Math.random() * 255)
        let num3 = Math.floor(Math.random() * 255)
        // let obj1 = new Intl.NumberFormat('en-US')
        // let output = obj1.format(num)
        setRnum1(num1)
        setRnum2(num2)
        setRnum3(num3)
    }

    function generateNumber() {
        let num = Math.random().toString(16).slice(7)
        setHex(num)
    }

    return (
        <div className='flex flex-col bg-black justify-center items-center h-screen gap-2'>
            <div className='flex gap-2'>
                <button className='bg-green-400 p-1 rounded h-10 w-20' onClick={() => generateRgbNumber()}>RGB</button>
                <button className='bg-green-400 p-1 rounded h-10 w-20' onClick={() => generateNumber()}>HEX</button>
            </div>

            <div className='flex flex-row gap-2'>
                <div className='h-72 w-60 flex items-center justify-center' style={{ backgroundColor: `rgb(${rnum1}, ${rnum2}, ${rnum3})`}}>{rnum1 || rnum2 || rnum3 ? `rgb(${rnum1}, ${rnum2}, ${rnum3})` : ''}</div>

                <div className='h-72 w-60 flex items-center justify-center' style={{ backgroundColor: `#${hex}`}}>{hex ? '#' + hex : ''}</div>
            </div>
        </div>
    )
}

export default index