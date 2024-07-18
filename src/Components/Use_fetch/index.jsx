import React, { useEffect, useState } from 'react'

const index = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(url);
      if(response.ok) {
        let data = await response.json();
        setData(data.products)
        setLoading(false)
        setError(null)
      } else {
        throw new Error('Something went wrong')
      }
    } catch (e) {
      setError(`${e} error occured`)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return {data, loading, error}
}

export default index
