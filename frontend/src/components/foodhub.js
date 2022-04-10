import React from 'react';
import Logo2 from "../img/Logo-2.png"

function Foodhub() {
  return (
    <><header class="text-gray-400  body-font  ">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed bg-white border-2 border-slate-100">
    <a href="/home" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img src={Logo2} className="w-12" />
      <span class="ml-3 text-xl text-red-700">FOOD HUB</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <a href="" class="mr-5 hover:text-red-700 duration-500 ">First Link</a>
      <a href="" class="mr-5 hover:text-red-700 duration-500">Second Link</a>
      <a href="" class="mr-5 hover:text-red-700 duration-500">Third Link</a>
      <a href="" class="mr-5 hover:text-red-700 duration-500">Fourth Link</a>
    </nav>

   <a href="/signin"> <button class="inline-flex items-center bg-white border-solid border-2 border-black py-1 px-3 focus:outline-none hover:text-red-700 rounded text-base mt-4 md:mt-0 mr-7">Sign in/Register
     
    <ion-icon name="person-circle-outline"></ion-icon>
    
    </button></a>
    <a href=""><div className="text-4xl mr-5 mt-2 hover:text-red-700 duration-500 "><ion-icon  name="cart-outline"></ion-icon></div>  </a>
  </div>
</header>
      
      <section class="text-gray-400 body-font ">
                <div class="container px-5 py-24 mx-auto">
                  <div class="flex flex-wrap -m-4 mt-40">
                      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                          <a class="block  h-48 rounded overflow-hidden">
                              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"></img>
                          </a>
                          <div class="mt-4">
                              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                              <h2 class="text-white title-font text-lg font-medium">The Catalyzer</h2>
                              <p class="mt-1">$16.00</p>
                          </div>
                      </div>
                      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                          <a class=" block h-48 rounded overflow-hidden">
                              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261"></img>
                          </a>
                          <div class="mt-4">
                              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                              <h2 class="text-white title-font text-lg font-medium">Shooting Stars</h2>
                              <p class="mt-1">$21.15</p>
                          </div>
                      </div>
                      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                          <a class="block  h-48 rounded overflow-hidden">
                              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262"></img>
                          </a>
                          <div class="mt-4">
                              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                              <h2 class="text-white title-font text-lg font-medium">Neptune</h2>
                              <p class="mt-1">$12.00</p>
                          </div>
                      </div>
                      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                          <a class="block  h-48 rounded overflow-hidden">
                              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263"></img>
                          </a>
                          <div class="mt-4">
                              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                              <h2 class="text-white title-font text-lg font-medium">The 400 Blows</h2>
                              <p class="mt-1">$18.40</p>
                          </div>
                      </div>
                      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                          <a class="block  h-48 rounded overflow-hidden">
                              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264"></img>
                          </a>
                          <div class="mt-4">
                              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                              <h2 class="text-white title-font text-lg font-medium">The Catalyzer</h2>
                              <p class="mt-1">$16.00</p>
                          </div>
                      </div>
                      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                          <a class="block  h-48 rounded overflow-hidden">
                              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265"></img>
                          </a>
                          <div class="mt-4">
                              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                              <h2 class="text-white title-font text-lg font-medium">Shooting Stars</h2>
                              <p class="mt-1">$21.15</p>
                          </div>
                      </div>
                      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                          <a class="block  h-48 rounded overflow-hidden">
                              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267"></img>
                          </a>
                          <div class="mt-4">
                              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                              <h2 class="text-white title-font text-lg font-medium">Neptune</h2>
                              <p class="mt-1">$12.00</p>
                          </div>
                      </div>
                      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                          <a class="block  h-48 rounded overflow-hidden">
                              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268"></img>
                          </a>
                          <div class="mt-4">
                              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                              <h2 class="text-white title-font text-lg font-medium">The 400 Blows</h2>
                              <p class="mt-1">$18.40</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section></>
  )
}

export default Foodhub