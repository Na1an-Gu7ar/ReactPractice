import React from 'react'
import MenuList from './menu-list'

const index = ({menu = []}) => {

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <MenuList list={menu}/>
        </div>
    )
}

export default index
