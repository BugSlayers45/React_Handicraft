import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import ProductPage from './components/ProductPage/ProductPage';
import { Route, Routes } from 'react-router-dom';
import SellerHome from './SellerComponents/sellerHome';
import SellerSignUp from './SellerComponents/sellerSignUp';
import SellerSignIn from './SellerComponents/sellerSignIn';
import ProductList from './SellerComponents/productList';
import UpdateProduct from './SellerComponents/updateProduct';

function App() {
  return <>

    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Routes>
      <Route path='/products' element={<ProductPage />} />
    </Routes>
    <Routes>
      <Route path='/sellerHome' element={<SellerHome />} />
      <Route path='/sellersignup' element={<SellerSignUp />} />
      <Route path='/sellersignin' element={<SellerSignIn />} />
      <Route path='/productList' element={<ProductList />} />
      <Route path='/updateproduct' element={<UpdateProduct />} />
    </Routes>

  </>
}

export default App;
