import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function OrderDetail() {
    const [detail, setDetail] = useState([])
    const location = useLocation([]);
    const { totalOrders } = location.state;
    useEffect(() => {
        setDetail(totalOrders);
    }, []);
    // window.alert(detail.totalOrders.billAmount)
    // console.log(detail.totalOrders.billAmount);
    // console.log(detail.totalOrders.productDetails.title);
    // console.log(detail.totalOrders.productDetails.description);
    // console.log(detail.totalOrders.OrderItems.quantity);
    // console.log(totalOrders.productDetails.title);

    return <>

        <div className="container">
            <div
                style={{
                    textAlign: "center",
                    boxShadow: "2px 2px 10px",
                    width: "60%",
                    marginLeft: "16vw",
                    marginBottom: "3vh"
                }}
            >
                <h1>Order-History</h1>
            </div>
            <div className="row">
                <div className="col-md-12">

                    < div className="card card-2 mt-3">
                        <div className="card-body">
                            <div className="media d-flex">
                                <div className="sq align-self-center ">

                                    <img className="img-fluid  my-auto align-self-center mr-2 mr-md-4 " src={detail.productDetails.thumbnail} style={{ height: "15vh", width: "12vw" }} />
                                </div>
                                <div className="media-body my-auto text-right">
                                    <div className="row  my-auto flex-column flex-md-row ">
                                        <div className="col" style={{ textAlign: "center" }}><small>
                                            {detail.productDetails.description}
                                        </small>
                                        </div>
                                        <div className="col-md-2">Qty : {detail.totalOrders.OrderItems.quantity}</div>
                                        <div className="col my-auto">
                                            <h6 className="mb-0">
                                                Total BillAmount : {detail.OrderItems.billAmount}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-3 " />
                            <div className="row">
                                <div className="col-lg-3 ">
                                    <h6 className="mb-0">Title : {detail.productDetails.title}</h6>
                                </div>
                                <div className="col-auto my-auto">

                                </div>
                                <div className="col mt-auto offset-2">
                                    <div>Order Placed Date : {detail.OrderItems.date}</div>
                                    <div>OrderID : {detail.OrderItems._id} </div>

                                </div>
                                <div>
                                    <div>Address : {detail.OrderItems.deliveryAddress} </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >

    </>
}
export default OrderDetail;