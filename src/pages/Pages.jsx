import React from 'react';
import Home from './Home';
import Specials from './Specials';
import {Route,Routes,useLocation} from 'react-router-dom';
import {AnimatePresence}from 'framer-motion';
import Searched from './Searched';
import Recipe from './Recipe';

function Pages() {
    const location=useLocation();
    return (
          <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
     <Route path="/"  element={<Home/>}/>
     <Route path="/specials/:type" element={<Specials/>}/>
     <Route path="/Searched/:search" element={<Searched/>}/>
     <Route path="/recipe/:name" element={<Recipe/>}/>
        </Routes>
        </AnimatePresence>
        
    )
}

export default Pages;