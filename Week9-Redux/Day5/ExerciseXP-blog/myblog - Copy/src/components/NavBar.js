import About from "./About";
import Contact from "./Contact";
import Home from './Home';
import Post from "./Post";
import { Link, Routes, Route } from "react-router-dom";

const NavBar = () => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
      });

    return (
        <>
        <div>
        <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
          </ul>
        </div>
      </nav> 
      </div>

      </>
    )    
}

export default NavBar;