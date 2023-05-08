import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addItemIntoCart, updateCartItems } from "../../redux-config/CartSlice";
import { fetchWishlist } from "../../redux-config/wishlistSlice";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import "./wishlist.css";

export default function Wishlist() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { wishlistItem, wishlistError, flag } = useSelector((state) => state.wishlist);
  console.log(wishlistItem?.wishlistItems)
  const { currentCustomer } = useSelector((state) => state.customer);
  const { cartItems, cartError } = useSelector((state) => state.cart);
 
  const addToCart = (products) => {
    console.log(products + "product sdkjfnjkn");
    if (!currentCustomer) toast.warning("Please Login For cart");
    else {
      let status = true;
      if (cartItems.length != 0)
        status = cartItems.some((item) => item.productId._id == products._id);
      else status = false;
      if (status) toast.info("Item is already added in cart");
      else {
        dispatch(
          addItemIntoCart({
            customerId: currentCustomer._id,
            productId: products._id,
          })
        );
        if (!cartError) {
          dispatch(updateCartItems(products));
          toast.success("Item Successfuly Added in Cart");
        }
        else {
          toast.error("!Oop somthing went wrong");
        }
      }
    }
  };
  const wishList = ()=>{ 
  dispatch(fetchWishlist({ customerId: currentCustomer?._id }));
};
  const productDescriptionId = (productDid) => {
    navigate("/productdescription", { state: { productDetail: productDid } });
  };

  const deletefromWishlist = async(product)=>{
    let response=await axios.post("http://localhost:3000/wishlist/delete",{customerId:currentCustomer._id,productId:product._id})
    console.log(response.data);
    if(response.data.status){
      wishList();
    }

    
  }
  
   useEffect(()=>{
    wishList();

   },[])
  return <>
    <Header />
    <Navigation />
    <div className="cart-wrap">
      <div className="container">
        <div className="row">

          <div className="main-heading mb-10 text-center" >My wishlist</div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-6">
                <ul className="list-inline shop-top-menu pb-3 pt-1">
                  <li className="list-inline-item">
                    <form
                      action=""
                      method="get"
                      className="modal-content modal-body border-0 p-0"
                    >
                      <div className="input-group mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="inputModalSearch"
                          name="q"
                          placeholder="Search ..."
                        />
                        <button
                          type="submit"
                          className="input-group-text bg-success text-light"
                        >
                          <i className="fa fa-fw fa-search text-white" />
                        </button>
                      </div>
                    </form>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="h3 text-dark text-decoration-none mr-3"
                      href="#"
                    >
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
           
          </div>


        </div>
        <div className="row">
              <div className="container">
              <div className="row">
                {currentCustomer && wishlistItem?.wishlistItems?.map((products, index) => (
                  <div key={index} className="col-md-4">
                    <div
                      className="card mb-4 product-wap rounded-0"
                      style={{ height: "500px" }}
                    >
                      <div className="card rounded-0">
                        <img
                          className="card-img rounded-1  img-fluid"
                          style={{ height: "300px" }}
                          src={products.productId?.thumbnail}
                        />
                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                          <ul className="list-unstyled">
                          <li>
                            <a
                             onClick = {()=>deletefromWishlist(products.productId)}
                              className="btn btn-success text-white"
                            >
                              <i i class="fa fa-trash" aria-hidden="true"></i>

                            </a>
                          </li>
                            <li>
                              <button
                                className="btn btn-success text-white mt-2"
                                onClick={() => productDescriptionId(products)}
                              >
                                <i className="far fa-eye" />
                              </button>
                            </li>
                            <li>
                              <Link
                                onClick={() => addToCart(products)}
                                className="btn btn-success text-white mt-2"
                              >
                                <i className="fas fa-cart-plus" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <a
                          href="shop-single.html"
                          className="h3 text-decoration-none"
                        >
                          {products.productId.title}
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
                        <p className="text-center mb-0">{products.productId?.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {!currentCustomer && <div>Wishlist is empty</div>}
                </div>
              </div>
            </div>

      </div>
    </div>
    <Footer />
  </>
}