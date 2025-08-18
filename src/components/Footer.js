import { Bike, Utensils, ShoppingCart, Briefcase, Info, Facebook, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { useRouter } from "next/router";

export default function Footer() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className="bg-[#2C6140] text-white pt-12 pb-8 px-12 sm:px-10 lg:px-8">
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-8">
        <div className="w-full mb-12 flex md:flex-row flex-col ">
          <div className=" md:w-1/3 w-full flex flex-col md:flex-row justify-between  mb-4">
            <div className=" md:mb-0">
              <img
                src="./logo.png"
                className="w-32 object-cover cursor-pointer transition-transform hover:scale-110"
                alt="app-store"
              />

              <div className="mt-4 flex space-x-4">
                <a href="https://www.facebook.com/CanadaHalalMarketPlace/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200  transition-transform hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/canada-halal-market-place" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-transform hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/canadahalalmarketplace_/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-transform hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://x.com/CanadaP41975" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-transform hover:scale-110">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/@canadahalalmarketplace" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-transform hover:scale-110">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="https://ca.pinterest.com/canadahalalmarketplace/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
              <div className="flex   mt-4 ">
                <img
                  src="./app-store.png"
                  className="w-32 object-cover cursor-pointer transition-transform hover:scale-110"
                  alt="app-store"
                />
                <img
                  src="./play-store.png"
                  className="w-32 object-cover cursor-pointer transition-transform hover:scale-110"
                  alt="play-store"
                />
              </div>
            </div>
          </div>
          <div className="md:w-2/3 w-full gap-6 grid grid-cols-1 lg:grid-cols-3 "> 
          <div className="">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              {t("Our services")}
            </h3>
            <ul className="space-y-3">
              <li
                className="flex items-center cursor-pointer transition-transform hover:scale-105"
                onClick={() => router.push("/CHMPRide")}
              >
                <Bike className="w-4 h-4 mr-2" />
                {t("CHMP Ride")}
              </li>
              <li
                className="flex items-center cursor-pointer transition-transform hover:scale-105"
                onClick={() => router.push("/Food-Delivery")}
              >
                <Utensils className="w-4 h-4 mr-2" />
                {t("Food Delivery")}
              </li>
              <li
                className="flex items-center cursor-pointer transition-transform hover:scale-105"
                onClick={() => router.push("/Online-Shopping")}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {t("Online Shopping")}
              </li>
              <li
                className="flex items-center cursor-pointer transition-transform hover:scale-105"
                onClick={() => router.push("/GroceryDelivery")}
              >
                <LuBriefcaseBusiness className="w-4 h-4 mr-2" />
                {t("Grocery Delivery")}
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Info className="w-5 h-5 mr-2" />
              {t("Company")}
            </h3>
            <ul className="space-y-3">
              <li
                onClick={() => router.push("/AboutUs")}
                className="cursor-pointer transition-transform hover:scale-105"
              >
                {t("Aboutus")}
              </li>
              <li
                className="flex cursor-pointer items-center transition-transform hover:scale-105"
                onClick={() => router.push("/Faq")}
              >
                {t("Faqs")}
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <LuBriefcaseBusiness className="w-5 h-5 mr-2" />
              {t("Policy")}
            </h3>
            <div className="space-y-3 flex flex-col">
              <a
                href="/Policy"
                className="cursor-pointer transition-transform hover:scale-105"
              >
                {t("Privacy Policy")}{" "}
              </a>
              <a
                className="mb-4 cursor-pointer transition-transform hover:scale-105"
                href="/termConditions"
              >
                {" "}
                {t("Terms of Use")}
              </a>
            </div>
          </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {t("All rights reserved @2025 Canada Halal Market Place")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}