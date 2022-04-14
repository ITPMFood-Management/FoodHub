import React, { useState } from 'react';
import './addorder.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';




export default function AddOrder(){


    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);


   const[newUser, setNewUser] = useState(
        {
          customername :  '',
          category :  '',
          itemnumber : '',
          quantity : '',
          phonenumber: '',
          address : '',


        }
   );

   const handleSubmit = (e) => {
    e.preventDefault();
    
    setLoading(true);
    setIsError(false);


    const fromData = new FormData();
    fromData.append('customername', newUser.customername);
    fromData.append('category', newUser.category);
    fromData.append('itemnumber', newUser.itemnumber);
    fromData.append('quantity', newUser.quantity);
    fromData.append('phonenumber', newUser.phonenumber);
    fromData.append('address', newUser.address);
      

   axios.post('http://localhost:8070/order/create', fromData)
    .then(res => {
      console.log(res);
       setLoading(false);
      setNewUser({customername :'' , category : '' , itemnumber : '' , quantity : '' , phonenumber : '' , address :'' })
        toast("Success! Order Added Successfully 😘")
     })
     .catch(err => {
      console.log(err);
      setLoading(false);
      setIsError(true);
      toast("Error! Order not Added: itemnumber is wrong")
   });
}

const handleChange = (e) => {
  setNewUser({...newUser, [e.target.itemnumber]: e.target.value});
}
 

return(
 
<div className="AddOrderContainer px-24 flex items-center">
 
<form className="w-full max-w-lg">
    <center><b><p>Add Order</p></b></center>
 <br></br>
 <br></br>
 <br></br> 
<div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-oname">
      Customer Name :
      </label>
      <input  id="grid-oname" type="text" name= "customername" value={newUser.customername} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter the Customer Name"/>
     
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-ophone">
       Contact Number :
      </label>
      <input   id="grid-ophone" type="number" name="phonenumber" value={newUser.phonenumber} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  placeholder="Enter the Contact Number"/>
     
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-oaddress">
      Address :
      </label>
      <input id="grid-oaddress" type="text" name="address" value={newUser.address} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  placeholder="Enter the Address"/>
     
    </div>
  </div>


  <div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-ocode">
      Food Code :
      </label>
      <input id="grid-ocode" type="text" name="Itemprice" value={newUser.Itemprice} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  placeholder="Enter the Item Code"/>
     
    </div>
  </div>
  
  <div className="flex flex-wrap -mx-3 mb-1">
   <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-ocatergory">
      Category :
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-ocatergory">
          <option>***********</option>
          <option>************</option>
          <option>***********</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg> 
        </div>
      </div>
      </div>
    </div>
 
    <div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-oquantity">
      Quantity :
      </label>
      <input id="grid-oquantity" type="number" name="quantity" value={newUser.quantity} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  placeholder="Enter the Quantity"/>
     
    </div>
  </div>

<div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-4 rounded" type="submit">
        Submit
      </button>
    </div>
  </div>

</form>


</div>

    )
}

