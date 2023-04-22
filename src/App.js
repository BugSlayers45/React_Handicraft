import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import ProductPage from './components/ProductPage/ProductPage';
import { Route, Routes } from 'react-router-dom';
function App() {
  return <>
 
  <Routes>
    <Route path='/' element={ <Home/>} />
  </Routes>
  <Routes> 
    <Route path='/products' element={<ProductPage/>} />
  </Routes>

  </>
}

export default App;
