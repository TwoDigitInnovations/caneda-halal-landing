"use client";

import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
export default function TermsAndConditions() {
  const { t } = useTranslation()
  return (
    <main className="min-h-screen bg-gray-50 max-w-7xl mx-auto">

      <div className="relative bg-gradient-to-r from-emerald-800 to-emerald-600 text-white">
        <div className="container mx-auto px-4 md:py-20 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t("Terms and Conditions")}
            </h1>
            <p className="mt-4 text-lg text-emerald-100">
              {t("Please read these terms carefully before using our services")}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,32L120,26.7C240,21,480,11,720,16C960,21,1200,43,1320,53.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center text-gray-600 text-sm">
            <Link href="/" className="hover:text-emerald-700">
              {t("Home")}
            </Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span className="text-emerald-700 font-medium">{t("Terms and Conditions")}</span>
          </div>
          <Link
            href="/"
            className="flex items-center text-sm text-emerald-700 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            {t("Back to Home")}
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl bg-white shadow-lg rounded-2xl p-8 md:p-12">
          <div className="prose prose-emerald max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. {t("Introduction")}
              </h2>
              <p className="text-gray-700 mb-4">
                {t("Welcome to Canada Halal. These Terms and Conditions govern your use of our website, products, and services. By accessing or using Canada Halal, you agree to be bound by these Terms. If you disagree with any part of these terms, please do not use our services")}.
              </p>
              <p className="text-gray-700">
                {t("Canada Halal is committed to providing authentic Halal-certified products and services that meet the highest standards of Islamic dietary requirements")}.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. {t("Use License")}
              </h2>
              <p className="text-gray-700 mb-4">
                {t("Permission is granted to temporarily download one copy of the materials on Canada Halal's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not")}:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>{t("Modify or copy the materials")};</li>
                <li>{t("Use the materials for any commercial purpose")};</li>
                <li>
                  {t("Attempt to decompile or reverse engineer any software contained on Canada Halal's website")};
                </li>
                <li>
                  {t("Remove any copyright or other proprietary notations from the materials")};
                </li>
                <li>
                  {t("Transfer the materials to another person or 'mirror' the materials on any other server")}.
                </li>
              </ul>
              <p className="text-gray-700">
                {t("This license shall automatically terminate if you violate any of these restrictions and may be terminated by Canada Halal at any time")}.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. {t("Halal Certification")}
              </h2>
              <p className="text-gray-700 mb-4">
                {t("Canada Halal guarantees that all products carrying our certification mark have been thoroughly inspected and meet the Islamic requirements for Halal. Our certification process involves")}:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>{t("Inspection of facilities and manufacturing processes")};</li>
                <li>{t("Verification of ingredients and suppliers")};</li>
                <li>{t("Ongoing monitoring and periodic re-certification")};</li>
                <li>{t("Adherence to our strict quality control measures")}.</li>
              </ul>
              <p className="text-gray-700">
                {t("The unauthorized use of our certification mark is strictly prohibited and may result in legal action")}.
              </p>
            </section>


          </div>


          <div className="mt-12 flex flex-col sm:flex-row justify-between items-center border-t pt-6 px-4 py-4">
            <p className="text-gray-600 text-sm mb-4 sm:mb-0">
              {t("Have questions about our Terms and Condition?")}
              {" "}
              <Link
                href="/contact"
                className="text-emerald-700 font-medium hover:underline"
              >
                {t("Contact Us")}
              </Link>
            </p>
            <Link
              href="/"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl shadow-md transition"
            >
              {t("Back to Home")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
