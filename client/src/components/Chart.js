import React, { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import '../css/stats.css'

function Chart({ chartData }) {


    return (
        <div className='stats-container'>

            <PieChart
                data={chartData}

                label={
                    ({ dataEntry }) => {
                        if (dataEntry.value == 0) dataEntry.value = 'N/A'
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

export default Chart