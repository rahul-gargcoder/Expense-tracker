import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import '../css/signup.css'
import swal from 'sweetalert';
import axios from 'axios'
function Login(){
    console.log(process.env.REACT_APP_SERVER_URL)
    const navigate=useNavigate();
    const Handlesubmit=async (e)=>{
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password=document.querySelector('#password').value;
        const res=await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`,{
            'email':email,
            'password':password
        }).catch((err)=>{
            swal(err.message)
        })
        if(res.data.flag){
            swal({
                title:res.data.info,
                icon: "success"
              });
            localStorage.setItem('islogged',res.data.flag)
            localStorage.setItem('userdata',res.data.detail)
             navigate('/')
        }
        else{
            swal({
                title:res.data.info,
                icon: "error"
              });
        }
    }
  return (
    <>
    <div id="authcontainer">
        <h3>Login Here</h3>
        <form onSubmit={Handlesubmit}>
        <hr/>
        <input type="email" placeholder="Enter your e-mail" id='email' required/>
        <input type="password" placeholder="Enter your password" id="password" required/>
        <hr/>
        <button type="submit">Submit</button>
        <br/>
        <h6>Not have account sign up here👇</h6>
        <button><a href='/signup'>Signup</a></button>
        </form>
    </div>
    </>
    )
}

export default Login