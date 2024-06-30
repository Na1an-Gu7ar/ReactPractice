import React, { useEffect, useState } from 'react'

const index = () => {

    const [itemCount, setItemCount] = useState(1)
    const [load, setLoad] = useState([])

    const loadData = async () => {
        let url = `https://dummyjson.com/products?limit=${itemCount}`
        let response = await fetch(url)
        let data = await response.json()
        setLoad(data.products)
    }

    const loadMore = async () => {
        setItemCount(itemCount + 1)
        await loadData()
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div className='flex flex-row w-screen h-screen'>
            {load.map((d) => {
                return <div className='bg-gray-600 h-40' key={d.id}>
                    <img className='w-40 h-40 bg-black' src={d.images} />
                </div>
            })}

            <button onClick={() => loadMore()} className='absolute'>Load More</button>
        </div>
    )
}

export default index
