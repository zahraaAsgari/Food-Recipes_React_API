import React ,{ useEffect, useState }from 'react';
import styled from 'styled-components';
import {useParams , Link} from 'react-router-dom';

function Searched() {
    const [searched,setSearched]=useState([]);
    const params=useParams();

   const getSearched=async(name)=>{
    const api= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7adf26da632b45349114ae3c9b6cc9de&number=12&query=${name}`);
    const data=await api.json();
    setSearched(data.results);
    console.log(data.results);
   }
   useEffect(() => {
getSearched(params.search);
    },[params.search]);
   return (


    <Grid>
        {searched.map((item)=>{
            return(
             
               <Card key={item.id}>
               <Link to={'/recipe/'+ item.id}>
                 <img src={item.image} alt={item.title} />
                    <h5>{item.title}</h5>
                 </Link>
                </Card>
            
            )
        })}
        </Grid>
  )
}
const Grid=styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(13.5rem,1fr));
grid-gap:3rem; 
`
const Card=styled.div`
margin-top:2.5rem;
overflow:hidden;
border-radius:3rem;
text-align:center;
color:#313131;
img{
    width:100%;
    border-radius:3rem;
    object-fit:cover;
}
`


export default Searched;