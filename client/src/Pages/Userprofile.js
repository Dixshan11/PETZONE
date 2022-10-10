
import "./userprofile.css"
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import image1 from '../images/product1.jpg'
import profile from '../images/user-profile.png'
import fish from '../images/cate1.jpg'
import shrimp from '../images/cate3.jpg'
import finchers from '../images/cate4.jpg'
import cat1 from '../images/cate5.jpg'
import cat2 from '../images/product1.jpg'

function Userprofile() {

    const [items,setItems]=useState([])

    useEffect( ()=>{
        axios.get('http://localhost:5000/api/products')
        .then(response=> setItems(response.data))
    },[])
    
    return (
                <div style={{minHeight:"82vh"}}>
{/* user profile */}

                                                <div className="card-body box-profile"  style={{marginTop:"100px"}}>
                                                    <div className="text-center">
                                                        <img className="profile-user-img img-fluid  rounded-circle" src={profile} alt="User profile picture" style={{width:"300px",height:"300px"}}/>
                                                    </div>

                                                    <h2 className="profile-username text-center profilename" style={{color: "rgba(255, 95, 19, 0.85)"}}>DIXSHAN</h2>
                                                    <p className="text-center profileemail"style={{color: "rgba(240, 125, 72, 0.85)"}} >dixdinu91@gmail.com</p>
                                                
                                                                 
                                                               
                                                   
                                                </div>
                    
{/* under addss */}
                    <div className="row ">
{/* under review */}
                            <div className="col-lg-6">
                                <div className="row ">

                                    <div className="col-lg-2" style={{marginRight:"60px"}}>
                                        <div className="container" style={{marginTop:"10px"}}>
                                            <div className="container-fluid"  >
                                                <div className="row">
                                                    <div className="col-md-8" >
                                                        <div className="card card-primary card-outline " id="btn_shadow_show">
                                                            <div className="card-body box-profile" >
                                                                <div className="text-center">
                                                                    <img className="profile-user-img img-fluid  rounded-circle" src={image1} alt="User profile picture" style={{width:"100px",height:"100px"}}/>
                                                                </div>

                                                                <div style={{width:"150px",height:"30px",overflow:"hidden"}}>
                                                                    <h3 className="profile-username text-center " style={{color: "rgba(255, 95, 19, 0.85)"}}>DOG</h3>
                                                                </div>
                                                                <div style={{width:"150px",height:"45px",overflow:"hidden"}}>
                                                                    <p className="text-center"style={{color: "rgba(255, 95, 19, 0.85)"}} >Germanshape</p>
                                                                </div>

                                                                <div style={{textAlign:"center" , marginBottom:"10px"}}>
                                                                    <span className="badge badge-danger" style={{textAlign:"center"}}> under review</span>                
                                                                </div>
                                                            
                                                            
                                                                <button className="btn btn-danger btn-block"><b>DELETE</b></button>
                                                            </div>
                                                        </div>
                                                    </div>
                            
                                                </div>
                                                    {/* <div className="col-md-2">
                                                        <input type="button" value=" GOBACK"  className="btn btn-info btn-lg " style={{height:"550px" ,color:"#fff"}}/>
                                                    </div> */}
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2">
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    <div className="col-lg-2" style={{marginRight:"60px"}}>
                                        <div className="container" style={{marginTop:"10px"}}>
                                            <div className="container-fluid"  >
                                                <div className="row">
                                                    <div className="col-md-8" >
                                                        <div className="card card-primary card-outline " id="btn_shadow_show">
                                                            <div className="card-body box-profile" >
                                                                <div className="text-center">
                                                                    <img className="profile-user-img img-fluid  rounded-circle" src={fish} alt="User profile picture" style={{width:"100px",height:"100px"}}/>
                                                                </div>

                                                                <div style={{width:"150px",height:"30px",overflow:"hidden"}}>
                                                                    <h3 className="profile-username text-center" style={{color: "rgba(255, 95, 19, 0.85)"}}>FISH</h3>
                                                                </div>
                                                                <div style={{width:"150px",height:"45px",overflow:"hidden"}}>
                                                                    <p className="text-center"style={{color: "rgba(255, 95, 19, 0.85)"}} >Fighter</p>
                                                                </div>

                                                                <div style={{textAlign:"center" , marginBottom:"10px"}}>
                                                                <span className="badge badge-danger" style={{textAlign:"center"}}> under review</span>               
                                                                </div>
                                                            
                                                            
                                                                <button className="btn btn-danger btn-block"><b>DELETE</b></button>
                                                            </div>
                                                        </div>
                                                    </div>
                            
                                                </div>
                                                    {/* <div className="col-md-2">
                                                        <input type="button" value=" GOBACK"  className="btn btn-info btn-lg " style={{height:"550px" ,color:"#fff"}}/>
                                                    </div> */}
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-2" style={{marginRight:"60px"}}>
                                        <div className="container" style={{marginTop:"10px"}}>
                                            <div className="container-fluid"  >
                                                <div className="row">
                                                    <div className="col-md-8" >
                                                        <div className="card card-primary card-outline " id="btn_shadow_show">
                                                            <div className="card-body box-profile" >
                                                                <div className="text-center">
                                                                    <img className="profile-user-img img-fluid  rounded-circle" src={finchers} alt="User profile picture" style={{width:"100px",height:"100px"}}/>
                                                                </div>

                                                                <div style={{width:"150px",height:"30px",overflow:"hidden"}}>
                                                                    <h3 className="profile-username text-center" style={{color: "rgba(255, 95, 19, 0.85)"}}>BIRDS</h3>
                                                                </div>
                                                                <div style={{width:"150px",height:"45px",overflow:"hidden"}}>
                                                                    <p className="text-center"style={{color: "rgba(255, 95, 19, 0.85)"}} >Finchers</p>
                                                                </div>

                                                                <div style={{textAlign:"center" , marginBottom:"10px"}}>
                                                                <span className="badge badge-danger" style={{textAlign:"center"}}> under review</span>              
                                                                </div>
                                                            
                                                            
                                                                <button className="btn btn-danger btn-block"><b>DELETE</b></button>
                                                            </div>
                                                        </div>
                                                    </div>
                            
                                                </div>
                                                    {/* <div className="col-md-2">
                                                        <input type="button" value=" GOBACK"  className="btn btn-info btn-lg " style={{height:"550px" ,color:"#fff"}}/>
                                                    </div> */}
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2">
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="col-lg-2">
                                        <div className="container" style={{marginTop:"10px"}}>
                                            <div className="container-fluid"  >
                                                <div className="row">
                                                    <div className="col-md-8" >
                                                        <div className="card card-primary card-outline " id="btn_shadow_show">
                                                            <div className="card-body box-profile" >
                                                                <div className="text-center">
                                                                    <img className="profile-user-img img-fluid  rounded-circle" src={cat1} alt="User profile picture" style={{width:"100px",height:"100px"}}/>
                                                                </div>
                                                                <div style={{width:"150px",height:"30px",overflow:"hidden"}}>
                                                                    <h3 className="profile-username text-center" style={{color: "rgba(255, 95, 19, 0.85)"}}>FIsh</h3>
                                                                </div>
                                                                <div style={{width:"150px",height:"45px",overflow:"hidden"}}>
                                                                    <p className="text-center"style={{color: "rgba(255, 95, 19, 0.85)"}} >Red Cray</p>
                                                                </div>

                                                                <div style={{textAlign:"center" , marginBottom:"10px"}}>
                                                                <span className="badge badge-danger" style={{textAlign:"center"}}> under review</span>              
                                                                </div>
                                                            
                                                            
                                                                <button className="btn btn-danger btn-block"><b>DELETE</b></button>
                                                            </div>
                                                        </div>
                                                    </div>
                            
                                                </div>
                                                {/* <div className="col-md-2">
                                                    <input type="button" value=" GOBACK"  className="btn btn-info btn-lg " style={{height:"550px" ,color:"#fff"}}/>
                                                </div> */}
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                    


{/* reviewed */}
                            <div className="col-lg-6">
                                <div className="row ">

                                    <div className="col-lg-2" style={{marginRight:"60px"}}>
                                        <div className="container" style={{marginTop:"10px"}}>
                                            <div className="container-fluid"  >
                                                <div className="row">
                                                    <div className="col-md-8" >
                                                        <div className="card card-primary card-outline" style={{background:'rgba(41, 83, 243, 0.27'}} id="btn_shadow_show">
                                                            <div className="card-body box-profile" >
                                                                <div className="text-center">
                                                                    <img className="profile-user-img img-fluid  rounded-circle" src={shrimp} alt="User profile picture" style={{width:"100px",height:"100px"}}/>
                                                                </div>

                                                                <div style={{width:"150px",height:"30px",overflow:"hidden"}}>
                                                                    <h3 className="profile-username text-center" style={{color: "rgba(255, 95, 19, 0.85)"}}>SHRIMP</h3>
                                                                </div>
                                                                <div style={{width:"150px",height:"45px",overflow:"hidden"}}>
                                                                    <p className="text-center"style={{color: "rgba(255, 95, 19, 0.85)"}} >Firered</p>
                                                                </div>

                                                                <div style={{textAlign:"center" , marginBottom:"10px"}}>
                                                                    <span className="badge badge-success" style={{textAlign:"center"}}> active</span>                
                                                                </div>
                                                            
                                                            
                                                                <button className="btn btn-danger btn-block"><b>DELETE</b></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                
                                                </div>
                                                    {/* <div className="col-md-2">
                                                        <input type="button" value=" GOBACK"  className="btn btn-info btn-lg " style={{height:"550px" ,color:"#fff"}}/>
                                                    </div> */}
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               
                          
            
                                    
                                    <div className="col-lg-2" style={{marginRight:"60px"}}>
                                            <div className="container" style={{marginTop:"10px"}}>
                                                <div className="container-fluid"  >
                                                    <div className="row">
                                                        <div className="col-md-8" >
                                                            <div className="card card-primary card-outline" style={{background:'rgba(41, 83, 243, 0.27'}} id="btn_shadow_show">
                                                                <div className="card-body box-profile" >
                                                                    <div className="text-center">
                                                                        <img className="profile-user-img img-fluid  rounded-circle" src={cat1} alt="User profile picture" style={{width:"100px",height:"100px"}}/>
                                                                    </div>

                                                                    <div style={{width:"150px",height:"30px",overflow:"hidden"}}>
                                                                    <h3 className="profile-username text-center" style={{color: "rgba(255, 95, 19, 0.85)"}}>FISH</h3>
                                                                </div>
                                                                <div style={{width:"150px",height:"45px",overflow:"hidden"}}>
                                                                    <p className="text-center"style={{color: "rgba(255, 95, 19, 0.85)"}} >Cray</p>
                                                                </div>

                                                                <div style={{textAlign:"center" , marginBottom:"10px"}}>
                                                                    <span className="badge badge-success" style={{textAlign:"center"}}> active</span>                
                                                                </div>
                                                            
                                                            
                                                                <button className="btn btn-danger btn-block"><b>DELETE</b></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                    
                                                    </div>
                                                        {/* <div className="col-md-2">
                                                            <input type="button" value=" GOBACK"  className="btn btn-info btn-lg " style={{height:"550px" ,color:"#fff"}}/>
                                                        </div> */}
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-2">
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                                        
                                    
                                    <div className="col-lg-2" style={{marginRight:"60px"}}>
                                            <div className="container" style={{marginTop:"10px"}}>
                                                <div className="container-fluid"  >
                                                    <div className="row">
                                                        <div className="col-md-8" >
                                                            <div className="card card-primary card-outline" style={{background:'rgba(41, 83, 243, 0.27'}} id="btn_shadow_show">
                                                                <div className="card-body box-profile" >
                                                                    <div className="text-center">
                                                                        <img className="profile-user-img img-fluid  rounded-circle" src={image1} alt="User profile picture" style={{width:"100px",height:"100px"}}/>
                                                                    </div>

                                                                    <div style={{width:"150px",height:"30px",overflow:"hidden"}}>
                                                                    <h3 className="profile-username text-center" style={{color: "rgba(255, 95, 19, 0.85)"}}>CAT</h3>
                                                                </div>
                                                                <div style={{width:"150px",height:"45px",overflow:"hidden"}}>
                                                                    <p className="text-center"style={{color: "rgba(255, 95, 19, 0.85)"}} >London Cat</p>
                                                                </div>

                                                                <div style={{textAlign:"center" , marginBottom:"10px"}}>
                                                                    <span className="badge badge-success" style={{textAlign:"center"}}> active</span>                
                                                                </div>
                                                            
                                                            
                                                                <button className="btn btn-danger btn-block"><b>DELETE</b></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                    
                                                    </div>
                                                        {/* <div className="col-md-2">
                                                            <input type="button" value=" GOBACK"  className="btn btn-info btn-lg " style={{height:"550px" ,color:"#fff"}}/>
                                                        </div> */}
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-2">
                                                    </div>
                                                </div>
                                            </div>
                                    </div>


                                    <div className="col-lg-2" style={{marginRight:"60px"}}>
                                            <div className="container" style={{marginTop:"10px"}}>
                                                <div className="container-fluid"  >
                                                    <div className="row">
                                                        <div className="col-md-8" >
                                                            <div className="card card-primary card-outline" style={{background:'rgba(41, 83, 243, 0.27'}} id="btn_shadow_show">
                                                                <div className="card-body box-profile" >
                                                                    <div className="text-center">
                                                                        <img className="profile-user-img img-fluid  rounded-circle" src={shrimp} alt="User profile picture" style={{width:"100px",height:"100px"}}/>
                                                                    </div>

                                                                    <div style={{width:"150px",height:"30px",overflow:"hidden"}}>
                                                                    <h3 className="profile-username text-center" style={{color: "rgba(255, 95, 19, 0.85)"}}>SHRIMP</h3>
                                                                </div>
                                                                <div style={{width:"150px",height:"45px",overflow:"hidden"}}>
                                                                    <p className="text-center"style={{color: "rgba(255, 95, 19, 0.85)"}} >Red</p>
                                                                </div>

                                                                <div style={{textAlign:"center" , marginBottom:"10px"}}>
                                                                    <span className="badge badge-success" style={{textAlign:"center"}}> active</span>                
                                                                </div>
                                                            
                                                            
                                                                <button className="btn btn-danger btn-block"><b>DELETE</b></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                    
                                                    </div>
                                                        {/* <div className="col-md-2">
                                                            <input type="button" value=" GOBACK"  className="btn btn-info btn-lg " style={{height:"550px" ,color:"#fff"}}/>
                                                        </div> */}
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-2">
                                                    </div>
                                                </div>
                                            </div>
                                    </div>




                                </div>
                            </div> 







                        </div>
          
                 </div>
       
    )}


export default Userprofile
