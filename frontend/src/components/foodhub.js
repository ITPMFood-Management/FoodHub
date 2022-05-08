import React from "react";
import Logo2 from "../img/Logo-2.png";
import food from "../img/food.jpg";
import food1 from "../img/f1.jpg";
import food2 from "../img/f2.png";
import food3 from "../img/f9.png";
import food4 from "../img/f4.png";
import food5 from "../img/f5.png";
import food6 from "../img/f6.png";
import food7 from "../img/f7.png";

function Foodhub() {
  return (
    <>
      <header class="text-gray-400  body-font  ">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed bg-white border-2 border-slate-100">
          <a
            href="/home"
            class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <img src={Logo2} className="w-12" />
            <span class="ml-3 text-xl text-red-700">FOOD HUB</span>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a href="" class="mr-5 hover:text-red-700 duration-500 ">
              First Link
            </a>
            <a href="" class="mr-5 hover:text-red-700 duration-500">
              Second Link
            </a>
            <a href="" class="mr-5 hover:text-red-700 duration-500">
              Third Link
            </a>
            <a href="" class="mr-5 hover:text-red-700 duration-500">
              Fourth Link
            </a>
          </nav>

          <a href="/Login">
            {" "}
            <button class="inline-flex items-center bg-white border-solid border-2 border-black py-1 px-3 focus:outline-none hover:text-red-700 rounded text-base mt-4 md:mt-0 mr-7">
              Sign in/Register
              <ion-icon name="person-circle-outline"></ion-icon>
            </button>
          </a>
          <a href="">
            <div className="text-4xl mr-5 mt-2 hover:text-red-700 duration-500 ">
              <ion-icon name="cart-outline"></ion-icon>
            </div>{" "}
          </a>
        </div>
      </header>

      <section class="text-gray-400 body-font ">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 mt-40">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block  h-48 rounded overflow-hidden">
                <img src={food} className=" w-auto h-fit" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  PIZZA
                </h3>
                <h2 class="text-white title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1">RS.550.00</p>
                <a href=""></a>
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-3 rounded"
                  type="submit"
                >
                  More...
                </button>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class=" block h-48 rounded overflow-hidden">
                <img src={food1} className=" w-auto h-fit" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CHICKEN BURGER
                </h3>
                <h2 class="text-white title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p class="mt-1">RS.675.00</p>
                <a href=""></a>
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-3 rounded"
                  type="submit"
                >
                  More...
                </button>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block  h-48 rounded overflow-hidden">
                <img src={food2} className=" w-auto h-fit" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  ONION RINGS
                </h3>
                <h2 class="text-white title-font text-lg font-medium">
                  Neptune
                </h2>
                <p class="mt-1">RS.250.00</p>
                <a href=""></a>
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-3 rounded"
                  type="submit"
                >
                  More...
                </button>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block  h-48 rounded overflow-hidden">
                <img src={food3} className=" w-auto h-fit" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  BIRIYANI
                </h3>
                <h2 class="text-white title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p class="mt-1">RS.850.00</p>
                <a href=""></a>
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-3 rounded"
                  type="submit"
                >
                  More...
                </button>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block  h-48 rounded overflow-hidden">
                <img src={food4} className=" w-auto h-fit" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CHOCOLATE MOUSSE
                </h3>
                <h2 class="text-white title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1">RS.350.00</p>
                <a href=""></a>
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-3 rounded"
                  type="submit"
                >
                  More...
                </button>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block  h-48 rounded overflow-hidden">
                <img src={food5} className=" w-auto h-fit" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CHOCOLATE CAKE
                </h3>
                <h2 class="text-white title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p class="mt-1">RS.275.00</p>
                <a href=""></a>
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-3 rounded"
                  type="submit"
                >
                  More...
                </button>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block  h-48 rounded overflow-hidden">
                <img src={food6} className=" w-auto h-fit" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  PAN CAKE
                </h3>
                <h2 class="text-white title-font text-lg font-medium">
                  Neptune
                </h2>
                <p class="mt-1">RS.150.00</p>
                <a href=""></a>
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-3 rounded"
                  type="submit"
                >
                  More...
                </button>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block  h-48 rounded overflow-hidden">
                <img src={food7} className=" w-auto h-fit" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CUP CAKE
                </h3>
                <h2 class="text-white title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p class="mt-1">RS.120.00</p>
                <a href=""></a>
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-3 rounded"
                  type="submit"
                >
                  More...
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Foodhub;
