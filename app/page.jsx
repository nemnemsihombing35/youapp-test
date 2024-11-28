'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { useRouter } from "next/navigation";  // Use the correct import for the App Router

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const router = useRouter();  // Initialize router from next/navigation

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleBack = () => {
    window.history.back(); // Kembali ke halaman sebelumnya
  };

  useEffect(() => {
    // Cek apakah email dan password sudah terisi
    if (email && password) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (isFormValid) {
      // Redirect to profile page
      router.push('/profile'); // Use router from next/navigation
    }
  };

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

      <div className="p-8 rounded-lg shadow-lg w-full max-w-sm bg-transparent">
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Input Email */}
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Username/Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md text-white bg-transparent focus:ring-0 focus:outline-none"
            />
          </div>

          {/* Input Password */}
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-white bg-transparent focus:ring-0 focus:outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-3 text-yellow-100 hover:text-yellow-300"
              style={{ fontSize: '20px' }}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Tombol Login */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-2 text-white rounded-md ${
                isFormValid
                  ? 'hover:bg-blue-600'
                  : 'cursor-not-allowed opacity-50'
              }`}
              style={{
                background: isFormValid
                  ? 'linear-gradient(108.32deg, #62CDCB 24.88%, #4599DB 78.49%)'
                  : 'linear-gradient(108.32deg, rgba(98, 205, 203, 0.5) 24.88%, rgba(69, 153, 219, 0.5) 78.49%)',
                backgroundBlendMode: 'overlay',
                boxShadow: isFormValid ? '0px 4px 10px rgba(0, 0, 0, 0.3)' : 'none',
              }}
            >
              Login
            </button>
          </div>
        </form>

        {/* Teks dan Link Register */}
        <p className="mt-4 text-center text-sm text-white">
          No account?{' '}
          <Link
            href="/register"
            className="text-yellow-100 hover:text-yellow-300 hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
