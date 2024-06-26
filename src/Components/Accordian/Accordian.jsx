import React, { useState } from 'react'
import data from './Data'

const Accordian = () => {

    const [id, setId] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function drop(currentId) {
        // This condition is to make sure that accordian get closed, if it's open
        setId(currentId === id ? null : currentId)
    }

    function handleMultiSelection(currentId) {
        let cpyMultiple = [...multiple]
        const findIndexOfCurrentId = cpyMultiple.indexOf(currentId)

        if (findIndexOfCurrentId === -1) cpyMultiple.push(currentId)
        else cpyMultiple.splice(findIndexOfCurrentId, 1)

        setMultiple(cpyMultiple)
    }

    return (
        <div className='flex flex-col w-screen h-screen justify-center items-center gap-3'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} className='rounded-sm bg-green-400 p-1 w-20'>Multiple Selection</button>
            {
                data.map((d) => {
                    return (
                        <div key={d.id} className='text-white text-2xl relative'>
                            <div onClick={enableMultiSelection ? () => handleMultiSelection(d.id) : () => drop(d.id)} className={`w-96`}>
                                <div className='bg-green-400 flex flex-row justify-between'>
                                    {d.name}
                                    {
                                        id === d.id || multiple.indexOf(d.id) !== -1 ? (<div className=''>-</div>
                                        ) : <div>+</div>
                                    }
                                </div>

                                {
                                    id === d.id || multiple.indexOf(d.id) !== -1 ? (<div className='bg-green-300'>{d.description}</div>
                                    ) : null
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Accordian
