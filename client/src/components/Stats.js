import React, { useState,useEffect } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import '../css/stats.css'
import DatePicker from 'react-datepicker'
import axios from 'axios'
import swal from 'sweetalert';
function Stats() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [income,setIncome]=useState(1);
    const [expense,setExpense]=useState(-1);

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
            if(result==='no records'){
                return swal({
                    title:'No records',
                    icon:'info'
                })
            }
            console.log(result)
            let inc=0;
            let exp=0;
            for(let i=0;i<result.length;i++){
                if(result[i].amount<0){
                    exp+=result[i].amount;
                }
                else{
                    inc+=result[i].amount;
                }
            }
            setIncome(inc);
            setExpense(exp);
        }

        axioscall();
        
       

    }, [selectedDate])








    let chartData = [
        { title: 'Income', value: income, color: 'var(--col2)' },
        { title: 'Expense', value: -1*expense, color: 'var(--col3)' },

    ]

    return (
        <div className='stats-container'>
            <h2>Select date:</h2>
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
            <PieChart
                data={chartData}

                label={
                    ({ dataEntry }) => {
                        if (dataEntry.value === 0) dataEntry.value = 'N/A'
                        return `${dataEntry.title} ${dataEntry.value}`;
                    }
                }



                segmentsShift={1}


                labelStyle={{
                    fontSize: '20%',
                    fontFamily: 'Sono',
                    fill: 'white'
                }}

                startAngle={90}


                radius={25}
                labelPosition={105}
            />


        </div>

    )
}

export default Stats