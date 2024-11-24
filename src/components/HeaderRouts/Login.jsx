import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth' ;
import { getAuth,GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import {auth , googleProvider} from '../../firebase.js';


const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
    setFormData({ email: '', password: '', confirmPassword: '' });
    setError('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        console.log('User signed up:', userCredential.user);
        alert('User signed up successfully!');
      } catch (error) {
        setError(error.message);
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        console.log('User signed in:', userCredential.user);
        alert('User signed in successfully!');
      } catch (error) {
        
        if (error.code === 'auth/user-not-found') {
          alert('No account found for this email. Please sign up first.');
        } else {
          setError(error.message);
        }
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      console.log('User signed in with Google:', result.user);
      alert('Successfully signed in with Google!');
    } catch (error) {
      console.error('Google sign-in error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-center place-items-center bg-elliptical-gradient h-screen'>
    <div className="max-w-md mx-auto place-content-center sm:w-[400px] w-[300px] bg-white p-8 shadow-lg rounded-lg">
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 ${isSignUp ? 'border-b-2 border-black' : 'text-gray-400'}`}
          onClick={handleToggle}
        >
          Sign Up
        </button>
        <button
          className={`px-4 py-2 ${!isSignUp ? 'border-b-2 border-black' : 'text-gray-400'}`}
          onClick={handleToggle}
        >
          Sign In
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-2">
        {isSignUp ? 'Create an account' : 'Sign in to your account'}
      </h2>
      <p className="mb-4 text-gray-500">
        {isSignUp ? 'Enter your email below to create your account' : 'Enter your email below to sign in'}
      </p>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        {isSignUp && (
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
        </button>

        <button
          type="button"
          disabled={loading}
          onClick={handleGoogleSignIn}
          className="w-full bg-black text-white py-2 rounded-lg mt-2"
        >
          Sign in with Google
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
