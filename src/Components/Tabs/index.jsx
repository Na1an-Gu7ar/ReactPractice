import React, { useState } from 'react'

const index = () => {

    const tabs = [
        {
            name: 'tab1',
            link: "#",
            content: 'tab1content'
        },
        {
            name: 'tab2',
            link: "#",
            content: 'tab2content'
        },
        {
            name: 'tab3',
            link: "#",
            content: 'tab3content'
        },
        {
            name: 'tab4',
            link: "#",
            content: 'tab4content'
        }
    ]

    const [tab, setTab] = useState("tab1")

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <ul className='flex flex-row gap-5'>
                {
                    tabs.map((t) => (
                        <li key={t.name}>
                            <a href={t.link} onClick={() => setTab(t.name)}>
                                {t.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className='flex flex-col'>
                {tabs.map((t) => (
                    <div key={t.name} className={t.name === tab ? 'block' : 'hidden'}>
                        {t.content}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default index
