import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';





function Customerlist() {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8070/customer").then((response) => {
          setListOfUsers(response.data);
        });
      }, []);
    
  return (
    <div className="usersDisplay">
     
   
        <table>
              <thead>
                <tr>
                  <th Scope="col">Num</th>
                  <th Scope="col">Employee Name</th>
                  <th Scope="col">Employee ID</th>
                  <th Scope="col">Role</th>
                  <th Scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
              {listOfUsers.map((user) => (
                <tr>

                      <td>
                          <a href={`/Editcustomer/${user._id}}`} style={{ color: 'black' }}>
                          {user.name}
                      </a>

                  </td><th scope="row">{user.age}</th><th scope="row">{user.address}</th>
                    



                  </tr>
                ))}



              </tbody>
            </table>
      );
    
  </div>
  )
}

export default Customerlist