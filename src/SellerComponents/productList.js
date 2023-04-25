import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import SellerNavigation from "./sellerNevigation";
import Footer from "../components/footer/Footer";
import UpdateProduct from "./updateProduct";

function ProductList() {
    const { currentSeller } = useSelector(state => state.seller);
    console.log(currentSeller);
    const [products, setProductList] = useState([]);
    const navigate = useNavigate();


    const productlist = async () => {
        try {
            let response = await axios.get(`http://localhost:3000/product/productList/${currentSeller._id}`)
            // window.alert(response)

            setProductList(response.data.productsList)
        } catch (err) {
            console.log(err);
        }
    }

    const deleteProduct = async (id) => {
        try {
            let response = await axios.post(`http://localhost:3000/product/delete/${id}`)
            console.log(response.data.status)
            productlist()
        } catch (err) {
            console.log(err);
            window.alert(err);
        }
    }

    useEffect(() => {
        productlist();

    }, []);
    return <>
        <SellerNavigation />
        <div className="container-fluid mt-5">
            <div className="row">

                <div className="col-12">

                    <table className="table table-responsive table-hover">
                        <thead className="text-center">
                            <tr>
                                <th>S.No</th>

                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Rating</th>
                                <th>Stock</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {products.map((product, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td><img className="img-fluid" src={product.thumbnail} style={{ height: "100px", width: "100px", borderRadius: "30%" }} /></td>
                                    <td>{product.title.substring(0, 15)}</td>

                                    <td>{product.description.substring(1, 40)}</td>
                                    <td>{product.price}</td>
                                    <td>{product.discountPercentage}</td>
                                    <td>{product.rating}</td>
                                    <td>{product.stock}</td>
                                    <td><button className="btn btn-outline-primary" ><Link to="/updateproduct">Edit</Link></button></td>
                                    <td><button onClick={() => deleteProduct(product._id)}><i class="fas fa-trash-alt" style={{ color: "red" }}></i></button></td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>
            </div>
        </div >
        <Footer />
    </>
}

export default ProductList;