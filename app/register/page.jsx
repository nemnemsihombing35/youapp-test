'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { IoChevronBack } from 'react-icons/io5'; // Mengimpor icon back
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleBack = () => {
    router.back(); // Mengarahkan ke halaman sebelumnya
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Invalid email format');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setMessage('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password }),
      });

      if (res.ok) {
        setMessage('Registration successful! Redirecting...');
        setTimeout(() => {
          router.push('/profil/get');
        }, 1000);
      } else {
        const data = await res.json();
        setMessage(data.message || 'Something went wrong');
      }
    } catch (error) {
      setMessage('Error connecting to server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsFormValid(
      email.trim() !== '' &&
        username.trim() !== '' &&
        password.trim() !== '' &&
        confirmPassword.trim() !== '' &&
        password === confirmPassword
    );
  }, [email, username, password, confirmPassword]);

  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1F4247] via-[#0D1D23] to-[#09141A]">
      {/* Ikon Back (Hanya Mobile) */}
      <button
        onClick={handleBack}
        className="absolute top-20 left-4 flex items-center text-white hover:text-yellow-300 sm:hidden"
      >
        <IoChevronBack size={24} className="mr-1" />
        <span>Back</span>
      </button>
      <div className="p-8 rounded-lg shadow-lg w-full max-w-sm bg-transparent relative">
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Email */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`w-full p-2 border rounded-md text-white bg-transparent focus:ring-0 focus:outline-none ${
              message.includes('Invalid email') ? 'border-red-500' : 'border-gray-300'
            }`}
          />

          {/* Input Username */}
          <input
            type="text"
            placeholder="Create Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md bg-transparent text-white focus:ring-0 focus:outline-none"
          />

          {/* Input Password */}
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`w-full p-2 border rounded-md text-white bg-transparent focus:ring-0 focus:outline-none ${
                message.includes('Password') ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-3 text-yellow-100 hover:text-yellow-300"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          

          {/* Input Confirm Password */}
          <div className="relative">
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={`w-full p-2 border rounded-md text-white bg-transparent focus:ring-0 focus:outline-none ${
                message.includes('Passwords do not match') ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-2 top-3 text-yellow-100 hover:text-yellow-300"
            >
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !isFormValid}
            className={`w-full py-2 rounded-md text-white transition-all ${
              loading || !isFormValid
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-blue-600'
            }`}
            style={{
              background: loading || !isFormValid
                ? 'linear-gradient(108.32deg, rgba(98, 205, 203, 0.5) 24.88%, rgba(69, 153, 219, 0.5) 78.49%)'
                : 'linear-gradient(108.32deg, #62CDCB 24.88%, #4599DB 78.49%)',
            }}
          >
            {loading ? (
              <span className="animate-spin">⏳</span> // Add spinner if loading
            ) : (
              'Register'
            )}
          </button>
        </form>

        {message && (
          <p
            className={`text-center text-sm mt-4 ${
              message.includes('successful') ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {message}
          </p>
        )}
        <p className="mt-4 text-center text-sm text-white">
          Already have an account?{' '}
          <Link href="/" className="text-yellow-100 hover:text-yellow-300 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
