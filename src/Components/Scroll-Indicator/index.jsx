import React, { useEffect, useState } from 'react'

const index = () => {
    const [data, setData] = useState([])
    const [scrollPercentage, setScrollPercentage] = useState(0)

    let url = 'https://dummyjson.com/products?limit=100'
    const loadData = async () => {
        let response = await fetch(url)
        let data = await response.json()
        if (data && data.products && data.products.length) {
            setData(data.products)
        }
    }
    
    useEffect(() => {
        loadData()
    }, [url])

    function handleScroll () {
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        );

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setScrollPercentage((howMuchScrolled / height) * 100)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener('scroll', () => {})
        }
    }, [])

    console.log(scrollPercentage);

    return (
        <div>
            <div className={`bg-green-500 h-2 fixed`} style={{width: `${scrollPercentage}%`}}></div>
            <div>
                {data.map((d) => {
                    return <div key={d.id}>{d.title}</div>
                })}
            </div>
        </div>
    )
}

export default index
