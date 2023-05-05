import Footer from "../components/footer/Footer";
import SellerNavigation from "./sellerNevigation";
import "../SellerComponents/sellerHome.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";


function SellerHome() {
    const { currentSeller } = useSelector(state => state.seller);
    const [products, setData] = useState([]);


    const sellerproduct = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/product/productList/${currentSeller._id}`)
            if (response.data.status)
                setData(response.data.productsList);

        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        sellerproduct();

    }, []);

    return <>

       

  <header>
  <SellerNavigation />
    <nav id="sidebarMenu" className=" collapse d-lg-block sidebar collapse bg-white" style={{marginTop:"9rem"}}>
      <div className="position-sticky">
     
        <div className="list-group list-group-flush mx-3 mt-4">
          <a href="#" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
            <i className="fas fa-tachometer-alt fa-fw me-3" /><span>Main dashboard</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple active">
            <i className="fas fa-chart-area fa-fw me-3" /><span>Webiste traffic</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-lock fa-fw me-3" /><span>Password</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-chart-line fa-fw me-3" /><span>Analytics</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple">
            <i className="fas fa-chart-pie fa-fw me-3" /><span>SEO</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-chart-bar fa-fw me-3" /><span>Orders</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-globe fa-fw me-3" /><span>International</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-building fa-fw me-3" /><span>Partners</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-calendar fa-fw me-3" /><span>Calendar</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-fw me-3" /><span>Users</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-money-bill fa-fw me-3" /><span>Sales</span></a>
        </div>
      </div>
    </nav>
  </header>
  <main style={{minHeight: 'calc(100vh - 58px)'}}>
    <div className="container pt-4">
    <div className="container-fluid">
            <div className="row ">
                <div className="col-9">
                    <div className="mt-5 ml">
                        <h2 className="display-6">Service Details</h2>
                        <hr className="line" />
                    </div>
                    <div className="d-flex">
                        <div className="col-2 ml-5 mt-5" id="home" >
                            <h5 className="mt-2 text-center">Products</h5>
                            <hr />
                            <h6 className="text-center" >total : {products.length}</h6>
                        </div>
                        <div className="col-2 ml-5 mt-5" id="home" >
                            <h5 className="mt-2 text-center">Customers</h5>
                            <hr />
                            <h6 className="text-center">total : 0</h6>
                        </div>
                        <div className="col-2 ml-5 mt-5" id="home">
                            <h5 className="mt-2 text-center">Earning</h5>
                            <hr />
                            <h6 className="text-center" >total : 0</h6>
                        </div>
                        <div className="col-2 ml-5 mt-5" id="home">
                            <h5 className="mt-2 text-center">Orders</h5>
                            <hr />
                            <h6 className="text-center" >total : 0</h6>
                        </div>


                    </div>

                </div>
            </div>

        </div>
    </div>
  </main>
  {/*Main layout*/}
  <Footer />





      
       
    </>
}
export default SellerHome;