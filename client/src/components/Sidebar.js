import React,{ useState,useEffect} from 'react'
// import dp from '../assets/img1.jpg'
import { createAvatar } from '@dicebear/core';
import { funEmoji } from '@dicebear/collection';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


import '../css/sidebar.css'

 function Sidebar() {
    const [dp,setDp]=useState('');
    const [username,setusername]=useState('username');
    const navigate=useNavigate();
    useEffect(() => {
        const getresult=async ()=>{
            const result=await axios.post('http://localhost:5000/getname',{
            data:localStorage.getItem('userdata')
            }).catch((err)=>{
                console.log(err);
            })
            console.log(result.data.name)
            let username=result.data.name;
            setDp(`https://api.dicebear.com/5.x/fun-emoji/svg?seed=${username}`)
            setusername(username)
        }
        getresult();
    }, [{dp,username}])
   const handlelogout=()=>{
    localStorage.clear();
    return navigate('/login');
   }
  return (
    <div className='sidebar-container'>
        <div className='top'>
            <img src={dp} alt="" />
            <h3>{username}</h3>
        </div>
        <hr style={{margin:'8px 20px 40px 20px',backgroundColor:'#3f3f3f',height:'0.5px',border:'none'}} />
        <div className='nav-list'>
            <a href="/">
                <i class="bi bi-grid"></i>
                <h3>Home</h3>
            </a>
            <a href="/history">
                <i class="bi bi-clock-history"></i>
                <h3>History</h3>
            </a>
            <a href="/stats">
                <i class="bi bi-pie-chart-fill"></i>
                <h3>Statistics</h3>
            </a>
            <a href="/settings">
                <i class="bi bi-gear"></i>
                <h3>Settings</h3>
            </a>
            <a style={{cursor:'pointer'}} onClick={handlelogout}>
                <i class="bi bi-box-arrow-right"></i>
                <h3>Logout</h3>
            </a>
        </div>
        
    </div>
  )
}

export default Sidebar