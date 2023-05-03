
import { Link, useNavigate } from "react-router-dom";
import SellerNavigation from "./sellerNevigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setSeller } from "../redux-config/sellerSignInSlice";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

function SellerSignIn() {

    const [sellerEmail, setEmail] = useState("");
    const [sellerPassword, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signin = async (event) => {
        try {
            event.preventDefault();
            let response = await axios.post("http://localhost:3000/seller/signin", { sellerEmail, sellerPassword });
            dispatch(setSeller(response.data.seller));
            toast.success("SingIn Successful..");
            navigate("/sellerHome");
        } catch (err) {
            toast.error("Oops! something went wrong");
        }

    }

    // ------------------------------------------------------------------------------
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
    // ------------------------------------------------------------------------------------



    return <><SellerNavigation />
        <div className="container mt-5 mb-5" style={{ marginLeft: "17vw", }}>
            <div className=" row">
                <div className="col-4 ml-4" >
                    <img className="img-fluid ml-5" src="assets/img/potter1.jpg" />
                </div>
                <div className="login-box col-lg-4 ml-4" style={{ boxShadow: "3px 5px 25px gray" }}><br />
                    <h2 className="text-center" >Login</h2><hr /><br />
                    <form method="post" action="/signin" onSubmit={signin}>

                        <div className="user-box ml-4 mr-4 ">


                            <input
                                type="email" onKeyUp={emailValidation}
                                className="form-control" name="email" id="email" placeholder="Enter Email"
                                onChange={(event) => setEmail(event.target.value)}
                            /> <small id="emailside" style={{ color: "red", marginLeft: "12px", marginBottom: "2px" }}>*</small>

                        </div>
                        <div className="user-box ml-4">
                            <input
                                type="password"
                                className="form-control" onKeyUp={pswdValidation} id="pid" name="password"
                                onChange={(event) => setPassword(event.target.value)} placeholder="Enter password"
                            /><small id="pswdside" style={{ color: "red", marginLeft: "12px", marginBottom: "2px" }}>*</small>
                        </div>
                        <button type="submit" className="btn btn-dark mt-4 ml-4" style={{ borderRadius: "5%", width: "94%" }}>
                            SignIn
                        </button>
                        <div className="mt-2 text-right mb-4">
                            <Link to="/sellersignUp">New User ?</Link>
                        </div>

                    </form>
                </div>
            </div >
        </div >


    </>
}

export default SellerSignIn;