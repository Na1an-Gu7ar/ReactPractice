import React from 'react'
import useResizeHook from './useResizeHook'

const index = () => {

    const windowSize = useResizeHook()
    const {width, height} = windowSize

    return (
        <div>
            width: {width}
            height: {height}
        </div>
    )
}

export default index
