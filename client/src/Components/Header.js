import React from 'react'
import {Link} from 'react-router-dom'
import {getCurrentUser} from "../services/authService"



import './Header.css'

export default function Header() {
  const currentUser = getCurrentUser()
    return (<div ClassName="row">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" > 
  <div className="container-fluid grid-two "  id="navbar-grid">
    <div>
    <a className="navbar-brand" href="#"><span style={{color:"white"}}>PET</span> <span style={{color:"yellow"}}>ZONE</span></a>
    </div>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse " id="navbarNavDropdown" >
      <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link coler navitem-size"  to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  navitem-size"  to='/shop'>Shop</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link  navitem-size"  to='/addpost'>Add Post</Link>
                    </li>
                    
             
                    <li className="nav-item">
                        <Link className="nav-link  navitem-size"  to='/contactus'>Contact Us</Link>
                    </li>
                   
                   
                    <li className="nav-item">
                        <Link className="nav-link  navitem-size"  to='/wishlist'> <i class="bi bi-heart-fill" style={{color:"red"}}></i></Link>
                       
                    </li>
                    
                    <li className="nav-item  navitem-size">
                    <Link className="nav-link  bi-person-circle"  to='/profile'> </Link>
                     
                    </li>
                  
                    <li className="nav-item  ">
                        <Link className="nav-link navitem-size"  to='/login'>Login</Link>
                    </li>
      </ul>
      
    </div>
   
  </div>
</nav>
        </div>
        )
}


                