import React from 'react';
import {Link} from 'react-router-dom';
import {GiKnifeFork} from 'react-icons/gi';
import styled from 'styled-components';

function Logo() {
  return (
  
     <Mark to={'/'}>
       <GiKnifeFork/>
       <h5>
        Delisious
       </h5>

    </Mark>
 
  )
}

const Mark =styled(Link)`
display:flex;
margin-top:2rem;
align-items:center;

:hover{
    color:#EC9F05;
}
svg{
    font-size:1.5rem;
    margin-right:.4rem;
}
h5{
    font-size:1rem;
}
`

export default Logo;