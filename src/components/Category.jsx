import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Category = () => {
    return ( 
        <List>
       
       <Slink to = { '/specials/Italian' }>
       
       <FaPizzaSlice / >
       
       <h5> Italian </h5> 
       </Slink> 
        <Slink to = { '/specials/American' }>
        
        <FaHamburger/>
        
        <h5> American </h5>
        </Slink>
        <Slink to = { '/specials/Thai' }>
        
        <GiNoodles/>
        
        <h5> Thai </h5>
        </Slink > 
        <Slink to = { '/specials/Spanish' }>
        
        <GiChopsticks />
        
        <h5> Spanish </h5>
        </Slink>
        </List>
    )
}
const List = styled.div `
display:flex;
align-items:center;
justify-content:center;
margin:2rem auto 0;
width:50%;
`;
const Slink = styled(NavLink)`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:5rem;
height:5rem;
border-radius:50%;
background:linear-gradient(35deg,#313131,#494949);
margin-left:2rem;
cursor:pointer;
transform:scale(0.8);
:hover{
   svg{
    color:#EC9F05;
   }
   h5{
    color:#EC9F05;
   }
}
h5{
    color:white;font-size:.9rem;
}
svg{
    color:white;
}
&.active{
    color:grey;
    background-color: #ff4e00;
background-image: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%);
}
`;
export default Category;