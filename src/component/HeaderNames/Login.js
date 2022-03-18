import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (

<div className="login">    
    <form id="login">    
        <label><b>User Name     
        </b>    
        </label>    
        <input type="text" name="Uname" id="Uname" placeholder="Username"/>    
        <br/><br/>    
        <label><b>Password     
        </b>    
        </label>    
        <input type="Password" name="Pass" id="Pass" placeholder="Password"/>    
        <br/><br/>    
        <button ><Link to="/login" className="btn-login">Login</Link></button>       
        <br/><br/>    
        <input type="checkbox" id="check"/>    
        <span>Remember me</span>    
        <br/><br/>    
        Forgot <a href="#">Password</a>    
    </form>  
    <button><Link to='/' className="btn-login">Back</Link></button>
</div>

   
    
  )
}

export default Login;