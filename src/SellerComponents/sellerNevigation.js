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
    }
    return (
        <>
            {/* Header */}

            <nav className="navbar navbar-expand-lg navbar-light shadow">
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
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#templatemo_main_nav"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                        id="templatemo_main_nav"
                    >
                        <div className="flex-fill" style={{ marginLeft: "20vw" }}>
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <div class="dropdown">
                                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Shop
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link to="/addproduct" class="dropdown-item" >Add Product</Link>
                                        <Link class="dropdown-item" to="/productList">ProductList</Link>

                                    </div>
                                </div>

                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar align-self-center">

                            <a
                                className="nav-icon position-relative text-decoration-none"
                                href="#"
                            >
                                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                                    7
                                </span>
                            </a>
                            {currentSeller && <Link
                                onClick={sellerSignOut}
                                className="nav-icon position-relative text-decoration-none"

                            >
                                <i className="fa fa-fw fa-user text-dark mr-3" />
                                SignOut
                            </Link>}
                            {!currentSeller && <Link
                                to="/sellersignIn"
                                className="nav-icon position-relative text-decoration-none"

                            >
                                <i className="fa fa-fw fa-user text-dark mr-3" />
                                SignIn
                            </Link>}
                            <Link
                                to="/sellersignUp"
                                className="nav-icon position-relative text-decoration-none"

                            >
                                <i className="fa fa-fw fa-user text-dark mr-3" />
                                SignUp
                            </Link>
                        </div>
                    </div>
                </div>

            </nav>
            <div className="align-self-center d-flex mt-3 offset-2 col-8 text-centre">
                {" "}
                <form
                    action=""
                    method="get"
                    className="modal-content modal-body border-0 p-0"
                >
                    <div className="input-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            id="inputModalSearch"
                            name="q"
                            placeholder="Search ..."
                        />
                        <button
                            type="submit"
                            className="input-group-text bg-success text-light"
                        >
                            <i className="fa fa-fw fa-search text-white" />
                        </button>
                    </div>
                </form>
            </div>

            {/* Close Header */}
        </>
    );
}
