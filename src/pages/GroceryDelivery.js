import React from "react";
import { useTranslation } from "react-i18next";

function GroceryDelivery() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 text-gray-900">
      <section className="md:py-20 py-8 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto bg-gradient-to-r from-green-100 via-yellow-50 to-green-50 rounded-3xl shadow-2xl mb-12">
        <div className="md:w-1/2 text-left md:pr-12">
          <h1 className="text-3xl md:text-5xl font-black text-green-700 mb-6 animate-fadeInUp">
            {t("Grocery Delivery")}
          </h1>
          <p className="text-xl md:text-xl text-gray-800 mb-8 animate-fadeIn">
            {t("From your fridge to your doorstep — in minutes. No traffic, no queues, no delays.")}
            <br />
            <br />
            {t("Order groceries online and enjoy fast, reliable delivery.")}
            <br />
            <span className="text-green-600 font-bold">
              {t("Quality, convenience, and savings!")}
            </span>
            <br />
            <br />
            {t("Order fresh groceries anytime, anywhere. Because convenience shouldbe instant. Your daily needs, now just a tap away.")}
          </p>
        </div>
        <div className="md:w-[600px] w-[330px] mt-6 md:mt-0 flex justify-center animate-scaleIn">
          <img
            src="./grocery_delivery2.jpg"
            alt="Grocery Delivery Hero"
            className="rounded-[2.5rem] shadow-2xl w-full object-cover border-4 border-green-200"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/logo.png";
            }}
          />
        </div>
      </section>

      <section className="py-10 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 animate-fadeInUp">
          <img
            src="./grocery_delivery3.jpg"
            alt="Fresh Groceries Delivered Fast"
            className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://images.pexels.com/photos/578831/pexels-photo-578831.jpeg?auto=compress&w=800&q=80";
            }}
          />
        </div>
        <div className="md:w-1/2 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            {t("Fresh Groceries Delivered Fast")}
          </h2>
          <p className="text-lg text-gray-800 mb-4">
           {t("Get farm-fresh fruits, leafy vegetables, snacks, and daily essentials delivered from trusted local stores to your doorstep in just minutes.")}
          </p>
          <p className="text-lg text-gray-800 mb-4">
            {t("We ensure hygiene, freshness, and quality by partnering with nearby vendors who follow strict packaging and cleanliness standards every single time.")}
          </p>
          <p className="text-lg text-gray-800 mb-4">
            {t("No traffic, no queues — simply tap, order, and receive your groceries faster than ever, anytime you need them, day or night.")}
          </p>
        </div>
      </section>

      <section className="py-10 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row-reverse items-center gap-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 animate-fadeInUp">
          <img
            src="./grocery_delivery.jpg"
            alt="How It Works"
            className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://images.pexels.com/photos/578831/pexels-photo-578831.jpeg?auto=compress&w=800&q=80";
            }}
          />
        </div>
        <div className="md:w-1/2 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            {t("Why Choose Us?")}
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            {t("No hidden fees, no minimum order — only fast delivery, fresh items, and a reliable experience every single time.")}
          </p>
          <p className="text-lg text-gray-800 mb-4">
            {t("We serve 7 days a week with lightning-fast logistics, handpicked products, and carefully curated grocery selections that fit every lifestyle.")}
          </p>
          <p className="text-lg text-gray-800 mb-4">
            {t("Join thousands of happy users who trust us for quality, consistency, convenience, and round-the-clock customer-first support and service.")}
          </p>
        </div>
      </section>

      <section className="py-10 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 animate-fadeInUp">
          <img
            src="https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=800&q=80"
            alt="Why Choose Us?"
            className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://images.pexels.com/photos/578831/pexels-photo-578831.jpeg?auto=compress&w=800&q=80";
            }}
          />
        </div>
        <div className="md:w-1/2 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            {t("How It Works")}
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            {t("Open the app, explore thousands of products, add items to your cart,and place your order in just a few clicks")}
          </p>
          <p className="text-lg text-gray-800 mb-4">
            {t("Track your delivery agent live with real-time map updates, order status, estimated time, and instant in-app customer chat support.")}
          </p>
          <p className="text-lg text-gray-800 mb-4">
          {t("Pay securely via UPI, wallet, card, or net banking, and enjoy a seamless experience with every fast, safe, and verified delivery.")}
          </p>
        </div>
      </section>

      <section className="py-10 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row-reverse items-center gap-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 animate-fadeInUp">
          <img
            src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&w=800&q=80"
            alt="Our Promise"
            className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://images.pexels.com/photos/578831/pexels-photo-578831.jpeg?auto=compress&w=800&q=80";
            }}
          />
        </div>
        <div className="md:w-1/2 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
           {t("Our Promise")}
          </h2>
          <p className="text-lg text-gray-800 mb-4">
           {t("We promise freshness, hygiene, and speed — and if anything is not perfect, we will refund or replace it, no questions asked.")}
          </p>{" "}
          <p className="text-lg text-gray-800 mb-4">
            {t("Every product is carefully packed and delivered within 30 minutes byctrained agents who care about your time and trust")}
          </p>{" "}
          <p className="text-lg text-gray-800 mb-4">
            {t("We do not just deliver groceries — we deliver peace of mind, reliability, and unmatched service that fits into your busy routine.")}
          </p>
        </div>
      </section>

      <section className="md:py-16 py-8 px-8 sm:px-8 lg:px-16 bg-white rounded-3xl shadow-2xl max-w-7xl mx-auto mt-12 animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-black text-green-700 mb-8 text-center">
          {t("Key Features")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-green-100 to-yellow-100 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 animate-scaleIn">
            <div className="text-5xl mb-4">🥦</div>
            <div className="text-xl font-bold mb-2 text-green-700">
              {t("Fresh Produce")}
            </div>
            <div className="text-gray-800">
              {t("Handpicked seasonal fruits and veggies delivered fresh from trusted local farms to your doorstep every time.")}
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-yellow-100 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 animate-scaleIn">
            <div className="text-5xl mb-4">🛒</div>
            <div className="text-xl font-bold mb-2 text-green-700">
              {t("Wide Selection")}
            </div>
            <div className="text-gray-800">
              {t("Shop everything from pantry staples to gourmet items in one place easy, fast, and reliable.")}
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-yellow-100 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 animate-scaleIn">
            <div className="text-5xl mb-4">⏱️</div>
            <div className="text-xl font-bold mb-2 text-green-700">
              {t("Fast Delivery")}
            </div>
            <div className="text-gray-800">
              {t("Groceries delivered in under 30 minutes by our trained riders  no delays, no compromises.")}
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-yellow-100 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 animate-scaleIn">
            <div className="text-5xl mb-4">💳</div>
            <div className="text-xl font-bold mb-2 text-green-700">
              {t("Secure Payment")}
            </div>
            <div className="text-gray-800">
              {t("Use UPI, cards, net banking or wallets — every transaction is encrypted and fully secure.")}
            </div>
          </div>
        </div>
      </section>

     
      <section className="md:py-16 py-10 px-4 sm:px-8 lg:px-16 text-center">
        <h2 className="text-2xl md:text-4xl font-black text-green-700 mb-6 animate-fadeInUp">
          {t("Ready to shop fresh?")}
        </h2>
        <p className="text-lg text-gray-800 mb-8 animate-fadeIn">
          {t("Sign up now and enjoy the best grocery delivery experience in your city.")}
        </p>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}

export default GroceryDelivery;
