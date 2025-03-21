import React from 'react'
import './App.css'
import router from './config/router'
import { RouterProvider } from 'react-router-dom'


const App = () => {
  return <RouterProvider router={router} future={router.future} />
}

export default App