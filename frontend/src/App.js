
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Addcustomer from "./components/customerM/addcustomer";
import Customerlist from "./components/customerM/customerlist";
import Editcustomer from "./components/customerM/editcustomer";
import Foodhub from "./components/foodhub";
import Footer from "./footer";
import Home from "./Home";
import AddFood from "./components/FoodM/AddFood";
import User from "./user";
import Delivery from "./components/delivery/Adddelivery"
import Assigndelivery from "./components/delivery/Assigndelivery"
import Updatedelivery from "./components/delivery/Updatedelivery"
import Viewdelivery from "./components/delivery/Viewdelivery"
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AddOrder from "./components/orderM/addorder"
import OrderList from "./components/orderM/orderlist"
import AddComplaint from "./components/orderM/addcomplaint"
import UpdateOrder from "./components/orderM/updateorder";

import FoodList from "./components/FoodM/foodlist";

import Updatefood from "./components/FoodM/Updatefood";
import Orders from "./components/FoodM/orders";
import PrivateRoute from './components/routes/PrivateRoute'

import Userpage from './components/Userpage/Userpage'

const App = () => {
    return (  
        <div className="App">
     
      <Routes>
        
        <Route path="/" element={<Foodhub/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        <Route path="/addDelivery" element={<Delivery/>} />
        <Route path="/assignDelivery" element={<Assigndelivery/>} />
        <Route path="/Updatedelivery/:id" element={<Updatedelivery/>} />
        <Route path="/Viewdelivery" element={<Viewdelivery/>} />
      
  

        <Route path="/addcustomer" element={<Addcustomer/>} />

        <Route
            path="/user/:name/"
            element={
              <PrivateRoute>
                <Userpage />
              </PrivateRoute>
            }
          />
       
        <Route path="/customerlist" element={<Customerlist/>}/>
        <Route path="/Editcustomer" element={<Editcustomer/>}/>


        <Route path="/addorder"     element={<AddOrder/>}/>
        <Route path="/orderlist"   element={<OrderList/>}/>
        <Route path="/addcomplaint"   element={<AddComplaint/>}/>
        <Route path="/updateorder"   element={<UpdateOrder/>}/>


        
        <Route path="/addfood"     element={<AddFood/>}/>
        <Route path="/foodlist"   element={<FoodList/>}/>
       <Route path="/updatefood/:id"   element={<Updatefood/>}/>
       <Route path="/orders"           element={<Orders/>}/>
     

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


