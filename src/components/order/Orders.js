import "../order/order.css";
import "../order/order2.css"
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CustomerOrders() {
  const { currentCustomer } = useSelector((state) => state.customer);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const orderDetail = (order) => {
    navigate("/orderdetail", {
      state: { order: order }
    })
  }

  const orderList = async () => {
    try {
      const response = await axios.post("http://localhost:3000/order/orderdetail", { id: currentCustomer._id })
      console.log(response.data);
      setOrders(response.data.order)
    } catch (err) {
      console.log("Something went wrong")
    }
  }
  useEffect(() => {
    orderList();

  }, [])
  return <>
    <div className="hero_area">
      {/* header section strats */}
      <Header />
      <Navigation />
      {/* end header section */}
      {orders?.map((order, index) =>

        <div id="accordion" class="panel-group container col-8 mt-5">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h4 class="panel-title">

                <div class="list-group mb-5">
                  <div class="list-group-item p-3" style={{ position: "relative", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}>
                    <div class="row w-100 no-gutters">
                      <div class="col-6 col-lg">
                        <h6 class="text-charcoal mb-0 w-100">Order Number</h6>
                        <a href={"#index" + index + 1} data-toggle="collapse" data-parent="#accordion" class="text-pebble mb-0 w-100 mb-2 mb-md-0">{order._id}</a>
                      </div>
                      <div class="col-6 col-lg">
                        <h6 class="text-charcoal mb-0 w-100">Date</h6>
                        <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">{order.date.substring(0, 10)}</p>
                      </div>
                      <div class="col-6 col-lg">
                        <h6 class="text-charcoal mb-0 w-100">Total</h6>
                        <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">{order.billAmount}</p>
                      </div>
                      <div class="col-6 col-lg">
                        <h6 class="text-charcoal mb-0 w-100">Shipped To</h6>
                        <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">{order.contactPerson}</p>
                      </div>
                      <div class="col-6 col-lg">
                        <h6 class="text-charcoal mb-0 w-100">Status</h6>
                        <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">{order.status}</p>
                      </div>
                      <div class="col-12 col-md-3">
                        <a href={"#index" + index + 1} data-toggle="collapse" data-parent="#accordion" class="btn btn-success w-90">View Order</a>
                      </div>
                    </div>

                  </div>

                </div>

              </h4>
            </div>

            <div id={"index" + index + 1} class="panel-collapse collapse">

              <div class="list-group mb-5">

                <div class="list-group-item p-3 bg-white">

                  <div class="row no-gutters">
                    <div class="col-12 col-md-9 pr-0 pr-md-3">
                      <div class="alert p-2 alert-success w-100 mb-0">
                        <h6 class="text-green mb-0"><b>Shipped</b></h6>
                        <p class="text-green hidden-sm-down mb-0">Est. delivery between Aug 5 – Aug 9th, 2017</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-3">
                      <a href="" class="btn btn-secondary w-90 mb-2">Track Shipment</a>
                    </div>
                    {order.orderItem?.filter((filterItem) => filterItem.product).map((item) =>


                      <div class="row no-gutters mt-3">

                        <div class="col-3 col-md-1">
                          <img class="img-fluid pr-3" src={item.product.thumbnail} alt="" />
                        </div>
                        <div class="col-9 col-md-8 pr-0 pr-md-3">
                          <h6 class="text-charcoal mb-2 mb-md-1">
                            <a href="" class="text-charcoal">{item.product.title}</a>
                          </h6>
                          <ul class="list-unstyled text-pebble mb-2 small">
                            <li class="">
                              <b>Price :</b> {item.product.price}
                            </li>
                            <li class="">
                              <b>Quantity:</b> {item.quantity}
                            </li>
                          </ul>
                          <h6 class="text-charcoal text-left mb-0 mb-md-2"><b>Total Price : {item.product.price * item.quantity}</b></h6>
                        </div>
                        <div class="col-12 col-md-3 hidden-sm-down">
                          <a href="" class="btn btn-secondary w-90 mb-2">Buy Again</a>
                          <a href="" class="btn btn-secondary w-90">Give Review</a>
                        </div>


                      </div>
                    )}
                    <div className="something went wrong"></div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      )}
    </div>

  </>
}