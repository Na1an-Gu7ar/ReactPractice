import React, { useState } from 'react'

const index = () => {

    const data = [
        {
            id: 1,
            age: 20,
        },
        {
            id: 2,
            age: 21,
        },
        {
            id: 3,
            age: 22,
        },
    ]

    const [id, setId] = useState(null)
    const [className, setClassName] = useState('hidden')
    const [multiple, setMultiple] = useState([])

    const handleClick = (currentId) => {
        setId(currentId === id ? null : currentId)
    }

    const handleMultiple = (currentId) => {
        let cpyMultiple = [...multiple]
        const findIndexOfCurrentId = cpyMultiple.indexOf(currentId)
        if (findIndexOfCurrentId === -1) {
            cpyMultiple.push(currentId)
        }
        else {
            cpyMultiple.splice(findIndexOfCurrentId, 1)
        }
        setMultiple(cpyMultiple)
    }

    const handleClassName = () => {
        setClassName('')
        console.log("clicked");
    }

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <div>Home</div>
            <button onClick={() => handleClassName()}>Click me</button>
            {className === '' ? data.map((d) => {
                return <div key={d.id}>
                    {
                        id === d.id || multiple.indexOf(d.id)!==-1 ? <div className='relative left-5'>{d.age}</div> : null
                    }
                </div>
            }) : null}
        </div>
    )
}

export default index
