import React,{useEffect,useState} from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment';






const Updatedelivery = (props) => {

  const[name,setName]=useState('')
  const[age,setAge]=useState('')
  const[workdate,setworkDate]=useState('')
  const[birthday,setbirthDate]=useState('')
  const[address,setAddress]=useState('')
  const[phonenumber,setPhonenumber]=useState('')
  const[email,setEmail]=useState('')
  const[details,setDetails]=useState([]);
  const params = useParams()
  

  // yuo can find all params from here

  
  useEffect(()=>{
  
    getData();
     
  },[])
  const getData=()=>{
  

    axios.get(`http://localhost:8070/delivery/get/${params.id}`).then(res=>{
      console.log(res.data)
      setName(res.data.name)
      setAge(res.data.age)
      setEmail(res.data.email)
      setbirthDate(moment(res.data.birthDate).format("MMM DD ,YYYY"))
      setPhonenumber(res.data.phoneNumber)
      setworkDate(moment(res.data.workDate).format("MMM DD ,YYYY"))
      setAddress(res.data.address)
    }) 
    .then((res)=>{
      console.log(res.data);
    }) 
  }
 
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
 axios.put(`http://localhost:8070/delivery/update/${params.id}`, data).then(res=>{
    console.log(res);
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



   

   

   const retrievePosts=(id)=>{
        axios.get(`http://localhost:8070/delivery/get/${id}`).then(res =>{
          console.log(res.data)
      
        })}

  
       
    
  
    return (
        <div>
           <div class=" flex justify-center">
          <form className="w-11/12 p-12 bg-gray-50 sm:w-8/12 md:w-1/2 lg:w-5/12 mt-20">
        <div className="">

        <div class="">Name
  <input value={name} onChange={(e)=>setName(e.target.value)} required pattern="[A-Za-z]+" title="Name cannot contain any numbers or special characters"  type="text" name="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
 
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

        <a href="/viewDelivery">
        <button onClick={submit} type="button" data-modal-toggle="delete-user-modal" class="mt-5 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
       
                                              Submit
                                          </button>  </a>

                                          <button onClick={Clear} type="button" data-modal-toggle="delete-user-modal" class="mt-5 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
       
       Clear
   </button>  
        
    
    </form>
    </div>
</div>
    )
      
    }
  export default Updatedelivery;