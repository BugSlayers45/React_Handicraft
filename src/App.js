import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
// import ProductPage from './components/ProductPage/ProductPage';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/User/SignIn/SignIn';
import SignUp from './components/User/SignUp/SignUp';
import ProductDescription from './components/ProductPage/ProductDescription';
import Products from './components/Shop/Products';
import Cart from './components/User/Cart/Cart';
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return <>
  <Routes> 
    <Route path='/' element={ <Home/>} />
    <Route path='/products' element={<Products/>} />
    <Route path='/signIn' element={<SignIn/>} />
    <Route path='/signUp' element={<SignUp/>} />
    <Route path='/productdescription' element={<ProductDescription/>}/>
    <Route path='/cart' element={<Cart/>}/>

  </Routes>
  </>
}

export default App;
