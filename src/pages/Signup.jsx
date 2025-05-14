import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name || !emailOrPhone || !password) {
      alert("Please fill in all fields."); // Replace with better UX
      return;
    }
    console.log("Signing up with:", { name, emailOrPhone, password });
    // Add actual sign up logic here (e.g., API call)
    alert("Account creation requested!"); // Placeholder
    navigate('/login'); // Navigate to login after sign up
  };

  const handleGoogleSignUp = () => {
    console.log("Signing up with Google");
    // Add Google Sign Up logic here
    alert("Google Sign Up clicked!"); // Placeholder
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-4xl">
        {/* Image Section - Same as Login for consistency, can be changed */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img 
            src="https://placehold.co/600x550/e0e7ff/4f46e5?text=Join+Exclusive" 
            alt="Sign Up illustration" 
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            onError={(e) => e.target.src='https://placehold.co/600x550/cccccc/969696?text=Image+Error'}
          />
        </div>
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-0">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">Create an account</h2>
          <p className="text-gray-600 mb-8">Enter your details below</p>
          <form onSubmit={handleSignUp} className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-red-500 focus:outline-none transition-colors text-sm" 
                required 
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Email or Phone Number" 
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
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
            <button type="submit" className="w-full bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition font-medium">
              Create Account
            </button>
            <button 
              type="button" 
              onClick={handleGoogleSignUp}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google icon" className="h-5 w-5" />
              Sign up with Google
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-8 text-center">
            Already have an account?{' '}
            <Link to='/login' className="font-medium text-red-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Signup


