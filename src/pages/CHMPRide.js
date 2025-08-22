import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="md:py-18 py-8 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto bg-gradient-to-r from-blue-100 via-green-50 to-blue-50 rounded-3xl shadow-2xl mb-12">
      <div className="md:w-1/2 text-left md:pr-12">
        <h1 className="text-4xl md:text-6xl font-black text-blue-700 md:mb-4 mb-2 animate-fadeInUp">
          {t("CHMP Ride")}
        </h1>
        <p className="text-[18px] md:text-xl text-gray-700 mb-8 animate-fadeIn">
          {t(
            "Travel is not just about getting from one place to another it is about the experience"
          )}
          .
          <br />
          <br />
          {t(
            "CHMP Ride transforms everyday travel into something smooth, stress-free, and convenient. Whether you are heading to work, meeting friends, or catching a flight, we make every ride reliable and comfortable."
          )}
          
          <br />
          <br />
          {t(
            "With just a few taps, you can book your ride, track your driver live, and relax knowing you are in safe hands. No long waits, no hidden charges just fast, clean, and trusted transport at your service."
          )}
          
        </p>
      </div>
      <div className="md:mt-0 mt-8 md:w-[600px] w-[330px] flex justify-center animate-scaleIn">
        <img
          src="./champ_ride.jpg"
          alt="CHMP Ride Hero"
          className="rounded-[1.5rem] shadow-2xl w-full object-cover border-4 border-blue-200"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/logo.png";
          }}
        />
      </div>
    </section>
  );
};

const WelcomeSection = () => {
  const { t } = useTranslation();
  return (
    <section className="md:py-16 py-8 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
      <div className="md:w-1/2 animate-fadeInUp">
        <img
          src="./chmp-ride2.jpg"
          alt="Welcome to CHMP Ride"
          className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "";
          }}
        />
      </div>
      <div className="md:w-1/2 animate-fadeInUp">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4">
          {t("Welcome to CHMP Ride")}
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          {t(
            "Welcome to CHMP Ride, where your journey matters just as much as your destination"
          )}
          .
        </p>
        <p className="text-lg text-gray-700 mb-4">
          {t("We are built our platform to empower riders with control, comfort, and clarity. With CHMP Ride, you are not just calling a cab you are choosing an experience. Our app lets you select the type of ride you need, connect with trusted drivers, and travel at your convenience")}.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          {t("Designed to match the pace of your life, we are here for your short hops, long drives, last-minute rides, and everything in between. One app, many journeys all reliable")}.
        </p>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const { t } = useTranslation();
  return (
    <section className="md:py-16 py-8 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto md:flex-row-reverse">
      <div className="md:w-1/2 animate-fadeInUp">
        <img
          src="./champ_ride2.jpg"
          alt="How It Works"
          className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "";
          }}
        />
      </div>
      <div className="md:w-1/2 animate-fadeInUp">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4">
          {t("How It Works")}
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          {t("Using CHMP Ride is simple, intuitive, and efficient. Open the app, type in your destination, and explore ride options that match your style and budget")}.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          {t("Choose from economy cars, vans for groups, or premium vehicles for special days. Once booked, you can track your driver's arrival in real-time, get updates, and contact them directly if needed. Payments are handled securely inside the app—no need to carry cash or worry about change")}.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          {t("Want to plan ahead? Schedule your rides in advance and arrive on time, every time")}.
        </p>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const { t } = useTranslation();
  return (
    <section className="md:py-16 py-8 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
      <div className="md:w-1/2 animate-fadeInUp">
        <img
          src="./chmp-ride.jpg"
          alt="Why Choose CHMP Ride?"
          className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "";
          }}
        />
      </div>
      <div className="md:w-1/2 animate-fadeInUp">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4">
          {t("Why Choose CHMP Ride?")}
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          {t("We are more than just a ride-hailing app—we are a smarter choice for modern travel. CHMP Ride combines speed, affordability, and safety to give you a travel experience that stands out")}.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          {t("Our vehicles are clean, our drivers are professional, and our app is built to be fast and reliable. Whether you ride every day or once in a while, you will love the flexibility, transparency, and trust we offer")}.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          {t("With features like real-time updates, driver ratings, and instant support, you stay in control from start to finish. Choose CHMP Ride—and ride with confidence")}.
        </p>
      </div>
    </section>
  );
};

const OurPromiseSection = () => {
  const { t } = useTranslation();
  return (
    <section className="md:py-16 py-8 px-8 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto md:flex-row-reverse">
      <div className="md:w-1/2 animate-fadeInUp">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Our Promise"
          className="rounded-2xl shadow-lg w-full object-cover mb-8 md:mb-0 h-64 md:h-88"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "";
          }}
        />
      </div>
      <div className="md:w-1/2 animate-fadeInUp">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4">
          {t("Our Promise")}
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          {t("At CHMP Ride, your safety, comfort, and satisfaction come before everything else. We carefully vet our drivers for professionalism and reliability")}.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          {t("Every ride is monitored for quality, and we actively encourage user feedback to keep improving. Our vehicles are clean, well-maintained, and regularly inspected. You can count on on-time pickups, courteous service, and clear communication from booking to drop-off")}.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          {t("We're not just a ride-hailing app—we're a service built on trust, aiming to create a better travel experience every single time")}.
        </p>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: "🚗",
      title: "Flexible Rides",
      desc: "From quick trips around town to longer journeys, choose from compact cars, spacious vans, or premium vehicles fit for every plan and every passenger.",
    },
    {
      icon: "🕒",
      title: "On-Time Pickup",
      desc: "We respect your time. Enjoy reliable ETAs, live driver tracking, and on-time arrivals that help you stay ahead of your schedule without stress.",
    },
    {
      icon: "💳",
      title: "Easy Payments",
      desc: "Make payments effortlessly and securely with multiple options credit/debit cards, wallets, or UPI all integrated smoothly within the app.",
    },
    {
      icon: "🌟",
      title: "Top Rated Drivers",
      desc: "Every driver on CHMP Ride is handpicked, background verified, and trained to provide respectful, safe, and professional service because you deserve the best.",
    },
  ];

  return (
    <section className="md:py-16 py-8 px-8 sm:px-8 lg:px-16 bg-white rounded-3xl shadow-2xl max-w-7xl mx-auto mt-12 animate-fadeIn">
      <h2 className="text-2xl md:text-4xl font-black text-blue-700 mb-8 text-center">
        {t("Key Features")}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 animate-scaleIn"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <div className="text-xl font-bold mb-2 text-blue-700">
              {t(feature.title)}
            </div>
            <div className="text-gray-700">{t(feature.desc)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CtaSection = () => {
  const { t } = useTranslation();
  return (
    <section className="md:py-16 py-8 px-4 sm:px-8 lg:px-16 text-center">
      <h2 className="text-2xl md:text-4xl font-black text-blue-700 mb-6 animate-fadeInUp">
        {t("Ready for your next ride?")}
      </h2>
      <p className="text-lg text-gray-700 mb-8 animate-fadeIn">
        {t("Sign up now and enjoy safe, comfortable, and affordable rides with CHMP Ride.")}
      </p>
    </section>
  );
};

function CHMPRide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 text-gray-800">
      <HeroSection />
      <WelcomeSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <OurPromiseSection />
      <FeaturesSection />
      <CtaSection />

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

export default CHMPRide;
