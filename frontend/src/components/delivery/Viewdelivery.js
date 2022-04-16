

 import React,{useEffect,useState} from "react";
 import axios from 'axios';
 import moment from 'moment';


 const Viewdelivery = () => {
     const[details,setDetails]=useState([]);

     useEffect(()=>{
         retrievePosts()
     },[details])

    const retrievePosts=()=>{
         axios.get("http://localhost:8070/delivery").then(res =>{
            setDetails(res.data)
      
         })
     console.log(details);}

     const handleRemove =(id) =>{

      axios.delete(`http://localhost:8070/delivery/delete/${id}`).then((res)=>{
          console.log("delete succes");
          
          })
        }

  
      
      
    
  
     return (
       
         <div>
           <p class="text-2xl ...">View Delivery Details</p>
           

       <div class="flex flex-col">
              <div class="overflow-x-auto">
                  <div class="align-middle inline-block min-w-full">
                      <div class="shadow overflow-hidden">
                          <table class="table-fixed min-w-full divide-y divide-gray-200">
                              <thead class="bg-gray-100">
                                  <tr>
                                      <th scope="col" class="p-4">

                                      </th>
                                     
                                      <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                          Name
                                      </th>
                                      <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                          Age
                                      </th>
                                      <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                          DOB
                                      </th>
                                      <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                          Work Date
                                      </th>
                                      <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                          Address
                                      </th>
                                      <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                         Phone
                                      </th>
                                      <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                         Email
                                      </th>
                                      <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                         Action
                                      </th>


                                      <th scope="col" class="p-4">
                                      </th>
                                  </tr>
                              </thead>
                              <tbody class="bg-white divide-y divide-gray-200">  {details.map((order,index) => (

                                  <tr class="hover:bg-gray-100">
                                      <td class="p-4 w-4">

                                      </td>
                                     
                                      <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{order.name}</td>
                                      <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{order.age}</td>
                                      <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{moment(order.birthDate).format("MMM DD ,YYYY")}</td>
                                      <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{moment(order.workDate).format("MMM DD ,YYYY")}</td>
                                      <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{order.address}</td>
                                      <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{order.phoneNumber}</td>
                                      <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{order.email}</td>
                                     {/*  <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">
                                          <div class="flex items-center">

                                          </div>
                                      </td> */}
                                      <td class="p-4 whitespace-nowrap space-x-2 ">
                                      <a href={`/Updatedelivery/${order._id}`}>
                                          <button   type="button" data-modal-toggle="user-modal" class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                              <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                             Edit 
                                             
                                          </button> </a>
                                      <button onClick={() => handleRemove(order._id)} type="button" data-modal-toggle="delete-user-modal" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
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


     
   export default Viewdelivery;

