import React, { useEffect, useState } from 'react'
import '../css/history.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';
import { DateTime } from 'luxon'
import swal from 'sweetalert'
function History() {
    function convertTime(data) {
        const s = DateTime.fromISO(data, { zone: 'Asia/Kolkata' }).toLocaleString(DateTime.DATETIME_MED);
        return s;
    }
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [data, setData] = useState([]);
    const [isChanged,setChanged]=useState(false);
    const deleteItem = async (id) => {
        const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}/deletetransaction`,{
            userid: localStorage.getItem('userdata'),
            tid:id
        })
        setChanged(!isChanged)

    }
    useEffect(() => {
        console.log(selectedDate)
        var result = [];
        var month = selectedDate.getMonth() + 1;
        let dated = selectedDate.getDate() + '-' + month + '-' + selectedDate.getFullYear();
        const axioscall = async () => {
            result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/gethistory`, {
                userid: localStorage.getItem('userdata'),
                date: selectedDate.getDate() + '-' + month + '-' + selectedDate.getFullYear(),
                newdate: selectedDate
            })
            result = result.data.data;
            console.log(result);
            result.map((data) => (
                data.createdAt = convertTime(data.createdAt)
            ))
            setData(result)
        }

        axioscall();



    }, [selectedDate,isChanged])

    return (
        <div className='hist-container'>
            <div className="heading">

                <h2>History </h2>

                <div className='datepicker'>
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        dateFormat='dd/MM/yyyy'
                        maxDate={new Date()}
                        showYearDropdown
                        scrollableYearDropdown
                        placeholderText='Select Date'
                        closeOnScroll={true}
                    />

                </div>

            </div>

            <div className='items'>
                {data.length==0?<><h1>No transactions</h1></>:data.map((data) => (
                    <div className='item' style={{color:data.type?'#4CAF50':'#FF5252 '}}>
                        <h3>{data.description}</h3>
                        {data.isAdded?<p>✅</p>:<p>❌</p>}
                        <h2> Rs <span>{data.amount * 1}</span></h2>
                        <h4>{data.createdAt}</h4>
                        <i class="bi bi-trash3-fill" value={data._id} onClick={()=>deleteItem(data._id)}></i>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default History