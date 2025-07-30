
import React from "react";

const rideSections = [
  {
    title: "Welcome to CHMP Ride",
    desc:
      "Book your next adventure with CHMP Ride! Whether it's a weekend getaway, a city tour, or a daily commute, our platform connects you with safe, reliable, and comfortable rides.\n\nChoose from a variety of vehicles, enjoy transparent pricing, and experience hassle-free booking.\n\nOur rides are available 24/7, and you can book instantly from your phone or computer. We offer special packages for family trips, business travel, and group outings.",
    img: "./camp.jpg",
  },
  {
    title: "How It Works",
    desc:
      "Select your destination, pick your preferred ride, and confirm your booking in seconds. Our drivers are professional, courteous, and committed to your safety.\n\nTrack your ride in real-time, pay securely, and enjoy a smooth journey every time.\n\nYou can also schedule rides in advance, choose your favorite driver, and rate your experience after every trip.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Why Choose CHMP Ride?",
    desc:
      "We offer flexible options for solo travelers, families, and groups. Our fleet is regularly maintained, and our support team is available 24/7.\n\nEnjoy special discounts, loyalty rewards, and a commitment to quality service.\n\nOur app is easy to use, and our customer support is always ready to help you with any questions or concerns.",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Our Promise",
    desc:
      "CHMP Ride is dedicated to safety, comfort, and customer satisfaction. Your feedback helps us improve and deliver the best ride experience possible.\n\nJoin our community and make every journey memorable!\n\nWe believe in building trust through transparency, reliability, and a passion for travel.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

 function CHMPRide() {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-50 to-green-50 text-gray-800">
      {/* Hero Section */}
      <section className="md:py-18 py-8 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto bg-gradient-to-r from-blue-100 via-green-50 to-blue-50 rounded-3xl shadow-2xl mb-12">
        <div className="md:w-1/2 text-left md:pr-12">
          <h1 className="text-4xl md:text-6xl font-black text-blue-700 md:mb-4 mb-2 animate-fadeInUp">CHMP Ride</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fadeIn">Your journey, your way.<br/>Book safe, reliable rides for every occasion.<br/><span className="text-blue-600 font-bold">Adventure, comfort, and convenience!</span><br/><br/>With CHMP Ride, you get instant booking, real-time tracking, and a choice of vehicles for every need. Our drivers are background-checked and our cars are sanitized regularly for your safety.</p>
          <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-scaleIn mt-2">Book a Ride</button>
        </div>
        <div className="md:mt-0 mt-8 md:w-[600px] w-[330px] flex justify-center animate-scaleIn">
          <img
            src="./camp-hero.jpg"
            alt="CHMP Ride Hero"
            className="rounded-[1.5rem] shadow-2xl w-full object-cover border-4 border-blue-200"
            onError={e => { e.target.onerror=null; e.target.src="/logo.png"; }}
          />
        </div>
      </section>

      {/* Info Sections */}
      {rideSections.map((section, idx) => (
        <section
          key={idx}
          className={`md:py-16 py-8 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        >
          <div className="md:w-1/2 animate-fadeInUp">
            <img
              src={section.img}
              alt={section.title}
              className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
              onError={e => { e.target.onerror=null; e.target.src=""; }}
            />
          </div>
          <div className="md:w-1/2 animate-fadeInUp">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4">{section.title}</h2>
            <p className="text-lg text-gray-700 mb-4" style={{whiteSpace: 'pre-line'}}>{section.desc}</p>
          </div>
        </section>
      ))}

      {/* Features Section */}
      <section className="md:py-16 py-8 px-8 sm:px-8 lg:px-16 bg-white rounded-3xl shadow-2xl max-w-7xl mx-auto mt-12 animate-fadeIn">
        <h2 className="text-2xl md:text-4xl font-black text-blue-700 mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "🚗",
              title: "Flexible Rides",
              desc: "Choose from cars, vans, and more for any occasion."
            },
            {
              icon: "🕒",
              title: "On-Time Pickup",
              desc: "Track your ride and enjoy punctual service."
            },
            {
              icon: "💳",
              title: "Easy Payment",
              desc: "Pay securely online or in-app."
            },
            {
              icon: "🌟",
              title: "Top Rated Drivers",
              desc: "Professional, friendly, and safety-focused."
            },
          ].map((feature, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 animate-scaleIn">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <div className="text-xl font-bold mb-2 text-blue-700">{feature.title}</div>
              <div className="text-gray-700">{feature.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="md:py-16 py-8 px-4 sm:px-8 lg:px-16 text-center">
        <h2 className="text-2xl md:text-4xl font-black text-blue-700 mb-6 animate-fadeInUp">Ready for your next ride?</h2>
        <p className="text-lg text-gray-700 mb-8 animate-fadeIn">Sign up now and enjoy safe, comfortable, and affordable rides with CHMP Ride.</p>
        <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-scaleIn">Book Now</button>
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


export default CHMPRide;
