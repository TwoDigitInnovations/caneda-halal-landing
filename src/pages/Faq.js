import React, { useState } from "react";

const faqData = [
  {
    question: "How do I book a CHMP riding session?",
    answer:
      "To book a CHMP riding session, go to our CHMP Riding section, select your preferred date and time, and complete the booking process. You will receive a confirmation email once your booking is successful.",
  },
  {
    question: "What fashion shopping options are available?",
    answer:
      "We offer a wide range of fashion products including clothing, accessories, and footwear. Browse our Fashion Shopping section to explore the latest trends and exclusive deals.",
  },
  {
    question: "How does food supply work?",
    answer:
      "Order fresh food from our Food Supply section. Choose your favorite items, add them to your cart, and proceed to checkout. We ensure timely delivery to your doorstep.",
  },
  {
    question: "How can I book a driver?",
    answer:
      "To book a driver, visit our Driver Services section, enter your pickup and drop-off details, and confirm your booking. Our drivers are professional and reliable.",
  },
  {
    question: "Can I track my order after placing it?",
    answer:
      "Yes, you can track your order status in real-time from your account dashboard. We provide live updates for all deliveries including food, fashion, and CHMP bookings.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit/debit cards, UPI, net banking, and cash on delivery for eligible orders.",
  },
  {
    question: "Is there a cancellation policy for bookings?",
    answer:
      "Yes, you can cancel your CHMP riding or driver booking up to 24 hours before the scheduled time for a full refund. Please check our cancellation policy for details.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support via live chat, email, or phone. Visit the Support section for more information.",
  },
  {
    question: "Are there any discounts or offers available?",
    answer:
      "We regularly offer discounts and special deals on fashion, food, and CHMP bookings. Subscribe to our newsletter or check the Offers section for the latest promotions.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, we use advanced security measures to protect your data. Your personal and payment information is encrypted and never shared with third parties.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-700 animate-fade-in">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <div
              key={idx}
              className="border border-green-300 rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-lg bg-gradient-to-r from-white to-green-50 cursor-pointer animate-fade-in"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 focus:outline-none text-lg font-medium text-green-800"
                onClick={() => handleToggle(idx)}
                aria-expanded={activeIndex === idx}
              >
                <span className="transition-colors duration-300">
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform cursor-pointer duration-300 ${
                    activeIndex === idx ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`px-6 pb-4 text-gray-700 text-base transition-all duration-500 ease-in-out ${
                  activeIndex === idx
                    ? "max-h-40 opacity-100 animate-slide-down"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
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
