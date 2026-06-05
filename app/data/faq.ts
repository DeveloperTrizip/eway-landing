export type FAQCategoryId =
  | "general"
  | "features"
  | "compliance"
  | "onboarding";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: FAQCategoryId;
};

export const FAQ_CATEGORIES: {
  id: FAQCategoryId | "all";
  label: string;
}[] = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General Overview" },
  { id: "features", label: "Features & Functionality" },
  { id: "compliance", label: "Compliance & Security" },
  { id: "onboarding", label: "Onboarding & Support" },
];

export const FAQ_ITEMS: FAQItem[] = [
  // Section 1 — General Overview
  {
    id: "what-is-sharkship-ewaybill",
    category: "general",
    question: "What is Sharkship eWayBill?",
    answer:
      "Sharkship eWayBill is an intelligent E-Way Bill management platform that helps businesses automate, manage, extend, and track EWBs from one centralized dashboard.",
  },
  {
    id: "who-is-it-for",
    category: "general",
    question: "Who is this platform built for?",
    answer:
      "Sharkship eWayBill is designed for:\n• Logistics companies\n• Transporters\n• Manufacturers\n• Distributors\n• E-commerce businesses\n• Warehousing companies\n• 3PL & supply chain operators",
  },
  {
    id: "gst-government-portal",
    category: "general",
    question: "Is Sharkship eWayBill a GST government portal?",
    answer:
      "No. Sharkship eWayBill is an operational compliance platform built on top of the existing GST ecosystem to simplify and automate EWB workflows.",
  },
  {
    id: "why-ewb-platform",
    category: "general",
    question: "Why do businesses need an EWB management platform?",
    answer:
      "Managing EWBs manually at scale leads to:\n• Expiry risks\n• Human errors\n• Delayed extensions\n• Operational inefficiencies\n• Compliance penalties\n\nSharkship simplifies these workflows through automation and centralized visibility.",
  },
  {
    id: "enterprise-suitable",
    category: "general",
    question: "Is the platform suitable for enterprise logistics teams?",
    answer:
      "Yes. Sharkship is built for both growing businesses and high-volume enterprise operations.",
  },
  {
    id: "available-across-india",
    category: "general",
    question: "Is Sharkship eWayBill available across India?",
    answer:
      "Yes. The platform is designed for businesses operating anywhere within India's GST logistics ecosystem.",
  },

  // Section 2 — Features & Functionality
  {
    id: "what-can-i-do",
    category: "features",
    question: "What can I do with Sharkship eWayBill?",
    answer:
      "You can:\n• Generate EWBs\n• Extend EWBs\n• Track expiring bills\n• Manage all EWBs from one dashboard\n• Perform bulk operations\n• Upload via Excel\n• Get expiry alerts\n• Manage users & permissions\n• Generate reports",
  },
  {
    id: "bulk-operations",
    category: "features",
    question: "Does Sharkship support bulk EWB operations?",
    answer:
      "Yes. You can perform bulk EWB creation, updates, and extensions through Excel uploads and automated workflows.",
  },
  {
    id: "automate-extensions",
    category: "features",
    question: "Can I automate EWB extensions?",
    answer:
      "Yes. Sharkship supports scheduled and automated EWB extension workflows to reduce manual dependency.",
  },
  {
    id: "expiry-alerts",
    category: "features",
    question: "Will I receive alerts before an EWB expires?",
    answer:
      "Absolutely. Smart notifications and expiry alerts help your team act before compliance issues occur.",
  },
  {
    id: "multi-user-access",
    category: "features",
    question: "Can multiple team members access the platform?",
    answer:
      "Yes. Sharkship supports role-based multi-user access for operations, finance, warehouse, and compliance teams.",
  },
  {
    id: "irn-based-ewb",
    category: "features",
    question: "Does the platform support IRN-based EWB generation?",
    answer:
      "Yes. You can generate EWBs directly through invoice/IRN workflows where applicable.",
  },
  {
    id: "multiple-gstins",
    category: "features",
    question: "Can I manage multiple GSTINs?",
    answer:
      "Yes. Businesses operating across multiple entities or locations can manage multiple GSTINs centrally.",
  },

  // Section 3 — Compliance & Security
  {
    id: "gst-compliant",
    category: "compliance",
    question: "Is Sharkship compliant with GST regulations?",
    answer:
      "Yes. The platform is designed around current GST and EWB operational workflows.",
  },
  {
    id: "data-security",
    category: "compliance",
    question: "Is my GST and shipment data secure?",
    answer:
      "Yes. Data security and controlled access are core priorities within the platform architecture.",
  },

  // Onboarding & Support
  {
    id: "onboarding-time",
    category: "onboarding",
    question: "How long does onboarding take?",
    answer:
      "Onboarding timelines depend on operational complexity, but most businesses can get started quickly.",
  },
  {
    id: "request-demo",
    category: "onboarding",
    question: "Can I request a demo?",
    answer:
      "Yes. You can book a live demo directly through the website.",
  },
];

export function getCategoryCount(
  categoryId: FAQCategoryId | "all",
  items: FAQItem[] = FAQ_ITEMS
): number {
  if (categoryId === "all") return items.length;
  return items.filter((item) => item.category === categoryId).length;
}
