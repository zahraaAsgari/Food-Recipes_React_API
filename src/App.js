import React from 'react';
import Pages from './pages/Pages';
import  Category  from './components/Category';
import { BrowserRouter } from "react-router-dom";
import Constants from "./components/Constants";






function App() {
    return (
      <BrowserRouter>
     <Constants/>
<Category/>
  <Pages/>
</BrowserRouter>


    )
}

export default App;