import React, { useEffect, useState } from 'react'
import Header from '../../header/Header'
import Navigation from '../../navigation/Navigation'
import Footer from '../../footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
// import { updateCartItems } from '../../../redux-config/CartSlice'
import axios from 'axios'
import { toast } from 'react-toastify'
import api from '../../../WebApi/api'

export default function Cart() {
 
  const [cartSummary,setCardSummary]=useState([])
  const {currentCustomer}=useSelector(state=>(state.customer))
  const id=currentCustomer._id



   const cartDetail=async(id)=>{
   try{
    let response=await axios.post(api.VIEW_CART_ITEMS,{cutomerId:id})

    console.log(response.data.cart.cartItem)
    setCardSummary(response.data.cart.cartItem)
   }
   catch(err){
    toast.info("your")
   }
   }
const removeFromCart=async(productId)=>{
       try{
        console.log(id)
         let response=await axios.post(api.REMOVE_FROM_CART,{customerid:id,productId:productId}) 
         cartDetail()
       }
       catch(err){
        toast.error("something went wrong")
       }
}
 const updateQuantiy=(value)=>{
      
 }
 useEffect(() => {
  cartDetail()
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
      
          <div className="card-body p-4" >
          {cartSummary.map((items,index)=>
            <div className="row align-items-center p-2">
              <div className="row align-items-center" style={{boxShadow:"1px 1px 10px",borderRadius:".5rem" }}>
              <div className="col-md-2 p-2 ">
                <img src={items.productId?.thumbnail} className="img-fluid"/>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Title</p>
                  <p className="lead fw-normal mb-0">{items.productId?.title}</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text mb-4 pb-2">Quantity</p>
                  <input 
          type="number" 
          name="quantity" defaultValue={1} onChange={((event)=>(updateQuantiy(event.target.value)))} min={1} max={items.productId.stock}
           style={{width:"50px"}}
        />                  
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Price</p>
                  <p className="lead fw-normal mb-0">₹{items.productId?.price}</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Total</p>
                  <p className="lead fw-normal mb-0">₹799</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Delete</p>
                  <p onClick={()=>removeFromCart(items.productId._id)} className="lead fw-normal mb-0"><i class="fa fa-trash btn btn-danger btn-lg" aria-hidden="true"></i></p>
                </div>
              </div>
              </div>
            </div>)}
          </div>
        <div className="card mb-5">
          <div className="card-body p-4">
            <div className="float-end">
              <p className="mb-0 me-5 d-flex align-items-center">
                <span className="small text-muted me-2">Order total:</span> <span className="lead fw-normal">₹ 799</span>
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
