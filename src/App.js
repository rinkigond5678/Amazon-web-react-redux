
import './App.css';
import Navbar from "./component/Navbar/navbar";
import HomeScreen from './Screen/HomeScreen/homeScreen';
import { Routes, Route } from 'react-router-dom';
import Product from './Screen/Product/product';
import Footer from './component/Footer/footer';
import Cart from './Screen/Cart/cart';


function App() {


  return (


    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />

    
    </div >




  );
}

export default App;
