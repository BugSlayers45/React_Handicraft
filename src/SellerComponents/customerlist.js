function CustomerList() {
    return <>
        <div className="container mt-5">
            <div className="row">

                <div className="col-12" >
                    <table className="table table-responsive table-hover">
                        <thead className="text-center bg-light" style={{ boxShadow: "1px 1px 3px gray" }}>
                            <tr>
                                <th>S.No</th>
                                <th>Customer Name</th>
                                <th></th>
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
                                                    <td ><img className="img-fluid" src='' style={{ height: "80px", width: "100px", borderRadius: "50%", boxShadow: "1px 2px 10px gray" }} /></td>

                                                    <td></td>
                                                    <td><button className="btn btn-sm btn-light" onClick={() => productsDescription(product)}>View More</button></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>

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
    </>
}
export default CustomerList;
