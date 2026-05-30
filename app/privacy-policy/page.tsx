import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PolicyLayout from "../components/Legal/PolicyLayout";
import PolicyPageContent from "../components/Legal/PolicyPageContent";
import { policyMeta } from "../data/privacyPolicy";

export const metadata = {
  title: `${policyMeta.documentTitle} - Sharkship`,
  description:
    "Privacy Policy, Terms & Conditions, Cookie Policy, and general provisions for Sharkship eWayBill.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow scroll-smooth">
        <PolicyLayout>
          <PolicyPageContent />
        </PolicyLayout>
      </main>
      <Footer />
    </div>
  );
}
