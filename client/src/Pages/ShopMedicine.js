import React,{useState,useEffect} from 'react'
import Shopsidebar from '../Components/Shopsidebar'
import axios from 'axios'
import $ from 'jquery'
import {Link, useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './Shop.css'
import close from './assets/img/close-icon.svg'
import p1 from './assets/img/c5.jpeg'
function ShopMedicine() {
    $('.shopHeaderItem').on('click', function() {
        
        var mame= $(this).html();
       
   
        console.log(mame);
           
           
       });
    const [items,setItems]=useState([])

    const [category,setCategory]=useState(
       
    )
    

 
  
   


    // console.log(category)
    // const category1="pets";

    useEffect( ()=>{
        axios.get('api/filtertype/?id=medicine')
        .then(response=> setItems(response.data))
    },[])

    return (
           

        <>
       
        <div ClassName="container" style={{minHeight:"70vh" }} >
        <div className="row">
                <div className="col-lg-1" style={{padding:"40px"}}><Shopsidebar/></div>
                <div  className="col-lg-10" >
                <div style={{textAlign:"center" ,margin:"10rem 0rem 0rem 0rem"}}>
                <Link to='/shoppet'>  <span class="badge  bg-dark shopHeaderItem"  style={{fontSize:"1.8rem" ,marginLeft:"0rem",width:"12rem"}}>pets</span></Link>
                <Link to='/shopfood'>   <span class="badge  bg-dark shopHeaderItem"   style={{fontSize:"1.8rem",marginLeft:"1rem",width:"12rem"}}>Pets Food</span></Link>
                <Link to='/shopmedicine'>     <span class="badge  bg-dark shopHeaderItem" style={{fontSize:"1.8rem",marginLeft:"1rem",width:"12rem"}}>Medicine</span></Link>
                    <span class="badge  bg-dark shopHeaderItem"  style={{fontSize:"1.8rem",marginLeft:"1rem",width:"12rem"}}>Accessories</span>
                    <span class="badge  bg-dark shopHeaderItem"  style={{fontSize:"1.8rem",marginLeft:"1rem",width:"12rem"}}>Others</span>
                    <span class="badge  "  style={{fontSize:"1.8rem",marginLeft:"1rem",width:"31rem"}}> 
                        <div class="  input-group" >
                            <input type="text" class="form-control mr-2" name="term" placeholder="Find You Pets " id="term" style={{paddingTop:"1.6rem",paddingBottom:"1rem"}}/>
                                <span class="input-group-btn  " >
                                    <button class="btn btn-info" type="submit" title="Search projects" >
                                        <span class="fas fa-search" ></span>
                                    </button>
                                </span>
                                <span class="input-group-btn">
                                    <button class="btn btn-danger " type="button" title="Refresh page">
                                        <span class="fas fa-sync-alt"></span>
                                    </button>
                                </span>             
                        </div>
                    </span>
                </div>
    

               


{/* products show container */}
                <div className="row "  id="productsview"  >
                { 
                items.map( 
                    item=>{

                      var phoneno ="94"+item.phoneno;
                      var whatsappurl= "https://wa.me/"+phoneno;
                      var name=item.name;
                      var name1=name.toUpperCase()
                        return(

                            
                        <div className="card col-lg-2 shopcard "  id="card1" style={{margin:"20px 20px 50px 30px" , height:'24rem'}}>
                         


                            <div class="flip-card" >
                            <div class="flip-card-inner">
                                <div class="flip-card-front" >
                                <img src={item.images}alt="Avatar" class="card-img-top" style={{height:"12rem" , marginTop:"20px"}}/>
                                </div>
                                <div class="flip-card-back" >
                                <img src={item.images}alt="Avatar" class="card-img-top" style={{height:"19rem" , paddingTop:"20px"}}/>
                                </div>
                            </div>
                            </div>


                            {/* <div style={{padding:"5px"}}>
                            <img src={item.images}alt="Avatar" class="card-img-top" style={{height:"13rem" , paddingTop:"20px"}}/>
                                </div>   
                               */}
                       
                            <div className="card-body shopcardbody">
                                
                                <h5 className="card-title pstyle3" style={{textAlign:"center"}}>{name1}</h5>
                                <div id="span-grid">
                                  
                                <span className="card-text pstyle2">Rs.{item.price}</span>
                                <span></span>
                                <span></span>
                                <span > <i class="bi bi-heart-fill" style={{color:"red"}}></i></span>
                                </div>
                            </div>
                            <div  id="button-grid">
                                <a href={"https://wa.me/"} target='_blank'  class="btn btn-success pstyle2" value=' + item._id + '><i class="bi bi-whatsapp"></i></a>
                                <button type="button" class="btn btn-success portfolio-link pstyle2" data-bs-toggle="modal" href="#portfolioModal1" ><i class="bi bi-eye-fill"></i></button>
                                <div id="prod_preview_container"></div>

                                
                            </div>
                    </div>)
                    }
                )
               
               }
                </div>
               
                </div>

            </div>
           
        </div>

        <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={close}alt="Close modal"/></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 className="text-uppercase" style={{fontWeight:"bold"}}>Cat</h2>
                                    <p className="item-intro text-muted">300</p>
                                    <img className="img-fluid d-block mx-auto" src={p1} alt="..."  style={{width:"610px"}}/>
                                    <p className="pstyle2">A cat is a furry animal that has a long tail and sharp claws. Cats are often kept as pets. 2. countable noun. Cats are lions, tigers, and other wild animals in the same family.</p>
                                    <ul className="list-inline">
                                    <li className="pstyle2">
                                            <strong className="pstyle2">Price:</strong>
                                           100
                                        </li>
                                        <li className="pstyle2">
                                            <strong className="pstyle2">Category:</strong>
                                            Cats
                                        </li>
                                        <li className="pstyle2">
                                            <strong className="pstyle2">Phone no:</strong>
                                          0768962881
                                        </li>
                                    </ul>
                                    <button className="btn  btn-xl text-uppercase pstyle2" data-bs-dismiss="modal" type="button" style={{backgroundColor:"rgba(245, 208, 39, 1)", color:"white", fontWeight:'bold', fontSize:"20px", padding:'15px 30px 15px 30px', borderRadius:'5px'}}>
                                        <i className="fas fa-times me-1"  ></i>
                                        Close Category
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        </>

        
    )
}




 




export default ShopMedicine
