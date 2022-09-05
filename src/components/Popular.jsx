import React ,{useEffect,useState}from 'react';
import styled from 'styled-components';
import {Splide,SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';


function Popular() {
    const [popular,setPopular]=useState([]);
  
  
useEffect(() => {
getPopular();
},[]);


    const getPopular =async() =>{

        const check=localStorage.getItem('popular');
if(check){
 setPopular(JSON.parse(check));
}else{

      const response= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=7adf26da632b45349114ae3c9b6cc9de&number=10`);
     
     const data= await response.json();
     localStorage.setItem('popular',JSON.stringify(data.recipes));
    console.log(data.recipes);
    setPopular(data.recipes);
}



 }
 //key={recipe.id}

    return ( 
        <div>
            <Wrapper>
<h3>Popular Picks</h3>
<Splide options={
{
    perPage:4,
    arrows:false,
    pagination:false,
    gap:"4rem"
}
}>
{popular.map((recipe)=>{
    return(
        <SplideSlide>
<Card>
 <Link to={'/recipe/'+ recipe.id}>
 <p>{recipe.title}</p>
    <img src={recipe.image} alt={recipe.title} />
<Gradient/>
 </Link>
</Card>
        </SplideSlide>
    );
})}
</Splide>
            </Wrapper>
        </div>
    )
}

const Wrapper=styled.div`
margin:5rem 0;
h3{
    font-size:1.7rem;
}
`

const Card=styled.div`
margin-top:2.5rem;
min-height:17rem;
overflow:hidden;
border-radius:3rem;
position:relative;
img{
    max-width:23rem;
    position:absolute;
    left:0;
 width:100%;
 height:100%;
    object-fit:cover;
    border-radius:3rem;
}
p{
    position:absolute;
    z-index:10;
    bottom:5%;
    left:50%;
    color:white;
    transform:translate(-50%,0);
    font-size:.9rem;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
}
`;
const Gradient=styled.div`
position:absolute;
width:100%;height:100%;
z-index:3;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.6));
`;
export default Popular;