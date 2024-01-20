import React from 'react'
import { BrowserRouter,Router,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/about'
import Signup from './pages/Signup'
import SignIn from './pages/SignIn'

import Header from './component/header'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/home'element={<Home/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<SignIn/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}
