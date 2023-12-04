import React, { useEffect, useState } from 'react'
import '../css/show.css'
import bg from '../assets/bg1.svg'
import axios from 'axios'
import swal from 'sweetalert'
import DatePicker from 'react-datepicker'
import { useNavigate } from 'react-router-dom'
import Spinner from './loader'
function Show() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [isChanged,setChange]=useState(false);

    const [isSpinner,setSpinner]=useState(false);
    var am = -1;
    var flag = false;
    var de = '';
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (!localStorage.getItem('userdata')) {
            swal({
                title: 'Something went wrong',
                text: 'Please login again',
                icon: "error",
            });
            localStorage.clear();
            return navigate('/login');
        }
        var amount = Number(document.getElementById('amount').value);
        var detail = document.getElementById('info').value;
        console.log(amount);
        if (detail === '') {
            return swal({
                title: 'Enter the name of Transaction❗❗❗',
                icon: 'info'
            })
        }
        if (amount >= 0) {
            am = amount;
            flag = true;
            setIncome(income + amount);
            de = detail;
        }
        if (amount < 0) {
            am = amount;
            flag = false;
            setExpense(expense - amount);
            de = detail;
        }
        if (am === 0) {
            return swal({
                title: 'Enter valid amount of transaction❗❗❗',
                icon: 'info'
            })
        }
        const axioscall = async () => {
            let alldate = new Date();
            let month = alldate.getMonth() + 1;
            let date = alldate.getDate() + '-' + month + '-' + alldate.getFullYear();
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/addtransaction`, {
                date: selectedDate,
                amount: am,
                flag: flag,
                detail: de,
                userdata: localStorage.getItem('userdata'),
                addtoBalance:isChecked
            }).catch((err) => {
                swal({
                    title: 'getting error from server',
                    icon: 'error'
                })
            })
            if (date) {
                swal({
                    title: 'Transaction added successfully🎉🎉🎉',
                    icon: 'success'
                })
            }
        }
        axioscall();
        setChange(!isChanged)
    }

    useEffect(() => {

        const findbalance = async () => {
            setSpinner(true)
            var result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/getdata`, {
                id: localStorage.getItem('userdata')
            }).catch((err) => {
                swal({
                    title: 'getting error from server',
                    icon: 'error'
                })
            })
            setSpinner(false)
            setIncome(result.data.finalCredited);
            setExpense(result.data.finalDebited);
            setBalance(result.data.finalTotal);
        }
        findbalance()
    }, [isChanged])

    const [isChecked, setChecked] = useState(true);

    const checkboxStyle = {
        marginRight: '8px', // Example: Set some margin to the right
        width: '20px',     // Increase the width
        height: '20px',    // Increase the height
        backgroundColor: isChecked ? '#66bb6a' : '#fff', // Change background color when checked
        border: '1px solid #ccc',
        borderRadius: '50%',
        cursor: 'pointer',  // Add a pointer cursor for interactivity
    };
    return (
           isSpinner?<Spinner/>:<div className='big'>
            <div className='show-container'>
                <h2 className='heading'>Expense Tracker</h2>
                <div className="curr-amount">
                    <h2>CURRENT BALANCE</h2>
                    <h1>Rs {balance}</h1>
                </div>
                <div className='both'>
                    <div className="income">
                        <h3>INCOME</h3>
                        <h1>Rs {income}</h1>
                    </div>
                    <div className="expense">
                        <h3>EXPENSES</h3>
                        <h1>Rs {expense}</h1>
                    </div>
                </div>

                <div className="add">
                    <h3 style={{ marginBottom: '2vh', borderBottom: '1px solid white' }}>Add New Transaction</h3>
                    <div className='add-text'>
                        <h5 style={{ marginBottom: '-8px' }}>Add Transaction Details</h5>
                        <input type="text" id='info' placeholder='Add Details' required />
                    </div>
                    <div className='add-amount'>
                        <h5 style={{ marginBottom: '-8px' }}>Add Amount <br /> (start amount with '-' sign for expense, e.g -50 for Rs 50 expense)</h5>
                        <input type="number" id='amount' placeholder='Enter Value' required />
                    </div>
                    <div className='datepicker'>
                        <h4>Pick the date of Expense/Income</h4>
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
                    <div style={{ margin: '20px' }}>
                        {/* Checkbox component with inline styles */}
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => setChecked(!isChecked)}
                            style={checkboxStyle}
                        />

                        {/* Label for the checkbox */}
                        <label style={{ fontSize: '20px' }}>Add to Balance</label>
                    </div>
                    <button id='add-it' onClick={handleSubmit}>
                        Add Transaction
                    </button>
                </div>

            </div>
        </div>
        
        
    )
}

export default Show