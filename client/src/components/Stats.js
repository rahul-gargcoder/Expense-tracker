import React,{useState} from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import '../css/stats.css'

function Stats() {
    

    return (
        <div className='stats-container'>

            <PieChart
                data={[
                    { title: 'Monday', value: 100, color: '#E38627' },
                    { title: 'Tuesday', value: 1005, color: '#C13C37' },
                    { title: 'Wednesday', value: 2000, color: '#6A2135' },
                    { title: 'Thursday', value: 1000, color: '#E38627' },
                    { title: 'Friday', value: 1500, color: '#C13C37' },
                    { title: 'Saturday', value: 2100, color: '#6A2135' },
                    { title: 'Sunday', value: 1220, color: '#ff0135' },
                ]}
                
                label={
                    ({ dataEntry }) => {
                        if(dataEntry.value == 0) dataEntry.value = 'N/A'
                        return dataEntry.title + "  " + dataEntry.value;
                    }
                }

                

                segmentsShift={1}
                

                labelStyle={{
                    fontSize: '20%',
                    fontFamily: 'poppins',
                    fill: 'white'
                }}

                
                radius={25}
                labelPosition={105}



            />



        </div>

    )
}

export default Stats