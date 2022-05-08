import React,{useState, useEffect} from "react"
import axios from 'axios';
import Logo2 from "../../img/Logo-2.png"





export default function OrderList(){
  
  const[listOfUsers,setlistOfUsers]=useState([]);
  const[filteredResults,setFilteredResults]=useState([]);
  const [searchInput, setSearchInput] = useState('');

    useEffect(()=>{
        retrievePosts()
    },[listOfUsers])

   const retrievePosts=()=>{
        axios.get("http://localhost:8070/orders").then(res =>{
           setlistOfUsers(res.data)
     
        })
    console.log(listOfUsers);}

    const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
          const filteredData =listOfUsers.filter((item) => {
              return Object.values(item.customername).join('').toLowerCase().includes(searchInput.toLowerCase())
          })
          console.log(filteredData);
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(listOfUsers)
      }
  }



    return (

        <div>

<header class="text-gray-400  body-font  fixed">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed bg-white border-2 border-slate-100">
    <a href="/home" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img src={Logo2} className="w-12" />
      <span class="ml-3 text-xl text-red-700">FOOD HUB</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
    <a href="/addfood" class="mr-5 hover:text-red-700 duration-500 ">Add Food</a>
      <a href="/foodlist" class="mr-5 hover:text-red-700 duration-500">Food List</a>
      <a href="/orders" class="mr-5 hover:text-red-700 duration-500">Orders</a>
      <a href="" class="mr-5 hover:text-red-700 duration-500"></a>
    </nav>
   
  

   <a href="/signin"> <button class="inline-flex items-center bg-white border-solid border-2 border-black py-1 px-3 focus:outline-none hover:text-red-700 rounded text-base mt-4 md:mt-0 mr-7">Log Out
     
    <ion-icon name="person-circle-outline"></ion-icon>
    
    </button></a>
   
  </div>
</header>

<br></br>
<br></br>


      <div className="usersDisplay">
     
   
      <div class="flex flex-col">
               <div class="overflow-x-auto">
                   <div class="align-middle inline-block min-w-full">
                       <div class="shadow overflow-hidden">
                         <h1 className="text-center ">All Orders</h1>
                         <br></br>
                         <br></br>
                         <div class="flex justify-end py-3 px-6 bg-gray-50 border-b">
    <div class="flex border-2 rounded">
    <input  onChange={(e) => searchItems(e.target.value)} type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" name="searchitem" aria-label="Search" aria-describedby="button-addon2"
    
      />
   
    <span class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2"></span>
        <button class="flex items-center justify-center px-4 border-l bg-blue-800 rounded" type="submit">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
       
     </button> 
      </div>
</div>

                           <table class="table-fixed min-w-full divide-y divide-gray-200 ">
                               <thead class="bg-gray-100">
                                   <tr>
                                       <th scope="col" class="p-4">
 
                                       </th>
                                       
                                       <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                           Customer Name
                                       </th>
                                       <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                           Contact Number
                                       </th>
                                       <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                           Address
                                       </th>
                                       <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                           Category
                                       </th>
                                       <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Item Code
                                       </th>
                                       <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Quantity
                                       </th>
                                       
                           <th scope="col" class="p-4">
                                       </th>
                                   </tr>
                               </thead>
                               <tbody class="bg-white divide-y divide-gray-200"> {searchInput.length > 1 ?(filteredResults.map((user,index) => (

<tr class="hover:bg-gray-100">
    <td class="p-4 w-4">

    </td>
     
    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{user.customername}</td>
    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{user.phoneNumber}</td>
    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">{user.address}</td>
    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">{user.category}</td>
    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">{user.itemnumber}</td>
    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">{user.quantity}
        <div class="flex items-center">

        </div>
    </td>
    
</tr>

))):(listOfUsers.map((user,index) => (

  <tr class="hover:bg-gray-100">
    <td class="p-4 w-4">

    </td>
     
    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{user.customername}</td>
    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{user.phoneNumber}</td>
    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">{user.address}</td>
    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">{user.category}</td>
    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">{user.itemnumber}</td>
    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">{user.quantity}
        <div class="flex items-center">

        </div>
    </td>
    
</tr>
)))}
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>
    )
  }
    
