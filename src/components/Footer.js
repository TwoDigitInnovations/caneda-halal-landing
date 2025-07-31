import { Bike, Utensils, ShoppingCart, Briefcase, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { useRouter } from "next/router";

export default function Footer() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className="bg-[#2C6140] text-white pt-12 pb-8 px-12 sm:px-10 lg:px-8">
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between  mb-4">
            <div className=" md:mb-0">
              <img
                src="./logo.png"
                className="w-32 object-cover cursor-pointer transition-transform hover:scale-110"
                alt="app-store"
              />
              <div className="flex flex-col  mt-4 ">
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
                href="https://main.d3jevhpiowt8ys.amplifyapp.com/privacy-policy"
                className="cursor-pointer transition-transform hover:scale-105"
              >
                {t("Privacy Policy")}{" "}
              </a>
              <a
                className="mb-4 cursor-pointer transition-transform hover:scale-105"
                href="https://main.d3jevhpiowt8ys.amplifyapp.com/terms"
              >
                {" "}
                {t("Terms of Use")}
              </a>
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
