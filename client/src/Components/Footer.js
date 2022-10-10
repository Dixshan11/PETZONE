import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import './Footer.css'

function Footer() {
    return (
        <div>
             
    <footer className="site-footer" style={{ bottom:"0", width:"100%"}}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">PetZone.com <i> It is our craving at ‘Pet Zone’ to have any kind of effect in the networks we serve. For over 03 years, ‘Organization Name’ has been the retail pet industry pioneer in the territory of creature care with continuous staff preparing programs, in-store creature farming frameworks and network benefit programs went for setting destitute pets and averting undesirable litters in the network </i> </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><Link to="http://scanfcode.com/category/c-language/">PETS</Link></li>
              <li><Link to="http://scanfcode.com/category/front-end-development/">PET FOODS</Link></li>
              <li><Link to="http://scanfcode.com/category/back-end-development/">PET MEDICINE</Link></li>
              <li><Link to="http://scanfcode.com/category/java-programming-language/">PET ACCESSORIES</Link></li>
              <li><Link to="http://scanfcode.com/category/Linkndroid/">OTHERS</Link></li>
             
            </ul>
          </div>

          <div className="col-xs-4 col-md-2">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="/addpost">Add Post</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </ul>
            
          </div>
          <img src={logo} style={{width:'110px'}}></img>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <Link to="#">PetZone</Link>
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><Link className="facebook" to="#"><i className="fa fa-facebook"></i></Link></li>
              <li><Link className="twitter" to="#"><i className="fa fa-twitter"></i></Link></li>
              <li><Link className="dribbble" to="#"><i className="fa fa-dribbble"></i></Link></li>
              <li><Link className="linkedin" to="#"><i className="fa fa-linkedin"></i></Link></li>  
              
            </ul>
          </div>
        </div>
      </div>
</footer> 
        </div>
    )
}

export default Footer
