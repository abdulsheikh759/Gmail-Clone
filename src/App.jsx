import React from 'react'
import Header from './components/Navbar/Header'
import MenuSideBar from './components/MenuSideBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Inbox from './components/Inbox';
import Mail from './components/Mail';

const router = createBrowserRouter([{
  path: "/",
  element:<Body/>,
  children:[
    {
      path:'/',
      element:<Inbox/>
    },
    {
      path:'/mail/:id',
      element:<Mail/>
    }
  ]
}])

const App = () => {
  return (
     <div className='bg-[#F8FAFD] h-screen w-screen overflow-hidden'>
      {/* Navbar component */}
      <Header/>
       
        <RouterProvider router={router}/>   
     </div>
  )
}

export default App