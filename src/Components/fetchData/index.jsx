import React, { useContext, useEffect, useState } from 'react'
import { FetchDataContext } from './context'

const index = () => {
    const {item, setItem, loading, setLoading} = useContext(FetchDataContext)

    const fetchData = async () => {
        try {
            setLoading(true)
            let url = 'https://dummyjson.com/products'
            let response = await fetch(url)
            let data = await response.json()
            if(data && data.products && data.products.length){
                setItem(data.products)
                setLoading(false)
            }
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    return (
        <div>
            {item && item.map((prd) => {
                return <div key={prd.id}>{prd.title}</div>
            })}
            {loading ? <h1>Loading...</h1> : <button onClick={fetchData}>Click Me</button>}
        </div>
    )
}

export default index
