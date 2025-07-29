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
export default function Footer() {
  return (
    <div className="bg-[#2C6140] text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className=" md:mb-0">
             <img
                  src="./logo.png"
                  className="w-32 object-cover cursor-pointer"
                  alt="app-store"
                />
              <div className="flex flex-col items-center mt-4 ">
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
          <div className="md:items-start items-center flex flex-col">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Our services
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Bike className="w-4 h-4 mr-2" />
                CanadaHalal CHMP Ride
              </li>
              <li className="flex items-center">
                <Utensils className="w-4 h-4 mr-2" />
                CanadaHalal Food Delievry
              </li>
              <li className="flex items-center">
                <ShoppingCart className="w-4 h-4 mr-2" />
                CanadaHalal Online Shopping
              </li>
              <li className="flex items-center">
                <LuBriefcaseBusiness className="w-4 h-4 mr-2" />
                CanadaHalal Grocery Delivery
              </li>
            </ul>
          </div>

          <div className="md:items-start items-center flex flex-col">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Handshake className="w-5 h-5 mr-2" />
              Our partners
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Drivers
              </li>
              <li className="flex items-center">
                <Utensils className="w-4 h-4 mr-2" />
                Restaurants
              </li>
              <li className="flex items-center">
                <Store className="w-4 h-4 mr-2" />
                Stores
              </li>
            </ul>
          </div>

          <div className="md:items-start items-center flex flex-col">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Info className="w-5 h-5 mr-2" />
              Company
            </h3>
            <ul className="space-y-3">
              <li>About us</li>

              <li className="flex items-center">
                <Headphones className="w-4 h-4 mr-2" />
                Support
              </li>
            </ul>
          </div>

          <div className="md:items-start items-center flex flex-col">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <LuBriefcaseBusiness className="w-5 h-5 mr-2" />
              Work with us
            </h3>
            <ul className="space-y-3">
              <li>Become a Driver</li>
              <li className="flex items-center">
                <Gift className="w-4 h-4 mr-2" />
                Order for someone else
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <span className="flex items-center">
                <FileText className="w-4 h-4 mr-1" />
                Privacy Policy
              </span>
              <span className="flex items-center">
                <FileText className="w-4 h-4 mr-1" />
                Terms of Use
              </span>
              <span className="flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1" />
                Cookie Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
