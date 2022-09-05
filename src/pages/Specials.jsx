import React , { useEffect, useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link ,useParams} from 'react-router-dom';

function Specials() {
    const [specials,setSpcials]=useState([]);
    let params=useParams();

    const getSpecials=async(name)=>{
        const response=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7adf26da632b45349114ae3c9b6cc9de&number=12&cuisine=${name}`);
        const data=await response.json();
        setSpcials(data.results);
        console.log(data.results);
    }
    useEffect(()=>{
        getSpecials(params.type);
      
            },[params]);
  return (
    <Grid
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.7}}
    >
        {specials.map((item)=>{
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
const Grid=styled(motion.div)`
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

export default Specials;
