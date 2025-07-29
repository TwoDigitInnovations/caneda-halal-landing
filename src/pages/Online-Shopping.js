
import React from "react";

const shoppingSections = [
  {
    title: "Welcome to CanadaHalal Online Shopping",
    desc:
      "Shop the latest fashion, electronics, groceries, and more—all in one place. Our platform brings you a curated selection of top brands and local favorites, with a focus on quality, value, and convenience.\n\nEnjoy a seamless shopping experience with personalized recommendations, easy navigation, and secure payments. Whether you're looking for daily essentials or special gifts, you'll find everything you need right here.",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&w=800&q=80",
  },
  {
    title: "How It Works",
    desc:
      "Browse categories, discover deals, and add products to your cart with ease. Our secure checkout and fast delivery ensure a smooth shopping experience from start to finish.\n\nTrack your orders in real-time, save your favorite items, and get notified about exclusive offers. Our user-friendly app and website make shopping simple for everyone.",
    img: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&w=800&q=80",
  },
  {
    title: "Why Shop With Us?",
    desc:
      "Enjoy exclusive offers, easy returns, and 24/7 customer support. We guarantee authentic products, transparent pricing, and a hassle-free experience every time you shop.\n\nOur team is dedicated to bringing you the best deals and the latest trends. Plus, our return policy ensures you can shop with confidence and peace of mind.",
    img: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&w=800&q=80",
  },
  {
    title: "Our Promise",
    desc:
      "CanadaHalal Online Shopping is committed to ethical sourcing, secure payments, and customer satisfaction. Join our community and discover a better way to shop online.\n\nWe believe in building trust through transparency and quality. Your feedback helps us grow and improve, so you always get the best shopping experience possible.",
    img: "https://images.pexels.com/photos/634753/pexels-photo-634753.jpeg?auto=compress&w=800&q=80",
  },
];

export default function OnlineShopping() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 text-gray-800">
   
      <section className="py-20 px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto bg-gradient-to-r from-green-100 via-blue-50 to-green-50 rounded-3xl shadow-2xl mb-8">
        <div className="md:w-1/2 text-left md:pr-12">
          <h1 className="text-5xl md:text-6xl font-black text-green-700 mb-6 animate-fadeInUp">CanadaHalal Online Shopping</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fadeIn">Shop smarter, live better.<br/>Discover the best products and deals, delivered to your door.<br/><span className="text-green-600 font-bold">Fashion, electronics, groceries, and more!</span></p>
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-scaleIn mt-2">Start Shopping</button>
        </div>
        <div className="md:w-[600px] w-[400px] mt-4 md:mt-0 flex justify-center animate-scaleIn">
          <img
            src="https://images.pexels.com/photos/3965544/pexels-photo-3965544.jpeg?auto=compress&w=800&q=80"
            alt="Online Shopping Hero"
            className="rounded-[2.5rem] shadow-2xl w-full  object-cover border-4 border-green-200"
          />
        </div>
      </section>

      {/* Info Sections */}
      {shoppingSections.map((section, idx) => (
        <section
          key={idx}
          className={`py-16 px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        >
          <div className="md:w-1/2 animate-fadeInUp">
            <img
              src={section.img}
              alt={section.title}
              className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
              onError={e => { e.target.onerror=null; e.target.src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&w=800&q=80"; }}
            />
          </div>
          <div className="md:w-1/2 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">{section.title}</h2>
            <p className="text-lg text-gray-700 mb-4" style={{whiteSpace: 'pre-line'}}>{section.desc}</p>
          </div>
        </section>
      ))}

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white rounded-3xl shadow-2xl max-w-7xl mx-auto mt-12 animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-black text-green-700 mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "🛒",
              title: "Wide Selection",
              desc: "Shop thousands of products across all categories."
            },
            {
              icon: "⚡",
              title: "Fast Delivery",
              desc: "Get your orders delivered quickly and reliably."
            },
            {
              icon: "🔒",
              title: "Secure Payments",
              desc: "Pay safely with encrypted transactions."
            },
            {
              icon: "💬",
              title: "24/7 Support",
              desc: "We're here to help, anytime you need us."
            },
          ].map((feature, i) => (
            <div key={i} className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 animate-scaleIn">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <div className="text-xl font-bold mb-2 text-green-700">{feature.title}</div>
              <div className="text-gray-700">{feature.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-green-700 mb-6 animate-fadeInUp">Start Shopping Today!</h2>
        <p className="text-lg text-gray-700 mb-8 animate-fadeIn">Create your account and unlock exclusive deals, fast delivery, and a world of products at your fingertips.</p>
        <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-scaleIn">Shop Now</button>
      </section>

      {/* Animations */}
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
