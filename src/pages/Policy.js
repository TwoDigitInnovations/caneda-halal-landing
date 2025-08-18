import React from 'react';
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const DriverInformation = () => {
    const { t } = useTranslation();
    return (
        <div className="max-w-7xl  mb-8 mx-auto  bg-white shadow-sm rounded-lg font-sans">
            <div className="relative bg-gradient-to-r from-emerald-800 to-emerald-600 text-white">
                <div className="container mx-auto px-4 md:py-20 py-10 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                            {t("Privacy Policy")}
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
                        <span className="text-emerald-700 font-medium">{t("Privacy Policy")}</span>
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
            <div className='p-6'>
                <div className="mb-8 border-b pb-4">
                    <h1 className="text-2xl font-bold text-gray-800">{t("Driver Information")}</h1>
                    <p className="text-gray-600 mt-2">
                        {t("Information about vehicle, driver, and document requirements, province regulations, insurance coverage, and city-specific requirements needed to drive with Chpm rides")}.
                    </p>
                </div>

                <div className="mb-8 bg-gray-50 p-4 rounded border border-gray-200">
                    <p className="text-gray-700">
                        {t("To apply to drive, submit an application online or in the Chpm app - download it from the App Store (iOS) or the Google Play store. To be approved to drive, applicants must meet the below requirements")}.
                    </p>
                </div>

                <div className="mb-8 grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded border border-blue-100">
                        <h2 className="font-bold text-blue-800 mb-2">{t("Vehicle Requirements")}"</h2>
                        <ul className="text-gray-700 space-y-1">
                            <li>• {t("4 doors 5-8 seats or fewer, including the driver's")}</li>
                            <li>• {t("not a taxi or stretch limousine")}</li>
                            <li>• {t("Only if your country or province allowed")}</li>
                            <li>• {t("Your country or province license plate")}</li>
                            <li>• {t("not titled as salvage, non-repairable, rebuilt or any other equivalent classification")}</li>
                            <li>• {t("not a rental vehicle")}</li>
                            <li>• {t("Valid driver's licence must be Class 1, 2, or 4")}</li>
                            <li>• {t("You must be 20 years or older")}</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded border border-green-100">
                        <h2 className="font-bold text-green-800 mb-2">{t("Driver Requirements")}</h2>
                        <ul className="text-gray-700 space-y-1">
                            <li>• {t("Pass an annual driver screening, which reviews your driving history and criminal background check")}</li>
                            <li>• {t("Any smartphone that can download and run the Chmp app")}</li>
                            <li>• {t("To upload your documents in the app, open the main menu and tap 'Account,' then 'Documents")}</li>
                            <li>• {t("Driver profile photo: Learn how to take the best photo")}</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8 bg-yellow-50 p-4 rounded border border-yellow-100">
                    <h2 className="font-bold text-yellow-800 mb-2">{t("Required Documents")}</h2>
                    <ul className="text-gray-700 space-y-1">
                        <li>• {t("Proof of work eligibility")}</li>
                        <li>• {t("Personal or contingent vehicle insurance policy (pink slip)")}</li>
                        <li>• {t("your country or province Class 1-55 vehicle registration if they require")}</li>
                        <li>• {t("Vehicle inspection")}</li>
                        <li>• {t("Calgary inspection")}</li>
                        <li>• {t("Edmonton inspection")}</li>
                        <li>• {t("Alberta 3-year Standard Driver Abstract")}</li>
                        <li>• {t("Police Information Check (PIC) with Vulnerable Sector Check (VSC)")}</li>
                        <li>• {t("Transportation Network Driver's Licence (Calgary only)")}</li>
                        <li>• {t("Driver Training Certification (Calgary only)")}</li>
                        <li>• {t("online training course certificate (Edmonton only)")}</li>
                        <li>• {t("Business licences for neighboring Alberta cities")}</li>
                        <li>• {t("Chestermere Business Licence")}</li>
                        <li>• {t("Stony Plain Business Licence")}</li>
                        <li>• {t("GST number")}</li>
                    </ul>
                </div>

                <div className="mb-8 bg-purple-50 p-4 rounded border border-purple-100">
                    <h2 className="font-bold text-purple-800 mb-2">{t("Proof of Work Eligibility")}</h2>
                    <p className="text-gray-700 mb-2">{t("You must upload one of the following documents as proof of work eligibility (must contain your name, and can be any of the following):")}</p>
                    <div className="grid md:grid-cols-2 gap-2 text-gray-700">
                        <div>• {t("Passport")}</div>
                        <div>• {t("Residency card")}</div>
                        <div>• {t("Birth certificate")}</div>
                        <div>• {t("Citizenship card")}</div>
                        <div>• {t("Work permit")}</div>
                        <div>• {t("Study permit")}</div>
                        <div>• {t("Certificate of Indian Status")}</div>
                        <div>• {t("Canadian Forces Identification Card")}</div>
                    </div>
                </div>

                <div className="mb-8 grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded border border-red-100">
                        <h2 className="font-bold text-red-800 mb-2">{t("City Requirements")}</h2>
                        <div className="mb-4">
                            <h3 className="font-semibold text-gray-700">{t("Calgary")}:</h3>
                            <ul className="text-gray-700 space-y-1">
                                <li>• {t("2014 or newer")}</li>
                                <li>• {t("the city of Edmonton requires that all drivers have completed the Edmonton Driver Training in order to give rides")}</li>
                                <li>• {t("Register and take the online course on Docebo")}</li>
                                <li>• {t("311 sticker")}</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700">{t("Edmonton")}:</h3>
                            <ul className="text-gray-700 space-y-1">
                                <li>• {t("2004 or newer")}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded border border-indigo-100">
                        <h2 className="font-bold text-indigo-800 mb-2">{t("Additional Information")}</h2>
                        <ul className="text-gray-700 space-y-1">
                            <li>• {t("If your name isn't on your document or insurance ID card, you'll need to provide confirmation from your insurance provider and/or policy holder that you are authorized to use the vehicle for rideshare purposes")}</li>
                            <li>• {t("Vehicle's make, model, and year")}</li>
                            <li>• {t("Policy expiration date")}"</li>
                            <li>• {t("Insurance Company")}</li>
                            <li>• {("Province")}</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8 bg-gray-50 p-4 rounded border border-gray-200">
                    <h2 className="font-bold text-gray-800 mb-2">{t("Alberta Driver Regulations")}</h2>
                    <ul className="text-gray-700 space-y-1">
                        <li>• {t("Always have your driver's licence and insurance documents")}</li>
                        <li>• {t("Don't accept street hails")}</li>
                        <li>• {t("Don't accept cash for rides")}</li>
                        <li>• {t("Don't wait in taxi lines")}</li>
                    </ul>
                </div>

                <div className="mb-8 bg-gray-50 p-4 rounded border border-gray-200">
                    <h2 className="font-bold text-gray-800 mb-2">{t("Items to keep in your vehicle")}</h2>
                    <ul className="text-gray-700 space-y-1">
                        <li>• {t("Vehicle Registration")}</li>
                        <li>• {t("Vehicle Insurance")}</li>
                        <li>• {t("Valid inspection form")}</li>
                        <li>• {t("TNDL (only if your province require)")}</li>
                    </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded border border-orange-100">
                    <h2 className="font-bold text-orange-800 mb-2">{t("Know your insurance")}</h2>
                    <p className="text-gray-700">
                        {t("Review Chmp, Insurance Policy here. Not all personal vehicle insurance policies cover driving with transportation network companies like Chmp. Check with your personal policy provider for more details")}.
                    </p>
                </div>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row justify-between items-center border-t pt-6 px-4 py-4">
                <p className="text-gray-600 text-sm mb-4 sm:mb-0">
                    {t("Have questions about our Privacy Policy?")}
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
    );
};

export default DriverInformation;