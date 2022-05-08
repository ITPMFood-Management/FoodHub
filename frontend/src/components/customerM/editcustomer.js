import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {useParams } from "react-router-dom"
import Logo2 from "../../img/Logo-2.png"


const Editcustomer = () => {
  const[name,setName]=useState('')
  const[age,setAge]=useState('')
const [gender, setGender] = useState("")
  const[address,setAddress]=useState('')
  const[phone,setPhone]=useState('')
  const[email,setEmail]=useState('')
  const [loading, setLoading] = useState(false); //additional
  const params = useParams()
  const [photo, setPhoto] = React.useState(null);
  

  // yuo can find all params from here

  
  useEffect(()=>{
  
    getData();
     
  },[])
  const getData=()=>{
  

    axios.get(`http://localhost:8070/customer/get/${params.id}`).then(res=>{
      console.log(res.data)
      setName(res.data.name)
      setAge(res.data.age)
      setEmail(res.data.email)
      setGender(res.data.gender)
      setPhone(res.data.phone)
      setPhoto(res.data.photo)
      setAddress(res.data.address)
      setPhoto(res.data.photo);
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
      phone: phone,
      email:email,
      gender:gender,
      photo:photo
  
    }
 axios.put(`http://localhost:8070/customer/update/${params.id}`, data).then(res=>{
    console.log(res);
  }) 
  }
  const Clear= ()=>{
    setName("")
    setAge("")
    setGender("")
    setPhoto("")
    setAddress("")
    setPhone("")
    setEmail("")
    

  }

  const handleFileSelect = async (event) => {
    setPhoto(event.target.files[0]);
  };


   

   

   const retrievePosts=(id)=>{
        axios.get(`http://localhost:8070/customer/get/${id}`).then(res =>{
          console.log(res.data)
      
        })}

        const [loader, setLoader] = useState(false);

        useEffect(() => {
          setTimeout(() => setLoader(!loader), 1000);
        }, []);
       
      
  
    return (
      <>
      {loader === false ? (
        <center>
          <Spin style={{marginTop:"20rem"}} indicator={<LoadingOutlined />} size="large" />
        </center>
      ): (
       
       
         <div>
          <header class="text-gray-400  body-font  fixed">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed bg-white border-2 border-slate-100">
    <a href="/home" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img src={Logo2} className="w-12" />
      <span class="ml-3 text-xl text-red-700">FOOD HUB</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <a href="/addcustomer" class="mr-5 hover:text-red-700 duration-500 ">Dashboard</a>
      <a href="/customerlist" class="mr-5 hover:text-red-700 duration-500">Account List</a>
      <a href="/customerlist" class="mr-5 hover:text-red-700 duration-500">Complaints</a>
     
    </nav>
   

   
   
    
    

  

   <a href="/signin"> <button class="inline-flex items-center bg-white border-solid border-2 border-black py-1 px-3 focus:outline-none hover:text-red-700 rounded text-base mt-4 md:mt-0 mr-7">Log Out
     
    <ion-icon name="person-circle-outline"></ion-icon>
    
    </button></a>
   
  </div>
</header>
          
           <div class=" flex justify-center">
          <form className="w-11/12 p-12 bg-cyan-200 sm:w-8/12 md:w-1/2 lg:w-5/12 mt-20 ">
        <div className="">

        <div class="">Name
  <input value={name} onChange={(e)=>setName(e.target.value)} required  title="Name cannot contain any numbers or special characters"  type="text" name="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
 
</div>



          <br /> 
          <div class="">Age
  <input  value={age}  onChange={(e)=>setAge(e.target.value)} required  title="Age cannot contain any letters or special characters  and Age > 0"  type="text" name="age" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
  <label for="age" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
</div>
             <br /> 
             <div class="">Email
  <input   value={email}  onChange={(e)=>setEmail(e.target.value)} required pattern="[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}" title="Gender cannot contain any numbers or special characters"  type="email" name="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
  <label for="gender" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
</div>
              <br />

              <div class="">Gender
  <input   value={gender}  onChange={(e)=>setGender(e.target.value)} required  type="text" name="address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
  <label for="address" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
</div>



            <br />  
            <div class="">Address
  <input   value={address}  onChange={(e)=>setAddress(e.target.value)} required  title="Phone cannot contain any letters or special characters and cannot exceeded 10 digits"  type="text" name="address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
  <label for="phone" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
</div>


              <br />  
              <div class="">Phone Number
  <input   value={phone}   onChange={(e)=>setPhone(e.target.value)} required pattern = "[0-9]{10}"   type="text" name="phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
  <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
</div>        
        </div>
<br />
        <div className="flex mt-8">
                  <input className="mt-10"
                    type="file"
                    onChange={handleFileSelect}
                    name="image"
                    required
                  />
                  <img className="flex" src={"/images/" + photo} style={{width:"100px" , height:"100px"}} />
                </div>
                <br />
                <div
                
                >
                  
                </div>
               <div className="mt-10 justify-center text-center " > <a href="/updatecustomer">
        <button onClick={submit} type="button" data-modal-toggle="delete-user-modal" class="align-middle py-2.5 px-5 mr-20 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
       
                                              Submit
                                          </button>  </a>

                                          <button onClick={Clear} type="button" data-modal-toggle="delete-user-modal" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
       
       Clear
   </button>  </div>
    </form>
    </div>
</div>)}</>
    )
      
    }

export default Editcustomer;