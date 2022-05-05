import React,{useState, useEffect} from "react"
import axios from "axios";
import Logo2 from "../../img/Logo-2.png"
// import { use } from "express/lib/router";
import { useParams } from "react-router-dom";
import moment from 'moment';

const Updatefood = (props) => {

  const[Foodcode, setfoodcode]=useState("");
  const[Foodname, setfoodname]=useState("");
  const[Itemprice, setitemprice]=useState("");
  const[Foodcatergory, setfoodcatergory]=useState("");
  const[Foodstatus, setfoodstatus]=useState("");
  const[ExpDate, setexpDate]=useState("");
  const[MFDDate, setmFDDate]=useState("");
  const[Image, setimage]=useState("");
  const params = useParams()


  useEffect(()=>{
  
    getData();
     
  },[])
  const getData=()=>{
    axios.get(`http://localhost:8070/food/get/${params.id}`).then(res=>{
      console.log(res.data)
      setfoodcode(res.data.Foodcode)
      setfoodname(res.data.Foodname)
      setitemprice(res.data.Itemprice)
      setfoodcatergory(res.data.Foodcatergory)
      setfoodstatus(res.data.Foodstatus)
      setexpDate(moment(res.data.ExpDate).format("YYYY-MM-DD"))
      setmFDDate(moment(res.data.MFDDate).format("YYYY-MM-DD"))
      setimage(res.data.Image)
      document.getElementById('formFile').value= null;
    }).catch((err)=>{
      alert(err)
      
    }) 
    
  }
   
  function sendData(e){
    e.preventDefault();
   
    const newFood ={
      Foodcode,
      Foodname,
      Itemprice,
      Foodcatergory,
      Foodstatus,
      ExpDate,
      MFDDate,
      Image
    }

    const formData = new FormData();
    formData.append('Foodcode', Foodcode);
    formData.append('Foodname', Foodname);
    formData.append('Itemprice', Itemprice);
    formData.append('Foodcatergory', Foodcatergory);
    formData.append('Foodstatus', Foodstatus);
    formData.append('ExpDate',  ExpDate);
    formData.append('MFDDate', MFDDate);
    formData.append('Image', Image);

   axios.put(`http://localhost:8070/food/update/${params.id}`, formData).then(()=>{
    //  alert("food added")
      setfoodcode("");
      setfoodname("");
      setitemprice("");
      setfoodcatergory("");
      setfoodstatus("");
      setexpDate("");
      setmFDDate("");
      setimage("");
      document.getElementById('formFile').value= null;
   }).catch((err)=>{
     alert(err)
   })
 
  // //  Swal.fire({
  // //   position: 'top-end',
  // //   icon: 'success',
  // //   title: 'food added',
  // //   showConfirmButton: false,
  // //   timer: 1500
  // })
  
}


    return(
  
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
             <a href="" class="mr-5 hover:text-red-700 duration-500">Update Food Details</a>
             <a href="" class="mr-5 hover:text-red-700 duration-500"></a>
           </nav>
          {/* <div className="">  {listOfUsers.map((user) => ( <img class="h-10 w-10 rounded-full" src={"images/" + user.photo}></img>))}</div>  */}
       
         
       
          <a href="/signin"> <button class="inline-flex items-center bg-white border-solid border-2 border-black py-1 px-3 focus:outline-none hover:text-red-700 rounded text-base mt-4 md:mt-0 mr-7">Log Out
            
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
       <form className="w-11/12 p-12 bg-green-200 sm:w-8/12 md:w-1/2 lg:w-5/12 mt-20" onSubmit={sendData} encType='multipart/form-data'>
       <h1 className="text-4xl font-normal leading-normal mt-0 mb-2  text-center text-gray-700">
         Update FOOD
       </h1>
       <div className="flex flex-wrap -mx-3 mb-1">
           <div className="w-full px-3">
             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fcode">
              FOOD CODE:
             </label>
             <input type="text" 
              id="grid-fcode" 
              name="Foodcode" 
             //  required pattern=""
              value={Foodcode}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-blue-700" 
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
             required="required"
             value={Foodname}
             className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"  
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
              value={Itemprice}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"  
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
             <div className="">
               <select 
               id="grid-fcatergory" 
               name="Foodcatergory"
               defaultValue={Foodcatergory}
               value={Foodcatergory}  
               className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 mb-1 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-700"
               onChange={(e)=>{
               setfoodcatergory(e.target.value); 
                   }} 
               >  
              
               <option value="" disabled selected>Select your option</option>
               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
               </div>
                 <option>Sri Lankan</option>
                 <option>Indian</option>
                 <option>china</option>
                 <option>Italy</option>
                 <option>Pakistan</option>
               </select>
               
              
               
              
             </div>
             </div>
           </div>
        
            <div className="flex flex-wrap -mx-3 mb-1">
          <div className="w-full px-3">
             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
             Food status:
             </label>
             <div className="">
               <select  
               id="grid-fstatus" 
               name="Foodstatus"
               defaultValue={Foodstatus}
               value={Foodstatus}  
               className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 mb-1  rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-700"
               onChange={(e)=>{
               setfoodstatus(e.target.value); 
                 }} 
               >
                 <option value="" disabled selected>Select your option</option>
                 <option>in stock</option>
                 <option>out of stock</option>
                
               </select>
               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  
               </div>
             </div>
             </div>
           </div> 
         
         <div className="">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
          ExpDate:
            </label> 
         <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
           
         </div>
         <input type="date" 
         name=" ExpDate" 
         value={ExpDate}  
         className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-1 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-700" 
         placeholder="Select date" 
         onChange={(e)=>{
         setexpDate(e.target.value); 
             }} 
         />
       </div>
       
       <div className="">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
          MFDDate:
            </label> 
         <div className=" inset-y-0 left-0 items-center pl-3 pointer-events-none">
          
         </div>
         <input type="date"  
         name="MFDDate"
         value={MFDDate}   
         className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-1 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-700" 
         placeholder="Select date"
         onChange={(e)=>{
         console.log(e.target.value)  
         setmFDDate(e.target.value); 
               }} 
         />
       </div>
       
        <div class="">
         <div class="mb-3 w-96">
           <label for="formFile" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Upload the Food image:</label>
           <input className="form-control
           appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded pr-8 py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-700" type="file" id="formFile"
           onChange={(e)=>{
          setimage(e.target.files[0]); 
                   }} 
           />
           {console.log("Image",Image)}
           {Image!=""  && <img class="h-20 w-20 " src={"./../../../public/foodima/"+Image}/>}
         </div>
       </div> 
       
       <div className="md:flex md:items-center">
           <div className="md:w-1/3"></div>
           <div className="md:w-2/3">
       
           
             <button  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-3 rounded" type="submit">
               Submit
             </button>  
             
           </div>
         </div>
       
       </form>
       </div>
       
       
       
       
       
       
       
       
       </div>
       
           )
       }
       export default Updatefood;
       

   







