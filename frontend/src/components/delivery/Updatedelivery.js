import React,{useEffect,useState} from "react";
import axios from 'axios';

const Updatedelivery = () => {
    const[details,setDetails]=useState([]);

    useEffect(()=>{
        retrievePosts()
    },[])

   const retrievePosts=()=>{
        axios.get("http://localhost:8070/delivery").then(res =>{
            console.log(res.data);
      
        })}

  
      
      
    
  
    return (
        <div><table className ="table table-dark table-striped" id="content" style ={{marginTop:'40px'}}>
    
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">DOB</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        
        <tbody>
         
            <tr >
             

              <td>gg</td>
              <td>gg</td>
              <td>gg</td>
              <td>gg</td>
              <td>gg</td>
              <td>gg</td>
              
        
              
              <td>

             
                <a className="btn btn-warning" >
                <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;

              <a className="btn btn-danger" href="#">
                <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>

           
                </td>
            </tr>
        
        </tbody>
       
      </table>
</div>
    )
      
    }
  export default Updatedelivery;