import { useState, useContext } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { languageContext } from "@/pages/_app";
import { Languages } from "lucide-react";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [open, setopen] = useState(false);
  const [lang, setLang] = useState(null);
  const [globallang, setgloballang] = useContext(languageContext);
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const router = useRouter();

  function handleClick(idx) {
    try {
      setLang(idx);
      console.log("Language changed to:", idx);
      const language = idx || "en";
      console.log(language);
      i18n.changeLanguage(language);
      setgloballang(language);
      localStorage.setItem("LANGUAGE", language);
    } catch (err) {
      console.log(err.message);
    }
  }

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
                  {t("Canada Halal Services")}
                  <span
                    className={`ml-1 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
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
                      onClick={() => {
                        setIsMobileMenuOpen(!isMobileMenuOpen);
                        router.push("/CHMPRide");
                      }}
                    >
                      {t("CHMP Ride")}
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-green-100 text-gray-500 cursor-pointer flex items-center"
                      onClick={() => {
                        setIsMobileMenuOpen(!isMobileMenuOpen);
                        router.push("/Food-Delivery");
                      }}
                    >
                      {t("Food Delivery")}
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-green-100 text-gray-500 cursor-pointer flex items-center"
                      onClick={() => {
                        setIsMobileMenuOpen(!isMobileMenuOpen);
                        router.push("/Online-Shopping");
                      }}
                    >
                      {t("Online Shopping")}
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-green-100 text-gray-500 cursor-pointer flex items-center"
                      onClick={() => {
                        setIsMobileMenuOpen(!isMobileMenuOpen);
                        router.push("/GroceryDelivery");
                      }}
                    >
                      {t("Grocery Delivery")}
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-green-100 text-gray-500 cursor-pointer flex items-center"
                      onClick={() => {
                        setIsMobileMenuOpen(!isMobileMenuOpen);
                        router.push("/CourierColis");
                      }}
                    >
                      {t("Courier & Colis")}
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
              {t("Aboutus")}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </button>
            <button
              className="relative flex items-center font-semibold text-gray-700 hover:text-gray-900 px-2 py-2 rounded-md cursor-pointer transition-colors duration-200 hover:bg-neutral-100 group"
              onClick={() => router.push("/Faq")}
            >
              {t("Faqs")}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </button>
            <div className="rounded-lg lg:flex hidden">
              <div className="relative w-[120px]">
                <Languages className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-5 h-5 pointer-events-none" />
                <select
                  className="appearance-none bg-green-50  border border-green-200 rounded-xl py-2 pl-10 pr-4 text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm transition-all duration-200 hover:border-green-400"
                  value={lang || "en"}
                  onChange={(e) => handleClick(e.target.value)}
                  style={{ minWidth: 130 }}
                  onFocus={(e) => {
                    e.target.classList.add(
                      "bg-green-50",
                      "rounded-2xl",
                      "text-center"
                    );
                  }}
                  onBlur={(e) => {
                    e.target.classList.remove(
                      "bg-green-50",
                      "rounded-2xl",
                      "text-center"
                    );
                  }}
                >
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="ar">Arabic</option>
                  <option value="pt">Portuguese</option>
                  <option value="wo">Wolof</option>
                  <option value="zh">Chinese</option>
                </select>
                {/* <span className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span> */}
              </div>
            </div>
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

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="mb-2">
              <span className="block px-3 py-2 rounded-md text-base font-bold text-green-700">
                {t("Canada Halal Services")}
              </span>
              <ul className="pl-2">
                <li>
                  <button
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-green-50"
                    onClick={() => {
                      setIsMobileMenuOpen(!isMobileMenuOpen);
                      router.push("/CHMPRide");
                    }}
                  >
                    {t("CHMP Ride")}
                  </button>
                </li>
                <li>
                  <button
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-green-50"
                    onClick={() => {
                      setIsMobileMenuOpen(!isMobileMenuOpen);
                      router.push("/Food-Delivery");
                    }}
                  >
                    {t("Food Delivery")}
                  </button>
                </li>
                <li>
                  <button
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-green-50"
                    onClick={() => {
                      setIsMobileMenuOpen(!isMobileMenuOpen);
                      router.push("/Online-Shopping");
                    }}
                  >
                    {t("Online Shopping")}
                  </button>
                </li>
                <li>
                  <button
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-green-50"
                    onClick={() => {
                      setIsMobileMenuOpen(!isMobileMenuOpen);
                      router.push("/GroceryDelivery");
                    }}
                  >
                    {t("Grocery Delivery")}
                  </button>
                </li>
                <li
                  className="px-4 py-2 hover:bg-green-100 text-gray-500 cursor-pointer flex items-center"
                  onClick={() => {
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                    router.push("/CourierColis");
                  }}
                >
                  {t("Courier & Colis")}
                </li>
              </ul>
            </div>
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                router.push("/AboutUs");
              }}
            >
              {t("Aboutus")}
            </button>
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                router.push("/Faq");
              }}
            >
              {t("Faqs")}
            </button>
            <div className="mt-4 px-3">
              <select
                className="w-full bg-white py-2 px-3  text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
                value={lang || "en"}
                onChange={(e) => handleClick(e.target.value)}
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="ar">Arabic</option>
                <option value="pt">Portuguese</option>
                <option value="wo">Wolof</option>
                <option value="zh">Chinese</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
