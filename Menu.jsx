import React from 'react'
import MenuItem from './MenuItem'

export default function Menu({ menu }) {
  return (
        <div className='menu'>
        {menu.map((menuItem) =>(
        <div className='menu-item' key={menuItem.id}>
            <MenuItem menuItem={menuItem} />
        </div>
    ))}
    </div>
  )
}
