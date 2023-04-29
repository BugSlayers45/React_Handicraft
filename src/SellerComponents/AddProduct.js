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
    const [sellerId, setSellerId] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [images, setImages] = useState([]);
    const navigate = useNavigate();
    const { categoryList, error, isLoading } = useSelector((state) => state.category);
    const { currentSeller } = useSelector((state) => state.seller);


    const add = async (event) => {
        try {
            console.log(title + " " + description + " " + price + " " + discountPercentage + " " + rating + " " + categoryId + " " + images)
            let response = await axios.post("http://localhost:3000/product/save", { title, description, price, discountPercentage, rating, stock, categoryId, thumbnail, images });
            console.log(response.data.status)
            if (response.data.status)
                window.alert("Product added Successful");
            navigate("/productList");


        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");

        }
    }



    return <>
        <SellerNavigation />


        <div className="container mb-3 mt-5" style={{ marginLeft: "22vw", marginTop: "5px" }} >
            <div className=" row">
                <div className="login-box col-lg-8" style={{ boxShadow: "1px 3px 15px  gray" }}><br />
                    <h2 className="text-center">Add Product</h2><hr />

                    <form className="mt-5 ml-4 mr-4" onSubmit={add}>
                        <div className="user-box form-group">

                            <label>Title</label><br />
                            <input type="text" onChange={(event) => setTitle(event.target.value)} className="form-control" /><br />

                        </div>
                        <div className="user-box">

                            <label>Description</label><br />
                            <input type="text" onChange={(event) => setDescription(event.target.value)} className="form-control" /><br />

                        </div>
                        <div className="user-box">

                            <label>Price</label><br />
                            <input type="text" onChange={(event) => setPrice(event.target.value)} className="form-control" /><br />

                        </div>

                        <div className="user-box">

                            <label>Discount</label><br />
                            <input type="text" onChange={(event) => setDiscount(event.target.value)} className="form-control" /><br />

                        </div>
                        <div className="user-box">

                            <label>Rating</label><br />
                            <input type="text" onChange={(event) => setRating(event.target.value)} className="form-control" required="" /><br />
                        </div>
                        <div className="user-box">

                            <label>Stock</label><br />
                            <input type="text" onChange={(event) => setStock(event.target.value)} className="form-control" required="" /><br />
                        </div>
                        <div className="user-box">

                            <label>Category</label><br />
                            <select onChange={(event) => setCategory(event.target.value)} className="form-control" style={{ width: "100%" }}>
                                <option selected>Select menu</option>
                                {categoryList.map((category, index) => <option value={category._id}>{category.categoryName}</option>
                                )}
                            </select><br />
                        </div>
                        <div className="form-group">
                            {/* <label>SellerId</label> */}
                            <input className="form-control" name="sellerId" type="hidden" onChange={(event) => setSellerId(event.target.currentSeller.id)} />
                        </div>
                        <div className="user-box">

                            <label>Thumbnail</label><br />
                            <input type="file" name="thum" onChange={(event) => setThumbnail(event.target.value)} className="form-control" /><br />
                        </div>
                        <div className="user-box">

                            <label>Images</label><br />
                            <input type="file" name="image" onChange={(event) => setImages(event.target.value)} className="form-control" multiple /><br />
                        </div>


                        <button type="submit" className="btn btn-dark mt-2 mb-5" onClick={add} style={{ borderRadius: "5%" }}>
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div >


    </>
}
export default AddProduct;