import React from 'react';
import Connect from './Connect';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Header() {

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      
      <nav className='navbar navbar-expand-lg' id='navstick'>
        <div className="container-fluid" >

          <Link to='/' className="navbar-brand" id='logo'>
            Raptor
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavLightDropdown" aria-controls="navbarNavLightDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{ color: 'white' }} />
          </button>



        </div>
        <div className="collapse navbar-collapse" id="navbarNavLightDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id='navbarDropdownshop'>
                Shop
              </button>
              <ul className="dropdown-menu dropdown-menu-light">
                <Link to='/tshirts' id='linkit'>
                  <li className="dropdown-item" >T-Shirts</li>
                </Link>
                <Link to='/trousers' id='linkit'>
                  <li className="dropdown-item">Trousers</li>
                </Link>
                <Link to='/hoodies' id='linkit'>
                  <li className="dropdown-item" >Hoodies & SweatShirts</li>
                </Link>
                <Link to='/jackets' id='linkit'>
                  <li className="dropdown-item" >Jackets</li>
                </Link>
              </ul>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavLightDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id='navbarDropdownworld'>
                Our World
              </button>
              <ul className="dropdown-menu dropdown-menu-light">
                <Link to='/aboutus' id='linkit'>
                  <li className="dropdown-item" >About Us</li>
                </Link>
                <Link to='/sustainability' id='linkit'>
                  <li className="dropdown-item">Ethics Sustainability </li>
                </Link>
                <Link to='/contact' id='linkit'>
                  <li className="dropdown-item" >Contact Us </li>
                </Link>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <nav>
            <div className="container-fluid" >
              <form className="d-flex" role="search">
                <button type="button" class="btn btn-primary" id='btn'><i class="fa-solid fa-magnifying-glass" ></i></button>
                <Link to='/login' class="btn btn-primary" id='btn'><i class="fa-regular fa-user" role='button'></i></Link>
                <Link to='/cart' class="btn btn-primary" id='btn'><i class="fa-solid fa-cart-shopping"></i></Link>
              </form>
            </div>
          </nav>
        </div>


      </nav>




      <Connect />
    </>
  );
}

export default Header;
