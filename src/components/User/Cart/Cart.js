import React, { useEffect, useState } from "react";
import Header from "../../header/Header";
import Navigation from "../../navigation/Navigation";
import Footer from "../../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import {
  clearAllCart,
  decreaseCartQuantity,
  fetchCart,
  getTotal,
  incareaseCartQuantity,
  removeCartItem,
  updateCartItems,
} from "../../../redux-config/CartSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { IconButton, TableCell, TableRow } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import CircularStatic from "../../../SellerComponents/spinner/Spinner";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [cartSummary, setCartSummary] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const SHIPPING_FEES = 60;
  console.log(cartItems);

  function handleRemoveItem(cartItem) {
    dispatch(decreaseCartQuantity(cartItem));
  }
  function handleAddItem(cartItem) {
    dispatch(incareaseCartQuantity(cartItem));
  }
  function clearCart(cartItem) {
    dispatch(clearAllCart(cartItem));
  }
  function removeCartItems(cartItem) {
    dispatch(removeCartItem(cartItem));
  }
  React.useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <>
      <Header />
      <Navigation />
  
      <section className="auto" style={{ backgroundColor: "whitesmoke" }}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <br />
            <p>
              <span className="h2">Shopping Cart </span>
              <span className="h4"></span>
            </p>

            <div className="card mb-4">
              <div className="card-body p-4">
                {!cartItems&&<CircularStatic/>}
                {cartItems.map((items, index) => (
                  <div className="row align-items-center p-2">
                    <div
                      className="row align-items-center"
                      style={{
                        boxShadow: "1px 1px 10px",
                        borderRadius: ".5rem",
                      }}
                    >
                      <div className="col-md-2 p-2 ">
                        <img
                          src={items.productId?.thumbnail}
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Title</p>
                          <p className="lead fw-normal mb-0">
                            {items.productId?.title}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text mb-4 pb-2">Quantity</p>
                          <div className="col-xl-1">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <IconButton
                                  size="small"
                                  onClick={() => {
                                    handleAddItem(items);
                                  }}
                                >
                                  <Add color="primary" />
                                </IconButton>
                                <input
                                  type="text"
                                  className="quantity-value"
                                  pattern="[0-9]{2}"
                                  value={items.quantity}
                                />
                                <IconButton
                                  size="small"
                                  onClick={() => {
                                    handleRemoveItem(items);
                                  }}
                                >
                                  <Remove color="primary" />
                                </IconButton>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Price</p>
                          <p className="lead fw-normal mb-0">
                            ₹{items.productId?.price}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Total</p>
                          <p className="lead fw-normal mb-0">
                            {items.productId.price * items.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Delete</p>
                          <Button
                            onClick={() => removeCartItems(items)}
                            variant="outlined"
                            color="error"
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <TableRow>
                <TableCell rowSpan={4} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell
                  width="100%"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  ₹{parseFloat(totalAmount).toFixed(2)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Total Quantity</TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  {totalQuantity}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Shipping Fees</TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  ₹{SHIPPING_FEES}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  ₹{parseFloat(SHIPPING_FEES + totalAmount).toFixed(2)}
                </TableCell>
                <TableRow>
                <Button
                    onClick={() => clearCart()}
                    variant="contained"
                    color="warning"
                  >
                    ClearCart
                  </Button>
                </TableRow>
              </TableRow>
              
            </div>
          </div>
        </div>
       
      </section>

      <Footer />
    </>
  );
}
