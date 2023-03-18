import React,{useEffect,useState} from 'react'
import '../css/history.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function History() {

    const [selectedDate,setSelectedDate] = useState(new Date());
   

   useEffect(() => {
     console.log(selectedDate.getFullYear())
    let itemArr = Array.from(document.getElementsByClassName('item'));
        
    itemArr.forEach((ele) => {
        
        let val = ele.getElementsByTagName('span')[0];
        if(val.innerHTML * 1<0){
            ele.style.color = 'var(--col3)'
        }
        if(val.innerHTML * 1>0){
            ele.style.color = 'var(--col2)'
        }
    })
    
   }, [selectedDate])
   

    

    
    


  return (
    <div className='hist-container'>
    <div className="heading">

    <h2  >History 
        
        
        </h2>

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
            <div className='item'>
                <h3>Name of transaction is longer here</h3>
                <h2> Rs <span>200</span></h2>
                <h4>jan 12 2021</h4>
            </div>
            <div className='item'>
                <h3>Name of Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur. transaction is longer here</h3>
                <h2> Rs <span>2000000</span></h2>
                <h4>jan 12 2021</h4>
            </div>
            <div className='item'>
                <h3>Name of Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur. transaction is longer here</h3>
                <h2> Rs <span>2000000</span></h2>
                <h4>jan 12 2021</h4>
            </div>
            <div className='item'>
                <h3>Name of Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur. transaction is longer here</h3>
                <h2> Rs <span>2000000</span></h2>
                <h4>jan 12 2021</h4>
            </div>
            <div className='item'>
                <h3>Name of Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur. transaction is longer here</h3>
                <h2> Rs <span>2000000</span></h2>
                <h4>jan 12 2021</h4>
            </div>
            <div className='item'>
                <h3>Name of Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur. transaction is longer here</h3>
                <h2> Rs <span>2000000</span></h2>
                <h4>jan 12 2021</h4>
            </div>
            <div className='item'>
                <h3>Name of Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur. transaction is longer here</h3>
                <h2> Rs <span>2000000</span></h2>
                <h4>jan 12 2021</h4>
            </div>
            <div className='item'>
                <h3>Name of Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur. transaction is longer here</h3>
                <h2> Rs <span>2000000</span></h2>
                <h4>jan 12 2021</h4>
            </div>
            <div className='item'>
                <h3>Name of Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur. transaction is longer here</h3>
                <h2> Rs <span>2000000</span></h2>
                <h4>jan 12 2021</h4>
            </div>
            <div className='item'>
                <h3>Name of Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur. transaction is longer here</h3>
                <h2> Rs <span>2000000</span></h2>
                <h4>jan 12 2021</h4>
            </div>
            <div className='item'>
                <h3>Name of Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur. transaction is longer here</h3>
                <h2> Rs <span>2000000</span></h2>
                <h4>jan 12 2021</h4>
            </div>
            <div className='item'>
                <h3>Name of Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur. transaction is longer here</h3>
                <h2> Rs <span>2000000</span></h2>
                <h4>jan 12 2021</h4>
            </div>
        </div>
    </div>
  )
}

export default History