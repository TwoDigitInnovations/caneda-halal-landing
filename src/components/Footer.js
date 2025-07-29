import {
  Apple,
  GooglePlay,
  Bike,
  Utensils,
  ShoppingCart,
  Briefcase,
  Gift,
  Users,
  Truck,
  Store,
  Info,
  BriefcaseBusiness,
  Headphones,
  Handshake,
  Globe,
  FileText,
  ShieldCheck,
} from "lucide-react";

import { LuBriefcaseBusiness } from "react-icons/lu";
import { useRouter } from "next/router";
export default function Footer() {
  const router = useRouter();
  return (
    <div className="bg-[#2C6140] text-white pt-12 pb-8 px-12 sm:px-10 lg:px-8">
      <div className="max-w-7xl mx-auto px-12 sm:px-10 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between  mb-4">
            <div className=" md:mb-0">
              <img
                src="./logo.png"
                className="w-32 object-cover cursor-pointer"
                alt="app-store"
              />
              <div className="flex flex-col  mt-4 ">
                <img
                  src="./app-store.png"
                  className="w-32 object-cover cursor-pointer"
                  alt="app-store"
                />
                <img
                  src="./play-store.png"
                  className="w-32 object-cover cursor-pointer"
                  alt="play-store"
                />
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Our services
            </h3>
            <ul className="space-y-3">
              <li
                className="flex items-center cursor-pointer"
                onClick={() => router.push("/CHMP-Ride")}
              >
                <Bike className="w-4 h-4 mr-2" />
                CHMP Ride
              </li>
              <li
                className="flex items-center cursor-pointer"
                onClick={() => router.push("/Food-Delivery")}
              >
                <Utensils className="w-4 h-4 mr-2" />
                Food Delievry
              </li>
              <li
                className="flex items-center cursor-pointer"
                onClick={() => router.push("/Online-Shopping")}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Online Shopping
              </li>
              <li
                className="flex items-center cursor-pointer"
                onClick={() => router.push("/Grocery-Delivery")}
              >
                <LuBriefcaseBusiness className="w-4 h-4 mr-2" />
                Grocery Delivery
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Info className="w-5 h-5 mr-2" />
              Company
            </h3>
            <ul className="space-y-3">
              <li
                onClick={() => router.push("/AboutUs")}
                className="cursor-pointer"
              >
                About us
              </li>

              <li
                className="flex cursor-pointer items-center"
                onClick={() => router.push("/Faq")}
              >
                Faqs
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <LuBriefcaseBusiness className="w-5 h-5 mr-2" />
              Policy
            </h3>
            <ul className="space-y-3">
              <li>Privacy Policy</li>
              <li className="flex items-center">Terms of Use</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              All rights reserved &copy; 2023 Canada Halal Services
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
