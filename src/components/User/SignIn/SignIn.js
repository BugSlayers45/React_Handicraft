import { Link } from "react-router-dom"
import "../SignUp/login.css"
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { setCustomer } from "../../../redux-config/CustomerSlice";
import 'react-toastify/dist/ReactToastify.css'
import api from "../../../WebApi/api";


export default function SignIn() {
    const [customerEmail,setEmail]=useState("")
    const [customerPassword,setPassword]=useState("")
    const navigate=useNavigate()
    const dispatch =useDispatch()
    const handleSubmit = async (event)=>{
        try{
       event.preventDefault()
       const response=await axios.post(api.USER_SIGNIN,{customerEmail,customerPassword})
        dispatch(setCustomer(response.data.customer))
        if(response.data.status){
         navigate("/")
         toast.success("Sign in sucessful")
        }else{
          toast.error("Invalid email,password")
        }
        }catch(err){
           toast.error("Something went Wrong")
           console.log(err)
        }
    }  
  return<>
  <ToastContainer/>
      <h2 className="tip">Login</h2>
<div className="cont">
  <div className="form sign-in">
  <form  onSubmit={handleSubmit}>
    <h2>Welcome back,</h2>
    <label className="labellogin">
      <span>Email</span>
      <input type="email" className="form-control logininput" onChange={(event)=>setEmail(event.target.value)} />
    </label>
    <label className="labellogin">
      <span>Password</span>
      <input type="password" className="form-control logininput"  onChange={(event)=>setPassword(event.target.value)} />
    </label>
    <p className="forgot-pass">Forgot password?</p>
    <button type="submit"  className="submit form-control loginbtn">Sign In</button>
    <button type="submit" className="fb-btn form-control loginbtn">Connect with <span>Google</span></button>
    </form>
  </div>
 
  <div className="sub-cont">
    <div className="img">
      <div className="img__text m--up">
        <h2>New here?</h2>
        <p>Sign up and discover great amount of new opportunities!</p>
      </div>
      <Link to={'/signUp'}>
      <div className="img__btn">
        <span className="m--up">Sign Up</span>
      </div>
      </Link>
    </div>
  </div>

</div>
  </>
}
