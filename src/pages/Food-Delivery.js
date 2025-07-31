import React from "react";
import { useTranslation } from "react-i18next";

export default function FoodDelivery() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="md:py-16 py-8 px-8 sm:px-8 lg:px-16 flex flex-col items-center text-center max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black text-green-700 mb-6 animate-fadeInUp">
          {t("CanadaHalal Food Delivery")}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-8 animate-fadeIn">
          {t(
            "CanadaHalal Food Delivery brings your favorite halal meals right to your door, hot and fresh."
          )}
        </p>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
          alt="Food Delivery Hero"
          className="rounded-2xl shadow-xl w-full max-w-xl object-cover animate-scaleIn"
        />
      </section>

      <section className="md:py-12 py-8 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 animate-fadeInUp">
          <img
            src="https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=800&q=80"
            alt="Why Choose CanadaHalal Food Delivery?"
            className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";
            }}
          />
        </div>
        <div className="md:w-1/2 animate-fadeInUp">
          <h2 className="text-2xl md:text-4xl font-bold text-green-700 mb-4">
            {t("Why Choose CanadaHalal Food Delivery?")}
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            {t(
              "Because you deserve convenience, trust, and quality in every order."
            )}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            {t(
              "We bring you an unmatched variety of halal dishes from verified kitchens, delivered by professional drivers who respect your time."
            )}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            {t(
              "From secure payments and live order tracking to easy reorders and exclusive app offers, we go beyond delivery—we deliver satisfaction"
            )}
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="md:py-12 py-8 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row-reverse items-center gap-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 animate-fadeInUp">
          <img
            src="https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=800&q=80"
            alt="How It Works"
            className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";
            }}
          />
        </div>
        <div className="md:w-1/2 animate-fadeInUp">
          <h2 className="text-2xl md:text-4xl font-bold text-green-700 mb-4">
            {t("How It Works")}
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            {t(
              "Hungry? Open the app, find your favorite restaurant, and place your order in just a few clicks."
            )}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            {t(
              "Our smart system lets you track every step of your delivery in real-time, ensuring transparency and reliability."
            )}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            {t(
              "Want to plan ahead? Schedule your meals in advance, save your favorite orders, choose preferred delivery time slots, and enjoy complete control over your food journey."
            )}
          </p>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="md:py-12 py-8 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 animate-fadeInUp">
          <img
            src="https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=800&q=80"
            alt="Our Promise"
            className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";
            }}
          />
        </div>
        <div className="md:w-1/2 animate-fadeInUp">
          <h2 className="text-2xl md:text-4xl font-bold text-green-700 mb-4">
            {t("What Makes Us Different?")}
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            {t(
              "While other platforms focus on speed alone, we focus on purity,ethics, and trust."
            )}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            {t(
              "All our meals are 100% halal-certified, sourced from verified local partners, and served with a commitment to excellence."
            )}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            {t(
              "We listen to our customers, improve constantly, and provide features like driver ratings, scheduled orders, and priority support that make us truly stand out in the food delivery space."
            )}
          </p>
        </div>
      </section>

      <section className="md:py-12 py-8 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row-reverse items-center gap-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 animate-fadeInUp">
          <img
            src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&w=800&q=80"
            alt="What Makes Us Different?"
            className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";
            }}
          />
        </div>
        <div className="md:w-1/2 animate-fadeInUp">
          <h2 className="text-2xl md:text-4xl font-bold text-green-700 mb-4">
            {t("Our Promise")}
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            {t(
              "At CanadaHalal, we do not just promise fast food—we promise food done right."
            )}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            {t(
              "Every order is prepared with care, packaged for freshness, and delivered with responsibility."
            )}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            {t(
              "We are here to support local businesses, serve diverse communities, and give you a seamless, satisfying halal food experience—every single time. If you are not happy, we will fix it. That is our word."
            )}
          </p>
        </div>
      </section>

      <section className="md:py-16 py-8 px-8 sm:px-8 lg:px-16 bg-white rounded-3xl shadow-2xl max-w-7xl mx-auto mt-12 animate-fadeIn">
        <h2 className="text-2xl md:text-4xl font-black text-green-700 mb-8 text-center">
          {t("Key Features")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 animate-scaleIn">
            <div className="text-5xl mb-4">🍽️</div>
            <div className="text-xl font-bold mb-2 text-green-700">
              {t("Wide Menu")}
            </div>
            <div className="text-gray-700">
              {t(
                "Browse hundreds of halal dishes, from traditional favorites to trending international cuisines—delivered fresh from trusted local restaurants."
              )}
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 animate-scaleIn">
            <div className="text-5xl mb-4">🚚</div>
            <div className="text-xl font-bold mb-2 text-green-700">
              {t("Fast Delivery")}
            </div>
            <div className="text-gray-700">
              {t(
                "No more long waits. Our trained drivers deliver hot, fresh meals straight to your door, faster than you had expect."
              )}
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 animate-scaleIn">
            <div className="text-5xl mb-4">🕋</div>
            <div className="text-xl font-bold mb-2 text-green-700">
              {t("100% Halal")}
            </div>
            <div className="text-gray-700">
              {t(
                "Every meal is certified halal—sourced ethically, prepared with care, and verified to meet your religious and dietary needs."
              )}
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 animate-scaleIn">
            <div className="text-5xl mb-4">📱</div>
            <div className="text-xl font-bold mb-2 text-green-700">
              {t("Easy Ordering")}
            </div>
            <div className="text-gray-700">
              {t(
                "Order from our mobile app or website in just a few taps. Reorder your favorites, track your delivery, and pay securely—all in one place."
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="md:py-16 py-10 px-8 sm:px-8 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-green-700 mb-6 animate-fadeInUp">
          {t("Ready to order?")}
        </h2>
        <p className="text-lg text-gray-700 mb-8 animate-fadeIn">
          {t(
            "Sign up now and enjoy exclusive offers, fast delivery, and the best halal food experience in Canada Halal Market Place."
          )}
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
