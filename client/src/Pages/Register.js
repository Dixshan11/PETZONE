import {Link} from 'react-router-dom'
import React,{useState} from 'react'
import { Button,Col,Container,Form,Row  } from 'react-bootstrap'
import LoginIcon from '../images/user.png'
import backIcon from '../images/login.svg'
import './login.css'
import axios from 'axios'
function Register() {


    const [user,setUser]=useState({
        name:'',
        email:'',
        password:''
    })

    const handleSubmit =(e)=>{
        e.preventDefault();

        const newUser = {
            name:user.name,
            email:user.email,
            password:user.password
        }

        axios.post('/user/register', newUser)
        .then(res=>console.log(res.data))
    }

    const handleChange = (e)=>{
        const {name,value} = e.target
        setUser(oldUser => {
            return{
                ...oldUser,
                [name]:value
            }
        })
    }
    return(
        
        <div >
            <Container style={{minHeight:"73vh", marginTop:'200px'}}>
                <Row>
                    <Col lg={4} md={6} sm={12} className='text-center mt-6 p-3'>
                    <i class="far fa-user-circle icon-img"  style={{marginBottom:"5px"}}></i>
                    <Form onSubmit='handleSubmit'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                       
                       <Form.Control type="name" placeholder="Enter Name"  name='name'
                       value={user.name}
                       onChange={handleChange}/>
                      
                   </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                       
                        <Form.Control type="email" placeholder="Enter Email" name='email'
                         value={user.email}
                         onChange={handleChange} />
                       
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        
                        <Form.Control type="password" placeholder="Password" name='password'
                         value={user.password}
                         onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCPassword">
                        
                        <Form.Control type="cpassword" placeholder="Confirm Password" />
                    </Form.Group>
                   
                   
                    <Button variant="primary btn-block" type="submit">
                        Create
                    </Button>
                    <div className='mt-3'>
                    <Link to='/login'> Already have an account ?</Link>
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

export default Register
