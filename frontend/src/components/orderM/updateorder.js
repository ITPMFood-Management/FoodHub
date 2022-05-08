import React,{useEffect,useState} from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Logo2 from "../../img/Logo-2.png"
import Swal from "sweetalert2";

const Updateorder = (props) => {

  const [customername, setCustomername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [itemnumber, setItemnumber] = useState("");
  const [quantity, setQuantity] = useState("");
  const params = useParams()


  useEffect(()=>{
  
    getData();
     
  },[])
  const getData=()=>{
    axios.get(`http://localhost:8070/orders/get/${params.id}`).then(res=>{
      console.log(res.data)
      setCustomername(res.data.customername)
      setPhoneNumber(res.data.phoneNumber)
      setAddress(res.data.address)
      setCategory(res.data.category)
      setItemnumber(res.data.itemnumber)
      setQuantity(res.data.quantity)
    })
    
    .then((res)=>{
      console.log(res.data);
    }) 


  }
  
  const submit=()=>{
    const data={
      customername:customername,
      phonenumber:phoneNumber,
      address:address,
      category:category,
      itemnumber:itemnumber,
      quantity:quantity
    }

    axios.put(`http://localhost:8070/orders/update/${params.id}`, data).then(res=>{
      console.log(res);
    })

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Order Updated Successfully',
      showConfirmButton: false,
      timer: 3500
    })
  
  }

  const Clear=()=>{

  setCustomername("")
  setPhoneNumber("")
  setAddress("")
  setCategory("")
  setItemnumber("")
  setQuantity("")
  }
  const retrievePosts=(id)=>{
    axios.get(`http://localhost:8070/orders/get/${id}`).then(res =>{
      console.log(res.data)
  
    })}


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
            <a href="/addcomplaint" class="mr-5 hover:text-red-700 duration-500">Add Complaints</a>
            
            </nav>

          <a href="../Home"> <button class="inline-flex items-center bg-white border-solid border-2 border-black py-1 px-3 focus:outline-none hover:text-red-700 rounded text-base mt-4 md:mt-0 mr-7">Log Out
            
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
       <form className="w-11/12 p-12 bg-green-200 sm:w-8/12 md:w-1/2 lg:w-5/12 mt-20"  encType='multipart/form-data'>
       <h1 className="text-4xl font-normal leading-normal mt-0 mb-2  text-center text-gray-700">
         UPDATE ORDER
       </h1>
       <div className="flex flex-wrap -mx-3 mb-1">
           <div className="w-full px-3">
             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-oname">
              CUSTOMER NAME:
             </label>
             <input type="text" 
              id="grid-oname" 
              name="customername" 
             //  required pattern=""
              value={[customername]}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-blue-700" 
              placeholder="Enter the Customer Name"
             
              onChange={(e)=>{
               setCustomername(e.target.value); 
              }} 
              />     
           </div>
         </div>

         <div className="flex flex-wrap -mx-3 mb-1">
           <div className="w-full px-3">
             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-ophone">
             CONTACT NUMBER:
             </label>
             <input type="number" 
             id="grid-ophone" 
             name="phonenumber"
            required="required"
             value={phoneNumber}
             className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"  
             placeholder="Enter the Contact Number" 
            
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
              value={address}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"  
              placeholder="Enter the Address" 
              onChange={(e)=>{
              setAddress(e.target.value); 
                }} 
              />
            
           </div>
         </div>
         <div className="flex flex-wrap -mx-3 mb-1">
          <div className="w-full px-3">
             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-ocategory">
             Catergory:
             </label>
             <div className="relative">
               <select 
               id="grid-ocategory" 
               name="category"
               defaultValue={category}
               value={category}  
               className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 mb-1 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-700"
               onChange={(e)=>{
               setCategory(e.target.value); 
                   }} 
               >  
              
               <option value="" disabled selected>Select your option</option>
               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
               </div>
                  <option>Select</option>
                  <option>Breakfast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                  </select>
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
              value={itemnumber}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"  
              placeholder="Enter the Item Code" 
              onChange={(e)=>{
              setItemnumber(e.target.value); 
                }} 
              />
            
           </div>
         </div>


         <div className="flex flex-wrap -mx-3 mb-1">
           <div className="w-full px-3">
             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-oquantity">
             Item Code :
             </label>
             <input type="number" 
              id="grid-oquantity"  
              name="quantity" 
              value={quantity}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"  
              placeholder="Enter the Quantity" 
              onChange={(e)=>{
              setQuantity(e.target.value); 
                }} 
              />
            
           </div>
         </div>
       
       <div className="md:flex md:items-center">
           <div className="md:w-1/3"></div>
           <div className="md:w-2/3">
       
           
             <button onClick={submit} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-3 rounded" type="submit">
               Submit
             </button>  
             
           </div>
         </div>
       
       </form>
       </div>
       </div>
       
           )
       }
       export default Updateorder;
       

   







