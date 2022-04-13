import React,{useState, useEffect} from "react"
import axios from 'axios';




export default function FoodList(){
  const [listOfFood, setListOfFood] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:8070/foods").then((response) => {
        setListOfFood(response.data);
      });
    }, []);

   
    



    return (
    //   <table class="table-auto">
    //   <thead>
    //     <tr>
    //       <th>Song</th>
    //       <th>Artist</th>
    //       <th>Year</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
    //       <td>Malcolm Lockyer</td>
    //       <td>1961</td>
    //     </tr>
    //     <tr>
    //       <td>Witchy Woman</td>
    //       <td>The Eagles</td>
    //       <td>1972</td>
    //     </tr>
    //     <tr>
    //       <td>Shining Star</td>
    //       <td>Earth, Wind, and Fire</td>
    //       <td>1975</td>
    //     </tr>
    //   </tbody>
    // </table>

<div></div>


    //   <div className="usersDisplay">
       
     
    //    <table class="table-auto">
    //    <thead>
    //     <tr>
    //          <th>Song</th>
    //        <th>Artist</th>
    //         <th>Year</th>
    //         </tr>
    //             </thead>
    //             <tbody>
    //             {listOfFood.map((food) => (
    //               <tr>
  
    //                     <td>
    //                         <a href={`/Editcustomer/${food._id}}`} style={{ color: 'black' }}>
    //                         {food.Foodname}
    //                     </a>
  
    //                 </td><th scope="row">{food.Itemprice}</th><th scope="row">{food.Foodstatus}</th>
                      
  
  
  
    //                 </tr>
    //               ))}
  
  
  
    //             </tbody>
    //           </table>
        
      
    // </div>
    )
  }
    
