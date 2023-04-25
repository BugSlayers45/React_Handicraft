import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SellerNavigation from "./sellerNevigation";


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
                console.log("signup success")
                window.alert("SignUp Successfull..");
                navigate("/sellersignin")
            }
        } catch (err) {
            console.log(err)
            window.alert("Something went wrong");
            window.alert(err);
        }
    }

    return <>
        <SellerNavigation />
        <div className="container" style={{ marginLeft: "35vw", marginTop: "5px" }} >
            <div className=" row">
                <div className="login-box col-md-4 col-lg-4">
                    <h2 className="text-center">SignUp</h2>
                    <form onSubmit={signup}>
                        <div className="user-box form-group">

                            <label>SellerName</label><br />
                            <input
                                onChange={(event) => setName(event.target.value)}
                                type="text" className="form-control"

                            />

                        </div>
                        <div className="user-box">

                            <label>Email</label><br />
                            <input
                                onChange={(event) => setEmail(event.target.value)}
                                type="email" className="form-control"

                            />

                        </div>
                        <div className="user-box">

                            <label>Password</label><br />
                            <input
                                onChange={(event) => setPassword(event.target.value)}
                                type="password" className="form-control"

                            />

                        </div>
                        <div className="user-box">

                            <label>Contact No</label><br />
                            <input onChange={(event) => setContact(event.target.value)} type="text" className="form-control" name="contact" required="" />
                        </div>

                        <div className="user-box">

                            <label>Address</label><br />
                            <input
                                onChange={(event) => setAddress(event.target.value)}
                                type="text" className="form-control"

                            />

                        </div>

                        <div style={{ marginTop: "5px", textAlign: "right" }}>
                            <Link to='/sellersignin'>Already an acount ?</Link>
                        </div>
                        <button type="submit" className="btn btn-outline-danger mb-5" style={{
                            borderRadius: "5%"
                        }}>
                            SignUp
                        </button>
                    </form>
                </div>
            </div>
        </div >


    </>

}

export default SellerSignUp;