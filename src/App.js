import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import SellerHome from './SellerComponents/sellerHome';
import SellerSignUp from './SellerComponents/sellerSignUp';
import SellerSignIn from './SellerComponents/sellerSignIn';
import ProductList from './SellerComponents/productList';
import UpdateProduct from './SellerComponents/updateProduct';
import SignIn from './components/User/SignIn/SignIn';
import SignUp from './components/User/SignUp/SignUp';
import AddProduct from './SellerComponents/AddProduct';
import ProductDescription from './components/ProductPage/ProductDescription';
import Products from './components/Shop/Products';
import Cart from './components/User/Cart/Cart';
import 'react-toastify/dist/ReactToastify.css'
import Order from './SellerComponents/order';
import SellerProduct from './SellerComponents/sellerDescription';
import Checkout from './components/User/payments/Checkout';
// import PersonContext from './components/User/payments/PersonContext';
import AddressForm from './components/User/payments/AddressForm';


function App() {
  
  return <>
  <Routes> 
    <Route path='/' element={ <Home/>} />
    <Route path='/products' element={<Products/>} />
    <Route path='/signIn' element={<SignIn/>} />
    <Route path='/signUp' element={<SignUp/>} />
    <Route path='/productdescription' element={<ProductDescription/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/sellerHome' element={<SellerHome />} />
    <Route path='/sellersignup' element={<SellerSignUp />} />
    <Route path='/sellersignin' element={<SellerSignIn />} />
    <Route path='/productList' element={<ProductList />} />
    <Route path='/updateproduct' element={<UpdateProduct />} />
    <Route path='/addproduct' element={<AddProduct />} />
      <Route path='/order' element={<Order />} />
      <Route path='/sellerProductDescription' element={<SellerProduct />} />
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
   
  </>
}
export default App;
