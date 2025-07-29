import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [open, setopen] = useState(false);

  const router = useRouter();
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="./logo.png"
              className="w-20 h-20"
             onClick={() => router.push("/")}
              alt="Logo"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setopen(true)}
              onMouseLeave={() => setopen(false)}
            >
              <div>
                <button className="relative flex items-center font-semibold text-gray-700 hover:text-gray-900 px-2 py-2 cursor-pointer transition-colors duration-200 hover:bg-green-50 rounded-xl group focus:outline-none">
                  Canada Halal Services
                  <span
                    className={`ml-1 transition-transform duration-300 ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <FaChevronDown className="w-4 h-4" />
                  </span>
                  <span className="absolute left-0 bottom-0 w-full  scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </button>
                {open && (
                  <ul className="absolute left-0  w-48 bg-green-50 rounded-lg shadow-lg py-1.5 z-20 transition-all duration-300 animate-fadeIn">
                    <li
                      className="px-4 py-2 hover:bg-green-100 text-gray-500 cursor-pointer flex items-center"
                      onClick={() => router.push("/CHMP-Ride")}
                    >
                      CHMP Ride
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-green-100 text-gray-500 cursor-pointer flex items-center"
                      onClick={() => router.push("/Food-Delivery")}
                    >
                      Food Delivery
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-green-100 text-gray-500 cursor-pointer flex items-center"
                      onClick={() => router.push("/Online-Shopping")}
                    >
                      Online Shopping
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-green-100 text-gray-500 cursor-pointer flex items-center"
                      onClick={() => router.push("/Grocery-Delivery")}
                    >
                      Grocery Delivery
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <style jsx>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .animate-fadeIn {
                animation: fadeIn 0.3s ease;
              }
            `}</style>

            <button
              className="relative flex items-center font-semibold text-gray-700 hover:text-gray-900 px-2 py-2 cursor-pointer rounded-md roun transition-colors duration-200 hover:bg-neutral-100 group"
              onClick={() => router.push("/AboutUs")}
            >
              About us
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </button>
            <button
              className="relative flex items-center font-semibold text-gray-700 hover:text-gray-900 px-2 py-2 rounded-md cursor-pointer transition-colors duration-200 hover:bg-neutral-100 group"
              onClick={() => router.push("/Faq")}
            >
              Faqs
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="mb-2">
              <span className="block px-3 py-2 rounded-md text-base font-bold text-green-700">
                Services
              </span>
              <ul className="pl-2">
                <li>
                  <button
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-green-50"
                    onClick={() => router.push("/CHMP-Ride")}
                  >
                    CHMP Ride
                  </button>
                </li>
                <li>
                  <button
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-green-50"
                    onClick={() => router.push("/Food-Delivery")}
                  >
                    Food Delivery
                  </button>
                </li>
                <li>
                  <button
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-green-50"
                    onClick={() => router.push("/Online-Shopping")}
                  >
                    Online Shopping
                  </button>
                </li>
                <li>
                  <button
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-green-50"
                    onClick={() => router.push("/Grocery-Delivery")}
                  >
                    Grocery Delivery
                  </button>
                </li>
              </ul>
            </div>
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => (window.location.href = "/AboutUs")}
            >
              About us
            </button>
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => (window.location.href = "/Faq")}
            >
              Faqs
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
