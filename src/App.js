import About from './pages/about/about'
import Home from './pages/home/home'
import Product from './pages/product/product'
import Registr from './pages/registr/registr'
import Login from './pages/login/login'
import Navbar from './components/navbar/navbar'
import SingleProduct from './pages/singleproduct/singleproduct'
import { Route, Routes } from 'react-router-dom';
import Korzina from './pages/korzina/korzina'
import { useState } from 'react'

function App() {
  const [karzina, setKarzina] = useState([]);
  return (
    <div className="App">
      <Navbar  karzina={karzina} />  
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Product />} set={setKarzina} cart={karzina}  />
      <Route path='/product/:id' element={<SingleProduct />} />
      <Route path='/cart' element={<Korzina />} products={karzina} set={setKarzina}  />
      <Route path='/registr' element={<Registr />} />
      <Route path='/login' element={<Login />} />
     </Routes>
    </div>
  );
}

export default App;
