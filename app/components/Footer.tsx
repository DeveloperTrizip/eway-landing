import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-white pt-16">
            <div className="max-w-[1300px] mx-auto px-6 md:px-5">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-8">

                    {/* LEFT / Column 1 */}
                    <div className="lg:col-span-4 space-y-5">
                        <Image
                            src="/Sharkship_eWay.svg"
                            alt="logo"
                            width={160}
                            height={50}
                            className="object-contain mix-blend-multiply brightness-120 contrast-125 h-[50px] w-auto"
                        />

                        <p className="text-[13px] text-gray-700 leading-[1.8]">
                        Sharkship eWayBill is a smart compliance automation platform built to simplify E-Way Bill operations for modern logistics businesses. From bulk EWB generation to one-click extensions, real-time tracking, 
                        and centralized dashboards we help businesses reduce manual effort, minimize compliance risks, 
                        and manage shipments with greater speed, accuracy, and control.
                        </p>

                        {/* SOCIAL ICONS (EXACT STYLE) */}
                        <div className="flex gap-2">
                            {/* Facebook */}
                            <a href="https://www.facebook.com/people/Sharkship/61585188826964/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-[#1877F2] rounded-md transition-transform hover:scale-105 cursor-pointer">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a href="https://www.instagram.com/sharkshipindia/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-md transition-transform hover:scale-105 cursor-pointer">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2zm0 0c-2.717 0-3.056.01-4.122.06-1.065.05-1.79.22-2.428.465-.65.25-1.196.584-1.742 1.13-.545.546-.88 1.092-1.13 1.742-.245.638-.415 1.363-.465 2.428C2.01 8.944 2 9.283 2 12c0 2.717.01 3.056.06 4.122.05 1.065.22 1.79.465 2.428.25.65.584 1.196 1.13 1.742.546.545 1.092.88 1.742 1.13.638.245 1.363.415 2.428.465C8.944 21.99 9.283 22 12 22c2.717 0 3.056-.01 4.122-.06 1.065-.05 1.79-.22 2.428-.465.65-.25 1.196-.584 1.742-1.13.545-.546.88-1.092 1.13-1.742.245-.638.415-1.363.465-2.428.05-1.066.06-1.405.06-4.122 0-2.717-.01-3.056-.06-4.122-.05-1.065-.22-1.79-.465-2.428-.25-.65-.584-1.196-1.13-1.742-.546-.545-1.092-.88-1.742-1.13-.638-.245-1.363-.415-2.428-.465C15.056 2.01 14.717 2 12 2zm0 2.162c2.67 0 2.987.01 4.042.06.975.045 1.504.21 1.858.344.467.182.8.398 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.857.05 1.055.06 1.373.06 4.042 0 2.67-.01 2.987-.06 4.042-.045.975-.21 1.504-.344 1.857-.182.467-.398.8-.748 1.15-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.055.05-1.373.06-4.042.06-2.67 0-2.987-.01-4.042-.06-.975-.045-1.504-.21-1.857-.344-.467-.182-.8-.398-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.353-.3-.882-.344-1.857-.05-1.055-.06-1.373-.06-4.042 0-2.67.01-2.987.06-4.042.045-.975.21-1.504.344-1.857.182-.467.398-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344C8.983 4.17 9.3 4.16 12 4.161zm0 2.676A5.162 5.162 0 1012 17.16 5.162 5.162 0 0012 6.838zM12 15a3 3 0 110-6 3 3 0 010 6zm3.536-7.7A1.182 1.182 0 1116.718 6.13a1.182 1.182 0 01-1.182 1.178z" />
                                </svg>
                            </a>

                            {/* X */}
                            <a href="https://x.com/Sharkship_india" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-black rounded-md transition-transform hover:scale-105 cursor-pointer">
                                <svg className="w-[14px] h-[14px] text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.5h-3.31l7.685-8.784L1.14 2h6.81l4.717 6.275L18.244 2zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.394z" />
                                </svg>
                            </a>

                            {/* YouTube */}
                            <a href="https://www.youtube.com/oops" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-[#FF0000] rounded-md transition-transform hover:scale-105 cursor-pointer">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21.582 6.186a2.68 2.68 0 00-1.884-1.892C18.033 3.842 12 3.842 12 3.842s-6.033 0-7.698.452a2.68 2.68 0 00-1.884 1.892C2 7.864 2 12 2 12s0 4.136.418 5.814a2.68 2.68 0 001.884 1.892c1.665.451 7.698.451 7.698.451s6.033 0 7.698-.451a2.68 2.68 0 001.884-1.892C22 16.136 22 12 22 12s0-4.136-.418-5.814zM10.02 15.113V8.887L15.42 12l-5.4 3.113z" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/company/sharkshipz/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-[#0A66C2] rounded-md transition-transform hover:scale-105 cursor-pointer">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.924 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                                </svg>
                            </a>

                        </div>
                    </div>

                    {/* Resources */}
                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-gray-900 mb-5 text-[15px]">Resources</h3>
                        <ul className="space-y-[14px] text-[13px] text-gray-700 font-medium">
                            <li className="hover:text-blue-500 cursor-pointer transition-colors pt-1">Blog</li>
                            <li className="hover:text-blue-500 cursor-pointer transition-colors pt-1">Developers</li>
                            <li className="hover:text-blue-500 cursor-pointer transition-colors pt-1">FAQ&apos;s</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-gray-900 mb-5 text-[15px]">Company</h3>
                        <ul className="space-y-[14px] text-[13px] text-gray-700 font-medium pt-1">
                            <li className="hover:text-blue-500 cursor-pointer transition-colors">About Us</li>
                            <li className="hover:text-blue-500 cursor-pointer transition-colors pt-1">Contact Us</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-4 lg:pl-4">
                        <h3 className="font-bold text-gray-900 mb-5 text-[15px]">Contact Us</h3>

                        <div className="flex items-start gap-3 text-[13px] text-gray-700 font-medium mb-4 pt-1 leading-relaxed">
                            <div className="mt-[2px]">
                                <svg className="w-5 h-5 text-[#2B9AEE]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                            </div>
                            <p className="max-w-[300px]">
                                3rd Floor, Enkay Square, Plot No. 448A, Udyog Vihar,
                                Phase 5, Sector 19, Gurgaon, Haryana, 122016
                            </p>
                        </div>

                        <div className="flex items-center gap-3 text-[13px] text-gray-700 font-medium">
                            <div className="mt-[1px]">
                                <svg className="w-5 h-5 text-[#2B9AEE]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </div>
                            <p>ewaybill@sharkship.in</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SVG Illustration wrapper (Full Width) */}
            <div className="w-full mt-10 md:mt-2 xl:mt-[-40px]">
                <Image
                    src="https://sharkship.in/_static/illustrations/footer-bg.svg"
                    alt="Delivery Illustration"
                    width={1920}
                    height={200}
                    className="w-full h-auto object-cover pointer-events-none block"
                    unoptimized
                />
            </div>

            {/* Blue Divider Line */}
            <div className="w-full h-[2px] bg-[#3eb9ff] border-t border-[#009cf0] relative z-10 -mt-[3px]"></div>

            {/* Bottom Bar */}
            <div className="w-full bg-white px-6 md:px-5 py-3">
                <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-700 gap-3">
                    <p>Copyright © 2026 Sharkship Technologies Pvt. Ltd. All rights reserved.</p>

                    <div className="flex flex-wrap gap-4 font-medium">
                        <span className="hover:text-blue-500 cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-blue-500 cursor-pointer transition-colors">Terms & Conditions</span>
                    </div>
                </div>
            </div>

        </footer>
    );
}