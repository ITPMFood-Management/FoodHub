import React,{useState} from "react"
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
import Logo2 from "../../img/Logo-2.png"
import {  toast } from 'react-toastify';
//import Swal from "sweetalert2";


export default function AddComplaint(){

  const [ctype, setCtype] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");



  const handleSubmit = async (e) => {
    //logic for adding data to the BACKENDe
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const value ={ctype, description, email}
  
    try {
      //exception handling
      var { data } = await axios.post(
        "http://localhost:8070/complaints/create",value,
        config
      );
      toast("Success! Added 😘");
      setCtype("");
      setDescription("");
      setEmail("");

      
    } catch (error) {
      toast(`Error! ${error?.response?.data?.error}`);
      setTimeout(() => {}, 5000); //5s
    }
  }

      document.getElementById('formFile').value= null;
   }).catch((err)=>{
     alert(err)
   })
 
  //  Swal.fire({
  //   position: 'top-end',
  //   icon: 'success',
  //   title: 'Complaint added',
  //   showConfirmButton: false,
  //   timer: 1500
  // })

  

function refreshPage() {
  window.location.reload(false);
}
 
   

return(
  
 <div>
 <header class="text-gray-400  body-font  fixed">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed bg-white border-2 border-slate-100">
    <a href="/home" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img src={Logo2} className="w-12" />
      <span class="ml-3 text-xl text-red-700">FOOD HUB</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <a href="/addorder" class="mr-5 hover:text-red-700 duration-500 ">Add Order</a>
      <a href="/orderlist" class="mr-5 hover:text-red-700 duration-500">Order List</a>
<<<<<<< HEAD
      <a href="/addcomplaint" class="mr-5 hover:text-red-700 duration-500">Add Complaints</a>
=======
      <a href="addcomplaint" class="mr-5 hover:text-red-700 duration-500">Add Complaints</a>
      <a href="" class="mr-5 hover:text-red-700 duration-500">Fourth Link</a>
>>>>>>> 35d95c92ce97fde7dc13ac37436dc15c80ab9d8b
    </nav>

   <a href="/signin"> <button class="inline-flex items-center bg-white border-solid border-2 border-black py-1 px-3 focus:outline-none hover:text-red-700 rounded text-base mt-4 md:mt-0 mr-7">Log Out
     
    <ion-icon name="person-circle-outline"></ion-icon>
    
    </button></a>
   
  </div>
</header>
 <br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div class=" z-10 flex justify-center">
<form className="w-11/12 p-12 bg-green-200 sm:w-8/12 md:w-1/2 lg:w-5/12 mt-20" onSubmit={handleSubmit} encType='multipart/form-data'>
<h1 className="text-4xl font-normal leading-normal mt-0 mb-2  text-center text-gray-700">
  Add Complaints
</h1>
<div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-ctype">
       Complaint Type:
      </label>
      <input type="text" 
       id="grid-ctype" 
       name="ctype" 
      
       value={ctype}
       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-blue-700" 
       placeholder="Enter the Complaint Type"
      
       onChange={(e)=>{
        setCtype(e.target.value); 
       }} 
       />     
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-des">
       Description:
      </label>
      <input type="text" 
      id="grid-des" 
      name="description"
      required="required"
      value={description}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"  
      placeholder="Enter the Description" 
     
      onChange={(e)=>{
      setDescription(e.target.value); 
       }} 
      />
     
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
       Email:
      </label>
      <input type="text" 
      id="grid-email" 
      name="email"
      required="required"
      value={email}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"  
      placeholder="Enter the Email" 
     
      onChange={(e)=>{
      setEmail(e.target.value); 
       }} 
      />
     
    </div>
  </div>

<div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">

    
      <button  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-3 rounded" type="submit">
        Submit
      </button>  
      <button onClick={refreshPage} type="button" data-modal-toggle="delete-user-modal" class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-5 ml-5 rounded">
       
       Clear
   </button>  
    </div>
  </div>

</form>
</div>


</div>

     )
}
