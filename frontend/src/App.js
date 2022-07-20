import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


const App = () => {
 
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/success" element={<Success />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
  </Router>
  ) ;
};

export default App;