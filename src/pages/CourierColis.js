import React, { useState, useEffect } from 'react';
import {
    Package,
    Send,
    Truck,
    Gift,
    ShoppingBag,
    Flower,
    FileText,
    Heart,
    Star,
    ArrowRight,
    Phone,
    Mail,
    MapPin,
    Clock,
    Shield,
    Zap
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
const CourierWebsite = () => {
    const { t } = useTranslation();
    const [animateHero, setAnimateHero] = useState(false);

    useEffect(() => {
        setAnimateHero(true);
    }, []);

    const services = [
        { icon: Package, title: 'Send Items', desc: 'Send packages safely across the city', color: 'bg-green-500' },
        { icon: Truck, title: 'Receive Items', desc: 'Get your deliveries at your doorstep', color: 'bg-green-600' },
        { icon: Gift, title: 'Gifts', desc: 'Special gift delivery service', color: 'bg-green-700' },
        { icon: ShoppingBag, title: 'Packages', desc: 'Secure package handling', color: 'bg-emerald-500' },
        { icon: FileText, title: 'Documents', desc: 'Important document delivery', color: 'bg-teal-500' },
        { icon: Flower, title: 'Flowers', desc: 'Fresh flower delivery', color: 'bg-green-400' },
    ];

    const businessServices = [
        { icon: ShoppingBag, title: 'Customer Orders', desc: 'E-commerce delivery solutions' },
        { icon: FileText, title: 'Documents', desc: 'Business document courier' },
        { icon: Package, title: 'Vendor Samples', desc: 'Sample delivery service' },
        { icon: Truck, title: 'Inventory', desc: 'Inventory management delivery' },
    ];

    const HomePage = () => (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">

            <section className="relative md:py-14 py-8 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className={`space-y-8 transform transition-all duration-1000 ${animateHero ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                            <h1 className="text-5xl lg:text-6xl font-bold text-green-800 leading-tight">
                                {t("Fast & Reliable")}
                                <span className="block text-green-600">{t("Courier Service")}</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                {t("Have someone deliver items for you. Professional courier services with same-day delivery across the city. Whether it's documents, packages, gifts, or business deliveries, we ensure your items reach their destination safely and on time")}.
                            </p>
                            <div className="bg-green-50 p-6 rounded-2xl mb-6">
                                <h3 className="text-lg font-semibold text-green-800 mb-3">{t("Why Choose CHMP Courier?")}</h3>
                                <ul className="space-y-2 text-green-700">
                                    <li className="flex items-center"><Star className="w-4 h-4 mr-2" /> {t("98% On-time delivery rate")}</li>
                                    <li className="flex items-center"><Shield className="w-4 h-4 mr-2" /> {t("Fully insured and secure")}</li>
                                    <li className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {t("Real-time tracking available")}</li>
                                    <li className="flex items-center"><Heart className="w-4 h-4 mr-2" /> {t("24/7 customer support")}</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`relative transform transition-all duration-1000 delay-300 ${animateHero ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                            <div className="relative z-10">
                                <img
                                    src="./courier.jpg"
                                    alt="Delivery Person"
                                    className="rounded-2xl shadow-2xl w-full h-full md:object-cover object-contain"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-4 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-2xl hover:shadow-lg shadow-md transition-all group">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                                <Zap className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-2">{t("Fast Delivery")}</h3>
                            <p className="text-gray-600">{t("Same-day delivery within 2-4 hours")}</p>
                        </div>
                        <div className="text-center p-6 rounded-2xl hover:shadow-lg shadow-md transition-all group">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                                <Shield className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-2">{t("Secure")}</h3>
                            <p className="text-gray-600">{t("Your items are safe with us")}</p>
                        </div>
                        <div className="text-center p-6 rounded-2xl hover:shadow-lg shadow-md transition-all group">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                                <Clock className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-2">{t("24/7 Service")}</h3>
                            <p className="text-gray-600">{t("Available round the clock")}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <div className="container mx-auto px-4 py-12">
                {/* Introduction Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-green-800 mb-4">{t("Choose Your Delivery Type")}</h1>
                    <p className="text-md text-gray-600 max-w-3xl mx-auto">
                        {t("Whether you're sending important documents, gifts for loved ones, or managing business deliveries,CHMP provides reliable courier services tailored to your specific needs. Our experienced team ensures every delivery is handled with care and delivered on time")}.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 group cursor-pointer">
                        <div className="relative mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=400&q=80"
                                alt="Send Items"
                                className="w-full h-48 object-cover rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-2xl"></div>
                            <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                {t("Most Popular")}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                            {t("Send Items")} <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </h3>
                        <p className="text-gray-600 text-md mb-4">
                            {t("Send packages, documents, gifts, and more across the city with our reliable courier service. Perfect for urgent deliveries, business documents, or surprise gifts for your loved ones.")}
                        </p>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center text-green-700">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>{t("Same-day delivery available")}</span>
                            </div>
                            <div className="flex items-center text-green-700">
                                <Shield className="w-4 h-4 mr-2" />
                                <span>{t("Fully insured up to $50,000")}</span>
                            </div>
                            <div className="flex items-center text-green-700">
                                <Package className="w-4 h-4 mr-2" />
                                <span>{t("Real-time tracking included")}</span>
                            </div>
                        </div>
                        <div className="mt-6 flex space-x-2">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{t("Fast")}</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{t("Secure")}</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{t("Tracked")}</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 group cursor-pointer">
                        <div className="relative mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80"
                                alt="Receive Items"
                                className="w-full h-48 object-cover rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-2xl"></div>
                            <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                {t("Convenient")}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                            {t("Receive Items")} <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </h3>
                        <p className="text-gray-600 text-md mb-4">
                            {t("Get your deliveries at your doorstep with our professional delivery service. Safe, reliable, and always on time. Perfect for online purchases, business supplies, or personal items")}.
                        </p>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center text-green-700">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>{t("Doorstep delivery guaranteed")}</span>
                            </div>
                            <div className="flex items-center text-green-700">
                                <Phone className="w-4 h-4 mr-2" />
                                <span>{t("SMS & call notifications")}</span>
                            </div>
                            <div className="flex items-center text-green-700">
                                <Star className="w-4 h-4 mr-2" />
                                <span>{t("Rated 4.8/5 by customers")}</span>
                            </div>
                        </div>
                        <div className="mt-6 flex space-x-2">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{("Doorstep")}</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{t("Safe")}</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{t("Reliable")}</span>
                        </div>
                    </div>
                </div>


            </div>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-green-800 mb-4">{t("What Our Customers Say")}</h2>
                        <p className="text-xl text-gray-600">{t("Over 10,000 satisfied customers trust CHMP for their delivery needs")}</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-green-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                            <div className="flex items-center mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
                                    alt="Customer"
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-bold text-green-800">{t("John Due")}</h4>
                                    <p className="text-green-600">Business Owner</p>
                                    <div className="flex text-yellow-500 mt-1">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"{t("CHMP has been incredible for my business deliveries. Always on time, professional service, and my customers love the quick delivery. Highly recommended")}!"</p>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                            <div className="flex items-center mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
                                    alt="Customer"
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-bold text-green-800">{t("Katy Sharma")}</h4>
                                    <p className="text-green-600">{t("Marketing Manager")}</p>
                                    <div className="flex text-yellow-500 mt-1">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"{t("I use CHMP for all my urgent document deliveries. Their tracking system is amazing and I always know where my packages are. Excellent service")}!"</p>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                            <div className="flex items-center mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
                                    alt="Customer"
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-bold text-green-800">{t("Shreyash Patel")}</h4>
                                    <p className="text-green-600">{t("E-commerce Seller")}</p>
                                    <div className="flex text-yellow-500 mt-1">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"{t("Game changer for my online store! CHMP handles all my customer deliveries perfectly. Fast, reliable, and affordable. My customers are always happy")}."</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-green-800 mb-4">{t("How CHMP Works")}</h2>
                        <p className="text-xl text-gray-600">{t("Simple steps to get your items delivered quickly and safely")}</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                                <span className="text-2xl font-bold text-white">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-3">{t("Book Online")}</h3>
                            <p className="text-gray-600">{t("Schedule your pickup with our easy online booking system. Add pickup and delivery addresses, item details, and preferred time")}.</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                                <span className="text-2xl font-bold text-white">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-3">{t("We Pickup")}</h3>
                            <p className="text-gray-600">{t("Our professional courier arrives at your location to securely collect your items. Get instant confirmation and tracking details")}.</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                                <span className="text-2xl font-bold text-white">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-3">{t("Track & Monitor")}</h3>
                            <p className="text-gray-600">{t("Follow your delivery in real-time with our advanced tracking system. Get SMS and email updates at every step")}.</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                                <span className="text-2xl font-bold text-white">4</span>
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-3">{t("Safe Delivery")}</h3>
                            <p className="text-gray-600">{t("Your items are delivered safely to the recipient with proof of delivery. Complete transparency throughout the process")}.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-4xl font-bold text-green-600 mb-2">10,000+</div>
                            <p className="text-gray-600 font-medium">{t("Happy Customers")}</p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-green-600 mb-2">50,000+</div>
                            <p className="text-gray-600 font-medium">{t("Successful Deliveries")}</p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                            <p className="text-gray-600 font-medium">{t("On-time Delivery")}</p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                            <p className="text-gray-600 font-medium">{t("Customer Support")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-green-800 mb-4">{t("Popular Ways to Use Courier")}</h2>
                        <p className="text-xl text-gray-600">{t("Explore some of the many items you can send or receive with Courier")}.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group cursor-pointer">
                                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">{t(service.title)}</h3>
                                <p className="text-gray-600 mb-4">{t(service.desc)}</p>
                                <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-2 transition-transform" />
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-xl">
                        <h3 className="text-2xl font-bold text-green-800 mb-6">{t("Deliver Items for Your Business")}</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {businessServices.map((service, index) => (
                                <div key={index} className="p-4 rounded-xl hover:bg-green-50 transition-colors group cursor-pointer">
                                    <service.icon className="w-10 h-10 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-bold text-green-800 mb-2">{t(service.title)}</h4>
                                    <p className="text-sm text-gray-600">{t(service.desc)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );

    return <HomePage />;
};

export default CourierWebsite;