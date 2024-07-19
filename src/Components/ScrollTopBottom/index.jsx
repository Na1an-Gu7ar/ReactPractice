import React, { useEffect, useState } from 'react'

const index = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    // const [scroll, setScroll] = useState({x: 0, y: 0})

    const fetchData = async () => {
        setLoading(true)
        try {
            let url = 'https://dummyjson.com/products'
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

    const scrollBottom = () => {
        if(window.scrollY > 10){
            window.scroll(0, 0)
        } else{
            window.scroll(0, window.innerHeight)
        }
    }    

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            {loading ? <div>Loading...</div> : null}
            {error ? {error} : null}
            <button onClick={() => scrollBottom()}>Bottom</button>
            {data && data.map((d) => {
                return <div key={d.id}>{d.title}</div>
            })}
            <button onClick={() => scrollBottom()}>Up</button>
        </div>
    )
}

export default index
