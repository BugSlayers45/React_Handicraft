import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../redux-config/sellerSignInSlice";


export default function SellerNavigation() {

    const { currentSeller } = useSelector(state => state.seller);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const sellerSignOut = () => {
        dispatch(signOut());
        navigate("/sellersignin")
    }
    return (
        <><nav className="navbar navbar-expand-lg navbar-light shadow">
            <div className="container d-flex justify-content-between align-items-center">
                <a
                    className="navbar-brand text-success logo h2 align-self-center"
                    href="index.html"
                >
                    <img
                        src="./assets/img/logo1.png"
                        style={{ width: "190px", height: "90px" }}
                        className=""
                        alt=""
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/sellerHome">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/order">
                                Order
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Shop
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/addproduct">
                                        Add Product
                                    </Link>
                                </li>
                                <hr />
                                <li>
                                    <Link className="dropdown-item" to="/productList">
                                        ProductList
                                    </Link>
                                </li>

                            </ul>
                        </li>
                        {currentSeller &&
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/sellersignin"
                                    tabIndex={-1}

                                >
                                    SignOut
                                </Link>
                            </li>}

                        {!currentSeller &&
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/sellersignin"
                                    tabIndex={-1}

                                >
                                    SignIn
                                </Link>
                            </li>}
                        {!currentSeller &&
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/sellersignup"
                                    tabIndex={-1}

                                >
                                    SignUp
                                </Link>
                            </li>}
                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>



            </div>

        </nav >

            {/* Close Header */}
        </>
    );
}
