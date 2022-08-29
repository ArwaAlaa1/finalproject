import React from "react";
import './navbar.css'
import  './section.css'
import { NavLink, Outlet } from 'react-router-dom'

function Navbar (){
    
    
    return(
        <>
        <div className="nav">
            
 
                 <NavLink  to="/" className="links ln2">home</NavLink>
                 <NavLink  to="/menu" className="links">menu</NavLink>
                 <NavLink  to="/ourstory" className="links">our story</NavLink>
                 <NavLink  to="/contactus" className="links">contact us</NavLink>
                 <form>
                     <input type="search" placeholder="search" className="search" />
                 </form>
             </div>
             <Outlet/>
</>

        )
 
 
 
 
    }

export default Navbar ;