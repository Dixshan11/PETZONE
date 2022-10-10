import {Link ,useHistory} from 'react-router-dom'
import React,{useState} from 'react'
import { Button,Col,Container,Form,Row  } from 'react-bootstrap'
import LoginIcon from '../images/user.png'
import backIcon from '../images/login.svg'
import './login.css'
import axios from 'axios'
export default function Login() {

    const history=useHistory();
    const [user,setUser] = useState({
        email:'',
        password:''
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
   
       const response =await axios.post('/user/login', user)
       console.log(response)
       const {data:{accesstoken}} = response
       localStorage.setItem("token", accesstoken)
    //    localStorage.removeItem("token")
       console.log(accesstoken)
       history.push("/shop");
         
        // if(response.data){
        //     const data = JSON.stringify(response.data)
        //     localStorage.setItem("user",data);
        // }      
    }
    const handleChange =(e)=>{
        const {name,value} =e.target
        setUser(oldUser=>{
            return{
                ...oldUser,
                [name]:value
            }
        })
    }

    return (
        <div style={{minHeight:"73vh",marginTop:'200px'}}>
            <Container >
                <Row>
                    <Col lg={4} md={6} sm={12} className='text-center mt-5 p-3' >
                    <i class="far fa-user-circle icon-img" style={{marginBottom:"10px"}}></i>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                       
                        <Form.Control type="email" placeholder="Enter email" name="email"
                         value={user.email}
                         onChange={handleChange}
                         />
                       
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        
                        <Form.Control type="password" placeholder="Password"  name="password" 
                        value={user.password}
                        onChange={handleChange}
                        />
                    </Form.Group>
                   
                    <Button variant="primary btn-block" type="submit">
                        Log In
                    </Button>
                    <div className='mt-3'>
                    <Link to='/register'> Create a new Account ?</Link>
                    </div>
                    </Form>
                    </Col>

                    <Col lg={8} md={6} sm={12}>
                        <img src={backIcon} className='w-100'/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
