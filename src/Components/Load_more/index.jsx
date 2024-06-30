import React, { useEffect, useState } from 'react'

const index = () => {

    const [itemCount, setItemCount] = useState(5)
    const [load, setLoad] = useState([])
    const [ferror, setFError] = useState('null')

    const loadData = async () => {
        let url = `https://dummyjson.com/products?limit=${itemCount}`
        try {
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`)
            }
            else {
                let response = await fetch(url)
                let data = await response.json()
                setLoad(data.products)
            }
        } catch (error) {
            console.log('Error fetching');
            setFError('Error fetching')
        }
    }

    const loadMore = async () => {
        setItemCount(itemCount + 5)
        await loadData()
    }

    useEffect(() => {
        loadData()
    }, [])

    console.log(load.length);
    return (
        <div className='flex flex-col w-screen h-screen items-center gap-5 overflow-x-hidden p-5'>
            <div className='flex flex-row justify-between flex-wrap'>
                {load.map((d) => {
                    return <img key={d.id} className='w-60 shadow-xl rounded' src={d.images ? d.images : ferror} alt={d.images} />
                })}
            </div>

            <button disabled={load.length === 100 ? true : false} onClick={() => loadMore()} className='h-10 bg-amber-500 w-28 rounded'>Load More</button>

        </div>
    )
}

export default index
