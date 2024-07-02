import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const index = () => {
    const [value, setValue] = useState('')

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center gap-3'>
            <input type="text" value={value} placeholder='Enter anything' className='border-solid border-2 border-gray-600 rounded' onChange={(e) => setValue(e.target.value)} />
            <QRCode value={value} />
        </div>
    )
}

export default index
