import React from 'react'
import '../css/setting.css'
import axios from 'axios'
import swal from 'sweetalert'
function Settings() {
    const handlechangename=async ()=>{
        if(document.getElementById('changename').value===''){
            return swal({
                title:'Please Enter a valid name',
                icon:'error'
            })
        }
        console.log('running');
        const response=await axios.post('http://localhost:5000/changename',{
            userid:localStorage.getItem('userdata'),
            name:document.getElementById('changename').value
        }).catch((err)=>{
            swal({
                title:'Error at server',
                icon:'error'
            })
        })
        if(response){
            return swal({
                title:'Name updated successfully🎉🎉🎉',
                icon:'success'
            })
        }
    }
    const handlechangepassword=async ()=>{
        let password=document.getElementById('changepassword').value;
        let confirmpassword=document.getElementById('confirmpassword').value;
        if(password!==confirmpassword){
            return swal({
                title:'Password is not matching',
                icon:'error'
            })
        }
        const response=await axios.post('http://localhost:5000/changepassword',{
            userid:localStorage.getItem('userdata'),
            password
        }).catch((err)=>{
            swal({
                title:'Error at server',
                icon:'error'
            })
        })
        if(response){
            return swal({
                title:'Password updated successfully🎉🎉🎉',
                icon:'success'
            })
        }
    }
  return (
    <>
    <div>
    <h1>Setting</h1>
    <h2>Change Name</h2>
    <input id='changename' required autoComplete='off'/>
    <button onClick={handlechangename}>submit</button>
    <h2>Change Password</h2>
    <input id='changepassword' type='password'/>
    <input id='confirmpassword' type='password'/>
    <button id='submitbtn' onClick={handlechangepassword}>submit</button>
    </div>
    </>
  )
}

export default Settings