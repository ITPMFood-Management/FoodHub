import React,{useState, useEffect} from "react"
import axios from 'axios';
import Logo2 from "../../img/Logo-2.png"
import moment from 'moment';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Swal from "sweetalert2";


export default function FoodList(){
  
  const [listOfFood, setListOfFood] = useState([]);
  const[filteredResults,setFilteredResults]=useState([]);
  const [searchInput, setSearchInput] = useState('');
  

  useEffect(() => {
    retrievePosts()
  },[listOfFood])
   
  const retrievePosts=()=>{
    axios.get("http://localhost:8070/food").then(res =>{
        setListOfFood(res.data)
 
    })
console.log(listOfFood);}
    
    const handleRemove =(id) =>{

      axios.delete(`http://localhost:8070/food/delete/${id}`).then((res)=>{
          console.log("delete succes");
          
          })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Food Delete successfully',
            showConfirmButton: false,
            timer:5300
          })
         

        };
     //search data
     const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
          const filteredData = listOfFood.filter((item) => {
              return Object.values(item.Foodname).join('').toLowerCase().includes(searchInput.toLowerCase())
          })
          console.log(filteredData);
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(listOfFood)
      }
  }
      //report generete 
      const genPDF = () => {
        const doc = new jsPDF({
            orientation: "landscape",
           
          });
        doc.setFontSize(20);
        doc.text("food details", 10,10);
       
    
        doc.autoTable({
          html: '#content'
        })
        doc.save('food details.pdf');
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
      <a href="/addfood" class="mr-5 hover:text-red-700 duration-500 ">Add Food</a>
      <a href="/foodlist" class="mr-5 hover:text-red-700 duration-500">Food List</a>
      <a href="/orders" class="mr-5 hover:text-red-700 duration-500">Orders</a>
      <a href="" class="mr-5 hover:text-red-700 duration-500"></a>
    </nav>
    {/* <div className="">  {listOfUsers.map((user) => ( <img class="h-10 w-10 rounded-full" src={"images/" + user.photo}></img>))}</div>   */}
    
  

   <a href="/signin"> <button class="inline-flex items-center bg-white border-solid border-2 border-black py-1 px-3 focus:outline-none hover:text-red-700 rounded text-base mt-4 md:mt-0 mr-7">Log Out
     
    <ion-icon name="person-circle-outline"></ion-icon>
    
    </button></a>
   
  </div>
</header>
   
      <div class="flex flex-col">
               <div class="overflow-x-auto">
                   <div class="align-middle inline-block min-w-full">
                       <div class="shadow overflow-hidden">
                         
                         <h1 className="text-3xl text-black mt-28 text-center mb-6 ">All foods</h1>
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



                         
                         
                                <table class="table-fixed min-w-full divide-y divide-gray-200 " id="content">
                               <thead class="bg-gray-100">
                                   <tr>
                                       <th scope="col" class="p-4">
 
                                       </th>
                                       <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
 
                                       </th>
                                       <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                           Foodcode
                                       </th>
                                       <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                           Foodname
                                       </th>
                                       <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                           Itemprice
                                       </th>
                                       <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                           Foodcatergory
                                       </th>
                                       <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                       ExpDate
                                       </th>
                                       <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                       MFDDate
                                       </th>
                                       
                           <th scope="col" class="p-4">
                                       </th>
                                   </tr>
                               </thead>
                               <tbody class="bg-white divide-y divide-gray-200"> {searchInput.length > 1 ?(filteredResults.map((food,index) => (

<tr class="hover:bg-gray-100">
    <td class="p-4 w-4">

    </td>
     <td class="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
        <img class="h-20 w-20 " src={"foodima/" + food.Image}></img>
        <div class="text-sm font-normal text-gray-500">
            <div class="text-base font-semibold text-gray-900"></div>
            <div class="text-sm font-normal text-gray-500"></div>
        </div>
    </td> 
    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{food.Foodcode}</td>
    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{food.Foodname}</td>
    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">{food.Itemprice}</td>
    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">{food.Foodcatergory}</td>
    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">{moment(food.ExpDate).format("MMM DD ,YYYY")}</td>
    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">{moment(food.MFDDate).format("MMM DD ,YYYY")}
        <div class="flex items-center">

        </div>
    </td>
     <td class="p-4 whitespace-nowrap space-x-2 ">
        <a href={`/updatefood/${food._id}`}>
        <button onclik={() =>handleRemove(food._id)} type="button" data-modal-toggle="user-modal" class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
            <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
            Edit 
           
        </button> </a>
    <button onClick={() =>handleRemove(food._id)} type="button" data-modal-toggle="delete-user-modal" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
            <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
            &nbsp;Delete 
        </button> 
        
        
    </td>
</tr>
 ))):(listOfFood.map((food,index) => (

<tr class="hover:bg-gray-100">
    <td class="p-4 w-4">

    </td>
     <td class="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
        <img class="h-20 w-20 " src={"foodima/" + food.Image}></img>
        <div class="text-sm font-normal text-gray-500">
            <div class="text-base font-semibold text-gray-900"></div>
            <div class="text-sm font-normal text-gray-500"></div>
        </div>
    </td> 
    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{food.Foodcode}</td>
    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{food.Foodname}</td>
    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">{food.Itemprice}</td>
    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">{food.Foodcatergory}</td>
    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">{moment(food.ExpDate).format("MMM DD ,YYYY")}</td>
    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">{moment(food.MFDDate).format("MMM DD ,YYYY")}
        <div class="flex items-center">

        </div>
    </td>
     <td class="p-4 whitespace-nowrap space-x-2 ">
        <a href={`/updatefood/${food._id}`}>
        <button onclik={() =>handleRemove(food._id)} type="button" data-modal-toggle="user-modal" class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
            <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
            Edit 
           
        </button> </a>
    <button onClick={() =>handleRemove(food._id)} type="button" data-modal-toggle="delete-user-modal" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
            <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
            &nbsp;Delete 
        </button> 
        
        
    </td>
</tr>

)))}
</tbody>
</table>
<button onClick={genPDF} type="button" data-modal-toggle="delete-user-modal" class=" float-right text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
   Downlord deliver details 
    </button>

</div>
</div>
</div>
</div>

</div>

 

    )
  }
    
