import React from 'react'
import MenuItem from './menu-item'

const MenuList = ({list = []}) => {
  return (
    <ul className='relative left-5'>
      {list && list.length ? list.map((listitem) => <MenuItem key={listitem.label} item={listitem} />) : null}
    </ul>
  )
}

export default MenuList
