import React, { useState, useEffect } from 'react';
import Title from '../Title';
import data from './data'
import Menu from '../Menu';
import Categories from '../Categories'

const App = () => {
  const [menu, setMenu] = useState(data)
  const [categories, setCategories] = useState([])
  
  useEffect(() =>{
    setCategories(categArr);
   },[])
   
  let mySet = new Set();
  mySet.add("all");
  mySet.add("breakfast");
  mySet.add("lunch");
  mySet.add("shakes");
  //get an array of all values in the set
  let categArr = Array.from(mySet)

  //filter the item that is equal to the category onclick event in categories.jsx
  const showCategoryItem = (category) => {

    if(category==="all"){
      setMenu(data)
    } else {
      //always filter from scratch -> data, not menu!
      const arr = data.filter((item) => item.category===category)
      setMenu(arr)
      console.log(arr)
    }
  }

  return (
    <div className='menu-container'>
    <Title />
    <Categories 
      categories={categories} 
      showCategoryItem={showCategoryItem}/>
    <Menu menu={menu}/>
  </div>
    )
};
export default App;
