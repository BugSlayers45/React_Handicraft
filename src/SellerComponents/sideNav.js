import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SideNav() {

    const { currentSeller } = useSelector(state => state.seller);
    const signout = () => {
        currentSeller = null;
    }

    return <>
        <nav id="sidebarMenu" className=" collapse d-lg-block sidebar collapse" style={{ marginTop: "8rem" }}>
            <div className="position-sticky">

                <div className="list-group list-group-flush mx-3 mt-4">

                    <Link href="#" className="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
                        <i className="fas fa-tachometer-alt fa-fw me-3" /><span>Main dashboard</span>
                    </Link>
                    {currentSeller &&
                        <Link to="/productList" className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-chart-area fa-fw me-3" /><span>ProductList</span>
                        </Link>}
                    {currentSeller &&
                        <Link to="/order" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-chart-bar fa-fw me-3" /><span>Orders</span></Link>}

                    {currentSeller &&
                        <Link to="/customerList" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-fw me-3" /><span>CustomerList</span></Link>}
                    {currentSeller &&
                        <Link to="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-chart-line fa-fw me-3" /><span>Earning</span></Link>
                    }
                    {currentSeller &&
                        <Link to="/addproduct" className="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-edit me-3"></i><span>Add Product</span></Link>}
                    {currentSeller &&
                        <Link href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-money-bill fa-fw me-3" /><span>Sales</span></Link>}
                    {currentSeller &&
                        <Link
                            className="list-group-item list-group-item-action py-2 ripple"
                            to="/sellersignin"
                            tabIndex={-1} onClick={signout}

                        ><i class="fa fa-user me-3" aria-hidden="true"></i>
                            SignOut
                        </Link>}
                    {!currentSeller &&
                        <Link
                            className="list-group-item list-group-item-action py-2 ripple"
                            to="/sellersignin"
                            tabIndex={-1}

                        ><i class="fa fa-user-circle me-3" aria-hidden="true"></i>
                            SignIn
                        </Link>}
                    {!currentSeller &&

                        <Link
                            className="list-group-item list-group-item-action py-2 ripple"
                            to="/sellersignup"
                            tabIndex={-1}

                        ><i class="fa fa-user me-3" aria-hidden="true" />
                            SignUp
                        </Link>}
                </div>
            </div>
        </nav>
    </>
}
export default SideNav;