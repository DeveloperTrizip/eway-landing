import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactPage from "../components/Contact/ContactPage";

export const metadata = {
  title: "Contact Us - Sharkship eWayBill",
  description:
    "Get in touch with Sharkship eWayBill. Email our team, request a demo, or ask about automating your eWay Bill operations.",
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
