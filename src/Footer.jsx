import React from 'react'
import Connect from './Connect';
import { BrowserRouter,Link,Route, Routes } from 'react-router-dom';


export default function Footer() {
    return (
        <>
            <footer>
                <div className="col-md-12">
                    <div className="area">
                        <div className="row">
                            <div className="col ">
                                <h3>Customer Care</h3>
                                <Link to='/return'>
                                <li><a href="#">Return Policy</a></li>
                                </Link>
                                <Link to='/contact'>
                                <li><a href="#">Contact Us</a></li>
                                </Link>
                                <Link to='/size'>
                                <li> <a href="#">Size Guide</a></li>
                                </Link>
                                <Link to='/wholesale' >
                                <li> <a href="#">Wholesale</a></li>
                                </Link>
                                <Link to='/privacy' >
                                <li> <a href="#">Legal & Privacy</a></li>
                                </Link>

                            </div>
                            <div className="col">
                                <h3>Our World</h3>
                            <Link to ='/aboutus'>
                                <li> <a href="#">About Us</a></li>
                                </Link>
                                <Link to ='/sustainability'>
                                <li> <a href="#">Sustainability</a></li>
                                </Link>
                                

                            </div>
                            <div className="col">
                                <h3>Follow</h3>
                                <Link to = '/instagram'>
                                <li href="#">Instagram</li>
                                </Link>
                                <Link to = './facebook'>
                                <li> <a href="#">Facebook</a></li>
                                </Link>
                                <Link to = './newsletter'>
                                <li> <a href="#">Newsletter</a></li>
                                </Link>
                                

                            </div>
                        </div>

                        <p>&copy; RAPTOR 2023</p>
                    </div>
                </div>
        
        </footer >
        
        </>
    )
}
