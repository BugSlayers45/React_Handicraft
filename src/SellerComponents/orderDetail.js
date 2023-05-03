import { useLocation } from "react-router-dom";

function OrderDetail() {
    const location = useLocation([]);
    const totalOrders = location.state.totalOrders;
    console.log(totalOrders.customerid + "gdcr dgv o")

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
                   for(totalOrders in )
                    <div className="card card-2 mt-3">
                        <div className="card-body">
                            <div className="media">
                                <div className="sq align-self-center ">

                                    <img className="img-fluid  my-auto align-self-center mr-2 mr-md-4 " src='' style={{ height: "15vh", width: "7vw" }} />
                                </div>
                                <div className="media-body my-auto text-right">
                                    <div className="row  my-auto flex-column flex-md-row">
                                        <div className="col" style={{ textAlign: "center" }}>

                                        </div>
                                        <div className="col-md-2">Qty :</div>
                                        <div className="col my-auto">
                                            <h6 className="mb-0">
                                                Total BillAmount :
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-3 " />
                            <div className="row">
                                <div className="col-lg-3 ">
                                    <h6 className="mb-0">Title :</h6>
                                </div>
                                <div className="col-auto my-auto">

                                </div>
                                <div className="col mt-auto offset-2">
                                    <div>Order Placed Date : </div>
                                    <div>OrderID :</div>

                                </div>
                                <div>
                                    <div>Address :</div>

                                </div>
                            </div>
                        </div>
                    </div>
{/* ------------------------------ */}
                </div>
            </div>
        </div>

    </>
}
export default OrderDetail;