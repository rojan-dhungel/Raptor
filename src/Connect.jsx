import React from 'react'
// import { Route } from 'react-router-dom'
import Login from './components/Login'
import { BrowserRouter,Link, Routes, Route } from 'react-router-dom'
import Home from './Home'
import AddtoCart from './components/AddtoCart'
import Privacy from './components/Privacy'
import Wholesale from './components/Wholesale'
import Aboutus from './components/Aboutus'
import Ethic from './components/Ethic'
import Contact from './components/Contact'
import Return from './components/Return'
import Size from './Size'
import Tshirts from './components/Tshirts'
import Jackets from './components/Jackets'
import Trousers from './components/Trousers'
import Hoodies from './components/Hoodies'
import Instagram from './components/Instagram'
import Facebook from './components/facebook'
import Newsletter from './components/Newsletter'
import Error from './Error'


function Connect() {
  return (
    <>
      <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/*' element={<Error/>}></Route>
            <Route path='/cart' element={<AddtoCart/>}></Route>
            <Route path='/privacy' element={< Privacy/>}></Route>
            <Route path='/wholesale' element={< Wholesale/>}></Route>
            <Route path='/tshirts' element={<Tshirts/>}></Route>
            <Route path='/hoodies' element={<Hoodies/>}></Route>
            <Route path='/trousers' element={<Trousers/>}></Route>
            <Route path='/jackets' element={<Jackets/>}></Route>
            <Route path = '/aboutus' element={<Aboutus/>}></Route>
            <Route path = '/sustainability' element={<Ethic/>}></Route>
            <Route path = '/contact' element={<Contact/>}></Route>
            <Route path = '/return' element={<Return/>}></Route>
            <Route path = '/size' element={<Size/>}></Route>
            <Route path='/instagram' element={<Instagram/>}></Route>
            <Route path='/facebook' element={<Facebook/>}></Route>
            <Route path='/newsletter' element={<Newsletter/>}></Route>
      </Routes>
    </>
  )
}

export default Connect
