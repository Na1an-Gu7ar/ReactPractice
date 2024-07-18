import React from 'react'
import useFetch from './index'

const test = () => {

    const { data, loading, error } = useFetch("https://dummyjson.com/products")

    return (
        <div>
            {loading ? <h3>Loading...</h3> : null}
            {error ? <h3>{error}</h3> : null}
            {data && data.length ? data.map((d) => {
                return (
                    <div key={data.id}>{d.title}</div>
                )
            }) : null}
        </div>
    )
}

export default test
