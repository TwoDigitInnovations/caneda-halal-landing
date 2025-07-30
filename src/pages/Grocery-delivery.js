import React from "react";

const grocerySections = [
  {
    title: "Fresh Groceries Delivered Fast",
    desc:
      "Get the freshest fruits, vegetables, and daily essentials delivered right to your doorstep. Our grocery delivery service ensures quality, convenience, and speed—so you can focus on what matters most.\n\nChoose from a wide range of products, enjoy transparent pricing, and track your order in real-time. We partner with trusted local stores to bring you the best selection every day.",
    img: "https://images.unsplash.com/photo-1526470498-9ae73c665de8?q=80&w=998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "How It Works",
    desc:
      "Browse our online store, add items to your cart, and schedule your delivery at a time that suits you. Our delivery partners are prompt, courteous, and committed to safety.\n\nEnjoy secure payment options, instant order updates, and hassle-free returns.\n\nYou can also set up recurring orders for your weekly essentials!",
    img: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&w=800&q=80",
  },
  {
    title: "Why Choose Us?",
    desc:
      "We offer competitive prices, exclusive deals, and a satisfaction guarantee. Our customer support is available 24/7 to help with any questions or concerns.\n\nDiscover new products, save time, and enjoy a seamless shopping experience from the comfort of your home.",
    img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=800&q=80",
  },
  {
    title: "Our Promise",
    desc:
      "Your health and happiness are our top priorities. We deliver only the best, and your feedback helps us improve every day.\n\nJoin our community and make grocery shopping easy, reliable, and enjoyable!",
    img: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&w=800&q=80",
  },
];

function GroceryDelivery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 text-gray-900">
      {/* Hero Section */}
      <section className="md:py-20 py-8 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto bg-gradient-to-r from-green-100 via-yellow-50 to-green-50 rounded-3xl shadow-2xl mb-12">
        <div className="md:w-1/2 text-left md:pr-12">
          <h1 className="text-3xl md:text-5xl font-black text-green-700 mb-6 animate-fadeInUp">Grocery Delivery</h1>
          <p className="text-xl md:text-xl text-gray-800 mb-8 animate-fadeIn">Freshness at your doorstep.<br/>Order groceries online and enjoy fast, reliable delivery.<br/><span className="text-green-600 font-bold">Quality, convenience, and savings!</span><br/><br/>Shop from local stores, get daily essentials, and track your order in real-time. Our delivery partners are background-checked and our service is designed for your comfort and safety.</p>
          <button className="bg-gradient-to-r from-green-600 to-yellow-500 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-scaleIn mt-2">Order Now</button>
        </div>
        <div className="md:w-[600px] w-[330px] mt-6 md:mt-0 flex justify-center animate-scaleIn">
          <img
            src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Grocery Delivery Hero"
            className="rounded-[2.5rem] shadow-2xl w-full object-cover border-4 border-green-200"
            onError={e => { e.target.onerror=null; e.target.src="/logo.png"; }}
          />
        </div>
      </section>

      {/* Info Sections */}
      {grocerySections.map((section, idx) => (
        <section
          key={idx}
          className={`py-10 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        >
          <div className="md:w-1/2 animate-fadeInUp">
            <img
              src={section.img}
              alt={section.title}
              className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
              onError={e => { e.target.onerror=null; e.target.src="https://images.pexels.com/photos/578831/pexels-photo-578831.jpeg?auto=compress&w=800&q=80"; }}
            />
          </div>
          <div className="md:w-1/2 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">{section.title}</h2>
            <p className="text-lg text-gray-800 mb-4" style={{whiteSpace: 'pre-line'}}>{section.desc}</p>
          </div>
        </section>
      ))}

      {/* Features Section */}
      <section className="md:py-16 py-8 px-8 sm:px-8 lg:px-16 bg-white rounded-3xl shadow-2xl max-w-7xl mx-auto mt-12 animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-black text-green-700 mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "🥦",
              title: "Fresh Produce",
              desc: "Locally sourced fruits and vegetables."
            },
            {
              icon: "🛒",
              title: "Wide Selection",
              desc: "Groceries, snacks, and daily essentials."
            },
            {
              icon: "⏱️",
              title: "Fast Delivery",
              desc: "Get your order within hours."
            },
            {
              icon: "💳",
              title: "Secure Payment",
              desc: "Multiple payment options for convenience."
            },
          ].map((feature, i) => (
            <div key={i} className="bg-gradient-to-br from-green-100 to-yellow-100 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 animate-scaleIn">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <div className="text-xl font-bold mb-2 text-green-700">{feature.title}</div>
              <div className="text-gray-800">{feature.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="md:py-16 py-10 px-4 sm:px-8 lg:px-16 text-center">
        <h2 className="text-2xl md:text-4xl font-black text-green-700 mb-6 animate-fadeInUp">Ready to shop fresh?</h2>
        <p className="text-lg text-gray-800 mb-8 animate-fadeIn">Sign up now and enjoy the best grocery delivery experience in your city.</p>
        <button className="bg-gradient-to-r from-green-600 to-yellow-500 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-scaleIn">Order Now</button>
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

export default GroceryDelivery;
