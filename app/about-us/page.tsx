import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About/About";

export const metadata = {
  title: "About Us - Sharkship eWayBill",
  description:
    "Learn about Sharkship eWayBill — our mission, vision, and commitment to simplifying E-Way Bill compliance for businesses across India.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <About />
      </main>
      <Footer />
    </div>
  );
}
