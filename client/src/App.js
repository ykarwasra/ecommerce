import Navbar from './components/navbar/Navbar.jsx';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';
import Product from './pages/Product.jsx';
import Login from './pages/LoginSignup.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Footer from './components/footer/Footer.jsx';
import men_banner from "./components/asset/men_banner.jpg"
import kids_banner from "./components/asset/kids_banner.jpg"
import women_banner from "./components/asset/women_banner.jpg"
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
          <Route path="/men" element={<ShopCategory shopCategory="men" banner={men_banner}/>}></Route>
          <Route path="/women" element={<ShopCategory shopCategory="women" banner={women_banner}/>}></Route>
          <Route path="/kids" element={<ShopCategory shopCategory="kids" banner={kids_banner}/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
