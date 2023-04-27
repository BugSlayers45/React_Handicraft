
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


    return <><SellerNavigation />
        <div className="container mt-4 mb-5" style={{ marginLeft: "35vw", }}>
            <div className=" row">
                <div className="login-box col-md-4 col-lg-4" style={{ boxShadow: "3px 5px 25px gray" }}><br />
                    <h2 className="text-center" >Login</h2><hr /><br />
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
                        <button type="submit" className="btn btn-dark mt-2" style={{ borderRadius: "5%", width: "100%" }}>
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