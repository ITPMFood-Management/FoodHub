import React, { useState } from 'react';
//import './addorder.css';
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
 
<div>
 
<center><form className="w-full max-w-lg">
    <center><b><p>Add Order</p></b></center>
 <br></br>
 
<div >
    <div>
      <label>
      Customer Name :
      </label><br></br>
      <input type="text" name= "customername" value={newUser.customername} placeholder="Enter the Customer Name"/>
     
    </div>
  </div>
  <div >
    <div>
      <label>
       Contact Number :
      </label><br></br>
      <input type="number" name="phonenumber" value={newUser.phonenumber} required pattern = "[0-9]{10}" title="Phone cannot contain any letters or special characters and cannot exceeded 10 digits"  placeholder="Enter the Contact Number"/>
     
    </div>
  </div>

  <div>
    <div >
      <label >
      Address :
      </label><br></br>
      <input type="text" name="address" value={newUser.address} placeholder="Enter the Address"/>
     
    </div>
  </div>


  <div>
    <div>
      <label>
      Food Code :
      </label><br></br>
      <input type="text" name="itemnumber" value={newUser.itemnumber} placeholder="Enter the Item Code"/>
     
    </div>
  </div>
  
  <div>
   <div>
      <label>
      Category :
      </label>
      <div>
        <select>
          <option>Select</option>
          <option>************</option>
          <option>***********</option>
          <option>***********</option>
        </select>
        <div> 
        </div>
      </div>
      </div>
    </div>
 
    <div >
    <div >
      <label >
      Quantity :
      </label><br></br>
      <input type="number" name="quantity" value={newUser.quantity}  placeholder="Enter the Quantity"/>
     
    </div>
  </div>

<div >
    <div ></div>
    <div >
      <button  type="submit">
        Submit
      </button>
    </div>
  </div>

</form></center>


</div>

    )
}

