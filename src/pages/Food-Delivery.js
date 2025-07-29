
import React from "react";

const foodSections = [
  {
    title: "Why Choose CanadaHalal Food Delivery?",
    desc:
      "Experience the convenience of fresh, halal-certified meals delivered right to your doorstep. Our platform connects you with top-rated restaurants and local kitchens, ensuring quality, taste, and reliability every time.\n\nWe partner only with trusted providers who meet strict halal standards, so you can order with confidence. Whether it's lunch at work, dinner with family, or a late-night snack, we've got you covered.",
    img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=800&q=80",
  },
  {
    title: "How It Works",
    desc:
      "Browse our curated menu, select your favorite dishes, and place your order in just a few clicks. Our delivery partners ensure your food arrives hot and on time, every time.\n\nTrack your order in real-time, pay securely online, and enjoy a seamless experience from start to finish. Our app and website are designed for speed and simplicity.",
    img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=800&q=80",
  },
  {
    title: "Our Promise",
    desc:
      "We guarantee 100% halal ingredients, transparent sourcing, and customer-first service. Enjoy exclusive deals, real-time order tracking, and 24/7 support for a seamless experience.\n\nYour satisfaction is our priority. If you ever have a concern, our support team is here to help. We believe in honest food, fair prices, and happy customers.",
    img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=800&q=80",
  },
  {
    title: "What Makes Us Different?",
    desc:
      "CanadaHalal Food Delivery is more than just a delivery service. We are a community of food lovers, chefs, and families who value quality and trust.\n\nWe offer seasonal menus, special discounts, and exclusive access to new restaurants. Our technology ensures fast delivery, accurate orders, and a delightful experience every time.",
    img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&w=800&q=80",
  },
];

export default function FoodDelivery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 flex flex-col items-center text-center max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black text-green-700 mb-6 animate-fadeInUp">CanadaHalal Food Delivery</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-8 animate-fadeIn">Fresh, halal, and delivered fast. Discover the easiest way to enjoy delicious meals at home or work.</p>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
          alt="Food Delivery Hero"
          className="rounded-2xl shadow-xl w-full max-w-xl object-cover animate-scaleIn"
        />
      </section>

      {/* Info Sections */}
      {foodSections.map((section, idx) => (
        <section
          key={idx}
          className={`py-12 px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        >
          <div className="md:w-1/2 animate-fadeInUp">
            <img
              src={section.img}
              alt={section.title}
              className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
              onError={e => { e.target.onerror=null; e.target.src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"; }}
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
              icon: "🍽️",
              title: "Wide Menu",
              desc: "Choose from hundreds of dishes, cuisines, and restaurants."
            },
            {
              icon: "🚚",
              title: "Fast Delivery",
              desc: "Get your food delivered hot and fresh, every time."
            },
            {
              icon: "🕋",
              title: "100% Halal",
              desc: "All meals are halal-certified and ethically sourced."
            },
            {
              icon: "📱",
              title: "Easy Ordering",
              desc: "Order via app or website in just a few clicks."
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
        <h2 className="text-3xl md:text-4xl font-black text-green-700 mb-6 animate-fadeInUp">Ready to order?</h2>
        <p className="text-lg text-gray-700 mb-8 animate-fadeIn">Sign up now and enjoy exclusive offers, fast delivery, and the best halal food experience in Canada.</p>
        <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-scaleIn">Order Now</button>
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
