import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import Blog from "./Blog";
import './nav.css'

function Nav () {
    return (
<nav> 

{/* <li>Blog</li> */}
<Link to={'/'}>Home Page</Link>
<Link to={`/blog/`}>Blog</Link>

{/* <div>
     <Blog /> 
</div> */}

</nav>
    )
}

export default Nav
