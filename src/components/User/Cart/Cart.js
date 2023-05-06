import React, { useEffect, useState } from 'react'
import Header from '../../header/Header'
import Navigation from '../../navigation/Navigation'
import Footer from '../../footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
// import { updateCartItems } from '../../../redux-config/CartSlice'
import axios from 'axios'
import { toast } from 'react-toastify'



export default function Cart() {
  const [cartSummary,setCardSummary]=useState([])
  const {currentCustomer}=useSelector(state=>(state.customer))
  const id=currentCustomer._id
   const cartDetail=async(id)=>{
   try{
    let response=await axios.post( "http://localhost:3000/cart/viewCartItems",{cutomerId:id})

    console.log(response.data.cart.cartItem)
    setCardSummary(response.data.cart.cartItem)
   }
   catch(err){
    toast.info("your")
   }
   }
   useEffect(() => {
    cartDetail();
  }, []);


  return <>
    <Header/>
    <Navigation/>
    <section className="auto" style={{backgroundColor: 'whitesmoke'}}>
  {/* <div className="container h-100"> */}
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col"><br/>
        <p><span className="h2">Shopping Cart </span><span className="h4">({cartSummary.length} item in your cart)</span></p>
      {/* {cartItems.map((item,index)=>{ */}

      <div className="card mb-4">
      {cartSummary.map((items,index)=>
          <div className="card-body p-4">
            <div className="row align-items-center">
              <div className="col-md-2">
                <img src={items.productId?.thumbnail} className="img-fluid"/>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2"></p>
                  <p className="lead fw-normal mb-0">{items.productId?.title}</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Quantity</p>
                  <p className="lead fw-normal mb-0">1</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Price</p>
                  <p className="lead fw-normal mb-0">{items.productId?.price}</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Total</p>
                  <p className="lead fw-normal mb-0">$799</p>
                </div>
              </div>
            </div>
          </div>)}
        {/* </div> })}  */}
        <div className="card mb-5">
          <div className="card-body p-4">
            <div className="float-end">
              <p className="mb-0 me-5 d-flex align-items-center">
                <span className="small text-muted me-2">Order total:</span> <span className="lead fw-normal">$799</span>
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-light btn-lg me-2">Continue shopping</button>
          <button type="button" className="btn btn-primary btn-lg">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</section>

    <Footer/>
  
  </>
}
