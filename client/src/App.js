import{BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import './App.css';


import Header from './Components/Header';
import Home from  './Pages/Home';
import Aboutus from  './Pages/Aboutus';
import Contactus from  './Pages/Contactus';
import Login from  './Pages/Login';
import Register from  './Pages/Register';
import Userprofile from  './Pages/Userprofile';
import Shop from  './Pages/Shop';
import Wishlist from './Pages/Wishlist';
import Footer from  './Components/Footer';

import Addpost from  './Pages/Addpost'
import Adminproduct from  './Pages/Adminproduct'
import Shoppet from './Pages/Shoppet'
import Shopfood from  './Pages/Shopfood'
import Deleteadminpro from './Pages/DeleteProduct'
import ShopMedicine from './Pages/ShopMedicine'

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>

        <Route exact path="/">
             <Home />
        </Route>

        <Route exact path="/shop">
             <Shop />
        </Route>
        <Route exact path="/shoppet">
             <Shoppet />
        </Route>
        <Route exact path="/shopfood">
             <Shopfood />
        </Route>
        <Route exact path="/shopmedicine">
             <ShopMedicine />
        </Route>
        
        <Route exact path="/login">
             <Login />
        </Route>

        <Route exact path="/register">
             <Register />
        </Route>

        <Route exact path="/aboutus">
             <Aboutus />
        </Route>
       
        <Route exact path="/contactus">
             <Contactus />
        </Route>

        <Route exact path="/addpost">
             <Addpost />
        </Route>
        <Route exact path="/profile">
             <Userprofile />
        </Route>
        
        
        <Route exact path="/wishlist">
             <Wishlist />
        </Route>
        
        <Route exact path="/admindelete/:id">
             <Deleteadminpro />
        </Route>
  
        <Route exact path="/adminproduct">
             <Adminproduct />
        </Route>

       
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;