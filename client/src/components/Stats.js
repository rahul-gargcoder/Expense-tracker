import React, { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import Chart from './Chart';
import '../css/stats.css'

function Stats() {

    let chartData = [
        { title: 'Income', value: 1000, color: 'var(--col2)' },
        { title: 'Expense', value: 1205, color: 'var(--col3)' },

    ]

    return (
        <div className='stats-container'>

            <PieChart
                data={chartData}

                label={
                    ({ dataEntry }) => {
                        if (dataEntry.value == 0) dataEntry.value = 'N/A'
                        return `${dataEntry.title} ${dataEntry.value}`;
                    }
                }



                segmentsShift={1}


                labelStyle={{
                    fontSize: '20%',
                    fontFamily: 'poppins',
                    fill: 'white'
                }}

                startAngle={90}


                radius={25}
                labelPosition={105}
            />


        </div>

    )
}

export default Stats