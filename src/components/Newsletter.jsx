import React from 'react'

function Newsletter() {
    return (
        <>
            <div className=" container text-center" id='news'>
                <h2>NewsLetter</h2>
                <br></br>
                <p>Sign up to our newsletter to hear about our sales, events and news <br></br>and 10% off your first order!</p>
                <form>
                    <div class="form-group2">

                        <input type="text" class="form-control" id="name" placeholder="Name" name="name" ></input>
                    </div>

                    <div class="form-group2">

                        <input type="tel" class="form-control" id="phone" placeholder="Phone Number" name="phone"></input>
                    </div>
                    <div class="form-group2">

                        <input type="email" class="form-control" id="email" placeholder="Email Address *" name="email"></input>
                    </div>
                    <button type="submit" class="btn">Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default Newsletter
