import React from 'react'
import { useSelector } from 'react-redux'
import "../featuresProduct/features.css"
import { Rating } from '@mui/material'


export default function FeatureProducts() {
  const { featuresProductList, isLoading, error } = useSelector(state => state.featuresproduct)
  return <>

   {/* Gallery */}
{/* <div className="row">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" className="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />
    <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp" className="w-100 shadow-1-strong rounded mb-4" alt="Wintry Mountain Landscape" />
  </div>
  <div className="col-lg-4 mb-4 mb-lg-0">
    <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp" className="w-100 shadow-1-strong rounded mb-4" alt="Mountains in the Clouds" />
    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" className="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />
  </div>
  <div className="col-lg-4 mb-4 mb-lg-0">
    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp" className="w-100 shadow-1-strong rounded mb-4" alt="Waves at Sea" />
    <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp" className="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" />
  </div>
</div> */}
{/* Gallery */}
    {/* Start Featured Product */}
    <section className="bg-light">
      <div className="container py-5">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Featured Product</h1>
            <p>
              Don’t miss out on these amazing deals
            </p>
          </div>
        </div>
        <div className="row">
          {!error && featuresProductList.map((products, index) =>
            <div className="col-md-3">
              <div className="card mb-4 product-wap rounded-0" style={{ height: "500px" }}>
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-1  img-fluid" style={{ height: "300px" }}
                    src={products.thumbnail}
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="btn btn-success text-white"
                          href="shop-single.html"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="fas fa-cart-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a href="shop-single.html" className="h3 text-decoration-none">
                    {products.title}
                  </a>
                  <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <Rating name="half-rating-read" defaultValue={products.rating} precision={0.5} readOnly />

                  </ul>
                  <p className="text-center mb-0">{products.price}</p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
    {/* End Featured Product */}
  </>


}
