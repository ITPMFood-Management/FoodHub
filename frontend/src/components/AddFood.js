import React,{useState} from "react"
import './AddFood.css';

export default function AddFood(){

return(
<div className="AddFoodContainer">
<form>
<div class="form-group">
 <label for="fcode">Food Code</label>
 <input type="text" class="form-control" id="fcode" placeholder="Enter Food code"/>  
</div>
<div className="form-group">
 <label for="fname">Food Name</label>
 <input type="text" class="form-control" id="fname" placeholder="Enter Food name"/>  
</div>
<div className="form-group">
 <label for="fprice">Food Price</label>
 <input type="price" class="form-control" id="fprice" placeholder="Enter Food Price"/>
</div>
<div className="form-group">
<label for="fcatergory">Food catergory</label>
<br></br>
<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
  </div>
</div>
</div>
<div className="form-group">
<label for="fcatergory">Food status</label>
<br></br>
<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
  </div>
</div>
</div> 
<div className="form-group">

<div class="relative">
<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
</div>
<input datepicker type="date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
</div>
</div>
<div className="form-group">

<div class="relative">
<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
</div>
<input datepicker type="date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
</div>
</div>

</form>








</div>

    )
}