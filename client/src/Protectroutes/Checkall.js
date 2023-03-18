import React,{useState,useEffect} from 'react'
import { Cookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
function Auth({children}) {
    const [islogged,setLogged]=useState(false);
    const navigate=useNavigate();
    const checklogin=()=>{
      let token=localStorage.getItem('islogged');
      let userdetail=localStorage.getItem('userdata');
      if(!token){
        return navigate('/login')
      }
    }
    useEffect(() => {
      checklogin()
    })
return children

}
export default Auth