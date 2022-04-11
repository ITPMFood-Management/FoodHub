
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Foodhub from "./components/foodhub";
import Footer from "./footer";
import Home from "./Home";

import User from "./user";
import Delivery from "./components/delivery/Adddelivery"
import Assigndelivery from "./components/delivery/Assigndelivery"
import Updatedelivery from "./components/delivery/Updatedelivery"
import Viewdelivery from "./components/delivery/Viewdelivery"


const App = () => {
    return (  
        <div className="App">
      
      <Routes>
        
        <Route path="/" element={<Foodhub/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/addDelivery" element={<Delivery/>} />
        <Route path="/assignDelivery" element={<Assigndelivery/>} />
        <Route path="/Updatedelivery" element={<Updatedelivery/>} />
        <Route path="/Viewdelivery" element={<Viewdelivery/>} />
      
  
       
 
      </Routes>
      <Footer/>
    </div>
    );
}
 
export default App;