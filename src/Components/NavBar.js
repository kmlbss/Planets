import React,{useState} from 'react';
import {NavLink,Link} from 'react-router-dom';
function NavBar() {
    const [open,setOpen]=useState(false);
    // style={ open? {transform: "translateX(0)"}:{transform: "translateX(100%)"} }
    // onClick={()=>  setOpen(!open)}
    return (
        <nav className="navbar">
            <Link to="/"><h2>Planetlər</h2>  </Link>
            <ul className="navbar-links"  style={ open? {transform: "translateX(0)"}:{display: "flex"} }>
               <NavLink activeClassName="active-link" className="navbar-link" to="/mercury"> <li>Merkuri</li> </NavLink>
               <NavLink activeClassName="active-link" className="navbar-link"to="/venus"> <li>Venera</li></NavLink> 
               <NavLink activeClassName="active-link"className="navbar-link" to="/earth"><li>Yer</li></NavLink> 
               <NavLink activeClassName="active-link" className="navbar-link" to="/mars"> <li>Mars</li></NavLink>
               <NavLink activeClassName="active-link" className="navbar-link" to="/jupiter"><li>Yupiter</li></NavLink> 
               <NavLink activeClassName="active-link" className="navbar-link" to="/saturn"> <li>Saturn</li></NavLink>
               <NavLink activeClassName="active-link"className="navbar-link" to="/uranus"><li>Uran</li></NavLink> 
               <NavLink activeClassName="active-link" className="navbar-link" to="/neptune"> <li>Neptun</li></NavLink>
            </ul>
            <div className="burger"  onClick={() => setOpen(!open)} >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
             </div>
        </nav>
    )
}

export default NavBar
