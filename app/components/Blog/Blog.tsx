"use client";

import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '../../data/blogs';

const categories = [
    "All", "Courier Partner", "Courier Service", "Customs", "Domestic Shipping",
    "Dropshipping", "E-commerce Delivery", "E-commerce", "Global Shipping",
    "Guides", "Incoterms", "Shipping Aggregator", "Supply Chain",
    "Warehouse & Fulfillment", "Logistics"
];

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#fafbfc] flex flex-col font-sans">
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow pt-24 pb-20">
                {/* Blog Header */}
                <div className="max-w-[1300px] mx-auto px-6 md:px-5 mt-8 md:mt-12 mb-10">
                    <h1 className="text-[36px] md:text-[48px] font-extrabold text-gray-900 tracking-tight mb-4">
                        Blog
                    </h1>
                    <p className="text-[16px] md:text-[18px] text-gray-600 max-w-2xl">
                        Latest news and updates from Sharkship. Stay ahead with insights on e-commerce, logistics, and supply chain management.
                    </p>
                </div>

                {/* Categories Filter */}
                <div className="max-w-[1300px] mx-auto px-6 md:px-5 mb-12">
                    <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 ${activeCategory === category
                                        ? 'bg-[#2764a8] text-white shadow-md transform scale-105'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:border-[#2764a8] hover:text-[#2764a8]'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="max-w-[1300px] mx-auto px-6 md:px-5">
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, index) => (
                                <Link href={`/blog/${post.slug}`} key={index} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    {/* Image Container */}
                                    <div className="relative w-full h-[240px] overflow-hidden bg-gray-100">
                                        <Image
                                            src={post.imageUrl}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            unoptimized
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur-sm text-[#2764a8] text-[12px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <div className="flex items-center text-[13px] text-gray-500 mb-3">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                            </svg>
                                            {post.date}
                                        </div>
                                        <h3 className="text-[20px] font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#2764a8] transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-[14px] leading-relaxed mb-6 line-clamp-3 flex-grow">
                                            {post.summary}
                                        </p>

                                        <div className="mt-auto flex items-center text-[#2764a8] font-bold text-[14px]">
                                            Read Article
                                            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center">
                            <h3 className="text-2xl font-bold text-gray-400">No articles found for "{activeCategory}".</h3>
                            <p className="text-gray-500 mt-2">Check back later or browse other categories.</p>
                            <button
                                onClick={() => setActiveCategory("All")}
                                className="mt-6 bg-[#2764a8] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#1e4f8a] transition-colors"
                            >
                                View All Posts
                            </button>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
