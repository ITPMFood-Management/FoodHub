
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";



import NavBar from "./NavBar";
import SideBar from "./SideBar";

const App = () => {
    return (  
        <div className="App">
      <NavBar/>
     <SideBar/>
      <Routes>
        
        <Route path="/" element={<Home/>} />
 
      </Routes>
    </div>
    );
}
 
export default App;