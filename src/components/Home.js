import React from 'react'
import Show from './Show'
import '../css/home.css'
import Sidebar from './Sidebar'
import Bg from './Bg'

function Home() {
  return (
    <div className='home-container'>
        <Sidebar></Sidebar>
        <Show></Show>
        {/* <Bg></Bg> */}

    </div>
  )
}

export default Home