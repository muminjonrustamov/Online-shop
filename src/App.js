import About from "./pages/about/about";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import Registr from "./pages/registr/registr";
import Login from "./pages/login/login";
import Navbar from "./components/navbar/navbar";
import SingleProduct from "./pages/singleproduct/singleproduct";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
