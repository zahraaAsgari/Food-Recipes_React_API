import React,{ useEffect, useState } from 'react';

function Veggie() {
    const [veggie,setVeggie]=useState([]);
     const getRecipes=async()=>{
        const response= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=7adf26da632b45349114ae3c9b6cc9de&number=10&tags=vegeterian`);
        const data=await response.json();
        console.log(data);
     }
    useEffect(()=>{
getRecipes();
    },[])
  return (
    <div></div>
  )
}

export default Veggie