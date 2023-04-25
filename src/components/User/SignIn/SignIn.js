
import { Link } from "react-router-dom"
import "../SignIn/sigin.css"
import Header from "../../header/Header"
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { setCustomer } from "../../../redux-config/CustomerSlice";

export default function SignIn() {
    const [customerEmail,setEmail]=useState("")
    const [customerPassword,setPassword]=useState("")
    const navigate=useNavigate()
    const dispatch =useDispatch()
    const handleSubmit=async (event)=>{
        try{
       event.preventDefault()
       const response=await axios.post("http://localhost:3000/customer/signIn",{customerEmail,customerPassword})
        // console.log(response.data)
        dispatch(setCustomer(response.data.customer))
        console.log(response.data.customer)
       
         navigate("/")
         toast.success("Sign in sucessful")

        }catch(err){
           toast.error("Something went Wrong")
           console.log(err)
        }
    }

  return (<>
 <ToastContainer/>
  <div  className="container-fluid" style={{
      backgroundImage: 'url("./assets/img/banner_img_04.jpg")',
      backgroundSize: "cover"
    }}>
       <Header/>
    <div className="container" >
    <div className="container form bg-white pt-5 mt-4 mb-3">
      {/*change after click on sign up*/}
     
      <p className="text-center login-heading hide-me">login</p>
      <div className="container hide-me">
      <form  onSubmit={handleSubmit}>
        <div className="row">
          <div className="col mt-4 pl-5 pr-5">
            <p className="username">username</p>
            <div className="row mt-4">
              <div className="col-2 text-center pt-1 pr-0">
                <i className="fa fa-user-o" aria-hidden="true" id="user" />
              </div>
              <div className="col-10 pl-0">
                <input
                onChange={(event)=>setEmail(event.target.value)}
                  type="text"
                  placeholder="Type your username"
                  className="input-1"
                />
              </div>
            </div>
            <hr className="hr-1" />
            <div className="hide" />
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
                onChange={(event)=>setPassword(event.target.value)}
                  type="password"
                  placeholder="Type your password"
                  className="input-2"
                />
              </div>
            </div>
            <hr className="hr-2" />
           
          </div>
        </div>
        <div className="row">
          <div className="col text-right pr-5">
            <a href="#">
              <span className="forget-password" >Forget password?</span>
            </a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col pl-5 pr-5">
              <button type="submit"  className="btn btn-block text-white login-button form-control">login</button>
          </div>
        </div>
        <div className="row mt-5">
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
              or sign up using
            </span>
          </div>
          <div className="col-12 text-center pt-3">
            <Link to="/signUp">
              <span className="sign-up">sign up</span>
            </Link>
          </div>
        </div>
        </form>
      </div>
      
    </div>
   
  </div>
  </div>
    </>
    
    )
}

