import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SellerNavigation from "./sellerNevigation";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function SellerSignUp() {
    const [sellerName, setName] = useState("");
    const [sellerEmail, setEmail] = useState("");
    const [sellerPassword, setPassword] = useState("");
    const [sellerContact, setContact] = useState("");
    const [sellerAddress, setAddress] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();


    const signup = async (event) => {
        try {
            event.preventDefault();
            console.log(sellerName + " " + sellerEmail + "" + sellerPassword + "" + sellerContact + "" + sellerAddress)
            let response = await axios.post("http://localhost:3000/seller/signup", { sellerName, sellerEmail, sellerPassword, sellerContact, sellerAddress });
            console.log(response.data);
            if (response.data.status) {
                toast.success("SignUp Successful");
                navigate("/sellersignin")
            }
        } catch (err) {
            console.log(err)
            toast.error("Something went wrong");
        }
    }
    // ----------------------------------------------------------------------------------------------------
    function unameValidation() {
        var status = true;
        var name = document.getElementById("name").value;
        var nameside = document.getElementById("nameside");
        name = name.trim();
        if (name.length == 0) {
            nameside.innerHTML = "Name is required";
            nameside.style.color = "red";
            status = false;
        }

        else
            nameside.innerHTML = "";

        return status;
    }
    // --------------------------------------------------------------------------------------------------
    // Email Validation:-

    function emailValidation() {
        var status = true;
        var email = document.getElementById("email").value;
        var emailside = document.getElementById("emailside");
        email = email.trim();
        if (email.length == 0) {
            status = false;
            emailside.innerHTML = "email is required";
            // emailside.style.color = "red";
        }
        else {
            var atTheRateIndex = email.indexOf('@');
            var secondAtTheReateIndex = email.lastIndexOf('@');
            var dotIndex = email.indexOf('.');
            if (atTheRateIndex == -1) {
                status = false;
                emailside.innerHTML = "Invalid email(@ missing)";
                // emailside.style.color = "red";
            }
            else if (secondAtTheReateIndex != atTheRateIndex) {
                status = false;
                emailside.innerHTML = "Invalid email";
                // emailside.style.color = "red";
            }
            else if (dotIndex == -1) {
                status = false;
                emailside.innerHTML = "Invalid email(. missing)";
                // emailside.style.color = "red";
            }
            else {
                var stringAfterAtTheRate = email.substring(atTheRateIndex);
                var lastDotIndex = stringAfterAtTheRate.indexOf(".");
                if (lastDotIndex == -1) {
                    status = false;
                    emailside.innerHTML = "Invalid email(. missing in domain)";
                    // emailside.style.color = "red";
                }
                else {
                    var inOrCom = stringAfterAtTheRate.substring(lastDotIndex + 1);
                    if (inOrCom.length < 2) {
                        status = false;
                        emailside.innerHTML = "Invalid email";
                        // emailside.style.color = "red";
                    }
                    else {

                        if (stringAfterAtTheRate.substring(1, lastDotIndex).length == 0) {
                            status = false;
                            emailside.innerHTML = "Invalid Email";
                            // emailside.style.color = "red";
                        }
                        else
                            emailside.innerHTML = "";
                    }
                }
            }
        }
        return status;
    }
    // ------------------------------------------------------------------------------------
    //Password Validation:---

    function pswdValidation() {
        var status = true;
        var password = document.getElementById("pid").value;
        var pswdside = document.getElementById("pswdside");
        if (password.length == 0) {
            status = false;
            pswdside.innerHTML = "password is required";
            // pswdside.style.color = "red";
        }
        else if (password.length < 6) {
            status = false;
            pswdside.innerHTML = "password must be at least 6 letter.";
            // pswdside.style.color = "red";
        }
        // else if (!checkForSpecificLetter(password, 'A', 'Z')) {
        //     status = false;
        //     pswdside.innerHTML = "password must have 1 uppercase letter";
        //     // pswdside.style.color = "red";
        // }
        // else if (!checkForSpecificLetter(password, '0', '9')) {
        //     status = false;
        //     pswdside.innerHTML = "password must have 1 digit";
        //     // pswdside.style.color = "red";
        // }
        // else if (!checkForSpecialSymbol(password)) {
        //     status = false;
        //     pswdside.innerHTML = "password must have 1 special symbol($,#,@)";
        //     // pswdside.style.color = "red";
        // }
        else
            pswdside.innerHTML = "";
        return status;
    }

    // ---------------------------------------------------------------------------------------------------
    function contactValidation() {
        var status = true;
        var contact = document.getElementById("contact").value;
        var conside = document.getElementById("conside");
        if (contact.length == 0) {
            status = false;
            conside.innerHTML = "contact is required";
            // pswdside.style.color = "red";
        }
        else if (contact.length < 10) {
            status = false;
            conside.innerHTML = "Invalid Contact Number";
            // pswdside.style.color = "red";
        }

        else
            conside.innerHTML = "";
        return status;
    }
    //  --------------------------------------------------------------------------------------------------
    return <>
        <SellerNavigation />
        <div className="container mb-3 mt-5" style={{ marginLeft: "12vw", marginTop: "5px" }} >
            <div className=" row">
                <div className="col-5" >
                    <img className="img-fluid ml-5" src="assets/img/potter2.jpg" />
                </div>
                <div className="login-box col-5" style={{ boxShadow: "3px 5px 25px  gray" }}><br />
                    <h2 className="text-center">SignUp</h2><hr />
                    <form onSubmit={signup} className="mt-5">
                        <div className="user-box form-group ml-4">


                            <input
                                onChange={(event) => setName(event.target.value)} onKeyUp={unameValidation}
                                type="text" className="form-control" name="name" id="name" placeholder="Enter Name"

                            /> <small id="nameside" style={{ color: "red" }}>*</small>

                        </div>
                        <div className="user-box ml-4">

                            <input placeholder="Enter Email"
                                onChange={(event) => setEmail(event.target.value)} onKeyUp={emailValidation}
                                type="email" className="form-control" name="email" id="email"

                            /><small id="emailside" style={{ color: "red", marginBottom: "2px" }}>*</small>

                        </div>
                        <div className="user-box ml-4">
                            <input placeholder="Enter Password"
                                onChange={(event) => setPassword(event.target.value)} onKeyUp={pswdValidation}
                                type="password" className="form-control" name="password" id="pid"

                            /><small id="emailside" style={{ color: "red", marginBottom: "2px" }}>*</small>

                        </div>
                        <div className="user-box ml-4">
                            <input placeholder="Enter Contact No" onKeyUp={contactValidation} id="contact" name="contact" onChange={(event) => setContact(event.target.value)} type="text" className="form-control" name="contact" required="" />
                            <small id="conside" style={{ color: "red", marginBottom: "2px" }}>*</small>
                        </div>

                        <div className="user-box ml-4">

                            <label>Address</label><br />
                            <input
                                onChange={(event) => setAddress(event.target.value)}
                                type="text" className="form-control"

                            />

                        </div>
                        <button type="submit" className="btn btn-dark mt-4 ml-4 mb-2" style={{
                            borderRadius: "5%", width: "95%"
                        }}>
                            SignUp
                        </button>

                        <div className="mb-4 text-right mt-2 ">
                            <Link to='/sellersignin'>Already an acount ?</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div >


    </>

}

export default SellerSignUp;