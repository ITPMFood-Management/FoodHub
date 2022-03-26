
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Foodhub from "./components/foodhub";
import Footer from "./footer";
import Home from "./Home";

import User from "./user";



const App = () => {
    return (  
        <div className="App">
      
      <Routes>
        
        <Route path="/" element={<Foodhub/>} />
        <Route path="/user" element={<User/>} />
      
  
       
 
      </Routes>
      <Footer/>
    </div>
    );
}
 
export default App;