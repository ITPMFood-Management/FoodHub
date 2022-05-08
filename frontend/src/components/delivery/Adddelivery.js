import React,{useEffect,useState} from "react";
import "./delivery.css"
import axios from 'axios';
import Logo2 from '../../img/Logo-2.png'
import Swal from "sweetalert2";

const Adddelivery = () => {
  const[name,setName]=useState('')
  const[age,setAge]=useState('')
  const[workdate,setworkDate]=useState('')
  const[birthday,setbirthDate]=useState('')
  const[address,setAddress]=useState('')
  const[phonenumber,setPhonenumber]=useState('')
  const[email,setEmail]=useState('')


  const submit=()=>{
    const data={
      name: name,
      address:address,
      age:age,
      phoneNumber: phonenumber,
      email:email,
      birthDate:birthday,
      workDate:workdate
    }
  axios.post('http://localhost:8070/delivery/create', data).then(res=>{
    console.log(res);
  })
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Added succesfully',
    showConfirmButton: false,
    timer: 1500,
  })
  
  }
  const Clear= ()=>{
    setName("")
    setAge("")
    setworkDate("")
    setbirthDate("")
    setAddress("")
    setPhonenumber("")
    setEmail("")
    

  }
   
      
    
  
    return (
            
        <div>
<header class="text-gray-400  body-font  fixed " > 
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed bg-white border-2 border-slate-100">
    <a href="/home" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img src={Logo2} className="w-12" />
      <span class="ml-3 text-xl text-red-700">FOOD HUB</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <a href="/addDelivery" class="mr-5 hover:text-red-700 duration-500 ">Add Delivery Details</a>
      <a href="/Viewdelivery" class="mr-5 hover:text-red-700 duration-500">View delivery details</a>
      <a href="/Updatedelivery" class="mr-5 hover:text-red-700 duration-500">Update delivery details</a>
      {/* <a href="" class="mr-5 hover:text-red-700 duration-500">Fourth Link</a> */}
    </nav>
   <div className=""> {/*  {listOfUsers.map((user) => ( <img class="h-10 w-10 rounded-full" src={"images/" + user.photo}></img>))} */}</div> 

  

   <a href="/signin"> <button class="inline-flex items-center bg-white border-solid border-2 border-black py-1 px-3 focus:outline-none hover:text-red-700 rounded text-base mt-4 md:mt-0 mr-7">Log Out
     
    <ion-icon name="person-circle-outline"></ion-icon>
    
    </button></a>
   
  </div>
</header>

      <p class="text-2xl flex justify-center">Create Delivery</p>
      <div class=" flex justify-center">
          <form className="w-11/12 p-12 bg-cyan-200 sm:w-8/12 md:w-1/2 lg:w-5/12 mt-20">
        <div className="">

        <div class="">Name
  <input value={name} onChange={(e)=>setName(e.target.value)}  required="required" title="Name cannot contain any numbers or special characters"  type="text" name="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
 
</div>



          <br /> 
          <div class="">Age
  <input  value={age}  onChange={(e)=>setAge(e.target.value)} required pattern="[1-9]{1,3}" title="Age cannot contain any letters or special characters  and Age > 0"  type="text" name="age" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
  <label for="age" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
</div>
             <br /> 
             <div class="">Workdate
  <input   value={workdate}  onChange={(e)=>setworkDate(e.target.value)} required pattern="[A-Za-z]+" title="Gender cannot contain any numbers or special characters"  type="text" name="gender" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
  <label for="gender" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
</div>
              <br />

              <div class="">Birth Day
  <input   value={birthday}  onChange={(e)=>setbirthDate(e.target.value)} required  type="text" name="address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
  <label for="address" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
</div>



            <br />  
            <div class="">Address
  <input   value={address}  onChange={(e)=>setAddress(e.target.value)} required pattern = "[0-9]{10}" title="Phone cannot contain any letters or special characters and cannot exceeded 10 digits"  type="text" name="phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
  <label for="phone" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
</div>


              <br />  
              <div class="">Phone Number
  <input   value={phonenumber}   onChange={(e)=>setPhonenumber(e.target.value)} required pattern = "[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"   type="email" name="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
  <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
</div>

<div class="">Email Address
  <input   value={email}   onChange={(e)=>setEmail(e.target.value)} required pattern = "[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"   type="email" name="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
  <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
</div>

             

        </div>

        <a href='/viewDelivery'>
        <button onClick={submit} type="button" data-modal-toggle="delete-user-modal" class="mt-5 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
       
                                              Submit
                                          </button>  </a>

                                          <button onClick={Clear} type="button" data-modal-toggle="delete-user-modal" class="mt-5 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center ml-5">
       
       Clear
   </button>  
        
    
    </form></div></div>
    )
      
    }
  export default Adddelivery;
  