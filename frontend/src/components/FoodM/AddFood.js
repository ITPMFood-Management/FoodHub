import React,{useState} from "react"
import './AddFood.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';




export default function AddFood(){

   const[loading,setLoading] = useState(false); 
   const[isError,setIsError] = useState(false);


   const[newUser, setNewUser] = useState(
        {
          Foodcode:  '',
          Foodname:  '',
          Itemprice: '',
          Foodcatergory: '',
          Foodstatus: '',
          ExpDate: '',
          MFDDate: '',


        }
   );

   const handleSubmit = (e) => {
    e.preventDefault();
    
    setLoading(true);
    setIsError(false);


    const fromData = new FormData();
    fromData.append('Foodcode', newUser.Foodcode);
    fromData.append('Foodname', newUser.Foodname);
    fromData.append('Itemprice', newUser.Itemprice);
    fromData.append('Foodcatergory', newUser.Foodcatergory);
    fromData.append('Foodstatus', newUser.Foodstatus);
    fromData.append('ExpDate', newUser.ExpDate);
    fromData.append('MFDDate', newUser.MFDDate);
      

   axios.post('http://localhost:8070/food/create', fromData)
    .then(res => {
      console.log(res);
       setLoading(false);
      setNewUser({Foodcode :'' , Foodname : '' , Itemprice : '' , Foodcatergory : '' , Foodstatus : '' , ExpDate:'', MFDDate:''})
        toast("Success! Food Added 😘")
     })
     .catch(err => {
      console.log(err);
      setLoading(false);
      setIsError(true);
      toast("Error! Food not Added Duplicate Key Found: food code must be unique")
   });
}

const handleChange = (e) => {
  setNewUser({...newUser, [e.target.Foodcode]: e.target.value});
}




 
   

return(
 
<div className="AddFoodContainer px-24 flex items-center">
 
<form className="w-full max-w-lg">
 <br></br>
 <br></br>
 <br></br> 
<div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fcode">
       FOOD CODE:
      </label>
      <input  id="grid-fcode" type="text" name= "Foodcode" value={newUser.Foodcode} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter the Food Code"/>
     
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fName">
       FOOD Name:
      </label>
      <input   id="grid-fName" type="text" name="Foodname" value={newUser.Foodname} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  placeholder="Enter the Food Name"/>
     
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fprice">
      Food Price:
      </label>
      <input id="grid-fprice" type="text" name="Itemprice" value={newUser.Itemprice} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  placeholder="Enter the Food Price"/>
     
    </div>
  </div>
  
  <div className="flex flex-wrap -mx-3 mb-1">
   <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fcatergory">
      Food catergory:
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-fcatergory">
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
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 mb-3  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
  <input type="text" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Select date"/>
</div>
<br></br>
<div className="relative">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
   MFDDate:
     </label> 
  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input type="text" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Select date"/>
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