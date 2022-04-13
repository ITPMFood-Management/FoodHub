import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';



function Cus() {
    
    
    const [listOfUsers, setOfUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8070/customer").then((response) => {
          setOfUsers(response.data);
        });
      }, []);


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

          







          <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="text-sm font-medium text-gray-900 block mb-2">First Name</label>
                  <input type="text" name="first-name" id="first-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Bonnie" required></input>
              </div>
              <div class="col-span-6 sm:col-span-3">
                  <label for="last-name" class="text-sm font-medium text-gray-900 block mb-2">Last Name</label>
                  <input type="text" name="last-name" id="last-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Green" required></input>
              </div>
              <div class="col-span-6 sm:col-span-3">
                  <label for="email" class="text-sm font-medium text-gray-900 block mb-2">Email</label>
                  <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="example@company.com" required></input>
              </div>
              <div class="col-span-6 sm:col-span-3">
                  <label for="phone-number" class="text-sm font-medium text-gray-900 block mb-2">Phone Number</label>
                  <input type="number" name="phone-number" id="phone-number" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="e.g. +(12)3456 789" required></input>
              </div>
              <div class="col-span-6 sm:col-span-3">
                  <label for="department" class="text-sm font-medium text-gray-900 block mb-2">Department</label>
                  <input type="text" name="department" id="department" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Development" required></input>
              </div>
              <div class="col-span-6 sm:col-span-3">
                  <label for="company" class="text-sm font-medium text-gray-900 block mb-2">Company</label>
                  <input type="number" name="company" id="company" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="123456" required></input>
              </div>
          </div></div>

      </></>

  )
}

export default Cus