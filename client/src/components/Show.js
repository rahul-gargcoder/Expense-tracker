import React,{useEffect, useState} from 'react'
import '../css/show.css'
import bg from '../assets/bg1.svg'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
function Show() {

    const [balance,setBalance] = useState(0);
    const [income,setIncome] = useState(0);
    const [expense,setExpense] = useState(0);
    // amount=0
    // if()
    // console.log(document.getElementById('amount'));
    // console.log(document.getElementById('amount').value);
    var am=-1;
    var flag=false;
    var de='';
    const navigate=useNavigate();
    const handleSubmit=()=>{
        if(!localStorage.getItem('userdata')){
            swal({
                title: 'Something went wrong',
                text:'Please login again',
                icon: "error",
            });
            localStorage.clear();
            return navigate('/login');
        }
        var amount = Number(document.getElementById('amount').value);
        var detail = document.getElementById('info').value;
        console.log(amount);
        if(detail===''){
            return swal({
                title:'Enter the name of Transaction❗❗❗',
                icon:'info'
            })
        }
        if(amount >=0 ){
            am=amount;
            flag=true;
            setIncome(income+amount);
            de=detail;
        } 
        if(amount < 0 ){
            am=amount;
            flag=false;
            setExpense(expense-amount);
            de=detail;
        }
        if(am===0){
            return swal({
                title:'Enter valid amount of transaction❗❗❗',
                icon:'info'
            })
        }
        const axioscall=async ()=>{
            let alldate=new Date();
            let month=alldate.getMonth()+1;
            let date=alldate.getDate()+'-'+month+'-'+alldate.getFullYear();
            await axios.post('http://localhost:5000/addtransaction',{
                date:date,
                amount:am,
                flag:flag,
                detail:de,
                userdata:localStorage.getItem('userdata')
            }).catch((err)=>{
                swal({
                    title:'getting error from server',
                    icon:'error'
                })
            })
            if(date){
                swal({
                    title:'Transaction added successfully🎉🎉🎉',
                    icon:'success'
                })
            }
        }
        axioscall();
    }

    useEffect(() => {

        const findbalance=async ()=>{
            var result=await axios.post('http://localhost:5000/getdata',{
                id:localStorage.getItem('userdata')
            }).catch((err)=>{
                swal({
                    title:'getting error from server',
                    icon:'error'
                })
            })
            result=result.data.data
            if(result==='no records'){
                return;
            }
            let inc=0;
            let exp=0;
            let bal=0;
            for(let i=0;i<result.length;i++){
                for(let j=0;j<result[i].list.length;j++){
                    let data=result[i].list[j].amount;
                    if(data<0){
                        exp+=data
                    }
                    else{
                        inc+=data
                    }
                }
            }
            setIncome(inc);
            setExpense(-1*exp);
        }
        findbalance()
        setBalance(income-expense);
    }, [{
        income,expense
    }])
    

    return (
        <div className='big'>
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
                <h3 style={{marginBottom:'2vh',borderBottom:'1px solid white'}}>Add New Transaction</h3>
                <div className='add-text'>
                    <h5 style={{marginBottom:'-8px'}}>Add Transaction Details</h5>
                     <input type="text" id='info' placeholder='Add Details' required/>
                </div>
                <div className='add-amount'>
                <h5 style={{marginBottom:'-8px'}}>Add Amount <br /> (start amount with '-' sign for expense, e.g -50 for Rs 50 expense)</h5>
                    <input type="number" id='amount' placeholder='Enter Value' required/>  
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