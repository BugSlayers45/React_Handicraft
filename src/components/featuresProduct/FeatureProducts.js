import React from 'react'
import "../featuresProduct/features.css"

export default function FeatureProducts() {
  return <>
  <>
  {/* Gallery */}
  <div className="row">
    <div className=" col-lg-4 col-md-12 mb-4 mb-lg-0">
      <div className='img-hover-zoom' >
      <img
        src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_520,h_400/https://akkaara.co.in/wp-content/uploads/2019/11/10-removebg-preview-1-520x400.png"
        className="w-100 shadow-1-strong rounded mb-4" 
        alt="Boat on Calm Water"
      /></div>
      <div className='img-hover-zoom'>
      <img
        src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_897/https://akkaara.co.in/wp-content/uploads/2019/01/elephant_product1-897x1091.jpg"
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Wintry Mountain Landscape"
      /></div>
    </div>
    <div className="col-lg-4 mb-4 mb-lg-0">
    <div className='img-hover-zoom'>
      <img
        src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_750,h_920/https://akkaara.co.in/wp-content/uploads/2019/11/EEFE250F-338F-404A-9681-B6B934D364C6-750x920.jpg"
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Mountains in the Clouds"
      /></div>
      <div className='img-hover-zoom'>
      <img
        src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_520,h_500/https://akkaara.co.in/wp-content/uploads/2019/01/tressure-520x500.jpg"
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
      /></div>
    </div>
    <div className="col-lg-4 mb-4 mb-lg-0">
     <div className='img-hover-zoom'>
      <img
        src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_520,h_400/https://akkaara.co.in/wp-content/uploads/2019/01/impreession-520x400.jpg"
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Yosemite National Park"
      />
      </div>
      <div className='img-hover-zoom'>
       <img
        src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_897/https://akkaara.co.in/wp-content/uploads/2019/11/45-897x1091.jpg"
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Waves at Sea"
      />
      </div>
    </div>
  </div>
  {/* Gallery */}
</>

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
        <div className="col-12 col-md-3 mb-4">
          <div className="card h-70">
            <a href="shop-single.html">
              <img
                src="./assets/img/feature_prod_01.jpg"
                className="card-img-top"
                alt="..."
              />
            </a>
            <div className="card-body">
              <ul className="list-unstyled d-flex justify-content-between">
                <li>
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-muted fa fa-star" />
                  <i className="text-muted fa fa-star" />
                </li>
                <li className="text-muted text-right">$240.00</li>
              </ul>
              <a
                href="shop-single.html"
                className="h2 text-decoration-none text-dark"
              >
                Gym Weight
              </a>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                in culpa qui officia deserunt.
              </p>
              <p className="text-muted">Reviews (24)</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mb-4">
          <div className="card h-70">
            <a href="shop-single.html">
              <img
                src="./assets/img/feature_prod_02.jpg"
                className="card-img-top"
                alt="..."
              />
            </a>
            <div className="card-body">
              <ul className="list-unstyled d-flex justify-content-between">
                <li>
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-muted fa fa-star" />
                  <i className="text-muted fa fa-star" />
                </li>
                <li className="text-muted text-right">$480.00</li>
              </ul>
              <a
                href="shop-single.html"
                className="h2 text-decoration-none text-dark"
              >
                Cloud Nike Shoes
              </a>
              <p className="card-text">
                Aenean gravida dignissim finibus. Nullam ipsum diam, posuere
                vitae pharetra sed, commodo ullamcorper.
              </p>
              <p className="text-muted">Reviews (48)</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mb-4">
          <div className="card h-70">
            <a href="shop-single.html">
              <img
                src="./assets/img/feature_prod_03.jpg"
                className="card-img-top"
                alt="..."
              />
            </a>
            <div className="card-body">
              <ul className="list-unstyled d-flex justify-content-between">
                <li>
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                </li>
                <li className="text-muted text-right">$360.00</li>
              </ul>
              <a
                href="shop-single.html"
                className="h2 text-decoration-none text-dark"
              >
                Summer Addides Shoes
              </a>
              <p className="card-text">
                Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar
                sagittis diam, et scelerisque ipsum lobortis nec.
              </p>
              <p className="text-muted">Reviews (74)</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mb-4 ">
          <div className="card h-70">
            <a href="shop-single.html">
              <img
                src="./assets/img/feature_prod_01.jpg"
                className="card-img-top"
                alt="..."
              />
            </a>
            <div className="card-body">
              <ul className="list-unstyled d-flex justify-content-between">
                <li>
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-muted fa fa-star" />
                  <i className="text-muted fa fa-star" />
                </li>
                <li className="text-muted text-right">$240.00</li>
              </ul>
              <a
                href="shop-single.html"
                className="h2 text-decoration-none text-dark"
              >
                Gym Weight
              </a>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                in culpa qui officia deserunt.
              </p>
              <p className="text-muted">Reviews (24)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Featured Product */}
</>

  
}
