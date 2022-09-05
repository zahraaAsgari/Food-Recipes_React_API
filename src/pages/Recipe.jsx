import React ,{ useEffect, useState }from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

function Recipe() {
    const [detailes,setDetailes]=useState({});
    const[activeTab,setActiveTab]=useState('instructions');
    const [gredients,setGredients]=useState({});
    const params=useParams();
    const getRecipes=async()=>{
        const api= await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=7adf26da632b45349114ae3c9b6cc9de`);
        const data= await api.json();
        setDetailes(data);
        setGredients(data.extendedIngredients);
        console.log(data.extendedIngredients);
        // console.log(data);

    }
    useEffect(() => {
        getRecipes();
    },[params.name])
  return (
    <CardWrapper >
    <ImageSide>
    <h3>{detailes.title}</h3>
        <img src={detailes.image} alt={detailes.title} />
    </ImageSide>
   <TextSide>
   <div>
   <Button className={activeTab==='instructions'?'active': ''} onClick={()=>{setActiveTab('instructions')}}>Instructions</Button>
        <Button className={activeTab==='ingredients'?'active': ''} onClick={()=>{setActiveTab('ingredients')}}>Ingredients</Button>
       

    </div>
    {activeTab=== 'instructions' &&(
        <div>
        <p dangerouslySetInnerHTML={{__html:detailes.summary}}></p>
        <p dangerouslySetInnerHTML={{__html:detailes.instructions}}></p>
        </div>
    )}
        {activeTab==='ingredients'&&(
            <ul>
   {gredients.map((ingredient)=>(
   <li key={ingredient.id}>{ingredient.original}</li>
   ))}
   </ul>
        )}
    
   
   
    
  
   </TextSide>
    </CardWrapper>
  )
}

const CardWrapper=styled.div`
width:100%;
display:flex;
justify-content:space-around;
@media screen and (max-width: 992px) {
   display:flex;
   flex-direction:column;
   align-items:center;
   margin: 0 auto;
}


`
const ImageSide=styled.div`
margin-right:5rem;
margin-top:3.5rem;
@media screen and (max-width: 350){

} 


img{
    border-radius:1.5rem;
    margin-top:2rem;
object-fit:cover;
width:20rem;
height:20rem;

}


h3{
    text-align:start;
    font-size:1rem;
}
`
const TextSide =styled.div`
display:flex;
flex-direction:column;

`

const Button=styled.button`


    border:.1rem solid #494949;
    padding:.7rem 1rem;
    margin-left:.6rem;
    margin-bottom:1rem;
    margin-top:4rem;
    border-radius:.3rem;
    background:#fff;
    font-family: 'Edu NSW ACT Foundation', cursive, sans-serif;
    &.active{
        color:white;
background: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%);
    }

`
export default Recipe;