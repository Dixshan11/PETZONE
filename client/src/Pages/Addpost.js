import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './Addpost.css'
import axios from 'axios'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {LockOutlinedIcon,Icon} from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Textarea from '@mui/material/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {savePost} from "../services/postsService"
import {getCurrentUser} from "../services/authService"
import http from "../services/httpService";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cover from '../images/cover8.jpg'

export default function Addpost() {
  const history=useHistory();
  const [user,setUser]=useState({
    name:'',
    price:'',
    address:'',
    description:'',
    phoneno:'',
    photo:''
    

    
})

const handleSubmit = async(e)=>{
    e.preventDefault();

    const newUser = {
        name:user.name,
        price:user.price,
        address:user.address,
        description:user.description,
        phoneno:user.phoneno,
        // images:user.photo,
        type:user.name, 
        userid:user.name
    }
    console.log(newUser)
    const currentUser = getCurrentUser()
    if (!currentUser) {
    alert("You must Login First")
    return
    }
    try {
      // const products = await savePost(newUser)
      history.push("/profile");
      const products=await http.post('api/tempproducts', newUser)
        console.log(products)
    }catch (error) {
      console.log(error)
    }

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
    const theme = createTheme();
    return (
  
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              // backgroundColor: 'black',
    
              backgroundImage: `url(${Cover})`,
              backgroundRepeat: 'no-repeat',
              
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{marginTop:"100px",paddingTop:"10px"}}>
                <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    
                }}
                style={{marginTop:"100px"}}
                >
            
              <Typography component="h1" variant="h5" style={{fontSize:"40px"}} class='pstyle2'>
              <b> ADD POST</b>
              </Typography>
              <Box component="form" noValidate  sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={user.name}
                  onChange={handleChange}
                  
                 
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="price"
                  label="Price"
                  type="price"
                  id="price"
                  autoComplete="price"
                  value={user.price}
                  onChange={handleChange}
                />
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  type="address"
                  id="address"
                  autoComplete="address"
                  value={user.address}
                  onChange={handleChange}
                />
                 <Textarea
                  margin="normal"
                  required
                  
                  name="description"
                  label="description"
                  placeholder="Description *"
                  type="description"
                  id="description"
                  autoComplete="description"
                  style={{width:'100%', marginTop:"10px",marginLeft:'0',height:'60px',borderRadius:'4px',paddingInline:'10px',paddingTop:'10px'}}
                  value={user.description}
                  onChange={handleChange}
                  
                />
               
                <FormControl sx={{ marginTop:'17px', minWidth: '200px',marginLeft:'0',marginBottom:'13px'}}>
                 <InputLabel id="demo-simple-select-autowidth-label" sx={{}}>Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          
          autoWidth
          label="Type *"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'pets'}>Pets</MenuItem>
          <MenuItem value={'foods'}>Foods</MenuItem>
          <MenuItem value={'medicine'}>Medicine</MenuItem>
          <MenuItem value={'accessories'}>Accessories</MenuItem>
          <MenuItem value={'others'}>Others</MenuItem>
        </Select>
        
        </FormControl>
        <FormControl sx={{ marginTop:'17px', minWidth: '200px',marginLeft:'48px',marginBottom:'13px'}}>
                 <InputLabel id="demo-simple-select-autowidth-label" sx={{}}>Category</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          
          autoWidth
          label="Category *"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Dog'}>Dog</MenuItem>
          <MenuItem value={'Cat'}>Cat</MenuItem>
          <MenuItem value={'Fish'}>Fish</MenuItem>
          <MenuItem value={'Shrimp'}>Shrimp</MenuItem>
          <MenuItem value={'Azolla'}>Azolla</MenuItem>
        </Select>
        
        </FormControl>
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phoneno"
                  label="Phone No"
                  type="phoneno"
                  id="phoneno"
                  autoComplete="phoneno"
                  value={user.phoneno}
                  onChange={handleChange}
                />
                 <input 
                type="file"
                  margin="normal"
                  required
                  fullWidth
                  id="photo"
                 
                  name="photo"
                
                  autoFocus
                  value={user.photo}
                  onChange={handleChange}
                  
                 
                />
                <Button
                  type="submit"
                  fullWidth
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{height:"80px", fontSize:"35px", fontFamily:' "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}
              
                >
                 Add
                </Button>
                
                
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    )
}
