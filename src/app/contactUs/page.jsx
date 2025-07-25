import Head from 'next/head';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const page = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-green-50 px-4 sm:px-8 py-20 dark:text-black">
            <Head>
                <title>Contact Us | Kinnun.com</title>
                <meta
                    name="description"
                    content="Get in touch with the Kinnun team. Contact us for questions, support, feedback or business inquiries."
                />
                <meta
                    name="keywords"
                    content="contact kinnun, support kinnun, help center, get in touch, kinnun customer care, kinnun.com contact"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Kinnun Team" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Contact Us | Kinnun.com" />
                <meta
                    property="og:description"
                    content="Need help or have a question? Contact Kinnun customer support now."
                />
                <meta property="og:url" content="https://kinnun.com/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Kinnun.com" />
            </Head>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-10 sm:p-14 rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl">

                {/* Contact Form */}
                <div>
                    <h2 className="text-4xl font-extrabold text-green-700 mb-8">যোগাযোগ করুন</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">নাম</label>
                            <input
                                type="text"
                                placeholder="আপনার নাম লিখুন"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">ইমেইল</label>
                            <input
                                type="email"
                                placeholder="আপনার ইমেইল লিখুন"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">বিষয়</label>
                            <input
                                type="text"
                                placeholder="যে বিষয়ে লিখছেন"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">বার্তা</label>
                            <textarea
                                rows={5}
                                placeholder="আপনার বার্তা লিখুন"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-400 resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 hover:shadow-md transition-all duration-300 transform hover:scale-105"
                        >
                            পাঠান
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-10">
                    <h2 className="text-3xl font-bold text-green-800">যোগাযোগের তথ্য</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        আপনি আমাদের ইমেইল বা ফোনের মাধ্যমে যেকোনো প্রশ্ন বা মতামতের জন্য যোগাযোগ করতে পারেন। আমরা সর্বদা সাহায্যের জন্য প্রস্তুত।
                    </p>

                    <div className="space-y-6 text-gray-700 text-base">
                        <div className="flex items-start gap-4 group hover:scale-105 transition-transform duration-300">
                            <div className="p-3 bg-green-100 text-green-700 rounded-full shadow-md group-hover:bg-green-200">
                                <FaPhoneAlt />
                            </div>
                            <p className="mt-1"><strong>ফোন:</strong> +880 1738-579393</p>
                        </div>

                        <div className="flex items-start gap-4 group hover:scale-105 transition-transform duration-300">
                            <div className="p-3 bg-green-100 text-green-700 rounded-full shadow-md group-hover:bg-green-200">
                                <FaEnvelope />
                            </div>
                            <p className="mt-1"><strong>ইমেইল:</strong> kinnunbd@gmail.com</p>
                        </div>

                        <div className="flex items-start gap-4 group hover:scale-105 transition-transform duration-300">
                            <div className="p-3 bg-green-100 text-green-700 rounded-full shadow-md group-hover:bg-green-200">
                                <FaMapMarkerAlt />
                            </div>
                            <p className="mt-1"><strong>ঠিকানা:</strong> দিনাজপুর, বাংলাদেশ</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default page;
