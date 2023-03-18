import React from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert'
function Logout() {
    const navigate=useNavigate();
    try {
        localStorage.clear();
        return navigate('/login');
    } catch (error) {
        swal({
            title:'Opps there is some error',
            icon:'error'
        })
    }
  
}

export default Logout