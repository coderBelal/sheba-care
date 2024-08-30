import React, { useState } from 'react';
import logo from "../assets/logo.webp";
 

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

 
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
 
    if (!validateEmail(email)) {
      formErrors.email = 'Please enter a valid email address.';
    }
    if (!password) {
      formErrors.password = 'Password is required.';
    }
    if (!showLogin && password !== confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(formErrors);

 
    if (Object.keys(formErrors).length === 0) {
      if (showLogin) {
 
        console.log('Logging in with:', { email, password });
      } else {
 
        console.log('Signing up with:', { email, password, confirmPassword });
      }
    }
  };

  return (
    <div className="mx-auto max-w-7xl flex flex-col md:flex-row h-screen items-center justify-center bg-gray-50 p-6">
 
      <div className="w-full md:w-1/3 flex items-center justify-center mb-6 md:mb-0">
        <img src={logo} alt="Logo"  width="400px" className="  h-24 md:w-40 md:h-40 object-contain" />
      </div>

 
      <div className="w-full md:w-2/3 flex flex-col items-center justify-center bg-white shadow-xl rounded-lg p-8 space-y-6">
        <div className="flex space-x-2 mb-6">
          <button
            onClick={() => {
              setShowLogin(true);
              setErrors({});
            }}
            className={`px-4 py-2 md:px-6 md:py-2 rounded-md font-semibold transition-all duration-300 ${
              showLogin ? 'bg-teal-900 text-white shadow-lg' : 'bg-teal-700 text-white hover:bg-teal-800'
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => {
              setShowLogin(false);
              setErrors({});
            }}
            className={`px-4 py-2 md:px-6 md:py-2 rounded-md font-semibold transition-all duration-300 ${
              !showLogin ? 'bg-teal-900 text-white shadow-lg' : 'bg-teal-700 text-white hover:bg-teal-800'
            }`}
          >
            Sign Up
          </button>
        </div>

 
        <div className="w-full max-w-xs sm:max-w-sm bg-white shadow-md rounded-lg p-6">
          {showLogin ? (
            <>
              <h2 className="text-2xl md:text-3xl mb-4 text-center text-teal-900 font-bold">Log In</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="block text-gray-700">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`mt-1 p-3 border rounded-md w-full focus:ring-2 focus:ring-teal-500 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </label>
                <label className="block">
                  <span className="block text-gray-700">Password</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`mt-1 p-3 border rounded-md w-full focus:ring-2 focus:ring-teal-500 ${
                      errors.password ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter your password"
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </label>
                <button
                  type="submit"
                  className="w-full px-4 py-2 mt-4 bg-teal-900 text-white rounded-md hover:bg-teal-800 transition duration-300"
                >
                  Log In
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl mb-4 text-center text-teal-900 font-bold">Sign Up</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="block text-gray-700">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`mt-1 p-3 border rounded-md w-full focus:ring-2 focus:ring-teal-500 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </label>
                <label className="block">
                  <span className="block text-gray-700">Password</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`mt-1 p-3 border rounded-md w-full focus:ring-2 focus:ring-teal-500 ${
                      errors.password ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter your password"
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </label>
                <label className="block">
                  <span className="block text-gray-700">Confirm Password</span>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`mt-1 p-3 border rounded-md w-full focus:ring-2 focus:ring-teal-500 ${
                      errors.confirmPassword ? 'border-red-500' : ''
                    }`}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                </label>
                <button
                  type="submit"
                  className="w-full px-4 py-2 mt-4 bg-teal-900 text-white rounded-md hover:bg-teal-800 transition duration-300"
                >
                  Sign Up
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
