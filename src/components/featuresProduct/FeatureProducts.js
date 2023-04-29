import React from 'react'
import { useSelector } from 'react-redux'
import "../featuresProduct/features.css"


export default function FeatureProducts() {
  const{featuresProductList,isLoading,error}=useSelector(state=>state.featuresproduct)
  return <>
  
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
       {!error&&featuresProductList.map((products,index)=>
          <div className="col-md-3">
            <div className="card mb-4 product-wap rounded-0" style={{height:"500px"}}>
              <div className="card rounded-0">
                <img
                  className="card-img rounded-1  img-fluid" style={{height:"300px"}}
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
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-muted fa fa-star" />
                    <i className="text-muted fa fa-star" />
                  </li>
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
