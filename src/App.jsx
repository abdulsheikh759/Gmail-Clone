import React from 'react'
import Header from './components/Navbar/Header'
import MenuSideBar from './components/MenuSideBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Inbox from './components/Inbox';
import Mail from './components/Mail';
import SendEmail from './components/SendEmail/SendEmail';
import Login from './components/Login';
import { useSelector } from 'react-redux';

const router = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: '/',
      element: <Inbox />
    },
    {
      path: '/mail/:id',
      element: <Mail />
    }
  ]
}])

const App = () => {
  const {user} = useSelector(store=>store.appSlice)
  return (
    <div className='bg-[#F8FAFD] h-screen w-screen overflow-hidden'>
      {/* Navbar component */}
      {
        !user ? (<Login />) : (
          <>
            <Header />
            <RouterProvider router={router} />
            <div className='absolute w-[30%] bottom-0 right-20 z-10'>
              <SendEmail />
            </div>
          </>
        )
      }

    </div>
  )
}

export default App