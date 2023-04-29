import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import SellerNavigation from "./sellerNevigation";
import Footer from "../components/footer/Footer";
import Pagination from 'react-bootstrap/Pagination';
import { Spinner } from "react-bootstrap";
import "../SellerComponents/sellerHome.css";

function ProductList() {
    const [data, setData] = useState([]);
    const [pageData, setPageData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const { currentSeller } = useSelector(state => state.seller);

    const [products, setProductList] = useState([]);
    const navigate = useNavigate();




    const productlist = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/product/productList/${currentSeller._id}`)

            if (response.data.status)

                setData(response.data.productsList)


        } catch (err) {
            console.log(err);
        }
    }



    const deleteProduct = async (id) => {
        try {
            let response = await axios.post(`http://localhost:3000/product/delete/${id}`)
            if (window.confirm("do you want to delete"))
                productlist()
        } catch (err) {
            console.log(err);
            window.alert(err);
        }
    }

    const UpdateProduct = (productdetail) => {
        navigate(("/updateproduct"), { state: { productdetail: productdetail } });

    }

    const handleNext = () => {
        if (page === pageCount) return page;
        setPage(page + 1)
    }


    const handlePrevios = () => {
        if (page === 1) return page;
        setPage(page - 1)
    }

    const productsDescription = (productData) => {
        navigate(("/sellerProductDescription"), { state: { productData: productData } });

    }

    useEffect(() => {
        productlist();

    }, [page]);

    useEffect(() => {
        const pagedatacount = Math.ceil(data.length / 5);
        setPageCount(pagedatacount);

        if (page) {
            const LIMIT = 5;
            const skip = LIMIT * page // 5 *2 = 10
            const dataskip = data.slice(page === 1 ? 0 : skip - LIMIT, skip);
            setPageData(dataskip)
        }
    }, [data])

    return <>
        <SellerNavigation />
        <div className="container mt-5">
            <div className="row">

                <div className="col-12" >
                    <table className="table table-responsive table-hover">
                        <thead className="text-center bg-light" style={{ boxShadow: "1px 1px 3px gray" }}>
                            <tr>
                                <th>S.No</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>AmountPrice</th>
                                <th>Discount</th>
                                <th>Rating</th>
                                <th>Stock</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pageData.length > 0 ?
                                    pageData.map((product, index) => {
                                        return (
                                            <>
                                                <tr className="text-center" style={{ boxShadow: "1px 1px 3px gray" }}  >
                                                    <td>{index + 1}</td>
                                                    <td ><img className="img-fluid" src={product.thumbnail} style={{ height: "80px", width: "100px", borderRadius: "50%", boxShadow: "1px 2px 10px gray" }} /></td>

                                                    <td>{product.title.substring(0, 15)}</td>
                                                    <td>{product.description.substring(0, 40)}<button className="btn btn-sm btn-light" onClick={() => productsDescription(product)}>View More</button></td>
                                                    <td>{product.price}</td>
                                                    <td>{product.discountPercentage}</td>
                                                    <td>{product.rating}</td>
                                                    <td>{product.stock}</td>
                                                    <td><button className="btn btn-outline-primary" onClick={() => (UpdateProduct(product))} >Edit</button></td>
                                                    <td><button onClick={() => deleteProduct(product._id)}><i class="fas fa-trash-alt" style={{ color: "red" }}></i></button></td>
                                                </tr>
                                            </>
                                        )
                                    }) : <div className='d-flex justify-content-center mt-4'>
                                        Loading... <Spinner animation="border" variant='danger' />
                                    </div>
                            }
                        </tbody >
                    </table>
                </div>
                <div className='d-flex justify-content-end'>
                    <Pagination >
                        <Pagination.Prev onClick={handlePrevios} disabled={page === 1} />
                        {
                            Array(pageCount).fill(null).map((ele, index) => {
                                return (
                                    <>
                                        <Pagination.Item active={page === index + 1 ? true : false} onClick={() => setPage(index + 1)}>{index + 1}</Pagination.Item>
                                    </>
                                )
                            })
                        }
                        <Pagination.Next onClick={handleNext} disabled={page === pageCount} />
                    </Pagination>
                </div>

            </div>
        </div >
        <Footer />
    </>
}

export default ProductList;