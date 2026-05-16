'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Contact: '',
        Company: '',
        Message: ''
    });
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
        type: null,
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                setFormData({ Name: '', Email: '', Contact: '', Company: '', Message: '' });
            } else {
                setStatus({ type: 'error', message: result.error || 'Failed to send message.' });
            }
        } catch {
            setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 font-sans border-t border-gray-100">
            <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Left Column: Headings & Form */}
                <div className="flex flex-col">

                    {/* Headings */}
                    <div className="mb-10">
                        <h2
                            className="text-[40px] leading-tight font-bold mb-2 text-transparent bg-clip-text inline-block"
                            style={{ backgroundImage: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }}
                        >
                            Connect With Us
                        </h2>
                        <h3 className="text-black text-[32px] font-semibold">
                            Let&apos;s streamline your logistics
                        </h3>
                    </div>

                    {/* Form Card */}
                    <div className="bg-[#FCFCFC] rounded-[24px] shadow-[0px_0px_20px_0px_#0000001A] p-8 sm:p-10 w-full max-w-[600px] transition-all duration-300">
                        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

                            {/* Row 1 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="Name"
                                        value={formData.Name}
                                        onChange={handleChange}
                                        required
                                        className="peer w-full bg-transparent border border-gray-200 rounded-[12px] px-5 py-[14px] text-gray-800 focus:outline-none focus:border-[#27AAE2] focus:ring-1 focus:ring-[#27AAE2] transition-all placeholder-transparent"
                                        placeholder=" "
                                    />
                                    <label htmlFor="Name" className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#6b7280] text-[15px] opacity-0 peer-placeholder-shown:opacity-100 transition-all peer-focus:opacity-0">
                                        Name<span className="text-[#F05C35] ml-[3px]">*</span>
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="Email"
                                        value={formData.Email}
                                        onChange={handleChange}
                                        required
                                        className="peer w-full bg-transparent border border-gray-200 rounded-[12px] px-5 py-[14px] text-gray-800 focus:outline-none focus:border-[#27AAE2] focus:ring-1 focus:ring-[#27AAE2] transition-all placeholder-transparent"
                                        placeholder=" "
                                    />
                                    <label htmlFor="Email" className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#6b7280] text-[15px] opacity-0 peer-placeholder-shown:opacity-100 transition-all peer-focus:opacity-0">
                                        Email<span className="text-[#F05C35] ml-[3px]">*</span>
                                    </label>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input
                                        type="tel"
                                        id="Contact"
                                        value={formData.Contact}
                                        onChange={handleChange}
                                        required
                                        className="peer w-full bg-transparent border border-gray-200 rounded-[12px] px-5 py-[14px] text-gray-800 focus:outline-none focus:border-[#27AAE2] focus:ring-1 focus:ring-[#27AAE2] transition-all placeholder-transparent"
                                        placeholder=" "
                                    />
                                    <label htmlFor="Contact" className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#6b7280] text-[15px] opacity-0 peer-placeholder-shown:opacity-100 transition-all peer-focus:opacity-0">
                                        Phone Number<span className="text-[#F05C35] ml-[3px]">*</span>
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="Company"
                                        value={formData.Company}
                                        onChange={handleChange}
                                        required
                                        className="peer w-full bg-transparent border border-gray-200 rounded-[12px] px-5 py-[14px] text-gray-800 focus:outline-none focus:border-[#27AAE2] focus:ring-1 focus:ring-[#27AAE2] transition-all placeholder-transparent"
                                        placeholder=" "
                                    />
                                    <label htmlFor="Company" className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#6b7280] text-[15px] opacity-0 peer-placeholder-shown:opacity-100 transition-all peer-focus:opacity-0">
                                        Company<span className="text-[#F05C35] ml-[3px]">*</span>
                                    </label>
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="relative">
                                <textarea
                                    id="Message"
                                    value={formData.Message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="peer w-full bg-transparent border border-gray-200 rounded-[12px] px-5 py-[14px] text-gray-800 focus:outline-none focus:border-[#27AAE2] focus:ring-1 focus:ring-[#27AAE2] transition-all placeholder-transparent resize-none"
                                    placeholder=" "
                                />
                                <label htmlFor="Message" className="absolute left-5 top-[14px] pointer-events-none text-[#6b7280] text-[15px] opacity-0 peer-placeholder-shown:opacity-100 transition-all peer-focus:opacity-0">
                                    Message <span className="text-[#F05C35] ml-[2px]">*</span>
                                </label>
                            </div>

                            {/* Status Message */}
                            {status.type && (
                                <div className={`text-sm font-medium ${status.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                                    {status.message}
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="mt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full text-white font-medium text-[16px] py-[14px] rounded-full hover:shadow-lg hover:opacity-90 active:scale-[0.98] transition-all duration-300 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    style={!isSubmitting ? { background: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' } : {}}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

                {/* Right Column: Illustration */}
                <div className="flex justify-center lg:justify-end w-full mt-10 lg:mt-0">
                    <Image
                        src="/desktop.png"
                        alt="Contact Illustration"
                        width={650}
                        height={450}
                        className="w-full max-w-[650px] lg:max-w-full h-auto object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default Contact;