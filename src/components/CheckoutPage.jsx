import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../context/useCart";

const CheckoutPage = () => {
  const { cartItems, cartSubtotal, shippingCost, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '', companyName: '', streetAddress: '', apartment: '', townCity: '', phoneNumber: '', emailAddress: '', saveInfo: false
  });
  const [paymentMethod, setPaymentMethod] = useState('bank');

  useEffect(() => { window.scrollTo(0, 0); if(cartItems.length === 0) navigate('/cart'); }, [cartItems, navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.firstName || !formData.streetAddress || !formData.townCity || !formData.phoneNumber || !formData.emailAddress) {
        alert("Please fill in all required billing details.");
        return;
    }
    console.log("Order Submitted:", { billingDetails: formData, items: cartItems, total: cartTotal, paymentMethod });
    alert("Order placed successfully! (This is a demo)");
    clearCart();
    navigate('/'); // Or to an order confirmation page
  };

  if (cartItems.length === 0) return null; // Should be redirected by useEffect

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
      {/* Breadcrumbs handled globally */}
      <h1 className="text-3xl font-medium mb-10">Billing Details</h1>
      <form onSubmit={handleSubmitOrder} className="grid md:grid-cols-2 gap-x-16 gap-y-8">
        {/* Billing Form */}
        <div className="space-y-6">
          {[
            { name: 'firstName', label: 'First Name*', type: 'text' },
            { name: 'companyName', label: 'Company Name', type: 'text' },
            { name: 'streetAddress', label: 'Street Address*', type: 'text' },
            { name: 'apartment', label: 'Apartment, floor, etc. (optional)', type: 'text' },
            { name: 'townCity', label: 'Town/City*', type: 'text' },
            { name: 'phoneNumber', label: 'Phone Number*', type: 'tel' },
            { name: 'emailAddress', label: 'Email Address*', type: 'email' },
          ].map(field => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm text-gray-500 mb-1.5">{field.label}</label>
              <input type={field.type} name={field.name} id={field.name} value={formData[field.name]} onChange={handleInputChange} required={field.label.includes('*')}
                     className="w-full bg-gray-100 rounded-md p-3 text-sm focus:bg-white focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none"/>
            </div>
          ))}
          <div>
            <label className="flex items-center text-sm">
              <input type="checkbox" name="saveInfo" checked={formData.saveInfo} onChange={handleInputChange} className="mr-2 h-4 w-4 text-red-500 border-gray-300 rounded focus:ring-red-500"/>
              Save this information for faster check-out next time
            </label>
          </div>
        </div>

        {/* Order Summary & Payment */}
        <div className="space-y-6">
            <div className="space-y-4">
                {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-3">
                            <img src={item.image} alt={item.name} className="w-10 h-10 object-contain rounded" onError={(e) => e.target.src='https://placehold.co/40x40/cccccc/969696?text=Err'}/>
                            <span>{item.name} x {item.quantity}</span>
                        </div>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
            </div>
            <div className="border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between"><span>Subtotal:</span><span>${cartSubtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping:</span><span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span></div>
                <div className="flex justify-between font-medium text-base"><span>Total:</span><span>${cartTotal.toFixed(2)}</span></div>
            </div>

            <div className="space-y-3">
                <label className="flex items-center justify-between text-sm p-3 border rounded-md cursor-pointer hover:border-gray-400">
                    <div>
                        <input type="radio" name="paymentMethod" value="bank" checked={paymentMethod === 'bank'} onChange={(e) => setPaymentMethod(e.target.value)} className="mr-3"/>
                        Bank
                    </div>
                    <div className="flex items-center gap-1">
                        <img src="https://placehold.co/30x20/cccccc/000000?text=VISA" alt="Visa" className="h-4"/>
                        <img src="https://placehold.co/30x20/cccccc/000000?text=MC" alt="Mastercard" className="h-4"/>
                        <img src="https://placehold.co/30x20/cccccc/000000?text=AMEX" alt="Amex" className="h-4"/>
                    </div>
                </label>
                 <label className="flex items-center text-sm p-3 border rounded-md cursor-pointer hover:border-gray-400">
                    <input type="radio" name="paymentMethod" value="cash" checked={paymentMethod === 'cash'} onChange={(e) => setPaymentMethod(e.target.value)} className="mr-3"/>
                    Cash on delivery
                </label>
            </div>
            
            <div className="flex gap-3 items-start">
                <input type="text" placeholder="Coupon Code" className="w-full bg-gray-100 rounded-md p-3 text-sm focus:bg-white focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none h-12"/>
                <button type="button" onClick={() => alert("Apply coupon clicked (not functional for total)")} className="bg-red-500 text-white w-full px-6 py-3 rounded-md hover:bg-red-600 transition text-sm h-12">Apply Coupon</button>
            </div>
            <button type="submit" className="w-full md:w-auto bg-red-500 text-white px-10 py-3 rounded-md hover:bg-red-600 transition text-sm">Place Order</button>
        </div>
      </form>
    </div>
  );
};


export default CheckoutPage