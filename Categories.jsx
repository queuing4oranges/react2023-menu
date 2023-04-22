import React from 'react'

export default function Categories({categories, showCategoryItem}) {

  return (
    <div className='btn-container'>
        {categories.map((category)=>(
            <div key={category} className="categ-btn">
                <button 
                onClick={()=>showCategoryItem(category)}
                className='btn'>{category}</button>
            </div>
        ))}
    </div>
  )
}
