import axios from 'axios'
import React from 'react'
import { useNavigate,redirect } from 'react-router-dom'
import '../css/signup.css'
import swal from 'sweetalert'
function Signup(){
  const navigate=useNavigate();
  const handlesubmit=async (e)=>{
    e.preventDefault();
    const username=document.getElementById('username').value;
    const useremail=document.getElementById('useremail').value;
    const password=document.getElementById('password').value;
    const confirmpassword=document.getElementById('confirmpassword').value;
    if(password!==confirmpassword){
      swal('Password not matching','Password should match','warning')
      return;
    }
    else{
      const data={
        name:username,
        email:useremail,
        password:password,
        confirmpassword:confirmpassword
      }
      let result=await axios.post('http://localhost:5000/signup',data)
      .catch((err)=>{
        swal({
          title: err.message,
          icon: "error",
        });
      })

      if(result.data.flag){
        swal({
          title:'Successfully registered',
          icon: "success"
        });
        navigate('/login')
      }
      else{
        swal({
          title:'User already exist',
          icon: "error"
        });
      }
    
    }
  }
  return (
    <>
     <div id="containersignup">
        <h3>Sign Up here</h3>
        <form onSubmit={handlesubmit}>
            <hr/>
            <input type="text" placeholder="Enter your Name" id='username' required/>
            <input type="email" placeholder="Enter your e-mail" id='useremail' required/>
            <input type="password" placeholder="Enter your password" id="password" minLength={3} required/>
            <input type="password" placeholder="Enter password again" id="confirmpassword" required/>
            <hr/>
            <button type="submit" >Submit</button>
            <h6>Have a account already.Login Now👇</h6>
            <button><a href="/login">login</a></button>
        </form>
    </div>
    </>
  )
}

export default Signup