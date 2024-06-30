import React, { useEffect, useState } from 'react'

const index = () => {
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])

    const fetchData = async () => {
        let url = `https://picsum.photos/v2/list?page=${page}&limit=1`
        let fdata = await fetch(url)
        let parseData = await fdata.json()
        setData(parseData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const nextSlide = async () => {
        let url = `https://picsum.photos/v2/list?page=${page+1}&limit=1`
        setPage(page + 1)
        let fdata = await fetch(url)
        let parseData = await fdata.json()
        setData(parseData)
    }

    const prevSlide = async () => {
        let url = `https://picsum.photos/v2/list?page=${page-1}&limit=1`
        setPage(page - 1)
        let fdata = await fetch(url)
        let parseData = await fdata.json()
        setData(parseData)
    }

    return (
        <div className='w-screen h-screen flex justify-center'>
            <div className="w-80 absolute card">
                {data && data.length ? data.map((d) => (
                    <img key={d.id} className={page != d.id ? 'absolute w-96 z-40' : 'hidden'} src={`${d.download_url}`} />
                )) : null}
            </div>

            <div className='flex justify-between gap-80 items-center h-56 z-30'>
                <button onClick={() => prevSlide()} className='text-black text-2xl bg-white w-12 h-12 rounded-3xl'>&larr;</button>
                <button onClick={() => nextSlide()} className='text-black text-2xl bg-white w-12 h-12 rounded-3xl'>&rarr;</button>
            </div>
        </div>
    )
}

export default index
