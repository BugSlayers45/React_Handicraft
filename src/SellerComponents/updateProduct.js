import { useSelector } from "react-redux";
import SellerNavigation from "./sellerNevigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function UpdateProduct() {
    const { currentSeller } = useSelector(state => state.seller);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [discountPercentage, setDiscount] = useState("");
    const location = useLocation();
    console.log(location.state);

    const update = async (event) => {
        try {
            event.preventDefault();
            let response = await axios.post(`http://localhost:3000/product/update/${currentSeller._id}`, { title, description, price, stock, discountPercentage })
            console.log(response.data.search);
        } catch (err) {
            console.log(err);
        }
    }



    return <>
        <SellerNavigation />
        <div className="container mt-5">
            <label>title</label>
            <input className="form-control" type="text" /><br />
            <label>description</label>
            <input className="form-control" type="text" /><br />
            <label>discountPercentage</label>
            <input className="form-control" type="text" /><br />
            <label>price</label>
            <input className="form-control" type="text" /><br />
            <label>stock</label>
            <input className="form-control" type="text" />
            <button className="btn btn-outline-primary mt-3 mb-5" onClick={update}>Update</button>
        </div>
    </>
}

export default UpdateProduct;