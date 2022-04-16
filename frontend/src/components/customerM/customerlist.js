import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Logo2 from "../../img/Logo-2.png"
import { toast } from 'react-toastify';








function Customerlist() {
    const[listOfUsers,setlistOfUsers]=useState([]);

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
      <a href="" class="mr-5 hover:text-red-700 duration-500">Third Link</a>
      <a href="" class="mr-5 hover:text-red-700 duration-500">Fourth Link</a>
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
                                     
                                          <button   type="button" data-modal-toggle="user-modal" class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                              <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                              Edit user
                                             
                                          </button>
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