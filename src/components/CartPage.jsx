import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../context/useCart";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartSubtotal, shippingCost, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity less than 1
    updateQuantity(productId, newQuantity);
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if(couponCode.trim() === "SALE10") {
        alert("Coupon SALE10 applied! (10% off - not implemented in total yet)");
    } else {
        alert("Invalid coupon code.");
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center min-h-[calc(100vh-300px)] flex flex-col justify-center items-center">
        <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-medium mb-2">Your cart is empty.</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition">
          Return To Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
      {/* Breadcrumbs are handled globally */}
      <div className="space-y-4 mb-8">
        {/* Cart Table Header */}
        <div className="hidden md:grid grid-cols-10 gap-4 items-center py-3 px-4 text-sm font-medium text-gray-600 border-b">
          <div className="col-span-4">Product</div>
          <div className="col-span-2 text-center">Price</div>
          <div className="col-span-2 text-center">Quantity</div>
          <div className="col-span-2 text-right">Subtotal</div>
        </div>
        {cartItems.map(item => (
          <div key={item.id} className="grid grid-cols-1 md:grid-cols-10 gap-4 items-center py-4 px-2 md:px-4 border rounded-md md:border-0 md:border-b">
            <div className="col-span-full md:col-span-4 flex items-center gap-3">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded bg-gray-100 p-1" onError={(e) => e.target.src='https://placehold.co/64x64/cccccc/969696?text=Error'}/>
              <div className="flex-grow">
                <Link to={`/product/${item.id}`} className="text-sm hover:underline block truncate">{item.name}</Link>
                <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500 hover:text-red-700 mt-1 md:hidden">Remove</button>
              </div>
            </div>
            <div className="col-span-full md:col-span-2 text-left md:text-center"><span className="md:hidden font-medium">Price: </span>${item.price.toFixed(2)}</div>
            <div className="col-span-full md:col-span-2 flex items-center justify-start md:justify-center">
              <span className="md:hidden font-medium mr-2">Quantity: </span>
              <div className="flex items-center border border-gray-300 rounded w-max">
                <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} className="px-3 py-1.5 text-gray-700 hover:bg-gray-100 rounded-l"><Minus size={14}/></button>
                <input type="text" value={item.quantity} readOnly className="w-10 text-center border-l border-r border-gray-300 h-full focus:outline-none py-1.5 text-sm"/>
                <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)} className="px-3 py-1.5 text-gray-700 hover:bg-gray-100 rounded-r"><Plus size={14}/></button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="ml-4 text-gray-500 hover:text-red-500 hidden md:inline-block"><Trash2 size={18}/></button>
            </div>
            <div className="col-span-full md:col-span-2 text-left md:text-right font-medium"><span className="md:hidden font-medium">Subtotal: </span>${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <div className="flex gap-4 w-full md:w-auto">
            <Link to="/" className="px-6 py-3 border border-gray-300 rounded text-sm hover:bg-gray-50 transition">Return To Shop</Link>
            <button onClick={() => { if(window.confirm("Are you sure you want to clear the cart?")) clearCart(); }} className="px-6 py-3 border border-gray-300 rounded text-sm hover:bg-gray-50 transition text-red-500 hover:border-red-400">Clear Cart</button>
        </div>
        {/* Update cart button might not be needed if quantity changes are instant */}
        {/* <button onClick={() => alert("Cart updated!")} className="px-6 py-3 border border-gray-300 rounded text-sm hover:bg-gray-50 transition">Update Cart</button> */}
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8">
        <form onSubmit={handleApplyCoupon} className="flex-grow md:max-w-sm flex gap-3 items-start">
          <input 
            type="text" 
            placeholder="Coupon Code" 
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 text-sm h-12" 
          />
          <button type="submit" className="bg-red-500 w-full text-white px-6 py-3 rounded-md hover:bg-red-600 transition text-sm h-12">Apply Coupon</button>
        </form>

        <div className="w-full md:w-1/3 border border-gray-300 rounded-md p-6 space-y-3">
          <h3 className="text-lg font-medium mb-4">Cart Total</h3>
          <div className="flex justify-between text-sm"><p>Subtotal:</p><p>${cartSubtotal.toFixed(2)}</p></div>
          <hr/>
          <div className="flex justify-between text-sm"><p>Shipping:</p><p>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</p></div>
          <hr/>
          <div className="flex justify-between font-medium"><p>Total:</p><p>${cartTotal.toFixed(2)}</p></div>
          <button onClick={() => navigate('/checkout')} className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition mt-4 text-sm">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage