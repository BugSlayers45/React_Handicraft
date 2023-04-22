import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import CategorySlice from '../../redux-config/CategorySlice'

export default function Products() {
  const{categoryList,error,isLoading}=useSelector((state)=>state.category)
   const [products,setProducts]=useState([])
   const productList=async ()=>{
    try{
      let response=await axios.get("http://localhost:3000/product/viewproduct")
      // window.alert(response)
      console.log(response.data)
      setProducts(response.data.products)
    }catch(err){
         console.log(err)
    }
   }
   useEffect(()=>{
    productList();

   },[])
  return <>
  {/* Start Content */}
  <div className="container py-5">
    <div className="row">
      <div className="col-lg-3">
        <h1 className="h2 pb-4">Categories</h1>
        <ul className="list-unstyled templatemo-accordion">
        {categoryList.map((category)=>
          <Link to="#" className='h3 text-dark text-decoration-none mr-3'><li className="pb-3">
           {category.categoryName}
          </li></Link>
           )}
        </ul>
      </div>
      <div className="col-lg-9">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-inline shop-top-menu pb-3 pt-1">
              <li className="list-inline-item">
                <a className="h3 text-dark text-decoration-none mr-3" href="#">
                  All
                </a>
              </li>
              <li className="list-inline-item">
                <a className="h3 text-dark text-decoration-none mr-3" href="#">
                  Men's
                </a>
              </li>
              <li className="list-inline-item">
                <a className="h3 text-dark text-decoration-none" href="#">
                  Women's
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 pb-4">
            <div className="d-flex">
              <select className="form-control">
                <option>Featured</option>
                <option>A to Z</option>
                <option>Top rating</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
         {products.map((products,index)=>
          <div className="col-md-4">
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
          </div>)}
        </div>
        <div div="row">
          <ul className="pagination pagination-lg justify-content-end">
            <li className="page-item disabled">
              <a
                className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
                href="#"
                tabIndex={-1}
              >
                1
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                href="#"
              >
                2
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                href="#"
              >
                3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* End Content */}
</>

}
