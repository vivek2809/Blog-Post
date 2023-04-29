import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AuthContextProvider from '../Auth/Auth'
import Navbar from '../Part/Navbar'

const Layout = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar/>
        <ToastContainer autoClose={1000}/>
        <Outlet/>
      </AuthContextProvider>
    </>
  )
}

export default Layout
