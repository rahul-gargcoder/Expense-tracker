import React,{useEffect} from 'react'
import '../css/history.css'

function History() {

   useEffect(() => {
     
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
    
   }, [])
   

    

    
    


  return (
    <div className='hist-container'>
        <h2 className="heading" >History</h2>
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