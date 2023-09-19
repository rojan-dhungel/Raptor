import React from 'react'
import { BrowserRouter } from 'react-router-dom'
export default function Home() {
    return (
        <>
            <div className="container-primary">
                <img src="https://img.freepik.com/free-photo/woman-wearing-sunglasses-side-view_23-2149462152.jpg?w=900&t=st=1694676923~exp=1694677523~hmac=32cbb603d3b76cccfecf9a5c1dbcbe96cfa92daf3af826f9095b49ac40412139" alt='..loading'></img>
                <img src='https://i.pinimg.com/564x/9e/96/ce/9e96cef09497343a40b32f63868cc409.jpg' alt='... loading'></img>
            </div>
            <div className="container-secondary">
                <img src='https://img.freepik.com/free-photo/young-beautiful-man-airport-is-waiting-flight_146671-18692.jpg?w=2000&t=st=1694657905~exp=1694658505~hmac=5d1156c73e330a270a86bbb15cf0e19ca4e170a655988a3fcb06c2a958d11378' alt='..loading'></img>
            </div>
            <div className="container text-center md-12">
                <div className="row">
                    <div className="col" id='icon'>
                        <i class="fa-solid fa-earth-asia"></i><br></br>
                        <p>Join a larger cause</p>
                    </div>
                    <div className="col" id='icon'>
                        <i class="fas fa-leaf"></i><br></br>
                        <p>Embrace Eco-Friendly Materials and Packaging</p>
                    </div>
                    <div className="col" id='icon'>
                        <i class="fa-solid fa-truck"></i><br></br>
                        <p>Swift Nationwide Delivery at No Extra Cost</p>
                    </div>
                    <div className="col" id='icon'>
                        <i class="fa-solid fa-credit-card"></i><br></br>
                        <p>Shop Now, Pay Later with E-Sewa or Fonepay</p>
                    </div>
                    <div className="container text-center" id='attherate'>
                       <i class="fa-brands fa-instagram"></i> @raptor
                    </div>
                </div>

            </div>

            {/* next section */}

            <div className="container" id="nsec">
                <div className="row row-cols-auto">
                    <div className="col-md-3" id='image'>
                        <img src="https://i.pinimg.com/736x/82/8c/ac/828cac37be219116cbc1696279d032b9.jpg" alt="..loading" />
                    </div>
                    <div className="col-md-3" id='image'>
                        <img src="https://i.pinimg.com/564x/e2/f2/9e/e2f29e5357218178330f13764833c246.jpg" alt="..loading" />
                    </div>
                    <div className="col-md-3" id='image'>
                        <img src="https://i.pinimg.com/564x/51/39/2f/51392f1b029c4b689b09d57b6ac15618.jpg" alt="..loading" />
                    </div>
                    <div className="col-md-3" id='image'>
                        <img src="https://i.pinimg.com/564x/15/b0/e6/15b0e61503ba156eddecd39982830c4a.jpg" alt="..loading" />
                    </div>
                </div>
            </div>
            <div className="container text-center" id='third'>
                <p>Sign Up For 15% Off Your First Order</p>
            </div>

            {/* fourth */}

            <div className="container text-center" id='fourth'>
                <input type="email" placeholder="Email"  id='input-container'/>
                <button type="submit" className="btn">Subscribe</button>
            </div>


        </>
    )
}
