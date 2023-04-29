import Footer from "../components/footer/Footer";
import SellerNavigation from "./sellerNevigation";
import "../SellerComponents/sellerHome.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";


function SellerHome() {
    const { currentSeller } = useSelector(state => state.seller);
    const [products, setData] = useState([]);


    const sellerproduct = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/product/productList/${currentSeller._id}`)
            if (response.data.status)
                setData(response.data.productsList);

        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        sellerproduct();

    }, []);

    return <>

        <SellerNavigation />
        <div className="container-fluid">
            <div className="row ">
                <div className="col-3 " style={{ backgroundColor: "", height: "80vh" }}>
                    <div class="col-12"><img className="img" src="assets/img/P8.jpg" style={{ height: "80vh", marginLeft: "-20px" }} /></div>
                </div>
                <div className="col-9">
                    <div className="mt-5 ml">
                        <h2 className="display-6">Service Details</h2>
                        <hr className="line" />
                    </div>
                    <div className="d-flex">
                        <div className="col-2 ml-5 mt-5" id="home" >
                            <h5 className="mt-2 text-center">Products</h5>
                            <hr />
                            <h6 className="text-center" >total : {products.length}</h6>
                        </div>
                        <div className="col-2 ml-5 mt-5" id="home" >
                            <h5 className="mt-2 text-center">Customers</h5>
                            <hr />
                            <h6 className="text-center">total : 0</h6>
                        </div>
                        <div className="col-2 ml-5 mt-5" id="home">
                            <h5 className="mt-2 text-center">Earning</h5>
                            <hr />
                            <h6 className="text-center" >total : 0</h6>
                        </div>
                        <div className="col-2 ml-5 mt-5" id="home">
                            <h5 className="mt-2 text-center">Orders</h5>
                            <hr />
                            <h6 className="text-center" >total : 0</h6>
                        </div>


                    </div>

                </div>
            </div>

        </div>
        <Footer />
    </>
}
export default SellerHome;