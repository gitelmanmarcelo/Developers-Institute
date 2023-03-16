
import { Link, Routes, Route } from "react-router-dom";

const NavBar = () => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
      });

    return (
        <>
        <div>
        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
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