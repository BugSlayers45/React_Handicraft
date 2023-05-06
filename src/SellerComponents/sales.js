import axios from "axios";
import SellerNavigation from "./sellerNevigation";
import SideNav from "./sideNav";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Sales() {
    const { currentSeller } = useSelector(state => state.seller);
    const [product, setProducts] = useState([]);

    const buiedProduct = async () => {
        try {
            let response = await axios.get(`http://localhost:3000/order/getorderbyseller/${currentSeller._id}`);
            if (response.data.status)
                setProducts(response.data.sellerOrder);
            // console.log(response.data.sellerOrder);
            console.log(response.data.sellerOrder);

        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        buiedProduct();

    }, []);

    return <>
        <SellerNavigation />
        <div className="container-fluid" >
            <div className="row">
                <div className="col-1"><SideNav /></div>
                <div className="col-8 offset-2 mt-5">
                    <table className="table table-responsive table-hover">
                        <thead className="bg-light me-5" style={{ boxShadow: "1px 1px 3px gray" }}>
                            <th>S.No</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Date</th>
                        </thead>
                        <tbody>
                            {product.map((item, index) =>

                                <tr>
                                    {console.log(item.productDetails)}
                                    <td>{index + 1}</td>
                                    <td></td>
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