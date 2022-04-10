import { useState } from "react";

const NavBar = () => {
  let Links=[
    {name:"Home",link:"/"},
    {name:"Service",link:"/"},
    {name:"About",link:"/"},
    {name:"Settings",link:"/"},
  ];
  let [open,setOpen]=useState(false);
    return ( 
       
      <div class="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-zinc-800 py-4 md:px-10 px-7 ">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-white right-11 ">
            <span className=" text-3xl text-indigo-600 mr-3 pt-2 ml-3">
            <ion-icon name="logo-ionic"></ion-icon>
            </span>
            FOOD HUB
          </div>
          <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name= {open ? 'close':'menu'}></ion-icon>
          </div>
          <ul className={`md:flex md:items-center absolute bg-zinc-800 md:pb-0 pb-12  md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500  ease-in ${open ? 'top-20':'top-[-490px]'}`}>
            {
              Links.map((Link)=>(
                
                <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7"><a href={Link.link}className="text-white hover:text-gray-400 duration-500">{Link.name}</a></li>
              ))
            }
          </ul>
        </div>
      </div>
        
     );
}
 
export default NavBar;