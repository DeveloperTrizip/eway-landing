"use client";
import React from "react";
import PremiumCarousel from "./ui/premium-carousel";

const services = [
    {
        title: "Seamless Data Management",
        subtitle: "Real-time synchronization for all e-Way Bill actions. Access and manage your data across systems seamlessly with advanced cloud integration.",
        description: "Experience the power of instant synchronization. Our system ensures that every action taken on an e-Way Bill is reflected across all your platforms in milliseconds. With cloud-native architecture, your data remains accessible, secure, and perfectly synchronized, eliminating manual reconciliation and reducing errors by up to 99%.",
        image: "/seamless.png",
        color: "#184FA2",
        badge: "Seamless Sync"
    },
    {
        title: "Smart Notifications",
        subtitle: "Automated alerts for eWB extension requirements. Stay ahead with intelligent push notifications, SMS, and email alerts.",
        description: "Never miss a compliance deadline again. Our intelligent engine monitors every e-Way Bill and triggers multi-channel alerts (SMS, Email, WhatsApp) exactly when action is needed. Custom threshold settings allow you to define when you want to be notified, ensuring you stay ahead of expirations without being overwhelmed by noise.",
        image: "/smart_notification.png",
        color: "#27AAE2",
        badge: "Automated Alerts"
    },
    {
        title: "Warehouse Assignment",
        subtitle: "Assign shipments to specialized hubs to ignore daily extensions. Smart logic optimizes routing and storage durations.",
        description: "Optimize your logistics flow with strategic warehouse assignment. By routing shipments through specialized hubs, you can bypass the need for daily manual extensions. Our smart logic analyzes route distance and warehouse capacity to pick the most efficient storage point, saving hours of administrative work and improving delivery timelines.",
        image: "/warehouse_assignment.png",
        color: "#184FA2",
        badge: "Smart Hubs"
    },
    {
        title: "Reached at Destination",
        subtitle: "Autonomous extension of EWB which need to be updated till the unloading point. Maintain precise GPS location tracking.",
        description: "Automate the final mile compliance. Our system detects when a vehicle enters the geofence of the destination and automatically handles EWB extensions until the actual unloading is completed. Integrated GPS tracking provides real-time proof of delivery and ensures compliance even if unloading is delayed beyond initial estimates.",
        image: "/reached_destination.png",
        color: "#27AAE2",
        badge: "GPS Tracking"
    },
    {
        title: "Bulk Operations",
        subtitle: "Bulk upload functionality for faster processing. Handle thousands of invoices simultaneously with our high-speed engine.",
        description: "Scalability at your fingertips. Process thousands of E-way bills in seconds using our robust bulk upload engine. Whether it's 10 or 10,000 invoices, our high-speed processing unit validates data instantly and manages error handling gracefully, allowing your team to focus on exception management rather than manual data entry.",
        image: "/bulk_operation.png",
        color: "#184FA2",
        badge: "High Speed"
    },
    {
        title: "Schedule Extension Window",
        subtitle: "Schedule extension 4 hours before the window closes. Proactive compliance ensures your logistics never stops moving.",
        description: "Stay proactive with automated scheduling. Set your e-Way Bill extensions to trigger automatically 4 hours before the window closes. This 'safety net' ensures that even with unexpected delays or off-hour expiries, your transport remains compliant throughout its journey, avoiding costly fines and transit delays.",
        image: "/schedule_extension.png",
        color: "#27AAE2",
        badge: "Proactive Compliance"
    },
    {
        title: "User-Based Access Control",
        subtitle: "Customer visibility based on specific user roles. Granular permissions protect your enterprise data with high-grade security.",
        description: "Security that scales with your organization. Implement strict data segregation with role-based access control. Define exactly what your staff, vendors, and clients can see and do. With enterprise-grade encryption and detailed activity logs, you maintain full visibility into who accessed what data and when.",
        image: "/user_based.png",
        color: "#184FA2",
        badge: "Ironclad Security"
    },
    {
        title: "Admin Control",
        subtitle: "Centralized control to manage and register users. Advanced reporting and audit logs for comprehensive governance.",
        description: "Master your ecosystem with centralized governance. Admins get a bird's-eye view of all system activities, from user registrations to system-wide settings. Generate comprehensive audit logs for compliance reviews and manage multiple branches or entities from a single, unified dashboard designed for large-scale enterprise needs.",
        image: "/admin_control.png",
        color: "#27AAE2",
        badge: "Full Control"
    },
    {
        title: "Reporting & Sharing",
        subtitle: "Single-click report download. Securely share eWB PDFs and analytics directly with vendors via encrypted links.",
        description: "Transform data into actionable insights. Generate detailed reports with a single click and share them securely via encrypted permanent links. No more attachment size limits or messy email chains. Track when your shared reports are viewed and maintain a professional communication standard with automated PDF generation and delivery.",
        image: "/reporting and sharing.png",
        color: "#184FA2",
        badge: "Secure Sharing"
    }
];

const Core = () => {
    const Header = (
        <div className="relative z-20 text-center px-4 mb-8 md:mb-12">
            <h4 className="text-[#184FA2] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-[14px] mb-3 opacity-90">Core Features</h4>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#184FA2] tracking-tighter mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 drop-shadow-sm">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#184FA2] to-[#27AAE2]">Core Capabilities</span>
            </h2>
            <div className="w-[80px] md:w-[120px] h-[4px] bg-gradient-to-r from-[#184FA2] to-[#27AAE2] mx-auto rounded-full shadow-sm" />
        </div>
    );

    return (
        <section
            id="capabilities"
            className="relative w-full bg-[#fbfdff] overflow-hidden select-none py-4 md:py-8 lg:py-10"
        >
            {/* Animated Mesh Background Elements for Glassmorphism */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-15%] right-[-5%] w-[600px] h-[600px] bg-[#27AAE2]/15 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] bg-[#184FA2]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
                <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-[#27AAE2]/5 rounded-full blur-[80px]" />
            </div>

            <PremiumCarousel
                cards={services}
                header={Header}
            />
        </section>
    );
};

export default Core;