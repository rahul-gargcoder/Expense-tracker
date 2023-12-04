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
        const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}/changename`,{
            userid:localStorage.getItem('userdata'),
            name:document.getElementById('changename').value
        }).catch((err)=>{
            swal({
                title:'Error at server',
                icon:'error'
            })
        })
        if(response){
             swal({
                title:'Name updated successfully🎉🎉🎉',
                icon:'success'
            })
            setTimeout(() => {
                window.location.reload();
            }, 1000);
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
        const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}/changepassword`,{
            userid:localStorage.getItem('userdata'),
            password
        }).catch((err)=>{
            swal({
                title:'Error at server',
                icon:'error'
            })
        })
        if(response){
             swal({
                title:'Password updated successfully🎉🎉🎉',
                icon:'success'
            })
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            
        }
    }
  return (
    
 
    <div className='set-container'>
        <div className="heading">

            <h2>Setting</h2>

        </div>
        <div className='container'>
        <div className='usernamediv'>
          <h5>Enter New Username</h5>
          <input id='changename' required autoComplete='off'/>
            <button onClick={handlechangename}>Change Username</button>
        </div>
        <div className='passdiv'>
          <h5>Enter New Password</h5>
          <input id='changepassword' type='password'/>
        </div>
        <div className='passdiv'>
          <h5>Confirm New Password</h5>
          <input id='confirmpassword' type='password'/>
          <button id='submitbtn' onClick={handlechangepassword}>Change Password</button>
        </div>
       
        </div>
    
    </div>    
    
  )
}

export default Settings