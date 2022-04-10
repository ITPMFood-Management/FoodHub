// import React, { Component } from "react";
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';
// import {Link} from "react-router-dom";
// import { useEffect,useState } from "react";

// function Editcustomer() {
//     const [newUser, setNewUser] = useState(
//         {
//             name: '',
//             age : '',
//             gender : '',
//             address: '',
//             phone: '',
//             email : '',
//             photo: '',
//         }
//     );
    

//   return (
//     <div>
//                 <nav className="" >
//                 <div className="container-fluid">
//                   <a className="navbar-brand" href="#" style={{color:"red"}}><b>Customer Management System</b></a>
//                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                   </button>
//                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
//                       <li className="nav-item">
//                         <Link className="nav-link " aria-current="page" to = "/staff-customerM" style={{color:"#00ff00"}}><i class="fa fa-fw fa-home"></i>Home</Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link className="nav-link " to = "/add-customerM" style={{color:"#00ff00"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Create Profile</Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link className="nav-link" to = "/display-customerM" style={{color:"#00ff00"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Profiles</Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link className="nav-link active" to = "#" style={{color:"#00ff00"}}><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Profiles</Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link className="nav-link" to = "/complaints-customerM" style={{color:"#00ff00"}}><i class="fa fa-comments" aria-hidden="true"></i> Complaints</Link>
//                       </li>
//                         <img src = "https://i.ibb.co/M5qJphr/customer.gif" style={{width:"7%" , marginLeft:"300px"}}/>
//                     </ul>
//                   </div>
//                 </div>
//               </nav>
             
//                <div className="bg4">
//                 <div className="form-wrapper container" style={{width:"100%" , marginRight:"100px" , background:"black"}}><br/><br/>
//                   <h1 style={{color:"white"}}>Current Info 👁</h1>
//                   <table>

//                       <td controlId="Name">
//                       <label style={{color:"white"}}>Name</label>
//                       <input type="text" value={name} onChange={this.onChangeCustomerName} required disabled/>
//                       </td>

//                       <td controlId="Age">
//                       <label style={{color:"white"}}>Age</label>
//                       <input type="text" value={age} onChange={this.onChangeCustomerAge} required disabled/>
//                       </td>

//                       <td controlId="Gender">
//                       <label style={{color:"white"}}>Gender</label>
//                       <input type="text" value={gender} onChange={this.onChangeCustomerGender} required disabled/>
//                       </td>

//                       <td controlId="Address">
//                       <label style={{color:"white"}}>Address</label>
//                       <input type="text" value={address} onChange={this.onChangeCustomerAddress} required disabled/>
//                       </td>

//                       <td controlId="Phone">
//                       <label style={{color:"white"}}>Phone</label>
//                       <input type="text" value={phone} onChange={this.onChangeCustomerPhone} required disabled/>
//                       </td>

//                       <td controlId="Email">
//                       <label style={{color:"white"}}>Email</label>
//                       <input type="text" value={email} onChange={this.onChangeCustomerEmail} required disabled/>
//                       </td>



//                   </table>
//                   </div>
//                   <div className="form-wrapper container" style={{width:"50%" , background:"#171717" , padding:"10px 10px 10px 10px" , opacity:"0.8" , marginRight:"auto" , marginLeft:"auto" , display:"block"}} className="polaroid"><br/><br/>
//                   <h1 style={{color:"white"}}>Need to Update ? 🤔</h1>
//                   <Form onSubmit={this.onSubmit}>
                
//                       <Form.Group controlId="Name">
//                       <label style={{fontSize:"30px" , color:"red"}}>*</label><Form.Label>Name</Form.Label>
//                       <Form.Control type="text" value={this.state.name} onChange={this.onChangeCustomerName} placeholder="✍🏻 Edit Name" required pattern="[A-Za-z]+" title="Name cannot contain any numbers or special characters"/>
//                       </Form.Group>

//                       <Form.Group controlId="Age">
//                       <label style={{fontSize:"30px" , color:"red"}}>*</label><Form.Label>Age</Form.Label>
//                       <Form.Control type="text" value={this.state.age} onChange={this.onChangeCustomerAge} placeholder="✍🏻 Edit Age" required pattern="[1-9]{1,3}" title="Age cannot contain any letters or special characters  and Age > 0"/>
//                       </Form.Group>

//                       <Form.Group controlId="Gender">
//                       <label style={{fontSize:"30px" , color:"red"}}>*</label><Form.Label>Gender</Form.Label>
//                       <Form.Control type="text" value={this.state.gender} onChange={this.onChangeCustomerGender} placeholder="✍🏻 Edit Gender" required pattern="[A-Za-z]+" title="Gender cannot contain any numbers or special characters"/>
//                       </Form.Group>

//                       <Form.Group controlId="Address">
//                       <label style={{fontSize:"30px" , color:"red"}}>*</label><Form.Label>Address</Form.Label>
//                       <Form.Control type="text" value={this.state.address} onChange={this.onChangeCustomerAddress} placeholder="✍🏻 Edit Address" required/>
//                       </Form.Group>
                      
//                       <Form.Group controlId="Phone">
//                       <label style={{fontSize:"30px" , color:"red"}}>*</label><Form.Label>Phone</Form.Label>
//                       <Form.Control type="text" value={this.state.phone} onChange={this.onChangeCustomerPhone} placeholder="✍🏻 Edit Phone" required pattern = "[0-9]{10}" title="Phone cannot contain any letters or special characters and cannot exceeded 10 digits"/>
//                       </Form.Group>

//                       <Form.Group controlId="Email">
//                       <label style={{fontSize:"30px" , color:"red"}}>*</label><Form.Label>Email</Form.Label>
//                       <Form.Control type="text" value={this.state.email} onChange={this.onChangeCustomerEmail} placeholder="✍🏻 Edit Email" required pattern = "[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"/>
//                       </Form.Group><br/>


//                       <Form.Group controlId="Photo" style={{textAlign:"center"}}>
//                       <label style={{fontSize:"30px" , color:"red"}}>*</label><Form.Label>Photo</Form.Label>
//                       <i class="fa fa-folder-open" aria-hidden="true"></i>
//                       <input 
//                           type="file" 
//                           accept=".png, .jpg, .jpeg"
//                           name="photo"
//                           onChange={this.onChangeCustomerPhoto} required style={{color:"white" , backgroundColor:"black"}}
//                       />
                    
//                       </Form.Group>

//                       <br/>
//                       <Button variant="danger" size="lg" block="block" type="submit" style={{marginLeft:"auto", marginRight:"auto" , display:"block"}}>
//                       <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Update Customer
//                       </Button>
//                   </Form>
//                   </div><br/><br/><br/><br/>
//                </div>
             
//         </div>
//   )
// }

// export default Editcustomer
