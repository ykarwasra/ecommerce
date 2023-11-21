import Navbar from './components/navbar/Navbar.jsx';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';
import Product from './pages/Product.jsx';
import Login from './pages/Login.jsx';
import Category from './pages/Category.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/men" element={<Category shopCategory="men"/>}></Route>
          <Route path="/women" element={<Category shopCategory="women"/>}></Route>
          <Route path="/kids" element={<Category shopCategory="kids"/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
