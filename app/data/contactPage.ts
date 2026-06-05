import { BOOK_DEMO_HREF } from "./routes";

export const CONTACT_HERO = {
  heading: "Get in Touch",
  subheading:
    "Have questions about Sharkship eWayBill? Our team is here to help you automate eWay Bill management and streamline compliance.",
};

export const CONTACT_QUICK_CARDS = [
  {
    id: "email",
    title: "Email Us",
    primary: "support@sharkship.in",
    secondary: null,
    href: "mailto:support@sharkship.in",
  },
  {
    id: "sales",
    title: "Talk to Sales",
    primary: "Book a personalized demo",
    secondary: null,
    href: BOOK_DEMO_HREF,
  },
] as const;

export const CONTACT_FORM_COPY = {
  headline: "Let's Talk About Your eWay Bill Operations",
  subtext:
    "Tell us about your requirements and our team will get back to you shortly.",
};

export const MONTHLY_EWB_OPTIONS = [
  "Less than 100",
  "100 – 500",
  "500 – 2,000",
  "2,000 – 10,000",
  "10,000+",
] as const;

export const CONTACT_WHY_CHOOSE = [
  {
    title: "Automated eWay Bill Generation",
    description: "Generate EWBs instantly with streamlined workflows.",
  },
  {
    title: "Bulk Upload & API Integration",
    description: "Scale operations with Excel uploads and API connectivity.",
  },
  {
    title: "Expiry Alerts & Compliance Tracking",
    description: "Stay ahead of deadlines with smart compliance alerts.",
  },
  {
    title: "Real-Time Monitoring",
    description: "Track every EWB status from one unified dashboard.",
  },
  {
    title: "Reports & Analytics",
    description: "Get actionable insights with advanced reporting tools.",
  },
  {
    title: "Dedicated Support",
    description: "Our team is here to help you every step of the way.",
  },
] as const;

export const CONTACT_FAQ_PREVIEW = [
  {
    id: "get-started",
    question: "How quickly can I get started?",
    answer: "Most businesses can get started within a few days.",
  },
  {
    id: "bulk-generation",
    question: "Does Sharkship support bulk eWay Bill generation?",
    answer: "Yes, through bulk upload and API integrations.",
  },
  {
    id: "expiry-tracking",
    question: "Can I track expiry dates?",
    answer: "Yes, automated alerts help you stay compliant.",
  },
  {
    id: "mobile-app",
    question: "Is there a mobile app available?",
    answer: "Yes, Sharkship eWayBill is available on both web and mobile.",
  },
] as const;

export const CONTACT_FINAL_CTA = {
  heading: "Ready to Simplify eWay Bill Management?",
  subheading:
    "Book a personalized demo and see Sharkship eWayBill in action.",
};
