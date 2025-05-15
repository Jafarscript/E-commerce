// import { Truck, Headphones, ShieldCheck } from 'lucide-react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import ProductDetailPage from "./pages/ProductDetailPage";
import WishlistPage from "./pages/Wishlist";
import NotFoundPage from "./components/NotFoundPage";
import ContactPage from "./components/ContactPage";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import AccountPage from "./components/AccountPage";
import Breadcrumbs from "./components/Breadcrumbs";

const App = () => {
  return (
    <section className="font-sans bg-white">
      <Header />
      <Breadcrumbs /> {/* Global Breadcrumbs */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Example category and product list routes (can be expanded) */}
        <Route
          path="/category/:categoryName"
          element={
            <div className="container mx-auto p-8 text-center">
              Category Page (Not Implemented)
            </div>
          }
        />
        <Route
          path="/products/:type"
          element={
            <div className="container mx-auto p-8 text-center">
              Product List Page (Not Implemented)
            </div>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </section>
  );
};

export default App;
