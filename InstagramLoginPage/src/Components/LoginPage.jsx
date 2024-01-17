// LoginPage.js

import React, { useState } from 'react';

const LoginPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleToggle = () => {
    setShowSignUp(!showSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login or signup based on the state
    if (showSignUp) {
      // Add sign-up logic
      console.log('Signing up:', fullName, email, password);
    } else {
      // Add login logic
      console.log('Logging in:', username, password);
    }
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
          className="w-16 mx-auto mb-6"
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          {showSignUp && (
            <div className="mb-4">
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          )}

          <div className="mb-4">
            {showSignUp ? (
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            ) : (
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            )}
          </div>

          <div className="mb-4">
            <input
              type="password"
              id={showSignUp ? 'passwordSignUp' : 'passwordLogin'}
              name={showSignUp ? 'passwordSignUp' : 'passwordLogin'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Sign In / Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none" onClick={handleToggle}
            >
            {showSignUp ? 'Sign Up'  : 'Log In'} 
          </button>
        </form>

        <div className="mt-4 text-center text-gray-700">
          <p>
            {showSignUp ? "Already have an account? " : "Don't have an account? "}
            <button onClick={handleToggle} className="text-blue-500 focus:outline-none">
              {showSignUp ? 'Log In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
