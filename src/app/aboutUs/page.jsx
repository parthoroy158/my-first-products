import React from 'react';

export const metadata = {
    title: 'About Us | Kinnun.com',
    description:
        'Learn more about Kinnun.com — Bangladesh’s cutest online store for cable protectors and tech accessories. Discover our story, values, and commitment to quality.',
    keywords: [
        'about Kinnun',
        'Kinnun company profile',
        'who is Kinnun',
        'cable protector brand',
        'tech accessories Bangladesh',
        'Kinnun official store',
        'cute cable gadgets',
        'Kinnun.com',
        'Kinnun story',
        'Kinnun about us'
    ],
    robots: 'index, follow',
    authors: [{ name: 'Kinnun Team', url: 'https://kinnun.com/about' }],
    openGraph: {
        title: 'About Us | Kinnun.com',
        description:
            'Discover who we are at Kinnun — a creative store offering stylish and durable cable protectors across Bangladesh.',
        url: 'https://kinnun.com/about',
        siteName: 'Kinnun.com',
        images: [
            {
                url: 'https://kinnun.com/og-image/about.jpg',
                width: 1200,
                height: 630,
                alt: 'About Kinnun Team Image',
            },
        ],
        type: 'website',
    },
};


const page = () => {


    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-white dark:text-black mt-5">
            <div className="max-w-6xl mx-auto py-16 px-6">
                <div className="bg-white rounded-3xl shadow-md p-10">
                    <h1 className="text-4xl font-extrabold text-center text-green-700 mb-8 tracking-tight">
                        আমাদের সম্পর্কে
                    </h1>

                    <p className="text-lg text-gray-700 leading-8 mb-6 text-justify">
                        <strong className="text-green-800">কিনুন </strong> একটি বাংলাদেশি ই-কমার্স মার্কেটপ্লেস যেখানে আপনি বিভিন্ন ধরনের পণ্য একসাথে খুঁজে পেতে পারেন। আমাদের লক্ষ্য হল সহজ, নির্ভরযোগ্য ও দ্রুত অনলাইন শপিং অভিজ্ঞতা প্রদান করা। দেশীয় ও আন্তর্জাতিক মানসম্মত পণ্যসামগ্রী নিয়ে গঠিত আমাদের সংগ্রহ আপনাদের দৈনন্দিন জীবনকে আরও সহজ করে তুলবে।
                    </p>

                    <p className="text-lg text-gray-700 leading-8 mb-6 text-justify">
                        <strong className="text-green-800">কিনুন</strong>-এ আপনি পাবেন ফ্যাশন, ইলেকট্রনিক্স, ঘরোয়া পণ্য, কিচেন আইটেম, বিউটি প্রোডাক্ট সহ আরও অনেক কিছু। আমরা ক্রেতাদের সন্তুষ্টিকে সর্বোচ্চ অগ্রাধিকার দেই এবং প্রতিটি অর্ডার নিরাপদে ও সময়মতো পৌঁছে দিতে প্রতিশ্রুতিবদ্ধ।
                    </p>

                    <p className="text-lg text-gray-700 leading-8 text-justify">
                        আমাদের উদ্দেশ্য শুধু অনলাইন পণ্য বিক্রি নয়, বরং দেশের প্রত্যন্ত অঞ্চলের গ্রাহকদের হাতের নাগালে উন্নতমানের পণ্য পৌঁছে দেওয়া।
                        <strong className="text-green-800"> কিনুন</strong> আপনার বিশ্বাসের অনলাইন মার্কেটপ্লেস।
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;
