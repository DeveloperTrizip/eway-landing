import { blogPosts } from "../../data/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Force dynamic or generateStaticParams if you want static build
// For now, let's keep it simple

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = blogPosts.find(p => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow pt-28 pb-20">
                <article className="max-w-[800px] mx-auto px-6 md:px-5">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center text-[13px] text-gray-500 mb-8">
                        <Link href="/" className="hover:text-[#2764a8] transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/blog" className="hover:text-[#2764a8] transition-colors">Blog</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-medium line-clamp-1">{post.title}</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-10">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="bg-[#2764a8]/10 text-[#2764a8] text-[13px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg">
                                {post.category}
                            </span>
                            <span className="text-gray-500 text-[14px]">
                                {post.date}
                            </span>
                        </div>
                        <h1 className="text-[36px] md:text-[48px] font-extrabold text-gray-900 leading-[1.1] mb-6">
                            {post.title}
                        </h1>
                        <p className="text-[18px] md:text-[20px] text-gray-600 leading-relaxed">
                            {post.summary}
                        </p>
                    </header>

                    {/* Hero Image */}
                    <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden mb-12 shadow-md">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#2764a8] hover:prose-a:text-[#1e4f8a]">
                        {/* We use dangerouslySetInnerHTML or just parse it if it was pure HTML. Since it's markdown-like but we didn't add a markdown parser yet, we can map over newlines or just display it as pre-wrap */}
                        <div className="whitespace-pre-wrap font-sans text-[17px] text-gray-700 leading-[1.8]">
                            {post.content}
                        </div>
                    </div>

                    {/* Footer / Share / Back */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <Link
                            href="/blog"
                            className="flex items-center text-[#2764a8] font-bold hover:text-[#1e4f8a] transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                            Back to all articles
                        </Link>

                        <div className="flex items-center gap-4">
                            <span className="text-gray-500 font-medium text-[14px]">Share this article:</span>
                            <div className="flex gap-2">
                                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-50 hover:text-[#2764a8] transition-colors text-gray-400">
                                    {/* Twitter Icon */}
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                                </button>
                                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-50 hover:text-[#2764a8] transition-colors text-gray-400">
                                    {/* LinkedIn Icon */}
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
