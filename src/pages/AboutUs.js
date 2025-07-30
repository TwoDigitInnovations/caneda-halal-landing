import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
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
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
        style={{ backgroundColor: '#2C6140' }}
      >
        <div className="max-w-7xl mx-auto text-center animate-fadeInUp">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">About Canada halal market Place</h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto animate-fadeIn">
            Your one-stop platform for camping adventures, fashion, food delivery, and transportation services.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight" style={{ color: '#2C6140' }}>Our Story</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <p className="text-lg mb-6">
              Founded in 2020, Canada halal market Place began as a simple camping booking platform but quickly evolved into a comprehensive lifestyle service provider.
            </p>
            <p className="text-lg mb-6">
              We recognized the need for a unified platform that could serve all aspects of modern living - from adventure to daily necessities.
            </p>
            <p className="text-lg">
              Today, we proudly serve thousands of customers across multiple countries, helping them explore, shop, eat, and move with ease.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl overflow-hidden shadow-xl animate-scaleIn">
            <img 
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Our journey" 
              className="w-full h-auto object-cover scale-105 hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="md:py-16 py-10 px-8 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: '#2C6140' }}>Our Services</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              We offer a diverse range of services to cater to all your lifestyle needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card Animations */}
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center animate-scaleIn hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-green-600 to-emerald-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Camp & Ride Booking</h3>
              <p className="text-gray-600">
                Discover and book the best camping and riding adventures with trusted providers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center animate-scaleIn hover:-translate-y-2 transition-transform duration-300 delay-100">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-green-600 to-emerald-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fashion Shopping</h3>
              <p className="text-gray-600">
                Browse the latest fashion trends and shop from curated collections.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center animate-scaleIn hover:-translate-y-2 transition-transform duration-300 delay-200">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-green-600 to-emerald-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Food Supply</h3>
              <p className="text-gray-600">
                Get fresh groceries and delicious meals delivered to your doorstep.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center animate-scaleIn hover:-translate-y-2 transition-transform duration-300 delay-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-green-600 to-emerald-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Driver Services</h3>
              <p className="text-gray-600">
                Reliable transportation services whenever you need to move.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="md:py-16 py-10 px-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: '#2C6140' }}>Our Values</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 animate-scaleIn hover:-translate-y-2 transition-transform duration-300" style={{ borderColor: '#2C6140' }}>
            <h3 className="text-xl font-bold mb-3">Customer First</h3>
            <p className="text-gray-600">
              We prioritize our customers' needs and work tirelessly to exceed their expectations in every interaction.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 animate-scaleIn hover:-translate-y-2 transition-transform duration-300 delay-100" style={{ borderColor: '#2C6140' }}>
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p className="text-gray-600">
              We constantly seek new ways to improve and expand our services to better serve your lifestyle.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 animate-scaleIn hover:-translate-y-2 transition-transform duration-300 delay-200" style={{ borderColor: '#2C6140' }}>
            <h3 className="text-xl font-bold mb-3">Community</h3>
            <p className="text-gray-600">
              We believe in building strong relationships with both our customers and service providers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="md:py-16 py-10 px-8 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-green-700 via-emerald-600 to-green-800 rounded-3xl shadow-2xl animate-fadeInUp mb-4 max-w-7xl mx-auto"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">Ready to explore our services?</h2>
          <p className="md:text-xl text-sm text-white opacity-90 mb-8">
            Join thousands of satisfied customers who trust Canada halal market Place for their lifestyle needs.
          </p>
          <button className="bg-white text-green-800 font-bold py-2.5 md:py-4 px-10 rounded-full text-xl shadow-lg hover:bg-gray-100 transition duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;