import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import css
import {Route, Routes} from 'react-router-dom'
import  Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Registration from './components/Registration'
import Contact from './components/Contact'
import Login from './components/Login'
import Logout from './components/Logout'
import Error from './components/Errorpage'
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/Logout' element={<Logout />}/>

        <Route path='*' element={<Error />}/>
      </Routes>

    </>
  )
}
