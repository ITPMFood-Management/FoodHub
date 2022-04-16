
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Addcustomer from "./components/customerM/addcustomer";
import Customerlist from "./components/customerM/customerlist";
import Editcustomer from "./components/customerM/editcustomer";
import Foodhub from "./components/foodhub";
import SignInForm from "./components/pages/signinform";
import SignUpForm from "./components/pages/signupform";
import Footer from "./footer";
import Home from "./Home";
import AddFood from "./components/FoodM/AddFood";
import User from "./user";
import Delivery from "./components/delivery/Adddelivery"
import Assigndelivery from "./components/delivery/Assigndelivery"
import Updatedelivery from "./components/delivery/Updatedelivery"
import Viewdelivery from "./components/delivery/Viewdelivery"


import AddOrder from "./components/orderM/addorder"
import OrderList from "./components/orderM/orderlist"

import FoodList from "./components/FoodM/foodlist";







const App = () => {
    return (  
        <div className="App">
     
      <Routes>
        
        <Route path="/" element={<Foodhub/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/home" element={<Home/>} />

        <Route path="/addDelivery" element={<Delivery/>} />
        <Route path="/assignDelivery" element={<Assigndelivery/>} />
        <Route path="/Updatedelivery/:id" element={Updatedelivery} />
        <Route path="/Viewdelivery" element={<Viewdelivery/>} />
      
  

        <Route path="/addcustomer" element={<Addcustomer/>} />


        <Route path="/signin" element={<SignInForm/>} />
        <Route path="/signup" element={<SignUpForm/>}/>
        <Route path="/customerlist" element={<Customerlist/>}/>
        <Route path="/Editcustomer" element={<Editcustomer/>}/>


        <Route path="/addorder"     element={<AddOrder/>}/>
        <Route path="/orderlist"   element={<OrderList/>}/>
 
=======

        
        <Route path="/addfood"     element={<AddFood/>}/>
        <Route path="/foodlist"   element={<FoodList/>}/>
        

      
        </Routes>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer/>  
    </div>
    );
}
 

export default App;


