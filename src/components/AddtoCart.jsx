import React from 'react'
import Home from '../Home'
import { Link } from 'react-router-dom'
function AddtoCart() {
  return (
    <>
      <div className="credential">
                <div className="head">Your Cart is Empty!</div>
                <div className="content">
                   <Link to='/'><input id="signin" class="btn" type='submit' value="Continue Shopping"></input></Link>    
                   <div className="tail">Have an Account?</div>    
                       
                </div>
                
            </div>
    </>
  )
}

export default AddtoCart
