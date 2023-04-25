
import { Link, useNavigate } from "react-router-dom";
import SellerNavigation from "./sellerNevigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setSeller } from "../redux-config/sellerSignInSlice";

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
            window.alert("SingIn Successful..")
            navigate("/sellerHome");
        } catch (err) {
            window.alert("Oops! something went wrong");
        }

    }


    return <>
        <SellerNavigation />
        <div className="container mt-4 mb-5" style={{ marginLeft: "35vw" }}>
            <div className=" row">
                <div className="login-box col-md-4 col-lg-4">
                    <h2 className="text-center">Login</h2>
                    <form method="post" action="/signin" onSubmit={signin}>

                        <div className="user-box">

                            <label>Email</label><br />
                            <input
                                type="email"
                                className="form-control"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="user-box">
                            <label>Password</label><br />
                            <input
                                type="password"
                                className="form-control"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div style={{ marginTop: "3px", textAlign: "right" }}>
                            <Link to="/sellersignUp">New User ?</Link>
                        </div>
                        <button type="submit" className="btn btn-outline-danger mb-5" style={{ borderRadius: "5%" }}>
                            SignIn
                        </button>
                    </form>
                </div>
            </div >
        </div >


    </>
}

export default SellerSignIn;