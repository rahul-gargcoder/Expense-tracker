import React, { useState, useEffect } from 'react'
import { transactions } from './api';
import '../css/history.css'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import Spinner from './loader'
function Transactions() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [isChanged, setChanged] = useState(false);
  const [isopen, setOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(true);
  const [popupdata,setpopupdata]=useState({});
  const [isSpinner,setSpinner]=useState(false);
  const closePopup = () => setPopupOpen(false);

  const editTransaction=(data)=>{
    // e.preventDefault();
    console.log(data)
  }
  useEffect(() => {
    const datafinder = async () => {
      setSpinner(true)
      const response = await transactions();
      setSpinner(false)
      setData(response)
    }
    datafinder();
  }, [isChanged]);
  const deleteItem = async (id) => {
    setSpinner(true)
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/deletetransaction`, {
      userid: localStorage.getItem('userdata'),
      tid: id
    })
    setSpinner(false)
    setChanged(!isChanged)

  }
  const openPopup = (data) => {
    setpopupdata(data)
    setPopupOpen(true)
    
  }


  const popupStyles = {
    color: 'black',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    borderRadius: '8px',
    zIndex: '1000',
    maxWidth: '100%',
    width: '50%',
    textAlign: 'center',
    height: '50%'
  };

  const overlayStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '999',
    display: isPopupOpen ? 'block' : 'none',
  };
  const popupButton = {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '10px',
    fontSize: '20px'
  }

const inputfield={
  height:'20px',
  // width:'auto',
  minWidth:'200px',
  borderRadius:'30px',
  border:'none'
}
  return (
    isSpinner?<Spinner/>:
    <div className='hist-container'>
      <div className="heading">

        <h2>All Transactions </h2>
      </div>

      <div className='items'>
        {data.length == 0 ? <><h1>No transactions</h1></> : data.map((data) => (
          <div className='item' key={data._id} style={{ color: data.type ? 'darkgreen' : 'darkred ', backgroundColor: data.isAdded ? 'white' : '#92a8d1' }}>
            <h3>{data.description}</h3>
            {data.isAdded ? <p>Online</p> : <p>Cash</p>}
            <h2> Rs <span>{data.amount * 1}</span></h2>
            <h4>{data.createdAt}</h4>
            <i class="bi bi-pencil-square" value={data._id} onClick={() => openPopup(data)}></i>
            <i class="bi bi-trash3-fill" value={data._id} onClick={() => deleteItem(data._id)}></i>
          </div>
        ))}
      </div>
      {/* {isPopupOpen && (
        <div>
          <div style={popupStyles}>
            <h2>Description</h2>
            <input
              type='text'
              value={popupdata.description}
              onChange={(e) => {
                setpopupdata({ ...popupdata, description: e.target.value });
              }}
              style={{inputfield}}
              placeholder='Description'
            />
            <h2>Amount(negative for expense and postive for income)</h2>
            <input
              type='number'
              value={popupdata.amount}
              onChange={(e) => {
                setpopupdata({ ...popupdata, amount: e.target.value });
              }}
              style={{inputfield}}
              placeholder='Amount'
            />
            <br/>
            <h2>Online</h2>
              <input
                type='checkbox'
                checked={popupdata.isAdded}
                onChange={(e) => {
                  setpopupdata({ ...popupdata, isAdded: e.target.checked });
                }}
              />
            <h2>Date</h2>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => {setpopupdata({ ...popupdata, createdAt:selectedDate });setSelectedDate(date)}}
              dateFormat='dd/MM/yyyy'
              maxDate={new Date()}
              showYearDropdown
              scrollableYearDropdown
              placeholderText='Select Date'
              closeOnScroll={true}
            />
            <br/>
            <br/>
            <button onClick={()=>editTransaction(popupdata)} style={popupButton}>
              Edit
            </button>
            <br/>
            <br/>
            <button onClick={closePopup} style={popupButton}>
              Close
            </button>
          </div>
        </div>
      )} */}
    </div>

  )
}

export default Transactions