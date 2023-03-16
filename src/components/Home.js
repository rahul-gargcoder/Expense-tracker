import React from 'react'
import Show from './Show'
import '../css/home.css'
import Sidebar from './Sidebar'

function Home() {
  return (
    <div className='home-container'>
        <Sidebar></Sidebar>
        <Show></Show>
    </div>
  )
}

export default Home