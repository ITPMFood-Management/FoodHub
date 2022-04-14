import React,{useState} from "react"
import './AddFood.css';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";




export default function AddFood(){
 
      const[Foodcode, setfoodcode]=useState("");
      const[Foodname, setfoodname]=useState("");
      const[Itemprice, setitemprice]=useState("");
      const[Foodcatergory, setfoodcatergory]=useState("");
      const[Foodstatus, setfoodstatus]=useState("");
      const[ExpDate, setexpDate]=useState("");
      const[MFDDate, setmFDDate]=useState("");
   
      function sendData(e){
        e.preventDefault();
       
        const newFood ={
          Foodcode,
          Foodname,
          Itemprice,
          Foodcatergory,
          Foodstatus,
          ExpDate,
          MFDDate
        }

       axios.post("http://localhost:8070/food/create",newFood).then(()=>{
         alert("food added")
         setfoodcode("");
         setfoodname("");
         setitemprice("");
         setfoodcatergory("");
         setfoodstatus("");
         setexpDate("");
         setmFDDate("");
       }).catch((err)=>{
         alert(err)
       })

      }

  


 
   

return(
 
<div className="AddFoodContainer px-24 flex items-center">
 
<form className="w-full max-w-lg" onSubmit={sendData}>
 <br></br>
 <br></br>
 <br></br> 
<div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fcode">
       FOOD CODE:
      </label>
      <input type="text" 
      id="grid-fcode" 
       name="Foodcode" 
       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
       placeholder="Enter the Food Code"
       onChange={(e)=>{
        setfoodcode(e.target.value); 
       }} 
       />     
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fName">
       FOOD Name:
      </label>
      <input type="text" 
      id="grid-fName" 
      name="Foodname"  
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  
      placeholder="Enter the Food Name" 
      onChange={(e)=>{
      setfoodname(e.target.value); 
       }} 
      />
     
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fprice">
      Food Price:
      </label>
      <input type="text" 
      id="grid-fprice"  
      name="Itemprice" 
       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  
       placeholder="Enter the Food Price" 
       onChange={(e)=>{
       setitemprice(e.target.value); 
         }} 
       />
     
    </div>
  </div>
  
  <div className="flex flex-wrap -mx-3 mb-1">
   <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fcatergory">
      Food catergory:
      </label>
      <div className="relative">
        <select 
        id="grid-fcatergory" 
        name="Itemprice"  
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        onChange={(e)=>{
        setfoodcatergory(e.target.value); 
            }} 
        >
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg> 
        </div>
      </div>
      </div>
    </div>
 
     <div className="flex flex-wrap -mx-3 mb-1">
   <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
      Food status:
      </label>
      <div className="relative">
        <select  
        id="grid-fstatus" 
        name="Foodstatus"  
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 mb-3  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        onChange={(e)=>{
        setfoodstatus(e.target.value); 
          }} 
        >
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
           <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg> 
        </div>
      </div>
      </div>
    </div> 
  
  <div className="relative">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
   ExpDate:
     </label> 
  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input type="date" 
  name=" ExpDate"   
  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
  placeholder="Select date" 
  onChange={(e)=>{
  setexpDate(e.target.value); 
      }} 
  />
</div>
<br></br>
<div className="relative">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
   MFDDate:
     </label> 
  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input type="date"  
  name="MFDDate"   
  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
  placeholder="Select date"
  onChange={(e)=>{
  setmFDDate(e.target.value); 
        }} 
  />
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
