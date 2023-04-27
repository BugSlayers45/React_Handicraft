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

    return <>
        <SellerNavigation />
        <div className="container mb-3 mt-5" style={{ marginLeft: "33vw", marginTop: "5px" }} >
            <div className=" row">
                <div className="login-box col-lg-5" style={{ boxShadow: "3px 5px 25px  gray", borderRadius: "2%" }}><br />
                    <h2 className="text-center">SignUp</h2><hr />
                    <form onSubmit={signup} className="mt-5">
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
                        <button type="submit" className="btn btn-dark mt-2" style={{
                            borderRadius: "5%", width: "100%"
                        }}>
                            SignUp
                        </button>

                        <div className="mb-4 text-right mt-2">
                            <Link to='/sellersignin'>Already an acount ?</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div >


    </>

}

export default SellerSignUp;