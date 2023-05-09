<nav id="sidebarMenu" className=" collapse d-lg-block sidebar collapse" style={{ marginTop: "8rem" }}>
    <div className="position-sticky">

        <div className="list-group list-group-flush mx-3 mt-4">

            <Link to="/sellerHome" className="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
                <i className="fas fa-tachometer-alt fa-fw me-3" /><span>Main dashboard</span>
            </Link>
            {currentSeller &&
                <Link to="/productList" className="list-group-item list-group-item-action py-2 ripple">
                    <i className="fas fa-chart-area fa-fw me-3" /><span>ProductList</span>
                </Link>}
            {currentSeller &&
                <Link to="/order" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-chart-bar fa-fw me-3" /><span>Orders</span></Link>}




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

body {
    background - color: #fbfbfb;
}

@media(min - width: 991.98px) {
    main {
        padding - left: 240px;
    }
}

/* Sidebar */
.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 58px 0 0;
    /* Height of navbar */
    box - shadow: 0 2px 5px 0 rgb(0 0 0 / 5 %), 0 2px 10px 0 rgb(0 0 0 / 5 %);
    width: 240px;
    z - index: 600;
}

@media(max - width: 991.98px) {
    .sidebar {
        width: 100 %;
    }
}

.sidebar.active {
    border - radius: 5px;
    box - shadow: 0 2px 5px 0 rgb(0 0 0 / 16 %), 0 2px 10px 0 rgb(0 0 0 / 12 %);
}

.sidebar - sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding - top: 0.5rem;
    overflow - x: hidden;
    overflow - y: auto;
    /* Scrollable contents if viewport is shorter than content. */
}
