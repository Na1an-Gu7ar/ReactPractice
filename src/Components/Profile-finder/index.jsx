import React, { useState } from 'react'

const index = () => {
    const [username, setUsername] = useState('Na1an-Gu7ar')
    const [profiles, setProfiles] = useState([])
    const [loading, setLoading] = useState(false)

    // fetch(`https://api.github.com/users/${username}`)

    const loadData = async () => {
        // setLoading(true)
        try {
            // setLoading(true)
            let url = `https://api.github.com/users/${username}`
            let response = await fetch(url)
            let data = await response.json()
            setProfiles([data])
        } catch (err) {
            setLoading(false)
        }
    }

    useState(() => {
        loadData()
    }, [])

    // console.log(profiles);

    // const handleClick = (e) => {
    //     setUsername(e.target.value)
    //     loadData()
    // }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className='flex flex-col gap-10 justify-center items-center flex-shrink'>
            <div>
                <input type="text" className='border border-solid border-black' value={username} onChange={(e) => setUsername(e.target.value)} />
                <button onClick={() => loadData()}>Load</button>
            </div>
            {loading ? loading : profiles.map((p) => {
                return (
                    <div key={p.id} className='flex flex-row gap-10 flex-wrap'>
                        <div>Username: {p.login}</div>
                        <div className='flex flex-row gap-10 flex-wrap'>
                            <div className='w-40'><img src={p.avatar_url} alt={p.login} /></div>
                            <div>Followers:<br />{p.followers}</div>
                            <div>Following:<br />{p.following}</div>
                            <div>Repositories:<br />{p.public_repos}</div>
                            <div><a href={p.html_url} className='text-blue-500 hover:underline'>Visit</a></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default index
