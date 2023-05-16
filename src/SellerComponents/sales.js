import axios from "axios";
import SellerNavigation from "./sellerNevigation";
import SideNav from "./sideNav";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import api from "../WebApi/api";

function Sales() {
    const { currentSeller } = useSelector(state => state.seller);
    const [product, setProducts] = useState([]);
    const [sales, setSales] = useState([]);
    let elementCounts = {};

    const buiedProduct = async () => {
        try {
            let response = await axios.get(api.ORDER_BY_SELLER + `/${currentSeller._id}`);
            if (response.data.status)
                setProducts(response.data.sellerOrder);
            // console.log(response.data.sellerOrder);
            console.log(response.data.sellerOrder);

        } catch (err) {
            console.log(err);
        }
    }

    product.forEach(element => {
        (element.OrderItems?.quantity >= 1) ?

            elementCounts[element.productDetails] = (elementCounts[element.productDetails.title] || 0) + 1 * element.OrderItems?.quantity
            : elementCounts[element.productDetails] = (elementCounts[element.productDetails.title] || 0) + 1;

    })
    console.log(elementCounts);


    useEffect(() => {
        buiedProduct();
        setSales(elementCounts);

    }, []);

    return <>
        <SellerNavigation />
        <div className="container-fluid" >
            <div className="row">
                <div className="col-1"><SideNav /></div>
                <div className="col-8 offset-2 mt-5">
                    <div className="text-center mb-4">
                        <h3>Sold Products</h3>
                    </div>
                    <table className="table table-responsive table-hover">
                        <thead className="bg-light me-5 text-center" style={{ boxShadow: "1px 1px 3px gray" }}>
                            <th>S.No</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Date</th>
                        </thead>
                        <tbody>

                            {product.map((item, index) =>


                                <tr style={{ boxShadow: "1px 1px 3px gray" }} >
                                    {/* {console.log(item.productDetails)} */}
                                    <td>{index + 1}</td>
                                    <td>{item.productDetails.title}</td>
                                    <td>{item.OrderItems.quantity}</td>
                                    <td>{item.productDetails.price * item.OrderItems.quantity}</td>
                                    <td>{item.date.substring(0, 10)}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}
export default Sales;