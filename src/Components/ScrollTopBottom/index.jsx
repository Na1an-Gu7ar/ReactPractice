import React, { useEffect, useState } from 'react'

const index = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    // const [scroll, setScroll] = useState({x: 0, y: 0})

    const fetchData = async () => {
        setLoading(true)
        try {
            let url = 'https://dummyjson.com/products?limit=50'
            let response = await fetch(url)
            if(!response.ok){
                throw new Error(response.statusText)
            }
            let data = await response.json()
            setData(data.products)
            setLoading(false)
        } catch (e) {
            setError(e, 'error occured')
            setLoading(false)
        }
    }

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

    useEffect(() => {
        fetchData()
    }, [])


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
