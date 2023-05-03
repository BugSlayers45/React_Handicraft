import SellerNavigation from "./sellerNevigation";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Order() {
    const { currentSeller } = useSelector(state => state.seller);
    const [sellerOrder, setOrders] = useState([]);
    const navigate = useNavigate();

    const orderdetails = (totalOrders) => {
        navigate("/orderdetail", { state: { totalOrders: totalOrders } })
    }



    const orderlist = async () => {
        try {
            let response = await axios.get(`http://localhost:3000/order/getorderbyseller/${currentSeller._id}`);
            if (response.data.status)
                setOrders(response.data.sellerOrder);
            console.log(response.data.sellerOrder);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        orderlist();

    }, []);
    return <>
        <SellerNavigation />

        <div id="project" class="project" style={{ marginBottom: "5vh", marginTop: "5vh" }}>
            <div className="text-center">
                <h3>OrderList</h3>
            </div>
            <div class="container">

                <table class="table table-hover table-inverse p-2">
                    <thead className="text-center bg-light" style={{ boxShadow: "1px 1px 3px gray" }}>
                        <tr>
                            <th>S.No</th>
                            <th>OrderId</th>
                            <th>Date</th>
                            <th>Bill Amount</th>
                            <th>Contact Person</th>
                            <th>Address</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(sellerOrder)}
                        {sellerOrder.map((item, index) =>

                            <tr className="text-center" style={{ boxShadow: "1px 1px 3px gray" }} >
                                <td>{index + 1}</td>
                                <td ><button onClick={() => (orderdetails(item))} style={{ border: "none", backgroundColor: "whitesmoke" }}>{item._id}</button></td>
                                <td>{item.date.substring(0, 10)}</td>
                                <td>{item.billAmount}</td>
                                <td>{item.contactPerson}</td>
                                <td>{item.deliveryAddress}</td>
                                <td>{item.status}</td>
                            </tr>

                        )}


                    </tbody>
                </table>
            </div>
        </div >
        <Footer />
    </>
}
export default Order;