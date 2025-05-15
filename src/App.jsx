// import { Truck, Headphones, ShieldCheck } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Login from  './pages/Login'
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import ProductDetailPage from './pages/ProductDetailPage';
import WishlistPage from './pages/Wishlist';



const App = () => {
  return (
    <section className="font-sans bg-white">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App