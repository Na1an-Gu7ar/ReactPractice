import React, { useRef } from 'react'
import { useState } from 'react'
import useOutsideClick from './useOutsideHook'

const index = () => {

    const [showContent, setShowContent] = useState(false)
    const ref = useRef()
    useOutsideClick(ref, () => setShowContent(false))

    return (
        <div>
            {showContent ?
                (
                    <div ref={ref}>
                        <h1>This is a random content</h1>
                        <p>
                            Please click outside of this to close this. It won't close if you
                            click inside of this content
                        </p>
                    </div>
                )
                : <button onClick={() => setShowContent(!showContent)}>Toggle</button>
            }
        </div>
    )
}

export default index
