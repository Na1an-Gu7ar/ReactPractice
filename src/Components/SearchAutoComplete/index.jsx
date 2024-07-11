import React, { useState } from 'react'

const index = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [searchResult, setSearchResult] = useState(false)
    const [filteredResult, setFilteredResult] = useState([])

    const loadData = async () => {
        try {
            setLoading(true)
            let url = `https://dummyjson.com/users`
            // let url = `https://dummyjson.com/users/search?q=${name}`
            let response = await fetch(url)
            let data = await response.json()
            if (data && data.users && data.users.length) {
                setData(data.users.map((u) => u.firstName))
                setLoading(false)
                setError(null)
            }
        } catch (err) {
            setLoading(false)
            setError(err)
        }
    }

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase()
        setName(query)
        if (query.length > 0) {
            const results = data && data.length ? data.filter((item) => item.toLowerCase().indexOf(query) > -1)
                : []
            setFilteredResult(results)
            setSearchResult(true)
        } else {
            setSearchResult(false)
        }
    }

    const handleClick = (e) => {
        setName(e.target.innerText)
        setSearchResult(false)
    }

        // const handleChange = (e) => {
        //     setName(e.target.value)
        //     loadData()
        // }

        useState(() => {
            loadData()
        }, [])

    return (
        <div className='w-screen h-screen'>
            {error ? error : loading ? <div>loading...</div> : <input className='border border-solid border-black' type="text" value={name} onChange={handleChange} />}

            {searchResult && filteredResult.map((d, index) => {
                return (<div onClick={handleClick} key={index}>
                    {d}
                </div>)
            })}
        </div>
    )
}

export default index
