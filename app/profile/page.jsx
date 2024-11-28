'use client';

import { PiPencilSimpleLine } from "react-icons/pi";
import { IoChevronBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FiMoreHorizontal } from "react-icons/fi";

export default function Profile() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen px-4 sm:px-8 bg-[#09141A]">
      <div className="w-full mb-32 max-w-md sm:max-w-lg grid grid-rows-1 gap-6">
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

          <div className="flex justify-end">
            <FiMoreHorizontal
              size={24}
              className="ml-4 text-white hover:text-yellow-300"
            />
          </div>
        </div>

        {/* Profile details box */}
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

        {/* About section */}
        <div className="w-full p-6 sm:p-8 min-h-[150px] bg-[#0E191F] rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-md sm:text-lg font-semibold text-white">About</h2>
            <button
              className="text-white text-lg sm:text-xl hover:text-yellow-300"
              onClick={() => router.push('/about/edit')}
            >
              <PiPencilSimpleLine />
            </button>
          </div>
          <p className="text-sm text-white">
            Add in your info to help others know you better.
          </p>
        </div>

        {/* Interest section */}
        <div className="w-full p-6 sm:p-8 min-h-[150px] bg-[#0E191F] rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-md sm:text-lg font-semibold text-white">Interest</h2>
            <button
              className="text-white text-lg sm:text-xl hover:text-yellow-300"
              onClick={() => router.push('/interest/add')}
            >
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
