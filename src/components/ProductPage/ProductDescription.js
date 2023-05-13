import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { addItemIntoCart } from "../../redux-config/CartSlice";
import { updateCartItems } from "../../redux-config/CartSlice";
import Navigation from "../navigation/Navigation";
import ReactImageMagnify from "react-image-magnify";

export default function ProductDescription() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetail = location.state.productDetail;
  const imageArray = productDetail.images;
  const { currentCustomer } = useSelector((state) => state.customer);
  const { cartItems, cartError } = useSelector((state) => state.cart);

  const addToCart = (products) => {
    if (!currentCustomer) {
      toast.warning("Please Login For cart");
    } else {
      dispatch(
        addItemIntoCart({
          customerId: currentCustomer._id,
          productId: products._id,
        })
      );
      if (!cartError) {
        dispatch(updateCartItems(products));
        toast.success("Item Successfuly Added in Cart");
        navigate("/cart");
      } else {
        toast.error("!Oop somthing went wrong");
      }
    }
  };
  const handleClick = (i) => {
    console.log(i);
  };

  return (
    <>
      <ToastContainer />
      <Navigation />
      <h3 className="text-center display-5">Product Description</h3>
      <div className="container-fluid mt-5">
        <div className="row col-lg-12">
          <div className="col-lg-12 d-flex">
            <div className="col-lg-1">
              <div className="col-lg-3 col-md-10">
                {imageArray.map((singleImage, index) => (
                  <img
                    key={index}
                    onClick={() => handleClick(index)}
                    src={singleImage}
                    id="smallimage"
                    style={{ height: 70, width: 70 }}
                    className="mb-3
                  mt-3"
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: productDetail.thumbnail,
                  },
                  largeImage: {
                    src: productDetail.thumbnail,
                    width: 1500,
                    height: 2000,
                  },
                }}
                style={{ zIndex: "2" }}
              />
            </div>
            <Col md={10}>
              <div className="col-lg-5 col-md-10 offset-1">
                <div className="col-lg-12 col-md-5 col-md-10">
                  <h6 className="disabled">
                    {productDetail.categoryId?.categoryName}
                  </h6>
                  <h2 className="title" style={{ color: "black" }}>
                    {productDetail.title}
                  </h2>
                  <Rating
                    name="half-rating-read"
                    defaultValue={productDetail.rating}
                    precision={0.5}
                    readOnly
                  />
                  <small className="disabled">{productDetail.rating}</small>
                  <h5 style={{ color: "brown" }}>
                    {" "}
                    Deal of the day ₹
                    {(
                      productDetail.price -
                      (productDetail.price * productDetail.discountPercentage) /
                      100
                    ).toFixed(1)}
                  </h5>
                  <del>
                    <small style={{ color: "brown" }}>
                      Price:₹{productDetail.price}
                    </small>
                  </del>
                  <small className="title" style={{ color: "black" }}>
                    <br />
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Made
                    in India
                    <br />
                    <small>
                      <i
                        class="fas fa-dot-circle    "
                        style={{ color: "green" }}
                      ></i>
                      In Stock({productDetail.stock})
                    </small>
                  </small>
                  <br />
                  <br />
                  <div className=" col-lg-12  offset-1">
                    <button
                      type="button"
                      onClick={() => addToCart(productDetail)}
                      name
                      id
                      className="col-lg-5 col-sm-12 btn btn-warning"
                    >
                      Add to Cart
                    </button>
                    <button
                      type="button"
                      name
                      id
                      className="btn btn-success col-sm-12 col-lg-5 ml-2"
                    >
                      Buy Now
                    </button>
                  </div>
                  <br />
                  <div className="col-md-12">
                    <img
                      src="https://www.ecraftindia.com/cdn/shop/files/Authentic_product_black_100x100.jpg?v=1643437476"
                      className="img-fluid rounded-top col-md-3"
                      alt
                    />
                    <img
                      src="https://www.ecraftindia.com/cdn/shop/files/Free_Shipping_black_100x100.jpg?v=1643437500"
                      className="img-fluid rounded-top col-md-3"
                      alt
                    />
                    <img
                      src="https://www.ecraftindia.com/cdn/shop/files/make-in-india_f35f6d85-9268-422f-9dc6-c66787669bc5_100x100.jpg?v=1665206712"
                      className="img-fluid rounded-top col-md-3"
                      alt
                    />
                    <img
                      src="https://www.ecraftindia.com/cdn/shop/files/COD_Available_black_100x100.jpg?v=1643437514"
                      className="img-fluid rounded-top col-md-3"
                      alt
                    />
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </div>
        <div className="card-body">
          <small className="card-title">
            {" "}
            Description:
            <br />
            {productDetail.description}
          </small>
          <div>
            <main className="container">
              <h3 className="card-text">
                Product Reviews<i className="" aria-hidden="true"></i>
              </h3>
              <div className="d-flex align-items-center p-3 my-3 text-dark-50 bg-purple rounded shadow-sm">
                <img
                  className="mr-3"
                  style={{ width: "50px", height: "50px" }}
                  src={productDetail.thumbnail}
                />
                <div className="lh-1">
                  <h6 className="mb-1 text-dark lh-2">Rating:</h6>
                  <small className="text-sm-left lh-base font-normal text-lowercase text-decoration-none text-reset">
                    Learn Modern JavaScript, from an Open Source Book that
                    teaches anyone how to code with JavaScript using the node.js
                    runtime environment rather than a browser and by the end,
                    you will build a server and a website using JavaScript.
                  </small>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}