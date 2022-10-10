import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import $ from 'jquery'

function  DeleteProduct({match}) {

    const [deleteid,setDeleteid]=useState()
    useEffect(()=>{
        axios.delete(`http://localhost:5000/api/tempproducts`);
    })
    return (
        <div>
            
        </div>
    )
}

export default DeleteProduct
