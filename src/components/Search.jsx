import React ,{useEffect, useState } from 'react';
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {
  const[input,setInput]=useState("");
  const navigate=useNavigate();
  const submitHandler=(e)=>{
e.preventDefault();
navigate('/Searched/'+input);
  };

  
  return (
   <Sform onSubmit={submitHandler}>
 <FaSearch/> 
<input type="text" placeholder='search....' onChange={(e)=>{setInput(e.target.value)}} value={input} />

   </Sform>
   

  )
};
const Sform= styled.form`
position:relative;
width:45%;
margin:1.7rem auto;

input{
    width:100%;
    background:linear-gradient(35deg,#494949,#313131);
    border-radius:1rem;
    border:none;
    outline:none;
    color:#F5F5F5;
    padding:.6rem 2.5rem;
    font-weight:bold;
   
}
 svg{
    color:white;
    left:3%;
    bottom:30%; 
    position:absolute;
} 
`

export default Search