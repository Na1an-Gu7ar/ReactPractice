import React, { useEffect, useState } from 'react'

const index = () => {

    const [itemCount, setItemCount] = useState(5)
    const [load, setLoad] = useState([])
    const [loading, setLoading] = useState(false)

    const loadData = async () => {
        
        try {
            setLoading(true)
            let url = `https://dummyjson.com/products?limit=${itemCount}`
            let response = await fetch(url)
            let data = await response.json()
            if(data && data.products && data.products.length){
                setLoad(data.products)
                setLoading(false)
            }
        } catch (err) {
            setFError(err)
            setLoading(false)
        } 
    }

    const loadMore = async () => {
        setItemCount(itemCount + 5)
        await loadData()
    }

    useEffect(() => {
        loadData()
    }, [itemCount])

    return (
        <div className='flex flex-col w-screen h-screen items-center gap-5 overflow-x-hidden p-5'>
            <div className='flex flex-row justify-between flex-wrap'>
                {load && load.map((d) => {
                    return <img key={d.id} className='w-60 shadow-xl rounded' src={d.images[0]} alt={d.title} />
                })}
            </div>

            {loading ? <p>Loading...</p> : <button disabled={load.length === 100 ? true : false} onClick={() => loadMore()} className='h-10 bg-amber-500 w-28 rounded'>{load.length===100 ? 'No More Data' : 'Load More'}</button>}


        </div>
    )
}

export default index
