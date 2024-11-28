'use client';

import { PiPencilSimpleLine } from "react-icons/pi";
import { IoChevronBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function EditAbout() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleSaveAndUpdate = () => {
    // Navigasi langsung ke halaman profil tanpa pop-up
    router.push('/profile'); // Ganti '/profile' dengan rute halaman profil Anda
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen px-4 sm:px-8 bg-[#09141A]">
      <div className="w-full mt-16 max-w-md sm:max-w-lg grid grid-rows-1 gap-6">
        {/* Back button with username (Grid Layout) */}
        <div className="grid grid-cols-3 items-center py-4 bg-transparent sm:hidden">
          <button
            onClick={handleBack}
            className="flex items-center text-white hover:text-yellow-300"
          >
            <IoChevronBack size={24} className="mr-1" />
            <span className="text-m sm:text-base">Back</span>
          </button>

          <div className="flex justify-center text-center">
            <span className="text-xl sm:text-base text-white">@johndoe123</span>
          </div>

          
        </div>

        {/* First box for profile details */}
        <div className="w-full min-h-[250px] p-6 sm:p-8 bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-lg">
          <div className="flex justify-between items-start">
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              @johndoe123
            </h2>
            <button
              className="text-white text-lg sm:text-xl hover:text-yellow-300"
              onClick={() => alert('Edit profile functionality can be added here.')}
            >
              <PiPencilSimpleLine />
            </button>
          </div>
        </div>

        {/* Second box for "About" section */}
        <div className="w-full p-6 sm:p-8 min-h-[150px] bg-[#0E191F] rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-md sm:text-lg font-semibold text-white">About</h2>
            <button
              className="px-4 py-2 text-white hover:text-yellow-300 text-sm sm:text-base font-semibold rounded-md"
              onClick={handleSaveAndUpdate}
            >
              Save & Update
            </button>
          </div>

          {/* Display information fields in a grid layout */}
          <div className="space-y-4">
            {[
              { label: "Display Name:", type: "text", placeholder: "Enter name" },
              { label: "Gender:", type: "select", options: ["Select Gender", "Male", "Female", "Other"] },
              { label: "Birthday:", type: "date" },
              { label: "Horoscope:", type: "text", placeholder: "--" },
              { label: "Zodiac:", type: "text", placeholder: "--" },
              { label: "Height (cm):", type: "number", placeholder: "Enter your height" },
              { label: "Weight (kg):", type: "number", placeholder: "Enter your weight" },
            ].map((field, index) => (
              <div key={index} className="flex items-center space-x-4">
                <label className="w-1/3 text-sm text-white">{field.label}</label>
                {field.type === "select" ? (
                  <select
                    className="flex-1 p-2 text-sm bg-[#1E2A31] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-right"
                  >
                    {field.options.map((option, idx) => (
                      <option key={idx} value={option.toLowerCase()}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    className="flex-1 p-2 text-sm bg-[#1E2A31] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-right"
                    placeholder={field.placeholder || ""}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Third box for "Interest" section */}
        <div className="w-full p-6 sm:p-8 min-h-[150px] bg-[#0E191F] rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-md sm:text-lg font-semibold text-white">Interest</h2>
            <button
              className="text-white text-lg sm:text-xl hover:text-yellow-300"
              onClick={() => router.push('/interest/add')}>
              <PiPencilSimpleLine />
            </button>
          </div>
          <p className="text-sm text-white">
            Add in your interest to find a better match.
          </p>
        </div>
      </div>
    </div>
  );
}
