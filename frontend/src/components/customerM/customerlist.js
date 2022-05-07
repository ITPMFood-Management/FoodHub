import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Logo2 from "../../img/Logo-2.png"
import { toast } from 'react-toastify';
import { Modal, Button } from 'antd';
import { useParams } from 'react-router-dom';







function Customerlist() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [photo, setPhoto] = useState("");
    const [visible, setVisible] = useState(false);
    const[listOfUsers,setlistOfUsers]=useState([]);
    const params = useParams()

    useEffect(()=>{
        retrievePosts()
    },[listOfUsers])

   const retrievePosts=()=>{
        axios.get("http://localhost:8070/customer").then(res =>{
           setlistOfUsers(res.data)
     
        })
    console.log(listOfUsers);}

    const handleRemove =(id) =>{

     axios.delete(`http://localhost:8070/customer/delete/${id}`).then((res)=>{
         console.log("delete succes");
         
         })
       }

       useEffect(()=>{
  
        getData();
         
      },[])
      const getData=()=>{
      
    
        axios.get(`http://localhost:8070/customer/get/${params.id}`).then(res=>{
          console.log(res.data)
          setName(res.data.name)
          setAge(res.data.age)
          setEmail(res.data.email)
          setPhone(res.data.phone)
          setGender(res.data.gender)
          setPhoto(res.data.photo)
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
    
    
  return (
      
    <div className="usersDisplay">
      
      <header class="text-gray-400  body-font  fixed">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed bg-white border-2 border-slate-100">
    <a href="/home" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img src={Logo2} className="w-12" />
      <span class="ml-3 text-xl text-red-700">FOOD HUB</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <a href="/addcustomer" class="mr-5 hover:text-red-700 duration-500 ">Create Account</a>
      <a href="/customerlist" class="mr-5 hover:text-red-700 duration-500">Account List</a>
      <a href="/customerlist" class="mr-5 hover:text-red-700 duration-500">Complaints</a>
     
    </nav>
   {/* <div className="">  {listOfUsers.map((user) => ( <img class="h-10 w-10 rounded-full" src={"images/" + user.photo}></img>))}</div>  */}

  

   <a href="/signin"> <button class="inline-flex items-center bg-white border-solid border-2 border-black py-1 px-3 focus:outline-none hover:text-red-700 rounded text-base mt-4 md:mt-0 mr-7">Log Out
     
    <ion-icon name="person-circle-outline"></ion-icon>
    
    </button></a>
   
  </div>
</header>

     <div class="flex flex-col ">
              <div class="overflow-x-auto">
                  <div class="align-middle inline-block min-w-full">
         
                      <div class="shadow overflow-hidden">
                      <div className="text-3xl text-black mt-28 text-center mb-6"> All Customers</div>
                          <table class="table-fixed min-w-full divide-y divide-gray-200 border-2 border-y border-black" >
                              <thead class="bg-gray-100">
                                  <tr>
                                      <th scope="col" class="p-4">

                                      </th>
                                      <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">

                                      </th>
                                      <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                          Name
                                      </th>
                                      <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                          Email
                                      </th>
                                      <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                          Phone
                                      </th>


                                      <th scope="col" class="p-4">
                                      </th>
                                  </tr>
                              </thead>
                              <tbody class="bg-white divide-y divide-gray-200"> {listOfUsers.map((user) => (

                                  <tr class="hover:bg-gray-100">
                                      <td class="p-4 w-4">

                                      </td>
                                      <td class="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
                                          <img class="h-10 w-10 rounded-full" src={"images/" + user.photo}></img>
                                          <div class="text-sm font-normal text-gray-500">
                                              <div class="text-base font-semibold text-gray-900"></div>
                                              <div class="text-sm font-normal text-gray-500"></div>
                                          </div>
                                      </td>
                                      <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{user.name}</td>
                                      <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{user.email}</td>
                                      <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">{user.phone}
                                          <div class="flex items-center">

                                          </div>
                                      </td>
                                      <td class="p-4 whitespace-nowrap space-x-2 ">
                                     
                                      <Button  type="primary" onClick={() => setVisible(true) }  >
        Edit User
      </Button  >
      <Modal 
        title="Edit User Details"
       
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
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
             <div class="">Gender
  <input   value={gender}  onChange={(e)=>setGender(e.target.value)} required pattern="[A-Za-z]+" title="Gender cannot contain any numbers or special characters"  type="text" name="gender" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
  <label for="gender" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
</div>
              <br />

              <div class="">Phone Number
  <input   value={phone}  onChange={(e)=>setPhone(e.target.value)} required  type="text" name="address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
  <label for="address" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
</div>



            <br />  
            <div class="">Address
  <input   value={address}  onChange={(e)=>setAddress(e.target.value)} required pattern = "[0-9]{10}" title="Phone cannot contain any letters or special characters and cannot exceeded 10 digits"  type="text" name="phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
  <label for="phone" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
</div>


              <br />  
              <div class="">Email
  <input   value={email}   onChange={(e)=>setEmail(e.target.value)} required pattern = "[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"   type="email" name="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
  <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
</div>

<div class="">Photo
  <input   value={photo}   onChange={(e)=>setPhoto(e.target.value)} required pattern = "[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"   type="email" name="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
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
      </Modal>
                                          <button onClick={() => handleRemove(user._id)} type="button" data-modal-toggle="delete-user-modal" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                              <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                              &nbsp;Delete 
                                          </button>
                                          
                                          
                                      </td>
                                  </tr>

                              ))}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
  </div>
  )
}

export default Customerlist