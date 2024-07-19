import React, { useEffect, useState } from 'react'
import useFetch from '../Use_fetch/index'

const index = () => {

    const { data, loading, error } = useFetch("https://dummyjson.com/products?limit=50")

    const handleScroll = () => {
        if(window.scrollY > 10){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })
        } else{
            window.scrollTo({
                top: document.body.scrollHeight,
                left: 0,
                behavior: 'smooth',
            })
        }
    }    

    return (
        <div>
            {loading ? <div>Loading...</div> : null}
            {error ? {error} : null}
            <button onClick={() => handleScroll()} className='bg-gray-400 p-1 rounded-md'>Bottom</button>
            {data && data.map((d) => {
                return <div key={d.id}>{d.title}</div>
            })}
            <button onClick={() => handleScroll()} className='bg-gray-400 p-1 rounded-md'>Up</button>
        </div>
    )
}

export default index
