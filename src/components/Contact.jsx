import React from 'react'

function Contact() {
  return (
    <>
      <div className=" container text-center" id='contact'>
        <p><u>Customer Care</u></p>
        <p>For all enquiries, please do not hesitate to contact our customer care team <br></br>via email <u>info@raptorlabel.com</u> or through the form below.</p>
        <p>Monday to Friday 9:00am - 5:00pm AEST *excluding VIC public holidays.</p>
        <p>Our team are working from home so we no longer have a contact number, <br></br>but we will get back to you as soon as possible. </p>
        <br></br>

        <p><u>Press and Media Enquiries</u></p>
        <p>email: <u>rojan@raptorlabel.com</u></p>
        <p><u>Wholesale Enquiries</u></p>
        <p>Product only for Nepal</p>
        <p>email: <u>rojan@raptorlabel.com</u></p>
      </div>
      <div class="container text-center" id='form'>
        <h2 class="text-center">Contact Form</h2>
        <form>
            <div class="form-group">
                
                <input type="text" class="form-control" id="name" placeholder="Name" name="name"></input>
            </div>
            <div class="form-group">
                
                <input type="email" class="form-control" id="email" placeholder="Email" name="email"></input>
            </div>
            <div class="form-group">
                
                <input type="tel" class="form-control" id="phone" placeholder="Phone Number" name="phone"></input>
            </div>
            <div class="form-group">
               
                <textarea class="form-control" rows="1" id="comment" placeholder="Comment" name="comment"></textarea>
            </div>
            <button type="submit" class="btn">Submit</button>
        </form>
    </div>
    </>
  )
}

export default Contact
