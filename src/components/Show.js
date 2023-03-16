import React from 'react'
import '../css/show.css'

function Show() {
  return (
    <div className='show-container'>
        <h2>Expense Tracker</h2> 
        <div className="curr-amount">
            <h3>Current Balance</h3>
            <h2> 30 Rs</h2>
            <div className='both'>
                <div className='income'>
                    <h3>Income</h3>
                    <h2>50 Rs</h2>
                </div>
                <div className='expense'>
                    <h3>Expenses</h3>
                    <h2>20 Rs</h2>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Show