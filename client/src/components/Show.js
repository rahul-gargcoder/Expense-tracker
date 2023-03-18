import React,{useEffect, useState} from 'react'
import '../css/show.css'
import bg from '../assets/bg1.svg'

function Show() {

    const [balance,setBalance] = useState(0);
    const [income,setIncome] = useState(0);
    const [expense,setExpense] = useState(0);

    const handleSubmit=()=>{
        let detail = document.getElementById('info').value;
        let amount = Number(document.getElementById('amount').value);
        
        console.log(amount);

        if(amount > 0 ){
            setIncome(income+amount);
            
        } 
        if(amount < 0 ){
            setExpense(expense-amount);
            
        }
    }

    useEffect(() => {
      
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