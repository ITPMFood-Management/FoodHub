import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function Cus() {
    
    
     
    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);
    const [listOfUsers, setListOfUsers] = useState([]);
  
      useEffect((id) => {
          axios.get(`http://localhost:8070/customer/user/${id}`).then((response) => {
            setListOfUsers(response.data);
          });
        }, []);
  
  
    const [newUser, setNewUser] = useState(
        {
            name: '',
            age : '',
            gender : '',
            address: '',
            phone: '',
            email : '',
            photo: '',
        }
    );
  
    const handleSubmit = (e) => {
        e.preventDefault();
  
        setLoading(true);
        setIsError(false); //additional
  
  
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('address', newUser.address);
        formData.append('phone', newUser.phone);
        formData.append('email', newUser.email);
        formData.append('name', newUser.name);
        formData.append('age', newUser.age);
        formData.append('gender', newUser.gender);
  
        axios.post('http://localhost:8070/customer/add', formData)
             .then(res => {
                console.log(res);
                setLoading(false);
                setNewUser({name :'' , age : '' , gender : '' , address : '' , photo : '' , email:'', phone:''})
                toast("Success! Customer Added")
             })
             .catch(err => {
                console.log(err);
                setLoading(false);
                setIsError(true);
                toast("Error! Customer not Added Duplicate Key Found: Email must be unique")
             });
        
    }
  
    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }
  
    const handlePhoto = (e) => {
        setNewUser({...newUser, photo: e.target.files[0]});
    }
  
    //dynamic search box
    const [myOptions, setMyOptions] = useState([])
  
  const getDataFromAPI = () => {
    console.log("Options Fetched from API")
  
    axios.get('http://localhost:8070/customer').then((response) => {
      return response.json()
    }).then((res) => {
      console.log(res.data)
      for (var i = 0; i < res.data.length; i++) {
        myOptions.push(res.data[i].customer_name)
      }
      setMyOptions(myOptions)
    })
  }
  


  return (
      <><><div className="scroll-smooth hover:scroll-auto">
          <div class=" space-x-2 sm:space-x-3 max-w-full">
              <button type="button" data-modal-toggle="add-user-modal" class="w-1/2 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto">
                  <svg class="-ml-1 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                  Add user
              </button>
              <a href="#" class="w-1/2 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto">
                  <svg class="-ml-1 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg>
                  Export
              </a>
          </div>

          







          <div class="grid grid-cols-6 " onSubmit={handleSubmit} encType='multipart/form-data'>
              <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="text-sm font-medium text-gray-900 block mb-2">First Name</label>
                  <input type="text" value={newUser.name} onChange={handleChange} required pattern="[A-Za-z]+" name="name"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Bonnie" ></input>
              </div>
              <div class="col-span-6 sm:col-span-3">
                  <label for="last-name" class="text-sm font-medium text-gray-900 block mb-2">Last Name</label>
                  <input type="text"  value={newUser.age}  onChange={handleChange} required pattern="[1-9]{1,3}" name="age"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Green" ></input>
              </div>
              <div class="col-span-6 sm:col-span-3">
                  <label for="email" class="text-sm font-medium text-gray-900 block mb-2">Email</label>
                  <input type="email" value={newUser.gender}  onChange={handleChange} required pattern="[A-Za-z]+" name="gender"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="example@company.com"></input>
              </div>
              <div class="col-span-6 sm:col-span-3">
                  <label for="phone-number" class="text-sm font-medium text-gray-900 block mb-2">Phone Number</label>
                  <input type="number" value={newUser.address}  onChange={handleChange} required  name="address"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="e.g. +(12)3456 789" ></input>
              </div>
              <div class="col-span-6 sm:col-span-3">
                  <label for="department" class="text-sm font-medium text-gray-900 block mb-2">Department</label>
                  <input type="text" value={newUser.phone}  onChange={handleChange} required pattern = "[0-9]{10}" name="phone"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Development"></input>
              </div>
              <div class="col-span-6 sm:col-span-3">
                  <label for="company" class="text-sm font-medium text-gray-900 block mb-2">Company</label>
                  <input type="number"  value={newUser.email}   onChange={handleChange} required pattern = "[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}" name="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" ></input>
              </div>
              <div className="jumbotron" style={{textAlign:"center"}}>
                <h1 className="display-4" style={{color:"black"}}>Upload a Photo of Customer</h1>
               
                <hr className="my-4" />
            </div>
            <div style={{textAlign:"center"}}>
              <i class="fa fa-folder-open" aria-hidden="true" style={{color:"red"}}></i>
              <input 
                  type="file" 
                  accept=".png, .jpg, .jpeg"
                  name="photo"
                  onChange={handlePhoto} required style={{color:"white" , backgroundColor:"black"}}
              />
            </div>

            <br/>
              <div style={{textAlign:"center"}}>
                     {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
                     {/*decision*/}
                     <button
                        type="submit"
                        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        disabled={loading}
                        ><i class="fa fa-upload" aria-hidden="true"></i> {loading ? 'Uploading...' : 'Upload'}
                     </button>
                     <ToastContainer style={{marginTop:"50px"}}/>
                    
            </div>
          </div></div>

      </></>

  )
}

export default Cus