// import React,{useEffect,useState} from "react";
// import axios from 'axios';
// import moment from 'moment';

// const Viewdelivery = () => {
//     const[details,setDetails]=useState([]);

//     useEffect(()=>{
//         retrievePosts()
//     },[])

//    const retrievePosts=()=>{
//         axios.get("http://localhost:8070/delivery").then(res =>{
//            setDetails(res.data)
      
//         })
//     console.log(details);}

  
      
      
    
  
//     return (
//         <div><table className ="table table-dark table-striped" id="content" style ={{marginTop:'40px'}}>
    
//         <thead>
//           <tr>
//             <th scope="col">Name</th>
//             <th scope="col">Age</th>
//             <th scope="col">DOB</th>
//             <th scope="col">Address</th>
//             <th scope="col">Phone</th>
//             <th scope="col">Email</th>
//             <th scope="col">Action</th>
//           </tr>
//         </thead>
        
//         <tbody>
//     {details.map((order,index) =>(
//             <tr >
             

//               <td>{order.name}</td>
//               <td>{order.age}</td>
//               <td>{moment(order.birthDate).format("MMM DD ,YYYY")}</td>
//               <td>{order.address}</td>
//               <td>{order.phoneNumber}</td>
//               <td>{order.email}</td>
              
        
              
//               <td>

             
//                 <a className="btn btn-warning" >
//                 <i className="fas fa-edit"></i>&nbsp;Edit
//                 </a>
//                 &nbsp;

//               <a className="btn btn-danger" href="#">
//                 <i className="far fa-trash-alt"></i>&nbsp;Delete
//                 </a>

           
//                 </td>
//             </tr>
//         ))}
//         </tbody>
       
//       </table>
// </div>
//     )
      
//     }
//   export default Viewdelivery;