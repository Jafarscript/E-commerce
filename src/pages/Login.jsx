import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      alert("Please enter both email/phone and password."); // Replace with better UX
      return;
    }
    console.log("Logging in with:", { email, password });
    // Add actual login logic here (e.g., API call)
    alert("Login button clicked!"); // Placeholder action
    navigate('/') // Navigate to home on successful login (placeholder)
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 flex items-center justify-center min-h-[calc(100vh-200px)]"> {/* Adjust min-h based on header/footer */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-4xl">
        {/* Image Section */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img 
            src="https://placehold.co/600x450/e0e7ff/4f46e5?text=Exclusive+Shopping" 
            alt="Login illustration" 
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            onError={(e) => e.target.src='https://placehold.co/600x450/cccccc/969696?text=Image+Error'}
          />
        </div>
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-0">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">Log in to Exclusive</h2>
          <p className="text-gray-600 mb-8">Enter your details below</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Email or Phone Number" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-red-500 focus:outline-none transition-colors text-sm" 
                required 
              />
            </div>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-red-500 focus:outline-none transition-colors text-sm" 
                required 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <button type="submit" className="w-full sm:w-auto bg-red-500 text-white px-10 py-3 rounded-md hover:bg-red-600 transition font-medium">
                Log In
              </button>
              <a href="#" className="text-red-500 hover:underline text-sm">Forget Password?</a>
            </div>
          </form>
           <p className="text-sm text-gray-600 mt-8 text-center">
            Don't have an account?{' '}
            <Link to='/signup' className="font-medium text-red-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login