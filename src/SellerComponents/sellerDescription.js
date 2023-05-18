import { useLocation } from "react-router-dom";
import SellerNavigation from "./sellerNevigation";
import ReactImageMagnify from "react-image-magnify";
import { useRef } from "react";
import { useSelector } from "react-redux";

function SellerProduct() {
    const location = useLocation();
    let productData = location.state.productData;
    const imageArray = productData.images;
    const { currentSeller } = useSelector(state => state.seller);

    var mainImageRef = useRef("");

    const handleImageClick = (event) => {
        const clickedImageSrc = event.target.src;
        mainImageRef.current.src = clickedImageSrc;
    };

    return <>
        <nav className="navbar navbar-expand-lg navbar-light shadow" >
            <div className="container d-flex justify-content-between align-items-center">
                <a
                    className="navbar-brand text-success logo h2 align-self-center"
                    href="index.html"
                >
                    <img
                        src="./assets/img/logo1.png"
                        style={{ width: "190px", height: "90px" }}
                        className=""
                        alt=""
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {currentSeller &&
                        <div>
                            <p><i class="fa fa-user-circle" aria-hidden="true" >{currentSeller.sellerEmail}</i></p>

                        </div>}

                </div>
            </div>

        </nav >
         <div className="container-fluid mt-5">

            <div className="row col-lg-12">
                <div className="col-lg-12 d-flex" >
                    <div className="col-lg-1 " >
                        <div className="col-lg-3 col-md-2">
                            {/* {imageArray.map((singleImage, index) => (
                                <img
                                    onClick={handleImageClick} src={singleImage} style={{ height: 70, width: 70 }} className="mb-3 mt-3" />

                            ))} */}
                        </div>
                        <div id="lens" />
                    </div>
                    <div
                        className="col-lg-5"
                    >


                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: "Wristwatch by Ted Baker London",
                                    isFluidWidth: true,
                                    src: productData.thumbnail, id: "mainImage",
                                    ref: { mainImageRef },

                                },
                                largeImage: {
                                    src: productData.thumbnail,
                                    width: 1500,
                                    height: 2000, id: "mainImage",
                                    ref: { mainImageRef },
                                },
                            }}
                            style={{ zIndex: "2" }}
                        />
                    </div>
                    <div
                        className="col-lg-5 offset-1">
                        <div className="col-lg-12 col-md-5 col-md-10">
                            <h6 className="disabled">{productData.categoryId?.categoryName}</h6>
                            <h2 className="title text-left" style={{ color: "black" }}>
                                {productData.title}

                            </h2>
                            <h4>
                                Rating :
                                <div style={{ color: "goldenrod" }}>
                                    <i className="fa fa-star fa-xs" aria-hidden="true" />
                                    <i className="fa fa-star fa-xs" aria-hidden="true" />
                                    <i className="fa fa-star fa-xs" aria-hidden="true" />
                                    <i className="fa fa-star fa-xs" aria-hidden="true" />
                                </div>
                            </h4>
                            <h5 style={{ color: "brown" }}> Deal of the day ₹{(productData.price - (productData.price * productData.discountPercentage) / 100).toFixed(1)}</h5>
                            <del><small style={{ color: "brown" }}>Price:₹{productData.price}</small></del>

                            <small className="title" style={{ color: "black" }}><br />
                                <i class="fa fa-check-circle" aria-hidden="true"></i> Made in India<br />
                                <small><i class="fas fa-dot-circle    " style={{ color: "green" }}></i>In Stock({productData.stock})</small>
                            </small>
                            <h5 className="card-title mt-2"> Description:<br />
                            </h5>
                            {productData.description}

                        </div>

                    </div>
                </div>
            </div>
            <div className="card-body">
                <div>
                    <main className="container">
                        <h2 className="card-text text-left mt-4">Product Reviews<i className="fa fa-star" aria-hidden="true"></i>
                        </h2>
                        <div className="d-flex align-items-center p-3 my-3 text-dark-50 bg-purple rounded shadow-sm">
                            <img className="mr-3" style={{ width: "50px", height: "50px" }} src={productData.thumbnail} />
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
export default SellerProduct;