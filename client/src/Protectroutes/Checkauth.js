import React,{ useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
// function Check(props) {
//     const navigate=useNavigate();
//     const [islogged,setLogged]=useState(true);
//     useEffect(()=>{
//         // let token=localStorage.getItem('islogged');
//         // if(token==null){
//         //     setLogged(false);
//         // }
//         // else{
//         //     return navigate('/');
//         // }
//         if(islogged){
//             navigate('/')
//         }
//     })
//     if(!islogged){
//         return (
//             <props.component/>
//         )
//     }
// }
function Check({children}){
   const [state,setState]=useState(true);
    const navigate=useNavigate();
    const checklocal=()=>{
        let token=localStorage.getItem('islogged');
        if(token!=null){
            return navigate('/');
        }
        // else{
        //     return children;
        // }
   }
   useEffect(()=>{
    checklocal();
   },[state]);
   return children;
}
export default Check