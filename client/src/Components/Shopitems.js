import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Shopitems() {
    const [items,setItems]=useState([])

    useEffect( ()=>{
        axios.get('http://localhost:5000/api/products')
        .then(response=> setItems(response.data))
    },[])

  
    return (
        <>
              { 
                items.map( 
                    item=>{

                      var phoneno ="94"+item.phoneno;
                      var whatsappurl= "https://wa.me/"+phoneno;
                        return(
                        <div className="card col-lg-2 shopcard "  id="card1" style={{margin:"10px 7px 30px 7px"}}>
                            <div style={{padding:"20px"}}>
                                <img src={item.images} className="card-img-top" alt="..." style={{height:"15rem"}}/ >
                            </div>
                       
                            <div className="card-body shopcardbody">
                                <h5 className="card-title" style={{textAlign:"center"}}>{item.name}</h5>
                                <p className="card-text">{item.price}</p>
                            </div>
                            <div  id="button-grid">
                                <a href={"https://wa.me/"} target='_blank'  class="btn btn-success" value=' + item._id + '><i class="bi bi-whatsapp"></i></a>
                                <button type="button" class="btn btn-success" ><i class="bi bi-eye-fill"></i></button>
                                <div id="prod_preview_container"></div>
                            </div>
                    </div>)
                    }
                )
               
               }
        </>
    )
}

export default Shopitems


