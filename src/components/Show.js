import React from 'react'
import '../css/show.css'

function Show() {


    

    return (
        <div className='show-container'>
            <h2 className='heading'>Expense Tracker</h2>
            <div className="curr-amount">
                <h2>CURRENT BALANCE</h2>
                <h1>Rs 400</h1>
            </div>
            <div className='both'>
                <div className="income">
                    <h3>INCOME</h3>
                    <h1>Rs 600</h1>
                </div>
                <div className="expense">
                    <h3>EXPENSES</h3>
                    <h1>Rs 200</h1>
                </div>
            </div>

            <div className="add">
                <h3 style={{marginBottom:'2vh',borderBottom:'1px solid white'}}>Add New Transaction</h3>
                <div className='add-text'>
                    <h5 style={{marginBottom:'-8px'}}>Add Transaction Details</h5>
                     <input type="text" id='info' placeholder='Add Details'/>
                </div>
                <div className='add-amount'>
                <h5 style={{marginBottom:'-8px'}}>Add Amount <br /> (start amount with '-' sign for expense, e.g -50 for Rs 50 expense)</h5>
                    <input type="number" id='amount' placeholder='Enter Value'/>  
                </div>
                <button id='add-it'>
                    Add Transaction
                </button>
            </div>

        </div>
    )
}

export default Show