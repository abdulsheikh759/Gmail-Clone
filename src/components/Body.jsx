import React from 'react'
import MenuSideBar from './MenuSideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
        <MenuSideBar/>
        <Outlet/>
    </div>
  )
}

export default Body