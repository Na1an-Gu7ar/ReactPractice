import React, { useEffect, useState } from 'react'

const index = () => {
    const [page, setPage] = useState(0)
    const [data, setData] = useState([])

    let url = `https://picsum.photos/v2/list?page=${page}&limit=1`
    const fetchData = async () => {
        let fdata = await fetch(url)
        let parseData = await fdata.json()
        setData(data.concat(parseData))
    }

    useEffect(() => {
        fetchData()
    }, [url])

    const nextSlide = async () => {
        setPage(page + 1)
    }

    const prevSlide = async () => {
        setPage(page - 1)
    }

    return (
        <div className='w-screen h-screen flex justify-center'>
            {data && data.length ? data.map((d, index) => {
                return (
                    <div key={d.id} className="absolute card">
                        <img className='w-80' src={`${d.download_url}`} />
                    </div>
                )

            }) : null}

            <div className='flex justify-between gap-80 items-center h-56 z-30'>
                <button onClick={() => nextSlide()} className='text-black text-2xl bg-white w-12 h-12 rounded-3xl'>&larr;</button>
                <button onClick={() => prevSlide()} className='text-black text-2xl bg-white w-12 h-12 rounded-3xl'>&rarr;</button>
            </div>
        </div>
    )
}

export default index
