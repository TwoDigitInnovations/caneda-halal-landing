import { Link } from "lucide-react";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

const MultiServiceHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: "./online-booking.png",
      name: "CHMP & Ride",
      desc: "Adventure booking",
    },
    {
      icon: "./online-shopping.png",
      name: "Fashion",
      desc: "Latest trends & styles",
    },
    { icon: "./delivery.png", name: "Food", desc: "Fresh food delivered" },
    {
      icon: "./shopping-bag.png",
      name: "Grocery",
      desc: "Safe & Fresh Grocery",
    },
  ];

  const features = [
    {
      Link: "/CHMPRide",
      icon: "./online-booking.png",
      title: "CHMP Ride",
      desc: "Book CHMPing trips, bike rentals, and outdoor adventures. Explore nature with our curated experiences and professional guides.",
    },
    {
      Link: "/Online-Shopping",
      icon: "./online-shopping.png",
      title: "Online Shopping",
      desc: "Discover the latest fashion trends. Shop from top brands with exclusive deals and fast delivery right to your doorstep.",
    },
    {
      Link: "/Food-Delivery",
      icon: "./delivery.png",
      title: "Food Delivery",
      desc: "Order from your favorite restaurants. Fresh ingredients, hot meals, and quick delivery for all your cravings.",
    },
    {
      Link: "/Grocery-Delivery",
      icon: "./shopping-bag.png",
      title: "Geocery Delievry",
      desc: "Safe and reliable transportation. Professional drivers, real-time tracking, and affordable rates for all your travel needs.",
    },
  ];

  const FloatingCard = ({ service, index, className }) => (
    <div
      className={`absolute backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 text-gray-800 transform transition-all duration-1000 ${className}`}
      style={{
        transform: `translateY(${scrollY * 0.1 * (index + 1)}px)`,
        animationDelay: `${index * 0.5}s`,
      }}
    >
      <img className="w-18 mb-2" src={service.icon} />
      <div className="font-bold text-gray-800">{service.name}</div>
      <div className="text-sm text-gray-600">{service.desc}</div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <section className="min-h-screen flex  px-8 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 md:gap-16 items-center w-full">
          <div className="z-10">
            <h1
              className={`text-4xl md:text-5xl md:mt-0 mt-6 font-black text-gray-900 capitalize leading-tight mb-6 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              The super app designed to make
            </h1>

            <h2
              className={`text-4xl md:text-5xl font-black bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text text-transparent mb-8 transform capitalize transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              your life easier
            </h2>

            <p
              className={`text-xl text-gray-600 leading-relaxed mb-12 transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              From adventure bookings to fashion shopping, food delivery to
              reliable rides - everything you need in one powerful app.
              Experience seamless living with our integrated services.
            </p>

            <button
              className={`inline-flex items-center gap-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-green-500/25 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ animationDelay: "0.7s" }}
            >
              <span>Get Started Now</span>
              <span className="text-2xl">→</span>
            </button>

            <div
              className={`bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 shadow-lg transform transition-all duration-1000 delay-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              {[
                { number: "50K+", label: "Happy Users" },
                { number: "4.8★", label: "App Rating" },
                { number: "24/7", label: "Support" },
                { number: "100%", label: "Secure" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[80vh] flex items-center justify-center md:h-[80vh] sm:h-[60vh]">
            <div className="hidden md:block">
              <FloatingCard
                service={services[0]}
                index={0}
                className="top-[10%] -left-[10%] animate-pulse"
              />
              <FloatingCard
                service={services[1]}
                index={1}
                className="top-[10%] -right-[15%]"
              />
              <FloatingCard
                service={services[2]}
                index={2}
                className="bottom-[20%] -left-[5%]"
              />
              <FloatingCard
                service={services[3]}
                index={3}
                className="bottom-[20%] -right-[10%] animate-bounce"
              />
            </div>

            <div
              className={`w-88 h-[650px] md:w-84 md:h-[600px] bg-gradient-to-b from-gray-100 to-gray-200 rounded-[2rem] md:rounded-[3rem] p-3 md:p-5 shadow-2xl relative z-10 transform transition-all duration-1000 delay-900 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-24 opacity-0"
              }`}
            >
              <div className="w-full h-full bg-gray-900 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 md:p-6 flex md:gap-4 text-white">
                  <img
                    src="./logo.png"
                    className="w-16 pt-4 mb-4 mx-auto"
                    alt="Logo"
                  />
                  <div className="pt-4">
                    <div className="text-xl md:text-2xl font-black mb-2">
                      LifeEase
                    </div>
                    <div className="text-xs md:text-sm opacity-90">
                      Everything in one place
                    </div>
                  </div>
                </div>

                <div className="p-4 py-16 md:p-4 md:py-14 grid grid-cols-2 gap-4 md:gap-4 h-[calc(100%-110px)] md:h-[calc(100%-140px)]">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-xl md:rounded-2xl p-2 flex flex-col items-center justify-center text-center text-white transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <img src={service.icon} className="w-18 mb-2 md:mb-3" />

                      <div className="text-xs md:text-sm font-bold">
                        {service.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute md:bottom-0  left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce mb-4 -bottom-12 text-center">
          <div className="text-2xl">↓</div>
          <div className="text-sm mt-2">Scroll for more</div>
        </div>
      </section>

      <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Services
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes us different with our comprehensive range of
              services designed for modern living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 flex justify-center items-center flex-col hover:shadow-2xl hover:scale-105 transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => router.push(feature.Link)}
              >
                <img
                  src={feature.icon}
                  className="w-16 mb-6 group-hover:scale-110 transition-transform duration-300"
                />

                <div className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {feature.title}
                </div>
                <div className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Unified CTA Section */}
          <section className="mt-20 py-16 px-4 sm:px-6 lg:px-8 text-center rounded-3xl shadow-2xl bg-gradient-to-br from-green-700 via-emerald-600 to-green-800">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-black text-white mb-6">
                Ready to explore our services?
              </h2>
              <p className="text-xl text-white opacity-90 mb-8">
                Join thousands of satisfied customers who trust Canada Halal
                Market Place for their lifestyle needs. Download our app now and
                get started!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                <button className="bg-white text-green-800 font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:bg-gray-100 transition duration-300 hover:scale-105">
                  Download App Now
                </button>
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:from-green-700 hover:to-emerald-700 transition duration-300 hover:scale-105">
                  Get Started
                </button>
              </div>
              <p className="text-gray-200 text-lg">
                Available on iOS and Android
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default MultiServiceHero;
