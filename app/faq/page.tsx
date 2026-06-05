import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ/FAQ";

export const metadata = {
  title: "FAQ - Sharkship E-Way Bill",
  description:
    "Find answers to frequently asked questions about Sharkship E-Way Bill — features, compliance, integrations, and support.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
