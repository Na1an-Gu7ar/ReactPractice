import React, { useState } from 'react'

const index = () => {
    const [username, setUsername] = useState('Na1an-Gu7ar')
    const [profiles, setProfiles] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const loadData = async () => {
        try {
            setLoading(true)
            let url = `https://api.github.com/users/${username}`
            let response = await fetch(url)
            if(response.ok){
                let data = await response.json()
                setProfiles([data])
            }else{
                setError('Profile Not Exist')
            }

        } catch (err) {
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    useState(() => {
        loadData()
    }, [])

    return (
        <div className='flex flex-col gap-10 justify-center items-center w-screen h-screen'>
            <div className='flex flex-row gap-5'>
                <input type="text" name={username} className='border border-solid border-black' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <button onClick={() => loadData()} className='bg-gray-300 rounded-md w-16'>Search</button>
            </div>
            {error.length > 0 ? error : (loading ? <div>Loading...</div> : profiles.map((p) => {
                return (
                    <div key={p.id}>
                        <div className='flex flex-row gap-10 flex-wrap justify-start items-center' style={{ width: '12rem' }}>
                            <div>Username: {p.login}</div>
                            <div className='w-52'><img src={p.avatar_url} alt={p.login} /></div>
                            <div>Followers:<br />{p.followers}</div>
                            <div>Following:<br />{p.following}</div>
                            <div>Repositories:<br />{p.public_repos}</div>
                            <div><a href={p.html_url} target='_blank' className='text-blue-500 hover:underline'>Visit</a></div>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default index
