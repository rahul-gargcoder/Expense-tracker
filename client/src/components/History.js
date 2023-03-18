import React, { useEffect, useState } from 'react'
import '../css/history.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';
function History() {

    const [selectedDate, setSelectedDate] = useState(new Date());


    useEffect(() => {
        var result=[];
        var month=selectedDate.getMonth()+1;
        let dated=selectedDate.getDate()+'-'+month+'-'+selectedDate.getFullYear();
        const axioscall=async ()=>{
            result=await axios.post('http://localhost:5000/gethistory',{
                userid:localStorage.getItem('userdata'),
                date:selectedDate.getDate()+'-'+month+'-'+selectedDate.getFullYear()
            })
            result=result.data.data;
            console.log(result);
        let container = document.getElementsByClassName('items')[0];
        container.innerHTML=''
        if(result==='no records'){
            container.innerHTML +=`
            <div class='item'>
            <h2>No Transactions</h2>
            </div>`
            return;
        }
        result.reverse();
        for(let i =0 ; i<result.length;i++){

            container.innerHTML +=`
            <div class='item'>
                <h3>${result[i].tname}</h3>
                <h2> Rs <span>${result[i].amount*1}</span></h2>
                <h4>${dated}</h4>
            </div>
        `
        }

        

        let itemArr = Array.from(document.getElementsByClassName('item'));

            itemArr.forEach((ele) => {
    
                let val = ele.getElementsByTagName('span')[0];
                if (val.innerHTML * 1 < 0) {
                    ele.style.color = 'var(--col3)'
                }
                if (val.innerHTML * 1 > 0) {
                    ele.style.color = 'var(--col2)'
                }
            })
        }

        axioscall();
        
       

    }, [selectedDate])

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
                <div className='item'>
                    <h3>Name of transaction</h3>
                    <h2> Rs <span>-200</span></h2>
                    <h4>jan 12 2021</h4>
                </div>
                
            </div>
        </div>
    )
}

export default History