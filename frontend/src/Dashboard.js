import { useState } from "react";
import logo from "./img/logo.png"

const Dashboard = () => {
    const [open,setOpen] =useState(true);
    return ( 
        <div className="flex">
        <div className={` ${open ? "w-72":"w-20"}w-72 h-screen mt-16 bg-zinc-800 relative`}>
        
            <div className="relative">
           
           <img src={logo} className="absolute cursor-pointer rounded-full -right-3 top-9 w-7" />
           </div>
            


        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen mt-8">
        <h1>Home Page</h1>
        </div>
        
            
        </div>
     );
}
 
export default Dashboard;