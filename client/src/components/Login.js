import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/signup.css'
import swal from 'sweetalert';
import axios from 'axios'
function Login(){
    const navigate=useNavigate();
    const Handlesubmit=async (e)=>{
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password=document.querySelector('#password').value;
        const res=await axios.post('http://localhost:5000/login',{
            'email':email,
            'password':password
        }).catch((err)=>{
            swal(err.message)
        })
        console.log(res.data.flag);
        if(res.data.flag){
           
            return navigate('/')
        }
    }
  return (
    <>
    <div id="container">
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