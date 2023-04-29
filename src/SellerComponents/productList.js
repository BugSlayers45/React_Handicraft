import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link} from "react-router-dom"
import SellerNavigation from "./sellerNevigation";
import Footer from "../components/footer/Footer";
import Pagination from 'react-bootstrap/Pagination';
import { Spinner } from "react-bootstrap";

function ProductList() {
    const [data, setData] = useState([]);
    const [pageData, setPageData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const { currentSeller } = useSelector(state => state.seller);
    const productlist = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/product/productList/${currentSeller._id}`)
            if(response.data.status)
            setData(response.data.productsList)
        } catch (err) {
            console.log(err);
        }
    }

    const deleteProduct = async (id) => {
        try {
            let response = await axios.post(`http://localhost:3000/product/delete/${id}`)
            console.log(response.data.status)
            productlist()
        } catch (err) {
            console.log(err);
            window.alert(err);
        }
    }

    const handleNext = () => {
        if (page === pageCount) return page;
        setPage(page + 1)
    }


    const handlePrevios = () => {
        if (page === 1) return page;
        setPage(page - 1)
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
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-12">
                    <table className="table table-responsive table-hover">
                        <thead className="text-center">
                            <tr>
                                <th>S.No</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
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
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td><img className="img-fluid" src={product.thumbnail} style={{ height: "100px", width: "100px", borderRadius: "30%" }} /></td>
                                                    <td>{product.title.substring(0, 15)}</td>
                                                    <td>{product.description.substring(1, 40)}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.discountPercentage}</td>
                                                    <td>{product.rating}</td>
                                                    <td>{product.stock}</td>
                                                    <td><button className="btn btn-outline-primary" ><Link to="/updateproduct">Edit</Link></button></td>
                                                    <td><button onClick={() => deleteProduct(product._id)}><i class="fas fa-trash-alt" style={{ color: "red" }}></i></button></td>
                                                </tr>
                                            </>
                                        )
                                    }) : <div className='d-flex justify-content-center mt-4'>
                                        Loading... <Spinner animation="border" variant='danger' />
                                    </div>
                            }
                        </tbody>
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