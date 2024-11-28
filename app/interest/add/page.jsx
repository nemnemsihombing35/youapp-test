'use client';

import { useRouter } from 'next/navigation';
import { IoChevronBack } from "react-icons/io5";

export default function Interest() {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Navigasi kembali ke halaman sebelumnya
  };

  const handleSave = () => {
    // Tambahkan logika untuk menyimpan data minat di sini
    router.push('/profile'); // Navigasi ke halaman profil
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen px-4 sm:px-8 bg-[#09141A]">
      <div className="w-full max-w-md sm:max-w-lg">
        
        {/* Header dengan tombol Back di kiri dan tombol Save di kanan */}
        <div className="absolute mt-12 top-4 left-4 right-4 flex justify-between items-center z-10">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center text-white hover:text-yellow-300 sm:hidden"
          >
            <IoChevronBack size={24} className="mr-1" />
            <span className="text-m sm:text-base">Back</span>
          </button>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="px-4 py-2 text-m font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ABFFFD] via-[#4599DB] to-[#AADAFF] hover:opacity-90 rounded-md"
          >
            Save
          </button>
        </div>

        {/* Konten Utama */}
        <div className="mt-20">
          <h1 className="text-2xl sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#94783E] via-[#F3EDA6] to-[#D5BE88]">
            Tell everyone about yourself
          </h1>
          <p className="text-white text-4xl font-semibold mt-6">What interests you?</p>
        </div>

        {/* Form Registrasi Interest */}
        <form className="space-y-4 mb-56 mt-6">
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#D9D9D90F] p-4 rounded-md">
            {/* Category Items */}
            {["Music", "Basketball", "Fitness", "Gymming"].map((category, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between p-3 bg-[#FFFFFF1A] text-white border border-gray-600 rounded-md cursor-pointer hover:bg-[#1E2A31]"
              >
                <span className="text-sm">{category}</span>

                {/* X Icon */}
                <button
                  className="text-xs text-white rounded-full p-1"
                  onClick={(e) => e.preventDefault()} // Tambahkan fungsionalitas untuk menghapus atau membatalkan pilihan
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}
