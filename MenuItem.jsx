import React from 'react'

export default function MenuItem({ menuItem }) {
  return (
    <div className='menu-item'>        
        <div className="img-container">
        <img src={menuItem.img} alt={menuItem.title} />
        </div>
        <h4 className='subtitle'>{menuItem.title}</h4>
        <p className='category'>{menuItem.category}</p>
        <p className='price'>{menuItem.price}</p>
        <p className='item-info'>{menuItem.desc}</p>
      
    </div>
  )
}
