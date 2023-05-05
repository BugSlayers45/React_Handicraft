import React from 'react'
import Navigation from '../../navigation/Navigation'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDeliveryDetail } from '../../../redux-config/DeliveryDetailSlice'
import "../payments/payments.css"
import axios from 'axios'

export default function Checkout() {
  const {currentCustomer}=useSelector(state=>state.customer)
  const data=useSelector(state=>state.deliveryDetail)
  const location=useLocation()
  console.log(location)
  const totalBill=location.state.orderpackage.billamount+location.state.orderpackage.SHIPPING_FEES

  const products=location.state.orderpackage.cartitems
  console.log(products)
  const dispatch=useDispatch()
  const[name,setName]=useState()
  const [deliveryaddress,setdeliveryAddress]=useState()
  const[contactPerson,setContactPerson]=useState()
  const [contactNumber,setContactNumber]=useState()
 
  // console.log(location.state.orderpackage)
                         
   const personDetail=async(event)=>{
    event.preventDefault()
    const data={name,deliveryaddress,contactPerson,contactNumber}
    dispatch(setDeliveryDetail(data))
      const response=await axios.post("http://localhost:3000/order/buynow",{
        "_id":currentCustomer._id,
        "deliveryAddress":deliveryaddress,
        "contactNumber":contactNumber,
        "contactPerson":contactPerson,
       "orderItems":products
     }
    )
    console.log(response)
   }

  return (<>    
  <Navigation/>

<Link to={"/cart"}> <button type="button"  class="btn btn-primary disabled">Back To  Cart</button></Link>

    <div className='container'>
    <form onSubmit={personDetail}>
  <div className="row">
  <div className="col-md-8 mb-4">
    <div className="card mb-4">
      <div className="card-header py-3">
        <h5 className="mb-0 fw-100">Biling details</h5>
      </div>
      <div className="card-body">
        
          {/* 2 column grid layout with text inputs for the first and last names */}
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input type="text" onChange={(e)=>setName(e.target.value)} id="form7Example1" className="form-control" />
                <label className="form-label" htmlFor="form7Example1">Name</label>
              </div>
            </div>
          </div>
          {/* Text input */}
          <div className="form-outline mb-4">
            <input type="text" id="form7Example3" onChange={(e)=>setdeliveryAddress(e.target.value)} className="form-control" />
            <label className="form-label" htmlFor="form7Example3">Delivery Address</label>
          </div>
          {/* Text input */}
          <div className="form-outline mb-4">
            <input type="text" id="form7Example4" onChange={(e)=>setContactPerson(e.target.value)} className="form-control" />
            <label className="form-label" htmlFor="form7Example4">Contact Person Name</label>
          </div>
          {/* Email input */}
          <div className="form-outline mb-4">
            <input type="text" onChange={(e)=>setContactNumber(e.target.value)} id="form7Example5" className="form-control" />
            <label className="form-label" htmlFor="form7Example5">Contact Number</label>
          </div>
          {/* Message input */}
          <div className="form-outline mb-4">
            <textarea className="form-control" id="form7Example7" rows={4} defaultValue={""} />
            <label className="form-label" htmlFor="form7Example7">Additional information</label>
          </div>
      </div>
    </div>
  </div>
  <div className="col-md-4 mb-4">
    <div className="card mb-4">
      <div className="card-header py-3">
        <h5 className="mb-0">Summary</h5>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
           <strong> Products</strong>
          </li>
          {products.map((product) => (<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
          {product.productId.title.substring(0,40)}
          <br/>
          <span>Qty {product.quantity}</span>
          </li>))}
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>Total amount</strong>
              <strong>
                <p className="mb-0">(including VAT)</p>
              </strong>
            </div>
            <span><strong>&#8377;{totalBill}</strong></span>
          </li>
          <div>
              <strong>Make Payemnt</strong>
              <div class="mb-3">
                <label for="" class="form-label"></label>
                <select class="form-select form-select-lg" name="" id="">
                  <option selected>Select Payment Mode</option>
                  <option value="">RazorPay</option>
                  <option value="">Debit Card</option>
                  <option value="">Credit Card</option>
                </select>
              </div>
            </div>
        </ul>
        
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Make purchase
        </button>
       
      </div>
    </div>
  </div>
</div>

</form>

</div>

</>
  )
}
