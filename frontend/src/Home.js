import React from "react";
import Logo from "./img/Logo.png"
import { useState } from "react";

const Home = () => {

  let Links=[
    {name:"About",link:"/"},
    {name:"Service",link:"/"},
    {name:"Contact Us",link:"/"},
    
  ];
  let [open,setOpen]=useState(false);

  return (
    
    <section class="text-gray-600 body-font">
      <div class="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-zinc-800 py-4 md:px-10 px-7 ">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-white right-11 ">
            <span className=" text-3xl text-indigo-600 mr-3 pt-2 ml-3">
            <ion-icon name="logo-ionic"></ion-icon>
            </span  >
           <a href="/">  FOOD HUB</a>
          </div>
          <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name= {open ? 'close':'menu'}></ion-icon>
          </div>
          <ul className={`md:flex md:items-center absolute bg-zinc-800 md:pb-0 mr-0 pb-12  md:static md:z-auto z-[-1] left-12 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500  ease-in ${open ? 'top-20':'top-[-490px]'}`}>
            {
              Links.map((Link)=>(
                
                <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7"><a href={Link.link}className="text-white hover:text-gray-400 duration-500">{Link.name}</a>
                </li>
                
              ))
            }
           <a href="#" class="flex items-center  ml-36 hover:text-blue-100 text-white">
                <span class="inline-flex mr-1">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1 mr-4"></path></svg>
                </span>
                Logout
              </a>
            
          </ul>
        </div>
      </div>

      <div class="fixed flex flex-col top-20  left-0 w-14 hover:w-64  bg-zinc-800 bg-zinc-800 h-full text-white transition-all duration-300 border-none z-10 sidebar">
            <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                <ul class="flex flex-col py-4 space-y-1">
                    <li class="px-5 hidden md:block">
                        <div class="flex flex-row items-center h-8">

                        </div>
                        <div className="ml-2 "> <img src={Logo} alt="Logo" /></div>
                    </li>

                    <li>

                        <a href="/" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/Addcustomer" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                            </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Customer Management</span>

                        </a>
                    </li>
                    <li>

                      
            <a href="/addfood" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">

                            <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                            </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Order Management</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                            </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Delivery Management</span>

                        </a>
                    </li>
                    <li>
                        <a href="/addfood" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                            </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Food Management</span>
                            {/* <span class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span> */}
                        </a>
                    </li>
                    <li class="px-5 hidden md:block">
                        <div class="flex flex-row items-center mt-5 h-8">
                            <div class="text-sm font-light tracking-wide truncate text-gray-400 uppercase">Settings</div>
                        </div>
                    </li>
                    <li>
                        <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
                        </a>
                    </li>

                </ul>
               
            </div>
        </div>
  <div class="container px-16 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-8xl font-medium title-font mb-4 text-gray-900 pt-6">Welcome To FoodHub Dashboard</h1>
      
    </div>
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <ion-icon name="cash-outline"></ion-icon>
          <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p class="leading-relaxed">Total Earn</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <ion-icon name="people-sharp"></ion-icon>
          <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
          <p class="leading-relaxed">Users</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
          <p class="leading-relaxed">Files</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
          <p class="leading-relaxed">Places</p>
        </div>
      </div>
    </div>
  </div>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
    </div>
    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Plan</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Speed</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3">Start</td>
            <td class="px-4 py-3">5 Mb/s</td>
            <td class="px-4 py-3">15 GB</td>
            <td class="px-4 py-3 text-lg text-gray-900">Free</td>
            <td class="w-10 text-center">
              <input name="plan" type="radio"></input>
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-gray-200 px-4 py-3">Pro</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
            <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
            <td class="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio"></input>
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-gray-200 px-4 py-3">Business</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
            <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
            <td class="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio"></input>
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Exclusive</td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">48 Mb/s</td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">120 GB</td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$72</td>
            <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio"></input>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
      <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
    </div>
  </div>
</section>
</section>

  );
};

export default Home;
