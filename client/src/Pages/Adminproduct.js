import React,{useState,useEffect} from 'react'
import './Adminproduct.css'
import image1 from '../images/product1.jpg'
import axios from 'axios'
import $ from 'jquery'
import { Link } from 'react-router-dom'

function Adminproduct() {

    const [userposts,setuserPosts]=useState([])
  
    const [userid,setuserid]=useState({
       
        name:"",
        type:"",
        price:"",
        address:"",
        description:"",
        images:"",
        userid:"",
        phoneno:"",


    })

    useEffect( ()=>{
        axios.get(`http://localhost:5000/api/tempproducts`)
        .then(response=> setuserPosts(response.data))
    },[])
  

    

    const submitdata=(match)=>{
       
       
    
        
        axios.post(`http://localhost:5000/api/products/?id=${match}`)
       .then(res=>console.log(res.data)) 
    }




    function deleteproduct(match){
        axios.delete(`http://localhost:5000/api/tempproducts/?id=${match}`);
    
       
    }




    return (
        <>
            <div style={{minHeight:"76vh"}}>
                <div className="row" style={{marginTop:"180px" ,marginLeft:"50px"}}>

                    <div className="col-lg-8" >

                    <div class="card ta " style={{width:"1200px",height:"680px"}}>
                        <div class="card-header " style={{backgroundColor:"#6CB2EB"}}>
                            <div>
                                <h3 class="card-title" style={{color:"#ffff", fontWeight: "bold", fontSize:"24px"}}>Posts</h3>
                            </div>
                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse"><i class="fas fa-minus"></i></button>
                            <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                    <div class="card-body table-responsive p-0  " style={{height: "450px"}}>
                        <table class="table table-striped projects  table-hover  table-head-fixed text-nowrap">
                            <thead style={{fontSize:"larger "}}>
                                <tr>
                                    <th style={{width: "10px"}} > 
                                        #
                                    </th>
                                    <th style={{width: "50px"}} hidden>
                                        Id
                                    </th>
                                    <th style={{width: "50px"}}>
                                        Image
                                    </th>
                                    <th style={{width: "100px"}}>
                                        Name
                                    </th>
                                    <th style={{width: "100px"}} hidden>
                                        Category
                                    </th>
                                    <th style={{width: "60px"}}>
                                        Type
                                    </th>
                                    <th style={{width: "60px"}}>
                                        Price
                                    </th>
                                    <th style={{width: "100px"}}>
                                        Address
                                    </th>
                                    <th style={{width: "150px"}}>
                                        Description
                                    </th>
                                    <th style={{width: "150px"}} hidden>
                                       User ID
                                    </th>
                                    <th style={{width: "50px"}}>
                                        Phoneno
                                    </th>
                            
                                    <th style={{width: "70px"}}>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody style={{background:"rgba(41, 83, 243, 0.27)!important"}}>
                                { 
                                    userposts.map( 
                                        userpost=>{
                                            return(
                                                    <tr>
                                                        <td></td>
                                                        <td hidden><input type="text" class="id1" value={userpost._id} ></input> </td>
                                                        <td>
                                                            <ul class="list-inline">
                                                                <li class="list-inline-item">
                                                                    <img alt="Avatar" class="table-avatar" src={userpost.images}style={{width:"60px",height:"60px"}}/>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td><input type="text" class="name1" value={userpost.name}style={{width:'110px'}}/></td>
                                                        <td hidden></td>
                                                        <td><input type="text" class="type1" value={userpost.type} style={{width:'80px'}}/></td>
                                                        <td><input type="text" class="price1" value={userpost.price} style={{width:'80px'}}/></td>
                                                        <td><input type="text" class="address1" value={userpost.address}style={{width:'110px'}}/></td>
                                                        <td><input type="text" class="description1" value={userpost.description}style={{width:'130px'}}/></td>
                                                        <td hidden><input type="text" class="productownerid" value={userpost.userid}/></td>
                                                        <td><input type="text" class="phoneno" value={userpost.phoneno}  style={{width:'100px'}}/></td>
                       
                                                        <td class="project-actions text-left">
                                                           
                           
                                                                <button class="btn btn-primary btn-sm view-button " >
                                                                    <i class="fas fa-folder"></i>
                                                                        View
                                                                </button>
                                                              
                                                                <button class="btn btn-success btn-sm add1-button " onClick={()=> submitdata(userpost._id)}>
                                                                    <i class="fas fa-pencil-alt"></i>
                                                                        Approve
                                                                </button>

                                                                {/* <button class="btn btn-danger btn-sm delete-button " >
                                                                    <i class="fas fa-pencil-alt"></i>
                                                                    <Link to={`/admindelete/${userpost._id}`}> 
                                                                    Delete
                                                                    </Link>
                                                                        
                                                                </button> */}


                                                                    <button class="btn btn-danger btn-sm delete-button " onClick={()=> deleteproduct(userpost._id)} >
                                                                        <i class="fas fa-pencil-alt"></i>
                                                                     
                                                                                Delete
                                                            
                                                                        
                                                                </button>

                                                                {/* <button type="submit" value="Delete" class="btn btn-danger fas fa-trash">Delete</button> */}
                                                        
                                                        </td>
                                                    </tr>
                                                )
                                                }
                                            )
               
                                }
                        
                        
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>




                    <div className="col-lg-2" style={{marginRight:"60px"}}>


                     <div className="card card-primary card-outline "  style={{marginTop:"0px" ,marginRight:"60px", height:"720px",width:"30rem", border:"none"}} id="admin_shadow_show">
                                                   
                                                   
                        <form id="admin-edit-form">
                            <div class="mb-3">
                            <input type="text" name="ad-editid" id="ad-editid" hidden />
                            <div className="text-center">
                                    <img className="profile-user-img img-fluid  rounded-circle" src={image1} alt="User profile picture" style={{width:"150px",height:"150px"}}/>
                                </div>
                                                
                            <input type="text" class="form-control" id="" aria-describedby="emailHelp" hidden/>

                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" name="ad-editname" id="ad-editname" aria-describedby="emailHelp"/>
                           
                            </div>
                            <div class="mb-3">
                                <label for="type" class="form-label">Type</label>
                                <input type="text" class="form-control" name="ad-edittype" id="ad-edittype" aria-describedby="emailHelp"/>
                                
                            </div>

                            <div class="mb-3">
                                <label for="price" class="form-label">Price</label>
                                <input type="text" class="form-control"  name="ad-edittypeprice" id="ad-edittypeprice" aria-describedby="emailHelp"/>
                                
                            </div>
                            <div class="mb-3">
                                <label for="address" class="form-label">Addresse</label>
                                <input type="text" class="form-control" name="ad-editaddress" id="ad-editaddress" aria-describedby="emailHelp"/>
                                
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Description</label>
                                <input type="text" class="form-control"name="ad-editdescription" id="ad-editdescription" aria-describedby="emailHelp"/>
                                
                            </div>
                            <div class="mb-3 ">
                            <label  class="form-label" for="ad-editphone" >PhoneNo</label>
                            <input type="text"  class="form-control"name="ad-editphone" id="ad-editphone"/>
                           
                            </div>

                            {/* <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                             */}
                            
                                <input type="text" name="ad-ownerpostid" id="ad-ownerpostid"/> 

                            <button type="submit" class="btn btn-success">Approve </button>
                            <button type="submit" class="btn btn-primary">Edit</button>
                            <button type="submit" class="btn btn-danger">Delete</button>
                        </form>
        
                        </div> 

                    </div>


                </div>
                
            </div>




           
        </>


    )
}

export default Adminproduct
