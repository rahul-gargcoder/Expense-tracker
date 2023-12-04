import axios from 'axios'
import swal from 'sweetalert'
import {DateTime} from 'luxon'

function convertTime(data) {
    const s = DateTime.fromISO(data, { zone: 'Asia/Kolkata' }).toLocaleString(DateTime.DATETIME_MED);
    return s;
}
export const transactions=async()=>{
    const userid=localStorage.getItem('userdata');
    try {
        const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}/transactions`,{
            userid
        })
        const data=response.data.data;
        data.map((data)=>(
            data.createdAt=convertTime(data.createdAt)
        ))
        // console.log(data)
        return data;
    } catch (error) {
        swal({
            title:error.message,
            icon:'error'
        })
        return [];
    }
}