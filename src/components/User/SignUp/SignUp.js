import React, { useState } from 'react'
import '../SignUp/signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
export default function SignUp() {
    const [customerName,setName]=useState("")
    const [customerEmail,setEmail]=useState("")
    const [customerPassword,setPassword]=useState("")
    const[customerContact,setCOntact]=useState("")
    const navigate=useNavigate()
    const handleSubmit =async(event)=>{
        try{
          event.preventDefault()
          var response=await axios.post("http://localhost:3001/customer/signup",{customerName,customerEmail,customerPassword,customerContact})
          if(response.data.status)
          toast.success("your are sucessfully sigin up")
          navigate("/signin")
        }
        catch(err){
            if(response.status.err==400)
            toast.error("Bad Request!")
            else if(response.status.err==500)
            toast.error("Server Error !")
        }
    }
  return (
    <>
     <ToastContainer />

    <div  className="container-fluid" style={{
      backgroundImage: 'url("./assets/img/banner_img_04.jpg")',
      backgroundSize: "cover"
    }}>
       {/* <Headers/> */}
    <div className="container" >
    <div className="container form bg-white pt-5 mt-4 mb-3">
    <form onSubmit={handleSubmit}>
    <p className="text-center login-heading">sign up</p>
   
    <div className="row">
      <div className="col mt-4 pl-5 pr-5">
        <p className="username">Full Name</p>
        <div className="row mt-4">
          <div className="col-2 text-center pt-1 pr-0">
            <i className="fa fa-user-o" aria-hidden="true" id="user" />
          </div>
          <div className="col-10 pl-0">
            <input
             onChange={(event)=>setName(event.target.value)} 
              type="text"
              placeholder="Type your name"
              className="first-name"
            />
          </div>
        </div>
        <hr className="hr-1" />
        <div className="first-name-hide" />
      </div>
    </div>
    <div className="row">
      <div className="col mt-4 pl-5 pr-5">
        <p className="username">Email-id</p>
        <div className="row mt-4">
          <div className="col-2 text-center pt-1 pr-0">
            <i className="fa fa-envelope-o" aria-hidden="true" id="user" />
          </div>
          <div className="col-10 pl-0">
            <input 
             
              onChange={(event)=>setCOntact(event.target.value)}
              type="text"
              placeholder="Type your username"
              className="email"
            />
          </div>
        </div>
        <hr className="hr-1" />
        <div className="email-hide" />
      </div>
    </div>
    <div className="row">
      <div className="col mt-4 pl-5 pr-5">
        <p className="username">Password</p>
        <div className="row mt-4">
          <div className="col-2 text-center pt-1 pr-0">
            <i className="fa fa-lock" aria-hidden="true" id="lock" />
          </div>
          <div className="col-10 pl-0">
            <input
            onChange={(event)=>setEmail(event.target.value)}
              type="password"
              placeholder="Type your password"
              className="password-signup"
            />
          </div>
        </div>
        <hr className="hr-2" />
        <div className="password-signup-hide" />
      </div>
    </div>
    <div className="row">
      <div className="col mt-4 pl-5 pr-5">
        <p className="username">Contact</p>
        <div className="row mt-4">
          <div className="col-2 text-center pt-1 pr-0">
            <i className="fa fa-lock" aria-hidden="true" id="lock" />
          </div>
          <div className="col-10 pl-0">
            <input
             onChange={(event)=>setCOntact(event.target.value)}
              type="text"
              placeholder="Type your password"
              className="contact-signup"
            />
          </div>
        </div>
        <hr className="hr-2" />
        <div className="confirm-password-signup-hide" />
      </div>
    </div>
    <div className="row">
      <div className="col pl-5">
        <a href="#">
          <span className="forget-password">
            I accept the{" "}
            <span style={{ textTransform: "capitalize", color: "blue" }}>
              terms of use
            </span>
            &amp;
            <span style={{ textTransform: "capitalize", color: "blue" }}>
              privacy policy
            </span>{" "}
          </span>
        </a>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col pl-5 pr-5">
        
          <button type='submit' className="btn btn-block text-white signup-button">SignUp</button>
       
      </div>
    </div>
    <div className="row mt-5">
      <div className="col text-center">
        <span
          style={{
            textTransform: "capitalize",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: 15,
            fontWeight: 600,
            color: "rgb(148, 141, 141)"
          }}
        >
          already have an account
        </span>
      </div>
      <div className="col-12 text-center pt-3">
        <Link to="/signIn">
          <span className="login-page">login</span>
        </Link>
      </div>
    </div>
    </form>
    </div>
    
    </div>
    </div>
  </>
  
  )
}