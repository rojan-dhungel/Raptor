import React from 'react'
import Tdata from './Tdata'


function Trousers() {
  return (
    <>
       
<div className="container text-center" id='tdata'><h2>Trousers</h2></div>
<div className="cardthulo">
      <div className="container-col-auto" id="backend">
      <div className="card-container" id="bc-container">
        { Tdata.map((x) => (
          
          <div id='bc-card' className="card" style={{width: '18rem'}} key={x.product_id}>
            <img src={x.images} id='bc-img' className="card-img-top" alt="..."/>
            
            <ul className="list-group list-group-flush" id="bc-ul">
              <li className="list-group-item"><b>Brand:</b> {x.brand}</li>
              <li className="list-group-item"><b>Color:</b> {x.color}</li>
              <li className="list-group-item"><b>Material & Kind:</b> {x.material}</li>
              <li className="list-group-item"><b>Price:</b> ${x.price}</li>
              
              <a href="#" className="btn btn-primary" id="bc-btn">
                Add to Cart
              </a>
            
            </ul>
            
          </div>
        ))}
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Trousers

