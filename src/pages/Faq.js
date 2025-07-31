import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const faqData = [
  {
    question: "How can I book a CHMP ride and ensure my driver reaches on time?",
    answer:
      "To book a CHMP ride, open the Ride section, enter your pickup and drop locations, and select the ride type. Once confirmed, you can track your driver in real time with live updates and estimated arrival time.",
  },
  {
    question: "What steps should I follow to place a food delivery order through the app?",
    answer:
      "Go to the Food Delivery section, browse by restaurant or cuisine, add dishes to your cart, and proceed to checkout. Choose your payment method and track your food until it's delivered hot and fresh to your doorstep.",
  },
  {
    question: "Can I order groceries at night and how fast will they be delivered?",
    answer:
      "Yes, grocery delivery is available late at night in select areas. Our trained agents deliver fresh fruits, vegetables, and essentials within 30 minutes of placing your order, even during late hours.",
  },
  {
    question: "What kind of products can I shop for in the Online Shopping section?",
    answer:
      "You can explore a wide range of fashion wear, electronics, beauty products, and lifestyle items. All products are curated from trusted brands and delivered with proper packaging and quality assurance to your home.",
  },
  {
    question: "How can I track my delivery after placing an order for food, groceries, or fashion items?",
    answer:
      "Once your order is confirmed, go to the 'My Orders' section to see real-time tracking. You'll get estimated delivery time, live location, and agent details for transparency and peace of mind.",
  },
  {
    question: "What is your return policy for shopping items ordered through the app?",
    answer:
      "We accept returns for most items within 7 days of delivery. Simply go to 'My Orders', select the item, and request a return. Pickup will be scheduled at your convenience, and refunds processed quickly.",
  },
  {
    question: "Which payment methods are accepted for different services like ride, food, grocery, and shopping?",
    answer:
      "We accept UPI, credit/debit cards, net banking, and wallet payments. Cash on Delivery is available for food, grocery, and fashion orders, depending on your location and order type.",
  },
  {
    question: "What should I do if my CHMP driver is late or the ride gets cancelled?",
    answer:
      "You can track your driver live and contact them via in-app chat or call if delayed. If the ride is cancelled, you’ll be notified and can rebook instantly or contact support for help.",
  },
  {
    question: "Are there any extra charges or hidden delivery fees for orders?",
    answer:
      "There are no hidden charges — delivery fees are clearly shown during checkout. Many orders come with free delivery depending on the service, location, or ongoing offers.",
  },
  {
    question: "How is my personal and payment information protected on your platform?",
    answer:
      "We use advanced encryption and secure protocols to protect all personal and payment data. Your information is never shared with third parties and is fully safe with us.",
  }
];


export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation()
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl md:p-8 p-4">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-8 text-green-700 animate-fade-in">
          {t("Frequently Asked Questions")}
        </h2>
        <div className="md:space-y-4 space-y-2">
          {faqData.map((faq, idx) => (
            <div
              key={idx}
              className="border border-green-300 rounded-xl transition-shadow duration-300 hover:shadow-lg bg-gradient-to-r from-white to-green-50 cursor-pointer animate-fade-in"
            >
              <button
                className="w-full flex justify-between gap-4 px-2 md:px-6 md:py-4 py-2 focus:outline-none font-medium text-green-800 cursor-pointer"
                onClick={() => handleToggle(idx)}
                aria-expanded={activeIndex === idx}
              >
                <span className="transition-colors duration-300 md:text-lg text-sm">
                  {t(faq.question)}
                </span>
                <span
                  className={`transform transition-transform cursor-pointer duration-100 ${activeIndex === idx ? "rotate-180" : "rotate-0"
                    }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`md:px-6 px-4 pb-4 md:text-lg text-sm text-gray-700  transition-all duration-100 ease-in-out ${activeIndex === idx
                    ? "max-h-40 opacity-100 animate-slide-down"
                    : "max-h-0 opacity-0 overflow-hidden"
                  }`}
              >
                {t(faq.answer)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease;
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 160px;
          }
        }
        .animate-slide-down {
          animation: slide-down 0.5s ease;
        }
      `}</style>
    </div>
  );
}
