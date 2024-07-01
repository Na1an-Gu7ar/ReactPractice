import React, { useEffect, useState } from 'react'

const index = () => {

    const [itemCount, setItemCount] = useState(5)
    const [load, setLoad] = useState([])
    const [loading, setLoading] = useState(false)

    const loadData = async () => {
        setLoading(true)

        try {
            let url = `https://dummyjson.com/products?limit=${itemCount}`
            let response = await fetch(url)
            if (!response.ok) {
                throw new Error(`Error: ${response.status}: ${response.statusText}`)
            }
            let data = await response.json()
            setLoad(data.products)
        } catch (err) {
            setFError(err.massage)
        } finally {
            setLoading(false)
        }
    }

    const loadMore = async () => {
        setItemCount(itemCount + 5)
        await loadData()
    }

    useEffect(() => {
        
    }, [load])

    return (
        <div className='flex flex-col w-screen h-screen items-center gap-5 overflow-x-hidden p-5'>
            <div className='flex flex-row justify-between flex-wrap'>
                {load && load.map((d) => {
                    return <img key={d.id} className='w-60 shadow-xl rounded' src={d.images[0]} alt={d.title} />
                })}
            </div>

            {loading ? <p>Loading...</p> : <button disabled={load.length === 100 ? true : false} onClick={() => loadMore()} className='h-10 bg-amber-500 w-28 rounded'>Load More</button>}

        </div>
    )
}

export default index
