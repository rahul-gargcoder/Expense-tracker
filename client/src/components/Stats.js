import React, { useState, useEffect } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import '../css/stats.css'
import DatePicker from 'react-datepicker'
import axios from 'axios'
import swal from 'sweetalert';
function Stats() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [notaddedincome, setNotAddedIncome] = useState(0);
    const [notaddedexpense, setNotAddedExpense] = useState(0);
    const [data, setData] = useState([]);
    useEffect(() => {
        const axioscall = async () => {
            var result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/gethistory`, {
                userid: localStorage.getItem('userdata'),
                newdate: selectedDate
            })
            result = result.data.data;
            setData(result)
            if (result.length > 0) {
                console.log(result)
                let inc = 0;
                let exp = 0;
                let nai = 0;
                let nae = 0;
                for (let i = 0; i < result.length; i++) {
                    if (!result[i].isAdded) {
                        if (result[i].type) {
                            nai += result[i].amount;
                        }
                        else {
                            nae += result[i].amount
                        }
                    }
                    else {
                        if (result[i].amount < 0) {
                            exp += result[i].amount;
                        }
                        else {
                            inc += result[i].amount;
                        }
                    }

                }
                setIncome(inc);
                setExpense(exp);
                setNotAddedIncome(nai)
                setNotAddedExpense(nae)
            }
        }

        axioscall();



    }, [selectedDate])








    let chartData = [
        { title: 'Income', value: income, color: 'var(--col2)' },
        { title: 'Expense', value: -1 * expense, color: 'var(--col3)' },
        

    ]
    let chart2=[
        { title: 'Not Added Income', value: notaddedincome, color: 'yellow' },
        { title: 'Not Added Expense', value: notaddedexpense, color: 'purple' },
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
            {data.length == 0 ? <><h1>No Transaction❗❗❗</h1></> :
                <>
                    <br />
                    <h1 style={{ color: 'yellow' }}>Statistics of your Account</h1>
                    <br />
                    <h2 style={{ textAlign: 'center' }}>Total Amount : {income + expense}</h2>
                    <PieChart
                        data={chartData}

                        label={
                            ({ dataEntry }) => {
                                if (dataEntry.value === 0) { dataEntry.value = ""; dataEntry.title = "" }
                                return `${dataEntry.title} ${dataEntry.value}`;
                            }
                        }



                        segmentsShift={1}


                        labelStyle={{
                            fontSize: '20%',
                            fontFamily: 'cursive',
                            fill: '#008080'
                        }}

                        startAngle={10}


                        radius={30}
                        labelPosition={110}
                    />
                    <br/>
  
                   { (notaddedexpense>0||notaddedincome>0)&&<PieChart
                        data={chart2}

                        label={
                            ({ dataEntry }) => {
                                if (dataEntry.value === 0) { dataEntry.value = ""; dataEntry.title = "" ;return}
                                return `${dataEntry.title} ${dataEntry.value}`;
                            }
                        }



                        segmentsShift={1}


                        labelStyle={{
                            fontSize: '20%',
                            fontFamily: 'cursive',
                            fill: '#008080'
                        }}

                        startAngle={10}


                        radius={30}
                        labelPosition={110}
                    />}
                </>

            }



        </div>

    )
}

export default Stats