import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ProductDescription() {
  const location = useLocation();
  const productDetail = location.state.productDetail;
  const imageArray = productDetail.images
  return <>
    <h1 className="text-center display-3">Product Description</h1>
    <div className="container-fluid mt-5">
      <div className="row col-lg-12">
        <div className="col-lg-12 d-flex" >
          <div className="col-lg-1 " >
            <div className="col-lg-3 col-md-2">
              {imageArray.map((singleImage, index) => (
                <img
                  src={singleImage}
                  id="smallimage"
                  style={{ height: 70, width: 70 }}
                  className="mb-3
                  mt-3"
                />
              ))}
            </div>
            <div id="lens" />
          </div>
          <div
            className="col-lg-5"
          >
            <img
              src={productDetail.thumbnail}
              style={{ height: 450, width: 550 }}
            />
          </div>
          <div
            className="col-lg-5 offset-1">
            <div className="col-lg-12 col-md-5 col-md-10">
              <h6 className="disabled">{productDetail.categoryId?.categoryName}</h6>
              <h2 className="title" style={{ color: "black" }}>
                {productDetail.title}
              </h2>
              <h4>
                Rating:{productDetail.rating}
                <div style={{ color: "goldenrod" }}>
                  <i className="fa fa-star fa-xs" aria-hidden="true" />
                  <i className="fa fa-star fa-xs" aria-hidden="true" />
                  <i className="fa fa-star fa-xs" aria-hidden="true" />
                  <i className="fa fa-star fa-xs" aria-hidden="true" />
                </div>
              </h4>
              <h5 style={{ color: "brown" }}> Deal of the day ₹{(productDetail.price - (productDetail.price * productDetail.discountPercentage) / 100).toFixed(1)}</h5>
              <del><small style={{ color: "brown" }}>Price:₹{productDetail.price}</small></del>
              <small className="title" style={{ color: "black" }}><br />
                <i class="fa fa-check-circle" aria-hidden="true"></i> Made in India<br />
                <small><i class="fas fa-dot-circle    " style={{ color: "green" }}></i>In Stock({productDetail.stock})</small>
              </small>
              <h5>Quantitiy:</h5>
              <input type="number" name="quantity" id="inputquantity" defaultValue={1} className="form-control" min={1} style={{ width: "90px" }} title /> <br />
              <button type="button" name id className="btn btn-secondary btn-lg btn-block">Add TO Cart</button>
              <button type="button" name id className="btn btn-dark btn-lg btn-block">Buy It Now</button>

            </div>

          </div>
        </div>
      </div>
      <div className="card-body">
        <small className="card-title"> Description:<br />
          {productDetail.description}
        </small>





        <div>
          <main className="container">
            <h2 className="card-text">Product Reviews<i className="fa fa-star" aria-hidden="true"></i>
            </h2>
            <div className="d-flex align-items-center p-3 my-3 text-dark-50 bg-purple rounded shadow-sm">
              <img className="mr-3" style={{ width: "50px", height: "50px" }} src={productDetail.thumbnail} />
              <div className="lh-1">
                <h6 className="mb-1 text-dark lh-2">Rating:</h6>
                <small className="text-sm-left lh-base font-normal text-lowercase text-decoration-none text-reset">
                  Learn Modern JavaScript, from an Open Source Book that teaches anyone how to code with JavaScript using the node.js runtime environment rather than a browser and by the end, you will build a server and a website using JavaScript.
                </small>
              </div>
            </div>
          </main>
        </div>




      </div>

    </div>
  </>
}
