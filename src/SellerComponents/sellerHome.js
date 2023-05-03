import Footer from "../components/footer/Footer";
import SellerNavigation from "./sellerNevigation";
import "../SellerComponents/sellerHome.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import SideNav from "./sideNav";
import { ToastContainer } from "react-toastify";


function SellerHome() {
    const { currentSeller } = useSelector(state => state.seller);
    const [products, setData] = useState([]);
    const [sellerOrder, setOrders] = useState([]);


    const sellerproduct = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/product/productList/${currentSeller._id}`)
            if (response.data.status)
                setData(response.data.productsList);

        } catch (err) {
            console.log(err);
        }
    }


    const totalOrders = async () => {
        try {
            let response = await axios.get(`http://localhost:3000/order/getorderbyseller/${currentSeller._id}`);
            if (response.data.status)
                setOrders(response.data.sellerOrder);
            console.log(response.data.sellerOrder)
        } catch (err) {
            console.log(err);
        }
    }
    let count = 0;
    {
        sellerOrder.forEach((item) => {
            count++;
        })
    }
    let totalEarning = 0;
    {
        sellerOrder.forEach((item) => {
            totalEarning += item.billAmount
        })
    }

    useEffect(() => {
        sellerproduct();
        totalOrders();


    }, []);

    return <>
        <ToastContainer />

        <header>
            <SellerNavigation />
            <SideNav />
        </header>
        <main style={{ minHeight: 'calc(100vh - 58px)' }}>
            <div className="container pt-4">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-9">
                            <div className="mt-3 ml">
                                <h2 className="display-6">Service Details</h2>
                                <hr className="line" />
                            </div>
                            <div className="d-flex">

                                <div class="col-lg-4 col-md-12 col-4 mb-4 ml-5">
                                    <div class="card">
                                        <div class="card-body ">
                                            <div class="card-body d-flex">
                                                <span class="fw-semibold d-block mb-1 ">Products</span>
                                                <span><div class="dropdown " style={{ marginLeft: "7vw" }}>
                                                    <button
                                                        class="btn p-0"
                                                        type="button"
                                                        id="cardOpt3"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <i class="fas fa-grip-vertical"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                                                        <a class="dropdown-item" href="javascript:void(0);">View More</a>

                                                    </div>
                                                </div></span>
                                            </div>
                                            <h3 class="card-title mb-2"> <i className="fas fa-chart-area fa-fw me-3" />{products.length}</h3>

                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-12 col-4 mb-4 ml-5">
                                    <div class="card">
                                        <div class="card-body ">
                                            <div class="card-body d-flex">
                                                <span class="fw-semibold d-block mb-1 ">Orders</span>
                                                <span><div class="dropdown " style={{ marginLeft: "9vw" }}>
                                                    <button
                                                        class="btn p-0"
                                                        type="button"
                                                        id="cardOpt3"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <i class="fas fa-grip-vertical"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                                                        <a class="dropdown-item" href="javascript:void(0);">View More</a>

                                                    </div>
                                                </div></span>
                                            </div>
                                            <h3 class="card-title mb-2"><i className="fas fa-chart-bar fa-fw me-3" />{sellerOrder.length}</h3>


                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-12 col-4 mb-4 ml-5">
                                    <div class="card">
                                        <div class="card-body ">
                                            <div class="card-body d-flex">
                                                <span class="fw-semibold d-block mb-1">Customers</span>
                                                <span><div class="dropdown " style={{ marginLeft: "7vw" }}>
                                                    <button
                                                        class="btn p-0"
                                                        type="button"
                                                        id="cardOpt3"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <i class="fas fa-grip-vertical"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                                                        <a class="dropdown-item" href="javascript:void(0);">View More</a>

                                                    </div>
                                                </div></span>
                                            </div>
                                            <h3 class="card-title mb-2"> <i class="fa fa-users me-4" aria-hidden="true" />{count}</h3>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div class="col-lg-4 col-md-12 col-4 mb-4 ml-5">
                                    <div class="card">
                                        <div class="card-body ">
                                            <div class="card-body d-flex">
                                                <span class="fw-semibold d-block mb-1 ">Earning</span>
                                                <span><div class="dropdown " style={{ marginLeft: "9vw" }}>
                                                    <button
                                                        class="btn p-0"
                                                        type="button"
                                                        id="cardOpt3"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <i class="fas fa-grip-vertical"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                                                        <a class="dropdown-item" href="javascript:void(0);">View More</a>

                                                    </div>
                                                </div></span>
                                            </div>
                                            <h3 class="card-title mb-2"><i class="fas fa-rupee-sign me-3"></i>{totalEarning}</h3>


                                        </div>
                                    </div>
                                </div>



                                <div class="col-lg-4 col-md-12 col-4 mb-4 ml-5">
                                    <div class="card">
                                        <div class="card-body ">
                                            <div class="card-body d-flex">
                                                <span class="fw-semibold d-block mb-1 ">Profit</span>
                                                <span><div class="dropdown " style={{ marginLeft: "9vw" }}>
                                                    <button
                                                        class="btn p-0"
                                                        type="button"
                                                        id="cardOpt3"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <i class="fas fa-grip-vertical    "></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                                                        <a class="dropdown-item" href="javascript:void(0);">View More</a>

                                                    </div>
                                                </div></span>
                                            </div>
                                            <h3 class="card-title mb-2"><i class="fas fa-rupee-sign    "></i> 12,628</h3>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>

        <Footer />







    </>
}
export default SellerHome;