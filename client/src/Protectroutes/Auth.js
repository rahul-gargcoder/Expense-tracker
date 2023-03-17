import React,{useState,useEffect} from 'react'
import { Cookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
function Auth(props) {
    const [islogged,setLogged]=useState(true);
    const navigate=useNavigate();
    useEffect(() => {
      if(!islogged){
        navigate('/login')
      }
    })
if(islogged){
    return (
        <props.component/>
        )
}

}
export default Auth