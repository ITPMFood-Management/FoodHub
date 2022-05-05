import React, { useState } from 'react';
import './addorder.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import background from '../../img/Order.png';
import Logo2 from "../../img/Logo-2.png"

import "react-toastify/dist/ReactToastify.css";


export default function AddOrder(){

  const [customername, setCustomername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [itemnumber, setItemnumber] = useState("");
  const [quantity, setQuantity] = useState("");


  const handleSubmit = async (e) => {
    //logic for adding data to the BACKENDe
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const value ={customername, phoneNumber, address, category, itemnumber, quantity}
    if(value.phoneNumber.length<10){
      alert("Phone Number must be minimum 10 characters... or Enter a valid contact Number")
      e.preventDefault();
    }
    else{
    try {
      //exception handling
      var { data } = await axios.post(
        "http://localhost:8070/orders/create",value,
        config
      );
      toast("Success! Added 😘");
      setCustomername("");
      setPhoneNumber("");
      setAddress("");
      setCategory("");
      setItemnumber("");
      setQuantity("");
    } catch (error) {
      toast(`Error! ${error?.response?.data?.error}`);
      setTimeout(() => {}, 5000); //5s
    }
  }
  };

  const Clear= ()=>{

      setCustomername("");
      setPhoneNumber("");
      setAddress("");
      setCategory("");
      setItemnumber("");
      setQuantity("");
  
  }
  
  

return(

  <div>

<header className="AddOrder" class="text-gray-400  body-font  fixed">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed bg-white border-2 border-slate-100">
    <a href="/home" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img src={Logo2} className="w-12" />
      <span class="ml-3 text-xl text-red-700">FOOD HUB</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <a href="/addorder" class="mr-5 hover:text-red-700 duration-500 ">Add Order</a>
      <a href="/orderlist" class="mr-5 hover:text-red-700 duration-500">Order List</a>
      <a href="/addcomplaint" class="mr-5 hover:text-red-700 duration-500">Add Complaints</a>
      <a href="" class="mr-5 hover:text-red-700 duration-500">Fourth Link</a>
</nav>
   
  

   <a href="/signin"> <button class="inline-flex items-center bg-white border-solid border-2 border-black py-1 px-3 focus:outline-none hover:text-red-700 rounded text-base mt-4 md:mt-0 mr-7">Log Out
     
    <ion-icon name="person-circle-outline"></ion-icon>
    
    </button></a>
   
  </div>
</header>





 <div style={{backgroundImage:`url(${background})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  width:"100%",
  height:"100%",}}>

<div className="AddOrderContainer px-24 flex items-center">

 

<form className="w-full max-w-lg" onSubmit={handleSubmit}>


<center><b><h1>Add Order</h1></b></center>

<br></br>

<div className="flex flex-wrap -mx-3 mb-1">
<div className="w-full px-3">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-oname">
   Customer Name:
  </label>
  <input type="text" 
  id="grid-oname" 
   name="customername" 
   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
   placeholder="Enter the Customer Name"
   required
   value={customername}
   onChange={(e)=>{
    setCustomername(e.target.value); 
   }} 
   />     
</div>
</div>
<div className="flex flex-wrap -mx-3 mb-1">
<div className="w-full px-3">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-ophone">
   Contact Number:
  </label>
  <input type="number" 
 
//  rules={[

//   { required: true, message: "Please input your Phone Number!" },
  
//   {
  
//   min: 10,
  
//   message: "Phone Number must be minimum 10 characters.",
  
//   },
  
//   {max: 10 },
  
//   ]}

  id="grid-ophone" 
  name="phoneNumber"  

  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  
  placeholder="Enter the Contact Number" 
  // required pattern = "[0-9]{10}" title="Phone cannot contain any letters or special characters and cannot exceeded 10 digits"
  value={phoneNumber}
  onChange={(e)=>{
  setPhoneNumber(e.target.value); 
   }} 
  />
 
</div>
</div>
<div className="flex flex-wrap -mx-3 mb-1">
<div className="w-full px-3">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-oaddress">
  Address:
  </label>
  <input type="text" 
  id="grid-oaddress"  
  name="address"
  
   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  
   placeholder="Enter the Address" 
   required
   value={address}
   onChange={(e)=>{
   setAddress(e.target.value); 
     }} 
   />
 
</div>
</div>

<div className="flex flex-wrap -mx-3 mb-1">
<div className="w-full px-3">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-ocategory">
  Category:
  </label>
  <div className="relative">
    <select 
    id="grid-ocategory" 
    name="category"  
    
    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    value={category}
    onChange={(e)=>{
    setCategory(e.target.value); 
        }} 
    >
      <option>Select</option>
      <option>Breakfast</option>
      <option>Lunch</option>
      <option>Dinner</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg> 
    </div>
  </div>
  </div>
</div>


<div className="flex flex-wrap -mx-3 mb-1">
<div className="w-full px-3">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-ocode">
  Item Code :
  </label>
  <input type="text" 
  id="grid-ocode"  
  name="itemnumber" 
  
   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  
   placeholder="Enter the Item Code" 
   required
   value={itemnumber}
   onChange={(e)=>{
   setItemnumber(e.target.value); 
     }} 
   />
 
</div>
</div>

<div className="flex flex-wrap -mx-3 mb-1">
<div className="w-full px-3">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-oquantity">
  Quantity :
  </label>
  <input type="number" 
  id="grid-oquantity"  
  name="quantity" 
  
   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  
   placeholder="Enter the Quantity" 
   required
   value={quantity}
   onChange={(e)=>{
    setQuantity(e.target.value); 
     }} 
   />
 
</div>
</div>

<div className="md:flex md:items-center">
<div className="md:w-1/3"></div>
<div className="md:w-2/3">
  <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-4 rounded" type="submit">
    Submit
  </button>

  <button onClick={Clear} className="btn shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-4 rounded md:items-left" type="submit">
    Clear
  </button>

</div>
</div>

</form>

</div>
</div>
</div>

)
}