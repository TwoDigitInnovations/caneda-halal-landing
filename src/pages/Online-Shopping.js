import React from "react";
import { useTranslation } from "react-i18next";

export default function OnlineShopping() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 text-gray-800">

      <section className="md:py-20 py-8 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto bg-gradient-to-r from-green-100 via-blue-50 to-green-50 rounded-3xl shadow-2xl mb-8">
        <div className="md:w-1/2 text-left md:pr-12">
          <h1 className="text-3xl md:text-5xl font-black text-green-700 mb-6 animate-fadeInUp">
            {t("CanadaHalal Online Shopping")}</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fadeIn">
            {t("Shop smarter, live better")}.<br />
            {t("Discover the best products and deals, delivered to your door")}.<br />
            <br />
            <span className="text-green-600 font-bold">{t("Fashion, electronics, groceries, and more!")}</span>
          </p>
        </div>
        <div className="md:w-[600px] w-[330px] mt-6 md:mt-0 flex justify-center animate-scaleIn">
          <img
            src="./onlineShopping2.jpg"
            alt="Online Shopping Hero"
            className="rounded-[2.5rem] shadow-2xl w-full object-cover border-4 border-green-200"
          />
        </div>
      </section>


      <section className="md:py-16 py-10 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 animate-fadeInUp">
          <img
            src="./onlineShopping.jpg"
            alt="Welcome to CanadaHalal Online Shopping"
            className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
            onError={e => { e.target.onerror = null; e.target.src = "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&w=800&q=80"; }}
          />
        </div>
        <div className="md:w-1/2 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            {t("Welcome to CanadaHalal Online Shopping")}</h2>
          <p className="text-lg text-gray-700 mb-4" >
            {t("Welcome to CanadaHalal Online Shopping — where modest fashion meets quality, comfort, and endless style choices")}
          </p>
          <p className="text-lg text-gray-700 mb-4" >
            {t("We bring the best of clothing, accessories, and lifestyle essentials from trusted halal-conscious brands")}.
          </p>
          <p className="text-lg text-gray-700 mb-4" >
            {t("Shop confidently with fast delivery, verified products, and styles curated for your everyday needs")}.
          </p>
        </div>
      </section>


      <section className="md:py-16 py-10 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row-reverse items-center gap-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 animate-fadeInUp">
          <img
            src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&w=800&q=80"
            alt="How It Works"
            className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
            onError={e => { e.target.onerror = null; e.target.src = "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&w=800&q=80"; }}
          />
        </div>
        <div className="md:w-1/2 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">{t("How It Works")}</h2>
          <p className="text-lg text-gray-700 mb-4" >
            {t("Browse through thousands of fashion-forward products, explore curated collections, apply filters, and discover items perfectly matched to your unique style and size preferences")}.
          </p>
          <p className="text-lg text-gray-700 mb-4" >
            {t("Add your selected products to the cart, apply discount coupons or promo codes, and enjoy a smooth checkout experience with multiple secure payment methods available")}.
          </p>
          <p className="text-lg text-gray-700 mb-4" >
            {t("Track your order every step of the way with live updates, receive timely notifications, and enjoy quick returns or exchanges with dedicated customer care support")}.
          </p>
        </div>
      </section>


      <section className="md:py-16 py-10 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 animate-fadeInUp">
          <img
            src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&w=800&q=80"
            alt="Why Shop With Us?"
            className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
            onError={e => { e.target.onerror = null; e.target.src = "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&w=800&q=80"; }}
          />
        </div>
        <div className="md:w-1/2 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">{t("Why Shop With Us?")}</h2>
          <p className="text-lg text-gray-700 mb-4" >
            {t("We bring you exclusive fashion collections, unbeatable prices, and exceptional service designed to make your online shopping experience effortless, exciting, and completely stress-free")}.
          </p>
          <p className="text-lg text-gray-700 mb-4" >
            {t("Every single product is 100% original, thoroughly quality-checked, and carefully packed to ensure safe and reliable doorstep delivery no matter where you are in Canada")}
          </p>
          <p className="text-lg text-gray-700 mb-4" >
            {t("Join thousands of satisfied shoppers who count on us for stylish, modest, and affordable clothing choices that reflect both modern trends and cultural values")}
          </p>
        </div>
      </section>


      <section className="md:py-16 py-10 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row-reverse items-center gap-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 animate-fadeInUp">
          <img
            src="https://images.pexels.com/photos/634753/pexels-photo-634753.jpeg?auto=compress&w=800&q=80"
            alt="Our Promise"
            className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
            onError={e => { e.target.onerror = null; e.target.src = "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&w=800&q=80"; }}
          />
        </div>
        <div className="md:w-1/2 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">{t("Our Promise")}</h2>
          <p className="text-lg text-gray-700 mb-4" >
            {t("Our promise is to deliver a smooth, reliable, and enjoyable shopping experience with trusted products and on-time doorstep delivery across Canada")}.
          </p>
          <p className="text-lg text-gray-700 mb-4" >
            {t("We work only with verified sellers and carefully handpick products that meet our highest standards of quality, authenticity, and ethical sourcing")}.
          </p>
          <p className="text-lg text-gray-700 mb-4" >
            {t("Your satisfaction matters the most to us  we listen to your feedback and continuously improve to make your shopping experience even better")}.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="md:py-16 py-10 px-8 sm:px-8 lg:px-16 bg-white rounded-3xl shadow-2xl max-w-7xl mx-auto mt-12 animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-black text-green-700 mb-8 text-center">{t("Key Features")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 animate-scaleIn">
            <div className="text-5xl mb-4">🛒</div>
            <div className="text-xl font-bold mb-2 text-green-700">{t("Wide Selection")}</div>
            <div className="text-gray-700">{t("Shop thousands of products across all categories")}.</div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 animate-scaleIn">
            <div className="text-5xl mb-4">⚡</div>
            <div className="text-xl font-bold mb-2 text-green-700">{t("Fast Delivery")}</div>
            <div className="text-gray-700">{t("Get your orders delivered quickly and reliably")}.</div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 animate-scaleIn">
            <div className="text-5xl mb-4">🔒</div>
            <div className="text-xl font-bold mb-2 text-green-700">{t("Secure Payments")}</div>
            <div className="text-gray-700">{t("Pay safely with encrypted transactions")}.</div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 animate-scaleIn">
            <div className="text-5xl mb-4">💬</div>
            <div className="text-xl font-bold mb-2 text-green-700">{t("24/7 Support")}</div>
            <div className="text-gray-700">{t("We're here to help, anytime you need us")}.</div>
          </div>
        </div>
      </section>


      <section className="md:py-16 py-10 px-8 sm:px-8 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-green-700 mb-6 animate-fadeInUp">{t("Start Shopping Today!")}</h2>
        <p className="text-lg text-gray-700 mb-8 animate-fadeIn">{t("Create your account and unlock exclusive deals, fast delivery, and a world of products at your fingertips")}.</p>
      </section>


      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s cubic-bezier(.4,0,.2,1);
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scaleIn {
          animation: scaleIn 0.7s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </div>
  );
}