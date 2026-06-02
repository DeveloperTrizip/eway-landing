"use client";

import React, { useState } from "react";

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const youtubeId = "E2ClRgIwvA4";
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&rel=0`;

    return (
        <section className="relative w-full font-sans overflow-hidden bg-gradient-to-b from-[#f7fbff] to-white py-12 md:py-16">
            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-start">
                    {/* LEFT: Text */}
                    <div className="text-[#0f172a] lg:col-span-6 lg:pl-10 xl:pl-14 lg:pr-4">
                        <p className="text-[12px] md:text-[13px] font-[800] tracking-[0.14em] uppercase text-[#2764a8]">
                            Product Overview
                        </p>
                        <h2 className="mt-2 text-[30px] md:text-[36px] font-[800] tracking-tight leading-[1.12]">
                            Sharkship E-Waybill
                        </h2>
                        <p className="mt-4 text-[16px] md:text-[17px] text-slate-700 leading-[1.75] max-w-none">
                            A quick walkthrough of the Sharkship eWayBill platform — see how teams onboard,
                            automate E-Way Bill workflows, and go live faster.
                        </p>
                        <p className="mt-4 text-[16px] md:text-[17px] text-slate-700 font-[600] leading-[1.75] max-w-none">
                            We help you reduce compliance risk with a simplified workflow and a dashboard built
                            for modern logistics teams.
                        </p>
                    </div>

                    {/* RIGHT: Video */}
                    <div className="lg:pt-1 lg:col-span-6">
                        <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.14)]">
                            <div className="aspect-video w-full">
                                <iframe
                                    className="h-full w-full"
                                    src={youtubeEmbedUrl}
                                    title="Sharkship eWayBill Product overview"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Video;















