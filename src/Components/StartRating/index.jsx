import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import "./styles.css"

const index = ({ noOfStar = 5 }) => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleOnClick(currentId) {
        setRating(currentId)
    }

    function handleMouseEnter(currentId) {
        setHover(currentId)
    }

    function handleMouseLeave() {
        setHover(rating)
    }

    return (
        <div className='flex flex-row w-screen h-screen justify-center'>
            {[...Array(noOfStar)].map((_, index) => {
                index += 1
                return (
                    <FaStar className={index <= (hover || rating) ? 'active' : 'inactive'} size={30} key={index} onClick={() => handleOnClick(index)} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()} />
                )
            })
            }
        </div>
    )
}

export default index
