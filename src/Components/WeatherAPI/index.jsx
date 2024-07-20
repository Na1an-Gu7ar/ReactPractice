import React, { useEffect, useState } from 'react'

const index = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    const [error, setError] = useState("")

    const fetchData = async (name) => {
        setLoading(true)
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=3c51a2b781a7beb359f31d7bff20dea5`)
            if (response.ok) {
                let data = await response.json()
                setData(data)
                setLoading(false)
            } else {
                setError(`No weather found at "${name}"`)
                setLoading(false)
            }
        } catch (e) {
            setError(`No weather found at "${name}"`)
        }
    }

    const handleSearch = () => {
        fetchData(search)
    }

    useEffect(() => {
        fetchData("pune")
    }, [])

    console.log(data);

    return (
        <div className='flex flex-col w-screen h-screen gap-16 items-center'>
            <div className='flex flex-row gap-5 justify-center p-1'>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='border-2 border-solid outline-none border-black rounded' />
                <button onClick={handleSearch} className='bg-gray-300 p-1 rounded'>Search</button>
            </div>
            {loading ? <div>Loading...</div> : error ? <div>{error}</div> :
                <div className='w-2/5 h-2/5 rounded border-2 border-solid'>
                    <div className='text-3xl'>{data?.name}, {data?.sys?.country}</div>
                    <div className='flex flex-row gap-5 h-24 flex-wrap w-64 p-5 items-center'>
                        <div className='text-4xl'>{Math.round(data?.main?.temp - 273.15)}℃</div>
                        <div>
                            {Math.round(data?.clouds?.all) === 100 ? <div className='text-2xl'>Cloudy</div> : Math.round(data?.clouds?.all) < 70 ? <div className='text-2xl'>Sunny</div> : <div className='text-2xl'>Clear</div>}
                            <div>Feels like {Math.round(data?.main?.feels_like - 273.15)}℃</div>
                        </div>
                    </div>
                    <div className='flex justify-end'>There will be {data?.weather[0]?.description}. The low will be {Math.round(data?.main?.temp_min - 273.15)}°</div>
                    <div className='h-24 flex flex-row gap-5 justify-center items-center'>
                        <div>Wind<br/>{Math.round(data?.wind?.speed)} km/h</div>
                        <div>Pressure<br/>{data?.main?.pressure} mb</div>
                        <div>Humidity<br/>{data?.main?.humidity}%</div>
                    </div>
                </div>
            }
        </div>
    )
}

export default index
