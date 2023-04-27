import { useSelector } from "react-redux";
import SellerNavigation from "./sellerNevigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function UpdateProduct() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [discountPercentage, setDiscount] = useState("");
    const location = useLocation();

    const productdetail = location.state.productdetail


    const update = async (event) => {
        // console.log(title + "  " + description)
        try {
            event.preventDefault(location.state._id);
            let response = await axios.post(`http://localhost:3000/product/updated/${productdetail._id}`, { title, description, price, stock, discountPercentage });
            toast.info("Product update successfully");


        } catch (err) {
            console.log(err);
        }
    }



    return <>

        <ToastContainer />
        <SellerNavigation />
        <div className="container bg-light" style={{ borderRadius: "2%" }}>
            <div className=" ">
                <div className="container mt-4">
                    <div className="ml-5 mr-5">
                        <div className="jumbotron">

                            <h1 className="display-5">Product Detail Update</h1>
                            <p className="lead">Fill the field you want to update</p>
                            <hr className="my-2" />
                        </div>

                        <label>title</label>
                        <input className="form-control" type="text" onChange={(event) => setTitle(event.target.value)} /><br />
                        <label>description</label>
                        <input className="form-control" type="text" onChange={(event) => setDescription(event.target.value)} /><br />

                        <label>price</label>
                        <input className="form-control" type="text" onChange={(event) => setPrice(event.target.value)} /><br />
                        <label>stock</label>
                        <input className="form-control" type="text" onChange={(event) => setStock(event.target.value)} /><br />
                        <label>discountPercentage</label>
                        <input className="form-control" type="text" onChange={(event) => setDiscount(event.target.value)} /><br />
                        <button className="btn btn-outline-primary mt-3 mb-5" onClick={update}>Update</button>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default UpdateProduct;