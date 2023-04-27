import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SellerNavigation from "./sellerNevigation";
import { useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

function AddProduct() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [discountPercentage, setDiscount] = useState("");
    const [rating, setRating] = useState("");
    const [stock, setStock] = useState("");
    const [categoryId, setCategory] = useState("");
    const [sellerId, setSellerId] = useState("")
    const [thumbnail, setThumbnail] = useState("");
    const [images, setImages] = useState([]);
    const navigate = useNavigate();
    const { categoryList, error, isLoading } = useSelector((state) => state.category);
    const { currentSeller } = useSelector((state) => state.seller);


    const add = async (event) => {
        try {
            let response = await axios.post("http://localhost:3000/product/save", { title, description, price, discountPercentage, rating, stock, categoryId, thumbnail, images });
            console.log(response.data.status)
            if (response.data.status)
                toast.success("Product added Successful");
            navigate("/productList");
            console.log(title + " " + description + " " + price + " " + discountPercentage + " " + rating + " " + categoryId + " " + images)

        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");

        }
    }



    return <>
        <SellerNavigation />
        <div className="container mt-5">
            <div className="col-10 mb-5" style={{ marginLeft: "7vw", backgroundColor: "whitesmoke", borderRadius: "2%", boxShadow: "2px 2px 2px" }}>
                <h3 className="text-center">Add Product</h3>
                <div className="mt-5 ml-5 mr-5">
                    <div className="form-group">
                        <label>Title</label>
                        <input className="form-control" type="text" onChange={(event) => setTitle(event.target.value)} /><br />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input className="form-control" type="text" onChange={(event) => setDescription(event.target.value)} /><br />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input className="form-control" type="text" onChange={(event) => setPrice(event.target.value)} /><br />
                    </div>
                    <div className="form-group">
                        <label>Discount</label>
                        <input className="form-control" type="text" onChange={(event) => setDiscount(event.target.value)} /><br />
                    </div>
                    <div className="form-group">
                        <label>Rating</label>
                        <input className="form-control" type="text" onChange={(event) => setRating(event.target.value)} /><br />
                    </div>
                    <div className="form-group">
                        <label>Stock</label>
                        <input className="form-control" type="text" onChange={(event) => setStock(event.target.value)} /><br />
                    </div>
                    <div className="form-group">
                        <label>Category</label><br />
                        <select onChange={(event) => setCategory(event.target.value)} className="form-control" style={{ width: "100%" }}>
                            <option selected>select menu</option>
                            {categoryList.map((category, index) => <option value={category._id}>{category.categoryName}</option>
                            )}
                        </select><br />
                    </div>
                    <div className="form-group">
                        {/* <label>SellerId</label> */}
                        <input className="form-control" name="sellerId" type="hidden" onChange={(event) => setSellerId(event.target.currentSeller.id)} /><br />
                    </div>

                    <div className="form-group">
                        <label>Thumbnail</label>
                        <input className="form-control" name="thum" type="file" onChange={(event) => setThumbnail(event.target.value)} /><br />
                    </div>
                    <div className="form-group">
                        <label>Images</label>
                        <input className="form-control" name="image" type="file" onChange={(event) => setImages(event.target.value)} multiple />
                    </div>
                    <button className="btn btn-outline-primary mt-3 mb-5" onClick={add}>Add</button>
                </div>
            </div>
        </div>
    </>
}
export default AddProduct;