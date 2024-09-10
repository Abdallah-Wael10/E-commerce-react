import "../Nav bar/Nav.css"
import {BrowserRouter , Routes , Route } from "react-router-dom"
import { Link , NavLink} from "react-router-dom";
import { useState } from "react"


import Market from "../market store/market";


import img from "../Nav bar/images/googleAdv.png"
import searchh from "../Nav bar/images/Group 1.png"
import icon1 from "./images/Group 281.png"
import icon2 from "./images/Group 2.png"
import icon3 from "./images/Vector (1).png"



function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  


    return (
      
        
      <div className="Nav">
        {/* img adv in nav */}
        <img src={img} alt="" />
        <button className="menu-toggle" onClick={handleMenuToggle}>
        ☰
      </button>
        <br />
{/* first part in nav */}
<div className={`nav-content ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav1" >
        <h1>Selle easily on our  store</h1>
        <div className="home">
          
            <div><NavLink to='/Home'>Home</NavLink></div>
            <div><NavLink to="/market">Market Store</NavLink></div>
            <div><NavLink to="/about">About Us</NavLink></div>
            <div><NavLink to="/contact">Contact</NavLink></div>
       
        </div>
     
        <div className="log">
          <Link id="Link" to="/sign">
           <h1>Sign Up</h1>
          </Link>
          <Link id="Link" to="/login">
           <h1>Log in</h1>
          </Link>
        </div>


        </div>
        <div className="nav2">
            <div id="logo"><h1>Logo</h1></div>
            <div className="search">
                <img src={searchh}/>
            
           <input type="search" name="" id="" placeholder="Look for anything you want" />
           <button>Search</button>

           <div className="icons">
            
            <img src={icon1} alt="" />
            <Link to="/cart">
            <img src={icon2} alt="" />
            </Link>
            <img src={icon3} alt="" />
           </div>

            </div>
        </div>
        </div>
      </div>
    );
  }
  
  
  export default Nav;
  